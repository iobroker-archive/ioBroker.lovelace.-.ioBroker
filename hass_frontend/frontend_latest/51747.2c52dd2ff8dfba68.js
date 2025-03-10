export const __webpack_ids__=["51747"];export const __webpack_modules__={51784:function(e,t,i){i.d(t,{dJ:()=>u,zB:()=>p});var a=i(44249),o=i(72621),s=i(67840),n=i(88854),r=i(57243),d=i(15093);let l;s.A.addInitializer((async e=>{await e.updateComplete;const t=e;t.dialog.prepend(t.scrim),t.scrim.style.inset=0,t.scrim.style.zIndex=0;const{getOpenAnimation:i,getCloseAnimation:a}=t;t.getOpenAnimation=()=>{const e=i.call(void 0);return e.container=[...e.container??[],...e.dialog??[]],e.dialog=[],e},t.getCloseAnimation=()=>{const e=a.call(void 0);return e.container=[...e.container??[],...e.dialog??[]],e.dialog=[],e}}));(0,a.Z)([(0,d.Mo)("ha-md-dialog")],(function(e,t){class a extends t{constructor(){super(),e(this),this.addEventListener("cancel",this._handleCancel),"function"!=typeof HTMLDialogElement&&(this.addEventListener("open",this._handleOpen),l||(l=i.e("73854").then(i.bind(i,85893)))),void 0===this.animate&&(this.quick=!0),void 0===this.animate&&(this.quick=!0)}}return{F:a,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:"disable-cancel-action",type:Boolean})],key:"disableCancelAction",value:()=>!1},{kind:"field",key:"_polyfillDialogRegistered",value:()=>!1},{kind:"method",key:"_handleOpen",value:async function(e){if(e.preventDefault(),this._polyfillDialogRegistered)return;this._polyfillDialogRegistered=!0,this._loadPolyfillStylesheet("/static/polyfills/dialog-polyfill.css");const t=this.shadowRoot?.querySelector("dialog");(await l).default.registerDialog(t),this.removeEventListener("open",this._handleOpen),this.show()}},{kind:"method",key:"_loadPolyfillStylesheet",value:async function(e){const t=document.createElement("link");return t.rel="stylesheet",t.href=e,new Promise(((i,a)=>{t.onload=()=>i(),t.onerror=()=>a(new Error(`Stylesheet failed to load: ${e}`)),this.shadowRoot?.appendChild(t)}))}},{kind:"method",key:"_handleCancel",value:function(e){if(this.disableCancelAction){e.preventDefault();const t=this.shadowRoot?.querySelector("dialog .container");void 0!==this.animate&&t?.animate([{transform:"rotate(-1deg)","animation-timing-function":"ease-in"},{transform:"rotate(1.5deg)","animation-timing-function":"ease-out"},{transform:"rotate(0deg)","animation-timing-function":"ease-in"}],{duration:200,iterations:2})}}},{kind:"field",static:!0,key:"styles",value(){return[...(0,o.Z)(a,"styles",this),r.iv`:host{--md-dialog-container-color:var(--card-background-color);--md-dialog-headline-color:var(--primary-text-color);--md-dialog-supporting-text-color:var(--primary-text-color);--md-sys-color-scrim:#000000;--md-dialog-headline-weight:400;--md-dialog-headline-size:1.574rem;--md-dialog-supporting-text-size:1rem;--md-dialog-supporting-text-line-height:1.5rem}:host([type=alert]){min-width:320px}@media all and (max-width:450px),all and (max-height:500px){:host(:not([type=alert])){min-width:calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));max-width:calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));min-height:100%;max-height:100%;--md-dialog-container-shape:0}}::slotted(ha-dialog-header[slot=headline]){display:contents}.scroller{overflow:var(--dialog-content-overflow,auto)}slot[name=content]::slotted(*){padding:var(--dialog-content-padding,24px)}.scrim{z-index:10}`]}}]}}),s.A);const c={...n.I,dialog:[[[{transform:"translateY(50px)"},{transform:"translateY(0)"}],{duration:500,easing:"cubic-bezier(.3,0,0,1)"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}]]},h={...n.G,dialog:[[[{transform:"translateY(0)"},{transform:"translateY(50px)"}],{duration:150,easing:"cubic-bezier(.3,0,0,1)"}]],container:[[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]]},u=()=>window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches?c:n.I,p=()=>window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches?h:n.G},34326:function(e,t,i){var a=i(44249),o=i(57243),s=i(15093);i(23334),i(83166);(0,a.Z)([(0,s.Mo)("ha-password-field")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"iconTrailing",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"value",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"placeholder",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"label",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"minLength",value:()=>-1},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"maxLength",value:()=>-1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"helper",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"validateOnInitialRender",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"validationMessage",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"autoValidate",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"pattern",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"size",value:()=>null},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"helperPersistent",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"charCounter",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"endAligned",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"prefix",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"suffix",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"name",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({type:String,attribute:"input-mode"})],key:"inputMode",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({attribute:!1,type:String})],key:"autocapitalize",value:()=>""},{kind:"field",decorators:[(0,s.SB)()],key:"_unmaskedPassword",value:()=>!1},{kind:"field",decorators:[(0,s.IO)("ha-textfield")],key:"_textField",value:void 0},{kind:"method",key:"render",value:function(){return o.dy`<ha-textfield .invalid="${this.invalid}" .errorMessage="${this.errorMessage}" .icon="${this.icon}" .iconTrailing="${this.iconTrailing}" .autocomplete="${this.autocomplete}" .autocorrect="${this.autocorrect}" .inputSpellcheck="${this.inputSpellcheck}" .value="${this.value}" .placeholder="${this.placeholder}" .label="${this.label}" .disabled="${this.disabled}" .required="${this.required}" .minLength="${this.minLength}" .maxLength="${this.maxLength}" .outlined="${this.outlined}" .helper="${this.helper}" .validateOnInitialRender="${this.validateOnInitialRender}" .validationMessage="${this.validationMessage}" .autoValidate="${this.autoValidate}" .pattern="${this.pattern}" .size="${this.size}" .helperPersistent="${this.helperPersistent}" .charCounter="${this.charCounter}" .endAligned="${this.endAligned}" .prefix="${this.prefix}" .name="${this.name}" .inputMode="${this.inputMode}" .readOnly="${this.readOnly}" .autocapitalize="${this.autocapitalize}" .type="${this._unmaskedPassword?"text":"password"}" .suffix="${o.dy`<div style="width:24px"></div>`}" @input="${this._handleInputEvent}" @change="${this._handleChangeEvent}"></ha-textfield> <ha-icon-button .label="${this.hass?.localize(this._unmaskedPassword?"ui.components.selectors.text.hide_password":"ui.components.selectors.text.show_password")||(this._unmaskedPassword?"Hide password":"Show password")}" @click="${this._toggleUnmaskedPassword}" .path="${this._unmaskedPassword?"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z":"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"}"></ha-icon-button>`}},{kind:"method",key:"focus",value:function(){this._textField.focus()}},{kind:"method",key:"checkValidity",value:function(){return this._textField.checkValidity()}},{kind:"method",key:"reportValidity",value:function(){return this._textField.reportValidity()}},{kind:"method",key:"setCustomValidity",value:function(e){return this._textField.setCustomValidity(e)}},{kind:"method",key:"layout",value:function(){return this._textField.layout()}},{kind:"method",key:"_toggleUnmaskedPassword",value:function(){this._unmaskedPassword=!this._unmaskedPassword}},{kind:"method",decorators:[(0,s.hO)({passive:!0})],key:"_handleInputEvent",value:function(e){this.value=e.target.value}},{kind:"method",decorators:[(0,s.hO)({passive:!0})],key:"_handleChangeEvent",value:function(e){this.value=e.target.value,this._reDispatchEvent(e)}},{kind:"method",key:"_reDispatchEvent",value:function(e){const t=new Event(e.type,e);this.dispatchEvent(t)}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`:host{display:block;position:relative}ha-textfield{width:100%}ha-icon-button{position:absolute;top:8px;right:8px;inset-inline-start:initial;inset-inline-end:8px;--mdc-icon-button-size:40px;--mdc-icon-size:20px;color:var(--secondary-text-color);direction:var(--direction)}`}]}}),o.oi)},60906:function(e,t,i){i.a(e,(async function(e,a){try{i.r(t);var o=i(44249),s=(i(9359),i(70104),i(57243)),n=i(15093),r=i(36522),d=(i(59826),i(97206),i(95198),i(34326),i(72344)),l=(i(99426),i(23334),i(51784),i(37583),i(26779)),c=i(36029),h=i(28008),u=e([l]);l=(u.then?(await u)():u)[0];const p="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",k={encryption_key_type:"config",custom_encryption_key:""},y=["confirm","encryption","progress"];(0,o.Z)([(0,n.Mo)("ha-dialog-restore-backup")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_step",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_formData",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_backupEncryptionKey",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_userPassword",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_usedUserInput",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_state",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_stage",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_unsub",value:void 0},{kind:"field",decorators:[(0,n.IO)("ha-md-dialog")],key:"_dialog",value:void 0},{kind:"method",key:"showDialog",value:async function(e){this._params=e,this._formData=k,this._userPassword=void 0,this._usedUserInput=!1,this._error=void 0,this._state=void 0,this._stage=void 0;const t=Object.keys(this._params.backup.agents),i=(0,l.OT)(t),a=this._params.backup.agents[i]?.protected;a?(this._backupEncryptionKey=await this._fetchEncryptionKey(),this._backupEncryptionKey?this._step=y[0]:this._step=y[1]):this._step=y[0]}},{kind:"method",key:"closeDialog",value:function(){return this._dialog?.close(),!0}},{kind:"method",key:"_dialogClosed",value:function(){this._formData=void 0,this._params=void 0,this._backupEncryptionKey=void 0,this._userPassword=void 0,this._usedUserInput=!1,this._error=void 0,this._state=void 0,this._stage=void 0,this._step=void 0,this._unsubscribe(),(0,r.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"_fetchEncryptionKey",value:async function(){try{const{config:e}=await(0,l.LG)(this.hass);return e.create_backup.password||void 0}catch(e){return void console.error(e)}}},{kind:"method",key:"render",value:function(){if(!this._step||!this._params||!this._formData)return s.Ld;const e=this.hass.localize("ui.panel.config.backup.dialogs.restore.title");return s.dy` <ha-md-dialog open @closed="${this._dialogClosed}"> <ha-dialog-header slot="headline"> <ha-icon-button slot="navigationIcon" .label="${this.hass.localize("ui.common.close")}" .path="${p}" @click="${this.closeDialog}"></ha-icon-button> <span slot="title" .title="${e}">${e}</span> </ha-dialog-header> <div slot="content" class="content"> ${this._error?s.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:"confirm"===this._step?this._renderConfirm():"encryption"===this._step?this._renderEncryption():this._renderProgress()} </div> <div slot="actions"> ${this._error?s.dy` <ha-button @click="${this.closeDialog}"> ${this.hass.localize("ui.common.close")} </ha-button> `:"confirm"===this._step||"encryption"===this._step?this._renderConfirmActions():s.Ld} </div> </ha-md-dialog> `}},{kind:"method",key:"_renderConfirm",value:function(){return s.dy` <p> ${this.hass.localize("ui.panel.config.backup.dialogs.restore.confirm.description")} </p> `}},{kind:"method",key:"_renderEncryptionIntro",value:function(){return this._usedUserInput?s.dy` ${this.hass.localize("ui.panel.config.backup.dialogs.restore.encryption.incorrect_key")} `:this._backupEncryptionKey?s.dy` ${this.hass.localize("ui.panel.config.backup.dialogs.restore.encryption.different_key")} ${this._params.selectedData.homeassistant_included?s.dy` <ha-alert alert-type="warning"> ${this.hass.localize("ui.panel.config.backup.dialogs.restore.encryption.warning")} </ha-alert> `:s.Ld} `:s.dy` ${this.hass.localize("ui.panel.config.backup.dialogs.restore.encryption.description")} `}},{kind:"method",key:"_renderEncryption",value:function(){return s.dy` ${this._renderEncryptionIntro()} <ha-password-field @input="${this._passwordChanged}" .label="${this.hass.localize("ui.panel.config.backup.dialogs.restore.encryption.input_label")}" .value="${this._userPassword||""}"></ha-password-field> `}},{kind:"method",key:"_renderConfirmActions",value:function(){return s.dy` <ha-button @click="${this.closeDialog}"> ${this.hass.localize("ui.common.cancel")} </ha-button> <ha-button @click="${this._restoreBackup}" destructive> ${this.hass.localize("ui.panel.config.backup.dialogs.restore.actions.restore")} </ha-button> `}},{kind:"method",key:"_renderProgress",value:function(){return s.dy`<div class="centered"> <ha-circular-progress indeterminate></ha-circular-progress> <p> ${this.hass.connected?this._restoreState():this.hass.localize("ui.panel.config.backup.dialogs.restore.progress.restarting")} </p> </div>`}},{kind:"method",key:"_passwordChanged",value:function(e){this._userPassword=e.target.value}},{kind:"method",key:"_restoreBackup",value:async function(){this._unsubscribe(),this._state=void 0,this._stage=void 0,this._error=void 0;try{this._step="progress",this._subscribeBackupEvents(),await this._doRestoreBackup(this._userPassword||this._backupEncryptionKey)}catch(e){await this._unsubscribe(),"password_incorrect"===e.code?(this._error=void 0,this._userPassword&&(this._usedUserInput=!0),this._step="encryption"):this._error=e.message}}},{kind:"method",key:"_subscribeBackupEvents",value:function(){this._unsub=(0,c.q)(this.hass,(e=>{"idle"===e.manager_state&&"in_progress"===this._state&&this.closeDialog(),"restore_backup"===e.manager_state&&(this._state=e.state,"completed"===e.state&&this.closeDialog(),"failed"===e.state&&(this._error=this.hass.localize("ui.panel.config.backup.dialogs.restore.restore_failed")),"in_progress"===e.state&&(this._stage=e.stage))}))}},{kind:"method",key:"_unsubscribe",value:function(){if(this._unsub){const e=this._unsub.then((e=>e()));return this._unsub=void 0,e}}},{kind:"method",key:"_restoreState",value:function(){return this._stage?this.hass.localize(`ui.panel.config.backup.overview.progress.description.restore_backup.${this._stage}`):this.hass.localize("ui.panel.config.backup.dialogs.restore.progress.restoring")}},{kind:"method",key:"_doRestoreBackup",value:async function(e){if(!this._params)return;const t=Object.keys(this._params.backup.agents),i=(0,l.OT)(t),{addons:a,database_included:o,homeassistant_included:s,folders:n}=this._params.selectedData,r={backup_id:this._params.backup.backup_id,agent_id:i,password:e,restore_database:o,restore_homeassistant:s};(0,d.p)(this.hass,"hassio")&&(r.restore_addons=a.map((e=>e.slug)),r.restore_folders=n),await(0,l.pi)(this.hass,r)}},{kind:"get",static:!0,key:"styles",value:function(){return[h.Qx,h.yu,s.iv`ha-md-dialog{max-width:500px;width:100%}.content p{margin:0 0 16px}.centered{display:flex;flex-direction:column;align-items:center}ha-circular-progress{margin-bottom:16px}ha-alert[alert-type=warning]{display:block;margin-top:16px}ha-password-field{display:block;margin-top:16px}`]}}]}}),s.oi);a()}catch(e){a(e)}}))}};
//# sourceMappingURL=51747.2c52dd2ff8dfba68.js.map