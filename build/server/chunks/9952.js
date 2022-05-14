"use strict";
exports.id = 9952;
exports.ids = [9952];
exports.modules = {

/***/ 757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);





const ScrollbarRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((simplebar_react__WEBPACK_IMPORTED_MODULE_2___default()))``;
const Scrollbar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return(// @ts-ignore
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollbarRoot, {
        ref: ref,
        ...props
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);


/***/ }),

/***/ 4198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Placeholder),
/* harmony export */   "Z": () => (/* binding */ placeholder)
/* harmony export */ });
var Placeholder;
(function(Placeholder) {
    Placeholder["BRAND"] = "brand";
    Placeholder["CATEGORY"] = "category";
    Placeholder["PRODUCT"] = "product";
    Placeholder["SERVICE"] = "service";
    Placeholder["STORE"] = "store";
    Placeholder["USER"] = "user";
})(Placeholder || (Placeholder = {}));
function placeholder(type) {
    switch(type){
        case Placeholder.BRAND:
            return "/assets/placeholders/brand.png";
        case Placeholder.CATEGORY:
            return "/assets/placeholders/category.png";
        case Placeholder.PRODUCT:
            return "/assets/placeholders/product.png";
        case Placeholder.SERVICE:
            return "/assets/placeholders/service.png";
        case Placeholder.STORE:
            return "/assets/placeholders/store.png";
        case Placeholder.USER:
            return "/assets/placeholders/portrait.png";
        default:
            return "/assets/placeholders/placeholder.png";
    }
};


/***/ })

};
;