export const __webpack_ids__=["55213"];export const __webpack_modules__={50875:function(e,t,a){a.d(t,{Eu:()=>o,hZ:()=>d,o9:()=>c});var i=a(27486),s=a(11259);const n=["#4269d0","#f4bd4a","#ff725c","#6cc5b0","#a463f2","#ff8ab7","#9c6b4e","#97bbf5","#01ab63","#9498a0","#094bad","#c99000","#d84f3e","#49a28f","#048732","#d96895","#8043ce","#7599d1","#7a4c31","#74787f","#6989f4","#ffd444","#ff957c","#8fe9d3","#62cc71","#ffadda","#c884ff","#badeff","#bf8b6d","#b6bac2","#927acc","#97ee3f","#bf3947","#9f5b00","#f48758","#8caed6","#f2b94f","#eff26e","#e43872","#d9b100","#9d7a00","#698cff","#d9d9d9","#00d27e","#d06800","#009f82","#c49200","#cbe8ff","#fecddf","#c27eb6","#8cd2ce","#c4b8d9","#f883b0","#a49100","#f48800","#27d0df","#a04a9b"];function o(e){return n[e%n.length]}function d(e,t){const a=t.getPropertyValue(`--graph-color-${e+1}`)||o(e);return(0,s.Rq)(a)}const c=(0,i.Z)((e=>n.map(((t,a)=>d(a,e)))),((e,t)=>e[0].getPropertyValue("--graph-color-1")===t[0].getPropertyValue("--graph-color-1")))},6736:function(e,t,a){a.d(t,{f:()=>o});var i=a(44249),s=a(72621),n=(a(9359),a(52924),a(15093));const o=e=>(0,i.Z)(null,(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)(a,"connectedCallback",this,3)([]),this._checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,s.Z)(a,"disconnectedCallback",this,3)([]),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,s.Z)(a,"updated",this,3)([e]),e.has("hass"))this._checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this._checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"_checkSubscribed",value:function(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&!this.hassSubscribeRequiredHostProps?.some((e=>void 0===this[e]))&&(this.__unsubs=this.hassSubscribe())}}]}}),e)},18709:function(e,t,a){a.a(e,(async function(e,i){try{a.r(t),a.d(t,{HuiEnergyDevicesGraphCard:()=>m});var s=a(44249),n=(a(92745),a(9359),a(1331),a(31526),a(70104),a(57243)),o=a(15093),d=a(35359),c=a(27486),r=a(50875),h=a(50602),u=a(25179),l=a(1118),f=a(17705),b=a(6736),_=a(93331),v=(a(54977),a(36522)),p=a(48066),k=e([u,l,h]);[u,l,h]=k.then?(await k)():k;let m=(0,s.Z)([(0,o.Mo)("hui-energy-devices-graph-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_chartData",value:()=>[]},{kind:"field",decorators:[(0,o.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){return[(0,l.UB)(this.hass,{key:this._config?.collection_key}).subscribe((e=>{this._data=e,this._getStatistics(e)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,_.SN)(this,e)||e.size>1||!e.has("hass")}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?n.dy` <ha-card> ${this._config.title?n.dy`<h1 class="card-header">${this._config.title}</h1>`:""} <div class="content ${(0,d.$)({"has-header":!!this._config.title})}"> <ha-chart-base .hass="${this.hass}" .data="${this._chartData}" .options="${this._createOptions(this._chartData)}" .height="${28*(this._chartData[0]?.data?.length||0)+50+"px"}" @chart-click="${this._handleChartClick}"></ha-chart-base> </div> </ha-card> `:n.Ld}},{kind:"method",key:"_renderTooltip",value:function(e){const t=`<h4 style="text-align: center; margin: 0;">${this._getDeviceName(e.value[1])}</h4>`,a=`${(0,h.uf)(e.value[0],this.hass.locale,(0,h.l4)(void 0,this.hass.entities[e.value[1]]))} kWh`;return`${t}${e.marker} ${e.seriesName}: ${a}`}},{kind:"field",key:"_createOptions",value(){return(0,c.Z)((e=>{const t=window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches;return{xAxis:{type:"value",name:"kWh"},yAxis:{type:"category",inverse:!0,triggerEvent:!0,data:e[0]?.data?.map((e=>e.value[1])),axisLabel:{formatter:this._getDeviceName.bind(this),overflow:"truncate",fontSize:12,margin:5,width:Math.min(t?100:200,Math.max(...e[0]?.data?.map((e=>(0,p.U)(this._getDeviceName(e.value[1]),12)+5))||[]))}},grid:{top:5,left:5,right:40,bottom:0,containLabel:!0},tooltip:{show:!0,formatter:this._renderTooltip.bind(this)}}}))}},{kind:"method",key:"_getDeviceName",value:function(e){return this._data?.prefs.device_consumption.find((t=>t.stat_consumption===e))?.name||(0,f.Kd)(this.hass,e,this._data?.statsMetadata[e])}},{kind:"method",key:"_getStatistics",value:async function(e){const t=e.stats,a=e.statsCompare,i=[],s=[],n=[{type:"bar",name:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.energy_usage"),itemStyle:{borderRadius:[0,4,4,0]},data:i,barWidth:a?10:20,cursor:"default"}];a&&n.push({type:"bar",name:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.previous_energy_usage"),itemStyle:{borderRadius:[0,4,4,0]},data:s,barWidth:10,cursor:"default"});const o=getComputedStyle(this);e.prefs.device_consumption.forEach(((e,n)=>{const d=e.stat_consumption in t&&(0,f.Kj)(t[e.stat_consumption])||0,c=(0,r.hZ)(n,o);if(i.push({id:n,value:[d,e.stat_consumption],itemStyle:{color:c+"7F",borderColor:c}}),a){const t=e.stat_consumption in a&&(0,f.Kj)(a[e.stat_consumption])||0;s.push({id:n,value:[t,e.stat_consumption],itemStyle:{color:c+"32",borderColor:c+"7F"}})}})),i.sort(((e,t)=>t.value[0]-e.value[0])),i.length=this._config?.max_devices||i.length,this._chartData=n,await this.updateComplete}},{kind:"method",key:"_handleChartClick",value:function(e){"axisLabel"===e.detail.targetType&&e.detail.value&&!(0,f.Hs)(e.detail.value)&&(0,v.B)(this,"hass-more-info",{entityId:e.detail.value})}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}ha-chart-base{--chart-max-height:none}`}]}}),(0,b.f)(n.oi));i()}catch(e){i(e)}}))},48066:function(e,t,a){let i;function s(e,t,a="Roboto, Noto, sans-serif"){i||(i=document.createElement("canvas"));const s=i.getContext("2d");if(!s)return 0;s.font=`${t}px ${a}`;const n=s.measureText(e);return Math.ceil(Math.max(n.actualBoundingBoxRight+n.actualBoundingBoxLeft,n.width))}a.d(t,{U:()=>s})}};
//# sourceMappingURL=55213.6ef2302a9edef32d.js.map