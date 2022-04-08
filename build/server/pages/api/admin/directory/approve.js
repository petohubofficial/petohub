"use strict";
(() => {
var exports = {};
exports.id = 5219;
exports.ids = [5219];
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

/***/ 2375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9598);
/* harmony import */ var middlewares_withRoles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6097);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var models_Directory_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4818);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8738);
/* harmony import */ var types_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1957);






const handler = async (req, res)=>{
    if (req.method !== "PUT") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    // Checking the body
    if (!req.query.id) return res.status(400).json({
        success: false,
        error: "Please provide a directory id"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    try {
        const directory = await models_Directory_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id);
        if (!directory) return res.status(404).json({
            success: false,
            error: "Directory not found"
        });
        directory.isApproved = true;
        directory.approvedAt = Date.now();
        await directory.save();
        return res.status(200).json({
            success: true,
            directory
        });
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(error, res);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((0,middlewares_withRoles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(types_user__WEBPACK_IMPORTED_MODULE_3__/* .Role.ADMIN */ .u.ADMIN, types_user__WEBPACK_IMPORTED_MODULE_3__/* .Role.PRODUCT_ADMIN */ .u.PRODUCT_ADMIN)(handler)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,881,9598,4818], () => (__webpack_exec__(2375)));
module.exports = __webpack_exports__;

})();