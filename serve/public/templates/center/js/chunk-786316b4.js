(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-786316b4"],{"0f56":function(i,t,e){},"7b99":function(i,t,e){"use strict";e.r(t);var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{directives:[{name:"loading",rawName:"v-loading",value:i.loading,expression:"loading"}],staticClass:"template-block"},[i._m(0),e("div",{staticStyle:{"min-height":"200px"}},[i.loading||0!==i.user_plugins.length?i._e():e("div",{staticClass:"loading-placeholder"},[e("div",[i._v("暂无可用插件")])]),i._l(i.user_plugins,(function(t,n){return e("div",{key:n,staticClass:"template-current-block"},[e("div",{staticStyle:{width:"50px"}},[e("i",{staticClass:"iconfont",class:t.icon})]),e("div",{staticStyle:{width:"calc(100% - 50px)"}},[e("div",{staticClass:"template-name"},[e("span",[i._v(i._s(t.plugin_name))]),e("el-button",{staticStyle:{float:"right"},attrs:{size:"mini",type:"primary"},on:{click:function(e){return i.toPlugin(t)}}},[i._v("进入")])],1),e("div",{staticClass:"template-desc"},[e("div",[i._v("添加时间："+i._s(t.created_at))]),e("div",[i._v("到期时间："+i._s(t.exp_at))])])])])}))],2),e("div",{staticClass:"template-block-title",staticStyle:{"margin-top":"40px"}},[i._v("插件市场")]),e("div",{staticStyle:{"min-height":"300px"}},[i.loading||0!==i.plugins.length?i._e():e("div",{staticClass:"loading-placeholder"},[e("div",[i._v("暂无插件")])]),i._l(i.plugins,(function(t,n){return e("div",{key:n,staticClass:"template-current-block"},[e("div",{staticStyle:{width:"50px"}},[e("i",{staticClass:"iconfont",class:t.icon})]),e("div",{staticStyle:{width:"calc(100% - 50px)"}},[e("div",{staticClass:"template-name"},[i._v(i._s(t.plugin_name))]),e("div",{staticClass:"template-price"},[e("span",[i._v("¥ "),e("strong",[i._v(i._s(t.price))]),i._v("/月")]),e("el-button",{staticStyle:{float:"right","margin-top":"2px"},attrs:{size:"small",type:"primary"}},[i._v("购买")])],1)])])}))],2)])])},a=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"template-block-title"},[e("div",{staticStyle:{width:"calc(100% - 96px)"}},[i._v("我的插件")])])}],c={data:function(){return{plugins:[],user_plugins:[],loading:!1}},created:function(){this.getPlugins()},methods:{getPlugins:function(){var i=this;this.loading=!0,setTimeout((function(){i.plugins=[{plugin_name:"满减满折",plugin_code:"Discount",type:"商品营销",desc:"",price:"20",icon:"iconkanjia"},{plugin_name:"搭配宝",plugin_code:"Match",type:"商品营销",desc:"",price:"20",icon:"iconmaiyizengyi"},{plugin_name:"优惠券",plugin_code:"Coupon",type:"商品营销",desc:"",price:"20",icon:"iconyouhuiquan"},{plugin_name:"VIP会员",plugin_code:"Vip",type:"顾客营销",desc:"",price:"20",icon:"iconyingchengka"}],i.user_plugins=[{plugin_name:"满减满折",plugin_code:"Discount",type:"商品营销",price:"20",created_at:"2020-05-15",exp_at:"2020-06-15",icon:"iconkanjia"},{plugin_name:"搭配宝",plugin_code:"Match",type:"商品营销",price:"20",created_at:"2020-05-15",exp_at:"2020-06-15",icon:"iconmaiyizengyi"},{plugin_name:"优惠券",plugin_code:"Coupon",type:"商品营销",price:"20",created_at:"2020-05-15",exp_at:"2020-06-15",icon:"iconyouhuiquan"},{plugin_name:"VIP会员",plugin_code:"Vip",type:"顾客营销",price:"20",created_at:"2020-05-15",exp_at:"2020-06-15",icon:"iconyingchengka"}],i.loading=!1}),1e3)},toPlugin:function(i){this.$router.push({name:i.plugin_code+"Home"})}}},l=c,s=(e("d1bd"),e("2877")),o=Object(s["a"])(l,n,a,!1,null,"0545f7ff",null);t["default"]=o.exports},d1bd:function(i,t,e){"use strict";var n=e("0f56"),a=e.n(n);a.a}}]);