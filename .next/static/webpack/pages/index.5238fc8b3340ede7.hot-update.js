"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/scripts/searchScripts.js":
/*!**************************************!*\
  !*** ./src/scripts/searchScripts.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   runSearch: function() { return /* binding */ runSearch; },\n/* harmony export */   searchPlayers: function() { return /* binding */ searchPlayers; }\n/* harmony export */ });\nfunction runSearch(search) {\n  var parts = search.split(' ');\n  var prefix = parts[0];\n  var data = parts.slice(1).join(' ');\n  return [prefix, data];\n}\nfunction searchPlayers(table, data) {\n  var result = table.searchByName(data);\n  return {\n    name: 'Players',\n    list: result\n  };\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zZWFyY2hTY3JpcHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMEI7RUFDN0IsSUFBTUMsS0FBSyxHQUFHRCxNQUFNLENBQUNFLEtBQVAsQ0FBYSxHQUFiLENBQWQ7RUFDQSxJQUFNQyxNQUFNLEdBQUdGLEtBQUssQ0FBQyxDQUFELENBQXBCO0VBQ0EsSUFBTUcsSUFBSSxHQUFHSCxLQUFLLENBQUNJLEtBQU4sQ0FBWSxDQUFaLEVBQWVDLElBQWYsQ0FBb0IsR0FBcEIsQ0FBYjtFQUNBLE9BQU8sQ0FBQ0gsTUFBRCxFQUFTQyxJQUFULENBQVA7QUFDSDtBQUVNLFNBQVNHLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCSixJQUE5QixFQUFtQztFQUN0QyxJQUFNSyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsWUFBTixDQUFtQk4sSUFBbkIsQ0FBZjtFQUNBLE9BQU87SUFDSE8sSUFBSSxFQUFFLFNBREg7SUFFSEMsSUFBSSxFQUFFSDtFQUZILENBQVA7QUFJSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2NyaXB0cy9zZWFyY2hTY3JpcHRzLmpzPzVkYTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJ1blNlYXJjaChzZWFyY2gpe1xyXG4gICAgY29uc3QgcGFydHMgPSBzZWFyY2guc3BsaXQoJyAnKTtcclxuICAgIGNvbnN0IHByZWZpeCA9IHBhcnRzWzBdO1xyXG4gICAgY29uc3QgZGF0YSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJyAnKTtcclxuICAgIHJldHVybiBbcHJlZml4LCBkYXRhXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBsYXllcnModGFibGUsIGRhdGEpe1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGFibGUuc2VhcmNoQnlOYW1lKGRhdGEpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiAnUGxheWVycycsXHJcbiAgICAgICAgbGlzdDogcmVzdWx0XHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbInJ1blNlYXJjaCIsInNlYXJjaCIsInBhcnRzIiwic3BsaXQiLCJwcmVmaXgiLCJkYXRhIiwic2xpY2UiLCJqb2luIiwic2VhcmNoUGxheWVycyIsInRhYmxlIiwicmVzdWx0Iiwic2VhcmNoQnlOYW1lIiwibmFtZSIsImxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/searchScripts.js\n"));

/***/ })

});