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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_LoadFiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/LoadFiles */ \"./src/components/LoadFiles.jsx\");\n/* harmony import */ var _src_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/SearchArea */ \"./src/components/SearchArea.jsx\");\n/* harmony import */ var _src_scripts_hashTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/scripts/hashTable */ \"./src/scripts/hashTable.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"E:\\\\demed\\\\Documents\\\\UFRGS\\\\S3\\\\Classifica\\xE7\\xE3o e Pesquisa de Dados\\\\fifa21\\\\pages\\\\index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      playerTable = _useState[0],\n      setPlayerTable = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      ratingTable = _useState2[0],\n      setRatingTable = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      searchPlayerTable = _useState3[0],\n      setSearchPlayerTable = _useState3[1]; //console.log(searchPlayerTable);\n  //console.log(ratingTable);\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (playerTable && ratingTable) {\n      var table = new _src_scripts_hashTable__WEBPACK_IMPORTED_MODULE_3__.HashTable('Busca Jogadores', playerTable.getSize() / 0.7);\n      playerTable.forEach(function (key, value) {\n        var rat = ratingTable.get(key);\n        var average = 0;\n\n        if (rat) {\n          rat.forEach(function (score) {\n            average += parseFloat(score[1]);\n          });\n          average /= rat.length;\n        }\n\n        table.insert(key, [key, value[0], value[1], average, rat ? rat.length : 0]);\n      });\n      setSearchPlayerTable(table);\n    }\n  }, [playerTable, ratingTable]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_LoadFiles__WEBPACK_IMPORTED_MODULE_1__.LoadFiles, {\n      playerTable: playerTable,\n      setPlayerTable: setPlayerTable,\n      ratingTable: ratingTable,\n      setRatingTable: setRatingTable\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__.SearchArea, {\n      playerTable: searchPlayerTable\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"kbrS0SxiBLXMZpwFwkuGcVR9Suk=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTSyxJQUFULEdBQWU7RUFBQTs7RUFFMUIsZ0JBQXNDSiwrQ0FBUSxFQUE5QztFQUFBLElBQU9LLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBQ0EsaUJBQXNDTiwrQ0FBUSxFQUE5QztFQUFBLElBQU9PLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBRUEsaUJBQWtEUiwrQ0FBUSxFQUExRDtFQUFBLElBQU9TLGlCQUFQO0VBQUEsSUFBMEJDLG9CQUExQixpQkFMMEIsQ0FPMUI7RUFDQTs7O0VBRUFYLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdNLFdBQVcsSUFBSUUsV0FBbEIsRUFBOEI7TUFDMUIsSUFBTUksS0FBSyxHQUFHLElBQUlSLDZEQUFKLENBQWMsaUJBQWQsRUFBa0NFLFdBQVcsQ0FBQ08sT0FBWixLQUF3QixHQUExRCxDQUFkO01BQ0FQLFdBQVcsQ0FBQ1EsT0FBWixDQUFvQixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7UUFDaEMsSUFBTUMsR0FBRyxHQUFHVCxXQUFXLENBQUNVLEdBQVosQ0FBZ0JILEdBQWhCLENBQVo7UUFDQSxJQUFJSSxPQUFPLEdBQUcsQ0FBZDs7UUFDQSxJQUFHRixHQUFILEVBQU87VUFDSEEsR0FBRyxDQUFDSCxPQUFKLENBQVksVUFBQU0sS0FBSyxFQUFJO1lBQ2pCRCxPQUFPLElBQUlFLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFyQjtVQUNILENBRkQ7VUFHQUQsT0FBTyxJQUFJRixHQUFHLENBQUNLLE1BQWY7UUFDSDs7UUFDRFYsS0FBSyxDQUFDVyxNQUFOLENBQWFSLEdBQWIsRUFBa0IsQ0FDZEEsR0FEYyxFQUVkQyxLQUFLLENBQUMsQ0FBRCxDQUZTLEVBR2RBLEtBQUssQ0FBQyxDQUFELENBSFMsRUFJZEcsT0FKYyxFQUtkRixHQUFHLEdBQUdBLEdBQUcsQ0FBQ0ssTUFBUCxHQUFnQixDQUxMLENBQWxCO01BT0gsQ0FoQkQ7TUFpQkFYLG9CQUFvQixDQUFDQyxLQUFELENBQXBCO0lBQ0g7RUFDSixDQXRCUSxFQXNCTixDQUFDTixXQUFELEVBQWNFLFdBQWQsQ0F0Qk0sQ0FBVDtFQXdCQSxvQkFDSTtJQUFNLFNBQVMsRUFBQyxXQUFoQjtJQUFBLHdCQUNJLDhEQUFDLGdFQUFEO01BQ0ksV0FBVyxFQUFFRixXQURqQjtNQUVJLGNBQWMsRUFBRUMsY0FGcEI7TUFHSSxXQUFXLEVBQUVDLFdBSGpCO01BSUksY0FBYyxFQUFFQztJQUpwQjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREosZUFPSSw4REFBQyxrRUFBRDtNQUNJLFdBQVcsRUFBRUM7SUFEakI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVBKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBYUg7O0dBL0N1Qkw7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExvYWRGaWxlcyB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xvYWRGaWxlcyc7XHJcbmltcG9ydCB7IFNlYXJjaEFyZWEgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhJztcclxuaW1wb3J0IHsgSGFzaFRhYmxlIH0gZnJvbSAnLi4vc3JjL3NjcmlwdHMvaGFzaFRhYmxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcclxuXHJcbiAgICBjb25zdCBbcGxheWVyVGFibGUsIHNldFBsYXllclRhYmxlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmF0aW5nVGFibGUsIHNldFJhdGluZ1RhYmxlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaFBsYXllclRhYmxlLCBzZXRTZWFyY2hQbGF5ZXJUYWJsZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coc2VhcmNoUGxheWVyVGFibGUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhyYXRpbmdUYWJsZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihwbGF5ZXJUYWJsZSAmJiByYXRpbmdUYWJsZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gbmV3IEhhc2hUYWJsZSgnQnVzY2EgSm9nYWRvcmVzJywgKHBsYXllclRhYmxlLmdldFNpemUoKSAvIDAuNykpO1xyXG4gICAgICAgICAgICBwbGF5ZXJUYWJsZS5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXQgPSByYXRpbmdUYWJsZS5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGxldCBhdmVyYWdlID0gMDtcclxuICAgICAgICAgICAgICAgIGlmKHJhdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF0LmZvckVhY2goc2NvcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmVyYWdlICs9IHBhcnNlRmxvYXQoc2NvcmVbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGF2ZXJhZ2UgLz0gcmF0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhYmxlLmluc2VydChrZXksIFtcclxuICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXZlcmFnZSxcclxuICAgICAgICAgICAgICAgICAgICByYXQgPyByYXQubGVuZ3RoIDogMFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hQbGF5ZXJUYWJsZSh0YWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BsYXllclRhYmxlLCByYXRpbmdUYWJsZV0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8TG9hZEZpbGVzIFxyXG4gICAgICAgICAgICAgICAgcGxheWVyVGFibGU9e3BsYXllclRhYmxlfVxyXG4gICAgICAgICAgICAgICAgc2V0UGxheWVyVGFibGU9e3NldFBsYXllclRhYmxlfVxyXG4gICAgICAgICAgICAgICAgcmF0aW5nVGFibGU9e3JhdGluZ1RhYmxlfVxyXG4gICAgICAgICAgICAgICAgc2V0UmF0aW5nVGFibGU9e3NldFJhdGluZ1RhYmxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VhcmNoQXJlYSBcclxuICAgICAgICAgICAgICAgIHBsYXllclRhYmxlPXtzZWFyY2hQbGF5ZXJUYWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2FkRmlsZXMiLCJTZWFyY2hBcmVhIiwiSGFzaFRhYmxlIiwiSG9tZSIsInBsYXllclRhYmxlIiwic2V0UGxheWVyVGFibGUiLCJyYXRpbmdUYWJsZSIsInNldFJhdGluZ1RhYmxlIiwic2VhcmNoUGxheWVyVGFibGUiLCJzZXRTZWFyY2hQbGF5ZXJUYWJsZSIsInRhYmxlIiwiZ2V0U2l6ZSIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsInJhdCIsImdldCIsImF2ZXJhZ2UiLCJzY29yZSIsInBhcnNlRmxvYXQiLCJsZW5ndGgiLCJpbnNlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});