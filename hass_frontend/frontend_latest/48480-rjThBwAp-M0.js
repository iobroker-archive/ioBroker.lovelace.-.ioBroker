export const id=48480;export const ids=[48480];export const modules={48480:(e,t,i)=>{i.r(t),i.d(t,{PanelView:()=>v});var a=i(17463),d=i(34541),l=i(47838),o=i(68144),s=i(79932),n=i(83448),r=i(47181),c=i(87744);let h=!1,v=(0,a.Z)(null,(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"index",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"isStrategy",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"cards",value:()=>[]},{kind:"field",decorators:[(0,s.SB)()],key:"_card",value:void 0},{kind:"method",key:"setConfig",value:function(e){}},{kind:"method",key:"willUpdate",value:function(e){var t,o,s;if((0,d.Z)((0,l.Z)(a.prototype),"willUpdate",this).call(this,e),null!==(t=this.lovelace)&&void 0!==t&&t.editMode&&!h&&(h=!0,Promise.all([i.e(63436),i.e(99608),i.e(65666),i.e(49826)]).then(i.bind(i,49826))),e.has("cards")&&this._createCard(),!e.has("lovelace"))return;const n=e.get("lovelace");(!e.has("cards")&&(null==n?void 0:n.config)!==(null===(o=this.lovelace)||void 0===o?void 0:o.config)||n&&(null==n?void 0:n.editMode)!==(null===(s=this.lovelace)||void 0===s?void 0:s.editMode))&&this._createCard()}},{kind:"method",key:"render",value:function(){var e;return o.dy` ${this.cards.length>1?o.dy`<hui-warning> ${this.hass.localize("ui.panel.lovelace.editor.view.panel_mode.warning_multiple_cards")} </hui-warning>`:""} ${this._card} ${null!==(e=this.lovelace)&&void 0!==e&&e.editMode&&0===this.cards.length?o.dy` <ha-fab .label="${this.hass.localize("ui.panel.lovelace.editor.edit_card.add")}" extended @click="${this._addCard}" class="${(0,n.$)({rtl:(0,c.HE)(this.hass)})}"> <ha-svg-icon slot="icon" .path="${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}"></ha-svg-icon> </ha-fab> `:""} `}},{kind:"method",key:"_addCard",value:function(){(0,r.B)(this,"ll-create-card")}},{kind:"method",key:"_createCard",value:function(){var e;if(0===this.cards.length)return void(this._card=void 0);const t=this.cards[0];if(t.isPanel=!0,this.isStrategy||null===(e=this.lovelace)||void 0===e||!e.editMode)return t.editMode=!1,void(this._card=t);const i=document.createElement("hui-card-options");i.hass=this.hass,i.lovelace=this.lovelace,i.path=[this.index,0],i.hidePosition=!0,t.editMode=!0,i.appendChild(t),this._card=i}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:block;height:100%}ha-fab{position:fixed;right:calc(16px + env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:1}ha-fab.rtl{float:left;right:auto;left:calc(16px + env(safe-area-inset-left))}`}}]}}),o.oi);customElements.define("hui-panel-view",v)}};
//# sourceMappingURL=48480-rjThBwAp-M0.js.map