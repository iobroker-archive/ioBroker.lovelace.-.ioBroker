"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["46748"],{61471:function(t,e,a){a.r(e),a.d(e,{HuiStatisticCardEditor:()=>g});var i=a(61701),n=(a(19083),a(71695),a(9359),a(31526),a(70104),a(19423),a(40251),a(61006),a(47021),a(57243)),s=a(50778),o=a(27486),c=a(62900),d=a(36522),r=a(48045),l=(a(29073),a(17705)),h=a(45079),_=a(18200);let u,y=t=>t;const p=(0,c.f0)(_.I,(0,c.Ry)({entity:(0,c.jt)((0,c.Z_)()),name:(0,c.jt)((0,c.Z_)()),icon:(0,c.jt)((0,c.Z_)()),unit:(0,c.jt)((0,c.Z_)()),stat_type:(0,c.jt)((0,c.Z_)()),period:(0,c.jt)((0,c.Yj)()),theme:(0,c.jt)((0,c.Z_)()),footer:(0,c.jt)(h.ds),collection_key:(0,c.jt)((0,c.Z_)())})),f=["mean","min","max","change"],m={mean:"mean",min:"min",max:"max",change:"sum"},v={today:{calendar:{period:"day"}},yesterday:{calendar:{period:"day",offset:-1}},this_week:{calendar:{period:"week"}},last_week:{calendar:{period:"week",offset:-1}},this_month:{calendar:{period:"month"}},last_month:{calendar:{period:"month",offset:-1}},this_year:{calendar:{period:"year"}},last_year:{calendar:{period:"year",offset:-1}}};let g=(0,i.Z)([(0,s.Mo)("hui-statistic-card-editor")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_metadata",value:void 0},{kind:"method",key:"setConfig",value:function(t){(0,c.hu)(t,p),this._config=t,this._fetchMetadata()}},{kind:"method",key:"firstUpdated",value:function(){this._fetchMetadata().then((()=>{var t,e,a;null!==(t=this._config)&&void 0!==t&&t.stat_type||null===(e=this._config)||void 0===e||!e.entity||(0,d.B)(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{},{stat_type:null!==(a=this._metadata)&&void 0!==a&&a.has_sum?"change":"mean"})})}))}},{kind:"field",key:"_data",value(){return(0,o.Z)((t=>{if(!t||!t.period)return t;for(const[e,a]of Object.entries(v))if((0,r.v)(a,t.period))return Object.assign(Object.assign({},t),{},{period:e});return t}))}},{kind:"field",key:"_schema",value(){return(0,o.Z)(((t,e,a)=>[{name:"entity",required:!0,selector:{statistic:{}}},{name:"stat_type",required:!0,selector:{select:{multiple:!1,options:f.map((t=>({value:t,label:e(`ui.panel.lovelace.editor.card.statistic.stat_type_labels.${t}`),disabled:!a||!(0,l.Z0)(a,m[t])})))}}},{name:"period",required:!0,selector:t&&Object.keys(v).includes(t)?{select:{multiple:!1,options:Object.keys(v).map((t=>({value:t,label:e(`ui.panel.lovelace.editor.card.statistic.periods.${t}`)||t})))}}:{object:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}},{name:"unit",selector:{text:{}}},{name:"theme",selector:{theme:{}}}]}]))}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return n.Ld;const t=this._data(this._config),e=this._schema("string"==typeof t.period?t.period:void 0,this.hass.localize,this._metadata);return(0,n.dy)(u||(u=y` <ha-form .hass="${0}" .data="${0}" .schema="${0}" .computeLabel="${0}" @value-changed="${0}"></ha-form> `),this.hass,t,e,this._computeLabelCallback,this._valueChanged)}},{kind:"method",key:"_fetchMetadata",value:async function(){this.hass&&this._config&&(this._metadata=(await(0,l.Py)(this.hass,[this._config.entity]))[0])}},{kind:"method",key:"_valueChanged",value:async function(t){var e;const a=Object.assign({},t.detail.value);if(Object.keys(a).forEach((t=>""===a[t]&&delete a[t])),"string"==typeof a.period){const t=v[a.period];t&&(a.period=t)}if(a.stat_type&&a.entity&&a.entity!==(null===(e=this._metadata)||void 0===e?void 0:e.statistic_id)){var i;const t=null===(i=await(0,l.Py)(this.hass,[a.entity]))||void 0===i?void 0:i[0];t&&!t.has_sum&&"change"===a.stat_type&&(a.stat_type="mean"),t&&!t.has_mean&&"change"!==a.stat_type&&(a.stat_type="change")}if(!a.stat_type&&a.entity){var n;const t=null===(n=await(0,l.Py)(this.hass,[a.entity]))||void 0===n?void 0:n[0];a.stat_type=null!=t&&t.has_sum?"change":"mean"}(0,d.B)(this,"config-changed",{config:a})}},{kind:"field",key:"_computeLabelCallback",value(){return t=>"period"===t.name?this.hass.localize("ui.panel.lovelace.editor.card.statistic.period"):"theme"===t.name?`${this.hass.localize("ui.panel.lovelace.editor.card.generic.theme")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`:this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}}]}}),n.oi)},18200:function(t,e,a){a.d(e,{I:()=>n});var i=a(62900);const n=(0,i.Ry)({type:(0,i.Z_)(),view_layout:(0,i.Yj)(),layout_options:(0,i.Yj)(),grid_options:(0,i.Yj)(),visibility:(0,i.Yj)()})},92228:function(t,e,a){a.d(e,{k:()=>s});var i=a(62900),n=a(30571);const s=(0,i.Ry)({entity:(0,i.Z_)(),name:(0,i.jt)((0,i.Z_)()),icon:(0,i.jt)((0,i.Z_)()),image:(0,i.jt)((0,i.Z_)()),show_name:(0,i.jt)((0,i.O7)()),show_icon:(0,i.jt)((0,i.O7)()),tap_action:(0,i.jt)(n.fJ),hold_action:(0,i.jt)(n.fJ),double_tap_action:(0,i.jt)(n.fJ)})},45079:function(t,e,a){a.d(e,{ds:()=>r,gg:()=>d});var i=a(62900),n=a(30571),s=a(92228);const o=(0,i.Ry)({type:(0,i.Z_)(),image:(0,i.Z_)(),tap_action:(0,i.jt)(n.fJ),hold_action:(0,i.jt)(n.fJ),double_tap_action:(0,i.jt)(n.fJ),alt_text:(0,i.jt)((0,i.Z_)())}),c=(0,i.Ry)({type:(0,i.Z_)(),entities:(0,i.IX)(s.k)}),d=(0,i.Ry)({type:(0,i.Z_)(),entity:(0,i.Z_)(),detail:(0,i.jt)((0,i.Rx)()),hours_to_show:(0,i.jt)((0,i.Rx)())}),r=(0,i.D8)((t=>{if(t&&"object"==typeof t&&"type"in t)switch(t.type){case"buttons":return c;case"graph":return d;case"picture":return o}return(0,i.G0)([c,d,o])}))}}]);
//# sourceMappingURL=46748.5294c773c81fd3d0.js.map