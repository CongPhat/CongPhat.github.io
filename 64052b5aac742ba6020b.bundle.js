(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

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

/***/ "./src/shared/components/commons/form/FloatInput/index.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/components/commons/form/FloatInput/index.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _span;
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


var FloatInput = function FloatInput(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
    focus = _useState2[0],
    setFocus = _useState2[1];
  var label = props.label,
    value = props.value,
    placeholder = props.placeholder,
    type = props.type,
    required = props.required;
  if (!placeholder) placeholder = label;
  var isOccupied = focus || value && value.length !== 0;
  var labelAsLabel = "top-[-8px] py-[4px] ml-[-4px]";
  var labelAsPlaceHolder = "text-red-100";
  var labelClass = isOccupied ? labelAsLabel : labelAsPlaceHolder;
  var requiredMark = required ? _span || (_span = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
    className: "text-danger"
  }, void 0, "*")) : null;
  return /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "float-label relative bg-white-100",
    onBlur: function onBlur() {
      return setFocus(false);
    },
    onFocus: function onFocus() {
      return setFocus(true);
    }
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    onChange: props.onChange,
    type: type,
    defaultValue: value,
    className: "pt-[20px] h-[48px] rounded-[4px] border-gray-300 z-10 bg-transparent t-14-normal text-gray-400"
  }), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("label", {
    className: "top-[7px] ml-[-4px] left-[16px] absolute t-12-semibold leading-[18px] text-gray-600"
  }, void 0, label, " ", requiredMark), !isOccupied && /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("label", {
    className: "top-[26px] ml-[-4px] left-[16px] absolute t-14-normal text-gray-400"
  }, void 0, placeholder));
};
__signature__(FloatInput, "useState{[focus, setFocus](false)}");
var _default = FloatInput;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(FloatInput, "FloatInput", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/shared/components/commons/form/FloatInput/index.tsx");
  reactHotLoader.register(_default, "default", "/var/lib/jenkins/workspace/Growth-LDZ-SIT-F88Partner-FE/src/shared/components/commons/form/FloatInput/index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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

var logo = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '@assets/images/logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

/***/ })

}]);
//# sourceMappingURL=64052b5aac742ba6020b.bundle.js.map