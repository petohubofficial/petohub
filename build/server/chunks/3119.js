"use strict";
exports.id = 3119;
exports.ids = [3119];
exports.modules = {

/***/ 3119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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


/***/ })

};
;