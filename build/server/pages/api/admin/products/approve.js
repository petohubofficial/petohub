"use strict";
(() => {
var exports = {};
exports.id = 7393;
exports.ids = [7393];
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

/***/ 3332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const EditSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    date: Date,
    product: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "Product"
    },
    user: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "User"
    },
    changes: Object
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Edit) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Edit", EditSchema));


/***/ }),

/***/ 5476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9598);
/* harmony import */ var middlewares_withRoles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6097);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1266);
/* harmony import */ var models_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3332);





const handler = async (req, res)=>{
    if (req.method !== "PUT") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    // Checking the body
    if (!req.query.id) return res.status(400).json({
        success: false,
        error: "Please provide a product id"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    try {
        const product = await models_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id).select("+edits +lastEdit");
        if (!product) return res.status(404).json({
            success: false,
            error: "Product not found"
        });
        // Manually populating edits and lastEdit
        product.lastEdit = await models_Edit__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(product.lastEdit).populate("user");
        product.edits = await models_Edit__WEBPACK_IMPORTED_MODULE_3__/* ["default"].find */ .Z.find({
            product: product._id
        }).sort({
            date: -1
        }).populate("user");
        product.isApproved = true;
        product.approvedAt = Date.now();
        await product.save();
        return res.status(200).json({
            success: true,
            product
        });
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
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4035,3299,9598,1266], () => (__webpack_exec__(5476)));
module.exports = __webpack_exports__;

})();