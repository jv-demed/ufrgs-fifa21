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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchArea: function() { return /* binding */ SearchArea; }\n/* harmony export */ });\n/* harmony import */ var E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputText */ \"./src/components/InputText.jsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.jsx\");\n/* harmony import */ var _scripts_searchScripts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/searchScripts */ \"./src/scripts/searchScripts.js\");\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table */ \"./src/components/Table.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"E:\\\\demed\\\\Documents\\\\UFRGS\\\\S3\\\\Classifica\\xE7\\xE3o e Pesquisa de Dados\\\\fifa21\\\\src\\\\components\\\\SearchArea.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar SearchAreaStyled = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].section.withConfig({\n  displayName: \"SearchArea__SearchAreaStyled\",\n  componentId: \"sc-sw0u3w-0\"\n})([\"background-color:#343541;border-radius:5px;display:flex;flex-direction:column;gap:20px;padding:10px;width:100%;.search{gap:5px;width:100%;}\"]);\n_c = SearchAreaStyled;\nfunction SearchArea(_ref) {\n  _s();\n\n  var playerTable = _ref.playerTable;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      result = _useState2[0],\n      setResult = _useState2[1];\n\n  console.log(result);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(SearchAreaStyled, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"form\", {\n      className: \"search flexR\",\n      onSubmit: function onSubmit(e) {\n        e.preventDefault();\n\n        var _runSearch = (0,_scripts_searchScripts__WEBPACK_IMPORTED_MODULE_4__.runSearch)(search),\n            _runSearch2 = (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_runSearch, 2),\n            prefix = _runSearch2[0],\n            data = _runSearch2[1];\n\n        if (prefix == 'player') {\n          setResult((0,_scripts_searchScripts__WEBPACK_IMPORTED_MODULE_4__.searchPlayers)(playerTable, data));\n        }\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_InputText__WEBPACK_IMPORTED_MODULE_2__.InputText, {\n        type: \"text\",\n        placeholder: \"Buscar...\",\n        onChange: function onChange(e) {\n          setSearch(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n        children: \"Buscar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), result ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_5__.Table, {\n      name: result.name,\n      table: result.table\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }, this) : '']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SearchArea, \"M5UFZrj6hLyMEnei7EJ8jslrCAo=\");\n\n_c2 = SearchArea;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SearchAreaStyled\");\n$RefreshReg$(_c2, \"SearchArea\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLGdCQUFnQixHQUFHUCxpRUFBSDtFQUFBO0VBQUE7QUFBQSxtSkFBdEI7S0FBTU87QUFjQyxTQUFTRSxVQUFULE9BQW9DO0VBQUE7O0VBQUEsSUFBZEMsV0FBYyxRQUFkQSxXQUFjOztFQUV2QyxnQkFBNEJULCtDQUFRLENBQUMsRUFBRCxDQUFwQztFQUFBLElBQU9VLE1BQVA7RUFBQSxJQUFlQyxTQUFmOztFQUNBLGlCQUE0QlgsK0NBQVEsRUFBcEM7RUFBQSxJQUFPWSxNQUFQO0VBQUEsSUFBZUMsU0FBZjs7RUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7RUFFQSxvQkFDSSw4REFBQyxnQkFBRDtJQUFBLHdCQUNJO01BQU0sU0FBUyxFQUFDLGNBQWhCO01BQ0ksUUFBUSxFQUFFLGtCQUFDSSxDQUFELEVBQU87UUFDYkEsQ0FBQyxDQUFDQyxjQUFGOztRQUNBLGlCQUF1QmQsaUVBQVMsQ0FBQ08sTUFBRCxDQUFoQztRQUFBO1FBQUEsSUFBT1EsTUFBUDtRQUFBLElBQWVDLElBQWY7O1FBQ0EsSUFBR0QsTUFBTSxJQUFJLFFBQWIsRUFBc0I7VUFDbEJMLFNBQVMsQ0FBQ1QscUVBQWEsQ0FBQ0ssV0FBRCxFQUFjVSxJQUFkLENBQWQsQ0FBVDtRQUNIO01BQ0osQ0FQTDtNQUFBLHdCQVNJLDhEQUFDLGlEQUFEO1FBQVcsSUFBSSxFQUFDLE1BQWhCO1FBQ0ksV0FBVyxFQUFDLFdBRGhCO1FBRUksUUFBUSxFQUFFLGtCQUFDSCxDQUFELEVBQU87VUFDYkwsU0FBUyxDQUFDSyxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVixDQUFUO1FBQ0g7TUFKTDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBVEosZUFlSSw4REFBQywyQ0FBRDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQWZKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURKLEVBa0JLVCxNQUFNLGdCQUNILDhEQUFDLHlDQUFEO01BQ0ksSUFBSSxFQUFFQSxNQUFNLENBQUNVLElBRGpCO01BRUksS0FBSyxFQUFFVixNQUFNLENBQUNXO0lBRmxCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERyxHQUlFLEVBdEJiO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBMkJIOztHQWpDZWY7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEFyZWEuanN4P2Q0MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHQgfSBmcm9tICcuL0lucHV0VGV4dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IHsgcnVuU2VhcmNoLCBzZWFyY2hQbGF5ZXJzIH0gZnJvbSAnLi4vc2NyaXB0cy9zZWFyY2hTY3JpcHRzJztcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuL1RhYmxlJztcclxuXHJcbmNvbnN0IFNlYXJjaEFyZWFTdHlsZWQgPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM1NDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5zZWFyY2h7XHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hBcmVhKHsgcGxheWVyVGFibGUgfSl7XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8U2VhcmNoQXJlYVN0eWxlZD5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdzZWFyY2ggZmxleFInXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW3ByZWZpeCwgZGF0YV0gPSBydW5TZWFyY2goc2VhcmNoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcmVmaXggPT0gJ3BsYXllcicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQoc2VhcmNoUGxheWVycyhwbGF5ZXJUYWJsZSwgZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgdHlwZT0ndGV4dCcgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0J1c2Nhci4uLidcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+QnVzY2FyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAge3Jlc3VsdCA/XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cmVzdWx0Lm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlPXtyZXN1bHQudGFibGV9XHJcbiAgICAgICAgICAgICAgICAvPiA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L1NlYXJjaEFyZWFTdHlsZWQ+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwidXNlU3RhdGUiLCJJbnB1dFRleHQiLCJCdXR0b24iLCJydW5TZWFyY2giLCJzZWFyY2hQbGF5ZXJzIiwiVGFibGUiLCJTZWFyY2hBcmVhU3R5bGVkIiwic2VjdGlvbiIsIlNlYXJjaEFyZWEiLCJwbGF5ZXJUYWJsZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInJlc3VsdCIsInNldFJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmVmaXgiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwidGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SearchArea.jsx\n"));

/***/ })

});