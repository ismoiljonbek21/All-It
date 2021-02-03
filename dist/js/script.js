/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./less/style.less */ \"./src/less/style.less\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n// import $ from \"jquery\";\n\n\n\n\nconst importAll = require => require.keys().reduce((acc, next) => {\n  acc[next.replace(\"./\", \"\")] = require(next);\n  return acc;\n}, {});\n\nconst images = importAll(__webpack_require__(\"./src/assets/img sync \\\\.(png|jpe?g|svg|PNG)$\"));\nconst videos = importAll(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'undefined'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst audios = importAll(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'undefined'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst files = importAll(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'undefined'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nimages;\nvideos;\naudios;\nfiles;\nlet toggle = document.getElementById(\"toggle\");\nlet menu = document.getElementById(\"menu\");\nlet count = 0;\n\ntoggle.onclick = function () {\n  if (count % 2 == 0) {\n    menu.style.transform = \"scaleY(1)\";\n    count++;\n  } else if (count % 2 == 1) {\n    menu.style.transform = \"scaleY(0)\";\n    count++;\n  }\n};\n\nif (screen.width >= 1000) {\n  new Splide(\"#splide\", {\n    perPage: 4,\n    cover: true,\n    height: \"20rem\",\n    lazyLoad: \"nearby\",\n    breakpoints: {\n      height: \"8rem\"\n    }\n  }).mount();\n} else if (screen.width >= 650) {\n  new Splide(\"#splide\", {\n    perPage: 3,\n    cover: true,\n    height: \"20rem\",\n    lazyLoad: \"nearby\",\n    breakpoints: {\n      height: \"8rem\"\n    }\n  }).mount();\n} else if (screen.width >= 500) {\n  new Splide(\"#splide\", {\n    perPage: 2,\n    cover: true,\n    height: \"16rem\",\n    lazyLoad: \"nearby\",\n    breakpoints: {\n      height: \"8rem\"\n    }\n  }).mount();\n} else if (screen.width >= 400) {\n  new Splide(\"#splide\", {\n    perPage: 2,\n    cover: true,\n    height: \"13rem\",\n    lazyLoad: \"nearby\",\n    breakpoints: {\n      height: \"8rem\"\n    }\n  }).mount();\n} else if (screen.width >= 330) {\n  new Splide(\"#splide\", {\n    perPage: 2,\n    cover: true,\n    height: \"10rem\",\n    lazyLoad: \"nearby\",\n    breakpoints: {\n      height: \"8rem\"\n    }\n  }).mount();\n} else {\n  new Splide(\"#splide\", {\n    perPage: 1,\n    cover: true,\n    height: \"10rem\",\n    lazyLoad: \"nearby\",\n    breakpoints: {\n      height: \"8rem\"\n    }\n  }).mount();\n}\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/index.js?");

/***/ }),

/***/ "./src/assets/img/Framecss_3.png":
/*!***************************************!*\
  !*** ./src/assets/img/Framecss_3.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Framecss_3.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Framecss_3.png?");

/***/ }),

/***/ "./src/assets/img/Framehtml_5.png":
/*!****************************************!*\
  !*** ./src/assets/img/Framehtml_5.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Framehtml_5.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Framehtml_5.png?");

/***/ }),

/***/ "./src/assets/img/Framevue.png":
/*!*************************************!*\
  !*** ./src/assets/img/Framevue.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Framevue.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Framevue.png?");

/***/ }),

/***/ "./src/assets/img/Group 35team_2.png":
/*!*******************************************!*\
  !*** ./src/assets/img/Group 35team_2.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Group 35team_2.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Group_35team_2.png?");

/***/ }),

/***/ "./src/assets/img/Group 4.png":
/*!************************************!*\
  !*** ./src/assets/img/Group 4.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Group 4.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Group_4.png?");

/***/ }),

/***/ "./src/assets/img/Group 5.png":
/*!************************************!*\
  !*** ./src/assets/img/Group 5.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Group 5.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Group_5.png?");

/***/ }),

/***/ "./src/assets/img/Group 6.png":
/*!************************************!*\
  !*** ./src/assets/img/Group 6.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Group 6.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Group_6.png?");

/***/ }),

/***/ "./src/assets/img/Group 7.png":
/*!************************************!*\
  !*** ./src/assets/img/Group 7.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Group 7.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Group_7.png?");

/***/ }),

/***/ "./src/assets/img/Grouplogo.png":
/*!**************************************!*\
  !*** ./src/assets/img/Grouplogo.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Grouplogo.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Grouplogo.png?");

/***/ }),

/***/ "./src/assets/img/Mask Group.png":
/*!***************************************!*\
  !*** ./src/assets/img/Mask Group.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Mask Group.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Mask_Group.png?");

/***/ }),

/***/ "./src/assets/img/Mask Groupcircles.png":
/*!**********************************************!*\
  !*** ./src/assets/img/Mask Groupcircles.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Mask Groupcircles.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Mask_Groupcircles.png?");

/***/ }),

/***/ "./src/assets/img/Mask Groupteam_1.png":
/*!*********************************************!*\
  !*** ./src/assets/img/Mask Groupteam_1.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Mask Groupteam_1.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Mask_Groupteam_1.png?");

/***/ }),

/***/ "./src/assets/img/Mask Groupworks_1.png":
/*!**********************************************!*\
  !*** ./src/assets/img/Mask Groupworks_1.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Mask Groupworks_1.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Mask_Groupworks_1.png?");

/***/ }),

/***/ "./src/assets/img/Mask Groupworks_2.png":
/*!**********************************************!*\
  !*** ./src/assets/img/Mask Groupworks_2.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Mask Groupworks_2.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Mask_Groupworks_2.png?");

/***/ }),

/***/ "./src/assets/img/Mask Groupworks_3.png":
/*!**********************************************!*\
  !*** ./src/assets/img/Mask Groupworks_3.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Mask Groupworks_3.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Mask_Groupworks_3.png?");

/***/ }),

/***/ "./src/assets/img/Mask Groupworks_4.png":
/*!**********************************************!*\
  !*** ./src/assets/img/Mask Groupworks_4.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Mask Groupworks_4.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Mask_Groupworks_4.png?");

/***/ }),

/***/ "./src/assets/img/Vectorheaderbg.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/Vectorheaderbg.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/Vectorheaderbg.jpg\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/Vectorheaderbg.jpg?");

/***/ }),

/***/ "./src/assets/img/facebook.png":
/*!*************************************!*\
  !*** ./src/assets/img/facebook.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/facebook.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/facebook.png?");

/***/ }),

/***/ "./src/assets/img/instagram.png":
/*!**************************************!*\
  !*** ./src/assets/img/instagram.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/instagram.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/instagram.png?");

/***/ }),

/***/ "./src/assets/img/left.png":
/*!*********************************!*\
  !*** ./src/assets/img/left.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/left.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/left.png?");

/***/ }),

/***/ "./src/assets/img/right.png":
/*!**********************************!*\
  !*** ./src/assets/img/right.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/right.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/right.png?");

/***/ }),

/***/ "./src/assets/img/telegram.png":
/*!*************************************!*\
  !*** ./src/assets/img/telegram.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/telegram.png\");\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/telegram.png?");

/***/ }),

/***/ "./src/less/style.less":
/*!*****************************!*\
  !*** ./src/less/style.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/less/style.less?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/scss/style.scss?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/style/style.css?");

/***/ }),

/***/ "./src/assets/img sync \\.(png|jpe?g|svg|PNG)$":
/*!******************************************************************!*\
  !*** ./src/assets/img/ sync nonrecursive \.(png|jpe?g|svg|PNG)$ ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./Framecss_3.png\": \"./src/assets/img/Framecss_3.png\",\n\t\"./Framehtml_5.png\": \"./src/assets/img/Framehtml_5.png\",\n\t\"./Framevue.png\": \"./src/assets/img/Framevue.png\",\n\t\"./Group 35team_2.png\": \"./src/assets/img/Group 35team_2.png\",\n\t\"./Group 4.png\": \"./src/assets/img/Group 4.png\",\n\t\"./Group 5.png\": \"./src/assets/img/Group 5.png\",\n\t\"./Group 6.png\": \"./src/assets/img/Group 6.png\",\n\t\"./Group 7.png\": \"./src/assets/img/Group 7.png\",\n\t\"./Grouplogo.png\": \"./src/assets/img/Grouplogo.png\",\n\t\"./Mask Group.png\": \"./src/assets/img/Mask Group.png\",\n\t\"./Mask Groupcircles.png\": \"./src/assets/img/Mask Groupcircles.png\",\n\t\"./Mask Groupteam_1.png\": \"./src/assets/img/Mask Groupteam_1.png\",\n\t\"./Mask Groupworks_1.png\": \"./src/assets/img/Mask Groupworks_1.png\",\n\t\"./Mask Groupworks_2.png\": \"./src/assets/img/Mask Groupworks_2.png\",\n\t\"./Mask Groupworks_3.png\": \"./src/assets/img/Mask Groupworks_3.png\",\n\t\"./Mask Groupworks_4.png\": \"./src/assets/img/Mask Groupworks_4.png\",\n\t\"./Vectorheaderbg.jpg\": \"./src/assets/img/Vectorheaderbg.jpg\",\n\t\"./facebook.png\": \"./src/assets/img/facebook.png\",\n\t\"./instagram.png\": \"./src/assets/img/instagram.png\",\n\t\"./left.png\": \"./src/assets/img/left.png\",\n\t\"./right.png\": \"./src/assets/img/right.png\",\n\t\"./telegram.png\": \"./src/assets/img/telegram.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/img sync \\\\.(png|jpe?g|svg|PNG)$\";\n\n//# sourceURL=webpack://ismoil-turdaliyev/./src/assets/img/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;