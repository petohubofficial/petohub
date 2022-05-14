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

const EditSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    date: Date,
    product: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
        ref: "Product"
    },
    user: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
        ref: "User"
    },
    changes: Object
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Edit || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Edit", EditSchema));


/***/ }),

/***/ 8955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ product)
});

// EXTERNAL MODULE: ./middlewares/withMulter.ts
var withMulter = __webpack_require__(2970);
// EXTERNAL MODULE: ./middlewares/withProtect.ts
var withProtect = __webpack_require__(9598);
// EXTERNAL MODULE: ./middlewares/withRoles.ts
var withRoles = __webpack_require__(6097);
// EXTERNAL MODULE: ./utils/connectDb.ts
var connectDb = __webpack_require__(4035);
// EXTERNAL MODULE: ./models/Product.model.ts + 1 modules
var Product_model = __webpack_require__(6226);
// EXTERNAL MODULE: ./models/Edit.model.ts
var Edit_model = __webpack_require__(102);
// EXTERNAL MODULE: ./utils/errorHandler.ts
var errorHandler = __webpack_require__(8738);
// EXTERNAL MODULE: ./types/user.ts
var user = __webpack_require__(1957);
;// CONCATENATED MODULE: ./utils/parseFormData.ts
function parseFormData(obj, config) {
    const data = JSON.parse(JSON.stringify(obj));
    const keys = Object.keys(data);
    if (keys.length === 0) return data;
    keys.forEach((key)=>{
        const value = obj[key];
        if ((config === null || config === void 0 ? void 0 : config.exclude) && (config === null || config === void 0 ? void 0 : config.exclude.includes(key))) return;
        if ((config === null || config === void 0 ? void 0 : config.include) && !(config === null || config === void 0 ? void 0 : config.include.includes(key))) return;
        if ((config === null || config === void 0 ? void 0 : config.files) && (config === null || config === void 0 ? void 0 : config.files.includes(key))) {
            data[key] = value;
        } else if ((config === null || config === void 0 ? void 0 : config.objects) && (config === null || config === void 0 ? void 0 : config.objects.includes(key))) {
            data[key] = JSON.parse(value);
        }
    });
    return data;
};

;// CONCATENATED MODULE: ./pages/api/client/product.ts









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
    await (0,connectDb/* default */.Z)();
    try {
        // Get own products
        if (req.method === "GET") {
            // Get a single product
            if (req.query.id) {
                const product = await Product_model/* default.findById */.Z.findById(req.query.id).where("seller").equals(req.user.directory);
                if (!product) return res.status(404).json({
                    success: false,
                    error: "Product not found"
                });
                return res.status(200).json({
                    success: true,
                    product
                });
            }
            // Get all products
            const page = parseInt(req.query.page) || 1;
            const limit = Math.min(parseInt(req.query.limit) || 20, 20);
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const productQuery = Product_model/* default.find */.Z.find({
                seller: req.user.directory
            });
            // Pagination
            productQuery.skip(startIndex).limit(limit);
            // Executing the query
            const products = await productQuery;
            // Making the results object along with some metadata
            const results = {
                total: 0,
                pages: 0,
                results: [],
                next: {
                    page: 0,
                    limit: 0
                },
                prev: {
                    page: 0,
                    limit: 0
                }
            };
            results.total = products.length;
            results.pages = Math.ceil(results.total / limit);
            results.results = products;
            // Metadata for next and prev pages
            if (endIndex < results.total) results.next = {
                page: page + 1,
                limit: limit
            };
            if (startIndex > 0) results.prev = {
                page: page - 1,
                limit: limit
            };
            return res.status(200).json({
                success: true,
                data: results
            });
        } else if (req.method === "POST") {
            const request = parseFormData(req.body, {
                objects: [
                    "affiliateLinks",
                    "productImages",
                    "size",
                    "ageRange",
                    "petType",
                    "keywords"
                ]
            });
            const product = await Product_model/* default.create */.Z.create(request);
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
            const edit = await Edit_model/* default.create */.Z.create({
                user: req.user._id,
                product: product._id,
                date: Date.now(),
                changes: req.body
            });
            product.lastEdit = edit._id;
            product.edits.unshift(edit._id);
            await product.save();
            return res.status(200).json({
                success: true,
                product
            });
        } else if (req.method === "PUT") {
            var ref;
            // Check if the product exists
            const product = await Product_model/* default.findById */.Z.findById(req.query.id).select("+edits");
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
            if (product.seller.toString() !== ((ref = req.user.directory) === null || ref === void 0 ? void 0 : ref.toString())) return res.status(400).json({
                success: false,
                error: "Unable to edit this product"
            });
            // Updating the product
            const request = parseFormData(req.body, {
                objects: [
                    "affiliateLinks",
                    "productImages",
                    "size",
                    "ageRange",
                    "petType",
                    "keywords"
                ]
            });
            await Product_model/* default.findByIdAndUpdate */.Z.findByIdAndUpdate(req.query.id, request, {
                new: true,
                runValidators: true
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
            const edit = await Edit_model/* default.create */.Z.create({
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
            var ref1;
            // Check if the product exists
            const product = await Product_model/* default.findById */.Z.findById(req.query.id);
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
            if (product.seller.toString() != ((ref1 = req.user.directory) === null || ref1 === void 0 ? void 0 : ref1.toString())) return res.status(400).json({
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
        (0,errorHandler/* default */.Z)(error, res);
    }
};
const config = {
    api: {
        bodyParser: false
    }
}; // Disallow body parsing, since we're using multer
/* harmony default export */ const product = ((0,withProtect/* default */.Z)((0,withRoles/* default */.Z)(user/* Role.CLIENT */.u.CLIENT)((0,withMulter/* default */.Z)(handler))));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,881,9598,6226,2970], () => (__webpack_exec__(8955)));
module.exports = __webpack_exports__;

})();