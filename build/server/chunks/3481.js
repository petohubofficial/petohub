"use strict";
exports.id = 3481;
exports.ids = [3481];
exports.modules = {

/***/ 3481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LQ": () => (/* binding */ useGetAdminProductsQuery),
/* harmony export */   "Bx": () => (/* binding */ useApproveProductMutation),
/* harmony export */   "mq": () => (/* binding */ useGetAdminUsersQuery),
/* harmony export */   "Mh": () => (/* binding */ useVerifyUserMutation)
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
                providesTags: (result)=>result ? [
                        ...result.data.results.map(({ _id  })=>({
                                type: Tags.PRODUCTS,
                                id: _id.toString()
                            })
                        ),
                        {
                            type: Tags.PRODUCTS,
                            id: "LIST"
                        }, 
                    ] : [
                        {
                            type: Tags.PRODUCTS,
                            id: "LIST"
                        }
                    ]
            }),
            getAdminProduct: builder.query({
                query: (id)=>({
                        url: `admin/product`,
                        params: {
                            id
                        }
                    })
                ,
                providesTags: (_result, _error, id)=>[
                        {
                            type: Tags.PRODUCTS,
                            id
                        }
                    ]
            }),
            approveProduct: builder.mutation({
                query: (id)=>({
                        url: `admin/product/approve`,
                        params: {
                            id
                        },
                        method: "POST"
                    })
                ,
                invalidatesTags: (result)=>result ? [
                        {
                            type: Tags.PRODUCTS,
                            id: result.product._id.toString()
                        }
                    ] : [
                        {
                            type: Tags.PRODUCTS,
                            id: "LIST"
                        }
                    ]
            }),
            getAdminUsers: builder.query({
                query: (params)=>({
                        url: "admin/user",
                        params
                    })
                ,
                providesTags: (result)=>result ? [
                        ...result.data.results.map(({ _id  })=>({
                                type: Tags.USERS,
                                id: _id.toString()
                            })
                        ),
                        {
                            type: Tags.USERS,
                            id: "LIST"
                        }, 
                    ] : [
                        {
                            type: Tags.USERS,
                            id: "LIST"
                        }
                    ]
            }),
            getAdminUser: builder.query({
                query: (id)=>({
                        url: "admin/user",
                        params: {
                            id
                        }
                    })
                ,
                providesTags: (_result, _error, id)=>[
                        {
                            type: Tags.USERS,
                            id
                        }
                    ]
            }),
            verifyUser: builder.mutation({
                query: (id)=>({
                        url: `admin/user/verify`,
                        params: {
                            id
                        },
                        method: "POST"
                    })
                ,
                invalidatesTags: (result)=>result ? [
                        {
                            type: Tags.USERS,
                            id: result.user._id.toString()
                        }
                    ] : [
                        {
                            type: Tags.USERS,
                            id: "LIST"
                        }
                    ]
            })
        })
});
const { useGetAdminProductsQuery , useApproveProductMutation , useGetAdminUsersQuery , useVerifyUserMutation ,  } = adminApi;


/***/ })

};
;