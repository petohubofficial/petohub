"use strict";
(() => {
var exports = {};
exports.id = 4615;
exports.ids = [4615];
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

/***/ 4610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models_User_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(881);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var utils_setCookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7583);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8738);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);





const NODE_ENV = "production";
const handler = async (req, res)=>{
    if (req.method !== "POST") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    // Checking for Refresh Token in request body
    const { rt  } = req.body;
    if (!rt) return res.status(400).json({
        success: false,
        error: "Please provide refresh token"
    });
    try {
        // Finding the user
        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(rt, process.env.JWT_SECRET);
        const user = await models_User_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(decoded.id);
        if (!user) return res.status(401).json({
            success: false,
            error: "Unauthorized"
        });
        // Setting the Access Token in the cookie
        (0,utils_setCookie__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(res, "at", user.generateAccessToken(), {
            httpOnly: true,
            path: "/",
            sameSite: "strict",
            secure: NODE_ENV === "production",
            maxAge: 2 * 24 * 60 * 60 * 1000
        });
        // Success response
        return res.status(200).json({
            success: true,
            rt: user.generateRefreshToken()
        });
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(error, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [8459,881], () => (__webpack_exec__(4610)));
module.exports = __webpack_exports__;

})();