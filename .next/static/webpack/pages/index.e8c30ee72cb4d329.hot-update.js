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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_LoadFiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/LoadFiles */ \"./src/components/LoadFiles.jsx\");\n/* harmony import */ var _src_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/SearchArea */ \"./src/components/SearchArea.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"E:\\\\demed\\\\Documents\\\\UFRGS\\\\S3\\\\Classifica\\xE7\\xE3o e Pesquisa de Dados\\\\fifa21\\\\pages\\\\index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      playerTable = _useState[0],\n      setPlayerTable = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      ratingTable = _useState2[0],\n      setRatingTable = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      searchPlayerTable = _useState3[0],\n      setSearchPlayerTable = _useState3[1];\n\n  console.log(searchPlayerTable);\n  console.log(ratingTable);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (playerTable && ratingTable) {\n      ra;\n    }\n  }, [playerTable, ratingTable]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_src_components_LoadFiles__WEBPACK_IMPORTED_MODULE_1__.LoadFiles, {\n      playerTable: playerTable,\n      setPlayerTable: setPlayerTable,\n      ratingTable: ratingTable,\n      setRatingTable: setRatingTable\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_src_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__.SearchArea, {\n      playerTable: playerTable\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"kbrS0SxiBLXMZpwFwkuGcVR9Suk=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTSSxJQUFULEdBQWU7RUFBQTs7RUFFMUIsZ0JBQXNDSCwrQ0FBUSxFQUE5QztFQUFBLElBQU9JLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBQ0EsaUJBQXNDTCwrQ0FBUSxFQUE5QztFQUFBLElBQU9NLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBRUEsaUJBQWtEUCwrQ0FBUSxFQUExRDtFQUFBLElBQU9RLGlCQUFQO0VBQUEsSUFBMEJDLG9CQUExQjs7RUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILGlCQUFaO0VBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxXQUFaO0VBRUFQLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdLLFdBQVcsSUFBSUUsV0FBbEIsRUFBOEI7TUFDMUJNLEVBQUU7SUFDTDtFQUNKLENBSlEsRUFJTixDQUFDUixXQUFELEVBQWNFLFdBQWQsQ0FKTSxDQUFUO0VBTUEsb0JBQ0k7SUFBTSxTQUFTLEVBQUMsV0FBaEI7SUFBQSx3QkFDSSw4REFBQyxnRUFBRDtNQUNJLFdBQVcsRUFBRUYsV0FEakI7TUFFSSxjQUFjLEVBQUVDLGNBRnBCO01BR0ksV0FBVyxFQUFFQyxXQUhqQjtNQUlJLGNBQWMsRUFBRUM7SUFKcEI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURKLGVBT0ksOERBQUMsa0VBQUQ7TUFDSSxXQUFXLEVBQUVIO0lBRGpCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFQSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQWFIOztHQTdCdUJEOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2FkRmlsZXMgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Mb2FkRmlsZXMnO1xyXG5pbXBvcnQgeyBTZWFyY2hBcmVhIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQXJlYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCl7XHJcblxyXG4gICAgY29uc3QgW3BsYXllclRhYmxlLCBzZXRQbGF5ZXJUYWJsZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JhdGluZ1RhYmxlLCBzZXRSYXRpbmdUYWJsZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hQbGF5ZXJUYWJsZSwgc2V0U2VhcmNoUGxheWVyVGFibGVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hQbGF5ZXJUYWJsZSk7XHJcbiAgICBjb25zb2xlLmxvZyhyYXRpbmdUYWJsZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihwbGF5ZXJUYWJsZSAmJiByYXRpbmdUYWJsZSl7XHJcbiAgICAgICAgICAgIHJhXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BsYXllclRhYmxlLCByYXRpbmdUYWJsZV0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8TG9hZEZpbGVzIFxyXG4gICAgICAgICAgICAgICAgcGxheWVyVGFibGU9e3BsYXllclRhYmxlfVxyXG4gICAgICAgICAgICAgICAgc2V0UGxheWVyVGFibGU9e3NldFBsYXllclRhYmxlfVxyXG4gICAgICAgICAgICAgICAgcmF0aW5nVGFibGU9e3JhdGluZ1RhYmxlfVxyXG4gICAgICAgICAgICAgICAgc2V0UmF0aW5nVGFibGU9e3NldFJhdGluZ1RhYmxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VhcmNoQXJlYSBcclxuICAgICAgICAgICAgICAgIHBsYXllclRhYmxlPXtwbGF5ZXJUYWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2FkRmlsZXMiLCJTZWFyY2hBcmVhIiwiSG9tZSIsInBsYXllclRhYmxlIiwic2V0UGxheWVyVGFibGUiLCJyYXRpbmdUYWJsZSIsInNldFJhdGluZ1RhYmxlIiwic2VhcmNoUGxheWVyVGFibGUiLCJzZXRTZWFyY2hQbGF5ZXJUYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJyYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});