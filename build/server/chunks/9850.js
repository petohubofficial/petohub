"use strict";
exports.id = 9850;
exports.ids = [9850];
exports.modules = {

/***/ 9850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hi": () => (/* binding */ api),
/* harmony export */   "NL": () => (/* binding */ useGetCategoriesQuery),
/* harmony export */   "Eh": () => (/* binding */ useGetPetsQuery),
/* harmony export */   "C$": () => (/* binding */ useGetProductsQuery)
/* harmony export */ });
/* unused harmony export useGetBrandsQuery */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "api",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "/api"
    }),
    endpoints: (builder)=>({
            getCategories: builder.query({
                query: ()=>"category"
            }),
            getPets: builder.query({
                query: ()=>"pet"
            }),
            getBrands: builder.query({
                query: ()=>"brand"
            }),
            getProducts: builder.query({
                query: (filters)=>{
                    const { page =1 , limit =20 , q , sort , category , pet , brand , min , max  } = filters;
                    const params = [];
                    if (page) params.push(`page=${page}`);
                    if (limit) params.push(`limit=${limit}`);
                    if (q) params.push(`q=${q}`);
                    if (sort) params.push(`sort=${sort}`);
                    if (category) params.push(`category=${category}`);
                    if (pet) params.push(`pet=${pet}`);
                    if (brand) params.push(`brand=${brand}`);
                    if (min) params.push(`min=${min}`);
                    if (max) params.push(`max=${max}`);
                    return `product?${params.join("&")}`;
                }
            })
        })
});
const { useGetCategoriesQuery , useGetPetsQuery , useGetBrandsQuery , useGetProductsQuery  } = api;


/***/ })

};
;