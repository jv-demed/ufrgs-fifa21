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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_LoadFiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/LoadFiles */ \"./src/components/LoadFiles.jsx\");\n/* harmony import */ var _src_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/SearchArea */ \"./src/components/SearchArea.jsx\");\n/* harmony import */ var _src_scripts_createHashs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/scripts/createHashs */ \"./src/scripts/createHashs.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"E:\\\\demed\\\\Documents\\\\UFRGS\\\\S3\\\\Classifica\\xE7\\xE3o e Pesquisa de Dados\\\\fifa21\\\\pages\\\\index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isLoading = _useState[0],\n      setIsLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      playerList = _useState2[0],\n      setPlayerList = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      ratingList = _useState3[0],\n      setRatingList = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      tagList = _useState4[0],\n      setTagList = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    count: 0\n  }),\n      playerTable = _useState5[0],\n      setPlayerTable = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      Test = _useState6[0],\n      setTest = _useState6[1];\n\n  console.log(playerTable); //console.log(ratingList);\n  //console.log(tagList);\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (playerList.length != 0 && ratingList.length != 0) {\n      setIsLoading(true);\n\n      if (playerTable.count == 0) {\n        setPlayerTable((0,_src_scripts_createHashs__WEBPACK_IMPORTED_MODULE_3__.createPlayerTable)(playerList, ratingList));\n      }\n\n      setIsLoading(false);\n    }\n  }, [playerList, ratingList, tagList]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_LoadFiles__WEBPACK_IMPORTED_MODULE_1__.LoadFiles, {\n      isLoading: isLoading,\n      setPlayerList: setPlayerList,\n      setRatingList: setRatingList,\n      setTagList: setTagList\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__.SearchArea, {\n      playerTable: playerTable\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"sJEhp4oromPiSx3to9FKdEaqoK4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTTSxJQUFULEdBQWU7RUFBQTs7RUFFMUIsZ0JBQWtDTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7RUFBQSxJQUFPTSxTQUFQO0VBQUEsSUFBa0JDLFlBQWxCOztFQUNBLGlCQUFvQ1AsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0VBQUEsSUFBT1EsVUFBUDtFQUFBLElBQW1CQyxhQUFuQjs7RUFDQSxpQkFBb0NULCtDQUFRLENBQUMsRUFBRCxDQUE1QztFQUFBLElBQU9VLFVBQVA7RUFBQSxJQUFtQkMsYUFBbkI7O0VBQ0EsaUJBQThCWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7RUFBQSxJQUFPWSxPQUFQO0VBQUEsSUFBZ0JDLFVBQWhCOztFQUNBLGlCQUFzQ2IsK0NBQVEsQ0FBQztJQUFDYyxLQUFLLEVBQUU7RUFBUixDQUFELENBQTlDO0VBQUEsSUFBT0MsV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFFQSxpQkFBd0JoQiwrQ0FBUSxFQUFoQztFQUFBLElBQU9pQixJQUFQO0VBQUEsSUFBYUMsT0FBYjs7RUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFdBQVosRUFWMEIsQ0FXMUI7RUFDQTs7RUFFQWhCLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdTLFVBQVUsQ0FBQ2EsTUFBWCxJQUFxQixDQUFyQixJQUEwQlgsVUFBVSxDQUFDVyxNQUFYLElBQXFCLENBQWxELEVBQW9EO01BQ2hEZCxZQUFZLENBQUMsSUFBRCxDQUFaOztNQUNBLElBQUdRLFdBQVcsQ0FBQ0QsS0FBWixJQUFxQixDQUF4QixFQUEwQjtRQUN0QkUsY0FBYyxDQUFDYiwyRUFBaUIsQ0FBQ0ssVUFBRCxFQUFhRSxVQUFiLENBQWxCLENBQWQ7TUFDSDs7TUFDREgsWUFBWSxDQUFDLEtBQUQsQ0FBWjtJQUNIO0VBQ0osQ0FSUSxFQVFOLENBQUNDLFVBQUQsRUFBYUUsVUFBYixFQUF5QkUsT0FBekIsQ0FSTSxDQUFUO0VBVUEsb0JBQ0k7SUFBTSxTQUFTLEVBQUMsV0FBaEI7SUFBQSx3QkFDSSw4REFBQyxnRUFBRDtNQUNJLFNBQVMsRUFBRU4sU0FEZjtNQUVJLGFBQWEsRUFBRUcsYUFGbkI7TUFHSSxhQUFhLEVBQUVFLGFBSG5CO01BSUksVUFBVSxFQUFFRTtJQUpoQjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREosZUFPSSw4REFBQyxrRUFBRDtNQUNJLFdBQVcsRUFBRUU7SUFEakI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVBKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBYUg7O0dBckN1QlY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExvYWRGaWxlcyB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xvYWRGaWxlcyc7XHJcbmltcG9ydCB7IFNlYXJjaEFyZWEgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhJztcclxuaW1wb3J0IHsgY3JlYXRlUGxheWVyVGFibGUsIGNyZWF0ZVBsYXllcnMgfSBmcm9tICcuLi9zcmMvc2NyaXB0cy9jcmVhdGVIYXNocyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCl7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJMaXN0LCBzZXRQbGF5ZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyYXRpbmdMaXN0LCBzZXRSYXRpbmdMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0YWdMaXN0LCBzZXRUYWdMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJUYWJsZSwgc2V0UGxheWVyVGFibGVdID0gdXNlU3RhdGUoe2NvdW50OiAwfSk7XHJcblxyXG4gICAgY29uc3QgW1Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJUYWJsZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJhdGluZ0xpc3QpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0YWdMaXN0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHBsYXllckxpc3QubGVuZ3RoICE9IDAgJiYgcmF0aW5nTGlzdC5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgaWYocGxheWVyVGFibGUuY291bnQgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzZXRQbGF5ZXJUYWJsZShjcmVhdGVQbGF5ZXJUYWJsZShwbGF5ZXJMaXN0LCByYXRpbmdMaXN0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcGxheWVyTGlzdCwgcmF0aW5nTGlzdCwgdGFnTGlzdF0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8TG9hZEZpbGVzIFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBzZXRQbGF5ZXJMaXN0PXtzZXRQbGF5ZXJMaXN0fVxyXG4gICAgICAgICAgICAgICAgc2V0UmF0aW5nTGlzdD17c2V0UmF0aW5nTGlzdH1cclxuICAgICAgICAgICAgICAgIHNldFRhZ0xpc3Q9e3NldFRhZ0xpc3R9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWFyY2hBcmVhIFxyXG4gICAgICAgICAgICAgICAgcGxheWVyVGFibGU9e3BsYXllclRhYmxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRGaWxlcyIsIlNlYXJjaEFyZWEiLCJjcmVhdGVQbGF5ZXJUYWJsZSIsImNyZWF0ZVBsYXllcnMiLCJIb21lIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicGxheWVyTGlzdCIsInNldFBsYXllckxpc3QiLCJyYXRpbmdMaXN0Iiwic2V0UmF0aW5nTGlzdCIsInRhZ0xpc3QiLCJzZXRUYWdMaXN0IiwiY291bnQiLCJwbGF5ZXJUYWJsZSIsInNldFBsYXllclRhYmxlIiwiVGVzdCIsInNldFRlc3QiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});