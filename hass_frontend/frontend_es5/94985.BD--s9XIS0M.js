"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[94985],{76680:function(e,t,n){function i(e){return void 0===e||Array.isArray(e)?e:[e]}n.d(t,{r:function(){return i}})},55642:function(e,t,n){n.d(t,{h:function(){return c}});var i=n(68990),o=n(71650),a=n(33368),r=n(69205),s=n(70906),l=(n(51467),n(46798),n(9849),n(50289),n(94167),n(82073),n(68144)),d=n(57835),c=(0,d.XM)(function(e){(0,r.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;if((0,o.Z)(this,n),(i=t.call(this,e))._element=void 0,e.type!==d.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings");return i}return(0,a.Z)(n,[{key:"update",value:function(e,t){var n=this,o=(0,i.Z)(t,2),a=o[0],r=o[1];return this._element&&this._element.localName===a?(r&&Object.entries(r).forEach((function(e){var t=(0,i.Z)(e,2),o=t[0],a=t[1];n._element[o]=a})),l.Jb):this.render(a,r)}},{key:"render",value:function(e,t){var n=this;return this._element=document.createElement(e),t&&Object.entries(t).forEach((function(e){var t=(0,i.Z)(e,2),o=t[0],a=t[1];n._element[o]=a})),this._element}}]),n}(d.Xe))},22311:function(e,t,n){n.d(t,{N:function(){return o}});var i=n(58831),o=function(e){return(0,i.M)(e.entity_id)}},40095:function(e,t,n){n.d(t,{e:function(){return i}});var i=function(e,t){return o(e.attributes,t)},o=function(e,t){return 0!=(e.supported_features&t)}},34821:function(e,t,n){n.d(t,{i:function(){return b}});var i,o,a,r=n(33368),s=n(71650),l=n(82390),d=n(69205),c=n(70906),u=n(91808),h=n(34541),p=n(47838),f=n(88962),m=(n(97393),n(91989),n(87762)),v=n(91632),_=n(68144),g=n(95260),k=n(74265),y=(n(10983),["button","ha-list-item"]),b=function(e,t){var n;return(0,_.dy)(i||(i=(0,f.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),t,null!==(n=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==n?n:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,g.Mo)("ha-dialog")],(function(e,t){var n=function(t){(0,d.Z)(i,t);var n=(0,c.Z)(i);function i(){var t;(0,s.Z)(this,i);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),e((0,l.Z)(t)),t}return(0,r.Z)(i)}(t);return{F:n,d:[{kind:"field",key:k.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var n;null===(n=this.contentElement)||void 0===n||n.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,_.dy)(o||(o=(0,f.Z)(['<slot name="heading"> '," </slot>"])),(0,h.Z)((0,p.Z)(n.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,h.Z)((0,p.Z)(n.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,y].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.Z)((0,p.Z)(n.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[v.W,(0,_.iv)(a||(a=(0,f.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),m.M)},65189:function(e,t,n){var i,o,a,r=n(88962),s=n(33368),l=n(71650),d=n(82390),c=n(69205),u=n(70906),h=n(91808),p=(n(97393),n(68144)),f=n(95260),m=n(99312),v=n(40039),_=n(81043),g=n(34541),k=n(47838),y=(n(10187),n(32797),n(5239),n(17692),n(86439),n(47181)),b=(n(51358),n(46798),n(98490),n(31528),n(7695),n(44758),n(80354),n(68630),n(93217)),w=function(){var e=(0,_.Z)((0,m.Z)().mark((function e(t,o,a){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i||(i=(0,b.Ud)(new Worker(new URL(n.p+n.u(71402),n.b)))),e.abrupt("return",i.renderMarkdown(t,o,a));case 2:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}(),Z={Note:"info",Warning:"warning"};(0,h.Z)([(0,f.Mo)("ha-markdown-element")],(function(e,t){var n,i=function(t){(0,c.Z)(i,t);var n=(0,u.Z)(i);function i(){var t;(0,l.Z)(this,i);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),e((0,d.Z)(t)),t}return(0,s.Z)(i)}(t);return{F:i,d:[{kind:"field",decorators:[(0,f.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"allowSvg",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"breaks",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:function(){return!1}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(e){(0,g.Z)((0,k.Z)(i.prototype),"update",this).call(this,e),void 0!==this.content&&this._render()}},{kind:"method",key:"_render",value:(n=(0,_.Z)((0,m.Z)().mark((function e(){var t,n,i,o,a,r,s,l,d,c,u;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(String(this.content),{breaks:this.breaks,gfm:!0},{allowSvg:this.allowSvg});case 2:for(this.innerHTML=e.sent,this._resize(),t=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT,null);t.nextNode();)if((n=t.currentNode)instanceof HTMLAnchorElement&&n.host!==document.location.host)n.target="_blank",n.rel="noreferrer noopener";else if(n instanceof HTMLImageElement)this.lazyImages&&(n.loading="lazy"),n.addEventListener("load",this._resize);else if(n instanceof HTMLQuoteElement&&(i=n.firstElementChild,o=null==i?void 0:i.firstElementChild,a=(null==o?void 0:o.textContent)&&Z[o.textContent],"STRONG"===(null==o?void 0:o.nodeName)&&a)){(s=document.createElement("ha-alert")).alertType=a,s.title="#text"===i.childNodes[1].nodeName&&(null===(r=i.childNodes[1].textContent)||void 0===r?void 0:r.trimStart())||"",l=Array.from(i.childNodes),d=(0,v.Z)(l.slice(l.findIndex((function(e){return e instanceof HTMLBRElement}))+1));try{for(d.s();!(c=d.n()).done;)u=c.value,s.appendChild(u)}catch(h){d.e(h)}finally{d.f()}n.firstElementChild.replaceWith(s)}case 6:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"field",key:"_resize",value:function(){var e=this;return function(){return(0,y.B)(e,"content-resize")}}}]}}),p.fl),n(9381),n(81312),n(52039),(0,h.Z)([(0,f.Mo)("ha-markdown")],(function(e,t){var n=function(t){(0,c.Z)(i,t);var n=(0,u.Z)(i);function i(){var t;(0,l.Z)(this,i);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),e((0,d.Z)(t)),t}return(0,s.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,f.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"allowSvg",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"breaks",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:function(){return!1}},{kind:"method",key:"render",value:function(){return this.content?(0,p.dy)(o||(o=(0,r.Z)(['<ha-markdown-element .content="','" .allowSvg="','" .breaks="','" .lazyImages="','"></ha-markdown-element>'])),this.content,this.allowSvg,this.breaks,this.lazyImages):p.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(a||(a=(0,r.Z)([":host{display:block}ha-markdown-element{-ms-user-select:text;-webkit-user-select:text;-moz-user-select:text}ha-markdown-element>:first-child{margin-top:0}ha-markdown-element>:last-child{margin-bottom:0}a{color:var(--primary-color)}img{max-width:100%}code,pre{background-color:var(--markdown-code-background-color,none);border-radius:3px}svg{background-color:var(--markdown-svg-background-color,none);color:var(--markdown-svg-color,none)}code{font-size:85%;padding:.2em .4em}pre code{padding:0}pre{padding:16px;overflow:auto;line-height:1.45;font-family:var(--code-font-family, monospace)}h1,h2,h3,h4,h5,h6{line-height:initial}h2{font-size:1.5em;font-weight:700}"])))}}]}}),p.oi)},3958:function(e,t,n){n.r(t);var i,o,a,r,s,l,d,c,u,h,p=n(88962),f=n(33368),m=n(71650),v=n(82390),_=n(69205),g=n(70906),k=n(91808),y=n(34541),b=n(47838),w=(n(97393),n(40271),n(65974),n(22859),n(47704),n(68144)),Z=n(95260),x=(n(31206),n(34821),n(68331),n(65189),n(22814)),S=n(11654),C=0;(0,k.Z)([(0,Z.Mo)("ha-mfa-module-setup-flow")],(function(e,t){var n=function(t){(0,_.Z)(i,t);var n=(0,g.Z)(i);function i(){var t;(0,m.Z)(this,i);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),e((0,v.Z)(t)),t}return(0,f.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,Z.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_dialogClosedCallback",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_instance",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_loading",value:function(){return!1}},{kind:"field",decorators:[(0,Z.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",decorators:[(0,Z.SB)()],key:"_stepData",value:function(){return{}}},{kind:"field",decorators:[(0,Z.SB)()],key:"_step",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_errorMessage",value:void 0},{kind:"method",key:"showDialog",value:function(e){var t=this,n=e.continueFlowId,i=e.mfaModuleId,o=e.dialogClosedCallback;this._instance=C++,this._dialogClosedCallback=o,this._opened=!0;var a=n?this.hass.callWS({type:"auth/setup_mfa",flow_id:n}):this.hass.callWS({type:"auth/setup_mfa",mfa_module_id:i}),r=this._instance;a.then((function(e){r===t._instance&&t._processStep(e)}))}},{kind:"method",key:"closeDialog",value:function(){this._step&&this._flowDone(),this._opened=!1}},{kind:"method",key:"render",value:function(){var e,t;return this._opened?(0,w.dy)(i||(i=(0,p.Z)([' <ha-dialog open .heading="','" @closed="','"> <div> '," "," </div> "," "," </ha-dialog> "])),this._computeStepTitle(),this.closeDialog,this._errorMessage?(0,w.dy)(o||(o=(0,p.Z)(['<div class="error">',"</div>"])),this._errorMessage):"",this._step?(0,w.dy)(r||(r=(0,p.Z)(["",""])),"abort"===this._step.type?(0,w.dy)(s||(s=(0,p.Z)([' <ha-markdown allowsvg breaks .content="','"></ha-markdown>'])),this.hass.localize("component.auth.mfa_setup.".concat(this._step.handler,".abort.").concat(this._step.reason))):"create_entry"===this._step.type?(0,w.dy)(l||(l=(0,p.Z)(["<p> "," </p>"])),this.hass.localize("ui.panel.profile.mfa_setup.step_done",{step:this._step.title})):"form"===this._step.type?(0,w.dy)(d||(d=(0,p.Z)(['<ha-markdown allowsvg breaks .content="','"></ha-markdown> <ha-form .hass="','" .data="','" .schema="','" .error="','" .computeLabel="','" .computeError="','" @value-changed="','"></ha-form>'])),this.hass.localize("component.auth.mfa_setup.".concat(this._step.handler,".step.").concat(this._step.step_id,".description"),this._step.description_placeholders),this.hass,this._stepData,(0,x.oT)(this._step.data_schema),this._step.errors,this._computeLabel,this._computeError,this._stepDataChanged):""):(0,w.dy)(a||(a=(0,p.Z)(['<div class="init-spinner"> <ha-circular-progress active></ha-circular-progress> </div>']))),["abort","create_entry"].includes((null===(e=this._step)||void 0===e?void 0:e.type)||"")?(0,w.dy)(c||(c=(0,p.Z)(['<mwc-button slot="primaryAction" @click="','">',"</mwc-button>"])),this.closeDialog,this.hass.localize("ui.panel.profile.mfa_setup.close")):"","form"===(null===(t=this._step)||void 0===t?void 0:t.type)?(0,w.dy)(u||(u=(0,p.Z)(['<mwc-button slot="primaryAction" .disabled="','" @click="','">',"</mwc-button>"])),this._loading,this._submitStep,this.hass.localize("ui.panel.profile.mfa_setup.submit")):""):w.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return[S.yu,(0,w.iv)(h||(h=(0,p.Z)([".error{color:red}ha-dialog{max-width:500px}ha-markdown{--markdown-svg-background-color:white;--markdown-svg-color:black;display:block;margin:0 auto}ha-markdown a{color:var(--primary-color)}.init-spinner{padding:10px 100px 34px;text-align:center}.submit-spinner{margin-right:16px}"])))]}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,y.Z)((0,b.Z)(n.prototype),"firstUpdated",this).call(this,e),this.hass.loadBackendTranslation("mfa_setup","auth"),this.addEventListener("keypress",(function(e){"Enter"===e.key&&t._submitStep()}))}},{kind:"method",key:"_stepDataChanged",value:function(e){this._stepData=e.detail.value}},{kind:"method",key:"_submitStep",value:function(){var e=this;this._loading=!0,this._errorMessage=void 0;var t=this._instance;this.hass.callWS({type:"auth/setup_mfa",flow_id:this._step.flow_id,user_input:this._stepData}).then((function(n){t===e._instance&&(e._processStep(n),e._loading=!1)}),(function(t){e._errorMessage=t&&t.body&&t.body.message||"Unknown error occurred",e._loading=!1}))}},{kind:"method",key:"_processStep",value:function(e){e.errors||(e.errors={}),this._step=e,0===Object.keys(e.errors).length&&(this._stepData={})}},{kind:"method",key:"_flowDone",value:function(){var e=Boolean(this._step&&["create_entry","abort"].includes(this._step.type));this._dialogClosedCallback({flowFinished:e}),this._errorMessage=void 0,this._step=void 0,this._stepData={},this._dialogClosedCallback=void 0,this.closeDialog()}},{kind:"method",key:"_computeStepTitle",value:function(){var e,t,n;return"abort"===(null===(e=this._step)||void 0===e?void 0:e.type)?this.hass.localize("ui.panel.profile.mfa_setup.title_aborted"):"create_entry"===(null===(t=this._step)||void 0===t?void 0:t.type)?this.hass.localize("ui.panel.profile.mfa_setup.title_success"):"form"===(null===(n=this._step)||void 0===n?void 0:n.type)?this.hass.localize("component.auth.mfa_setup.".concat(this._step.handler,".step.").concat(this._step.step_id,".title")):""}},{kind:"field",key:"_computeLabel",value:function(){var e=this;return function(t){return e.hass.localize("component.auth.mfa_setup.".concat(e._step.handler,".step.").concat(e._step.step_id,".data.").concat(t.name))||t.name}}},{kind:"field",key:"_computeError",value:function(){var e=this;return function(t){return e.hass.localize("component.auth.mfa_setup.".concat(e._step.handler,".error.").concat(t))||t}}}]}}),w.oi)}}]);
//# sourceMappingURL=94985.BD--s9XIS0M.js.map