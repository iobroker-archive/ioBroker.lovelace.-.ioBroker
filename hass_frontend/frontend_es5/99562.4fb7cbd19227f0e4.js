(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["99562"],{84200:function(e,t,i){"use strict";i.d(t,{r:()=>o});i(71695),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),i(47021);const n=(e,t,i=true)=>{var o;if(!e||e===document.body)return null;if((e=null!==(o=e.assignedSlot)&&void 0!==o?o:e).parentElement)e=e.parentElement;else{const t=e.getRootNode();e=t instanceof ShadowRoot?t.host:null}return(i?Object.prototype.hasOwnProperty.call(e,t):e&&t in e)?e:n(e,t,i)},o=(e,t,i=true)=>{const o=new Set;for(;e;)o.add(e),e=n(e,t,i);return o}},81165:function(e,t,i){"use strict";i.d(t,{j:()=>n});const n=(e=document)=>{var t;return null!==(t=e.activeElement)&&void 0!==t&&null!==(t=t.shadowRoot)&&void 0!==t&&t.activeElement?n(e.activeElement.shadowRoot):e.activeElement}},76320:function(e,t,i){"use strict";i.d(t,{T:()=>n,y:()=>o});i(40251);const n=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},o=()=>new Promise((e=>{n(e)}))},34273:function(e,t,i){"use strict";var n=i(61701),o=i(72621),a=(i(71695),i(9359),i(31526),i(47021),i(22997),i(57243)),r=i(50778),d=i(5111),l=i(76525);let s,c,u=e=>e;(0,n.Z)([(0,r.Mo)("ha-button-menu")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:l.gA,value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"corner",value(){return"BOTTOM_START"}},{kind:"field",decorators:[(0,r.Cb)({attribute:"menu-corner"})],key:"menuCorner",value(){return"START"}},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"x",value(){return null}},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"y",value(){return null}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"multi",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"activatable",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"fixed",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value(){return!1}},{kind:"field",decorators:[(0,r.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._menu)&&void 0!==e&&e.open?this._menu.focusItemAtIndex(0):null===(t=this._triggerButton)||void 0===t||t.focus()}},{kind:"method",key:"render",value:function(){return(0,a.dy)(s||(s=u` <div @click="${0}"> <slot name="trigger" @slotchange="${0}"></slot> </div> <mwc-menu .corner="${0}" .menuCorner="${0}" .fixed="${0}" .multi="${0}" .activatable="${0}" .y="${0}" .x="${0}"> <slot></slot> </mwc-menu> `),this._handleClick,this._setTriggerAria,this.corner,this.menuCorner,this.fixed,this.multi,this.activatable,this.y,this.x)}},{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)(i,"firstUpdated",this,3)([e]),"rtl"===d.E.document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((e=>{const t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(c||(c=u`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`))}}]}}),a.oi)},48103:function(e,t,i){"use strict";var n=i(61701),o=i(72621),a=(i(71695),i(40251),i(47021),i(57243)),r=i(93958),d=i(97536),l=i(46289),s=i(50778),c=i(36522);let u,h=e=>e;(0,n.Z)([(0,s.Mo)("ha-check-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"onChange",value:async function(e){(0,o.Z)(i,"onChange",this,3)([e]),(0,c.B)(this,e.type)}},{kind:"field",static:!0,key:"styles",value(){return[l.W,d.W,(0,a.iv)(u||(u=h`:host{--mdc-theme-secondary:var(--primary-color)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,16px);margin-inline-start:0px;direction:var(--direction)}.mdc-deprecated-list-item__meta{flex-shrink:0;direction:var(--direction);margin-inline-start:auto;margin-inline-end:0}.mdc-deprecated-list-item__graphic{margin-top:var(--check-list-item-graphic-margin-top)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{margin-inline-start:0;margin-inline-end:var(--mdc-list-item-graphic-margin,32px)}`))]}}]}}),r.F)},83456:function(e,t,i){"use strict";var n=i(61701),o=(i(71695),i(47021),i(92444)),a=i(76688),r=i(57243),d=i(50778);let l,s=e=>e;(0,n.Z)([(0,d.Mo)("ha-checkbox")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value(){return[a.W,(0,r.iv)(l||(l=s`:host{--mdc-theme-secondary:var(--primary-color)}`))]}}]}}),o.A)},84545:function(e,t,i){"use strict";i.r(t),i.d(t,{HaFormMultiSelect:()=>p});var n=i(61701),o=(i(22152),i(19083),i(71695),i(9359),i(56475),i(1331),i(70104),i(61006),i(47021),i(57243)),a=i(50778),r=i(36522);i(34273),i(48103),i(83456),i(55486),i(23334),i(83166),i(64780),i(7843);let d,l,s,c,u,h=e=>e;function m(e){return Array.isArray(e)?e[0]:e}function f(e){return Array.isArray(e)?e[1]||e[0]:e}let p=(0,n.Z)([(0,a.Mo)("ha-form-multi_select")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,a.SB)()],key:"_opened",value(){return!1}},{kind:"field",decorators:[(0,a.IO)("ha-button-menu")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){const e=Array.isArray(this.schema.options)?this.schema.options:Object.entries(this.schema.options),t=this.data||[];return e.length<6?(0,o.dy)(d||(d=h`<div> ${0}${0} </div> `),this.label,e.map((e=>{const i=m(e);return(0,o.dy)(l||(l=h` <ha-formfield .label="${0}"> <ha-checkbox .checked="${0}" .value="${0}" .disabled="${0}" @change="${0}"></ha-checkbox> </ha-formfield> `),f(e),t.includes(i),i,this.disabled,this._valueChanged)}))):(0,o.dy)(s||(s=h` <ha-md-button-menu .disabled="${0}" @opening="${0}" @closing="${0}" positioning="fixed"> <ha-textfield slot="trigger" .label="${0}" .value="${0}" .disabled="${0}" tabindex="-1"></ha-textfield> <ha-icon-button slot="trigger" .label="${0}" .path="${0}"></ha-icon-button> ${0} </ha-md-button-menu> `),this.disabled,this._handleOpen,this._handleClose,this.label,t.map((t=>f(e.find((e=>m(e)===t)))||t)).join(", "),this.disabled,this.label,this._opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z",e.map((e=>{const i=m(e),n=t.includes(i);return(0,o.dy)(c||(c=h`<ha-md-menu-item type="option" aria-checked="${0}" .value="${0}" .action="${0}" .activated="${0}" @click="${0}" @keydown="${0}" keep-open> <ha-checkbox slot="start" tabindex="-1" .checked="${0}"></ha-checkbox> ${0} </ha-md-menu-item>`),n,i,n?"remove":"add",n,this._toggleItem,this._keydown,n,f(e))})))}},{kind:"method",key:"_keydown",value:function(e){"Space"!==e.code&&"Enter"!==e.code||(e.preventDefault(),this._toggleItem(e))}},{kind:"method",key:"_toggleItem",value:function(e){const t=this.data||[];let i;i="add"===e.currentTarget.action?[...t,e.currentTarget.value]:t.filter((t=>t!==e.currentTarget.value)),(0,r.B)(this,"value-changed",{value:i})}},{kind:"method",key:"firstUpdated",value:function(){this.updateComplete.then((()=>{var e;const{formElement:t,mdcRoot:i}=(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-textfield"))||{};t&&(t.style.textOverflow="ellipsis"),i&&(i.style.cursor="pointer")}))}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",Object.keys(this.schema.options).length>=6&&!!this.schema.required)}},{kind:"method",key:"_valueChanged",value:function(e){const{value:t,checked:i}=e.target;this._handleValueChanged(t,i)}},{kind:"method",key:"_handleValueChanged",value:function(e,t){let i;if(t)if(this.data){if(this.data.includes(e))return;i=[...this.data,e]}else i=[e];else{if(!this.data.includes(e))return;i=this.data.filter((t=>t!==e))}(0,r.B)(this,"value-changed",{value:i})}},{kind:"method",key:"_handleOpen",value:function(e){e.stopPropagation(),this._opened=!0,this.toggleAttribute("opened",!0)}},{kind:"method",key:"_handleClose",value:function(e){e.stopPropagation(),this._opened=!1,this.toggleAttribute("opened",!1)}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(u||(u=h`:host([own-margin]){margin-bottom:5px}ha-md-button-menu{display:block;cursor:pointer}ha-formfield{display:block;padding-right:16px;padding-inline-end:16px;padding-inline-start:initial;direction:var(--direction)}ha-textfield{display:block;width:100%;pointer-events:none}ha-icon-button{color:var(--input-dropdown-icon-color);position:absolute;right:1em;top:4px;cursor:pointer;inset-inline-end:1em;inset-inline-start:initial;direction:var(--direction)}:host([opened]) ha-icon-button{color:var(--primary-color)}:host([opened]) ha-md-button-menu{--mdc-text-field-idle-line-color:var(--input-hover-line-color);--mdc-text-field-label-ink-color:var(--primary-color)}`))}}]}}),o.oi)},55486:function(e,t,i){"use strict";var n=i(61701),o=(i(71695),i(47021),i(4918)),a=i(6394),r=i(57243),d=i(50778),l=i(35359),s=i(36522);let c,u,h=e=>e;(0,n.Z)([(0,d.Mo)("ha-formfield")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"disabled",value(){return!1}},{kind:"method",key:"render",value:function(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return(0,r.dy)(c||(c=h` <div class="mdc-form-field ${0}"> <slot></slot> <label class="mdc-label" @click="${0}"> <slot name="label">${0}</slot> </label> </div>`),(0,l.$)(e),this._labelClick,this.label)}},{kind:"method",key:"_labelClick",value:function(){const e=this.input;if(e&&(e.focus(),!e.disabled))switch(e.tagName){case"HA-CHECKBOX":e.checked=!e.checked,(0,s.B)(e,"change");break;case"HA-RADIO":e.checked=!0,(0,s.B)(e,"change");break;default:e.click()}}},{kind:"field",static:!0,key:"styles",value(){return[a.W,(0,r.iv)(u||(u=h`:host(:not([alignEnd])) ::slotted(ha-switch){margin-right:10px;margin-inline-end:10px;margin-inline-start:inline}.mdc-form-field{align-items:var(--ha-formfield-align-items,center);gap:4px}.mdc-form-field>label{direction:var(--direction);margin-inline-start:0;margin-inline-end:auto;padding:0}:host([disabled]) label{color:var(--disabled-text-color)}`))]}}]}}),o.a)},64780:function(e,t,i){"use strict";var n=i(61701),o=(i(71695),i(47021),i(57243)),a=i(50778),r=i(76525),d=i(36522);i(96090);let l,s,c=e=>e;(0,n.Z)([(0,a.Mo)("ha-md-button-menu")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:r.gA,value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)()],key:"positioning",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"has-overflow"})],key:"hasOverflow",value(){return!1}},{kind:"field",decorators:[(0,a.IO)("ha-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){return this._menu.items}},{kind:"method",key:"focus",value:function(){var e;this._menu.open?this._menu.focus():null===(e=this._triggerButton)||void 0===e||e.focus()}},{kind:"method",key:"render",value:function(){return(0,o.dy)(l||(l=c` <div @click="${0}"> <slot name="trigger" @slotchange="${0}"></slot> </div> <ha-menu .positioning="${0}" .hasOverflow="${0}" @opening="${0}" @closing="${0}"> <slot></slot> </ha-menu> `),this._handleClick,this._setTriggerAria,this.positioning,this.hasOverflow,this._handleOpening,this._handleClosing)}},{kind:"method",key:"_handleOpening",value:function(){(0,d.B)(this,"opening",void 0,{composed:!1})}},{kind:"method",key:"_handleClosing",value:function(){(0,d.B)(this,"closing",void 0,{composed:!1})}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchorElement=this,this._menu.open?this._menu.close():this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"], ha-assist-chip[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(s||(s=c`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`))}}]}}),o.oi)},7843:function(e,t,i){"use strict";var n=i(61701),o=i(72621),a=(i(71695),i(47021),i(28674)),r=i(57243),d=i(50778);let l,s=e=>e;(0,n.Z)([(0,d.Mo)("ha-md-menu-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"clickAction",value:void 0},{kind:"field",static:!0,key:"styles",value(){return[...(0,o.Z)(i,"styles",this),(0,r.iv)(l||(l=s`:host{--ha-icon-display:block;--md-sys-color-primary:var(--primary-text-color);--md-sys-color-on-primary:var(--primary-text-color);--md-sys-color-secondary:var(--secondary-text-color);--md-sys-color-surface:var(--card-background-color);--md-sys-color-on-surface:var(--primary-text-color);--md-sys-color-on-surface-variant:var(--secondary-text-color);--md-sys-color-secondary-container:rgba(
          var(--rgb-primary-color),
          0.15
        );--md-sys-color-on-secondary-container:var(--text-primary-color);--mdc-icon-size:16px;--md-sys-color-on-primary-container:var(--primary-text-color);--md-sys-color-on-secondary-container:var(--primary-text-color);--md-menu-item-label-text-font:Roboto,sans-serif}:host(.warning){--md-menu-item-label-text-color:var(--error-color);--md-menu-item-leading-icon-color:var(--error-color)}::slotted([slot=headline]){text-wrap:nowrap}`))]}}]}}),a.i)},96090:function(e,t,i){"use strict";var n=i(61701),o=i(72621),a=(i(71695),i(47021),i(53336)),r=i(7162),d=i(57243),l=i(50778);let s,c=e=>e;(0,n.Z)([(0,l.Mo)("ha-menu")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)(i,"connectedCallback",this,3)([]),this.addEventListener("close-menu",this._handleCloseMenu)}},{kind:"method",key:"_handleCloseMenu",value:function(e){var t,i;e.detail.reason.kind===r.GB.KEYDOWN&&e.detail.reason.key===r.KC.ESCAPE||null===(t=(i=e.detail.initiator).clickAction)||void 0===t||t.call(i,e.detail.initiator)}},{kind:"field",static:!0,key:"styles",value(){return[...(0,o.Z)(i,"styles",this),(0,d.iv)(s||(s=c`:host{--md-sys-color-surface-container:var(--card-background-color)}`))]}}]}}),a.xX)},83166:function(e,t,i){"use strict";i.d(t,{f:()=>p});var n=i(61701),o=i(72621),a=(i(71695),i(47021),i(1105)),r=i(33990),d=i(57243),l=i(50778),s=i(5111);let c,u,h,m,f=e=>e,p=(0,n.Z)([(0,l.Mo)("ha-textfield")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"icon",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"iconTrailing",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,l.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,o.Z)(i,"updated",this,3)([e]),(e.has("invalid")||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||this.validationMessage||"Invalid":""),(this.invalid||this.validateOnInitialRender||e.has("invalid")&&void 0!==e.get("invalid"))&&this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),e.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),e.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(e,t=!1){const i=t?"trailing":"leading";return(0,d.dy)(c||(c=f` <span class="mdc-text-field__icon mdc-text-field__icon--${0}" tabindex="${0}"> <slot name="${0}Icon"></slot> </span> `),i,t?1:-1,i)}},{kind:"field",static:!0,key:"styles",value(){return[r.W,(0,d.iv)(u||(u=f`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:ltr}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}::-ms-reveal{display:none}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px);padding-inline-end:var(--text-field-prefix-padding-right,2px);padding-inline-start:initial}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}#helper-text ha-markdown{display:inline-block}`)),"rtl"===s.E.document.dir?(0,d.iv)(h||(h=f`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl;--direction:rtl}`)):(0,d.iv)(m||(m=f``))]}}]}}),a.P)},76525:function(e,t,i){"use strict";i.d(t,{L$:()=>h,gA:()=>s,lD:()=>p,ts:()=>m,vC:()=>c});i(71695),i(92745),i(19423),i(40251),i(47021);var n=i(5111),o=i(84200);if(66977!=i.j)var a=i(81165);var r=i(76320);const d={},l=[],s=Symbol.for("HA focus target"),c=async(e,t,i,r,u,h=!0)=>{if(!(i in d)){if(!u)return!1;d[i]={element:u().then((()=>{const t=document.createElement(i);return e.provideHass(t),t.addEventListener("dialog-closed",f),t.addEventListener("dialog-closed",g),t}))}}if(h){var m,p;const{history:o}=n.E;if(null!==(m=o.state)&&void 0!==m&&m.dialog&&!l.length)return await new Promise((e=>{setTimeout(e)})),c(e,t,i,r,u,h);const a=l.findIndex((e=>e.dialogTag===i));-1!==a&&l.splice(a,1),l.push({element:e,root:t,dialogTag:i,dialogParams:r,dialogImport:u,addHistory:h});const d={dialog:i};null!==(p=o.state)&&void 0!==p&&p.dialog?o.replaceState(d,""):(o.replaceState(Object.assign(Object.assign({},o.state),{},{opensDialog:!0}),""),o.pushState(d,""))}d[i].closedFocusTargets=(0,o.r)((0,a.j)(),s);const v=await d[i].element;return t.appendChild(v),v.showDialog(r),!0},u=async e=>{if(!(e in d))return!0;const t=await d[e].element;return!t.closeDialog||!1!==t.closeDialog()},h=async()=>{if(l.length){var e;const t=l.pop(),i=await u(t.dialogTag);return i||l.push(t),l.length&&null!==(e=n.E.history.state)&&void 0!==e&&e.opensDialog&&n.E.history.pushState({dialog:l[l.length-1].dialogTag},""),i}return!0},m=async()=>{for(let e=l.length-1;e>=0;e--){if(!(!l[e]||await u(l[e].dialogTag)))return!1}return!0},f=e=>{var t;const i=l.findIndex((t=>t.dialogTag===e.detail.dialog));-1!==i&&l.splice(i,1),(null===(t=n.E.history.state)||void 0===t?void 0:t.dialog)===e.detail.dialog&&(l.length?n.E.history.replaceState({dialog:l[l.length-1].dialogTag},""):-1!==i&&n.E.history.back())},p=(e,t)=>{e.addEventListener("show-dialog",(i=>{const{dialogTag:n,dialogImport:o,dialogParams:a,addHistory:r}=i.detail;c(e,t,n,a,o,r)}))},g=async e=>{if(!d[e.detail.dialog])return;const t=d[e.detail.dialog].closedFocusTargets;if(delete d[e.detail.dialog].closedFocusTargets,!t)return;let i=(0,a.j)();i instanceof HTMLElement&&i.blur(),await(0,r.y)();for(const n of t)if(n instanceof HTMLElement&&(n.focus(),i=(0,a.j)(),i&&i!==document.body))return}},22152:function(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,t){return void 0!==t&&(t=!!t),this.hasAttribute(e)?!!t||(this.removeAttribute(e),!1):!1!==t&&(this.setAttribute(e,""),!0)})}}]);
//# sourceMappingURL=99562.4fb7cbd19227f0e4.js.map