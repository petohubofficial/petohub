"use strict";
exports.id = 3118;
exports.ids = [3118];
exports.modules = {

/***/ 3118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9187);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);





const AuthGuard = (props)=>{
    const { children , roles  } = props;
    const auth = (0,hooks_auth__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: checked , 1: setChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!router.isReady) return;
        if (!auth.isAuthenticated) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().error("You must be logged in to access this page");
            router.push({
                pathname: "/login",
                query: {
                    redirect: router.pathname
                }
            });
        } else if (roles && auth.isAuthenticated) {
            const hasRole = roles.some((role)=>{
                var ref;
                return (auth === null || auth === void 0 ? void 0 : (ref = auth.user) === null || ref === void 0 ? void 0 : ref.role) === role;
            });
            if (!hasRole) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().error("You do not have the required permissions to access this page");
                router.push("/");
            } else setChecked(true);
        } else setChecked(true);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        router.isReady
    ]);
    if (!checked) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthGuard);


/***/ })

};
;