(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{196:function(t,o,e){var content=e(201);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(71).default)("79739c67",content,!0,{sourceMap:!1})},200:function(t,o,e){"use strict";e(196)},201:function(t,o,e){var n=e(70)(!1);n.push([t.i,".header button{margin:10px 5px}.header{border-bottom:2px solid #646464;padding-bottom:3px;margin:3px 10px}",""]),t.exports=n},202:function(t,o,e){"use strict";e(200);var n=e(31),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"header"},[t("a",{attrs:{href:"/"}},[t("button",[this._v("ERIC-A 메인으로")])])])}],!1,null,null,null);o.a=component.exports},210:function(t,o,e){var content=e(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(71).default)("3381e2e4",content,!0,{sourceMap:!1})},229:function(t,o,e){"use strict";e(210)},230:function(t,o,e){var n=e(70)(!1);n.push([t.i,".login input[data-v-73240278]{width:190px;font-size:15px;border:0;border-radius:15px;margin:10px 5px 5px 7px;outline:none;padding:5px;background-color:#fff}.login h3[data-v-73240278]{margin:20px 20px 5px}.login button[data-v-73240278]{margin:15px;padding:5px 20px;font-size:15px;border-radius:10px;background-color:#f0d264;box-shadow:0 6px rgba(196,172,83,.7);text-decoration:none;border-width:0}.login button[data-v-73240278]:hover{box-shadow:0 0;margin-top:20px;background-color:#d6bb59}",""]),t.exports=n},247:function(t,o,e){"use strict";e.r(o);var n={components:{Header:e(202).a},name:"SigninForm",data:function(){return{phoneNumber:null,password:""}},methods:{submitForm:function(){var t={phoneNumber:this.phoneNumber,password:this.password};this.$axios.defaults.withCredentials=!0,this.$axios.post("/user/signin",t).then((function(t){console.log(t.data),t.data?$nuxt.$router.push("/"):alert("아이디와 비밀번호를 확인해 주세요.")})).catch((function(t){alert("로그인 오류"),console.log(t)}))}}},r=(e(229),e(31)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"login"},[o("Header"),t._v(" "),o("h3",[t._v("로그인")]),t._v(" "),o("form",{on:{submit:function(o){return o.preventDefault(),t.submitForm.apply(null,arguments)}}},[o("div",{staticClass:"id"},[o("label",{attrs:{for:"phoneNumber"}},[t._v("전화번호")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",id:"phoneNumber"},domProps:{value:t.phoneNumber},on:{input:function(o){o.target.composing||(t.phoneNumber=o.target.value)}}})]),t._v(" "),o("div",[o("label",{attrs:{for:"password"}},[t._v("비밀번호")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(o){o.target.composing||(t.password=o.target.value)}}})]),t._v(" "),o("button",{attrs:{type:"submit"}},[t._v("로그인")])])],1)}),[],!1,null,"73240278",null);o.default=component.exports}}]);