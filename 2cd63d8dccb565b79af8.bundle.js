(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{367:function(e,t,n){e.exports={login:"_3BQRRgle4rOZovpE969wm0"}},368:function(e,t,n){"use strict";n.r(t),t.default=n.p+"facebook-24556697.png"},369:function(e,t,n){e.exports={formLogin:"lDf2fjBWAXj13mYNAHPD9",formLoginTitle:"j89LmBgd5UegDa8SoknYC"}},520:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),i=n(367),c=n.n(i),l=n(37),u=n(38);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=n(368).default;console.log(f);var m=Object(a.f)((function(e){e.history;var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(Object(r.useState)(""),2);return t[0],t[1],Object(l.b)(),Object(r.useEffect)((function(){var e;(e=document.createElement("script")).src=document.location.protocol+"//connect.facebook.net/en_US/all.js",e.async=!0,document.getElementById("fb-root").appendChild(e),console.log(window),window.fbAsyncInit=function(){window.FB.init({appId:"304779517227376",status:!0,cookie:!0,xfbml:!0,version:"v4.0"}),window.FB.getLoginStatus((function(e){console.log(e)}))}}),[]),o.a.createElement("div",null,o.a.createElement("div",{id:"fb-root"}),o.a.createElement("button",{onClick:function(){FB.login((function(e){console.log(e)}))}},o.a.createElement("img",{src:f,alt:""})),o.a.createElement("button",{onClick:function(){FB.logout((function(e){console.log(e)}))}},o.a.createElement("img",{src:f,alt:""})))})),d=n(517),y=n(519),b=n(515),p=n(369),g=n.n(p);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=g.a.formLogin,w=g.a.formLoginTitle,I=Object(a.f)((function(e){var t=e.history,n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(Object(r.useState)(""),2),a=(n[0],n[1],Object(l.b)());return o.a.createElement("div",{className:"".concat(v," text-center")},o.a.createElement("div",{className:w},o.a.createElement("h4",null,"Chào mừng bạn đến với Tiny")),o.a.createElement(d.a,{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e),a({type:u.a.LOGIN,value:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}),t.push("/")},onFinishFailed:function(e){console.log("Failed:",e)}},o.a.createElement(d.a.Item,{name:"username",rules:[{required:!0,message:"Vui lòng nhập số điện thoại hoặc email!"}]},o.a.createElement(y.a,{placeholder:"Số điện thoại hoặc email"})),o.a.createElement(d.a.Item,{name:"password",rules:[{required:!0,message:"Vui lòng nhập mật khẩu!"}]},o.a.createElement(y.a.Password,{placeholder:"Mật khẩu"})),o.a.createElement(d.a.Item,null,o.a.createElement(b.a,{htmlType:"submit"},"Đăng nhập"))),o.a.createElement(m,null))})),E=c.a.login;t.default=Object(a.f)((function(e){return e.history,o.a.createElement("div",{className:"".concat(E," d-flex justify-content-center align-items-center")},o.a.createElement(I,null))}))}}]);