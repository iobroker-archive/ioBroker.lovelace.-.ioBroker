export const __webpack_ids__=["44821"];export const __webpack_modules__={35154:function(t,i,n){n.a(t,(async function(t,s){try{n.r(i);var e=n(44249),o=(n(31622),n(57243)),a=n(15093),r=n(96194),c=n(93331),h=n(8069),u=n(62577),d=n(55370),l=t([h]);h=(l.then?(await l)():l)[0];(0,e.Z)([(0,a.Mo)("hui-button-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,c.G2)(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return o.Ld;const t=this.hass.states[this._config.entity];return t?o.dy` <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}"> <mwc-button @click="${this._pressButton}" .disabled="${t.state===r.nZ}"> ${this.hass.localize("ui.card.button.press")} </mwc-button> </hui-generic-entity-row> `:o.dy` <hui-warning> ${(0,u.i)(this.hass,this._config.entity)} </hui-warning> `}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`mwc-button:last-child{margin-right:-.57em;margin-inline-end:-.57em;margin-inline-start:initial}`},{kind:"method",key:"_pressButton",value:async function(t){t.stopPropagation(),this._config?.confirmation&&!await(0,d.g)(this,this.hass,this._config.confirmation,this.hass.localize("ui.card.button.press"))||this.hass.callService("button","press",{entity_id:this._config.entity})}}]}}),o.oi);s()}catch(t){s(t)}}))}};
//# sourceMappingURL=44821.52bc8b92e5833d55.js.map