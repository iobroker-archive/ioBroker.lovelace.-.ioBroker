"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[95396],{5372:(t,e,i)=>{i.d(e,{a:()=>k});var r=i(37500),n=i(33310),s=i(14516),a=i(55070),o=i(7323),l=i(18457),c=i(38014);i(62336);function d(){d=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(i){e.forEach((function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach((function(r){e.forEach((function(e){var n=e.placement;if(e.kind===r&&("static"===n||"prototype"===n)){var s="static"===n?t:i;this.defineClassElement(s,e)}}),this)}),this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var r=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],r=[],n={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,n)}),this),t.forEach((function(t){if(!p(t))return i.push(t);var e=this.decorateElement(t,n);i.push(e.element),i.push.apply(i,e.extras),r.push.apply(r,e.finishers)}),this),!e)return{elements:i,finishers:r};var s=this.decorateConstructor(i,e);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(t,e,i){var r=e[t.placement];if(!i&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,e){for(var i=[],r=[],n=t.decorators,s=n.length-1;s>=0;s--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var o=this.fromElementDescriptor(t),l=this.toElementFinisherExtras((0,n[s])(o)||o);t=l.element,this.addElementPlacement(t,e),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);i.push.apply(i,c)}}return{element:t,finishers:r,extras:i}},decorateConstructor:function(t,e){for(var i=[],r=e.length-1;r>=0;r--){var n=this.fromClassDescriptor(t),s=this.toClassDescriptor((0,e[r])(n)||n);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){t=s.elements;for(var a=0;a<t.length-1;a++)for(var o=a+1;o<t.length;o++)if(t[a].key===t[o].key&&t[a].placement===t[o].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=y(t.key),r=String(t.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var s={kind:e,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=t.initializer),s},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:m(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=m(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var r=(0,e[i])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function u(t){var e,i=y(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(r.decorators=t.decorators),"field"===t.kind&&(r.initializer=t.value),r}function h(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function p(t){return t.decorators&&t.decorators.length}function f(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function m(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}function y(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}const k={mean:"mean",min:"min",max:"max",sum:"sum",state:"sum"};!function(t,e,i,r){var n=d();if(r)for(var s=0;s<r.length;s++)n=r[s](n);var a=e((function(t){n.initializeInstanceElements(t,o.elements)}),i),o=n.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===s.key&&t.placement===s.placement},r=0;r<t.length;r++){var n,s=t[r];if("method"===s.kind&&(n=e.find(i)))if(f(s.descriptor)||f(n.descriptor)){if(p(s)||p(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(p(s)){if(p(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}h(s,n)}else e.push(s)}return e}(a.d.map(u)),t);n.initializeClassElements(a.F,o.elements),n.runClassFinishers(a.F,o.finishers)}([(0,n.Mo)("statistics-chart")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"statisticsData",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"names",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)()],key:"unit",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"statTypes",value:()=>["sum","min","mean","max"]},{kind:"field",decorators:[(0,n.Cb)()],key:"chartType",value:()=>"line"},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"isLoadingData",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,n.SB)()],key:"_chartOptions",value:void 0},{kind:"field",key:"_computedStyle",value:void 0},{kind:"method",key:"shouldUpdate",value:function(t){return t.size>1||!t.has("hass")}},{kind:"method",key:"willUpdate",value:function(t){this.hasUpdated||this._createOptions(),(t.has("statisticsData")||t.has("statTypes"))&&this._generateData()}},{kind:"method",key:"firstUpdated",value:function(){this._computedStyle=getComputedStyle(this)}},{kind:"method",key:"render",value:function(){return(0,o.p)(this.hass,"history")?this.isLoadingData&&!this.statisticsData?r.dy`<div class="info">
        ${this.hass.localize("ui.components.statistics_charts.loading_statistics")}
      </div>`:this.statisticsData&&Object.keys(this.statisticsData).length?r.dy`
      <ha-chart-base
        .data=${this._chartData}
        .options=${this._chartOptions}
        .chartType=${this.chartType}
      ></ha-chart-base>
    `:r.dy`<div class="info">
        ${this.hass.localize("ui.components.statistics_charts.no_statistics_found")}
      </div>`:r.dy`<div class="info">
        ${this.hass.localize("ui.components.history_charts.history_disabled")}
      </div>`}},{kind:"method",key:"_createOptions",value:function(){this._chartOptions={parsing:!1,animation:!1,scales:{x:{type:"time",adapters:{date:{locale:this.hass.locale}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:t=>t.tick&&t.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:"datetime"}},y:{beginAtZero:!1,ticks:{maxTicksLimit:7},title:{display:this.unit,text:this.unit}}},plugins:{tooltip:{mode:"nearest",callbacks:{label:t=>`${t.dataset.label}: ${(0,l.uf)(t.parsed.y,this.hass.locale)} ${t.dataset.unit||""}`}},filler:{propagate:!0},legend:{display:!0,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{line:{tension:.4,borderWidth:1.5},bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:(0,l.Hd)(this.hass.locale)}}},{kind:"field",key:"_getStatisticsMetaData",value(){return(0,s.Z)((async t=>{const e=await(0,c.Py)(this.hass,t),i={};return e.forEach((t=>{i[t.statistic_id]=t})),i}))}},{kind:"method",key:"_generateData",value:async function(){if(!this.statisticsData)return;const t=await this._getStatisticsMetaData(Object.keys(this.statisticsData));let e=0;const i=Object.values(this.statisticsData),r=[];let n,s;if(0===i.length)return;n=this.endTime||new Date(Math.max(...i.map((t=>new Date(t[t.length-1].start).getTime())))),n>new Date&&(n=new Date);const o=this.names||{};i.forEach((i=>{const l=i[0],d=null==t?void 0:t[l.statistic_id];let u=o[l.statistic_id];void 0===u&&(u=(0,c.Kd)(this.hass,l.statistic_id,d)),this.unit||(void 0===s?s=(0,c.dO)(this.hass,l.statistic_id,d):s!==(0,c.dO)(this.hass,l.statistic_id,d)&&(s=null));let h=null;const p=[],f=(t,e)=>{e&&(t>n||(p.forEach(((i,r)=>{null===e[r]&&h&&null!==h[r]&&i.data.push({x:t.getTime(),y:h[r]}),i.data.push({x:t.getTime(),y:e[r]})})),h=e))},m=(0,a.hZ)(e,this._computedStyle);e++;const y=[],v=this.statTypes.includes("mean")&&(0,c.Nw)(i,"mean");(v?[...this.statTypes].sort(((t,e)=>"min"===t||"max"===e?-1:"max"===t||"min"===e?1:0)):this.statTypes).forEach((t=>{if((0,c.Nw)(i,k[t])){const e=v&&("min"===t||"max"===t);y.push(t),p.push({label:u?`${u} (${this.hass.localize(`ui.components.statistics_charts.statistic_types.${t}`)})\n            `:this.hass.localize(`ui.components.statistics_charts.statistic_types.${t}`),fill:!!v&&("min"===t?"+1":"max"===t&&"-1"),borderColor:e?m+"7F":m,backgroundColor:e?m+"3F":m+"7F",pointRadius:0,data:[],unit:null==d?void 0:d.unit_of_measurement,band:e})}}));let g=null,_=null;i.forEach((t=>{const e=new Date(t.start);if(g===e)return;g=e;const i=[];y.forEach((e=>{let r;"sum"===e?null===_?(r=0,_=t.sum):r=(t.sum||0)-_:r=t[e],i.push(null!==r?Math.round(100*r)/100:null)})),f(e,i)})),f(n,h),Array.prototype.push.apply(r,p)})),null!==s&&(this._chartOptions={...this._chartOptions,scales:{...this._chartOptions.scales,y:{...this._chartOptions.scales.y,title:{display:s,text:s}}}}),this._chartData={datasets:r}}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      :host {
        display: block;
        min-height: 60px;
      }
      .info {
        text-align: center;
        line-height: 60px;
        color: var(--secondary-text-color);
      }
    `}}]}}),r.oi)},38014:(t,e,i)=>{i.d(e,{uR:()=>n,Py:()=>s,dL:()=>a,_Y:()=>o,h_:()=>l,Cj:()=>c,hN:()=>d,Kj:()=>u,q6:()=>h,Nw:()=>p,Z0:()=>y,j2:()=>v,Kd:()=>k,dO:()=>g,Hs:()=>_});var r=i(91741);const n=(t,e)=>t.callWS({type:"recorder/list_statistic_ids",statistic_type:e}),s=(t,e)=>t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:e}),a=(t,e,i,r,n="hour",s)=>t.callWS({type:"recorder/statistics_during_period",start_time:e.toISOString(),end_time:null==i?void 0:i.toISOString(),statistic_ids:r,period:n,units:s}),o=(t,e,i,r)=>t.callWS({type:"recorder/statistic_during_period",statistic_id:e,units:r,fixed_period:i.fixed_period?{start_time:i.fixed_period.start instanceof Date?i.fixed_period.start.toISOString():i.fixed_period.start,end_time:i.fixed_period.end instanceof Date?i.fixed_period.end.toISOString():i.fixed_period.end}:void 0,calendar:i.calendar,rolling_window:i.rolling_window}),l=t=>t.callWS({type:"recorder/validate_statistics"}),c=(t,e,i)=>t.callWS({type:"recorder/update_statistics_metadata",statistic_id:e,unit_of_measurement:i}),d=(t,e)=>t.callWS({type:"recorder/clear_statistics",statistic_ids:e}),u=t=>{if(!t||t.length<2)return null;const e=t[t.length-1].sum;if(null===e)return null;const i=t[0].sum;return null===i?e:e-i},h=(t,e)=>{let i=null;for(const r of e){if(!(r in t))continue;const e=u(t[r]);null!==e&&(null===i?i=e:i+=e)}return i},p=(t,e)=>t.some((t=>null!==t[e])),f=["mean","min","max"],m=["sum"],y=(t,e)=>!(!f.includes(e)||!t.has_mean)||!(!m.includes(e)||!t.has_sum),v=(t,e,i,r,n)=>t.callWS({type:"recorder/adjust_sum_statistics",statistic_id:e,start_time:i,adjustment:r,adjustment_unit_of_measurement:n}),k=(t,e,i)=>{const n=t.states[e];return n?(0,r.C)(n):(null==i?void 0:i.name)||e},g=(t,e,i)=>{let r;var n;e&&(r=null===(n=t.states[e])||void 0===n?void 0:n.attributes.unit_of_measurement);return void 0===r?null==i?void 0:i.statistics_unit_of_measurement:r},_=t=>t.includes(":")},95396:(t,e,i)=>{i.r(e),i.d(e,{HuiStatisticsGraphCard:()=>g});var r=i(37500),n=i(33310),s=i(8636),a=(i(22098),i(5372),i(53658)),o=i(90271),l=i(38014);function c(){c=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(i){e.forEach((function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach((function(r){e.forEach((function(e){var n=e.placement;if(e.kind===r&&("static"===n||"prototype"===n)){var s="static"===n?t:i;this.defineClassElement(s,e)}}),this)}),this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var r=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],r=[],n={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,n)}),this),t.forEach((function(t){if(!h(t))return i.push(t);var e=this.decorateElement(t,n);i.push(e.element),i.push.apply(i,e.extras),r.push.apply(r,e.finishers)}),this),!e)return{elements:i,finishers:r};var s=this.decorateConstructor(i,e);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(t,e,i){var r=e[t.placement];if(!i&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,e){for(var i=[],r=[],n=t.decorators,s=n.length-1;s>=0;s--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var o=this.fromElementDescriptor(t),l=this.toElementFinisherExtras((0,n[s])(o)||o);t=l.element,this.addElementPlacement(t,e),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);i.push.apply(i,c)}}return{element:t,finishers:r,extras:i}},decorateConstructor:function(t,e){for(var i=[],r=e.length-1;r>=0;r--){var n=this.fromClassDescriptor(t),s=this.toClassDescriptor((0,e[r])(n)||n);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){t=s.elements;for(var a=0;a<t.length-1;a++)for(var o=a+1;o<t.length;o++)if(t[a].key===t[o].key&&t[a].placement===t[o].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?y(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=m(t.key),r=String(t.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var s={kind:e,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=t.initializer),s},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:f(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=f(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var r=(0,e[i])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function d(t){var e,i=m(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(r.decorators=t.decorators),"field"===t.kind&&(r.initializer=t.value),r}function u(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function h(t){return t.decorators&&t.decorators.length}function p(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function f(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}function m(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function v(t,e,i){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(i):n.value}},v(t,e,i||t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}let g=function(t,e,i,r){var n=c();if(r)for(var s=0;s<r.length;s++)n=r[s](n);var a=e((function(t){n.initializeInstanceElements(t,o.elements)}),i),o=n.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===s.key&&t.placement===s.placement},r=0;r<t.length;r++){var n,s=t[r];if("method"===s.kind&&(n=e.find(i)))if(p(s.descriptor)||p(n.descriptor)){if(h(s)||h(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(h(s)){if(h(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}u(s,n)}else e.push(s)}return e}(a.d.map(d)),t);return n.initializeClassElements(a.F,o.elements),n.runClassFinishers(a.F,o.finishers)}([(0,n.Mo)("hui-statistics-graph-card")],(function(t,e){class c extends e{constructor(...e){super(...e),t(this)}}return{F:c,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(29563),i.e(98985),i.e(24103),i.e(88278),i.e(6294),i.e(41985),i.e(78874),i.e(45507),i.e(62299),i.e(77576),i.e(12545),i.e(26272),i.e(13701),i.e(39284),i.e(33762),i.e(95216)]).then(i.bind(i,86943)),document.createElement("hui-statistics-graph-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"statistics-graph",entities:[]}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_statistics",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",key:"_entities",value:()=>[]},{kind:"field",key:"_names",value:()=>({})},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){v(k(c.prototype),"disconnectedCallback",this).call(this),this._interval&&(clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"connectedCallback",value:function(){v(k(c.prototype),"connectedCallback",this).call(this),this.hasUpdated&&(this._getStatistics(),clearInterval(this._interval),this._interval=window.setInterval((()=>this._getStatistics()),this._intervalTimeout))}},{kind:"method",key:"getCardSize",value:function(){var t,e;return null!==(t=this._config)&&void 0!==t&&t.title?2:0+2*((null===(e=this._entities)||void 0===e?void 0:e.length)||1)}},{kind:"method",key:"setConfig",value:function(t){if(!t.entities||!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(!t.entities.length)throw new Error("You must include at least one entity");const e=t.entities?(0,o.A)(t.entities,!1):[];this._entities=[],e.forEach((t=>{this._entities.push(t.entity),t.name&&(this._names[t.entity]=t.name)})),"string"==typeof t.stat_types?this._config={...t,stat_types:[t.stat_types]}:t.stat_types?this._config=t:this._config={...t,stat_types:["state","sum","min","max","mean"]}}},{kind:"method",key:"shouldUpdate",value:function(t){return!!t.has("_statistics")||(0,a.W)(this,t)}},{kind:"method",key:"willUpdate",value:function(t){if(v(k(c.prototype),"willUpdate",this).call(this,t),!this._config||!t.has("_config"))return;const e=t.get("_config");(null==e?void 0:e.entities)===this._config.entities&&(null==e?void 0:e.days_to_show)===this._config.days_to_show&&(null==e?void 0:e.period)===this._config.period||(this._getStatistics(),clearInterval(this._interval),this._interval=window.setInterval((()=>this._getStatistics()),this._intervalTimeout))}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?r.dy`
      <ha-card .header=${this._config.title}>
        <div
          class="content ${(0,s.$)({"has-header":!!this._config.title})}"
        >
          <statistics-chart
            .hass=${this.hass}
            .isLoadingData=${!this._statistics}
            .statisticsData=${this._statistics}
            .chartType=${this._config.chart_type||"line"}
            .statTypes=${this._config.stat_types}
            .names=${this._names}
          ></statistics-chart>
        </div>
      </ha-card>
    `:r.dy``}},{kind:"get",key:"_intervalTimeout",value:function(){var t;return 1e3*("5minute"===(null===(t=this._config)||void 0===t?void 0:t.period)?5:60)*60}},{kind:"method",key:"_getStatistics",value:async function(){const t=new Date;t.setTime(t.getTime()-36e5*(24*(this._config.days_to_show||30)+1));try{this._statistics=await(0,l.dL)(this.hass,t,void 0,this._entities,this._config.period)}catch(t){this._statistics=void 0}}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      ha-card {
        height: 100%;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
    `}}]}}),r.oi)}}]);
//# sourceMappingURL=0304bf3e.js.map