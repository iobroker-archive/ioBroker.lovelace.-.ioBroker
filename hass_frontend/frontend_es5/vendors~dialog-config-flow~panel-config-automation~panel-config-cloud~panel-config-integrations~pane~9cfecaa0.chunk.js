(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~dialog-config-flow~panel-config-automation~panel-config-cloud~panel-config-integrations~pane~9cfecaa0"],{

/***/ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-tooltip/paper-tooltip.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        outline: none;\n        z-index: 1002;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n        cursor: default;\n      }\n\n      #tooltip {\n        display: block;\n        outline: none;\n        @apply --paper-font-common-base;\n        font-size: 10px;\n        line-height: 1;\n        background-color: var(--paper-tooltip-background, #616161);\n        color: var(--paper-tooltip-text-color, white);\n        padding: 8px;\n        border-radius: 2px;\n        @apply --paper-tooltip;\n      }\n\n      @keyframes keyFrameScaleUp {\n        0% {\n          transform: scale(0.0);\n        }\n        100% {\n          transform: scale(1.0);\n        }\n      }\n\n      @keyframes keyFrameScaleDown {\n        0% {\n          transform: scale(1.0);\n        }\n        100% {\n          transform: scale(0.0);\n        }\n      }\n\n      @keyframes keyFrameFadeInOpacity {\n        0% {\n          opacity: 0;\n        }\n        100% {\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n      }\n\n      @keyframes keyFrameFadeOutOpacity {\n        0% {\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes keyFrameSlideDownIn {\n        0% {\n          transform: translateY(-2000px);\n          opacity: 0;\n        }\n        10% {\n          opacity: 0.2;\n        }\n        100% {\n          transform: translateY(0);\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n      }\n\n      @keyframes keyFrameSlideDownOut {\n        0% {\n          transform: translateY(0);\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n        10% {\n          opacity: 0.2;\n        }\n        100% {\n          transform: translateY(-2000px);\n          opacity: 0;\n        }\n      }\n\n      .fade-in-animation {\n        opacity: 0;\n        animation-delay: var(--paper-tooltip-delay-in, 500ms);\n        animation-name: keyFrameFadeInOpacity;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-in, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .fade-out-animation {\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 0ms);\n        animation-name: keyFrameFadeOutOpacity;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .scale-up-animation {\n        transform: scale(0);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-in, 500ms);\n        animation-name: keyFrameScaleUp;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-in, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .scale-down-animation {\n        transform: scale(1);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameScaleDown;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .slide-down-animation {\n        transform: translateY(-2000px);\n        opacity: 0;\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameSlideDownIn;\n        animation-iteration-count: 1;\n        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .slide-down-animation-out {\n        transform: translateY(0);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameSlideDownOut;\n        animation-iteration-count: 1;\n        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .cancel-animation {\n        animation-delay: -30s !important;\n      }\n\n      /* Thanks IE 10. */\n\n      .hidden {\n        display: none !important;\n      }\n    </style>\n\n    <div id=\"tooltip\" class=\"hidden\">\n      <slot></slot>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/




/**
Material design:
[Tooltips](https://www.google.com/design/spec/components/tooltips.html)
`<paper-tooltip>` is a label that appears on hover and focus when the user
hovers over an element with the cursor or with the keyboard. It will be centered
to an anchor element specified in the `for` attribute, or, if that doesn't
exist, centered to the parent node containing it.
Example:
    <div style="display:inline-block">
      <button>Click me!</button>
      <paper-tooltip>Tooltip text</paper-tooltip>
    </div>
    <div>
      <button id="btn">Click me!</button>
      <paper-tooltip for="btn">Tooltip text</paper-tooltip>
    </div>
The tooltip can be positioned on the top|bottom|left|right of the anchor using
the `position` attribute. The default position is bottom.
    <paper-tooltip for="btn" position="left">Tooltip text</paper-tooltip>
    <paper-tooltip for="btn" position="top">Tooltip text</paper-tooltip>

### Styling
The following custom properties and mixins are available for styling:
Custom property | Description | Default
----------------|-------------|----------
`--paper-tooltip-background` | The background color of the tooltip | `#616161`
`--paper-tooltip-opacity` | The opacity of the tooltip | `0.9`
`--paper-tooltip-text-color` | The text color of the tooltip | `white`
`--paper-tooltip` | Mixin applied to the tooltip | `{}`
`--paper-tooltip-delay-in` | Delay before tooltip starts to fade in | `500`
`--paper-tooltip-delay-out` | Delay before tooltip starts to fade out | `0`
`--paper-tooltip-duration-in` | Timing for animation when showing tooltip | `500`
`--paper-tooltip-duration-out` | Timing for animation when hiding tooltip | `0`
`--paper-tooltip-animation` | Mixin applied to the tooltip animation | `{}`
@group Paper Elements
@element paper-tooltip
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject()),
  is: 'paper-tooltip',
  hostAttributes: {
    role: 'tooltip',
    tabindex: -1
  },
  properties: {
    /**
     * The id of the element that the tooltip is anchored to. This element
     * must be a sibling of the tooltip. If this property is not set,
     * then the tooltip will be centered to the parent node containing it.
     */
    "for": {
      type: String,
      observer: '_findTarget'
    },

    /**
     * Set this to true if you want to manually control when the tooltip
     * is shown or hidden.
     */
    manualMode: {
      type: Boolean,
      value: false,
      observer: '_manualModeChanged'
    },

    /**
     * Positions the tooltip to the top, right, bottom, left of its content.
     */
    position: {
      type: String,
      value: 'bottom'
    },

    /**
     * If true, no parts of the tooltip will ever be shown offscreen.
     */
    fitToVisibleBounds: {
      type: Boolean,
      value: false
    },

    /**
     * The spacing between the top of the tooltip and the element it is
     * anchored to.
     */
    offset: {
      type: Number,
      value: 14
    },

    /**
     * This property is deprecated, but left over so that it doesn't
     * break exiting code. Please use `offset` instead. If both `offset` and
     * `marginTop` are provided, `marginTop` will be ignored.
     * @deprecated since version 1.0.3
     */
    marginTop: {
      type: Number,
      value: 14
    },

    /**
     * The delay that will be applied before the `entry` animation is
     * played when showing the tooltip.
     */
    animationDelay: {
      type: Number,
      value: 500,
      observer: '_delayChange'
    },

    /**
     * The animation that will be played on entry.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationEntry: {
      type: String,
      value: ''
    },

    /**
     * The animation that will be played on exit.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationExit: {
      type: String,
      value: ''
    },

    /**
     * This property is deprecated.  Use --paper-tooltip-animation to change the
     * animation. The entry and exit animations that will be played when showing
     * and hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     * @deprecated since version
     *
     * The entry and exit animations that will be played when showing and
     * hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     */
    animationConfig: {
      type: Object,
      value: function value() {
        return {
          'entry': [{
            name: 'fade-in-animation',
            node: this,
            timing: {
              delay: 0
            }
          }],
          'exit': [{
            name: 'fade-out-animation',
            node: this
          }]
        };
      }
    },
    _showing: {
      type: Boolean,
      value: false
    }
  },
  listeners: {
    'webkitAnimationEnd': '_onAnimationEnd'
  },

  /**
   * Returns the target element that this tooltip is anchored to. It is
   * either the element given by the `for` attribute, or the immediate parent
   * of the tooltip.
   *
   * @type {Node}
   */
  get target() {
    var parentNode = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).parentNode; // If the parentNode is a document fragment, then we need to use the host.

    var ownerRoot = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).getOwnerRoot();
    var target;

    if (this["for"]) {
      target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(ownerRoot).querySelector('#' + this["for"]);
    } else {
      target = parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE ? ownerRoot.host : parentNode;
    }

    return target;
  },

  /**
   * @return {void}
   */
  attached: function attached() {
    this._findTarget();
  },

  /**
   * @return {void}
   */
  detached: function detached() {
    if (!this.manualMode) this._removeListeners();
  },

  /**
   * Replaces Neon-Animation playAnimation - just calls show and hide.
   * @deprecated Use show and hide instead.
   * @param {string} type Either `entry` or `exit`
   */
  playAnimation: function playAnimation(type) {
    if (type === 'entry') {
      this.show();
    } else if (type === 'exit') {
      this.hide();
    }
  },

  /**
   * Cancels the animation and either fully shows or fully hides tooltip
   */
  cancelAnimation: function cancelAnimation() {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.add('cancel-animation');
  },

  /**
   * Shows the tooltip programatically
   * @return {void}
   */
  show: function show() {
    // If the tooltip is already showing, there's nothing to do.
    if (this._showing) return;

    if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).textContent.trim() === '') {
      // Check if effective children are also empty
      var allChildrenEmpty = true;
      var effectiveChildren = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).getEffectiveChildNodes();

      for (var i = 0; i < effectiveChildren.length; i++) {
        if (effectiveChildren[i].textContent.trim() !== '') {
          allChildrenEmpty = false;
          break;
        }
      }

      if (allChildrenEmpty) {
        return;
      }
    }

    this._showing = true;
    this.$.tooltip.classList.remove('hidden');
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.updatePosition();
    this._animationPlaying = true;
    this.$.tooltip.classList.add(this._getAnimationType('entry'));
  },

  /**
   * Hides the tooltip programatically
   * @return {void}
   */
  hide: function hide() {
    // If the tooltip is already hidden, there's nothing to do.
    if (!this._showing) {
      return;
    } // If the entry animation is still playing, don't try to play the exit
    // animation since this will reset the opacity to 1. Just end the animation.


    if (this._animationPlaying) {
      this._showing = false;

      this._cancelAnimation();

      return;
    } else {
      // Play Exit Animation
      this._onAnimationFinish();
    }

    this._showing = false;
    this._animationPlaying = true;
  },

  /**
   * @return {void}
   */
  updatePosition: function updatePosition() {
    if (!this._target || !this.offsetParent) return;
    var offset = this.offset; // If a marginTop has been provided by the user (pre 1.0.3), use it.

    if (this.marginTop != 14 && this.offset == 14) offset = this.marginTop;
    var parentRect = this.offsetParent.getBoundingClientRect();

    var targetRect = this._target.getBoundingClientRect();

    var thisRect = this.getBoundingClientRect();
    var horizontalCenterOffset = (targetRect.width - thisRect.width) / 2;
    var verticalCenterOffset = (targetRect.height - thisRect.height) / 2;
    var targetLeft = targetRect.left - parentRect.left;
    var targetTop = targetRect.top - parentRect.top;
    var tooltipLeft, tooltipTop;

    switch (this.position) {
      case 'top':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop - thisRect.height - offset;
        break;

      case 'bottom':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop + targetRect.height + offset;
        break;

      case 'left':
        tooltipLeft = targetLeft - thisRect.width - offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;

      case 'right':
        tooltipLeft = targetLeft + targetRect.width + offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
    } // TODO(noms): This should use IronFitBehavior if possible.


    if (this.fitToVisibleBounds) {
      // Clip the left/right side
      if (parentRect.left + tooltipLeft + thisRect.width > window.innerWidth) {
        this.style.right = '0px';
        this.style.left = 'auto';
      } else {
        this.style.left = Math.max(0, tooltipLeft) + 'px';
        this.style.right = 'auto';
      } // Clip the top/bottom side.


      if (parentRect.top + tooltipTop + thisRect.height > window.innerHeight) {
        this.style.bottom = parentRect.height - targetTop + offset + 'px';
        this.style.top = 'auto';
      } else {
        this.style.top = Math.max(-parentRect.top, tooltipTop) + 'px';
        this.style.bottom = 'auto';
      }
    } else {
      this.style.left = tooltipLeft + 'px';
      this.style.top = tooltipTop + 'px';
    }
  },
  _addListeners: function _addListeners() {
    if (this._target) {
      this.listen(this._target, 'mouseenter', 'show');
      this.listen(this._target, 'focus', 'show');
      this.listen(this._target, 'mouseleave', 'hide');
      this.listen(this._target, 'blur', 'hide');
      this.listen(this._target, 'tap', 'hide');
    }

    this.listen(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.listen(this, 'mouseenter', 'hide');
  },
  _findTarget: function _findTarget() {
    if (!this.manualMode) this._removeListeners();
    this._target = this.target;
    if (!this.manualMode) this._addListeners();
  },
  _delayChange: function _delayChange(newValue) {
    // Only Update delay if different value set
    if (newValue !== 500) {
      this.updateStyles({
        '--paper-tooltip-delay-in': newValue + 'ms'
      });
    }
  },
  _manualModeChanged: function _manualModeChanged() {
    if (this.manualMode) this._removeListeners();else this._addListeners();
  },
  _cancelAnimation: function _cancelAnimation() {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.remove(this._getAnimationType('entry'));
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.add('hidden');
  },
  _onAnimationFinish: function _onAnimationFinish() {
    if (this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('entry'));
      this.$.tooltip.classList.remove('cancel-animation');
      this.$.tooltip.classList.add(this._getAnimationType('exit'));
    }
  },
  _onAnimationEnd: function _onAnimationEnd() {
    // If no longer showing add class hidden to completely hide tooltip
    this._animationPlaying = false;

    if (!this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('exit'));
      this.$.tooltip.classList.add('hidden');
    }
  },
  _getAnimationType: function _getAnimationType(type) {
    // These properties have priority over animationConfig values
    if (type === 'entry' && this.animationEntry !== '') {
      return this.animationEntry;
    }

    if (type === 'exit' && this.animationExit !== '') {
      return this.animationExit;
    } // If no results then return the legacy value from animationConfig


    if (this.animationConfig[type] && typeof this.animationConfig[type][0].name === 'string') {
      // Checking Timing and Update if necessary - Legacy for animationConfig
      if (this.animationConfig[type][0].timing && this.animationConfig[type][0].timing.delay && this.animationConfig[type][0].timing.delay !== 0) {
        var timingDelay = this.animationConfig[type][0].timing.delay; // Has Timing Change - Update CSS

        if (type === 'entry') {
          this.updateStyles({
            '--paper-tooltip-delay-in': timingDelay + 'ms'
          });
        } else if (type === 'exit') {
          this.updateStyles({
            '--paper-tooltip-delay-out': timingDelay + 'ms'
          });
        }
      }

      return this.animationConfig[type][0].name;
    }
  },
  _removeListeners: function _removeListeners() {
    if (this._target) {
      this.unlisten(this._target, 'mouseenter', 'show');
      this.unlisten(this._target, 'focus', 'show');
      this.unlisten(this._target, 'mouseleave', 'hide');
      this.unlisten(this._target, 'blur', 'hide');
      this.unlisten(this._target, 'tap', 'hide');
    }

    this.unlisten(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.unlisten(this, 'mouseenter', 'hide');
  }
});

/***/ })

}]);
//# sourceMappingURL=vendors~dialog-config-flow~panel-config-automation~panel-config-cloud~panel-config-integrations~pane~9cfecaa0.chunk.js.map