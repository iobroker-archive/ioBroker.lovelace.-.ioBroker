export const __webpack_ids__=["99123"];export const __webpack_modules__={66471:function(e,t,a){a.r(t),a.d(t,{HuiImageElementEditor:()=>_});var i=a(44249),o=a(57243),n=a(15093),c=a(62900),l=a(36522),s=(a(29073),a(30571));const r=(0,c.Ry)({type:(0,c.i0)("image"),entity:(0,c.jt)((0,c.Z_)()),image:(0,c.jt)((0,c.Z_)()),style:(0,c.jt)((0,c.Yj)()),title:(0,c.jt)((0,c.Z_)()),tap_action:(0,c.jt)(s.fJ),hold_action:(0,c.jt)(s.fJ),double_tap_action:(0,c.jt)(s.fJ),camera_image:(0,c.jt)((0,c.Z_)()),camera_view:(0,c.jt)((0,c.Z_)()),state_image:(0,c.jt)((0,c.Yj)()),filter:(0,c.jt)((0,c.Z_)()),state_filter:(0,c.jt)((0,c.Yj)()),aspect_ratio:(0,c.jt)((0,c.Z_)())}),m=[{name:"entity",selector:{entity:{}}},{name:"title",selector:{text:{}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"image",selector:{image:{}}},{name:"camera_image",selector:{entity:{domain:"camera"}}},{name:"camera_view",selector:{select:{options:["auto","live"]}}},{name:"state_image",selector:{object:{}}},{name:"filter",selector:{text:{}}},{name:"state_filter",selector:{object:{}}},{name:"aspect_ratio",selector:{text:{}}},{name:"style",selector:{object:{}}}];let _=(0,i.Z)([(0,n.Mo)("hui-image-element-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,c.hu)(e,r),this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?o.dy` <ha-form .hass="${this.hass}" .data="${this._config}" .schema="${m}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `:o.Ld}},{kind:"method",key:"_valueChanged",value:function(e){(0,l.B)(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.elements.${e.name}`)||e.name}}]}}),o.oi)}};
//# sourceMappingURL=99123.7f79b2d5564a36a7.js.map