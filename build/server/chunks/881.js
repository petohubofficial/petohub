"use strict";
exports.id = 881;
exports.ids = [881];
exports.modules = {

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var types_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1957);







const UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
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
        default: types_user__WEBPACK_IMPORTED_MODULE_6__/* .Role.CUSTOMER */ .u.CUSTOMER,
        enum: types_user__WEBPACK_IMPORTED_MODULE_6__/* .Role */ .u
    },
    directory: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().SchemaTypes.ObjectId),
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
            const previousPath = path__WEBPACK_IMPORTED_MODULE_5___default().join("public", previous);
            if (fs__WEBPACK_IMPORTED_MODULE_4___default().existsSync(previousPath)) {
                fs__WEBPACK_IMPORTED_MODULE_4___default().unlink(previousPath, (err)=>err && console.error(err)
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
    const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().genSalt(10);
    this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, salt);
    next();
});
// Generating an account verification token
UserSchema.methods.getVerificationToken = function() {
    const verificationToken = crypto__WEBPACK_IMPORTED_MODULE_3___default().randomBytes(20).toString("hex");
    this.verificationToken = crypto__WEBPACK_IMPORTED_MODULE_3___default().createHash("sha256").update(verificationToken).digest("hex");
    return verificationToken;
};
// Matching passwords entered by the user with the correct password
UserSchema.methods.matchPasswords = async function(password) {
    return await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, this.password);
};
// Generating a signed JWT token to give authorization
UserSchema.methods.generateAuthToken = function() {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
        id: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};
// Generating a password reset token
UserSchema.methods.getResetToken = function() {
    const resetToken = crypto__WEBPACK_IMPORTED_MODULE_3___default().randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto__WEBPACK_IMPORTED_MODULE_3___default().createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    return resetToken;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", UserSchema));


/***/ }),

/***/ 1957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Role)
/* harmony export */ });
var Role;
(function(Role) {
    Role["ADMIN"] = "Admin";
    Role["CUSTOMER"] = "Customer";
    Role["CLIENT"] = "Client";
    Role["PRODUCT_ADMIN"] = "Product Admin";
})(Role || (Role = {}));


/***/ })

};
;