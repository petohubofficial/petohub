"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 7745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@emotion/server/create-instance"
const create_instance_namespaceObject = require("@emotion/server/create-instance");
var create_instance_default = /*#__PURE__*/__webpack_require__.n(create_instance_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/createEmotionCache.ts + 1 modules
var createEmotionCache = __webpack_require__(5742);
;// CONCATENATED MODULE: ./pages/_document.tsx





class MyDocument extends next_document["default"] {
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300&display=swap",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "57x57",
                            href: "/apple-icon-57x57.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "60x60",
                            href: "/apple-icon-60x60.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "72x72",
                            href: "/apple-icon-72x72.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "76x76",
                            href: "/apple-icon-76x76.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "114x114",
                            href: "/apple-icon-114x114.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "120x120",
                            href: "/apple-icon-120x120.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "144x144",
                            href: "/apple-icon-144x144.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "152x152",
                            href: "/apple-icon-152x152.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/apple-icon-180x180.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "192x192",
                            href: "/android-icon-192x192.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon-32x32.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "96x96",
                            href: "/favicon-96x96.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon-16x16.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            charSet: "utf-8"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "theme-color",
                            content: "#b94f94"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "msapplication-TileColor",
                            content: "#b94f94"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "msapplication-TileImage",
                            content: "/ms-icon-144x144.png"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        }));
    }
}
MyDocument.getInitialProps = async (ctx)=>{
    const originalRenderPage = ctx.renderPage;
    const cache = (0,createEmotionCache/* createEmotionCache */.S)();
    const { extractCriticalToChunks  } = create_instance_default()(cache);
    ctx.renderPage = ()=>originalRenderPage({
            // @ts-ignore
            enhanceApp: (App)=>(props)=>/*#__PURE__*/ jsx_runtime_.jsx(App, {
                        emotionCache: cache,
                        ...props
                    })
        })
    ;
    const initialProps = await next_document["default"].getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ jsx_runtime_.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key)
    );
    return {
        ...initialProps,
        styles: [
            ...external_react_.Children.toArray(initialProps.styles),
            ...emotionStyleTags
        ]
    };
};
/* harmony default export */ const _document = (MyDocument);


/***/ }),

/***/ 5742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./utils/createEmotionCache.ts

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css"
    });
};


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,6859], () => (__webpack_exec__(7745)));
module.exports = __webpack_exports__;

})();