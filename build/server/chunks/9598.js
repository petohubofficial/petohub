"use strict";
exports.id = 9598;
exports.ids = [9598];
exports.modules = {

/***/ 9598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var models_User_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(881);
/* harmony import */ var utils_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4035);



const JWT_SECRET = process.env.JWT_SECRET;
const withProtect = (handler)=>async (req, res)=>{
        let token;
        if (req.headers.cookie) {
            const cookies = req.headers.cookie.split(";");
            const cookie = cookies.find((c)=>c.trim().startsWith("token=")
            );
            if (cookie) token = cookie.split("=")[1];
        }
        if (!token) return res.status(401).json({
            success: false,
            error: "Unauthorized"
        });
        try {
            await (0,utils_connectDb__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
            const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, JWT_SECRET);
            const user = await models_User_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(decoded.id);
            if (!user) return res.status(401).json({
                success: false,
                error: "Unauthorized"
            });
            req.user = user;
            return handler(req, res);
        } catch (err) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized"
            });
        }
    }
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withProtect);


/***/ })

};
;