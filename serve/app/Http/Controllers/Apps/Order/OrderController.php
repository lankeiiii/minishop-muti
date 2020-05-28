<?php

namespace App\Http\Controllers\Apps\Order;

use App\Events\Order\OrderCloseEvent;
use App\Events\Order\OrderRefundRecordCreateEvent;
use App\Events\Order\OrderRefundRefuseEvent;
use App\Events\Order\OrderRefundSuccessEvent;
use App\Events\Shop\Sms\SmsSendEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Order\AdminOrderUpdateRequest;
use App\Http\Resources\Order\AdminOrderDetail;
use App\Http\Resources\Order\OrderCollection;
use App\Http\Resources\OrderRefundRecord\OrderRefundRecordResource;
use App\Models\Order;
use App\Models\OrderAddress;
use App\Models\OrderPayment;
use App\Models\OrderRefundRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $shop = $request->get('ori_shop');
        $orders = $shop->orders();
        $orders = $orders->orderBy('created_at', 'desc');
        if ($name = $request->get('name')) {
            $orders_id = OrderAddress::where('name', 'like', "%{$name}%")->pluck('order_id');
            $orders = $orders->whereIn('id', $orders_id);
        }
        if ($no = $request->get('no')) {
            $orders = $orders->where('no', 'like', "%{$no}%");
        }
        if ($status = $request->get('status')) {
            switch ($status) {
                //待付款
                case Order::ORDER_STATUS_PENDING:
                    $orders = $orders->where('status', Order::ORDER_STATUS_PENDING);
                    break;
                //待发货
                case Order::ORDER_STATUS_PROCESSING:
                    $orders = $orders->where('status', Order::ORDER_STATUS_PROCESSING)->where('refund_status', null);
                    break;
                //已发货
                case Order::ORDER_STATUS_PARTIAL:
                case Order::ORDER_STATUS_SENT:
                    $orders = $orders->whereIn('status', [Order::ORDER_STATUS_PARTIAL, Order::ORDER_STATUS_SENT])->where('refund_status', null);
                    break;
                //退款中
                case Order::REFUND_STATUS_REFUNDING:
                    $orders = $orders->where('refund_status', Order::REFUND_STATUS_REFUNDING);
                    break;
            }
        }
        $orders = $orders->paginate($request->get('pageSize'));
        return $this->jsonSuccessResponse(new OrderCollection($orders));
    }

    public function show(Request $request)
    {
        $shop = $request->get('ori_shop');
        $order = $shop->orders()->findOrFail($request->route()->parameter('order'));
        return $this->jsonSuccessResponse(new AdminOrderDetail($order));
    }

    public function status(Request $request)
    {
        $shop = $request->get('ori_shop');
        $order = $shop->orders()->findOrFail($request->route()->parameter('order'));
        $customer = $order->customer;
        $data = ["order_no" => $order['no']];
        if ($request->has("status")) {
            switch ($request->get('status')) {
                case "closed":
                    event(new OrderCloseEvent($order, $request->get('reason') ?: "商家关闭订单"));
                    event(new SmsSendEvent($shop['id'], $customer['mobile'], "order_cancel", $data));
                    break;
                case "refunded":
                    event(new OrderRefundSuccessEvent($order, $request->get('reason')));
                    event(new SmsSendEvent($shop['id'], $customer['mobile'], "order_refund", $data));
                    break;
                case "refund_refuse":
                    event(new OrderRefundRefuseEvent($order, $request->get('reason')));
                    event(new SmsSendEvent($shop['id'], $customer['mobile'], "order_refund", $data));
                    break;
                default:
                    return $this->jsonErrorResponse(404, "无此状态码");
                    break;
            }
            return $this->jsonSuccessResponse();
        } else {
            return $this->jsonErrorResponse(404, "状态必须填写");
        }
    }

    public function update(AdminOrderUpdateRequest $request)
    {
        $shop = $request->get('ori_shop');
        $order = $shop->orders()->findOrFail($request->route()->parameter('order'));
        if ($request->has('address')) {
            $address = $request->get('address');
            if (!isset($address['name']) && is_null($address['name'])) return $this->jsonErrorResponse(405, "姓名 不能为空");
            if (!isset($address['province']) && is_null($address['province'])) return $this->jsonErrorResponse(405, "省 不能为空");
            if (!isset($address['city']) && is_null($address['city'])) return $this->jsonErrorResponse(405, "市 不能为空");
            if (!isset($address['detail']) && is_null($address['detail'])) return $this->jsonErrorResponse(405, "详细地址 不能为空");
            if (!isset($address['mobile']) && is_null($address['mobile'])) return $this->jsonErrorResponse(405, "手机 不能为空");

            $address = [
                'name' => $address['name'],
                'province' => $address['province'],
                'city' => $address['city'],
                'district' => isset($address['district']) ? $address['district'] : "",
                'detail' => $address['detail'],
                'mobile' => $address['mobile'],
            ];
            $order->address->update($address);
        }
        if ($request->has('amount')) {
            if ($order->status != Order::ORDER_STATUS_PENDING)
                return $this->jsonErrorResponse(405, "订单不允许更改价格");
            $order->amount = $request->get('amount');
            if ($order->amount == 0) {
                $order->status = Order::ORDER_STATUS_PROCESSING;
            }
            $order->save();
        }
        return $this->jsonSuccessResponse();
    }

    public function refund_record_list(Request $request)
    {
        $shop = $request->get('ori_shop');
        $order = $shop->orders()->findOrFail($request->route()->parameter('order'));
        $order_amount = $order['amount'];
        $refund_amount_pending = $order->refund_records()->where('status', OrderRefundRecord::RECORD_STATUS_PENDING)->sum('amount');
        $refund_amount_success = $order->refund_records()->where('status', OrderRefundRecord::RECORD_STATUS_SUCCESS)->sum('amount');
        $refund_records = $order->refund_records;

        $rs = [
            "order_amount" => $order_amount,
            "refund_amount_pending" => $refund_amount_pending,
            "refund_amount_success" => $refund_amount_success,
            "refund_amount_rest" => $order_amount - $refund_amount_pending - $refund_amount_success,
            "refund_record_list"=> OrderRefundRecordResource::collection($refund_records)
        ];
        return $this->jsonSuccessResponse($rs);
    }

    public function refund_record_store(Request $request)
    {
        $shop = $request->get('ori_shop');
        $order = $shop->orders()->findOrFail($request->route()->parameter('order'));
        $payment = $order->payments()->where('status',OrderPayment::PAYMENT_STATUS_SUCCESS)->first();
        if(!$payment) return $this->jsonErrorResponse(422,"该订单未存在支付，无法进行退款");
        $validator = Validator::make($request->all(),[
            "amount"=>"required|numeric",
            "content"=>"required"
        ]);
        if ($validator->fails()) {
            return $this->jsonSuccessResponse($validator->errors()->first());
        } else {
            $data = $validator->validate();
            $order_amount = $order['amount'];
            $refund_amount_pending = $order->refund_records()->where('status', OrderRefundRecord::RECORD_STATUS_PENDING)->sum('amount');
            $refund_amount_success = $order->refund_records()->where('status', OrderRefundRecord::RECORD_STATUS_SUCCESS)->sum('amount');
            $refund_amount_rest = $order_amount - $refund_amount_pending - $refund_amount_success;
            if($data['amount'] > $refund_amount_rest) return $this->jsonErrorResponse(422,"退款总金额不能超过订单支付总金额");
            event(new OrderRefundRecordCreateEvent($order,$data));
            return $this->jsonSuccessResponse();
        }
    }
}
