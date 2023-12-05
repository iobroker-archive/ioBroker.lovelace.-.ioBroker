/*! For license information please see 49351.GxFjm3pOQ_g.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[49351],{30879:function(e,r,t){t.d(r,{D:function(){return x}});var i,n,s,a,c,o=t(33368),u=t(71650),l=t(69205),d=t(70906),h=t(43204),m=t(95260),p=t(88962),f=t(34541),g=t(47838),_=(t(76843),t(38103)),y=t(68144),v=t(83448),b=t(30153),k=t(47501),w=function(e){(0,l.Z)(t,e);var r=(0,d.Z)(t);function t(){var e;return(0,u.Z)(this,t),(e=r.apply(this,arguments)).indeterminate=!1,e.progress=0,e.density=0,e.closed=!1,e}return(0,o.Z)(t,[{key:"open",value:function(){this.closed=!1}},{key:"close",value:function(){this.closed=!0}},{key:"render",value:function(){var e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},r=48+4*this.density,t={width:"".concat(r,"px"),height:"".concat(r,"px")};return(0,y.dy)(i||(i=(0,p.Z)([' <div class="mdc-circular-progress ','" style="','" role="progressbar" aria-label="','" aria-valuemin="0" aria-valuemax="1" aria-valuenow="','"> '," "," </div>"])),(0,v.$)(e),(0,k.V)(t),(0,b.o)(this.ariaLabel),(0,b.o)(this.indeterminate?void 0:this.progress),this.renderDeterminateContainer(),this.renderIndeterminateContainer())}},{key:"renderDeterminateContainer",value:function(){var e=48+4*this.density,r=e/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,i=6.2831852*t,s=(1-this.progress)*i,a=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return(0,y.dy)(n||(n=(0,p.Z)([' <div class="mdc-circular-progress__determinate-container"> <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 '," ",'"> <circle class="mdc-circular-progress__determinate-track" cx="','" cy="','" r="','" stroke-width="','"></circle> <circle class="mdc-circular-progress__determinate-circle" cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div>'])),e,e,r,r,t,a,r,r,t,6.2831852*t,s,a)}},{key:"renderIndeterminateContainer",value:function(){return(0,y.dy)(s||(s=(0,p.Z)([' <div class="mdc-circular-progress__indeterminate-container"> <div class="mdc-circular-progress__spinner-layer"> '," </div> </div>"])),this.renderIndeterminateSpinnerLayer())}},{key:"renderIndeterminateSpinnerLayer",value:function(){var e=48+4*this.density,r=e/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,i=6.2831852*t,n=.5*i,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return(0,y.dy)(a||(a=(0,p.Z)([' <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 '," ",'"> <circle cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div> <div class="mdc-circular-progress__gap-patch"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 '," ",'"> <circle cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div> <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 '," ",'"> <circle cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div>'])),e,e,r,r,t,i,n,s,e,e,r,r,t,i,n,.8*s,e,e,r,r,t,i,n,s)}},{key:"update",value:function(e){(0,f.Z)((0,g.Z)(t.prototype),"update",this).call(this,e),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}]),t}(y.oi);(0,h.__decorate)([(0,m.Cb)({type:Boolean,reflect:!0})],w.prototype,"indeterminate",void 0),(0,h.__decorate)([(0,m.Cb)({type:Number,reflect:!0})],w.prototype,"progress",void 0),(0,h.__decorate)([(0,m.Cb)({type:Number,reflect:!0})],w.prototype,"density",void 0),(0,h.__decorate)([(0,m.Cb)({type:Boolean,reflect:!0})],w.prototype,"closed",void 0),(0,h.__decorate)([_.L,(0,m.Cb)({type:String,attribute:"aria-label"})],w.prototype,"ariaLabel",void 0);var Z=(0,y.iv)(c||(c=(0,p.Z)([".mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary,#6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0s cubic-bezier(.4, 0, .6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset .5s 0s cubic-bezier(0, 0, .2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1.568s linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color,transparent)}"]))),x=function(e){(0,l.Z)(t,e);var r=(0,d.Z)(t);function t(){return(0,u.Z)(this,t),r.apply(this,arguments)}return(0,o.Z)(t)}(w);x.styles=[Z],x=(0,h.__decorate)([(0,m.Mo)("mwc-circular-progress")],x)},31206:function(e,r,t){t.r(r),t.d(r,{HaCircularProgress:function(){return g}});var i,n=t(88962),s=t(33368),a=t(71650),c=t(82390),o=t(69205),u=t(70906),l=t(91808),d=t(34541),h=t(47838),m=(t(97393),t(30879)),p=t(68144),f=t(95260),g=(0,l.Z)([(0,f.Mo)("ha-circular-progress")],(function(e,r){var t=function(r){(0,o.Z)(i,r);var t=(0,u.Z)(i);function i(){var r;(0,a.Z)(this,i);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s)),e((0,c.Z)(r)),r}return(0,s.Z)(i)}(r);return{F:t,d:[{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"active",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)()],key:"alt",value:function(){return"Loading"}},{kind:"field",decorators:[(0,f.Cb)()],key:"size",value:function(){return"medium"}},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,d.Z)((0,h.Z)(t),"styles",this),(0,p.iv)(i||(i=(0,n.Z)([":host{overflow:hidden}"])))]}}]}}),m.D)},58763:function(e,r,t){t.d(r,{Nu:function(){return k},Vk:function(){return p},xS:function(){return g},xj:function(){return w}});var i=t(53709),n=t(40039),s=t(71650),a=t(33368),c=(t(40271),t(46798),t(9849),t(13526),t(85717),t(65974),t(97393),t(37313),t(87438),t(22890),t(80628),t(36513),t(50289),t(94167),t(91989),t(60163),t(85472),t(90126),t(46349),t(70320),t(58831)),o=t(41826),u=t(91741),l=["climate","humidifier","water_heater"],d=["climate","humidifier","input_datetime","thermostat","water_heater","person","device_tracker"],h=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode","action","current_humidity"],m=function(e,r){return!e.states[r]||d.includes((0,c.M)(r))},p=function(e,r,t,i,n){var s={type:"history/stream",entity_ids:n,start_time:t.toISOString(),end_time:i.toISOString(),minimal_response:!0,no_attributes:!n.some((function(r){return m(e,r)}))},a=new f(e);return e.connection.subscribeMessage((function(e){return r(a.processMessage(e))}),s)},f=function(){function e(r,t){(0,s.Z)(this,e),this.hass=void 0,this.hoursToShow=void 0,this.combinedHistory=void 0,this.hass=r,this.hoursToShow=t,this.combinedHistory={}}return(0,a.Z)(e,[{key:"processMessage",value:function(e){if(!this.combinedHistory||!Object.keys(this.combinedHistory).length)return this.combinedHistory=e.states,this.combinedHistory;if(!Object.keys(e.states).length)return this.combinedHistory;for(var r=this.hoursToShow?((new Date).getTime()-3600*this.hoursToShow*1e3)/1e3:void 0,t={},i=0,n=Object.keys(this.combinedHistory);i<n.length;i++){t[n[i]]=[]}for(var s=0,a=Object.keys(e.states);s<a.length;s++){t[a[s]]=[]}for(var c=0,o=Object.keys(t);c<o.length;c++){var u=o[c];if(u in this.combinedHistory&&u in e.states){var l=this.combinedHistory[u],d=l[l.length-1];t[u]=l.concat(e.states[u]),e.states[u][0].lu<d.lu&&(t[u]=t[u].sort((function(e,r){return e.lu-r.lu})))}else u in this.combinedHistory?t[u]=this.combinedHistory[u]:t[u]=e.states[u];if(r&&u in this.combinedHistory){var h=t[u].filter((function(e){return e.lu<r}));if(!h.length)continue;if(t[u]=t[u].filter((function(e){return e.lu>=r})),t[u].length&&t[u][0].lu===r)continue;var m=h[h.length-1];m.lu=r,t[u].unshift(m)}}return this.combinedHistory=t,this.combinedHistory}}]),e}(),g=function(e,r,t,i){var n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],a=arguments.length>6?arguments[6]:void 0,c={type:"history/stream",entity_ids:i,start_time:new Date((new Date).getTime()-3600*t*1e3).toISOString(),minimal_response:n,significant_changes_only:s,no_attributes:null!=a?a:!i.some((function(r){return m(e,r)}))},o=new f(e,t);return e.connection.subscribeMessage((function(e){return r(o.processMessage(e))}),c)},_=function(e,r){return e.state===r.state&&(!e.attributes||!r.attributes||h.every((function(t){return e.attributes[t]===r.attributes[t]})))},y=["counter","input_number","number"],v=function(e){return y.includes(e)},b=function(e){return"unit_of_measurement"in e||"state_class"in e},k=function(e,r,t,s){var a={},d=[];return r?(Object.keys(r).forEach((function(l){var h,m=r[l];if(0!==m.length){var p,f=(0,c.M)(l),g=l in e.states?e.states[l]:void 0,_=g||v(f)?void 0:m.find((function(e){return e.a&&b(e.a)})),y=v(f)||null!=g&&b(g.attributes)||null!=g&&"sensor"===f&&function(e,r){return null!=e.attributes.device_class&&r.includes(e.attributes.device_class)}(g,s)||null!=_;p=y?(null==g?void 0:g.attributes.unit_of_measurement)||(null==_?void 0:_.a.unit_of_measurement)||" ":{zone:t("ui.dialogs.more_info_control.zone.graph_unit"),climate:e.config.unit_system.temperature,humidifier:"%",water_heater:e.config.unit_system.temperature}[f];var k=null===(h=(null==g?void 0:g.attributes)||(null==_?void 0:_.a))||void 0===h?void 0:h.device_class,Z=w(p,k);if(p)if(Z in a&&l in a[Z]){var x;(x=a[Z][l]).push.apply(x,(0,i.Z)(m))}else Z in a||(a[Z]={}),a[Z][l]=m;else d.push(function(e,r,t,i,s,a,c){var l,d=[],h=a[0],m=(0,n.Z)(a);try{for(m.s();!(l=m.n()).done;){var p=l.value;if(!(d.length>0&&p.s===d[d.length-1].state)){var f={};null!=c&&c.attributes.device_class&&(f.device_class=null==c?void 0:c.attributes.device_class),d.push({state_localize:(0,o.computeStateDisplayFromEntityAttributes)(e,r,t,i[s],s,Object.assign(Object.assign({},p.a||h.a),f),p.s),state:p.s,last_changed:1e3*(p.lc?p.lc:p.lu)})}}}catch(g){m.e(g)}finally{m.f()}return{name:(0,u.a)(s,(null==c?void 0:c.attributes)||h.a),entity_id:s,data:d}}(t,e.locale,e.config,e.entities,l,m,g))}})),{line:Object.keys(a).map((function(r){var t=r.split("_");return function(e,r,t,i){var s=[];return Object.keys(t).forEach((function(e){var r,a=t[e],o=a[0],d=(0,c.M)(e),m=[],p=(0,n.Z)(a);try{for(p.s();!(r=p.n()).done;){var f=r.value,g=void 0;if(l.includes(d)){g={state:f.s,last_changed:1e3*f.lu,attributes:{}};for(var y=0,v=h;y<v.length;y++){var b=v[y];b in f.a&&(g.attributes[b]=f.a[b])}}else g={state:f.s,last_changed:1e3*(f.lc?f.lc:f.lu),attributes:{}};m.length>1&&_(g,m[m.length-1])&&_(g,m[m.length-2])||m.push(g)}}catch(w){p.e(w)}finally{p.f()}var k=e in i?i[e].attributes:"friendly_name"in o.a?o.a:void 0;s.push({domain:d,name:(0,u.a)(e,k||{}),entity_id:e,states:m})})),{unit:e,device_class:r,identifier:Object.keys(t).join(""),data:s}}(t[0],t[1]||void 0,a[r],e.states)})),timeline:d}):{line:[],timeline:[]}},w=function(e,r){return"".concat(e,"_").concat(r||"")}},22486:function(e,r,t){t.r(r),t.d(r,{HuiGraphHeaderFooter:function(){return I}});var i,n,s,a,c,o,u,l,d,h=t(53709),m=t(88962),p=t(99312),f=t(81043),g=t(33368),_=t(71650),y=t(82390),v=t(69205),b=t(70906),k=t(91808),w=t(34541),Z=t(47838),x=(t(97393),t(51358),t(46798),t(47084),t(5239),t(98490),t(76843),t(40271),t(51467),t(85717),t(68144)),C=t(95260),H=t(7323),z=t(58831),M=(t(31206),t(58763)),S=t(15688),j=(t(34997),t(9849),t(12148),t(67712),t(87438),t(22890),t(50289),t(94167),t(36513),t(32550),t(46349),t(70320),t(94570),function(e){return e.reduce((function(e,r){return e+parseFloat(r.state)}),0)/e.length}),O=function(e){return parseFloat(e[e.length-1].state)||0},N=function(e,r,t,i,n){e.forEach((function(e){e.state=Number(e.state)})),e=e.filter((function(e){return!Number.isNaN(e.state)}));var s=void 0!==(null==n?void 0:n.min)?n.min:Math.min.apply(Math,(0,h.Z)(e.map((function(e){return e.state})))),a=void 0!==(null==n?void 0:n.max)?n.max:Math.max.apply(Math,(0,h.Z)(e.map((function(e){return e.state})))),c=(new Date).getTime(),o=function(e,t,i){var n=c-new Date(t.last_changed).getTime(),s=Math.abs(n/36e5-r);return i?(s=60*(s-Math.floor(s)),s=Number((10*Math.round(s/10)).toString()[0])):s=Math.floor(s),e[s]||(e[s]=[]),e[s].push(t),e};if(e=e.reduce((function(e,r){return o(e,r,!1)}),[]),i>1&&(e=e.map((function(e){return e.reduce((function(e,r){return o(e,r,!0)}),[])}))),e.length)return function(e,r,t,i,n,s){var a=[],c=(s-n)/80;c=0!==c?c:80;var o=t/(r-(1===i?1:0));o=isFinite(o)?o:t;for(var u=e.filter(Boolean)[0],l=[j(u),O(u)],d=function e(r,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(s>1&&r)return r.forEach((function(r,i){return e(r,t,i,s-1)}));var u=o*(t+i/6);r&&(l=[j(r),O(r)]);var d=82.5-((r?l[0]:l[1])-n)/c;return a.push([u,d])},h=0;h<e.length;h+=1)d(e[h],h,0,i);return 1===a.length&&(a[1]=[t,a[0][1]]),a.push([t,a[a.length-1][1]]),a}(e,r,t,i,s,a)},B=t(40039),D=((0,k.Z)([(0,C.Mo)("hui-graph-base")],(function(e,r){var t=function(r){(0,v.Z)(i,r);var t=(0,b.Z)(i);function i(){var r;(0,_.Z)(this,i);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return r=t.call.apply(t,[this].concat(s)),e((0,y.Z)(r)),r}return(0,g.Z)(i)}(r);return{F:t,d:[{kind:"field",decorators:[(0,C.Cb)()],key:"coordinates",value:void 0},{kind:"field",decorators:[(0,C.SB)()],key:"_path",value:void 0},{kind:"method",key:"render",value:function(){return(0,x.dy)(i||(i=(0,m.Z)([" "," "])),this._path?(0,x.YP)(n||(n=(0,m.Z)(['<svg width="100%" height="100%" viewBox="0 0 500 100"> <g> <mask id="fill"> <path class="fill" fill="white" d="',' L 500, 100 L 0, 100 z"/> </mask> <rect height="100%" width="100%" id="fill-rect" fill="var(--accent-color)" mask="url(#fill)"></rect> <mask id="line"> <path fill="none" stroke="var(--accent-color)" stroke-width="','" stroke-linecap="round" stroke-linejoin="round" d="','"></path> </mask> <rect height="100%" width="100%" id="rect" fill="var(--accent-color)" mask="url(#line)"></rect> </g> </svg>'])),this._path,5,this._path):(0,x.YP)(s||(s=(0,m.Z)(['<svg width="100%" height="100%" viewBox="0 0 500 100"></svg>']))))}},{kind:"method",key:"willUpdate",value:function(e){this.coordinates&&e.has("coordinates")&&(this._path=function(e){if(!e.length)return"";var r,t,i="",n=e.filter(Boolean)[0];i+="M ".concat(n[0],",").concat(n[1]);var s,a,c,o,u,l=(0,B.Z)(e);try{for(l.s();!(s=l.n()).done;)r=s.value,a=n[0],c=n[1],o=r[0],u=r[1],i+=" ".concat((t=[(a-o)/2+o,(c-u)/2+u])[0],",").concat(t[1]),i+=" Q".concat(r[0],",").concat(r[1]),n=r}catch(d){l.e(d)}finally{l.f()}return i+" ".concat(r[0],",").concat(r[1])}(this.coordinates))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,x.iv)(a||(a=(0,m.Z)([":host{display:flex;width:100%}.fill{opacity:.1}"])))}}]}}),x.oi),["counter","input_number","number","sensor"]),I=(0,k.Z)([(0,C.Mo)("hui-graph-header-footer")],(function(e,r){var i,n=function(r){(0,v.Z)(i,r);var t=(0,b.Z)(i);function i(){var r;(0,_.Z)(this,i);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return r=t.call.apply(t,[this].concat(s)),e((0,y.Z)(r)),r}return(0,g.Z)(i)}(r);return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:(i=(0,f.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(42850),t.e(78133),t.e(50731),t.e(40163),t.e(74535),t.e(84968)]).then(t.bind(t,87071));case 2:return e.abrupt("return",document.createElement("hui-graph-footer-editor"));case 3:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(e,r,t){return{type:"graph",entity:(0,S.j)(e,1,r,t,D,(function(e){return!isNaN(Number(e.state))&&!!e.attributes.unit_of_measurement}))[0]||""}}},{kind:"field",decorators:[(0,C.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"type",value:void 0},{kind:"field",decorators:[(0,C.Cb)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,C.SB)()],key:"_coordinates",value:void 0},{kind:"field",key:"_error",value:void 0},{kind:"field",key:"_interval",value:void 0},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){if(null==e||!e.entity||!D.includes((0,z.M)(e.entity)))throw new Error("Specify an entity from within the sensor domain");var r=Object.assign({detail:1,hours_to_show:24},e);r.hours_to_show=Number(r.hours_to_show),r.detail=1===r.detail||2===r.detail?r.detail:1,this._config=r}},{kind:"method",key:"render",value:function(){return this._config&&this.hass?this._error?(0,x.dy)(c||(c=(0,m.Z)(['<div class="errors">',"</div>"])),this._error):this._coordinates?this._coordinates.length?(0,x.dy)(l||(l=(0,m.Z)([' <hui-graph-base .coordinates="','"></hui-graph-base> '])),this._coordinates):(0,x.dy)(u||(u=(0,m.Z)([' <div class="container"> <div class="info">No state history found.</div> </div> ']))):(0,x.dy)(o||(o=(0,m.Z)([' <div class="container"> <ha-circular-progress active size="small"></ha-circular-progress> </div> ']))):x.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,w.Z)((0,Z.Z)(n.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._config&&this._subscribeHistory()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,w.Z)((0,Z.Z)(n.prototype),"disconnectedCallback",this).call(this),this._unsubscribeHistory()}},{kind:"method",key:"_subscribeHistory",value:function(){var e=this;(0,H.p)(this.hass,"history")&&!this._subscribed&&this._config&&(this._subscribed=(0,M.xS)(this.hass,(function(r){e._subscribed&&e._config&&(e._coordinates=function(e,r,t,i,n){if(e){var s=e.map((function(e){return{state:Number(e.s),last_changed:1e3*e.lu}}));return N(s,r,t,i,n)}}(r[e._config.entity],e._config.hours_to_show,500,e._config.detail,e._config.limits)||[])}),this._config.hours_to_show,[this._config.entity]).catch((function(r){e._subscribed=void 0,e._error=r})),this._setRedrawTimer())}},{kind:"method",key:"_redrawGraph",value:function(){this._coordinates&&(this._coordinates=(0,h.Z)(this._coordinates))}},{kind:"method",key:"_setRedrawTimer",value:function(){var e=this;clearInterval(this._interval),this._interval=window.setInterval((function(){return e._redrawGraph()}),this._config.hours_to_show>24?36e5:6e4)}},{kind:"method",key:"_unsubscribeHistory",value:function(){clearInterval(this._interval),this._subscribed&&(this._subscribed.then((function(e){return null==e?void 0:e()})),this._subscribed=void 0)}},{kind:"method",key:"updated",value:function(e){if(this._config&&this.hass&&e.has("_config")){var r=e.get("_config");r&&this._subscribed&&r.entity===this._config.entity||(this._unsubscribeHistory(),this._subscribeHistory())}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,x.iv)(d||(d=(0,m.Z)(["ha-circular-progress{position:absolute;top:calc(50% - 14px)}.container{display:flex;justify-content:center;position:relative;padding-bottom:20%}.info{position:absolute;top:calc(50% - 16px);color:var(--secondary-text-color)}"])))}}]}}),x.oi)}}]);
//# sourceMappingURL=49351.GxFjm3pOQ_g.js.map