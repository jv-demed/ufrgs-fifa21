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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   csvToHashTable: function() { return /* binding */ csvToHashTable; }\n/* harmony export */ });\n/* harmony import */ var _hashTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashTable */ \"./src/scripts/hashTable.js\");\n\nfunction csvToHashTable(name, file, setTable) {\n  var table = new _hashTable__WEBPACK_IMPORTED_MODULE_0__.HashTable(name, 10000);\n  var reader = new FileReader();\n\n  reader.onload = function (e) {\n    ;\n    var lines = defaultLines(e.target.result);\n    lines.forEach(function (line) {\n      var values = getPlayer(line);\n      var id = values[0];\n      table.insert(id, values);\n    });\n    setTable(table);\n  };\n\n  reader.readAsText(file);\n}\n\nfunction getPlayer(line) {\n  var values = [];\n  var currentValue = '';\n  var withinQuotes = false;\n\n  for (var j = 0; j < line.length; j++) {\n    var _char = line[j];\n\n    if (_char === '\"' && (line[j - 1] === ',' || j === 0)) {\n      withinQuotes = true;\n    } else if (_char === '\"' && withinQuotes) {\n      withinQuotes = false;\n    } else if (_char === ',' && !withinQuotes) {\n      values.push(currentValue.trim());\n      currentValue = '';\n    } else {\n      currentValue += _char;\n    }\n  }\n\n  values.push(currentValue.trim());\n  console.log(values);\n  return values;\n}\n\nfunction defaultLines(result) {\n  var lines = result.split('\\n');\n  lines.shift();\n  lines.pop();\n  return lines;\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jc3ZTY3JpcHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFTyxTQUFTQyxjQUFULENBQXdCQyxJQUF4QixFQUE4QkMsSUFBOUIsRUFBb0NDLFFBQXBDLEVBQTZDO0VBQ2hELElBQU1DLEtBQUssR0FBRyxJQUFJTCxpREFBSixDQUFjRSxJQUFkLEVBQW9CLEtBQXBCLENBQWQ7RUFDQSxJQUFNSSxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmOztFQUNBRCxNQUFNLENBQUNFLE1BQVAsR0FBZ0IsVUFBQ0MsQ0FBRCxFQUFPO0lBQUM7SUFDcEIsSUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxNQUFWLENBQTFCO0lBQ0FILEtBQUssQ0FBQ0ksT0FBTixDQUFjLFVBQUFDLElBQUksRUFBSTtNQUNsQixJQUFNQyxNQUFNLEdBQUdDLFNBQVMsQ0FBQ0YsSUFBRCxDQUF4QjtNQUNBLElBQU1HLEVBQUUsR0FBR0YsTUFBTSxDQUFDLENBQUQsQ0FBakI7TUFDQVgsS0FBSyxDQUFDYyxNQUFOLENBQWFELEVBQWIsRUFBaUJGLE1BQWpCO0lBQ0gsQ0FKRDtJQUtBWixRQUFRLENBQUNDLEtBQUQsQ0FBUjtFQUNILENBUkQ7O0VBU0FDLE1BQU0sQ0FBQ2MsVUFBUCxDQUFrQmpCLElBQWxCO0FBQ0g7O0FBRUQsU0FBU2MsU0FBVCxDQUFtQkYsSUFBbkIsRUFBd0I7RUFDcEIsSUFBTUMsTUFBTSxHQUFHLEVBQWY7RUFDQSxJQUFJSyxZQUFZLEdBQUcsRUFBbkI7RUFDQSxJQUFJQyxZQUFZLEdBQUcsS0FBbkI7O0VBQ0EsS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdSLElBQUksQ0FBQ1MsTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBb0M7SUFDaEMsSUFBTUUsS0FBSSxHQUFHVixJQUFJLENBQUNRLENBQUQsQ0FBakI7O0lBQ0EsSUFBR0UsS0FBSSxLQUFLLEdBQVQsS0FBaUJWLElBQUksQ0FBQ1EsQ0FBQyxHQUFHLENBQUwsQ0FBSixLQUFnQixHQUFoQixJQUF1QkEsQ0FBQyxLQUFLLENBQTlDLENBQUgsRUFBb0Q7TUFDaERELFlBQVksR0FBRyxJQUFmO0lBQ0gsQ0FGRCxNQUVNLElBQUdHLEtBQUksS0FBSyxHQUFULElBQWdCSCxZQUFuQixFQUFnQztNQUNsQ0EsWUFBWSxHQUFHLEtBQWY7SUFDSCxDQUZLLE1BRUEsSUFBR0csS0FBSSxLQUFLLEdBQVQsSUFBZ0IsQ0FBQ0gsWUFBcEIsRUFBaUM7TUFDbkNOLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZTCxZQUFZLENBQUNNLElBQWIsRUFBWjtNQUNBTixZQUFZLEdBQUcsRUFBZjtJQUNILENBSEssTUFHRDtNQUNEQSxZQUFZLElBQUlJLEtBQWhCO0lBQ0g7RUFDSjs7RUFDRFQsTUFBTSxDQUFDVSxJQUFQLENBQVlMLFlBQVksQ0FBQ00sSUFBYixFQUFaO0VBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixNQUFaO0VBQ0EsT0FBT0EsTUFBUDtBQUNIOztBQUVELFNBQVNMLFlBQVQsQ0FBc0JFLE1BQXRCLEVBQTZCO0VBQ3pCLElBQU1ILEtBQUssR0FBR0csTUFBTSxDQUFDaUIsS0FBUCxDQUFhLElBQWIsQ0FBZDtFQUNBcEIsS0FBSyxDQUFDcUIsS0FBTjtFQUNBckIsS0FBSyxDQUFDc0IsR0FBTjtFQUNBLE9BQU90QixLQUFQO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmlwdHMvY3N2U2NyaXB0cy5qcz9mZWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc2hUYWJsZSB9IGZyb20gXCIuL2hhc2hUYWJsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNzdlRvSGFzaFRhYmxlKG5hbWUsIGZpbGUsIHNldFRhYmxlKXtcclxuICAgIGNvbnN0IHRhYmxlID0gbmV3IEhhc2hUYWJsZShuYW1lLCAxMDAwMCk7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7O1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gZGVmYXVsdExpbmVzKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgbGluZXMuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gZ2V0UGxheWVyKGxpbmUpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHZhbHVlc1swXTtcclxuICAgICAgICAgICAgdGFibGUuaW5zZXJ0KGlkLCB2YWx1ZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRhYmxlKHRhYmxlKTtcclxuICAgIH07XHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGxheWVyKGxpbmUpe1xyXG4gICAgY29uc3QgdmFsdWVzID0gW107XHJcbiAgICBsZXQgY3VycmVudFZhbHVlID0gJyc7XHJcbiAgICBsZXQgd2l0aGluUXVvdGVzID0gZmFsc2U7XHJcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgbGluZS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgY29uc3QgY2hhciA9IGxpbmVbal07XHJcbiAgICAgICAgaWYoY2hhciA9PT0gJ1wiJyAmJiAobGluZVtqIC0gMV0gPT09ICcsJyB8fCBqID09PSAwKSl7XHJcbiAgICAgICAgICAgIHdpdGhpblF1b3RlcyA9IHRydWU7XHJcbiAgICAgICAgfWVsc2UgaWYoY2hhciA9PT0gJ1wiJyAmJiB3aXRoaW5RdW90ZXMpe1xyXG4gICAgICAgICAgICB3aXRoaW5RdW90ZXMgPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZihjaGFyID09PSAnLCcgJiYgIXdpdGhpblF1b3Rlcyl7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKGN1cnJlbnRWYWx1ZS50cmltKCkpO1xyXG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgPSAnJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGNoYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFsdWVzLnB1c2goY3VycmVudFZhbHVlLnRyaW0oKSk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgcmV0dXJuIHZhbHVlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZGVmYXVsdExpbmVzKHJlc3VsdCl7XHJcbiAgICBjb25zdCBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XHJcbiAgICBsaW5lcy5zaGlmdCgpO1xyXG4gICAgbGluZXMucG9wKCk7XHJcbiAgICByZXR1cm4gbGluZXM7XHJcbn0iXSwibmFtZXMiOlsiSGFzaFRhYmxlIiwiY3N2VG9IYXNoVGFibGUiLCJuYW1lIiwiZmlsZSIsInNldFRhYmxlIiwidGFibGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImxpbmVzIiwiZGVmYXVsdExpbmVzIiwidGFyZ2V0IiwicmVzdWx0IiwiZm9yRWFjaCIsImxpbmUiLCJ2YWx1ZXMiLCJnZXRQbGF5ZXIiLCJpZCIsImluc2VydCIsInJlYWRBc1RleHQiLCJjdXJyZW50VmFsdWUiLCJ3aXRoaW5RdW90ZXMiLCJqIiwibGVuZ3RoIiwiY2hhciIsInB1c2giLCJ0cmltIiwiY29uc29sZSIsImxvZyIsInNwbGl0Iiwic2hpZnQiLCJwb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/csvScripts.js\n"));

/***/ })

});