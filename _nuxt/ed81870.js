(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{214:function(t,e,n){var content=n(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("20eb82a0",content,!0,{sourceMap:!1})},237:function(t,e,n){t.exports=n.p+"img/berry.8f07853.png"},238:function(t,e,n){"use strict";n(214)},239:function(t,e,n){var r=n(70)(!1);r.push([t.i,".index{background-color:#e1e1e1;padding-bottom:300px}.btn1{margin:9px;padding:10px 20px;font-size:15px;border-radius:10px;background-color:#f0d264;box-shadow:0 6px rgba(196,172,83,.7);text-decoration:none;border-width:0}.btn1:hover{box-shadow:0 0;margin-top:15px;background-color:#d6bb59}.userbtn{background-color:#fff;border-width:1px;padding:7px 12px;margin:4px}img{padding-top:0;width:200px}",""]),t.exports=r},251:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(40),n(19),{data:function(){return{isLogined:"",userName:"",userPhoneNumber:""}},created:function(){var t=this;this.$axios.defaults.withCredentials=!0,this.$axios.get("/user/checklogin").then((function(e){e.data?t.isLogined=!0:t.isLogined=!1}))},mounted:function(){var t=this;this.$axios.get("/user/session").then((function(e){t.userName=e.data.name,t.userPhoneNumber=e.data.phoneNumber}))},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios.defaults.withCredentials=!0,e.next=3,t.$axios.post("/user/signout").then((function(t){t.data?(alert("로그아웃 되었습니다."),$nuxt.$router.go()):console.log("로그아웃 실패")})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},loginOrder:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios.defaults.withCredentials=!0,e.next=3,t.$axios.get("/user/checklogin");case 3:e.sent.data?$nuxt.$router.push("/delivery/order"):alert("로그인이 필요합니다.");case 5:case"end":return e.stop()}}),e)})))()},loginTrack:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios.defaults.withCredentials=!0,e.next=3,t.$axios.get("/user/checklogin");case 3:e.sent.data?$nuxt.$router.push("/delivery/list/".concat(t.userPhoneNumber)):alert("로그인이 필요합니다.");case 5:case"end":return e.stop()}}),e)})))()}}}),c=(n(238),n(31)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"index"},[e("br"),t._v(" "),e("h1",[t._v("ERIC-A")]),t._v(" "),e("div",[e("br"),t._v("\n    안녕하세요 배송 로봇 ERIC-A입니다!\n    "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"menu"},[t._v("\n      메뉴\n    ")]),t._v(" "),e("ul",[e("li",{on:{click:t.loginOrder}},[e("button",{staticClass:"btn1"},[t._v("\n          배송 접수하기\n        ")])]),t._v(" "),e("li",{on:{click:t.loginTrack}},[e("button",{staticClass:"btn1"},[t._v("배송 조회하기")])])]),t._v(" "),t.isLogined?t._e():e("div",[e("br"),t._v(" "),e("span",[t._v("이용을 원하시면 로그인해 주세요 😀")]),t._v(" "),e("br"),t._v(" "),t._m(0),t._v(" "),e("br"),t._v(" "),t._m(1),t._v(" "),e("br")])]),t._v(" "),t.isLogined?e("div",[e("br"),t._v(" "),t.isLogined?e("div",[t._v(t._s(t.userName)+"님 반갑습니다 😀")]):t._e(),t._v(" "),t.isLogined?e("a",{on:{click:t.logout}},[e("button",{staticClass:"userbtn"},[t._v("로그아웃")])]):t._e(),t._v(" "),t._e(),t._v(" "),e("br")]):t._e(),t._v(" "),e("img",{attrs:{src:n(237)}})])}),[function(){var t=this._self._c;return t("a",{attrs:{href:"/user/signin"}},[t("button",{staticClass:"userbtn"},[this._v("\n          이용하기 위해 로그인하기!\n        ")])])},function(){var t=this._self._c;return t("a",{attrs:{href:"/user/signup"}},[t("button",{staticClass:"userbtn"},[this._v("\n          이용하기 위해 회원가입하기!\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);