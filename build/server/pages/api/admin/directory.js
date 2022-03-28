"use strict";
(() => {
var exports = {};
exports.id = 4481;
exports.ids = [4481];
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

/***/ 3153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withMulter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2970);
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9598);
/* harmony import */ var middlewares_withRoles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6097);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4035);
/* harmony import */ var models_Directory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3299);






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
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    try {
        // Get directories
        if (req.method === "GET") {
            // Get a single directory
            if (req.query.id) {
                const directory = await models_Directory__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(req.query.id).select("+user").populate("user");
                if (!directory) return res.status(404).json({
                    success: false,
                    error: "Directory not found"
                });
                return res.status(200).json({
                    success: true,
                    directory
                });
            } else {
                const directories = await models_Directory__WEBPACK_IMPORTED_MODULE_3__/* ["default"].find */ .Z.find().select("+user").populate("user");
                return res.status(200).json({
                    success: true,
                    directories
                });
            }
        } else if (req.method === "POST") {
            var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
            // Checking if the directory is being linked to an existing user
            let user, link;
            if (req.body.user && req.body.user !== "") {
                user = await models_User__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findById */ .Z.findById(req.body.user);
                if (!user) return res.status(404).json({
                    success: false,
                    error: "User not found"
                });
                if (user.directory) return res.status(400).json({
                    success: false,
                    error: "User is already a client"
                });
                link = true;
            }
            // Creating the directory
            const directory = await models_Directory__WEBPACK_IMPORTED_MODULE_3__/* ["default"].create */ .Z.create({
                storeName: (ref = req.body) === null || ref === void 0 ? void 0 : ref.storeName,
                email: (ref1 = req.body) === null || ref1 === void 0 ? void 0 : ref1.email,
                address: (ref2 = req.body) === null || ref2 === void 0 ? void 0 : ref2.address,
                category: (ref3 = req.body) === null || ref3 === void 0 ? void 0 : ref3.category,
                state: (ref4 = req.body) === null || ref4 === void 0 ? void 0 : ref4.state,
                city: (ref5 = req.body) === null || ref5 === void 0 ? void 0 : ref5.city,
                pincode: (ref6 = req.body) === null || ref6 === void 0 ? void 0 : ref6.pincode,
                number: (ref7 = req.body) === null || ref7 === void 0 ? void 0 : ref7.number
            });
            // Adding refs to directory and user
            if (link) {
                directory.user = req.body.user;
                user.directory = directory._id;
                if (user.role === "Customer") user.role = "Client";
                await directory.save();
                await user.save();
                directory.user = user;
            }
            return res.status(200).json({
                success: true,
                directory
            });
        } else if (req.method === "PUT") {
            // Checking if the directory exists
            const directory = await models_Directory__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(req.query.id).select("+user").populate("user");
            if (!directory) return res.status(404).json({
                success: false,
                error: "Directory not found"
            });
            // If user ref is passed
            if (req.body.user !== undefined) {
                // Removing user from directory
                if (req.body.user === "") {
                    if (directory.user !== null) {
                        directory.user.directory = null;
                        directory.user.role = "Customer";
                        await directory.user.save();
                        directory.user = null;
                    }
                } else {
                    const user = await models_User__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findById */ .Z.findById(req.body.user);
                    if (!user) return res.status(404).json({
                        success: false,
                        error: "User not found"
                    });
                    if (user.directory) return res.status(400).json({
                        success: false,
                        error: "User is already a client"
                    });
                    user.directory = directory._id;
                    user.role = "Client";
                    await user.save();
                    directory.user = user._id;
                }
            }
            // Updating fields
            if (req.body.username) {
                if (await models_Directory__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findOne */ .Z.findOne({
                    username: req.body.username
                })) return res.status(400).json({
                    success: false,
                    error: "Username already exists"
                });
                const lookups = [
                    "shop",
                    "username",
                    "directory",
                    "directories",
                    "profile",
                    "profiles",
                    "account",
                    "accounts",
                    "ngo",
                    "ngos",
                    "service",
                    "services",
                    "home",
                    "contact",
                    "contactus",
                    "feedback",
                    "help",
                    "terms",
                    "conditions",
                    "donate",
                    "product",
                    "products",
                    "purchase",
                    "sell",
                    "seller",
                    "buyer",
                    "purchases",
                    "tnc",
                    "privacy",
                    "policy",
                    "privacypolicy",
                    "privacy-policy",
                    "terms-and-conditions",
                    "tnc",
                    "api", 
                ];
                for (const lookup of lookups){
                    if (req.body.username.toLowerCase() === lookup) return res.status(400).json({
                        success: false,
                        error: "Username not allowed"
                    });
                }
                directory.username = req.body.username;
            }
            // Plain text fields
            if (req.body.storeName) directory.storeName = req.body.storeName;
            if (req.body.number) directory.number = req.body.number;
            if (req.body.address) directory.address = req.body.address;
            if (req.body.city) directory.city = req.body.city;
            if (req.body.state) directory.state = req.body.state;
            if (req.body.pincode) directory.pincode = req.body.pincode;
            if (req.body.description) directory.description = req.body.description;
            if (req.body.website) directory.website = req.body.website;
            if (req.body.tagline) directory.tagline = req.body.tagline;
            // Array fields in formdata are seperated by commas
            if (req.body.category) directory.category = req.body.category.split(",");
            if (req.body.category === "") directory.category = [];
            if (req.body.features) directory.features = req.body.features.split(",");
            if (req.body.features === "") directory.features = [];
            if (req.body.products) directory.products = req.body.products.split(",");
            if (req.body.products === "") directory.products = [];
            if (req.body.services) directory.services = req.body.services.split(",");
            if (req.body.services === "") directory.services = [];
            if (req.body.gallery) directory.gallery = req.body.gallery.split(",");
            if (req.body.gallery === "") directory.gallery = [];
            // Object fields in formdata are in JSON format
            if (req.body.details) directory.details = JSON.parse(req.body.details);
            if (req.body.faq) directory.faq = JSON.parse(req.body.faq);
            if (req.body.location) directory.location = JSON.parse(req.body.location);
            if (req.body.timings) directory.timings = JSON.parse(req.body.timings);
            // Files contain directoryImages
            if (req.files) {
                const directoryImages = req.files.filter((file)=>file.fieldname === "directoryImages"
                );
                if (directoryImages.length > 0) {
                    const newImages = directoryImages.map((image)=>`/uploads/${image.filename}`
                    );
                    directory.directoryImages = directory.directoryImages.concat(newImages);
                }
            }
            // Manually changing directory images array to remove some previous ones
            if (req.body.directoryImages) directory.directoryImages = req.body.directoryImages.split(",");
            if (req.body.directoryImages === "") directory.directoryImages = [];
            await directory.save();
            return res.status(200).json({
                success: true,
                directory
            });
        } else if (req.method === "DELETE") {
            var ref8;
            // Check if the directory exists
            const directory = await models_Directory__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(req.query.id).select("+user").populate("user");
            if (!directory) return res.status(404).json({
                success: false,
                error: "Directory not found"
            });
            // Removing directory reference from the linked user
            if ((ref8 = directory.user) === null || ref8 === void 0 ? void 0 : ref8.directory) {
                delete directory.user.directory;
                directory.user.role = "Customer";
                await directory.user.save();
            }
            // Delete the directory
            await directory.remove();
            return res.status(200).json({
                success: true,
                directory
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,middlewares_withRoles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("Admin", "Product Admin")((0,middlewares_withMulter__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(handler))));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4035,3299,9598,9297,2970], () => (__webpack_exec__(3153)));
module.exports = __webpack_exports__;

})();