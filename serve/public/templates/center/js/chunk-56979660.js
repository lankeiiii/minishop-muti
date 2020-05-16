(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56979660"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"762f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"table-header"},[a("div",{staticClass:"table-header-item"},[a("div",[t._v("订单状态")]),a("el-radio-group",{attrs:{size:"small"},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}},[a("el-radio-button",{attrs:{label:""}},[t._v("全部")]),t._l(t.status,(function(e,s){return a("el-radio-button",{key:s,attrs:{label:e.type}},[t._v(t._s(e.value))])}))],2)],1),a("div",{staticClass:"table-header-item"},[a("div",[t._v("搜索")]),a("el-input",{staticClass:"input-with-select",attrs:{size:"medium"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}},[a("el-option",{attrs:{label:"收件人",value:"name"}}),a("el-option",{attrs:{label:"订单号",value:"no"}}),a("el-option",{attrs:{label:"电话",value:"mobile"}})],1)],1)],1),a("div",{staticClass:"table-header-item",staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{size:"small"},on:{click:t.reset}},[t._v("重置")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.toSearch}},[t._v("搜索")])],1)]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"background-color":"#fff","border-radius":"5px"}},[t.loading||0!==t.orderData.length?t._e():a("div",{staticClass:"loading-placeholder",staticStyle:{"min-height":"350px"}},[t._v("暂无订单")]),t._l(t.orderData,(function(e,s){return a("div",{key:s,staticClass:"order-item"},[a("div",{staticClass:"order-header"},[a("strong",{staticStyle:{"margin-right":"10px"},on:{click:function(a){return t.toDetail(e)}}},[t._v(t._s(e.no))]),"pending"===e.status?a("el-tag",{attrs:{type:"warning"}},[t._v(t._s(e.status_value))]):"processing"===e.status?a("el-tag",{attrs:{type:"primary"}},[t._v(t._s(e.status_value))]):"sent"===e.status?a("el-tag",{attrs:{type:"success",effect:"dark"}},[t._v(t._s(e.status_value))]):"partial"===e.status?a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.status_value))]):"refunding"===e.status?a("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v(t._s(e.status_value))]):"refunded"===e.status?a("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.status_value))]):"cancel"===e.status||"closed"===e.status?a("el-tag",{attrs:{type:"info"}},[t._v(t._s(e.status_value))]):"success"===e.status?a("el-tag",{attrs:{type:"primary",effect:"dark"}},[t._v(t._s(e.status_value))]):a("el-tag",{attrs:{type:"info",effect:"dark"}},[t._v(t._s(e.status_value))]),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.created_at))])],1),a("div",{staticClass:"order-content-main"},[a("div",{staticClass:"order-content-main-item",staticStyle:{width:"calc(100% - 202px)"}},[a("div",{staticClass:"order-content-main-item__address"},[a("div",{staticClass:"order-content-main-item__title",staticStyle:{width:"70px"}},[t._v("收件信息")]),a("div",{staticStyle:{width:"calc(100% - 70px)"}},[a("div",[t._v(t._s(e.name)+" | "+t._s(e.mobile))]),a("div",[t._v(t._s(e.address))])])]),a("div",{staticClass:"order-content-main-item__address"},[a("div",{staticClass:"order-content-main-item__title",staticStyle:{width:"70px"}},[t._v("买家留言")]),a("div",{staticStyle:{width:"calc(100% - 70px)"}},[t._v(t._s(e.remark))])])]),a("div",{staticClass:"order-content-main-item",staticStyle:{width:"100px"}},[a("div",{staticClass:"order-content-main-item__title"},[t._v("支付方式")]),a("div",[t._v(t._s(e.payment))])]),a("div",{staticClass:"order-content-main-item",staticStyle:{width:"100px"}},[a("div",{staticClass:"order-content-main-item__title"},[t._v("订单金额")]),a("div",[a("strong",[t._v("¥ "+t._s(e.amount))])])])]),t._l(e.items,(function(e,s){return a("div",{key:s,staticClass:"order-content-items"},[a("el-image",{staticStyle:{width:"80px",height:"80px"},attrs:{src:e.img_url,fit:"scale-down"}}),a("div",{staticStyle:{width:"calc(100% - 310px)",margin:"0 10px"}},[a("div",[t._v(t._s(e.product_title))]),a("div",[t._v(t._s(e.variant_title))])]),a("div",{staticStyle:{width:"100px","margin-right":"10px"}},[a("span",[t._v("¥ "+t._s(e.price))])]),a("div",{staticStyle:{width:"100px"}},[t._v("x "+t._s(e.quantity))])],1)}))],2)})),a("el-pagination",{staticStyle:{"text-align":"center",padding:"40px 0"},attrs:{"current-page":t.query.page,"page-sizes":[15,30,50,100],"page-size":t.query.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],2)])},i=[],r=(a("ac1f"),a("841c"),a("f8b7")),n={data:function(){return{orderData:[],loading:!1,query:{status:"",no:"",name:"",mobile:"",page:1,pageSize:15},total:0,status:[{type:"pending",value:"待支付"},{type:"processing",value:"待发货"},{type:"sent",value:"已发货"},{type:"refunding",value:"退款中"}],searchType:"name",search:""}},methods:{getData:function(){var t=this;this.loading=!0,Object(r["b"])(this.query).then((function(e){t.orderData=e.data.body.data,t.total=e.data.body.page.total,t.loading=!1})).catch((function(){t.loading=!1}))},handleSizeChange:function(t){this.query.pageSize=t,this.query.page=1,this.getData()},handleCurrentChange:function(t){this.query.page=t,this.getData()},toSearch:function(){this.query.page=1,this.query[this.searchType]=this.search,console.log(this.query),this.getData()},reset:function(){this.query.status="",this.query.page=1,this.query.value="",this.query.type="",this.getData()},toDetail:function(t){this.$router.push({name:"OrderDetail",query:{id:t.id}})}},created:function(){this.$route.query.status&&(this.query.status=this.$route.query.status),this.getData()}},l=n,c=(a("a7f9"),a("ea50"),a("2877")),u=Object(c["a"])(l,s,i,!1,null,"7757854c",null);e["default"]=u.exports},"841c":function(t,e,a){"use strict";var s=a("d784"),i=a("825a"),r=a("1d80"),n=a("129f"),l=a("14c3");s("search",1,(function(t,e,a){return[function(e){var a=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a):new RegExp(e)[t](String(a))},function(t){var s=a(e,t,this);if(s.done)return s.value;var r=i(t),c=String(this),u=r.lastIndex;n(u,0)||(r.lastIndex=0);var o=l(r,c);return n(r.lastIndex,u)||(r.lastIndex=u),null===o?-1:o.index}]}))},a4ce:function(t,e,a){},a7f9:function(t,e,a){"use strict";var s=a("aea1"),i=a.n(s);i.a},aea1:function(t,e,a){},ea50:function(t,e,a){"use strict";var s=a("a4ce"),i=a.n(s);i.a},f8b7:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return n})),a.d(e,"e",(function(){return l})),a.d(e,"c",(function(){return c}));var s=a("b775");function i(t){return Object(s["a"])({url:"order",method:"get",params:t})}function r(t){return Object(s["a"])({url:"order/"+t,method:"get"})}function n(t,e){return Object(s["a"])({url:"order/status/"+t,method:"put",data:e})}function l(t,e){return Object(s["a"])({url:"order/"+t,method:"put",data:e})}function c(t,e){return Object(s["a"])({url:"order/"+t+"/shipment",method:"post",data:e})}}}]);