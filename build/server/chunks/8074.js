"use strict";
exports.id = 8074;
exports.ids = [8074];
exports.modules = {

/***/ 8549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_AddBusiness__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _mui_icons_material_AddBusiness__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddBusiness__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(199);
/* harmony import */ var _mui_icons_material_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9193);
/* harmony import */ var _mui_icons_material_Collections__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Collections__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Publish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5761);
/* harmony import */ var _mui_icons_material_Publish__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Publish__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9513);
/* harmony import */ var _mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7458);
/* harmony import */ var _mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var hooks_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9187);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var services_public_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8414);
/* harmony import */ var types_category__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8069);
/* harmony import */ var types_product__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_14__);















function ProductForm(props) {
    var ref57, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21, ref22, ref23, ref24, ref25, ref26;
    const { product , onSubmit  } = props;
    const { user  } = (0,hooks_auth__WEBPACK_IMPORTED_MODULE_9__/* .useAuth */ .a)();
    const { data: brandsData , isLoading: isBrandsLoading  } = (0,services_public_service__WEBPACK_IMPORTED_MODULE_11__/* .useGetBrandsQuery */ .hY)();
    const { data: categoriesData , isLoading: isCategoriesLoading  } = (0,services_public_service__WEBPACK_IMPORTED_MODULE_11__/* .useGetCategoriesQuery */ .NL)();
    const { data: petsData , isLoading: isPetsLoading  } = (0,services_public_service__WEBPACK_IMPORTED_MODULE_11__/* .useGetPetsQuery */ .Eh)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_8__.useFormik)({
        initialValues: product || {
            seller: (user === null || user === void 0 ? void 0 : (ref57 = user.directory) === null || ref57 === void 0 ? void 0 : ref57._id) || null,
            name: "",
            brand: "",
            category: "",
            petType: [],
            keywords: [],
            breedType: "",
            description: "",
            weight: 0,
            size: {
                length: 0,
                width: 0,
                height: 0
            },
            countInStock: 0,
            price: 0,
            foodClassification: types_product__WEBPACK_IMPORTED_MODULE_13__/* .FoodClassification.NOT_APPLICABLE */ .v.NOT_APPLICABLE,
            ageRange: {
                min: 0,
                max: 0
            },
            affiliateLinks: [],
            productImages: []
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_14__.object().shape({
            name: yup__WEBPACK_IMPORTED_MODULE_14__.string().required("Name is required"),
            brand: yup__WEBPACK_IMPORTED_MODULE_14__.string().required("Brand is required"),
            category: yup__WEBPACK_IMPORTED_MODULE_14__.string().required("Category is required"),
            petType: yup__WEBPACK_IMPORTED_MODULE_14__.array().required("Pet type is required"),
            keywords: yup__WEBPACK_IMPORTED_MODULE_14__.array().required("Keywords is required"),
            breedType: yup__WEBPACK_IMPORTED_MODULE_14__.string().required("Breed type is required"),
            description: yup__WEBPACK_IMPORTED_MODULE_14__.string().required("Description is required"),
            weight: yup__WEBPACK_IMPORTED_MODULE_14__.number().required("Weight is required"),
            size: yup__WEBPACK_IMPORTED_MODULE_14__.object().shape({
                length: yup__WEBPACK_IMPORTED_MODULE_14__.number().required("Length is required"),
                width: yup__WEBPACK_IMPORTED_MODULE_14__.number().required("Width is required"),
                height: yup__WEBPACK_IMPORTED_MODULE_14__.number().required("Height is required")
            }).required("Size is required"),
            countInStock: yup__WEBPACK_IMPORTED_MODULE_14__.number().required("Count in stock is required"),
            price: yup__WEBPACK_IMPORTED_MODULE_14__.number().required("Price is required"),
            foodClassification: yup__WEBPACK_IMPORTED_MODULE_14__.string().required("Food classification is required"),
            ageRange: yup__WEBPACK_IMPORTED_MODULE_14__.object().shape({
                min: yup__WEBPACK_IMPORTED_MODULE_14__.number().required("Min age is required"),
                max: yup__WEBPACK_IMPORTED_MODULE_14__.number().required("Max age is required")
            }).required("Age range is required"),
            affiliateLinks: yup__WEBPACK_IMPORTED_MODULE_14__.array().of(yup__WEBPACK_IMPORTED_MODULE_14__.object().shape({
                id: yup__WEBPACK_IMPORTED_MODULE_14__.string().required("Product id is required"),
                link: yup__WEBPACK_IMPORTED_MODULE_14__.string().required("Product link is required"),
                provider: yup__WEBPACK_IMPORTED_MODULE_14__.string().oneOf(Object.values(types_product__WEBPACK_IMPORTED_MODULE_13__/* .AffiliateProvider */ .q), "Product provider is required"),
                price: yup__WEBPACK_IMPORTED_MODULE_14__.number().required("Product price is required")
            })),
            productImages: yup__WEBPACK_IMPORTED_MODULE_14__.array().of(yup__WEBPACK_IMPORTED_MODULE_14__.string().required("Product image link is required"))
        }),
        onSubmit
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            noValidate: true,
            autoComplete: "off",
            onSubmit: formik.handleSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                    fullWidth: true,
                    size: "small",
                    label: "Product Name",
                    name: "name",
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                    value: formik.values.name,
                    error: Boolean(formik.touched.name && formik.errors.name),
                    helperText: formik.touched.name && formik.errors.name,
                    sx: {
                        my: 1
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                    fullWidth: true,
                    multiline: true,
                    size: "small",
                    label: "Description",
                    name: "description",
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                    value: formik.values.description,
                    error: Boolean(formik.touched.description && formik.errors.description),
                    helperText: formik.touched.description && formik.errors.description,
                    sx: {
                        my: 1
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    display: {
                        xs: "block",
                        md: "flex"
                    },
                    gap: 1,
                    children: [
                        isCategoriesLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                            display: "flex",
                            gap: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CircularProgress, {
                                    size: 20
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                    children: "Loading categories..."
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Autocomplete, {
                            fullWidth: true,
                            options: ((ref2 = categoriesData === null || categoriesData === void 0 ? void 0 : (ref1 = categoriesData.categories) === null || ref1 === void 0 ? void 0 : ref1.filter((category)=>category.type === types_category__WEBPACK_IMPORTED_MODULE_12__/* .CategoryType.PRODUCT */ .a.PRODUCT
                            )) === null || ref2 === void 0 ? void 0 : ref2.map((category)=>category.name
                            )) || [],
                            onChange: (event, value)=>{
                                formik.setFieldValue("category", value);
                            },
                            value: formik.values.category,
                            filterSelectedOptions: true,
                            renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                                    ...params,
                                    label: "Category",
                                    size: "small",
                                    name: "category",
                                    onBlur: formik.handleBlur,
                                    error: Boolean(formik.touched.category && formik.errors.category),
                                    helperText: formik.touched.category && formik.errors.category,
                                    sx: {
                                        my: 1
                                    }
                                })
                        }),
                        isBrandsLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                            display: "flex",
                            gap: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CircularProgress, {
                                    size: 20
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                    children: "Loading brands..."
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Autocomplete, {
                            fullWidth: true,
                            options: (brandsData === null || brandsData === void 0 ? void 0 : (ref3 = brandsData.brands) === null || ref3 === void 0 ? void 0 : ref3.map((brand)=>brand.name
                            )) || [],
                            onChange: (event, value)=>{
                                formik.setFieldValue("brand", value);
                            },
                            value: formik.values.brand,
                            filterSelectedOptions: true,
                            renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                                    ...params,
                                    label: "Brand",
                                    size: "small",
                                    name: "brand",
                                    onBlur: formik.handleBlur,
                                    error: Boolean(formik.touched.brand && formik.errors.brand),
                                    helperText: formik.touched.brand && formik.errors.brand,
                                    sx: {
                                        my: 1
                                    }
                                })
                        }),
                        isPetsLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                            display: "flex",
                            gap: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CircularProgress, {
                                    size: 20
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                    children: "Loading pets..."
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Autocomplete, {
                            multiple: true,
                            fullWidth: true,
                            options: (petsData === null || petsData === void 0 ? void 0 : (ref4 = petsData.pets) === null || ref4 === void 0 ? void 0 : ref4.map((pet)=>pet.name
                            )) || [],
                            onChange: (event, value)=>{
                                formik.setFieldValue("petType", value);
                            },
                            value: formik.values.petType,
                            filterSelectedOptions: true,
                            renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                                    ...params,
                                    label: "Pet Type",
                                    size: "small",
                                    name: "petType",
                                    onBlur: formik.handleBlur,
                                    error: Boolean(formik.touched.petType && formik.errors.petType),
                                    helperText: formik.touched.petType && formik.errors.petType,
                                    sx: {
                                        my: 1
                                    }
                                })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    display: {
                        xs: "block",
                        md: "flex"
                    },
                    gap: 1,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                            fullWidth: true,
                            size: "small",
                            type: "number",
                            label: "Price",
                            name: "price",
                            onChange: formik.handleChange,
                            onBlur: formik.handleBlur,
                            value: formik.values.price,
                            error: Boolean(formik.touched.price && formik.errors.price),
                            helperText: formik.touched.price && formik.errors.price,
                            sx: {
                                my: 1
                            },
                            InputProps: {
                                startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.InputAdornment, {
                                    position: "start",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        children: "₹"
                                    })
                                })
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                            fullWidth: true,
                            size: "small",
                            type: "number",
                            label: "Count in stock",
                            name: "countInStock",
                            onChange: formik.handleChange,
                            onBlur: formik.handleBlur,
                            value: formik.values.countInStock,
                            error: Boolean(formik.touched.countInStock && formik.errors.countInStock),
                            helperText: formik.touched.countInStock && formik.errors.countInStock,
                            sx: {
                                my: 1
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Autocomplete, {
                    multiple: true,
                    freeSolo: true,
                    options: [],
                    onChange: (event, value)=>{
                        console.log(value);
                        formik.setFieldValue("keywords", value);
                    },
                    value: formik.values.keywords,
                    isOptionEqualToValue: ()=>false
                    ,
                    renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                            ...params,
                            label: "Keywords",
                            size: "small",
                            name: "keywords",
                            onBlur: formik.handleBlur,
                            error: Boolean(formik.touched.keywords && formik.errors.keywords),
                            helperText: formik.touched.keywords && formik.errors.keywords,
                            sx: {
                                my: 1
                            }
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                    fullWidth: true,
                    size: "small",
                    label: "Breed Type",
                    name: "breedType",
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                    value: formik.values.breedType,
                    error: Boolean(formik.touched.breedType && formik.errors.breedType),
                    helperText: formik.touched.breedType && formik.errors.breedType,
                    sx: {
                        my: 1
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    display: {
                        xs: "block",
                        md: "flex"
                    },
                    gap: 1,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                            fullWidth: true,
                            size: "small",
                            type: "number",
                            label: "Length",
                            name: "size.length",
                            onChange: formik.handleChange,
                            onBlur: formik.handleBlur,
                            value: formik.values.size.length,
                            error: Boolean(((ref5 = formik.touched.size) === null || ref5 === void 0 ? void 0 : ref5.length) && ((ref6 = formik.errors.size) === null || ref6 === void 0 ? void 0 : ref6.length)),
                            helperText: ((ref7 = formik.touched.size) === null || ref7 === void 0 ? void 0 : ref7.length) && ((ref8 = formik.errors.size) === null || ref8 === void 0 ? void 0 : ref8.length),
                            sx: {
                                my: 1
                            },
                            InputProps: {
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        children: "cms"
                                    })
                                })
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                            fullWidth: true,
                            size: "small",
                            type: "number",
                            label: "Height",
                            name: "size.height",
                            onChange: formik.handleChange,
                            onBlur: formik.handleBlur,
                            value: formik.values.size.height,
                            error: Boolean(((ref9 = formik.touched.size) === null || ref9 === void 0 ? void 0 : ref9.height) && ((ref10 = formik.errors.size) === null || ref10 === void 0 ? void 0 : ref10.height)),
                            helperText: ((ref11 = formik.touched.size) === null || ref11 === void 0 ? void 0 : ref11.height) && ((ref12 = formik.errors.size) === null || ref12 === void 0 ? void 0 : ref12.height),
                            sx: {
                                my: 1
                            },
                            InputProps: {
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        children: "cms"
                                    })
                                })
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                            fullWidth: true,
                            size: "small",
                            type: "number",
                            label: "Width",
                            name: "size.width",
                            onChange: formik.handleChange,
                            onBlur: formik.handleBlur,
                            value: formik.values.size.width,
                            error: Boolean(((ref13 = formik.touched.size) === null || ref13 === void 0 ? void 0 : ref13.width) && ((ref14 = formik.errors.size) === null || ref14 === void 0 ? void 0 : ref14.width)),
                            helperText: ((ref15 = formik.touched.size) === null || ref15 === void 0 ? void 0 : ref15.width) && ((ref16 = formik.errors.size) === null || ref16 === void 0 ? void 0 : ref16.width),
                            sx: {
                                my: 1
                            },
                            InputProps: {
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        children: "cms"
                                    })
                                })
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    display: {
                        xs: "block",
                        md: "flex"
                    },
                    gap: 1,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                            fullWidth: true,
                            size: "small",
                            type: "number",
                            label: "Weight",
                            name: "weight",
                            onChange: formik.handleChange,
                            onBlur: formik.handleBlur,
                            value: formik.values.weight,
                            error: Boolean(formik.touched.weight && formik.errors.weight),
                            helperText: formik.touched.weight && formik.errors.weight,
                            sx: {
                                my: 1
                            },
                            InputProps: {
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        children: "grams"
                                    })
                                })
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                            fullWidth: true,
                            size: "small",
                            type: "number",
                            label: "Minimum Age",
                            name: "ageRange.min",
                            onChange: formik.handleChange,
                            onBlur: formik.handleBlur,
                            value: (ref17 = formik.values.ageRange) === null || ref17 === void 0 ? void 0 : ref17.min,
                            error: Boolean(((ref18 = formik.touched.ageRange) === null || ref18 === void 0 ? void 0 : ref18.min) && ((ref19 = formik.errors.ageRange) === null || ref19 === void 0 ? void 0 : ref19.min)),
                            helperText: ((ref20 = formik.touched.ageRange) === null || ref20 === void 0 ? void 0 : ref20.min) && ((ref21 = formik.errors.ageRange) === null || ref21 === void 0 ? void 0 : ref21.min),
                            sx: {
                                my: 1
                            },
                            InputProps: {
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        children: "months"
                                    })
                                })
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                            fullWidth: true,
                            size: "small",
                            type: "number",
                            label: "Maximum Age",
                            name: "ageRange.max",
                            onChange: formik.handleChange,
                            onBlur: formik.handleBlur,
                            value: (ref22 = formik.values.ageRange) === null || ref22 === void 0 ? void 0 : ref22.max,
                            error: Boolean(((ref23 = formik.touched.ageRange) === null || ref23 === void 0 ? void 0 : ref23.max) && ((ref24 = formik.errors.ageRange) === null || ref24 === void 0 ? void 0 : ref24.max)),
                            helperText: ((ref25 = formik.touched.ageRange) === null || ref25 === void 0 ? void 0 : ref25.max) && ((ref26 = formik.errors.ageRange) === null || ref26 === void 0 ? void 0 : ref26.max),
                            sx: {
                                my: 1
                            },
                            InputProps: {
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        children: "months"
                                    })
                                })
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Autocomplete, {
                    fullWidth: true,
                    options: Object.values(types_product__WEBPACK_IMPORTED_MODULE_13__/* .FoodClassification */ .v),
                    onChange: (event, value)=>{
                        formik.setFieldValue("foodClassification", value);
                    },
                    value: formik.values.foodClassification,
                    filterSelectedOptions: true,
                    renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                            ...params,
                            label: "Food Classification",
                            size: "small",
                            name: "foodClassification",
                            onBlur: formik.handleBlur,
                            error: Boolean(formik.touched.foodClassification && formik.errors.foodClassification),
                            helperText: formik.touched.foodClassification && formik.errors.foodClassification,
                            sx: {
                                my: 1
                            }
                        })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    display: "flex",
                    justifyContent: "space-between",
                    sx: {
                        mt: 2,
                        px: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                            display: "flex",
                            sx: {
                                color: "secondary.main"
                            },
                            gap: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    color: "inherit"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                    variant: "h6",
                                    children: "Affiliate Links"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                            variant: "outlined",
                            color: "secondary",
                            size: "small",
                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddBusiness__WEBPACK_IMPORTED_MODULE_1___default()), {}),
                            onClick: ()=>formik.setFieldValue("affiliateLinks", [
                                    ...formik.values.affiliateLinks,
                                    {
                                        id: "",
                                        link: "",
                                        price: "",
                                        provider: ""
                                    }, 
                                ])
                            ,
                            children: "Add"
                        })
                    ]
                }),
                formik.values.affiliateLinks.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    sx: {
                        my: 1
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                        color: "text.secondary",
                        children: "No affiliate links added to this product!"
                    })
                }) : formik.values.affiliateLinks.map((affiliateLink, index)=>{
                    var ref58, ref27, ref28, ref29, ref30, ref31, ref32, ref33, ref34, ref35, ref36, ref37, ref38, ref39, ref40, ref41, ref42, ref43, ref44, ref45, ref46, ref47, ref48, ref49;
                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "row"
                        },
                        alignItems: {
                            xs: "center",
                            md: "start"
                        },
                        gap: 1,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                display: "flex",
                                width: "100%",
                                flexDirection: {
                                    xs: "column",
                                    md: "row"
                                },
                                gap: 1,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            sm: "row"
                                        },
                                        gap: 1,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Autocomplete, {
                                                fullWidth: true,
                                                options: Object.values(types_product__WEBPACK_IMPORTED_MODULE_13__/* .AffiliateProvider */ .q),
                                                onChange: (event, value)=>{
                                                    formik.setFieldValue(`affiliateLinks[${index}].provider`, value || "");
                                                },
                                                value: affiliateLink.provider,
                                                filterSelectedOptions: true,
                                                renderInput: (params)=>{
                                                    var ref, ref50, ref51, ref52, ref53, ref54, ref55, ref56;
                                                    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                                                        ...params,
                                                        label: "Provider",
                                                        size: "small",
                                                        name: `affiliateLinks[${index}].provider`,
                                                        onBlur: formik.handleBlur,
                                                        error: Boolean(((ref = formik.touched.affiliateLinks) === null || ref === void 0 ? void 0 : (ref50 = ref[index]) === null || ref50 === void 0 ? void 0 : ref50.provider) && ((ref51 = formik.errors.affiliateLinks) === null || ref51 === void 0 ? void 0 : (ref52 = ref51[index]) === null || ref52 === void 0 ? void 0 : ref52.provider)),
                                                        helperText: ((ref53 = formik.touched.affiliateLinks) === null || ref53 === void 0 ? void 0 : (ref54 = ref53[index]) === null || ref54 === void 0 ? void 0 : ref54.provider) && ((ref55 = formik.errors.affiliateLinks) === null || ref55 === void 0 ? void 0 : (ref56 = ref55[index]) === null || ref56 === void 0 ? void 0 : ref56.provider),
                                                        sx: {
                                                            my: 1
                                                        }
                                                    });
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                                                fullWidth: true,
                                                size: "small",
                                                label: "Link",
                                                name: `affiliateLinks[${index}].link`,
                                                onChange: formik.handleChange,
                                                onBlur: formik.handleBlur,
                                                value: affiliateLink.link,
                                                error: Boolean(((ref58 = formik.touched.affiliateLinks) === null || ref58 === void 0 ? void 0 : (ref27 = ref58[index]) === null || ref27 === void 0 ? void 0 : ref27.link) && ((ref28 = formik.errors.affiliateLinks) === null || ref28 === void 0 ? void 0 : (ref29 = ref28[index]) === null || ref29 === void 0 ? void 0 : ref29.link)),
                                                helperText: ((ref30 = formik.touched.affiliateLinks) === null || ref30 === void 0 ? void 0 : (ref31 = ref30[index]) === null || ref31 === void 0 ? void 0 : ref31.link) && ((ref32 = formik.errors.affiliateLinks) === null || ref32 === void 0 ? void 0 : (ref33 = ref32[index]) === null || ref33 === void 0 ? void 0 : ref33.link),
                                                sx: {
                                                    my: 1
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            sm: "row"
                                        },
                                        gap: 1,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                                                fullWidth: true,
                                                size: "small",
                                                label: "ASIN/FSN/ID",
                                                name: `affiliateLinks[${index}].id`,
                                                onChange: formik.handleChange,
                                                onBlur: formik.handleBlur,
                                                value: affiliateLink.id,
                                                error: Boolean(((ref34 = formik.touched.affiliateLinks) === null || ref34 === void 0 ? void 0 : (ref35 = ref34[index]) === null || ref35 === void 0 ? void 0 : ref35.id) && ((ref36 = formik.errors.affiliateLinks) === null || ref36 === void 0 ? void 0 : (ref37 = ref36[index]) === null || ref37 === void 0 ? void 0 : ref37.id)),
                                                helperText: ((ref38 = formik.touched.affiliateLinks) === null || ref38 === void 0 ? void 0 : (ref39 = ref38[index]) === null || ref39 === void 0 ? void 0 : ref39.id) && ((ref40 = formik.errors.affiliateLinks) === null || ref40 === void 0 ? void 0 : (ref41 = ref40[index]) === null || ref41 === void 0 ? void 0 : ref41.id),
                                                sx: {
                                                    my: 1
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                                                fullWidth: true,
                                                size: "small",
                                                type: "number",
                                                label: "Price",
                                                name: `affiliateLinks[${index}].price`,
                                                onChange: formik.handleChange,
                                                onBlur: formik.handleBlur,
                                                value: affiliateLink.price,
                                                error: Boolean(((ref42 = formik.touched.affiliateLinks) === null || ref42 === void 0 ? void 0 : (ref43 = ref42[index]) === null || ref43 === void 0 ? void 0 : ref43.price) && ((ref44 = formik.errors.affiliateLinks) === null || ref44 === void 0 ? void 0 : (ref45 = ref44[index]) === null || ref45 === void 0 ? void 0 : ref45.price)),
                                                helperText: ((ref46 = formik.touched.affiliateLinks) === null || ref46 === void 0 ? void 0 : (ref47 = ref46[index]) === null || ref47 === void 0 ? void 0 : ref47.price) && ((ref48 = formik.errors.affiliateLinks) === null || ref48 === void 0 ? void 0 : (ref49 = ref48[index]) === null || ref49 === void 0 ? void 0 : ref49.price),
                                                sx: {
                                                    my: 1
                                                },
                                                InputProps: {
                                                    startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.InputAdornment, {
                                                        position: "start",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                                            children: "₹"
                                                        })
                                                    })
                                                }
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
                                color: "error",
                                sx: {
                                    mt: 1
                                },
                                onClick: ()=>{
                                    const updated = [
                                        ...formik.values.affiliateLinks
                                    ];
                                    updated.splice(index, 1);
                                    formik.setFieldValue("affiliateLinks", updated);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        fontSize: "small"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        display: {
                                            xs: "block",
                                            sm: "none"
                                        },
                                        children: "Remove"
                                    })
                                ]
                            })
                        ]
                    }, index);
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    display: "flex",
                    justifyContent: "space-between",
                    sx: {
                        mt: 2,
                        px: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                            display: "flex",
                            sx: {
                                color: "secondary.main"
                            },
                            gap: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Collections__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    color: "inherit"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                    variant: "h6",
                                    children: "Product Images"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                            variant: "outlined",
                            color: "secondary",
                            size: "small",
                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                            onClick: ()=>formik.setFieldValue("productImages", [
                                    ...formik.values.productImages,
                                    ""
                                ])
                            ,
                            children: "Add"
                        })
                    ]
                }),
                formik.values.productImages.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    sx: {
                        my: 1
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                        color: "text.secondary",
                        children: "No images added to this product!"
                    })
                }) : formik.values.productImages.map((productImage, index)=>{
                    var ref, ref59, ref60, ref61;
                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "row"
                        },
                        alignItems: {
                            xs: "center",
                            md: "start"
                        },
                        gap: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                                fullWidth: true,
                                size: "small",
                                label: `Image ${index + 1}`,
                                name: `productImages[${index}]`,
                                onChange: formik.handleChange,
                                onBlur: formik.handleBlur,
                                value: productImage,
                                error: Boolean(((ref = formik.touched.productImages) === null || ref === void 0 ? void 0 : ref[index]) && ((ref59 = formik.errors.productImages) === null || ref59 === void 0 ? void 0 : ref59[index])),
                                helperText: ((ref60 = formik.touched.productImages) === null || ref60 === void 0 ? void 0 : ref60[index]) && ((ref61 = formik.errors.productImages) === null || ref61 === void 0 ? void 0 : ref61[index]),
                                sx: {
                                    my: 1
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
                                color: "error",
                                sx: {
                                    mt: 1
                                },
                                onClick: ()=>{
                                    const updated = [
                                        ...formik.values.productImages
                                    ];
                                    updated.splice(index, 1);
                                    formik.setFieldValue("productImages", updated);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        fontSize: "small"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                        display: {
                                            xs: "block",
                                            sm: "none"
                                        },
                                        children: "Remove"
                                    })
                                ]
                            })
                        ]
                    }, index);
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                    fullWidth: true,
                    disabled: formik.isSubmitting,
                    variant: "outlined",
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Publish__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                    type: "submit",
                    sx: {
                        mt: 3
                    },
                    children: formik.isSubmitting ? "Submitting..." : "Submit"
                })
            ]
        })
    }));
};


/***/ }),

/***/ 8069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ CategoryType)
/* harmony export */ });
var CategoryType;
(function(CategoryType) {
    CategoryType["PRODUCT"] = "Product";
    CategoryType["DIRECTORY"] = "Directory";
    CategoryType["SERVICE"] = "Service";
})(CategoryType || (CategoryType = {}));


/***/ }),

/***/ 9908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ AffiliateProvider),
/* harmony export */   "v": () => (/* binding */ FoodClassification)
/* harmony export */ });
var AffiliateProvider;
(function(AffiliateProvider) {
    AffiliateProvider["AMAZON"] = "Amazon";
    AffiliateProvider["FLIPKART"] = "Flipkart";
    AffiliateProvider["EBAY"] = "Ebay";
    AffiliateProvider["SNAPDEAL"] = "Snapdeal";
    AffiliateProvider["OTHER"] = "Other";
})(AffiliateProvider || (AffiliateProvider = {}));
var FoodClassification;
(function(FoodClassification) {
    FoodClassification["VEGETARIAN"] = "Vegetarian";
    FoodClassification["NON_VEGETARIAN"] = "Non-Vegetarian";
    FoodClassification["VEGAN"] = "Vegan";
    FoodClassification["OTHER"] = "Other";
    FoodClassification["NOT_APPLICABLE"] = "Not Applicable";
})(FoodClassification || (FoodClassification = {}));


/***/ }),

/***/ 5808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createFormData)
/* harmony export */ });
function createFormData(obj) {
    const keys = Object.keys(obj);
    const formData = new FormData();
    if (keys.length === 0) return formData;
    keys.forEach((key)=>{
        const value = obj[key];
        if (value instanceof File) {
            formData.append(key, value, value.name);
        } else if (typeof value === "object") {
            formData.append(key, JSON.stringify(value));
        } else {
            formData.append(key, value);
        }
    });
    return formData;
};


/***/ })

};
;