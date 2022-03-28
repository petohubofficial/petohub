"use strict";
exports.id = 3299;
exports.ids = [3299];
exports.modules = {

/***/ 3299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ User)
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

;// CONCATENATED MODULE: ./models/User.ts







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
        // @ts-ignore
        const previous = this._previousProfileImage;
        if (previous) {
            const previousPath = external_path_default().join(__dirname, "..", "client", "public", previous);
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
UserSchema.methods.getSignedToken = function() {
    return external_jsonwebtoken_default().sign({
        id: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};
// Generating a password reset token
UserSchema.methods.getResetToken = function() {
    const resetToken = external_crypto_default().randomBytes(20).toString("hex");
    this.resetPasswordToken = external_crypto_default().createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    return resetToken;
};
/* harmony default export */ const User = ((external_mongoose_default()).models.User || external_mongoose_default().model("User", UserSchema));


/***/ })

};
;