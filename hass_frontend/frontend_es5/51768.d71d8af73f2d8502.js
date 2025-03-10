"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["51768"],{75011:function(e,t,n){n.d(t,{I:()=>r,k:()=>i});n(71695),n(92519),n(42179),n(89256),n(24931),n(88463),n(57449),n(19814),n(47021);const i=new Set(["primary","accent","disabled","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white"]);function r(e){return i.has(e)?`var(--${e}-color)`:e}},19631:function(e,t,n){n.a(e,(async function(e,i){try{n.d(t,{Bt:()=>l,T8:()=>d});n(19083);var r=n(16485),a=n(88977),o=n(20382),s=e([r]);r=(s.then?(await s)():s)[0];const u=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],l=e=>e.first_weekday===o.FS.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(e.language).weekInfo.firstDay%7:(0,a.L)(e.language)%7:u.includes(e.first_weekday)?u.indexOf(e.first_weekday):1,d=e=>{const t=l(e);return u[t]};i()}catch(u){i(u)}}))},46467:function(e,t,n){n.a(e,(async function(e,i){try{n.d(t,{D_:()=>x,NC:()=>p,Nh:()=>v,U8:()=>E,WB:()=>h,mn:()=>c,p6:()=>l,ud:()=>f,yQ:()=>w});n(63434),n(9359),n(1331),n(96829);var r=n(16485),a=n(27486),o=n(20382),s=n(11104),u=e([r,s]);[r,s]=u.then?(await u)():u;(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:(0,s.f)(e.time_zone,t)})));const l=(e,t,n)=>d(t,n.time_zone).format(e),d=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:(0,s.f)(e.time_zone,t)}))),c=(e,t,n)=>m(t,n.time_zone).format(e),m=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",timeZone:(0,s.f)(e.time_zone,t)}))),h=(e,t,n)=>{var i,r,a,s;const u=g(t,n.time_zone);if(t.date_format===o.t6.language||t.date_format===o.t6.system)return u.format(e);const l=u.formatToParts(e),d=null===(i=l.find((e=>"literal"===e.type)))||void 0===i?void 0:i.value,c=null===(r=l.find((e=>"day"===e.type)))||void 0===r?void 0:r.value,m=null===(a=l.find((e=>"month"===e.type)))||void 0===a?void 0:a.value,h=null===(s=l.find((e=>"year"===e.type)))||void 0===s?void 0:s.value,f=l.at(l.length-1);let y="literal"===(null==f?void 0:f.type)?null==f?void 0:f.value:"";"bg"===t.language&&t.date_format===o.t6.YMD&&(y="");return{[o.t6.DMY]:`${c}${d}${m}${d}${h}${y}`,[o.t6.MDY]:`${m}${d}${c}${d}${h}${y}`,[o.t6.YMD]:`${h}${d}${m}${d}${c}${y}`}[t.date_format]},g=(0,a.Z)(((e,t)=>{const n=e.date_format===o.t6.system?void 0:e.language;return e.date_format===o.t6.language||(e.date_format,o.t6.system),new Intl.DateTimeFormat(n,{year:"numeric",month:"numeric",day:"numeric",timeZone:(0,s.f)(e.time_zone,t)})})),f=(e,t,n)=>y(t,n.time_zone).format(e),y=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:(0,s.f)(e.time_zone,t)}))),p=(e,t,n)=>b(t,n.time_zone).format(e),b=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:(0,s.f)(e.time_zone,t)}))),v=(e,t,n)=>_(t,n.time_zone).format(e),_=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",timeZone:(0,s.f)(e.time_zone,t)}))),w=(e,t,n)=>k(t,n.time_zone).format(e),k=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:(0,s.f)(e.time_zone,t)}))),x=(e,t,n)=>C(t,n.time_zone).format(e),C=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:(0,s.f)(e.time_zone,t)}))),E=(e,t,n)=>D(t,n.time_zone).format(e),D=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:(0,s.f)(e.time_zone,t)})));i()}catch(l){i(l)}}))},64214:function(e,t,n){n.a(e,(async function(e,i){try{n.d(t,{DG:()=>f,E8:()=>_,Fu:()=>v,NR:()=>k,W0:()=>h,o0:()=>c,yD:()=>p});var r=n(16485),a=n(27486),o=n(46467),s=n(33570),u=n(11104),l=n(16922),d=e([r,u,o,s]);[r,u,o,s]=d.then?(await d)():d;const c=(e,t,n)=>m(t,n.time_zone).format(e),m=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,l.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.y)(e)?"h12":"h23",timeZone:(0,u.f)(e.time_zone,t)}))),h=e=>g().format(e),g=(0,a.Z)((()=>new Intl.DateTimeFormat(void 0,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}))),f=(e,t,n)=>y(t,n.time_zone).format(e),y=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,l.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.y)(e)?"h12":"h23",timeZone:(0,u.f)(e.time_zone,t)}))),p=(e,t,n)=>b(t,n.time_zone).format(e),b=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,l.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.y)(e)?"h12":"h23",timeZone:(0,u.f)(e.time_zone,t)}))),v=(e,t,n)=>(new Date).getFullYear()===e.getFullYear()?p(e,t,n):f(e,t,n),_=(e,t,n)=>w(t,n.time_zone).format(e),w=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,l.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,l.y)(e)?"h12":"h23",timeZone:(0,u.f)(e.time_zone,t)}))),k=(e,t,n)=>`${(0,o.WB)(e,t,n)}, ${(0,s.mr)(e,t,n)}`;i()}catch(c){i(c)}}))},33570:function(e,t,n){n.a(e,(async function(e,i){try{n.d(t,{Vu:()=>c,Zs:()=>f,mr:()=>l,xO:()=>h});var r=n(16485),a=n(27486),o=n(11104),s=n(16922),u=e([r,o]);[r,o]=u.then?(await u)():u;const l=(e,t,n)=>d(t,n.time_zone).format(e),d=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:(0,o.f)(e.time_zone,t)}))),c=(e,t,n)=>m(t,n.time_zone).format(e),m=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:(0,o.f)(e.time_zone,t)}))),h=(e,t,n)=>g(t,n.time_zone).format(e),g=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:(0,o.f)(e.time_zone,t)}))),f=(e,t,n)=>y(t,n.time_zone).format(e),y=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,o.f)(e.time_zone,t)})));i()}catch(l){i(l)}}))},94947:function(e,t,n){n.a(e,(async function(e,i){try{n.d(t,{G:()=>l});var r=n(16485),a=n(27486),o=n(27046),s=e([r,o]);[r,o]=s.then?(await s)():s;const u=(0,a.Z)((e=>new Intl.RelativeTimeFormat(e.language,{numeric:"auto"}))),l=(e,t,n,i=!0)=>{const r=(0,o.W)(e,n,t);return i?u(t).format(r.value,r.unit):Intl.NumberFormat(t.language,{style:"unit",unit:r.unit,unitDisplay:"long"}).format(Math.abs(r.value))};i()}catch(u){i(u)}}))},11104:function(e,t,n){n.a(e,(async function(e,i){try{n.d(t,{Q:()=>c,f:()=>m});var r,a,o,s=n(16485),u=n(20382),l=e([s]);s=(l.then?(await l)():l)[0];const d=null===(r=Intl.DateTimeFormat)||void 0===r||null===(a=(o=r.call(Intl)).resolvedOptions)||void 0===a?void 0:a.call(o).timeZone,c=null!=d?d:"UTC",m=(e,t)=>e===u.c_.local&&d?c:t;i()}catch(d){i(d)}}))},16922:function(e,t,n){n.d(t,{y:()=>a});n(19083),n(61006);var i=n(27486),r=n(20382);const a=(0,i.Z)((e=>{if(e.time_format===r.zt.language||e.time_format===r.zt.system){const t=e.time_format===r.zt.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===r.zt.am_pm}))},31064:function(e,t,n){n.d(t,{T:()=>r});n(19134),n(5740);const i=/^(\w+)\.(\w+)$/,r=e=>i.test(e)},50602:function(e,t,n){n.a(e,(async function(e,i){try{n.d(t,{SL:()=>u,l4:()=>m,sJ:()=>l,uf:()=>c});var r=n(16485),a=(n(19083),n(19423),n(11740),n(61006),n(20382)),o=n(34618),s=e([r]);r=(s.then?(await s)():s)[0];const u=e=>l(e.attributes),l=(e,t)=>!!e.unit_of_measurement||!!e.state_class||(t||[]).includes(e.device_class||""),d=e=>{switch(e.number_format){case a.y4.comma_decimal:return["en-US","en"];case a.y4.decimal_comma:return["de","es","it"];case a.y4.space_comma:return["fr","sv","cs"];case a.y4.system:return;default:return e.language}},c=(e,t,n)=>{const i=t?d(t):void 0;return Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)===a.y4.none||Number.isNaN(Number(e))?Number.isNaN(Number(e))||""===e||(null==t?void 0:t.number_format)!==a.y4.none?"string"==typeof e?e:`${(0,o.N)(e,null==n?void 0:n.maximumFractionDigits).toString()}${"currency"===(null==n?void 0:n.style)?` ${n.currency}`:""}`:new Intl.NumberFormat("en-US",h(e,Object.assign(Object.assign({},n),{},{useGrouping:!1}))).format(Number(e)):new Intl.NumberFormat(i,h(e,n)).format(Number(e))},m=(e,t)=>{var n;const i=null==t?void 0:t.display_precision;return null!=i?{maximumFractionDigits:i,minimumFractionDigits:i}:Number.isInteger(Number(null==e||null===(n=e.attributes)||void 0===n?void 0:n.step))&&Number.isInteger(Number(null==e?void 0:e.state))?{maximumFractionDigits:0}:void 0},h=(e,t)=>{const n=Object.assign({maximumFractionDigits:2},t);if("string"!=typeof e)return n;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;n.minimumFractionDigits=t,n.maximumFractionDigits=t}return n};i()}catch(u){i(u)}}))},87733:function(e,t,n){n.d(t,{f:()=>i});const i=e=>e.charAt(0).toUpperCase()+e.slice(1)},27046:function(e,t,n){n.a(e,(async function(e,i){try{n.d(t,{W:()=>h});n(19423);var r=n(13809),a=n(29558),o=n(94763),s=n(19631),u=e([s]);s=(u.then?(await u)():u)[0];const d=1e3,c=60,m=60*c;function h(e,t=Date.now(),n,i={}){const u=Object.assign(Object.assign({},g),i||{}),l=(+e-+t)/d;if(Math.abs(l)<u.second)return{value:Math.round(l),unit:"second"};const h=l/c;if(Math.abs(h)<u.minute)return{value:Math.round(h),unit:"minute"};const f=l/m;if(Math.abs(f)<u.hour)return{value:Math.round(f),unit:"hour"};const y=new Date(e),p=new Date(t);y.setHours(0,0,0,0),p.setHours(0,0,0,0);const b=(0,r.j)(y,p);if(0===b)return{value:Math.round(f),unit:"hour"};if(Math.abs(b)<u.day)return{value:b,unit:"day"};const v=(0,s.Bt)(n),_=(0,a.z)(y,{weekStartsOn:v}),w=(0,a.z)(p,{weekStartsOn:v}),k=(0,o.p)(_,w);if(0===k)return{value:b,unit:"day"};if(Math.abs(k)<u.week)return{value:k,unit:"week"};const x=y.getFullYear()-p.getFullYear(),C=12*x+y.getMonth()-p.getMonth();return 0===C?{value:k,unit:"week"}:Math.abs(C)<u.month||0===x?{value:C,unit:"month"}:{value:Math.round(x),unit:"year"}}const g={second:45,minute:45,hour:22,day:5,week:4,month:11};i()}catch(l){i(l)}}))},34273:function(e,t,n){var i=n(61701),r=n(72621),a=(n(71695),n(9359),n(31526),n(47021),n(22997),n(57243)),o=n(50778),s=n(5111),u=n(76525);let l,d,c=e=>e;(0,i.Z)([(0,o.Mo)("ha-button-menu")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",key:u.gA,value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"corner",value(){return"BOTTOM_START"}},{kind:"field",decorators:[(0,o.Cb)({attribute:"menu-corner"})],key:"menuCorner",value(){return"START"}},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"x",value(){return null}},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"y",value(){return null}},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"multi",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"activatable",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"fixed",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value(){return!1}},{kind:"field",decorators:[(0,o.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._menu)&&void 0!==e&&e.open?this._menu.focusItemAtIndex(0):null===(t=this._triggerButton)||void 0===t||t.focus()}},{kind:"method",key:"render",value:function(){return(0,a.dy)(l||(l=c` <div @click="${0}"> <slot name="trigger" @slotchange="${0}"></slot> </div> <mwc-menu .corner="${0}" .menuCorner="${0}" .fixed="${0}" .multi="${0}" .activatable="${0}" .y="${0}" .x="${0}"> <slot></slot> </mwc-menu> `),this._handleClick,this._setTriggerAria,this.corner,this.menuCorner,this.fixed,this.multi,this.activatable,this.y,this.x)}},{kind:"method",key:"firstUpdated",value:function(e){(0,r.Z)(n,"firstUpdated",this,3)([e]),"rtl"===s.E.document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((e=>{const t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"field",static:!0,key:"styles",value(){return(0,a.iv)(d||(d=c`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`))}}]}}),a.oi)},54977:function(e,t,n){var i=n(61701),r=(n(71695),n(47021),n(57243)),a=n(50778);let o,s,u,l=e=>e;(0,i.Z)([(0,a.Mo)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,reflect:!0})],key:"raised",value(){return!1}},{kind:"field",static:!0,key:"styles",value(){return(0,r.iv)(o||(o=l`:host{background:var(--ha-card-background,var(--card-background-color,#fff));-webkit-backdrop-filter:var(--ha-card-backdrop-filter,none);backdrop-filter:var(--ha-card-backdrop-filter,none);box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);display:block;transition:all .3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,var(--primary-text-color));font-family:var(--ha-card-header-font-family, inherit);font-size:var(--ha-card-header-font-size, 24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`))}},{kind:"method",key:"render",value:function(){return(0,r.dy)(s||(s=l` ${0} <slot></slot> `),this.header?(0,r.dy)(u||(u=l`<h1 class="card-header">${0}</h1>`),this.header):r.Ld)}}]}}),r.oi)},51223:function(e,t,n){n.a(e,(async function(e,t){try{var i=n(61701),r=(n(71695),n(47021),n(57243)),a=n(50778),o=n(94571),s=n(59847),u=n(93212),l=(n(65981),n(37583),e([u]));u=(l.then?(await l)():l)[0];let d,c,m,h,g=e=>e;(0,i.Z)([(0,a.Mo)("ha-state-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"stateValue",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,t;const n=this.icon||this.stateObj&&(null===(e=this.hass)||void 0===e||null===(e=e.entities[this.stateObj.entity_id])||void 0===e?void 0:e.icon)||(null===(t=this.stateObj)||void 0===t?void 0:t.attributes.icon);if(n)return(0,r.dy)(d||(d=g`<ha-icon .icon="${0}"></ha-icon>`),n);if(!this.stateObj)return r.Ld;if(!this.hass)return this._renderFallback();const i=(0,u.gD)(this.hass,this.stateObj,this.stateValue).then((e=>e?(0,r.dy)(c||(c=g`<ha-icon .icon="${0}"></ha-icon>`),e):this._renderFallback()));return(0,r.dy)(m||(m=g`${0}`),(0,o.C)(i))}},{kind:"method",key:"_renderFallback",value:function(){const e=(0,s.N)(this.stateObj);return(0,r.dy)(h||(h=g` <ha-svg-icon .path="${0}"></ha-svg-icon> `),u.Ls[e]||u.Rb)}}]}}),r.oi);t()}catch(d){t(d)}}))},43546:function(e,t,n){n.d(t,{Cp:()=>s,TZ:()=>u,W2:()=>o,YY:()=>d,iI:()=>a,j2:()=>l,oT:()=>r,uw:()=>i});n(19083),n(9359),n(70104),n(77439),n(19423),n(40251),n(97499),n(61006);const i=28639==n.j?`${location.protocol}//${location.host}`:null,r=e=>e.map((e=>{if("string"!==e.type)return e;switch(e.name){case"username":return Object.assign(Object.assign({},e),{},{autocomplete:"username",autofocus:!0});case"password":return Object.assign(Object.assign({},e),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},e),{},{autocomplete:"one-time-code",autofocus:!0});default:return e}})),a=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),o=async(e,t,n,i)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:t,username:n,password:i}),s=(e,t,n)=>e.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:t,new_password:n}),u=(e,t,n)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:t,password:n}),l=(e,t,n)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_username",user_id:t,username:n}),d=(e,t,n)=>e.callWS({type:"auth/delete_all_refresh_tokens",token_type:t,delete_current_token:n})},96194:function(e,t,n){n.d(t,{ON:()=>o,PX:()=>s,V_:()=>u,lz:()=>a,nZ:()=>r,rk:()=>d});var i=n(92636);const r="unavailable",a="unknown",o="on",s="off",u=[r,a],l=[r,a,s],d=(0,i.z)(u);(0,i.z)(l)},58968:function(e,t,n){n.d(t,{MV:()=>l,Wg:()=>s,Xk:()=>o,aT:()=>i,b_:()=>a,yP:()=>u});n(88044);const i=(e,t)=>e.callApi("POST","tts_get_url",t),r="media-source://tts/",a=e=>e.startsWith(r),o=e=>e.substring(19),s=(e,t,n)=>e.callWS({type:"tts/engine/list",language:t,country:n}),u=(e,t)=>e.callWS({type:"tts/engine/get",engine_id:t}),l=(e,t,n)=>e.callWS({type:"tts/engine/voices",engine_id:t,language:n})},69919:function(e,t,n){n.a(e,(async function(e,i){try{n.d(t,{EX:()=>h,Fj:()=>k,M$:()=>x,SO:()=>g,Sk:()=>y,TN:()=>E,UJ:()=>p,Ym:()=>C,hF:()=>f});n(19083),n(61893),n(9359),n(56475),n(70104),n(40251);var r=n(73358),a=n(73850),o=n(59847),s=n(75278),u=n(50602),l=n(1416),d=n(76131),c=n(72473),m=e([u]);u=(m.then?(await m)():m)[0];let h=function(e){return e[e.INSTALL=1]="INSTALL",e[e.SPECIFIC_VERSION=2]="SPECIFIC_VERSION",e[e.PROGRESS=4]="PROGRESS",e[e.BACKUP=8]="BACKUP",e[e.RELEASE_NOTES=16]="RELEASE_NOTES",e}({});const g=e=>(0,s.e)(e,h.PROGRESS)&&null!==e.attributes.update_percentage,f=(e,t=!1)=>(e.state===r.uo||t&&Boolean(e.attributes.skipped_version))&&(0,s.e)(e,h.INSTALL),y=e=>!!e.attributes.in_progress,p=(e,t)=>e.callWS({type:"update/release_notes",entity_id:t}),b="ioBroker Core",v="ioBroker Supervisor",_="ioBroker Operating System",w=(e,t)=>Object.values(e).filter((e=>"update"===(0,o.N)(e))).sort(((e,n)=>e.attributes.title===b?-3:n.attributes.title===b?3:e.attributes.title===_?-2:n.attributes.title===_?2:e.attributes.title===v?-1:n.attributes.title===v?1:(0,l.f)(e.attributes.title||e.attributes.friendly_name||"",n.attributes.title||n.attributes.friendly_name||"",t))),k=(e,t=!1)=>w(e).filter((e=>f(e,t))),x=async(e,t)=>{const n=w(t.states,t.locale.language).map((e=>e.entity_id));if(!n.length)return void(0,d.showAlertDialog)(e,{title:t.localize("ui.panel.config.updates.no_update_entities.title"),text:t.localize("ui.panel.config.updates.no_update_entities.description"),warning:!0});(0,c.C)(e,{message:t.localize("ui.panel.config.updates.checking_updates")});let i=0;const r=await t.connection.subscribeEvents((n=>{"update"===(0,a.M)(n.data.entity_id)&&(i++,(0,c.C)(e,{message:t.localize("ui.panel.config.updates.updates_refreshed",{count:i})}))}),"state_changed");await t.callService("homeassistant","update_entity",{entity_id:n}),await new Promise((e=>{setTimeout(e,15e3)})),r(),0===i&&(0,c.C)(e,{message:t.localize("ui.panel.config.updates.no_new_updates")})},C=(e,t)=>{const n=e.state,i=e.attributes;if("off"===n){return i.latest_version&&i.skipped_version===i.latest_version?i.latest_version:t.formatEntityState(e)}if("on"===n&&y(e)){return(0,s.e)(e,h.PROGRESS)&&null!==i.update_percentage?t.localize("ui.card.update.installing_with_progress",{progress:(0,u.uf)(i.update_percentage,t.locale,{maximumFractionDigits:i.display_precision,minimumFractionDigits:i.display_precision})}):t.localize("ui.card.update.installing")}return t.formatEntityState(e)},E=(e,t)=>{var n;if("hassio"!==(null===(n=t[e.entity_id])||void 0===n?void 0:n.domain))return"generic";const i=e.attributes.title||"";return i===b?"home_assistant":[b,v,_].includes(i)?"generic":"addon"};i()}catch(h){i(h)}}))},40249:function(e,t,n){n.d(t,{ED:()=>m,Fr:()=>o,N2:()=>a,Tw:()=>d,Xm:()=>c});n(52247),n(19083),n(71695),n(40251),n(61006),n(47021);var i=n(36522),r=n(17951);const a=(e,t)=>({type:"error",error:e,origConfig:t}),o=(e,t)=>({type:"error",error:e,origConfig:t}),s=(e,t)=>{const n=document.createElement(e);return n.setConfig(t),n},u=(e,t,i)=>"badge"===e?(e=>{const t=document.createElement("hui-error-badge");return customElements.get("hui-error-badge")?t.setConfig(e):(Promise.all([n.e("35671"),n.e("79525"),n.e("8795"),n.e("32146"),n.e("41388"),n.e("63055"),n.e("70147"),n.e("79931"),n.e("44251"),n.e("3371"),n.e("63556"),n.e("61854"),n.e("38326"),n.e("10745"),n.e("70639"),n.e("79783"),n.e("99981"),n.e("10951")]).then(n.bind(n,72814)),customElements.whenDefined("hui-error-badge").then((()=>{customElements.upgrade(t),t.setConfig(e)}))),t})(o(t,i)):"heading-badge"===e?(e=>{const t=document.createElement("hui-error-heading-badge");return customElements.get("hui-error-heading-badge")?t.setConfig(e):(Promise.all([n.e("35671"),n.e("79525"),n.e("8795"),n.e("32146"),n.e("41388"),n.e("63055"),n.e("70147"),n.e("79931"),n.e("44251"),n.e("3371"),n.e("63556"),n.e("61854"),n.e("38326"),n.e("10745"),n.e("70639"),n.e("79783"),n.e("99981"),n.e("83938")]).then(n.bind(n,5031)),customElements.whenDefined("hui-error-heading-badge").then((()=>{customElements.upgrade(t),t.setConfig(e)}))),t})(((e,t)=>({type:"error",error:e,origConfig:t}))(t,i)):(e=>{const t=document.createElement("hui-error-card");return customElements.get("hui-error-card")?t.setConfig(e):(Promise.all([n.e("79525"),n.e("8795"),n.e("37269")]).then(n.bind(n,5252)),customElements.whenDefined("hui-error-card").then((()=>{customElements.upgrade(t),t.setConfig(e)}))),t})(a(t,i)),l=e=>(0,r.IT)(e)?(0,r.V0)(e):void 0,d=(e,t,n,i,r,a)=>{try{return c(e,t,n,i,r,a)}catch(o){return console.error(e,t.type,o),u(e,o.message,t)}},c=(e,t,n,r,a,o)=>{if(!t||"object"!=typeof t)throw new Error("Config is not an object");if(!(t.type||o||a&&"entity"in t))throw new Error("No card type configured");const d=t.type?l(t.type):void 0;if(d)return((e,t,n)=>{if(customElements.get(t))return s(t,n);const r=u(e,`Custom element doesn't exist: ${t}.`,n);if(!t.includes("-"))return r;r.style.display="None";const a=window.setTimeout((()=>{r.style.display=""}),2e3);return customElements.whenDefined(t).then((()=>{clearTimeout(a),(0,i.B)(r,"ll-rebuild")})),r})(e,d,t);let c;if(a&&!t.type&&t.entity){c=`${a[t.entity.split(".",1)[0]]||a._domain_not_found}-entity`}else c=t.type||o;if(void 0===c)throw new Error("No type specified");const m=`hui-${c}-${e}`;if(r&&c in r)return r[c](),((e,t)=>{if(customElements.get(e))return s(e,t);const n=document.createElement(e);return customElements.whenDefined(e).then((()=>{try{customElements.upgrade(n),(0,i.B)(n,"ll-upgrade"),n.setConfig(t)}catch(e){(0,i.B)(n,"ll-rebuild")}})),n})(m,t);if(n&&n.has(c))return s(m,t);throw new Error(`Unknown type encountered: ${c}`)},m=async(e,t,n,i)=>{const r=l(e);if(r){const e=customElements.get(r);if(e)return e;if(!r.includes("-"))throw new Error(`Custom element not found: ${r}`);return new Promise(((e,t)=>{setTimeout((()=>t(new Error(`Custom element not found: ${r}`))),2e3),customElements.whenDefined(r).then((()=>e(customElements.get(r))))}))}const a=`hui-${e}-${t}`,o=customElements.get(a);if(n&&n.has(e))return o;if(i&&e in i)return o||i[e]().then((()=>customElements.get(a)));throw new Error(`Unknown type: ${e}`)}},46542:function(e,t,n){n.a(e,(async function(e,i){try{n.d(t,{T:()=>_,m:()=>v});n(71695),n(40251),n(92519),n(42179),n(89256),n(24931),n(88463),n(57449),n(19814),n(47021);var r=n(72053),a=n(35659),o=n(52809),s=n(40165),u=n(82114),l=n(21474),d=n(31087),c=n(90296),m=n(42135),h=n(40806),g=n(40249),f=e([r,a,o,s,u,l,d,c,m,h]);[r,a,o,s,u,l,d,c,m,h]=f.then?(await f)():f;const y=new Set(["media-player-entity","scene-entity","script-entity","sensor-entity","simple-entity","toggle-entity","button","call-service"]),p={"button-entity":()=>n.e("44821").then(n.bind(n,35154)),"climate-entity":()=>n.e("79702").then(n.bind(n,54222)),"cover-entity":()=>n.e("50764").then(n.bind(n,4806)),"date-entity":()=>Promise.all([n.e("46379"),n.e("50013")]).then(n.bind(n,61351)),"datetime-entity":()=>Promise.all([n.e("46379"),n.e("41258"),n.e("35671"),n.e("3134"),n.e("3561"),n.e("99113")]).then(n.bind(n,67429)),"event-entity":()=>Promise.resolve().then(n.bind(n,72053)),"group-entity":()=>n.e("83537").then(n.bind(n,40445)),"input-button-entity":()=>n.e("5380").then(n.bind(n,57548)),"humidifier-entity":()=>n.e("84999").then(n.bind(n,88916)),"input-datetime-entity":()=>Promise.all([n.e("46379"),n.e("41258"),n.e("35671"),n.e("3561"),n.e("55119")]).then(n.bind(n,67223)),"input-number-entity":()=>Promise.all([n.e("46379"),n.e("84605")]).then(n.bind(n,90516)),"input-select-entity":()=>Promise.all([n.e("41258"),n.e("35671"),n.e("66868")]).then(n.bind(n,43)),"input-text-entity":()=>Promise.all([n.e("46379"),n.e("14673")]).then(n.bind(n,22623)),"lock-entity":()=>n.e("99689").then(n.bind(n,65751)),"number-entity":()=>Promise.all([n.e("46379"),n.e("88187")]).then(n.bind(n,77288)),"select-entity":()=>Promise.all([n.e("41258"),n.e("35671"),n.e("86857")]).then(n.bind(n,64827)),"text-entity":()=>Promise.all([n.e("46379"),n.e("86449")]).then(n.bind(n,90689)),"time-entity":()=>Promise.all([n.e("46379"),n.e("41258"),n.e("35671"),n.e("3561"),n.e("63586")]).then(n.bind(n,4671)),"timer-entity":()=>n.e("7618").then(n.bind(n,45363)),"update-entity":()=>n.e("58400").then(n.bind(n,97604)),"valve-entity":()=>n.e("96347").then(n.bind(n,97937)),conditional:()=>n.e("79220").then(n.bind(n,24272)),"weather-entity":()=>Promise.all([n.e("44251"),n.e("28565")]).then(n.bind(n,51973)),divider:()=>n.e("73576").then(n.bind(n,70568)),section:()=>n.e("26438").then(n.bind(n,93665)),weblink:()=>n.e("41871").then(n.bind(n,69819)),cast:()=>n.e("45006").then(n.bind(n,15638)),buttons:()=>Promise.all([n.e("59821"),n.e("73644")]).then(n.bind(n,58574)),attribute:()=>Promise.resolve().then(n.bind(n,90296)),text:()=>n.e("52767").then(n.bind(n,68291))},b={_domain_not_found:"simple",alert:"toggle",automation:"toggle",button:"button",climate:"climate",cover:"cover",date:"date",datetime:"datetime",event:"event",fan:"toggle",group:"group",humidifier:"humidifier",input_boolean:"toggle",input_button:"input-button",input_datetime:"input-datetime",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",number:"number",remote:"toggle",scene:"scene",script:"script",select:"select",sensor:"sensor",siren:"toggle",switch:"toggle",text:"text",time:"time",timer:"timer",update:"update",vacuum:"toggle",valve:"valve",water_heater:"climate",weather:"weather"},v=e=>(0,g.Tw)("row",e,y,p,b,void 0),_=e=>(0,g.ED)(e,"row",y,p);i()}catch(y){i(y)}}))},30511:function(e,t,n){n.r(t),n.d(t,{mdiHomeAssistant:()=>i});const i="m12.151 1.5882c-.3262 0-.6523.1291-.8996.3867l-8.3848 8.7354c-.0619.0644-.1223.1368-.1807.2154-.0588.0789-.1151.1638-.1688.2534-.2593.4325-.4552.9749-.5232 1.4555-.0026.018-.0076.0369-.0094.0548-.0121.0987-.0184.1944-.0184.2857v8.0124a1.2731 1.2731 0 001.2731 1.2731h7.8313l-3.4484-3.593a1.7399 1.7399 0 111.0803-1.125l2.6847 2.7972v-10.248a1.7399 1.7399 0 111.5276-0v7.187l2.6702-2.782a1.7399 1.7399 0 111.0566 1.1505l-3.7269 3.8831v2.7299h8.174a1.2471 1.2471 0 001.2471-1.2471v-8.0375c0-.0912-.0059-.1868-.0184-.2855-.0603-.4935-.2636-1.0617-.5326-1.5105-.0537-.0896-.1101-.1745-.1684-.253-.0588-.079-.1191-.1513-.181-.2158l-8.3848-8.7363c-.2473-.2577-.5735-.3866-.8995-.3864"}}]);
//# sourceMappingURL=51768.d71d8af73f2d8502.js.map