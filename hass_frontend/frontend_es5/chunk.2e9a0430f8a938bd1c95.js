/*! For license information please see chunk.2e9a0430f8a938bd1c95.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6703,3098,1139],{18601:function(e,t,n){"use strict";n.d(t,{qN:function(){return o.q},Wg:function(){return d}});var o=n(78220);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,o,r=u(c);function c(){return i(this,c),r.apply(this,arguments)}return t=c,(n=[{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!0})}},{key:"click",value:function(){this.formElement&&(this.formElement.focus(),this.formElement.click())}},{key:"setAriaLabel",value:function(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}},{key:"firstUpdated",value:function(){var e=this;s(p(c.prototype),"firstUpdated",this).call(this),this.mdcRoot.addEventListener("change",(function(t){e.dispatchEvent(new Event("change",t))}))}}])&&a(t.prototype,n),o&&a(t,o),c}(o.H)},14114:function(e,t,n){"use strict";n.d(t,{P:function(){return o}});var o=function(e){return function(t,n){if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){var o=t.constructor._observers;t.constructor._observers=new Map,o.forEach((function(e,n){return t.constructor._observers.set(n,e)}))}}else{t.constructor._observers=new Map;var r=t.updated;t.updated=function(e){var t=this;r.call(this,e),e.forEach((function(e,n){var o=t.constructor._observers.get(n);void 0!==o&&o.call(t,t[n],e)}))}}t.constructor._observers.set(n,e)}}},43453:function(e,t,n){"use strict";n.d(t,{Y:function(){return a}});n(65233);var o=/\.splices$/,r=/\.length$/,i=/\.?#?([0-9]+)$/,a={properties:{data:{type:Object,notify:!0,value:function(){return this.zeroValue}},sequentialTransactions:{type:Boolean,value:!1},log:{type:Boolean,value:!1}},observers:["__dataChanged(data.*)"],created:function(){this.__initialized=!1,this.__syncingToMemory=!1,this.__initializingStoredValue=null,this.__transactionQueueAdvances=Promise.resolve()},ready:function(){this._initializeStoredValue()},get isNew(){return!0},get transactionsComplete(){return this.__transactionQueueAdvances},get zeroValue(){},saveValue:function(e){return Promise.resolve()},reset:function(){},destroy:function(){return this.data=this.zeroValue,this.saveValue()},initializeStoredValue:function(){return this.isNew?Promise.resolve():this._getStoredValue("data").then(function(e){if(this._log("Got stored value!",e,this.data),null==e)return this._setStoredValue("data",this.data||this.zeroValue);this.syncToMemory((function(){this.set("data",e)}))}.bind(this))},getStoredValue:function(e){return Promise.resolve()},setStoredValue:function(e,t){return Promise.resolve(t)},memoryPathToStoragePath:function(e){return e},storagePathToMemoryPath:function(e){return e},syncToMemory:function(e){this.__syncingToMemory||(this._group("Sync to memory."),this.__syncingToMemory=!0,e.call(this),this.__syncingToMemory=!1,this._groupEnd("Sync to memory."))},valueIsEmpty:function(e){return Array.isArray(e)?0===e.length:Object.prototype.isPrototypeOf(e)?0===Object.keys(e).length:null==e},_getStoredValue:function(e){return this.getStoredValue(this.memoryPathToStoragePath(e))},_setStoredValue:function(e,t){return this.setStoredValue(this.memoryPathToStoragePath(e),t)},_enqueueTransaction:function(e){if(this.sequentialTransactions)e=e.bind(this);else{var t=e.call(this);e=function(){return t}}return this.__transactionQueueAdvances=this.__transactionQueueAdvances.then(e).catch(function(e){this._error("Error performing queued transaction.",e)}.bind(this))},_log:function(){if(this.log){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log.apply(console,t)}},_error:function(){if(this.log){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.error.apply(console,t)}},_group:function(){if(this.log){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.group.apply(console,t)}},_groupEnd:function(){if(this.log){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.groupEnd.apply(console,t)}},_initializeStoredValue:function(){if(!this.__initializingStoredValue){this._group("Initializing stored value.");var e=this.__initializingStoredValue=this.initializeStoredValue().then(function(){this.__initialized=!0,this.__initializingStoredValue=null,this._groupEnd("Initializing stored value.")}.bind(this)).catch(function(e){this.__initializingStoredValue=null,this._groupEnd("Initializing stored value.")}.bind(this));return this._enqueueTransaction((function(){return e}))}},__dataChanged:function(e){if(!this.isNew&&!this.__syncingToMemory&&this.__initialized&&!this.__pathCanBeIgnored(e.path)){var t=this.__normalizeMemoryPath(e.path),n=e.value,o=n&&n.indexSplices;this._enqueueTransaction((function(){return this._log("Setting",t+":",o||n),o&&this.__pathIsSplices(t)&&(t=this.__parentPath(t),n=this.get(t)),this._setStoredValue(t,n)}))}},__normalizeMemoryPath:function(e){for(var t=e.split("."),n=[],o=[],r=[],i=0;i<t.length;++i)o.push(t[i]),/^#/.test(t[i])?r.push(this.get(n).indexOf(this.get(o))):r.push(t[i]),n.push(t[i]);return r.join(".")},__parentPath:function(e){var t=e.split(".");return t.slice(0,t.length-1).join(".")},__pathCanBeIgnored:function(e){return r.test(e)&&Array.isArray(this.get(this.__parentPath(e)))},__pathIsSplices:function(e){return o.test(e)&&Array.isArray(this.get(this.__parentPath(e)))},__pathRefersToArray:function(e){return(o.test(e)||r.test(e))&&Array.isArray(this.get(this.__parentPath(e)))},__pathTailToIndex:function(e){var t=e.split(".").pop();return window.parseInt(t.replace(i,"$1"),10)}}},8878:function(e,t,n){"use strict";n(65233),n(8621),n(63207),n(30879),n(78814),n(60748),n(1656),n(57548),n(73962);var o=n(51644),r=n(26110),i=n(21006),a=n(98235),s=n(9672),l=n(87156),u=n(81668),c=n(50856);function p(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <style include="paper-dropdown-menu-shared-styles"></style>\n\n    \x3c!-- this div fulfills an a11y requirement for combobox, do not remove --\x3e\n    <span role="button"></span>\n    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">\n      \x3c!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> --\x3e\n      <div class="dropdown-trigger" slot="dropdown-trigger">\n        <paper-ripple></paper-ripple>\n        \x3c!-- paper-input has type="text" for a11y, do not remove --\x3e\n        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">\n          \x3c!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> --\x3e\n          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>\n        </paper-input>\n      </div>\n      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>\n    </paper-menu-button>\n']);return p=function(){return e},e}(0,s.k)({_template:(0,c.d)(p()),is:"paper-dropdown-menu",behaviors:[o.P,r.a,i.V,a.x],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var e=this.contentElement;e&&e.selectedItem&&this._setSelectedItem(e.selectedItem)},get contentElement(){for(var e=(0,l.vz)(this.$.content).getDistributedNodes(),t=0,n=e.length;t<n;t++)if(e[t].nodeType===Node.ELEMENT_NODE)return e[t]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(e){this._setSelectedItem(e.detail.item)},_onIronDeselect:function(e){this._setSelectedItem(null)},_onTap:function(e){u.nJ(e)===this&&this.open()},_selectedItemChanged:function(e){var t="";t=e?e.label||e.getAttribute("label")||e.textContent.trim():"",this.value=t,this._setSelectedItemLabel(t)},_computeMenuVerticalOffset:function(e,t){return t||(e?-4:8)},_getValidity:function(e){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var e=this.opened?"true":"false",t=this.contentElement;t&&t.setAttribute("aria-expanded",e)}})},33760:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});n(65233);var o=n(51644),r=n(26110),i=[o.P,r.a,{hostAttributes:{role:"option",tabindex:"0"}}]},89194:function(e,t,n){"use strict";n(65233),n(65660),n(1656),n(47686);var o=n(9672),r=n(50856);function i(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n"]);return i=function(){return e},e}(0,o.k)({_template:(0,r.d)(i()),is:"paper-item-body"})},97968:function(e,t,n){"use strict";n(65660),n(15495),n(1656),n(47686);var o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(o.content)},53973:function(e,t,n){"use strict";n(65233),n(65660),n(97968);var o=n(9672),r=n(50856),i=n(33760);function a(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <style include="paper-item-shared-styles">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n']);return a=function(){return e},e}(0,o.k)({_template:(0,r.d)(a()),is:"paper-item",behaviors:[i.U]})},51095:function(e,t,n){"use strict";n(65233),n(1656);var o=n(78161),r=n(9672),i=n(50856);function a(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n\n        background: var(--paper-listbox-background-color, var(--primary-background-color));\n        color: var(--paper-listbox-color, var(--primary-text-color));\n\n        @apply --paper-listbox;\n      }\n    </style>\n\n    <slot></slot>\n"]);return a=function(){return e},e}(0,r.k)({_template:(0,i.d)(a()),is:"paper-listbox",behaviors:[o.i],hostAttributes:{role:"listbox"}})}}]);
//# sourceMappingURL=chunk.2e9a0430f8a938bd1c95.js.map