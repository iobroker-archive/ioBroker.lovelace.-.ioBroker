"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_common_number_format_number_ts-src_data_update_ts"],{

/***/ "./src/common/number/format_number.ts":
/*!********************************************!*\
  !*** ./src/common/number/format_number.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatNumber: function() { return /* binding */ formatNumber; },\n/* harmony export */   getDefaultFormatOptions: function() { return /* binding */ getDefaultFormatOptions; },\n/* harmony export */   getNumberFormatOptions: function() { return /* binding */ getNumberFormatOptions; },\n/* harmony export */   isNumericFromAttributes: function() { return /* binding */ isNumericFromAttributes; },\n/* harmony export */   isNumericState: function() { return /* binding */ isNumericState; },\n/* harmony export */   numberFormatToLocale: function() { return /* binding */ numberFormatToLocale; }\n/* harmony export */ });\n/* harmony import */ var _data_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/translation */ \"./src/data/translation.ts\");\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round */ \"./src/common/number/round.ts\");\n\n\n\n/**\n * Returns true if the entity is considered numeric based on the attributes it has\n * @param stateObj The entity state object\n */\nvar isNumericState = function isNumericState(stateObj) {\n  return isNumericFromAttributes(stateObj.attributes);\n};\nvar isNumericFromAttributes = function isNumericFromAttributes(attributes) {\n  return !!attributes.unit_of_measurement || !!attributes.state_class;\n};\nvar numberFormatToLocale = function numberFormatToLocale(localeOptions) {\n  switch (localeOptions.number_format) {\n    case _data_translation__WEBPACK_IMPORTED_MODULE_0__.NumberFormat.comma_decimal:\n      return [\"en-US\", \"en\"];\n    // Use United States with fallback to English formatting 1,234,567.89\n    case _data_translation__WEBPACK_IMPORTED_MODULE_0__.NumberFormat.decimal_comma:\n      return [\"de\", \"es\", \"it\"];\n    // Use German with fallback to Spanish then Italian formatting 1.234.567,89\n    case _data_translation__WEBPACK_IMPORTED_MODULE_0__.NumberFormat.space_comma:\n      return [\"fr\", \"sv\", \"cs\"];\n    // Use French with fallback to Swedish and Czech formatting 1 234 567,89\n    case _data_translation__WEBPACK_IMPORTED_MODULE_0__.NumberFormat.system:\n      return undefined;\n    default:\n      return localeOptions.language;\n  }\n};\n\n/**\n * Formats a number based on the user's preference with thousands separator(s) and decimal character for better legibility.\n *\n * @param num The number to format\n * @param localeOptions The user-selected language and formatting, from `hass.locale`\n * @param options Intl.NumberFormatOptions to use\n */\nvar formatNumber = function formatNumber(num, localeOptions, options) {\n  var locale = localeOptions ? numberFormatToLocale(localeOptions) : undefined;\n\n  // Polyfill for Number.isNaN, which is more reliable than the global isNaN()\n  Number.isNaN = Number.isNaN || function isNaN(input) {\n    return typeof input === \"number\" && isNaN(input);\n  };\n  if ((localeOptions === null || localeOptions === void 0 ? void 0 : localeOptions.number_format) !== _data_translation__WEBPACK_IMPORTED_MODULE_0__.NumberFormat.none && !Number.isNaN(Number(num)) && Intl) {\n    try {\n      return new Intl.NumberFormat(locale, getDefaultFormatOptions(num, options)).format(Number(num));\n    } catch (err) {\n      // Don't fail when using \"TEST\" language\n      // eslint-disable-next-line no-console\n      console.error(err);\n      return new Intl.NumberFormat(undefined, getDefaultFormatOptions(num, options)).format(Number(num));\n    }\n  }\n  if (!Number.isNaN(Number(num)) && num !== \"\" && (localeOptions === null || localeOptions === void 0 ? void 0 : localeOptions.number_format) === _data_translation__WEBPACK_IMPORTED_MODULE_0__.NumberFormat.none && Intl) {\n    // If NumberFormat is none, use en-US format without grouping.\n    return new Intl.NumberFormat(\"en-US\", getDefaultFormatOptions(num, Object.assign(Object.assign({}, options), {}, {\n      useGrouping: false\n    }))).format(Number(num));\n  }\n  if (typeof num === \"string\") {\n    return num;\n  }\n  return \"\".concat((0,_round__WEBPACK_IMPORTED_MODULE_1__.round)(num, options === null || options === void 0 ? void 0 : options.maximumFractionDigits).toString()).concat((options === null || options === void 0 ? void 0 : options.style) === \"currency\" ? \" \".concat(options.currency) : \"\");\n};\n\n/**\n * Checks if the current entity state should be formatted as an integer based on the `state` and `step` attribute and returns the appropriate `Intl.NumberFormatOptions` object with `maximumFractionDigits` set\n * @param entityState The state object of the entity\n * @returns An `Intl.NumberFormatOptions` object with `maximumFractionDigits` set to 0, or `undefined`\n */\nvar getNumberFormatOptions = function getNumberFormatOptions(entityState, entity) {\n  var _entityState$attribut;\n  var precision = entity === null || entity === void 0 ? void 0 : entity.display_precision;\n  if (precision != null) {\n    return {\n      maximumFractionDigits: precision,\n      minimumFractionDigits: precision\n    };\n  }\n  if (Number.isInteger(Number((_entityState$attribut = entityState.attributes) === null || _entityState$attribut === void 0 ? void 0 : _entityState$attribut.step)) && Number.isInteger(Number(entityState.state))) {\n    return {\n      maximumFractionDigits: 0\n    };\n  }\n  return undefined;\n};\n\n/**\n * Generates default options for Intl.NumberFormat\n * @param num The number to be formatted\n * @param options The Intl.NumberFormatOptions that should be included in the returned options\n */\nvar getDefaultFormatOptions = function getDefaultFormatOptions(num, options) {\n  var defaultOptions = Object.assign({\n    maximumFractionDigits: 2\n  }, options);\n  if (typeof num !== \"string\") {\n    return defaultOptions;\n  }\n\n  // Keep decimal trailing zeros if they are present in a string numeric value\n  if (!options || options.minimumFractionDigits === undefined && options.maximumFractionDigits === undefined) {\n    var digits = num.indexOf(\".\") > -1 ? num.split(\".\")[1].length : 0;\n    defaultOptions.minimumFractionDigits = digits;\n    defaultOptions.maximumFractionDigits = digits;\n  }\n  return defaultOptions;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL251bWJlci9mb3JtYXRfbnVtYmVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFJQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL2NvbW1vbi9udW1iZXIvZm9ybWF0X251bWJlci50cz9jMDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEhhc3NFbnRpdHksXG4gIEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBFbnRpdHlSZWdpc3RyeURpc3BsYXlFbnRyeSB9IGZyb20gXCIuLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgRnJvbnRlbmRMb2NhbGVEYXRhLCBOdW1iZXJGb3JtYXQgfSBmcm9tIFwiLi4vLi4vZGF0YS90cmFuc2xhdGlvblwiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi9yb3VuZFwiO1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZW50aXR5IGlzIGNvbnNpZGVyZWQgbnVtZXJpYyBiYXNlZCBvbiB0aGUgYXR0cmlidXRlcyBpdCBoYXNcbiAqIEBwYXJhbSBzdGF0ZU9iaiBUaGUgZW50aXR5IHN0YXRlIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgaXNOdW1lcmljU3RhdGUgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBib29sZWFuID0+XG4gIGlzTnVtZXJpY0Zyb21BdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMpO1xuXG5leHBvcnQgY29uc3QgaXNOdW1lcmljRnJvbUF0dHJpYnV0ZXMgPSAoXG4gIGF0dHJpYnV0ZXM6IEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlXG4pOiBib29sZWFuID0+ICEhYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50IHx8ICEhYXR0cmlidXRlcy5zdGF0ZV9jbGFzcztcblxuZXhwb3J0IGNvbnN0IG51bWJlckZvcm1hdFRvTG9jYWxlID0gKFxuICBsb2NhbGVPcHRpb25zOiBGcm9udGVuZExvY2FsZURhdGFcbik6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0+IHtcbiAgc3dpdGNoIChsb2NhbGVPcHRpb25zLm51bWJlcl9mb3JtYXQpIHtcbiAgICBjYXNlIE51bWJlckZvcm1hdC5jb21tYV9kZWNpbWFsOlxuICAgICAgcmV0dXJuIFtcImVuLVVTXCIsIFwiZW5cIl07IC8vIFVzZSBVbml0ZWQgU3RhdGVzIHdpdGggZmFsbGJhY2sgdG8gRW5nbGlzaCBmb3JtYXR0aW5nIDEsMjM0LDU2Ny44OVxuICAgIGNhc2UgTnVtYmVyRm9ybWF0LmRlY2ltYWxfY29tbWE6XG4gICAgICByZXR1cm4gW1wiZGVcIiwgXCJlc1wiLCBcIml0XCJdOyAvLyBVc2UgR2VybWFuIHdpdGggZmFsbGJhY2sgdG8gU3BhbmlzaCB0aGVuIEl0YWxpYW4gZm9ybWF0dGluZyAxLjIzNC41NjcsODlcbiAgICBjYXNlIE51bWJlckZvcm1hdC5zcGFjZV9jb21tYTpcbiAgICAgIHJldHVybiBbXCJmclwiLCBcInN2XCIsIFwiY3NcIl07IC8vIFVzZSBGcmVuY2ggd2l0aCBmYWxsYmFjayB0byBTd2VkaXNoIGFuZCBDemVjaCBmb3JtYXR0aW5nIDEgMjM0IDU2Nyw4OVxuICAgIGNhc2UgTnVtYmVyRm9ybWF0LnN5c3RlbTpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBsb2NhbGVPcHRpb25zLmxhbmd1YWdlO1xuICB9XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgYSBudW1iZXIgYmFzZWQgb24gdGhlIHVzZXIncyBwcmVmZXJlbmNlIHdpdGggdGhvdXNhbmRzIHNlcGFyYXRvcihzKSBhbmQgZGVjaW1hbCBjaGFyYWN0ZXIgZm9yIGJldHRlciBsZWdpYmlsaXR5LlxuICpcbiAqIEBwYXJhbSBudW0gVGhlIG51bWJlciB0byBmb3JtYXRcbiAqIEBwYXJhbSBsb2NhbGVPcHRpb25zIFRoZSB1c2VyLXNlbGVjdGVkIGxhbmd1YWdlIGFuZCBmb3JtYXR0aW5nLCBmcm9tIGBoYXNzLmxvY2FsZWBcbiAqIEBwYXJhbSBvcHRpb25zIEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyB0byB1c2VcbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1hdE51bWJlciA9IChcbiAgbnVtOiBzdHJpbmcgfCBudW1iZXIsXG4gIGxvY2FsZU9wdGlvbnM/OiBGcm9udGVuZExvY2FsZURhdGEsXG4gIG9wdGlvbnM/OiBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGxvY2FsZSA9IGxvY2FsZU9wdGlvbnNcbiAgICA/IG51bWJlckZvcm1hdFRvTG9jYWxlKGxvY2FsZU9wdGlvbnMpXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgLy8gUG9seWZpbGwgZm9yIE51bWJlci5pc05hTiwgd2hpY2ggaXMgbW9yZSByZWxpYWJsZSB0aGFuIHRoZSBnbG9iYWwgaXNOYU4oKVxuICBOdW1iZXIuaXNOYU4gPVxuICAgIE51bWJlci5pc05hTiB8fFxuICAgIGZ1bmN0aW9uIGlzTmFOKGlucHV0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSBcIm51bWJlclwiICYmIGlzTmFOKGlucHV0KTtcbiAgICB9O1xuXG4gIGlmIChcbiAgICBsb2NhbGVPcHRpb25zPy5udW1iZXJfZm9ybWF0ICE9PSBOdW1iZXJGb3JtYXQubm9uZSAmJlxuICAgICFOdW1iZXIuaXNOYU4oTnVtYmVyKG51bSkpICYmXG4gICAgSW50bFxuICApIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBnZXREZWZhdWx0Rm9ybWF0T3B0aW9ucyhudW0sIG9wdGlvbnMpXG4gICAgICApLmZvcm1hdChOdW1iZXIobnVtKSk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIC8vIERvbid0IGZhaWwgd2hlbiB1c2luZyBcIlRFU1RcIiBsYW5ndWFnZVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgZ2V0RGVmYXVsdEZvcm1hdE9wdGlvbnMobnVtLCBvcHRpb25zKVxuICAgICAgKS5mb3JtYXQoTnVtYmVyKG51bSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChcbiAgICAhTnVtYmVyLmlzTmFOKE51bWJlcihudW0pKSAmJlxuICAgIG51bSAhPT0gXCJcIiAmJlxuICAgIGxvY2FsZU9wdGlvbnM/Lm51bWJlcl9mb3JtYXQgPT09IE51bWJlckZvcm1hdC5ub25lICYmXG4gICAgSW50bFxuICApIHtcbiAgICAvLyBJZiBOdW1iZXJGb3JtYXQgaXMgbm9uZSwgdXNlIGVuLVVTIGZvcm1hdCB3aXRob3V0IGdyb3VwaW5nLlxuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXG4gICAgICBcImVuLVVTXCIsXG4gICAgICBnZXREZWZhdWx0Rm9ybWF0T3B0aW9ucyhudW0sIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlLFxuICAgICAgfSlcbiAgICApLmZvcm1hdChOdW1iZXIobnVtKSk7XG4gIH1cblxuICBpZiAodHlwZW9mIG51bSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudW07XG4gIH1cbiAgcmV0dXJuIGAke3JvdW5kKG51bSwgb3B0aW9ucz8ubWF4aW11bUZyYWN0aW9uRGlnaXRzKS50b1N0cmluZygpfSR7XG4gICAgb3B0aW9ucz8uc3R5bGUgPT09IFwiY3VycmVuY3lcIiA/IGAgJHtvcHRpb25zLmN1cnJlbmN5fWAgOiBcIlwiXG4gIH1gO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgZW50aXR5IHN0YXRlIHNob3VsZCBiZSBmb3JtYXR0ZWQgYXMgYW4gaW50ZWdlciBiYXNlZCBvbiB0aGUgYHN0YXRlYCBhbmQgYHN0ZXBgIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgYEludGwuTnVtYmVyRm9ybWF0T3B0aW9uc2Agb2JqZWN0IHdpdGggYG1heGltdW1GcmFjdGlvbkRpZ2l0c2Agc2V0XG4gKiBAcGFyYW0gZW50aXR5U3RhdGUgVGhlIHN0YXRlIG9iamVjdCBvZiB0aGUgZW50aXR5XG4gKiBAcmV0dXJucyBBbiBgSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zYCBvYmplY3Qgd2l0aCBgbWF4aW11bUZyYWN0aW9uRGlnaXRzYCBzZXQgdG8gMCwgb3IgYHVuZGVmaW5lZGBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE51bWJlckZvcm1hdE9wdGlvbnMgPSAoXG4gIGVudGl0eVN0YXRlOiBIYXNzRW50aXR5LFxuICBlbnRpdHk/OiBFbnRpdHlSZWdpc3RyeURpc3BsYXlFbnRyeVxuKTogSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgcHJlY2lzaW9uID0gZW50aXR5Py5kaXNwbGF5X3ByZWNpc2lvbjtcbiAgaWYgKHByZWNpc2lvbiAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY2lzaW9uLFxuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb24sXG4gICAgfTtcbiAgfVxuICBpZiAoXG4gICAgTnVtYmVyLmlzSW50ZWdlcihOdW1iZXIoZW50aXR5U3RhdGUuYXR0cmlidXRlcz8uc3RlcCkpICYmXG4gICAgTnVtYmVyLmlzSW50ZWdlcihOdW1iZXIoZW50aXR5U3RhdGUuc3RhdGUpKVxuICApIHtcbiAgICByZXR1cm4geyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgZGVmYXVsdCBvcHRpb25zIGZvciBJbnRsLk51bWJlckZvcm1hdFxuICogQHBhcmFtIG51bSBUaGUgbnVtYmVyIHRvIGJlIGZvcm1hdHRlZFxuICogQHBhcmFtIG9wdGlvbnMgVGhlIEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyB0aGF0IHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgcmV0dXJuZWQgb3B0aW9uc1xuICovXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEZvcm1hdE9wdGlvbnMgPSAoXG4gIG51bTogc3RyaW5nIHwgbnVtYmVyLFxuICBvcHRpb25zPzogSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zXG4pOiBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMgPT4ge1xuICBjb25zdCBkZWZhdWx0T3B0aW9uczogSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuXG4gIGlmICh0eXBlb2YgbnVtICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xuICB9XG5cbiAgLy8gS2VlcCBkZWNpbWFsIHRyYWlsaW5nIHplcm9zIGlmIHRoZXkgYXJlIHByZXNlbnQgaW4gYSBzdHJpbmcgbnVtZXJpYyB2YWx1ZVxuICBpZiAoXG4gICAgIW9wdGlvbnMgfHxcbiAgICAob3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgb3B0aW9ucy5tYXhpbXVtRnJhY3Rpb25EaWdpdHMgPT09IHVuZGVmaW5lZClcbiAgKSB7XG4gICAgY29uc3QgZGlnaXRzID0gbnVtLmluZGV4T2YoXCIuXCIpID4gLTEgPyBudW0uc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCA6IDA7XG4gICAgZGVmYXVsdE9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gZGlnaXRzO1xuICAgIGRlZmF1bHRPcHRpb25zLm1heGltdW1GcmFjdGlvbkRpZ2l0cyA9IGRpZ2l0cztcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/number/format_number.ts\n");

/***/ }),

/***/ "./src/common/number/round.ts":
/*!************************************!*\
  !*** ./src/common/number/round.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   round: function() { return /* binding */ round; }\n/* harmony export */ });\nvar round = function round(value) {\n  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL251bWJlci9yb3VuZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9jb21tb24vbnVtYmVyL3JvdW5kLnRzP2Q0NWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJvdW5kID0gKHZhbHVlOiBudW1iZXIsIHByZWNpc2lvbiA9IDIpOiBudW1iZXIgPT5cbiAgTWF0aC5yb3VuZCh2YWx1ZSAqIDEwICoqIHByZWNpc2lvbikgLyAxMCAqKiBwcmVjaXNpb247XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/number/round.ts\n");

/***/ }),

/***/ "./src/data/update.ts":
/*!****************************!*\
  !*** ./src/data/update.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UPDATE_SUPPORT_BACKUP: function() { return /* binding */ UPDATE_SUPPORT_BACKUP; },\n/* harmony export */   UPDATE_SUPPORT_INSTALL: function() { return /* binding */ UPDATE_SUPPORT_INSTALL; },\n/* harmony export */   UPDATE_SUPPORT_PROGRESS: function() { return /* binding */ UPDATE_SUPPORT_PROGRESS; },\n/* harmony export */   UPDATE_SUPPORT_RELEASE_NOTES: function() { return /* binding */ UPDATE_SUPPORT_RELEASE_NOTES; },\n/* harmony export */   UPDATE_SUPPORT_SPECIFIC_VERSION: function() { return /* binding */ UPDATE_SUPPORT_SPECIFIC_VERSION; },\n/* harmony export */   checkForEntityUpdates: function() { return /* binding */ checkForEntityUpdates; },\n/* harmony export */   filterUpdateEntities: function() { return /* binding */ filterUpdateEntities; },\n/* harmony export */   filterUpdateEntitiesWithInstall: function() { return /* binding */ filterUpdateEntitiesWithInstall; },\n/* harmony export */   updateCanInstall: function() { return /* binding */ updateCanInstall; },\n/* harmony export */   updateIsInstalling: function() { return /* binding */ updateIsInstalling; },\n/* harmony export */   updateIsInstallingFromAttributes: function() { return /* binding */ updateIsInstallingFromAttributes; },\n/* harmony export */   updateReleaseNotes: function() { return /* binding */ updateReleaseNotes; },\n/* harmony export */   updateUsesProgress: function() { return /* binding */ updateUsesProgress; },\n/* harmony export */   updateUsesProgressFromAttributes: function() { return /* binding */ updateUsesProgressFromAttributes; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/const */ \"./src/common/const.ts\");\n/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/entity/compute_domain */ \"./src/common/entity/compute_domain.ts\");\n/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ \"./src/common/entity/compute_state_domain.ts\");\n/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/supports-feature */ \"./src/common/entity/supports-feature.ts\");\n/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/string/compare */ \"./src/common/string/compare.ts\");\n/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogs/generic/show-dialog-box */ \"./src/dialogs/generic/show-dialog-box.ts\");\n/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/toast */ \"./src/util/toast.ts\");\n\n\n\n\n\n\n\n\n\nvar UPDATE_SUPPORT_INSTALL = 1;\nvar UPDATE_SUPPORT_SPECIFIC_VERSION = 2;\nvar UPDATE_SUPPORT_PROGRESS = 4;\nvar UPDATE_SUPPORT_BACKUP = 8;\nvar UPDATE_SUPPORT_RELEASE_NOTES = 16;\nvar updateUsesProgress = function updateUsesProgress(entity) {\n  return updateUsesProgressFromAttributes(entity.attributes);\n};\nvar updateUsesProgressFromAttributes = function updateUsesProgressFromAttributes(attributes) {\n  return (0,_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__.supportsFeatureFromAttributes)(attributes, UPDATE_SUPPORT_PROGRESS) && typeof attributes.in_progress === \"number\";\n};\nvar updateCanInstall = function updateCanInstall(entity) {\n  var showSkipped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  return (entity.state === _common_const__WEBPACK_IMPORTED_MODULE_2__.BINARY_STATE_ON || showSkipped && Boolean(entity.attributes.skipped_version)) && (0,_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__.supportsFeature)(entity, UPDATE_SUPPORT_INSTALL);\n};\nvar updateIsInstalling = function updateIsInstalling(entity) {\n  return updateUsesProgress(entity) || !!entity.attributes.in_progress;\n};\nvar updateIsInstallingFromAttributes = function updateIsInstallingFromAttributes(attributes) {\n  return updateUsesProgressFromAttributes(attributes) || !!attributes.in_progress;\n};\nvar updateReleaseNotes = function updateReleaseNotes(hass, entityId) {\n  return hass.callWS({\n    type: \"update/release_notes\",\n    entity_id: entityId\n  });\n};\nvar filterUpdateEntities = function filterUpdateEntities(entities, language) {\n  return Object.values(entities).filter(function (entity) {\n    return (0,_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__.computeStateDomain)(entity) === \"update\";\n  }).sort(function (a, b) {\n    if (a.attributes.title === \"ioBroker Core\") {\n      return -3;\n    }\n    if (b.attributes.title === \"ioBroker Core\") {\n      return 3;\n    }\n    if (a.attributes.title === \"ioBroker Operating System\") {\n      return -2;\n    }\n    if (b.attributes.title === \"ioBroker Operating System\") {\n      return 2;\n    }\n    if (a.attributes.title === \"ioBroker Supervisor\") {\n      return -1;\n    }\n    if (b.attributes.title === \"ioBroker Supervisor\") {\n      return 1;\n    }\n    return (0,_common_string_compare__WEBPACK_IMPORTED_MODULE_6__.caseInsensitiveStringCompare)(a.attributes.title || a.attributes.friendly_name || \"\", b.attributes.title || b.attributes.friendly_name || \"\", language);\n  });\n};\nvar filterUpdateEntitiesWithInstall = function filterUpdateEntitiesWithInstall(entities) {\n  var showSkipped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  return filterUpdateEntities(entities).filter(function (entity) {\n    return updateCanInstall(entity, showSkipped);\n  });\n};\nvar checkForEntityUpdates = /*#__PURE__*/function () {\n  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee(element, hass) {\n    var entities, updated, unsubscribeEvents;\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          entities = filterUpdateEntities(hass.states, hass.locale.language).map(function (entity) {\n            return entity.entity_id;\n          });\n          if (entities.length) {\n            _context.next = 4;\n            break;\n          }\n          (0,_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_7__.showAlertDialog)(element, {\n            title: hass.localize(\"ui.panel.config.updates.no_update_entities.title\"),\n            text: hass.localize(\"ui.panel.config.updates.no_update_entities.description\"),\n            warning: true\n          });\n          return _context.abrupt(\"return\");\n        case 4:\n          updated = 0;\n          _context.next = 7;\n          return hass.connection.subscribeEvents(function (event) {\n            if ((0,_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_3__.computeDomain)(event.data.entity_id) === \"update\") {\n              updated++;\n              (0,_util_toast__WEBPACK_IMPORTED_MODULE_8__.showToast)(element, {\n                message: hass.localize(\"ui.panel.config.updates.updates_refreshed\", {\n                  count: updated\n                })\n              });\n            }\n          }, \"state_changed\");\n        case 7:\n          unsubscribeEvents = _context.sent;\n          _context.next = 10;\n          return hass.callService(\"homeassistant\", \"update_entity\", {\n            entity_id: entities\n          });\n        case 10:\n          _context.next = 12;\n          return new Promise(function (r) {\n            setTimeout(r, 10000);\n          });\n        case 12:\n          unsubscribeEvents();\n          if (updated === 0) {\n            (0,_util_toast__WEBPACK_IMPORTED_MODULE_8__.showToast)(element, {\n              message: hass.localize(\"ui.panel.config.updates.no_new_updates\")\n            });\n          }\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function checkForEntityUpdates(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS91cGRhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlCQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWkE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbkRBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL2RhdGEvdXBkYXRlLnRzPzg5Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBIYXNzRW50aXRpZXMsXG4gIEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlLFxuICBIYXNzRW50aXR5QmFzZSxcbiAgSGFzc0V2ZW50LFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBCSU5BUllfU1RBVEVfT04gfSBmcm9tIFwiLi4vY29tbW9uL2NvbnN0XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQge1xuICBzdXBwb3J0c0ZlYXR1cmUsXG4gIHN1cHBvcnRzRmVhdHVyZUZyb21BdHRyaWJ1dGVzLFxufSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlXCI7XG5pbXBvcnQgeyBjYXNlSW5zZW5zaXRpdmVTdHJpbmdDb21wYXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IHsgc2hvd0FsZXJ0RGlhbG9nIH0gZnJvbSBcIi4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuLi91dGlsL3RvYXN0XCI7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfU1VQUE9SVF9JTlNUQUxMID0gMTtcbmV4cG9ydCBjb25zdCBVUERBVEVfU1VQUE9SVF9TUEVDSUZJQ19WRVJTSU9OID0gMjtcbmV4cG9ydCBjb25zdCBVUERBVEVfU1VQUE9SVF9QUk9HUkVTUyA9IDQ7XG5leHBvcnQgY29uc3QgVVBEQVRFX1NVUFBPUlRfQkFDS1VQID0gODtcbmV4cG9ydCBjb25zdCBVUERBVEVfU1VQUE9SVF9SRUxFQVNFX05PVEVTID0gMTY7XG5cbmludGVyZmFjZSBVcGRhdGVFbnRpdHlBdHRyaWJ1dGVzIGV4dGVuZHMgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2Uge1xuICBhdXRvX3VwZGF0ZTogYm9vbGVhbiB8IG51bGw7XG4gIGluc3RhbGxlZF92ZXJzaW9uOiBzdHJpbmcgfCBudWxsO1xuICBpbl9wcm9ncmVzczogYm9vbGVhbiB8IG51bWJlcjtcbiAgbGF0ZXN0X3ZlcnNpb246IHN0cmluZyB8IG51bGw7XG4gIHJlbGVhc2Vfc3VtbWFyeTogc3RyaW5nIHwgbnVsbDtcbiAgcmVsZWFzZV91cmw6IHN0cmluZyB8IG51bGw7XG4gIHNraXBwZWRfdmVyc2lvbjogc3RyaW5nIHwgbnVsbDtcbiAgdGl0bGU6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlRW50aXR5IGV4dGVuZHMgSGFzc0VudGl0eUJhc2Uge1xuICBhdHRyaWJ1dGVzOiBVcGRhdGVFbnRpdHlBdHRyaWJ1dGVzO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlc1Byb2dyZXNzID0gKGVudGl0eTogVXBkYXRlRW50aXR5KTogYm9vbGVhbiA9PlxuICB1cGRhdGVVc2VzUHJvZ3Jlc3NGcm9tQXR0cmlidXRlcyhlbnRpdHkuYXR0cmlidXRlcyk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VzUHJvZ3Jlc3NGcm9tQXR0cmlidXRlcyA9IChhdHRyaWJ1dGVzOiB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn0pOiBib29sZWFuID0+XG4gIHN1cHBvcnRzRmVhdHVyZUZyb21BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMsIFVQREFURV9TVVBQT1JUX1BST0dSRVNTKSAmJlxuICB0eXBlb2YgYXR0cmlidXRlcy5pbl9wcm9ncmVzcyA9PT0gXCJudW1iZXJcIjtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhbkluc3RhbGwgPSAoXG4gIGVudGl0eTogVXBkYXRlRW50aXR5LFxuICBzaG93U2tpcHBlZCA9IGZhbHNlXG4pOiBib29sZWFuID0+XG4gIChlbnRpdHkuc3RhdGUgPT09IEJJTkFSWV9TVEFURV9PTiB8fFxuICAgIChzaG93U2tpcHBlZCAmJiBCb29sZWFuKGVudGl0eS5hdHRyaWJ1dGVzLnNraXBwZWRfdmVyc2lvbikpKSAmJlxuICBzdXBwb3J0c0ZlYXR1cmUoZW50aXR5LCBVUERBVEVfU1VQUE9SVF9JTlNUQUxMKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUlzSW5zdGFsbGluZyA9IChlbnRpdHk6IFVwZGF0ZUVudGl0eSk6IGJvb2xlYW4gPT5cbiAgdXBkYXRlVXNlc1Byb2dyZXNzKGVudGl0eSkgfHwgISFlbnRpdHkuYXR0cmlidXRlcy5pbl9wcm9ncmVzcztcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUlzSW5zdGFsbGluZ0Zyb21BdHRyaWJ1dGVzID0gKGF0dHJpYnV0ZXM6IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufSk6IGJvb2xlYW4gPT5cbiAgdXBkYXRlVXNlc1Byb2dyZXNzRnJvbUF0dHJpYnV0ZXMoYXR0cmlidXRlcykgfHwgISFhdHRyaWJ1dGVzLmluX3Byb2dyZXNzO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUmVsZWFzZU5vdGVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGVudGl0eUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPHN0cmluZyB8IG51bGw+KHtcbiAgICB0eXBlOiBcInVwZGF0ZS9yZWxlYXNlX25vdGVzXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJVcGRhdGVFbnRpdGllcyA9IChcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgbGFuZ3VhZ2U/OiBzdHJpbmdcbikgPT5cbiAgKFxuICAgIE9iamVjdC52YWx1ZXMoZW50aXRpZXMpLmZpbHRlcihcbiAgICAgIChlbnRpdHkpID0+IGNvbXB1dGVTdGF0ZURvbWFpbihlbnRpdHkpID09PSBcInVwZGF0ZVwiXG4gICAgKSBhcyBVcGRhdGVFbnRpdHlbXVxuICApLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5hdHRyaWJ1dGVzLnRpdGxlID09PSBcIkhvbWUgQXNzaXN0YW50IENvcmVcIikge1xuICAgICAgcmV0dXJuIC0zO1xuICAgIH1cbiAgICBpZiAoYi5hdHRyaWJ1dGVzLnRpdGxlID09PSBcIkhvbWUgQXNzaXN0YW50IENvcmVcIikge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIGlmIChhLmF0dHJpYnV0ZXMudGl0bGUgPT09IFwiSG9tZSBBc3Npc3RhbnQgT3BlcmF0aW5nIFN5c3RlbVwiKSB7XG4gICAgICByZXR1cm4gLTI7XG4gICAgfVxuICAgIGlmIChiLmF0dHJpYnV0ZXMudGl0bGUgPT09IFwiSG9tZSBBc3Npc3RhbnQgT3BlcmF0aW5nIFN5c3RlbVwiKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgaWYgKGEuYXR0cmlidXRlcy50aXRsZSA9PT0gXCJIb21lIEFzc2lzdGFudCBTdXBlcnZpc29yXCIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGIuYXR0cmlidXRlcy50aXRsZSA9PT0gXCJIb21lIEFzc2lzdGFudCBTdXBlcnZpc29yXCIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gY2FzZUluc2Vuc2l0aXZlU3RyaW5nQ29tcGFyZShcbiAgICAgIGEuYXR0cmlidXRlcy50aXRsZSB8fCBhLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiLFxuICAgICAgYi5hdHRyaWJ1dGVzLnRpdGxlIHx8IGIuYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCIsXG4gICAgICBsYW5ndWFnZVxuICAgICk7XG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmlsdGVyVXBkYXRlRW50aXRpZXNXaXRoSW5zdGFsbCA9IChcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgc2hvd1NraXBwZWQgPSBmYWxzZVxuKSA9PlxuICBmaWx0ZXJVcGRhdGVFbnRpdGllcyhlbnRpdGllcykuZmlsdGVyKChlbnRpdHkpID0+XG4gICAgdXBkYXRlQ2FuSW5zdGFsbChlbnRpdHksIHNob3dTa2lwcGVkKVxuICApO1xuXG5leHBvcnQgY29uc3QgY2hlY2tGb3JFbnRpdHlVcGRhdGVzID0gYXN5bmMgKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgaGFzczogSG9tZUFzc2lzdGFudFxuKSA9PiB7XG4gIGNvbnN0IGVudGl0aWVzID0gZmlsdGVyVXBkYXRlRW50aXRpZXMoaGFzcy5zdGF0ZXMsIGhhc3MubG9jYWxlLmxhbmd1YWdlKS5tYXAoXG4gICAgKGVudGl0eSkgPT4gZW50aXR5LmVudGl0eV9pZFxuICApO1xuXG4gIGlmICghZW50aXRpZXMubGVuZ3RoKSB7XG4gICAgc2hvd0FsZXJ0RGlhbG9nKGVsZW1lbnQsIHtcbiAgICAgIHRpdGxlOiBoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVwZGF0ZXMubm9fdXBkYXRlX2VudGl0aWVzLnRpdGxlXCIpLFxuICAgICAgdGV4dDogaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcudXBkYXRlcy5ub191cGRhdGVfZW50aXRpZXMuZGVzY3JpcHRpb25cIlxuICAgICAgKSxcbiAgICAgIHdhcm5pbmc6IHRydWUsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHVwZGF0ZWQgPSAwO1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlRXZlbnRzID0gYXdhaXQgaGFzcy5jb25uZWN0aW9uLnN1YnNjcmliZUV2ZW50czxIYXNzRXZlbnQ+KFxuICAgIChldmVudCkgPT4ge1xuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZXZlbnQuZGF0YS5lbnRpdHlfaWQpID09PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgIHVwZGF0ZWQrKztcbiAgICAgICAgc2hvd1RvYXN0KGVsZW1lbnQsIHtcbiAgICAgICAgICBtZXNzYWdlOiBoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVwZGF0ZXMudXBkYXRlc19yZWZyZXNoZWRcIiwge1xuICAgICAgICAgICAgY291bnQ6IHVwZGF0ZWQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdGF0ZV9jaGFuZ2VkXCJcbiAgKTtcblxuICBhd2FpdCBoYXNzLmNhbGxTZXJ2aWNlKFwiaG9tZWFzc2lzdGFudFwiLCBcInVwZGF0ZV9lbnRpdHlcIiwge1xuICAgIGVudGl0eV9pZDogZW50aXRpZXMsXG4gIH0pO1xuXG4gIC8vIHRoZXJlIGlzIG5vIHJlbGlhYmxlIHdheSB0byBrbm93IGlmIGFsbCB0aGUgdXBkYXRlcyBhcmUgZG9uZSB1cGRhdGluZywgc28gd2UganVzdCB3YWl0IGEgYml0IGZvciBub3cuLi5cbiAgYXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHtcbiAgICBzZXRUaW1lb3V0KHIsIDEwMDAwKTtcbiAgfSk7XG5cbiAgdW5zdWJzY3JpYmVFdmVudHMoKTtcblxuICBpZiAodXBkYXRlZCA9PT0gMCkge1xuICAgIHNob3dUb2FzdChlbGVtZW50LCB7XG4gICAgICBtZXNzYWdlOiBoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVwZGF0ZXMubm9fbmV3X3VwZGF0ZXNcIiksXG4gICAgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/update.ts\n");

/***/ })

}]);