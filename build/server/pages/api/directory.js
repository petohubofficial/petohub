"use strict";
(() => {
var exports = {};
exports.id = 9870;
exports.ids = [9870];
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

/***/ 8106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4035);
/* harmony import */ var models_Directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1266);



const handler = async (req, res)=>{
    if (req.method !== "GET") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    try {
        // Getting a directory by username
        if (req.query.username) {
            const directory = await models_Directory__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
                isApproved: true,
                username: req.query.username
            }).populate({
                path: "reviews",
                populate: {
                    path: "reviewer",
                    select: "name profileImage"
                }
            });
            if (!directory) return res.status(404).json({
                success: false,
                error: "Directory not found"
            });
            if (req.query.get === "products") {
                const products = await models_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"].find */ .Z.find({
                    isApproved: true,
                    seller: directory.id
                });
                return res.status(200).json({
                    success: true,
                    directory,
                    products
                });
            }
            return res.status(200).json({
                success: true,
                directory
            });
        }
        // Getting all approved directories
        const directories = await models_Directory__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
            isApproved: true
        }).populate({
            path: "reviews",
            populate: {
                path: "reviewer",
                select: "name profileImage"
            }
        });
        return res.status(200).json({
            success: true,
            directories
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
var __webpack_exports__ = __webpack_require__.X(0, [4035,9297,1266], () => (__webpack_exec__(8106)));
module.exports = __webpack_exports__;

})();