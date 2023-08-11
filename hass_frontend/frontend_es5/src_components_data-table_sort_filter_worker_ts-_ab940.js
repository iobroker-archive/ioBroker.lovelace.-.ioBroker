/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/data-table/sort_filter_worker.ts":
/*!*********************************************************!*\
  !*** ./src/components/data-table/sort_filter_worker.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proxy-polyfill */ \"./node_modules/proxy-polyfill/src/index.js\");\n/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(proxy_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! comlink */ \"./node_modules/comlink/dist/esm/comlink.mjs\");\n\n// To use comlink under ES5\n\n\nvar filterData = function filterData(data, columns, filter) {\n  filter = filter.toUpperCase();\n  return data.filter(function (row) {\n    return Object.entries(columns).some(function (columnEntry) {\n      var _columnEntry = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(columnEntry, 2),\n        key = _columnEntry[0],\n        column = _columnEntry[1];\n      if (column.filterable) {\n        if (String(column.filterKey ? row[column.valueColumn || key][column.filterKey] : row[column.valueColumn || key]).toUpperCase().includes(filter)) {\n          return true;\n        }\n      }\n      return false;\n    });\n  });\n};\nvar sortData = function sortData(data, column, direction, sortColumn) {\n  return data.sort(function (a, b) {\n    var sort = 1;\n    if (direction === \"desc\") {\n      sort = -1;\n    }\n    var valA = column.filterKey ? a[column.valueColumn || sortColumn][column.filterKey] : a[column.valueColumn || sortColumn];\n    var valB = column.filterKey ? b[column.valueColumn || sortColumn][column.filterKey] : b[column.valueColumn || sortColumn];\n    if (column.type === \"numeric\") {\n      valA = isNaN(valA) ? undefined : Number(valA);\n      valB = isNaN(valB) ? undefined : Number(valB);\n    } else {\n      if (typeof valA === \"string\") {\n        valA = valA.toUpperCase();\n      }\n      if (typeof valB === \"string\") {\n        valB = valB.toUpperCase();\n      }\n    }\n\n    // Ensure \"undefined\" and \"null\" are always sorted to the bottom\n    if (valA == null && valB != null) {\n      return 1;\n    }\n    if (valB == null && valA != null) {\n      return -1;\n    }\n    if (valA < valB) {\n      return sort * -1;\n    }\n    if (valA > valB) {\n      return sort * 1;\n    }\n    return 0;\n  });\n};\nvar api = {\n  filterData: filterData,\n  sortData: sortData\n};\n(0,comlink__WEBPACK_IMPORTED_MODULE_2__.expose)(api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXRhLXRhYmxlL3NvcnRfZmlsdGVyX3dvcmtlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvZGF0YS10YWJsZS9zb3J0X2ZpbHRlcl93b3JrZXIudHM/OGE5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUbyB1c2UgY29tbGluayB1bmRlciBFUzVcbmltcG9ydCBcInByb3h5LXBvbHlmaWxsXCI7XG5pbXBvcnQgeyBleHBvc2UgfSBmcm9tIFwiY29tbGlua1wiO1xuaW1wb3J0IHR5cGUge1xuICBDbG9uZWREYXRhVGFibGVDb2x1bW5EYXRhLFxuICBEYXRhVGFibGVSb3dEYXRhLFxuICBTb3J0YWJsZUNvbHVtbkNvbnRhaW5lcixcbiAgU29ydGluZ0RpcmVjdGlvbixcbn0gZnJvbSBcIi4vaGEtZGF0YS10YWJsZVwiO1xuXG5jb25zdCBmaWx0ZXJEYXRhID0gKFxuICBkYXRhOiBEYXRhVGFibGVSb3dEYXRhW10sXG4gIGNvbHVtbnM6IFNvcnRhYmxlQ29sdW1uQ29udGFpbmVyLFxuICBmaWx0ZXI6IHN0cmluZ1xuKSA9PiB7XG4gIGZpbHRlciA9IGZpbHRlci50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gZGF0YS5maWx0ZXIoKHJvdykgPT5cbiAgICBPYmplY3QuZW50cmllcyhjb2x1bW5zKS5zb21lKChjb2x1bW5FbnRyeSkgPT4ge1xuICAgICAgY29uc3QgW2tleSwgY29sdW1uXSA9IGNvbHVtbkVudHJ5O1xuICAgICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBTdHJpbmcoXG4gICAgICAgICAgICBjb2x1bW4uZmlsdGVyS2V5XG4gICAgICAgICAgICAgID8gcm93W2NvbHVtbi52YWx1ZUNvbHVtbiB8fCBrZXldW2NvbHVtbi5maWx0ZXJLZXldXG4gICAgICAgICAgICAgIDogcm93W2NvbHVtbi52YWx1ZUNvbHVtbiB8fCBrZXldXG4gICAgICAgICAgKVxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgIC5pbmNsdWRlcyhmaWx0ZXIpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IHNvcnREYXRhID0gKFxuICBkYXRhOiBEYXRhVGFibGVSb3dEYXRhW10sXG4gIGNvbHVtbjogQ2xvbmVkRGF0YVRhYmxlQ29sdW1uRGF0YSxcbiAgZGlyZWN0aW9uOiBTb3J0aW5nRGlyZWN0aW9uLFxuICBzb3J0Q29sdW1uOiBzdHJpbmdcbikgPT5cbiAgZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IHNvcnQgPSAxO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZGVzY1wiKSB7XG4gICAgICBzb3J0ID0gLTE7XG4gICAgfVxuXG4gICAgbGV0IHZhbEEgPSBjb2x1bW4uZmlsdGVyS2V5XG4gICAgICA/IGFbY29sdW1uLnZhbHVlQ29sdW1uIHx8IHNvcnRDb2x1bW5dW2NvbHVtbi5maWx0ZXJLZXldXG4gICAgICA6IGFbY29sdW1uLnZhbHVlQ29sdW1uIHx8IHNvcnRDb2x1bW5dO1xuXG4gICAgbGV0IHZhbEIgPSBjb2x1bW4uZmlsdGVyS2V5XG4gICAgICA/IGJbY29sdW1uLnZhbHVlQ29sdW1uIHx8IHNvcnRDb2x1bW5dW2NvbHVtbi5maWx0ZXJLZXldXG4gICAgICA6IGJbY29sdW1uLnZhbHVlQ29sdW1uIHx8IHNvcnRDb2x1bW5dO1xuXG4gICAgaWYgKGNvbHVtbi50eXBlID09PSBcIm51bWVyaWNcIikge1xuICAgICAgdmFsQSA9IGlzTmFOKHZhbEEpID8gdW5kZWZpbmVkIDogTnVtYmVyKHZhbEEpO1xuICAgICAgdmFsQiA9IGlzTmFOKHZhbEIpID8gdW5kZWZpbmVkIDogTnVtYmVyKHZhbEIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHZhbEEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdmFsQSA9IHZhbEEudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdmFsQiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YWxCID0gdmFsQi50b1VwcGVyQ2FzZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVuc3VyZSBcInVuZGVmaW5lZFwiIGFuZCBcIm51bGxcIiBhcmUgYWx3YXlzIHNvcnRlZCB0byB0aGUgYm90dG9tXG4gICAgaWYgKHZhbEEgPT0gbnVsbCAmJiB2YWxCICE9IG51bGwpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAodmFsQiA9PSBudWxsICYmIHZhbEEgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGlmICh2YWxBIDwgdmFsQikge1xuICAgICAgcmV0dXJuIHNvcnQgKiAtMTtcbiAgICB9XG4gICAgaWYgKHZhbEEgPiB2YWxCKSB7XG4gICAgICByZXR1cm4gc29ydCAqIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9KTtcblxuY29uc3QgYXBpID0ge1xuICBmaWx0ZXJEYXRhLFxuICBzb3J0RGF0YSxcbn07XG5cbmV4cG9ydCB0eXBlIEFwaSA9IHR5cGVvZiBhcGk7XG5cbmV4cG9zZShhcGkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/data-table/sort_filter_worker.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_comlink_dist_esm_comlink_mjs","vendors-node_modules_proxy-polyfill_src_index_js-node_modules_babel_runtime_helpers_esm_const-96ac4d"], function() { return __webpack_require__("./src/components/data-table/sort_filter_worker.ts"); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/frontend_es5/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_components_data-table_sort_filter_worker_ts-_ab940": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			return Promise.all([
/******/ 				__webpack_require__.e("vendors-node_modules_comlink_dist_esm_comlink_mjs"),
/******/ 				__webpack_require__.e("vendors-node_modules_proxy-polyfill_src_index_js-node_modules_babel_runtime_helpers_esm_const-96ac4d")
/******/ 			]).then(next);
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;