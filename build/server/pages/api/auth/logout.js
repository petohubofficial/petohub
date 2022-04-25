"use strict";
(() => {
var exports = {};
exports.id = 1845;
exports.ids = [1845];
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

/***/ 4917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4035);
/* harmony import */ var utils_setCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7583);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8738);



const handler = async (req, res)=>{
    if (req.method !== "POST") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    try {
        // Logging out the user by setting the cookie to null
        (0,utils_setCookie__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(res, "at", null, {
            httpOnly: true,
            path: "/",
            sameSite: "strict",
            secure: "production" === "production",
            maxAge: -1
        });
        return res.status(200).json({
            success: true
        });
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(error, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [8459], () => (__webpack_exec__(4917)));
module.exports = __webpack_exports__;

})();