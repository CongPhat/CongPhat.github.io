!function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],d=0,_=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&_.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);_.length;)_.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={2:0},i={2:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{8:1,9:1,10:1,12:1}[e]&&t.push(o[e]=new Promise(function(t,r){for(var n=e+".css",i=c.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=(l=a[s]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){var l;if((u=(l=d[s]).getAttribute("data-href"))===n||u===i)return t()}var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onload=t,_.onerror=function(t){var n=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.request=n,delete o[e],_.parentNode.removeChild(_),r(a)},_.href=i,document.getElementsByTagName("head")[0].appendChild(_)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=function(e){return c.p+""+{1:"3622a9e27b907da4ac0d",6:"da1c86604aa4918e9115",7:"138dd7531e2647f78bd5",8:"92fdb11322c111374a2a",9:"f664d6b708c9e25eff20",10:"4db3f4a7f1c680fceb53",11:"e3c559d1e69c77b38456",12:"9f959b4a64ee62cf45ab"}[e]+".bundle.js"}(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(d);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}i[e]=void 0}};var d=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw e};var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=u;a.push([214,0,4]),r()}({101:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(28),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(58),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(60),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__),_authentication__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(44),axios__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(100),axios__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__),_config_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),_components_commons_NotificationComponent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(102),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Service=function(){function Service(){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,Service),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this,"service",void 0),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this,"createFileDownloadURL",function(e,t){if(e&&t)return _config_index__WEBPACK_IMPORTED_MODULE_7__.b.API_URL_BASE+"/file/download/"+e+"?token="+t});var e=axios__WEBPACK_IMPORTED_MODULE_6___default.a.create({baseURL:_config_index__WEBPACK_IMPORTED_MODULE_7__.b.API_URL_BASE});e.interceptors.response.use(this.handleSuccess,this.handleError),this.service=e}return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Service,[{key:"handleSuccess",value:function(e){return Promise.resolve(e.data)}},{key:"handleError",value:function(e){switch(e.response.status){case 401:Object(_authentication__WEBPACK_IMPORTED_MODULE_5__.a)(),delete this.service.defaults.headers.common.Authorization,window.location.reload(),window.location.href="/#/login";break;case 500:var t,r;Object(_components_commons_NotificationComponent__WEBPACK_IMPORTED_MODULE_8__.a)({type:"error",notificationProps:{message:(null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:null===(r=t.data)||void 0===r?void 0:r.message)||"errorServer"}});break;default:var n,o;Object(_components_commons_NotificationComponent__WEBPACK_IMPORTED_MODULE_8__.a)({type:"error",notificationProps:{message:(null===e||void 0===e?void 0:null===(n=e.response)||void 0===n?void 0:null===(o=n.data)||void 0===o?void 0:o.message)||"default"}})}return Promise.reject(e)}},{key:"preparePrivateHeaderConfig",value:function(){var e=Object(_authentication__WEBPACK_IMPORTED_MODULE_5__.b)();return{Authorization:"Bearer ".concat(e)}}},{key:"getAPIURL",value:function(e){return _config_index__WEBPACK_IMPORTED_MODULE_7__.b.API_URL_BASE+e}},{key:"getDefaultConfig",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isPrivate,r=e.isFormData,n={headers:{}};if(t){var o=this.preparePrivateHeaderConfig();Object.assign(n.headers,o)}return r&&Object.assign(n.headers,{"Content-Type":"multipart/form-data"}),n}},{key:"get",value:function(){var e=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(t){var r,n,o,i,a=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},n=r.isPrivate,o=void 0===n||n,i=this.getDefaultConfig({isPrivate:o}),e.next=4,this.service.get(t,i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(t,r){var n,o,i,a,c,s,u=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>2&&void 0!==u[2]?u[2]:{},o=n.isPrivate,i=void 0===o||o,a=n.isFormData,c=void 0!==a&&a,s=this.getDefaultConfig({isPrivate:i,isFormData:c}),e.next=4,this.service.post(t,r,s);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(t,r){var n,o,i,a,c=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:{},o=n.isPrivate,i=void 0===o||o,a=this.getDefaultConfig({isPrivate:i}),e.next=4,this.service.put(t,r,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(t){var r,n,o,i,a=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},n=r.isPrivate,o=void 0===n||n,i=this.getDefaultConfig({isPrivate:o}),e.next=4,this.service.delete(t,i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Service}(),_default=new Service,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Service,"Service","D:\\Project\\2020\\inital-project-frontend\\src\\services\\apiService.ts"),reactHotLoader.register(_default,"default","D:\\Project\\2020\\inital-project-frontend\\src\\services\\apiService.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(21)(module))},102:function(e,t,r){"use strict";(function(e){var n,o=r(14),i=r.n(o),a=r(206),c=r(194),s=r(20);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,_,f=function(e){var t=localStorage.getItem(s.a)||s.c,r=e.notificationProps,n=e.type,o=e.fileTranslateKey;a.a.config({placement:"bottomRight"});var i=o||c.a;return a.a[n||"info"](d(d({},r),{},{message:h(i,r.message||"",t)}))},p=f;function h(e,t,r){return e[t][r]}t.a=p,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(f,"NotificationComponent","D:\\Project\\2020\\inital-project-frontend\\src\\components\\commons\\NotificationComponent\\index.tsx"),l.register(h,"MessageRespone","D:\\Project\\2020\\inital-project-frontend\\src\\components\\commons\\NotificationComponent\\index.tsx"),l.register(p,"default","D:\\Project\\2020\\inital-project-frontend\\src\\components\\commons\\NotificationComponent\\index.tsx")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}).call(this,r(21)(e))},115:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return u});var n,o=r(72);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,a,c={privateLogin:!1,account:null},s=Object(o.createSliceP)({name:"login",initialState:c,reducers:{actionLogin:function(e,t,r){t.account=r,t.privateLogin=!0}}}),u=s.action.actionLogin,d=s.reducer;t.b=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"initialState","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\AuthReducer.tsx"),i.register(s,"AuthSlice","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\AuthReducer.tsx"),i.register(u,"actionLogin","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\AuthReducer.tsx"),i.register(d,"default","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\AuthReducer.tsx")),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)}).call(this,r(21)(e))},188:function(e,t,r){"use strict";(function(e){r.d(t,"c",function(){return d}),r.d(t,"a",function(){return l});var n,o=r(72);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,a,c={value:0,data:[]},s=Object(o.createSliceP)({name:"example",initialState:c,reducers:{incrementP:function(e,t,r){t.value=t.value+r},decrementP:function(e,t,r){t.value=t.value+r},textCallApi:function(e,t,r){t.data=r.payload}}}),u=s.action,d=u.incrementP,l=u.decrementP,_=u.textCallApi,f=s.reducer;t.b=f,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"initialState","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\exampleReducer.tsx"),i.register(s,"exampleSliceP","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\exampleReducer.tsx"),i.register(d,"incrementP","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\exampleReducer.tsx"),i.register(l,"decrementP","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\exampleReducer.tsx"),i.register(_,"textCallApi","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\exampleReducer.tsx"),i.register(f,"default","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\exampleReducer.tsx")),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)}).call(this,r(21)(e))},191:function(e,t,r){"use strict";(function(e){var n,o=r(10),i=r.n(o),a=r(192),c=r(0),s=r.n(c),u=r(5);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,l,_=s.a.lazy(function(){return Promise.all([r.e(1),r.e(7),r.e(9)]).then(r.bind(null,388))}),f=s.a.lazy(function(){return Promise.all([r.e(1),r.e(6),r.e(8)]).then(r.bind(null,389))}),p=i()(c.Suspense,{fallback:i()("div",{})},void 0,i()(_,{})),h=i()(c.Suspense,{fallback:i()("div",{})},void 0,i()(f,{})),b=function(e){var t=e.privateLogin;return i()(u.Switch,{},void 0,t?p:h)},g=Object(a.a)(b);t.a=g,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(_,"PrivatePage","D:\\Project\\2020\\inital-project-frontend\\src\\shared\\components\\App.tsx"),d.register(f,"PublicPage","D:\\Project\\2020\\inital-project-frontend\\src\\shared\\components\\App.tsx"),d.register(b,"App","D:\\Project\\2020\\inital-project-frontend\\src\\shared\\components\\App.tsx"),d.register(g,"default","D:\\Project\\2020\\inital-project-frontend\\src\\shared\\components\\App.tsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(21)(e))},192:function(e,t,r){"use strict";(function(e){var n,o=r(10),i=r.n(o),a=r(0),c=r.n(a),s=r(5),u=r(44);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function d(e){return Object(s.withRouter)(function(t){t.history;return c.a.createElement(c.a.Fragment,null,i()(e,{privateLogin:Object(u.b)()}))})}var l,_,f=d;t.a=f,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(d,"PrivateLogin","D:\\Project\\2020\\inital-project-frontend\\src\\middlewares\\PrivateLogin.tsx"),l.register(f,"default","D:\\Project\\2020\\inital-project-frontend\\src\\middlewares\\PrivateLogin.tsx")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}).call(this,r(21)(e))},194:function(e,t,r){"use strict";r.d(t,"a",function(){return n});"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n=r(356)},20:function(e,t,r){"use strict";(function(e){var n;r.d(t,"b",function(){return c}),r.d(t,"c",function(){return s}),r.d(t,"a",function(){return u}),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,i,a=document.head.querySelector("[property~=base_url][content]").content,c={API_URL_BASE:a,AuthenticationHeaderField:"token"},s="USA",u="__INIT__CURRENT_LANGUAGE__";(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(a,"BASE_URL","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register(c,"SERVICES","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register(s,"USA","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register(u,"CURRENT_LANGUAGE","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/dashboard","DASHBOARD","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/deivices","DEVICES","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/add-deivices","DEVICES_ADD","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/edit-deivices","EDIT_ADD","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/deivice-detail","DEVICE_DETAIL","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/deivice-create-detail","DEVICE_CREATE","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/customers","CUSTOMERS","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/customer-detail","CUSTOMER_DETAIL","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/customer-create","CUSTOMER_CREATE","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/users","USERS","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/user-detail","USER_DETAIL","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/user-create","USER_CREATE","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/change-password","CHANGE_PASS","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/survey","SURVEY","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/session","SESSION","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/question","QUESTION","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/session/question/:id","SURVEY_QUESTION","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/campaign-manager","CAMPAIGN_MANAGER","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/campaign-create","CAMPAIGN_CREATE","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/campaign-update","CAMPAIGN_UPDATE","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/campaign-code","CAMPAIGN_DETAIL","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/location","LOCATION","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/location/edit","LOCATION_EDIT","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/location/detail","LOCATION_DETAIL","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/location/map","LOCATION_MAP","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx"),o.register("/device-dashboard","DEVICE_DASHBOARD","D:\\Project\\2020\\inital-project-frontend\\src\\config\\index.tsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(21)(e))},203:function(e,t,r){"use strict";(function(e){var n,o=r(52),i=r(188),a=r(115);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,u=Object(o.b)({example:i.b,Auth:a.b}),d=Object(o.c)(u);t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(u,"RootReducer","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\RootReducer.tsx"),c.register(d,"default","D:\\Project\\2020\\inital-project-frontend\\src\\reducer\\RootReducer.tsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(21)(e))},214:function(e,t,r){"use strict";r.r(t);var n=r(10),o=r.n(n),i=(r(0),r(15)),a=r.n(i),c=r(191),s=r(203),u=r(114),d=r(43);r(384),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;a.a.render(o()(u.a,{store:s.a},void 0,o()(d.BrowserRouter,{},void 0,o()(c.a,{}))),document.getElementById("root"))},223:function(e,t){},225:function(e,t){},238:function(e,t){},240:function(e,t){},268:function(e,t){},270:function(e,t){},271:function(e,t){},276:function(e,t){},278:function(e,t){},285:function(e,t){},287:function(e,t){},305:function(e,t){},307:function(e,t){},319:function(e,t){},322:function(e,t){},356:function(e){e.exports=JSON.parse('{"ShowAllSuccess":{"VNM":"Hiển thị thành công.","USA":"Show all success"},"StoredHistoryUserMedicalSuccess":{"VNM":"Tạo lịch sử thành công.","USA":"Stored history success"},"CanNotFoundHistoryId":{"VNM":"Lịch sử không tồn tại .","USA":"Can not found history id."},"ShowDetailHistorySuccess":{"VNM":"Hiện thị chi tiết lịch sử thành công.","USA":"Show detail history success"},"BmiRequired":{"VNM":"Bmi là trường bắt buộc","USA":"Bmi is required"},"TitleRequired":{"VNM":"Tiêu đề là trường bắt buộc","USA":"Title is required"},"TempRequired":{"VNM":"Nhiệt độ là trường bắt buộc","USA":"Temp is required"},"SbpRequired":{"VNM":"Sbp là trường bắt buộc","USA":"Sbp is required"},"DbpRequired":{"VNM":"Dbp là trường bắt buộc","USA":"Dbp is required"},"WeightRequired":{"VNM":"Cân nặng là trường bắt buộc","USA":"Weight is required"},"HeightRequired":{"VNM":"Chiệu cao là trường bắt buộc","USA":"Height is required"},"HeartRequired":{"VNM":"Nhịp tim là trường bắt buộc","USA":"Heart is required"},"DeviceNotFound":{"VNM":"Không tìm thấy thiết bị ","USA":"Device not found."},"ShowDetail":{"VNM":"Hiển thị thành công.","USA":"Show detail success"},"AddDeviceSuccess":{"VNM":"Thêm thiết bị thành công.","USA":"Add device success"},"UpdateDeviceSuccess":{"VNM":"Cập nhật thiết bị thành công.","USA":"Update device success"},"ShowListLogSuccess":{"VNM":"Hiển thị lịch sử thiết bị thành công","USA":"Show all log success"},"DeviceNameRequired":{"VNM":"Tên thiết bị là bắt buộc.","USA":"Device name is required"},"MaxlengthDeviceName255":{"VNM":"Tên thiết bị không quá 255 ký tự.","USA":"DeviceName max length 255 "},"LatitudeRequired":{"VNM":"Latitude là bắt buộc.","USA":" Latitude is required"},"LongitudeRequired":{"VNM":"Longitude là bắt buộc.","USA":"Longitude is required"},"DeviceIdRequired":{"VNM":"Id thiết bị bắt buộc.","USA":"Device id is required"},"ContentRequired":{"VNM":"Nội dung bắt buộc.","USA":"Content is required"},"Moudle":"Customer","Error":{"VNM":"Lỗi ","USA":"Error"},"FaceDetectFail":{"VNM":"Không thể nhận diện khuôn mặt","USA":"Face Detect Fail"},"CustomerNotFound":{"VNM":"Không tìm thấy khác hàng.","USA":"Custormer not found."},"ImageRequired":{"VNM":"Hình ảnh bắt buộc.","USA":"Image is required"},"UpdateCustomerSuccess":{"VNM":"Cập nhật thông tin khách hàng thành công.","USA":"Update customer success"},"DeleteCustomerSuccess":{"VNM":"Xóa khách hàng thành công","USA":"Delete customer success"},"ShowListCustomerSuccess":{"VNM":"Hiện thị danh sách khác hàng thành công.","USA":"Show list customer success"},"CustomerCodeRequired":{"VNM":"Mã khách hàng là bắt buộc.","USA":"Custormer code is required"},"CustomerNameRequired":{"VNM":"Tên khách hàng là bắt buộc ","USA":"Customer name is required"},"CustomerAgeRequired":{"VNM":"Tuổi khách hàng là bắt buộc ","USA":"Customer age is required"},"CustomerGenderRequired":{"VNM":"Giới tính là bắt buộc","USA":"Customer gender is required"},"CustomerAddressRequired":{"VNM":"Địa chỉ là bắt buộc.","USA":"Customer address is required"},"PhoneNumberRequired":{"VNM":"Số điện thoại là bắt buộc.","USA":"Phone number is required"},"NotAValidPhoneNumber":{"VNM":"Số điện thoại không đúng.","USA":"Phone number not avalid"},"CustomerImageRequired":{"VNM":"Hình đại diện là bắt buộc.","USA":"Customer image is required"},"Success":{"VNM":"Thành công","USA":"Success"},"success":{"VNM":"Thành công","USA":"Success"},"KeyDoesNotExist":{"VNM":"Key không tồn tại","USA":"Key not exist"},"PasswordIncorrect":{"VNM":"Mật khẩu không đúng","USA":"Incorrect password"},"UserNotExist":{"VNM":"Người dùng không tồn tại","USA":"User not exist"},"ConfirmPasswordNotMatch":{"VNM":"Mật khẩu và xác nhận mật khẩu không khớp","USA":"Confirm and  password not match"},"LoginSuccess":{"VNM":"Đăng nhập thành công","USA":"Login success"},"UserAreadlyExist":{"VNM":"Người dùng đã tồn tại","USA":"User areadly exist"},"AddUserSuccess":{"VNM":"Thêm người dùng thành công","USA":"Add user success"},"EmailAreadlyExist":{"VNM":"Email đã tồn tại","USA":"Email areadly exist"},"UpdateSuccessful":{"VNM":"Cập nhật thành công","USA":"Update success"},"ErrorServer":{"VNM":"Lỗi hệ thống không xác định","USA":"System error"},"default":{"VNM":"Lỗi không xác định","USA":"Some thing was wrong"},"Authentication":{"VNM":"Xác thực không hợp lệ","USA":"Some thing was wrong"},"AddGroupDeviceSuccess":{"VNM":"Thêm nhóm thiết bị thành công!","USA":"Add Group Device Success!"},"DeleteGroupDeviceSuccess":{"VNM":"Xoá nhóm thiết bị thành công!","USA":"Delete Group Device Success!"},"DeviceNotActived":{"VNM":"Thiết bị chưa được kích hoạt","USA":"Device not actived"}}')},384:function(e,t,r){},44:function(e,t,r){"use strict";(function(e){r.d(t,"d",function(){return p}),r.d(t,"c",function(){return b}),r.d(t,"a",function(){return g}),r.d(t,"b",function(){return v}),r.d(t,"e",function(){return P});var n,o=r(11),i=r.n(o),a=r(28),c=r.n(a),s=r(193),u=r.n(s),d=r(101),l=r(20);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var _,f,p=function(){var e=c()(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/user/login",t,{isPrivate:!1});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=c()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/users/me");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=v();if(e)return u.a.decode(e)},g=function(){localStorage.removeItem(l.b.AuthenticationHeaderField)},v=function(){return localStorage.getItem(l.b.AuthenticationHeaderField)},P=function(e){localStorage.setItem(l.b.AuthenticationHeaderField,e)};(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(p,"login","D:\\Project\\2020\\inital-project-frontend\\src\\services\\authentication.ts"),_.register(h,"getAccountInfo","D:\\Project\\2020\\inital-project-frontend\\src\\services\\authentication.ts"),_.register(b,"getUserInfoToken","D:\\Project\\2020\\inital-project-frontend\\src\\services\\authentication.ts"),_.register(g,"clearToken","D:\\Project\\2020\\inital-project-frontend\\src\\services\\authentication.ts"),_.register(v,"getToken","D:\\Project\\2020\\inital-project-frontend\\src\\services\\authentication.ts"),_.register(P,"setToken","D:\\Project\\2020\\inital-project-frontend\\src\\services\\authentication.ts")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(21)(e))}});