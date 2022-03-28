"use strict";
exports.id = 2970;
exports.ids = [2970];
exports.modules = {

/***/ 2970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1738);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);

// Configuring disk storage engine
const storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({
    destination: (req, file, cb)=>cb(null, "public/uploads")
    ,
    filename: (req, file, cb)=>{
        // Renaming the file to avoid name collision
        const timestamp = new Date().getTime().toString();
        const filename = timestamp.concat(file.originalname);
        cb(null, filename);
    }
});
// Configuring the upload middleware function
const upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({
    storage,
    fileFilter: (req, file, cb)=>{
        // Allowing only image file types
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
    // Maximum allowed file size is 5 MB
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});
const withMulter = (handler)=>(req, res)=>{
        upload.any()(req, res, (error)=>{
            if (error) return res.status(400).json({
                success: false,
                error: error.message
            });
            return handler(req, res);
        });
    }
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withMulter);


/***/ })

};
;