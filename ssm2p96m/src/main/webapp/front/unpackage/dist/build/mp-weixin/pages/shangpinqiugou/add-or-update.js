(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinqiugou/add-or-update"],{"28d3":function(n,e,t){"use strict";t.r(e);var r=t("2d67"),i=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e["default"]=i.a},"2d67":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,r,i,u,a){try{var o=n[u](a),c=o.value}catch(s){return void t(s)}o.done?e(c):Promise.resolve(c).then(r,i)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){u(a,r,i,o,c,"next",n)}function c(n){u(a,r,i,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("3572"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{mingcheng:"",fenlei:"",shiyongqingkuang:"",tupian:"",fabushijian:"",zhanghao:"",xingming:"",shouji:"",sfsh:"",shhf:"",clicknum:""},fenleiOptions:[],fenleiIndex:0,user:{},ro:{mingcheng:!1,fenlei:!1,shiyongqingkuang:!1,tupian:!1,fabushijian:!1,zhanghao:!1,xingming:!1,shouji:!1,sfsh:!1,shhf:!1,clicknum:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var t=this;return a(r.default.mark((function i(){var u,a,o,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.ruleForm.fabushijian=t.$utils.getCurDateTime(),u=n.getStorageSync("nowTable"),i.next=4,t.$api.session(u);case 4:return a=i.sent,t.user=a.data,t.ruleForm.zhanghao=t.user.zhanghao,t.ruleForm.xingming=t.user.xingming,t.ruleForm.shouji=t.user.shouji,i.next=11,t.$api.option("shangpinleixing","fenlei",{});case 11:if(a=i.sent,t.fenleiOptions=a.data,t.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(t.ruleForm.refid=e.refid,t.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=21;break}return t.ruleForm.id=e.id,i.next=19,t.$api.info("shangpinqiugou",t.ruleForm.id);case 19:a=i.sent,t.ruleForm=a.data;case 21:if(!e.cross){i.next=64;break}o=n.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 24:if((i.t1=i.t0()).done){i.next=64;break}if(c=i.t1.value,"mingcheng"!=c){i.next=30;break}return t.ruleForm.mingcheng=o[c],t.ro.mingcheng=!0,i.abrupt("continue",24);case 30:if("fenlei"!=c){i.next=34;break}return t.ruleForm.fenlei=o[c],t.ro.fenlei=!0,i.abrupt("continue",24);case 34:if("shiyongqingkuang"!=c){i.next=38;break}return t.ruleForm.shiyongqingkuang=o[c],t.ro.shiyongqingkuang=!0,i.abrupt("continue",24);case 38:if("tupian"!=c){i.next=42;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,i.abrupt("continue",24);case 42:if("fabushijian"!=c){i.next=46;break}return t.ruleForm.fabushijian=o[c],t.ro.fabushijian=!0,i.abrupt("continue",24);case 46:if("zhanghao"!=c){i.next=50;break}return t.ruleForm.zhanghao=o[c],t.ro.zhanghao=!0,i.abrupt("continue",24);case 50:if("xingming"!=c){i.next=54;break}return t.ruleForm.xingming=o[c],t.ro.xingming=!0,i.abrupt("continue",24);case 54:if("shouji"!=c){i.next=58;break}return t.ruleForm.shouji=o[c],t.ro.shouji=!0,i.abrupt("continue",24);case 58:if("clicknum"!=c){i.next=62;break}return t.ruleForm.clicknum=o[c],t.ro.clicknum=!0,i.abrupt("continue",24);case 62:i.next=24;break;case 64:t.styleChange();case 65:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(n){console.log(n),this.ruleForm.fabushijian=n.result,this.$forceUpdate()},fenleiChange:function(n){this.fenleiIndex=n.target.value,this.ruleForm.fenlei=this.fenleiOptions[this.fenleiIndex]},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){e.next=3;break}return n.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 3:if(!n.ruleForm.id){e.next=8;break}return e.next=6,n.$api.update("shangpinqiugou",n.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,n.$api.add("shangpinqiugou",n.ruleForm);case 10:n.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,t("543d")["default"])},"3c25":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"3572"))}},i=function(){var n=this,e=n.$createElement;n._self._c},u=[]},"3d27":function(n,e,t){},7389:function(n,e,t){"use strict";(function(n){t("d8de");r(t("66fd"));var e=r(t("ec26"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"7bd7":function(n,e,t){"use strict";var r=t("3d27"),i=t.n(r);i.a},ec26:function(n,e,t){"use strict";t.r(e);var r=t("3c25"),i=t("28d3");for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("7bd7");var a,o=t("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"30838dbc",null,!1,r["a"],a);e["default"]=c.exports}},[["7389","common/runtime","common/vendor"]]]);