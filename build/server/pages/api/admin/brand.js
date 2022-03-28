"use strict";
(() => {
var exports = {};
exports.id = 7152;
exports.ids = [7152];
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

/***/ 6097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const withRoles = (...roles)=>(handler)=>(req, res)=>{
            // Chceking if user has the roles
            if (roles.includes(req.user.role)) return handler(req, res);
            return res.status(403).json({
                success: false,
                error: "Forbidden"
            });
        }
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withRoles);


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

/***/ 8632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9598);
/* harmony import */ var middlewares_withRoles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6097);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var models_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3943);
/* harmony import */ var models_Directory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);





const handler = async (req, res)=>{
    const allowed = [
        "POST",
        "PUT",
        "DELETE"
    ];
    if (!allowed.includes(req.method)) return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    if (req.method !== "POST" && !req.query.id) return res.status(400).json({
        success: false,
        error: "Please provide a brand id"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    try {
        // Adding a new brand
        if (req.method === "POST") {
            // Validating sellers
            if (req.body.sellers.length > 0) {
                for (const seller of req.body.sellers)if (!await models_Directory__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(seller)) return res.status(404).json({
                    success: false,
                    error: "Seller not found"
                });
            }
            const brand = await models_Brand__WEBPACK_IMPORTED_MODULE_2__/* ["default"].create */ .Z.create({
                name: req.body.name,
                logo: req.body.logo,
                images: req.body.images,
                description: req.body.description,
                sellers: req.body.sellers
            });
            return res.status(200).json({
                success: true,
                brand
            });
        }
        const brand = await models_Brand__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id);
        if (!brand) return res.status(404).json({
            success: false,
            error: "Brand not found"
        });
        else if (req.method === "PUT") {
            // Validating sellers
            if (req.body.sellers.length > 0) {
                for (const seller of req.body.sellers)if (!await models_Directory__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(seller)) return res.status(404).json({
                    success: false,
                    error: "Seller not found"
                });
            }
            if (req.body.name !== undefined) brand.name = req.body.name;
            if (req.body.description !== undefined) brand.description = req.body.description;
            if (req.body.images !== undefined) brand.images = req.body.images;
            if (req.body.logo !== undefined) brand.logo = req.body.logo;
            if (req.body.sellers !== undefined) brand.sellers = req.body.sellers;
            await brand.save();
            return res.status(200).json({
                success: true,
                brand
            });
        } else if (req.method === "DELETE") {
            await brand.remove();
            return res.status(200).json({
                success: true,
                brand
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: "Server error"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((0,middlewares_withRoles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("Admin", "Product Admin")(handler)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4035,3299,9598,9297], () => (__webpack_exec__(8632)));
module.exports = __webpack_exports__;

})();