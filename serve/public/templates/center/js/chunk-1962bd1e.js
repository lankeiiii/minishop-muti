(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1962bd1e"],{1148:function(e,t,n){"use strict";var i=n("a691"),r=n("1d80");e.exports="".repeat||function(e){var t=String(r(this)),n="",a=i(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(n+=t);return n}},2806:function(e,t,n){},"408a":function(e,t,n){var i=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=i(e))throw TypeError("Incorrect invocation");return+e}},6991:function(e,t,n){},b06c:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"table-header"},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入商品名称搜索"},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1),n("div",{staticClass:"table-header-button"},[n("el-button",{attrs:{type:"primary",size:"small",disabled:"免费版"===e.$store.getters.shop_level&&e.data.length>=20},on:{click:e.toAdd}},[e._v("新增商品")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.visibleGroup}},[e._v("批量上下架")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.deleteGroup}},[e._v("批量删除")])],1)],1),n("div",{staticStyle:{"background-color":"#fff","border-radius":"5px"}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"itemTable",staticClass:"product-table",attrs:{data:e.data,"header-row-class-name":"table-header-row",border:""},on:{"selection-change":e.handleSelect}},[n("el-table-column",{attrs:{type:"selection",align:"center"}}),n("el-table-column",{attrs:{prop:"img",label:"图片",width:"130px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.row.img,fit:"scale-down"}})]}}])}),n("el-table-column",{attrs:{label:"商品名称","min-width":"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return n("div",{},[n("span",{staticClass:"table-item-title",staticStyle:{cursor:"pointer"},on:{click:function(n){return e.toItem(t.row)}}},[e._v(e._s(t.row.product_title))]),n("span",{staticClass:"inline-btn",on:{click:function(n){return e.changeTitle(t.row)}}},[n("i",{staticClass:"iconfont iconbianji"})])])}}])}),n("el-table-column",{attrs:{label:"库存",prop:"stock"}}),n("el-table-column",{attrs:{label:"售价"},scopedSlots:e._u([{key:"default",fn:function(t){return n("div",{},[e._v("¥ "+e._s(t.row.price))])}}])}),n("el-table-column",{attrs:{prop:"on_sale",label:"上架",width:"70px"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.on_sale?n("el-tag",{attrs:{type:"success"}},[e._v("上架")]):n("el-tag",{attrs:{type:"info"}},[e._v("下架")])]}}])}),n("el-table-column",{attrs:{label:"操作",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.changeVisible(t.row)}}},[e._v(e._s(t.row.on_sale?"下架":"上架"))]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.toDelete(t.row)}}},[e._v("删除")])]}}])})],1),n("el-pagination",{staticStyle:{"text-align":"center",padding:"40px 0"},attrs:{"current-page":e.query.page,"page-sizes":[15,30,50,100],"page-size":e.query.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),n("progress-bar",{attrs:{Visible:e.progressShow,Title:e.progressTitle,Index:e.index,Total:e.selected.length}})],1)},r=[],a=n("c4c8"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.Visible,title:e.Title,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1}},[n("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:e.percentage}}),n("div",{staticStyle:{"text-align":"right","margin-top":"20px"}},[e._v("已处理"),n("strong",[e._v(e._s(e.Index))]),e._v("条，共"),n("strong",[e._v(e._s(e.Total))]),e._v("条")])],1)},s=[],c=(n("a9e3"),n("b680"),{props:{Visible:Boolean,Title:String,Index:Number,Total:Number},data:function(){return{percentage:0}},watch:{Index:{deep:!0,immediate:!0,handler:function(){this.Total?this.percentage=1*(this.Index/this.Total*100).toFixed(2):this.percentage=0}}}}),l=c,u=n("2877"),d=Object(u["a"])(l,o,s,!1,null,null,null),h=d.exports,f={components:{ProgressBar:h},data:function(){return{data:[],query:{name:null,page:1,pageSize:15},name:"",total:0,selected:[],loading:!1,progressShow:!1,progressTitle:"",index:0,error:0}},created:function(){this.getData()},methods:{toAdd:function(){"免费版"===this.$store.getters.shop_level&&this.data.length>=20?this.$message.warning({message:"您当前的商铺为免费版，支持上传1-20件商品，已达到限额，如需上传更多商品，请升级商城",duration:4e3}):this.$router.push({name:"ProductAdd"})},getData:function(){var e=this;this.loading=!0,Object(a["e"])(this.query).then((function(t){e.data=t.data.body.data,e.total=t.data.body.page.total,e.loading=!1})).catch((function(){e.loading=!1}))},handleSizeChange:function(e){this.query.pageSize=e,this.query.page=1,this.getData()},handleCurrentChange:function(e){this.query.page=e,this.getData()},search:function(){this.query.page=1,this.getData()},handleSelect:function(e){this.selected=e},toItem:function(e){this.$router.push({name:"ProductItem",query:{id:e.id}})},toEdit:function(e){this.$router.push({name:"ProductItem",query:{id:e.id}})},changeTitle:function(e){var t=this;this.$prompt("","修改商品名称",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:e.product_title}).then((function(n){var i=n.value;Object(a["c"])({product:{product_title:i}},e.id).then((function(){t.$message.success("已成功修改"),t.getData()}))}))},changeVisible:function(e){var t=this;Object(a["c"])({product:{on_sale:e.on_sale?0:1}},e.id).then((function(){t.$message.success("已成功修改"),t.getData()}))},toDelete:function(e){var t=this;this.$confirm("删除后无法找回，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){Object(a["b"])(e.id).then((function(){t.$message.success("已成功删除"),t.getData()})).catch((function(){}))})).catch((function(){}))},visibleGroup:function(){0!==this.selected.length?(this.progressShow=!0,this.progressTitle="批量上下架",this.index=0,this.error=0,this.confirmVisible()):this.$message.warning("请先选择商品")},confirmVisible:function(){var e=this;if(this.index!==this.selected.length){var t=this.selected[this.index],n={product:{on_sale:t.on_sale?0:1}};Object(a["c"])(n,t.id).then((function(){e.index+=1,setTimeout((function(){e.confirmVisible()}),100)})).catch((function(){e.index+=1,e.error+=1,setTimeout((function(){e.confirmVisible()}),100)}))}else setTimeout((function(){e.progressShow=!1,e.progressTitle="",e.index=0,e.selected=[],e.$refs.itemTable.clearSelection(),e.getData(),0!==e.error?e.$message.warning({message:e.error+"个商品未能成功修改，请稍后重试",duration:2e3}):e.$message.success("已成功修改")}),1e3)},deleteGroup:function(){0!==this.selected.length?(this.progressShow=!0,this.progressTitle="批量删除",this.index=0,this.error=0,this.confirmDelete()):this.$message.warning("请先选择商品")},confirmDelete:function(){var e=this;if(this.index!==this.selected.length){var t=this.selected[this.index];Object(a["b"])(t.id).then((function(){e.index+=1,setTimeout((function(){e.confirmDelete()}),100)})).catch((function(){e.index+=1,e.error+=1,setTimeout((function(){e.confirmDelete()}),100)}))}else setTimeout((function(){e.progressShow=!1,e.progressTitle="",e.index=0,e.selected=[],e.$refs.itemTable.clearSelection(),e.getData(),0!==e.error?e.$message.warning({message:e.error+"个商品未能成功删除，请稍后重试",duration:2e3}):e.$message.success("已成功删除")}),1e3)}}},p=f,g=(n("f5ab"),n("fa01"),Object(u["a"])(p,i,r,!1,null,"75056a2c",null));t["default"]=g.exports},b680:function(e,t,n){"use strict";var i=n("23e7"),r=n("a691"),a=n("408a"),o=n("1148"),s=n("d039"),c=1..toFixed,l=Math.floor,u=function(e,t,n){return 0===t?n:t%2===1?u(e,t-1,n*e):u(e*e,t/2,n)},d=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));i({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,n,i,s,c=a(this),h=r(e),f=[0,0,0,0,0,0],p="",g="0",m=function(e,t){var n=-1,i=t;while(++n<6)i+=e*f[n],f[n]=i%1e7,i=l(i/1e7)},b=function(e){var t=6,n=0;while(--t>=0)n+=f[t],f[t]=l(n/e),n=n%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var n=String(f[e]);t=""===t?n:t+o.call("0",7-n.length)+n}return t};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(t=d(c*u(2,69,1))-69,n=t<0?c*u(2,-t,1):c/u(2,t,1),n*=4503599627370496,t=52-t,t>0){m(0,n),i=h;while(i>=7)m(1e7,0),i-=7;m(u(10,i,1),0),i=t-1;while(i>=23)b(1<<23),i-=23;b(1<<i),m(1,1),b(2),g=v()}else m(0,n),m(1<<-t,0),g=v()+o.call("0",h);return h>0?(s=g.length,g=p+(s<=h?"0."+o.call("0",h-s)+g:g.slice(0,s-h)+"."+g.slice(s-h))):g=p+g,g}})},c4c8:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c}));var i=n("b775");function r(e){return Object(i["a"])({url:"product",method:"get",params:e})}function a(e){return Object(i["a"])({url:"product/"+e,method:"get"})}function o(e){return Object(i["a"])({url:"product",method:"post",data:e})}function s(e,t){return Object(i["a"])({url:"product/"+t,method:"put",data:e})}function c(e){return Object(i["a"])({url:"product/"+e,method:"delete"})}},f5ab:function(e,t,n){"use strict";var i=n("2806"),r=n.n(i);r.a},fa01:function(e,t,n){"use strict";var i=n("6991"),r=n.n(i);r.a}}]);