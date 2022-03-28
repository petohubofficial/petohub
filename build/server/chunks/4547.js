"use strict";
exports.id = 4547;
exports.ids = [4547];
exports.modules = {

/***/ 4547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Review)
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

;// CONCATENATED MODULE: ./models/Review.ts


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
/* harmony default export */ const Review = ((external_mongoose_default()).models.Review || external_mongoose_default().model("Review", ReviewSchema));


/***/ })

};
;