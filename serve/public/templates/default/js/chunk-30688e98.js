(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30688e98"],{"083e":function(t,i,e){},"2d98":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"infinite-list",style:{height:t.height+"px"}},[e("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"infinite-shop-list",style:{height:t.height+"px"},attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10","infinite-scroll-immediate-check":""}},[t._l(t.items,(function(i,n){return e("li",{key:n,style:{width:t.width+"px",height:t.width+50+"px"},on:{click:function(e){return t.toProduct(i)}}},[e("div",[1*i.stock===0?e("div",{staticClass:"infinite-shop-list__soldout",style:{height:t.width-50+"px",width:t.width-50+"px",lineHeight:t.width-50+"px"}},[e("div",{style:{height:t.width-70+"px",width:t.width-70+"px",lineHeight:t.width-70+"px"}},[t._v("已抢光")])]):t._e(),e("shop-image",{attrs:{src:i.img,rounded:"",type:"fit",width:t.width-20}},[e("div",{staticClass:"product-image-error",style:{height:t.width-20+"px"},attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"iconfont icontupian"})])])],1),e("div",[e("div",{staticClass:"infinite-shop-content__title"},[t._v(t._s(i.product_title))]),e("div",[e("span",{staticClass:"infinite-shop-content__price"},[t._v("¥ "),e("strong",[t._v(t._s(i.price?i.price:"-"))])]),i.oriPrice?e("span",{staticClass:"infinite-shop-content__oriprice"},[t._v("¥ "+t._s(i.oriPrice))]):t._e()])])])})),t.nomore?t._e():e("div",{staticClass:"infinite-shop-list__placeholder"},[t._v(" 加载中... ")]),t.nomore?e("div",{staticClass:"infinite-shop-list__error"},[t._v(" 没有更多了 ")]):t._e()],2)])},o=[],s=(e("a9e3"),{props:{items:Array,height:{type:Number,default:544},loading:Boolean,nomore:Boolean},data:function(){return{width:0}},mounted:function(){var t=this;this.$nextTick((function(){t.width=window.innerWidth/2-10})),window.onresize=function(){t.width=window.innerWidth/2-10}},methods:{loadMore:function(){this.$emit("load")},toProduct:function(t){void 0!==t.id&&this.$router.push({name:"Product",params:{id:t.id}})}}}),r=s,c=(e("9c8c"),e("2877")),a=Object(c["a"])(r,n,o,!1,null,"8cd5d6ee",null);i["a"]=a.exports},"37de":function(t,i,e){},"7e7d":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("infinite-list",{attrs:{loading:t.loading,nomore:t.noresult,items:t.items,height:t.height},on:{load:t.getItems}})],1)},o=[],s=(e("99af"),e("2d98")),r={components:{InfiniteList:s["a"]},data:function(){return{height:0,loading:!1,noresult:!1,items:[]}},mounted:function(){var t=this;this.$nextTick((function(){t.height=window.innerHeight-114})),window.onresize=function(){t.height=window.innerHeight-114}},methods:{getItems:function(){var t=this;setTimeout((function(){for(var i=[],e=0;e<=10;e++)i.push(e);0===i.length?(t.loading=!0,t.noresult=!0):(t.loading=!1,t.noresult=!1,t.items=t.items.concat(i))}),1e3)}}},c=r,a=(e("cb4f"),e("2877")),d=Object(a["a"])(c,n,o,!1,null,"5de82700",null);i["default"]=d.exports},"99af":function(t,i,e){"use strict";var n=e("23e7"),o=e("d039"),s=e("e8b5"),r=e("861d"),c=e("7b0b"),a=e("50c4"),d=e("8418"),l=e("65f0"),h=e("1dde"),u=e("b622"),f=e("2d00"),p=u("isConcatSpreadable"),w=9007199254740991,v="Maximum allowed index exceeded",g=f>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=h("concat"),_=function(t){if(!r(t))return!1;var i=t[p];return void 0!==i?!!i:s(t)},x=!g||!m;n({target:"Array",proto:!0,forced:x},{concat:function(t){var i,e,n,o,s,r=c(this),h=l(r,0),u=0;for(i=-1,n=arguments.length;i<n;i++)if(s=-1===i?r:arguments[i],_(s)){if(o=a(s.length),u+o>w)throw TypeError(v);for(e=0;e<o;e++,u++)e in s&&d(h,u,s[e])}else{if(u>=w)throw TypeError(v);d(h,u++,s)}return h.length=u,h}})},"9c8c":function(t,i,e){"use strict";var n=e("083e"),o=e.n(n);o.a},cb4f:function(t,i,e){"use strict";var n=e("37de"),o=e.n(n);o.a}}]);