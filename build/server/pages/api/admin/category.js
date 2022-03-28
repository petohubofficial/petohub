"use strict";
(() => {
var exports = {};
exports.id = 1571;
exports.ids = [1571];
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

/***/ 5362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9598);
/* harmony import */ var middlewares_withRoles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6097);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var models_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);




const handler = async (req, res)=>{
    const allowed = [
        "POST",
        "PUT",
        "DELETE"
    ];
    if (!allowed.includes(req.method)) return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    if (req.method !== "POST" && !req.query.id) return res.status(400).json({
        success: false,
        error: "Please provide a category id"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    try {
        // Adding a new category
        if (req.method === "POST") {
            for (const name of req.body.subCategories){
                const subCategory = await models_Category__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
                    name
                });
                if (!subCategory) return res.status(404).json({
                    success: false,
                    error: "Subcategory not found"
                });
            }
            const category = await models_Category__WEBPACK_IMPORTED_MODULE_2__/* ["default"].create */ .Z.create({
                name: req.body.name,
                type: req.body.type,
                pet: req.body.pet,
                image: req.body.image,
                subCategories: req.body.subCategories,
                description: req.body.description
            });
            return res.status(200).json({
                success: true,
                category
            });
        }
        const category = await models_Category__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id);
        if (!category) return res.status(404).json({
            success: false,
            error: "Category not found"
        });
        else if (req.method === "PUT") {
            for (const name of req.body.subCategories){
                const subCategory = await models_Category__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
                    name
                });
                if (!subCategory) return res.status(404).json({
                    success: false,
                    error: "Subcategory not found"
                });
            }
            if (req.body.name !== undefined) category.name = req.body.name;
            if (req.body.description !== undefined) category.description = req.body.description;
            if (req.body.image !== undefined) category.image = req.body.image;
            if (req.body.pet !== undefined) category.pet = req.body.pet;
            if (req.body.type !== undefined) category.type = req.body.type;
            if (req.body.subCategories !== undefined) category.subCategories = req.body.subCategories;
            await category.save();
            return res.status(200).json({
                success: true,
                category
            });
        } else if (req.method === "DELETE") {
            await category.remove();
            return res.status(200).json({
                success: true,
                category
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((0,middlewares_withRoles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("Admin", "Product Admin")(handler)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4035,3299,9598,1440], () => (__webpack_exec__(5362)));
module.exports = __webpack_exports__;

})();