"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["10427"],{55428:function(n,t,e){e.d(t,{j:()=>u});let o={};function u(){return o}},18492:function(n,t,e){e.d(t,{d:()=>u});e(9359),e(1331),e(70104);var o=e(53907);function u(n,...t){const e=o.L.bind(null,n||t.find((n=>"object"==typeof n)));return t.map(e)}},32424:function(n,t,e){e.d(t,{E:()=>i});var o=e(53907),u=e(18112);function i(n,t,e){const i=(0,u.Q)(n,null==e?void 0:e.in);return isNaN(t)?(0,o.L)((null==e?void 0:e.in)||n,NaN):t?(i.setDate(i.getDate()+t),i):i}},38836:function(n,t,e){e.d(t,{T:()=>i});var o=e(23711),u=e(76808);function i(n,t,e){return(0,o.n)(n,t*u.vh,e)}},23711:function(n,t,e){e.d(t,{n:()=>i});var o=e(53907),u=e(18112);function i(n,t,e){return(0,o.L)((null==e?void 0:e.in)||n,+(0,u.Q)(n)+t)}},23459:function(n,t,e){e.d(t,{z:()=>i});var o=e(53907),u=e(18112);function i(n,t,e){const i=(0,u.Q)(n,null==e?void 0:e.in);if(isNaN(t))return(0,o.L)((null==e?void 0:e.in)||n,NaN);if(!t)return i;const r=i.getDate(),l=(0,o.L)((null==e?void 0:e.in)||n,i.getTime());l.setMonth(i.getMonth()+t+1,0);return r>=l.getDate()?l:(i.setFullYear(l.getFullYear(),l.getMonth(),r),i)}},2425:function(n,t,e){e.d(t,{U:()=>u});var o=e(18112);function u(n,t){const e=+(0,o.Q)(n)-+(0,o.Q)(t);return e<0?-1:e>0?1:e}},76808:function(n,t,e){e.d(t,{I7:()=>l,dP:()=>u,jE:()=>o,vh:()=>r,yJ:()=>i});Math.pow(10,8);const o=6048e5,u=864e5,i=6e4,r=36e5,l=Symbol.for("constructDateFrom")},53907:function(n,t,e){e.d(t,{L:()=>u});var o=e(76808);function u(n,t){return"function"==typeof n?n(t):n&&"object"==typeof n&&o.I7 in n?n[o.I7](t):n instanceof Date?new n.constructor(t):new Date(t)}},78052:function(n,t,e){e.d(t,{w:()=>c});e(71695),e(47021);var o=e(18112);function u(n){const t=(0,o.Q)(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}var i=e(18492),r=e(76808),l=e(7591);function c(n,t,e){const[o,c]=(0,i.d)(null==e?void 0:e.in,n,t),a=(0,l.b)(o),s=(0,l.b)(c),d=+a-u(a),f=+s-u(s);return Math.round((d-f)/r.dP)}},13809:function(n,t,e){e.d(t,{j:()=>i});e(71695),e(47021);var o=e(18492),u=e(78052);function i(n,t,e){const[i,l]=(0,o.d)(null==e?void 0:e.in,n,t),c=r(i,l),a=Math.abs((0,u.w)(i,l));i.setDate(i.getDate()-c*a);const s=c*(a-Number(r(i,l)===-c));return 0===s?0:s}function r(n,t){const e=n.getFullYear()-t.getFullYear()||n.getMonth()-t.getMonth()||n.getDate()-t.getDate()||n.getHours()-t.getHours()||n.getMinutes()-t.getMinutes()||n.getSeconds()-t.getSeconds()||n.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}},14276:function(n,t,e){e.d(t,{_:()=>u});var o=e(18112);function u(n,t){return+(0,o.Q)(n)-+(0,o.Q)(t)}},6542:function(n,t,e){e.d(t,{d:()=>l});e(71695),e(47021);var o=e(18492),u=e(2425);function i(n,t,e){const[u,i]=(0,o.d)(null==e?void 0:e.in,n,t);return 12*(u.getFullYear()-i.getFullYear())+(u.getMonth()-i.getMonth())}var r=e(3938);function l(n,t,e){const[l,c,a]=(0,o.d)(null==e?void 0:e.in,n,n,t),s=(0,u.U)(c,a),d=Math.abs(i(c,a));if(d<1)return 0;1===c.getMonth()&&c.getDate()>27&&c.setDate(30),c.setMonth(c.getMonth()-s*d);let f=(0,u.U)(c,a)===-s;(0,r.h)(l)&&1===d&&1===(0,u.U)(l,a)&&(f=!1);const v=s*(d-+f);return 0===v?0:v}},96500:function(n,t,e){e.d(t,{i:()=>u});var o=e(18112);function u(n,t){const e=(0,o.Q)(n,null==t?void 0:t.in);return e.setHours(23,59,59,999),e}},2621:function(n,t,e){e.d(t,{V:()=>u});var o=e(18112);function u(n,t){const e=(0,o.Q)(n,null==t?void 0:t.in),u=e.getMonth();return e.setFullYear(e.getFullYear(),u+1,0),e.setHours(23,59,59,999),e}},86319:function(n,t,e){e.d(t,{b:()=>u});var o=e(18112);function u(n,t){return 1===(0,o.Q)(n,null==t?void 0:t.in).getDate()}},3938:function(n,t,e){e.d(t,{h:()=>r});var o=e(96500),u=e(2621),i=e(18112);function r(n,t){const e=(0,i.Q)(n,null==t?void 0:t.in);return+(0,o.i)(e,t)==+(0,u.V)(e,t)}},7591:function(n,t,e){e.d(t,{b:()=>u});var o=e(18112);function u(n,t){const e=(0,o.Q)(n,null==t?void 0:t.in);return e.setHours(0,0,0,0),e}},29558:function(n,t,e){e.d(t,{z:()=>i});var o=e(55428),u=e(18112);function i(n,t){var e,i,r,l,c,a;const s=(0,o.j)(),d=null!==(e=null!==(i=null!==(r=null!==(l=null==t?void 0:t.weekStartsOn)&&void 0!==l?l:null==t||null===(c=t.locale)||void 0===c||null===(c=c.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==r?r:s.weekStartsOn)&&void 0!==i?i:null===(a=s.locale)||void 0===a||null===(a=a.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==e?e:0,f=(0,u.Q)(n,null==t?void 0:t.in),v=f.getDay(),g=(v<d?7:0)+v-d;return f.setDate(f.getDate()-g),f.setHours(0,0,0,0),f}},18112:function(n,t,e){e.d(t,{Q:()=>u});var o=e(53907);function u(n,t){return(0,o.L)(t||n,n)}}}]);
//# sourceMappingURL=10427.24f672f594c02ab7.js.map