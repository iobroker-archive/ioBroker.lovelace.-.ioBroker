export const __webpack_ids__=["71588"];export const __webpack_modules__={62900:function(e,t,n){n.d(t,{AG:()=>_,D8:()=>h,DD:()=>r,G0:()=>S,IX:()=>b,O7:()=>g,Rx:()=>k,Ry:()=>j,Yj:()=>m,Z_:()=>A,dt:()=>O,f0:()=>p,hu:()=>l,i0:()=>$,is:()=>d,jt:()=>E,kE:()=>w,lF:()=>D});n(92745),n(9359),n(70104),n(92519),n(42179),n(89256),n(24931),n(88463),n(57449),n(19814);class r extends TypeError{constructor(e,t){let n;const{message:r,explanation:o,...i}=e,{path:c}=e,s=0===c.length?r:`At path: ${c.join(".")} -- ${r}`;super(o??s),null!=o&&(this.cause=s),Object.assign(this,i),this.name=this.constructor.name,this.failures=()=>n??(n=[e,...t()])}}function o(e){return"object"==typeof e&&null!=e}function i(e){return o(e)&&!Array.isArray(e)}function c(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function s(e,t,n,r){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:o,branch:i}=t,{type:s}=n,{refinement:a,message:f=`Expected a value of type \`${s}\`${a?` with refinement \`${a}\``:""}, but received: \`${c(r)}\``}=e;return{value:r,type:s,refinement:a,key:o[o.length-1],path:o,branch:i,...e,message:f}}function*a(e,t,n,r){var i;o(i=e)&&"function"==typeof i[Symbol.iterator]||(e=[e]);for(const o of e){const e=s(o,t,n,r);e&&(yield e)}}function*f(e,t,n={}){const{path:r=[],branch:i=[e],coerce:c=!1,mask:s=!1}=n,a={path:r,branch:i,mask:s};c&&(e=t.coercer(e,a));let u="valid";for(const r of t.validator(e,a))r.explanation=n.message,u="not_valid",yield[r,void 0];for(let[l,d,y]of t.entries(e,a)){const t=f(d,y,{path:void 0===l?r:[...r,l],branch:void 0===l?i:[...i,d],coerce:c,mask:s,message:n.message});for(const n of t)n[0]?(u=null!=n[0].refinement?"not_refined":"not_valid",yield[n[0],void 0]):c&&(d=n[1],void 0===l?e=d:e instanceof Map?e.set(l,d):e instanceof Set?e.add(d):o(e)&&(void 0!==d||l in e)&&(e[l]=d))}if("not_valid"!==u)for(const r of t.refiner(e,a))r.explanation=n.message,u="not_refined",yield[r,void 0];"valid"===u&&(yield[void 0,e])}class u{constructor(e){const{type:t,schema:n,validator:r,refiner:o,coercer:i=e=>e,entries:c=function*(){}}=e;this.type=t,this.schema=n,this.entries=c,this.coercer=i,this.validator=r?(e,t)=>a(r(e,t),t,this,e):()=>[],this.refiner=o?(e,t)=>a(o(e,t),t,this,e):()=>[]}assert(e,t){return l(e,this,t)}create(e,t){return function(e,t,n){const r=y(e,t,{coerce:!0,message:n});if(r[0])throw r[0];return r[1]}(e,this,t)}is(e){return d(e,this)}mask(e,t){return function(e,t,n){const r=y(e,t,{coerce:!0,mask:!0,message:n});if(r[0])throw r[0];return r[1]}(e,this,t)}validate(e,t={}){return y(e,this,t)}}function l(e,t,n){const r=y(e,t,{message:n});if(r[0])throw r[0]}function d(e,t){return!y(e,t)[0]}function y(e,t,n={}){const o=f(e,t,n),i=function(e){const{done:t,value:n}=e.next();return t?void 0:n}(o);if(i[0]){return[new r(i[0],(function*(){for(const e of o)e[0]&&(yield e[0])})),void 0]}return[void 0,i[1]]}function p(...e){const t="type"===e[0].type,n=e.map((e=>e.schema)),r=Object.assign({},...n);return t?O(r):j(r)}function v(e,t){return new u({type:e,schema:null,validator:t})}function h(e){return new u({type:"dynamic",schema:null,*entries(t,n){const r=e(t,n);yield*r.entries(t,n)},validator:(t,n)=>e(t,n).validator(t,n),coercer:(t,n)=>e(t,n).coercer(t,n),refiner:(t,n)=>e(t,n).refiner(t,n)})}function m(){return v("any",(()=>!0))}function b(e){return new u({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[n,r]of t.entries())yield[n,r,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${c(e)}`})}function g(){return v("boolean",(e=>"boolean"==typeof e))}function w(e){const t={},n=e.map((e=>c(e))).join();for(const n of e)t[n]=n;return new u({type:"enums",schema:t,validator:t=>e.includes(t)||`Expected one of \`${n}\`, but received: ${c(t)}`})}function $(e){const t=c(e),n=typeof e;return new u({type:"literal",schema:"string"===n||"number"===n||"boolean"===n?e:null,validator:n=>n===e||`Expected the literal \`${t}\`, but received: ${c(n)}`})}function x(){return v("never",(()=>!1))}function _(e){return new u({...e,validator:(t,n)=>null===t||e.validator(t,n),refiner:(t,n)=>null===t||e.refiner(t,n)})}function k(){return v("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${c(e)}`))}function j(e){const t=e?Object.keys(e):[],n=x();return new u({type:"object",schema:e||null,*entries(r){if(e&&o(r)){const o=new Set(Object.keys(r));for(const n of t)o.delete(n),yield[n,r[n],e[n]];for(const e of o)yield[e,r[e],n]}},validator:e=>i(e)||`Expected an object, but received: ${c(e)}`,coercer(t,n){if(!i(t))return t;const r={...t};if(n.mask&&e)for(const t in r)void 0===e[t]&&delete r[t];return r}})}function E(e){return new u({...e,validator:(t,n)=>void 0===t||e.validator(t,n),refiner:(t,n)=>void 0===t||e.refiner(t,n)})}function A(){return v("string",(e=>"string"==typeof e||`Expected a string, but received: ${c(e)}`))}function O(e){const t=Object.keys(e);return new u({type:"type",schema:e,*entries(n){if(o(n))for(const r of t)yield[r,n[r],e[r]]},validator:e=>i(e)||`Expected an object, but received: ${c(e)}`,coercer:e=>i(e)?{...e}:e})}function S(e){const t=e.map((e=>e.type)).join(" | ");return new u({type:"union",schema:null,coercer(t,n){for(const r of e){const[e,o]=r.validate(t,{coerce:!0,mask:n.mask});if(!e)return o}return t},validator(n,r){const o=[];for(const t of e){const[...e]=f(n,t,r),[i]=e;if(!i[0])return[];for(const[t]of e)t&&o.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${c(n)}`,...o]}})}function D(e,t,n){return new u({...e,*refiner(r,o){yield*e.refiner(r,o);const i=a(n(r,o),o,e,r);for(const e of i)yield{...e,refinement:t}}})}}};
//# sourceMappingURL=71588.55da30625a08e785.js.map