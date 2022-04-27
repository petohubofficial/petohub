exports.id = 8459;
exports.ids = [8459];
exports.modules = {

/***/ 6291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Brand.model": 9549,
	"./Brand.model.ts": 9549,
	"./Category.model": 6925,
	"./Category.model.ts": 6925,
	"./Directory.model": 7630,
	"./Directory.model.ts": 7630,
	"./Edit.model": 4229,
	"./Edit.model.ts": 4229,
	"./Inquiry.model": 4834,
	"./Inquiry.model.ts": 4834,
	"./Newsletter.model": 7928,
	"./Newsletter.model.ts": 7928,
	"./Pet.model": 5227,
	"./Pet.model.ts": 5227,
	"./Product.model": 5412,
	"./Product.model.ts": 5412,
	"./Question.model": 2404,
	"./Question.model.ts": 2404,
	"./Review.model": 8985,
	"./Review.model.ts": 8985,
	"./Service.model": 6690,
	"./Service.model.ts": 6690,
	"./User.model": 7718,
	"./User.model.ts": 7718
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6291;

/***/ }),

/***/ 9549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const BrandSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    logo: {
        type: String,
        default: ""
    },
    images: {
        type: [
            String
        ],
        default: []
    },
    description: {
        type: String,
        default: ""
    },
    sellers: {
        type: [
            {
                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
                ref: "Directory"
            }, 
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
// Virtual function to get all relevent products for the brand
BrandSchema.virtual("products", {
    ref: "Product",
    localField: "name",
    foreignField: "brand"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Brand) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Brand", BrandSchema));


/***/ }),

/***/ 6925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Category_model)
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

;// CONCATENATED MODULE: ./models/Category.model.ts


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
/* harmony default export */ const Category_model = ((external_mongoose_default()).models.Category || external_mongoose_default().model("Category", CategorySchema));


/***/ }),

/***/ 7630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Directory_model)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./data/lookups.json
const lookups_namespaceObject = JSON.parse('["shop","username","directory","directories","profile","profiles","account","accounts","ngo","ngos","service","services","home","contact","contactus","feedback","help","terms","conditions","donate","product","products","purchase","sell","seller","buyer","purchases","tnc","privacy","policy","privacypolicy","privacy-policy","terms-and-conditions","tnc","api"]');
;// CONCATENATED MODULE: ./models/Directory.model.ts




const DirectorySchema = new (external_mongoose_default()).Schema({
    storeName: {
        type: String,
        trim: true,
        required: [
            true,
            "Please provide a business/store name"
        ],
        maxlength: [
            64,
            "Store name is too long"
        ],
        minlength: [
            3,
            "Store name is too short"
        ]
    },
    user: {
        type: (external_mongoose_default()).SchemaTypes.ObjectId,
        ref: "User",
        default: null,
        select: false
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            "Please provide a valid email", 
        ]
    },
    address: {
        type: String,
        required: [
            true,
            "Please provide an address"
        ],
        trim: true,
        minlength: [
            8,
            "Address is too short"
        ],
        maxlength: [
            256,
            "Address is too long"
        ]
    },
    category: {
        type: [
            {
                type: String,
                ref: "Category"
            }
        ],
        minlength: [
            1,
            "Please provide atleast one category"
        ]
    },
    state: {
        type: String,
        required: [
            true,
            "Please provide a state"
        ],
        minlength: [
            2,
            "State name is too short"
        ],
        maxlength: [
            16,
            "State name is too long"
        ]
    },
    pincode: {
        type: String,
        required: [
            true,
            "Please provide a pincode"
        ],
        match: [
            /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/g,
            "Please provide a valid pincode"
        ]
    },
    number: {
        type: String,
        required: [
            true,
            "Please provide a phone number"
        ],
        match: [
            /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/g,
            "Please provide a valid phone number", 
        ]
    },
    products: {
        type: [
            {
                type: String,
                trim: true
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 25
            ,
            "Too many products"
        ]
    },
    services: {
        type: [
            {
                type: String,
                trim: true
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 25
            ,
            "Too many services"
        ]
    },
    location: {
        type: {
            lat: Number,
            lng: Number
        },
        default: {
            lat: 28.7041,
            lng: 77.1025
        }
    },
    timings: {
        type: [
            {
                _id: false,
                from: String,
                to: String
            }, 
        ],
        default: Array(7).fill({
            from: "00:00",
            to: "00:00"
        }),
        validate: [
            (arr)=>arr.length <= 7
            ,
            "You can have at most 7 timings"
        ]
    },
    faq: {
        type: [
            {
                _id: false,
                question: {
                    type: String,
                    required: true,
                    trim: true,
                    minlength: [
                        4,
                        "Question is too short"
                    ],
                    maxlength: [
                        120,
                        "Question is too long"
                    ]
                },
                answer: {
                    type: String,
                    required: true,
                    trim: true,
                    minlength: [
                        4,
                        "Answer is too short"
                    ],
                    maxlength: [
                        1024,
                        "Answer is too long"
                    ]
                }
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 10
            ,
            "Too many FAQs"
        ]
    },
    gallery: {
        type: [
            String
        ],
        default: []
    },
    features: {
        type: [
            {
                type: String,
                trim: true,
                minlength: [
                    4,
                    "Feature length is too short"
                ],
                maxlength: [
                    16,
                    "Feature length is too long"
                ]
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 10
            ,
            "Too many features"
        ]
    },
    details: {
        type: [
            {
                title: {
                    type: String,
                    trim: true,
                    minlength: [
                        4,
                        "Details title is too short"
                    ],
                    maxlength: [
                        12,
                        "Details title is too long"
                    ]
                },
                content: {
                    type: String,
                    trim: true,
                    minlength: [
                        4,
                        "Details content is too short"
                    ],
                    maxlength: [
                        64,
                        "Details content is too long"
                    ]
                },
                _id: false
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 10
            ,
            "Too many details"
        ]
    },
    directoryImages: {
        type: [
            String
        ],
        set: function(directoryImages) {
            // @ts-ignore
            this._previousDirectoryImages = this.directoryImages;
            return directoryImages;
        },
        default: []
    },
    website: {
        type: String,
        lowercase: true,
        default: "",
        trim: true,
        match: [
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
            "Please provide a valid website", 
        ]
    },
    tagline: {
        type: String,
        trim: true,
        maxlength: [
            32,
            "Tagline is too long"
        ],
        default: ""
    },
    description: {
        type: String,
        maxlength: [
            4096,
            "Description is too long"
        ],
        default: ""
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    approvedAt: {
        type: Date
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
DirectorySchema.pre("save", async function(next) {
    // Handling username
    if (!this.username) this.username = this._id.toString();
    if (this.isModified("username")) {
        for(const lookup in lookups_namespaceObject){
            if (this.username.toLowerCase().indexOf(lookup) !== -1) {
                return next(new Error("Invalid username"));
            }
        }
    }
    // Deleting preious directory images
    if (this.isModified("directoryImages")) {
        // @ts-ignore
        const previous = this._previousDirectoryImages;
        // Checking for deleted images
        if (previous && previous.length > this.directoryImages.length) {
            const deletedImages = previous.filter((x)=>!this.directoryImages.includes(x)
            );
            for (const image of deletedImages){
                const previousPath = external_path_default().join(__dirname, "..", "client", "public", image);
                if (external_fs_default().existsSync(previousPath)) {
                    external_fs_default().unlink(previousPath, (err)=>err && console.error(err)
                    );
                }
            }
        }
    }
    // Set approval to false every time the document is updated
    if (!this.isModified("isApproved")) this.isApproved = false;
    next();
});
// Virtual field for reviews and ratings
DirectorySchema.virtual("reviews", {
    ref: "Review",
    localField: "_id",
    foreignField: "revieweeId"
});
DirectorySchema.virtual("rating").get(function() {
    // @ts-ignore
    this.populate("reviews");
    let rating = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };
    // @ts-ignore
    if (!this.reviews) return rating;
    // @ts-ignore
    this.reviews.forEach((review)=>rating[review.rating]++
    );
    return rating;
});
DirectorySchema.virtual("averageRating").get(function() {
    // @ts-ignore
    this.populate("reviews");
    // @ts-ignore
    if (!this.reviews || this.reviews.length === 0) return 0;
    let total = 0;
    // @ts-ignore
    for(const num in this.rating)total += num * this.rating[num];
    // @ts-ignore
    return (total / this.reviews.length).toFixed(1);
});
/* harmony default export */ const Directory_model = ((external_mongoose_default()).models.Directory || external_mongoose_default().model("Directory", DirectorySchema));


/***/ }),

/***/ 4229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ 4834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const InquirySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    directory: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "Directory",
        required: true
    },
    name: {
        type: String,
        required: [
            true,
            "Please provide a name"
        ],
        minlength: [
            3,
            "Name is too short"
        ],
        maxlength: [
            64,
            "Name is too long"
        ]
    },
    number: {
        type: String,
        match: [
            /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/g,
            "Please provide a valid phone number", 
        ],
        required: [
            true,
            "Please provide a phone number"
        ]
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            "Please provide a valid email", 
        ]
    },
    message: {
        type: String,
        required: [
            true,
            "Please provide a message"
        ],
        trim: true,
        minlength: [
            4,
            "Message is too short"
        ],
        maxlength: [
            1024,
            "Message is too long"
        ]
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Inquiry) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Inquiry", InquirySchema));


/***/ }),

/***/ 7928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const NewsletterSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            "Please provide a valid email", 
        ],
        required: [
            true,
            "Please provide an email"
        ]
    },
    subscriptions: {
        type: [
            String
        ],
        default: []
    },
    isSubscribed: {
        type: Boolean,
        default: true
    },
    subscribedAt: {
        type: Date,
        default: new Date()
    },
    unsubscribedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Newsletter) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Newsletter", NewsletterSchema));


/***/ }),

/***/ 5227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const PetSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Pet) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Pet", PetSchema));


/***/ }),

/***/ 5412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);



const ProductSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: [
            true,
            "Please provie a product name"
        ],
        minlength: [
            5,
            "Product name is too short"
        ],
        maxlength: [
            128,
            "Product name is too long"
        ],
        trim: true
    },
    alias: {
        type: [
            String
        ]
    },
    seller: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "Directory",
        default: null
    },
    category: {
        type: String,
        ref: "Category",
        required: [
            true,
            "Please provide a product category"
        ]
    },
    brand: {
        type: String,
        ref: "Brand",
        default: ""
    },
    keywords: {
        type: [
            {
                type: String,
                minlength: [
                    3,
                    "Keyword is too short"
                ],
                maxlength: [
                    16,
                    "Keyword is too long"
                ]
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 32
            ,
            "Too many keywords"
        ]
    },
    petType: {
        type: [
            {
                type: String,
                ref: "Pet"
            }
        ],
        min: [
            1,
            "Please provide atleast one pet type for this product"
        ],
        required: [
            true,
            "Please provide a pet type for this product"
        ]
    },
    breedType: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        required: [
            true,
            "Please provide a product description"
        ],
        minlength: [
            8,
            "Description is too short"
        ],
        maxlength: [
            1024,
            "Description is too long"
        ]
    },
    weight: {
        type: Number,
        default: 0,
        min: [
            0,
            "Product should have a positive weight"
        ]
    },
    size: {
        length: {
            type: Number,
            default: 0,
            min: [
                0,
                "Product length cannot be less than 0 meter"
            ]
        },
        width: {
            type: Number,
            default: 0,
            min: [
                0,
                "Product width cannot be less than 0 meter"
            ]
        },
        height: {
            type: Number,
            default: 0,
            min: [
                0,
                "Product height cannot be less than 0 meter"
            ]
        },
        _id: false
    },
    countInStock: {
        type: Number,
        default: 0,
        min: [
            0,
            "There should be a positive amount of stock"
        ]
    },
    price: {
        type: Number,
        default: 0,
        min: [
            0,
            "Price can't be lower than 0"
        ]
    },
    isVeg: {
        type: Boolean,
        default: false
    },
    ageRange: {
        min: {
            type: Number,
            default: 0,
            min: [
                0,
                "Age must be a positive number"
            ]
        },
        max: {
            type: Number,
            default: 0,
            min: [
                0,
                "Age must be a positive number"
            ]
        },
        _id: false
    },
    productImages: {
        type: [
            String
        ],
        set: function(productImages) {
            // @ts-ignore
            this._previousProductImages = this.productImages;
            return productImages;
        }
    },
    link: {
        type: String,
        default: ""
    },
    affiliateLinks: {
        type: [
            {
                _id: false,
                productId: String,
                productLink: String,
                productProvider: String,
                productPrice: Number
            }, 
        ],
        default: []
    },
    edits: {
        type: [
            {
                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
                ref: "Edit"
            }, 
        ],
        default: [],
        select: false
    },
    lastEdit: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "Edit",
        default: null,
        select: false
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    approvedAt: {
        type: Date
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
ProductSchema.pre("save", async function(next) {
    // Deleting previous images if they are updated or removed
    if (this.isModified("productImages")) {
        // @ts-ignore
        const previous = this._previousProductImages;
        // Checking for deleted images
        if (previous && previous.length > this.productImages.length) {
            const deletedImages = previous.filter((x)=>!this.productImages.includes(x)
            );
            for (const image of deletedImages){
                const previousPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, "..", "client", "public", image);
                if (fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(previousPath)) {
                    fs__WEBPACK_IMPORTED_MODULE_2___default().unlink(previousPath, (err)=>err && console.error(err)
                    );
                }
            }
        }
    }
    // Set approval to false every time the document is updated
    if (!this.isModified("isApproved")) this.isApproved = false;
    next();
});
ProductSchema.pre("remove", async function(next) {
    // Deleting all images if the product is deleted
    for (const image of this.productImages){
        const imagePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, "..", "client", "public", image);
        if (fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(imagePath)) {
            fs__WEBPACK_IMPORTED_MODULE_2___default().unlink(imagePath, (err)=>err && console.error(err)
            );
        }
    }
    next();
});
// Virtual field for questions
ProductSchema.virtual("questions", {
    ref: "Question",
    localField: "_id",
    foreignField: "product"
});
// Virtual field for reviews and ratings
ProductSchema.virtual("reviews", {
    ref: "Review",
    localField: "_id",
    foreignField: "revieweeId"
});
ProductSchema.virtual("rating").get(function() {
    // @ts-ignore
    this.populate("reviews");
    let rating = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };
    // @ts-ignore
    if (!this.reviews) return rating;
    // @ts-ignore
    this.reviews.forEach((review)=>rating[review.rating]++
    );
    return rating;
});
ProductSchema.virtual("averageRating").get(function() {
    // @ts-ignore
    this.populate("reviews");
    // @ts-ignore
    if (!this.reviews || this.reviews.length === 0) return 0;
    let total = 0;
    // @ts-ignore
    for(const num in this.rating)total += num * this.rating[num];
    // @ts-ignore
    return (total / this.reviews.length).toFixed(1);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Product", ProductSchema));


/***/ }),

/***/ 2404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const QuestionSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    product: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "Product",
        required: true
    },
    askedBy: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "User",
        required: true
    },
    question: {
        type: String,
        required: [
            true,
            "Please provide a question"
        ],
        trim: true,
        minlength: [
            6,
            "Question is too short"
        ],
        maxlength: [
            64,
            "Question is too long"
        ]
    },
    answers: {
        type: [
            {
                _id: false,
                answer: {
                    type: String,
                    required: [
                        true,
                        "Please provide an answer"
                    ],
                    trim: true,
                    minlength: [
                        6,
                        "Answer is too short"
                    ],
                    maxlength: [
                        1024,
                        "Answer is too long"
                    ]
                },
                answeredBy: {
                    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
                    ref: "User",
                    required: true
                },
                answeredAt: {
                    type: Date,
                    default: Date.now()
                }
            }, 
        ],
        default: []
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Question) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Question", QuestionSchema));


/***/ }),

/***/ 8985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Review_model)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./types/review.ts
var RevieweeModel;
(function(RevieweeModel) {
    RevieweeModel["PRODUCT"] = "Product";
    RevieweeModel["DIRECTORY"] = "Directory";
    RevieweeModel["SERVICE"] = "Service";
})(RevieweeModel || (RevieweeModel = {}));

;// CONCATENATED MODULE: ./models/Review.model.ts


const ReviewSchema = new (external_mongoose_default()).Schema({
    reviewer: {
        type: (external_mongoose_default()).Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    revieweeModel: {
        type: String,
        enum: RevieweeModel,
        required: true
    },
    revieweeId: {
        type: (external_mongoose_default()).Schema.Types.ObjectId,
        required: true
    },
    subject: {
        type: String,
        required: [
            true,
            "Please provide a review subject"
        ],
        minlength: [
            6,
            "Subject is too short"
        ],
        maxlength: [
            32,
            "Subject is too long"
        ]
    },
    comment: {
        type: String,
        required: [
            true,
            "Please provide a review comment"
        ],
        minlength: [
            6,
            "Comment is too short"
        ],
        maxlength: [
            1024,
            "Comment is too long"
        ]
    },
    rating: {
        type: Number,
        required: [
            true,
            "Rating is required"
        ],
        min: [
            0,
            "Rating should be between 0 and 5"
        ],
        max: [
            5,
            "Rating should be between 0 and 5"
        ]
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
ReviewSchema.virtual("reviewee", {
    ref: (doc)=>doc.revieweeModel
    ,
    localField: "revieweeId",
    foreignField: "_id",
    justOne: true
});
/* harmony default export */ const Review_model = ((external_mongoose_default()).models.Review || external_mongoose_default().model("Review", ReviewSchema));


/***/ }),

/***/ 6690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);



const ServiceSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        minlength: [
            4,
            "Service name is too short"
        ],
        maxlength: [
            32,
            "Service name is too long"
        ],
        required: [
            true,
            "Please provie a service name"
        ],
        trim: true
    },
    alias: {
        type: [
            String
        ]
    },
    seller: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "Directory",
        default: null
    },
    address: {
        type: String,
        minlength: [
            8,
            "Address is too short"
        ],
        maxlength: [
            128,
            "Address is too long"
        ]
    },
    nameOfIncharge: {
        type: String,
        minlength: [
            3,
            "Incharge name is too short"
        ],
        maxlength: [
            32,
            "Incharge name is too long"
        ]
    },
    numberOfIncharge: {
        type: String,
        match: [
            /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/g,
            "Please provide a valid phone number", 
        ]
    },
    timings: {
        from: {
            type: String,
            default: "00:00"
        },
        to: {
            type: String,
            default: "00:00"
        },
        _id: false
    },
    // Days will be evaluated using bitwise &
    // mon = 1, tue=2, wed=4, thu=8, fri=16, sat=32, sun=64
    days: {
        type: Number,
        default: 127
    },
    category: {
        type: String,
        ref: "Category",
        required: [
            true,
            "Please provide a service category"
        ]
    },
    petType: {
        type: [
            {
                type: String,
                ref: "Pet"
            }
        ],
        min: [
            1,
            "Please provide atleast one pet type for this service"
        ],
        required: [
            true,
            "Please provide a pet type for this serviec"
        ]
    },
    breedType: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        required: [
            true,
            "Please provide a service description"
        ],
        minlength: [
            8,
            "Description is too short"
        ],
        maxlength: [
            1024,
            "Description is too long"
        ]
    },
    price: {
        type: Number,
        min: [
            1,
            "Price can't be lower than 1"
        ],
        required: [
            true,
            "Please provide a price"
        ]
    },
    ageRange: {
        min: {
            type: Number,
            default: 0,
            min: [
                0,
                "Age must be a positive number"
            ]
        },
        max: {
            type: Number,
            default: 0,
            min: [
                0,
                "Age must be a positive number"
            ]
        },
        _id: false
    },
    serviceImages: {
        type: [
            String
        ],
        set: function(serviceImages) {
            // @ts-ignore
            this._previousServiceImages = this.serviceImages;
            return serviceImages;
        }
    },
    link: {
        type: String,
        default: ""
    },
    rating: {
        type: Number,
        select: false
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    approvedAt: {
        type: Date
    },
    numOfReviews: {
        type: Number,
        default: 0,
        select: false
    },
    reviews: {
        type: [
            Object
        ]
    }
}, {
    timestamps: true
});
ServiceSchema.pre("save", async function(next) {
    // Deleting previous images if they are updated or removed
    if (this.isModified("serviceImages")) {
        const previous = this._previousServiceImages;
        // Checking for deleted images
        if (previous && previous.length > this.serviceImages.length) {
            const deletedImages = previous.filter((x)=>!this.serviceImages.includes(x)
            );
            for (const image of deletedImages){
                const previousPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, "..", "client", "public", image);
                if (fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(previousPath)) {
                    fs__WEBPACK_IMPORTED_MODULE_2___default().unlink(previousPath, (err)=>err && console.error(err)
                    );
                }
            }
        }
    }
    // Set approval to false every time the document is updated
    if (!this.isModified("isApproved")) this.isApproved = false;
    next();
});
ServiceSchema.pre("remove", async function(next) {
    // Deleting all images if the service is deleted
    for (const image of this.serviceImages){
        const imagePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, "..", "client", "public", image);
        if (fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(imagePath)) {
            fs__WEBPACK_IMPORTED_MODULE_2___default().unlink(imagePath, (err)=>err && console.error(err)
            );
        }
    }
    next();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Service) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Service", ServiceSchema));


/***/ }),

/***/ 7718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ User_model)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6113);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./types/user.ts
var Role;
(function(Role) {
    Role["ADMIN"] = "Admin";
    Role["CUSTOMER"] = "Customer";
    Role["CLIENT"] = "Client";
    Role["PRODUCT_ADMIN"] = "Product Admin";
})(Role || (Role = {}));

;// CONCATENATED MODULE: ./models/User.model.ts







const UserSchema = new (external_mongoose_default()).Schema({
    name: {
        type: String,
        required: [
            true,
            "Please provide your name"
        ],
        maxlength: [
            32,
            "Name is too long"
        ],
        minlength: [
            3,
            "Name is too short"
        ]
    },
    email: {
        type: String,
        required: [
            true,
            "Please provide an email"
        ],
        lowercase: true,
        trim: true,
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            "Please provide a valid email", 
        ]
    },
    number: {
        type: String,
        match: [
            /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/g,
            "Please provide a valid phone number", 
        ]
    },
    password: {
        type: String,
        required: [
            true,
            "Please provide a password"
        ],
        minlength: [
            8,
            "Password must have atleast eight or more characters"
        ],
        select: false
    },
    profileImage: {
        type: String,
        set: function(profileImage) {
            // @ts-ignore
            this._previousProfileImage = this.profileImage;
            return profileImage;
        }
    },
    role: {
        type: String,
        default: Role.CUSTOMER,
        enum: Role
    },
    directory: {
        type: (external_mongoose_default()).SchemaTypes.ObjectId,
        ref: "Directory",
        default: null
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    },
    verifiedAt: {
        type: Date
    }
}, {
    timestamps: true
});
UserSchema.pre("save", async function(next) {
    // Delete the previous image if it's modified
    if (this.isModified("profileImage")) {
        const previous = this._previousProfileImage;
        if (previous) {
            const previousPath = external_path_default().join("public", previous);
            if (external_fs_default().existsSync(previousPath)) {
                external_fs_default().unlink(previousPath, (err)=>err && console.error(err)
                );
            }
        }
    }
    // Encrypting the password everytime before saving
    // Don't encrypt password again if it's not modified
    if (!this.isModified("password")) {
        next();
        return;
    }
    const salt = await external_bcryptjs_default().genSalt(10);
    this.password = await external_bcryptjs_default().hash(this.password, salt);
    next();
});
// Generating an account verification token
UserSchema.methods.getVerificationToken = function() {
    const verificationToken = external_crypto_default().randomBytes(20).toString("hex");
    this.verificationToken = external_crypto_default().createHash("sha256").update(verificationToken).digest("hex");
    return verificationToken;
};
// Matching passwords entered by the user with the correct password
UserSchema.methods.matchPasswords = async function(password) {
    return await external_bcryptjs_default().compare(password, this.password);
};
// Generating a signed JWT token to give authorization
UserSchema.methods.generateAccessToken = function() {
    return external_jsonwebtoken_default().sign({
        id: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: "2d"
    });
};
UserSchema.methods.generateRefreshToken = function() {
    return external_jsonwebtoken_default().sign({
        id: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
};
// Generating a password reset token
UserSchema.methods.getResetToken = function() {
    const resetToken = external_crypto_default().randomBytes(20).toString("hex");
    this.resetPasswordToken = external_crypto_default().createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    return resetToken;
};
/* harmony default export */ const User_model = ((external_mongoose_default()).models.User || external_mongoose_default().model("User", UserSchema));


/***/ }),

/***/ 4035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ connect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);


const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
let cached = global.mongoose;
if (!cached) cached = global.mongoose = {
    conn: null,
    promise: null
};
async function connect() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {
            bufferCommands: false
        }).then((mongoose1)=>{
            console.log("Connected to MongoDB");
            return mongoose1;
        });
    }
    fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readdir("models").then((models)=>models.forEach((model)=>__webpack_require__(6291)(`./${model}`)
        )
    );
    cached.conn = await cached.promise;
    return cached.conn;
};


/***/ }),

/***/ 8738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function errorHandler(err, res) {
    let error = {
        ...err
    };
    error.message = err.message;
    // Mongoose duplicate unique email/username error
    if (err.code == 11000) {
        return res.status(400).json({
            success: false,
            message: "Duplicate field value"
        });
    }
    // Mongoose validation error for min, max, required fields
    if (err.name == "ValidationError") {
        const message = Object.values(err.errors).map((val)=>val.message
        )[0];
        return res.status(400).json({
            success: false,
            message
        });
    }
    // Fallback to generic error
    return res.status(error.statusCode || 500).json({
        success: false,
        error: (error === null || error === void 0 ? void 0 : error.message) || "Server Error"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorHandler);


/***/ })

};
;