(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);




const Brands = ()=>{
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        dotsClass: "slick-dots brand",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
                textAlign: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                    fontSize: "2xl",
                    fontWeight: "bold",
                    color: "brand.500",
                    lineHeight: "30px",
                    children: "Marcas que trabajan con nosotros"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                mt: "20px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...settings,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                            src: "/img/brands/baima.png",
                            alt: "Baima"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                            src: "/img/brands/gimetal.png",
                            alt: "Gimetal"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                            src: "/img/brands/mancini.png",
                            alt: "mancini"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                            src: "/img/brands/montecor.png",
                            alt: "montecor"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                            src: "/img/brands/monumental.png",
                            alt: "monumental"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                            src: "/img/brands/ombu.png",
                            alt: "ombu"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                            src: "/img/brands/richiger.png",
                            alt: "richiger"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brands);


/***/ }),

/***/ 4651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Counters)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: external "react-visibility-sensor"
const external_react_visibility_sensor_namespaceObject = require("react-visibility-sensor");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Counters/index.tsx





const Counters = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        style: {
            backgroundImage: `url('/img/background.png')`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        m: "50px 0",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
            p: "80px 0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                wrap: "wrap",
                justifyContent: "center",
                flexDirection: {
                    base: "column",
                    sm: "row"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        wrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: {
                            base: "column",
                            md: "row"
                        },
                        m: "0 20px",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "7xl",
                                fontWeight: "bold",
                                color: "brand.500",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                    end: 4,
                                    separator: ".",
                                    duration: 4,
                                    children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                                            onChange: start,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                ref: countUpRef
                                            })
                                        })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                ml: {
                                    base: "0px",
                                    md: "4"
                                },
                                lineHeight: "inherit",
                                fontSize: "2xl",
                                fontWeight: "bold",
                                color: "white",
                                children: "Generaciones"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        wrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        m: "0 20px",
                        flexDirection: {
                            base: "column",
                            md: "row"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "7xl",
                                fontWeight: "bold",
                                color: "brand.500",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                    prefix: "+",
                                    end: 100,
                                    separator: ".",
                                    duration: 4,
                                    children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                                            onChange: start,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                ref: countUpRef
                                            })
                                        })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                ml: {
                                    base: "0px",
                                    md: "4"
                                },
                                fontSize: "2xl",
                                fontWeight: "bold",
                                color: "white",
                                maxW: "140",
                                lineHeight: {
                                    base: "30px"
                                },
                                textAlign: {
                                    base: "center",
                                    md: "left"
                                },
                                children: "A\xf1os de trayectoria"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        wrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        m: "0 20px",
                        flexDirection: {
                            base: "column",
                            md: "row"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "7xl",
                                fontWeight: "bold",
                                color: "brand.500",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                    prefix: "+",
                                    end: 10000,
                                    separator: ".",
                                    duration: 4,
                                    children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                                            onChange: start,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                ref: countUpRef
                                            })
                                        })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                ml: {
                                    base: "0px",
                                    md: "4"
                                },
                                fontSize: "2xl",
                                fontWeight: "bold",
                                color: "white",
                                maxW: "150",
                                lineHeight: "30px",
                                textAlign: {
                                    base: "center",
                                    md: "left"
                                },
                                children: "Maquinarias vendidas"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Counters = (Counters);


/***/ }),

/***/ 3697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1730);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const FeaturedProduct = ({ products , messages  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        p: "70px 0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    direction: {
                        base: "column",
                        sm: "row"
                    },
                    minWidth: "max-content",
                    gap: "2",
                    mb: "60px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            fontSize: "5xl",
                            fontWeight: "bold",
                            color: "brand.500",
                            lineHeight: "50px",
                            mb: "10px",
                            maxW: "270",
                            children: "Productos destacados"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spacer, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Show, {
                            above: "md",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                size: "lg",
                                colorScheme: "brand",
                                borderRadius: "30px",
                                _hover: {
                                    bg: "white",
                                    color: "brand.500"
                                },
                                onClick: ()=>{
                                    router.push(`/catalogo`);
                                },
                                children: "Ver todos"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                    spacing: 4,
                    templateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    children: products && products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            product: product,
                            messages: messages
                        }, product._id))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Hide, {
                    above: "md",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        mt: "40px",
                        size: "lg",
                        width: "100%",
                        colorScheme: "brand",
                        borderRadius: "30px",
                        _hover: {
                            bg: "white",
                            color: "brand.500"
                        },
                        onClick: ()=>{
                            router.push(`/catalogo`);
                        },
                        children: "Ver todos"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedProduct);


/***/ }),

/***/ 8590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






const Hero = ({ messages  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slick-dots header"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        position: "relative",
        pb: {
            base: "0px",
            md: "80px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                bg: {
                    base: "transparent",
                    md: "brand.500"
                },
                position: "absolute",
                bottom: "0",
                height: {
                    base: "800px",
                    md: "400px"
                },
                width: "100%"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
                padding: {
                    base: "0px",
                    md: "auto"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                    ...settings,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            position: "relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                    src: "/img/slider-10.jpeg",
                                    alt: "imagen 1",
                                    height: {
                                        base: "452px",
                                        md: "auto"
                                    },
                                    objectFit: {
                                        base: "cover",
                                        md: "inherit"
                                    },
                                    objectPosition: {
                                        base: "right",
                                        md: "right"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    mt: {
                                        base: "40px",
                                        md: "0"
                                    },
                                    mb: {
                                        base: "40px",
                                        md: "0"
                                    },
                                    position: {
                                        base: "absolute"
                                    },
                                    top: {
                                        base: "0",
                                        md: "50%"
                                    },
                                    p: {
                                        base: "10px",
                                        md: "40px"
                                    },
                                    transform: {
                                        base: "inherit",
                                        md: "translateY(-50%)"
                                    },
                                    maxW: "600px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                                            fontSize: {
                                                base: "5xl",
                                                md: "6xl"
                                            },
                                            fontWeight: "bold",
                                            color: "white",
                                            lineHeight: {
                                                base: "50px",
                                                md: "70px"
                                            },
                                            mb: "10px",
                                            display: {
                                                base: "none",
                                                sm: "block"
                                            },
                                            children: "Compr\xe1 la mejor maquinar\xeda usada del mercado"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                                            fontSize: {
                                                base: "5xl",
                                                md: "6xl"
                                            },
                                            fontWeight: "bold",
                                            color: "white",
                                            lineHeight: {
                                                base: "50px",
                                                md: "70px"
                                            },
                                            mb: "10px",
                                            display: {
                                                base: "block",
                                                sm: "none"
                                            },
                                            children: "Compr\xe1 la mejor maquinar\xeda del mercado"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            fontSize: "2xl",
                                            color: "white",
                                            display: {
                                                base: "none",
                                                md: "block"
                                            },
                                            mb: "20px",
                                            children: "Mir\xe1 nuestro amplio cat\xe1logo y recib\xed asesoramiento personalizado ahora."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            size: "lg",
                                            bg: "white",
                                            mr: "10px",
                                            mb: "10px",
                                            mt: {
                                                base: "40px",
                                                sm: "20px"
                                            },
                                            borderRadius: "50px",
                                            _hover: {
                                                bg: "brand.500",
                                                color: "white"
                                            },
                                            width: {
                                                base: "100%",
                                                sm: "auto"
                                            },
                                            onClick: ()=>router.push(`/catalogo`),
                                            children: "Ver cat\xe1logo"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            size: "lg",
                                            width: {
                                                base: "100%",
                                                sm: "auto"
                                            },
                                            mt: {
                                                base: "10px",
                                                sm: "10px"
                                            },
                                            _hover: {
                                                background: "none"
                                            },
                                            rightIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiChevronRight, {}),
                                            variant: "ghost",
                                            color: "white",
                                            onClick: ()=>window.open(`https://wa.me/${messages.phone}?text=${messages.content}`, "_blank"),
                                            children: "Contactar Vendedor"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            position: "relative",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkOverlay, {
                                href: "/catalogo/used",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                        src: "/img/slider-2.jpg",
                                        alt: "usados"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        mt: {
                                            base: "40px",
                                            md: "0"
                                        },
                                        mb: {
                                            base: "40px",
                                            md: "0"
                                        },
                                        position: {
                                            base: "absolute"
                                        },
                                        top: {
                                            base: "0",
                                            md: "50%"
                                        },
                                        p: {
                                            base: "10px",
                                            md: "40px"
                                        },
                                        transform: {
                                            base: "inherit",
                                            md: "translateY(-50%)"
                                        },
                                        maxW: "600px",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                                            fontSize: {
                                                base: "5xl",
                                                md: "6xl"
                                            },
                                            fontWeight: "bold",
                                            color: "white",
                                            lineHeight: {
                                                base: "50px",
                                                md: "70px"
                                            },
                                            mb: "10px",
                                            display: {
                                                base: "none",
                                                sm: "block"
                                            },
                                            children: "Maquinarias usadas"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            position: "relative",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkOverlay, {
                                href: "/catalogo/new",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                        src: "/img/slider-3.jpg",
                                        alt: "nuevos"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        mt: {
                                            base: "40px",
                                            md: "0"
                                        },
                                        mb: {
                                            base: "40px",
                                            md: "0"
                                        },
                                        position: {
                                            base: "absolute"
                                        },
                                        top: {
                                            base: "0",
                                            md: "50%"
                                        },
                                        p: {
                                            base: "10px",
                                            md: "40px"
                                        },
                                        transform: {
                                            base: "inherit",
                                            md: "translateY(-50%)"
                                        },
                                        maxW: "600px",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                                            fontSize: {
                                                base: "5xl",
                                                md: "6xl"
                                            },
                                            fontWeight: "bold",
                                            color: "white",
                                            lineHeight: {
                                                base: "50px",
                                                md: "70px"
                                            },
                                            mb: "10px",
                                            display: {
                                                base: "none",
                                                sm: "block"
                                            },
                                            children: "Maquinarias nuevas"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 4941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Testimonials)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/im"
const im_namespaceObject = require("react-icons/im");
;// CONCATENATED MODULE: ./src/components/Testimonials/Testimonial.tsx




const Testimonial = (props)=>{
    const { image , name , role , children  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        as: "blockquote",
        direction: "row",
        spacing: {
            base: "0",
            md: "8"
        },
        flex: "1",
        ...props,
        padding: "20px",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Show, {
                above: "md",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Img, {
                    mt: "2",
                    flexShrink: 0,
                    src: image,
                    alt: name,
                    objectFit: "cover",
                    w: {
                        base: "20",
                        md: "32"
                    },
                    h: {
                        base: "20",
                        md: "32"
                    },
                    rounded: "full"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                w: "full",
                direction: "column",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        mb: "6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                as: im_namespaceObject.ImQuotesLeft,
                                color: (0,react_.useColorModeValue)("blue.600", "blue.400"),
                                fontSize: "xl"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                mt: "3",
                                fontSize: "xl",
                                fontWeight: "bold",
                                maxW: "38rem",
                                children: children
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Show, {
                                below: "md",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Img, {
                                    flexShrink: 0,
                                    src: image,
                                    alt: name,
                                    objectFit: "cover",
                                    w: {
                                        base: "12",
                                        md: "32"
                                    },
                                    h: {
                                        base: "12",
                                        md: "32"
                                    },
                                    rounded: "full"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        as: "cite",
                                        fontStyle: "normal",
                                        fontWeight: "extrabold",
                                        color: (0,react_.useColorModeValue)("blue.600", "blue.400"),
                                        children: name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontSize: "sm",
                                        color: (0,react_.useColorModeValue)("gray.600", "gray.400"),
                                        children: role
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/Testimonials/index.tsx





const Testimonials = ({ testimonials  })=>{
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        dotsClass: "slick-dots testimonials",
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                fontSize: "5xl",
                fontWeight: "bold",
                color: "brand.500",
                lineHeight: "50px",
                mb: "10px",
                children: "Testimonios"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                mt: "50px",
                mb: "50px",
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                    ...settings,
                    children: testimonials.length > 0 ? testimonials.map((testimonial)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Testimonial, {
                                name: testimonial.name,
                                role: testimonial.occupation,
                                image: testimonial?.image?.path,
                                children: testimonial.comment
                            })
                        }, testimonial._id)) : null
                })
            })
        ]
    });
};
/* harmony default export */ const components_Testimonials = (Testimonials);


/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6225);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(199);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8590);
/* harmony import */ var _components_FeaturedProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3697);
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4941);
/* harmony import */ var _components_FeaturedCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4769);
/* harmony import */ var _components_Brands__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(830);
/* harmony import */ var _components_Counters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4651);
/* harmony import */ var _components_Whatsapp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(641);
/* harmony import */ var _services_local__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3004);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9648);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5332);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(782);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_local__WEBPACK_IMPORTED_MODULE_11__, axios__WEBPACK_IMPORTED_MODULE_12__]);
([_services_local__WEBPACK_IMPORTED_MODULE_11__, axios__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const getServerSideProps = async ()=>{
    let products;
    let testimonials;
    let messages;
    try {
        const requests = [
            _services_local__WEBPACK_IMPORTED_MODULE_11__/* ["default"].get */ .Z.get("/products/featured"),
            _services_local__WEBPACK_IMPORTED_MODULE_11__/* ["default"].get */ .Z.get("/testimonials"),
            _services_local__WEBPACK_IMPORTED_MODULE_11__/* ["default"].get */ .Z.get("/messages")
        ];
        const responses = await axios__WEBPACK_IMPORTED_MODULE_12__["default"].all(requests);
        const dataArray = responses.map((response)=>response.data);
        products = dataArray.filter((data)=>Object.hasOwn(data, "products"));
        testimonials = dataArray.filter((data)=>Object.hasOwn(data, "testimonials"));
        messages = dataArray.find((data)=>Object.hasOwn(data, "messages"));
    } catch (err) {
        console.log(err);
        return {
            redirect: {
                destination: (0,_utils_index__WEBPACK_IMPORTED_MODULE_15__/* .getErrorUrl */ .an)(err)
            },
            props: {}
        };
    }
    return {
        props: {
            products: Array.isArray(products?.[0]?.products) ? products[0].products : [],
            testimonials: Array.isArray(testimonials?.[0]?.testimonials) ? testimonials[0].testimonials : [],
            messages: Array.isArray(messages?.messages) ? messages.messages : []
        }
    };
};
const Home = ({ products , testimonials , messages  })=>{
    products = Array.isArray(products) ? products : [];
    testimonials = Array.isArray(testimonials) ? testimonials : [];
    messages = Array.isArray(messages) ? messages : [];
    const [sliderMessages] = messages.filter((message)=>message.type === "slider");
    const [whatsappMessages] = messages.filter((message)=>message.type === "whatsapp-icon");
    const [productMessages] = messages.filter((message)=>message.type === "product");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Casa Viano"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Casa Viano"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        messages: sliderMessages
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FeaturedProduct__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        messages: productMessages,
                        products: products
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Counters__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Brands__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FeaturedCategory__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonials__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        testimonials: testimonials
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Whatsapp__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                messages: whatsappMessages
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 609:
/***/ ((module) => {

"use strict";
module.exports = require("react-countup");

/***/ }),

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [522,303,718], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();
