"use strict";
(() => {
var exports = {};
exports.id = 5261;
exports.ids = [5261];
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

/***/ 7163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9598);
/* harmony import */ var models_Directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4035);



const handler = async (req, res)=>{
    if (req.method !== "POST") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    // Chceking if user is a client
    if (req.user.role === "Client") return res.status(200).json({
        success: true,
        user: req.user
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    try {
        var ref, ref1, ref2, ref3, ref4, ref5, ref6;
        // Handling directory creation and updating user object
        const directory = await models_Directory__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
            email: req.user.email,
            user: req.user._id,
            number: (ref = req.body) === null || ref === void 0 ? void 0 : ref.number,
            storeName: (ref1 = req.body) === null || ref1 === void 0 ? void 0 : ref1.storeName,
            category: (ref2 = req.body) === null || ref2 === void 0 ? void 0 : ref2.category,
            address: (ref3 = req.body) === null || ref3 === void 0 ? void 0 : ref3.address,
            city: (ref4 = req.body) === null || ref4 === void 0 ? void 0 : ref4.city,
            state: (ref5 = req.body) === null || ref5 === void 0 ? void 0 : ref5.state,
            pincode: (ref6 = req.body) === null || ref6 === void 0 ? void 0 : ref6.state
        });
        // Updating user data and saving
        req.user.directory = directory._id;
        req.user.role = "Client";
        await req.user.save();
        return res.status(200).json({
            success: true,
            user: req.user
        });
    } catch (error) {
        // Handling errors
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
var __webpack_exports__ = __webpack_require__.X(0, [4035,3299,9598,9297], () => (__webpack_exec__(7163)));
module.exports = __webpack_exports__;

})();