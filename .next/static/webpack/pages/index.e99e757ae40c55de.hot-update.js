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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_LoadFiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/LoadFiles */ \"./src/components/LoadFiles.jsx\");\n/* harmony import */ var _src_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/SearchArea */ \"./src/components/SearchArea.jsx\");\n/* harmony import */ var _src_scripts_hashTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/scripts/hashTable */ \"./src/scripts/hashTable.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"E:\\\\demed\\\\Documents\\\\UFRGS\\\\S3\\\\Classifica\\xE7\\xE3o e Pesquisa de Dados\\\\fifa21\\\\pages\\\\index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      playerTable = _useState[0],\n      setPlayerTable = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      ratingTable = _useState2[0],\n      setRatingTable = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      searchPlayerTable = _useState3[0],\n      setSearchPlayerTable = _useState3[1];\n\n  console.log(searchPlayerTable);\n  console.log(ratingTable);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (playerTable && ratingTable) {\n      var table = new _src_scripts_hashTable__WEBPACK_IMPORTED_MODULE_3__.HashTable('Busca Jogadores', playerTable.getSize() / 0.7);\n      playerTable.forEach(function (key, value) {\n        var rat = ratingTable.get(key);\n        var average = 0;\n\n        if (rat) {\n          rat.forEach(function (score) {\n            average += score[1];\n          });\n          average /= rat.length;\n        }\n\n        table.insert(key, [value[0], value[1], average, rat ? rat.length : 0]);\n      });\n      setSearchPlayerTable(table);\n    }\n  }, [playerTable, ratingTable]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log(searchPlayerTable.get(158023));\n  }, [searchPlayerTable]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_LoadFiles__WEBPACK_IMPORTED_MODULE_1__.LoadFiles, {\n      playerTable: playerTable,\n      setPlayerTable: setPlayerTable,\n      ratingTable: ratingTable,\n      setRatingTable: setRatingTable\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__.SearchArea, {\n      playerTable: playerTable\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"tPOxnp8xnsDz6IxSzOWlXO/x8W8=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTSyxJQUFULEdBQWU7RUFBQTs7RUFFMUIsZ0JBQXNDSiwrQ0FBUSxFQUE5QztFQUFBLElBQU9LLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBQ0EsaUJBQXNDTiwrQ0FBUSxFQUE5QztFQUFBLElBQU9PLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBRUEsaUJBQWtEUiwrQ0FBUSxFQUExRDtFQUFBLElBQU9TLGlCQUFQO0VBQUEsSUFBMEJDLG9CQUExQjs7RUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILGlCQUFaO0VBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxXQUFaO0VBRUFSLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdNLFdBQVcsSUFBSUUsV0FBbEIsRUFBOEI7TUFDMUIsSUFBTU0sS0FBSyxHQUFHLElBQUlWLDZEQUFKLENBQWMsaUJBQWQsRUFBa0NFLFdBQVcsQ0FBQ1MsT0FBWixLQUF3QixHQUExRCxDQUFkO01BQ0FULFdBQVcsQ0FBQ1UsT0FBWixDQUFvQixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7UUFDaEMsSUFBTUMsR0FBRyxHQUFHWCxXQUFXLENBQUNZLEdBQVosQ0FBZ0JILEdBQWhCLENBQVo7UUFDQSxJQUFJSSxPQUFPLEdBQUcsQ0FBZDs7UUFDQSxJQUFHRixHQUFILEVBQU87VUFDSEEsR0FBRyxDQUFDSCxPQUFKLENBQVksVUFBQU0sS0FBSyxFQUFJO1lBQ2pCRCxPQUFPLElBQUlDLEtBQUssQ0FBQyxDQUFELENBQWhCO1VBQ0gsQ0FGRDtVQUdBRCxPQUFPLElBQUlGLEdBQUcsQ0FBQ0ksTUFBZjtRQUNIOztRQUNEVCxLQUFLLENBQUNVLE1BQU4sQ0FBYVAsR0FBYixFQUFrQixDQUNkQyxLQUFLLENBQUMsQ0FBRCxDQURTLEVBRWRBLEtBQUssQ0FBQyxDQUFELENBRlMsRUFHZEcsT0FIYyxFQUlkRixHQUFHLEdBQUdBLEdBQUcsQ0FBQ0ksTUFBUCxHQUFnQixDQUpMLENBQWxCO01BTUgsQ0FmRDtNQWdCQVosb0JBQW9CLENBQUNHLEtBQUQsQ0FBcEI7SUFDSDtFQUNKLENBckJRLEVBcUJOLENBQUNSLFdBQUQsRUFBY0UsV0FBZCxDQXJCTSxDQUFUO0VBdUJBUixnREFBUyxDQUFDLFlBQU07SUFDWlksT0FBTyxDQUFDQyxHQUFSLENBQVlILGlCQUFpQixDQUFDVSxHQUFsQixDQUFzQixNQUF0QixDQUFaO0VBQ0gsQ0FGUSxFQUVOLENBQUNWLGlCQUFELENBRk0sQ0FBVDtFQUlBLG9CQUNJO0lBQU0sU0FBUyxFQUFDLFdBQWhCO0lBQUEsd0JBQ0ksOERBQUMsZ0VBQUQ7TUFDSSxXQUFXLEVBQUVKLFdBRGpCO01BRUksY0FBYyxFQUFFQyxjQUZwQjtNQUdJLFdBQVcsRUFBRUMsV0FIakI7TUFJSSxjQUFjLEVBQUVDO0lBSnBCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFESixlQU9JLDhEQUFDLGtFQUFEO01BQ0ksV0FBVyxFQUFFSDtJQURqQjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBUEo7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUFhSDs7R0FsRHVCRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZEZpbGVzIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTG9hZEZpbGVzJztcclxuaW1wb3J0IHsgU2VhcmNoQXJlYSB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaEFyZWEnO1xyXG5pbXBvcnQgeyBIYXNoVGFibGUgfSBmcm9tICcuLi9zcmMvc2NyaXB0cy9oYXNoVGFibGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xyXG5cclxuICAgIGNvbnN0IFtwbGF5ZXJUYWJsZSwgc2V0UGxheWVyVGFibGVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtyYXRpbmdUYWJsZSwgc2V0UmF0aW5nVGFibGVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoUGxheWVyVGFibGUsIHNldFNlYXJjaFBsYXllclRhYmxlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coc2VhcmNoUGxheWVyVGFibGUpO1xyXG4gICAgY29uc29sZS5sb2cocmF0aW5nVGFibGUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocGxheWVyVGFibGUgJiYgcmF0aW5nVGFibGUpe1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IG5ldyBIYXNoVGFibGUoJ0J1c2NhIEpvZ2Fkb3JlcycsIChwbGF5ZXJUYWJsZS5nZXRTaXplKCkgLyAwLjcpKTtcclxuICAgICAgICAgICAgcGxheWVyVGFibGUuZm9yRWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmF0ID0gcmF0aW5nVGFibGUuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXZlcmFnZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZihyYXQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhdC5mb3JFYWNoKHNjb3JlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZlcmFnZSArPSBzY29yZVsxXTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhdmVyYWdlIC89IHJhdC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5pbnNlcnQoa2V5LCBbXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXZlcmFnZSxcclxuICAgICAgICAgICAgICAgICAgICByYXQgPyByYXQubGVuZ3RoIDogMFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hQbGF5ZXJUYWJsZSh0YWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BsYXllclRhYmxlLCByYXRpbmdUYWJsZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoUGxheWVyVGFibGUuZ2V0KDE1ODAyMykpO1xyXG4gICAgfSwgW3NlYXJjaFBsYXllclRhYmxlXSlcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPExvYWRGaWxlcyBcclxuICAgICAgICAgICAgICAgIHBsYXllclRhYmxlPXtwbGF5ZXJUYWJsZX1cclxuICAgICAgICAgICAgICAgIHNldFBsYXllclRhYmxlPXtzZXRQbGF5ZXJUYWJsZX1cclxuICAgICAgICAgICAgICAgIHJhdGluZ1RhYmxlPXtyYXRpbmdUYWJsZX1cclxuICAgICAgICAgICAgICAgIHNldFJhdGluZ1RhYmxlPXtzZXRSYXRpbmdUYWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlYXJjaEFyZWEgXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJUYWJsZT17cGxheWVyVGFibGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9hZEZpbGVzIiwiU2VhcmNoQXJlYSIsIkhhc2hUYWJsZSIsIkhvbWUiLCJwbGF5ZXJUYWJsZSIsInNldFBsYXllclRhYmxlIiwicmF0aW5nVGFibGUiLCJzZXRSYXRpbmdUYWJsZSIsInNlYXJjaFBsYXllclRhYmxlIiwic2V0U2VhcmNoUGxheWVyVGFibGUiLCJjb25zb2xlIiwibG9nIiwidGFibGUiLCJnZXRTaXplIiwiZm9yRWFjaCIsImtleSIsInZhbHVlIiwicmF0IiwiZ2V0IiwiYXZlcmFnZSIsInNjb3JlIiwibGVuZ3RoIiwiaW5zZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});