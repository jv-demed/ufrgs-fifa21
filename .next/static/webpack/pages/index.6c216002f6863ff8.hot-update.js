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

/***/ "./src/scripts/trie.js":
/*!*****************************!*\
  !*** ./src/scripts/trie.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Trie: function() { return /* binding */ Trie; }\n/* harmony export */ });\n/* harmony import */ var E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/createClass.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/classCallCheck.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/classCallCheck.js\");\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar TrieNode = /*#__PURE__*/(0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function TrieNode() {\n  (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, TrieNode);\n\n  this.children = new Map();\n  this.values = [];\n});\n\nvar Trie = /*#__PURE__*/function () {\n  function Trie() {\n    (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Trie);\n\n    this.root = new TrieNode();\n  }\n\n  (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Trie, [{\n    key: \"insert\",\n    value: function insert(word, value) {\n      var node = this.root;\n\n      var _iterator = _createForOfIteratorHelper(word),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var _char = _step.value;\n\n          if (!node.children.has(_char)) {\n            node.children.set(_char, new TrieNode());\n          }\n\n          node = node.children.get(_char);\n          node.values.push(value);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"search\",\n    value: function search(substring) {\n      var results = [];\n      var node = this.root;\n\n      var _iterator2 = _createForOfIteratorHelper(substring),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var _results2;\n\n          var _char2 = _step2.value;\n\n          if (!node.children.has(_char2)) {\n            return results;\n          }\n\n          node = node.children.get(_char2);\n\n          (_results2 = results).push.apply(_results2, (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.values));\n        } // Recolher valores de nós filhos para buscar todas as substrings possíveis\n\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n\n      var stack = [node];\n\n      while (stack.length > 0) {\n        var _results;\n\n        var currentNode = stack.pop();\n\n        (_results = results).push.apply(_results, (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentNode.values));\n\n        var _iterator3 = _createForOfIteratorHelper(currentNode.children.values()),\n            _step3;\n\n        try {\n          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n            var childNode = _step3.value;\n            stack.push(childNode);\n          }\n        } catch (err) {\n          _iterator3.e(err);\n        } finally {\n          _iterator3.f();\n        }\n      }\n\n      results = (0,E_demed_Documents_UFRGS_S3_Classifica_o_e_Pesquisa_de_Dados_fifa21_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Set(results));\n      return results;\n    }\n  }]);\n\n  return Trie;\n}();\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90cmllLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLGdOQUNGLG9CQUFhO0VBQUE7O0VBQ1QsS0FBS0MsUUFBTCxHQUFnQixJQUFJQyxHQUFKLEVBQWhCO0VBQ0EsS0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDSDs7QUFHRSxJQUFNQyxJQUFiO0VBQ0ksZ0JBQWE7SUFBQTs7SUFDVCxLQUFLQyxJQUFMLEdBQVksSUFBSUwsUUFBSixFQUFaO0VBQ0g7O0VBSEw7SUFBQTtJQUFBLE9BS0ksZ0JBQU9NLElBQVAsRUFBYUMsS0FBYixFQUFvQjtNQUNoQixJQUFJQyxJQUFJLEdBQUcsS0FBS0gsSUFBaEI7O01BRGdCLDJDQUVHQyxJQUZIO01BQUE7O01BQUE7UUFFaEIsb0RBQXlCO1VBQUEsSUFBZEcsS0FBYzs7VUFDckIsSUFBSSxDQUFDRCxJQUFJLENBQUNQLFFBQUwsQ0FBY1MsR0FBZCxDQUFrQkQsS0FBbEIsQ0FBTCxFQUE4QjtZQUMxQkQsSUFBSSxDQUFDUCxRQUFMLENBQWNVLEdBQWQsQ0FBa0JGLEtBQWxCLEVBQXdCLElBQUlULFFBQUosRUFBeEI7VUFDSDs7VUFDRFEsSUFBSSxHQUFHQSxJQUFJLENBQUNQLFFBQUwsQ0FBY1csR0FBZCxDQUFrQkgsS0FBbEIsQ0FBUDtVQUNBRCxJQUFJLENBQUNMLE1BQUwsQ0FBWVUsSUFBWixDQUFpQk4sS0FBakI7UUFDSDtNQVJlO1FBQUE7TUFBQTtRQUFBO01BQUE7SUFTbkI7RUFkTDtJQUFBO0lBQUEsT0FnQkksZ0JBQU9PLFNBQVAsRUFBa0I7TUFDZCxJQUFJQyxPQUFPLEdBQUcsRUFBZDtNQUNBLElBQUlQLElBQUksR0FBRyxLQUFLSCxJQUFoQjs7TUFGYyw0Q0FJS1MsU0FKTDtNQUFBOztNQUFBO1FBSWQsdURBQThCO1VBQUE7O1VBQUEsSUFBbkJMLE1BQW1COztVQUMxQixJQUFJLENBQUNELElBQUksQ0FBQ1AsUUFBTCxDQUFjUyxHQUFkLENBQWtCRCxNQUFsQixDQUFMLEVBQThCO1lBQzFCLE9BQU9NLE9BQVA7VUFDSDs7VUFDRFAsSUFBSSxHQUFHQSxJQUFJLENBQUNQLFFBQUwsQ0FBY1csR0FBZCxDQUFrQkgsTUFBbEIsQ0FBUDs7VUFDQSxhQUFBTSxPQUFPLEVBQUNGLElBQVIsZ05BQWdCTCxJQUFJLENBQUNMLE1BQXJCO1FBQ0gsQ0FWYSxDQVlkOztNQVpjO1FBQUE7TUFBQTtRQUFBO01BQUE7O01BYWQsSUFBTWEsS0FBSyxHQUFHLENBQUNSLElBQUQsQ0FBZDs7TUFDQSxPQUFPUSxLQUFLLENBQUNDLE1BQU4sR0FBZSxDQUF0QixFQUF5QjtRQUFBOztRQUNyQixJQUFNQyxXQUFXLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixFQUFwQjs7UUFDQSxZQUFBSixPQUFPLEVBQUNGLElBQVIsK01BQWdCSyxXQUFXLENBQUNmLE1BQTVCOztRQUZxQiw0Q0FJR2UsV0FBVyxDQUFDakIsUUFBWixDQUFxQkUsTUFBckIsRUFKSDtRQUFBOztRQUFBO1VBSXJCLHVEQUF1RDtZQUFBLElBQTVDaUIsU0FBNEM7WUFDbkRKLEtBQUssQ0FBQ0gsSUFBTixDQUFXTyxTQUFYO1VBQ0g7UUFOb0I7VUFBQTtRQUFBO1VBQUE7UUFBQTtNQU94Qjs7TUFDREwsT0FBTyxHQUFHLDhMQUFJLElBQUlNLEdBQUosQ0FBUU4sT0FBUixDQUFQLENBQVA7TUFDQSxPQUFPQSxPQUFQO0lBQ0g7RUF4Q0w7O0VBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2NyaXB0cy90cmllLmpzP2Q4MDkiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJpZU5vZGV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBUcmllTm9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydCh3b3JkLCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5yb290O1xyXG4gICAgICAgIGZvciAoY29uc3QgY2hhciBvZiB3b3JkKSB7XHJcbiAgICAgICAgICAgIGlmICghbm9kZS5jaGlsZHJlbi5oYXMoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uc2V0KGNoYXIsIG5ldyBUcmllTm9kZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5jaGlsZHJlbi5nZXQoY2hhcik7XHJcbiAgICAgICAgICAgIG5vZGUudmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2goc3Vic3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMucm9vdDtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaGFyIG9mIHN1YnN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAoIW5vZGUuY2hpbGRyZW4uaGFzKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5jaGlsZHJlbi5nZXQoY2hhcik7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCguLi5ub2RlLnZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNvbGhlciB2YWxvcmVzIGRlIG7Ds3MgZmlsaG9zIHBhcmEgYnVzY2FyIHRvZGFzIGFzIHN1YnN0cmluZ3MgcG9zc8OtdmVpc1xyXG4gICAgICAgIGNvbnN0IHN0YWNrID0gW25vZGVdO1xyXG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCguLi5jdXJyZW50Tm9kZS52YWx1ZXMpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZE5vZGUgb2YgY3VycmVudE5vZGUuY2hpbGRyZW4udmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHRzID0gWy4uLm5ldyBTZXQocmVzdWx0cyldO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlRyaWVOb2RlIiwiY2hpbGRyZW4iLCJNYXAiLCJ2YWx1ZXMiLCJUcmllIiwicm9vdCIsIndvcmQiLCJ2YWx1ZSIsIm5vZGUiLCJjaGFyIiwiaGFzIiwic2V0IiwiZ2V0IiwicHVzaCIsInN1YnN0cmluZyIsInJlc3VsdHMiLCJzdGFjayIsImxlbmd0aCIsImN1cnJlbnROb2RlIiwicG9wIiwiY2hpbGROb2RlIiwiU2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/trie.js\n"));

/***/ })

});