(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[90496],{53725:function(t,e,n){"use strict";n(51467),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},t.exports=e.default},20508:function(t,e,n){"use strict";var a=n(28847).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,i.default)({},t)};var i=a(n(53725));t.exports=e.default},59699:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(90394),i=n(39244),r=n(23682),s=36e5;function o(t,e){(0,r.Z)(2,arguments);var n=(0,a.Z)(e);return(0,i.Z)(t,n*s)}},39244:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var a=n(90394),i=n(34327),r=n(23682);function s(t,e){(0,r.Z)(2,arguments);var n=(0,i.Z)(t).getTime(),s=(0,a.Z)(e);return new Date(n+s)}},57879:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var a=n(34327),i=n(23682);function r(t,e){(0,i.Z)(2,arguments);var n=(0,a.Z)(t),r=(0,a.Z)(e),s=n.getTime()-r.getTime();return s<0?-1:s>0?1:s}},38588:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});n(76843);var a=n(34327),i=n(23682);var r=n(57879),s=n(63390);function o(t,e){(0,i.Z)(2,arguments);var n,o=(0,a.Z)(t),u=(0,a.Z)(e),c=(0,r.Z)(o,u),d=Math.abs(function(t,e){(0,i.Z)(2,arguments);var n=(0,a.Z)(t),r=(0,a.Z)(e);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(o,u));if(d<1)n=0;else{1===o.getMonth()&&o.getDate()>27&&o.setDate(30),o.setMonth(o.getMonth()-c*d);var h=(0,r.Z)(o,u)===-c;(0,s.Z)((0,a.Z)(t))&&1===d&&1===(0,r.Z)(t,u)&&(h=!1),n=c*(d-Number(h))}return 0===n?0:n}},74774:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var a=n(34327),i=n(23682);function r(t){return(0,i.Z)(1,arguments),1===(0,a.Z)(t).getDate()}},63390:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(34327),i=n(93752),r=n(1905),s=n(23682);function o(t){(0,s.Z)(1,arguments);var e=(0,a.Z)(t);return(0,i.Z)(e).getTime()===(0,r.Z)(e).getTime()}},73826:function(t,e,n){"use strict";n.d(e,{f:function(){return f}});var a=n(40039),i=n(33368),r=n(71650),s=n(82390),o=n(69205),u=n(70906),c=n(91808),d=n(34541),h=n(47838),l=(n(97393),n(46798),n(47084),n(51358),n(98490),n(40271),n(60163),n(9849),n(13526),n(95260)),f=function(t){var e=(0,c.Z)(null,(function(t,e){var n=function(e){(0,o.Z)(a,e);var n=(0,u.Z)(a);function a(){var e;(0,r.Z)(this,a);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return e=n.call.apply(n,[this].concat(o)),t((0,s.Z)(e)),e}return(0,i.Z)(a)}(e);return{F:n,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,d.Z)((0,h.Z)(n.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,d.Z)((0,h.Z)(n.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){var t=this.__unsubs.pop();t instanceof Promise?t.then((function(t){return t()})):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,d.Z)((0,h.Z)(n.prototype),"updated",this).call(this,t),t.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps){var e,i=(0,a.Z)(t.keys());try{for(i.s();!(e=i.n()).done;){var r=e.value;if(this.hassSubscribeRequiredHostProps.includes(r))return void this.__checkSubscribed()}}catch(s){i.e(s)}finally{i.f()}}}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var t,e=this;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((function(t){return void 0===e[t]}))||(this.__unsubs=this.hassSubscribe())}}]}}),t);return e}},47420:function(t,e,n){"use strict";n.r(e),n.d(e,{HuiEnergyDevicesGraphCard:function(){return T}});var a,i,r,s=n(99312),o=n(81043),u=n(88962),c=n(33368),d=n(71650),h=n(82390),l=n(69205),f=n(70906),v=n(91808),p=(n(97393),n(46349),n(70320),n(36513),n(46798),n(9849),n(50289),n(94167),n(37313),n(69519)),g=n(24112),_=n(68144),b=n(95260),k=n(83448),y=n(14516),Z=n(55070),m=n(47181),C=n(18457),x=(n(62336),n(22098),n(55424)),S=n(38014),M=n(73826),D=n(53658),T=(0,v.Z)([(0,b.Mo)("hui-energy-devices-graph-card")],(function(t,e){var n,v=function(e){(0,l.Z)(a,e);var n=(0,f.Z)(a);function a(){var e;(0,d.Z)(this,a);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=n.call.apply(n,[this].concat(r)),t((0,h.Z)(e)),e}return(0,c.Z)(a)}(e);return{F:v,d:[{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,b.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,b.IO)("ha-chart-base")],key:"_chart",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var t,e=this;return[(0,x.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((function(t){e._data=t,e._getStatistics(t)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,D.SN)(this,t)||t.size>1||!t.has("hass")}},{kind:"method",key:"render",value:function(){var t;return this.hass&&this._config?(0,_.dy)(a||(a=(0,u.Z)([" <ha-card> ",' <div class="content ','"> <ha-chart-base .hass="','" .data="','" .options="','" .height="','" chart-type="bar"></ha-chart-base> </div> </ha-card> '])),this._config.title?(0,_.dy)(i||(i=(0,u.Z)(['<h1 class="card-header">',"</h1>"])),this._config.title):"",(0,k.$)({"has-header":!!this._config.title}),this.hass,this._chartData,this._createOptions(this.hass.locale),28*((null===(t=this._chartData)||void 0===t||null===(t=t.datasets[0])||void 0===t?void 0:t.data.length)||0)+50):_.Ld}},{kind:"field",key:"_createOptions",value:function(){var t=this;return(0,y.Z)((function(e){return{parsing:!1,animation:!1,responsive:!0,maintainAspectRatio:!1,indexAxis:"y",scales:{y:{type:"category",ticks:{autoSkip:!1,callback:function(e){var n,a=t._chartData.datasets[0].data[e].y;return(0,S.Kd)(t.hass,a,null===(n=t._data)||void 0===n?void 0:n.statsMetadata[a])}}},x:{title:{display:!0,text:"kWh"}}},elements:{bar:{borderWidth:1,borderRadius:4}},plugins:{tooltip:{mode:"nearest",callbacks:{title:function(e){var n,a=e[0].label;return(0,S.Kd)(t.hass,a,null===(n=t._data)||void 0===n?void 0:n.statsMetadata[a])},label:function(t){return"".concat(t.dataset.label,": ").concat((0,C.uf)(t.parsed.x,e)," kWh")}}}},locale:(0,C.Hd)(t.hass.locale),onClick:function(e){var n,a=e.chart,i=(0,p.z)(e,a),r=Math.abs(a.scales.y.getValueForPixel(i.y));(0,m.B)(t,"hass-more-info",{entityId:null===(n=t._chartData)||void 0===n||null===(n=n.datasets[0])||void 0===n||null===(n=n.data[r])||void 0===n?void 0:n.y}),a.canvas.dispatchEvent(new Event("mouseout"))}}}))}},{kind:"method",key:"_getStatistics",value:(n=(0,o.Z)((0,s.Z)().mark((function t(e){var n,a,i,r,o,u,c,d,h,l,f,v,p,_,b,k;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=(0,g.Z)(e.end||new Date,e.start),r=e.prefs.device_consumption.map((function(t){return t.stat_consumption})),o=i>35?"month":i>2?"day":"hour",u=this.hass.config.unit_system.length||"",c={energy:"kWh",volume:"km"===u?"m³":"ft³"},t.next=7,(0,S.dL)(this.hass,e.start,e.end,r,o,c,["change"]);case 7:if(d=t.sent,!e.startCompare||!e.endCompare){t.next=12;break}return t.next=11,(0,S.dL)(this.hass,e.startCompare,e.endCompare,r,o,c,["change"]);case 11:h=t.sent;case 12:return l=[],f=[],v=[],p=[],_=[],b=[],k=[{label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.energy_usage"),borderColor:v,backgroundColor:_,data:l,barThickness:h?10:20}],h&&k.push({label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.previous_energy_usage"),borderColor:p,backgroundColor:b,data:f,barThickness:10}),e.prefs.device_consumption.forEach((function(t,e){var n=t.stat_consumption in d&&(0,S.Kj)(d[t.stat_consumption])||0;if(l.push({y:t.stat_consumption,x:n,idx:e}),h){var a=t.stat_consumption in h&&(0,S.Kj)(h[t.stat_consumption])||0;f.push({y:t.stat_consumption,x:a,idx:e})}})),l.sort((function(t,e){return e.x-t.x})),l.length=(null===(n=this._config)||void 0===n?void 0:n.max_devices)||l.length,l.forEach((function(t){var e=(0,Z.Eu)(t.idx);v.push(e),_.push(e+"7F")})),f.forEach((function(t){var e=(0,Z.Eu)(t.idx);p.push(e+"7F"),b.push(e+"32")})),this._chartData={labels:l.map((function(t){return t.y})),datasets:k},t.next=28,this.updateComplete;case 28:null===(a=this._chart)||void 0===a||a.updateChart("none");case 29:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,_.iv)(r||(r=(0,u.Z)([".card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}ha-chart-base{--chart-max-height:none}"])))}}]}}),(0,M.f)(_.oi))},28847:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},23158:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var a=n(89273),i=n(36857);function r(t,e,n){var r=(0,i.Z)(t,n),s=(0,a.Z)(e,r,!0),o=new Date(r.getTime()-s),u=new Date(0);return u.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),u.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),u}},25101:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});n(63789),n(18098);var a=n(20508),i=n(36857),r=n(57944),s=n(89273),o=n(74101);function u(t,e,n){if("string"==typeof t&&!t.match(r.Z)){var u=a(n);return u.timeZone=e,(0,i.Z)(t,u)}var c=(0,i.Z)(t,n),d=(0,o.Z)(c.getFullYear(),c.getMonth(),c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds(),c.getMilliseconds()).getTime(),h=(0,s.Z)(e,new Date(d));return new Date(d+h)}}}]);
//# sourceMappingURL=90496.g4DSW0B9zu4.js.map