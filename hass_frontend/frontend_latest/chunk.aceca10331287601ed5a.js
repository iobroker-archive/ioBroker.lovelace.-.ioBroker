(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5636],{4268:(e,t,r)=>{"use strict";function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function a(e,t){return!0===e?[]:!1===e?[t.fail()]:e}r.d(t,{DD:()=>l,Yj:()=>h,IX:()=>y,hu:()=>f,O7:()=>m,Rx:()=>b,Ry:()=>g,jt:()=>k,Z_:()=>w,n_:()=>E,dt:()=>j,G0:()=>O});class c{constructor(e){const{type:t,schema:r,coercer:i=(e=>e),validator:n=(()=>[]),refiner:o=(()=>[])}=e;this.type=t,this.schema=r,this.coercer=i,this.validator=n,this.refiner=o}}class l extends TypeError{constructor(e,t){const{path:r,value:i,type:n,branch:o}=e,a=s(e,["path","value","type","branch"]);super(`Expected a value of type \`${n}\`${r.length?` for \`${r.join(".")}\``:""} but received \`${JSON.stringify(i)}\`.`),this.value=i,Object.assign(this,a),this.type=n,this.path=r,this.branch=o,this.failures=function*(){yield e,yield*t},this.stack=(new Error).stack,this.__proto__=l.prototype}}function f(e,t){const r=d(e,t);if(r[0])throw r[0]}function u(e,t){const r=t.coercer(e);return f(r,t),r}function d(e,t,r=!1){r&&(e=t.coercer(e));const i=p(e,t),[n]=i;if(n){return[new l(n,i),void 0]}return[void 0,e]}function*p(e,t,r=[],i=[]){const{type:n}=t,s={value:e,type:n,branch:i,path:r,fail:(t={})=>o({value:e,type:n,path:r,branch:[...i,e]},t),check:(e,t,n,o)=>p(e,t,void 0!==n?[...r,o]:r,void 0!==n?[...i,n]:i)},c=a(t.validator(e,s),s),[l]=c;l?(yield l,yield*c):yield*a(t.refiner(e,s),s)}function h(){return E("any",(()=>!0))}function y(e){return new c({type:`Array<${e?e.type:"unknown"}>`,schema:e,coercer:t=>e&&Array.isArray(t)?t.map((t=>u(t,e))):t,*validator(t,r){if(Array.isArray(t)){if(e)for(const[i,n]of t.entries())yield*r.check(n,e,t,i)}else yield r.fail()}})}function m(){return E("boolean",(e=>"boolean"==typeof e))}function v(){return E("never",(()=>!1))}function b(){return E("number",(e=>"number"==typeof e&&!isNaN(e)))}function g(e){const t=e?Object.keys(e):[],r=v();return new c({type:e?`Object<{${t.join(",")}}>`:"Object",schema:e||null,coercer:e?_(e):e=>e,*validator(i,n){if("object"==typeof i&&null!=i){if(e){const o=new Set(Object.keys(i));for(const r of t){o.delete(r);const t=e[r],s=i[r];yield*n.check(s,t,i,r)}for(const e of o){const t=i[e];yield*n.check(t,r,i,e)}}}else yield n.fail()}})}function k(e){return new c({type:e.type+"?",schema:e.schema,validator:(t,r)=>void 0===t||r.check(t,e)})}function w(){return E("string",(e=>"string"==typeof e))}function E(e,t){return new c({type:e,validator:t,schema:null})}function j(e){const t=Object.keys(e);return E(`Type<{${t.join(",")}}>`,(function*(r,i){if("object"==typeof r&&null!=r)for(const n of t){const t=e[n],o=r[n];yield*i.check(o,t,r,n)}else yield i.fail()}))}function O(e){return E(""+e.map((e=>e.type)).join(" | "),(function*(t,r){for(const i of e){const[...e]=r.check(t,i);if(0===e.length)return}yield r.fail()}))}function _(e){const t=Object.keys(e);return r=>{if("object"!=typeof r||null==r)return r;const i={},n=new Set(Object.keys(r));for(const o of t){n.delete(o);const t=e[o],s=r[o];i[o]=u(s,t)}for(const e of n)i[e]=r[e];return i}}},45890:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});const i=r(15652).iv`
  ha-switch {
    padding: 16px 6px;
  }
  .side-by-side {
    display: flex;
  }
  .side-by-side > * {
    flex: 1;
    padding-right: 4px;
  }
  .suffix {
    margin: 0 8px;
  }
`},65649:(e,t,r)=>{"use strict";r.r(t),r.d(t,{HuiIframeCardEditor:()=>m});r(30879);var i=r(15652),n=r(4268),o=r(47181),s=r(45890);function a(){a=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!f(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var f=0;f<l.length;f++)this.addElementPlacement(l[f],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=p(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function c(e){var t,r=p(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function l(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function f(e){return e.decorators&&e.decorators.length}function u(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}const y=(0,n.Ry)({type:(0,n.Z_)(),title:(0,n.jt)((0,n.Z_)()),url:(0,n.jt)((0,n.Z_)()),aspect_ratio:(0,n.jt)((0,n.Z_)())});let m=function(e,t,r,i){var n=a();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,d.elements)}),r),d=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(u(o.descriptor)||u(n.descriptor)){if(f(o)||f(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(f(o)){if(f(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}l(o,n)}else t.push(o)}return t}(s.d.map(c)),e);return n.initializeClassElements(s.F,d.elements),n.runClassFinishers(s.F,d.finishers)}([(0,i.Mo)("hui-iframe-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,n.hu)(e,y),this._config=e}},{kind:"get",key:"_title",value:function(){return this._config.title||""}},{kind:"get",key:"_url",value:function(){return this._config.url||""}},{kind:"get",key:"_aspect_ratio",value:function(){return this._config.aspect_ratio||""}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?i.dy`
      <div class="card-config">
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.url")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .value="${this._url}"
          .configValue="${"url"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <div class="side-by-side">
          <paper-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.title")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._title}"
            .configValue="${"title"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.aspect_ratio")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._aspect_ratio}"
            .configValue="${"aspect_ratio"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>
      </div>
    `:i.dy``}},{kind:"method",key:"_valueChanged",value:function(e){if(!this._config||!this.hass)return;const t=e.target,r=t.value;this["_"+t.configValue]!==r&&(t.configValue&&(""===r?(this._config={...this._config},delete this._config[t.configValue]):this._config={...this._config,[t.configValue]:r}),(0,o.B)(this,"config-changed",{config:this._config}))}},{kind:"get",static:!0,key:"styles",value:function(){return s.A}}]}}),i.oi)}}]);
//# sourceMappingURL=chunk.aceca10331287601ed5a.js.map