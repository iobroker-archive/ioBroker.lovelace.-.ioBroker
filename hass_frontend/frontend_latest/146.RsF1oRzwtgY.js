export const id=146;export const ids=[146];export const modules={36125:(e,i,t)=>{var a=t(17463),l=t(34541),o=t(47838),n=t(48095),s=t(72477),r=t(79932),d=t(68144),c=t(30418);(0,a.Z)([(0,r.Mo)("ha-fab")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"firstUpdated",value:function(e){(0,l.Z)((0,o.Z)(t.prototype),"firstUpdated",this).call(this,e),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}},{kind:"field",static:!0,key:"styles",value:()=>[s.W,d.iv`:host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}`,"rtl"===c.E.document.dir?d.iv`:host .mdc-fab--extended .mdc-fab__icon{direction:rtl}`:d.iv``]}]}}),n._)},76865:(e,i,t)=>{var a=t(17463),l=(t(33829),t(68144)),o=t(79932);t(52039);(0,a.Z)([(0,o.Mo)("ha-help-tooltip")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"position",value:()=>"top"},{kind:"method",key:"render",value:function(){return l.dy` <ha-svg-icon .path="${"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}"></ha-svg-icon> <simple-tooltip offset="4" .position="${this.position}" .fitToVisibleBounds="${!0}">${this.label}</simple-tooltip> `}},{kind:"get",static:!0,key:"styles",value:function(){return l.iv`ha-svg-icon{--mdc-icon-size:var(--ha-help-tooltip-size, 14px);color:var(--ha-help-tooltip-color,var(--disabled-text-color))}`}}]}}),l.oi)},48091:(e,i,t)=>{t.d(i,{A8:()=>a,Ax:()=>l,Fc:()=>o,G$:()=>n,zq:()=>s});const a=async e=>e.callWS({type:"application_credentials/config"}),l=async(e,i)=>e.callWS({type:"application_credentials/config_entry",config_entry_id:i}),o=async e=>e.callWS({type:"application_credentials/list"}),n=async(e,i,t,a,l)=>e.callWS({type:"application_credentials/create",domain:i,client_id:t,client_secret:a,name:l}),s=async(e,i)=>e.callWS({type:"application_credentials/delete",application_credentials_id:i})},96551:(e,i,t)=>{var a=t(17463),l=(t(14271),t(33829),t(68144)),o=t(79932),n=t(47181),s=t(87744);t(37168),t(49703);(0,a.Z)([(0,o.Mo)("hass-tabs-subpage-data-table")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"isWide",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Object})],key:"columns",value:()=>({})},{kind:"field",decorators:[(0,o.Cb)({type:Array})],key:"data",value:()=>[]},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"selectable",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"clickable",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"hasFab",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"appendRow",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"id",value:()=>"id"},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"filter",value:()=>""},{kind:"field",decorators:[(0,o.Cb)()],key:"searchLabel",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array})],key:"activeFilters",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"hiddenLabel",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"numHidden",value:()=>0},{kind:"field",decorators:[(0,o.Cb)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"noDataText",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"tabs",value:()=>[]},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"hideFilterMenu",value:()=>!1},{kind:"field",decorators:[(0,o.IO)("ha-data-table",!0)],key:"_dataTable",value:void 0},{kind:"method",key:"clearSelection",value:function(){this._dataTable.clearSelection()}},{kind:"method",key:"render",value:function(){const e=this.numHidden?this.hiddenLabel||this.hass.localize("ui.components.data-table.hidden",{number:this.numHidden})||this.numHidden:void 0,i=this.activeFilters?l.dy`${this.hass.localize("ui.components.data-table.filtering_by")} ${this.activeFilters.join(", ")} ${e?`(${e})`:""}`:e,t=l.dy`<search-input .hass="${this.hass}" .filter="${this.filter}" .suffix="${!this.narrow}" @value-changed="${this._handleSearchChange}" .label="${this.searchLabel}"> ${this.narrow?"":l.dy`<div class="filters" slot="suffix" @click="${this._preventDefault}"> ${i?l.dy`<div class="active-filters"> ${i} <mwc-button @click="${this._clearFilter}"> ${this.hass.localize("ui.components.data-table.clear")} </mwc-button> </div>`:""} <slot name="filter-menu"></slot> </div>`} </search-input>`;return l.dy` <hass-tabs-subpage .hass="${this.hass}" .localizeFunc="${this.localizeFunc}" .narrow="${this.narrow}" .isWide="${this.isWide}" .backPath="${this.backPath}" .backCallback="${this.backCallback}" .route="${this.route}" .tabs="${this.tabs}" .mainPage="${this.mainPage}" .supervisor="${this.supervisor}"> ${this.hideFilterMenu?"":l.dy` <div slot="toolbar-icon"> ${this.narrow?l.dy` <div class="filter-menu"> ${this.numHidden||this.activeFilters?l.dy`<span class="badge">${this.numHidden||"!"}</span>`:""} <slot name="filter-menu"></slot> </div> `:""}<slot name="toolbar-icon"></slot> </div> `} ${this.narrow?l.dy` <div slot="header"> <slot name="header"> <div class="search-toolbar">${t}</div> </slot> </div> `:""} <ha-data-table .hass="${this.hass}" .columns="${this.columns}" .data="${this.data}" .filter="${this.filter}" .selectable="${this.selectable}" .hasFab="${this.hasFab}" .id="${this.id}" .noDataText="${this.noDataText}" .dir="${(0,s.Zu)(this.hass)}" .clickable="${this.clickable}" .appendRow="${this.appendRow}"> ${this.narrow?l.dy` <div slot="header"></div> `:l.dy` <div slot="header"> <slot name="header"> <div class="table-header">${t}</div> </slot> </div> `} </ha-data-table> <div slot="fab"><slot name="fab"></slot></div> </hass-tabs-subpage> `}},{kind:"method",key:"_preventDefault",value:function(e){e.preventDefault()}},{kind:"method",key:"_handleSearchChange",value:function(e){this.filter!==e.detail.value&&(this.filter=e.detail.value,(0,n.B)(this,"search-changed",{value:this.filter}))}},{kind:"method",key:"_clearFilter",value:function(){(0,n.B)(this,"clear-filter")}},{kind:"get",static:!0,key:"styles",value:function(){return l.iv`ha-data-table{width:100%;height:100%;--data-table-border-width:0}:host(:not([narrow])) ha-data-table{height:calc(100vh - 1px - var(--header-height));display:block}:host([narrow]) hass-tabs-subpage{--main-title-margin:0}.table-header{display:flex;align-items:center;--mdc-shape-small:0;height:56px}.search-toolbar{display:flex;align-items:center;color:var(--secondary-text-color)}search-input{--mdc-text-field-fill-color:var(--sidebar-background-color);--mdc-text-field-idle-line-color:var(--divider-color);--text-field-overflow:visible;z-index:5}.table-header search-input{display:block;position:absolute;top:0;right:0;left:0}.search-toolbar search-input{display:block;width:100%;color:var(--secondary-text-color);--mdc-ripple-color:transparant}.filters{--mdc-text-field-fill-color:var(--input-fill-color);--mdc-text-field-idle-line-color:var(--input-idle-line-color);--mdc-shape-small:4px;--text-field-overflow:initial;display:flex;justify-content:flex-end;color:var(--primary-text-color)}.active-filters{color:var(--primary-text-color);position:relative;display:flex;align-items:center;padding:2px 2px 2px 8px;margin-left:4px;margin-inline-start:4px;margin-inline-end:initial;font-size:14px;width:max-content;cursor:initial;direction:var(--direction)}.active-filters ha-svg-icon{color:var(--primary-color)}.active-filters mwc-button{margin-left:8px;margin-inline-start:8px;margin-inline-end:initial;direction:var(--direction)}.active-filters::before{background-color:var(--primary-color);opacity:.12;border-radius:4px;position:absolute;top:0;right:0;bottom:0;left:0;content:""}.badge{min-width:20px;box-sizing:border-box;border-radius:50%;font-weight:400;background-color:var(--primary-color);line-height:20px;text-align:center;padding:0px 4px;color:var(--text-primary-color);position:absolute;right:0;top:4px;font-size:.65em}.filter-menu{position:relative}`}}]}}),l.oi)},56217:(e,i,t)=>{t.r(i),t.d(i,{HaConfigApplicationCredentials:()=>v});var a=t(17463),l=t(34541),o=t(47838),n=t(68144),s=t(79932),r=t(83448),d=t(14516),c=(t(36125),t(76865),t(52039),t(48091)),h=t(5986),p=t(26765),u=(t(96551),t(29311)),b=t(12343);let v=(0,a.Z)([(0,s.Mo)("ha-config-application-credentials")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_applicationCredentials",value:()=>[]},{kind:"field",decorators:[(0,s.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_selected",value:()=>[]},{kind:"field",decorators:[(0,s.IO)("hass-tabs-subpage-data-table",!0)],key:"_dataTable",value:void 0},{kind:"field",key:"_columns",value:()=>(0,d.Z)(((e,i)=>({name:{title:i("ui.panel.config.application_credentials.picker.headers.name"),direction:"asc",grows:!0,template:e=>n.dy`${e.name}`},client_id:{title:i("ui.panel.config.application_credentials.picker.headers.client_id"),width:"30%",direction:"asc",hidden:e,template:e=>n.dy`${e.client_id}`},application:{title:i("ui.panel.config.application_credentials.picker.headers.application"),sortable:!0,width:"30%",direction:"asc",template:e=>n.dy`${(0,h.Lh)(i,e.domain)}`}})))},{kind:"method",key:"firstUpdated",value:function(e){(0,l.Z)((0,o.Z)(t.prototype),"firstUpdated",this).call(this,e),this._loadTranslations(),this._fetchApplicationCredentials()}},{kind:"method",key:"render",value:function(){return n.dy` <hass-tabs-subpage-data-table .hass="${this.hass}" .narrow="${this.narrow}" .route="${this.route}" backPath="/config" .tabs="${u.configSections.devices}" .columns="${this._columns(this.narrow,this.hass.localize)}" .data="${this._applicationCredentials}" hasFab selectable @selection-changed="${this._handleSelectionChanged}"> ${this._selected.length?n.dy` <div class="${(0,r.$)({"header-toolbar":this.narrow,"table-header":!this.narrow})}" slot="header"> <p class="selected-txt"> ${this.hass.localize("ui.panel.config.application_credentials.picker.selected",{number:this._selected.length})} </p> <div class="header-btns"> ${this.narrow?n.dy` <ha-icon-button class="warning" id="remove-btn" @click="${this._removeSelected}" .path="${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}" .label="${this.hass.localize("ui.common.remove")}"></ha-icon-button> <ha-help-tooltip .label="${this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.button")}"> </ha-help-tooltip> `:n.dy` <mwc-button @click="${this._removeSelected}" class="warning">${this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.button")}</mwc-button> `} </div> </div> `:n.Ld} <ha-fab slot="fab" .label="${this.hass.localize("ui.panel.config.application_credentials.picker.add_application_credential")}" extended @click="${this._addApplicationCredential}"> <ha-svg-icon slot="icon" .path="${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}"></ha-svg-icon> </ha-fab> </hass-tabs-subpage-data-table> `}},{kind:"method",key:"_handleSelectionChanged",value:function(e){this._selected=e.detail.value}},{kind:"method",key:"_removeSelected",value:function(){(0,p.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.confirm_title",{number:this._selected.length}),text:this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.confirm_text"),confirmText:this.hass.localize("ui.common.remove"),dismissText:this.hass.localize("ui.common.cancel"),confirm:async()=>{try{await Promise.all(this._selected.map((async e=>{await(0,c.zq)(this.hass,e)})))}catch(e){return void(0,p.showAlertDialog)(this,{title:this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.error_title"),text:e.message})}this._dataTable.clearSelection(),this._fetchApplicationCredentials()}})}},{kind:"method",key:"_loadTranslations",value:async function(){await this.hass.loadBackendTranslation("title",void 0,!0)}},{kind:"method",key:"_fetchApplicationCredentials",value:async function(){this._applicationCredentials=await(0,c.Fc)(this.hass)}},{kind:"method",key:"_addApplicationCredential",value:function(){(0,b.L)(this,{applicationCredentialAddedCallback:async e=>{e&&(this._applicationCredentials=[...this._applicationCredentials,e])}})}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`.table-header{display:flex;justify-content:space-between;align-items:center;height:56px;background-color:var(--mdc-text-field-fill-color,#f5f5f5);border-bottom:1px solid var(--mdc-text-field-idle-line-color,rgba(0,0,0,.42));box-sizing:border-box}.header-toolbar{display:flex;justify-content:space-between;align-items:center;color:var(--secondary-text-color);position:relative;top:-4px}.selected-txt{font-weight:700;padding-left:16px;padding-inline-start:16px;direction:var(--direction)}.table-header .selected-txt{margin-top:20px}.header-toolbar .selected-txt{font-size:16px}.header-toolbar .header-btns{margin-right:-12px}.header-btns{display:flex}.header-btns>ha-icon-button,.header-btns>mwc-button{margin:8px}ha-button-menu{margin-left:8px}`}}]}}),n.oi)},12343:(e,i,t)=>{t.d(i,{L:()=>o});var a=t(47181);const l=()=>Promise.all([t.e(28597),t.e(78133),t.e(50731),t.e(21149),t.e(89493)]).then(t.bind(t,89493)),o=(e,i)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-add-application-credential",dialogImport:l,dialogParams:i})}},44281:(e,i,t)=>{t.d(i,{j:()=>a});const a=async()=>{try{new ResizeObserver((()=>{}))}catch(e){window.ResizeObserver=(await t.e(5442).then(t.bind(t,5442))).default}}}};
//# sourceMappingURL=146.RsF1oRzwtgY.js.map