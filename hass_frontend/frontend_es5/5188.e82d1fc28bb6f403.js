"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["5188"],{5137:function(s,i,e){e.a(s,(async function(s,a){try{e.r(i);var t=e(61701),c=(e(19083),e(71695),e(92745),e(9359),e(31526),e(70104),e(40251),e(61006),e(47021),e(31622),e(57243)),o=e(50778),l=e(36522),n=(e(97206),e(73729)),h=(e(37583),e(56032)),d=e(74794),r=e(28008),u=s([h]);h=(u.then?(await u)():u)[0];let g,_,v,p,f,m,b,y,$,z,k,w,S,L,x,D,C,A=s=>s;const M="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",B="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z";(0,t.Z)([(0,o.Mo)("dialog-zha-reconfigure-device")],(function(s,i){return{F:class extends i{constructor(...i){super(...i),s(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_status",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_stages",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_clusterConfigurationStatuses",value(){return new Map}},{kind:"field",decorators:[(0,o.SB)()],key:"_params",value(){}},{kind:"field",decorators:[(0,o.SB)()],key:"_allSuccessful",value(){return!0}},{kind:"field",decorators:[(0,o.SB)()],key:"_showDetails",value(){return!1}},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"showDialog",value:function(s){this._params=s,this._clusterConfigurationStatuses=new Map,this._stages=void 0}},{kind:"method",key:"closeDialog",value:function(){this._unsubscribe(),this._params=void 0,this._status=void 0,this._stages=void 0,this._clusterConfigurationStatuses=void 0,this._showDetails=!1,this._allSuccessful=!0,(0,l.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var s;return this._params?(0,c.dy)(g||(g=A` <ha-dialog open @closed="${0}" .heading="${0}"> ${0} ${0} ${0} ${0} ${0} ${0} </ha-dialog> `),this.closeDialog,(0,n.i)(this.hass,this.hass.localize("ui.dialogs.zha_reconfigure_device.heading")+": "+(this._params.device.user_given_name||this._params.device.name)),this._status?"":(0,c.dy)(_||(_=A` <p> ${0} </p> <p> <em> ${0} </em> </p> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> `),this.hass.localize("ui.dialogs.zha_reconfigure_device.introduction"),this.hass.localize("ui.dialogs.zha_reconfigure_device.battery_device_warning"),this._startReconfiguration,this.hass.localize("ui.dialogs.zha_reconfigure_device.start_reconfiguration")),"started"===this._status?(0,c.dy)(v||(v=A` <div class="flex-container"> <ha-circular-progress indeterminate></ha-circular-progress> <div class="status"> <p> <b> ${0} </b> </p> <p> ${0} </p> </div> </div> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> <mwc-button slot="secondaryAction" @click="${0}"> ${0} </mwc-button> `),this.hass.localize("ui.dialogs.zha_reconfigure_device.in_progress"),this.hass.localize("ui.dialogs.zha_reconfigure_device.run_in_background"),this.closeDialog,this.hass.localize("ui.common.close"),this._toggleDetails,this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")):"","failed"===this._status?(0,c.dy)(p||(p=A` <div class="flex-container"> <ha-svg-icon .path="${0}" class="failed"></ha-svg-icon> <div class="status"> <p> ${0} </p> </div> </div> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> <mwc-button slot="secondaryAction" @click="${0}"> ${0} </mwc-button> `),B,this.hass.localize("ui.dialogs.zha_reconfigure_device.configuration_failed"),this.closeDialog,this.hass.localize("ui.common.close"),this._toggleDetails,this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")):"","finished"===this._status?(0,c.dy)(f||(f=A` <div class="flex-container"> <ha-svg-icon .path="${0}" class="success"></ha-svg-icon> <div class="status"> <p> ${0} </p> </div> </div> <mwc-button slot="primaryAction" @click="${0}"> ${0} </mwc-button> <mwc-button slot="secondaryAction" @click="${0}"> ${0} </mwc-button> `),M,this.hass.localize("ui.dialogs.zha_reconfigure_device.configuration_complete"),this.closeDialog,this.hass.localize("ui.common.close"),this._toggleDetails,this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")):"",this._stages?(0,c.dy)(m||(m=A` <div class="stages"> ${0} </div> `),this._stages.map((s=>(0,c.dy)(b||(b=A` <span class="stage"> <ha-svg-icon .path="${0}" class="success"></ha-svg-icon> ${0} </span> `),M,s)))):"",this._showDetails?(0,c.dy)(y||(y=A` <div class="wrapper"> <h2 class="grid-item"> ${0} </h2> <h2 class="grid-item"> ${0} </h2> <h2 class="grid-item"> ${0} </h2> ${0} </div> `),this.hass.localize("ui.dialogs.zha_reconfigure_device.cluster_header"),this.hass.localize("ui.dialogs.zha_reconfigure_device.bind_header"),this.hass.localize("ui.dialogs.zha_reconfigure_device.reporting_header"),null!==(s=this._clusterConfigurationStatuses)&&void 0!==s&&s.size?(0,c.dy)($||($=A` ${0} `),Array.from(this._clusterConfigurationStatuses.values()).map((s=>(0,c.dy)(z||(z=A` <div class="grid-item"> ${0} </div> <div class="grid-item"> ${0} </div> <div class="grid-item"> ${0} </div> `),s.cluster.name,void 0!==s.bindSuccess?s.bindSuccess?(0,c.dy)(k||(k=A` <span class="stage"> <ha-svg-icon .path="${0}" class="success"></ha-svg-icon> </span> `),M):(0,c.dy)(w||(w=A` <span class="stage"> <ha-svg-icon .path="${0}" class="failed"></ha-svg-icon> </span> `),B):"",s.attributes.size>0?(0,c.dy)(S||(S=A` <div class="attributes"> <div class="grid-item"> ${0} </div> <div class="grid-item"> <div> ${0} </div> </div> ${0} </div> `),this.hass.localize("ui.dialogs.zha_reconfigure_device.attribute"),this.hass.localize("ui.dialogs.zha_reconfigure_device.min_max_change"),Array.from(s.attributes.values()).map((s=>(0,c.dy)(L||(L=A` <span class="grid-item"> ${0}: ${0} </span> <div class="grid-item"> ${0}/${0}/${0} </div> `),s.name,"SUCCESS"===s.status?(0,c.dy)(x||(x=A` <span class="stage"> <ha-svg-icon .path="${0}" class="success"></ha-svg-icon> </span> `),M):(0,c.dy)(D||(D=A` <span class="stage"> <ha-tooltip placement="top" .content="${0}"> <ha-svg-icon .path="${0}" class="failed"></ha-svg-icon> </ha-tooltip> </span> `),s.status,B),s.min,s.max,s.change)))):"")))):""):""):c.Ld}},{kind:"method",key:"_startReconfiguration",value:async function(){this.hass&&this._params&&(this._clusterConfigurationStatuses=new Map((await(0,d.ez)(this.hass,this._params.device.ieee)).map((s=>[s.id,{cluster:s,bindSuccess:void 0,attributes:new Map}]))),this._subscribe(this._params),this._status="started")}},{kind:"method",key:"_handleMessage",value:function(s){if(s.type===d.H4)this._unsubscribe(),this._status=this._allSuccessful?"finished":"failed";else{const i=this._clusterConfigurationStatuses.get(s.zha_channel_msg_data.cluster_id);if(s.type===d.mS){this._stages||(this._stages=["binding"]);const e=s.zha_channel_msg_data.success;i.bindSuccess=e,this._allSuccessful=this._allSuccessful&&e}if(s.type===d.lu){this._stages&&!this._stages.includes("reporting")&&this._stages.push("reporting");const e=s.zha_channel_msg_data.attributes;Object.keys(e).forEach((s=>{const a=e[s];i.attributes.set(a.id,a),this._allSuccessful=this._allSuccessful&&!(a.status in["FAILURE","UNSUPPORTED_ATTRIBUTE","UNREPORTABLE_ATTRIBUTE"])}))}this.requestUpdate()}}},{kind:"method",key:"_unsubscribe",value:function(){this._subscribed&&(this._subscribed.then((s=>s())),this._subscribed=void 0)}},{kind:"method",key:"_subscribe",value:function(s){this.hass&&(this._subscribed=(0,d.$l)(this.hass,s.device.ieee,this._handleMessage.bind(this)))}},{kind:"method",key:"_toggleDetails",value:function(){this._showDetails=!this._showDetails}},{kind:"get",static:!0,key:"styles",value:function(){return[r.yu,(0,c.iv)(C||(C=A`.wrapper{display:grid;grid-template-columns:3fr 1fr 2fr}.attributes{display:grid;grid-template-columns:1fr 1fr}.grid-item{border:1px solid;padding:7px}.success{color:var(--success-color)}.failed{color:var(--warning-color)}.flex-container{display:flex;align-items:center}.stages{margin-top:16px}.stage ha-svg-icon{width:16px;height:16px}.stage{padding:8px}ha-svg-icon{width:68px;height:48px}.flex-container ha-circular-progress,.flex-container ha-svg-icon{margin-right:20px;margin-inline-end:20px;margin-inline-start:initial}`))]}}]}}),c.oi);a()}catch(g){a(g)}}))}}]);
//# sourceMappingURL=5188.e82d1fc28bb6f403.js.map