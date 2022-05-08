"use strict";
(() => {
var exports = {};
exports.id = 7887;
exports.ids = [7887];
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

/***/ 7408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const PetSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    image: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    breeds: {
        type: [
            String
        ],
        default: []
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
// Virtual function to get all relevent categories for the pet
PetSchema.virtual("categories", {
    ref: "Category",
    localField: "name",
    foreignField: "pet"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Pet || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Pet", PetSchema));


/***/ }),

/***/ 5824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4035);
/* harmony import */ var models_Pet_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7408);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8738);



const handler = async (req, res)=>{
    if (req.method !== "GET") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    try {
        // Getting a single pet by id
        if (req.query.id) {
            const pet = await models_Pet_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(req.query.id).populate({
                path: "categories",
                populate: {
                    path: "docs"
                }
            });
            if (!pet) return res.status(404).json({
                success: false,
                error: "Pet not found"
            });
            return res.status(200).json({
                success: true,
                pet
            });
        }
        // Getting all pets
        const pets = await models_Pet_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find().populate({
            path: "categories",
            populate: {
                path: "docs"
            }
        });
        return res.status(200).json({
            success: true,
            pets
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
var __webpack_exports__ = __webpack_require__.X(0, [8459], () => (__webpack_exec__(5824)));
module.exports = __webpack_exports__;

})();