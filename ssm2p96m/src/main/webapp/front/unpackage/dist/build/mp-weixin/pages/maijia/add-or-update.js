(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/maijia/add-or-update"],{"07ee":function(e,n,r){"use strict";var t;r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return t}));var i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"1ec3":function(e,n,r){"use strict";r.r(n);var t=r("07ee"),i=r("e1c2");for(var a in i)"default"!==a&&function(e){r.d(n,e,(function(){return i[e]}))}(a);r("5f73");var u,o=r("f0c5"),c=Object(o["a"])(i["default"],t["b"],t["c"],!1,null,"7c2beff6",null,!1,t["a"],u);n["default"]=c.exports},"1ffe":function(e,n,r){},"5f73":function(e,n,r){"use strict";var t=r("1ffe"),i=r.n(t);i.a},"70f4":function(e,n,r){"use strict";(function(e){r("d8de");t(r("66fd"));var n=t(r("1ec3"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},e1c2:function(e,n,r){"use strict";r.r(n);var t=r("f6b9"),i=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);n["default"]=i.a},f6b9:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,t,i,a,u){try{var o=e[a](u),c=o.value}catch(s){return void r(s)}o.done?n(c):Promise.resolve(c).then(t,i)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var u=e.apply(n,r);function o(e){a(u,t,i,o,c,"next",e)}function c(e){a(u,t,i,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("3572"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{ruleForm:{maijiazhanghao:"",mima:"",maijiaxingming:"",xingbie:"",nianling:"",shouji:"",youxiang:"",shenfenzheng:"",dizhi:"",touxiang:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{maijiazhanghao:!1,mima:!1,maijiaxingming:!1,xingbie:!1,nianling:!1,shouji:!1,youxiang:!1,shenfenzheng:!1,dizhi:!1,touxiang:!1,money:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var r=this;return u(t.default.mark((function i(){var a,u,o,c;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.getStorageSync("nowTable"),i.next=3,r.$api.session(a);case 3:if(u=i.sent,r.user=u.data,r.xingbieOptions="男,女".split(","),r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=14;break}return r.ruleForm.id=n.id,i.next=12,r.$api.info("maijia",r.ruleForm.id);case 12:u=i.sent,r.ruleForm=u.data;case 14:if(!n.cross){i.next=65;break}o=e.getStorageSync("crossObj"),i.t0=t.default.keys(o);case 17:if((i.t1=i.t0()).done){i.next=65;break}if(c=i.t1.value,"maijiazhanghao"!=c){i.next=23;break}return r.ruleForm.maijiazhanghao=o[c],r.ro.maijiazhanghao=!0,i.abrupt("continue",17);case 23:if("mima"!=c){i.next=27;break}return r.ruleForm.mima=o[c],r.ro.mima=!0,i.abrupt("continue",17);case 27:if("maijiaxingming"!=c){i.next=31;break}return r.ruleForm.maijiaxingming=o[c],r.ro.maijiaxingming=!0,i.abrupt("continue",17);case 31:if("xingbie"!=c){i.next=35;break}return r.ruleForm.xingbie=o[c],r.ro.xingbie=!0,i.abrupt("continue",17);case 35:if("nianling"!=c){i.next=39;break}return r.ruleForm.nianling=o[c],r.ro.nianling=!0,i.abrupt("continue",17);case 39:if("shouji"!=c){i.next=43;break}return r.ruleForm.shouji=o[c],r.ro.shouji=!0,i.abrupt("continue",17);case 43:if("youxiang"!=c){i.next=47;break}return r.ruleForm.youxiang=o[c],r.ro.youxiang=!0,i.abrupt("continue",17);case 47:if("shenfenzheng"!=c){i.next=51;break}return r.ruleForm.shenfenzheng=o[c],r.ro.shenfenzheng=!0,i.abrupt("continue",17);case 51:if("dizhi"!=c){i.next=55;break}return r.ruleForm.dizhi=o[c],r.ro.dizhi=!0,i.abrupt("continue",17);case 55:if("touxiang"!=c){i.next=59;break}return r.ruleForm.touxiang=o[c],r.ro.touxiang=!0,i.abrupt("continue",17);case 59:if("money"!=c){i.next=63;break}return r.ruleForm.money=o[c],r.ro.money=!0,i.abrupt("continue",17);case 63:i.next=17;break;case 65:r.styleChange();case 66:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.maijiazhanghao){n.next=3;break}return e.$utils.msg("卖家账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(e.ruleForm.maijiaxingming){n.next=9;break}return e.$utils.msg("卖家姓名不能为空"),n.abrupt("return");case 9:if(!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=12;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 12:if(!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=15;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 15:if(!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=18;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 18:if(!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){n.next=21;break}return e.$utils.msg("身份证应输入身份证格式"),n.abrupt("return");case 21:if(!e.ruleForm.money||e.$validate.isNumber(e.ruleForm.money)){n.next=24;break}return e.$utils.msg("余额应输入数字"),n.abrupt("return");case 24:if(!e.ruleForm.id){n.next=29;break}return n.next=27,e.$api.update("maijia",e.ruleForm);case 27:n.next=31;break;case 29:return n.next=31,e.$api.add("maijia",e.ruleForm);case 31:e.$utils.msgBack("提交成功");case 32:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,i=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,i=i>9?i:"0"+i,"".concat(r,"-").concat(t,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,r("543d")["default"])}},[["70f4","common/runtime","common/vendor"]]]);