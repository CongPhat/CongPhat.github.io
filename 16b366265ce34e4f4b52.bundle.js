(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/shared/assets/images/user/background.png":
/*!******************************************************!*\
  !*** ./src/shared/assets/images/user/background.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-ec06336d.png";

/***/ }),

/***/ "./src/shared/assets/images/user/image-partner-1.png":
/*!***********************************************************!*\
  !*** ./src/shared/assets/images/user/image-partner-1.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image-partner-1-0cc6c760.png";

/***/ }),

/***/ "./src/shared/assets/images/user/image-partner-2.png":
/*!***********************************************************!*\
  !*** ./src/shared/assets/images/user/image-partner-2.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image-partner-2-7e4f76f2.png";

/***/ }),

/***/ "./src/shared/assets/images/user/image-partner-3.png":
/*!***********************************************************!*\
  !*** ./src/shared/assets/images/user/image-partner-3.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image-partner-3-99d577ca.png";

/***/ }),

/***/ "./src/ui/view/User/components/CarouselUser/index.tsx":
/*!************************************************************!*\
  !*** ./src/ui/view/User/components/CarouselUser/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/ui/view/User/components/CarouselUser/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var ImagePartner1 = __webpack_require__(/*! @assets/images/user/image-partner-1.png */ "./src/shared/assets/images/user/image-partner-1.png");
var ImagePartner2 = __webpack_require__(/*! @assets/images/user/image-partner-2.png */ "./src/shared/assets/images/user/image-partner-2.png");
var ImagePartner3 = __webpack_require__(/*! @assets/images/user/image-partner-3.png */ "./src/shared/assets/images/user/image-partner-3.png");
var DATA_CAROUSEL = [{
  image: ImagePartner1,
  title: "Giới thiệu khách hàng bảo hiểm",
  description: "Nhận ngay 10%/ 1 hợp đồng"
}, {
  image: ImagePartner2,
  title: "Giới thiệu khách vay",
  description: "Nhận ngay 200.000 ngàn/1 hợp đồng"
}, {
  image: ImagePartner3,
  title: "Học là có quà",
  description: "Cấp các chứng chỉ sau mỗi khoá học"
}];
var ItemCarouselUse = function ItemCarouselUse(_ref) {
  var image = _ref.image,
    title = _ref.title,
    description = _ref.description;
  return /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    className: "flex items-center flex-col mb-[40px]"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("img", {
    src: image,
    alt: "",
    className: "w-[400px] h-[400px]"
  }), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("h6", {
    className: "mt-[24px] text-[24px] leading-[32px] font-semibold text-gray-600 mb-[4px]"
  }, void 0, title), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("span", {
    className: "t-14-medium text-gray-500"
  }, void 0, description));
};
var CarouselUser = function CarouselUser(_ref2) {
  _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2);
  return /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    className: "carousel-user"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    autoplay: true
  }, void 0, DATA_CAROUSEL.map(function (x) {
    return /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(ItemCarouselUse, {
      image: x.image,
      title: x.title,
      description: x.description
    });
  })));
};
var _default = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(CarouselUser);
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(DATA_CAROUSEL, "DATA_CAROUSEL", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/components/CarouselUser/index.tsx");
  reactHotLoader.register(ItemCarouselUse, "ItemCarouselUse", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/components/CarouselUser/index.tsx");
  reactHotLoader.register(CarouselUser, "CarouselUser", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/components/CarouselUser/index.tsx");
  reactHotLoader.register(_default, "default", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/components/CarouselUser/index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/ui/view/User/components/CarouselUser/style.scss":
/*!*************************************************************!*\
  !*** ./src/ui/view/User/components/CarouselUser/style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ui/view/User/components/HeaderUser/index.tsx":
/*!**********************************************************!*\
  !*** ./src/ui/view/User/components/HeaderUser/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _div;
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var logo = __webpack_require__(/*! @assets/images/Logo.png */ "./src/shared/assets/images/Logo.png");
var HeaderUser = function HeaderUser(_ref) {
  var title = _ref.title,
    description = _ref.description;
  return /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, _div || (_div = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("img", {
    src: logo,
    alt: "logo-partner",
    className: "w-[200px]"
  }))), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "mt-[40px] mb-[24px]"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("h6", {
    className: "mb-[4px] text-[32px] leading-[44px] font-bold text-primary-500"
  }, void 0, title), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
    className: "t-14-medium text-gray-500"
  }, void 0, description)));
};
var _default = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(HeaderUser);
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(HeaderUser, "HeaderUser", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/components/HeaderUser/index.tsx");
  reactHotLoader.register(_default, "default", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/components/HeaderUser/index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/ui/view/User/components/LayoutAction/index.tsx":
/*!************************************************************!*\
  !*** ./src/ui/view/User/components/LayoutAction/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ImageBG = __webpack_require__(/*! @assets/images/user/background.png */ "./src/shared/assets/images/user/background.png");
var LayoutAction = function LayoutAction(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "px-[64px] flex flex-col justify-center"
  }, void 0, children);
};
var _default = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(LayoutAction);
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(LayoutAction, "LayoutAction", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/components/LayoutAction/index.tsx");
  reactHotLoader.register(_default, "default", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/components/LayoutAction/index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/ui/view/User/components/LayoutUser/index.tsx":
/*!**********************************************************!*\
  !*** ./src/ui/view/User/components/LayoutUser/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ImageBG = __webpack_require__(/*! @assets/images/user/background.png */ "./src/shared/assets/images/user/background.png");
var LayoutUser = function LayoutUser(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "min-h-screen min-w-[100vw]"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "container-area"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    style: {
      backgroundImage: "url(".concat(ImageBG, ")")
    },
    className: "relative min-h-screen bg-no-repeat bg-cover bg-bottom"
  }, void 0, children)));
};
var _default = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(LayoutUser);
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(LayoutUser, "LayoutUser", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/components/LayoutUser/index.tsx");
  reactHotLoader.register(_default, "default", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/components/LayoutUser/index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/ui/view/User/pages/ForgotPasswordConfirm/index.tsx":
/*!****************************************************************!*\
  !*** ./src/ui/view/User/pages/ForgotPasswordConfirm/index.tsx ***!
  \****************************************************************/
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
/* harmony import */ var _view_User_components_HeaderUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @view/User/components/HeaderUser */ "./src/ui/view/User/components/HeaderUser/index.tsx");
/* harmony import */ var _view_User_components_LayoutUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @view/User/components/LayoutUser */ "./src/ui/view/User/components/LayoutUser/index.tsx");
/* harmony import */ var _view_User_components_CarouselUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @view/User/components/CarouselUser */ "./src/ui/view/User/components/CarouselUser/index.tsx");
/* harmony import */ var _view_User_components_LayoutAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @view/User/components/LayoutAction */ "./src/ui/view/User/components/LayoutAction/index.tsx");


var _div, _HeaderUser, _Radio$Group, _ButtonComponentNew;
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var ForgotPasswordConfirm = function ForgotPasswordConfirm(_ref) {
  _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1___default()(_ref);
  var onFinish = function onFinish(values) {
    console.log("Success:", values);
  };
  var onFinishFailed = function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  };
  return /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_view_User_components_LayoutUser__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "min-h-screen grid grid-cols-2"
  }, void 0, _div || (_div = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "flex flex-col justify-center items-center bg-white-100"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_view_User_components_CarouselUser__WEBPACK_IMPORTED_MODULE_7__["default"], {}))), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_view_User_components_LayoutAction__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, _HeaderUser || (_HeaderUser = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_view_User_components_HeaderUser__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Qu\xEAn m\u1EADt kh\u1EA9u",
    description: "\u0110\u1EEBng lo l\u1EAFng, ch\xFAng t\xF4i s\u1EBD gi\xFAp b\u1EA1n t\xECm l\u1EA1i m\u1EADt kh\u1EA9u."
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
    name: "taone"
    // rules={[
    //   {
    //     required: true,
    //     message: "Vui lòng nhập số điện thoại!",
    //   },
    //   {
    //     pattern: /^[\d]{0,10}$/,
    //     message: "Vui lòng nhập đúng định dạng!",
    //   },
    // ]}
  }, void 0, _Radio$Group || (_Radio$Group = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {}, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
    direction: "vertical"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    value: "a",
    className: "1234"
  }, void 0, "item 1"), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    value: "b"
  }, void 0, "item 2"), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    value: "c"
  }, void 0, "item 3")))))), _ButtonComponentNew || (_ButtonComponentNew = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_components_commons_ButtonComponentNew__WEBPACK_IMPORTED_MODULE_4__["default"], {
    typeColor: "green",
    type: "submit",
    className: "w-full mt-[32px] mb-[20px]"
  }, void 0, "Ti\u1EBFp t\u1EE5c"))))))));
};
var _default = ForgotPasswordConfirm;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(ForgotPasswordConfirm, "ForgotPasswordConfirm", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/pages/ForgotPasswordConfirm/index.tsx");
  reactHotLoader.register(_default, "default", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/ui/view/User/pages/ForgotPasswordConfirm/index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=16b366265ce34e4f4b52.bundle.js.map