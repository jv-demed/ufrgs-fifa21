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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   csvToHashTable: function() { return /* binding */ csvToHashTable; }\n/* harmony export */ });\n/* harmony import */ var _hashTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashTable */ \"./src/scripts/hashTable.js\");\n\nfunction csvToHashTable(name, file, setTable) {\n  var table = new _hashTable__WEBPACK_IMPORTED_MODULE_0__.HashTable(name, 10000);\n  var reader = new FileReader();\n\n  reader.onload = function (e) {\n    ;\n    var lines = defaultLines(e.target.result);\n    lines.forEach(function (line) {\n      var values = [];\n      var currentValue = '';\n      var withinQuotes = false;\n\n      for (var j = 0; j < line.length; j++) {\n        var _char = line[j];\n\n        if (_char === '\"' && (line[j - 1] === ',' || j === 0)) {\n          withinQuotes = true;\n        } else if (_char === '\"' && withinQuotes) {\n          withinQuotes = false;\n        } else if (_char === ',' && !withinQuotes) {\n          values.push(currentValue.trim());\n          currentValue = '';\n        } else {\n          currentValue += _char;\n        }\n      }\n\n      values.push(currentValue.trim());\n      var id = values[0];\n      table.insert(id, values);\n    });\n    setTable(table);\n  };\n\n  reader.readAsText(file);\n}\n\nfunction defaultLines(result) {\n  var lines = result.split('\\n');\n  lines.shift();\n  lines.pop();\n  return lines;\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jc3ZTY3JpcHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFTyxTQUFTQyxjQUFULENBQXdCQyxJQUF4QixFQUE4QkMsSUFBOUIsRUFBb0NDLFFBQXBDLEVBQTZDO0VBQ2hELElBQU1DLEtBQUssR0FBRyxJQUFJTCxpREFBSixDQUFjRSxJQUFkLEVBQW9CLEtBQXBCLENBQWQ7RUFDQSxJQUFNSSxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmOztFQUNBRCxNQUFNLENBQUNFLE1BQVAsR0FBZ0IsVUFBQ0MsQ0FBRCxFQUFPO0lBQUM7SUFDcEIsSUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxNQUFWLENBQTFCO0lBQ0FILEtBQUssQ0FBQ0ksT0FBTixDQUFjLFVBQUFDLElBQUksRUFBSTtNQUNsQixJQUFNQyxNQUFNLEdBQUcsRUFBZjtNQUNBLElBQUlDLFlBQVksR0FBRyxFQUFuQjtNQUNBLElBQUlDLFlBQVksR0FBRyxLQUFuQjs7TUFDQSxLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0osSUFBSSxDQUFDSyxNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFvQztRQUNoQyxJQUFNRSxLQUFJLEdBQUdOLElBQUksQ0FBQ0ksQ0FBRCxDQUFqQjs7UUFDQSxJQUFHRSxLQUFJLEtBQUssR0FBVCxLQUFpQk4sSUFBSSxDQUFDSSxDQUFDLEdBQUcsQ0FBTCxDQUFKLEtBQWdCLEdBQWhCLElBQXVCQSxDQUFDLEtBQUssQ0FBOUMsQ0FBSCxFQUFvRDtVQUNoREQsWUFBWSxHQUFHLElBQWY7UUFDSCxDQUZELE1BRU0sSUFBR0csS0FBSSxLQUFLLEdBQVQsSUFBZ0JILFlBQW5CLEVBQWdDO1VBQ2xDQSxZQUFZLEdBQUcsS0FBZjtRQUNILENBRkssTUFFQSxJQUFHRyxLQUFJLEtBQUssR0FBVCxJQUFnQixDQUFDSCxZQUFwQixFQUFpQztVQUNuQ0YsTUFBTSxDQUFDTSxJQUFQLENBQVlMLFlBQVksQ0FBQ00sSUFBYixFQUFaO1VBQ0FOLFlBQVksR0FBRyxFQUFmO1FBQ0gsQ0FISyxNQUdEO1VBQ0RBLFlBQVksSUFBSUksS0FBaEI7UUFDSDtNQUNKOztNQUNETCxNQUFNLENBQUNNLElBQVAsQ0FBWUwsWUFBWSxDQUFDTSxJQUFiLEVBQVo7TUFDQSxJQUFNQyxFQUFFLEdBQUdSLE1BQU0sQ0FBQyxDQUFELENBQWpCO01BQ0FYLEtBQUssQ0FBQ29CLE1BQU4sQ0FBYUQsRUFBYixFQUFpQlIsTUFBakI7SUFDSCxDQXBCRDtJQXFCQVosUUFBUSxDQUFDQyxLQUFELENBQVI7RUFDSCxDQXhCRDs7RUF5QkFDLE1BQU0sQ0FBQ29CLFVBQVAsQ0FBa0J2QixJQUFsQjtBQUNIOztBQUVELFNBQVNRLFlBQVQsQ0FBc0JFLE1BQXRCLEVBQTZCO0VBQ3pCLElBQU1ILEtBQUssR0FBR0csTUFBTSxDQUFDYyxLQUFQLENBQWEsSUFBYixDQUFkO0VBQ0FqQixLQUFLLENBQUNrQixLQUFOO0VBQ0FsQixLQUFLLENBQUNtQixHQUFOO0VBQ0EsT0FBT25CLEtBQVA7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2NyaXB0cy9jc3ZTY3JpcHRzLmpzP2ZlYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzaFRhYmxlIH0gZnJvbSBcIi4vaGFzaFRhYmxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3N2VG9IYXNoVGFibGUobmFtZSwgZmlsZSwgc2V0VGFibGUpe1xyXG4gICAgY29uc3QgdGFibGUgPSBuZXcgSGFzaFRhYmxlKG5hbWUsIDEwMDAwKTtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHs7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBkZWZhdWx0TGluZXMoZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICBsaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgd2l0aGluUXVvdGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBsaW5lLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBsaW5lW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hhciA9PT0gJ1wiJyAmJiAobGluZVtqIC0gMV0gPT09ICcsJyB8fCBqID09PSAwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aGluUXVvdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGNoYXIgPT09ICdcIicgJiYgd2l0aGluUXVvdGVzKXtcclxuICAgICAgICAgICAgICAgICAgICB3aXRoaW5RdW90ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGNoYXIgPT09ICcsJyAmJiAhd2l0aGluUXVvdGVzKXtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChjdXJyZW50VmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKGN1cnJlbnRWYWx1ZS50cmltKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHZhbHVlc1swXTtcclxuICAgICAgICAgICAgdGFibGUuaW5zZXJ0KGlkLCB2YWx1ZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRhYmxlKHRhYmxlKTtcclxuICAgIH07XHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVmYXVsdExpbmVzKHJlc3VsdCl7XHJcbiAgICBjb25zdCBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XHJcbiAgICBsaW5lcy5zaGlmdCgpO1xyXG4gICAgbGluZXMucG9wKCk7XHJcbiAgICByZXR1cm4gbGluZXM7XHJcbn0iXSwibmFtZXMiOlsiSGFzaFRhYmxlIiwiY3N2VG9IYXNoVGFibGUiLCJuYW1lIiwiZmlsZSIsInNldFRhYmxlIiwidGFibGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImxpbmVzIiwiZGVmYXVsdExpbmVzIiwidGFyZ2V0IiwicmVzdWx0IiwiZm9yRWFjaCIsImxpbmUiLCJ2YWx1ZXMiLCJjdXJyZW50VmFsdWUiLCJ3aXRoaW5RdW90ZXMiLCJqIiwibGVuZ3RoIiwiY2hhciIsInB1c2giLCJ0cmltIiwiaWQiLCJpbnNlcnQiLCJyZWFkQXNUZXh0Iiwic3BsaXQiLCJzaGlmdCIsInBvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/csvScripts.js\n"));

/***/ })

});