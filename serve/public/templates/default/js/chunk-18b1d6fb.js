(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18b1d6fb"],{"083e":function(t,e,i){},"2d98":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infinite-list",style:{height:t.height+"px"}},[i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"infinite-shop-list",style:{height:t.height+"px"},attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10","infinite-scroll-immediate-check":""}},[t._l(t.items,(function(e,n){return i("li",{key:n,style:{width:t.width+"px",height:t.width+50+"px"},on:{click:function(i){return t.toProduct(e)}}},[i("div",[1*e.stock===0?i("div",{staticClass:"infinite-shop-list__soldout",style:{height:t.width-50+"px",width:t.width-50+"px",lineHeight:t.width-50+"px"}},[i("div",{style:{height:t.width-70+"px",width:t.width-70+"px",lineHeight:t.width-70+"px"}},[t._v("已抢光")])]):t._e(),i("shop-image",{attrs:{src:e.img,rounded:"",type:"fit",width:t.width-20}},[i("div",{staticClass:"product-image-error",style:{height:t.width-20+"px"},attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"iconfont icontupian"})])])],1),i("div",[i("div",{staticClass:"infinite-shop-content__title"},[t._v(t._s(e.product_title))]),i("div",[i("span",{staticClass:"infinite-shop-content__price"},[t._v("¥ "),i("strong",[t._v(t._s(e.price?e.price:"-"))])]),e.oriPrice?i("span",{staticClass:"infinite-shop-content__oriprice"},[t._v("¥ "+t._s(e.oriPrice))]):t._e()])])])})),t.nomore?t._e():i("div",{staticClass:"infinite-shop-list__placeholder"},[t._v(" 加载中... ")]),t.nomore?i("div",{staticClass:"infinite-shop-list__error"},[t._v(" 没有更多了 ")]):t._e()],2)])},o=[],r=(i("a9e3"),{props:{items:Array,height:{type:Number,default:544},loading:Boolean,nomore:Boolean},data:function(){return{width:0}},mounted:function(){var t=this;this.$nextTick((function(){t.width=window.innerWidth/2-10})),window.onresize=function(){t.width=window.innerWidth/2-10}},methods:{loadMore:function(){this.$emit("load")},toProduct:function(t){void 0!==t.id&&this.$router.push({name:"Product",params:{id:t.id}})}}}),s=r,c=(i("9c8c"),i("2877")),a=Object(c["a"])(s,n,o,!1,null,"8cd5d6ee",null);e["a"]=a.exports},"48f5":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search-header"},[i("span",[t._v("搜索结果：")]),i("span",{staticClass:"search-header-content"},[t._v(t._s(t.fetchQuery.name))])]),i("infinite-list",{attrs:{items:t.items,loading:t.loading,nomore:t.nomore,height:t.height},on:{load:t.getItems}})],1)},o=[],r=(i("99af"),i("b0c0"),i("ac1f"),i("841c"),i("2d98")),s=i("4c79"),c={components:{InfiniteList:r["a"]},data:function(){return{fetchQuery:{page:0,pageSize:15,Q4S:1,name:""},loading:!1,nomore:!1,items:[],height:0}},created:function(){this.fetchQuery.name=this.$route.query.search},mounted:function(){var t=this;this.$nextTick((function(){t.height=window.innerHeight-165})),window.onresize=function(){t.height=window.innerHeight-165}},beforeRouteLeave:function(t,e,i){"Product"===t.name?e.meta.keepAlive=!0:e.meta.keepAlive=!1,i()},methods:{getItems:function(){var t=this;this.loading=!0,this.nomore=!1,this.fetchQuery.page+=1,Object(s["b"])(this.fetchQuery).then((function(e){var i=e.data.body.data;0===i.length?(t.loading=!0,t.nomore=!0):(t.items=t.items.concat(i),t.loading=!1,t.nomore=!1)})).catch((function(){t.loading=!0,t.nomore=!0}))}},watch:{$route:function(t,e){t!==e&&(this.fetchQuery.name=this.$route.query.search,this.items=[],this.fetchQuery.page=0,this.getItems())}}},a=c,d=(i("fc40"),i("2877")),h=Object(d["a"])(a,n,o,!1,null,"791e63da",null);e["default"]=h.exports},"4c79":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return r})),i.d(e,"c",(function(){return s}));var n=i("b775");function o(t){return Object(n["a"])({url:"product",method:"get",params:t})}function r(t){return Object(n["a"])({url:"product/"+t,method:"get"})}function s(){return Object(n["a"])({url:"category",method:"get"})}},"8c01":function(t,e,i){},"99af":function(t,e,i){"use strict";var n=i("23e7"),o=i("d039"),r=i("e8b5"),s=i("861d"),c=i("7b0b"),a=i("50c4"),d=i("8418"),h=i("65f0"),u=i("1dde"),l=i("b622"),f=i("2d00"),p=l("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",v=f>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),w=u("concat"),_=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},y=!v||!w;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,i,n,o,r,s=c(this),u=h(s,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?s:arguments[e],_(r)){if(o=a(r.length),l+o>m)throw TypeError(g);for(i=0;i<o;i++,l++)i in r&&d(u,l,r[i])}else{if(l>=m)throw TypeError(g);d(u,l++,r)}return u.length=l,u}})},"9c8c":function(t,e,i){"use strict";var n=i("083e"),o=i.n(n);o.a},fc40:function(t,e,i){"use strict";var n=i("8c01"),o=i.n(n);o.a}}]);