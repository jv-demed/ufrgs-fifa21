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

/***/ "./src/components/InputCsv.jsx":
/*!*************************************!*\
  !*** ./src/components/InputCsv.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InputCsv: function() { return /* binding */ InputCsv; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_csvScripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/csvScripts */ \"./src/scripts/csvScripts.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"E:\\\\demed\\\\Documents\\\\UFRGS\\\\S3\\\\Classifica\\xE7\\xE3o e Pesquisa de Dados\\\\fifa21\\\\src\\\\components\\\\InputCsv.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar InputCsvStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].label.withConfig({\n  displayName: \"InputCsv__InputCsvStyled\",\n  componentId: \"sc-6p7xrp-0\"\n})([\"border:1px solid #ccc;border-radius:4px;cursor:pointer;display:flex;gap:10px;justify-content:center;padding:10px;width:30%;.icon{font-size:1.2rem;}\"]);\n_c = InputCsvStyled;\nfunction InputCsv(_ref) {\n  _s();\n\n  var name = _ref.name,\n      table = _ref.table,\n      setData = _ref.setData;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (file) {\n      setData(file);\n    }\n  }, [file]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(InputCsvStyled, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this), table ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineCheck, {\n      className: \"icon\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineUpload, {\n      className: \"icon\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n      type: \"file\",\n      accept: \".csv\",\n      onChange: function onChange(e) {\n        var selectedFile = e.target.files[0];\n        setFile(selectedFile);\n      },\n      style: {\n        display: 'none'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}\n\n_s(InputCsv, \"Jhki08jVEMJI2KiupUVAwO50QXo=\");\n\n_c2 = InputCsv;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"InputCsvStyled\");\n$RefreshReg$(_c2, \"InputCsv\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbnB1dENzdi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTSxjQUFjLEdBQUdOLCtEQUFIO0VBQUE7RUFBQTtBQUFBLDJKQUFwQjtLQUFNTTtBQWNDLFNBQVNFLFFBQVQsT0FBMkM7RUFBQTs7RUFBQSxJQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0VBQUEsSUFBakJDLEtBQWlCLFFBQWpCQSxLQUFpQjtFQUFBLElBQVZDLE9BQVUsUUFBVkEsT0FBVTs7RUFFOUMsZ0JBQXdCVCwrQ0FBUSxFQUFoQztFQUFBLElBQU9VLElBQVA7RUFBQSxJQUFhQyxPQUFiOztFQUVBWixnREFBUyxDQUFDLFlBQU07SUFDWixJQUFHVyxJQUFILEVBQVE7TUFDSkQsT0FBTyxDQUFDQyxJQUFELENBQVA7SUFDSDtFQUNKLENBSlEsRUFJTixDQUFDQSxJQUFELENBSk0sQ0FBVDtFQU1BLG9CQUNJLDhEQUFDLGNBQUQ7SUFBQSx3QkFDSTtNQUFBLFVBQU9IO0lBQVA7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURKLEVBRUtDLEtBQUssZ0JBQ0YsOERBQUMsMERBQUQ7TUFBZ0IsU0FBUyxFQUFDO0lBQTFCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERSxnQkFFRiw4REFBQywyREFBRDtNQUFpQixTQUFTLEVBQUM7SUFBM0I7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpSLGVBTUk7TUFBTyxJQUFJLEVBQUMsTUFBWjtNQUNJLE1BQU0sRUFBQyxNQURYO01BRUksUUFBUSxFQUFFLGtCQUFDSSxDQUFELEVBQU87UUFDYixJQUFNQyxZQUFZLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFyQjtRQUNBSixPQUFPLENBQUNFLFlBQUQsQ0FBUDtNQUNILENBTEw7TUFNSSxLQUFLLEVBQUU7UUFBRUcsT0FBTyxFQUFFO01BQVg7SUFOWDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUFpQkg7O0dBM0JlVjs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRDc3YuanN4PzBmNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbnZlcnRDc3ZUb0FycmF5IH0gZnJvbSAnLi4vc2NyaXB0cy9jc3ZTY3JpcHRzJztcclxuaW1wb3J0IHsgQWlPdXRsaW5lVXBsb2FkLCBBaU91dGxpbmVDaGVjayB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuXHJcbmNvbnN0IElucHV0Q3N2U3R5bGVkID0gc3R5bGVkLmxhYmVsYFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgLmljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRDc3YoeyBuYW1lLCB0YWJsZSwgc2V0RGF0YSB9KXtcclxuICAgIFxyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGZpbGUpe1xyXG4gICAgICAgICAgICBzZXREYXRhKGZpbGUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2ZpbGVdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPElucHV0Q3N2U3R5bGVkPlxyXG4gICAgICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIHt0YWJsZSA/XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lQ2hlY2sgY2xhc3NOYW1lPSdpY29uJyAvPiA6XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lVXBsb2FkIGNsYXNzTmFtZT0naWNvbicgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9Jy5jc3YnIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlsZShzZWxlY3RlZEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgfX0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9JbnB1dENzdlN0eWxlZD5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb252ZXJ0Q3N2VG9BcnJheSIsIkFpT3V0bGluZVVwbG9hZCIsIkFpT3V0bGluZUNoZWNrIiwiSW5wdXRDc3ZTdHlsZWQiLCJsYWJlbCIsIklucHV0Q3N2IiwibmFtZSIsInRhYmxlIiwic2V0RGF0YSIsImZpbGUiLCJzZXRGaWxlIiwiZSIsInNlbGVjdGVkRmlsZSIsInRhcmdldCIsImZpbGVzIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/InputCsv.jsx\n"));

/***/ })

});