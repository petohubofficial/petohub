"use strict";
exports.id = 4313;
exports.ids = [4313];
exports.modules = {

/***/ 8246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6843);
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);





const CopyField = (props)=>{
    let { text , truncate =12 , propagate , fontWeight , ...other } = props;
    if (text === "") return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: !truncate ? "100%" : 170,
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                display: "inline",
                fontSize: "inherit",
                fontWeight: fontWeight,
                sx: {
                    mr: 1
                },
                children: truncate !== false && text.length > truncate ? text.substring(0, truncate) + "..." : text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                title: "Click to copy",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    sx: {
                        cursor: "pointer",
                        m: 0,
                        p: 1,
                        minWidth: 0
                    },
                    color: "primary",
                    variant: "outlined",
                    onClick: (e)=>{
                        if (!propagate) e.stopPropagation();
                        navigator.clipboard.writeText(text);
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().success(`Copied ${text}`);
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_1___default()), {
                        fontSize: "small"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyField);


/***/ }),

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


/***/ }),

/***/ 4479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ convertDate)
/* harmony export */ });
function convertDate(dateString) {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toDateString() + " " + date.toLocaleTimeString();
};


/***/ })

};
;