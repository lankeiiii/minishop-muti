(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-167c063d"],{"572f":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"order-top-button"},[s("el-button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]),-1===["processing","sent","partial","success"].indexOf(t.status)||t.refund_status?t._e():s("el-button",{attrs:{type:"info"},on:{click:function(e){return t.refundOrder("refunded")}}},[t._v("退单")]),"pending"===t.status?s("el-button",{attrs:{type:"info"},on:{click:t.closedOrder}},[t._v("关闭订单")]):t._e(),"refunding"===t.refund_status?s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.refundOrder("refunded")}}},[t._v("同意退单")]):t._e(),"refunding"===t.refund_status?s("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.refundOrder("refund_refuse")}}},[t._v("拒绝退单")]):t._e()],1),s("div",{staticClass:"order-top",staticStyle:{width:"calc(100% - 5px)"}},[s("el-steps",{attrs:{active:t.status_active,"finish-status":"cancel"===t.status||"closed"===t.status||"refunded"===t.status?"wait":"success",simple:""}},t._l(t.status_processes,(function(t,e){return s("el-step",{key:e,attrs:{title:t.value}})})),1)],1),s("div",{staticClass:"order-contain"},[s("div",{staticClass:"order-main"},[s("div",[s("div",{staticClass:"order-block-title"},[s("strong",[t._v("商品详情")]),"processing"==t.status?s("el-button",{staticStyle:{padding:"5px 10px","margin-left":"20px"},attrs:{type:"primary"},on:{click:t.openSendDialog}},[t._v("发货")]):t._e()],1),t._l(t.items,(function(e,n){return s("div",{key:n,staticClass:"order_items"},[s("div",{staticClass:"order_items_img"},[s("el-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:e.img_url,fit:"contain"}})],1),s("div",{staticClass:"order_items_info"},[s("div",[t._v(t._s(e.product_title))]),s("div",[t._v("规格："+t._s(e.variant_title))])]),s("div",{staticClass:"order_items_quantity"},[s("div",[t._v("¥ "),s("strong",[t._v(t._s(e.price))]),t._v(" x "),s("strong",[t._v(t._s(e.quantity))])]),s("div",[t._v("总计：¥ "+t._s(e.total))])])])})),s("div",{staticClass:"order-price-list"},[s("div",[s("div",[t._v("商品总计：")]),s("div",[t._v("¥ "+t._s(t.items_amount))])]),s("div",[s("div",[t._v("运费总计：")]),s("div",[t._v("¥ "+t._s(t.shipments_amount))])]),s("div",[s("div",[t._v("优惠总计：")]),s("div",[t._v("-¥ "+t._s(t.discounts_amount))])]),s("div",[s("div",[t._v("订单总计：")]),t.ori_amount==t.amount?s("div",[t._v("¥ "),s("strong",[t._v(t._s(t.amount))])]):s("div",[s("div",{staticStyle:{"text-decoration":"line-through"}},[t._v("¥ "+t._s(t.ori_amount))]),s("div",[t._v("¥ "),s("strong",[t._v(t._s(t.amount))])])])]),"pending"==t.status?s("div",[s("el-button",{staticStyle:{float:"right",padding:"3px 0","margin-right":"10px"},attrs:{type:"text"},on:{click:t.updatePriceOrder}},[t._v("修改价格")])],1):t._e()])],2),s("div",{staticClass:"order-remark"},[t._m(0),s("div",{staticStyle:{padding:"10px"}},[t._v(t._s(t.remark?t.remark:"暂无"))])])]),s("div",{staticClass:"order-subside"},[s("div",{staticClass:"order-subside-card"},[s("div",{staticClass:"order-block-title"},[t._v("订单信息")]),s("div",{staticClass:"order-block-content"},[s("div",[s("div",[t._v("订单编号：")]),s("div",[t._v(t._s(t.no))])]),t.payment?s("div",[s("div",[t._v("支付方式：")]),s("div",[t._v(t._s(t.payment.payment_method))])]):t._e(),t.payment?s("div",[s("div",[t._v("支付时间：")]),s("div",[t._v(t._s(t.payment.created_at))])]):t._e()])]),s("div",{staticClass:"order-subside-card"},[s("div",{staticClass:"order-block-title"},[t._v("客户信息")]),s("div",{staticClass:"order-block-content"},[s("div",[s("div",[t._v("用户名：")]),s("div",[t._v(t._s(t.customer.username))])]),s("div",[s("div",[t._v("手机号：")]),s("div",[t._v(t._s(t.customer.mobile))])])])]),s("div",{staticClass:"order-subside-card"},[s("div",{staticClass:"order-block-title"},[t._v("配送信息")]),s("div",{staticClass:"order-block-content"},[s("div",[s("div",[t._v("姓名：")]),s("div",[t._v(t._s(t.address.name))])]),s("div",[s("div",[t._v("地址：")]),s("div",[t._v(t._s(t.address.address))])]),s("div",[s("div",[t._v("电话：")]),s("div",[t._v(t._s(t.address.mobile))])]),s("div",[s("div",[t._v("邮编：")]),s("div",[t._v(t._s(t.address.zip))])])])]),s("div",{staticClass:"order-subside-card"},[s("div",{staticClass:"order-block-title"},[t._v("配送列表")]),0!==t.shipments.length?s("div",[s("el-collapse",t._l(t.shipments,(function(e,n){return s("el-collapse-item",{key:n,attrs:{title:"配送"+(n+1),name:n}},[s("div",[t._v("配送方式："+t._s(e.shipment_company))]),s("div",[t._v("配送单号："+t._s(e.shipment_no))]),s("div",[s("ul",t._l(e.items,(function(e,n){return s("li",{key:n},[t._v(t._s(e.product_title)+" [规格]"+t._s(e.variant_title)+" x "+t._s(e.quantity))])})),0)])])})),1)],1):s("div",{staticStyle:{padding:"10px"}},[t._v("还未配送")])])])]),s("el-dialog",{attrs:{title:"发货",visible:t.sendDialogShow},on:{"update:visible":function(e){t.sendDialogShow=e}}},[s("el-form",{attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"配送公司"}},[s("el-input",{model:{value:t.sendInfo.shipment_company,callback:function(e){t.$set(t.sendInfo,"shipment_company",e)},expression:"sendInfo.shipment_company"}})],1),s("el-form-item",{attrs:{label:"配送号码"}},[s("el-input",{model:{value:t.sendInfo.shipment_no,callback:function(e){t.$set(t.sendInfo,"shipment_no",e)},expression:"sendInfo.shipment_no"}})],1),s("div",{staticStyle:{"text-align":"right"}},[s("el-button",{on:{click:function(e){t.sendDialogShow=!1}}},[t._v("取消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.sendOrder}},[t._v("发货")])],1)],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-block-title"},[s("strong",[t._v("客户备注")])])}],i=(s("d81d"),s("f8b7")),r={data:function(){return{id:null,no:null,customer:{},items:{},payment:{},address:{},shipments:[],items_amount:null,discounts_amount:null,shipments_amount:null,amount:null,ori_amount:null,status:null,status_value:null,refund_at:null,refund_status:null,refund_status_value:null,remark:null,send_at:null,pay_at:null,success_at:null,created_at:null,status_active:0,status_processes:[],sendDialogShow:!1,sendInfo:{shipment_company:null,shipment_no:null}}},methods:{getData:function(){var t=this;Object(i["a"])(this.$route.query.id).then((function(e){var s=e.data.body;switch(t.id=t.$route.query.id,t.no=s.no,t.customer=s.customer,t.items=s.items,t.payment=s.payment,t.address=s.address,t.shipments=s.shipments,t.items_amount=s.items_amount,t.discounts_amount=s.discounts_amount,t.shipments_amount=s.shipments_amount,t.amount=s.amount,t.ori_amount=s.ori_amount,t.status=s.status,t.status_value=s.status_value,t.refund_status=s.refund_status,t.refund_status_value=s.refund_status_value,t.refund_at=s.refund_at,t.remark=s.remark,t.send_at=s.send_at,t.pay_at=s.pay_at,t.success_at=s.success_at,t.created_at=s.created_at,s.status){case"pending":t.status_active=1,t.status_processes=[{value:"订单创建"},{value:"订单支付"},{value:"配送中"},{value:"已完成"}];break;case"processing":t.status_active=2,t.status_processes=[{value:"订单创建"},{value:"订单支付"},{value:"配送中"},{value:"已完成"}];break;case"partial":case"sent":t.status_active=3,t.status_processes=[{value:"订单创建"},{value:"订单支付"},{value:"配送中"},{value:"已完成"}];break;case"success":t.status_active=4,t.status_processes=[{value:"订单创建"},{value:"订单支付"},{value:"配送中"},{value:"已完成"}];break;case"cancel":t.status_active=2,t.status_processes=[{value:"订单创建"},{value:"已取消"}];break;case"closed":t.status_active=2,t.status_processes=[{value:"订单创建"},{value:"已关闭"}];break}})).catch((function(){t.$message.warning("参数错误"),t.$router.push({name:"OrderList"})}))},refundOrder:function(t){var e=this;this.$prompt("请输入理由","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(s){var n=s.value;Object(i["d"])(e.id,{status:t,reason:n}).then((function(){e.$message.success("退单成功"),e.getData()}))})).catch((function(){e.$message({type:"info",message:"已取消"})}))},closedOrder:function(){var t=this;this.$confirm("此操作将取消该订单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["d"])(t.id,{status:"closed"}).then((function(){t.$message.success("关闭成功"),t.getData()}))})).catch((function(){t.$message({type:"info",message:"已取消"})}))},updatePriceOrder:function(){var t=this;this.$prompt("请输入价格","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(e){var s=e.value;Object(i["e"])(t.id,{amount:s}).then((function(){t.$message.success("修改成功"),t.getData()}))})).catch((function(){t.$message({type:"info",message:"已取消"})}))},openSendDialog:function(){this.sendDialogShow=!0,this.sendInfo.shipment_company="",this.sendInfo.shipment_no=""},sendOrder:function(){var t=this,e=[];this.items.map((function(t){e.push({variant_id:t.variant_id,quantity:t.quantity})})),this.sendInfo.items=e,Object(i["c"])(this.id,this.sendInfo).then((function(){t.$message.success("发货成功"),t.sendDialogShow=!1,t.getData()}))}},created:function(){this.$route.query.id?this.getData():(this.$message.warning("参数错误"),this.$router.push({name:"OrderList"}))}},u=r,o=(s("951f"),s("2877")),d=Object(o["a"])(u,n,a,!1,null,"ff6485b6",null);e["default"]=d.exports},"951f":function(t,e,s){"use strict";var n=s("ba7a"),a=s.n(n);a.a},ba7a:function(t,e,s){},f8b7:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return i})),s.d(e,"d",(function(){return r})),s.d(e,"e",(function(){return u})),s.d(e,"c",(function(){return o}));var n=s("b775");function a(t){return Object(n["a"])({url:"order",method:"get",params:t})}function i(t){return Object(n["a"])({url:"order/"+t,method:"get"})}function r(t,e){return Object(n["a"])({url:"order/status/"+t,method:"put",data:e})}function u(t,e){return Object(n["a"])({url:"order/"+t,method:"put",data:e})}function o(t,e){return Object(n["a"])({url:"order/"+t+"/shipment",method:"post",data:e})}}}]);