"use strict";
exports.id = 2437;
exports.ids = [2437];
exports.modules = {

/***/ 2437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lk": () => (/* binding */ useGetClientProductsQuery),
/* harmony export */   "Ni": () => (/* binding */ useAddClientProductMutation)
/* harmony export */ });
/* unused harmony exports Tags, clientApi */
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9850);

var Tags;
(function(Tags) {
    Tags["PRODUCTS"] = "client/product";
})(Tags || (Tags = {}));
const clientApi = _api_service__WEBPACK_IMPORTED_MODULE_0__/* .api.enhanceEndpoints */ .h.enhanceEndpoints({
    addTagTypes: Object.values(Tags)
}).injectEndpoints({
    endpoints: (builder)=>({
            getClientProducts: builder.query({
                query: (params)=>({
                        url: "client/product",
                        params
                    })
                ,
                providesTags: [
                    {
                        type: Tags.PRODUCTS,
                        id: "list"
                    }
                ]
            }),
            addClientProduct: builder.mutation({
                query: (body)=>({
                        url: "client/product",
                        method: "POST",
                        body
                    })
                ,
                invalidatesTags: [
                    {
                        type: Tags.PRODUCTS,
                        id: "list"
                    }
                ]
            })
        })
});
const { useGetClientProductsQuery , useAddClientProductMutation  } = clientApi;


/***/ })

};
;