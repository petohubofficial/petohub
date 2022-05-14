"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
// EXTERNAL MODULE: ./contexts/settings.tsx
var settings = __webpack_require__(1593);
// EXTERNAL MODULE: ./contexts/auth.tsx + 1 modules
var auth = __webpack_require__(2754);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
// EXTERNAL MODULE: ./services/api.service.ts
var api_service = __webpack_require__(9850);
;// CONCATENATED MODULE: ./store/index.ts



const rootReducer = (0,toolkit_namespaceObject.combineReducers)({
    [api_service/* api.reducerPath */.h.reducerPath]: api_service/* api.reducer */.h.reducer
});
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: rootReducer,
    devTools: "production" !== "production",
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(api_service/* api.middleware */.h.middleware)
});
const useSelector = (/* unused pure expression or super */ null && (useReduxSelector));
const useDispatch = ()=>useReduxDispatch()
;

;// CONCATENATED MODULE: ./theme/base.ts
const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920
        }
    },
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    textTransform: "none"
                },
                sizeSmall: {
                    padding: "6px 16px"
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: "16px 24px"
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "32px 24px",
                    "&:last-child": {
                        paddingBottom: "32px"
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2"
                }
            },
            styleOverrides: {
                root: {
                    padding: "32px 24px"
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                color: "primary"
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box"
                },
                html: {
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                body: {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                "#__next": {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%"
                },
                "#nprogress": {
                    pointerEvents: "none"
                },
                "#nprogress .bar": {
                    backgroundColor: "#B94F94",
                    height: 3,
                    left: 0,
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 2000
                },
                ".simplebar-scrollbar.simplebar-visible:before": {
                    opacity: 1
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    fontSize: "14px"
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    display: "flex",
                    alignItems: "center"
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8
                },
                sizeSmall: {
                    padding: 4
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 3,
                    overflow: "hidden"
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    marginRight: "16px",
                    "&.MuiListItemIcon-root": {
                        minWidth: "unset"
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    fontWeight: 500
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        },
        MuiPopover: {
            defaultProps: {
                elevation: 16
            }
        },
        MuiRadio: {
            defaultProps: {
                color: "primary"
            },
            styleOverrides: {
                root: {
                    paddingTop: "4px",
                    paddingBottom: "4px"
                }
            }
        },
        MuiSwitch: {
            defaultProps: {
                color: "primary"
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.71,
                    minWidth: "auto",
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: "none",
                    "& + &": {
                        marginLeft: 24
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: "15px 16px"
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: "none",
                    "& .MuiTableCell-root": {
                        borderBottom: "none",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: "uppercase"
                    },
                    "& .MuiTableCell-paddingCheckbox": {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        },
        MuiTooltip: {
            defaultProps: {
                placement: "top"
            }
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "link"
                    },
                    style: {
                        textDecoration: "underline",
                        cursor: "pointer"
                    }
                }, 
            ]
        }
    },
    direction: "ltr",
    shape: {
        borderRadius: 8
    },
    typography: {
        button: {
            fontWeight: 600
        },
        fontFamily: 'Open Sans, "Segoe UI", Helvetica, Arial, sans-serif',
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.57
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.75
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.57
        },
        overline: {
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            lineHeight: 2.5,
            textTransform: "uppercase"
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 400,
            lineHeight: 1.66
        },
        h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.375
        },
        h2: {
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1.375
        },
        h3: {
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: 1.375
        },
        h4: {
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.375
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.375
        },
        h6: {
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: 1.375
        }
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100
    }
};

;// CONCATENATED MODULE: ./theme/dark.ts
const neutral = {
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827"
};
const background = {
    default: "#0B0F19",
    paper: neutral[900]
};
const divider = "#2D3748";
const primary = {
    main: "#B94F94",
    light: "#D95DAE",
    dark: "#BF5299",
    contrastText: neutral[100]
};
const secondary = {
    main: "#10B981",
    light: "#3FC79A",
    dark: "#0B815A",
    contrastText: neutral[900]
};
const success = {
    main: "#14B8A6",
    light: "#43C6B7",
    dark: "#0E8074",
    contrastText: neutral[900]
};
const info = {
    main: "#2196F3",
    light: "#64B6F7",
    dark: "#0B79D0",
    contrastText: neutral[900]
};
const warning = {
    main: "#FFB020",
    light: "#FFBF4C",
    dark: "#B27B16",
    contrastText: neutral[900]
};
const error = {
    main: "#D14343",
    light: "#DA6868",
    dark: "#922E2E",
    contrastText: neutral[900]
};
const dark_text = {
    primary: "#EDF2F7",
    secondary: "#A0AEC0",
    disabled: "rgba(255, 255, 255, 0.48)"
};
const darkTheme = {
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: neutral[500],
                    color: "#FFFFFF"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    "&.MuiChip-filledDefault": {
                        backgroundColor: neutral[800],
                        "& .MuiChip-deleteIcon": {
                            color: neutral[500]
                        }
                    },
                    "&.MuiChip-outlinedDefault": {
                        borderColor: neutral[700],
                        "& .MuiChip-deleteIcon": {
                            color: neutral[700]
                        }
                    }
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                ".simplebar-scrollbar:before": {
                    background: "#B94F94"
                },
                "*::-webkit-scrollbar": {
                    background: "transparent",
                    width: "7px"
                },
                "*::-webkit-scrollbar-thumb": {
                    background: "#B94F94",
                    borderRadius: "2px",
                    width: "7px"
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: dark_text.secondary
                    },
                    // Customizing the chrome autofill input colors
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: `0 0 0 100px ${background.default} inset !important`,
                        WebkitTextFillColor: `${dark_text.primary} !important`
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: divider
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderColor: divider,
                    borderStyle: "solid",
                    borderWidth: 1
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderColor: divider,
                    borderStyle: "solid",
                    borderWidth: 1
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: neutral[700]
                },
                track: {
                    backgroundColor: neutral[500],
                    opacity: 1
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${divider}`
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: neutral[800],
                    ".MuiTableCell-root": {
                        color: neutral[300]
                    }
                }
            }
        }
    },
    palette: {
        action: {
            active: neutral[400],
            hover: "rgba(255, 255, 255, 0.04)",
            selected: "rgba(255, 255, 255, 0.08)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabled: "rgba(255, 255, 255, 0.26)"
        },
        background,
        divider,
        error,
        info,
        mode: "dark",
        neutral,
        primary,
        secondary,
        success,
        text: dark_text,
        warning
    },
    shadows: [
        "none",
        "0px 1px 2px rgba(0, 0, 0, 0.24)",
        "0px 1px 2px rgba(0, 0, 0, 0.24)",
        "0px 1px 4px rgba(0, 0, 0, 0.24)",
        "0px 1px 5px rgba(0, 0, 0, 0.24)",
        "0px 1px 6px rgba(0, 0, 0, 0.24)",
        "0px 2px 6px rgba(0, 0, 0, 0.24)",
        "0px 3px 6px rgba(0, 0, 0, 0.24)",
        "0px 4px 6px rgba(0, 0, 0, 0.24)",
        "0px 5px 12px rgba(0, 0, 0, 0.24)",
        "0px 5px 14px rgba(0, 0, 0, 0.24)",
        "0px 5px 15px rgba(0, 0, 0, 0.24)",
        "0px 6px 15px rgba(0, 0, 0, 0.24)",
        "0px 7px 15px rgba(0, 0, 0, 0.24)",
        "0px 8px 15px rgba(0, 0, 0, 0.24)",
        "0px 9px 15px rgba(0, 0, 0, 0.24)",
        "0px 10px 15px rgba(0, 0, 0, 0.24)",
        "0px 12px 22px -8px rgba(0, 0, 0, 0.24)",
        "0px 13px 22px -8px rgba(0, 0, 0, 0.24)",
        "0px 14px 24px -8px rgba(0, 0, 0, 0.24)",
        "0px 20px 25px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)",
        "0px 25px 50px rgba(0, 0, 0, 0.24)", 
    ]
};

;// CONCATENATED MODULE: ./theme/light.ts
const light_neutral = {
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827"
};
const light_background = {
    default: "#F9FAFC",
    paper: "#FFFFFF"
};
const light_divider = "#E6E8F0";
const light_primary = {
    main: "#B94F94",
    light: "#D95DAE",
    dark: "#BF5299",
    contrastText: "#FFFFFF"
};
const light_secondary = {
    main: "#10B981",
    light: "#3FC79A",
    dark: "#0B815A",
    contrastText: "#FFFFFF"
};
const light_success = {
    main: "#14B8A6",
    light: "#43C6B7",
    dark: "#0E8074",
    contrastText: "#FFFFFF"
};
const light_info = {
    main: "#2196F3",
    light: "#64B6F7",
    dark: "#0B79D0",
    contrastText: "#FFFFFF"
};
const light_warning = {
    main: "#FFB020",
    light: "#FFBF4C",
    dark: "#B27B16",
    contrastText: "#FFFFFF"
};
const light_error = {
    main: "#D14343",
    light: "#DA6868",
    dark: "#922E2E",
    contrastText: "#FFFFFF"
};
const light_text = {
    primary: "#121828",
    secondary: "#65748B",
    disabled: "rgba(55, 65, 81, 0.48)"
};
const lightTheme = {
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: light_neutral[500],
                    color: "#FFFFFF"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    "&.MuiChip-filledDefault": {
                        backgroundColor: light_neutral[200],
                        "& .MuiChip-deleteIcon": {
                            color: light_neutral[400]
                        }
                    },
                    "&.MuiChip-outlinedDefault": {
                        "& .MuiChip-deleteIcon": {
                            color: light_neutral[300]
                        }
                    }
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                ".simplebar-scrollbar:before": {
                    background: "#B94F94"
                },
                "*::-webkit-scrollbar": {
                    background: "transparent",
                    width: "7px"
                },
                "*::-webkit-scrollbar-thumb": {
                    background: "#B94F94",
                    borderRadius: "2px",
                    width: "7px"
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: light_text.secondary
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: light_divider
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderColor: light_divider,
                    borderStyle: "solid",
                    borderWidth: 1
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderColor: light_divider,
                    borderStyle: "solid",
                    borderWidth: 1
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: light_neutral[500]
                },
                track: {
                    backgroundColor: light_neutral[400],
                    opacity: 1
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${light_divider}`
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: light_neutral[100],
                    ".MuiTableCell-root": {
                        color: light_neutral[700]
                    }
                }
            }
        }
    },
    palette: {
        action: {
            active: light_neutral[500],
            focus: "rgba(55, 65, 81, 0.12)",
            hover: "rgba(55, 65, 81, 0.04)",
            selected: "rgba(55, 65, 81, 0.08)",
            disabledBackground: "rgba(55, 65, 81, 0.12)",
            disabled: "rgba(55, 65, 81, 0.26)"
        },
        background: light_background,
        divider: light_divider,
        error: light_error,
        info: light_info,
        mode: "light",
        neutral: light_neutral,
        primary: light_primary,
        secondary: light_secondary,
        success: light_success,
        text: light_text,
        warning: light_warning
    },
    shadows: [
        "none",
        "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
        "0px 1px 2px rgba(100, 116, 139, 0.12)",
        "0px 1px 4px rgba(100, 116, 139, 0.12)",
        "0px 1px 5px rgba(100, 116, 139, 0.12)",
        "0px 1px 6px rgba(100, 116, 139, 0.12)",
        "0px 2px 6px rgba(100, 116, 139, 0.12)",
        "0px 3px 6px rgba(100, 116, 139, 0.12)",
        "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
        "0px 5px 12px rgba(100, 116, 139, 0.12)",
        "0px 5px 14px rgba(100, 116, 139, 0.12)",
        "0px 5px 15px rgba(100, 116, 139, 0.12)",
        "0px 6px 15px rgba(100, 116, 139, 0.12)",
        "0px 7px 15px rgba(100, 116, 139, 0.12)",
        "0px 8px 15px rgba(100, 116, 139, 0.12)",
        "0px 9px 15px rgba(100, 116, 139, 0.12)",
        "0px 10px 15px rgba(100, 116, 139, 0.12)",
        "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
        "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
        "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
        "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)",
        "0px 25px 50px rgba(100, 116, 139, 0.25)", 
    ]
};

;// CONCATENATED MODULE: ./theme/index.ts




const createTheme = (config)=>{
    let theme = (0,material_.createTheme)(baseTheme, config.theme === "dark" ? darkTheme : lightTheme);
    if (config.responsiveFontSizes) theme = (0,material_.responsiveFontSizes)(theme);
    return theme;
};

// EXTERNAL MODULE: ./utils/createEmotionCache.ts + 1 modules
var createEmotionCache = __webpack_require__(5742);
// EXTERNAL MODULE: ./components/Logo.tsx
var Logo = __webpack_require__(5120);
;// CONCATENATED MODULE: ./components/SplashScreen.tsx



const SplashScreen = ()=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            alignItems: "center",
            backgroundColor: "neutral.900",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "center",
            left: 0,
            p: 3,
            position: "fixed",
            top: 0,
            width: "100vw",
            zIndex: 2000
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* Logo */.T, {
            isDark: true
        })
    })
;

;// CONCATENATED MODULE: ./pages/_app.tsx


















router_default().events.on("routeChangeStart", (external_nprogress_default()).start);
router_default().events.on("routeChangeError", (external_nprogress_default()).done);
router_default().events.on("routeChangeComplete", (external_nprogress_default()).done);
const clientSideEmotionCache = (0,createEmotionCache/* createEmotionCache */.S)();
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    var _getLayout;
    const getLayout = (_getLayout = Component.getLayout) !== null && _getLayout !== void 0 ? _getLayout : (page)=>page
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Petohub"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
                store: store,
                children: /*#__PURE__*/ jsx_runtime_.jsx(auth/* AuthProvider */.Ho, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(settings/* SettingsProvider */.mu, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(settings/* SettingsConsumer */.ix, {
                            children: ({ settings  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
                                    theme: createTheme({
                                        ...settings
                                    }),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_hot_toast_.Toaster, {
                                            position: "top-center"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(auth/* AuthConsumer */.he, {
                                            children: (auth)=>!auth.isInitialized ? /*#__PURE__*/ jsx_runtime_.jsx(SplashScreen, {}) : getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                                    ...pageProps
                                                }))
                                        })
                                    ]
                                })
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const _app = (App);


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

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 4335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

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
var __webpack_exports__ = __webpack_require__.X(0, [2754,1316], () => (__webpack_exec__(6488)));
module.exports = __webpack_exports__;

})();