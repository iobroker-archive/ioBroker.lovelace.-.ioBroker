"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["65499"],{32972:function(t,e,i){i.d(e,{x:()=>n});const n=(t,e)=>t.substring(0,e.length)===e},31428:function(t,e,i){i.d(e,{U:()=>_});i(71695),i(47021);var n=i(50875),o=i(11259),r=i(4643),s=i(73850),a=i(42818),c=i(96194),d=i(76190);const l={media_player:{paused:.5,idle:1},vacuum:{returning:.5}};let h=0;const u=new Map;function _(t,e,i){return function(t,e,i){var n;if(!i||t===c.nZ)return(0,d.g)("--history-unavailable-color",e);if(t===c.lz)return(0,d.g)("--history-unknown-color",e);const h=(0,a.tD)(i,t);if(!h)return;const u=(0,d.g)(h,e);if(!u)return;const _=(0,s.M)(i.entity_id),y=null===(n=l[_])||void 0===n?void 0:n[t];return y?(0,o.uO)((0,r.C)((0,o.Rw)((0,o.wK)(u)),y)):u}(t,e,i)||function(t,e){if(u.has(t))return u.get(t);const i=(0,n.hZ)(h,e);return h++,u.set(t,i),i}(t,e)}},75244:function(t,e,i){i.d(e,{U_:()=>a,Zm:()=>d,lj:()=>s,mA:()=>r,nV:()=>c});i(52247),i(61495),i(9359),i(1331);if(99387==i.j)var n=i(32972);var o=i(14473);const r=(t,e,i,n)=>t.callWS({type:"trace/get",domain:e,item_id:i,run_id:n}),s=(t,e,i)=>t.callWS({type:"trace/list",domain:e,item_id:i}),a=(t,e,i)=>t.callWS({type:"trace/contexts",domain:e,item_id:i}),c=(t,e)=>{const i=e.split("/").reverse();let n=t;for(;i.length;){const t=i.pop(),e=Number(t);if(isNaN(e)){let e=n[t];if(!e&&"sequence"===t)continue;e||"trigger"!==t||(e=n.triggers),e||"condition"!==t||(e=n.conditions),e||"action"!==t||(e=n.actions),n="trigger"===t?(0,o.Kc)(e):e}else if(Array.isArray(n))n=n[e];else if(0!==e)throw new Error("If config is not an array, can only return index 0")}return n},d=t=>"trigger"===t||(0,n.x)(t,"trigger/")},82480:function(t,e,i){i.a(t,(async function(t,e){try{var n=i(61701),o=(i(19083),i(71695),i(92745),i(9359),i(70104),i(19134),i(97499),i(61006),i(97003),i(47021),i(57243)),r=i(50778),s=i(35359),a=i(69634),c=i(72344),d=i(46467),l=i(33570),h=i(31146),u=i(36522),_=i(73850),y=i(83523),v=i(31428),g=i(5460),m=(i(97206),i(13928),i(95975)),x=i(25433),k=i(28008),f=i(47641),p=i(88238),b=i(57816),$=t([g,m,d,l]);[g,m,d,l]=$.then?(await $)():$;let w,C,z,I,E,M,S,B,U,L,P,D,N,T,W,j,O,Z,A=t=>t;const V=["script","automation"],F=t=>t.context_event_type||t.context_state||t.context_message,K=(t,e)=>e?t.replace(e," "):t;(0,n.Z)([(0,r.Mo)("ha-logbook-renderer")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"userIdToName",value(){return{}}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"traceContexts",value(){return{}}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"entries",value(){return[]}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"narrow"})],key:"narrow",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"show-indicator"})],key:"showIndicator",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"no-icon"})],key:"noIcon",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"no-name"})],key:"noName",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value(){return!1}},{kind:"field",decorators:[(0,h.i)(".container")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"willUpdate",value:function(t){(!this.hasUpdated&&this.virtualize||t.has("virtualize")&&this.virtualize)&&(this.hass.loadBackendTranslation("services"),this.hass.loadBackendTranslation("title"),(0,f.o)())}},{kind:"method",key:"shouldUpdate",value:function(t){const e=t.get("hass"),i=void 0===e||e.locale!==this.hass.locale;return t.has("entries")||t.has("traceContexts")||i}},{kind:"method",key:"render",value:function(){var t;return null!==(t=this.entries)&&void 0!==t&&t.length?(0,o.dy)(C||(C=A` <div class="container ha-scrollbar ${0}" @scroll="${0}"> ${0} </div> `),(0,s.$)({narrow:this.narrow,"no-name":this.noName,"no-icon":this.noIcon}),this._saveScrollPos,this.virtualize?(0,o.dy)(z||(z=A`<lit-virtualizer @visibilityChanged="${0}" scroller class="ha-scrollbar" .items="${0}" .renderItem="${0}"> </lit-virtualizer>`),this._visibilityChanged,this.entries,this._renderLogbookItem):this.entries.map(((t,e)=>this._renderLogbookItem(t,e)))):(0,o.dy)(w||(w=A` <div class="container no-entries"> ${0} </div> `),this.hass.localize("ui.components.logbook.entries_not_found"))}},{kind:"field",key:"_renderLogbookItem",value(){return(t,e)=>{var i;if(!t||void 0===e)return o.Ld;const n=this.entries[e-1],r=[],a=t.entity_id?this.hass.states[t.entity_id]:void 0,h=a?(0,x.o1)(a,t.state):void 0,u=t.entity_id?(0,_.M)(t.entity_id):t.domain,y=h||t.icon||t.state||!u||!(0,c.p)(this.hass,u)?void 0:(0,p.X1)({domain:u,type:"icon",useFallback:!0,darkOptimized:null===(i=this.hass.themes)||void 0===i?void 0:i.darkMode}),v=V.includes(t.domain)&&t.context_id&&t.context_id in this.traceContexts?this.traceContexts[t.context_id]:void 0,g=void 0!==v;return(0,o.dy)(I||(I=A` <div class="entry-container ${0}" .traceLink="${0}" @click="${0}"> ${0} <div class="entry ${0}"> <div class="icon-message"> ${0} ${0} <div class="message-relative_time"> <div class="message"> ${0} ${0} ${0} </div> <div class="secondary"> <span>${0}</span> - <ha-relative-time .hass="${0}" .datetime="${0}" capitalize></ha-relative-time> ${0} ${0} </div> </div> </div> ${0} </div> </div> `),(0,s.$)({clickable:g}),v?`/config/${v.domain}/trace/${v.item_id}?run_id=${v.run_id}`:void 0,this._handleClick,0===e||null!=t&&t.when&&null!=n&&n.when&&new Date(1e3*t.when).toDateString()!==new Date(1e3*n.when).toDateString()?(0,o.dy)(E||(E=A` <h4 class="date"> ${0} </h4> `),(0,d.p6)(new Date(1e3*t.when),this.hass.locale,this.hass.config)):o.Ld,(0,s.$)({"no-entity":!t.entity_id}),this.noIcon?"":(0,o.dy)(M||(M=A` <state-badge .hass="${0}" .overrideIcon="${0}" .overrideImage="${0}" .stateObj="${0}" .stateColor="${0}"></state-badge> `),this.hass,t.icon,y,t.icon?void 0:h,!1),this.showIndicator?this._renderIndicator(t):"",this.noName?"":this._renderEntity(t.entity_id,t.name,g),this._renderMessage(t,r,u,h,g),this._renderContextMessage(t,r,g),(0,l.Vu)(new Date(1e3*t.when),this.hass.locale,this.hass.config),this.hass,1e3*t.when,t.context_user_id?(0,o.dy)(S||(S=A`${0}`),this._renderUser(t)):"",g?`- ${this.hass.localize("ui.components.logbook.show_trace")}`:"",g?(0,o.dy)(B||(B=A`<ha-icon-next></ha-icon-next>`)):"")}}},{kind:"method",decorators:[(0,r.hO)({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"method",decorators:[(0,r.hO)({passive:!0})],key:"_visibilityChanged",value:function(t){(0,u.B)(this,"hass-logbook-live",{enable:0===t.first})}},{kind:"method",key:"_renderIndicator",value:function(t){const e=this.hass.states[t.entity_id],i=getComputedStyle(this),n={backgroundColor:void 0!==t.state?(0,v.U)(t.state,i,e):void 0};return(0,o.dy)(U||(U=A` <div class="indicator" style="${0}"></div> `),(0,a.V)(n))}},{kind:"method",key:"_renderMessage",value:function(t,e,i,n,o){if(t.entity_id&&t.state)return n?(0,x.ri)(this.hass,this.hass.localize,t.state,n,i):t.state;const r=F(t);let s=t.message;if(V.includes(i)&&t.source){if(r)return"";s=(0,x.hb)(this.hass.localize,t.source)}return s?this._formatMessageWithPossibleEntity(r?K(s,t.context_entity_id):s,e,void 0,o):""}},{kind:"method",key:"_renderUser",value:function(t){const e=t.context_user_id&&this.userIdToName[t.context_user_id];return e?`- ${e}`:""}},{kind:"method",key:"_renderUnseenContextSourceEntity",value:function(t,e,i){return!t.context_entity_id||e.includes(t.context_entity_id)?"":(0,o.dy)(L||(L=A` (${0})`),this._renderEntity(t.context_entity_id,t.context_entity_id_name,i))}},{kind:"method",key:"_renderContextMessage",value:function(t,e,i){if(t.context_state){const e=t.context_entity_id&&t.context_entity_id in this.hass.states?(0,x.o1)(this.hass.states[t.context_entity_id],t.context_state):void 0;return(0,o.dy)(P||(P=A`${0} ${0} ${0}`),this.hass.localize("ui.components.logbook.triggered_by_state_of"),this._renderEntity(t.context_entity_id,t.context_entity_id_name,i),e?(0,x.ri)(this.hass,this.hass.localize,t.context_state,e,(0,_.M)(t.context_entity_id)):t.context_state)}var n;if("call_service"===t.context_event_type)return(0,o.dy)(D||(D=A`${0} ${0}`),this.hass.localize("ui.components.logbook.triggered_by_action"),t.context_domain&&t.context_service?`${(0,b.Lh)(this.hass.localize,t.context_domain)}:\n      ${this.hass.localize(`component.${t.context_domain}.services.${t.context_service}.name`)||(null===(n=this.hass.services[t.context_domain])||void 0===n||null===(n=n[t.context_service])||void 0===n?void 0:n.name)||t.context_service}`:"");if(!t.context_message||e.includes(t.context_entity_id))return"";if("automation_triggered"===t.context_event_type||"script_started"===t.context_event_type){const n=t.context_source?t.context_source:t.context_message.replace("triggered by ",""),r=(0,x.hb)(this.hass.localize,n);return(0,o.dy)(N||(N=A`${0} ${0} ${0}`),this.hass.localize("automation_triggered"===t.context_event_type?"ui.components.logbook.triggered_by_automation":"ui.components.logbook.triggered_by_script"),this._renderEntity(t.context_entity_id,t.context_entity_id_name,i),t.context_message?this._formatMessageWithPossibleEntity(r,e,void 0,i):"")}return(0,o.dy)(T||(T=A` ${0} ${0} ${0} ${0}`),this.hass.localize("ui.components.logbook.triggered_by"),t.context_name,this._formatMessageWithPossibleEntity(t.context_message,e,t.context_entity_id,i),this._renderUnseenContextSourceEntity(t,e,i))}},{kind:"method",key:"_renderEntity",value:function(t,e,i){const n=t&&t in this.hass.states,r=e||n&&this.hass.states[t].attributes.friendly_name||t;return n?i?r:(0,o.dy)(W||(W=A`<button class="link" @click="${0}" .entityId="${0}"> ${0} </button>`),this._entityClicked,t,r):r}},{kind:"method",key:"_formatMessageWithPossibleEntity",value:function(t,e,i,n){if(-1!==t.indexOf(".")){const i=t.split(" ");for(let t=0,r=i.length;t<r;t++)if(i[t]in this.hass.states){const r=i[t];if(e.includes(r))return"";e.push(r);const s=i.splice(t);return s.shift(),(0,o.dy)(j||(j=A`${0} ${0} ${0}`),i.join(" "),this._renderEntity(r,this.hass.states[r].attributes.friendly_name,n),s.join(" "))}}if(i&&i in this.hass.states){const r=this.hass.states[i].attributes.friendly_name;if(r&&t.endsWith(r))return e.includes(i)?"":(e.push(i),t=t.substring(0,t.length-r.length),(0,o.dy)(O||(O=A`${0} ${0}`),t,this._renderEntity(i,r,n)))}return t}},{kind:"method",key:"_entityClicked",value:function(t){const e=t.currentTarget.entityId;e&&(t.preventDefault(),t.stopPropagation(),(0,u.B)(this,"hass-more-info",{entityId:e}))}},{kind:"method",key:"_handleClick",value:function(t){const e=t.currentTarget;e.traceLink&&((0,y.c)(e.traceLink),(0,u.B)(this,"closed"))}},{kind:"get",static:!0,key:"styles",value:function(){return[k.Qx,k.$c,k.k1,(0,o.iv)(Z||(Z=A`:host([virtualize]){display:block;height:100%}.entry-container{width:100%}.entry{position:relative;display:flex;width:100%;line-height:2em;padding:8px 16px;box-sizing:border-box;border-top:1px solid var(--divider-color);justify-content:space-between;align-items:center}.indicator{background-color:var(--disabled-color);height:8px;width:8px;border-radius:4px;flex-shrink:0;margin-right:12px;margin-inline-start:initial;margin-inline-end:12px;direction:var(--direction)}ha-icon-next{color:var(--secondary-text-color)}.clickable{cursor:pointer}:not(.clickable) .entry.no-entity,:not(.clickable) .no-name .entry{cursor:default}.entry:hover{background-color:rgba(var(--rgb-primary-text-color),.04)}.narrow:not(.no-icon) .time{margin-left:32px;margin-inline-start:32px;margin-inline-end:initial;direction:var(--direction)}.message-relative_time{display:flex;flex-direction:column}.secondary{font-size:12px;line-height:1.7}.secondary a{color:var(--secondary-text-color)}.date{margin:8px 0;padding:0 16px}.icon-message{display:flex;align-items:center}.no-entries{text-align:center;color:var(--secondary-text-color)}state-badge{margin-right:16px;margin-inline-start:initial;flex-shrink:0;color:var(--state-icon-color);margin-inline-end:16px;direction:var(--direction)}.message{color:var(--primary-text-color)}.no-name .message:first-letter{text-transform:capitalize}a{color:var(--primary-color);text-decoration:none}button.link{color:var(--paper-item-icon-color);text-decoration:none}.container{max-height:var(--logbook-max-height)}.container,lit-virtualizer{height:100%}lit-virtualizer{contain:size layout!important}.narrow .entry{line-height:1.5}.narrow .icon-message state-badge{margin-left:0;margin-inline-start:0;margin-right:8px;margin-inline-end:8px;direction:var(--direction)}`))]}}]}}),o.oi);e()}catch(w){e(w)}}))}}]);
//# sourceMappingURL=65499.3bf2f7860ba49144.js.map