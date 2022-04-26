"use strict";
(() => {
var exports = {};
exports.id = 4122;
exports.ids = [4122];
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

/***/ 1257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withMulter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2970);
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9598);
/* harmony import */ var models_User_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(881);
/* harmony import */ var types_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1957);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4035);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8738);






const handler = async (req, res)=>{
    if (req.method !== "POST") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    try {
        const user = await models_User_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.user.id).populate("directory");
        // Controlling customer update profile request
        if (req.user.role === types_user__WEBPACK_IMPORTED_MODULE_3__/* .Role.CUSTOMER */ .u.CUSTOMER) {
            if (req.body.name) user.name = req.body.name;
            if (req.files) {
                const profileImage = req.files.find((file)=>file.fieldname === "profileImage"
                );
                if (profileImage) user.profileImage = `/uploads/${profileImage.filename}`;
            }
            await user.save();
        } else if (req.user.role === types_user__WEBPACK_IMPORTED_MODULE_3__/* .Role.CLIENT */ .u.CLIENT) {
            // Getting the directory profile
            const directory = user.directory;
            // Plain text fields
            if (req.body.username) directory.username = req.body.username;
            if (req.body.name) user.name = req.body.name;
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
            if (req.body.features) directory.features = req.body.features.split(",");
            if (req.body.products) directory.products = req.body.products.split(",");
            if (req.body.services) directory.services = req.body.services.split(",");
            if (req.body.gallery) directory.gallery = req.body.gallery.split(",");
            // Object fields in formdata are in JSON format
            if (req.body.details) directory.details = JSON.parse(req.body.details);
            if (req.body.faq) directory.faq = JSON.parse(req.body.faq);
            if (req.body.location) directory.location = JSON.parse(req.body.location);
            if (req.body.timings) directory.timings = JSON.parse(req.body.timings);
            // Files contain single profileImage and multiple directoryImages files
            if (req.files) {
                const profileImage = req.files.find((file)=>file.fieldname === "profileImage"
                );
                if (profileImage) user.profileImage = `/uploads/${profileImage.filename}`;
                // ASSUME: the maximum number of files in request = the number of files user can have at most - the number of files user currently have
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
            await user.save();
            await directory.save();
        }
        return res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(error, res);
    }
};
const config = {
    api: {
        bodyParser: false
    }
}; // Disallow body parsing, since we're using multer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,middlewares_withMulter__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(handler)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,881,9598,2970], () => (__webpack_exec__(1257)));
module.exports = __webpack_exports__;

})();