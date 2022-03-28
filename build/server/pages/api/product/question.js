"use strict";
(() => {
var exports = {};
exports.id = 6095;
exports.ids = [6095];
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

/***/ 3422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1266);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9598);
/* harmony import */ var models_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1065);




const handler = async (req, res)=>{
    if (req.method !== "POST" && req.method !== "DELETE") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    // Checking if id is passed
    if (!req.query.id) return res.status(400).json({
        success: false,
        error: "Provide a product id"
    });
    // Checking the body
    if (req.method === "POST" && !req.body.question) return res.status(400).json({
        success: false,
        error: "Provide all required fields"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    try {
        // Checking if the product exists
        const product = await models_Product__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.query.id).where("isApproved").equals(true);
        if (!product) return res.status(404).json({
            success: false,
            error: "Product not found"
        });
        const askedBy = req.user._id;
        // Post a question
        if (req.method === "POST") {
            // Checking if the user has already questioned the product
            if (await models_Question__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findOne */ .Z.findOne({
                askedBy,
                product: product._id
            })) return res.status(400).json({
                success: false,
                error: "You have already questioned the prouct"
            });
            // Creating a question and sending it back
            const question = await models_Question__WEBPACK_IMPORTED_MODULE_3__/* ["default"].create */ .Z.create({
                askedBy,
                product: product._id,
                question: req.body.question
            });
            await question.populate("askedBy");
            return res.status(200).json({
                success: true,
                question
            });
        } else if (req.method === "DELETE") {
            // Checking if the user already posed a question on product
            const question = await models_Question__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findOne */ .Z.findOne({
                askedBy,
                product: product._id
            });
            if (!question) return res.status(400).json({
                success: false,
                error: "You have not reviewed the product"
            });
            // Removing the question and returning it
            await question.remove();
            return res.status(200).json({
                success: true,
                question
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4035,3299,9598,1266,1065], () => (__webpack_exec__(3422)));
module.exports = __webpack_exports__;

})();