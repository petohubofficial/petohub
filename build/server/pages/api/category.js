"use strict";
(() => {
var exports = {};
exports.id = 988;
exports.ids = [988];
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

/***/ 2758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4035);
/* harmony import */ var models_Category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1134);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8738);



const handler = async (req, res)=>{
    if (req.method !== "GET") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    try {
        // Getting a single category by id
        if (req.query.id) {
            const category = await models_Category_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(req.query.id).populate("docs");
            if (!category) return res.status(404).json({
                success: false,
                error: "Category not found"
            });
            return res.status(200).json({
                success: true,
                category
            });
        }
        // Getting all categories
        const categories = await models_Category_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find().populate("docs");
        return res.status(200).json({
            success: true,
            categories
        });
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(error, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [8459,1134], () => (__webpack_exec__(2758)));
module.exports = __webpack_exports__;

})();