(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kuaididingdan-add-or-update"],{"09ef":function(t,r,e){"use strict";var a=e("c7e6"),i=e.n(a);i.a},"1f29":function(t,r,e){"use strict";e.r(r);var a=e("ab18"),i=e("73cf");for(var n in i)"default"!==n&&function(t){e.d(r,t,(function(){return i[t]}))}(n);e("09ef");var o,s=e("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"088fd4aa",null,!1,a["a"],o);r["default"]=u.exports},"73c5":function(t,r,e){var a=e("24fb");r=a(!1),r.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-088fd4aa]{padding:%?20?%}.content[data-v-088fd4aa]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-088fd4aa]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-088fd4aa]{width:%?180?%}.avator[data-v-088fd4aa]{width:%?150?%;height:%?60?%}.right-input[data-v-088fd4aa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-088fd4aa]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-088fd4aa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-088fd4aa]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-088fd4aa]{border:0}.cu-form-group uni-input[data-v-088fd4aa]{padding:0 %?30?%}.uni-input[data-v-088fd4aa]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-088fd4aa]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-088fd4aa]::after{line-height:%?88?%}.select .uni-input[data-v-088fd4aa]{line-height:%?88?%}.input .right-input[data-v-088fd4aa]{line-height:%?110?%}',""]),t.exports=r},"73cf":function(t,r,e){"use strict";e.r(r);var a=e("db08"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(r,t,(function(){return a[t]}))}(n);r["default"]=i.a},ab18:function(t,r,e){"use strict";var a,i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-uni-view",{staticClass:"content"},[e("v-uni-form",{staticClass:"app-update-pv"},[e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("快递单号")]),e("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"}},[t._v(t._s(t.ruleForm.kuaididanhao))])],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("名称")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:t.ro.mingcheng,placeholder:"名称"},model:{value:t.ruleForm.mingcheng,callback:function(r){t.$set(t.ruleForm,"mingcheng",r)},expression:"ruleForm.mingcheng"}})],1),e("v-uni-view",{staticClass:"cu-form-group",class:"left"==t.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.tupianTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("图片")]),e("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[t.ruleForm.tupian?e("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:t.ruleForm.tupian,mode:"aspectFill"}}):e("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("账号")]),e("v-uni-picker",{attrs:{value:t.zhanghaoIndex,range:t.zhanghaoOptions},on:{change:function(r){arguments[0]=r=t.$handleEvent(r),t.zhanghaoChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[t._v(t._s(t.zhanghaoOptions[t.zhanghaoIndex]))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("姓名")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:t.ro.xingming,placeholder:"姓名"},model:{value:t.ruleForm.xingming,callback:function(r){t.$set(t.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("卖家账号")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:t.ro.maijiazhanghao,placeholder:"卖家账号"},model:{value:t.ruleForm.maijiazhanghao,callback:function(r){t.$set(t.ruleForm,"maijiazhanghao",r)},expression:"ruleForm.maijiazhanghao"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("卖家姓名")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:t.ro.maijiaxingming,placeholder:"卖家姓名"},model:{value:t.ruleForm.maijiaxingming,callback:function(r){t.$set(t.ruleForm,"maijiaxingming",r)},expression:"ruleForm.maijiaxingming"}})],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onSubmitTap.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},n=[];e.d(r,"b",(function(){return i})),e.d(r,"c",(function(){return n})),e.d(r,"a",(function(){return a}))},c7e6:function(t,r,e){var a=e("73c5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("00ebb920",a,!0,{sourceMap:!1,shadowMode:!1})},db08:function(t,r,e){"use strict";var a=e("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,e("ac6a"),e("96cf");var i=a(e("3b8d")),n=a(e("e2b1")),o={data:function(){return{ruleForm:{kuaididanhao:this.getUUID(),mingcheng:"",tupian:"",zhanghao:"",xingming:"",maijiazhanghao:"",maijiaxingming:""},zhanghaoOptions:[],zhanghaoIndex:0,user:{},ro:{kuaididanhao:!1,mingcheng:!1,tupian:!1,zhanghao:!1,xingming:!1,maijiazhanghao:!1,maijiaxingming:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(r){var e,a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(e);case 3:return a=t.sent,this.user=a.data,this.ruleForm.maijiazhanghao=this.user.maijiazhanghao,this.ruleForm.maijiaxingming=this.user.maijiaxingming,t.next=9,this.$api.option("yonghu","zhanghao",{});case 9:if(a=t.sent,this.zhanghaoOptions=a.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){t.next=19;break}return this.ruleForm.id=r.id,t.next=17,this.$api.info("kuaididingdan",this.ruleForm.id);case 17:a=t.sent,this.ruleForm=a.data;case 19:if(!r.cross){t.next=54;break}i=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(i);case 22:if((t.t1=t.t0()).done){t.next=54;break}if(n=t.t1.value,"kuaididanhao"!=n){t.next=28;break}return this.ruleForm.kuaididanhao=i[n],this.ro.kuaididanhao=!0,t.abrupt("continue",22);case 28:if("mingcheng"!=n){t.next=32;break}return this.ruleForm.mingcheng=i[n],this.ro.mingcheng=!0,t.abrupt("continue",22);case 32:if("tupian"!=n){t.next=36;break}return this.ruleForm.tupian=i[n],this.ro.tupian=!0,t.abrupt("continue",22);case 36:if("zhanghao"!=n){t.next=40;break}return this.ruleForm.zhanghao=i[n],this.ro.zhanghao=!0,t.abrupt("continue",22);case 40:if("xingming"!=n){t.next=44;break}return this.ruleForm.xingming=i[n],this.ro.xingming=!0,t.abrupt("continue",22);case 44:if("maijiazhanghao"!=n){t.next=48;break}return this.ruleForm.maijiazhanghao=i[n],this.ro.maijiazhanghao=!0,t.abrupt("continue",22);case 48:if("maijiaxingming"!=n){t.next=52;break}return this.ruleForm.maijiaxingming=i[n],this.ro.maijiaxingming=!0,t.abrupt("continue",22);case 52:t.next=22;break;case 54:this.styleChange();case 55:case"end":return t.stop()}}),t,this)})));function r(r){return t.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},zhanghaoChange:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(r){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.zhanghaoIndex=r.target.value,this.ruleForm.zhanghao=this.zhanghaoOptions[this.zhanghaoIndex],t.next=4,this.$api.follow("yonghu","zhanghao",{columnValue:this.ruleForm.zhanghao});case 4:e=t.sent,e.data.xingming&&(this.ruleForm.xingming=e.data.xingming);case 6:case"end":return t.stop()}}),t,this)})));function r(r){return t.apply(this,arguments)}return r}(),tupianTap:function(){var t=this;this.$api.upload((function(r){t.ruleForm.tupian=t.$base.url+"upload/"+r.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.ruleForm.id){t.next=5;break}return t.next=3,this.$api.update("kuaididingdan",this.ruleForm);case 3:t.next=7;break;case 5:return t.next=7,this.$api.add("kuaididingdan",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var r=new Date,e=r.getFullYear(),a=r.getMonth()+1,i=r.getDate();return"start"===t?e-=60:"end"===t&&(e+=2),a=a>9?a:"0"+a,i=i>9?i:"0"+i,"".concat(e,"-").concat(a,"-").concat(i)},toggleTab:function(t){this.$refs[t].show()}}};r.default=o}}]);