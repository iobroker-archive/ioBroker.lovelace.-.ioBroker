"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9914],{65253:(e,t,r)=>{r.d(t,{Pb:()=>i,CE:()=>s,uh:()=>n,r4:()=>o,Nq:()=>a,h8:()=>l,fm:()=>c,FH:()=>f});const i="system-admin",s="system-users",n=async e=>e.callWS({type:"config/auth/list"}),o=async(e,t,r,i)=>e.callWS({type:"config/auth/create",name:t,group_ids:r,local_only:i}),a=async(e,t,r)=>e.callWS({...r,type:"config/auth/update",user_id:t}),l=async(e,t)=>e.callWS({type:"config/auth/delete",user_id:t}),c=e=>e?e.trim().split(" ").slice(0,3).map((e=>e.substring(0,1))).join(""):"?",d=32143==r.j?"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z":null,u=32143==r.j?"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z":null,h=32143==r.j?"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14":null,p=32143==r.j?"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z":null,f=(e,t,r)=>{const i=[],s=t=>e.localize(`ui.panel.config.users.${t}`);return t.is_owner&&i.push([d,s("is_owner")]),r&&t.system_generated&&i.push([u,s("is_system")]),t.local_only&&i.push([h,s("is_local")]),t.is_active||i.push([p,s("is_not_active")]),i}},9914:(e,t,r)=>{r.r(t),r.d(t,{HaConfigUsers:()=>E});var i=r(37500),s=r(33310),n=r(14516),o=(r(12171),r(36125),r(76865),r(52039),r(65253)),a=r(26765),l=(r(96551),r(29311)),c=r(91188),d=r(47181);const u=()=>Promise.all([r.e(85084),r.e(96945),r.e(4503)]).then(r.bind(r,4503));function h(){h=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var s=t.placement;if(t.kind===i&&("static"===s||"prototype"===s)){var n="static"===s?e:r;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!m(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var n=this.decorateConstructor(r,t);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],s=e.decorators,n=s.length-1;n>=0;n--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,s[n])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var s=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[i])(s)||s);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=g(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:i,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:v(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=v(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function p(e){var t,r=g(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function f(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function y(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function v(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function g(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function k(e,t,r){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(i){var s=Object.getOwnPropertyDescriptor(i,t);return s.get?s.get.call(r):s.value}},k(e,t,r||e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}const _="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";let E=function(e,t,r,i){var s=h();if(i)for(var n=0;n<i.length;n++)s=i[n](s);var o=t((function(e){s.initializeInstanceElements(e,a.elements)}),r),a=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var s,n=e[i];if("method"===n.kind&&(s=t.find(r)))if(y(n.descriptor)||y(s.descriptor)){if(m(n)||m(s))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");s.descriptor=n.descriptor}else{if(m(n)){if(m(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");s.decorators=n.decorators}f(n,s)}else t.push(n)}return t}(o.d.map(p)),e);return s.initializeClassElements(o.F,a.elements),s.runClassFinishers(o.F,a.finishers)}([(0,s.Mo)("ha-config-users")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"_users",value:()=>[]},{kind:"field",decorators:[(0,s.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"route",value:void 0},{kind:"field",key:"_columns",value(){return(0,n.Z)(((e,t)=>({name:{title:t("ui.panel.config.users.picker.headers.name"),sortable:!0,filterable:!0,width:"25%",direction:"asc",grows:!0,template:(r,s)=>e?i.dy` ${r}<br />
                  <div class="secondary">
                    ${s.username?`${s.username} |`:""}
                    ${t(`groups.${s.group_ids[0]}`)}
                  </div>`:i.dy` ${r||this.hass.localize("ui.panel.config.users.editor.unnamed_user")}`},username:{title:t("ui.panel.config.users.picker.headers.username"),sortable:!0,filterable:!0,width:"20%",direction:"asc",hidden:e,template:e=>i.dy`${e||"—"}`},group_ids:{title:t("ui.panel.config.users.picker.headers.group"),sortable:!0,filterable:!0,width:"20%",direction:"asc",hidden:e,template:e=>i.dy` ${t(`groups.${e[0]}`)} `},is_active:{title:this.hass.localize("ui.panel.config.users.picker.headers.is_active"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:e,template:e=>e?i.dy`<ha-svg-icon .path=${_}></ha-svg-icon>`:""},system_generated:{title:this.hass.localize("ui.panel.config.users.picker.headers.system"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:e,template:e=>e?i.dy`<ha-svg-icon .path=${_}></ha-svg-icon>`:""},local_only:{title:this.hass.localize("ui.panel.config.users.picker.headers.local"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:e,template:e=>e?i.dy`<ha-svg-icon .path=${_}></ha-svg-icon>`:""},icons:{title:"",label:this.hass.localize("ui.panel.config.users.picker.headers.icon"),type:"icon",sortable:!1,filterable:!1,width:"104px",hidden:!e,template:(e,t)=>{const r=(0,o.FH)(this.hass,t,!1);return i.dy`${r.map((([e,t])=>i.dy`<ha-data-table-icon
                  .path=${e}
                  .tooltip=${t}
                ></ha-data-table-icon>`))}`}}})))}},{kind:"method",key:"firstUpdated",value:function(e){k(w(r.prototype),"firstUpdated",this).call(this,e),this._fetchUsers()}},{kind:"method",key:"render",value:function(){return i.dy`
      <hass-tabs-subpage-data-table
        .hass=${this.hass}
        .narrow=${this.narrow}
        .route=${this.route}
        backPath="/config"
        .tabs=${l.configSections.persons}
        .columns=${this._columns(this.narrow,this.hass.localize)}
        .data=${this._users}
        @row-click=${this._editUser}
        hasFab
        clickable
      >
        <ha-fab
          slot="fab"
          .label=${this.hass.localize("ui.panel.config.users.picker.add_user")}
          extended
          @click=${this._addUser}
        >
          <ha-svg-icon slot="icon" .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
        </ha-fab>
      </hass-tabs-subpage-data-table>
    `}},{kind:"method",key:"_fetchUsers",value:async function(){this._users=await(0,o.uh)(this.hass),this._users.forEach((e=>{e.is_owner&&e.group_ids.unshift("owner")}))}},{kind:"method",key:"_editUser",value:function(e){const t=e.detail.id,r=this._users.find((e=>e.id===t));var i,s;r&&(i=this,s={entry:r,updateEntry:async e=>{const t=await(0,o.Nq)(this.hass,r.id,e);this._users=this._users.map((e=>e===r?t.user:e))},removeEntry:async()=>{if(!await(0,a.g7)(this,{title:this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion","name",r.name),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete")}))return!1;try{return await(0,o.h8)(this.hass,r.id),this._users=this._users.filter((e=>e!==r)),!0}catch(e){return!1}}},(0,d.B)(i,"show-dialog",{dialogTag:"dialog-user-detail",dialogImport:u,dialogParams:s}))}},{kind:"method",key:"_addUser",value:function(){(0,c.G)(this,{userAddedCallback:async e=>{e&&(this._users=[...this._users,e])}})}}]}}),i.oi)},91188:(e,t,r)=>{r.d(t,{G:()=>n});var i=r(47181);const s=()=>Promise.all([r.e(85084),r.e(49842),r.e(80756),r.e(74898)]).then(r.bind(r,74898)),n=(e,t)=>{(0,i.B)(e,"show-dialog",{dialogTag:"dialog-add-user",dialogImport:s,dialogParams:t})}}}]);
//# sourceMappingURL=d69552e3.js.map