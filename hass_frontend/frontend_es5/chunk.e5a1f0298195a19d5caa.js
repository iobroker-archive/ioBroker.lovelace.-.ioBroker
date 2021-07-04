/*! For license information please see chunk.e5a1f0298195a19d5caa.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2024],{94081:function(e,t,r){"use strict";r.d(t,{eZ:function(){return n}});var n=function(e){var t=e.finisher,r=e.descriptor;return function(e,n){var o;if(void 0===n){var i=null!==(o=e.originalKey)&&void 0!==o?o:e.key,a=null!=r?{kind:"method",placement:"prototype",key:i,descriptor:r(e.key)}:Object.assign({},e,{key:i});return null!=t&&(a.finisher=function(e){t(e,i)}),a}var c=e.constructor;void 0!==r&&Object.defineProperty(e,n,r(n)),null==t||t(c,n)}}},26861:function(e,t,r){"use strict";r.d(t,{M:function(){return n}});var n=function(e){return function(t){return"function"==typeof t?function(e,t){return window.customElements.define(e,t),t}(e,t):function(e,t){return{kind:t.kind,elements:t.elements,finisher:function(t){window.customElements.define(e,t)}}}(e,t)}}},78137:function(e,t,r){"use strict";r.d(t,{h:function(){return o}});var n=r(94081);function o(e){return(0,n.eZ)({finisher:function(t,r){Object.assign(t.prototype[r],e)}})}},12445:function(e,t,r){"use strict";r.d(t,{C:function(){return n}});function n(e){return function(t,r){return void 0!==r?function(e,t,r){t.constructor.createProperty(r,e)}(e,t,r):function(e,t){return"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign({},t,{finisher:function(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer:function(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher:function(r){r.createProperty(t.key,e)}}}(e,t)}}},56596:function(e,t,r){"use strict";r.d(t,{G:function(){return i}});var n=r(94081);function o(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,o)}function i(e){return(0,n.eZ)({descriptor:function(t){return{get:function(){var t,r=this;return(t=regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.updateComplete;case 2:return t.abrupt("return",null===(n=r.renderRoot)||void 0===n?void 0:n.querySelector(e));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(e){o(a,n,i,c,u,"next",e)}function u(e){o(a,n,i,c,u,"throw",e)}c(void 0)}))})()},enumerable:!0,configurable:!0}}})}},96022:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(94081);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return(0,n.eZ)({descriptor:function(r){var n={get:function(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0};if(t){var i="symbol"==o(r)?Symbol():"__"+r;n.get=function(){var t;return void 0===this[i]&&(this[i]=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)),this[i]}}return n}})}},20238:function(e,t,r){"use strict";r.d(t,{S:function(){return o}});var n=r(12445);function o(e){return(0,n.C)(Object.assign({},e,{state:!0,attribute:!1}))}},72774:function(e,t,r){"use strict";r.d(t,{K:function(){return n}});var n=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}()},55122:function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,{Xe:function(){return u},pX:function(){return a},XM:function(){return c}});var a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c=function(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return{_$litDirective$:e,values:r}}},u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o;return t=e,(r=[{key:"T",value:function(e,t,r){this.Σdt=e,this.M=t,this.Σct=r}},{key:"S",value:function(e,t){return this.update(e,t)}},{key:"update",value:function(e,t){return this.render.apply(this,n(t))}}])&&i(t.prototype,r),o&&i(t,o),e}()},81471:function(e,t,r){"use strict";r.d(t,{$:function(){return p}});var n=r(99602),o=r(55122);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(p){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=(0,o.XM)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(d,e);var t,r,i,c=l(d);function d(e){var t,r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),t=c.call(this,e),e.type!==o.pX.ATTRIBUTE||"class"!==e.name||(null===(r=e.strings)||void 0===r?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");return f(t)}return t=d,(r=[{key:"render",value:function(e){return Object.keys(e).filter((function(t){return e[t]})).join(" ")}},{key:"update",value:function(e,t){var r=this,o=a(t,1)[0];if(void 0===this.bt){for(var i in this.bt=new Set,o)o[i]&&this.bt.add(i);return this.render(o)}var c=e.element.classList;for(var u in this.bt.forEach((function(e){e in o||(c.remove(e),r.bt.delete(e))})),o){var s=!!o[u];s!==this.bt.has(u)&&(s?(c.add(u),this.bt.add(u)):(c.remove(u),this.bt.delete(u)))}return n.Jb}}])&&u(t.prototype,r),i&&u(t,i),d}(o.Xe))},48811:function(e,t,r){"use strict";r.r(t);r(53918);var n,o,i,a,c,u=r(50424),s=r(55358);r(2315),r(48932);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(){b=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var i="static"===o?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!k(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var i=this.decorateConstructor(r,t);return n.push.apply(n,i.finishers),i.finishers=n,i},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],o=e.decorators,i=o.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var c=this.fromElementDescriptor(e),u=this.toElementFinisherExtras((0,o[i])(c)||c);e=u.element,this.addElementPlacement(e,t),u.finisher&&n.push(u.finisher);var s=u.extras;if(s){for(var l=0;l<s.length;l++)this.addElementPlacement(s[l],t);r.push.apply(r,s)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=S(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:O(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=O(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function g(e){var t,r=S(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function w(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function k(e){return e.decorators&&e.decorators.length}function E(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function O(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function S(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e,t,r,n){var o=b();if(n)for(var i=0;i<n.length;i++)o=n[i](o);var a=t((function(e){o.initializeInstanceElements(e,c.elements)}),r),c=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},n=0;n<e.length;n++){var o,i=e[n];if("method"===i.kind&&(o=t.find(r)))if(E(i.descriptor)||E(o.descriptor)){if(k(i)||k(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(k(i)){if(k(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}w(i,o)}else t.push(i)}return t}(a.d.map(g)),e);o.initializeClassElements(a.F,c.elements),o.runClassFinishers(a.F,c.finishers)}([(0,s.Mo)("hass-error-screen")],(function(e,t){return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(n,t);var r=h(n);function n(){var t;d(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r.call.apply(r,[this].concat(i)),e(m(t)),t}return n}(t),d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"toolbar",value:function(){return!0}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"rootnav",value:function(){return!1}},{kind:"field",decorators:[(0,s.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"error",value:void 0},{kind:"method",key:"render",value:function(){var e,t;return(0,u.dy)(n||(n=f(["\n      ",'\n      <div class="content">\n        <h3>',"</h3>\n        <slot>\n          <mwc-button @click=",">\n            ","\n          </mwc-button>\n        </slot>\n      </div>\n    "])),this.toolbar?(0,u.dy)(o||(o=f(['<div class="toolbar">\n            ',"\n          </div>"])),this.rootnav||null!==(e=history.state)&&void 0!==e&&e.root?(0,u.dy)(i||(i=f(["\n                  <ha-menu-button\n                    .hass=","\n                    .narrow=","\n                  ></ha-menu-button>\n                "])),this.hass,this.narrow):(0,u.dy)(a||(a=f(["\n                  <ha-icon-button-arrow-prev\n                    .hass=","\n                    @click=","\n                  ></ha-icon-button-arrow-prev>\n                "])),this.hass,this._handleBack)):"",this.error,this._handleBack,(null===(t=this.hass)||void 0===t?void 0:t.localize("ui.panel.error.go_back"))||"go back")}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,u.iv)(c||(c=f(["\n        :host {\n          display: block;\n          height: 100%;\n          background-color: var(--primary-background-color);\n        }\n        .toolbar {\n          display: flex;\n          align-items: center;\n          font-size: 20px;\n          height: var(--header-height);\n          padding: 0 16px;\n          pointer-events: none;\n          background-color: var(--app-header-background-color);\n          font-weight: 400;\n          color: var(--app-header-text-color, white);\n          border-bottom: var(--app-header-border-bottom, none);\n          box-sizing: border-box;\n        }\n        ha-icon-button-arrow-prev {\n          pointer-events: auto;\n        }\n        .content {\n          color: var(--primary-text-color);\n          height: calc(100% - var(--header-height));\n          display: flex;\n          padding: 16px;\n          align-items: center;\n          justify-content: center;\n          flex-direction: column;\n        }\n        a {\n          color: var(--primary-color);\n        }\n      "])))]}}]}}),u.oi)}}]);
//# sourceMappingURL=chunk.e5a1f0298195a19d5caa.js.map