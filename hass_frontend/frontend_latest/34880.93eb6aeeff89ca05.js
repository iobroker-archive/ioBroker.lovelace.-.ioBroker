export const __webpack_ids__=["34880"];export const __webpack_modules__={20990:function(e,t,o){o.r(t),o.d(t,{HuiClimateSwingHorizontalModesCardFeatureEditor:()=>d});var i=o(44249),s=(o(9359),o(70104),o(57243)),a=o(15093),n=o(27486),l=o(36522);o(29073);let d=(0,i.Z)([(0,a.Mo)("hui-climate-swing-horizontal-modes-card-feature-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"_schema",value:()=>(0,n.Z)(((e,t,o,i)=>[{name:"style",selector:{select:{multiple:!1,mode:"list",options:["dropdown","icons"].map((t=>({value:t,label:e(`ui.panel.lovelace.editor.features.types.climate-swing-horizontal-modes.style_list.${t}`)})))}}},{name:"customize_modes",selector:{boolean:{}}},...i?[{name:"swing_horizontal_modes",selector:{select:{reorder:!0,multiple:!0,options:o?.attributes.swing_horizontal_modes?.map((e=>({value:e,label:t(o,"swing_horizontal_mode",e)})))||[]}}}]:[]]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return s.Ld;const e=this.context?.entity_id?this.hass.states[this.context?.entity_id]:void 0,t={style:"dropdown",...this._config,customize_modes:void 0!==this._config.swing_horizontal_modes},o=this._schema(this.hass.localize,this.hass.formatEntityAttributeValue,e,t.customize_modes);return s.dy` <ha-form .hass="${this.hass}" .data="${t}" .schema="${o}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){const{customize_modes:t,...o}=e.detail.value,i=this.context?.entity_id?this.hass.states[this.context?.entity_id]:void 0;t&&!o.swing_horizontal_modes&&(o.swing_horizontal_modes=i?.attributes.swing_horizontal_modes||[]),!t&&o.swing_horizontal_modes&&delete o.swing_horizontal_modes,(0,l.B)(this,"config-changed",{config:o})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"style":case"swing_horizontal_modes":case"customize_modes":return this.hass.localize(`ui.panel.lovelace.editor.features.types.climate-swing-horizontal-modes.${e.name}`);default:return""}}}}]}}),s.oi)}};
//# sourceMappingURL=34880.93eb6aeeff89ca05.js.map