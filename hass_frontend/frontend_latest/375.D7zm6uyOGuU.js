export const id=375;export const ids=[375];export const modules={36125:(e,i,t)=>{var a=t(17463),s=t(34541),o=t(47838),r=t(48095),l=t(72477),d=t(79932),n=t(68144),c=t(30418);(0,a.Z)([(0,d.Mo)("ha-fab")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"firstUpdated",value:function(e){(0,s.Z)((0,o.Z)(t.prototype),"firstUpdated",this).call(this,e),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}},{kind:"field",static:!0,key:"styles",value:()=>[l.W,n.iv`:host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}`,"rtl"===c.E.document.dir?n.iv`:host .mdc-fab--extended .mdc-fab__icon{direction:rtl}`:n.iv``]}]}}),r._)},76865:(e,i,t)=>{var a=t(17463),s=(t(33829),t(68144)),o=t(79932);t(52039);(0,a.Z)([(0,o.Mo)("ha-help-tooltip")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"position",value:()=>"top"},{kind:"method",key:"render",value:function(){return s.dy` <ha-svg-icon .path="${"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}"></ha-svg-icon> <simple-tooltip offset="4" .position="${this.position}" .fitToVisibleBounds="${!0}">${this.label}</simple-tooltip> `}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`ha-svg-icon{--mdc-icon-size:var(--ha-help-tooltip-size, 14px);color:var(--ha-help-tooltip-color,var(--disabled-text-color))}`}}]}}),s.oi)},65253:(e,i,t)=>{t.d(i,{CE:()=>s,FH:()=>v,Nq:()=>l,Pb:()=>a,fm:()=>n,h8:()=>d,r4:()=>r,uh:()=>o});const a="system-admin",s="system-users",o=async e=>e.callWS({type:"config/auth/list"}),r=async(e,i,t,a)=>e.callWS({type:"config/auth/create",name:i,group_ids:t,local_only:a}),l=async(e,i,t)=>e.callWS({...t,type:"config/auth/update",user_id:i}),d=async(e,i)=>e.callWS({type:"config/auth/delete",user_id:i}),n=e=>e?e.trim().split(" ").slice(0,3).map((e=>e.substring(0,1))).join(""):"?",c=32143==t.j?"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z":null,h=32143==t.j?"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z":null,u=32143==t.j?"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14":null,p=32143==t.j?"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z":null,v=(e,i,t)=>{const a=[],s=i=>e.localize(`ui.panel.config.users.${i}`);return i.is_owner&&a.push([c,s("is_owner")]),t&&i.system_generated&&a.push([h,s("is_system")]),i.local_only&&a.push([u,s("is_local")]),i.is_active||a.push([p,s("is_not_active")]),a}},96551:(e,i,t)=>{var a=t(17463),s=(t(14271),t(33829),t(68144)),o=t(79932),r=t(47181),l=t(87744);t(37168),t(49703);(0,a.Z)([(0,o.Mo)("hass-tabs-subpage-data-table")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"isWide",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Object})],key:"columns",value:()=>({})},{kind:"field",decorators:[(0,o.Cb)({type:Array})],key:"data",value:()=>[]},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"selectable",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"clickable",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"hasFab",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"appendRow",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"id",value:()=>"id"},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"filter",value:()=>""},{kind:"field",decorators:[(0,o.Cb)()],key:"searchLabel",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array})],key:"activeFilters",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"hiddenLabel",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"numHidden",value:()=>0},{kind:"field",decorators:[(0,o.Cb)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"noDataText",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"tabs",value:()=>[]},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"hideFilterMenu",value:()=>!1},{kind:"field",decorators:[(0,o.IO)("ha-data-table",!0)],key:"_dataTable",value:void 0},{kind:"method",key:"clearSelection",value:function(){this._dataTable.clearSelection()}},{kind:"method",key:"render",value:function(){const e=this.numHidden?this.hiddenLabel||this.hass.localize("ui.components.data-table.hidden",{number:this.numHidden})||this.numHidden:void 0,i=this.activeFilters?s.dy`${this.hass.localize("ui.components.data-table.filtering_by")} ${this.activeFilters.join(", ")} ${e?`(${e})`:""}`:e,t=s.dy`<search-input .hass="${this.hass}" .filter="${this.filter}" .suffix="${!this.narrow}" @value-changed="${this._handleSearchChange}" .label="${this.searchLabel}"> ${this.narrow?"":s.dy`<div class="filters" slot="suffix" @click="${this._preventDefault}"> ${i?s.dy`<div class="active-filters"> ${i} <mwc-button @click="${this._clearFilter}"> ${this.hass.localize("ui.components.data-table.clear")} </mwc-button> </div>`:""} <slot name="filter-menu"></slot> </div>`} </search-input>`;return s.dy` <hass-tabs-subpage .hass="${this.hass}" .localizeFunc="${this.localizeFunc}" .narrow="${this.narrow}" .isWide="${this.isWide}" .backPath="${this.backPath}" .backCallback="${this.backCallback}" .route="${this.route}" .tabs="${this.tabs}" .mainPage="${this.mainPage}" .supervisor="${this.supervisor}"> ${this.hideFilterMenu?"":s.dy` <div slot="toolbar-icon"> ${this.narrow?s.dy` <div class="filter-menu"> ${this.numHidden||this.activeFilters?s.dy`<span class="badge">${this.numHidden||"!"}</span>`:""} <slot name="filter-menu"></slot> </div> `:""}<slot name="toolbar-icon"></slot> </div> `} ${this.narrow?s.dy` <div slot="header"> <slot name="header"> <div class="search-toolbar">${t}</div> </slot> </div> `:""} <ha-data-table .hass="${this.hass}" .columns="${this.columns}" .data="${this.data}" .filter="${this.filter}" .selectable="${this.selectable}" .hasFab="${this.hasFab}" .id="${this.id}" .noDataText="${this.noDataText}" .dir="${(0,l.Zu)(this.hass)}" .clickable="${this.clickable}" .appendRow="${this.appendRow}"> ${this.narrow?s.dy` <div slot="header"></div> `:s.dy` <div slot="header"> <slot name="header"> <div class="table-header">${t}</div> </slot> </div> `} </ha-data-table> <div slot="fab"><slot name="fab"></slot></div> </hass-tabs-subpage> `}},{kind:"method",key:"_preventDefault",value:function(e){e.preventDefault()}},{kind:"method",key:"_handleSearchChange",value:function(e){this.filter!==e.detail.value&&(this.filter=e.detail.value,(0,r.B)(this,"search-changed",{value:this.filter}))}},{kind:"method",key:"_clearFilter",value:function(){(0,r.B)(this,"clear-filter")}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`ha-data-table{width:100%;height:100%;--data-table-border-width:0}:host(:not([narrow])) ha-data-table{height:calc(100vh - 1px - var(--header-height));display:block}:host([narrow]) hass-tabs-subpage{--main-title-margin:0}.table-header{display:flex;align-items:center;--mdc-shape-small:0;height:56px}.search-toolbar{display:flex;align-items:center;color:var(--secondary-text-color)}search-input{--mdc-text-field-fill-color:var(--sidebar-background-color);--mdc-text-field-idle-line-color:var(--divider-color);--text-field-overflow:visible;z-index:5}.table-header search-input{display:block;position:absolute;top:0;right:0;left:0}.search-toolbar search-input{display:block;width:100%;color:var(--secondary-text-color);--mdc-ripple-color:transparant}.filters{--mdc-text-field-fill-color:var(--input-fill-color);--mdc-text-field-idle-line-color:var(--input-idle-line-color);--mdc-shape-small:4px;--text-field-overflow:initial;display:flex;justify-content:flex-end;color:var(--primary-text-color)}.active-filters{color:var(--primary-text-color);position:relative;display:flex;align-items:center;padding:2px 2px 2px 8px;margin-left:4px;margin-inline-start:4px;margin-inline-end:initial;font-size:14px;width:max-content;cursor:initial;direction:var(--direction)}.active-filters ha-svg-icon{color:var(--primary-color)}.active-filters mwc-button{margin-left:8px;margin-inline-start:8px;margin-inline-end:initial;direction:var(--direction)}.active-filters::before{background-color:var(--primary-color);opacity:.12;border-radius:4px;position:absolute;top:0;right:0;bottom:0;left:0;content:""}.badge{min-width:20px;box-sizing:border-box;border-radius:50%;font-weight:400;background-color:var(--primary-color);line-height:20px;text-align:center;padding:0px 4px;color:var(--text-primary-color);position:absolute;right:0;top:4px;font-size:.65em}.filter-menu{position:relative}`}}]}}),s.oi)},99712:(e,i,t)=>{t.r(i),t.d(i,{HaConfigUsers:()=>f});var a=t(17463),s=t(34541),o=t(47838),r=t(68144),l=t(79932),d=t(14516);t(52039);(0,a.Z)([(0,l.Mo)("ha-data-table-icon")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)()],key:"tooltip",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_hovered",value:()=>!1},{kind:"method",key:"render",value:function(){return r.dy` ${this._hovered?r.dy`<div>${this.tooltip}</div>`:""} <ha-svg-icon .path="${this.path}"></ha-svg-icon> `}},{kind:"method",key:"firstUpdated",value:function(e){(0,s.Z)((0,o.Z)(t.prototype),"firstUpdated",this).call(this,e);const i=()=>{this._hovered=!0},a=()=>{this._hovered=!1};this.addEventListener("mouseenter",i),this.addEventListener("focus",i),this.addEventListener("mouseleave",a),this.addEventListener("blur",a),this.addEventListener("tap",a)}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`:host{display:inline-block;position:relative}ha-svg-icon{color:var(--secondary-text-color)}div{position:absolute;right:28px;z-index:1002;outline:0;font-size:10px;line-height:1;background-color:var(--simple-tooltip-background,#616161);color:var(--simple-tooltip-text-color,#fff);padding:8px;border-radius:2px}`}}]}}),r.oi);t(36125),t(76865);var n=t(65253),c=t(26765),h=(t(96551),t(29311)),u=t(91188),p=t(47181);const v=()=>Promise.all([t.e(28597),t.e(76969),t.e(4503)]).then(t.bind(t,4503)),b="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";let f=(0,a.Z)([(0,l.Mo)("ha-config-users")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"_users",value:()=>[]},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",key:"_columns",value(){return(0,d.Z)(((e,i)=>({name:{title:i("ui.panel.config.users.picker.headers.name"),main:!0,sortable:!0,filterable:!0,width:"25%",direction:"asc",grows:!0,template:t=>e?r.dy` ${t.name}<br> <div class="secondary"> ${t.username?`${t.username} |`:""} ${i(`groups.${t.group_ids[0]}`)} </div>`:r.dy` ${t.name||this.hass.localize("ui.panel.config.users.editor.unnamed_user")}`},username:{title:i("ui.panel.config.users.picker.headers.username"),sortable:!0,filterable:!0,width:"20%",direction:"asc",hidden:e,template:e=>r.dy`${e.username||"—"}`},group_ids:{title:i("ui.panel.config.users.picker.headers.group"),sortable:!0,filterable:!0,width:"20%",direction:"asc",hidden:e,template:e=>r.dy` ${i(`groups.${e.group_ids[0]}`)} `},is_active:{title:this.hass.localize("ui.panel.config.users.picker.headers.is_active"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:e,template:e=>e.is_active?r.dy`<ha-svg-icon .path="${b}"></ha-svg-icon>`:""},system_generated:{title:this.hass.localize("ui.panel.config.users.picker.headers.system"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:e,template:e=>e.system_generated?r.dy`<ha-svg-icon .path="${b}"></ha-svg-icon>`:""},local_only:{title:this.hass.localize("ui.panel.config.users.picker.headers.local"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:e,template:e=>e.local_only?r.dy`<ha-svg-icon .path="${b}"></ha-svg-icon>`:""},icons:{title:"",label:this.hass.localize("ui.panel.config.users.picker.headers.icon"),type:"icon",sortable:!1,filterable:!1,width:"104px",hidden:!e,template:e=>{const i=(0,n.FH)(this.hass,e,!1);return r.dy`${i.map((([e,i])=>r.dy`<ha-data-table-icon .path="${e}" .tooltip="${i}"></ha-data-table-icon>`))}`}}})))}},{kind:"method",key:"firstUpdated",value:function(e){(0,s.Z)((0,o.Z)(t.prototype),"firstUpdated",this).call(this,e),this._fetchUsers()}},{kind:"method",key:"render",value:function(){return r.dy` <hass-tabs-subpage-data-table .hass="${this.hass}" .narrow="${this.narrow}" .route="${this.route}" backPath="/config" .tabs="${h.configSections.persons}" .columns="${this._columns(this.narrow,this.hass.localize)}" .data="${this._users}" @row-click="${this._editUser}" hasFab clickable> <ha-fab slot="fab" .label="${this.hass.localize("ui.panel.config.users.picker.add_user")}" extended @click="${this._addUser}"> <ha-svg-icon slot="icon" .path="${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}"></ha-svg-icon> </ha-fab> </hass-tabs-subpage-data-table> `}},{kind:"method",key:"_fetchUsers",value:async function(){this._users=await(0,n.uh)(this.hass),this._users.forEach((e=>{e.is_owner&&e.group_ids.unshift("owner")}))}},{kind:"method",key:"_editUser",value:function(e){const i=e.detail.id,t=this._users.find((e=>e.id===i));var a,s;t&&(a=this,s={entry:t,updateEntry:async e=>{const i=await(0,n.Nq)(this.hass,t.id,e);this._users=this._users.map((e=>e===t?i.user:e))},removeEntry:async()=>{if(!await(0,c.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion_title",{name:t.name}),text:this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion_text"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),destructive:!0}))return!1;try{return await(0,n.h8)(this.hass,t.id),this._users=this._users.filter((e=>e!==t)),!0}catch(e){return!1}}},(0,p.B)(a,"show-dialog",{dialogTag:"dialog-user-detail",dialogImport:v,dialogParams:s}))}},{kind:"method",key:"_addUser",value:function(){(0,u.G)(this,{userAddedCallback:async e=>{e&&(this._users=[...this._users,e])}})}}]}}),r.oi)},91188:(e,i,t)=>{t.d(i,{G:()=>o});var a=t(47181);const s=()=>Promise.all([t.e(28597),t.e(50529),t.e(52562),t.e(74898)]).then(t.bind(t,74898)),o=(e,i)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-add-user",dialogImport:s,dialogParams:i})}},44281:(e,i,t)=>{t.d(i,{j:()=>a});const a=async()=>{try{new ResizeObserver((()=>{}))}catch(e){window.ResizeObserver=(await t.e(5442).then(t.bind(t,5442))).default}}}};
//# sourceMappingURL=375.D7zm6uyOGuU.js.map