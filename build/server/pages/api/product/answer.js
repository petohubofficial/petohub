"use strict";
(() => {
var exports = {};
exports.id = 404;
exports.ids = [404];
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

/***/ 242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var models_Product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5916);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4035);
/* harmony import */ var middlewares_withProtect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9598);
/* harmony import */ var models_Question_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3119);
/* harmony import */ var utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8738);





const handler = async (req, res)=>{
    if (req.method !== "POST" && req.method !== "DELETE") return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
    // Checking if id is passed
    if (!req.query.id) return res.status(400).json({
        success: false,
        error: "Provide a product id"
    });
    if (!req.query.qid) return res.status(400).json({
        success: false,
        error: "Provide a question id"
    });
    // Checking the body
    if (req.method === "POST" && !req.body.answer) return res.status(400).json({
        success: false,
        error: "Provide all required fields"
    });
    await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    try {
        // Checking if the product exists
        const product = await models_Product_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.query.id).where("isApproved").equals(true);
        if (!product) return res.status(404).json({
            success: false,
            error: "Product not found"
        });
        // Checking if the question exists
        const question = await models_Question_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(req.query.qid);
        if (!question) return res.status(404).json({
            success: false,
            error: "Question not found"
        });
        const answeredBy = req.user._id;
        // Post an answer
        if (req.method === "POST") {
            // Checking if the user is the asker
            if (question.askedBy.toString() === req.user._id.toString()) return res.status(400).json({
                success: false,
                error: "You cannot answer your own questions"
            });
            // Checking if the user already posted an answer on product
            for (const answer of question.answers)if (answer.answeredBy.toString() === answeredBy.toString()) return res.status(400).json({
                success: false,
                error: "You have already answered the question"
            });
            // Adding the answer and sending back the question
            question.answers.push({
                answer: req.body.answer,
                answeredBy
            });
            await question.populate("askedBy");
            await question.populate("answers.answeredBy").execPopulate();
            await question.save();
            return res.status(200).json({
                success: true,
                question
            });
        } else if (req.method === "DELETE") {
            // Checking if the user already posted an answer on product
            const index = question.answers.findIndex((answer)=>answer.answeredBy.toString() === answeredBy.toString()
            );
            if (index === -1) return res.status(400).json({
                success: false,
                error: "You have not answered the question"
            });
            // Removing the answer and returning it
            question.answers.slice(index, 1);
            await question.save();
            return res.status(200).json({
                success: true,
                question
            });
        }
    } catch (error) {
        (0,utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(error, res);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_withProtect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8459,881,9598,5916,3119], () => (__webpack_exec__(242)));
module.exports = __webpack_exports__;

})();