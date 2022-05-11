"use strict";
exports.id = 7294;
exports.ids = [7294];
exports.modules = {

/***/ 757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Scrollbar)
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


/***/ }),

/***/ 3481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LQ": () => (/* binding */ useGetAdminProductsQuery),
/* harmony export */   "mq": () => (/* binding */ useGetAdminUsersQuery)
/* harmony export */ });
/* unused harmony exports Tags, adminApi */
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9850);

var Tags;
(function(Tags) {
    Tags["PRODUCTS"] = "admin/product";
    Tags["USERS"] = "admin/user";
})(Tags || (Tags = {}));
const adminApi = _api_service__WEBPACK_IMPORTED_MODULE_0__/* .api.enhanceEndpoints */ .h.enhanceEndpoints({
    addTagTypes: Object.values(Tags)
}).injectEndpoints({
    endpoints: (builder)=>({
            getAdminProducts: builder.query({
                query: (params)=>({
                        url: "admin/product",
                        params
                    })
                ,
                providesTags: [
                    Tags.PRODUCTS
                ]
            }),
            getAdminUsers: builder.query({
                query: (params)=>({
                        url: "admin/user",
                        params
                    })
                ,
                providesTags: [
                    Tags.USERS
                ]
            })
        })
});
const { useGetAdminProductsQuery , useGetAdminUsersQuery  } = adminApi;


/***/ })

};
;