"use strict";
(() => {
var exports = {};
exports.id = 3908;
exports.ids = [3908];
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

/***/ 9539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models_User_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(881);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var utils_setCookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7583);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8738);




const JWT_EXPIRE = process.env.JWT_EXPIRE;
const NODE_ENV = "production";
const handler = async (req, res)=>{
    if (req.method !== "POST") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    // Taking the credentials and verifying
    const { email , password  } = req.body;
    if (!email || !password) return res.status(400).json({
        success: false,
        error: "Please provide email and password"
    });
    try {
        // Finding the user
        const user = await models_User_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
            email
        }).select("+password");
        // Don't let people know whether a certain email exists
        if (!user) return res.status(400).json({
            success: false,
            error: "Your email or password is incorrect"
        });
        // Checking if the account is verified
        if (!user.isVerified) return res.status(400).json({
            success: false,
            error: "Your account isn't verified yet"
        });
        // Comparing the password
        const isMatched = await user.matchPasswords(password);
        if (!isMatched) return res.status(400).json({
            success: false,
            error: "Your email or password is incorrect"
        });
        // Removing password
        const _user = user.toJSON();
        delete _user.password;
        // Setting the Access Token in the cookie
        (0,utils_setCookie__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(res, "at", user.generateAuthToken(), {
            httpOnly: true,
            path: "/",
            sameSite: "strict",
            secure: NODE_ENV === "production",
            maxAge: parseInt(JWT_EXPIRE) * 1000
        });
        // Success response
        return res.status(200).json({
            success: true,
            user: _user
        });
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(error, res);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ }),

/***/ 7583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ setCookie)
});

;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
;// CONCATENATED MODULE: ./utils/setCookie.ts

function setCookie(res, name, value, options = {}) {
    const stringValue = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);
    if (options.maxAge) {
        options.expires = new Date(Date.now() + options.maxAge);
        options.maxAge /= 1000;
    }
    res.setHeader("Set-Cookie", (0,external_cookie_namespaceObject.serialize)(name, stringValue, options));
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,881], () => (__webpack_exec__(9539)));
module.exports = __webpack_exports__;

})();