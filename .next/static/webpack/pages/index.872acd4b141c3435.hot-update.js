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

/***/ "./src/scripts/quickSort.js":
/*!**********************************!*\
  !*** ./src/scripts/quickSort.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   quickSort: function() { return /* binding */ quickSort; }\n/* harmony export */ });\n/* harmony import */ var E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\nfunction quickSort(arr, item) {\n  if (arr.length <= 1) {\n    return arr;\n  }\n\n  var pivot = arr[0];\n  var left = [];\n  var right = [];\n  var equals = [];\n\n  for (var i = 1; i < arr.length; i++) {\n    if (arr[i][item] > pivot[item]) {\n      left.push(arr[i]);\n    } else if (arr[i][item] < pivot[item]) {\n      right.push(arr[i]);\n    } else {\n      equals.push(arr[i]);\n    }\n  }\n\n  return [].concat((0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(quickSort(left, item)), [pivot], (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(quickSort(right, item)));\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9xdWlja1NvcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLElBQXhCLEVBQTZCO0VBQ2hDLElBQUdELEdBQUcsQ0FBQ0UsTUFBSixJQUFjLENBQWpCLEVBQW1CO0lBQ2YsT0FBT0YsR0FBUDtFQUNIOztFQUNELElBQU1HLEtBQUssR0FBR0gsR0FBRyxDQUFDLENBQUQsQ0FBakI7RUFDQSxJQUFNSSxJQUFJLEdBQUcsRUFBYjtFQUNBLElBQU1DLEtBQUssR0FBRyxFQUFkO0VBQ0EsSUFBTUMsTUFBTSxHQUFHLEVBQWY7O0VBRUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxHQUFHLENBQUNFLE1BQXhCLEVBQWdDSyxDQUFDLEVBQWpDLEVBQXFDO0lBQ2pDLElBQUlQLEdBQUcsQ0FBQ08sQ0FBRCxDQUFILENBQU9OLElBQVAsSUFBZUUsS0FBSyxDQUFDRixJQUFELENBQXhCLEVBQWdDO01BQzVCRyxJQUFJLENBQUNJLElBQUwsQ0FBVVIsR0FBRyxDQUFDTyxDQUFELENBQWI7SUFDSCxDQUZELE1BRU8sSUFBSVAsR0FBRyxDQUFDTyxDQUFELENBQUgsQ0FBT04sSUFBUCxJQUFlRSxLQUFLLENBQUNGLElBQUQsQ0FBeEIsRUFBZ0M7TUFDbkNJLEtBQUssQ0FBQ0csSUFBTixDQUFXUixHQUFHLENBQUNPLENBQUQsQ0FBZDtJQUNILENBRk0sTUFFQTtNQUNIRCxNQUFNLENBQUNFLElBQVAsQ0FBWVIsR0FBRyxDQUFDTyxDQUFELENBQWY7SUFDSDtFQUNKOztFQUNELCtNQUFXUixTQUFTLENBQUNLLElBQUQsRUFBT0gsSUFBUCxDQUFwQixJQUFrQ0UsS0FBbEMsaU1BQTRDSixTQUFTLENBQUNNLEtBQUQsRUFBUUosSUFBUixDQUFyRDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zY3JpcHRzL3F1aWNrU29ydC5qcz8yNWU1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBpdGVtKXtcclxuICAgIGlmKGFyci5sZW5ndGggPD0gMSl7XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBpdm90ID0gYXJyWzBdO1xyXG4gICAgY29uc3QgbGVmdCA9IFtdO1xyXG4gICAgY29uc3QgcmlnaHQgPSBbXTtcclxuICAgIGNvbnN0IGVxdWFscyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFycltpXVtpdGVtXSA+IHBpdm90W2l0ZW1dKSB7XHJcbiAgICAgICAgICAgIGxlZnQucHVzaChhcnJbaV0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJyW2ldW2l0ZW1dIDwgcGl2b3RbaXRlbV0pIHtcclxuICAgICAgICAgICAgcmlnaHQucHVzaChhcnJbaV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVxdWFscy5wdXNoKGFycltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFsuLi5xdWlja1NvcnQobGVmdCwgaXRlbSksIHBpdm90LCAuLi5xdWlja1NvcnQocmlnaHQsIGl0ZW0pXTtcclxufSJdLCJuYW1lcyI6WyJxdWlja1NvcnQiLCJhcnIiLCJpdGVtIiwibGVuZ3RoIiwicGl2b3QiLCJsZWZ0IiwicmlnaHQiLCJlcXVhbHMiLCJpIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/quickSort.js\n"));

/***/ })

});