"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[67291],{76270:function(e,t,i){i.d(t,{Q:function(){return n}});var n=["relative","total","date","time","datetime"]},67291:function(e,t,i){i.r(t),i.d(t,{HuiGlanceCardEditor:function(){return Z}});var n,a=i(88962),o=i(33368),c=i(71650),s=i(82390),r=i(69205),l=i(70906),u=i(91808),d=(i(97393),i(85717),i(22859),i(68144)),h=i(95260),_=i(93088),f=i(47181),m=(i(68331),i(1528),i(14748)),v=i(98346),g=i(30232),j=(0,_.f0)(v.I,(0,_.Ry)({title:(0,_.jt)((0,_.G0)([(0,_.Z_)(),(0,_.Rx)()])),theme:(0,_.jt)((0,_.Z_)()),columns:(0,_.jt)((0,_.Rx)()),show_name:(0,_.jt)((0,_.O7)()),show_state:(0,_.jt)((0,_.O7)()),show_icon:(0,_.jt)((0,_.O7)()),state_color:(0,_.jt)((0,_.O7)()),entities:(0,_.IX)(g.K)})),y=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"columns",selector:{number:{min:1,mode:"box"}}},{name:"theme",selector:{theme:{}}}]},{name:"",type:"grid",column_min_width:"100px",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_icon",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}}]},{name:"state_color",selector:{boolean:{}}}],Z=(0,u.Z)([(0,h.Mo)("hui-glance-card-editor")],(function(e,t){var i=function(t){(0,r.Z)(n,t);var i=(0,l.Z)(n);function n(){var t;(0,c.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,s.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,_.hu)(e,j),this._config=e,this._configEntities=(0,m.Q)(e.entities)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return d.Ld;var e=Object.assign({show_name:!0,show_icon:!0,show_state:!0},this._config);return(0,d.dy)(n||(n=(0,a.Z)([' <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" @value-changed="','"></ha-form> <hui-entity-editor .hass="','" .entities="','" @entities-changed="','"></hui-entity-editor> '])),this.hass,e,y,this._computeLabelCallback,this._valueChanged,this.hass,this._configEntities,this._entitiesChanged)}},{kind:"method",key:"_valueChanged",value:function(e){var t=e.detail.value;(0,f.B)(this,"config-changed",{config:t})}},{kind:"method",key:"_entitiesChanged",value:function(e){var t=this._config;t=Object.assign(Object.assign({},t),{},{entities:e.detail.entities}),this._configEntities=(0,m.Q)(this._config.entities),(0,f.B)(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value:function(){var e=this;return function(t){switch(t.name){case"theme":return"".concat(e.hass.localize("ui.panel.lovelace.editor.card.generic.theme")," (").concat(e.hass.localize("ui.panel.lovelace.editor.card.config.optional"),")");case"columns":return e.hass.localize("ui.panel.lovelace.editor.card.glance.".concat(t.name));default:return e.hass.localize("ui.panel.lovelace.editor.card.generic.".concat(t.name))}}}}]}}),d.oi)},85677:function(e,t,i){i.d(t,{C:function(){return _}});var n=i(76775),a=i(93088),o=(0,a.Ry)({user:(0,a.Z_)()}),c=(0,a.G0)([(0,a.O7)(),(0,a.Ry)({text:(0,a.jt)((0,a.Z_)()),excemptions:(0,a.jt)((0,a.IX)(o))})]),s=(0,a.Ry)({action:(0,a.i0)("url"),url_path:(0,a.Z_)(),confirmation:(0,a.jt)(c)}),r=(0,a.Ry)({action:(0,a.i0)("call-service"),service:(0,a.Z_)(),service_data:(0,a.jt)((0,a.Ry)()),data:(0,a.jt)((0,a.Ry)()),target:(0,a.jt)((0,a.Ry)({entity_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),device_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),area_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())]))})),confirmation:(0,a.jt)(c)}),l=(0,a.Ry)({action:(0,a.i0)("navigate"),navigation_path:(0,a.Z_)(),navigation_replace:(0,a.jt)((0,a.O7)()),confirmation:(0,a.jt)(c)}),u=(0,a.dt)({action:(0,a.i0)("assist"),pipeline_id:(0,a.jt)((0,a.Z_)()),start_listening:(0,a.jt)((0,a.O7)())}),d=(0,a.dt)({action:(0,a.i0)("fire-dom-event")}),h=(0,a.Ry)({action:(0,a.kE)(["none","toggle","more-info","call-service","url","navigate","assist"]),confirmation:(0,a.jt)(c)}),_=(0,a.D8)((function(e){if(e&&"object"===(0,n.Z)(e)&&"action"in e)switch(e.action){case"call-service":return r;case"fire-dom-event":return d;case"navigate":return l;case"url":return s;case"assist":return u}return h}))},98346:function(e,t,i){i.d(t,{I:function(){return a}});var n=i(93088),a=(0,n.Ry)({type:(0,n.Z_)(),view_layout:(0,n.Yj)()})},30232:function(e,t,i){i.d(t,{K:function(){return c}});var n=i(93088),a=i(76270),o=i(85677),c=(0,n.G0)([(0,n.Ry)({entity:(0,n.Z_)(),name:(0,n.jt)((0,n.Z_)()),icon:(0,n.jt)((0,n.Z_)()),image:(0,n.jt)((0,n.Z_)()),secondary_info:(0,n.jt)((0,n.Z_)()),format:(0,n.jt)((0,n.kE)(a.Q)),state_color:(0,n.jt)((0,n.O7)()),tap_action:(0,n.jt)(o.C),hold_action:(0,n.jt)(o.C),double_tap_action:(0,n.jt)(o.C)}),(0,n.Z_)()])}}]);
//# sourceMappingURL=67291.8ONjx5gyP4o.js.map