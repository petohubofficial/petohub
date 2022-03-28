"use strict";
(() => {
var exports = {};
exports.id = 3933;
exports.ids = [3933];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const BrandSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    logo: {
        type: String,
        default: ""
    },
    images: {
        type: [
            String
        ],
        default: []
    },
    description: {
        type: String,
        default: ""
    },
    sellers: {
        type: [
            {
                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
                ref: "Directory"
            }, 
        ],
        default: []
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
// Virtual function to get all relevent products for the brand
BrandSchema.virtual("products", {
    ref: "Product",
    localField: "name",
    foreignField: "brand"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Brand) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Brand", BrandSchema));


/***/ }),

/***/ 4588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4035);
/* harmony import */ var models_Brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3943);


const handler = async (req, res)=>{
    if (req.method !== "GET") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    try {
        // Getting a single brand by id
        if (req.query.id) {
            const brand = await models_Brand__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(req.query.id).populate("products").populate("sellers");
            if (!brand) return res.status(404).json({
                success: false,
                error: "Brand not found"
            });
            return res.status(200).json({
                success: true,
                brand
            });
        }
        // Getting all brands
        const brands = await models_Brand__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find().populate("products").populate("sellers");
        return res.status(200).json({
            success: true,
            brands
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: "Server error"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4035], () => (__webpack_exec__(4588)));
module.exports = __webpack_exports__;

})();