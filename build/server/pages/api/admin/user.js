"use strict";
(() => {
var exports = {};
exports.id = 90;
exports.ids = [90];
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

/***/ 1738:
/***/ ((module) => {

module.exports = require("multer");

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

/***/ 6097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const withRoles = (...roles)=>(handler)=>(req, res)=>{
            // Chceking if user has the roles
            if (roles.includes(req.user.role)) return handler(req, res);
            return res.status(403).json({
                success: false,
                error: "Forbidden"
            });
        }
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withRoles);


/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withMulter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2970);
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9598);
/* harmony import */ var middlewares_withRoles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6097);
/* harmony import */ var models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3299);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4035);
/* harmony import */ var models_Directory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);






const handler = async (req, res)=>{
    const allowed = [
        "GET",
        "POST",
        "PUT",
        "DELETE"
    ];
    if (!allowed.includes(req.method)) return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    try {
        // Get users
        if (req.method === "GET") {
            // Get user by ID
            if (req.query.id) {
                const user = await models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id);
                if (!user) return res.status(404).json({
                    success: false,
                    error: "User not found"
                });
                return res.status(200).json({
                    success: true,
                    user
                });
            } else {
                const users = await models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].find */ .Z.find().populate("directory");
                return res.status(200).json({
                    success: true,
                    users
                });
            }
        } else if (req.method === "POST") {
            var ref, ref1;
            // Checking if required fields are passed
            const { name , email , password  } = req.body;
            if (!name || !email || !password) return res.status(400).json({
                success: false,
                error: "Please provide all fields"
            });
            // Checking if a user already exists with that email
            if (await models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
                email
            })) return res.status(400).json({
                success: false,
                error: "User already exists"
            });
            // Handling client registration
            let user;
            if (req.body.role === "Client") {
                var ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
                // Creating new directory profile
                const directory = await models_Directory__WEBPACK_IMPORTED_MODULE_4__/* ["default"].create */ .Z.create({
                    email,
                    number: (ref2 = req.body) === null || ref2 === void 0 ? void 0 : ref2.number,
                    storeName: (ref3 = req.body) === null || ref3 === void 0 ? void 0 : ref3.storeName,
                    category: (ref4 = req.body) === null || ref4 === void 0 ? void 0 : ref4.category,
                    address: (ref5 = req.body) === null || ref5 === void 0 ? void 0 : ref5.address,
                    city: (ref6 = req.body) === null || ref6 === void 0 ? void 0 : ref6.city,
                    state: (ref7 = req.body) === null || ref7 === void 0 ? void 0 : ref7.state,
                    pincode: (ref8 = req.body) === null || ref8 === void 0 ? void 0 : ref8.pincode
                });
                // Creating new user profile along with directory id
                user = await models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].create */ .Z.create({
                    name,
                    email,
                    password,
                    number: (ref9 = req.body) === null || ref9 === void 0 ? void 0 : ref9.number,
                    role: req.body.role,
                    directory: directory._id
                });
                // Adding user object ref to directory object
                directory.user = user._id;
                directory.save();
            } else user = await models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].create */ .Z.create({
                name,
                email,
                password,
                number: (ref = req.body) === null || ref === void 0 ? void 0 : ref.number,
                role: (ref1 = req.body) === null || ref1 === void 0 ? void 0 : ref1.role
            });
            res.status(200).json({
                success: true,
                user
            });
        } else if (req.method === "PUT") {
            var ref10;
            // Checking if the user exists
            const user = await models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id).populate("directory");
            if (!user) return res.status(404).json({
                success: false,
                error: "User not found"
            });
            // Updating fields
            if (req.body.name) user.name = req.body.name;
            if (req.body.email) user.email = req.body.email;
            if (req.body.password) user.password = req.body.password;
            if (req.body.role) user.role = req.body.role;
            if (req.body.number) user.number = req.body.number;
            if (req.body.directory !== undefined) {
                // Removing directory from user
                if (req.body.directory === "") {
                    user.directory.user = null;
                    await user.directory.save();
                    user.directory = null;
                    user.role = "Customer";
                } else {
                    const directory = await models_Directory__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findById */ .Z.findById(req.body.directory);
                    if (!directory) return res.status(404).json({
                        success: false,
                        error: "Directory not found"
                    });
                    if (directory.user) return res.status(400).json({
                        success: false,
                        error: "Directory already assigned to another user"
                    });
                    user.directory = req.body.directory;
                    user.role = "Client";
                    directory.user = user._id;
                    await directory.save();
                }
            }
            if (req.files) user.profileImage = `/uploads/${(ref10 = req.files.find((file)=>file.fieldname === "profileImage"
            )) === null || ref10 === void 0 ? void 0 : ref10.filename}`;
            // Saving and returning the user
            await user.save();
            return res.status(200).json({
                success: true,
                user
            });
        } else if (req.method === "DELETE") {
            const user = await models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findByIdAndDelete */ .Z.findByIdAndDelete(req.query.id);
            return res.status(200).json({
                success: true,
                user
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: "Server error"
        });
    }
};
const config = {
    api: {
        bodyParser: false
    }
}; // Disallow body parsing, since we're using multer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,middlewares_withRoles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("Admin")((0,middlewares_withMulter__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(handler))));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4035,3299,9598,9297,2970], () => (__webpack_exec__(706)));
module.exports = __webpack_exports__;

})();