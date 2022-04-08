"use strict";
(() => {
var exports = {};
exports.id = 2854;
exports.ids = [2854];
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

/***/ 7636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models_User_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(881);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var utils_sendEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1453);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8738);




const handler = async (req, res)=>{
    if (req.method !== "POST") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    // Verifying email in body
    if (!req.body.email) return res.status(400).json({
        success: false,
        error: "Please provide an email"
    });
    try {
        // Taking the credentials and verifying
        const user = await models_User_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
            email: req.body.email
        });
        // Don't let people know whether a certain email exists or not
        if (!user) return res.status(400).json({
            success: false,
            error: "The email couldn't be sent"
        });
        // Generating a reset token
        const token = user.getResetToken();
        await user.save();
        // Generating a reset password url and the email message
        const resetUrl = `${process.env.SITE_URL}/resetpassword?token=${token}`;
        const message = `
            <h1>You have requested to reset your password</h1>
            <p>Please go to this link to reset</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `;
        // Sending the email
        try {
            await (0,utils_sendEmail__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
                to: user.email,
                subject: "Petohub Password Reset Request",
                text: message
            });
            res.status(200).json({
                success: true,
                data: "Email for password reset has been sent successfully"
            });
        } catch (error) {
            // In case of an error, remove the reset password token
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();
            return res.status(400).json({
                success: false,
                error: "The email couldn't be sent"
            });
        }
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(error, res);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ }),

/***/ 1453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_sendEmail)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
;// CONCATENATED MODULE: ./utils/sendEmail.ts

const EMAIL_SERVICE = process.env.EMAIL_SERVICE;
const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_FROM = process.env.EMAIL_FROM;
const sendEmail = async (options)=>{
    const transporter = (0,external_nodemailer_namespaceObject.createTransport)({
        service: EMAIL_SERVICE,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD
        }
    });
    const mailOptions = {
        from: EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text
    };
    transporter.sendMail(mailOptions, (err)=>err && console.error(err)
    );
};
/* harmony default export */ const utils_sendEmail = (sendEmail);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,881], () => (__webpack_exec__(7636)));
module.exports = __webpack_exports__;

})();