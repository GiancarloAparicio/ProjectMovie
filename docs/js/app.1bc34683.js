(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0c3d2a86":"cfcf2d06","chunk-2d2086b7":"c51da8fb","chunk-2d21a3d2":"41fcbfda","chunk-41aab653":"011d3895"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},5124:function(e,t,r){"use strict";r.d(t,"e",(function(){return m})),r.d(t,"d",(function(){return b})),r.d(t,"c",(function(){return E})),r.d(t,"b",(function(){return _})),r.d(t,"a",(function(){return v}));var n=r("59ca"),a=r.n(n),s=(r("ea7b"),Object({NODE_ENV:"production",VUE_APP_API_URL:"http://www.omdbapi.com/?i=tt3896198&apikey=7645f33d",VUE_APP_ENV:"local",VUE_APP_DEBUG:"true",VUE_APP_URL:"http://localhost",VUE_APP_API_KEY_FIREBASE:"AIzaSyDNqC3GiUFpmusEZ-wtSkwKCtT5oycWVvI",VUE_APP_AUTH_DOMAIN_FIREBASE:"movies-ffda9.firebaseapp.com",VUE_APP_DATABASE_URL_FIREBASE:"https://movies-ffda9.firebaseio.com",VUE_APP_PROJECT_ID_FIREBASE:"movies-ffda9",VUE_APP_STORAGE_BUCKET_FIREBASE:"movies-ffda9.appspot.com",VUE_APP_MESSAGING_SENDER_ID_FIREBASE:"103248877127",VUE_APP_APP_ID_FIREBASE:"1:103248877127:web:68953662e7a52c72fa4362",BASE_URL:"/"})),o=s.VUE_APP_API_KEY_FIREBASE,i=s.VUE_APP_AUTH_DOMAIN_FIREBASE,c=s.VUE_APP_DATABASE_URL_FIREBASE,u=s.VUE_APP_PROJECT_ID_FIREBASE,l=s.VUE_APP_STORAGE_BUCKET_FIREBASE,d=s.VUE_APP_MESSAGING_SENDER_ID_FIREBASE,f=s.VUE_APP_APP_ID_FIREBASE,p=r("63e0"),m=function(){var e={apiKey:o,authDomain:i,databaseURL:c,projectId:u,storageBucket:l,messagingSenderId:d,appId:f};a.a.initializeApp(e)},b=function(e,t,r){a.a.auth().createUserWithEmailAndPassword(e,t).then((function(){r(Object(p["b"])("reset-status")),h()})).catch((function(e){console.warn(e.code),r(Object(p["b"])(e.code))}))},E=function(e,t,r){a.a.auth().signInWithEmailAndPassword(e,t).then((function(){r(Object(p["b"])("reset-status"))})).catch((function(e){console.warn(e.message),r(Object(p["b"])(e.code))}))},_=function(e){a.a.auth().onAuthStateChanged((function(t){localStorage.setItem("existsUser",!!t),e(Object(p["a"])({existsUser:!!t,currentUser:t}))}))},h=function(){a.a.auth().currentUser.sendEmailVerification().then((function(){document.querySelector("#closeRegister").click(),document.querySelector("#resetRegister").click()})).catch((function(e){console.warn(e.code)}))},v=function(e){a.a.auth().signOut().then((function(){localStorage.setItem("existsUser",!1),e(Object(p["a"])({existsUser:!1,currentUser:null}))})).catch((function(e){console.warn(e)}))}},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,a,s=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("NavBar",{attrs:{existsUser:e.existsUser}},[e.existsUser?r("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Home")]):e._e(),e.existsUser?r("router-link",{staticClass:"nav-link",attrs:{to:"/movie"}},[e._v("Movies")]):e._e(),e.existsUser?e._e():r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")])],1),r("div",{staticClass:"container mt-4"},[r("div",{staticClass:"row"},[r("router-view")],1)]),r("Footer")],1)},i=[],c=r("5530"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-info"},[r("h1",{staticClass:"navbar-brand"},[e._v("Movies")]),e._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[r("ul",{staticClass:"navbar-nav mr-auto"},[e._t("default")],2),e.existsUser?e._e():r("button",{staticClass:"btn btn-secondary",attrs:{"data-toggle":"modal","data-target":"#ModalFormRegister"}},[e._v("Register")]),e.existsUser?r("button",{staticClass:"btn btn-danger",on:{click:e.closeSession}},[e._v("Close")]):e._e()])])},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{"data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar",id:"closeRegister"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],d=(r("ac1f"),r("5319"),r("5124")),f=r("2f62"),p=r("6e87"),m={existsUser:{type:Boolean,default:!1}},b=Object(c["a"])(Object(c["a"])({},Object(f["b"])("User",[p["c"]])),{},{closeSession:function(){Object(d["a"])(this.CHANGE_USER)}}),E={existsUser:function(){return this.existsUser||this.$router.replace({name:"login"}),this.existsUser}},_={name:"NavBar",props:m,methods:b,watch:E},h=_,v=r("2877"),U=Object(v["a"])(h,u,l,!1,null,null,null),g=U.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"page-footer font-small blue pt-4"},[r("hr",{staticClass:"clearfix w-100 d-md-none pb-3"}),r("div",{staticClass:"footer-copyright text-center py-3"},[e._v(" © 2020 Copyright: "),r("a",{attrs:{href:"/"}},[e._v("Ramos Aparicio")])])])}],w={name:"Footer"},y=w,S=Object(v["a"])(y,P,A,!1,null,null,null),O=S.exports,j=r("f121"),I=function(){return{url:j["a"]}},x={NavBar:g,Footer:O},R=Object(c["a"])({},Object(f["b"])("User",[p["c"]])),C=Object(c["a"])({},Object(f["c"])("User",["existsUser"])),k={name:"App",components:x,data:I,methods:R,computed:C,created:function(){Object(d["e"])(),Object(d["b"])(this.CHANGE_USER)}},B=k,T=Object(v["a"])(B,o,i,!1,null,null,null),V=T.exports,F=r("8c4f"),N=(r("d3b7"),{path:"*",name:"ruta404",meta:{public:!0},component:function(){return r.e("chunk-41aab653").then(r.bind(null,"1496"))}}),D={path:"/",name:"home",meta:{public:!1},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},G={path:"/login",name:"login",meta:{public:!0},component:function(){return r.e("chunk-2d2086b7").then(r.bind(null,"a55b"))}},L={path:"/movie",name:"movie",meta:{public:!1},component:function(){return r.e("chunk-0c3d2a86").then(r.bind(null,"def6"))}},M=[N,D,G,L],H=(r("45fc"),r("ade3")),q={namespaced:!0,state:{register:{inputEmail:null,inputPassword:null,errorEmail:null,errorPassword:null},login:{inputEmail:null,inputPassword:null,errorEmail:null,errorPassword:null}},mutations:(n={},Object(H["a"])(n,p["b"],(function(e,t){e.register=Object(c["a"])(Object(c["a"])({},e.register),t)})),Object(H["a"])(n,p["a"],(function(e,t){e.login=Object(c["a"])(Object(c["a"])({},e.login),t)})),n),actions:(a={},Object(H["a"])(a,p["b"],(function(e,t){e.commit(p["b"],t)})),Object(H["a"])(a,p["a"],(function(e,t){e.commit(p["a"],t)})),a)},$=q,K=(r("498a"),function(e){var t;switch(null===e||void 0===e||null===(t=e.toLowerCase())||void 0===t?void 0:t.trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:case void 0:return!1;default:return e}}),J={namespaced:!0,state:{existsUser:K(localStorage.getItem("existsUser"))||!1,currentUser:{}},mutations:Object(H["a"])({},p["c"],(function(e,t){e.existsUser=t.existsUser,e.currentUser=Object(c["a"])(Object(c["a"])({},e.currentUser),t.currentUser)})),actions:Object(H["a"])({},p["c"],(function(e,t){e.commit(p["c"],t)})),getters:{getUserExists:function(e){var t;return K(null===(t=e.currentUser)||void 0===t?void 0:t.email)}}},W=J;s["a"].use(f["a"]);var z=new f["a"].Store({modules:{StatusForm:$,User:W}}),Y=z,Z=function(e,t,r){Y.state.User.existsUser||e.matched.some((function(e){return e.meta.public}))?r():r({name:"login"})};s["a"].use(F["a"]);var Q=new F["a"]({mode:"history",base:"/",routes:M,scrollBehavior:function(){return{x:0,y:0}}});Q.beforeEach(Z);var X=Q;r("f9e3"),r("4989"),r("1157");s["a"].config.productionTip=!1,new s["a"]({router:X,store:Y,render:function(e){return e(V)}}).$mount("#app")},"63e0":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){switch(e){case"auth/invalid-email":return{inputEmail:"is-invalid"};case"auth/wrong-password":return{inputEmail:"is-valid",errorEmail:"",inputPassword:"is-invalid",errorPassword:"Sorry, the password entered is wrong.  Try another?"};case"auth/user-not-found":return{inputEmail:"is-invalid",errorEmail:"Sorry, the user entered is incorrect. Try another?"};case"reset-status":return{inputEmail:null,inputPassword:null,errorEmail:null,errorPassword:null};case"auth/email-already-in-use":return{inputEmail:"is-invalid",errorEmail:"Sorry, the user entered is already in use.  Try another?"};case"auth/too-many-requests":return{inputEmail:"is-invalid",inputPassword:"is-invalid",errorEmail:"Sorry, too many incorrect requests. Try again later...",errorPassword:"Sorry, too many incorrect requests. Try again later..."};case"auth/weak-password":return{inputEmail:"is-valid",errorEmail:"",inputPassword:"is-invalid",errorPassword:"Sorry, the password you entered is very weak. Try another?"}}},a=function(e){return{existsUser:e.existsUser,currentUser:e.currentUser}}},"6e87":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s}));var n="CHANGE_LOGIN",a="CHANGE_REGISTER",s="CHANGE_USER"},f121:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="http://www.omdbapi.com/?i=tt3896198&apikey=7645f33d"}});
//# sourceMappingURL=app.1bc34683.js.map