"use strict";
exports.id = 7546;
exports.ids = [7546];
exports.modules = {

/***/ 5678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const DashboardLink = (props)=>{
    const { href , label , icon  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const isActive = router.pathname === href;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const color = isActive ? theme.palette.primary.main : theme.palette.action.active;
    const borderColor = isActive ? theme.palette.primary.main : "transparent";
    const hover = theme.palette.primary.main;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            display: "flex",
            sx: {
                p: 1,
                borderLeft: "2px solid",
                borderColor,
                cursor: "pointer",
                "&:hover": {
                    borderColor: hover,
                    "& svg *": {
                        fill: hover
                    },
                    "& .MuiTypography-root": {
                        color: hover
                    }
                },
                "& svg *": {
                    fill: color
                }
            },
            children: [
                icon,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    component: "span",
                    fontWeight: 500,
                    color: color,
                    children: label
                })
            ]
        })
    }));
};
const DashboardLayout = ({ children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            display: "flex",
            flexDirection: {
                xs: "column",
                sm: "row"
            },
            sx: {
                my: 2
            },
            gap: 2,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
                    sx: {
                        py: 2,
                        height: "100%"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DashboardLink, {
                            href: "/dashboard",
                            label: "Dashboard",
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Dashboard, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DashboardLink, {
                            href: "/dashboard/product",
                            label: "Products",
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Assignment, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DashboardLink, {
                            href: "/dashboard/product/new",
                            label: "Add a new product",
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.NoteAdd, {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
                    sx: {
                        flex: 1
                    },
                    children: children
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardLayout);


/***/ }),

/***/ 2437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lk": () => (/* binding */ useGetClientProductsQuery),
/* harmony export */   "g3": () => (/* binding */ useGetClientProductQuery),
/* harmony export */   "Ni": () => (/* binding */ useAddClientProductMutation),
/* harmony export */   "W0": () => (/* binding */ useEditClientProductMutation),
/* harmony export */   "dv": () => (/* binding */ useDeleteClientProductMutation)
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
            getClientProduct: builder.query({
                query: (id)=>({
                        url: `client/product`,
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
                        id: "LIST"
                    }
                ]
            }),
            editClientProduct: builder.mutation({
                query: ({ id , body  })=>({
                        url: "client/product",
                        method: "PUT",
                        params: {
                            id
                        },
                        body
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
            deleteClientProduct: builder.mutation({
                query: (id)=>({
                        url: "client/product",
                        method: "DELETE",
                        params: {
                            id
                        }
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
            })
        })
});
const { useGetClientProductsQuery , useGetClientProductQuery , useAddClientProductMutation , useEditClientProductMutation , useDeleteClientProductMutation ,  } = clientApi;


/***/ })

};
;