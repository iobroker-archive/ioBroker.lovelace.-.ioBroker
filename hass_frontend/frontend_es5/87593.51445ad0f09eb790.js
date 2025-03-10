"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["87593"],{57982:function(e,t,i){i.a(e,(async function(e,o){try{i.d(t,{t:()=>l});var r=i(46467),a=i(33570),n=e([r,a]);function l(e,t,i,o){const n=o/60/24,s=new Date(e);if(n>88)return 0===s.getMonth()?`{bold|${(0,r.NC)(s,t,i)}}`:(0,r.Nh)(s,t,i);if(n>35)return 1===s.getDate()?`{bold|${(0,r.ud)(s,t,i)}}`:(0,r.ud)(s,t,i);if(n>7){const e=(0,r.ud)(s,t,i);return 1===s.getDate()?`{bold|${e}}`:e}return n>2?(0,r.U8)(s,t,i):o&&o<5?(0,a.Vu)(s,t,i):0===s.getHours()&&0===s.getMinutes()&&0===s.getSeconds()?`{bold|${(0,r.ud)(s,t,i)}}`:(0,a.mr)(s,t,i)}[r,a]=n.then?(await n)():n,o()}catch(s){o(s)}}))},25179:function(e,t,i){i.a(e,(async function(e,o){try{i.d(t,{Q:()=>T});var r=i(61701),a=i(72621),n=(i(71695),i(92745),i(52805),i(9359),i(56475),i(1331),i(31526),i(70104),i(48136),i(19423),i(40251),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),i(47021),i(60738)),s=i(18672),l=i(5376),d=i(57243),c=i(50778),h=i(35359),u=i(69634),p=i(50875),v=i(36522),y=i(62201),g=i(30635),m=i(94134),f=(i(23334),i(57982)),k=i(95262),x=(i(60370),e([s,f]));[s,f]=x.then?(await x)():x;let _,b,w,C,L,Z,S=e=>e;const V="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",P="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",D="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z",T=3e5,$=10,A=6,M=300;(0,r.Z)([(0,c.Mo)("ha-chart-base")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"data",value(){return[]}},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:String})],key:"height",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:"expand-legend",type:Boolean})],key:"expandLegend",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"extraComponents",value:void 0},{kind:"field",decorators:[(0,c.SB)(),(0,n.F_)({context:g.LW,subscribe:!0})],key:"_themes",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_isZoomed",value(){return!1}},{kind:"field",decorators:[(0,c.SB)()],key:"_zoomRatio",value(){return 1}},{kind:"field",decorators:[(0,c.SB)()],key:"_minutesDifference",value(){return 1440}},{kind:"field",decorators:[(0,c.SB)()],key:"_hiddenDatasets",value(){return new Set}},{kind:"field",key:"_modifierPressed",value(){return!1}},{kind:"field",key:"_isTouchDevice",value(){return"ontouchstart"in window}},{kind:"field",key:"_lastTapTime",value:void 0},{kind:"field",key:"_resizeController",value(){return new s.Z(this,{callback:()=>{var e;return null===(e=this.chart)||void 0===e?void 0:e.resize()}})}},{kind:"field",key:"_loading",value(){return!1}},{kind:"field",key:"_reducedMotion",value(){return!1}},{kind:"field",key:"_listeners",value(){return[]}},{kind:"field",key:"_originalZrFlush",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){var e;for((0,a.Z)(o,"disconnectedCallback",this,3)([]);this._listeners.length;)this._listeners.pop()();null===(e=this.chart)||void 0===e||e.dispose(),this.chart=void 0,this._originalZrFlush=void 0}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(o,"connectedCallback",this,3)([]),this.hasUpdated&&this._setupChart(),this._listeners.push((0,y.K)("(prefers-reduced-motion)",(e=>{this._reducedMotion!==e&&(this._reducedMotion=e,this._setChartOptions({animation:!this._reducedMotion}))})));const e=e=>{var t,i;!this._modifierPressed&&(m.V&&"Meta"===e.key||!m.V&&"Control"===e.key)&&(this._modifierPressed=!0,null!==(t=this.options)&&void 0!==t&&t.dataZoom||this._setChartOptions({dataZoom:this._getDataZoomConfig()}),null===(i=this.chart)||void 0===i||i.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:!0}))},t=e=>{var t,i;this._modifierPressed&&(m.V&&"Meta"===e.key||!m.V&&"Control"===e.key)&&(this._modifierPressed=!1,null!==(t=this.options)&&void 0!==t&&t.dataZoom||this._setChartOptions({dataZoom:this._getDataZoomConfig()}),null===(i=this.chart)||void 0===i||i.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:!1}))};window.addEventListener("keydown",e),window.addEventListener("keyup",t),this._listeners.push((()=>window.removeEventListener("keydown",e)),(()=>window.removeEventListener("keyup",t)))}},{kind:"method",key:"firstUpdated",value:function(){this._setupChart()}},{kind:"method",key:"willUpdate",value:function(e){if(!this.chart)return;if(e.has("_themes"))return void this._setupChart();let t={};(e.has("data")||e.has("_hiddenDatasets"))&&(t.series=this._getSeries()),e.has("options")?t=Object.assign(Object.assign({},t),this._createOptions()):this._isTouchDevice&&e.has("_isZoomed")&&(t.dataZoom=this._getDataZoomConfig()),Object.keys(t).length>0&&this._setChartOptions(t)}},{kind:"method",key:"render",value:function(){return(0,d.dy)(_||(_=S` <div class="container ${0}" style="${0}"> <div class="chart-container" style="${0}"> <div class="chart"></div> </div> ${0} ${0} </div> `),(0,h.$)({"has-height":!!this.height}),(0,u.V)({height:this.height}),(0,u.V)({height:this.height?void 0:`${this._getDefaultHeight()}px`}),this._renderLegend(),this._isZoomed?(0,d.dy)(b||(b=S`<ha-icon-button class="zoom-reset" .path="${0}" @click="${0}" title="${0}"></ha-icon-button>`),D,this._handleZoomReset,this.hass.localize("ui.components.history_charts.zoom_reset")):d.Ld)}},{kind:"method",key:"_renderLegend",value:function(){var e;if(null===(e=this.options)||void 0===e||!e.legend||!this.data)return d.Ld;const t=(0,k.r)(this.options.legend)[0];if(!t.show)return d.Ld;const i=(0,k.r)(this.data),o=t.data||i.filter((e=>{var t;return(null===(t=e.data)||void 0===t?void 0:t.length)&&(e.id||e.name)})).map((e=>{var t;return null!==(t=e.name)&&void 0!==t?t:e.id}))||[],r=window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches?A:$;return(0,d.dy)(w||(w=S`<div class="chart-legend"> <ul> ${0} ${0} </ul> </div>`),o.map(((e,t)=>{var o;if(!this.expandLegend&&t>=r)return d.Ld;const a=i.find((t=>t.id===e||t.name===e)),n=null==a?void 0:a.color,s=null==a||null===(o=a.itemStyle)||void 0===o?void 0:o.borderColor;return(0,d.dy)(C||(C=S`<li .name="${0}" @click="${0}" class="${0}" .title="${0}"> <div class="bullet" style="${0}"></div> <div class="label">${0}</div> </li>`),e,this._legendClick,(0,h.$)({hidden:this._hiddenDatasets.has(e)}),e,(0,u.V)({backgroundColor:n,borderColor:s||n}),e)})),o.length>r?(0,d.dy)(L||(L=S`<li> <ha-assist-chip @click="${0}" filled label="${0}"> <ha-svg-icon slot="trailing-icon" .path="${0}"></ha-svg-icon> </ha-assist-chip> </li>`),this._toggleExpandedLegend,this.expandLegend?this.hass.localize("ui.components.history_charts.collapse_legend"):`${this.hass.localize("ui.components.history_charts.expand_legend")} (${o.length-r})`,this.expandLegend?P:V):d.Ld)}},{kind:"field",key:"_formatTimeLabel",value(){return e=>(0,f.t)(e,this.hass.locale,this.hass.config,this._minutesDifference*this._zoomRatio)}},{kind:"method",key:"_setupChart",value:async function(){if(this._loading)return;const e=this.renderRoot.querySelector(".chart");this._loading=!0;try{var t,o;this.chart&&this.chart.dispose();const r=(await Promise.all([i.e("79525"),i.e("50382"),i.e("77535"),i.e("38152")]).then(i.bind(i,85803))).default;null!==(t=this.extraComponents)&&void 0!==t&&t.length&&r.use(this.extraComponents),r.registerTheme("custom",this._createTheme()),this.chart=r.init(e,"custom"),this.chart.on("datazoom",(e=>{var t,i;const{start:o,end:r}=null!==(t=null===(i=e.batch)||void 0===i?void 0:i[0])&&void 0!==t?t:e;this._isZoomed=0!==o||100!==r,this._zoomRatio=(r-o)/100})),this.chart.on("click",(e=>{(0,v.B)(this,"chart-click",e)})),this.chart.getZr().on("dblclick",this._handleClickZoom),this._isTouchDevice&&this.chart.getZr().on("click",(e=>{e.zrByTouch&&(this._lastTapTime&&Date.now()-this._lastTapTime<M?this._handleClickZoom(e):this._lastTapTime=Date.now())}));const a=(0,k.r)((null===(o=this.options)||void 0===o?void 0:o.legend)||[])[0];Object.entries((null==a?void 0:a.selected)||{}).forEach((([e,t])=>{!1===t&&this._hiddenDatasets.add(e)})),this.chart.setOption(Object.assign(Object.assign({},this._createOptions()),{},{series:this._getSeries()}))}finally{this._loading=!1}}},{kind:"method",key:"_getDataZoomConfig",value:function(){var e,t,i,o,r,a;const n=null!==(e=null===(t=this.options)||void 0===t||null===(t=t.xAxis)||void 0===t?void 0:t[0])&&void 0!==e?e:null===(i=this.options)||void 0===i?void 0:i.xAxis,s=null!==(o=null===(r=this.options)||void 0===r||null===(r=r.yAxis)||void 0===r?void 0:r[0])&&void 0!==o?o:null===(a=this.options)||void 0===a?void 0:a.yAxis;if("value"!==(null==n?void 0:n.type)||"category"!==(null==s?void 0:s.type))return{id:"dataZoom",type:"inside",orient:"horizontal",filterMode:"none",moveOnMouseMove:!this._isTouchDevice||this._isZoomed,preventDefaultMouseMove:!this._isTouchDevice||this._isZoomed,zoomLock:!this._isTouchDevice&&!this._modifierPressed}}},{kind:"method",key:"_createOptions",value:function(){var e,t;let i=null===(e=this.options)||void 0===e?void 0:e.xAxis;i&&(i=Array.isArray(i)?i:[i],i=i.map((e=>{if("time"!==e.type||!1===e.show)return e;e.max&&e.min&&(this._minutesDifference=(0,l.X)(e.max,e.min));const t=this._minutesDifference/60/24;let i;return t&&(i=t>=89?24192e5:t>2?864e5:void 0),Object.assign(Object.assign({axisLine:{show:!1},splitLine:{show:!0}},e),{},{axisLabel:Object.assign({formatter:this._formatTimeLabel,rich:{bold:{fontWeight:"bold"}},hideOverlap:!0},e.axisLabel),minInterval:i})})));const o=Object.assign(Object.assign({animation:!this._reducedMotion,darkMode:null!==(t=this._themes.darkMode)&&void 0!==t&&t,aria:{show:!0},dataZoom:this._getDataZoomConfig(),toolbox:{top:1/0,left:1/0,feature:{dataZoom:{show:!0,yAxisIndex:!1,filterMode:"none"}},iconStyle:{opacity:0}}},this.options),{},{legend:{show:!1},xAxis:i});if(window.matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches&&o.tooltip){const e=Array.isArray(o.tooltip)?o.tooltip:[o.tooltip];e.forEach((e=>{e.confine=!0,e.appendTo=void 0,e.triggerOn="click"})),o.tooltip=e}return o}},{kind:"method",key:"_createTheme",value:function(){const e=getComputedStyle(this);return{color:(0,p.o9)(e),backgroundColor:"transparent",textStyle:{color:e.getPropertyValue("--primary-text-color"),fontFamily:"Roboto, Noto, sans-serif"},title:{textStyle:{color:e.getPropertyValue("--primary-text-color")},subtextStyle:{color:e.getPropertyValue("--secondary-text-color")}},line:{lineStyle:{width:1.5},symbolSize:1,symbol:"circle",smooth:!1},bar:{itemStyle:{barBorderWidth:1.5}},categoryAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,color:e.getPropertyValue("--primary-text-color")},splitLine:{show:!1,lineStyle:{color:e.getPropertyValue("--divider-color")}},splitArea:{show:!1,areaStyle:{color:[e.getPropertyValue("--divider-color")+"3F",e.getPropertyValue("--divider-color")+"7F"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:e.getPropertyValue("--divider-color")}},axisTick:{show:!0,lineStyle:{color:e.getPropertyValue("--divider-color")}},axisLabel:{show:!0,color:e.getPropertyValue("--primary-text-color")},splitLine:{show:!0,lineStyle:{color:e.getPropertyValue("--divider-color")}},splitArea:{show:!1,areaStyle:{color:[e.getPropertyValue("--divider-color")+"3F",e.getPropertyValue("--divider-color")+"7F"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:e.getPropertyValue("--divider-color")}},axisTick:{show:!0,lineStyle:{color:e.getPropertyValue("--divider-color")}},axisLabel:{show:!0,color:e.getPropertyValue("--primary-text-color")},splitLine:{show:!0,lineStyle:{color:e.getPropertyValue("--divider-color")}},splitArea:{show:!1,areaStyle:{color:[e.getPropertyValue("--divider-color")+"3F",e.getPropertyValue("--divider-color")+"7F"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:e.getPropertyValue("--divider-color")}},axisTick:{show:!0,lineStyle:{color:e.getPropertyValue("--divider-color")}},axisLabel:{show:!0,color:e.getPropertyValue("--primary-text-color")},splitLine:{show:!0,lineStyle:{color:e.getPropertyValue("--divider-color")}},splitArea:{show:!1,areaStyle:{color:[e.getPropertyValue("--divider-color")+"3F",e.getPropertyValue("--divider-color")+"7F"]}}},legend:{textStyle:{color:e.getPropertyValue("--primary-text-color")},inactiveColor:e.getPropertyValue("--disabled-text-color"),pageIconColor:e.getPropertyValue("--primary-text-color"),pageIconInactiveColor:e.getPropertyValue("--disabled-text-color"),pageTextStyle:{color:e.getPropertyValue("--secondary-text-color")}},tooltip:{backgroundColor:e.getPropertyValue("--card-background-color"),borderColor:e.getPropertyValue("--divider-color"),textStyle:{color:e.getPropertyValue("--primary-text-color"),fontSize:12},axisPointer:{lineStyle:{color:e.getPropertyValue("--info-color")},crossStyle:{color:e.getPropertyValue("--info-color")}}},timeline:{}}}},{kind:"method",key:"_getSeries",value:function(){return Array.isArray(this.data)?this.data.filter((e=>{var t;return!this._hiddenDatasets.has(String(null!==(t=e.name)&&void 0!==t?t:e.id))})):this.data}},{kind:"method",key:"_getDefaultHeight",value:function(){return Math.max(this.clientWidth/2,200)}},{kind:"method",key:"_setChartOptions",value:function(e){if(!this.chart)return;if(!this._originalZrFlush){if((0,k.r)(this.data).reduce(((e,t)=>e+(t.data||[]).length),0)>1e4){const e=this.chart.getZr();this._originalZrFlush=e.flush,e.flush=()=>{setTimeout((()=>{var t;null===(t=this._originalZrFlush)||void 0===t||t.call(e)}),5)}}}const t=e.series?["series"]:[];this.chart.setOption(e,{replaceMerge:t})}},{kind:"field",key:"_handleClickZoom",value(){return e=>{if(!this.chart)return;const t=this._isZoomed?[0,100]:[e.offsetX/this.chart.getWidth()*100-15,e.offsetX/this.chart.getWidth()*100+15];this.chart.dispatchAction({type:"dataZoom",start:t[0],end:t[1]})}}},{kind:"method",key:"_handleZoomReset",value:function(){var e;null===(e=this.chart)||void 0===e||e.dispatchAction({type:"dataZoom",start:0,end:100})}},{kind:"method",key:"_legendClick",value:function(e){var t;if(!this.chart)return;const i=null===(t=e.currentTarget)||void 0===t?void 0:t.name;this._hiddenDatasets.has(i)?(this._hiddenDatasets.delete(i),(0,v.B)(this,"dataset-unhidden",{name:i})):(this._hiddenDatasets.add(i),(0,v.B)(this,"dataset-hidden",{name:i})),this.requestUpdate("_hiddenDatasets")}},{kind:"method",key:"_toggleExpandedLegend",value:function(){this.expandLegend=!this.expandLegend,setTimeout((()=>{var e;null===(e=this.chart)||void 0===e||e.resize()}))}},{kind:"field",static:!0,key:"styles",value(){return(0,d.iv)(Z||(Z=S`:host{display:block;position:relative;letter-spacing:normal}.container{display:flex;flex-direction:column;position:relative}.container.has-height{max-height:var(--chart-max-height,350px)}.chart-container{width:100%;max-height:var(--chart-max-height,350px)}.has-height .chart-container{flex:1}.chart{height:100%;width:100%}.zoom-reset{position:absolute;top:16px;right:4px;background:var(--card-background-color);border-radius:4px;--mdc-icon-button-size:32px;color:var(--primary-color);border:1px solid var(--divider-color)}.chart-legend{max-height:60%;overflow-y:auto;padding:12px 0 0;font-size:12px;color:var(--primary-text-color)}.chart-legend ul{margin:0;padding:0;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:8px}.chart-legend li{height:24px;cursor:pointer;display:inline-flex;align-items:center;padding:0 2px;box-sizing:border-box;max-width:220px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.chart-legend .hidden{color:var(--secondary-text-color)}.chart-legend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chart-legend .bullet{border-width:1px;border-style:solid;border-radius:50%;display:block;height:16px;width:16px;margin-right:4px;flex-shrink:0;box-sizing:border-box;margin-inline-end:4px;margin-inline-start:initial;direction:var(--direction)}.chart-legend .hidden .bullet{border-color:var(--secondary-text-color)!important;background-color:transparent!important}ha-assist-chip{height:100%;--_label-text-weight:500;--_leading-space:8px;--_trailing-space:8px;--_icon-label-space:4px}`))}}]}}),d.oi);o()}catch(_){o(_)}}))},60370:function(e,t,i){var o=i(61701),r=i(72621),a=(i(71695),i(19423),i(47021),i(10445)),n=i(57243),s=i(50778);let l,d,c,h,u=e=>e;(0,o.Z)([(0,s.Mo)("ha-assist-chip")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"filled",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"active",value(){return!1}},{kind:"field",static:!0,key:"styles",value(){return[...(0,r.Z)(i,"styles",this),(0,n.iv)(l||(l=u`:host{--md-sys-color-primary:var(--primary-text-color);--md-sys-color-on-surface:var(--primary-text-color);--md-assist-chip-container-shape:var(
          --ha-assist-chip-container-shape,
          16px
        );--md-assist-chip-outline-color:var(--outline-color);--md-assist-chip-label-text-weight:400}.filled{display:flex;pointer-events:none;border-radius:inherit;inset:0;position:absolute;background-color:var(--ha-assist-chip-filled-container-color)}::slotted([slot=icon]),::slotted([slot=trailing-icon]){display:flex;--mdc-icon-size:var(--md-input-chip-icon-size, 18px);font-size:var(--_label-text-size)!important}.trailing.icon ::slotted(*),.trailing.icon svg{margin-inline-end:unset;margin-inline-start:var(--_icon-label-space)}::before{background:var(--ha-assist-chip-container-color,transparent);opacity:var(--ha-assist-chip-container-opacity, 1)}:where(.active)::before{background:var(--ha-assist-chip-active-container-color);opacity:var(--ha-assist-chip-active-container-opacity)}.label{font-family:Roboto,sans-serif}`))]}},{kind:"method",key:"renderOutline",value:function(){return this.filled?(0,n.dy)(d||(d=u`<span class="filled"></span>`)):(0,r.Z)(i,"renderOutline",this,3)([])}},{kind:"method",key:"getContainerClasses",value:function(){return Object.assign(Object.assign({},(0,r.Z)(i,"getContainerClasses",this,3)([])),{},{active:this.active})}},{kind:"method",key:"renderPrimaryContent",value:function(){return(0,n.dy)(c||(c=u` <span class="leading icon" aria-hidden="true"> ${0} </span> <span class="label">${0}</span> <span class="touch"></span> <span class="trailing leading icon" aria-hidden="true"> ${0} </span> `),this.renderLeadingIcon(),this.label,this.renderTrailingIcon())}},{kind:"method",key:"renderTrailingIcon",value:function(){return(0,n.dy)(h||(h=u`<slot name="trailing-icon"></slot>`))}}]}}),a.X)},94134:function(e,t,i){i.d(t,{V:()=>o});i(19134),i(5740);const o=/Mac/i.test(navigator.userAgent)}}]);
//# sourceMappingURL=87593.51445ad0f09eb790.js.map