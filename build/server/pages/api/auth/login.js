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

/***/ 1203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: ./models/User.model.ts
var User_model = __webpack_require__(881);
// EXTERNAL MODULE: ./utils/connectDb.ts
var connectDb = __webpack_require__(4035);
;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
;// CONCATENATED MODULE: ./utils/setCookie.ts

const setCookie = (res, name, value, options = {})=>{
    const stringValue = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);
    if (options.maxAge) {
        options.expires = new Date(Date.now() + options.maxAge);
        options.maxAge /= 1000;
    }
    res.setHeader("Set-Cookie", (0,external_cookie_namespaceObject.serialize)(name, stringValue, options));
};

// EXTERNAL MODULE: ./utils/errorHandler.ts
var errorHandler = __webpack_require__(8738);
;// CONCATENATED MODULE: ./pages/api/auth/login.ts




const handler = async (req, res)=>{
    if (req.method !== "POST") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,connectDb/* default */.Z)();
    // Taking the credentials and verifying
    const { email , password  } = req.body;
    if (!email || !password) return res.status(400).json({
        success: false,
        error: "Please provide email and password"
    });
    try {
        // Finding the user
        const user = await User_model/* default.findOne */.Z.findOne({
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
        // Success response
        setCookie(res, "token", user.generateAuthToken(), {
            maxAge: 2 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json({
            success: true,
            user: _user
        });
    } catch (error) {
        (0,errorHandler/* default */.Z)(error, res);
    }
};
/* harmony default export */ const login = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,881], () => (__webpack_exec__(1203)));
module.exports = __webpack_exports__;

})();