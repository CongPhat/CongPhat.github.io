(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/ui/view/User/pages/Login/index.tsx":
/*!************************************************!*\
  !*** ./src/ui/view/User/pages/Login/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_commons_ButtonComponentNew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/commons/ButtonComponentNew */ "./src/shared/components/commons/ButtonComponentNew/index.tsx");
/* harmony import */ var _components_commons_form_FloatInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/commons/form/FloatInput */ "./src/shared/components/commons/form/FloatInput/index.tsx");
/* harmony import */ var _components_commons_form_FloatInputPassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/commons/form/FloatInputPassword */ "./src/shared/components/commons/form/FloatInputPassword/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _view_User_components_HeaderUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @view/User/components/HeaderUser */ "./src/ui/view/User/components/HeaderUser/index.tsx");
/* harmony import */ var _view_User_components_LayoutUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @view/User/components/LayoutUser */ "./src/ui/view/User/components/LayoutUser/index.tsx");
/* harmony import */ var _view_User_components_CarouselUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @view/User/components/CarouselUser */ "./src/ui/view/User/components/CarouselUser/index.tsx");


var _div, _HeaderUser, _FloatInput, _FloatInputPassword, _ButtonComponentNew, _Link;
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









var Login = function Login(_ref) {
  _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1___default()(_ref);
  var onFinish = function onFinish(values) {
    console.log("Success:", values);
  };
  var onFinishFailed = function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  };
  return /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_view_User_components_LayoutUser__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "min-h-screen grid grid-cols-2"
  }, void 0, _div || (_div = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "flex flex-col justify-center items-center bg-white-100"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_view_User_components_CarouselUser__WEBPACK_IMPORTED_MODULE_10__["default"], {}))), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "px-[64px] flex flex-col justify-center"
  }, void 0, _HeaderUser || (_HeaderUser = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_view_User_components_HeaderUser__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "\u0110\u0103ng nh\u1EADp",
    description: "Lorem ipsum dolor sit amet consectetur. Aliquet."
  })), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "basic"
    // labelCol={{ span: 8 }}
    // wrapperCol={{ span: 16 }}
    // style={{ maxWidth: 600 }}
    ,
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    autoComplete: "off"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "mb-[30px]"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "phoneNumber",
    rules: [{
      required: true,
      message: "Vui lòng nhập số điện thoại!"
    }, {
      pattern: /^[\d]{0,10}$/,
      message: "Vui lòng nhập đúng định dạng!"
    }]
  }, void 0, _FloatInput || (_FloatInput = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_components_commons_form_FloatInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
    placeholder: "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i c\u1EE7a b\u1EA1n",
    name: "phoneNumber"
  })))), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "password",
    rules: [{
      required: true,
      message: "Vui lòng nhập mật khẩu!"
    }]
  }, void 0, _FloatInputPassword || (_FloatInputPassword = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_components_commons_form_FloatInputPassword__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "M\u1EADt kh\u1EA9u",
    placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u",
    name: "password"
  }))), _ButtonComponentNew || (_ButtonComponentNew = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_components_commons_ButtonComponentNew__WEBPACK_IMPORTED_MODULE_4__["default"], {
    typeColor: "green",
    type: "submit",
    className: "w-full mt-[32px] mb-[20px]"
  }, void 0, "\u0110\u0103ng nh\u1EADp")), _Link || (_Link = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/",
    className: "t-16-semibold text-primary-500 text-center block"
  }, void 0, "Qu\xEAn m\u1EADt kh\u1EA9u")))))));
};
var _default = Login;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Login, "Login", "/Users/admin/Documents/F88/F88-Partner.UI/src/ui/view/User/pages/Login/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/admin/Documents/F88/F88-Partner.UI/src/ui/view/User/pages/Login/index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=34fc96f130081852b6a4.bundle.js.map