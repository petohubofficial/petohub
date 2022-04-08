"use strict";
(() => {
var exports = {};
exports.id = 5151;
exports.ids = [5151];
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

/***/ 7576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9598);
/* harmony import */ var middlewares_withRoles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6097);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var models_Product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5916);
/* harmony import */ var models_Edit_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(102);
/* harmony import */ var models_Directory_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4818);
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
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    try {
        // Get products
        if (req.method === "GET") {
            // Get a single product
            if (req.query.id) {
                const product = await models_Product_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id);
                if (!product) return res.status(404).json({
                    success: false,
                    error: "Product not found"
                });
                return res.status(200).json({
                    success: true,
                    product
                });
            } else {
                const page = parseInt(req.query.page) || 1;
                const limit = Math.min(parseInt(req.query.limit) || 20, 20);
                const query = req.query.q || "";
                const sort = req.query.sort || "";
                const category = req.query.category || "";
                const pet = req.query.pet || "";
                const brand = req.query.brand || "";
                const min = parseInt(req.query.min) || 0;
                const max = parseInt(req.query.max) || Number.MAX_SAFE_INTEGER;
                const startIndex = (page - 1) * limit;
                const endIndex = page * limit;
                // Building the query
                const productQuery = models_Product_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"].find */ .Z.find({
                    $and: [
                        {
                            name: {
                                $regex: query,
                                $options: "i"
                            }
                        },
                        {
                            category: {
                                $regex: category,
                                $options: "i"
                            }
                        },
                        {
                            brand: {
                                $regex: brand,
                                $options: "i"
                            }
                        },
                        {
                            petType: {
                                $regex: pet,
                                $options: "i"
                            }
                        },
                        {
                            description: {
                                $regex: query,
                                $options: "i"
                            }
                        },
                        {
                            price: {
                                $gte: min,
                                $lte: max
                            }
                        }, 
                    ]
                });
                // Populating reviews
                productQuery.populate({
                    path: "reviews",
                    populate: {
                        path: "reviewer",
                        select: "name profileImage _id"
                    }
                });
                // Sorting the query
                if (sort === "price") productQuery.sort({
                    price: -1
                });
                if (sort === "-price") productQuery.sort({
                    price: 1
                });
                if (sort === "rating") productQuery.sort({
                    averageRating: 1
                });
                if (sort === "-rating") productQuery.sort({
                    averageRating: -1
                });
                if (sort === "newest") productQuery.sort({
                    createdAt: -1
                });
                if (sort === "oldest") productQuery.sort({
                    createdAt: 1
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
            }
        } else if (req.method === "POST") {
            var ref, ref1, ref2;
            const product = await models_Product_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"].create */ .Z.create({
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
            const edit = await models_Edit_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].create */ .Z.create({
                user: req.user._id,
                product: product._id,
                date: Date.now(),
                changes: req.body
            });
            product.lastEdit = edit._id;
            product.edits.unshift(edit._id);
            await product.save();
            // Manually populating edits and lastEdit
            product.lastEdit = await models_Edit_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(product.lastEdit).populate("user");
            product.edits = await models_Edit_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].find */ .Z.find({
                product: product._id
            }).sort({
                date: -1
            }).populate("user");
            res.status(200).json({
                success: true,
                product
            });
        } else if (req.method === "PUT") {
            // Check if the product exists
            const product = await models_Product_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id).select("+edits");
            if (!product) return res.status(404).json({
                success: false,
                error: "Product not found"
            });
            // Check if the seller ref is passed
            if (req.body.seller !== undefined) {
                // To remove the seller ref
                if (req.body.seller === "") product.seller = null;
                else {
                    if (!await models_Directory_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findById */ .Z.findById(req.body.seller)) return res.status(404).json({
                        success: false,
                        error: "Directory not found"
                    });
                    product.seller = req.body.seller;
                }
            }
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
            const edit = await models_Edit_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].create */ .Z.create({
                user: req.user._id,
                product: product._id,
                date: Date.now(),
                changes: req.body
            });
            product.lastEdit = edit._id;
            product.edits.unshift(edit._id);
            await product.save();
            // Manually populating edits and lastEdit
            product.lastEdit = await models_Edit_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(product.lastEdit).populate("user");
            product.edits = await models_Edit_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].find */ .Z.find({
                product: product._id
            }).sort({
                date: -1
            }).populate("user");
            // Returning the updated product
            return res.status(200).json({
                success: true,
                product
            });
        } else if (req.method === "DELETE") {
            // Check if the product exists
            const product = await models_Product_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(req.query.id);
            if (!product) return res.status(404).json({
                success: false,
                error: "Product not found"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((0,middlewares_withRoles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(types_user__WEBPACK_IMPORTED_MODULE_5__/* .Role.ADMIN */ .u.ADMIN, types_user__WEBPACK_IMPORTED_MODULE_5__/* .Role.PRODUCT_ADMIN */ .u.PRODUCT_ADMIN)(handler)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,881,9598,4818,5916], () => (__webpack_exec__(7576)));
module.exports = __webpack_exports__;

})();