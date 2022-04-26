"use strict";
(() => {
var exports = {};
exports.id = 7007;
exports.ids = [7007];
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

/***/ 1333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models_User_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(881);
/* harmony import */ var models_Directory_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(682);
/* harmony import */ var utils_sendEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1453);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4035);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8738);
/* harmony import */ var types_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1957);






const handler = async (req, res)=>{
    if (req.method !== "POST") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    try {
        // Taking the credentials and verifying
        const { name , email , password  } = req.body;
        if (!name || !email || !password) return res.status(400).json({
            success: false,
            error: "Please provide email, name and password"
        });
        // Checking if the user already exists
        if (await models_User_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
            email
        })) return res.status(400).json({
            success: false,
            error: "User already exists"
        });
        // Handling client registeration
        let user;
        if (req.body.role === types_user__WEBPACK_IMPORTED_MODULE_4__/* .Role.CLIENT */ .u.CLIENT) {
            var ref, ref1, ref2, ref3, ref4, ref5, ref6;
            // Creating new directory profile
            const directory = await models_Directory_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
                email,
                number: (ref = req.body) === null || ref === void 0 ? void 0 : ref.number,
                storeName: (ref1 = req.body) === null || ref1 === void 0 ? void 0 : ref1.storeName,
                category: (ref2 = req.body) === null || ref2 === void 0 ? void 0 : ref2.category,
                address: (ref3 = req.body) === null || ref3 === void 0 ? void 0 : ref3.address,
                state: (ref4 = req.body) === null || ref4 === void 0 ? void 0 : ref4.state,
                pincode: (ref5 = req.body) === null || ref5 === void 0 ? void 0 : ref5.pincode
            });
            // Creating new user profile along with directory id
            user = await models_User_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create({
                name,
                email,
                password,
                number: (ref6 = req.body) === null || ref6 === void 0 ? void 0 : ref6.number,
                role: req.body.role,
                directory: directory._id
            });
            // Adding user object ref to directory object
            directory.user = user._id;
            directory.save();
        } else user = await models_User_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create({
            name,
            email,
            password
        });
        // Generating a verification token
        const verificationToken = user.getVerificationToken();
        await user.save();
        // Generating a verification url and message
        const verifyUrl = `${process.env.SITE_URL}/verify?token=${verificationToken}`;
        const message = `
            <h1>Petohub account verification</h1>
            <p>Please go to this link to verify your account</p>
            <a href=${verifyUrl} clicktracking=off>${verifyUrl}</a>
        `;
        // Sending the email
        try {
            await (0,utils_sendEmail__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
                to: user.email,
                subject: "Petohub Account Verification",
                text: message
            });
            return res.status(200).json({
                success: true,
                data: "Email for account verification has been sent successfully"
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: "Email sending failed"
            });
        }
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(error, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [8459,881,682], () => (__webpack_exec__(1333)));
module.exports = __webpack_exports__;

})();