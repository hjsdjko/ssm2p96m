(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shangpinqiugou-add-or-update"],{"2d3c":function(e,r,t){var i=t("baac");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("08f0b06d",i,!0,{sourceMap:!1,shadowMode:!1})},"5aa7":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var n=i(t("3b8d")),o=i(t("e2b1")),a={data:function(){return{ruleForm:{mingcheng:"",fenlei:"",shiyongqingkuang:"",tupian:"",fabushijian:"",zhanghao:"",xingming:"",shouji:"",sfsh:"",shhf:"",clicknum:""},fenleiOptions:[],fenleiIndex:0,user:{},ro:{mingcheng:!1,fenlei:!1,shiyongqingkuang:!1,tupian:!1,fabushijian:!1,zhanghao:!1,xingming:!1,shouji:!1,sfsh:!1,shhf:!1,clicknum:!1}}},components:{wPicker:o.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDateTime(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:return i=e.sent,this.user=i.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.shouji=this.user.shouji,e.next=11,this.$api.option("shangpinleixing","fenlei",{});case 11:if(i=e.sent,this.fenleiOptions=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=21;break}return this.ruleForm.id=r.id,e.next=19,this.$api.info("shangpinqiugou",this.ruleForm.id);case 19:i=e.sent,this.ruleForm=i.data;case 21:if(!r.cross){e.next=64;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 24:if((e.t1=e.t0()).done){e.next=64;break}if(o=e.t1.value,"mingcheng"!=o){e.next=30;break}return this.ruleForm.mingcheng=n[o],this.ro.mingcheng=!0,e.abrupt("continue",24);case 30:if("fenlei"!=o){e.next=34;break}return this.ruleForm.fenlei=n[o],this.ro.fenlei=!0,e.abrupt("continue",24);case 34:if("shiyongqingkuang"!=o){e.next=38;break}return this.ruleForm.shiyongqingkuang=n[o],this.ro.shiyongqingkuang=!0,e.abrupt("continue",24);case 38:if("tupian"!=o){e.next=42;break}return this.ruleForm.tupian=n[o],this.ro.tupian=!0,e.abrupt("continue",24);case 42:if("fabushijian"!=o){e.next=46;break}return this.ruleForm.fabushijian=n[o],this.ro.fabushijian=!0,e.abrupt("continue",24);case 46:if("zhanghao"!=o){e.next=50;break}return this.ruleForm.zhanghao=n[o],this.ro.zhanghao=!0,e.abrupt("continue",24);case 50:if("xingming"!=o){e.next=54;break}return this.ruleForm.xingming=n[o],this.ro.xingming=!0,e.abrupt("continue",24);case 54:if("shouji"!=o){e.next=58;break}return this.ruleForm.shouji=n[o],this.ro.shouji=!0,e.abrupt("continue",24);case 58:if("clicknum"!=o){e.next=62;break}return this.ruleForm.clicknum=n[o],this.ro.clicknum=!0,e.abrupt("continue",24);case 62:e.next=24;break;case 64:this.styleChange();case 65:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},fenleiChange:function(e){this.fenleiIndex=e.target.value,this.ruleForm.fenlei=this.fenleiOptions[this.fenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.tupian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=3;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.id){e.next=8;break}return e.next=6,this.$api.update("shangpinqiugou",this.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,this.$api.add("shangpinqiugou",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=a},9173:function(e,r,t){"use strict";var i={"w-picker":t("e2b1").default},n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("名称")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.mingcheng,placeholder:"名称"},model:{value:e.ruleForm.mingcheng,callback:function(r){e.$set(e.ruleForm,"mingcheng",r)},expression:"ruleForm.mingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("分类")]),t("v-uni-picker",{attrs:{value:e.fenleiIndex,range:e.fenleiOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.fenleiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.fenlei?e.ruleForm.fenlei:"请选择分类"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("使用情况")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.shiyongqingkuang,placeholder:"使用情况"},model:{value:e.ruleForm.shiyongqingkuang,callback:function(r){e.$set(e.ruleForm,"shiyongqingkuang",r)},expression:"ruleForm.shiyongqingkuang"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.tupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("发布时间")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{placeholder:"发布时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("fabushijian")}},model:{value:e.ruleForm.fabushijian,callback:function(r){e.$set(e.ruleForm,"fabushijian",r)},expression:"ruleForm.fabushijian"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("账号")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(r){e.$set(e.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("手机")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.shouji,placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(r){e.$set(e.ruleForm,"shouji",r)},expression:"ruleForm.shouji"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"fabushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.fabushijianConfirm.apply(void 0,arguments)}}})],1)},o=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return o})),t.d(r,"a",(function(){return i}))},baac:function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-13cbb0c9]{padding:%?20?%}.content[data-v-13cbb0c9]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-13cbb0c9]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-13cbb0c9]{width:%?180?%}.avator[data-v-13cbb0c9]{width:%?150?%;height:%?60?%}.right-input[data-v-13cbb0c9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-13cbb0c9]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-13cbb0c9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-13cbb0c9]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-13cbb0c9]{border:0}.cu-form-group uni-input[data-v-13cbb0c9]{padding:0 %?30?%}.uni-input[data-v-13cbb0c9]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-13cbb0c9]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-13cbb0c9]::after{line-height:%?88?%}.select .uni-input[data-v-13cbb0c9]{line-height:%?88?%}.input .right-input[data-v-13cbb0c9]{line-height:%?110?%}',""]),e.exports=r},ea69:function(e,r,t){"use strict";t.r(r);var i=t("9173"),n=t("ef09");for(var o in n)"default"!==o&&function(e){t.d(r,e,(function(){return n[e]}))}(o);t("f544");var a,s=t("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"13cbb0c9",null,!1,i["a"],a);r["default"]=u.exports},ef09:function(e,r,t){"use strict";t.r(r);var i=t("5aa7"),n=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(r,e,(function(){return i[e]}))}(o);r["default"]=n.a},f544:function(e,r,t){"use strict";var i=t("2d3c"),n=t.n(i);n.a}}]);