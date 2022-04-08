"use strict";
(() => {
var exports = {};
exports.id = 2759;
exports.ids = [2759];
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

/***/ 3665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models_Product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5916);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8738);



const handler = async (req, res)=>{
    if (req.method !== "GET") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    try {
        // Getting a single product by id
        if (req.query.id) {
            const product = await models_Product_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find({
                id: req.query.id,
                isApproved: true
            }).populate({
                path: "reviews",
                populate: {
                    path: "reviewer",
                    select: "name profileImage"
                }
            }).populate({
                path: "questions",
                populate: {
                    path: "askedBy answers.answeredBy",
                    select: "name profileImage"
                }
            });
            if (!product) return res.status(404).json({
                success: false,
                error: "Product not found"
            });
            return res.status(200).json({
                success: true,
                product
            });
        }
        // Getting all products
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
        const productQuery = models_Product_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find({
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
        // Selecting only approved products
        productQuery.where("isApproved").equals(true);
        // Populating reviews
        productQuery.populate({
            path: "reviews",
            populate: {
                path: "reviewer",
                select: "name profileImage"
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
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(error, res);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,5916], () => (__webpack_exec__(3665)));
module.exports = __webpack_exports__;

})();