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

/***/ "./src/scripts/hashTable.js":
/*!**********************************!*\
  !*** ./src/scripts/hashTable.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HashTable: function() { return /* binding */ HashTable; }\n/* harmony export */ });\n/* harmony import */ var E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/classCallCheck.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/createClass.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _murmurHash3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./murmurHash3 */ \"./src/scripts/murmurHash3.js\");\n/* harmony import */ var _trie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trie */ \"./src/scripts/trie.js\");\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar HashTable = /*#__PURE__*/function () {\n  function HashTable(name, size) {\n    (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, HashTable);\n\n    this.name = name;\n    this.size = size;\n    this.count = 0;\n    this.table = new Array(size);\n  }\n\n  (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HashTable, [{\n    key: \"hash\",\n    value: function hash(key) {\n      var byteArray = key.toString().split('').map(function (_char) {\n        return _char.charCodeAt(0);\n      });\n      return (0,_murmurHash3__WEBPACK_IMPORTED_MODULE_3__.murmurHash3)(byteArray) % this.size;\n    }\n  }, {\n    key: \"insert\",\n    value: function insert(key, value) {\n      var index = this.hash(key);\n\n      if (!this.table[index]) {\n        this.table[index] = [];\n      }\n\n      this.table[index].push({\n        key: key,\n        value: value\n      });\n      this.count++;\n    }\n  }, {\n    key: \"contains\",\n    value: function contains(key) {\n      var index = this.hashFunction(key);\n\n      if (!this.table[index]) {\n        return false;\n      } // Assuming each bucket in your table contains an array of entries\n\n\n      var bucket = this.table[index];\n\n      var _iterator = _createForOfIteratorHelper(bucket),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var _step$value = (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_step.value, 2),\n              existingKey = _step$value[0],\n              _ = _step$value[1];\n\n          if (existingKey === key) {\n            return true;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      return false;\n    }\n  }, {\n    key: \"createTrie\",\n    value: function createTrie(prefix) {\n      var trie = new _trie__WEBPACK_IMPORTED_MODULE_4__.Trie();\n\n      for (var i = 0; i < this.size; i++) {\n        if (this.table[i]) {\n          var _iterator2 = _createForOfIteratorHelper(this.table[i]),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var item = _step2.value;\n              var playerName = item.value[0];\n\n              if (playerName.includes(prefix)) {\n                trie.insert(playerName, item.value);\n              }\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n        }\n      }\n\n      return trie;\n    }\n  }]);\n\n  return HashTable;\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zY3JpcHRzL2hhc2hUYWJsZS5qcz9jOWUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG11cm11ckhhc2gzIH0gZnJvbSAnLi9tdXJtdXJIYXNoMyc7XHJcbmltcG9ydCB7IFRyaWUgfSBmcm9tICcuL3RyaWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhc2hUYWJsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBzaXplKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy50YWJsZSA9IG5ldyBBcnJheShzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNoKGtleSl7XHJcbiAgICAgICAgY29uc3QgYnl0ZUFycmF5ID0ga2V5LnRvU3RyaW5nKCkuc3BsaXQoJycpLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSk7XHJcbiAgICAgICAgcmV0dXJuIG11cm11ckhhc2gzKGJ5dGVBcnJheSkgJSB0aGlzLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0KGtleSwgdmFsdWUpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oYXNoKGtleSk7XHJcbiAgICAgICAgaWYoIXRoaXMudGFibGVbaW5kZXhdKXtcclxuICAgICAgICAgICAgdGhpcy50YWJsZVtpbmRleF0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YWJsZVtpbmRleF0ucHVzaCh7IGtleSwgdmFsdWUgfSk7XHJcbiAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zKGtleSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oYXNoRnVuY3Rpb24oa2V5KTtcclxuICAgICAgICBpZiAoIXRoaXMudGFibGVbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQXNzdW1pbmcgZWFjaCBidWNrZXQgaW4geW91ciB0YWJsZSBjb250YWlucyBhbiBhcnJheSBvZiBlbnRyaWVzXHJcbiAgICAgICAgY29uc3QgYnVja2V0ID0gdGhpcy50YWJsZVtpbmRleF07XHJcbiAgICAgICAgZm9yIChjb25zdCBbZXhpc3RpbmdLZXksIF9dIG9mIGJ1Y2tldCkge1xyXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdLZXkgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRyaWUocHJlZml4KXtcclxuICAgICAgICBjb25zdCB0cmllID0gbmV3IFRyaWUoKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy50YWJsZVtpXSl7XHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgaXRlbSBvZiB0aGlzLnRhYmxlW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJOYW1lID0gaXRlbS52YWx1ZVswXTtcclxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJOYW1lLmluY2x1ZGVzKHByZWZpeCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmllLmluc2VydChwbGF5ZXJOYW1lLCBpdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyaWU7XHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbIm11cm11ckhhc2gzIiwiVHJpZSIsIkhhc2hUYWJsZSIsIm5hbWUiLCJzaXplIiwiY291bnQiLCJ0YWJsZSIsIkFycmF5Iiwia2V5IiwiYnl0ZUFycmF5IiwidG9TdHJpbmciLCJzcGxpdCIsIm1hcCIsImNoYXIiLCJjaGFyQ29kZUF0IiwidmFsdWUiLCJpbmRleCIsImhhc2giLCJwdXNoIiwiaGFzaEZ1bmN0aW9uIiwiYnVja2V0IiwiZXhpc3RpbmdLZXkiLCJfIiwicHJlZml4IiwidHJpZSIsImkiLCJpdGVtIiwicGxheWVyTmFtZSIsImluY2x1ZGVzIiwiaW5zZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/hashTable.js\n"));

/***/ })

});