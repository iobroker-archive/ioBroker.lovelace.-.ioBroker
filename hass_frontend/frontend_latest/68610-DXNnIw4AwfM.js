/*! For license information please see 68610-DXNnIw4AwfM.js.LICENSE.txt */
export const id=68610;export const ids=[68610];export const modules={44577:(e,i,t)=>{var a=t(43204),d=t(79932),o=t(61092),n=t(96762);let s=class extends o.K{};s.styles=[n.W],s=(0,a.__decorate)([(0,d.Mo)("mwc-list-item")],s)},68101:(e,i,t)=>{var a=t(17463),d=(t(44577),t(68144)),o=t(79932),n=t(83448),s=t(14516),r=t(47181),l=t(58831),c=t(40163),u=t(57066),h=t(57292),v=t(26765);t(77576),t(10983),t(52039);const p=e=>d.dy`<mwc-list-item class="${(0,n.$)({"add-new":"add_new"===e.area_id})}"> ${e.name} </mwc-list-item>`;(0,a.Z)([(0,o.Mo)("ha-area-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"exclude-areas"})],key:"excludeAreas",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,o.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"field",key:"_getAreas",value(){return(0,s.Z)(((e,i,t,a,d,o,n,s,r,c)=>{if(!e.length)return[{area_id:"no_areas",name:this.hass.localize("ui.components.area-picker.no_areas"),picture:null,aliases:[]}];let u,v,p={};(a||d||o||n||s)&&(p=(0,h.R6)(t),u=i,v=t.filter((e=>e.area_id)),a&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>a.includes((0,l.M)(e.entity_id))))})),v=v.filter((e=>a.includes((0,l.M)(e.entity_id))))),d&&(u=u.filter((e=>{const i=p[e.id];return!i||!i.length||t.every((e=>!d.includes((0,l.M)(e.entity_id))))})),v=v.filter((e=>!d.includes((0,l.M)(e.entity_id))))),o&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&o.includes(i.attributes.device_class))}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return i.attributes.device_class&&o.includes(i.attributes.device_class)}))),n&&(u=u.filter((e=>n(e)))),s&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&s(i)}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return!!i&&s(i)}))));let f,m=e;var b;(u&&(f=u.filter((e=>e.area_id)).map((e=>e.area_id))),v)&&(f=(null!==(b=f)&&void 0!==b?b:[]).concat(v.filter((e=>e.area_id)).map((e=>e.area_id))));return f&&(m=e.filter((e=>f.includes(e.area_id)))),c&&(m=m.filter((e=>!c.includes(e.area_id)))),m.length||(m=[{area_id:"no_areas",name:this.hass.localize("ui.components.area-picker.no_match"),picture:null,aliases:[]}]),r?m:[...m,{area_id:"add_new",name:this.hass.localize("ui.components.area-picker.add_new"),picture:null,aliases:[]}]}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getAreas(Object.values(this.hass.areas),Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas).map((e=>({...e,strings:[e.area_id,...e.aliases,e.name]})));this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){var e;return d.dy` <ha-combo-box .hass="${this.hass}" .helper="${this.helper}" item-value-path="area_id" item-id-path="area_id" item-label-path="name" .value="${this.value}" .disabled="${this.disabled}" .required="${this.required}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.area-picker.area"):this.label}" .placeholder="${this.placeholder?null===(e=this.hass.areas[this.placeholder])||void 0===e?void 0:e.name:void 0}" .renderer="${p}" @filter-changed="${this._filterChanged}" @opened-changed="${this._openedChanged}" @value-changed="${this._areaChanged}"> </ha-combo-box> `}},{kind:"method",key:"_filterChanged",value:function(e){var i;const t=e.detail.value;if(!t)return void(this.comboBox.filteredItems=this.comboBox.items);const a=(0,c.q)(t,(null===(i=this.comboBox)||void 0===i?void 0:i.items)||[]);this.noAdd||0!==(null==a?void 0:a.length)?this.comboBox.filteredItems=a:(this._suggestion=t,this.comboBox.filteredItems=[{area_id:"add_new_suggestion",name:this.hass.localize("ui.components.area-picker.add_new_sugestion",{name:this._suggestion}),picture:null}])}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();let i=e.detail.value;"no_areas"===i&&(i=""),["add_new_suggestion","add_new"].includes(i)?(e.target.value=this._value,(0,v.D9)(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.title"),text:this.hass.localize("ui.components.area-picker.add_dialog.text"),confirmText:this.hass.localize("ui.components.area-picker.add_dialog.add"),inputLabel:this.hass.localize("ui.components.area-picker.add_dialog.name"),defaultValue:"add_new_suggestion"===i?this._suggestion:void 0,confirm:async e=>{if(e)try{const i=await(0,u.Lo)(this.hass,{name:e}),t=[...Object.values(this.hass.areas),i];this.comboBox.filteredItems=this._getAreas(t,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(i.area_id)}catch(e){(0,v.Ys)(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.failed_create_area"),text:e.message})}},cancel:()=>{this._setValue(void 0),this._suggestion=void 0}})):i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,r.B)(this,"value-changed",{value:e}),(0,r.B)(this,"change")}),0)}}]}}),d.oi)},77576:(e,i,t)=>{var a=t(17463),d=t(34541),o=t(47838),n=t(29530),s=(t(15681),t(53947)),r=t(68144),l=t(79932),c=t(30153),u=t(47181);t(10983),t(73366),t(3555);(0,s.hC)("vaadin-combo-box-item",r.iv`:host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}`);(0,a.Z)([(0,l.Mo)("ha-combo-box")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"invalid",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:()=>"value"},{kind:"field",decorators:[(0,l.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:()=>"label"},{kind:"field",decorators:[(0,l.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,l.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,l.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:async function(){var e,i;await this.updateComplete,await(null===(e=this._inputElement)||void 0===e?void 0:e.updateComplete),null===(i=this._inputElement)||void 0===i||i.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,d.Z)((0,o.Z)(t.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return r.dy` <vaadin-combo-box-light .itemValuePath="${this.itemValuePath}" .itemIdPath="${this.itemIdPath}" .itemLabelPath="${this.itemLabelPath}" .items="${this.items}" .value="${this.value||""}" .filteredItems="${this.filteredItems}" .dataProvider="${this.dataProvider}" .allowCustomValue="${this.allowCustomValue}" .disabled="${this.disabled}" .required="${this.required}" ${(0,n.t)(this.renderer||this._defaultRowRenderer)} @opened-changed="${this._openedChanged}" @filter-changed="${this._filterChanged}" @value-changed="${this._valueChanged}" attr-for-value="value"> <ha-textfield label="${(0,c.o)(this.label)}" placeholder="${(0,c.o)(this.placeholder)}" ?disabled="${this.disabled}" ?required="${this.required}" validationMessage="${(0,c.o)(this.validationMessage)}" .errorMessage="${this.errorMessage}" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" input-spellcheck="false" .suffix="${r.dy`<div style="width:28px" role="none presentation"></div>`}" .icon="${this.icon}" .invalid="${this.invalid}" helper="${(0,c.o)(this.helper)}" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ${this.value?r.dy`<ha-svg-icon role="button" tabindex="-1" aria-label="${(0,c.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear"))}" class="clear-button" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" @click="${this._clearValue}"></ha-svg-icon>`:""} <ha-svg-icon role="button" tabindex="-1" aria-label="${(0,c.o)(this.label)}" aria-expanded="${this.opened?"true":"false"}" class="toggle-button" .path="${this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z"}" @click="${this._toggleOpen}"></ha-svg-icon> </vaadin-combo-box-light> `}},{kind:"field",key:"_defaultRowRenderer",value(){return e=>r.dy`<ha-list-item> ${this.itemLabelPath?e[this.itemLabelPath]:e} </ha-list-item>`}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,u.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var i,t;this.opened?(null===(i=this._comboBox)||void 0===i||i.close(),e.stopPropagation()):null===(t=this._comboBox)||void 0===t||t.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){e.stopPropagation();const i=e.detail.value;if(setTimeout((()=>{this.opened=i}),0),(0,u.B)(this,"opened-changed",{value:e.detail.value}),i){const e=document.querySelector("vaadin-combo-box-overlay");e&&this._removeInert(e),this._observeBody()}else{var t;null===(t=this._bodyMutationObserver)||void 0===t||t.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&this._removeInert(e)})),e.removedNodes.forEach((e=>{var i;"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),this._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var i;if(e.inert)return e.inert=!1,null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((e=>{e.forEach((e=>{if("inert"===e.attributeName){const t=e.target;var i;if(t.inert)null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),this._overlayMutationObserver=void 0,t.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,u.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this.allowCustomValue||(this._comboBox._closeOnBlurIsPrevented=!0);const i=e.detail.value;i!==this.value&&(0,u.B)(this,"value-changed",{value:i||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`:host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh - 56px)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}`}}]}}),r.oi)},73366:(e,i,t)=>{t.d(i,{M:()=>c});var a=t(17463),d=t(34541),o=t(47838),n=t(61092),s=t(96762),r=t(68144),l=t(79932);let c=(0,a.Z)([(0,l.Mo)("ha-list-item")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,d.Z)((0,o.Z)(t.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[s.W,r.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),n.K)},68610:(e,i,t)=>{t.r(i),t.d(i,{HaAreaSelector:()=>v});var a=t(17463),d=t(68144),o=t(79932),n=t(14516),s=t(76680),r=t(57292),l=t(75012),c=t(33855),u=(t(68101),t(47181)),h=t(73826);(0,a.Z)([(0,o.Mo)("ha-areas-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:"picked-area-label"})],key:"pickedAreaLabel",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:"pick-area-label"})],key:"pickAreaLabel",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return d.Ld;const e=this._currentAreas;return d.dy` ${e.map((e=>d.dy` <div> <ha-area-picker .curValue="${e}" .noAdd="${this.noAdd}" .hass="${this.hass}" .value="${e}" .label="${this.pickedAreaLabel}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeDeviceClasses="${this.includeDeviceClasses}" .deviceFilter="${this.deviceFilter}" .entityFilter="${this.entityFilter}" .disabled="${this.disabled}" @value-changed="${this._areaChanged}"></ha-area-picker> </div> `))} <div> <ha-area-picker .noAdd="${this.noAdd}" .hass="${this.hass}" .label="${this.pickAreaLabel}" .helper="${this.helper}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeDeviceClasses="${this.includeDeviceClasses}" .deviceFilter="${this.deviceFilter}" .entityFilter="${this.entityFilter}" .disabled="${this.disabled}" .placeholder="${this.placeholder}" .required="${this.required&&!e.length}" @value-changed="${this._addArea}"></ha-area-picker> </div> `}},{kind:"get",key:"_currentAreas",value:function(){return this.value||[]}},{kind:"method",key:"_updateAreas",value:async function(e){this.value=e,(0,u.B)(this,"value-changed",{value:e})}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;if(t===i)return;const a=this._currentAreas;t&&!a.includes(t)?this._updateAreas(a.map((e=>e===i?t:e))):this._updateAreas(a.filter((e=>e!==i)))}},{kind:"method",key:"_addArea",value:function(e){e.stopPropagation();const i=e.detail.value;if(!i)return;e.currentTarget.value="";const t=this._currentAreas;t.includes(i)||this._updateAreas([...t,i])}},{kind:"field",static:!0,key:"styles",value:()=>d.iv`div{margin-top:8px}`}]}}),(0,h.f)(d.oi));let v=(0,a.Z)([(0,o.Mo)("ha-selector-area")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,o.SB)()],key:"_entitySources",value:void 0},{kind:"field",key:"_deviceIntegrationLookup",value:()=>(0,n.Z)(r.HP)},{kind:"method",key:"_hasIntegration",value:function(e){var i,t;return(null===(i=e.area)||void 0===i?void 0:i.entity)&&(0,s.r)(e.area.entity).some((e=>e.integration))||(null===(t=e.area)||void 0===t?void 0:t.device)&&(0,s.r)(e.area.device).some((e=>e.integration))}},{kind:"method",key:"updated",value:function(e){e.has("selector")&&this._hasIntegration(this.selector)&&!this._entitySources&&(0,l.m)(this.hass).then((e=>{this._entitySources=e}))}},{kind:"method",key:"render",value:function(){var e;return this._hasIntegration(this.selector)&&!this._entitySources?d.Ld:null!==(e=this.selector.area)&&void 0!==e&&e.multiple?d.dy` <ha-areas-picker .hass="${this.hass}" .value="${this.value}" .helper="${this.helper}" .pickAreaLabel="${this.label}" no-add .deviceFilter="${this._filterDevices}" .entityFilter="${this._filterEntities}" .disabled="${this.disabled}" .required="${this.required}"></ha-areas-picker> `:d.dy` <ha-area-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" no-add .deviceFilter="${this._filterDevices}" .entityFilter="${this._filterEntities}" .disabled="${this.disabled}" .required="${this.required}"></ha-area-picker> `}},{kind:"field",key:"_filterEntities",value(){return e=>{var i;return null===(i=this.selector.area)||void 0===i||!i.entity||(0,s.r)(this.selector.area.entity).some((i=>(0,c.lV)(i,e,this._entitySources)))}}},{kind:"field",key:"_filterDevices",value(){return e=>{var i;if(null===(i=this.selector.area)||void 0===i||!i.device)return!0;const t=this._entitySources?this._deviceIntegrationLookup(this._entitySources,Object.values(this.hass.entities)):void 0;return(0,s.r)(this.selector.area.device).some((i=>(0,c.lE)(i,e,t)))}}}]}}),d.oi)},3555:(e,i,t)=>{var a=t(17463),d=t(34541),o=t(47838),n=t(42977),s=t(31338),r=t(68144),l=t(79932);(0,a.Z)([(0,l.Mo)("ha-textfield")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,l.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,d.Z)((0,o.Z)(t.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),e.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),e.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(e,i=!1){const t=i?"trailing":"leading";return r.dy` <span class="mdc-text-field__icon mdc-text-field__icon--${t}" tabindex="${i?1:-1}"> <slot name="${t}Icon"></slot> </span> `}},{kind:"field",static:!0,key:"styles",value:()=>[s.W,r.iv`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}`,"rtl"===document.dir?r.iv`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}`:r.iv``]}]}}),n.P)},57066:(e,i,t)=>{t.d(i,{Dl:()=>v,IO:()=>s,Lo:()=>n,TD:()=>h,qv:()=>r,sG:()=>u});var a=t(97330),d=t(85415),o=t(38346);const n=(e,i)=>e.callWS({type:"config/area_registry/create",...i}),s=(e,i,t)=>e.callWS({type:"config/area_registry/update",area_id:i,...t}),r=(e,i)=>e.callWS({type:"config/area_registry/delete",area_id:i}),l=e=>e.sendMessagePromise({type:"config/area_registry/list"}).then((e=>e.sort(((e,i)=>(0,d.$)(e.name,i.name))))),c=(e,i)=>e.subscribeEvents((0,o.D)((()=>l(e).then((e=>i.setState(e,!0)))),500,!0),"area_registry_updated"),u=(e,i)=>(0,a.B)("_areaRegistry",l,c,e,i),h=e=>{const i={};for(const t of e)t.area_id&&(t.area_id in i||(i[t.area_id]=[]),i[t.area_id].push(t));return i},v=e=>{const i={};for(const t of e)t.area_id&&(t.area_id in i||(i[t.area_id]=[]),i[t.area_id].push(t));return i}},75012:(e,i,t)=>{t.d(i,{m:()=>o});const a=async(e,i,t,d,o,...n)=>{const s=o,r=s[e],l=r=>d&&d(o,r.result)!==r.cacheKey?(s[e]=void 0,a(e,i,t,d,o,...n)):r.result;if(r)return r instanceof Promise?r.then(l):l(r);const c=t(o,...n);return s[e]=c,c.then((t=>{s[e]={result:t,cacheKey:null==d?void 0:d(o,t)},setTimeout((()=>{s[e]=void 0}),i)}),(()=>{s[e]=void 0})),c},d=e=>e.callWS({type:"entity/source"}),o=e=>a("_entitySources",3e4,d,(e=>Object.keys(e.states).length),e)},26765:(e,i,t)=>{t.d(i,{D9:()=>r,Ys:()=>n,g7:()=>s});var a=t(47181);const d=()=>Promise.all([t.e(28597),t.e(45497),t.e(52154),t.e(55760),t.e(1281)]).then(t.bind(t,1281)),o=(e,i,t)=>new Promise((o=>{const n=i.cancel,s=i.confirm;(0,a.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:d,dialogParams:{...i,...t,cancel:()=>{o(!(null==t||!t.prompt)&&null),n&&n()},confirm:e=>{o(null==t||!t.prompt||e),s&&s(e)}}})})),n=(e,i)=>o(e,i),s=(e,i)=>o(e,i,{confirmation:!0}),r=(e,i)=>o(e,i,{prompt:!0})},73826:(e,i,t)=>{t.d(i,{f:()=>s});var a=t(17463),d=t(34541),o=t(47838),n=t(79932);const s=e=>(0,a.Z)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,d.Z)((0,o.Z)(t.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,d.Z)((0,o.Z)(t.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,d.Z)((0,o.Z)(t.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const i of e.keys())if(this.hassSubscribeRequiredHostProps.includes(i))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)}};
//# sourceMappingURL=68610-DXNnIw4AwfM.js.map