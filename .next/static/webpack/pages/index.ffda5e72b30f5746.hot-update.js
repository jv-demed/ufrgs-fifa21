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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_LoadFiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/LoadFiles */ \"./src/components/LoadFiles.jsx\");\n/* harmony import */ var _src_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/SearchArea */ \"./src/components/SearchArea.jsx\");\n/* harmony import */ var _src_scripts_hashTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/scripts/hashTable */ \"./src/scripts/hashTable.js\");\n/* harmony import */ var _src_scripts_createHashs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/scripts/createHashs */ \"./src/scripts/createHashs.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"E:\\\\demed\\\\Documents\\\\UFRGS\\\\S3\\\\Classifica\\xE7\\xE3o e Pesquisa de Dados\\\\fifa21\\\\pages\\\\index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isLoading = _useState[0],\n      setIsLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      time = _useState2[0],\n      setTime = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      playerTable = _useState3[0],\n      setPlayerTable = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      ratingTable = _useState4[0],\n      setRatingTable = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      tagTable = _useState5[0],\n      setTagTable = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      searchPlayerTable = _useState6[0],\n      setSearchPlayerTable = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      searchUserTable = _useState7[0],\n      setSearchUserTable = _useState7[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (playerTable && ratingTable) {\n      setSearchPlayerTable((0,_src_scripts_createHashs__WEBPACK_IMPORTED_MODULE_4__.createPlayerTable)(playerTable, ratingTable, setIsLoading, setTime));\n    }\n  }, [playerTable, ratingTable]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (ratingTable && searchPlayerTable) {\n      setSearchUserTable((0,_src_scripts_createHashs__WEBPACK_IMPORTED_MODULE_4__.createUserTable)(ratingTable, searchPlayerTable, setIsLoading, setTime));\n    }\n  }, [searchPlayerTable]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_components_LoadFiles__WEBPACK_IMPORTED_MODULE_1__.LoadFiles, {\n      isLoading: isLoading,\n      setIsLoading: setIsLoading,\n      time: time,\n      setTime: setTime,\n      playerTable: playerTable,\n      setPlayerTable: setPlayerTable,\n      ratingTable: ratingTable,\n      setRatingTable: setRatingTable,\n      tagTable: tagTable,\n      setTagTable: setTagTable\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__.SearchArea, {\n      playerTable: searchPlayerTable,\n      userTable: searchUserTable,\n      tagTable: tagTable\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"p0HsjH1mWyJjRVlPekrP0i5zxOo=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTTyxJQUFULEdBQWU7RUFBQTs7RUFFMUIsZ0JBQWtDTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7RUFBQSxJQUFPTyxTQUFQO0VBQUEsSUFBa0JDLFlBQWxCOztFQUNBLGlCQUF3QlIsK0NBQVEsQ0FBQyxDQUFELENBQWhDO0VBQUEsSUFBT1MsSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBRUEsaUJBQXNDViwrQ0FBUSxFQUE5QztFQUFBLElBQU9XLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBQ0EsaUJBQXNDWiwrQ0FBUSxFQUE5QztFQUFBLElBQU9hLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBQ0EsaUJBQWdDZCwrQ0FBUSxFQUF4QztFQUFBLElBQU9lLFFBQVA7RUFBQSxJQUFpQkMsV0FBakI7O0VBRUEsaUJBQWtEaEIsK0NBQVEsRUFBMUQ7RUFBQSxJQUFPaUIsaUJBQVA7RUFBQSxJQUEwQkMsb0JBQTFCOztFQUNBLGlCQUE4Q2xCLCtDQUFRLEVBQXREO0VBQUEsSUFBT21CLGVBQVA7RUFBQSxJQUF3QkMsa0JBQXhCOztFQUVBckIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBR1ksV0FBVyxJQUFJRSxXQUFsQixFQUE4QjtNQUMxQkssb0JBQW9CLENBQUNkLDJFQUFpQixDQUFDTyxXQUFELEVBQWNFLFdBQWQsRUFBMkJMLFlBQTNCLEVBQXlDRSxPQUF6QyxDQUFsQixDQUFwQjtJQUNIO0VBQ0osQ0FKUSxFQUlOLENBQUNDLFdBQUQsRUFBY0UsV0FBZCxDQUpNLENBQVQ7RUFNQWQsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBR2MsV0FBVyxJQUFJSSxpQkFBbEIsRUFBb0M7TUFDaENHLGtCQUFrQixDQUFDZix5RUFBZSxDQUFDUSxXQUFELEVBQWNJLGlCQUFkLEVBQWlDVCxZQUFqQyxFQUErQ0UsT0FBL0MsQ0FBaEIsQ0FBbEI7SUFDSDtFQUNKLENBSlEsRUFJTixDQUFDTyxpQkFBRCxDQUpNLENBQVQ7RUFNQSxvQkFDSTtJQUFNLFNBQVMsRUFBQyxXQUFoQjtJQUFBLHdCQUNJLDhEQUFDLGdFQUFEO01BQ0ksU0FBUyxFQUFFVixTQURmO01BRUksWUFBWSxFQUFFQyxZQUZsQjtNQUdJLElBQUksRUFBRUMsSUFIVjtNQUlJLE9BQU8sRUFBRUMsT0FKYjtNQUtJLFdBQVcsRUFBRUMsV0FMakI7TUFNSSxjQUFjLEVBQUVDLGNBTnBCO01BT0ksV0FBVyxFQUFFQyxXQVBqQjtNQVFJLGNBQWMsRUFBRUMsY0FScEI7TUFTSSxRQUFRLEVBQUVDLFFBVGQ7TUFVSSxXQUFXLEVBQUVDO0lBVmpCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFESixlQWFJLDhEQUFDLGtFQUFEO01BQ0ksV0FBVyxFQUFFQyxpQkFEakI7TUFFSSxTQUFTLEVBQUVFLGVBRmY7TUFHSSxRQUFRLEVBQUVKO0lBSGQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWJKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBcUJIOztHQTdDdUJUOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2FkRmlsZXMgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Mb2FkRmlsZXMnO1xyXG5pbXBvcnQgeyBTZWFyY2hBcmVhIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQXJlYSc7XHJcbmltcG9ydCB7IEhhc2hUYWJsZSB9IGZyb20gJy4uL3NyYy9zY3JpcHRzL2hhc2hUYWJsZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVBsYXllclRhYmxlLCBjcmVhdGVVc2VyVGFibGUgfSBmcm9tICcuLi9zcmMvc2NyaXB0cy9jcmVhdGVIYXNocyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCl7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFtwbGF5ZXJUYWJsZSwgc2V0UGxheWVyVGFibGVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtyYXRpbmdUYWJsZSwgc2V0UmF0aW5nVGFibGVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt0YWdUYWJsZSwgc2V0VGFnVGFibGVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoUGxheWVyVGFibGUsIHNldFNlYXJjaFBsYXllclRhYmxlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc2VhcmNoVXNlclRhYmxlLCBzZXRTZWFyY2hVc2VyVGFibGVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHBsYXllclRhYmxlICYmIHJhdGluZ1RhYmxlKXtcclxuICAgICAgICAgICAgc2V0U2VhcmNoUGxheWVyVGFibGUoY3JlYXRlUGxheWVyVGFibGUocGxheWVyVGFibGUsIHJhdGluZ1RhYmxlLCBzZXRJc0xvYWRpbmcsIHNldFRpbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcGxheWVyVGFibGUsIHJhdGluZ1RhYmxlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihyYXRpbmdUYWJsZSAmJiBzZWFyY2hQbGF5ZXJUYWJsZSl7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFVzZXJUYWJsZShjcmVhdGVVc2VyVGFibGUocmF0aW5nVGFibGUsIHNlYXJjaFBsYXllclRhYmxlLCBzZXRJc0xvYWRpbmcsIHNldFRpbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2VhcmNoUGxheWVyVGFibGVdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPExvYWRGaWxlcyBcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nPXtzZXRJc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICB0aW1lPXt0aW1lfVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZT17c2V0VGltZX1cclxuICAgICAgICAgICAgICAgIHBsYXllclRhYmxlPXtwbGF5ZXJUYWJsZX1cclxuICAgICAgICAgICAgICAgIHNldFBsYXllclRhYmxlPXtzZXRQbGF5ZXJUYWJsZX1cclxuICAgICAgICAgICAgICAgIHJhdGluZ1RhYmxlPXtyYXRpbmdUYWJsZX1cclxuICAgICAgICAgICAgICAgIHNldFJhdGluZ1RhYmxlPXtzZXRSYXRpbmdUYWJsZX1cclxuICAgICAgICAgICAgICAgIHRhZ1RhYmxlPXt0YWdUYWJsZX1cclxuICAgICAgICAgICAgICAgIHNldFRhZ1RhYmxlPXtzZXRUYWdUYWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlYXJjaEFyZWEgXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJUYWJsZT17c2VhcmNoUGxheWVyVGFibGV9XHJcbiAgICAgICAgICAgICAgICB1c2VyVGFibGU9e3NlYXJjaFVzZXJUYWJsZX1cclxuICAgICAgICAgICAgICAgIHRhZ1RhYmxlPXt0YWdUYWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2FkRmlsZXMiLCJTZWFyY2hBcmVhIiwiSGFzaFRhYmxlIiwiY3JlYXRlUGxheWVyVGFibGUiLCJjcmVhdGVVc2VyVGFibGUiLCJIb21lIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidGltZSIsInNldFRpbWUiLCJwbGF5ZXJUYWJsZSIsInNldFBsYXllclRhYmxlIiwicmF0aW5nVGFibGUiLCJzZXRSYXRpbmdUYWJsZSIsInRhZ1RhYmxlIiwic2V0VGFnVGFibGUiLCJzZWFyY2hQbGF5ZXJUYWJsZSIsInNldFNlYXJjaFBsYXllclRhYmxlIiwic2VhcmNoVXNlclRhYmxlIiwic2V0U2VhcmNoVXNlclRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});