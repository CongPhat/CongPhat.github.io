(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/shared/assets/images/calender.svg":
/*!***********************************************!*\
  !*** ./src/shared/assets/images/calender.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "calender-bf22ed09.svg";

/***/ }),

/***/ "./src/shared/components/commons/form/FloatDatePicker/index.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/components/commons/form/FloatDatePicker/index.tsx ***!
  \**********************************************************************/
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/shared/components/commons/form/FloatDatePicker/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);


var _span, _img;
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var calendar = __webpack_require__(/*! @assets/images/calender.svg */ "./src/shared/assets/images/calender.svg");
var FloatDatePicker = function FloatDatePicker(props) {
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
  var dateFormat = "DD/MM/YYYY";
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
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["DatePicker"], {
    onChange: props.onChange,
    defaultValue: value,
    className: "date-picker-antd",
    placeholder: "",
    suffixIcon: _img || (_img = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("img", {
      src: calendar,
      alt: "calendar"
    })),
    format: dateFormat
  }), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("label", {
    className: "top-[7px] ml-[-4px] left-[16px] absolute t-12-semibold text-gray-600 z-10"
  }, void 0, label, " ", requiredMark), !isOccupied && /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("label", {
    className: "top-[26px] ml-[-4px] left-[16px] absolute t-14-normal text-gray-400 z-10"
  }, void 0, placeholder));
};
__signature__(FloatDatePicker, "useState{[focus, setFocus](false)}");
var _default = FloatDatePicker;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(FloatDatePicker, "FloatDatePicker", "/Users/admin/Documents/F88/F88-Partner.UI/src/shared/components/commons/form/FloatDatePicker/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/admin/Documents/F88/F88-Partner.UI/src/shared/components/commons/form/FloatDatePicker/index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/components/commons/form/FloatDatePicker/style.scss":
/*!***********************************************************************!*\
  !*** ./src/shared/components/commons/form/FloatDatePicker/style.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ui/view/User/pages/Register/index.tsx":
/*!***************************************************!*\
  !*** ./src/ui/view/User/pages/Register/index.tsx ***!
  \***************************************************/
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
/* harmony import */ var _components_commons_form_FloatDatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/commons/form/FloatDatePicker */ "./src/shared/components/commons/form/FloatDatePicker/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _view_User_components_HeaderUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @view/User/components/HeaderUser */ "./src/ui/view/User/components/HeaderUser/index.tsx");
/* harmony import */ var _view_User_components_LayoutUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @view/User/components/LayoutUser */ "./src/ui/view/User/components/LayoutUser/index.tsx");
/* harmony import */ var _view_User_components_CarouselUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @view/User/components/CarouselUser */ "./src/ui/view/User/components/CarouselUser/index.tsx");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @config/index */ "./src/shared/config/index.tsx");


var _div, _HeaderUser, _FloatInput, _FloatInput2, _FloatDatePicker, _FloatInputPassword, _ButtonComponentNew;
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};











var Register = function Register(_ref) {
  _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1___default()(_ref);
  var onFinish = function onFinish(values) {
    console.log("Success:", values);
  };
  var onFinishFailed = function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  };
  return /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_view_User_components_LayoutUser__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "min-h-screen grid grid-cols-2"
  }, void 0, _div || (_div = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "flex flex-col justify-center items-center bg-white-100"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_view_User_components_CarouselUser__WEBPACK_IMPORTED_MODULE_11__["default"], {}))), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "px-[64px] flex flex-col justify-center"
  }, void 0, _HeaderUser || (_HeaderUser = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_view_User_components_HeaderUser__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u0110\u0103ng k\xFD t\xE0i kho\u1EA3n F88 Partner",
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
    className: "mb-[24px]"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "grid grid-cols-2 gap-6"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "fullName",
    rules: [{
      required: true,
      message: "Vui lòng nhập họ và tên"
    }]
  }, void 0, _FloatInput || (_FloatInput = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_components_commons_form_FloatInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "H\u1ECD v\xE0 t\xEAn",
    placeholder: "Nh\u1EADp h\u1ECD v\xE0 t\xEAn c\u1EE7a b\u1EA1n",
    name: "fullName"
  }))), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "phoneNumber",
    rules: [{
      required: true,
      message: "Vui lòng nhập số điện thoại!"
    }, {
      pattern: /^[\d]{0,10}$/,
      message: "Vui lòng nhập đúng định dạng!"
    }]
  }, void 0, _FloatInput2 || (_FloatInput2 = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_components_commons_form_FloatInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
    placeholder: "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i c\u1EE7a b\u1EA1n",
    name: "phoneNumber"
  }))))), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "mb-[24px]"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "birthDay",
    rules: [{
      required: true,
      message: "Vui lòng nhập ngày sinh!"
    }]
  }, void 0, _FloatDatePicker || (_FloatDatePicker = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_components_commons_form_FloatDatePicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Ng\xE0y sinh",
    placeholder: "Ng\xE0y/th\xE1ng/n\u0103m",
    name: "birthDay"
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
  }))), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: "mt-[24px]"
  }, void 0, /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("p", {
    className: "t-14-medium text-gray-400"
  }, void 0, "B\u1EB1ng vi\u1EC7c s\u1EED d\u1EE5ng F88 Partner, b\u1EA1n \u0111\u1ED3ng \xFD v\u1EDBi c\xE1c", /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_12__["ROUTER_USER"].DEFAULT).concat(_config_index__WEBPACK_IMPORTED_MODULE_12__["ROUTER_USER"].LOGIN),
    className: "text-blue-500 text-center mx-[4px] underline"
  }, void 0, "ch\xEDnh s\xE1ch \u0111i\u1EC3u kho\u1EA3n b\u1EA3o m\u1EADt"), "c\u1EE7a F88")), _ButtonComponentNew || (_ButtonComponentNew = /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_components_commons_ButtonComponentNew__WEBPACK_IMPORTED_MODULE_4__["default"], {
    typeColor: "green",
    type: "submit",
    className: "w-full mt-[32px] mb-[20px]"
  }, void 0, "\u0110\u0103ng k\xFD")), /*#__PURE__*/_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_12__["ROUTER_USER"].DEFAULT).concat(_config_index__WEBPACK_IMPORTED_MODULE_12__["ROUTER_USER"].LOGIN),
    className: "t-16-semibold text-primary-500 text-center block"
  }, void 0, "N\u1EBFu b\u1EA1n \u0111\xE3 c\xF3 t\xE0i kho\u1EA3n? \u0110\u0103ng nh\u1EADp \u1EDF \u0111\xE2y"))))));
};
var _default = Register;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Register, "Register", "/Users/admin/Documents/F88/F88-Partner.UI/src/ui/view/User/pages/Register/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/admin/Documents/F88/F88-Partner.UI/src/ui/view/User/pages/Register/index.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=3bb6376c210675140d93.bundle.js.map