(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config"],{

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
function isComponentLoaded(hass, component) {
  return hass && hass.config.components.indexOf(component) !== -1;
}

/***/ }),

/***/ "./src/common/dom/media_query.ts":
/*!***************************************!*\
  !*** ./src/common/dom/media_query.ts ***!
  \***************************************/
/*! exports provided: listenMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenMediaQuery", function() { return listenMediaQuery; });
/**
 * Attach a media query. Listener is called right away and when it matches.
 * @param mediaQuery media query to match.
 * @param listener listener to call when media query changes between match/unmatch
 * @returns function to remove the listener.
 */
const listenMediaQuery = (mediaQuery, matchesChanged) => {
  const mql = matchMedia(mediaQuery);

  const listener = e => matchesChanged(e.matches);

  mql.addListener(listener);
  matchesChanged(mql.matches);
  return () => mql.removeListener(listener);
};

/***/ }),

/***/ "./src/data/cloud.ts":
/*!***************************!*\
  !*** ./src/data/cloud.ts ***!
  \***************************/
/*! exports provided: fetchCloudStatus, createCloudhook, deleteCloudhook, connectCloudRemote, disconnectCloudRemote, fetchCloudSubscriptionInfo, updateCloudPref, fetchCloudGoogleEntities, updateCloudGoogleEntityConfig, cloudSyncGoogleAssistant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudStatus", function() { return fetchCloudStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCloudhook", function() { return createCloudhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCloudhook", function() { return deleteCloudhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectCloudRemote", function() { return connectCloudRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectCloudRemote", function() { return disconnectCloudRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudSubscriptionInfo", function() { return fetchCloudSubscriptionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudPref", function() { return updateCloudPref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudGoogleEntities", function() { return fetchCloudGoogleEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudGoogleEntityConfig", function() { return updateCloudGoogleEntityConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloudSyncGoogleAssistant", function() { return cloudSyncGoogleAssistant; });
const fetchCloudStatus = hass => hass.callWS({
  type: "cloud/status"
});
const createCloudhook = (hass, webhookId) => hass.callWS({
  type: "cloud/cloudhook/create",
  webhook_id: webhookId
});
const deleteCloudhook = (hass, webhookId) => hass.callWS({
  type: "cloud/cloudhook/delete",
  webhook_id: webhookId
});
const connectCloudRemote = hass => hass.callWS({
  type: "cloud/remote/connect"
});
const disconnectCloudRemote = hass => hass.callWS({
  type: "cloud/remote/disconnect"
});
const fetchCloudSubscriptionInfo = hass => hass.callWS({
  type: "cloud/subscription"
});
const updateCloudPref = (hass, prefs) => hass.callWS(Object.assign({
  type: "cloud/update_prefs"
}, prefs));
const fetchCloudGoogleEntities = hass => hass.callWS({
  type: "cloud/google_assistant/entities"
});
const updateCloudGoogleEntityConfig = (hass, entityId, values) => hass.callWS(Object.assign({
  type: "cloud/google_assistant/entities/update",
  entity_id: entityId
}, values));
const cloudSyncGoogleAssistant = hass => hass.callApi("POST", "cloud/google_actions/sync");

/***/ }),

/***/ "./src/panels/config/ha-panel-config.ts":
/*!**********************************************!*\
  !*** ./src/panels/config/ha-panel-config.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/media_query */ "./src/common/dom/media_query.ts");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








let HaPanelConfig = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-panel-config")], function (_initialize, _HassRouterPage) {
  class HaPanelConfig extends _HassRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaPanelConfig,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_wideSidebar",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_wide",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "dashboard",
          cacheAll: true,
          preloadAll: true,
          routes: {
            area_registry: {
              tag: "ha-config-area-registry",
              load: () => Promise.all(/*! import() | panel-config-area-registry */[__webpack_require__.e("vendors~panel-config-area-registry"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("panel-config-area-registry")]).then(__webpack_require__.bind(null, /*! ./area_registry/ha-config-area-registry */ "./src/panels/config/area_registry/ha-config-area-registry.ts"))
            },
            automation: {
              tag: "ha-config-automation",
              load: () => Promise.all(/*! import() | panel-config-automation */[__webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~8d022d61"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~58812f3e"), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~60eddf8d"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~1b9f94fa"), __webpack_require__.e("vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~e05044eb"), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~704fb8c7"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~a32750d8"), __webpack_require__.e("vendors~more-info-dialog~panel-config-automation~panel-config-cloud~panel-kiosk~panel-lovelace~panel~1e6cf785"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e("vendors~panel-config-automation~panel-config-integrations~panel-config-script~panel-config-users~pan~347d38cc"), __webpack_require__.e("vendors~dialog-config-flow~panel-config-automation~panel-config-cloud~panel-config-integrations~pane~9cfecaa0"), __webpack_require__.e("vendors~panel-config-automation~panel-config-cloud~panel-config-script~panel-lovelace"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-script"), __webpack_require__.e("vendors~panel-config-automation~panel-config-script"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-edi~530c088e"), __webpack_require__.e(0), __webpack_require__.e("more-info-dialog~panel-config-automation~panel-kiosk~panel-lovelace~panel-states"), __webpack_require__.e("panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation")]).then(__webpack_require__.bind(null, /*! ./automation/ha-config-automation */ "./src/panels/config/automation/ha-config-automation.js"))
            },
            cloud: {
              tag: "ha-config-cloud",
              load: () => Promise.all(/*! import() | panel-config-cloud */[__webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~8d022d61"), __webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~58812f3e"), __webpack_require__.e("vendors~more-info-dialog~panel-config-automation~panel-config-cloud~panel-kiosk~panel-lovelace~panel~1e6cf785"), __webpack_require__.e("vendors~dialog-config-flow~panel-config-automation~panel-config-cloud~panel-config-integrations~pane~9cfecaa0"), __webpack_require__.e("vendors~panel-config-automation~panel-config-cloud~panel-config-script~panel-lovelace"), __webpack_require__.e("vendors~panel-config-cloud"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("panel-config-cloud~panel-config-integrations"), __webpack_require__.e("panel-config-cloud")]).then(__webpack_require__.bind(null, /*! ./cloud/ha-config-cloud */ "./src/panels/config/cloud/ha-config-cloud.ts"))
            },
            core: {
              tag: "ha-config-core",
              load: () => Promise.all(/*! import() | panel-config-core */[__webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~8d022d61"), __webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~58812f3e"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~1b9f94fa"), __webpack_require__.e("vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~e05044eb"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-core"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("onboarding-core-config~panel-config-core"), __webpack_require__.e("panel-config-core")]).then(__webpack_require__.bind(null, /*! ./core/ha-config-core */ "./src/panels/config/core/ha-config-core.js"))
            },
            customize: {
              tag: "ha-config-customize",
              load: () => Promise.all(/*! import() | panel-config-customize */[__webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~8d022d61"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~58812f3e"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~1b9f94fa"), __webpack_require__.e("vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~e05044eb"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-calendar~panel-config-cus~ab938ece"), __webpack_require__.e("vendors~panel-config-customize~panel-config-zwave"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("panel-config-customize")]).then(__webpack_require__.bind(null, /*! ./customize/ha-config-customize */ "./src/panels/config/customize/ha-config-customize.js"))
            },
            dashboard: {
              tag: "ha-config-dashboard",
              load: () => Promise.all(/*! import() | panel-config-dashboard */[__webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~1b9f94fa"), __webpack_require__.e("vendors~panel-config-dashboard"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("panel-config-dashboard")]).then(__webpack_require__.bind(null, /*! ./dashboard/ha-config-dashboard */ "./src/panels/config/dashboard/ha-config-dashboard.js"))
            },
            entity_registry: {
              tag: "ha-config-entity-registry",
              load: () => Promise.all(/*! import() | panel-config-entity-registry */[__webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("panel-config-entity-registry")]).then(__webpack_require__.bind(null, /*! ./entity_registry/ha-config-entity-registry */ "./src/panels/config/entity_registry/ha-config-entity-registry.ts"))
            },
            integrations: {
              tag: "ha-config-integrations",
              load: () => Promise.all(/*! import() | panel-config-integrations */[__webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~8d022d61"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~58812f3e"), __webpack_require__.e("vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~e05044eb"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"), __webpack_require__.e("vendors~panel-config-automation~panel-config-integrations~panel-config-script~panel-config-users~pan~347d38cc"), __webpack_require__.e("vendors~dialog-config-flow~panel-config-automation~panel-config-cloud~panel-config-integrations~pane~9cfecaa0"), __webpack_require__.e("vendors~panel-config-integrations"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e(0), __webpack_require__.e("panel-config-cloud~panel-config-integrations"), __webpack_require__.e("panel-config-integrations")]).then(__webpack_require__.bind(null, /*! ./integrations/ha-config-integrations */ "./src/panels/config/integrations/ha-config-integrations.js"))
            },
            person: {
              tag: "ha-config-person",
              load: () => Promise.all(/*! import() | panel-config-person */[__webpack_require__.e("vendors~panel-config-person~panel-config-users"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("panel-config-person")]).then(__webpack_require__.bind(null, /*! ./person/ha-config-person */ "./src/panels/config/person/ha-config-person.ts"))
            },
            script: {
              tag: "ha-config-script",
              load: () => Promise.all(/*! import() | panel-config-script */[__webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~8d022d61"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~58812f3e"), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~60eddf8d"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~1b9f94fa"), __webpack_require__.e("vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~e05044eb"), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~704fb8c7"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~a32750d8"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e("vendors~panel-config-automation~panel-config-integrations~panel-config-script~panel-config-users~pan~347d38cc"), __webpack_require__.e("vendors~panel-config-automation~panel-config-cloud~panel-config-script~panel-lovelace"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-script"), __webpack_require__.e("vendors~panel-config-automation~panel-config-script"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-edi~530c088e"), __webpack_require__.e(0), __webpack_require__.e("panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-script")]).then(__webpack_require__.bind(null, /*! ./script/ha-config-script */ "./src/panels/config/script/ha-config-script.js"))
            },
            users: {
              tag: "ha-config-users",
              load: () => Promise.all(/*! import() | panel-config-users */[__webpack_require__.e("vendors~panel-config-automation~panel-config-integrations~panel-config-script~panel-config-users~pan~347d38cc"), __webpack_require__.e("vendors~panel-config-person~panel-config-users"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("panel-config-users")]).then(__webpack_require__.bind(null, /*! ./users/ha-config-users */ "./src/panels/config/users/ha-config-users.js"))
            },
            zha: {
              tag: "zha-config-panel",
              load: () => __webpack_require__.e(/*! import() | panel-config-zha */ "panel-config-zha").then(__webpack_require__.bind(null, /*! ./zha/zha-config-panel */ "./src/panels/config/zha/zha-config-panel.ts"))
            },
            zwave: {
              tag: "ha-config-zwave",
              load: () => Promise.all(/*! import() | panel-config-zwave */[__webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~8d022d61"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~58812f3e"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~1b9f94fa"), __webpack_require__.e("vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~e05044eb"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-calendar~panel-config-cus~ab938ece"), __webpack_require__.e("vendors~panel-config-customize~panel-config-zwave"), __webpack_require__.e("panel-calendar~panel-config-area-registry~panel-config-automation~panel-config-cloud~panel-config-co~ec44ff5a"), __webpack_require__.e("panel-config-zwave")]).then(__webpack_require__.bind(null, /*! ./zwave/ha-config-zwave */ "./src/panels/config/zwave/ha-config-zwave.js"))
            }
          }
        };
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cloudStatus",
      value: void 0
    }, {
      kind: "field",
      key: "_listeners",

      value() {
        return [];
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HaPanelConfig.prototype), "connectedCallback", this).call(this);

        this._listeners.push(Object(_common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__["listenMediaQuery"])("(min-width: 1040px)", matches => {
          this._wide = matches;
        }));

        this._listeners.push(Object(_common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__["listenMediaQuery"])("(min-width: 1296px)", matches => {
          this._wideSidebar = matches;
        }));
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaPanelConfig.prototype), "disconnectedCallback", this).call(this);

        while (this._listeners.length) {
          this._listeners.pop()();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaPanelConfig.prototype), "firstUpdated", this).call(this, changedProps);

        if (Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_2__["default"])(this.hass, "cloud")) {
          this._updateCloudStatus();
        }

        this.addEventListener("ha-refresh-cloud-status", () => this._updateCloudStatus());
      }
    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(el) {
        el.route = this.routeTail;
        el.hass = this.hass;
        el.isWide = this.hass.dockedSidebar ? this._wideSidebar : this._wide;
        el.narrow = this.narrow;
        el.cloudStatus = this._cloudStatus;
      }
    }, {
      kind: "method",
      key: "_updateCloudStatus",
      value: async function _updateCloudStatus() {
        this._cloudStatus = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_3__["fetchCloudStatus"])(this.hass);

        if (this._cloudStatus.cloud === "connecting") {
          setTimeout(() => this._updateCloudStatus(), 5000);
        }
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_5__["HassRouterPage"]);

/***/ })

}]);
//# sourceMappingURL=panel-config.chunk.js.map