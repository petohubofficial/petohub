"use strict";
exports.id = 1440;
exports.ids = [1440];
exports.modules = {

/***/ 1440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Category)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./types/category.ts
var CategoryType;
(function(CategoryType) {
    CategoryType["PRODUCT"] = "Product";
    CategoryType["DIRECTORY"] = "Directory";
    CategoryType["SERVICE"] = "Service";
})(CategoryType || (CategoryType = {}));

;// CONCATENATED MODULE: ./models/Category.ts


const CategorySchema = new (external_mongoose_default()).Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    type: {
        type: String,
        enum: Object.values(CategoryType),
        required: true
    },
    subCategories: {
        type: [
            {
                type: String,
                ref: "Category"
            }, 
        ],
        default: []
    },
    pet: {
        type: [
            String
        ],
        default: []
    },
    image: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
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
// Virtual function to allow dynamic refs to Product, Service, Directory models
CategorySchema.virtual("docs", {
    ref: (doc)=>doc.type
    ,
    localField: "name",
    foreignField: "category"
});
/* harmony default export */ const Category = ((external_mongoose_default()).models.Category || external_mongoose_default().model("Category", CategorySchema));


/***/ })

};
;