"use strict";
(() => {
var exports = {};
exports.id = 1640;
exports.ids = [1640];
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

/***/ 7353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var models_User_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(881);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4035);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8738);




const handler = async (req, res)=>{
    if (req.method !== "GET") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    // Verifying token in query
    if (!req.query.token) return res.status(400).json({
        success: false,
        error: "Please provide a token"
    });
    // Hashing the token
    const token = crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash("sha256").update(req.query.token).digest("hex");
    try {
        // Finding the user based on the token
        const user = await models_User_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
            verificationToken: token
        });
        if (!user) return res.status(400).json({
            success: false,
            error: "Invalid token"
        });
        // Verifying the account
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verifiedAt = Date.now();
        await user.save();
        // Returning a success message
        return res.status(200).json({
            success: true,
            data: "User has been verified successfully"
        });
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(error, res);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,881], () => (__webpack_exec__(7353)));
module.exports = __webpack_exports__;

})();