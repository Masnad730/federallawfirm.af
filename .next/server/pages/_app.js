(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__(3559);
// EXTERNAL MODULE: ./styles/base.css
var base = __webpack_require__(5597);
// EXTERNAL MODULE: ./styles/main.css
var main = __webpack_require__(3966);
// EXTERNAL MODULE: ./styles/components.css
var components = __webpack_require__(3310);
// EXTERNAL MODULE: ./styles/grid.css
var grid = __webpack_require__(7616);
// EXTERNAL MODULE: ./styles/nprogress.css
var nprogress = __webpack_require__(5527);
;// CONCATENATED MODULE: ./pages/_app.js











router_default().events.on("routeChangeStart", (url)=>{
    console.log(`Loading: ${url}`);
    external_nprogress_default().start();
});
router_default().events.on("routeChangeComplete", ()=>external_nprogress_default().done());
router_default().events.on("routeChangeError", ()=>external_nprogress_default().done());
function MyApp({ Component , pageProps  }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page)=>page);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "viewport-fit=cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_notistack_.SnackbarProvider, {
                maxSnack: 3,
                children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }), pageProps)
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3559:
/***/ (() => {



/***/ }),

/***/ 5597:
/***/ (() => {



/***/ }),

/***/ 3310:
/***/ (() => {



/***/ }),

/***/ 7616:
/***/ (() => {



/***/ }),

/***/ 3966:
/***/ (() => {



/***/ }),

/***/ 5527:
/***/ (() => {



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

/***/ 3142:
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6561));
module.exports = __webpack_exports__;

})();