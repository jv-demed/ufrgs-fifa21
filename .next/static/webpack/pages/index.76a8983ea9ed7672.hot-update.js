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

/***/ "./src/scripts/csvScripts.js":
/*!***********************************!*\
  !*** ./src/scripts/csvScripts.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   csvToHashTable: function() { return /* binding */ csvToHashTable; }\n/* harmony export */ });\n/* harmony import */ var _hashTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashTable */ \"./src/scripts/hashTable.js\");\n\nfunction csvToHashTable(name, file, setTable, setIsLoading, setTime) {\n  var startTime = new Date().getTime();\n  var table = new _hashTable__WEBPACK_IMPORTED_MODULE_0__.HashTable(name, 15000);\n  var reader = new FileReader();\n  setIsLoading(true);\n\n  reader.onload = function (e) {\n    ;\n    var lines = defaultLines(e.target.result);\n    lines.forEach(function (line) {\n      var values = getValues(line);\n\n      if (name == 'Jogadores') {\n        table.insert(values[0], [values[1], values[2]]);\n      } else if (name == 'Avaliações') {\n        var key = values[1];\n\n        if (table.contains(key)) {\n          var existingValues = table.get(key);\n          existingValues.push([values[0], values[2]]);\n        } else {\n          table.insert(key, [[values[0], values[2]]]);\n        }\n      }\n    });\n    setTable(table);\n    setIsLoading(false);\n    var endTime = new Date().getTime();\n    setTime(function (prevTime) {\n      return prevTime + (endTime - startTime);\n    });\n  };\n\n  reader.readAsText(file);\n}\n\nfunction getValues(line) {\n  var values = [];\n  var currentValue = '';\n  var withinQuotes = false;\n\n  for (var j = 0; j < line.length; j++) {\n    var _char = line[j];\n\n    if (_char === '\"' && (line[j - 1] === ',' || j === 0)) {\n      withinQuotes = true;\n    } else if (_char === '\"' && withinQuotes) {\n      withinQuotes = false;\n    } else if (_char === ',' && !withinQuotes) {\n      values.push(currentValue.trim());\n      currentValue = '';\n    } else {\n      currentValue += _char;\n    }\n  }\n\n  values.push(currentValue.trim());\n  return values;\n}\n\nfunction defaultLines(result) {\n  var lines = result.split('\\n');\n  lines.shift();\n  lines.pop();\n  return lines;\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0M7TUFDbENBLFlBQVksR0FBRyxLQUFmO0lBQ0gsQ0FGSyxNQUVBLElBQUdHLEtBQUksS0FBSyxHQUFULElBQWdCLENBQUNILFlBQXBCLEVBQWlDO01BQ25DWixNQUFNLENBQUNPLElBQVAsQ0FBWUksWUFBWSxDQUFDSyxJQUFiLEVBQVo7TUFDQUwsWUFBWSxHQUFHLEVBQWY7SUFDSCxDQUhLLE1BR0Q7TUFDREEsWUFBWSxJQUFJSSxLQUFoQjtJQUNIO0VBQ0o7O0VBQ0RmLE1BQU0sQ0FBQ08sSUFBUCxDQUFZSSxZQUFZLENBQUNLLElBQWIsRUFBWjtFQUNBLE9BQU9oQixNQUFQO0FBQ0g7O0FBRUQsU0FBU0wsWUFBVCxDQUFzQkUsTUFBdEIsRUFBNkI7RUFDekIsSUFBTUgsS0FBSyxHQUFHRyxNQUFNLENBQUNvQixLQUFQLENBQWEsSUFBYixDQUFkO0VBQ0F2QixLQUFLLENBQUN3QixLQUFOO0VBQ0F4QixLQUFLLENBQUN5QixHQUFOO0VBQ0EsT0FBT3pCLEtBQVA7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2NyaXB0cy9jc3ZTY3JpcHRzLmpzP2ZlYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzaFRhYmxlIH0gZnJvbSBcIi4vaGFzaFRhYmxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3N2VG9IYXNoVGFibGUobmFtZSwgZmlsZSwgc2V0VGFibGUsIHNldElzTG9hZGluZywgc2V0VGltZSl7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRhYmxlID0gbmV3IEhhc2hUYWJsZShuYW1lLCAxNTAwMCk7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7O1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gZGVmYXVsdExpbmVzKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgbGluZXMuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gZ2V0VmFsdWVzKGxpbmUpO1xyXG4gICAgICAgICAgICBpZihuYW1lID09ICdKb2dhZG9yZXMnKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmluc2VydCh2YWx1ZXNbMF0sIFt2YWx1ZXNbMV0sIHZhbHVlc1syXV0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihuYW1lID09ICdBdmFsaWHDp8O1ZXMnKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHZhbHVlc1sxXTtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJsZS5jb250YWlucyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdWYWx1ZXMgPSB0YWJsZS5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1ZhbHVlcy5wdXNoKFt2YWx1ZXNbMF0sIHZhbHVlc1syXV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5pbnNlcnQoa2V5LCBbW3ZhbHVlc1swXSwgdmFsdWVzWzJdXV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGFibGUodGFibGUpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHNldFRpbWUocHJldlRpbWUgPT4gcHJldlRpbWUgKyAoZW5kVGltZSAtIHN0YXJ0VGltZSkpO1xyXG4gICAgfTtcclxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXMobGluZSl7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuICAgIGxldCBjdXJyZW50VmFsdWUgPSAnJztcclxuICAgIGxldCB3aXRoaW5RdW90ZXMgPSBmYWxzZTtcclxuICAgIGZvcihsZXQgaiA9IDA7IGogPCBsaW5lLmxlbmd0aDsgaisrKXtcclxuICAgICAgICBjb25zdCBjaGFyID0gbGluZVtqXTtcclxuICAgICAgICBpZihjaGFyID09PSAnXCInICYmIChsaW5lW2ogLSAxXSA9PT0gJywnIHx8IGogPT09IDApKXtcclxuICAgICAgICAgICAgd2l0aGluUXVvdGVzID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZSBpZihjaGFyID09PSAnXCInICYmIHdpdGhpblF1b3Rlcyl7XHJcbiAgICAgICAgICAgIHdpdGhpblF1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKGNoYXIgPT09ICcsJyAmJiAhd2l0aGluUXVvdGVzKXtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2goY3VycmVudFZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gY2hhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YWx1ZXMucHVzaChjdXJyZW50VmFsdWUudHJpbSgpKTtcclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRMaW5lcyhyZXN1bHQpe1xyXG4gICAgY29uc3QgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xyXG4gICAgbGluZXMuc2hpZnQoKTtcclxuICAgIGxpbmVzLnBvcCgpO1xyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG59Il0sIm5hbWVzIjpbIkhhc2hUYWJsZSIsImNzdlRvSGFzaFRhYmxlIiwibmFtZSIsImZpbGUiLCJzZXRUYWJsZSIsInNldElzTG9hZGluZyIsInNldFRpbWUiLCJzdGFydFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRhYmxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJsaW5lcyIsImRlZmF1bHRMaW5lcyIsInRhcmdldCIsInJlc3VsdCIsImZvckVhY2giLCJsaW5lIiwidmFsdWVzIiwiZ2V0VmFsdWVzIiwiaW5zZXJ0Iiwia2V5IiwiY29udGFpbnMiLCJleGlzdGluZ1ZhbHVlcyIsImdldCIsInB1c2giLCJlbmRUaW1lIiwicHJldlRpbWUiLCJyZWFkQXNUZXh0IiwiY3VycmVudFZhbHVlIiwid2l0aGluUXVvdGVzIiwiaiIsImxlbmd0aCIsImNoYXIiLCJ0cmltIiwic3BsaXQiLCJzaGlmdCIsInBvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/csvScripts.js\n"));

/***/ })

});