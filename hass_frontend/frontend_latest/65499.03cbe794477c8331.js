export const __webpack_ids__=["65499"];export const __webpack_modules__={32972:function(t,e,i){i.d(e,{x:()=>n});const n=(t,e)=>t.substring(0,e.length)===e},31428:function(t,e,i){i.d(e,{U:()=>_});var n=i(50875),o=i(11259),s=i(4643),r=i(73850),a=i(42818),c=i(96194),d=i(76190);const l={media_player:{paused:.5,idle:1},vacuum:{returning:.5}};let h=0;const u=new Map;function _(t,e,i){return function(t,e,i){if(!i||t===c.nZ)return(0,d.g)("--history-unavailable-color",e);if(t===c.lz)return(0,d.g)("--history-unknown-color",e);const n=(0,a.tD)(i,t);if(!n)return;const h=(0,d.g)(n,e);if(!h)return;const u=(0,r.M)(i.entity_id),_=l[u]?.[t];return _?(0,o.uO)((0,s.C)((0,o.Rw)((0,o.wK)(h)),_)):h}(t,e,i)||function(t,e){if(u.has(t))return u.get(t);const i=(0,n.hZ)(h,e);return h++,u.set(t,i),i}(t,e)}},75244:function(t,e,i){i.d(e,{U_:()=>a,Zm:()=>d,lj:()=>r,mA:()=>s,nV:()=>c});i(9359),i(1331);if(99387==i.j)var n=i(32972);var o=i(14473);const s=(t,e,i,n)=>t.callWS({type:"trace/get",domain:e,item_id:i,run_id:n}),r=(t,e,i)=>t.callWS({type:"trace/list",domain:e,item_id:i}),a=(t,e,i)=>t.callWS({type:"trace/contexts",domain:e,item_id:i}),c=(t,e)=>{const i=e.split("/").reverse();let n=t;for(;i.length;){const t=i.pop(),e=Number(t);if(isNaN(e)){let e=n[t];if(!e&&"sequence"===t)continue;e||"trigger"!==t||(e=n.triggers),e||"condition"!==t||(e=n.conditions),e||"action"!==t||(e=n.actions),n="trigger"===t?(0,o.Kc)(e):e}else if(Array.isArray(n))n=n[e];else if(0!==e)throw new Error("If config is not an array, can only return index 0")}return n},d=t=>"trigger"===t||(0,n.x)(t,"trigger/")},82480:function(t,e,i){i.a(t,(async function(t,e){try{var n=i(44249),o=(i(92745),i(9359),i(70104),i(57243)),s=i(15093),r=i(35359),a=i(69634),c=i(72344),d=i(46467),l=i(33570),h=i(31146),u=i(36522),_=i(73850),y=i(83523),g=i(31428),v=i(5460),m=(i(97206),i(13928),i(95975)),x=i(25433),k=i(28008),f=i(47641),p=i(88238),b=i(57816),$=t([v,m,d,l]);[v,m,d,l]=$.then?(await $)():$;const w=["script","automation"],z=t=>t.context_event_type||t.context_state||t.context_message,C=(t,e)=>e?t.replace(e," "):t;(0,n.Z)([(0,s.Mo)("ha-logbook-renderer")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"userIdToName",value:()=>({})},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"traceContexts",value:()=>({})},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"entries",value:()=>[]},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"narrow"})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"show-indicator"})],key:"showIndicator",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"no-icon"})],key:"noIcon",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"no-name"})],key:"noName",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value:()=>!1},{kind:"field",decorators:[(0,h.i)(".container")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"willUpdate",value:function(t){(!this.hasUpdated&&this.virtualize||t.has("virtualize")&&this.virtualize)&&(this.hass.loadBackendTranslation("services"),this.hass.loadBackendTranslation("title"),(0,f.o)())}},{kind:"method",key:"shouldUpdate",value:function(t){const e=t.get("hass"),i=void 0===e||e.locale!==this.hass.locale;return t.has("entries")||t.has("traceContexts")||i}},{kind:"method",key:"render",value:function(){return this.entries?.length?o.dy` <div class="container ha-scrollbar ${(0,r.$)({narrow:this.narrow,"no-name":this.noName,"no-icon":this.noIcon})}" @scroll="${this._saveScrollPos}"> ${this.virtualize?o.dy`<lit-virtualizer @visibilityChanged="${this._visibilityChanged}" scroller class="ha-scrollbar" .items="${this.entries}" .renderItem="${this._renderLogbookItem}"> </lit-virtualizer>`:this.entries.map(((t,e)=>this._renderLogbookItem(t,e)))} </div> `:o.dy` <div class="container no-entries"> ${this.hass.localize("ui.components.logbook.entries_not_found")} </div> `}},{kind:"field",key:"_renderLogbookItem",value(){return(t,e)=>{if(!t||void 0===e)return o.Ld;const i=this.entries[e-1],n=[],s=t.entity_id?this.hass.states[t.entity_id]:void 0,a=s?(0,x.o1)(s,t.state):void 0,h=t.entity_id?(0,_.M)(t.entity_id):t.domain,u=a||t.icon||t.state||!h||!(0,c.p)(this.hass,h)?void 0:(0,p.X1)({domain:h,type:"icon",useFallback:!0,darkOptimized:this.hass.themes?.darkMode}),y=w.includes(t.domain)&&t.context_id&&t.context_id in this.traceContexts?this.traceContexts[t.context_id]:void 0,g=void 0!==y;return o.dy` <div class="entry-container ${(0,r.$)({clickable:g})}" .traceLink="${y?`/config/${y.domain}/trace/${y.item_id}?run_id=${y.run_id}`:void 0}" @click="${this._handleClick}"> ${0===e||t?.when&&i?.when&&new Date(1e3*t.when).toDateString()!==new Date(1e3*i.when).toDateString()?o.dy` <h4 class="date"> ${(0,d.p6)(new Date(1e3*t.when),this.hass.locale,this.hass.config)} </h4> `:o.Ld} <div class="entry ${(0,r.$)({"no-entity":!t.entity_id})}"> <div class="icon-message"> ${this.noIcon?"":o.dy` <state-badge .hass="${this.hass}" .overrideIcon="${t.icon}" .overrideImage="${u}" .stateObj="${t.icon?void 0:a}" .stateColor="${!1}"></state-badge> `} ${this.showIndicator?this._renderIndicator(t):""} <div class="message-relative_time"> <div class="message"> ${this.noName?"":this._renderEntity(t.entity_id,t.name,g)} ${this._renderMessage(t,n,h,a,g)} ${this._renderContextMessage(t,n,g)} </div> <div class="secondary"> <span>${(0,l.Vu)(new Date(1e3*t.when),this.hass.locale,this.hass.config)}</span> - <ha-relative-time .hass="${this.hass}" .datetime="${1e3*t.when}" capitalize></ha-relative-time> ${t.context_user_id?o.dy`${this._renderUser(t)}`:""} ${g?`- ${this.hass.localize("ui.components.logbook.show_trace")}`:""} </div> </div> </div> ${g?o.dy`<ha-icon-next></ha-icon-next>`:""} </div> </div> `}}},{kind:"method",decorators:[(0,s.hO)({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"method",decorators:[(0,s.hO)({passive:!0})],key:"_visibilityChanged",value:function(t){(0,u.B)(this,"hass-logbook-live",{enable:0===t.first})}},{kind:"method",key:"_renderIndicator",value:function(t){const e=this.hass.states[t.entity_id],i=getComputedStyle(this),n={backgroundColor:void 0!==t.state?(0,g.U)(t.state,i,e):void 0};return o.dy` <div class="indicator" style="${(0,a.V)(n)}"></div> `}},{kind:"method",key:"_renderMessage",value:function(t,e,i,n,o){if(t.entity_id&&t.state)return n?(0,x.ri)(this.hass,this.hass.localize,t.state,n,i):t.state;const s=z(t);let r=t.message;if(w.includes(i)&&t.source){if(s)return"";r=(0,x.hb)(this.hass.localize,t.source)}return r?this._formatMessageWithPossibleEntity(s?C(r,t.context_entity_id):r,e,void 0,o):""}},{kind:"method",key:"_renderUser",value:function(t){const e=t.context_user_id&&this.userIdToName[t.context_user_id];return e?`- ${e}`:""}},{kind:"method",key:"_renderUnseenContextSourceEntity",value:function(t,e,i){return!t.context_entity_id||e.includes(t.context_entity_id)?"":o.dy` (${this._renderEntity(t.context_entity_id,t.context_entity_id_name,i)})`}},{kind:"method",key:"_renderContextMessage",value:function(t,e,i){if(t.context_state){const e=t.context_entity_id&&t.context_entity_id in this.hass.states?(0,x.o1)(this.hass.states[t.context_entity_id],t.context_state):void 0;return o.dy`${this.hass.localize("ui.components.logbook.triggered_by_state_of")} ${this._renderEntity(t.context_entity_id,t.context_entity_id_name,i)} ${e?(0,x.ri)(this.hass,this.hass.localize,t.context_state,e,(0,_.M)(t.context_entity_id)):t.context_state}`}if("call_service"===t.context_event_type)return o.dy`${this.hass.localize("ui.components.logbook.triggered_by_action")} ${t.context_domain&&t.context_service?`${(0,b.Lh)(this.hass.localize,t.context_domain)}:\n      ${this.hass.localize(`component.${t.context_domain}.services.${t.context_service}.name`)||this.hass.services[t.context_domain]?.[t.context_service]?.name||t.context_service}`:""}`;if(!t.context_message||e.includes(t.context_entity_id))return"";if("automation_triggered"===t.context_event_type||"script_started"===t.context_event_type){const n=t.context_source?t.context_source:t.context_message.replace("triggered by ",""),s=(0,x.hb)(this.hass.localize,n);return o.dy`${this.hass.localize("automation_triggered"===t.context_event_type?"ui.components.logbook.triggered_by_automation":"ui.components.logbook.triggered_by_script")} ${this._renderEntity(t.context_entity_id,t.context_entity_id_name,i)} ${t.context_message?this._formatMessageWithPossibleEntity(s,e,void 0,i):""}`}return o.dy` ${this.hass.localize("ui.components.logbook.triggered_by")} ${t.context_name} ${this._formatMessageWithPossibleEntity(t.context_message,e,t.context_entity_id,i)} ${this._renderUnseenContextSourceEntity(t,e,i)}`}},{kind:"method",key:"_renderEntity",value:function(t,e,i){const n=t&&t in this.hass.states,s=e||n&&this.hass.states[t].attributes.friendly_name||t;return n?i?s:o.dy`<button class="link" @click="${this._entityClicked}" .entityId="${t}"> ${s} </button>`:s}},{kind:"method",key:"_formatMessageWithPossibleEntity",value:function(t,e,i,n){if(-1!==t.indexOf(".")){const i=t.split(" ");for(let t=0,s=i.length;t<s;t++)if(i[t]in this.hass.states){const s=i[t];if(e.includes(s))return"";e.push(s);const r=i.splice(t);return r.shift(),o.dy`${i.join(" ")} ${this._renderEntity(s,this.hass.states[s].attributes.friendly_name,n)} ${r.join(" ")}`}}if(i&&i in this.hass.states){const s=this.hass.states[i].attributes.friendly_name;if(s&&t.endsWith(s))return e.includes(i)?"":(e.push(i),t=t.substring(0,t.length-s.length),o.dy`${t} ${this._renderEntity(i,s,n)}`)}return t}},{kind:"method",key:"_entityClicked",value:function(t){const e=t.currentTarget.entityId;e&&(t.preventDefault(),t.stopPropagation(),(0,u.B)(this,"hass-more-info",{entityId:e}))}},{kind:"method",key:"_handleClick",value:function(t){const e=t.currentTarget;e.traceLink&&((0,y.c)(e.traceLink),(0,u.B)(this,"closed"))}},{kind:"get",static:!0,key:"styles",value:function(){return[k.Qx,k.$c,k.k1,o.iv`:host([virtualize]){display:block;height:100%}.entry-container{width:100%}.entry{position:relative;display:flex;width:100%;line-height:2em;padding:8px 16px;box-sizing:border-box;border-top:1px solid var(--divider-color);justify-content:space-between;align-items:center}.indicator{background-color:var(--disabled-color);height:8px;width:8px;border-radius:4px;flex-shrink:0;margin-right:12px;margin-inline-start:initial;margin-inline-end:12px;direction:var(--direction)}ha-icon-next{color:var(--secondary-text-color)}.clickable{cursor:pointer}:not(.clickable) .entry.no-entity,:not(.clickable) .no-name .entry{cursor:default}.entry:hover{background-color:rgba(var(--rgb-primary-text-color),.04)}.narrow:not(.no-icon) .time{margin-left:32px;margin-inline-start:32px;margin-inline-end:initial;direction:var(--direction)}.message-relative_time{display:flex;flex-direction:column}.secondary{font-size:12px;line-height:1.7}.secondary a{color:var(--secondary-text-color)}.date{margin:8px 0;padding:0 16px}.icon-message{display:flex;align-items:center}.no-entries{text-align:center;color:var(--secondary-text-color)}state-badge{margin-right:16px;margin-inline-start:initial;flex-shrink:0;color:var(--state-icon-color);margin-inline-end:16px;direction:var(--direction)}.message{color:var(--primary-text-color)}.no-name .message:first-letter{text-transform:capitalize}a{color:var(--primary-color);text-decoration:none}button.link{color:var(--paper-item-icon-color);text-decoration:none}.container{max-height:var(--logbook-max-height)}.container,lit-virtualizer{height:100%}lit-virtualizer{contain:size layout!important}.narrow .entry{line-height:1.5}.narrow .icon-message state-badge{margin-left:0;margin-inline-start:0;margin-right:8px;margin-inline-end:8px;direction:var(--direction)}`]}}]}}),o.oi);e()}catch(t){e(t)}}))}};
//# sourceMappingURL=65499.03cbe794477c8331.js.map