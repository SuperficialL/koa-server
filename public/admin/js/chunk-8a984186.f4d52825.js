(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a984186"],{8020:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return s}));var r=n("b775");function a(t){return Object(r["a"])({url:"tags",method:"get",params:t})}function c(t){return Object(r["a"])({url:"tags/".concat(t),method:"get"})}function i(t){return Object(r["a"])({url:"tags",method:"post",data:t})}function u(t,e){return Object(r["a"])({url:"tags/".concat(t),method:"patch",data:e})}function s(t){return Object(r["a"])({url:"tags/".concat(t),method:"delete"})}},"911c":function(t,e,n){},f4ca:function(t,e,n){"use strict";var r=n("911c"),a=n.n(r);a.a},f8e2:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.id?"编辑":"新建")+"标签")]),n("el-form",{attrs:{model:t.model,"label-width":"80px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save(e)}}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},a=[],c=(n("96cf"),n("3b8d")),i=n("8020"),u={name:"EditTag",props:{id:{}},data:function(){return{loading:!1,model:{}}},methods:{save:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.id){t.next=6;break}return t.next=3,Object(i["e"])(this.id,this.model);case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,Object(i["a"])(this.model);case 8:e=t.sent;case 9:e.code&&(this.$router.push("/tags/list?refresh=1"),this.$message({type:"success",message:"保存成功"}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetch:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["c"])(this.id);case 2:e=t.sent,200===e.code&&(this.model=e.data);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.id&&this.fetch()}},s=u,o=(n("f4ca"),n("2877")),d=Object(o["a"])(s,r,a,!1,null,"0a1944e6",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-8a984186.f4d52825.js.map