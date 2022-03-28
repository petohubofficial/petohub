"use strict";
(() => {
var exports = {};
exports.id = 4271;
exports.ids = [4271];
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

/***/ 6970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9598);
/* harmony import */ var models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3299);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4035);



const handler = async (req, res)=>{
    if (req.method !== "PUT") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    // Verifying request body
    if (!req.body.newPassword || !req.body.oldPassword) return res.status(400).json({
        success: false,
        error: "Please provide new password and old password"
    });
    if (req.body.newPassword !== req.body.oldPassword) return res.status(400).json({
        success: false,
        error: "New password and old password should be same"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    try {
        // Finding the user
        const user = await models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(req.user.id).select("+password");
        // Comparing the password
        const isMatched = await user.matchPasswords(req.body.oldPassword);
        if (!isMatched) return res.status(400).json({
            success: false,
            error: "Incorrect password"
        });
        // Updating the password
        user.password = req.body.newPassword;
        await user.save();
        return res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: "Server error"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4035,3299,9598], () => (__webpack_exec__(6970)));
module.exports = __webpack_exports__;

})();