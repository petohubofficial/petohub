"use strict";
(() => {
var exports = {};
exports.id = 8623;
exports.ids = [8623];
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

/***/ 5696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const NewsletterSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            "Please provide a valid email", 
        ],
        required: [
            true,
            "Please provide an email"
        ]
    },
    subscriptions: {
        type: [
            String
        ],
        default: []
    },
    isSubscribed: {
        type: Boolean,
        default: true
    },
    subscribedAt: {
        type: Date,
        default: new Date()
    },
    unsubscribedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Newsletter) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Newsletter", NewsletterSchema));


/***/ }),

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models_Newsletter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5696);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8738);



const handler = async (req, res)=>{
    if (req.method !== "POST") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    if (!req.body.email) return res.status(400).json({
        success: false,
        error: "Please provide an email"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    try {
        // Check if there is already a newsletter with the email
        let newsletter = await models_Newsletter_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
            email: req.body.email
        });
        // Create a new listing
        if (!newsletter) newsletter = await models_Newsletter_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create({
            email: req.body.email
        });
        else if (!newsletter.isSubscribed) {
            newsletter.isSubscribed = true;
            newsletter.subscribedAt = Date.now();
            newsletter.unsubscribedAt = null;
            await newsletter.save();
        } else return res.status(400).json({
            success: false,
            error: "Email is already subscribed"
        });
        return res.status(200).json({
            success: true,
            newsletter
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459], () => (__webpack_exec__(417)));
module.exports = __webpack_exports__;

})();