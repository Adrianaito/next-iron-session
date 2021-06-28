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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "./lib/session.ts":
/*!************************!*\
  !*** ./lib/session.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);\n// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions\n // optionally add stronger typing for next-specific implementation\n\nconst withSession = handler => (0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {\n  password: process.env.SECRET_COOKIE_PASSWORD,\n  cookieName: \"next-iron-session/examples/next.js\",\n  cookieOptions: {\n    // the next line allows to use the session in non-https environments like\n    // Next.js dev mode (http://localhost:3000)\n    secure: false\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withSession);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWlyb24tc2Vzc2lvbi10eXBlc2NyaXB0LWV4YW1wbGUvLi9saWIvc2Vzc2lvbi50cz9mODk0Il0sIm5hbWVzIjpbIndpdGhTZXNzaW9uIiwiaGFuZGxlciIsIndpdGhJcm9uU2Vzc2lvbiIsInBhc3N3b3JkIiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9DT09LSUVfUEFTU1dPUkQiLCJjb29raWVOYW1lIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Q0FJQTs7QUFPQSxNQUFNQSxXQUFXLEdBQUlDLE9BQUQsSUFDbEJDLGtFQUFlLENBQUNELE9BQUQsRUFBVTtBQUN2QkUsVUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsc0JBREM7QUFFdkJDLFlBQVUsRUFBRSxvQ0FGVztBQUd2QkMsZUFBYSxFQUFFO0FBQ2I7QUFDQTtBQUNBQyxVQUFNO0FBSE87QUFIUSxDQUFWLENBRGpCOztBQVdBLCtEQUFlVCxXQUFmIiwiZmlsZSI6Ii4vbGliL3Nlc3Npb24udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGZpbGUgaXMgYSB3cmFwcGVyIHdpdGggZGVmYXVsdHMgdG8gYmUgdXNlZCBpbiBib3RoIEFQSSByb3V0ZXMgYW5kIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIGZ1bmN0aW9uc1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBTZXNzaW9uLCB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcblxuLy8gb3B0aW9uYWxseSBhZGQgc3Ryb25nZXIgdHlwaW5nIGZvciBuZXh0LXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5leHBvcnQgdHlwZSBOZXh0SXJvblJlcXVlc3QgPSBOZXh0QXBpUmVxdWVzdCAmIHsgc2Vzc2lvbjogU2Vzc2lvbiB9O1xuZXhwb3J0IHR5cGUgTmV4dElyb25IYW5kbGVyID0gKFxuICByZXE6IE5leHRJcm9uUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+O1xuXG5jb25zdCB3aXRoU2Vzc2lvbiA9IChoYW5kbGVyOiBOZXh0SXJvbkhhbmRsZXIpID0+XG4gIHdpdGhJcm9uU2Vzc2lvbihoYW5kbGVyLCB7XG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlNFQ1JFVF9DT09LSUVfUEFTU1dPUkQsXG4gICAgY29va2llTmFtZTogXCJuZXh0LWlyb24tc2Vzc2lvbi9leGFtcGxlcy9uZXh0LmpzXCIsXG4gICAgY29va2llT3B0aW9uczoge1xuICAgICAgLy8gdGhlIG5leHQgbGluZSBhbGxvd3MgdG8gdXNlIHRoZSBzZXNzaW9uIGluIG5vbi1odHRwcyBlbnZpcm9ubWVudHMgbGlrZVxuICAgICAgLy8gTmV4dC5qcyBkZXYgbW9kZSAoaHR0cDovL2xvY2FsaG9zdDozMDAwKVxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgfSxcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZXNzaW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/session.ts\n");

/***/ }),

/***/ "./pages/api/user.ts":
/*!***************************!*\
  !*** ./pages/api/user.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/session */ \"./lib/session.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_lib_session__WEBPACK_IMPORTED_MODULE_0__.default)(async (req, res) => {\n  const user = req.session.get(\"user\");\n\n  if (user) {\n    // in a real world application you might read the user id from the session and then do a database request\n    // to get more information on the user if needed\n    res.json(_objectSpread({\n      isLoggedIn: true\n    }, user));\n  } else {\n    res.json({\n      isLoggedIn: false\n    });\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWlyb24tc2Vzc2lvbi10eXBlc2NyaXB0LWV4YW1wbGUvLi9wYWdlcy9hcGkvdXNlci50cz9iZmIwIl0sIm5hbWVzIjpbIndpdGhTZXNzaW9uIiwicmVxIiwicmVzIiwidXNlciIsInNlc3Npb24iLCJnZXQiLCJqc29uIiwiaXNMb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFlQSxxREFBVyxDQUFDLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUM3QyxRQUFNQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxHQUFaLENBQWdCLE1BQWhCLENBQWI7O0FBRUEsTUFBSUYsSUFBSixFQUFVO0FBQ1I7QUFDQTtBQUNBRCxPQUFHLENBQUNJLElBQUo7QUFDRUMsZ0JBQVUsRUFBRTtBQURkLE9BRUtKLElBRkw7QUFJRCxHQVBELE1BT087QUFDTEQsT0FBRyxDQUFDSSxJQUFKLENBQVM7QUFDUEMsZ0JBQVUsRUFBRTtBQURMLEtBQVQ7QUFHRDtBQUNGLENBZnlCLENBQTFCIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFNlc3Npb24gZnJvbSBcIi4uLy4uL2xpYi9zZXNzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZXNzaW9uKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB1c2VyID0gcmVxLnNlc3Npb24uZ2V0KFwidXNlclwiKTtcblxuICBpZiAodXNlcikge1xuICAgIC8vIGluIGEgcmVhbCB3b3JsZCBhcHBsaWNhdGlvbiB5b3UgbWlnaHQgcmVhZCB0aGUgdXNlciBpZCBmcm9tIHRoZSBzZXNzaW9uIGFuZCB0aGVuIGRvIGEgZGF0YWJhc2UgcmVxdWVzdFxuICAgIC8vIHRvIGdldCBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZSB1c2VyIGlmIG5lZWRlZFxuICAgIHJlcy5qc29uKHtcbiAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAuLi51c2VyLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5qc29uKHtcbiAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgIH0pO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user.ts\n");

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-iron-session");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/user.ts"));
module.exports = __webpack_exports__;

})();