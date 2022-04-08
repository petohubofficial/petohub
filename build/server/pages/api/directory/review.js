"use strict";
(() => {
var exports = {};
exports.id = 6787;
exports.ids = [6787];
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

/***/ 6117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models_Directory_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4818);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9598);
/* harmony import */ var models_Review_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2378);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8738);





const handler = async (req, res)=>{
    if (req.method !== "POST" && req.method !== "DELETE") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    // Checking if username is passed
    if (!req.query.username) return res.status(400).json({
        success: false,
        error: "Provide a directory id"
    });
    // Checking the body
    if (req.method === "POST" && (!req.body.subject || !req.body.comment || !req.body.rating)) return res.status(400).json({
        success: false,
        error: "Provide all required fields"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    try {
        // Checking if the directory exists
        const directory = await models_Directory_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
            isApproved: true,
            username: req.query.username
        });
        if (!directory) return res.status(404).json({
            success: false,
            error: "Directory not found"
        });
        const reviewer = req.user._id;
        const revieweeId = req.query.id;
        // Post a review
        if (req.method === "POST") {
            // Checking if the user has already reviewed the directory
            if (await models_Review_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findOne */ .Z.findOne({
                reviewer,
                revieweeId
            })) return res.status(400).json({
                success: false,
                error: "You have already reviewed the directory"
            });
            // Creating the review and sending it
            const review = await models_Review_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].create */ .Z.create({
                reviewer,
                revieweeId,
                revieweeModel: "Directory",
                subject: req.body.subject,
                comment: req.body.comment,
                rating: req.body.rating
            });
            await review.populate("reviewer");
            return res.status(200).json({
                success: true,
                review
            });
        } else if (req.method === "DELETE") {
            // Checking if the user has reviewed
            const review = await models_Review_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findOne */ .Z.findOne({
                reviewer,
                revieweeId
            });
            if (!review) return res.status(400).json({
                success: false,
                error: "You have not reviewed the directory"
            });
            // Removing the review and returning it
            await review.remove();
            return res.status(200).json({
                success: true,
                review
            });
        }
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(error, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [8459,881,9598,4818,2378], () => (__webpack_exec__(6117)));
module.exports = __webpack_exports__;

})();