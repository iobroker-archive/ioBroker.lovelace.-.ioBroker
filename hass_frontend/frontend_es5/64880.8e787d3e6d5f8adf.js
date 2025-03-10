"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["64880"],{92636:function(t,e,i){i.d(e,{z:()=>s});i(19083),i(61006);const s=t=>(e,i)=>t.includes(e,i)},59847:function(t,e,i){i.d(e,{N:()=>o});var s=i(73850);const o=t=>(0,s.M)(t.entity_id)},75278:function(t,e,i){i.d(e,{e:()=>s});const s=(t,e)=>o(t.attributes,e),o=(t,e)=>!!(t.supported_features&e)},99426:function(t,e,i){i.r(e);var s=i(61701),o=(i(71695),i(47021),i(57243)),a=i(50778),n=i(35359),r=i(36522);i(23334),i(37583);let c,d,l,u,h=t=>t;const p={info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"};(0,s.Z)([(0,a.Mo)("ha-alert")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"title",value(){return""}},{kind:"field",decorators:[(0,a.Cb)({attribute:"alert-type"})],key:"alertType",value(){return"info"}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"dismissable",value(){return!1}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"method",key:"render",value:function(){return(0,o.dy)(c||(c=h` <div class="issue-type ${0}" role="alert"> <div class="icon ${0}"> <slot name="icon"> <ha-svg-icon .path="${0}"></ha-svg-icon> </slot> </div> <div class="${0}"> <div class="main-content"> ${0} <slot></slot> </div> <div class="action"> <slot name="action"> ${0} </slot> </div> </div> </div> `),(0,n.$)({[this.alertType]:!0}),this.title?"":"no-title",p[this.alertType],(0,n.$)({content:!0,narrow:this.narrow}),this.title?(0,o.dy)(d||(d=h`<div class="title">${0}</div>`),this.title):o.Ld,this.dismissable?(0,o.dy)(l||(l=h`<ha-icon-button @click="${0}" label="Dismiss alert" .path="${0}"></ha-icon-button>`),this._dismissClicked,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):o.Ld)}},{kind:"method",key:"_dismissClicked",value:function(){(0,r.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(u||(u=h`.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.content.narrow{flex-direction:column;align-items:flex-end}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}:host ::slotted(ul){margin:0;padding-inline-start:20px}`))}}]}}),o.oi)},96530:function(t,e,i){i.d(e,{X:()=>a,y:()=>o});var s=i(92636);const o=["input_boolean","input_button","input_text","input_number","input_datetime","input_select","counter","timer","schedule"],a=(0,s.z)(o)},45676:function(t,e,i){i.r(e);var s=i(61701),o=(i(71695),i(40251),i(47021),i(31622),i(57243)),a=i(50778),n=i(36522),r=i(73729),c=(i(29073),i(83166),i(43546)),d=i(28008),l=i(72473);let u,h,p,m,v=t=>t;const f=[{name:"new_password",required:!0,selector:{text:{type:"password",autocomplete:"new-password"}}},{name:"password_confirm",required:!0,selector:{text:{type:"password",autocomplete:"new-password"}}}];(0,s.Z)([(0,a.Mo)("dialog-admin-change-password")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_userId",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_submitting",value(){return!1}},{kind:"field",decorators:[(0,a.SB)()],key:"_success",value(){return!1}},{kind:"method",key:"showDialog",value:function(t){this._params=t,this._userId=t.userId}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._data=void 0,this._submitting=!1,this._success=!1,(0,n.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"field",key:"_computeLabel",value(){return t=>this.hass.localize(`ui.panel.config.users.change_password.${t.name}`)}},{kind:"field",key:"_computeError",value(){return t=>this.hass.localize(`ui.panel.config.users.change_password.${t}`)||t}},{kind:"method",key:"_validate",value:function(){this._data&&this._data.new_password&&this._data.password_confirm&&this._data.new_password!==this._data.password_confirm?this._error={password_confirm:"password_no_match"}:this._error=void 0}},{kind:"method",key:"render",value:function(){var t,e;if(!this._params)return o.Ld;const i=Boolean((null===(t=this._data)||void 0===t?void 0:t.new_password)&&(null===(e=this._data)||void 0===e?void 0:e.password_confirm)&&!this._error);return(0,o.dy)(u||(u=v` <ha-dialog open @closed="${0}" scrimClickAction escapeKeyAction .heading="${0}"> ${0} </ha-dialog> `),this.closeDialog,(0,r.i)(this.hass,this.hass.localize("ui.panel.config.users.change_password.caption")),this._success?(0,o.dy)(h||(h=v` <p> ${0} </p> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> `),this.hass.localize("ui.panel.config.users.change_password.password_changed"),this.closeDialog,this.hass.localize("ui.common.ok")):(0,o.dy)(p||(p=v` <ha-form .hass="${0}" .data="${0}" .error="${0}" .schema="${0}" .computeLabel="${0}" .computeError="${0}" @value-changed="${0}" .disabled="${0}"></ha-form> <mwc-button slot="secondaryAction" @click="${0}"> ${0} </mwc-button> <mwc-button slot="primaryAction" @click="${0}" .disabled="${0}"> ${0} </mwc-button> `),this.hass,this._data,this._error,f,this._computeLabel,this._computeError,this._valueChanged,this._submitting,this.closeDialog,this.hass.localize("ui.common.cancel"),this._changePassword,this._submitting||!i,this.hass.localize("ui.panel.config.users.change_password.change")))}},{kind:"method",key:"_valueChanged",value:function(t){this._data=t.detail.value,this._validate()}},{kind:"method",key:"_changePassword",value:async function(){var t;if(this._userId&&null!==(t=this._data)&&void 0!==t&&t.new_password)try{this._submitting=!0,await(0,c.TZ)(this.hass,this._userId,this._data.new_password),this._success=!0}catch(i){var e;(0,l.C)(this,{message:(null===(e=i.body)||void 0===e?void 0:e.message)||i.message||i})}finally{this._submitting=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return[d.yu,(0,o.iv)(m||(m=v``))]}}]}}),o.oi)},30338:function(t,e,i){var s=i(97934),o=i(71998),a=i(4576),n=i(36760);t.exports=function(t,e){e&&"string"==typeof t||o(t);var i=n(t);return a(o(void 0!==i?s(i,t):t))}},60933:function(t,e,i){var s=i(40810),o=i(57877),a=i(63983),n=i(12360),r=i(13053),c=i(47645);s({target:"Array",proto:!0},{flatMap:function(t){var e,i=n(this),s=r(i);return a(t),(e=c(i,0)).length=o(e,i,i,s,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},32126:function(t,e,i){i(35709)("flatMap")},25677:function(t,e,i){var s=i(40810),o=i(97934),a=i(63983),n=i(71998),r=i(4576),c=i(30338),d=i(79995),l=i(14181),u=i(92288),h=d((function(){for(var t,e,i=this.iterator,s=this.mapper;;){if(e=this.inner)try{if(!(t=n(o(e.next,e.iterator))).done)return t.value;this.inner=null}catch(a){l(i,"throw",a)}if(t=n(o(this.next,i)),this.done=!!t.done)return;try{this.inner=c(s(t.value,this.counter++),!1)}catch(a){l(i,"throw",a)}}}));s({target:"Iterator",proto:!0,real:!0,forced:u},{flatMap:function(t){return n(this),a(t),new h(r(this),{mapper:t,inner:null})}})}}]);
//# sourceMappingURL=64880.8e787d3e6d5f8adf.js.map