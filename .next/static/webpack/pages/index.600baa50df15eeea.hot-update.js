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

/***/ "./src/components/SearchArea.jsx":
/*!***************************************!*\
  !*** ./src/components/SearchArea.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchArea: function() { return /* binding */ SearchArea; }\n/* harmony export */ });\n/* harmony import */ var E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputText */ \"./src/components/InputText.jsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.jsx\");\n/* harmony import */ var _scripts_searchScripts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/searchScripts */ \"./src/scripts/searchScripts.js\");\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table */ \"./src/components/Table.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"E:\\\\demed\\\\Documents\\\\UFRGS\\\\S3\\\\Classifica\\xE7\\xE3o e Pesquisa de Dados\\\\fifa21\\\\src\\\\components\\\\SearchArea.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar SearchAreaStyled = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].section.withConfig({\n  displayName: \"SearchArea__SearchAreaStyled\",\n  componentId: \"sc-sw0u3w-0\"\n})([\"background-color:#343541;border-radius:5px;display:flex;flex-direction:column;gap:20px;padding:10px;width:100%;.search{gap:5px;width:100%;}\"]);\n_c = SearchAreaStyled;\nfunction SearchArea(_ref) {\n  _s();\n\n  var playerTable = _ref.playerTable;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      result = _useState2[0],\n      setResult = _useState2[1];\n\n  console.log(result);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SearchAreaStyled, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"form\", {\n      className: \"search flexR\",\n      onSubmit: function onSubmit(e) {\n        e.preventDefault();\n\n        var _runSearch = (0,_scripts_searchScripts__WEBPACK_IMPORTED_MODULE_4__.runSearch)(search),\n            _runSearch2 = (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_runSearch, 2),\n            prefix = _runSearch2[0],\n            data = _runSearch2[1];\n\n        if (prefix == 'player') {\n          setResult((0,_scripts_searchScripts__WEBPACK_IMPORTED_MODULE_4__.searchPlayers)(playerTable, data));\n        }\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_InputText__WEBPACK_IMPORTED_MODULE_2__.InputText, {\n        type: \"text\",\n        placeholder: \"Buscar...\",\n        onChange: function onChange(e) {\n          setSearch(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n        children: \"Buscar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_5__.Table, {\n      name: result.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SearchArea, \"kMcGHo50lP3p6NIFMVHbgBeZTYo=\");\n\n_c2 = SearchArea;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SearchAreaStyled\");\n$RefreshReg$(_c2, \"SearchArea\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLGdCQUFnQixHQUFHUCxpRUFBSDtFQUFBO0VBQUE7QUFBQSxtSkFBdEI7S0FBTU87QUFjQyxTQUFTRSxVQUFULE9BQW9DO0VBQUE7O0VBQUEsSUFBZEMsV0FBYyxRQUFkQSxXQUFjOztFQUV2QyxnQkFBNEJULCtDQUFRLENBQUMsRUFBRCxDQUFwQztFQUFBLElBQU9VLE1BQVA7RUFBQSxJQUFlQyxTQUFmOztFQUNBLGlCQUE0QlgsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0VBQUEsSUFBT1ksTUFBUDtFQUFBLElBQWVDLFNBQWY7O0VBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0VBRUEsb0JBQ0ksOERBQUMsZ0JBQUQ7SUFBQSx3QkFDSTtNQUFNLFNBQVMsRUFBQyxjQUFoQjtNQUNJLFFBQVEsRUFBRSxrQkFBQ0ksQ0FBRCxFQUFPO1FBQ2JBLENBQUMsQ0FBQ0MsY0FBRjs7UUFDQSxpQkFBdUJkLGlFQUFTLENBQUNPLE1BQUQsQ0FBaEM7UUFBQTtRQUFBLElBQU9RLE1BQVA7UUFBQSxJQUFlQyxJQUFmOztRQUNBLElBQUdELE1BQU0sSUFBSSxRQUFiLEVBQXNCO1VBQ2xCTCxTQUFTLENBQUNULHFFQUFhLENBQUNLLFdBQUQsRUFBY1UsSUFBZCxDQUFkLENBQVQ7UUFDSDtNQUNKLENBUEw7TUFBQSx3QkFTSSw4REFBQyxpREFBRDtRQUFXLElBQUksRUFBQyxNQUFoQjtRQUNJLFdBQVcsRUFBQyxXQURoQjtRQUVJLFFBQVEsRUFBRSxrQkFBQ0gsQ0FBRCxFQUFPO1VBQ2JMLFNBQVMsQ0FBQ0ssQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBVDtRQUNIO01BSkw7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVRKLGVBZUksOERBQUMsMkNBQUQ7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFmSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFESixlQWtCSSw4REFBQyx5Q0FBRDtNQUNJLElBQUksRUFBRVQsTUFBTSxDQUFDVTtJQURqQjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBbEJKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBdUJIOztHQTdCZWQ7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEFyZWEuanN4P2Q0MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICcuL0lucHV0VGV4dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IHsgcnVuU2VhcmNoLCBzZWFyY2hQbGF5ZXJzIH0gZnJvbSAnLi4vc2NyaXB0cy9zZWFyY2hTY3JpcHRzJztcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuL1RhYmxlJztcclxuXHJcbmNvbnN0IFNlYXJjaEFyZWFTdHlsZWQgPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM1NDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5zZWFyY2h7XHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hBcmVhKHsgcGxheWVyVGFibGUgfSl7XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxTZWFyY2hBcmVhU3R5bGVkPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J3NlYXJjaCBmbGV4UidcclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbcHJlZml4LCBkYXRhXSA9IHJ1blNlYXJjaChzZWFyY2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByZWZpeCA9PSAncGxheWVyJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChzZWFyY2hQbGF5ZXJzKHBsYXllclRhYmxlLCBkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0VGV4dCB0eXBlPSd0ZXh0JyBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQnVzY2FyLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj5CdXNjYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8VGFibGUgXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtyZXN1bHQubmFtZX0gLz5cclxuICAgICAgICA8L1NlYXJjaEFyZWFTdHlsZWQ+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwidXNlU3RhdGUiLCJJbnB1dFRleHQiLCJCdXR0b24iLCJydW5TZWFyY2giLCJzZWFyY2hQbGF5ZXJzIiwiVGFibGUiLCJTZWFyY2hBcmVhU3R5bGVkIiwic2VjdGlvbiIsIlNlYXJjaEFyZWEiLCJwbGF5ZXJUYWJsZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInJlc3VsdCIsInNldFJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmVmaXgiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchArea.jsx\n"));

/***/ })

});