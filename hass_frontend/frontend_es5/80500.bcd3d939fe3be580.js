"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["80500"],{99426:function(t,e,i){var o=i(61701),n=(i(71695),i(47021),i(57243)),a=i(50778),r=i(35359),s=i(36522);i(23334),i(37583);let d,c,l,u,h=t=>t;const v={info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"};(0,o.Z)([(0,a.Mo)("ha-alert")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"title",value(){return""}},{kind:"field",decorators:[(0,a.Cb)({attribute:"alert-type"})],key:"alertType",value(){return"info"}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"dismissable",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"method",key:"render",value:function(){return(0,n.dy)(d||(d=h` <div class="issue-type ${0}" role="alert"> <div class="icon ${0}"> <slot name="icon"> <ha-svg-icon .path="${0}"></ha-svg-icon> </slot> </div> <div class="${0}"> <div class="main-content"> ${0} <slot></slot> </div> <div class="action"> <slot name="action"> ${0} </slot> </div> </div> </div> `),(0,r.$)({[this.alertType]:!0}),this.title?"":"no-title",v[this.alertType],(0,r.$)({content:!0,narrow:this.narrow}),this.title?(0,n.dy)(c||(c=h`<div class="title">${0}</div>`),this.title):n.Ld,this.dismissable?(0,n.dy)(l||(l=h`<ha-icon-button @click="${0}" label="Dismiss alert" .path="${0}"></ha-icon-button>`),this._dismissClicked,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):n.Ld)}},{kind:"method",key:"_dismissClicked",value:function(){(0,s.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value(){return(0,n.iv)(u||(u=h`.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.content.narrow{flex-direction:column;align-items:flex-end}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}:host ::slotted(ul){margin:0;padding-inline-start:20px}`))}}]}}),n.oi)},54202:function(t,e,i){var o=i(61701),n=(i(71695),i(47021),i(57243)),a=i(50778),r=i(5111);i(23334);let s,d=t=>t;(0,o.Z)([(0,a.Mo)("ha-icon-button-arrow-prev")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_icon",value(){return"rtl"===r.E.document.dir?"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z":"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}},{kind:"method",key:"render",value:function(){var t;return(0,n.dy)(s||(s=d` <ha-icon-button .disabled="${0}" .label="${0}" .path="${0}"></ha-icon-button> `),this.disabled,this.label||(null===(t=this.hass)||void 0===t?void 0:t.localize("ui.common.back"))||"Back",this._icon)}}]}}),n.oi)},23334:function(t,e,i){var o=i(61701),n=(i(71695),i(47021),i(74269),i(57243)),a=i(50778),r=i(20552);i(37583);let s,d,c,l,u=t=>t;(0,o.Z)([(0,a.Mo)("ha-icon-button")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({type:Boolean,reflect:!0})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:String})],key:"path",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:String,attribute:"aria-haspopup"})],key:"ariaHasPopup",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:"hide-title",type:Boolean})],key:"hideTitle",value(){return!1}},{kind:"field",decorators:[(0,a.IO)("mwc-icon-button",!0)],key:"_button",value:void 0},{kind:"method",key:"focus",value:function(){var t;null===(t=this._button)||void 0===t||t.focus()}},{kind:"field",static:!0,key:"shadowRootOptions",value(){return{mode:"open",delegatesFocus:!0}}},{kind:"method",key:"render",value:function(){return(0,n.dy)(s||(s=u` <mwc-icon-button aria-label="${0}" title="${0}" aria-haspopup="${0}" .disabled="${0}"> ${0} </mwc-icon-button> `),(0,r.o)(this.label),(0,r.o)(this.hideTitle?void 0:this.label),(0,r.o)(this.ariaHasPopup),this.disabled,this.path?(0,n.dy)(d||(d=u`<ha-svg-icon .path="${0}"></ha-svg-icon>`),this.path):(0,n.dy)(c||(c=u`<slot></slot>`)))}},{kind:"field",static:!0,key:"styles",value(){return(0,n.iv)(l||(l=u`:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}mwc-icon-button{--mdc-theme-on-primary:currentColor;--mdc-theme-text-disabled-on-light:var(--disabled-text-color)}`))}}]}}),n.oi)},43344:function(t,e,i){var o=i(61701),n=i(72621),a=(i(52247),i(71695),i(47021),i(57243)),r=i(50778),s=i(36522),d=i(83716);i(23334);let c,l,u,h=t=>t;(0,o.Z)([(0,r.Mo)("ha-menu-button")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"hassio",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hasNotifications",value(){return!1}},{kind:"field",decorators:[(0,r.SB)()],key:"_show",value(){return!1}},{kind:"field",key:"_alwaysVisible",value(){return!1}},{kind:"field",key:"_attachNotifOnConnect",value(){return!1}},{kind:"field",key:"_unsubNotifications",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)(i,"connectedCallback",this,3)([]),this._attachNotifOnConnect&&(this._attachNotifOnConnect=!1,this._subscribeNotifications())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)(i,"disconnectedCallback",this,3)([]),this._unsubNotifications&&(this._attachNotifOnConnect=!0,this._unsubNotifications(),this._unsubNotifications=void 0)}},{kind:"method",key:"render",value:function(){if(!this._show)return a.Ld;const t=this._hasNotifications&&(this.narrow||"always_hidden"===this.hass.dockedSidebar);return(0,a.dy)(c||(c=h` <ha-icon-button .label="${0}" .path="${0}" @click="${0}"></ha-icon-button> ${0} `),this.hass.localize("ui.sidebar.sidebar_toggle"),"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",this._toggleMenu,t?(0,a.dy)(l||(l=h`<div class="dot"></div>`)):"")}},{kind:"method",key:"firstUpdated",value:function(t){(0,n.Z)(i,"firstUpdated",this,3)([t]),this.hassio&&(this._alwaysVisible=(Number(window.parent.frontendVersion)||0)<20190710)}},{kind:"method",key:"willUpdate",value:function(t){if((0,n.Z)(i,"willUpdate",this,3)([t]),!t.has("narrow")&&!t.has("hass"))return;const e=t.has("hass")?t.get("hass"):this.hass,o=(t.has("narrow")?t.get("narrow"):this.narrow)||"always_hidden"===(null==e?void 0:e.dockedSidebar),a=this.narrow||"always_hidden"===this.hass.dockedSidebar;this.hasUpdated&&o===a||(this._show=a||this._alwaysVisible,a?this._subscribeNotifications():this._unsubNotifications&&(this._unsubNotifications(),this._unsubNotifications=void 0))}},{kind:"method",key:"_subscribeNotifications",value:function(){if(this._unsubNotifications)throw new Error("Already subscribed");this._unsubNotifications=(0,d.r)(this.hass.connection,(t=>{this._hasNotifications=t.length>0}))}},{kind:"method",key:"_toggleMenu",value:function(){(0,s.B)(this,"hass-toggle-menu")}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(u||(u=h`:host{position:relative}.dot{pointer-events:none;position:absolute;background-color:var(--accent-color);width:12px;height:12px;top:9px;right:7px;inset-inline-end:7px;inset-inline-start:initial;border-radius:50%;border:2px solid var(--app-header-background-color)}`))}}]}}),a.oi)},37583:function(t,e,i){var o=i(61701),n=(i(71695),i(47021),i(57243)),a=i(50778);let r,s,d,c,l=t=>t;(0,o.Z)([(0,a.Mo)("ha-svg-icon")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"secondaryPath",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"viewBox",value:void 0},{kind:"method",key:"render",value:function(){return(0,n.YP)(r||(r=l` <svg viewBox="${0}" preserveAspectRatio="xMidYMid meet" focusable="false" role="img" aria-hidden="true"> <g> ${0} ${0} </g> </svg>`),this.viewBox||"0 0 24 24",this.path?(0,n.YP)(s||(s=l`<path class="primary-path" d="${0}"></path>`),this.path):n.Ld,this.secondaryPath?(0,n.YP)(d||(d=l`<path class="secondary-path" d="${0}"></path>`),this.secondaryPath):n.Ld)}},{kind:"field",static:!0,key:"styles",value(){return(0,n.iv)(c||(c=l`:host{display:var(--ha-icon-display,inline-flex);align-items:center;justify-content:center;position:relative;vertical-align:middle;fill:var(--icon-primary-color,currentcolor);width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}svg{width:100%;height:100%;pointer-events:none;display:block}path.primary-path{opacity:var(--icon-primary-opactity, 1)}path.secondary-path{fill:var(--icon-secondary-color,currentcolor);opacity:var(--icon-secondary-opactity, .5)}`))}}]}}),n.oi)},83716:function(t,e,i){i.d(e,{r:()=>o});i(71695),i(19423),i(47021);const o=(t,e)=>{const i=new n,o=t.subscribeMessage((t=>e(i.processMessage(t))),{type:"persistent_notification/subscribe"});return()=>{o.then((t=>null==t?void 0:t()))}};class n{constructor(){this.notifications=void 0,this.notifications={}}processMessage(t){if("removed"===t.type)for(const e of Object.keys(t.notifications))delete this.notifications[e];else this.notifications=Object.assign(Object.assign({},this.notifications),t.notifications);return Object.values(this.notifications)}}},34515:function(t,e,i){i.r(e);var o=i(61701),n=(i(71695),i(47021),i(31622),i(57243)),a=i(50778);i(54202),i(43344),i(99426);let r,s,d,c,l,u=t=>t;(0,o.Z)([(0,a.Mo)("hass-error-screen")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"toolbar",value(){return!0}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"rootnav",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)()],key:"error",value:void 0},{kind:"method",key:"render",value:function(){var t,e;return(0,n.dy)(r||(r=u` ${0} <div class="content"> <ha-alert alert-type="error">${0}</ha-alert> <slot> <mwc-button @click="${0}"> ${0} </mwc-button> </slot> </div> `),this.toolbar?(0,n.dy)(s||(s=u`<div class="toolbar"> ${0} </div>`),this.rootnav||null!==(t=history.state)&&void 0!==t&&t.root?(0,n.dy)(d||(d=u` <ha-menu-button .hass="${0}" .narrow="${0}"></ha-menu-button> `),this.hass,this.narrow):(0,n.dy)(c||(c=u` <ha-icon-button-arrow-prev .hass="${0}" @click="${0}"></ha-icon-button-arrow-prev> `),this.hass,this._handleBack)):"",this.error,this._handleBack,null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.back"))}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,n.iv)(l||(l=u`:host{display:block;height:100%;background-color:var(--primary-background-color)}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}ha-icon-button-arrow-prev{pointer-events:auto}.content{color:var(--primary-text-color);height:calc(100% - var(--header-height));display:flex;padding:16px;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}a{color:var(--primary-color)}ha-alert{margin-bottom:16px}`))]}}]}}),n.oi)}}]);
//# sourceMappingURL=80500.bcd3d939fe3be580.js.map