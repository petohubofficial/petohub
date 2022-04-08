"use strict";
(() => {
var exports = {};
exports.id = 4992;
exports.ids = [4992];
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

/***/ 102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const EditSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    date: Date,
    product: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "Product"
    },
    user: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "User"
    },
    changes: Object
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Edit) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Edit", EditSchema));


/***/ }),

/***/ 3736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withMulter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2970);
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9598);
/* harmony import */ var middlewares_withRoles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6097);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4035);
/* harmony import */ var models_Product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5916);
/* harmony import */ var models_Edit_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(102);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8738);
/* harmony import */ var types_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1957);








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
        // Get own products
        if (req.method === "GET") {
            // Get a single product
            if (req.query.id) {
                const product = await models_Product_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(req.query.id).where("seller").equals(req.user.directory);
                if (!product) return res.status(404).json({
                    success: false,
                    error: "Product not found"
                });
                return res.status(200).json({
                    success: true,
                    product
                });
            } else {
                const products = await models_Product_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].find */ .Z.find().where("seller").equals(req.user.directory);
                return res.status(200).json({
                    success: true,
                    products
                });
            }
        } else if (req.method === "POST") {
            var ref, ref1, ref2;
            const product = await models_Product_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].create */ .Z.create({
                seller: req.user.directory,
                name: req.body.name,
                brand: req.body.brand,
                category: req.body.category,
                petType: (ref = req.body.petType) === null || ref === void 0 ? void 0 : ref.split(","),
                keywords: req.body.keywords ? (ref1 = req.body.keywords) === null || ref1 === void 0 ? void 0 : ref1.split(",") : [],
                breedType: req.body.breedType,
                description: req.body.description,
                weight: req.body.weight,
                size: JSON.parse(req.body.size || "{}"),
                countInStock: req.body.countInStock,
                price: req.body.price,
                isVeg: req.body.isVeg,
                ageRange: JSON.parse(req.body.ageRange || "{}"),
                affiliateLinks: JSON.parse(req.body.affiliateLinks || "{}"),
                productImages: (ref2 = req.body.productImages) === null || ref2 === void 0 ? void 0 : ref2.split(",")
            });
            if (req.files) {
                const productImages = req.files.filter((file)=>file.fieldname === "productImages"
                );
                if (productImages.length > 0) {
                    const newImages = productImages.map((image)=>`/uploads/${image.filename}`
                    );
                    product.productImages = product.productImages.concat(newImages);
                }
            }
            // Tracking edits
            const edit = await models_Edit_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"].create */ .Z.create({
                user: req.user._id,
                product: product._id,
                date: Date.now(),
                changes: req.body
            });
            product.lastEdit = edit._id;
            product.edits.unshift(edit._id);
            await product.save();
            res.status(200).json({
                success: true,
                product
            });
        } else if (req.method === "PUT") {
            // Check if the product exists
            const product = await models_Product_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(req.query.id).select("+edits");
            if (!product) return res.status(404).json({
                success: false,
                error: "Product not found"
            });
            // Check if the current user is editing a non-seller product
            if (!product.seller) return res.status(400).json({
                success: false,
                error: "Unable to edit this product"
            });
            // Check if the current user is the seller of that product
            if (product.seller.toString() !== req.user._id.toString()) return res.status(400).json({
                success: false,
                error: "Unable to edit this product"
            });
            // Updating the product
            if (req.body.name) product.name = req.body.name;
            if (req.body.brand) product.brand = req.body.brand;
            if (req.body.category) product.category = req.body.category;
            if (req.body.petType) product.petType = req.body.petType.split(",");
            if (req.body.keywords) product.keywords = req.body.keywords.split(",");
            if (req.body.breedType) product.breedType = req.body.breedType;
            if (req.body.description) product.description = req.body.description;
            if (req.body.weight) product.weight = req.body.weight;
            if (req.body.size) product.size = JSON.parse(req.body.size);
            if (req.body.countInStock) product.countInStock = req.body.countInStock;
            if (req.body.price) product.price = req.body.price;
            if (req.body.isVeg) product.isVeg = req.body.isVeg;
            if (req.body.ageRange) product.ageRange = JSON.parse(req.body.ageRange);
            if (req.body.affiliateLinks) product.affiliateLinks = JSON.parse(req.body.affiliateLinks);
            if (req.files) {
                const productImages = req.files.filter((file)=>file.fieldname === "productImages"
                );
                if (productImages.length > 0) {
                    const newImages = productImages.map((image)=>`/uploads/${image.filename}`
                    );
                    product.productImages = product.productImages.concat(newImages);
                }
            }
            if (req.body.productImages) product.productImages = req.body.productImages.split(",");
            if (req.body.productImages === "") product.productImages = [];
            // Tracking edits
            const edit = await models_Edit_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"].create */ .Z.create({
                user: req.user._id,
                product: product._id,
                date: Date.now(),
                changes: req.body
            });
            product.lastEdit = edit._id;
            product.edits.unshift(edit._id);
            await product.save();
            // Returning the updated product
            return res.status(200).json({
                success: true,
                product
            });
        } else if (req.method === "DELETE") {
            // Check if the product exists
            const product = await models_Product_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(req.query.id);
            if (!product) return res.status(404).json({
                success: false,
                error: "Product not found"
            });
            // Check if the current user is removing a non-seller product
            if (!product.seller) return res.status(400).json({
                success: false,
                error: "Unable to remove this product"
            });
            // Check if the current user is the seller of that product or an admin
            if (product.seller.toString() != req.user._id.toString()) return res.status(400).json({
                success: false,
                error: "Unable to remove this product"
            });
            // Delete the product
            await product.remove();
            return res.status(200).json({
                success: true,
                product
            });
        }
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(error, res);
    }
};
const config = {
    api: {
        bodyParser: false
    }
}; // Disallow body parsing, since we're using multer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,middlewares_withRoles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(types_user__WEBPACK_IMPORTED_MODULE_5__/* .Role.CLIENT */ .u.CLIENT)((0,middlewares_withMulter__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(handler))));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,881,9598,5916,2970], () => (__webpack_exec__(3736)));
module.exports = __webpack_exports__;

})();