/*! For license information please see chunk.4c44f54be6665c94cd96.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{211:function(t,n,e){"use strict";e(4),e(44);var i=e(5),o=e(2),s=e(3),r=e(124);function a(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(['\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that\'s not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id="wrapper" class="initializing">\n      <slot id="headerSlot" name="header"></slot>\n\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    </div>\n'],['\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that\'s not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id="wrapper" class="initializing">\n      <slot id="headerSlot" name="header"></slot>\n\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    </div>\n']);return a=function(){return t},t}Object(i.a)({_template:Object(s.a)(a()),is:"app-header-layout",behaviors:[r.a],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return Object(o.a)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var t=this.header;if(this.isAttached&&t){this.$.wrapper.classList.remove("initializing"),t.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var n=t.offsetHeight;this.hasScrollingRegion?(t.style.left="",t.style.right=""):requestAnimationFrame(function(){var n=this.getBoundingClientRect(),e=document.documentElement.clientWidth-n.right;t.style.left=n.left+"px",t.style.right=e+"px"}.bind(this));var e=this.$.contentContainer.style;t.fixed&&!t.condenses&&this.hasScrollingRegion?(e.marginTop=n+"px",e.paddingTop=""):(e.paddingTop=n+"px",e.marginTop="")}}})},212:function(t,n,e){"use strict";e(4),e(44);var i=e(53),o=e(34),s=e(65),r=e(5),a=e(2),l=e(3);function c(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(['\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center;\n        @apply --layout-center-justified;\n        @apply --layout-flex-auto;\n\n        position: relative;\n        padding: 0 12px;\n        overflow: hidden;\n        cursor: pointer;\n        vertical-align: middle;\n\n        @apply --paper-font-common-base;\n        @apply --paper-tab;\n      }\n\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host([link]) {\n        padding: 0;\n      }\n\n      .tab-content {\n        height: 100%;\n        transform: translateZ(0);\n          -webkit-transform: translateZ(0);\n        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);\n        @apply --layout-horizontal;\n        @apply --layout-center-center;\n        @apply --layout-flex-auto;\n        @apply --paper-tab-content;\n      }\n\n      :host(:not(.iron-selected)) > .tab-content {\n        opacity: 0.8;\n\n        @apply --paper-tab-content-unselected;\n      }\n\n      :host(:focus) .tab-content {\n        opacity: 1;\n        font-weight: 700;\n\n        @apply --paper-tab-content-focused;\n      }\n\n      paper-ripple {\n        color: var(--paper-tab-ink, var(--paper-yellow-a100));\n      }\n\n      .tab-content > ::slotted(a) {\n        @apply --layout-flex-auto;\n\n        height: 100%;\n      }\n    </style>\n\n    <div class="tab-content">\n      <slot></slot>\n    </div>\n']);return c=function(){return t},t}Object(r.a)({_template:Object(l.a)(c()),is:"paper-tab",behaviors:[o.a,i.a,s.a],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var t=Object(a.a)(this).parentNode;return!!t&&!!t.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(t){if(this.link){var n=this.queryEffectiveChildren("a");if(!n)return;if(t.target===n)return;n.click()}}})},222:function(t,n,e){"use strict";e(4),e(44);var i=e(5),o=e(2),s=e(3),r=e(124),a=e(231);function l(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(['\n    <style>\n      :host {\n        position: relative;\n        display: block;\n        transition-timing-function: linear;\n        transition-property: -webkit-transform;\n        transition-property: transform;\n      }\n\n      :host::before {\n        position: absolute;\n        right: 0px;\n        bottom: -5px;\n        left: 0px;\n        width: 100%;\n        height: 5px;\n        content: "";\n        transition: opacity 0.4s;\n        pointer-events: none;\n        opacity: 0;\n        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);\n        will-change: opacity;\n        @apply --app-header-shadow;\n      }\n\n      :host([shadow])::before {\n        opacity: 1;\n      }\n\n      #background {\n        @apply --layout-fit;\n        overflow: hidden;\n      }\n\n      #backgroundFrontLayer,\n      #backgroundRearLayer {\n        @apply --layout-fit;\n        height: 100%;\n        pointer-events: none;\n        background-size: cover;\n      }\n\n      #backgroundFrontLayer {\n        @apply --app-header-background-front-layer;\n      }\n\n      #backgroundRearLayer {\n        opacity: 0;\n        @apply --app-header-background-rear-layer;\n      }\n\n      #contentContainer {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      :host([disabled]),\n      :host([disabled])::after,\n      :host([disabled]) #backgroundFrontLayer,\n      :host([disabled]) #backgroundRearLayer,\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]),\n      :host([silent-scroll])::after,\n      :host([silent-scroll]) #backgroundFrontLayer,\n      :host([silent-scroll]) #backgroundRearLayer {\n        transition: none !important;\n      }\n\n      :host([disabled]) ::slotted(app-toolbar:first-of-type),\n      :host([disabled]) ::slotted([sticky]),\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),\n      :host([silent-scroll]) ::slotted([sticky]) {\n        transition: none !important;\n      }\n\n    </style>\n    <div id="contentContainer">\n      <slot id="slot"></slot>\n    </div>\n']);return l=function(){return t},t}Object(i.a)({_template:Object(s.a)(l()),is:"app-header",behaviors:[a.a,r.a],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var t,n=Object(o.a)(this.$.slot).getDistributedNodes(),e=0;t=n[e];e++)if(t.nodeType===Node.ELEMENT_NODE){if(t.hasAttribute("sticky")){this._stickyElRef=t;break}this._stickyElRef||(this._stickyElRef=t)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var t=this._clampedScrollTop,n=0===this._height||0===t,e=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,n||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),n?this._updateScrollState(t,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=e}},_updateScrollState:function(t,n){if(0!==this._height){var e=0,i=0,o=this._top,s=(this._lastScrollTop,this._maxHeaderTop),r=t-this._lastScrollTop,a=Math.abs(r),l=t>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(i=this._clamp(this.reveals?o+r:t,0,s)),t>=this._dHeight&&(i=this.condenses&&!this.fixed?Math.max(this._dHeight,i):i,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&a<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=t,this._initTimestamp=c),t>=s))if(Math.abs(this._initScrollTop-t)>30||a>10){l&&t>=s?i=s:!l&&t>=this._dHeight&&(i=this.condenses&&!this.fixed?this._dHeight:0);var h=r/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((i-o)/h,0,300)+"ms"}else i=this._top;e=0===this._dHeight?t>0?1:0:i/this._dHeight,n||(this._lastScrollTop=t,this._top=i,this._wasScrollingDown=l,this._lastTimestamp=c),(n||e!==this._progress||o!==i||0===t)&&(this._progress=e,this._runEffects(e,i),this._transformHeader(i))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(t){this.translate3d(0,-t+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&t>=this._stickyElTop?Math.min(t,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(t,n,e){return Math.min(e,Math.max(n,t))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),Object(o.a)(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(t){switch(t){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return Object(o.a)(this).querySelector("[main-title]");case"condensedTitle":return Object(o.a)(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}})},223:function(t,n,e){"use strict";e.d(n,"b",function(){return o}),e.d(n,"a",function(){return s});e(4);var i=e(121),o={hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(t){this._isRTL?this._focusNext():this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onRightKey:function(t){this._isRTL?this._focusPrevious():this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down left right esc")||this._focusWithKeyboardEvent(t)}},s=[i.a,o]},231:function(t,n,e){"use strict";e.d(n,"a",function(){return s});e(4);var i=e(232),o=e(233),s=[i.a,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(t){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(t,n){var e=o.a[t];if(!e)throw new ReferenceError(this._getUndefinedMsg(t));var i=this._boundEffect(e,n||{});return i.setUp(),i},_effectsChanged:function(t,n,e){this._tearDownEffects(),t&&e&&(t.split(" ").forEach(function(t){var e;""!==t&&((e=o.a[t])?this._effects.push(this._boundEffect(e,n[t])):console.warn(this._getUndefinedMsg(t)))},this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(t,n){n=n||{};var e=parseFloat(n.startsAt||0),i=parseFloat(n.endsAt||1),o=i-e,s=function(){},r=0===e&&1===i?t.run:function(n,i){t.run.call(this,Math.max(0,(n-e)/o),i)};return{setUp:t.setUp?t.setUp.bind(this,n):s,run:t.run?r.bind(this):s,tearDown:t.tearDown?t.tearDown.bind(this):s}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach(function(t){!1!==t.setUp()&&this._effectsRunFn.push(t.run)},this))},_tearDownEffects:function(){this._effects&&this._effects.forEach(function(t){t.tearDown()}),this._effectsRunFn=[],this._effects=[]},_runEffects:function(t,n){this._effectsRunFn&&this._effectsRunFn.forEach(function(e){e(t,n)})},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var t=this._clampedScrollTop;this._updateScrollState(t),this.threshold>0&&this._setThresholdTriggered(t>=this.threshold)}},_getDOMRef:function(t){console.warn("_getDOMRef","`"+t+"` is undefined")},_getUndefinedMsg:function(t){return"Scroll effect `"+t+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+t+".html ?"}}]},232:function(t,n,e){"use strict";e.d(n,"a",function(){return s});e(4);var i=e(2);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,n){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),n)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var e=this.domHost;this.scrollTarget=e&&e.$?e.$[t]:Object(i.a)(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,n){var e;"object"===o(t)?(e=t.left,n=t.top):e=t,e=e||0,n=n||0,this.scrollTarget===this._doc?window.scrollTo(e,n):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e,this.scrollTarget.scrollTop=n)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,n){var e=n===this._doc?window:n;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),e.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(e.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}}},233:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});e(4);var i={},o=function(t,n){if(null!=i[t])throw new Error("effect `"+t+"` is already registered.");i[t]=n}},252:function(t,n,e){"use strict";e(4),e(44),e(106),e(104),e(55),e(84);var i=e(3);function o(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(['<iron-iconset-svg name="paper-tabs" size="24">\n<svg><defs>\n<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>\n<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>\n</defs></svg>\n</iron-iconset-svg>']);return o=function(){return t},t}var s=Object(i.a)(o());document.head.appendChild(s.content);e(212);var r=e(121),a=e(223),l=e(94),c=e(5),h=e(2);function d(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(['\n    <style>\n      :host {\n        @apply --layout;\n        @apply --layout-center;\n\n        height: 48px;\n        font-size: 14px;\n        font-weight: 500;\n        overflow: hidden;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n\n        /* NOTE: Both values are needed, since some phones require the value to be `transparent`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        @apply --paper-tabs;\n      }\n\n      :host(:dir(rtl)) {\n        @apply --layout-horizontal-reverse;\n      }\n\n      #tabsContainer {\n        position: relative;\n        height: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        @apply --layout-flex-auto;\n        @apply --paper-tabs-container;\n      }\n\n      #tabsContent {\n        height: 100%;\n        -moz-flex-basis: auto;\n        -ms-flex-basis: auto;\n        flex-basis: auto;\n        @apply --paper-tabs-content;\n      }\n\n      #tabsContent.scrollable {\n        position: absolute;\n        white-space: nowrap;\n      }\n\n      #tabsContent:not(.scrollable),\n      #tabsContent.scrollable.fit-container {\n        @apply --layout-horizontal;\n      }\n\n      #tabsContent.scrollable.fit-container {\n        min-width: 100%;\n      }\n\n      #tabsContent.scrollable.fit-container > ::slotted(*) {\n        /* IE - prevent tabs from compressing when they should scroll. */\n        -ms-flex: 1 0 auto;\n        -webkit-flex: 1 0 auto;\n        flex: 1 0 auto;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      .not-visible {\n        opacity: 0;\n        cursor: default;\n      }\n\n      paper-icon-button {\n        width: 48px;\n        height: 48px;\n        padding: 12px;\n        margin: 0 4px;\n      }\n\n      #selectionBar {\n        position: absolute;\n        height: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));\n          -webkit-transform: scale(0);\n        transform: scale(0);\n          -webkit-transform-origin: left center;\n        transform-origin: left center;\n          transition: -webkit-transform;\n        transition: transform;\n\n        @apply --paper-tabs-selection-bar;\n      }\n\n      #selectionBar.align-bottom {\n        top: 0;\n        bottom: auto;\n      }\n\n      #selectionBar.expand {\n        transition-duration: 0.15s;\n        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n      }\n\n      #selectionBar.contract {\n        transition-duration: 0.18s;\n        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n      }\n\n      #tabsContent > ::slotted(:not(#selectionBar)) {\n        height: 100%;\n      }\n    </style>\n\n    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>\n\n    <div id="tabsContainer" on-track="_scroll" on-down="_down">\n      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">\n        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>\n        <slot></slot>\n      </div>\n    </div>\n\n    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>\n'],['\n    <style>\n      :host {\n        @apply --layout;\n        @apply --layout-center;\n\n        height: 48px;\n        font-size: 14px;\n        font-weight: 500;\n        overflow: hidden;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n\n        /* NOTE: Both values are needed, since some phones require the value to be \\`transparent\\`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        @apply --paper-tabs;\n      }\n\n      :host(:dir(rtl)) {\n        @apply --layout-horizontal-reverse;\n      }\n\n      #tabsContainer {\n        position: relative;\n        height: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        @apply --layout-flex-auto;\n        @apply --paper-tabs-container;\n      }\n\n      #tabsContent {\n        height: 100%;\n        -moz-flex-basis: auto;\n        -ms-flex-basis: auto;\n        flex-basis: auto;\n        @apply --paper-tabs-content;\n      }\n\n      #tabsContent.scrollable {\n        position: absolute;\n        white-space: nowrap;\n      }\n\n      #tabsContent:not(.scrollable),\n      #tabsContent.scrollable.fit-container {\n        @apply --layout-horizontal;\n      }\n\n      #tabsContent.scrollable.fit-container {\n        min-width: 100%;\n      }\n\n      #tabsContent.scrollable.fit-container > ::slotted(*) {\n        /* IE - prevent tabs from compressing when they should scroll. */\n        -ms-flex: 1 0 auto;\n        -webkit-flex: 1 0 auto;\n        flex: 1 0 auto;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      .not-visible {\n        opacity: 0;\n        cursor: default;\n      }\n\n      paper-icon-button {\n        width: 48px;\n        height: 48px;\n        padding: 12px;\n        margin: 0 4px;\n      }\n\n      #selectionBar {\n        position: absolute;\n        height: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));\n          -webkit-transform: scale(0);\n        transform: scale(0);\n          -webkit-transform-origin: left center;\n        transform-origin: left center;\n          transition: -webkit-transform;\n        transition: transform;\n\n        @apply --paper-tabs-selection-bar;\n      }\n\n      #selectionBar.align-bottom {\n        top: 0;\n        bottom: auto;\n      }\n\n      #selectionBar.expand {\n        transition-duration: 0.15s;\n        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n      }\n\n      #selectionBar.contract {\n        transition-duration: 0.18s;\n        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n      }\n\n      #tabsContent > ::slotted(:not(#selectionBar)) {\n        height: 100%;\n      }\n    </style>\n\n    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>\n\n    <div id="tabsContainer" on-track="_scroll" on-down="_down">\n      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">\n        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>\n        <slot></slot>\n      </div>\n    </div>\n\n    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>\n']);return d=function(){return t},t}Object(c.a)({_template:Object(i.a)(d()),is:"paper-tabs",behaviors:[l.a,a.a],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(t){Object(h.a)(this).querySelectorAll("paper-tab").forEach(t?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(t){t.setAttribute("noink","")},_removeNoinkAttribute:function(t){t.removeAttribute("noink")},_computeScrollButtonClass:function(t,n,e){return!n||e?"hidden":t?"not-visible":""},_computeTabsContentClass:function(t,n){return t?"scrollable"+(n?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(t,n){return t?"hidden":n?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",function(){this._scroll(),this._tabChanged(this.selectedItem)},10)},_onIronSelect:function(t){this._tabChanged(t.detail.item,this._previousTab),this._previousTab=t.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(t){this.debounce("tab-changed",function(){this._tabChanged(null,this._previousTab),this._previousTab=null},1)},_activateHandler:function(){this._cancelPendingActivation(),r.b._activateHandler.apply(this,arguments)},_scheduleActivation:function(t,n){this._pendingActivationItem=t,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,n)},_delayedActivationHandler:function(){var t=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,t.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(t){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(t){t.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(t,n){if(this.scrollable){var e=n&&-n.ddx||0;this._affectScroll(e)}},_down:function(t){this.async(function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)},1)},_affectScroll:function(t){this.$.tabsContainer.scrollLeft+=t;var n=this.$.tabsContainer.scrollLeft;this._leftHidden=0===n,this._rightHidden=n===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(t,n){if(!t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var e=this.$.tabsContent.getBoundingClientRect(),i=e.width,o=t.getBoundingClientRect(),s=o.left-e.left;if(this._pos={width:this._calcPercent(o.width,i),left:this._calcPercent(s,i)},this.noSlide||null==n)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var r=n.getBoundingClientRect(),a=this.items.indexOf(n),l=this.items.indexOf(t);this.$.selectionBar.classList.add("expand");var c=a<l;this._isRTL&&(c=!c),c?this._positionBar(this._calcPercent(o.left+o.width-r.left,i)-5,this._left):this._positionBar(this._calcPercent(r.left+r.width-o.left,i)-5,this._calcPercent(s,i)+5),this.scrollable&&this._scrollToSelectedIfNeeded(o.width,s)},_scrollToSelectedIfNeeded:function(t,n){var e=n-this.$.tabsContainer.scrollLeft;e<0?this.$.tabsContainer.scrollLeft+=e:(e+=t-this.$.tabsContainer.offsetWidth)>0&&(this.$.tabsContainer.scrollLeft+=e)},_calcPercent:function(t,n){return 100*t/n},_positionBar:function(t,n){t=t||0,n=n||0,this._width=t,this._left=n,this.transform("translateX("+n+"%) scaleX("+t/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(t){var n=this.$.selectionBar.classList;n.contains("expand")?(n.remove("expand"),n.add("contract"),this._positionBar(this._pos.width,this._pos.left)):n.contains("contract")&&n.remove("contract")}})}}]);
//# sourceMappingURL=chunk.4c44f54be6665c94cd96.js.map