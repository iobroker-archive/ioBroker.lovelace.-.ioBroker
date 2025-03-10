"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["52876"],{31146:function(e,t,i){i.d(t,{i:()=>s});const n=(0,i(93826).P)((e=>{history.replaceState({scrollPosition:e},"")}),300),s=e=>t=>({kind:"method",placement:"prototype",key:t.key,descriptor:{set(e){n(e),this[`__${String(t.key)}`]=e},get(){var e;return this[`__${String(t.key)}`]||(null===(e=history.state)||void 0===e?void 0:e.scrollPosition)},enumerable:!0,configurable:!0},finisher(i){const n=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){n.call(this);const i=this[t.key];i&&this.updateComplete.then((()=>{const t=this.renderRoot.querySelector(e);t&&setTimeout((()=>{t.scrollTop=i}),0)}))}}})},12753:function(e,t,i){i.d(t,{N:()=>s});i(71695),i(88044),i(47021);const n=[" ",": "],s=(e,t)=>{const i=e.toLowerCase();for(const s of n){const n=`${t}${s}`;if(i.startsWith(n)){const t=e.substring(n.length);if(t.length)return o(t.substr(0,t.indexOf(" ")))?t:t[0].toUpperCase()+t.slice(1)}}},o=e=>e.toLowerCase()!==e},20526:function(e,t,i){i.d(t,{oU:()=>m,lY:()=>f,VG:()=>_,AP:()=>g});i(19083),i(71695),i(92745),i(61893),i(84283),i(9359),i(56475),i(1331),i(31526),i(70104),i(19423),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),i(61006),i(81804),i(47021);var n=i(73358),s=i(73850),o=i(59847),a=i(47194);var r=i(12753),l=i(1416),c=i(82100),d=i(57816),u=i(4242),h=i(96530);const y=new Set(["automation","configurator","device_tracker","event","geo_location","notify","persistent_notification","script","sun","tag","todo","zone",...n.a5]),p=new Set(["mobile_app"]),f=(e,t)=>Object.assign({type:"grid",cards:e.map((e=>({type:"tile",entity:e,show_entity_picture:["camera","image","person"].includes((0,s.M)(e))||void 0})))},t),_=(e,t,i,o=!0)=>{const c=[],d=[],u=i.title?i.title.toLowerCase():void 0,h=[];for(const n of t){const t=e[n],i=(0,s.M)(n);if("alarm_control_panel"===i){const e={type:"alarm-panel",entity:n};c.push(e)}else if("camera"===i){const e={type:"picture-entity",entity:n};c.push(e)}else if("image"===i){const e={type:"picture",image_entity:n};c.push(e)}else if("climate"===i){var y,p,f;const t={type:"thermostat",entity:n,features:(null!==(y=null===(p=e[n])||void 0===p||null===(p=p.attributes)||void 0===p||null===(p=p.hvac_modes)||void 0===p?void 0:p.length)&&void 0!==y?y:0)>1?[{type:"climate-hvac-modes",hvac_modes:null===(f=e[n])||void 0===f||null===(f=f.attributes)||void 0===f?void 0:f.hvac_modes}]:void 0};c.push(t)}else if("humidifier"===i){const e={type:"humidifier",entity:n,features:[{type:"humidifier-toggle"}]};c.push(e)}else if("media_player"===i){const e={type:"media-control",entity:n};c.push(e)}else if("plant"===i){const e={type:"plant-status",entity:n};c.push(e)}else if("weather"===i){const e={type:"weather-forecast",entity:n,show_forecast:!1};c.push(e)}else if(!o||"scene"!==i&&"script"!==i){let e;const i=u&&t&&(e=(0,r.N)((0,a.C)(t),u))?{entity:n,name:e}:n;d.push(i)}else{const e={entity:n,show_icon:!0,show_name:!0};let i;u&&t&&(i=(0,r.N)((0,a.C)(t),u))&&(e.name=i),h.push(e)}}if(d.sort(((t,i)=>{const o="string"==typeof t?t:t.entity,r="string"==typeof i?i:i.entity,c=n.zF.includes((0,s.M)(o))?"sensor":"control";return c!==(n.zF.includes((0,s.M)(r))?"sensor":"control")?"sensor"===c?1:-1:(0,l.$)("string"==typeof t?e[t]?(0,a.C)(e[t]):"":t.name||"","string"==typeof i?e[i]?(0,a.C)(e[i]):"":i.name||"")})),0===d.length&&h.length>0)return _(e,t,i,!1);if(d.length>0||h.length>0){const e=Object.assign({type:"entities",entities:d},i);h.length>0&&(e.footer={type:"buttons",entities:h}),c.unshift(e)}return c.length<2?c:[{type:"grid",square:!1,columns:1,cards:c}]},m=(e,t)=>{const i=[];for(const n of t){const e={type:"entity",entity:n};i.push(e)}return i},g=(e,t,i,n,r,f,m,g,v)=>{const b=((e,t)=>{const i={},n=new Set(Object.values(t).filter((e=>e.entity_category||e.platform&&p.has(e.platform)||e.hidden)).map((e=>e.entity_id)));for(const s of Object.keys(e)){const t=e[s];y.has((0,o.N)(t))||n.has(t.entity_id)||(i[s]=e[s])}return i})(n,i),k={};for(const s of Object.keys(b)){const e=b[s];e.attributes.order&&(k[s]=e.attributes.order)}const C=((e,t,i,n)=>{const s=Object.assign({},n),o={},a={};for(const l of Object.values(i)){var r;const i=l.area_id||l.device_id&&(null===(r=t[l.device_id])||void 0===r?void 0:r.area_id);i&&i in e&&l.entity_id in s?(i in o||(o[i]=[]),o[i].push(s[l.entity_id]),delete s[l.entity_id]):l.device_id&&l.device_id in t&&l.entity_id in s&&(l.device_id in a||(a[l.device_id]=[]),a[l.device_id].push(s[l.entity_id]),delete s[l.entity_id])}for(const[l,c]of Object.entries(a))1===c.length&&(s[c[0].entity_id]=c[0],delete a[l]);return{areasWithEntities:o,devicesWithEntities:a,otherEntities:s}})(e,t,i,b);if(null!=m&&m.hidden)for(const s of m.hidden)delete C.areasWithEntities[s];g&&(C.devicesWithEntities={},C.otherEntities={});const w=(e=>{const t=[],i={};return Object.keys(e).forEach((n=>{const o=e[n];"group"===(0,s.M)(n)?t.push(o):i[n]=o})),t.forEach((e=>e.attributes.entity_id.forEach((e=>{delete i[e]})))),{groups:t,ungrouped:i}})(C.otherEntities);w.groups.sort(((e,t)=>k[e.entity_id]-k[t.entity_id]));const $=[];for(const s of w.groups)$.push(..._(n,s.attributes.entity_id,{title:(0,a.C)(s),show_header_toggle:"hidden"!==s.attributes.control}));const E=((e,t,i,n,s)=>{const r={};for(const a of Object.keys(s)){const e=s[a],t=(0,o.N)(e);t in r||(r[t]=[]),r[t].push(e.entity_id)}const c=[];if("person"in r){const e=[];if(1===r.person.length)c.push({type:"entities",entities:r.person});else{let t,i="";for(const n of r.person){const o=s[n];let a=o.attributes.entity_picture;if(!a){if(void 0===t){const e=getComputedStyle(document.body);t=encodeURIComponent(e.getPropertyValue("--light-primary-color").trim()),i=encodeURIComponent((e.getPropertyValue("--text-light-primary-color")||e.getPropertyValue("--primary-text-color")).trim())}a=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='50' height='50' style='background-color:${t}'%3E%3Cg%3E%3Ctext font-family='roboto' x='50%25' y='50%25' text-anchor='middle' stroke='${i}' font-size='1.3em' dy='.3em'%3E${(0,u.fm)(o.attributes.friendly_name||"")}%3C/text%3E%3C/g%3E%3C/svg%3E`}e.push({type:"picture-entity",entity:n,aspect_ratio:"1",show_name:!1,image:a})}c.push({type:"grid",square:!0,columns:3,cards:e})}delete r.person}const y=[];for(const o of h.y)o in r&&(y.push(...r[o]),delete r[o]);const p={};for(const o of Object.keys(r))p[o]=(0,d.Lh)(e,o);y.length&&(r._helpers=y,p._helpers=e("ui.panel.lovelace.strategy.original-states.helpers")),Object.keys(r).sort(((e,t)=>(0,l.$)(p[e],p[t]))).forEach((e=>{c.push(..._(s,r[e].sort(((e,t)=>(0,l.$)((0,a.C)(s[e]),(0,a.C)(s[t])))),{title:p[e]}))}));const f={path:t,title:i,cards:c};return n&&(f.icon=n),f})(r,"default_view","Home",undefined,w.ungrouped),O=[],j=Object.keys(C.areasWithEntities).sort((0,c.a)(e,null==m?void 0:m.order));for(const s of j){const t=C.areasWithEntities[s],i=e[s];O.push(..._(n,t.map((e=>e.entity_id)),{title:i.name}))}const x=[],z=Object.entries(C.devicesWithEntities).sort(((e,i)=>{const n=t[e[0]],s=t[i[0]];return(0,l.$)(n.name_by_user||n.name||"",s.name_by_user||s.name||"")}));for(const[s,o]of z){const e=t[s];x.push(..._(n,o.map((e=>e.entity_id)),{title:e.name_by_user||e.name||r("ui.panel.config.devices.unnamed_device",{type:r(`ui.panel.config.devices.type.${e.entry_type||"device"}`)})}))}let S;if(f&&!v){const e=f.energy_sources.find((e=>"grid"===e.type));e&&e.flow_from.length>0&&(S={title:r("ui.panel.lovelace.cards.energy.energy_distribution.title_today"),type:"energy-distribution",link_dashboard:!0})}return E.cards.unshift(...O,...$,...S?[S]:[]),E.cards.push(...x),E}},71971:function(e,t,i){i.a(e,(async function(e,t){try{var n=i(61701),s=(i(71695),i(47021),i(57243)),o=i(50778),a=i(27486),r=i(36522),l=(i(93288),i(5460)),c=i(95975),d=e([l,c]);[l,c]=d.then?(await d)():d;let u,h,y,p,f,_,m=e=>e;(0,n.Z)([(0,o.Mo)("hui-entity-picker-table")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"no-label-float"})],key:"noLabelFloat",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({type:Array})],key:"entities",value:void 0},{kind:"method",key:"render",value:function(){return(0,s.dy)(u||(u=m` <ha-data-table .hass="${0}" selectable .id="${0}" .columns="${0}" .data="${0}" .searchLabel="${0}" .noLabelFloat="${0}" .noDataText="${0}" @selection-changed="${0}"></ha-data-table> `),this.hass,"entity_id",this._columns(this.narrow),this.entities,this.hass.localize("ui.panel.lovelace.unused_entities.search"),this.noLabelFloat,this.hass.localize("ui.panel.lovelace.unused_entities.no_data"),this._handleSelectionChanged)}},{kind:"field",key:"_columns",value(){return(0,a.Z)((e=>{const t={icon:{title:"",label:this.hass.localize("ui.panel.lovelace.unused_entities.state_icon"),type:"icon",template:e=>(0,s.dy)(h||(h=m` <state-badge @click="${0}" .hass="${0}" .stateObj="${0}"></state-badge> `),this._handleEntityClicked,this.hass,e.stateObj)},name:{title:this.hass.localize("ui.panel.lovelace.unused_entities.entity"),sortable:!0,filterable:!0,flex:2,main:!0,direction:"asc",template:t=>(0,s.dy)(y||(y=m` <div @click="${0}" style="cursor:pointer"> ${0} ${0} </div> `),this._handleEntityClicked,t.name,e?(0,s.dy)(p||(p=m` <div class="secondary">${0}</div> `),t.entity_id):"")}};return t.entity_id={title:this.hass.localize("ui.panel.lovelace.unused_entities.entity_id"),sortable:!0,filterable:!0,hidden:e},t.domain={title:this.hass.localize("ui.panel.lovelace.unused_entities.domain"),sortable:!0,filterable:!0,hidden:e},t.last_changed={title:this.hass.localize("ui.panel.lovelace.unused_entities.last_changed"),type:"numeric",sortable:!0,hidden:e,template:e=>(0,s.dy)(f||(f=m` <ha-relative-time .hass="${0}" .datetime="${0}" capitalize></ha-relative-time> `),this.hass,e.last_changed)},t}))}},{kind:"method",key:"_handleSelectionChanged",value:function(e){const t=e.detail.value;(0,r.B)(this,"selected-changed",{selectedEntities:t})}},{kind:"method",key:"_handleEntityClicked",value:function(e){const t=e.target.closest(".mdc-data-table__row").rowId;(0,r.B)(this,"hass-more-info",{entityId:t})}},{kind:"field",static:!0,key:"styles",value(){return(0,s.iv)(_||(_=m`ha-data-table{--data-table-border-width:0;height:100%}`))}}]}}),s.oi);t()}catch(u){t(u)}}))}}]);
//# sourceMappingURL=52876.12ec23e248c50854.js.map