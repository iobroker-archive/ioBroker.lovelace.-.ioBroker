export const __webpack_ids__=["42653"];export const __webpack_modules__={91624:function(e,a,t){t.r(a),t.d(a,{HaFormExpendable:()=>d});var i=t(44249),o=t(57243),s=t(15093);t(29073);let d=(0,i.Z)([(0,s.Mo)("ha-form-expandable")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"localizeValue",value:void 0},{kind:"method",key:"_renderDescription",value:function(){const e=this.computeHelper?.(this.schema);return e?o.dy`<p>${e}</p>`:o.Ld}},{kind:"field",key:"_computeLabel",value(){return(e,a,t)=>this.computeLabel?this.computeLabel(e,a,{...t,path:[...t?.path||[],this.schema.name]}):this.computeLabel}},{kind:"field",key:"_computeHelper",value(){return(e,a)=>this.computeHelper?this.computeHelper(e,{...a,path:[...a?.path||[],this.schema.name]}):this.computeHelper}},{kind:"method",key:"render",value:function(){return o.dy` <ha-expansion-panel outlined .expanded="${Boolean(this.schema.expanded)}"> <div slot="header" role="heading" aria-level="${this.schema.headingLevel?.toString()??"3"}"> ${this.schema.icon?o.dy` <ha-icon .icon="${this.schema.icon}"></ha-icon> `:this.schema.iconPath?o.dy` <ha-svg-icon .path="${this.schema.iconPath}"></ha-svg-icon> `:o.Ld} ${this.schema.title||this.computeLabel?.(this.schema)} </div> <div class="content"> ${this._renderDescription()} <ha-form .hass="${this.hass}" .data="${this.data}" .schema="${this.schema.schema}" .disabled="${this.disabled}" .computeLabel="${this._computeLabel}" .computeHelper="${this._computeHelper}" .localizeValue="${this.localizeValue}"></ha-form> </div> </ha-expansion-panel> `}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`:host{display:flex!important;flex-direction:column}:host ha-form{display:block}.content{padding:12px}.content p{margin:0 0 24px}ha-expansion-panel{display:block;--expansion-panel-content-padding:0;border-radius:6px;--ha-card-border-radius:6px}ha-icon,ha-svg-icon{color:var(--secondary-text-color)}`}]}}),o.oi)}};
//# sourceMappingURL=42653.e94d2136baf86b5c.js.map