"use strict";
exports.id = 2497;
exports.ids = [2497];
exports.modules = {

/***/ 9187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2754);


const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(contexts_auth__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .Vo)
;


/***/ }),

/***/ 8414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NL": () => (/* binding */ useGetCategoriesQuery),
/* harmony export */   "Eh": () => (/* binding */ useGetPetsQuery),
/* harmony export */   "C$": () => (/* binding */ useGetProductsQuery)
/* harmony export */ });
/* unused harmony exports Tags, publicApi, useGetBrandsQuery */
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9850);

var Tags;
(function(Tags) {
    Tags["CATEGORIES"] = "categories";
    Tags["PETS"] = "pets";
    Tags["BRANDS"] = "brands";
    Tags["PRODUCTS"] = "products";
})(Tags || (Tags = {}));
const publicApi = _api_service__WEBPACK_IMPORTED_MODULE_0__/* .api.enhanceEndpoints */ .h.enhanceEndpoints({
    addTagTypes: Object.values(Tags)
}).injectEndpoints({
    endpoints: (builder)=>({
            getCategories: builder.query({
                query: ()=>"category"
                ,
                providesTags: [
                    Tags.CATEGORIES
                ]
            }),
            getPets: builder.query({
                query: ()=>"pet"
                ,
                providesTags: [
                    Tags.PETS
                ]
            }),
            getBrands: builder.query({
                query: ()=>"brand"
                ,
                providesTags: [
                    Tags.BRANDS
                ]
            }),
            getProducts: builder.query({
                query: (params)=>({
                        url: "products",
                        params
                    })
            })
        })
});
const { useGetCategoriesQuery , useGetPetsQuery , useGetBrandsQuery , useGetProductsQuery  } = publicApi;


/***/ })

};
;