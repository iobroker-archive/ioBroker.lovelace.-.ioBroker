/*! For license information please see 22888.d7d279dc1dacc65d.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["22888"],{10445:function(e,a,t){t.d(a,{X:()=>m});var i=t(9065),s=t(50778),o=(t(71695),t(19423),t(47021),t(54835),t(57243)),r=t(4077);let l,n,d,c=e=>e;class h extends r.A{constructor(){super(...arguments),this.elevated=!1,this.href="",this.target=""}get primaryId(){return this.href?"link":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}getContainerClasses(){return Object.assign(Object.assign({},super.getContainerClasses()),{},{disabled:!this.href&&(this.disabled||this.softDisabled),elevated:this.elevated,link:!!this.href})}renderPrimaryAction(e){const{ariaLabel:a}=this;return this.href?(0,o.dy)(l||(l=c` <a class="primary action" id="link" aria-label="${0}" href="${0}" target="${0}">${0}</a> `),a||o.Ld,this.href,this.target||o.Ld,e):(0,o.dy)(n||(n=c` <button class="primary action" id="button" aria-label="${0}" aria-disabled="${0}" ?disabled="${0}" type="button">${0}</button> `),a||o.Ld,this.softDisabled||o.Ld,this.disabled&&!this.alwaysFocusable,e)}renderOutline(){return this.elevated?(0,o.dy)(d||(d=c`<md-elevation part="elevation"></md-elevation>`)):super.renderOutline()}}(0,i.__decorate)([(0,s.Cb)({type:Boolean})],h.prototype,"elevated",void 0),(0,i.__decorate)([(0,s.Cb)()],h.prototype,"href",void 0),(0,i.__decorate)([(0,s.Cb)()],h.prototype,"target",void 0);let p;const v=(0,o.iv)(p||(p=(e=>e)`:host{--_container-height:var(--md-assist-chip-container-height, 32px);--_disabled-label-text-color:var(--md-assist-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity:var(--md-assist-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color:var(--md-assist-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation:var(--md-assist-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color:var(--md-assist-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color:var(--md-assist-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation:var(--md-assist-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity:var(--md-assist-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation:var(--md-assist-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation:var(--md-assist-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation:var(--md-assist-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color:var(--md-assist-chip-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color:var(--md-assist-chip-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color:var(--md-assist-chip-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity:var(--md-assist-chip-hover-state-layer-opacity, 0.08);--_label-text-color:var(--md-assist-chip-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font:var(--md-assist-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height:var(--md-assist-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size:var(--md-assist-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight:var(--md-assist-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color:var(--md-assist-chip-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color:var(--md-assist-chip-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity:var(--md-assist-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color:var(--md-assist-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity:var(--md-assist-chip-disabled-outline-opacity, 0.12);--_focus-outline-color:var(--md-assist-chip-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color:var(--md-assist-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width:var(--md-assist-chip-outline-width, 1px);--_disabled-leading-icon-color:var(--md-assist-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity:var(--md-assist-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color:var(--md-assist-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color:var(--md-assist-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color:var(--md-assist-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size:var(--md-assist-chip-icon-size, 18px);--_pressed-leading-icon-color:var(--md-assist-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start:var(--md-assist-chip-container-shape-start-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end:var(--md-assist-chip-container-shape-start-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end:var(--md-assist-chip-container-shape-end-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start:var(--md-assist-chip-container-shape-end-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space:var(--md-assist-chip-leading-space, 16px);--_trailing-space:var(--md-assist-chip-trailing-space, 16px);--_icon-label-space:var(--md-assist-chip-icon-label-space, 8px);--_with-leading-icon-leading-space:var(--md-assist-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors:active){.link .outline{border-color:ActiveText}}`));var b=t(29126),u=t(21016);let m=class extends h{};m.styles=[u.W,b.W,v],m=(0,i.__decorate)([(0,s.Mo)("md-assist-chip")],m)},4077:function(e,a,t){t.d(a,{A:()=>m});t(19423);var i=t(9065),s=(t(57618),t(23111),t(57243)),o=t(50778),r=t(35359),l=t(13823);let n,d,c,h,p,v,b=e=>e;const u=(0,l.T)(s.oi);class m extends u{get rippleDisabled(){return this.disabled||this.softDisabled}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1,s.sk||this.addEventListener("click",this.handleClick.bind(this))}focus(e){this.disabled&&!this.alwaysFocusable||super.focus(e)}render(){return(0,s.dy)(n||(n=b` <div class="container ${0}"> ${0} </div> `),(0,r.$)(this.getContainerClasses()),this.renderContainerContent())}updated(e){e.has("disabled")&&void 0!==e.get("disabled")&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled||this.softDisabled,"has-icon":this.hasIcon}}renderContainerContent(){return(0,s.dy)(d||(d=b` ${0} <md-focus-ring part="focus-ring" for="${0}"></md-focus-ring> <md-ripple for="${0}" ?disabled="${0}"></md-ripple> ${0} `),this.renderOutline(),this.primaryId,this.primaryId,this.rippleDisabled,this.renderPrimaryAction(this.renderPrimaryContent()))}renderOutline(){return(0,s.dy)(c||(c=b`<span class="outline"></span>`))}renderLeadingIcon(){return(0,s.dy)(h||(h=b`<slot name="icon" @slotchange="${0}"></slot>`),this.handleIconChange)}renderPrimaryContent(){return(0,s.dy)(p||(p=b` <span class="leading icon" aria-hidden="true"> ${0} </span> <span class="label"> <span class="label-text" id="label"> ${0} </span> </span> <span class="touch"></span> `),this.renderLeadingIcon(),this.label?this.label:(0,s.dy)(v||(v=b`<slot></slot>`)))}handleIconChange(e){const a=e.target;this.hasIcon=a.assignedElements({flatten:!0}).length>0}handleClick(e){if(this.softDisabled||this.disabled&&this.alwaysFocusable)return e.stopImmediatePropagation(),void e.preventDefault()}}m.shadowRootOptions=Object.assign(Object.assign({},s.oi.shadowRootOptions),{},{delegatesFocus:!0}),(0,i.__decorate)([(0,o.Cb)({type:Boolean,reflect:!0})],m.prototype,"disabled",void 0),(0,i.__decorate)([(0,o.Cb)({type:Boolean,attribute:"soft-disabled",reflect:!0})],m.prototype,"softDisabled",void 0),(0,i.__decorate)([(0,o.Cb)({type:Boolean,attribute:"always-focusable"})],m.prototype,"alwaysFocusable",void 0),(0,i.__decorate)([(0,o.Cb)()],m.prototype,"label",void 0),(0,i.__decorate)([(0,o.Cb)({type:Boolean,reflect:!0,attribute:"has-icon"})],m.prototype,"hasIcon",void 0)},29126:function(e,a,t){t.d(a,{W:()=>s});let i;const s=(0,t(57243).iv)(i||(i=(e=>e)`.elevated{--md-elevation-level:var(--_elevated-container-elevation);--md-elevation-shadow-color:var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level:var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level:var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level:var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level:var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors:active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}`))},21016:function(e,a,t){t.d(a,{W:()=>s});let i;const s=(0,t(57243).iv)(i||(i=(e=>e)`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:transparent;--md-ripple-hover-color:var(--_hover-state-layer-color);--md-ripple-hover-opacity:var(--_hover-state-layer-opacity);--md-ripple-pressed-color:var(--_pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start:var(--_container-shape-start-start);--md-focus-ring-shape-start-end:var(--_container-shape-start-end);--md-focus-ring-shape-end-end:var(--_container-shape-end-end);--md-focus-ring-shape-end-start:var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:0 0;border:none;border-radius:inherit;display:flex;outline:0;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.icon,.label,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors:active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}`))},5376:function(e,a,t){t.d(a,{X:()=>r});var i=t(34151),s=t(76808),o=t(14276);function r(e,a,t){const r=(0,o._)(e,a)/s.yJ;return(0,i.u)(null==t?void 0:t.roundingMethod)(r)}},83389:function(e,a,t){t.d(a,{p:()=>s});var i=t(96500);function s(e){return(0,i.i)(Date.now(),e)}},42625:function(e,a,t){t.d(a,{I:()=>s});var i=t(7591);function s(e){return(0,i.b)(Date.now(),e)}}}]);
//# sourceMappingURL=22888.d7d279dc1dacc65d.js.map