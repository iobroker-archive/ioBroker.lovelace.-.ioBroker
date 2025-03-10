/*! For license information please see 58640.7f4500ec60cc5e40.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["58640"],{51093:function(e,t,n){n(63721),n(52247),n(71695),n(92745),n(19134),n(5740),n(92519),n(42179),n(89256),n(24931),n(88463),n(57449),n(19814),n(47021),(()=>{var e,t,n;const o=Symbol(),i=Symbol(),s=Symbol(),r=Symbol(),a=Symbol(),d=Symbol(),h=Symbol(),u=Symbol(),l=Symbol(),c=Symbol(),f=Symbol(),_=Symbol(),b=Symbol();class m{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[l](this[s]);const e=this;e[o]=null,e[s]=null,e[i]=null}get top(){const e=this[o];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[d](e),this[o].push(e))}remove(e){const t=this[o].indexOf(e);return-1!==t&&(this[o].splice(t,1),t===this[o].length&&this[d](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[o].indexOf(e)}[(e=o,t=s,n=i,d)](e){const t=this[i],n=this[s];if(!e)return this[l](n),t.clear(),void(this[s]=[]);const o=this[c](e);if(o[o.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=o;const r=this[f](e);if(!n.length)return void this[u](o,r,t);let a=n.length-1,d=o.length-1;for(;a>0&&d>0&&n[a]===o[d];)a--,d--;n[a]!==o[d]&&this[h](n[a],o[d]),a>0&&this[l](n.slice(0,a)),d>0&&this[u](o.slice(0,d),r,null)}[h](e,t){const n=e[r];this[_](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[a]=e[a],t[r]=n,e[a]=void 0,e[r]=void 0}[l](e){for(const t of e){t[a].disconnect(),t[a]=void 0;const e=t[r];for(const t of e)t.inert=!1;t[r]=void 0}}[u](e,t,n){for(const o of e){const e=o.parentNode,i=e.children,s=new Set;for(let r=0;r<i.length;r++){const e=i[r];e===o||!this[_](e)||t&&t.has(e)||(n&&e.inert?n.add(e):(e.inert=!0,s.add(e)))}o[r]=s;const d=new MutationObserver(this[b].bind(this));o[a]=d;let h=e;const u=h;u.__shady&&u.host&&(h=u.host),d.observe(h,{childList:!0})}}[b](e){const t=this[s],n=this[i];for(const o of e){const e=o.target.host||o.target,i=e===document.body?t.length:t.indexOf(e),s=t[i-1],a=s[r];for(let t=0;t<o.removedNodes.length;t++){const e=o.removedNodes[t];if(e===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();a.has(e)&&(e.inert=!1,a.delete(e))}for(let t=0;t<o.addedNodes.length;t++){const e=o.addedNodes[t];this[_](e)&&(n&&e.inert?n.add(e):(e.inert=!0,a.add(e)))}}}[_](e){return!1===/^(style|template|script)$/.test(e.localName)}[c](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[f](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let o,i,s;const r=t.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(o=0;o<r.length;o++)for(s=r[o].assignedNodes({flatten:!0}),i=0;i<s.length;i++)s[i].nodeType===Node.ELEMENT_NODE&&n.add(s[i]);return n}}document.$blockingElements=new m})()},21505:function(e,t,n){n(52247),n(71695),n(84283),n(9359),n(31526),n(92519),n(42179),n(89256),n(24931),n(88463),n(57449),n(19814),n(47021);var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){if("undefined"!=typeof window&&"undefined"!=typeof Element){var e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,n=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","video","[contenteditable]"].join(","),s=function(){function s(e,t){i(this,s),this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return o(s,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var t=this;h(e,(function(e){return t._visitNode(e)}));var n=document.activeElement;if(!document.body.contains(e)){for(var o=e,i=void 0;o;){if(o.nodeType===Node.DOCUMENT_FRAGMENT_NODE){i=o;break}o=o.parentNode}i&&(n=i.activeElement)}e.contains(n)&&(n.blur(),n===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){if(e.nodeType===Node.ELEMENT_NODE){var o=e;o!==this._rootElement&&o.hasAttribute("inert")&&this._adoptInertRoot(o),(t.call(o,n)||o.hasAttribute("tabindex"))&&this._manageNode(o)}}},{key:"_manageNode",value:function(e){var t=this._inertManager.register(e,this);this._managedNodes.add(t)}},{key:"_unmanageNode",value:function(e){var t=this._inertManager.deregister(e,this);t&&this._managedNodes.delete(t)}},{key:"_unmanageSubtree",value:function(e){var t=this;h(e,(function(e){return t._unmanageNode(e)}))}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}},{key:"_onMutation",value:function(t,n){t.forEach((function(t){var n=t.target;if("childList"===t.type)e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this);else if("attributes"===t.type)if("tabindex"===t.attributeName)this._manageNode(n);else if(n!==this._rootElement&&"inert"===t.attributeName&&n.hasAttribute("inert")){this._adoptInertRoot(n);var o=this._inertManager.getInertRoot(n);this._managedNodes.forEach((function(e){n.contains(e.node)&&o._manageNode(e.node)}))}}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),s}(),r=function(){function e(t,n){i(this,e),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([n]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return o(e,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var e=this._node;null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var e=this.node;if(t.call(e,n)){if(-1===e.tabIndex&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),e}(),a=function(){function n(e){if(i(this,n),!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),u(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return o(n,[{key:"setInert",value:function(e,t){if(t){if(this._inertRoots.has(e))return;var n=new s(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,n),!this._document.body.contains(e))for(var o=e.parentNode;o;)11===o.nodeType&&u(o),o=o.parentNode}else{if(!this._inertRoots.has(e))return;this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var n=this._managedNodes.get(e);return void 0!==n?n.addInertRoot(t):n=new r(e,t),this._managedNodes.set(e,n),n}},{key:"deregister",value:function(e,t){var n=this._managedNodes.get(e);return n?(n.removeInertRoot(t),n.destroyed&&this._managedNodes.delete(e),n):null}},{key:"_onDocumentLoaded",value:function(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(n,o){var i=this;n.forEach((function(n){switch(n.type){case"childList":e.call(n.addedNodes).forEach((function(n){if(n.nodeType===Node.ELEMENT_NODE){var o=e.call(n.querySelectorAll("[inert]"));t.call(n,"[inert]")&&o.unshift(n),o.forEach((function(e){this.setInert(e,!0)}),i)}}),i);break;case"attributes":if("inert"!==n.attributeName)return;var o=n.target,s=o.hasAttribute("inert");i.setInert(o,s)}}),this)}}]),n}();if(!HTMLElement.prototype.hasOwnProperty("inert")){var d=new a(document);Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){d.setInert(this,e)}})}}function h(e,t,n){if(e.nodeType==Node.ELEMENT_NODE){var o=e;t&&t(o);var i=o.shadowRoot;if(i)return void h(i,t,i);if("content"==o.localName){for(var s=o,r=s.getDistributedNodes?s.getDistributedNodes():[],a=0;a<r.length;a++)h(r[a],t,n);return}if("slot"==o.localName){for(var d=o,u=d.assignedNodes?d.assignedNodes({flatten:!0}):[],l=0;l<u.length;l++)h(u[l],t,n);return}}for(var c=e.firstChild;null!=c;)h(c,t,n),c=c.nextSibling}function u(e){if(!e.querySelector("style#inert-style, link#inert-style")){var t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",e.appendChild(t)}}}()}}]);
//# sourceMappingURL=58640.7f4500ec60cc5e40.js.map