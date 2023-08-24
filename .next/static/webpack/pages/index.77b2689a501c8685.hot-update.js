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

/***/ "./src/scripts/searchScripts.js":
/*!**************************************!*\
  !*** ./src/scripts/searchScripts.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   runSearch: function() { return /* binding */ runSearch; },\n/* harmony export */   searchPlayers: function() { return /* binding */ searchPlayers; },\n/* harmony export */   searchTags: function() { return /* binding */ searchTags; },\n/* harmony export */   searchTops: function() { return /* binding */ searchTops; },\n/* harmony export */   searchUsers: function() { return /* binding */ searchUsers; }\n/* harmony export */ });\n/* harmony import */ var _quickSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quickSort */ \"./src/scripts/quickSort.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nfunction runSearch(search) {\n  var parts = search.split(' ');\n  var prefix = parts[0];\n  var data = parts.slice(1).join(' ');\n  var numberMatch = prefix.match(/\\d+/);\n\n  if (numberMatch) {\n    var index = numberMatch.index;\n    var word = prefix.substring(0, index);\n    var number = parseInt(numberMatch[0]);\n    return [[word, number], data];\n  }\n\n  return [prefix, data];\n}\nfunction searchPlayers(table, data) {\n  var result = table.searchByName(data);\n  return {\n    name: 'Players',\n    list: result\n  };\n}\nfunction searchUsers(table, data) {\n  var result = table.get(data);\n  var ordened = (0,_quickSort__WEBPACK_IMPORTED_MODULE_0__.quickSort)(result, 4);\n  var limited = ordened.slice(0, 20);\n  return {\n    name: 'Users',\n    list: limited\n  };\n}\nfunction searchTops(table, num, data) {\n  var cleaned = data.replace(/'/g, '');\n  var result = table.searchByPosition(cleaned);\n  var matchingPlayers = [];\n\n  var _iterator = _createForOfIteratorHelper(result),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var player = _step.value;\n\n      if (player[4] >= 1000) {\n        matchingPlayers.push(player);\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var ordened = (0,_quickSort__WEBPACK_IMPORTED_MODULE_0__.quickSort)(matchingPlayers, 3);\n  var limited = ordened.slice(0, num);\n  return {\n    name: 'Tops',\n    list: limited\n  };\n}\nfunction searchTags(table, tagTable, data) {\n  var regex = /'([^']+)'/g;\n  var tags = [];\n  var match;\n\n  while ((match = regex.exec(data)) !== null) {\n    tags.push(match[1]);\n  }\n\n  var playerCountByTag = {}; // Objeto para rastrear a contagem de jogadores por tag\n\n  for (var _i = 0, _tags = tags; _i < _tags.length; _i++) {\n    var tag = _tags[_i];\n    var players = tagTable.searchByTag(tag); // Modifique para a sua lógica de busca por tag\n\n    var _iterator2 = _createForOfIteratorHelper(players),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var player = _step2.value;\n        var playerId = player[0];\n\n        if (!playerCountByTag[playerId]) {\n          playerCountByTag[playerId] = 1;\n        } else {\n          playerCountByTag[playerId]++;\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  }\n\n  var matchingPlayers = [];\n\n  for (var _playerId in playerCountByTag) {\n    if (playerCountByTag[_playerId] === tags.length) {\n      matchingPlayers.push(table.get(_playerId));\n    }\n  }\n\n  console.log(matchingPlayers);\n  return {\n    name: 'Tags',\n    list: matchingPlayers\n  };\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zZWFyY2hTY3JpcHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBU0MsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7RUFDOUIsSUFBTUMsS0FBSyxHQUFHRCxNQUFNLENBQUNFLEtBQVAsQ0FBYSxHQUFiLENBQWQ7RUFDQSxJQUFNQyxNQUFNLEdBQUdGLEtBQUssQ0FBQyxDQUFELENBQXBCO0VBQ0EsSUFBSUcsSUFBSSxHQUFHSCxLQUFLLENBQUNJLEtBQU4sQ0FBWSxDQUFaLEVBQWVDLElBQWYsQ0FBb0IsR0FBcEIsQ0FBWDtFQUNBLElBQU1DLFdBQVcsR0FBR0osTUFBTSxDQUFDSyxLQUFQLENBQWEsS0FBYixDQUFwQjs7RUFDQSxJQUFHRCxXQUFILEVBQWU7SUFDWCxJQUFNRSxLQUFLLEdBQUdGLFdBQVcsQ0FBQ0UsS0FBMUI7SUFDQSxJQUFNQyxJQUFJLEdBQUdQLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQixDQUFqQixFQUFvQkYsS0FBcEIsQ0FBYjtJQUNBLElBQU1HLE1BQU0sR0FBR0MsUUFBUSxDQUFDTixXQUFXLENBQUMsQ0FBRCxDQUFaLENBQXZCO0lBQ0EsT0FBTyxDQUFDLENBQUNHLElBQUQsRUFBT0UsTUFBUCxDQUFELEVBQWlCUixJQUFqQixDQUFQO0VBQ0g7O0VBQ0QsT0FBTyxDQUFDRCxNQUFELEVBQVNDLElBQVQsQ0FBUDtBQUNIO0FBRU0sU0FBU1UsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJYLElBQTlCLEVBQW1DO0VBQ3RDLElBQU1ZLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxZQUFOLENBQW1CYixJQUFuQixDQUFmO0VBQ0EsT0FBTztJQUNIYyxJQUFJLEVBQUUsU0FESDtJQUVIQyxJQUFJLEVBQUVIO0VBRkgsQ0FBUDtBQUlIO0FBRU0sU0FBU0ksV0FBVCxDQUFxQkwsS0FBckIsRUFBNEJYLElBQTVCLEVBQWlDO0VBQ3BDLElBQU1ZLE1BQU0sR0FBR0QsS0FBSyxDQUFDTSxHQUFOLENBQVVqQixJQUFWLENBQWY7RUFDQSxJQUFNa0IsT0FBTyxHQUFHeEIscURBQVMsQ0FBQ2tCLE1BQUQsRUFBUyxDQUFULENBQXpCO0VBQ0EsSUFBTU8sT0FBTyxHQUFHRCxPQUFPLENBQUNqQixLQUFSLENBQWMsQ0FBZCxFQUFpQixFQUFqQixDQUFoQjtFQUNBLE9BQU87SUFDSGEsSUFBSSxFQUFFLE9BREg7SUFFSEMsSUFBSSxFQUFFSTtFQUZILENBQVA7QUFJSDtBQUVNLFNBQVNDLFVBQVQsQ0FBb0JULEtBQXBCLEVBQTJCVSxHQUEzQixFQUFnQ3JCLElBQWhDLEVBQXFDO0VBQ3hDLElBQU1zQixPQUFPLEdBQUd0QixJQUFJLENBQUN1QixPQUFMLENBQWEsSUFBYixFQUFtQixFQUFuQixDQUFoQjtFQUNBLElBQU1YLE1BQU0sR0FBR0QsS0FBSyxDQUFDYSxnQkFBTixDQUF1QkYsT0FBdkIsQ0FBZjtFQUNBLElBQU1HLGVBQWUsR0FBRyxFQUF4Qjs7RUFId0MsMkNBSXBCYixNQUpvQjtFQUFBOztFQUFBO0lBSXhDLG9EQUEyQjtNQUFBLElBQWpCYyxNQUFpQjs7TUFDdkIsSUFBR0EsTUFBTSxDQUFDLENBQUQsQ0FBTixJQUFhLElBQWhCLEVBQXFCO1FBQ2pCRCxlQUFlLENBQUNFLElBQWhCLENBQXFCRCxNQUFyQjtNQUNIO0lBQ0o7RUFSdUM7SUFBQTtFQUFBO0lBQUE7RUFBQTs7RUFTeEMsSUFBTVIsT0FBTyxHQUFHeEIscURBQVMsQ0FBQytCLGVBQUQsRUFBa0IsQ0FBbEIsQ0FBekI7RUFDQSxJQUFNTixPQUFPLEdBQUdELE9BQU8sQ0FBQ2pCLEtBQVIsQ0FBYyxDQUFkLEVBQWlCb0IsR0FBakIsQ0FBaEI7RUFDQSxPQUFPO0lBQ0hQLElBQUksRUFBRSxNQURIO0lBRUhDLElBQUksRUFBRUk7RUFGSCxDQUFQO0FBSUg7QUFFTSxTQUFTUyxVQUFULENBQW9CakIsS0FBcEIsRUFBMkJrQixRQUEzQixFQUFxQzdCLElBQXJDLEVBQTBDO0VBQzdDLElBQU04QixLQUFLLEdBQUcsWUFBZDtFQUNBLElBQU1DLElBQUksR0FBRyxFQUFiO0VBQ0EsSUFBSTNCLEtBQUo7O0VBQ0EsT0FBTSxDQUFDQSxLQUFLLEdBQUcwQixLQUFLLENBQUNFLElBQU4sQ0FBV2hDLElBQVgsQ0FBVCxNQUErQixJQUFyQyxFQUEwQztJQUN0QytCLElBQUksQ0FBQ0osSUFBTCxDQUFVdkIsS0FBSyxDQUFDLENBQUQsQ0FBZjtFQUNIOztFQUNELElBQU02QixnQkFBZ0IsR0FBRyxFQUF6QixDQVA2QyxDQU9oQjs7RUFFN0IseUJBQWtCRixJQUFsQiwyQkFBd0I7SUFBbkIsSUFBTUcsR0FBRyxZQUFUO0lBQ0QsSUFBTUMsT0FBTyxHQUFHTixRQUFRLENBQUNPLFdBQVQsQ0FBcUJGLEdBQXJCLENBQWhCLENBRG9CLENBQ3VCOztJQUR2Qiw0Q0FFQ0MsT0FGRDtJQUFBOztJQUFBO01BRXBCLHVEQUE4QjtRQUFBLElBQW5CVCxNQUFtQjtRQUMxQixJQUFNVyxRQUFRLEdBQUdYLE1BQU0sQ0FBQyxDQUFELENBQXZCOztRQUNBLElBQUksQ0FBQ08sZ0JBQWdCLENBQUNJLFFBQUQsQ0FBckIsRUFBaUM7VUFDN0JKLGdCQUFnQixDQUFDSSxRQUFELENBQWhCLEdBQTZCLENBQTdCO1FBQ0gsQ0FGRCxNQUVPO1VBQ0hKLGdCQUFnQixDQUFDSSxRQUFELENBQWhCO1FBQ0g7TUFDSjtJQVRtQjtNQUFBO0lBQUE7TUFBQTtJQUFBO0VBVXZCOztFQUVELElBQU1aLGVBQWUsR0FBRyxFQUF4Qjs7RUFDQSxLQUFLLElBQU1ZLFNBQVgsSUFBdUJKLGdCQUF2QixFQUF5QztJQUNyQyxJQUFJQSxnQkFBZ0IsQ0FBQ0ksU0FBRCxDQUFoQixLQUErQk4sSUFBSSxDQUFDTyxNQUF4QyxFQUFnRDtNQUM1Q2IsZUFBZSxDQUFDRSxJQUFoQixDQUFxQmhCLEtBQUssQ0FBQ00sR0FBTixDQUFVb0IsU0FBVixDQUFyQjtJQUNIO0VBQ0o7O0VBRURFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZixlQUFaO0VBQ0EsT0FBTztJQUNIWCxJQUFJLEVBQUUsTUFESDtJQUVIQyxJQUFJLEVBQUVVO0VBRkgsQ0FBUDtBQUlIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zY3JpcHRzL3NlYXJjaFNjcmlwdHMuanM/NWRhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWlja1NvcnQgfSBmcm9tIFwiLi9xdWlja1NvcnRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW5TZWFyY2goc2VhcmNoKSB7XHJcbiAgICBjb25zdCBwYXJ0cyA9IHNlYXJjaC5zcGxpdCgnICcpO1xyXG4gICAgY29uc3QgcHJlZml4ID0gcGFydHNbMF07XHJcbiAgICBsZXQgZGF0YSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJyAnKTtcclxuICAgIGNvbnN0IG51bWJlck1hdGNoID0gcHJlZml4Lm1hdGNoKC9cXGQrLyk7XHJcbiAgICBpZihudW1iZXJNYXRjaCl7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBudW1iZXJNYXRjaC5pbmRleDtcclxuICAgICAgICBjb25zdCB3b3JkID0gcHJlZml4LnN1YnN0cmluZygwLCBpbmRleCk7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gcGFyc2VJbnQobnVtYmVyTWF0Y2hbMF0pO1xyXG4gICAgICAgIHJldHVybiBbW3dvcmQsIG51bWJlcl0sIGRhdGFdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtwcmVmaXgsIGRhdGFdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGxheWVycyh0YWJsZSwgZGF0YSl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0YWJsZS5zZWFyY2hCeU5hbWUoZGF0YSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6ICdQbGF5ZXJzJyxcclxuICAgICAgICBsaXN0OiByZXN1bHRcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hVc2Vycyh0YWJsZSwgZGF0YSl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0YWJsZS5nZXQoZGF0YSk7XHJcbiAgICBjb25zdCBvcmRlbmVkID0gcXVpY2tTb3J0KHJlc3VsdCwgNCk7XHJcbiAgICBjb25zdCBsaW1pdGVkID0gb3JkZW5lZC5zbGljZSgwLCAyMCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6ICdVc2VycycsXHJcbiAgICAgICAgbGlzdDogbGltaXRlZFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFRvcHModGFibGUsIG51bSwgZGF0YSl7XHJcbiAgICBjb25zdCBjbGVhbmVkID0gZGF0YS5yZXBsYWNlKC8nL2csICcnKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRhYmxlLnNlYXJjaEJ5UG9zaXRpb24oY2xlYW5lZCk7XHJcbiAgICBjb25zdCBtYXRjaGluZ1BsYXllcnMgPSBbXTtcclxuICAgIGZvcihjb25zdCBwbGF5ZXIgb2YgcmVzdWx0KXtcclxuICAgICAgICBpZihwbGF5ZXJbNF0gPj0gMTAwMCl7XHJcbiAgICAgICAgICAgIG1hdGNoaW5nUGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3JkZW5lZCA9IHF1aWNrU29ydChtYXRjaGluZ1BsYXllcnMsIDMpO1xyXG4gICAgY29uc3QgbGltaXRlZCA9IG9yZGVuZWQuc2xpY2UoMCwgbnVtKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogJ1RvcHMnLFxyXG4gICAgICAgIGxpc3Q6IGxpbWl0ZWRcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hUYWdzKHRhYmxlLCB0YWdUYWJsZSwgZGF0YSl7XHJcbiAgICBjb25zdCByZWdleCA9IC8nKFteJ10rKScvZztcclxuICAgIGNvbnN0IHRhZ3MgPSBbXTtcclxuICAgIGxldCBtYXRjaDtcclxuICAgIHdoaWxlKChtYXRjaCA9IHJlZ2V4LmV4ZWMoZGF0YSkpICE9PSBudWxsKXtcclxuICAgICAgICB0YWdzLnB1c2gobWF0Y2hbMV0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGxheWVyQ291bnRCeVRhZyA9IHt9OyAvLyBPYmpldG8gcGFyYSByYXN0cmVhciBhIGNvbnRhZ2VtIGRlIGpvZ2Fkb3JlcyBwb3IgdGFnXHJcblxyXG4gICAgZm9yIChjb25zdCB0YWcgb2YgdGFncykge1xyXG4gICAgICAgIGNvbnN0IHBsYXllcnMgPSB0YWdUYWJsZS5zZWFyY2hCeVRhZyh0YWcpOyAvLyBNb2RpZmlxdWUgcGFyYSBhIHN1YSBsw7NnaWNhIGRlIGJ1c2NhIHBvciB0YWdcclxuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBwbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcklkID0gcGxheWVyWzBdO1xyXG4gICAgICAgICAgICBpZiAoIXBsYXllckNvdW50QnlUYWdbcGxheWVySWRdKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJDb3VudEJ5VGFnW3BsYXllcklkXSA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJDb3VudEJ5VGFnW3BsYXllcklkXSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1hdGNoaW5nUGxheWVycyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBwbGF5ZXJJZCBpbiBwbGF5ZXJDb3VudEJ5VGFnKSB7XHJcbiAgICAgICAgaWYgKHBsYXllckNvdW50QnlUYWdbcGxheWVySWRdID09PSB0YWdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtYXRjaGluZ1BsYXllcnMucHVzaCh0YWJsZS5nZXQocGxheWVySWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cobWF0Y2hpbmdQbGF5ZXJzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogJ1RhZ3MnLFxyXG4gICAgICAgIGxpc3Q6IG1hdGNoaW5nUGxheWVyc1xyXG4gICAgfTtcclxufSJdLCJuYW1lcyI6WyJxdWlja1NvcnQiLCJydW5TZWFyY2giLCJzZWFyY2giLCJwYXJ0cyIsInNwbGl0IiwicHJlZml4IiwiZGF0YSIsInNsaWNlIiwiam9pbiIsIm51bWJlck1hdGNoIiwibWF0Y2giLCJpbmRleCIsIndvcmQiLCJzdWJzdHJpbmciLCJudW1iZXIiLCJwYXJzZUludCIsInNlYXJjaFBsYXllcnMiLCJ0YWJsZSIsInJlc3VsdCIsInNlYXJjaEJ5TmFtZSIsIm5hbWUiLCJsaXN0Iiwic2VhcmNoVXNlcnMiLCJnZXQiLCJvcmRlbmVkIiwibGltaXRlZCIsInNlYXJjaFRvcHMiLCJudW0iLCJjbGVhbmVkIiwicmVwbGFjZSIsInNlYXJjaEJ5UG9zaXRpb24iLCJtYXRjaGluZ1BsYXllcnMiLCJwbGF5ZXIiLCJwdXNoIiwic2VhcmNoVGFncyIsInRhZ1RhYmxlIiwicmVnZXgiLCJ0YWdzIiwiZXhlYyIsInBsYXllckNvdW50QnlUYWciLCJ0YWciLCJwbGF5ZXJzIiwic2VhcmNoQnlUYWciLCJwbGF5ZXJJZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/searchScripts.js\n"));

/***/ })

});