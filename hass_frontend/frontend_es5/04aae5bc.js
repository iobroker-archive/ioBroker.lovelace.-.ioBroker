"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[76],{73589:function(t,e,r){r.d(e,{Z:function(){return i}});var n=function(t){var e=parseFloat(t);if(isNaN(e))throw new Error("".concat(t," is not a number"));return e};function i(t){if(!t)return null;try{if(t.endsWith("%"))return{w:100,h:n(t.substr(0,t.length-1))};var e=t.replace(":","x").split("x");return 0===e.length?null:1===e.length?{w:n(e[0]),h:1}:{w:n(e[0]),h:n(e[1])}}catch(r){}return null}},58763:function(t,e,r){r.d(e,{vq:function(){return l},_J:function(){return f},Nu:function(){return h},uR:function(){return p},dL:function(){return y},h_:function(){return m},Cj:function(){return v},hN:function(){return _},Kj:function(){return g},q6:function(){return b},Nw:function(){return w}});var n=r(29171),i=r(22311),o=r(91741);function a(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=["climate","humidifier","water_heater"],u=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"],l=function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5?arguments[5]:void 0,a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],s="history/period";return r&&(s+="/"+r.toISOString()),s+="?filter_entity_id="+e,n&&(s+="&end_time="+n.toISOString()),i&&(s+="&skip_initial_state"),void 0!==o&&(s+="&significant_changes_only=".concat(Number(o))),a&&(s+="&minimal_response"),t.callApi("GET",s)},f=function(t,e,r,n){return t.callApi("GET","history/period/".concat(e.toISOString(),"?end_time=").concat(r.toISOString(),"&minimal_response").concat(n?"&filter_entity_id=".concat(n):""))},d=function(t,e){return t.state===e.state&&(!t.attributes||!e.attributes||u.every((function(r){return t.attributes[r]===e.attributes[r]})))},h=function(t,e,r){var s={},l=[];return e?(e.forEach((function(e){if(0!==e.length){var c,u=e.find((function(t){return t.attributes&&("unit_of_measurement"in t.attributes||"state_class"in t.attributes)}));(c=u?u.attributes.unit_of_measurement||" ":{climate:t.config.unit_system.temperature,counter:"#",humidifier:"%",input_number:"#",number:"#",water_heater:t.config.unit_system.temperature}[(0,i.N)(e[0])])?c in s?s[c].push(e):s[c]=[e]:l.push(function(t,e,r){var i,s=[],c=r.length-1,u=a(r);try{for(u.s();!(i=u.n()).done;){var l=i.value;s.length>0&&l.state===s[s.length-1].state||(l.entity_id||(l.attributes=r[c].attributes,l.entity_id=r[c].entity_id),s.push({state_localize:(0,n.D)(t,l,e),state:l.state,last_changed:l.last_changed}))}}catch(f){u.e(f)}finally{u.f()}return{name:(0,o.C)(r[0]),entity_id:r[0].entity_id,data:s}}(r,t.locale,e))}})),{line:Object.keys(s).map((function(t){return function(t,e){var r,n=[],s=a(e);try{for(s.s();!(r=s.n()).done;){var l,f=r.value,h=f[f.length-1],p=(0,i.N)(h),y=[],m=a(f);try{for(m.s();!(l=m.n()).done;){var v=l.value,_=void 0;if(c.includes(p)){_={state:v.state,last_changed:v.last_updated,attributes:{}};var g,b=a(u);try{for(b.s();!(g=b.n()).done;){var w=g.value;w in v.attributes&&(_.attributes[w]=v.attributes[w])}}catch(k){b.e(k)}finally{b.f()}}else _=v;y.length>1&&d(_,y[y.length-1])&&d(_,y[y.length-2])||y.push(_)}}catch(k){m.e(k)}finally{m.f()}n.push({domain:p,name:(0,o.C)(h),entity_id:h.entity_id,states:y})}}catch(k){s.e(k)}finally{s.f()}return{unit:t,identifier:e.map((function(t){return t[0].entity_id})).join(""),data:n}}(t,s[t])})),timeline:l}):{line:[],timeline:[]}},p=function(t,e){return t.callWS({type:"history/list_statistic_ids",statistic_type:e})},y=function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"hour";return t.callWS({type:"history/statistics_during_period",start_time:e.toISOString(),end_time:null==r?void 0:r.toISOString(),statistic_ids:n,period:i})},m=function(t){return t.callWS({type:"recorder/validate_statistics"})},v=function(t,e,r){return t.callWS({type:"recorder/update_statistics_metadata",statistic_id:e,unit_of_measurement:r})},_=function(t,e){return t.callWS({type:"recorder/clear_statistics",statistic_ids:e})},g=function(t){if(!t||t.length<2)return null;var e=t[t.length-1].sum;if(null===e)return null;var r=t[0].sum;return null===r?e:e-r},b=function(t,e){var r,n=null,i=a(e);try{for(i.s();!(r=i.n()).done;){var o=r.value;if(o in t){var s=g(t[o]);null!==s&&(null===n?n=s:n+=s)}}}catch(c){i.e(c)}finally{i.f()}return n},w=function(t,e){return t.some((function(t){return null!==t[e]}))}},60076:function(t,e,r){r.r(e);var n,i,o,a=r(37500),s=r(26767),c=r(5701),u=r(17717),l=r(67352),f=r(14516),d=r(58831),h=r(73589),p=(r(22098),r(10983),r(58763)),y=r(15688),m=r(90271),v=(r(23956),r(55070));function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t){return function(t){if(Array.isArray(t))return M(t)}(t)||F(t)||R(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=R(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function w(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function k(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function E(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){k(o,n,i,a,s,"next",t)}function s(t){k(o,n,i,a,s,"throw",t)}a(void 0)}))}}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){return A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},A(t,e)}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=V(t);if(e){var i=V(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return P(this,r)}}function P(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return x(t)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(){j=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(r){e.forEach((function(e){e.kind===r&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var r=t.prototype;["method","field"].forEach((function(n){e.forEach((function(e){var i=e.placement;if(e.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?t:r;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var r=e.descriptor;if("field"===e.kind){var n=e.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(t)}}Object.defineProperty(t,e.key,r)},decorateClass:function(t,e){var r=[],n=[],i={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,i)}),this),t.forEach((function(t){if(!T(t))return r.push(t);var e=this.decorateElement(t,i);r.push(e.element),r.push.apply(r,e.extras),n.push.apply(n,e.finishers)}),this),!e)return{elements:r,finishers:n};var o=this.decorateConstructor(r,e);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(t,e,r){var n=e[t.placement];if(!r&&-1!==n.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");n.push(t.key)},decorateElement:function(t,e){for(var r=[],n=[],i=t.decorators,o=i.length-1;o>=0;o--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var s=this.fromElementDescriptor(t),c=this.toElementFinisherExtras((0,i[o])(s)||s);t=c.element,this.addElementPlacement(t,e),c.finisher&&n.push(c.finisher);var u=c.extras;if(u){for(var l=0;l<u.length;l++)this.addElementPlacement(u[l],e);r.push.apply(r,u)}}return{element:t,finishers:n,extras:r}},decorateConstructor:function(t,e){for(var r=[],n=e.length-1;n>=0;n--){var i=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){t=o.elements;for(var a=0;a<t.length-1;a++)for(var s=a+1;s<t.length;s++)if(t[a].key===t[s].key&&t[a].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:r}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||F(e)||R(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var r=H(t.key),n=String(t.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:z(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var r=z(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:r}},runClassFinishers:function(t,e){for(var r=0;r<e.length;r++){var n=(0,e[r])(t);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");t=n}}return t},disallowProperty:function(t,e,r){if(void 0!==t[e])throw new TypeError(r+" can't have a ."+e+" property.")}};return t}function C(t){var e,r=H(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===t.kind?"field":"method",key:r,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(n.decorators=t.decorators),"field"===t.kind&&(n.initializer=t.value),n}function D(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function T(t){return t.decorators&&t.decorators.length}function I(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function z(t,e){var r=t[e];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+e+"' to be a function");return r}function H(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===_(e)?e:String(e)}function R(t,e){if(t){if("string"==typeof t)return M(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(t,e):void 0}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function F(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function N(t,e,r){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(r):i.value}},N(t,e,r||t)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}!function(t,e,r,n){var i=j();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=e((function(t){i.initializeInstanceElements(t,s.elements)}),r),s=i.decorateClass(function(t){for(var e=[],r=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},n=0;n<t.length;n++){var i,o=t[n];if("method"===o.kind&&(i=e.find(r)))if(I(o.descriptor)||I(i.descriptor)){if(T(o)||T(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(T(o)){if(T(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}D(o,i)}else e.push(o)}return e}(a.d.map(C)),t);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,s.M)("hui-map-card")],(function(t,e){var s,_,k=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(n,e);var r=O(n);function n(){var e;S(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=r.call.apply(r,[this].concat(o)),t(x(e)),e}return n}(e);return{F:k,d:[{kind:"field",decorators:[(0,c.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.C)({type:Boolean,reflect:!0})],key:"isPanel",value:function(){return!1}},{kind:"field",decorators:[(0,u.S)()],key:"_history",value:void 0},{kind:"field",decorators:[(0,u.S)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,l.I)("ha-map")],key:"_map",value:void 0},{kind:"field",key:"_date",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"_colorDict",value:function(){return{}}},{kind:"field",key:"_colorIndex",value:function(){return 0}},{kind:"method",key:"setConfig",value:function(t){var e;if(!t)throw new Error("Error in card configuration.");if(!(null!==(e=t.entities)&&void 0!==e&&e.length||t.geo_location_sources))throw new Error("Either entities or geo_location_sources must be specified");if(t.entities&&!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(t.geo_location_sources&&!Array.isArray(t.geo_location_sources))throw new Error("Geo_location_sources needs to be an array");this._config=t,this._configEntities=(t.entities?(0,m.A)(t.entities):[]).map((function(t){return t.entity})),this._cleanupHistory()}},{kind:"method",key:"getCardSize",value:function(){var t;if(null===(t=this._config)||void 0===t||!t.aspect_ratio)return 7;var e=(0,h.Z)(this._config.aspect_ratio),r=e&&e.w>0&&e.h>0?"".concat((100*e.h/e.w).toFixed(2)):"100";return 1+Math.floor(Number(r)/25)||3}},{kind:"method",static:!0,key:"getConfigElement",value:(_=E(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([r.e(4409),r.e(8055),r.e(9505),r.e(2240),r.e(4535),r.e(6902),r.e(4446)]).then(r.bind(r,44446));case 2:return t.abrupt("return",document.createElement("hui-map-card-editor"));case 3:case"end":return t.stop()}}),t)}))),function(){return _.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,r){return{type:"map",entities:(0,y.j)(t,2,e,r,["device_tracker"])}}},{kind:"method",key:"render",value:function(){var t;return this._config?(0,a.dy)(i||(i=w(['\n      <ha-card id="card" .header=','>\n        <div id="root">\n          <ha-map\n            .hass=',"\n            .entities=","\n            .zoom=","\n            .paths=","\n            .darkMode=","\n          ></ha-map>\n          <ha-icon-button\n            .label=","\n            .path=","\n            @click=",'\n            tabindex="0"\n          ></ha-icon-button>\n        </div>\n      </ha-card>\n    '])),this._config.title,this.hass,this._getEntities(this.hass.states,this._config,this._configEntities),null!==(t=this._config.default_zoom)&&void 0!==t?t:14,this._getHistoryPaths(this._config,this._history),this._config.dark_mode,this.hass.localize("ui.panel.lovelace.cards.map.reset_focus"),"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M19,19H15V21H19A2,2 0 0,0 21,19V15H19M19,3H15V5H19V9H21V5A2,2 0 0,0 19,3M5,5H9V3H5A2,2 0 0,0 3,5V9H5M5,15H3V19A2,2 0 0,0 5,21H9V19H5V15Z",this._fitMap):(0,a.dy)(n||(n=w([""])))}},{kind:"method",key:"shouldUpdate",value:function(t){if(!t.has("hass")||t.size>1)return!0;var e=t.get("hass");if(!e||!this._configEntities)return!0;if(e.themes.darkMode!==this.hass.themes.darkMode)return!0;var r,n=b(this._configEntities);try{for(n.s();!(r=n.n()).done;){var i=r.value;if(e.states[i]!==this.hass.states[i])return!0}}catch(o){n.e(o)}finally{n.f()}return!1}},{kind:"method",key:"firstUpdated",value:function(t){N(V(k.prototype),"firstUpdated",this).call(this,t);var e=this.shadowRoot.getElementById("root");if(this._config&&!this.isPanel&&e)if(this._config.aspect_ratio){var r=(0,h.Z)(this._config.aspect_ratio);e.style.paddingBottom=r&&r.w>0&&r.h>0?"".concat((100*r.h/r.w).toFixed(2),"%"):e.style.paddingBottom="100%"}else e.style.paddingBottom="100%"}},{kind:"method",key:"updated",value:function(t){var e,r;null!==(e=this._config)&&void 0!==e&&e.hours_to_show&&null!==(r=this._configEntities)&&void 0!==r&&r.length&&(t.has("_config")||Date.now()-this._date.getTime()>=6e4)&&this._getHistory()}},{kind:"method",key:"_fitMap",value:function(){var t;null===(t=this._map)||void 0===t||t.fitMap()}},{kind:"method",key:"_getColor",value:function(t){var e=this._colorDict[t];return e||(e=(0,v.Eu)(this._colorIndex),this._colorIndex++,this._colorDict[t]=e,e)}},{kind:"field",key:"_getEntities",value:function(){var t=this;return(0,f.Z)((function(e,r,n){if(e&&r){var i=n||[];if(r.geo_location_sources){for(var o=[],a=r.geo_location_sources.includes("all"),s=0,c=Object.values(e);s<c.length;s++){var u=c[s];"geo_location"===(0,d.M)(u.entity_id)&&(a||r.geo_location_sources.includes(u.attributes.source))&&o.push(u.entity_id)}i=[].concat(g(i),o)}return i.map((function(e){return{entity_id:e,color:t._getColor(e)}}))}}))}},{kind:"field",key:"_getHistoryPaths",value:function(){var t=this;return(0,f.Z)((function(e,r){if(e.hours_to_show&&r){var n,i=[],o=b(r);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(!((null==a?void 0:a.length)<=1)){var s=a.reduce((function(t,e){var r=e.attributes.latitude,n=e.attributes.longitude;return r&&n&&t.push([r,n]),t}),[]);i.push({points:s,color:t._getColor(a[0].entity_id),gradualOpacity:.8})}}}catch(c){o.e(c)}finally{o.f()}return i}}))}},{kind:"method",key:"_getHistory",value:(s=E(regeneratorRuntime.mark((function t(){var e,r,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._date=new Date,this._configEntities){t.next=3;break}return t.abrupt("return");case 3:return e=this._configEntities.join(","),r=new Date,(n=new Date).setHours(r.getHours()-this._config.hours_to_show),t.next=12,(0,p.vq)(this.hass,e,n,r,!1,!1,!1);case 12:if(!((i=t.sent).length<1)){t.next=15;break}return t.abrupt("return");case 15:this._history=i;case 16:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{kind:"method",key:"_cleanupHistory",value:function(){var t=this;this._history&&(this._config.hours_to_show<=0?this._history=void 0:this._history=this._history.reduce((function(e,r){var n,i=r[0].entity_id;return null!==(n=t._configEntities)&&void 0!==n&&n.includes(i)&&e.push(r),e}),[]))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,a.iv)(o||(o=w(["\n      ha-card {\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      ha-map {\n        z-index: 0;\n        border: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: inherit;\n      }\n\n      ha-icon-button {\n        position: absolute;\n        top: 75px;\n        left: 3px;\n        outline: none;\n      }\n\n      #root {\n        position: relative;\n      }\n\n      :host([ispanel]) #root {\n        height: 100%;\n      }\n    "])))}}]}}),a.oi)}}]);