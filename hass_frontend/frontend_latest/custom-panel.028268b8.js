/*! For license information please see custom-panel.028268b8.js.LICENSE.txt */
  button.link {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    text-align: left;
    text-decoration: underline;
    cursor: pointer;
  }
`,s=t.iv`
  :host {
    font-family: var(--paper-font-body1_-_font-family);
    -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
    font-size: var(--paper-font-body1_-_font-size);
    font-weight: var(--paper-font-body1_-_font-weight);
    line-height: var(--paper-font-body1_-_line-height);
  }

  app-header-layout,
  ha-app-layout {
    background-color: var(--primary-background-color);
  }

  app-header,
  app-toolbar {
    background-color: var(--app-header-background-color);
    font-weight: 400;
    color: var(--app-header-text-color, white);
  }

  app-toolbar {
    height: var(--header-height);
  }

  app-header div[sticky] {
    height: 48px;
  }

  app-toolbar [main-title] {
    margin-left: 20px;
  }

  h1 {
    font-family: var(--paper-font-headline_-_font-family);
    -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
    white-space: var(--paper-font-headline_-_white-space);
    overflow: var(--paper-font-headline_-_overflow);
    text-overflow: var(--paper-font-headline_-_text-overflow);
    font-size: var(--paper-font-headline_-_font-size);
    font-weight: var(--paper-font-headline_-_font-weight);
    line-height: var(--paper-font-headline_-_line-height);
  }

  h2 {
    font-family: var(--paper-font-title_-_font-family);
    -webkit-font-smoothing: var(--paper-font-title_-_-webkit-font-smoothing);
    white-space: var(--paper-font-title_-_white-space);
    overflow: var(--paper-font-title_-_overflow);
    text-overflow: var(--paper-font-title_-_text-overflow);
    font-size: var(--paper-font-title_-_font-size);
    font-weight: var(--paper-font-title_-_font-weight);
    line-height: var(--paper-font-title_-_line-height);
  }

  h3 {
    font-family: var(--paper-font-subhead_-_font-family);
    -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
    white-space: var(--paper-font-subhead_-_white-space);
    overflow: var(--paper-font-subhead_-_overflow);
    text-overflow: var(--paper-font-subhead_-_text-overflow);
    font-size: var(--paper-font-subhead_-_font-size);
    font-weight: var(--paper-font-subhead_-_font-weight);
    line-height: var(--paper-font-subhead_-_line-height);
  }

  a {
    color: var(--primary-color);
  }

  .secondary {
    color: var(--secondary-text-color);
  }

  .error {
    color: var(--error-color);
  }

  .warning {
    color: var(--error-color);
  }

  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }

  ${o}

  .card-actions a {
    text-decoration: none;
  }

  .card-actions .warning {
    --mdc-theme-primary: var(--error-color);
  }

  .layout.horizontal,
  .layout.vertical {
    display: flex;
  }
  .layout.inline {
    display: inline-flex;
  }
  .layout.horizontal {
    flex-direction: row;
  }
  .layout.vertical {
    flex-direction: column;
  }
  .layout.wrap {
    flex-wrap: wrap;
  }
  .layout.no-wrap {
    flex-wrap: nowrap;
  }
  .layout.center,
  .layout.center-center {
    align-items: center;
  }
  .layout.bottom {
    align-items: flex-end;
  }
  .layout.center-justified,
  .layout.center-center {
    justify-content: center;
  }
  .flex {
    flex: 1;
    flex-basis: 0.000000001px;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }
  .layout.justified {
    justify-content: space-between;
  }
`,i=(t.iv`
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-heading-ink-color: var(--primary-text-color);
    --mdc-dialog-content-ink-color: var(--primary-text-color);
    --justify-action-buttons: space-between;
  }

  ha-dialog .form {
    padding-bottom: 24px;
    color: var(--primary-text-color);
  }

  a {
    color: var(--primary-color);
  }

  /* make dialog fullscreen on small screens */
  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      --mdc-dialog-min-width: calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );
      --mdc-dialog-max-width: calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );
      --mdc-dialog-min-height: 100%;
      --mdc-dialog-max-height: 100%;
      --vertial-align-dialog: flex-end;
      --ha-dialog-border-radius: 0px;
    }
  }
  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }
  .error {
    color: var(--error-color);
  }
`,t.iv`
  .ha-scrollbar::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  .ha-scrollbar::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: var(--scrollbar-thumb-color);
  }

  .ha-scrollbar {
    overflow-y: auto;
    scrollbar-color: var(--scrollbar-thumb-color) transparent;
    scrollbar-width: thin;
  }
`,t.iv`
  body {
    background-color: var(--primary-background-color);
    color: var(--primary-text-color);
    height: calc(100vh - 32px);
    width: 100vw;
  }
`)},15304:(z,r,e)=>{"use strict";var t;e.d(r,{dy:()=>b,Jb:()=>q,Ld:()=>x,sY:()=>A,YP:()=>j});const n=globalThis.trustedTypes,a=n?n.createPolicy("lit-html",{createHTML:z=>z}):void 0,o=`lit$${(Math.random()+"").slice(9)}$`,s="?"+o,i=`<${s}>`,c=document,f=(z="")=>c.createComment(z),g=z=>null===z||"object"!=typeof z&&"function"!=typeof z,l=Array.isArray,d=z=>{var r;return l(z)||"function"==typeof(null===(r=z)||void 0===r?void 0:r[Symbol.iterator])},u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,h=/-->/g,m=/>/g,v=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,p=/'/g,k=/"/g,y=/^(?:script|style|textarea)$/i,w=z=>(r,...e)=>({_$litType$:z,strings:r,values:e}),b=w(1),j=w(2),q=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),M=new WeakMap,A=(z,r,e)=>{var t,n;const a=null!==(t=null==e?void 0:e.renderBefore)&&void 0!==t?t:r;let o=a._$litPart$;if(void 0===o){const z=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;a._$litPart$=o=new D(r.insertBefore(f(),z),z,void 0,null!=e?e:{})}return o._$AI(z),o},T=c.createTreeWalker(c,129,null,!1),L=(z,r)=>{const e=z.length-1,t=[];let n,s=2===r?"<svg>":"",c=u;for(let r=0;r<e;r++){const e=z[r];let a,f,g=-1,l=0;for(;l<e.length&&(c.lastIndex=l,f=c.exec(e),null!==f);)l=c.lastIndex,c===u?"!--"===f[1]?c=h:void 0!==f[1]?c=m:void 0!==f[2]?(y.test(f[2])&&(n=RegExp("</"+f[2],"g")),c=v):void 0!==f[3]&&(c=v):c===v?">"===f[0]?(c=null!=n?n:u,g=-1):void 0===f[1]?g=-2:(g=c.lastIndex-f[2].length,a=f[1],c=void 0===f[3]?v:'"'===f[3]?k:p):c===k||c===p?c=v:c===h||c===m?c=u:(c=v,n=void 0);const d=c===v&&z[r+1].startsWith("/>")?" ":"";s+=c===u?e+i:g>=0?(t.push(a),e.slice(0,g)+"$lit$"+e.slice(g)+o+d):e+o+(-2===g?(t.push(void 0),r):d)}const f=s+(z[e]||"<?>")+(2===r?"</svg>":"");return[void 0!==a?a.createHTML(f):f,t]};class E{constructor({strings:z,_$litType$:r},e){let t;this.parts=[];let a=0,i=0;const c=z.length-1,g=this.parts,[l,d]=L(z,r);if(this.el=E.createElement(l,e),T.currentNode=this.el.content,2===r){const z=this.el.content,r=z.firstChild;r.remove(),z.append(...r.childNodes)}for(;null!==(t=T.nextNode())&&g.length<c;){if(1===t.nodeType){if(t.hasAttributes()){const z=[];for(const r of t.getAttributeNames())if(r.endsWith("$lit$")||r.startsWith(o)){const e=d[i++];if(z.push(r),void 0!==e){const z=t.getAttribute(e.toLowerCase()+"$lit$").split(o),r=/([.?@])?(.*)/.exec(e);g.push({type:1,index:a,name:r[2],strings:z,ctor:"."===r[1]?C:"?"===r[1]?P:"@"===r[1]?I:N})}else g.push({type:6,index:a})}for(const r of z)t.removeAttribute(r)}if(y.test(t.tagName)){const z=t.textContent.split(o),r=z.length-1;if(r>0){t.textContent=n?n.emptyScript:"";for(let e=0;e<r;e++)t.append(z[e],f()),T.nextNode(),g.push({type:2,index:++a});t.append(z[r],f())}}}else if(8===t.nodeType)if(t.data===s)g.push({type:2,index:a});else{let z=-1;for(;-1!==(z=t.data.indexOf(o,z+1));)g.push({type:7,index:a}),z+=o.length-1}a++}}static createElement(z,r){const e=c.createElement("template");return e.innerHTML=z,e}}function S(z,r,e=z,t){var n,a,o,s;if(r===q)return r;let i=void 0!==t?null===(n=e._$Cl)||void 0===n?void 0:n[t]:e._$Cu;const c=g(r)?void 0:r._$litDirective$;return(null==i?void 0:i.constructor)!==c&&(null===(a=null==i?void 0:i._$AO)||void 0===a||a.call(i,!1),void 0===c?i=void 0:(i=new c(z),i._$AT(z,e,t)),void 0!==t?(null!==(o=(s=e)._$Cl)&&void 0!==o?o:s._$Cl=[])[t]=i:e._$Cu=i),void 0!==i&&(r=S(z,i._$AS(z,r.values),i,t)),r}class Z{constructor(z,r){this.v=[],this._$AN=void 0,this._$AD=z,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(z){var r;const{el:{content:e},parts:t}=this._$AD,n=(null!==(r=null==z?void 0:z.creationScope)&&void 0!==r?r:c).importNode(e,!0);T.currentNode=n;let a=T.nextNode(),o=0,s=0,i=t[0];for(;void 0!==i;){if(o===i.index){let r;2===i.type?r=new D(a,a.nextSibling,this,z):1===i.type?r=new i.ctor(a,i.name,i.strings,this,z):6===i.type&&(r=new R(a,this,z)),this.v.push(r),i=t[++s]}o!==(null==i?void 0:i.index)&&(a=T.nextNode(),o++)}return n}m(z){let r=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(z,e,r),r+=e.strings.length-2):e._$AI(z[r])),r++}}class D{constructor(z,r,e,t){var n;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=z,this._$AB=r,this._$AM=e,this.options=t,this._$Cg=null===(n=null==t?void 0:t.isConnected)||void 0===n||n}get _$AU(){var z,r;return null!==(r=null===(z=this._$AM)||void 0===z?void 0:z._$AU)&&void 0!==r?r:this._$Cg}get parentNode(){let z=this._$AA.parentNode;const r=this._$AM;return void 0!==r&&11===z.nodeType&&(z=r.parentNode),z}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(z,r=this){z=S(this,z,r),g(z)?z===x||null==z||""===z?(this._$AH!==x&&this._$AR(),this._$AH=x):z!==this._$AH&&z!==q&&this.$(z):void 0!==z._$litType$?this.T(z):void 0!==z.nodeType?this.S(z):d(z)?this.M(z):this.$(z)}A(z,r=this._$AB){return this._$AA.parentNode.insertBefore(z,r)}S(z){this._$AH!==z&&(this._$AR(),this._$AH=this.A(z))}$(z){this._$AH!==x&&g(this._$AH)?this._$AA.nextSibling.data=z:this.S(c.createTextNode(z)),this._$AH=z}T(z){var r;const{values:e,_$litType$:t}=z,n="number"==typeof t?this._$AC(z):(void 0===t.el&&(t.el=E.createElement(t.h,this.options)),t);if((null===(r=this._$AH)||void 0===r?void 0:r._$AD)===n)this._$AH.m(e);else{const z=new Z(n,this),r=z.p(this.options);z.m(e),this.S(r),this._$AH=z}}_$AC(z){let r=M.get(z.strings);return void 0===r&&M.set(z.strings,r=new E(z)),r}M(z){l(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let e,t=0;for(const n of z)t===r.length?r.push(e=new D(this.A(f()),this.A(f()),this,this.options)):e=r[t],e._$AI(n),t++;t<r.length&&(this._$AR(e&&e._$AB.nextSibling,t),r.length=t)}_$AR(z=this._$AA.nextSibling,r){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,r);z&&z!==this._$AB;){const r=z.nextSibling;z.remove(),z=r}}setConnected(z){var r;void 0===this._$AM&&(this._$Cg=z,null===(r=this._$AP)||void 0===r||r.call(this,z))}}class N{constructor(z,r,e,t,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=z,this.name=r,this._$AM=t,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(z,r=this,e,t){const n=this.strings;let a=!1;if(void 0===n)z=S(this,z,r,0),a=!g(z)||z!==this._$AH&&z!==q,a&&(this._$AH=z);else{const t=z;let o,s;for(z=n[0],o=0;o<n.length-1;o++)s=S(this,t[e+o],r,o),s===q&&(s=this._$AH[o]),a||(a=!g(s)||s!==this._$AH[o]),s===x?z=x:z!==x&&(z+=(null!=s?s:"")+n[o+1]),this._$AH[o]=s}a&&!t&&this.k(z)}k(z){z===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=z?z:"")}}class C extends N{constructor(){super(...arguments),this.type=3}k(z){this.element[this.name]=z===x?void 0:z}}class P extends N{constructor(){super(...arguments),this.type=4}k(z){z&&z!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class I extends N{constructor(z,r,e,t,n){super(z,r,e,t,n),this.type=5}_$AI(z,r=this){var e;if((z=null!==(e=S(this,z,r,0))&&void 0!==e?e:x)===q)return;const t=this._$AH,n=z===x&&t!==x||z.capture!==t.capture||z.once!==t.once||z.passive!==t.passive,a=z!==x&&(t===x||n);n&&this.element.removeEventListener(this.name,this,t),a&&this.element.addEventListener(this.name,this,z),this._$AH=z}handleEvent(z){var r,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(r=this.options)||void 0===r?void 0:r.host)&&void 0!==e?e:this.element,z):this._$AH.handleEvent(z)}}class R{constructor(z,r,e){this.element=z,this.type=6,this._$AN=void 0,this._$AM=r,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(z){S(this,z)}}const G=window.litHtmlPolyfillSupport;null==G||G(E,D),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.0.1")},37500:(z,r,e)=>{"use strict";e.d(r,{oi:()=>k,iv:()=>i,dy:()=>p.dy,YP:()=>p.YP});const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new Map;class o{constructor(z,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=z}get styleSheet(){let z=a.get(this.cssText);return t&&void 0===z&&(a.set(this.cssText,z=new CSSStyleSheet),z.replaceSync(this.cssText)),z}toString(){return this.cssText}}const s=z=>new o("string"==typeof z?z:z+"",n),i=(z,...r)=>{const e=1===z.length?z[0]:r.reduce(((r,e,t)=>r+(z=>{if(!0===z._$cssResult$)return z.cssText;if("number"==typeof z)return z;throw Error("Value passed to 'css' function must be a 'css' function result: "+z+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+z[t+1]),z[0]);return new o(e,n)},c=t?z=>z:z=>z instanceof CSSStyleSheet?(z=>{let r="";for(const e of z.cssRules)r+=e.cssText;return s(r)})(z):z;var f;const g=window.reactiveElementPolyfillSupport,l={toAttribute(z,r){switch(r){case Boolean:z=z?"":null;break;case Object:case Array:z=null==z?z:JSON.stringify(z)}return z},fromAttribute(z,r){let e=z;switch(r){case Boolean:e=null!==z;break;case Number:e=null===z?null:Number(z);break;case Object:case Array:try{e=JSON.parse(z)}catch(z){e=null}}return e}},d=(z,r)=>r!==z&&(r==r||z==z),u={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:d};class h extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(z){var r;null!==(r=this.l)&&void 0!==r||(this.l=[]),this.l.push(z)}static get observedAttributes(){this.finalize();const z=[];return this.elementProperties.forEach(((r,e)=>{const t=this._$Eh(e,r);void 0!==t&&(this._$Eu.set(t,e),z.push(t))})),z}static createProperty(z,r=u){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(z,r),!r.noAccessor&&!this.prototype.hasOwnProperty(z)){const e="symbol"==typeof z?Symbol():"__"+z,t=this.getPropertyDescriptor(z,e,r);void 0!==t&&Object.defineProperty(this.prototype,z,t)}}static getPropertyDescriptor(z,r,e){return{get(){return this[r]},set(t){const n=this[z];this[r]=t,this.requestUpdate(z,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(z){return this.elementProperties.get(z)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const z=Object.getPrototypeOf(this);if(z.finalize(),this.elementProperties=new Map(z.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const z=this.properties,r=[...Object.getOwnPropertyNames(z),...Object.getOwnPropertySymbols(z)];for(const e of r)this.createProperty(e,z[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(z){const r=[];if(Array.isArray(z)){const e=new Set(z.flat(1/0).reverse());for(const z of e)r.unshift(c(z))}else void 0!==z&&r.push(c(z));return r}static _$Eh(z,r){const e=r.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof z?z.toLowerCase():void 0}o(){var z;this._$Ev=new Promise((z=>this.enableUpdating=z)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(z=this.constructor.l)||void 0===z||z.forEach((z=>z(this)))}addController(z){var r,e;(null!==(r=this._$Em)&&void 0!==r?r:this._$Em=[]).push(z),void 0!==this.renderRoot&&this.isConnected&&(null===(e=z.hostConnected)||void 0===e||e.call(z))}removeController(z){var r;null===(r=this._$Em)||void 0===r||r.splice(this._$Em.indexOf(z)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((z,r)=>{this.hasOwnProperty(r)&&(this._$Et.set(r,this[r]),delete this[r])}))}createRenderRoot(){var z;const r=null!==(z=this.shadowRoot)&&void 0!==z?z:this.attachShadow(this.constructor.shadowRootOptions);return((z,r)=>{t?z.adoptedStyleSheets=r.map((z=>z instanceof CSSStyleSheet?z:z.styleSheet)):r.forEach((r=>{const e=document.createElement("style"),t=window.litNonce;void 0!==t&&e.setAttribute("nonce",t),e.textContent=r.cssText,z.appendChild(e)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var z;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(z=this._$Em)||void 0===z||z.forEach((z=>{var r;return null===(r=z.hostConnected)||void 0===r?void 0:r.call(z)}))}enableUpdating(z){}disconnectedCallback(){var z;null===(z=this._$Em)||void 0===z||z.forEach((z=>{var r;return null===(r=z.hostDisconnected)||void 0===r?void 0:r.call(z)}))}attributeChangedCallback(z,r,e){this._$AK(z,e)}_$Eg(z,r,e=u){var t,n;const a=this.constructor._$Eh(z,e);if(void 0!==a&&!0===e.reflect){const o=(null!==(n=null===(t=e.converter)||void 0===t?void 0:t.toAttribute)&&void 0!==n?n:l.toAttribute)(r,e.type);this._$Ei=z,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Ei=null}}_$AK(z,r){var e,t,n;const a=this.constructor,o=a._$Eu.get(z);if(void 0!==o&&this._$Ei!==o){const z=a.getPropertyOptions(o),s=z.converter,i=null!==(n=null!==(t=null===(e=s)||void 0===e?void 0:e.fromAttribute)&&void 0!==t?t:"function"==typeof s?s:null)&&void 0!==n?n:l.fromAttribute;this._$Ei=o,this[o]=i(r,z.type),this._$Ei=null}}requestUpdate(z,r,e){let t=!0;void 0!==z&&(((e=e||this.constructor.getPropertyOptions(z)).hasChanged||d)(this[z],r)?(this._$AL.has(z)||this._$AL.set(z,r),!0===e.reflect&&this._$Ei!==z&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(z,e))):t=!1),!this.isUpdatePending&&t&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(z){Promise.reject(z)}const z=this.scheduleUpdate();return null!=z&&await z,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var z;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((z,r)=>this[r]=z)),this._$Et=void 0);let r=!1;const e=this._$AL;try{r=this.shouldUpdate(e),r?(this.willUpdate(e),null===(z=this._$Em)||void 0===z||z.forEach((z=>{var r;return null===(r=z.hostUpdate)||void 0===r?void 0:r.call(z)})),this.update(e)):this._$EU()}catch(z){throw r=!1,this._$EU(),z}r&&this._$AE(e)}willUpdate(z){}_$AE(z){var r;null===(r=this._$Em)||void 0===r||r.forEach((z=>{var r;return null===(r=z.hostUpdated)||void 0===r?void 0:r.call(z)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(z)),this.updated(z)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(z){return!0}update(z){void 0!==this._$ES&&(this._$ES.forEach(((z,r)=>this._$Eg(r,this[r],z))),this._$ES=void 0),this._$EU()}updated(z){}firstUpdated(z){}}h.finalized=!0,h.elementProperties=new Map,h.elementStyles=[],h.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:h}),(null!==(f=globalThis.reactiveElementVersions)&&void 0!==f?f:globalThis.reactiveElementVersions=[]).push("1.0.1");var m,v,p=e(15304);class k extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var z,r;const e=super.createRenderRoot();return null!==(z=(r=this.renderOptions).renderBefore)&&void 0!==z||(r.renderBefore=e.firstChild),e}update(z){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(z),this._$Dt=(0,p.sY)(r,this.renderRoot,this.renderOptions)}connectedCallback(){var z;super.connectedCallback(),null===(z=this._$Dt)||void 0===z||z.setConnected(!0)}disconnectedCallback(){var z;super.disconnectedCallback(),null===(z=this._$Dt)||void 0===z||z.setConnected(!1)}render(){return p.Jb}}k.finalized=!0,k._$litElement$=!0,null===(m=globalThis.litElementHydrateSupport)||void 0===m||m.call(globalThis,{LitElement:k});const y=globalThis.litElementPolyfillSupport;null==y||y({LitElement:k});(null!==(v=globalThis.litElementVersions)&&void 0!==v?v:globalThis.litElementVersions=[]).push("3.0.1")}},t={};function n(z){var r=t[z];if(void 0!==r)return r.exports;var a=t[z]={exports:{}};return e[z](a,a.exports,n),a.exports}n.m=e,n.d=(z,r)=>{for(var e in r)n.o(r,e)&&!n.o(z,e)&&Object.defineProperty(z,e,{enumerable:!0,get:r[e]})},n.f={},n.e=z=>Promise.all(Object.keys(n.f).reduce(((r,e)=>(n.f[e](z,r),r)),[])),n.u=z=>({16134:"5922d49e",43835:"6ad36891",48811:"89c5f006",78309:"70b1c399",82678:"f7a0886a"}[z]+".js"),n.o=(z,r)=>Object.prototype.hasOwnProperty.call(z,r),z={},r="home-assistant-frontend:",n.l=(e,t,a,o)=>{if(z[e])z[e].push(t);else{var s,i;if(void 0!==a)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var g=c[f];if(g.getAttribute("src")==e||g.getAttribute("data-webpack")==r+a){s=g;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",r+a),s.src=e),z[e]=[t];var l=(r,t)=>{s.onerror=s.onload=null,clearTimeout(d);var n=z[e];if(delete z[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((z=>z(t))),r)return r(t)},d=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),i&&document.head.appendChild(s)}},n.r=z=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(z,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(z,"__esModule",{value:!0})},n.p="/frontend_latest/",(()=>{var z={28017:0,33633:0,25534:0,64827:0,87520:0,78337:0,6042:0,71160:0};n.f.j=(r,e)=>{var t=n.o(z,r)?z[r]:void 0;if(0!==t)if(t)e.push(t[2]);else{var a=new Promise(((e,n)=>t=z[r]=[e,n]));e.push(t[2]=a);var o=n.p+n.u(r),s=new Error;n.l(o,(e=>{if(n.o(z,r)&&(0!==(t=z[r])&&(z[r]=void 0),t)){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,t[1](s)}}),"chunk-"+r,r)}};var r=(r,e)=>{var t,a,[o,s,i]=e,c=0;if(o.some((r=>0!==z[r]))){for(t in s)n.o(s,t)&&(n.m[t]=s[t]);if(i)i(n)}for(r&&r(e);c<o.length;c++)a=o[c],n.o(z,a)&&z[a]&&z[a][0](),z[o[c]]=0},e=self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})(),(()=>{"use strict";var z;n(78977),n(36760);z=function(){var z;z=function(){var z,r;z=function(){var z,r="__scoped";null!==(z=globalThis.reactiveElementPolyfillSupport)&&void 0!==z||(globalThis.reactiveElementPolyfillSupport=function(z){var e=z.ReactiveElement;if(void 0!==window.ShadyCSS&&(!window.ShadyCSS.nativeShadow||window.ShadyCSS.ApplyShim)){var t=e.prototype;window.ShadyDOM&&window.ShadyDOM.inUse&&!0===window.ShadyDOM.noPatch&&window.ShadyDOM.patchElementProto(t);var n=t.createRenderRoot;t.createRenderRoot=function(){var z,e,t,a=this.localName;if(window.ShadyCSS.nativeShadow)return n.call(this);if(!this.constructor.hasOwnProperty(r)){this.constructor[r]=!0;var o=this.constructor.elementStyles.map((function(z){return z instanceof CSSStyleSheet?Array.from(z.cssRules).reduce((function(z,r){return z+r.cssText}),""):z.cssText}));null===(e=null===(z=window.ShadyCSS)||void 0===z?void 0:z.ScopingShim)||void 0===e||e.prepareAdoptedCssText(o,a),void 0===this.constructor._$AJ&&window.ShadyCSS.prepareTemplateStyles(document.createElement("template"),a)}return null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions)};var a=t.connectedCallback;t.connectedCallback=function(){a.call(this),this.hasUpdated&&window.ShadyCSS.styleElement(this)};var o=t._$AE;t._$AE=function(z){this.hasUpdated||window.ShadyCSS.styleElement(this),o.call(this,z)}}})},"function"==typeof define&&define.amd?define(z):z(),function(z){"function"==typeof define&&define.amd?define(z):z()}((function(){var z,r=new Set,e=new Map;null!==(z=globalThis.litHtmlPolyfillSupport)&&void 0!==z||(globalThis.litHtmlPolyfillSupport=function(z,t){if(void 0!==window.ShadyCSS&&(!window.ShadyCSS.nativeShadow||window.ShadyCSS.ApplyShim)){var n=function(z){return void 0!==z&&!r.has(z)},a=function(z){var r=e.get(z);return void 0===r&&e.set(z,r=[]),r},o=new Map,s=z.createElement;z.createElement=function(r,e){var t=s.call(z,r,e),o=null==e?void 0:e.scope;if(void 0!==o&&(window.ShadyCSS.nativeShadow||window.ShadyCSS.prepareTemplateDom(t,o),n(o))){var i=a(o),c=t.content.querySelectorAll("style");i.push.apply(i,Array.from(c).map((function(z){var r;return null===(r=z.parentNode)||void 0===r||r.removeChild(z),z.textContent})))}return t};var i=document.createDocumentFragment(),c=document.createComment(""),f=t.prototype,g=f._$AI;f._$AI=function(z,t){var o,s,f;void 0===t&&(t=this);var l=this._$AA.parentNode,d=null===(o=this.options)||void 0===o?void 0:o.scope;if(l instanceof ShadowRoot&&n(d)){var u=this._$AA,h=this._$AB;i.appendChild(c),this._$AA=c,this._$AB=null,g.call(this,z,t);var m=(null===(s=z)||void 0===s?void 0:s._$litType$)?this._$AH._$AD.el:document.createElement("template");if(function(z,t){var n,o=a(z),s=0!==o.length;s&&((n=document.createElement("style")).textContent=o.join("\n"),t.content.appendChild(n)),r.add(z),e.delete(z),window.ShadyCSS.prepareTemplateStyles(t,z),s&&window.ShadyCSS.nativeShadow&&null!==(n=t.content.querySelector("style"))&&t.content.appendChild(n)}(d,m),i.removeChild(c),null===(f=window.ShadyCSS)||void 0===f?void 0:f.nativeShadow){var v=m.content.querySelector("style");null!==v&&i.appendChild(v.cloneNode(!0))}l.insertBefore(i,h),this._$AA=u,this._$AB=h}else g.call(this,z,t)},f._$AC=function(r){var e,t=null===(e=this.options)||void 0===e?void 0:e.scope,n=o.get(t);void 0===n&&o.set(t,n=new Map);var a=n.get(r.strings);return void 0===a&&n.set(r.strings,a=new z(r,this.options)),a}}})})),null!==(r=globalThis.litElementPolyfillSupport)&&void 0!==r||(globalThis.litElementPolyfillSupport=function(z){var r=z.LitElement;if(void 0!==window.ShadyCSS&&(!window.ShadyCSS.nativeShadow||window.ShadyCSS.ApplyShim)){r._$AJ=!0;var e=r.prototype,t=e.createRenderRoot;e.createRenderRoot=function(){return this.renderOptions.scope=this.localName,t.call(this)}}})},"function"==typeof define&&define.amd?define(z):z()},"function"==typeof define&&define.amd?define(z):z();n(7151),n(33633),n(25534),n(64827),n(23044),n(1437),n(87520),n(42661),n(78337),n(87065),n(6042),n(58556);self.fetch||(self.fetch=function(z,r){return r=r||{},new Promise(((e,t)=>{const n=new XMLHttpRequest,a=[],o=[],s={},i=()=>({ok:2==(n.status/100|0),statusText:n.statusText,status:n.status,url:n.responseURL,text:()=>Promise.resolve(n.responseText),json:()=>Promise.resolve(JSON.parse(n.responseText)),blob:()=>Promise.resolve(new Blob([n.response])),clone:i,headers:{keys:()=>a,entries:()=>o,get:z=>s[z.toLowerCase()],has:z=>z.toLowerCase()in s}});n.open(r.method||"get",z,!0),n.onload=()=>{n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,((z,r,e)=>{a.push(r=r.toLowerCase()),o.push([r,e]),s[r]=s[r]?`${s[r]},${e}`:e})),e(i())},n.onerror=t,n.withCredentials="include"==r.credentials;for(const z in r.headers)n.setRequestHeader(z,r.headers[z]);n.send(r.body||null)}))}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((z=>{Object.prototype.hasOwnProperty.call(z,"append")||Object.defineProperty(z,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(...z){const r=document.createDocumentFragment();z.forEach((z=>{const e=z instanceof Node;r.appendChild(e?z:document.createTextNode(String(z)))})),this.appendChild(r)}})})),void 0===Element.prototype.getAttributeNames&&(Element.prototype.getAttributeNames=function(){const z=this.attributes,r=z.length,e=new Array(r);for(let t=0;t<r;t++)e[t]=z[t].name;return e});n(37846);var r=n(47181);const e=(z,r,e)=>new Promise(((t,n)=>{const a=document.createElement(z);let o="src",s="body";switch(a.onload=()=>t(r),a.onerror=()=>n(r),z){case"script":a.async=!0,e&&(a.type=e);break;case"link":a.type="text/css",a.rel="stylesheet",o="href",s="head"}a[o]=r,document[s].appendChild(a)})),t=z=>e("script",z),a="customElements"in window&&"content"in document.createElement("template"),o="ha-main-window",s=window.name===o?window:parent.name===o?parent:top;var i=n(11654);const c={},f=z=>{const r=(z=>z.html_url?{type:"html",url:z.html_url}:z.module_url&&z.js_url||z.module_url?{type:"module",url:z.module_url}:{type:"js",url:z.js_url})(z);return"js"===r.type?(r.url in c||(c[r.url]=t(r.url)),c[r.url]):"module"===r.type?(n=r.url,e("script",n,"module")):Promise.reject("No valid url found in panel config.");var n};let g,l;function d(z){l&&((z,r)=>{"setProperties"in z?z.setProperties(r):Object.keys(r).forEach((e=>{z[e]=r[e]}))})(l,z)}function u(z,e){const o=document.createElement("style");o.innerHTML="body { margin:0; } \n  @media (prefers-color-scheme: dark) {\n    body {\n      background-color: #111111;\n      color: #e1e1e1;\n    }\n  }",document.head.appendChild(o);const c=z.config._panel_custom;let u=Promise.resolve();a||(u=u.then((()=>t("/static/polyfills/webcomponents-bundle.js")))),u.then((()=>f(c))).then((()=>g||Promise.resolve())).then((()=>{l=(z=>{const r="html_url"in z?`ha-panel-${z.name}`:z.name;return document.createElement(r)})(c);l.addEventListener("hass-toggle-menu",(z=>{window.parent.customPanel&&(0,r.B)(window.parent.customPanel,z.type,z.detail)})),window.addEventListener("location-changed",(z=>{window.parent.customPanel&&window.parent.customPanel.navigate(window.location.pathname,z.detail)})),d({panel:z,...e}),document.body.appendChild(l)}),(r=>{let t;console.error(r,z),"hassio"===z.url_path?(Promise.all([n.e(78309),n.e(43835),n.e(16134),n.e(82678)]).then(n.bind(n,82678)),t=document.createElement("supervisor-error-screen")):(Promise.all([n.e(78309),n.e(16134),n.e(48811)]).then(n.bind(n,48811)),t=document.createElement("hass-error-screen"),t.error=`Unable to load the panel source: ${r}.`);const a=document.createElement("style");a.innerHTML=i.e$.cssText,document.body.appendChild(a),t.hass=e.hass,document.body.appendChild(t)})),document.body.addEventListener("click",(z=>{const e=(z=>{if(z.defaultPrevented||0!==z.button||z.metaKey||z.ctrlKey||z.shiftKey)return;const r=z.composedPath().filter((z=>"A"===z.tagName))[0];if(!r||r.target||r.hasAttribute("download")||"external"===r.getAttribute("rel"))return;let e=r.href;if(!e||-1!==e.indexOf("mailto:"))return;const t=window.location,n=t.origin||t.protocol+"//"+t.host;return 0===e.indexOf(n)&&(e=e.substr(n.length),"#"!==e)?(z.preventDefault(),e):void 0})(z);e&&((z,e)=>{const t=(null==e?void 0:e.replace)||!1;var n;t?s.history.replaceState(null!==(n=s.history.state)&&void 0!==n&&n.root?{root:!0}:null,"",z):s.history.pushState(null,"",z),(0,r.B)(s,"location-changed",{replace:t})})(e)}))}window.loadES5Adapter=()=>(g||(g=t("/static/polyfills/custom-elements-es5-adapter.js").catch()),g),document.addEventListener("DOMContentLoaded",(()=>window.parent.customPanel.registerIframe(u,d)),{once:!0})})()})();
//# sourceMappingURL=custom-panel.028268b8.js.map