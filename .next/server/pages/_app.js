/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/fetchJson.ts":
/*!**************************!*\
  !*** ./lib/fetchJson.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ fetchJson; }\n/* harmony export */ });\nasync function fetchJson(...args) {\n  try {\n    const response = await fetch(...args); // if the server replies, there's always some data in json\n    // if there's a network error, it will throw at the previous line\n\n    const data = await response.json();\n\n    if (response.ok) {\n      return data;\n    }\n\n    const error = new Error(response.statusText);\n    error.response = response;\n    error.data = data;\n    throw error;\n  } catch (error) {\n    if (!error.data) {\n      error.data = {\n        message: error.message\n      };\n    }\n\n    throw error;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWlyb24tc2Vzc2lvbi10eXBlc2NyaXB0LWV4YW1wbGUvLi9saWIvZmV0Y2hKc29uLnRzPzZhZjUiXSwibmFtZXMiOlsiZmV0Y2hKc29uIiwiYXJncyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9rIiwiZXJyb3IiLCJFcnJvciIsInN0YXR1c1RleHQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsU0FBZixDQUF5QixHQUFHQyxJQUE1QixFQUFrQztBQUMvQyxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxHQUFHRixJQUFKLENBQTVCLENBREUsQ0FHRjtBQUNBOztBQUNBLFVBQU1HLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7O0FBRUEsUUFBSUgsUUFBUSxDQUFDSSxFQUFiLEVBQWlCO0FBQ2YsYUFBT0YsSUFBUDtBQUNEOztBQUVELFVBQU1HLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVVOLFFBQVEsQ0FBQ08sVUFBbkIsQ0FBZDtBQUNBRixTQUFLLENBQUNMLFFBQU4sR0FBaUJBLFFBQWpCO0FBQ0FLLFNBQUssQ0FBQ0gsSUFBTixHQUFhQSxJQUFiO0FBQ0EsVUFBTUcsS0FBTjtBQUNELEdBZkQsQ0FlRSxPQUFPQSxLQUFQLEVBQWM7QUFDZCxRQUFJLENBQUNBLEtBQUssQ0FBQ0gsSUFBWCxFQUFpQjtBQUNmRyxXQUFLLENBQUNILElBQU4sR0FBYTtBQUFFTSxlQUFPLEVBQUVILEtBQUssQ0FBQ0c7QUFBakIsT0FBYjtBQUNEOztBQUNELFVBQU1ILEtBQU47QUFDRDtBQUNGIiwiZmlsZSI6Ii4vbGliL2ZldGNoSnNvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoSnNvbiguLi5hcmdzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCguLi5hcmdzKTtcblxuICAgIC8vIGlmIHRoZSBzZXJ2ZXIgcmVwbGllcywgdGhlcmUncyBhbHdheXMgc29tZSBkYXRhIGluIGpzb25cbiAgICAvLyBpZiB0aGVyZSdzIGEgbmV0d29yayBlcnJvciwgaXQgd2lsbCB0aHJvdyBhdCB0aGUgcHJldmlvdXMgbGluZVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgZXJyb3IuZGF0YSA9IGRhdGE7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKCFlcnJvci5kYXRhKSB7XG4gICAgICBlcnJvci5kYXRhID0geyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/fetchJson.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_fetchJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fetchJson */ \"./lib/fetchJson.ts\");\n\nvar _jsxFileName = \"/Users/adrianaito/Documents/Training/next-iron-session/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {\n    value: {\n      fetcher: _lib_fetchJson__WEBPACK_IMPORTED_MODULE_2__.default,\n      onError: err => {\n        console.error(err);\n      }\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWlyb24tc2Vzc2lvbi10eXBlc2NyaXB0LWV4YW1wbGUvLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZmV0Y2hlciIsImZldGNoIiwib25FcnJvciIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UsOERBQUMsMENBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFQyxtREFESjtBQUVMQyxhQUFPLEVBQUdDLEdBQUQsSUFBUztBQUNoQkMsZUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDRDtBQUpJLEtBRFQ7QUFBQSwyQkFRRSw4REFBQyxTQUFELG9CQUFlSixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7QUFFRCwrREFBZUYsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1dSQ29uZmlnIH0gZnJvbSBcInN3clwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCIuLi9saWIvZmV0Y2hKc29uXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxTV1JDb25maWdcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGZldGNoZXI6IGZldGNoLFxuICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TV1JDb25maWc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();