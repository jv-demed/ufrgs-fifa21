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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   csvToHashTable: function() { return /* binding */ csvToHashTable; }\n/* harmony export */ });\n/* harmony import */ var _hashTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashTable */ \"./src/scripts/hashTable.js\");\n\nfunction csvToHashTable(name, size, file, setTable, setIsLoading, setTime) {\n  var startTime = new Date().getTime();\n  var reader = new FileReader();\n  setIsLoading(true);\n\n  reader.onload = function (e) {\n    ;\n    var lines = defaultLines(e.target.result);\n    console.log(lines.length);\n    var table = new _hashTable__WEBPACK_IMPORTED_MODULE_0__.HashTable(name, size);\n    lines.forEach(function (line) {\n      var values = getValues(line);\n\n      if (name == 'Jogadores') {\n        table.insert(values[0], [values[1], values[2]]);\n      } else if (name == 'Avaliações') {\n        var key = values[1];\n\n        if (table.contains(key)) {\n          var existingValues = table.get(key);\n          existingValues.push([values[0], values[2]]);\n        } else {\n          table.insert(key, [[values[0], values[2]]]);\n        }\n      }\n    });\n    setTable(table);\n    setIsLoading(false);\n    var endTime = new Date().getTime();\n    setTime(function (prevTime) {\n      return prevTime + (endTime - startTime);\n    });\n  };\n\n  reader.readAsText(file);\n}\n\nfunction getValues(line) {\n  var values = [];\n  var currentValue = '';\n  var withinQuotes = false;\n\n  for (var j = 0; j < line.length; j++) {\n    var _char = line[j];\n\n    if (_char === '\"' && (line[j - 1] === ',' || j === 0)) {\n      withinQuotes = true;\n    } else if (_char === '\"' && withinQuotes) {\n      withinQuotes = false;\n    } else if (_char === ',' && !withinQuotes) {\n      values.push(currentValue.trim());\n      currentValue = '';\n    } else {\n      currentValue += _char;\n    }\n  }\n\n  values.push(currentValue.trim());\n  return values;\n}\n\nfunction defaultLines(result) {\n  var lines = result.split('\\n');\n  lines.shift();\n  lines.pop();\n  return lines;\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsSUFBZjtJQUNILENBRkQsTUFFTSxJQUFHRSxLQUFJLEtBQUssR0FBVCxJQUFnQkYsWUFBbkIsRUFBZ0M7TUFDbENBLFlBQVksR0FBRyxLQUFmO0lBQ0gsQ0FGSyxNQUVBLElBQUdFLEtBQUksS0FBSyxHQUFULElBQWdCLENBQUNGLFlBQXBCLEVBQWlDO01BQ25DWixNQUFNLENBQUNPLElBQVAsQ0FBWUksWUFBWSxDQUFDSSxJQUFiLEVBQVo7TUFDQUosWUFBWSxHQUFHLEVBQWY7SUFDSCxDQUhLLE1BR0Q7TUFDREEsWUFBWSxJQUFJRyxLQUFoQjtJQUNIO0VBQ0o7O0VBQ0RkLE1BQU0sQ0FBQ08sSUFBUCxDQUFZSSxZQUFZLENBQUNJLElBQWIsRUFBWjtFQUNBLE9BQU9mLE1BQVA7QUFDSDs7QUFFRCxTQUFTVCxZQUFULENBQXNCRSxNQUF0QixFQUE2QjtFQUN6QixJQUFNSCxLQUFLLEdBQUdHLE1BQU0sQ0FBQ3VCLEtBQVAsQ0FBYSxJQUFiLENBQWQ7RUFDQTFCLEtBQUssQ0FBQzJCLEtBQU47RUFDQTNCLEtBQUssQ0FBQzRCLEdBQU47RUFDQSxPQUFPNUIsS0FBUDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zY3JpcHRzL2NzdlNjcmlwdHMuanM/ZmVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYXNoVGFibGUgfSBmcm9tIFwiLi9oYXNoVGFibGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjc3ZUb0hhc2hUYWJsZShuYW1lLCBzaXplLCBmaWxlLCBzZXRUYWJsZSwgc2V0SXNMb2FkaW5nLCBzZXRUaW1lKXtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4geztcclxuICAgICAgICBjb25zdCBsaW5lcyA9IGRlZmF1bHRMaW5lcyhlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxpbmVzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBuZXcgSGFzaFRhYmxlKG5hbWUsIHNpemUpO1xyXG4gICAgICAgIGxpbmVzLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGdldFZhbHVlcyhsaW5lKTtcclxuICAgICAgICAgICAgaWYobmFtZSA9PSAnSm9nYWRvcmVzJyl7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5pbnNlcnQodmFsdWVzWzBdLCBbdmFsdWVzWzFdLCB2YWx1ZXNbMl1dKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYobmFtZSA9PSAnQXZhbGlhw6fDtWVzJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSB2YWx1ZXNbMV07XHJcbiAgICAgICAgICAgICAgICBpZih0YWJsZS5jb250YWlucyhrZXkpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1ZhbHVlcyA9IHRhYmxlLmdldChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVmFsdWVzLnB1c2goW3ZhbHVlc1swXSwgdmFsdWVzWzJdXSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5pbnNlcnQoa2V5LCBbW3ZhbHVlc1swXSwgdmFsdWVzWzJdXV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGFibGUodGFibGUpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHNldFRpbWUocHJldlRpbWUgPT4gcHJldlRpbWUgKyAoZW5kVGltZSAtIHN0YXJ0VGltZSkpO1xyXG4gICAgfTtcclxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXMobGluZSl7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuICAgIGxldCBjdXJyZW50VmFsdWUgPSAnJztcclxuICAgIGxldCB3aXRoaW5RdW90ZXMgPSBmYWxzZTtcclxuICAgIGZvcihsZXQgaiA9IDA7IGogPCBsaW5lLmxlbmd0aDsgaisrKXtcclxuICAgICAgICBjb25zdCBjaGFyID0gbGluZVtqXTtcclxuICAgICAgICBpZihjaGFyID09PSAnXCInICYmIChsaW5lW2ogLSAxXSA9PT0gJywnIHx8IGogPT09IDApKXtcclxuICAgICAgICAgICAgd2l0aGluUXVvdGVzID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZSBpZihjaGFyID09PSAnXCInICYmIHdpdGhpblF1b3Rlcyl7XHJcbiAgICAgICAgICAgIHdpdGhpblF1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKGNoYXIgPT09ICcsJyAmJiAhd2l0aGluUXVvdGVzKXtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2goY3VycmVudFZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gY2hhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YWx1ZXMucHVzaChjdXJyZW50VmFsdWUudHJpbSgpKTtcclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRMaW5lcyhyZXN1bHQpe1xyXG4gICAgY29uc3QgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xyXG4gICAgbGluZXMuc2hpZnQoKTtcclxuICAgIGxpbmVzLnBvcCgpO1xyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG59Il0sIm5hbWVzIjpbIkhhc2hUYWJsZSIsImNzdlRvSGFzaFRhYmxlIiwibmFtZSIsInNpemUiLCJmaWxlIiwic2V0VGFibGUiLCJzZXRJc0xvYWRpbmciLCJzZXRUaW1lIiwic3RhcnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImxpbmVzIiwiZGVmYXVsdExpbmVzIiwidGFyZ2V0IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInRhYmxlIiwiZm9yRWFjaCIsImxpbmUiLCJ2YWx1ZXMiLCJnZXRWYWx1ZXMiLCJpbnNlcnQiLCJrZXkiLCJjb250YWlucyIsImV4aXN0aW5nVmFsdWVzIiwiZ2V0IiwicHVzaCIsImVuZFRpbWUiLCJwcmV2VGltZSIsInJlYWRBc1RleHQiLCJjdXJyZW50VmFsdWUiLCJ3aXRoaW5RdW90ZXMiLCJqIiwiY2hhciIsInRyaW0iLCJzcGxpdCIsInNoaWZ0IiwicG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/csvScripts.js\n"));

/***/ })

});