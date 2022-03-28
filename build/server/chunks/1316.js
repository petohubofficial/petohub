"use strict";
exports.id = 1316;
exports.ids = [1316];
exports.modules = {

/***/ 5120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6428);


function Logo(props) {
    const { settings  } = (0,hooks_settings__WEBPACK_IMPORTED_MODULE_1__/* .useSettings */ .r)();
    const { color , isDark , ...other } = props;
    // Custom styles for dark theme
    const stroke = "#aaa";
    const strokeWidth = settings.theme === "dark" || isDark ? 24 : 0;
    const strokeOpacity = settings.theme === "dark" || isDark ? 0.48 : 0;
    const styles = {
        stroke,
        strokeWidth,
        strokeOpacity
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 512 512",
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                ...styles,
                points: "256 0.85 472.42 201.47 470.87 224.03 448.07 224.9 256 43.74 63.93 224.91 41.14 224.03 39.58 201.47 256 0.85"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                ...styles,
                d: "M244.33,511.15a7.14,7.14,0,0,0,7.12-8c-2.51-21.07-13.45-77.9-59.16-96.57-48.1-19.66-64-51.16-67.67-60.25a5.24,5.24,0,0,0-3.91-3.19c-2.38-.6-8.13,1.34-6.38,7,8.21,26.74.75,23.25-8.41,1.21-5.23-12.58-5.15-62.6-5.5-72.21a3.94,3.94,0,0,0-1.1-2.64c-5.8-6.11-23.12-23.33-32.1-30.6a2.82,2.82,0,0,0-4.6,2.19c-.09,23.27,1.73,100.4,1.73,100.4s-1.68,50.62,49.84,82.06c38.32,23.37,49.84,9.87,65.57,75a7.18,7.18,0,0,0,7,5.49Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                ...styles,
                d: "M267.67,511.15a7.14,7.14,0,0,1-7.12-8c2.51-21.07,13.45-77.9,59.16-96.57,48.1-19.66,64.05-51.16,67.67-60.25a5.24,5.24,0,0,1,3.91-3.19c2.38-.6,8.13,1.34,6.38,7-8.21,26.74-.75,23.25,8.41,1.21,5.23-12.58,5.15-62.6,5.5-72.21a3.94,3.94,0,0,1,1.1-2.64c5.8-6.11,23.12-23.33,32.1-30.6a2.82,2.82,0,0,1,4.6,2.19c.09,23.27-1.73,100.4-1.73,100.4s1.68,50.62-49.84,82.06c-38.32,23.37-49.84,9.87-65.57,75a7.18,7.18,0,0,1-7,5.49Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: color,
                d: "M255.74,378.62c36.15.18,57.87-25.34,69-43.76,8.47-14,7.76-31.27-.48-45.41,0,0-19-38.5-68.54-6.89-49.59-31.61-68.54,6.89-68.54,6.89-8.24,14.14-8.95,31.41-.48,45.41C197.87,353.28,219.59,378.8,255.74,378.62Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: color,
                d: "M229.64,232.13c11-11.84,33.26-44.47-6.57-80.38a12.58,12.58,0,0,0-10.26-2.36c-15.64,4.28-46,44,5.67,83.12C221.94,235.13,226.68,235.3,229.64,232.13Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: color,
                d: "M153.2,212.67c7.81-3.47,35.36,13.65,30.22,47.5a3.16,3.16,0,0,1-3.2,2.55c-8.84-.17-40.18-6-34.23-40.63C146.58,218.64,150,214.09,153.2,212.67Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: color,
                d: "M282.36,232.13c-11-11.84-33.26-44.47,6.57-80.38a12.58,12.58,0,0,1,10.26-2.36c15.64,4.28,46,44-5.67,83.12C290.06,235.13,285.32,235.3,282.36,232.13Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: color,
                d: "M358.8,212.67c-7.81-3.47-35.36,13.65-30.22,47.5a3.16,3.16,0,0,0,3.2,2.55c8.84-.17,40.18-6,34.23-40.63C365.42,218.64,362,214.09,358.8,212.67Z"
            })
        ]
    }));
}
Logo.defaultProps = {
    color: "#be629d"
};


/***/ }),

/***/ 1593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J6": () => (/* binding */ SettingsContext),
/* harmony export */   "mu": () => (/* binding */ SettingsProvider),
/* harmony export */   "ix": () => (/* binding */ SettingsConsumer)
/* harmony export */ });
/* unused harmony exports restoreSettings, storeSettings */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialSettings = {
    responsiveFontSizes: true,
    theme: "light"
};
const restoreSettings = ()=>{
    let settings = null;
    try {
        const storedData = globalThis.localStorage.getItem("settings");
        if (storedData) settings = JSON.parse(storedData);
        else settings = {
            responsiveFontSizes: true,
            theme: globalThis.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        };
    } catch (err) {
        console.error(err);
    }
    return settings;
};
const storeSettings = (settings)=>{
    globalThis.localStorage.setItem("settings", JSON.stringify(settings));
};
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    settings: initialSettings,
    saveSettings: ()=>{}
});
const SettingsProvider = (props)=>{
    const { children  } = props;
    const { 0: settings , 1: setSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSettings);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const restoredSettings = restoreSettings();
        if (restoredSettings) setSettings(restoredSettings);
    }, []);
    const saveSettings = (updatedSettings)=>{
        setSettings(updatedSettings);
        storeSettings(updatedSettings);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: {
            settings,
            saveSettings
        },
        children: children
    }));
};
const SettingsConsumer = SettingsContext.Consumer;


/***/ }),

/***/ 6428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1593);


const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(contexts_settings__WEBPACK_IMPORTED_MODULE_1__/* .SettingsContext */ .J6)
;


/***/ }),

/***/ 9850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hi": () => (/* binding */ api),
/* harmony export */   "NL": () => (/* binding */ useGetCategoriesQuery)
/* harmony export */ });
/* unused harmony exports useGetPetsQuery, useGetBrandsQuery */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "category",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "/api"
    }),
    endpoints: (builder)=>({
            getCategories: builder.query({
                query: ()=>"category"
            }),
            getPets: builder.query({
                query: ()=>"pet"
            }),
            getBrands: builder.query({
                query: ()=>"brand"
            })
        })
});
const { useGetCategoriesQuery , useGetPetsQuery , useGetBrandsQuery  } = api;


/***/ })

};
;