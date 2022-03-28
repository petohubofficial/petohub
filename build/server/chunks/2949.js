"use strict";
exports.id = 2949;
exports.ids = [2949];
exports.modules = {

/***/ 2949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/Logo.tsx
var Logo = __webpack_require__(5120);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(7915);
;// CONCATENATED MODULE: ./components/Footer.tsx





const sections = [
    {
        title: "Reach out",
        links: [
            {
                title: "Mukhram Garden, Tilak Nagar",
                href: "/contact",
                target: null,
                icon: null
            },
            {
                title: "petohubofficial@gmail.com",
                href: "mailto:petohubofficial@gmail.com",
                target: null,
                icon: null
            },
            {
                title: "+91 7011923045",
                href: "tel:7011923045",
                target: null,
                icon: null
            }, 
        ]
    },
    {
        title: "Quick Links",
        links: [
            {
                title: "About Us",
                href: "#",
                target: null,
                icon: null
            },
            {
                title: "Services",
                href: "#",
                target: null,
                icon: null
            },
            {
                title: "Shop",
                href: "#",
                target: null,
                icon: null
            },
            {
                title: "Contact",
                href: "#",
                target: null,
                icon: null
            }, 
        ]
    },
    {
        title: "Information",
        links: [
            {
                title: "Privacy Policy",
                href: "#",
                target: null,
                icon: null
            },
            {
                title: "Terms of Use",
                href: "#",
                target: null,
                icon: null
            },
            {
                title: "Disclaimer",
                href: "#",
                target: null,
                icon: null
            },
            {
                title: "FAQ",
                href: "#",
                target: null,
                icon: null
            }, 
        ]
    },
    {
        title: "Catch us on social media",
        links: [
            {
                title: "Facebook",
                href: "https://www.facebook.com/",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Facebook, {
                    sx: {
                        mr: 1
                    }
                }),
                target: "_blank"
            },
            {
                title: "Instagram",
                href: "https://www.instagram.com/",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Instagram, {
                    sx: {
                        mr: 1
                    }
                }),
                target: "_blank"
            },
            {
                title: "Pinterest",
                href: "https://www.pinterest.com/",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Pinterest, {
                    sx: {
                        mr: 1
                    }
                }),
                target: "_blank"
            },
            {
                title: "LinkedIn",
                href: "https://www.linkedin.com/",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.LinkedIn, {
                    sx: {
                        mr: 1
                    }
                }),
                target: "_blank"
            }, 
        ]
    }, 
];
const Footer = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            backgroundColor: "background.default",
            borderTopColor: "divider",
            borderTopStyle: "solid",
            borderTopWidth: 1,
            pb: 2,
            pt: {
                md: 3,
                xs: 2
            }
        },
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
            maxWidth: "lg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    container: true,
                    spacing: 3,
                    children: sections.map((section, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            md: 3,
                            sm: 6,
                            xs: 12,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    color: "textSecondary",
                                    variant: "overline",
                                    children: section.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                                    disablePadding: true,
                                    children: section.links.map(({ title , href , target , icon  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                                            disableGutters: true,
                                            sx: {
                                                pb: 0,
                                                pt: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemAvatar, {
                                                    sx: {
                                                        alignItems: "center",
                                                        display: "flex",
                                                        minWidth: 0,
                                                        mr: 0.5
                                                    }
                                                }),
                                                icon !== null && icon !== void 0 ? icon : icon,
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                                    primary: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                                        href: href,
                                                        target: target || "",
                                                        color: "textPrimary",
                                                        variant: "subtitle2",
                                                        children: title
                                                    })
                                                })
                                            ]
                                        }, title)
                                    )
                                })
                            ]
                        }, index)
                    )
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                    sx: {
                        borderColor: (theme)=>(0,styles_.alpha)(theme.palette.primary.contrastText, 0.12)
                        ,
                        my: 2
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo/* Logo */.T, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                            color: "textSecondary",
                            variant: "caption",
                            children: [
                                "\xa9 ",
                                new Date().getFullYear(),
                                " Petohub."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            color: "textSecondary",
                            variant: "caption",
                            children: "All Rights Reserved."
                        })
                    ]
                })
            ]
        })
    })
;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/icons-material/PersonOutlineOutlined"
var PersonOutlineOutlined_ = __webpack_require__(9667);
var PersonOutlineOutlined_default = /*#__PURE__*/__webpack_require__.n(PersonOutlineOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/ShoppingCartOutlined"
var ShoppingCartOutlined_ = __webpack_require__(2749);
var ShoppingCartOutlined_default = /*#__PURE__*/__webpack_require__.n(ShoppingCartOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/DarkMode"
var DarkMode_ = __webpack_require__(5262);
var DarkMode_default = /*#__PURE__*/__webpack_require__.n(DarkMode_);
// EXTERNAL MODULE: external "@mui/icons-material/LightMode"
var LightMode_ = __webpack_require__(3684);
var LightMode_default = /*#__PURE__*/__webpack_require__.n(LightMode_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: ./hooks/settings.ts
var hooks_settings = __webpack_require__(6428);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./services/api.service.ts
var api_service = __webpack_require__(9850);
// EXTERNAL MODULE: ./hooks/auth.ts
var auth = __webpack_require__(9187);
;// CONCATENATED MODULE: ./components/Header.tsx















const HeaderBar = ()=>{
    const { 0: scrolled , 1: setScrolled  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        // find if scroll position is at top of page
        window.addEventListener("scroll", ()=>{
            const isTop = window.scrollY < 10;
            if (isTop) setScrolled(false);
            else setScrolled(true);
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        display: {
            sm: scrolled ? "none" : "flex",
            xs: scrolled ? "none" : "block"
        },
        maxHeight: {
            sm: 50,
            xs: "100%"
        },
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        color: "neutral.100",
        sx: {
            py: 2,
            backgroundColor: "neutral.800"
        },
        position: "sticky",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    px: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                    component: "span",
                    fontSize: 14,
                    fontWeight: "bold",
                    children: [
                        "Ph:",
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            component: "a",
                            href: "tel:7011923045",
                            fontWeight: "bold",
                            fontSize: 14,
                            color: "primary.main",
                            sx: {
                                ml: 1
                            },
                            children: "+91 7011923045"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    px: 1,
                    mt: {
                        sm: 0,
                        xs: 0.8
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                    component: "span",
                    fontSize: 14,
                    fontWeight: "bold",
                    children: [
                        "Email:",
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            component: "a",
                            href: "mailto:info@petohub.com",
                            fontWeight: "bold",
                            fontSize: 14,
                            color: "primary.main",
                            sx: {
                                ml: 1
                            },
                            children: "info@petohub.com"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    px: 1
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        component: "span",
                        fontSize: 14,
                        fontWeight: "bold",
                        children: "Follow Us:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            pt: 1,
                            ml: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.instagram.com",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Instagram, {
                                    fontSize: "medium",
                                    color: "primary"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.facebook.com",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Facebook, {
                                    fontSize: "medium",
                                    color: "primary"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.pinterest.com",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Pinterest, {
                                    fontSize: "medium",
                                    color: "primary"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.linkedin.com",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.LinkedIn, {
                                    fontSize: "medium",
                                    color: "primary"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
const HeaderNav = ()=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
        maxWidth: "lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            display: "flex",
            gap: {
                xs: 0,
                sm: 6
            },
            alignItems: "center",
            justifyContent: {
                xs: "space-around",
                sm: "center"
            },
            sx: {
                mt: 1,
                "& a": {
                    "&:hover": {
                        color: "primary.main"
                    },
                    py: 1,
                    borderBottom: 1,
                    borderColor: "primary.main",
                    borderWidth: 0
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        color: "textSecondary",
                        sx: {
                            borderWidth: router.pathname === "/" ? "2px !important" : 0
                        },
                        underline: "none",
                        variant: "subtitle2",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/shop",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        color: "textSecondary",
                        sx: {
                            borderWidth: router.pathname === "/shop" ? "2px !important" : 0
                        },
                        underline: "none",
                        variant: "subtitle2",
                        children: "Shop"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/about",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        color: "textSecondary",
                        sx: {
                            borderWidth: router.pathname === "/about" ? "2px !important" : 0
                        },
                        underline: "none",
                        variant: "subtitle2",
                        children: "About"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/contact",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        color: "textSecondary",
                        sx: {
                            borderWidth: router.pathname === "/contact" ? "2px !important" : 0
                        },
                        underline: "none",
                        variant: "subtitle2",
                        children: "Contact"
                    })
                })
            ]
        })
    }));
};
const Header = (props)=>{
    var ref;
    const { settings , saveSettings  } = (0,hooks_settings/* useSettings */.r)();
    const { isAuthenticated , logout  } = (0,auth/* useAuth */.a)();
    const { data  } = (0,api_service/* useGetCategoriesQuery */.NL)();
    const router = (0,router_.useRouter)();
    // Profile Menu
    const { 0: anchorElProfile , 1: setAnchorElProfile  } = (0,external_react_.useState)(null);
    const openProfile = Boolean(anchorElProfile);
    const handleProfileMenuOpen = (event)=>{
        setAnchorElProfile(event.currentTarget);
    };
    const handleProfileMenuClose = ()=>{
        setAnchorElProfile(null);
    };
    // Categories Select Menu
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const { 0: category1 , 1: setCategory  } = (0,external_react_.useState)("All categories");
    const open = Boolean(anchorEl);
    // Setting anchor to categories select button
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    // Handling closing of categories select menu
    const handleClose = (event)=>{
        setAnchorEl(null);
        // Handling click outside of menu
        if (event.target.tagName === "LI") setCategory(event.target.innerText);
    };
    // Handle toggle theme
    const handleToggleTheme = ()=>{
        const newSettings = {
            ...settings,
            theme: settings.theme === "light" ? "dark" : "light"
        };
        saveSettings(newSettings);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.AppBar, {
        elevation: 0,
        sx: {
            backgroundColor: "background.paper",
            boxShadow: 5,
            color: "text.secondary"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                maxWidth: "lg",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                    disableGutters: true,
                    sx: {
                        minHeight: 64
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* Logo */.T, {
                                width: "60px"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                flexGrow: 1
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                            fullWidth: true,
                            sx: {
                                px: 4,
                                display: {
                                    xs: "none",
                                    sm: "block"
                                }
                            },
                            inputMode: "search",
                            size: "small",
                            InputProps: {
                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputAdornment, {
                                    position: "start",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Search, {})
                                }),
                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            m: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                id: "basic-button",
                                                "aria-controls": "basic-menu",
                                                "aria-haspopup": "true",
                                                "aria-expanded": open ? "true" : undefined,
                                                onClick: handleClick,
                                                endIcon: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {}),
                                                children: category1
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Menu, {
                                                id: "basic-menu",
                                                anchorEl: anchorEl,
                                                open: open,
                                                onClose: handleClose,
                                                MenuListProps: {
                                                    "aria-labelledby": "basic-button"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                        value: "All categories",
                                                        onClick: handleClose,
                                                        children: "All categories"
                                                    }),
                                                    data === null || data === void 0 ? void 0 : (ref = data.categories) === null || ref === void 0 ? void 0 : ref.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                            value: category.name,
                                                            onClick: handleClose,
                                                            children: category.name
                                                        }, category.id)
                                                    )
                                                ]
                                            })
                                        ]
                                    })
                                })
                            },
                            placeholder: "Search"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                            disableRipple: true,
                            sx: {
                                border: 1,
                                borderColor: "primary.main",
                                mx: 1
                            },
                            id: "profile-button",
                            "aria-controls": openProfile ? "profile-menu" : undefined,
                            "aria-haspopup": "true",
                            "aria-expanded": openProfile ? "true" : undefined,
                            onClick: (e)=>{
                                if (!isAuthenticated) router.push("/login");
                                else handleProfileMenuOpen(e);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((PersonOutlineOutlined_default()), {
                                color: "primary"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Menu, {
                            id: "profile-menu",
                            anchorEl: anchorElProfile,
                            open: openProfile,
                            onClose: handleProfileMenuClose,
                            MenuListProps: {
                                "aria-labelledby": "profile-button"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                    onClick: handleProfileMenuClose,
                                    children: "Profile"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                    onClick: handleProfileMenuClose,
                                    children: "My account"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                    onClick: ()=>{
                                        logout();
                                        handleProfileMenuClose();
                                    },
                                    children: "Logout"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                            disableRipple: true,
                            sx: {
                                border: 1,
                                borderColor: "primary.main",
                                mx: 1,
                                overflow: "visible"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Badge, {
                                badgeContent: 2,
                                color: "secondary",
                                sx: {
                                    "& .MuiBadge-badge": {
                                        top: -5,
                                        right: -5
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCartOutlined_default()), {
                                    color: "primary"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                            disableRipple: true,
                            sx: {
                                border: 1,
                                borderColor: "primary.main",
                                mx: 1
                            },
                            children: settings.theme === "light" ? /*#__PURE__*/ jsx_runtime_.jsx((DarkMode_default()), {
                                color: "primary",
                                onClick: handleToggleTheme
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((LightMode_default()), {
                                color: "primary",
                                onClick: handleToggleTheme
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderNav, {})
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Sidebar.tsx






const SidebarLink = (0,styles_.styled)(material_.Link)(({ theme  })=>({
        borderRadius: theme.shape.borderRadius,
        display: "block",
        padding: theme.spacing(1.5),
        "&:hover": {
            backgroundColor: theme.palette.action.hover
        }
    })
);
const Sidebar = (props)=>{
    const { onClose , open  } = props;
    const router = (0,router_.useRouter)();
    const lgUp = (0,material_.useMediaQuery)((theme)=>theme.breakpoints.up("lg")
    );
    const handlePathChange = ()=>{
        if (open) {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    };
    (0,external_react_.useEffect)(handlePathChange, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        router.asPath
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
        anchor: "right",
        onClose: onClose,
        open: !lgUp && open,
        PaperProps: {
            sx: {
                width: 256
            }
        },
        sx: {
            zIndex: (theme)=>theme.zIndex.appBar + 100
        },
        variant: "temporary",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                p: 2
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/dashboard",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarLink, {
                        color: "textSecondary",
                        underline: "none",
                        variant: "subtitle2",
                        children: "Live Demo"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/browse",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarLink, {
                        color: "textSecondary",
                        underline: "none",
                        variant: "subtitle2",
                        children: "Components"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/docs/welcome",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarLink, {
                        color: "textSecondary",
                        underline: "none",
                        variant: "subtitle2",
                        children: "Documentation"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                    component: "a",
                    fullWidth: true,
                    href: "https://material-ui.com/store/items/devias-kit-pro",
                    sx: {
                        mt: 1.5
                    },
                    target: "_blank",
                    variant: "contained",
                    children: "Buy Now"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/Layout.tsx






const LayoutRoot = (0,styles_.styled)("div")(({ theme  })=>({
        backgroundColor: theme.palette.background.default,
        height: "100%",
        paddingTop: 64
    })
);
const Layout = ({ children  })=>{
    const { 0: isSidebarOpen , 1: setIsSidebarOpen  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutRoot, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                onOpenSidebar: ()=>setIsSidebarOpen(true)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                onClose: ()=>setIsSidebarOpen(false)
                ,
                open: isSidebarOpen
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
};


/***/ }),

/***/ 9187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2754);


const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(contexts_auth__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .Vo)
;


/***/ })

};
;