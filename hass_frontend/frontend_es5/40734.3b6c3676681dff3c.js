"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["40734"],{73780:function(e,a,t){t.r(a);var i=t(61701),r=(t(71695),t(40251),t(19134),t(11740),t(47706),t(47021),t(71513),t(75656),t(50100),t(18084),t(50778)),o=t(83523),n=t(24312);(0,i.Z)([(0,r.Mo)("zha-config-dashboard-router")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"is-wide",type:Boolean})],key:"isWide",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",key:"_configEntry",value(){return new URLSearchParams(window.location.search).get("config_entry")}},{kind:"field",key:"routerOptions",value(){return{defaultPage:"dashboard",showLoading:!0,routes:{dashboard:{tag:"zha-config-dashboard",load:()=>Promise.all([t.e("25618"),t.e("42950"),t.e("41103"),t.e("33228"),t.e("10355"),t.e("63055"),t.e("25207"),t.e("90006")]).then(t.bind(t,85566))},add:{tag:"zha-add-devices-page",load:()=>Promise.all([t.e("46379"),t.e("66031"),t.e("72206"),t.e("25618"),t.e("24199"),t.e("78943"),t.e("42950"),t.e("41103"),t.e("33228"),t.e("11014"),t.e("68825"),t.e("27090"),t.e("44959"),t.e("10355"),t.e("63055"),t.e("25207"),t.e("98486")]).then(t.bind(t,24992))},groups:{tag:"zha-groups-dashboard",load:()=>Promise.all([t.e("46379"),t.e("66031"),t.e("97983"),t.e("25618"),t.e("42950"),t.e("29570"),t.e("85282"),t.e("5080"),t.e("41103"),t.e("44680"),t.e("60052"),t.e("38838"),t.e("81465"),t.e("27102"),t.e("77756"),t.e("16872"),t.e("33228"),t.e("10355"),t.e("63055"),t.e("58529"),t.e("61411"),t.e("99088"),t.e("25207"),t.e("35577")]).then(t.bind(t,90072))},group:{tag:"zha-group-page",load:()=>Promise.all([t.e("46379"),t.e("66031"),t.e("91552"),t.e("25618"),t.e("29570"),t.e("96147"),t.e("58529"),t.e("53647"),t.e("62199")]).then(t.bind(t,58914))},"group-add":{tag:"zha-add-group-page",load:()=>Promise.all([t.e("46379"),t.e("66031"),t.e("25618"),t.e("29570"),t.e("96147"),t.e("58529"),t.e("53647"),t.e("40615")]).then(t.bind(t,89530))},visualization:{tag:"zha-network-visualization-page",load:()=>Promise.all([t.e("46379"),t.e("66031"),t.e("91552"),t.e("25618"),t.e("24199"),t.e("78456"),t.e("78943"),t.e("56898"),t.e("42950"),t.e("79525"),t.e("29570"),t.e("41103"),t.e("33228"),t.e("69662"),t.e("37986"),t.e("27090"),t.e("10355"),t.e("63055"),t.e("25207"),t.e("20035")]).then(t.bind(t,67120))}}}}},{kind:"method",key:"updatePageEl",value:function(e){e.route=this.routeTail,e.hass=this.hass,e.isWide=this.isWide,e.narrow=this.narrow,e.configEntryId=this._configEntry,"group"===this._currentPage?e.groupId=this.routeTail.path.substr(1):"device"===this._currentPage?e.ieee=this.routeTail.path.substr(1):"visualization"===this._currentPage&&(e.zoomedDeviceIdFromURL=this.routeTail.path.substr(1));const a=new URLSearchParams(window.location.search);this._configEntry&&!a.has("config_entry")&&(a.append("config_entry",this._configEntry),(0,o.c)(`${this.routeTail.prefix}${this.routeTail.path}?${a.toString()}`,{replace:!0}))}}]}}),n.n)}}]);
//# sourceMappingURL=40734.3b6c3676681dff3c.js.map