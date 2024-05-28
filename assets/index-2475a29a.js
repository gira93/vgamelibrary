(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ai(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const te={},Ut=[],Oe=()=>{},Ml=()=>!1,br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Oi=e=>e.startsWith("onUpdate:"),de=Object.assign,Pi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ll=Object.prototype.hasOwnProperty,W=(e,t)=>Ll.call(e,t),H=Array.isArray,Vt=e=>In(e)==="[object Map]",Qt=e=>In(e)==="[object Set]",fa=e=>In(e)==="[object Date]",V=e=>typeof e=="function",se=e=>typeof e=="string",Qe=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",$o=e=>(ee(e)||V(e))&&V(e.then)&&V(e.catch),Do=Object.prototype.toString,In=e=>Do.call(e),Fl=e=>In(e).slice(8,-1),zo=e=>In(e)==="[object Object]",Ci=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,on=Ai(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},jl=/-(\w)/g,Be=yr(e=>e.replace(jl,(t,n)=>n?n.toUpperCase():"")),$l=/\B([A-Z])/g,Mt=yr(e=>e.replace($l,"-$1").toLowerCase()),_r=yr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fr=yr(e=>e?`on${_r(e)}`:""),gt=(e,t)=>!Object.is(e,t),er=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ho=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},sr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ua;const Uo=()=>ua||(ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ri(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=se(r)?Ul(r):Ri(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(se(e)||ee(e))return e}const Dl=/;(?![^(]*\))/g,zl=/:([^]+)/,Hl=/\/\*[^]*?\*\//g;function Ul(e){const t={};return e.replace(Hl,"").split(Dl).forEach(n=>{if(n){const r=n.split(zl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function wr(e){let t="";if(se(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=wr(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bl=Ai(Vl);function Vo(e){return!!e||e===""}function Kl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Tn(e[r],t[r]);return n}function Tn(e,t){if(e===t)return!0;let n=fa(e),r=fa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Qe(e),r=Qe(t),n||r)return e===t;if(n=H(e),r=H(t),n||r)return n&&r?Kl(e,t):!1;if(n=ee(e),r=ee(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Tn(e[o],t[o]))return!1}}return String(e)===String(t)}function Ii(e,t){return e.findIndex(n=>Tn(n,t))}const Wl=e=>se(e)?e:e==null?"":H(e)||ee(e)&&(e.toString===Do||!V(e.toString))?JSON.stringify(e,Bo,2):String(e),Bo=(e,t)=>t&&t.__v_isRef?Bo(e,t.value):Vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[jr(r,a)+" =>"]=i,n),{})}:Qt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>jr(n))}:Qe(t)?jr(t):ee(t)&&!H(t)&&!zo(t)?String(t):t,jr=(e,t="")=>{var n;return Qe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class Ko{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Yl(e){return new Ko(e)}function Gl(e,t=Te){t&&t.active&&t.effects.push(e)}function ql(){return Te}let Rt;class Ti{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Gl(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,wt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Xl(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),xt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=mt,n=Rt;try{return mt=!0,Rt=this,this._runnings++,da(this),this.fn()}finally{ma(this),this._runnings--,Rt=n,mt=t}}stop(){this.active&&(da(this),ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Xl(e){return e.value}function da(e){e._trackId++,e._depsLength=0}function ma(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Wo(e.deps[t],e);e.deps.length=e._depsLength}}function Wo(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let mt=!0,Zr=0;const Yo=[];function wt(){Yo.push(mt),mt=!1}function xt(){const e=Yo.pop();mt=e===void 0?!0:e}function Ni(){Zr++}function Mi(){for(Zr--;!Zr&&ei.length;)ei.shift()()}function Go(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Wo(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const ei=[];function qo(e,t,n){Ni();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&ei.push(r.scheduler)))}Mi()}const Xo=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},ti=new WeakMap,It=Symbol(""),ni=Symbol("");function ke(e,t,n){if(mt&&Rt){let r=ti.get(e);r||ti.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Xo(()=>r.delete(n))),Go(Rt,i)}}function Ge(e,t,n,r,i,a){const o=ti.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||!Qe(c)&&c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Ci(n)&&s.push(o.get("length")):(s.push(o.get(It)),Vt(e)&&s.push(o.get(ni)));break;case"delete":H(e)||(s.push(o.get(It)),Vt(e)&&s.push(o.get(ni)));break;case"set":Vt(e)&&s.push(o.get(It));break}Ni();for(const l of s)l&&qo(l,4);Mi()}const Ql=Ai("__proto__,__v_isRef,__isVue"),Qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Qe)),ha=Jl();function Jl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let a=0,o=this.length;a<o;a++)ke(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(q)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){wt(),Ni();const r=q(this)[t].apply(this,n);return Mi(),xt(),r}}),e}function Zl(e){Qe(e)||(e=String(e));const t=q(this);return ke(t,"has",e),t.hasOwnProperty(e)}class Jo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?dc:ns:a?ts:es).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=H(t);if(!i){if(o&&W(ha,n))return Reflect.get(ha,n,r);if(n==="hasOwnProperty")return Zl}const s=Reflect.get(t,n,r);return(Qe(n)?Qo.has(n):Ql(n))||(i||ke(t,"get",n),a)?s:Se(s)?o&&Ci(n)?s:s.value:ee(s)?i?is(s):Er(s):s}}class Zo extends Jo{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];if(!this._isShallow){const l=vn(a);if(!lr(r)&&!vn(r)&&(a=q(a),r=q(r)),!H(t)&&Se(a)&&!Se(r))return l?!1:(a.value=r,!0)}const o=H(t)&&Ci(n)?Number(n)<t.length:W(t,n),s=Reflect.set(t,n,r,i);return t===q(i)&&(o?gt(r,a)&&Ge(t,"set",n,r):Ge(t,"add",n,r)),s}deleteProperty(t,n){const r=W(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Ge(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Qe(n)||!Qo.has(n))&&ke(t,"has",n),r}ownKeys(t){return ke(t,"iterate",H(t)?"length":It),Reflect.ownKeys(t)}}class ec extends Jo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const tc=new Zo,nc=new ec,rc=new Zo(!0);const Li=e=>e,xr=e=>Reflect.getPrototypeOf(e);function Dn(e,t,n=!1,r=!1){e=e.__v_raw;const i=q(e),a=q(t);n||(gt(t,a)&&ke(i,"get",t),ke(i,"get",a));const{has:o}=xr(i),s=r?Li:n?$i:bn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function zn(e,t=!1){const n=this.__v_raw,r=q(n),i=q(e);return t||(gt(e,i)&&ke(r,"has",e),ke(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Hn(e,t=!1){return e=e.__v_raw,!t&&ke(q(e),"iterate",It),Reflect.get(e,"size",e)}function pa(e){e=q(e);const t=q(this);return xr(t).has.call(t,e)||(t.add(e),Ge(t,"add",e,e)),this}function ga(e,t){t=q(t);const n=q(this),{has:r,get:i}=xr(n);let a=r.call(n,e);a||(e=q(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?gt(t,o)&&Ge(n,"set",e,t):Ge(n,"add",e,t),this}function va(e){const t=q(this),{has:n,get:r}=xr(t);let i=n.call(t,e);i||(e=q(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Ge(t,"delete",e,void 0),a}function ba(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Ge(e,"clear",void 0,void 0),n}function Un(e,t){return function(r,i){const a=this,o=a.__v_raw,s=q(o),l=t?Li:e?$i:bn;return!e&&ke(s,"iterate",It),o.forEach((f,c)=>r.call(i,l(f),l(c),a))}}function Vn(e,t,n){return function(...r){const i=this.__v_raw,a=q(i),o=Vt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),c=n?Li:t?$i:bn;return!t&&ke(a,"iterate",l?ni:It),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ic(){const e={get(a){return Dn(this,a)},get size(){return Hn(this)},has:zn,add:pa,set:ga,delete:va,clear:ba,forEach:Un(!1,!1)},t={get(a){return Dn(this,a,!1,!0)},get size(){return Hn(this)},has:zn,add:pa,set:ga,delete:va,clear:ba,forEach:Un(!1,!0)},n={get(a){return Dn(this,a,!0)},get size(){return Hn(this,!0)},has(a){return zn.call(this,a,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Un(!0,!1)},r={get(a){return Dn(this,a,!0,!0)},get size(){return Hn(this,!0)},has(a){return zn.call(this,a,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Vn(a,!1,!1),n[a]=Vn(a,!0,!1),t[a]=Vn(a,!1,!0),r[a]=Vn(a,!0,!0)}),[e,n,t,r]}const[ac,oc,sc,lc]=ic();function Fi(e,t){const n=t?e?lc:sc:e?oc:ac;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(W(n,i)&&i in r?n:r,i,a)}const cc={get:Fi(!1,!1)},fc={get:Fi(!1,!0)},uc={get:Fi(!0,!1)};const es=new WeakMap,ts=new WeakMap,ns=new WeakMap,dc=new WeakMap;function mc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hc(e){return e.__v_skip||!Object.isExtensible(e)?0:mc(Fl(e))}function Er(e){return vn(e)?e:ji(e,!1,tc,cc,es)}function rs(e){return ji(e,!1,rc,fc,ts)}function is(e){return ji(e,!0,nc,uc,ns)}function ji(e,t,n,r,i){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=hc(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function sn(e){return vn(e)?sn(e.__v_raw):!!(e&&e.__v_isReactive)}function vn(e){return!!(e&&e.__v_isReadonly)}function lr(e){return!!(e&&e.__v_isShallow)}function as(e){return e?!!e.__v_raw:!1}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function os(e){return Object.isExtensible(e)&&Ho(e,"__v_skip",!0),e}const bn=e=>ee(e)?Er(e):e,$i=e=>ee(e)?is(e):e;class ss{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ti(()=>t(this._value),()=>tr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=q(this);return(!t._cacheable||t.effect.dirty)&&gt(t._value,t._value=t.effect.run())&&tr(t,4),ls(t),t.effect._dirtyLevel>=2&&tr(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function pc(e,t,n=!1){let r,i;const a=V(e);return a?(r=e,i=Oe):(r=e.get,i=e.set),new ss(r,i,a||!i,n)}function ls(e){var t;mt&&Rt&&(e=q(e),Go(Rt,(t=e.dep)!=null?t:e.dep=Xo(()=>e.dep=void 0,e instanceof ss?e:void 0)))}function tr(e,t=4,n){e=q(e);const r=e.dep;r&&qo(r,t)}function Se(e){return!!(e&&e.__v_isRef===!0)}function cs(e){return fs(e,!1)}function gc(e){return fs(e,!0)}function fs(e,t){return Se(e)?e:new vc(e,t)}class vc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:bn(t)}get value(){return ls(this),this._value}set value(t){const n=this.__v_isShallow||lr(t)||vn(t);t=n?t:q(t),gt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:bn(t),tr(this,4))}}function ht(e){return Se(e)?e.value:e}const bc={get:(e,t,n)=>ht(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Se(i)&&!Se(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function us(e){return sn(e)?e:new Proxy(e,bc)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pt(e,t,n,r){try{return r?e(...r):e()}catch(i){kr(i,t,n)}}function Le(e,t,n,r){if(V(e)){const i=pt(e,t,n,r);return i&&$o(i)&&i.catch(a=>{kr(a,t,n)}),i}if(H(e)){const i=[];for(let a=0;a<e.length;a++)i.push(Le(e[a],t,n,r));return i}}function kr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){wt(),pt(l,null,10,[e,o,s]),xt();return}}yc(e,n,i,r)}function yc(e,t,n,r=!0){console.error(e)}let yn=!1,ri=!1;const be=[];let Ue=0;const Bt=[];let lt=null,At=0;const ds=Promise.resolve();let Di=null;function zi(e){const t=Di||ds;return e?t.then(this?e.bind(this):e):t}function _c(e){let t=Ue+1,n=be.length;for(;t<n;){const r=t+n>>>1,i=be[r],a=_n(i);a<e||a===e&&i.pre?t=r+1:n=r}return t}function Hi(e){(!be.length||!be.includes(e,yn&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?be.push(e):be.splice(_c(e.id),0,e),ms())}function ms(){!yn&&!ri&&(ri=!0,Di=ds.then(ps))}function wc(e){const t=be.indexOf(e);t>Ue&&be.splice(t,1)}function xc(e){H(e)?Bt.push(...e):(!lt||!lt.includes(e,e.allowRecurse?At+1:At))&&Bt.push(e),ms()}function ya(e,t,n=yn?Ue+1:0){for(;n<be.length;n++){const r=be[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;be.splice(n,1),n--,r()}}}function hs(e){if(Bt.length){const t=[...new Set(Bt)].sort((n,r)=>_n(n)-_n(r));if(Bt.length=0,lt){lt.push(...t);return}for(lt=t,At=0;At<lt.length;At++)lt[At]();lt=null,At=0}}const _n=e=>e.id==null?1/0:e.id,Ec=(e,t)=>{const n=_n(e)-_n(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ps(e){ri=!1,yn=!0,be.sort(Ec);const t=Oe;try{for(Ue=0;Ue<be.length;Ue++){const n=be[Ue];n&&n.active!==!1&&pt(n,null,14)}}finally{Ue=0,be.length=0,hs(),yn=!1,Di=null,(be.length||Bt.length)&&ps()}}function kc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||te;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[c]||te;h&&(i=n.map(g=>se(g)?g.trim():g)),m&&(i=n.map(sr))}let s,l=r[s=Fr(t)]||r[s=Fr(Be(t))];!l&&a&&(l=r[s=Fr(Mt(t))]),l&&Le(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Le(f,e,6,i)}}function gs(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!V(e)){const l=f=>{const c=gs(f,t,!0);c&&(s=!0,de(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(ee(e)&&r.set(e,null),null):(H(a)?a.forEach(l=>o[l]=null):de(o,a),ee(e)&&r.set(e,o),o)}function Sr(e,t){return!e||!br(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,Mt(t))||W(e,t))}let ue=null,vs=null;function cr(e){const t=ue;return ue=e,vs=e&&e.type.__scopeId||null,t}function bs(e,t=ue,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Ra(-1);const a=cr(t);let o;try{o=e(...i)}finally{cr(a),r._d&&Ra(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:f,renderCache:c,props:m,data:h,setupState:g,ctx:A,inheritAttrs:R}=e,j=cr(e);let y,w;try{if(n.shapeFlag&4){const D=i||r,B=D;y=He(f.call(B,D,c,m,g,h,A)),w=s}else{const D=t;y=He(D.length>1?D(m,{attrs:s,slots:o,emit:l}):D(m,null)),w=t.props?s:Sc(s)}}catch(D){dn.length=0,kr(D,e,1),y=he(vt)}let C=y;if(w&&R!==!1){const D=Object.keys(w),{shapeFlag:B}=C;D.length&&B&7&&(a&&D.some(Oi)&&(w=Ac(w,a)),C=Wt(C,w,!1,!0))}return n.dirs&&(C=Wt(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),y=C,cr(j),y}const Sc=e=>{let t;for(const n in e)(n==="class"||n==="style"||br(n))&&((t||(t={}))[n]=e[n]);return t},Ac=(e,t)=>{const n={};for(const r in e)(!Oi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Oc(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_a(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(o[h]!==r[h]&&!Sr(f,h))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?_a(r,o,f):!0:!!o;return!1}function _a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!Sr(n,a))return!0}return!1}function Pc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const ys="components";function ch(e,t){return Rc(ys,e,!0,t)||e}const Cc=Symbol.for("v-ndc");function Rc(e,t,n=!0,r=!1){const i=ue||ye;if(i){const a=i.type;if(e===ys){const s=Sf(a,!1);if(s&&(s===t||s===Be(t)||s===_r(Be(t))))return a}const o=wa(i[e]||a[e],t)||wa(i.appContext[e],t);return!o&&r?a:o}}function wa(e,t){return e&&(e[t]||e[Be(t)]||e[_r(Be(t))])}const Ic=e=>e.__isSuspense;function Tc(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):xc(e)}const Nc=Symbol.for("v-scx"),Mc=()=>qe(Nc),Bn={};function ln(e,t,n){return _s(e,t,n)}function _s(e,t,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:s}=te){if(t&&a){const $=t;t=(...Z)=>{$(...Z),B()}}const l=ye,f=$=>r===!0?$:Ot($,r===!1?1:void 0);let c,m=!1,h=!1;if(Se(e)?(c=()=>e.value,m=lr(e)):sn(e)?(c=()=>f(e),m=!0):H(e)?(h=!0,m=e.some($=>sn($)||lr($)),c=()=>e.map($=>{if(Se($))return $.value;if(sn($))return f($);if(V($))return pt($,l,2)})):V(e)?t?c=()=>pt(e,l,2):c=()=>(g&&g(),Le(e,l,3,[A])):c=Oe,t&&r){const $=c;c=()=>Ot($())}let g,A=$=>{g=C.onStop=()=>{pt($,l,4),g=C.onStop=void 0}},R;if(Pr)if(A=Oe,t?n&&Le(t,l,3,[c(),h?[]:void 0,A]):c(),i==="sync"){const $=Mc();R=$.__watcherHandles||($.__watcherHandles=[])}else return Oe;let j=h?new Array(e.length).fill(Bn):Bn;const y=()=>{if(!(!C.active||!C.dirty))if(t){const $=C.run();(r||m||(h?$.some((Z,pe)=>gt(Z,j[pe])):gt($,j)))&&(g&&g(),Le(t,l,3,[$,j===Bn?void 0:h&&j[0]===Bn?[]:j,A]),j=$)}else C.run()};y.allowRecurse=!!t;let w;i==="sync"?w=y:i==="post"?w=()=>Ee(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),w=()=>Hi(y));const C=new Ti(c,Oe,w),D=ql(),B=()=>{C.stop(),D&&Pi(D.effects,C)};return t?n?y():j=C.run():i==="post"?Ee(C.run.bind(C),l&&l.suspense):C.run(),R&&R.push(B),B}function Lc(e,t,n){const r=this.proxy,i=se(e)?e.includes(".")?ws(r,e):()=>r[e]:e.bind(r,r);let a;V(t)?a=t:(a=t.handler,n=t);const o=Mn(this),s=_s(i,a.bind(r),n);return o(),s}function ws(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ot(e,t=1/0,n){if(t<=0||!ee(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Se(e))Ot(e.value,t,n);else if(H(e))for(let r=0;r<e.length;r++)Ot(e[r],t,n);else if(Qt(e)||Vt(e))e.forEach(r=>{Ot(r,t,n)});else if(zo(e))for(const r in e)Ot(e[r],t,n);return e}function fh(e,t){if(ue===null)return e;const n=Cr(ue)||ue.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,o,s,l=te]=t[i];a&&(V(a)&&(a={mounted:a,updated:a}),a.deep&&Ot(o),r.push({dir:a,instance:n,value:o,oldValue:void 0,arg:s,modifiers:l}))}return e}function kt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(wt(),Le(l,n,8,[e.el,s,e,t]),xt())}}/*! #__NO_SIDE_EFFECTS__ */function Nn(e,t){return V(e)?(()=>de({name:e.name},t,{setup:e}))():e}const cn=e=>!!e.type.__asyncLoader,xs=e=>e.type.__isKeepAlive;function Fc(e,t){Es(e,"a",t)}function jc(e,t){Es(e,"da",t)}function Es(e,t,n=ye){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ar(t,r,n),n){let i=n.parent;for(;i&&i.parent;)xs(i.parent.vnode)&&$c(r,t,n,i),i=i.parent}}function $c(e,t,n,r){const i=Ar(t,e,r,!0);ks(()=>{Pi(r[t],i)},n)}function Ar(e,t,n=ye,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;wt();const s=Mn(n),l=Le(t,n,e,o);return s(),xt(),l});return r?i.unshift(a):i.push(a),a}}const tt=e=>(t,n=ye)=>(!Pr||e==="sp")&&Ar(e,(...r)=>t(...r),n),Dc=tt("bm"),zc=tt("m"),Hc=tt("bu"),Uc=tt("u"),Vc=tt("bum"),ks=tt("um"),Bc=tt("sp"),Kc=tt("rtg"),Wc=tt("rtc");function Yc(e,t=ye){Ar("ec",e,t)}function Gc(e,t,n,r){let i;const a=n&&n[r];if(H(e)||se(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(ee(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];i[s]=t(e[f],f,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}function uh(e,t,n={},r,i){if(ue.isCE||ue.parent&&cn(ue.parent)&&ue.parent.isCE)return t!=="default"&&(n.name=t),he("slot",n,r&&r());let a=e[t];a&&a._c&&(a._d=!1),wn();const o=a&&Ss(a(n)),s=Ds(Re,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),a&&a._c&&(a._d=!0),s}function Ss(e){return e.some(t=>ur(t)?!(t.type===vt||t.type===Re&&!Ss(t.children)):!0)?e:null}const ii=e=>e?Us(e)?Cr(e)||e.proxy:ii(e.parent):null,fn=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ii(e.parent),$root:e=>ii(e.root),$emit:e=>e.emit,$options:e=>Ui(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Hi(e.update)}),$nextTick:e=>e.n||(e.n=zi.bind(e.proxy)),$watch:e=>Lc.bind(e)}),Dr=(e,t)=>e!==te&&!e.__isScriptSetup&&W(e,t),qc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Dr(r,t))return o[t]=1,r[t];if(i!==te&&W(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&W(f,t))return o[t]=3,a[t];if(n!==te&&W(n,t))return o[t]=4,n[t];ai&&(o[t]=0)}}const c=fn[t];let m,h;if(c)return t==="$attrs"&&ke(e.attrs,"get",""),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==te&&W(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,W(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Dr(i,t)?(i[t]=n,!0):r!==te&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==te&&W(e,o)||Dr(t,o)||(s=a[0])&&W(s,o)||W(r,o)||W(fn,o)||W(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function xa(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ai=!0;function Xc(e){const t=Ui(e),n=e.proxy,r=e.ctx;ai=!1,t.beforeCreate&&Ea(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:g,updated:A,activated:R,deactivated:j,beforeDestroy:y,beforeUnmount:w,destroyed:C,unmounted:D,render:B,renderTracked:$,renderTriggered:Z,errorCaptured:pe,serverPrefetch:ge,expose:Ce,inheritAttrs:rt,components:Et,directives:je,filters:Zt}=t;if(f&&Qc(f,r,null),o)for(const Q in o){const Y=o[Q];V(Y)&&(r[Q]=Y.bind(n))}if(i){const Q=i.call(n,n);ee(Q)&&(e.data=Er(Q))}if(ai=!0,a)for(const Q in a){const Y=a[Q],Ke=V(Y)?Y.bind(n,n):V(Y.get)?Y.get.bind(n,n):Oe,it=!V(Y)&&V(Y.set)?Y.set.bind(n):Oe,$e=me({get:Ke,set:it});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>$e.value,set:we=>$e.value=we})}if(s)for(const Q in s)As(s[Q],r,n,Q);if(l){const Q=V(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(Y=>{nr(Y,Q[Y])})}c&&Ea(c,e,"c");function ce(Q,Y){H(Y)?Y.forEach(Ke=>Q(Ke.bind(n))):Y&&Q(Y.bind(n))}if(ce(Dc,m),ce(zc,h),ce(Hc,g),ce(Uc,A),ce(Fc,R),ce(jc,j),ce(Yc,pe),ce(Wc,$),ce(Kc,Z),ce(Vc,w),ce(ks,D),ce(Bc,ge),H(Ce))if(Ce.length){const Q=e.exposed||(e.exposed={});Ce.forEach(Y=>{Object.defineProperty(Q,Y,{get:()=>n[Y],set:Ke=>n[Y]=Ke})})}else e.exposed||(e.exposed={});B&&e.render===Oe&&(e.render=B),rt!=null&&(e.inheritAttrs=rt),Et&&(e.components=Et),je&&(e.directives=je)}function Qc(e,t,n=Oe){H(e)&&(e=oi(e));for(const r in e){const i=e[r];let a;ee(i)?"default"in i?a=qe(i.from||r,i.default,!0):a=qe(i.from||r):a=qe(i),Se(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function Ea(e,t,n){Le(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function As(e,t,n,r){const i=r.includes(".")?ws(n,r):()=>n[r];if(se(e)){const a=t[e];V(a)&&ln(i,a)}else if(V(e))ln(i,e.bind(n));else if(ee(e))if(H(e))e.forEach(a=>As(a,t,n,r));else{const a=V(e.handler)?e.handler.bind(n):t[e.handler];V(a)&&ln(i,a,e)}}function Ui(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>fr(l,f,o,!0)),fr(l,t,o)),ee(t)&&a.set(t,l),l}function fr(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&fr(e,a,n,!0),i&&i.forEach(o=>fr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Jc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Jc={data:ka,props:Sa,emits:Sa,methods:rn,computed:rn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:rn,directives:rn,watch:ef,provide:ka,inject:Zc};function ka(e,t){return t?e?function(){return de(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function Zc(e,t){return rn(oi(e),oi(t))}function oi(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function rn(e,t){return e?de(Object.create(null),e,t):t}function Sa(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:de(Object.create(null),xa(e),xa(t??{})):t}function ef(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function Os(){return{app:null,config:{isNativeTag:Ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tf=0;function nf(e,t){return function(r,i=null){V(r)||(r=de({},r)),i!=null&&!ee(i)&&(i=null);const a=Os(),o=new WeakSet;let s=!1;const l=a.app={_uid:tf++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Of,get config(){return a.config},set config(f){},use(f,...c){return o.has(f)||(f&&V(f.install)?(o.add(f),f.install(l,...c)):V(f)&&(o.add(f),f(l,...c))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,c){return c?(a.components[f]=c,l):a.components[f]},directive(f,c){return c?(a.directives[f]=c,l):a.directives[f]},mount(f,c,m){if(!s){const h=he(r,i);return h.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,Cr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return a.provides[f]=c,l},runWithContext(f){const c=un;un=l;try{return f()}finally{un=c}}};return l}}let un=null;function nr(e,t){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[e]=t}}function qe(e,t,n=!1){const r=ye||ue;if(r||un){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:un._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}const Ps={},Cs=()=>Object.create(Ps),Rs=e=>Object.getPrototypeOf(e)===Ps;function rf(e,t,n,r=!1){const i={},a=Cs();e.propsDefaults=Object.create(null),Is(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:rs(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function af(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=q(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(Sr(e.emitsOptions,h))continue;const g=t[h];if(l)if(W(a,h))g!==a[h]&&(a[h]=g,f=!0);else{const A=Be(h);i[A]=si(l,s,A,g,e,!1)}else g!==a[h]&&(a[h]=g,f=!0)}}}else{Is(e,t,i,a)&&(f=!0);let c;for(const m in s)(!t||!W(t,m)&&((c=Mt(m))===m||!W(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(i[m]=si(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!W(t,m))&&(delete a[m],f=!0)}f&&Ge(e.attrs,"set","")}function Is(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(on(l))continue;const f=t[l];let c;i&&W(i,c=Be(l))?!a||!a.includes(c)?n[c]=f:(s||(s={}))[c]=f:Sr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=q(n),f=s||te;for(let c=0;c<a.length;c++){const m=a[c];n[m]=si(i,l,m,f[m],e,!W(f,m))}}return o}function si(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&V(l)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const c=Mn(i);r=f[n]=l.call(null,t),c()}}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Mt(n))&&(r=!0))}return r}function Ts(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!V(e)){const c=m=>{l=!0;const[h,g]=Ts(m,t,!0);de(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!a&&!l)return ee(e)&&r.set(e,Ut),Ut;if(H(a))for(let c=0;c<a.length;c++){const m=Be(a[c]);Aa(m)&&(o[m]=te)}else if(a)for(const c in a){const m=Be(c);if(Aa(m)){const h=a[c],g=o[m]=H(h)||V(h)?{type:h}:de({},h);if(g){const A=Ca(Boolean,g.type),R=Ca(String,g.type);g[0]=A>-1,g[1]=R<0||A<R,(A>-1||W(g,"default"))&&s.push(m)}}}const f=[o,s];return ee(e)&&r.set(e,f),f}function Aa(e){return e[0]!=="$"&&!on(e)}function Oa(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Pa(e,t){return Oa(e)===Oa(t)}function Ca(e,t){return H(t)?t.findIndex(n=>Pa(n,e)):V(t)&&Pa(t,e)?0:-1}const Ns=e=>e[0]==="_"||e==="$stable",Vi=e=>H(e)?e.map(He):[He(e)],of=(e,t,n)=>{if(t._n)return t;const r=bs((...i)=>Vi(t(...i)),n);return r._c=!1,r},Ms=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Ns(i))continue;const a=e[i];if(V(a))t[i]=of(i,a,r);else if(a!=null){const o=Vi(a);t[i]=()=>o}}},Ls=(e,t)=>{const n=Vi(t);e.slots.default=()=>n},sf=(e,t)=>{const n=e.slots=Cs();if(e.vnode.shapeFlag&32){const r=t._;r?(de(n,t),Ho(n,"_",r,!0)):Ms(t,n)}else t&&Ls(e,t)},lf=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=te;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(de(i,t),!n&&s===1&&delete i._):(a=!t.$stable,Ms(t,i)),o=t}else t&&(Ls(e,t),o={default:1});if(a)for(const s in i)!Ns(s)&&o[s]==null&&delete i[s]};function li(e,t,n,r,i=!1){if(H(e)){e.forEach((h,g)=>li(h,t&&(H(t)?t[g]:t),n,r,i));return}if(cn(r)&&!i)return;const a=r.shapeFlag&4?Cr(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,c=s.refs===te?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(se(f)?(c[f]=null,W(m,f)&&(m[f]=null)):Se(f)&&(f.value=null)),V(l))pt(l,s,12,[o,c]);else{const h=se(l),g=Se(l);if(h||g){const A=()=>{if(e.f){const R=h?W(m,l)?m[l]:c[l]:l.value;i?H(R)&&Pi(R,a):H(R)?R.includes(a)||R.push(a):h?(c[l]=[a],W(m,l)&&(m[l]=c[l])):(l.value=[a],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,W(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,Ee(A,n)):A()}}}const Ee=Tc;function cf(e){return ff(e)}function ff(e,t){const n=Uo();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:g=Oe,insertStaticContent:A}=e,R=(u,d,p,_=null,v=null,k=null,P=void 0,E=null,S=!!d.dynamicChildren)=>{if(u===d)return;u&&!tn(u,d)&&(_=b(u),we(u,v,k,!0),u=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:x,ref:N,shapeFlag:z}=d;switch(x){case Or:j(u,d,p,_);break;case vt:y(u,d,p,_);break;case Hr:u==null&&w(d,p,_,P);break;case Re:Et(u,d,p,_,v,k,P,E,S);break;default:z&1?B(u,d,p,_,v,k,P,E,S):z&6?je(u,d,p,_,v,k,P,E,S):(z&64||z&128)&&x.process(u,d,p,_,v,k,P,E,S,L)}N!=null&&v&&li(N,u&&u.ref,k,d||u,!d)},j=(u,d,p,_)=>{if(u==null)r(d.el=s(d.children),p,_);else{const v=d.el=u.el;d.children!==u.children&&f(v,d.children)}},y=(u,d,p,_)=>{u==null?r(d.el=l(d.children||""),p,_):d.el=u.el},w=(u,d,p,_)=>{[u.el,u.anchor]=A(u.children,d,p,_,u.el,u.anchor)},C=({el:u,anchor:d},p,_)=>{let v;for(;u&&u!==d;)v=h(u),r(u,p,_),u=v;r(d,p,_)},D=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),i(u),u=p;i(d)},B=(u,d,p,_,v,k,P,E,S)=>{d.type==="svg"?P="svg":d.type==="math"&&(P="mathml"),u==null?$(d,p,_,v,k,P,E,S):ge(u,d,v,k,P,E,S)},$=(u,d,p,_,v,k,P,E)=>{let S,x;const{props:N,shapeFlag:z,transition:F,dirs:U}=u;if(S=u.el=o(u.type,k,N&&N.is,N),z&8?c(S,u.children):z&16&&pe(u.children,S,null,_,v,zr(u,k),P,E),U&&kt(u,null,_,"created"),Z(S,u,u.scopeId,P,_),N){for(const J in N)J!=="value"&&!on(J)&&a(S,J,null,N[J],k,u.children,_,v,ve);"value"in N&&a(S,"value",null,N.value,k),(x=N.onVnodeBeforeMount)&&ze(x,_,u)}U&&kt(u,null,_,"beforeMount");const K=uf(v,F);K&&F.beforeEnter(S),r(S,d,p),((x=N&&N.onVnodeMounted)||K||U)&&Ee(()=>{x&&ze(x,_,u),K&&F.enter(S),U&&kt(u,null,_,"mounted")},v)},Z=(u,d,p,_,v)=>{if(p&&g(u,p),_)for(let k=0;k<_.length;k++)g(u,_[k]);if(v){let k=v.subTree;if(d===k){const P=v.vnode;Z(u,P,P.scopeId,P.slotScopeIds,v.parent)}}},pe=(u,d,p,_,v,k,P,E,S=0)=>{for(let x=S;x<u.length;x++){const N=u[x]=E?ct(u[x]):He(u[x]);R(null,N,d,p,_,v,k,P,E)}},ge=(u,d,p,_,v,k,P)=>{const E=d.el=u.el;let{patchFlag:S,dynamicChildren:x,dirs:N}=d;S|=u.patchFlag&16;const z=u.props||te,F=d.props||te;let U;if(p&&St(p,!1),(U=F.onVnodeBeforeUpdate)&&ze(U,p,d,u),N&&kt(d,u,p,"beforeUpdate"),p&&St(p,!0),x?Ce(u.dynamicChildren,x,E,p,_,zr(d,v),k):P||Y(u,d,E,null,p,_,zr(d,v),k,!1),S>0){if(S&16)rt(E,d,z,F,p,_,v);else if(S&2&&z.class!==F.class&&a(E,"class",null,F.class,v),S&4&&a(E,"style",z.style,F.style,v),S&8){const K=d.dynamicProps;for(let J=0;J<K.length;J++){const ae=K[J],fe=z[ae],Ie=F[ae];(Ie!==fe||ae==="value")&&a(E,ae,fe,Ie,v,u.children,p,_,ve)}}S&1&&u.children!==d.children&&c(E,d.children)}else!P&&x==null&&rt(E,d,z,F,p,_,v);((U=F.onVnodeUpdated)||N)&&Ee(()=>{U&&ze(U,p,d,u),N&&kt(d,u,p,"updated")},_)},Ce=(u,d,p,_,v,k,P)=>{for(let E=0;E<d.length;E++){const S=u[E],x=d[E],N=S.el&&(S.type===Re||!tn(S,x)||S.shapeFlag&70)?m(S.el):p;R(S,x,N,null,_,v,k,P,!0)}},rt=(u,d,p,_,v,k,P)=>{if(p!==_){if(p!==te)for(const E in p)!on(E)&&!(E in _)&&a(u,E,p[E],null,P,d.children,v,k,ve);for(const E in _){if(on(E))continue;const S=_[E],x=p[E];S!==x&&E!=="value"&&a(u,E,x,S,P,d.children,v,k,ve)}"value"in _&&a(u,"value",p.value,_.value,P)}},Et=(u,d,p,_,v,k,P,E,S)=>{const x=d.el=u?u.el:s(""),N=d.anchor=u?u.anchor:s("");let{patchFlag:z,dynamicChildren:F,slotScopeIds:U}=d;U&&(E=E?E.concat(U):U),u==null?(r(x,p,_),r(N,p,_),pe(d.children||[],p,N,v,k,P,E,S)):z>0&&z&64&&F&&u.dynamicChildren?(Ce(u.dynamicChildren,F,p,v,k,P,E),(d.key!=null||v&&d===v.subTree)&&Fs(u,d,!0)):Y(u,d,p,N,v,k,P,E,S)},je=(u,d,p,_,v,k,P,E,S)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,p,_,P,S):Zt(d,p,_,v,k,P,S):Lt(u,d,S)},Zt=(u,d,p,_,v,k,P)=>{const E=u.component=_f(u,_,v);if(xs(u)&&(E.ctx.renderer=L),wf(E),E.asyncDep){if(v&&v.registerDep(E,ce),!u.el){const S=E.subTree=he(vt);y(null,S,d,p)}}else ce(E,u,d,p,v,k,P)},Lt=(u,d,p)=>{const _=d.component=u.component;if(Oc(u,d,p))if(_.asyncDep&&!_.asyncResolved){Q(_,d,p);return}else _.next=d,wc(_.update),_.effect.dirty=!0,_.update();else d.el=u.el,_.vnode=d},ce=(u,d,p,_,v,k,P)=>{const E=()=>{if(u.isMounted){let{next:N,bu:z,u:F,parent:U,vnode:K}=u;{const $t=js(u);if($t){N&&(N.el=K.el,Q(u,N,P)),$t.asyncDep.then(()=>{u.isUnmounted||E()});return}}let J=N,ae;St(u,!1),N?(N.el=K.el,Q(u,N,P)):N=K,z&&er(z),(ae=N.props&&N.props.onVnodeBeforeUpdate)&&ze(ae,U,N,K),St(u,!0);const fe=$r(u),Ie=u.subTree;u.subTree=fe,R(Ie,fe,m(Ie.el),b(Ie),u,v,k),N.el=fe.el,J===null&&Pc(u,fe.el),F&&Ee(F,v),(ae=N.props&&N.props.onVnodeUpdated)&&Ee(()=>ze(ae,U,N,K),v)}else{let N;const{el:z,props:F}=d,{bm:U,m:K,parent:J}=u,ae=cn(d);if(St(u,!1),U&&er(U),!ae&&(N=F&&F.onVnodeBeforeMount)&&ze(N,J,d),St(u,!0),z&&ie){const fe=()=>{u.subTree=$r(u),ie(z,u.subTree,u,v,null)};ae?d.type.__asyncLoader().then(()=>!u.isUnmounted&&fe()):fe()}else{const fe=u.subTree=$r(u);R(null,fe,p,_,u,v,k),d.el=fe.el}if(K&&Ee(K,v),!ae&&(N=F&&F.onVnodeMounted)){const fe=d;Ee(()=>ze(N,J,fe),v)}(d.shapeFlag&256||J&&cn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&Ee(u.a,v),u.isMounted=!0,d=p=_=null}},S=u.effect=new Ti(E,Oe,()=>Hi(x),u.scope),x=u.update=()=>{S.dirty&&S.run()};x.id=u.uid,St(u,!0),x()},Q=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,af(u,d.props,_,p),lf(u,d.children,p),wt(),ya(u),xt()},Y=(u,d,p,_,v,k,P,E,S=!1)=>{const x=u&&u.children,N=u?u.shapeFlag:0,z=d.children,{patchFlag:F,shapeFlag:U}=d;if(F>0){if(F&128){it(x,z,p,_,v,k,P,E,S);return}else if(F&256){Ke(x,z,p,_,v,k,P,E,S);return}}U&8?(N&16&&ve(x,v,k),z!==x&&c(p,z)):N&16?U&16?it(x,z,p,_,v,k,P,E,S):ve(x,v,k,!0):(N&8&&c(p,""),U&16&&pe(z,p,_,v,k,P,E,S))},Ke=(u,d,p,_,v,k,P,E,S)=>{u=u||Ut,d=d||Ut;const x=u.length,N=d.length,z=Math.min(x,N);let F;for(F=0;F<z;F++){const U=d[F]=S?ct(d[F]):He(d[F]);R(u[F],U,p,null,v,k,P,E,S)}x>N?ve(u,v,k,!0,!1,z):pe(d,p,_,v,k,P,E,S,z)},it=(u,d,p,_,v,k,P,E,S)=>{let x=0;const N=d.length;let z=u.length-1,F=N-1;for(;x<=z&&x<=F;){const U=u[x],K=d[x]=S?ct(d[x]):He(d[x]);if(tn(U,K))R(U,K,p,null,v,k,P,E,S);else break;x++}for(;x<=z&&x<=F;){const U=u[z],K=d[F]=S?ct(d[F]):He(d[F]);if(tn(U,K))R(U,K,p,null,v,k,P,E,S);else break;z--,F--}if(x>z){if(x<=F){const U=F+1,K=U<N?d[U].el:_;for(;x<=F;)R(null,d[x]=S?ct(d[x]):He(d[x]),p,K,v,k,P,E,S),x++}}else if(x>F)for(;x<=z;)we(u[x],v,k,!0),x++;else{const U=x,K=x,J=new Map;for(x=K;x<=F;x++){const Ae=d[x]=S?ct(d[x]):He(d[x]);Ae.key!=null&&J.set(Ae.key,x)}let ae,fe=0;const Ie=F-K+1;let $t=!1,sa=0;const en=new Array(Ie);for(x=0;x<Ie;x++)en[x]=0;for(x=U;x<=z;x++){const Ae=u[x];if(fe>=Ie){we(Ae,v,k,!0);continue}let De;if(Ae.key!=null)De=J.get(Ae.key);else for(ae=K;ae<=F;ae++)if(en[ae-K]===0&&tn(Ae,d[ae])){De=ae;break}De===void 0?we(Ae,v,k,!0):(en[De-K]=x+1,De>=sa?sa=De:$t=!0,R(Ae,d[De],p,null,v,k,P,E,S),fe++)}const la=$t?df(en):Ut;for(ae=la.length-1,x=Ie-1;x>=0;x--){const Ae=K+x,De=d[Ae],ca=Ae+1<N?d[Ae+1].el:_;en[x]===0?R(null,De,p,ca,v,k,P,E,S):$t&&(ae<0||x!==la[ae]?$e(De,p,ca,2):ae--)}}},$e=(u,d,p,_,v=null)=>{const{el:k,type:P,transition:E,children:S,shapeFlag:x}=u;if(x&6){$e(u.component.subTree,d,p,_);return}if(x&128){u.suspense.move(d,p,_);return}if(x&64){P.move(u,d,p,L);return}if(P===Re){r(k,d,p);for(let z=0;z<S.length;z++)$e(S[z],d,p,_);r(u.anchor,d,p);return}if(P===Hr){C(u,d,p);return}if(_!==2&&x&1&&E)if(_===0)E.beforeEnter(k),r(k,d,p),Ee(()=>E.enter(k),v);else{const{leave:z,delayLeave:F,afterLeave:U}=E,K=()=>r(k,d,p),J=()=>{z(k,()=>{K(),U&&U()})};F?F(k,K,J):J()}else r(k,d,p)},we=(u,d,p,_=!1,v=!1)=>{const{type:k,props:P,ref:E,children:S,dynamicChildren:x,shapeFlag:N,patchFlag:z,dirs:F}=u;if(E!=null&&li(E,null,p,u,!0),N&256){d.ctx.deactivate(u);return}const U=N&1&&F,K=!cn(u);let J;if(K&&(J=P&&P.onVnodeBeforeUnmount)&&ze(J,d,u),N&6)$n(u.component,p,_);else{if(N&128){u.suspense.unmount(p,_);return}U&&kt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,p,v,L,_):x&&(k!==Re||z>0&&z&64)?ve(x,d,p,!1,!0):(k===Re&&z&384||!v&&N&16)&&ve(S,d,p),_&&Ft(u)}(K&&(J=P&&P.onVnodeUnmounted)||U)&&Ee(()=>{J&&ze(J,d,u),U&&kt(u,null,d,"unmounted")},p)},Ft=u=>{const{type:d,el:p,anchor:_,transition:v}=u;if(d===Re){jt(p,_);return}if(d===Hr){D(u);return}const k=()=>{i(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:E}=v,S=()=>P(p,k);E?E(u.el,k,S):S()}else k()},jt=(u,d)=>{let p;for(;u!==d;)p=h(u),i(u),u=p;i(d)},$n=(u,d,p)=>{const{bum:_,scope:v,update:k,subTree:P,um:E}=u;_&&er(_),v.stop(),k&&(k.active=!1,we(P,u,d,p)),E&&Ee(E,d),Ee(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ve=(u,d,p,_=!1,v=!1,k=0)=>{for(let P=k;P<u.length;P++)we(u[P],d,p,_,v)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el);let T=!1;const O=(u,d,p)=>{u==null?d._vnode&&we(d._vnode,null,null,!0):R(d._vnode||null,u,d,null,null,null,p),T||(T=!0,ya(),hs(),T=!1),d._vnode=u},L={p:R,um:we,m:$e,r:Ft,mt:Zt,mc:pe,pc:Y,pbc:Ce,n:b,o:e};let G,ie;return t&&([G,ie]=t(L)),{render:O,hydrate:G,createApp:nf(O,G)}}function zr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function St({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fs(e,t,n=!1){const r=e.children,i=t.children;if(H(r)&&H(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=ct(i[a]),s.el=o.el),n||Fs(o,s)),s.type===Or&&(s.el=o.el)}}function df(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function js(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:js(t)}const mf=e=>e.__isTeleport,Re=Symbol.for("v-fgt"),Or=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),Hr=Symbol.for("v-stc"),dn=[];let Ne=null;function wn(e=!1){dn.push(Ne=e?null:[])}function hf(){dn.pop(),Ne=dn[dn.length-1]||null}let xn=1;function Ra(e){xn+=e}function $s(e){return e.dynamicChildren=xn>0?Ne||Ut:null,hf(),xn>0&&Ne&&Ne.push(e),e}function ci(e,t,n,r,i,a){return $s(dr(e,t,n,r,i,a,!0))}function Ds(e,t,n,r,i){return $s(he(e,t,n,r,i,!0))}function ur(e){return e?e.__v_isVNode===!0:!1}function tn(e,t){return e.type===t.type&&e.key===t.key}const zs=({key:e})=>e??null,rr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||Se(e)||V(e)?{i:ue,r:e,k:t,f:!!n}:e:null);function dr(e,t=null,n=null,r=0,i=null,a=e===Re?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zs(t),ref:t&&rr(t),scopeId:vs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ue};return s?(Bi(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),xn>0&&!o&&Ne&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Ne.push(l),l}const he=pf;function pf(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Cc)&&(e=vt),ur(e)){const s=Wt(e,t,!0);return n&&Bi(s,n),xn>0&&!a&&Ne&&(s.shapeFlag&6?Ne[Ne.indexOf(e)]=s:Ne.push(s)),s.patchFlag|=-2,s}if(Af(e)&&(e=e.__vccOpts),t){t=gf(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=wr(s)),ee(l)&&(as(l)&&!H(l)&&(l=de({},l)),t.style=Ri(l))}const o=se(e)?1:Ic(e)?128:mf(e)?64:ee(e)?4:V(e)?2:0;return dr(e,t,n,r,i,o,a,!0)}function gf(e){return e?as(e)||Rs(e)?de({},e):e:null}function Wt(e,t,n=!1,r=!1){const{props:i,ref:a,patchFlag:o,children:s,transition:l}=e,f=t?vf(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&zs(f),ref:t&&t.ref?n&&a?H(a)?a.concat(rr(t)):[a,rr(t)]:rr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(c.transition=l.clone(c)),c}function Hs(e=" ",t=0){return he(Or,null,e,t)}function dh(e="",t=!1){return t?(wn(),Ds(vt,null,e)):he(vt,null,e)}function He(e){return e==null||typeof e=="boolean"?he(vt):H(e)?he(Re,null,e.slice()):typeof e=="object"?ct(e):he(Or,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function Bi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Bi(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Rs(t)?t._ctx=ue:i===3&&ue&&(ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:ue},n=32):(t=String(t),r&64?(n=16,t=[Hs(t)]):n=8);e.children=t,e.shapeFlag|=n}function vf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=wr([t.class,r.class]));else if(i==="style")t.style=Ri([t.style,r.style]);else if(br(i)){const a=t[i],o=r[i];o&&a!==o&&!(H(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function ze(e,t,n,r=null){Le(e,t,7,[n,r])}const bf=Os();let yf=0;function _f(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||bf,a={uid:yf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ko(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ts(r,i),emitsOptions:gs(r,i),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=kc.bind(null,a),e.ce&&e.ce(a),a}let ye=null,mr,fi;{const e=Uo(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};mr=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),fi=t("__VUE_SSR_SETTERS__",n=>Pr=n)}const Mn=e=>{const t=ye;return mr(e),e.scope.on(),()=>{e.scope.off(),mr(t)}},Ia=()=>{ye&&ye.scope.off(),mr(null)};function Us(e){return e.vnode.shapeFlag&4}let Pr=!1;function wf(e,t=!1){t&&fi(t);const{props:n,children:r}=e.vnode,i=Us(e);rf(e,n,i,t),sf(e,r);const a=i?xf(e,t):void 0;return t&&fi(!1),a}function xf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,qc);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?kf(e):null,a=Mn(e);wt();const o=pt(r,e,0,[e.props,i]);if(xt(),a(),$o(o)){if(o.then(Ia,Ia),t)return o.then(s=>{Ta(e,s,t)}).catch(s=>{kr(s,e,0)});e.asyncDep=o}else Ta(e,o,t)}else Vs(e,t)}function Ta(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=us(t)),Vs(e,n)}let Na;function Vs(e,t,n){const r=e.type;if(!e.render){if(!t&&Na&&!r.render){const i=r.template||Ui(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=de(de({isCustomElement:a,delimiters:s},o),l);r.render=Na(i,f)}}e.render=r.render||Oe}{const i=Mn(e);wt();try{Xc(e)}finally{xt(),i()}}}const Ef={get(e,t){return ke(e,"get",""),e[t]}};function kf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ef),slots:e.slots,emit:e.emit,expose:t}}function Cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(us(os(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fn)return fn[n](e)},has(t,n){return n in t||n in fn}}))}function Sf(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Af(e){return V(e)&&"__vccOpts"in e}const me=(e,t)=>pc(e,t,Pr);function Ki(e,t,n){const r=arguments.length;return r===2?ee(t)&&!H(t)?ur(t)?he(e,null,[t]):he(e,t):he(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ur(n)&&(n=[n]),he(e,t,n))}const Of="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Pf="http://www.w3.org/2000/svg",Cf="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,Ma=ft&&ft.createElement("template"),Rf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?ft.createElementNS(Pf,e):t==="mathml"?ft.createElementNS(Cf,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ma.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=Ma.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},If=Symbol("_vtc");function Tf(e,t,n){const r=e[If];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const La=Symbol("_vod"),Nf=Symbol("_vsh"),Mf=Symbol(""),Lf=/(^|;)\s*display\s*:/;function Ff(e,t,n){const r=e.style,i=se(n);let a=!1;if(n&&!i){if(t)if(se(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&ir(r,s,"")}else for(const o in t)n[o]==null&&ir(r,o,"");for(const o in n)o==="display"&&(a=!0),ir(r,o,n[o])}else if(i){if(t!==n){const o=r[Mf];o&&(n+=";"+o),r.cssText=n,a=Lf.test(n)}}else t&&e.removeAttribute("style");La in e&&(e[La]=a?r.display:"",e[Nf]&&(r.display="none"))}const Fa=/\s*!important$/;function ir(e,t,n){if(H(n))n.forEach(r=>ir(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=jf(e,t);Fa.test(n)?e.setProperty(Mt(r),n.replace(Fa,""),"important"):e[r]=n}}const ja=["Webkit","Moz","ms"],Ur={};function jf(e,t){const n=Ur[t];if(n)return n;let r=Be(t);if(r!=="filter"&&r in e)return Ur[t]=r;r=_r(r);for(let i=0;i<ja.length;i++){const a=ja[i]+r;if(a in e)return Ur[t]=a}return t}const $a="http://www.w3.org/1999/xlink";function $f(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS($a,t.slice(6,t.length)):e.setAttributeNS($a,t,n);else{const a=Bl(t);n==null||a&&!Vo(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Df(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const f=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(f!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Vo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function dt(e,t,n,r){e.addEventListener(t,n,r)}function zf(e,t,n,r){e.removeEventListener(t,n,r)}const Da=Symbol("_vei");function Hf(e,t,n,r,i=null){const a=e[Da]||(e[Da]={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Uf(t);if(r){const f=a[t]=Kf(r,i);dt(e,s,f,l)}else o&&(zf(e,s,o,l),a[t]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function Uf(e){let t;if(za.test(e)){t={};let r;for(;r=e.match(za);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let Vr=0;const Vf=Promise.resolve(),Bf=()=>Vr||(Vf.then(()=>Vr=0),Vr=Date.now());function Kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(Wf(r,n.value),t,5,[r])};return n.value=e,n.attached=Bf(),n}function Wf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Ha=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Yf=(e,t,n,r,i,a,o,s,l)=>{const f=i==="svg";t==="class"?Tf(e,r,f):t==="style"?Ff(e,n,r):br(t)?Oi(t)||Hf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gf(e,t,r,f))?Df(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),$f(e,t,r,f))};function Gf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ha(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ha(t)&&se(n)?!1:t in e}const Yt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>er(t,n):t};function qf(e){e.target.composing=!0}function Ua(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Xe=Symbol("_assign"),mh={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Xe]=Yt(i);const a=r||i.props&&i.props.type==="number";dt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),a&&(s=sr(s)),e[Xe](s)}),n&&dt(e,"change",()=>{e.value=e.value.trim()}),t||(dt(e,"compositionstart",qf),dt(e,"compositionend",Ua),dt(e,"change",Ua))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},a){if(e[Xe]=Yt(a),e.composing)return;const o=(i||e.type==="number")&&!/^0\d/.test(e.value)?sr(e.value):e.value,s=t??"";o!==s&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===s)||(e.value=s))}},hh={deep:!0,created(e,t,n){e[Xe]=Yt(n),dt(e,"change",()=>{const r=e._modelValue,i=En(e),a=e.checked,o=e[Xe];if(H(r)){const s=Ii(r,i),l=s!==-1;if(a&&!l)o(r.concat(i));else if(!a&&l){const f=[...r];f.splice(s,1),o(f)}}else if(Qt(r)){const s=new Set(r);a?s.add(i):s.delete(i),o(s)}else o(Bs(e,a))})},mounted:Va,beforeUpdate(e,t,n){e[Xe]=Yt(n),Va(e,t,n)}};function Va(e,{value:t,oldValue:n},r){e._modelValue=t,H(t)?e.checked=Ii(t,r.props.value)>-1:Qt(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Tn(t,Bs(e,!0)))}const ph={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const i=Qt(t);dt(e,"change",()=>{const a=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?sr(En(o)):En(o));e[Xe](e.multiple?i?new Set(a):a:a[0]),e._assigning=!0,zi(()=>{e._assigning=!1})}),e[Xe]=Yt(r)},mounted(e,{value:t,modifiers:{number:n}}){Ba(e,t)},beforeUpdate(e,t,n){e[Xe]=Yt(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||Ba(e,t)}};function Ba(e,t,n){const r=e.multiple,i=H(t);if(!(r&&!i&&!Qt(t))){for(let a=0,o=e.options.length;a<o;a++){const s=e.options[a],l=En(s);if(r)if(i){const f=typeof l;f==="string"||f==="number"?s.selected=t.some(c=>String(c)===String(l)):s.selected=Ii(t,l)>-1}else s.selected=t.has(l);else if(Tn(En(s),t)){e.selectedIndex!==a&&(e.selectedIndex=a);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function En(e){return"_value"in e?e._value:e.value}function Bs(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Xf=["ctrl","shift","alt","meta"],Qf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Xf.some(n=>e[`${n}Key`]&&!t.includes(n))},gh=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...a)=>{for(let o=0;o<t.length;o++){const s=Qf[t[o]];if(s&&s(i,t))return}return e(i,...a)})},Jf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vh=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const a=Mt(i.key);if(t.some(o=>o===a||Jf[o]===a))return e(i)})},Zf=de({patchProp:Yf},Rf);let Ka;function eu(){return Ka||(Ka=cf(Zf))}const tu=(...e)=>{const t=eu().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=ru(r);if(!i)return;const a=t._component;!V(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,nu(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function nu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ru(e){return se(e)?document.querySelector(e):e}var iu=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const au=Symbol();var Wa;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Wa||(Wa={}));function ou(){const e=Yl(!0),t=e.run(()=>cs({}));let n=[],r=[];const i=os({install(a){i._a=a,a.provide(au,i),a.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(a){return!this._a&&!iu?r.push(a):n.push(a),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}function Ya(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ya(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ya(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hr(e){"@babel/helpers - typeof";return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function su(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ga(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function lu(e,t,n){return t&&Ga(e.prototype,t),n&&Ga(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wi(e,t){return fu(e)||du(e,t)||Ks(e,t)||hu()}function Ln(e){return cu(e)||uu(e)||Ks(e)||mu()}function cu(e){if(Array.isArray(e))return ui(e)}function fu(e){if(Array.isArray(e))return e}function uu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function du(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Ks(e,t){if(e){if(typeof e=="string")return ui(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ui(e,t)}}function ui(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function mu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qa=function(){},Yi={},Ws={},Ys=null,Gs={mark:qa,measure:qa};try{typeof window<"u"&&(Yi=window),typeof document<"u"&&(Ws=document),typeof MutationObserver<"u"&&(Ys=MutationObserver),typeof performance<"u"&&(Gs=performance)}catch{}var pu=Yi.navigator||{},Xa=pu.userAgent,Qa=Xa===void 0?"":Xa,bt=Yi,re=Ws,Ja=Ys,Kn=Gs;bt.document;var nt=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",qs=~Qa.indexOf("MSIE")||~Qa.indexOf("Trident/"),Wn,Yn,Gn,qn,Xn,Je="___FONT_AWESOME___",di=16,Xs="fa",Qs="svg-inline--fa",Tt="data-fa-i2svg",mi="data-fa-pseudo-element",gu="data-fa-pseudo-element-pending",Gi="data-prefix",qi="data-icon",Za="fontawesome-i2svg",vu="async",bu=["HTML","HEAD","STYLE","SCRIPT"],Js=function(){try{return!0}catch{return!1}}(),ne="classic",oe="sharp",Xi=[ne,oe];function Fn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ne]}})}var kn=Fn((Wn={},le(Wn,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),le(Wn,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Wn)),Sn=Fn((Yn={},le(Yn,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Yn,oe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Yn)),An=Fn((Gn={},le(Gn,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Gn,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Gn)),yu=Fn((qn={},le(qn,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(qn,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),qn)),_u=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Zs="fa-layers-text",wu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,xu=Fn((Xn={},le(Xn,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Xn,oe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Xn)),el=[1,2,3,4,5,6,7,8,9,10],Eu=el.concat([11,12,13,14,15,16,17,18,19,20]),ku=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},On=new Set;Object.keys(Sn[ne]).map(On.add.bind(On));Object.keys(Sn[oe]).map(On.add.bind(On));var Su=[].concat(Xi,Ln(On),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY]).concat(el.map(function(e){return"".concat(e,"x")})).concat(Eu.map(function(e){return"w-".concat(e)})),mn=bt.FontAwesomeConfig||{};function Au(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ou(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var Pu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pu.forEach(function(e){var t=Wi(e,2),n=t[0],r=t[1],i=Ou(Au(n));i!=null&&(mn[r]=i)})}var tl={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xs,replacementClass:Qs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mn.familyPrefix&&(mn.cssPrefix=mn.familyPrefix);var Gt=I(I({},tl),mn);Gt.autoReplaceSvg||(Gt.observeMutations=!1);var M={};Object.keys(tl).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Gt[e]=n,hn.forEach(function(r){return r(M)})},get:function(){return Gt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Gt.cssPrefix=t,hn.forEach(function(n){return n(M)})},get:function(){return Gt.cssPrefix}});bt.FontAwesomeConfig=M;var hn=[];function Cu(e){return hn.push(e),function(){hn.splice(hn.indexOf(e),1)}}var ot=di,Ve={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ru(e){if(!(!e||!nt)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return re.head.insertBefore(t,r),e}}var Iu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pn(){for(var e=12,t="";e-- >0;)t+=Iu[Math.random()*62|0];return t}function Jt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qi(e){return e.classList?Jt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function nl(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(nl(e[n]),'" ')},"").trim()}function Rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ji(e){return e.size!==Ve.size||e.x!==Ve.x||e.y!==Ve.y||e.rotate!==Ve.rotate||e.flipX||e.flipY}function Nu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function Mu(e){var t=e.transform,n=e.width,r=n===void 0?di:n,i=e.height,a=i===void 0?di:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&qs?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Lu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function rl(){var e=Xs,t=Qs,n=M.cssPrefix,r=M.replacementClass,i=Lu;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var eo=!1;function Br(){M.autoAddCss&&!eo&&(Ru(rl()),eo=!0)}var Fu={mixout:function(){return{dom:{css:rl,insertCss:Br}}},hooks:function(){return{beforeDOMElementCreation:function(){Br()},beforeI2svg:function(){Br()}}}},Ze=bt||{};Ze[Je]||(Ze[Je]={});Ze[Je].styles||(Ze[Je].styles={});Ze[Je].hooks||(Ze[Je].hooks={});Ze[Je].shims||(Ze[Je].shims=[]);var Me=Ze[Je],il=[],ju=function e(){re.removeEventListener("DOMContentLoaded",e),pr=1,il.map(function(t){return t()})},pr=!1;nt&&(pr=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),pr||re.addEventListener("DOMContentLoaded",ju));function $u(e){nt&&(pr?setTimeout(e,0):il.push(e))}function jn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?nl(e):"<".concat(t," ").concat(Tu(r),">").concat(a.map(jn).join(""),"</").concat(t,">")}function to(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Du=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Kr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?Du(n,i):n,l,f,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)f=a[l],c=s(c,t[f],f,t);return c};function zu(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function hi(e){var t=zu(e);return t.length===1?t[0].toString(16):null}function Hu(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function no(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function pi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=no(t);typeof Me.hooks.addPack=="function"&&!i?Me.hooks.addPack(e,no(t)):Me.styles[e]=I(I({},Me.styles[e]||{}),a),e==="fas"&&pi("fa",t)}var Qn,Jn,Zn,zt=Me.styles,Uu=Me.shims,Vu=(Qn={},le(Qn,ne,Object.values(An[ne])),le(Qn,oe,Object.values(An[oe])),Qn),Zi=null,al={},ol={},sl={},ll={},cl={},Bu=(Jn={},le(Jn,ne,Object.keys(kn[ne])),le(Jn,oe,Object.keys(kn[oe])),Jn);function Ku(e){return~Su.indexOf(e)}function Wu(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Ku(i)?i:null}var fl=function(){var t=function(a){return Kr(zt,function(o,s,l){return o[l]=Kr(s,a,{}),o},{})};al=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),ol=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),cl=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in zt||M.autoFetchSvg,r=Kr(Uu,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});sl=r.names,ll=r.unicodes,Zi=Ir(M.styleDefault,{family:M.familyDefault})};Cu(function(e){Zi=Ir(e.styleDefault,{family:M.familyDefault})});fl();function ea(e,t){return(al[e]||{})[t]}function Yu(e,t){return(ol[e]||{})[t]}function Ct(e,t){return(cl[e]||{})[t]}function ul(e){return sl[e]||{prefix:null,iconName:null}}function Gu(e){var t=ll[e],n=ea("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yt(){return Zi}var ta=function(){return{prefix:null,iconName:null,rest:[]}};function Ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ne:n,i=kn[r][e],a=Sn[r][e]||Sn[r][i],o=e in Me.styles?e:null;return a||o||null}var ro=(Zn={},le(Zn,ne,Object.keys(An[ne])),le(Zn,oe,Object.keys(An[oe])),Zn);function Tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},le(t,ne,"".concat(M.cssPrefix,"-").concat(ne)),le(t,oe,"".concat(M.cssPrefix,"-").concat(oe)),t),o=null,s=ne;(e.includes(a[ne])||e.some(function(f){return ro[ne].includes(f)}))&&(s=ne),(e.includes(a[oe])||e.some(function(f){return ro[oe].includes(f)}))&&(s=oe);var l=e.reduce(function(f,c){var m=Wu(M.cssPrefix,c);if(zt[c]?(c=Vu[s].includes(c)?yu[s][c]:c,o=c,f.prefix=c):Bu[s].indexOf(c)>-1?(o=c,f.prefix=Ir(c,{family:s})):m?f.iconName=m:c!==M.replacementClass&&c!==a[ne]&&c!==a[oe]&&f.rest.push(c),!i&&f.prefix&&f.iconName){var h=o==="fa"?ul(f.iconName):{},g=Ct(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!zt.far&&zt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},ta());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&(zt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=yt()||"fas"),l}var qu=function(){function e(){su(this,e),this.definitions={}}return lu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),pi(s,o[s]);var l=An[ne][s];l&&pi(l,o[s]),fl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),io=[],Ht={},Kt={},Xu=Object.keys(Kt);function Qu(e,t){var n=t.mixoutsTo;return io=e,Ht={},Object.keys(Kt).forEach(function(r){Xu.indexOf(r)===-1&&delete Kt[r]}),io.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),hr(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Ht[o]||(Ht[o]=[]),Ht[o].push(a[o])})}r.provides&&r.provides(Kt)}),n}function gi(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Ht[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ht[e]||[];i.forEach(function(a){a.apply(null,n)})}function et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Kt[e]?Kt[e].apply(null,t):void 0}function vi(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||yt();if(t)return t=Ct(n,t)||t,to(dl.definitions,n,t)||to(Me.styles,n,t)}var dl=new qu,Ju=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Nt("noAuto")},Zu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nt?(Nt("beforeI2svg",t),et("pseudoElements2svg",t),et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,$u(function(){td({autoReplaceSvgRoot:n}),Nt("watch",t)})}},ed={icon:function(t){if(t===null)return null;if(hr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ir(t[0]);return{prefix:r,iconName:Ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(_u))){var i=Tr(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||yt(),iconName:Ct(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=yt();return{prefix:a,iconName:Ct(a,t)||t}}}},Pe={noAuto:Ju,config:M,dom:Zu,parse:ed,library:dl,findIconDefinition:vi,toHtml:jn},td=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(Me.styles).length>0||M.autoFetchSvg)&&nt&&M.autoReplaceSvg&&Pe.dom.i2svg({node:r})};function Nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return jn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(nt){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function nd(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ji(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=Rr(I(I({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function rd(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:o}),children:r}]}]}function na(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,A=r.found?r:n,R=A.width,j=A.height,y=i==="fak",w=[M.replacementClass,a?"".concat(M.cssPrefix,"-").concat(a):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),C={children:[],attributes:I(I({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(j)})},D=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(R/j*16*.0625,"em")}:{};g&&(C.attributes[Tt]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Pn())},children:[l]}),delete C.attributes.title);var B=I(I({},C),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},D),m.styles)}),$=r.found&&n.found?et("generateAbstractMask",B)||{children:[],attributes:{}}:et("generateAbstractIcon",B)||{children:[],attributes:{}},Z=$.children,pe=$.attributes;return B.children=Z,B.attributes=pe,s?rd(B):nd(B)}function ao(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[Tt]="");var c=I({},o.styles);Ji(i)&&(c.transform=Mu({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=Rr(c);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function id(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Rr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wr=Me.styles;function bi(e){var t=e[0],n=e[1],r=e.slice(4),i=Wi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Pt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Pt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var ad={found:!1,width:512,height:512};function od(e,t){!Js&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function yi(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=yt()),new Promise(function(r,i){if(et("missingIconAbstract"),n==="fa"){var a=ul(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Wr[t]&&Wr[t][e]){var o=Wr[t][e];return r(bi(o))}od(e,t),r(I(I({},ad),{},{icon:M.showMissingIcons&&e?et("missingIconAbstract")||{}:{}}))})}var oo=function(){},_i=M.measurePerformance&&Kn&&Kn.mark&&Kn.measure?Kn:{mark:oo,measure:oo},an='FA "6.5.2"',sd=function(t){return _i.mark("".concat(an," ").concat(t," begins")),function(){return ml(t)}},ml=function(t){_i.mark("".concat(an," ").concat(t," ends")),_i.measure("".concat(an," ").concat(t),"".concat(an," ").concat(t," begins"),"".concat(an," ").concat(t," ends"))},ra={begin:sd,end:ml},ar=function(){};function so(e){var t=e.getAttribute?e.getAttribute(Tt):null;return typeof t=="string"}function ld(e){var t=e.getAttribute?e.getAttribute(Gi):null,n=e.getAttribute?e.getAttribute(qi):null;return t&&n}function cd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function fd(){if(M.autoReplaceSvg===!0)return or.replace;var e=or[M.autoReplaceSvg];return e||or.replace}function ud(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function dd(e){return re.createElement(e)}function hl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ud:dd:n;if(typeof e=="string")return re.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(hl(o,{ceFn:r}))}),i}function md(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var or={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(hl(i),n)}),n.getAttribute(Tt)===null&&M.keepOriginalSource){var r=re.createComment(md(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Qi(n).indexOf(M.replacementClass))return or.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return jn(s)}).join(`
`);n.setAttribute(Tt,""),n.innerHTML=o}};function lo(e){e()}function pl(e,t){var n=typeof t=="function"?t:ar;if(e.length===0)n();else{var r=lo;M.mutateApproach===vu&&(r=bt.requestAnimationFrame||lo),r(function(){var i=fd(),a=ra.begin("mutate");e.map(i),a(),n()})}}var ia=!1;function gl(){ia=!0}function wi(){ia=!1}var gr=null;function co(e){if(Ja&&M.observeMutations){var t=e.treeCallback,n=t===void 0?ar:t,r=e.nodeCallback,i=r===void 0?ar:r,a=e.pseudoElementsCallback,o=a===void 0?ar:a,s=e.observeMutationsRoot,l=s===void 0?re:s;gr=new Ja(function(f){if(!ia){var c=yt();Jt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!so(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&so(m.target)&&~ku.indexOf(m.attributeName))if(m.attributeName==="class"&&ld(m.target)){var h=Tr(Qi(m.target)),g=h.prefix,A=h.iconName;m.target.setAttribute(Gi,g||c),A&&m.target.setAttribute(qi,A)}else cd(m.target)&&i(m.target)})}}),nt&&gr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hd(){gr&&gr.disconnect()}function pd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function gd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Tr(Qi(e));return i.prefix||(i.prefix=yt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Yu(i.prefix,e.innerText)||ea(i.prefix,hi(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function vd(e){var t=Jt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function bd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ve,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gd(e),r=n.iconName,i=n.prefix,a=n.rest,o=vd(e),s=gi("parseNodeAttributes",{},e),l=t.styleParser?pd(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ve,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var yd=Me.styles;function vl(e){var t=M.autoReplaceSvg==="nest"?fo(e,{styleParser:!1}):fo(e);return~t.extra.classes.indexOf(Zs)?et("generateLayersText",e,t):et("generateSvgReplacementMutation",e,t)}var _t=new Set;Xi.map(function(e){_t.add("fa-".concat(e))});Object.keys(kn[ne]).map(_t.add.bind(_t));Object.keys(kn[oe]).map(_t.add.bind(_t));_t=Ln(_t);function uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nt)return Promise.resolve();var n=re.documentElement.classList,r=function(m){return n.add("".concat(Za,"-").concat(m))},i=function(m){return n.remove("".concat(Za,"-").concat(m))},a=M.autoFetchSvg?_t:Xi.map(function(c){return"fa-".concat(c)}).concat(Object.keys(yd));a.includes("fa")||a.push("fa");var o=[".".concat(Zs,":not([").concat(Tt,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Jt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ra.begin("onTree"),f=s.reduce(function(c,m){try{var h=vl(m);h&&c.push(h)}catch(g){Js||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(h){pl(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),m(h)})})}function _d(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vl(e).then(function(n){n&&pl([n],t)})}function wd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:vi(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:vi(i||{})),e(r,I(I({},n),{},{mask:i}))}}var xd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ve:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,h=m===void 0?null:m,g=n.titleId,A=g===void 0?null:g,R=n.classes,j=R===void 0?[]:R,y=n.attributes,w=y===void 0?{}:y,C=n.styles,D=C===void 0?{}:C;if(t){var B=t.prefix,$=t.iconName,Z=t.icon;return Nr(I({type:"icon"},t),function(){return Nt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||Pn()):(w["aria-hidden"]="true",w.focusable="false")),na({icons:{main:bi(Z),mask:l?bi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:$,transform:I(I({},Ve),i),symbol:o,title:h,maskId:c,titleId:A,extra:{attributes:w,styles:D,classes:j}})})}},Ed={mixout:function(){return{icon:wd(xd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=uo,n.nodeCallback=_d,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?re:r,a=n.callback,o=a===void 0?function(){}:a;return uo(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,A){Promise.all([yi(i,s),c.iconName?yi(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var j=Wi(R,2),y=j[0],w=j[1];g([n,na({icons:{main:y,mask:w},prefix:s,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Rr(s);l.length>0&&(i.style=l);var f;return Ji(o)&&(f=et("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},kd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Nr({type:"layer"},function(){Nt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Ln(a)).join(" ")},children:o}]})}}}},Sd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return Nr({type:"counter",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),id({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Ln(s))}})})}}}},Ad={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ve:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Nr({type:"text",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),ao({content:n,transform:I(I({},Ve),a),title:s,extra:{attributes:m,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Ln(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(qs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ao({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Od=new RegExp('"',"ug"),mo=[1105920,1112319];function Pd(e){var t=e.replace(Od,""),n=Hu(t,0),r=n>=mo[0]&&n<=mo[1],i=t.length===2?t[0]===t[1]:!1;return{value:hi(i?t[0]:t),isSecondary:r||i}}function ho(e,t){var n="".concat(gu).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Jt(e.children),o=a.filter(function(Z){return Z.getAttribute(mi)===t})[0],s=bt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(wu),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?oe:ne,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sn[h][l[2].toLowerCase()]:xu[h][f],A=Pd(m),R=A.value,j=A.isSecondary,y=l[0].startsWith("FontAwesome"),w=ea(g,R),C=w;if(y){var D=Gu(R);D.iconName&&D.prefix&&(w=D.iconName,g=D.prefix)}if(w&&!j&&(!o||o.getAttribute(Gi)!==g||o.getAttribute(qi)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var B=bd(),$=B.extra;$.attributes[mi]=t,yi(w,g).then(function(Z){var pe=na(I(I({},B),{},{icons:{main:Z,mask:ta()},prefix:g,iconName:C,extra:$,watchable:!0})),ge=re.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=pe.map(function(Ce){return jn(Ce)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Cd(e){return Promise.all([ho(e,"::before"),ho(e,"::after")])}function Rd(e){return e.parentNode!==document.head&&!~bu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(mi)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function po(e){if(nt)return new Promise(function(t,n){var r=Jt(e.querySelectorAll("*")).filter(Rd).map(Cd),i=ra.begin("searchPseudoElements");gl(),Promise.all(r).then(function(){i(),wi(),t()}).catch(function(){i(),wi(),n()})})}var Id={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=po,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?re:r;M.searchPseudoElements&&po(i)}}},go=!1,Td={mixout:function(){return{dom:{unwatch:function(){gl(),go=!0}}}},hooks:function(){return{bootstrap:function(){co(gi("mutationObserverCallbacks",{}))},noAuto:function(){hd()},watch:function(n){var r=n.observeMutationsRoot;go?wi():co(gi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Nd={mixout:function(){return{parse:{transform:function(n){return vo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=vo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Yr={x:0,y:0,width:"100%",height:"100%"};function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Md(e){return e.tag==="g"?e.children:[e]}var Ld={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Tr(i.split(" ").map(function(o){return o.trim()})):ta();return a.prefix||(a.prefix=yt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,c=a.icon,m=o.width,h=o.icon,g=Nu({transform:l,containerWidth:m,iconWidth:f}),A={tag:"rect",attributes:I(I({},Yr),{},{fill:"white"})},R=c.children?{children:c.children.map(bo)}:{},j={tag:"g",attributes:I({},g.inner),children:[bo(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},R))]},y={tag:"g",attributes:I({},g.outer),children:[j]},w="mask-".concat(s||Pn()),C="clip-".concat(s||Pn()),D={tag:"mask",attributes:I(I({},Yr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,y]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Md(h)},D]};return r.push(B,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(w,")")},Yr)}),{children:r,attributes:i}}}},Fd={provides:function(t){var n=!1;bt.matchMedia&&(n=bt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},$d=[Fu,Ed,kd,Sd,Ad,Id,Td,Nd,Ld,Fd,jd];Qu($d,{mixoutsTo:Pe});Pe.noAuto;Pe.config;var Dd=Pe.library;Pe.dom;var xi=Pe.parse;Pe.findIconDefinition;Pe.toHtml;var zd=Pe.icon;Pe.layer;Pe.text;Pe.counter;function yo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yo(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hd(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ud(e){var t=Hd(e,"string");return typeof t=="symbol"?t:t+""}function vr(e){"@babel/helpers - typeof";return vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vr(e)}function xe(e,t,n){return t=Ud(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vd(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Bd(e,t){if(e==null)return{};var n=Vd(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Kd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bl={exports:{}};(function(e){(function(t){var n=function(y,w,C){if(!f(w)||m(w)||h(w)||g(w)||l(w))return w;var D,B=0,$=0;if(c(w))for(D=[],$=w.length;B<$;B++)D.push(n(y,w[B],C));else{D={};for(var Z in w)Object.prototype.hasOwnProperty.call(w,Z)&&(D[y(Z,C)]=n(y,w[Z],C))}return D},r=function(y,w){w=w||{};var C=w.separator||"_",D=w.split||/(?=[A-Z])/;return y.split(D).join(C)},i=function(y){return A(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,C){return C?C.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},a=function(y){var w=i(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},A=function(y){return y=y-0,y===y},R=function(y,w){var C=w&&"process"in w?w.process:w;return typeof C!="function"?y:function(D,B){return C(D,y,B)}},j={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(y,w){return n(R(i,w),y)},decamelizeKeys:function(y,w){return n(R(o,w),y,w)},pascalizeKeys:function(y,w){return n(R(a,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=j:t.humps=j})(Kd)})(bl);var Wd=bl.exports,Yd=["class","style"];function Gd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Wd.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function qd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function yl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return yl(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=qd(c);break;case"style":l.style=Gd(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=Bd(n,Yd);return Ki(e.tag,Ye(Ye(Ye({},t),{},{class:i.class,style:Ye(Ye({},i.style),o)},i.attrs),s),r)}var _l=!1;try{_l=!0}catch{}function Xd(){if(!_l&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function Qd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(xe(xe(xe(xe(xe(xe(xe(xe(xe(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),xe(xe(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function _o(e){if(e&&vr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(xi.icon)return xi.icon(e);if(e===null)return null;if(vr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Jd=Nn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=me(function(){return _o(t.icon)}),a=me(function(){return Gr("classes",Qd(t))}),o=me(function(){return Gr("transform",typeof t.transform=="string"?xi.transform(t.transform):t.transform)}),s=me(function(){return Gr("mask",_o(t.mask))}),l=me(function(){return zd(i.value,Ye(Ye(Ye(Ye({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});ln(l,function(c){if(!c)return Xd("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=me(function(){return l.value?yl(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Zd={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},em={prefix:"far",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"]};/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dt=typeof document<"u";function tm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function qr(e,t){const n={};for(const r in t){const i=t[r];n[r]=Fe(i)?i.map(e):e(i)}return n}const pn=()=>{},Fe=Array.isArray,wl=/#/g,nm=/&/g,rm=/\//g,im=/=/g,am=/\?/g,xl=/\+/g,om=/%5B/g,sm=/%5D/g,El=/%5E/g,lm=/%60/g,kl=/%7B/g,cm=/%7C/g,Sl=/%7D/g,fm=/%20/g;function aa(e){return encodeURI(""+e).replace(cm,"|").replace(om,"[").replace(sm,"]")}function um(e){return aa(e).replace(kl,"{").replace(Sl,"}").replace(El,"^")}function Ei(e){return aa(e).replace(xl,"%2B").replace(fm,"+").replace(wl,"%23").replace(nm,"%26").replace(lm,"`").replace(kl,"{").replace(Sl,"}").replace(El,"^")}function dm(e){return Ei(e).replace(im,"%3D")}function mm(e){return aa(e).replace(wl,"%23").replace(am,"%3F")}function hm(e){return e==null?"":mm(e).replace(rm,"%2F")}function Cn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const pm=/\/$/,gm=e=>e.replace(pm,"");function Xr(e,t,n="/"){let r,i={},a="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),i=e(a)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=_m(r??t,n),{fullPath:r+(a&&"?")+a+o,path:r,query:i,hash:Cn(o)}}function vm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function bm(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&qt(t.matched[r],n.matched[i])&&Al(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function qt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Al(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ym(e[n],t[n]))return!1;return!0}function ym(e,t){return Fe(e)?xo(e,t):Fe(t)?xo(t,e):e===t}function xo(e,t){return Fe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function _m(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}var Rn;(function(e){e.pop="pop",e.push="push"})(Rn||(Rn={}));var gn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gn||(gn={}));function wm(e){if(!e)if(Dt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),gm(e)}const xm=/^[^#]+#/;function Em(e,t){return e.replace(xm,"#")+t}function km(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Mr=()=>({left:window.scrollX,top:window.scrollY});function Sm(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=km(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Eo(e,t){return(history.state?history.state.position-t:-1)+e}const ki=new Map;function Am(e,t){ki.set(e,t)}function Om(e){const t=ki.get(e);return ki.delete(e),t}let Pm=()=>location.protocol+"//"+location.host;function Ol(e,t){const{pathname:n,search:r,hash:i}=t,a=e.indexOf("#");if(a>-1){let s=i.includes(e.slice(a))?e.slice(a).length:1,l=i.slice(s);return l[0]!=="/"&&(l="/"+l),wo(l,"")}return wo(n,e)+r+i}function Cm(e,t,n,r){let i=[],a=[],o=null;const s=({state:h})=>{const g=Ol(e,location),A=n.value,R=t.value;let j=0;if(h){if(n.value=g,t.value=h,o&&o===A){o=null;return}j=R?h.position-R.position:0}else r(g);i.forEach(y=>{y(n.value,A,{delta:j,type:Rn.pop,direction:j?j>0?gn.forward:gn.back:gn.unknown})})};function l(){o=n.value}function f(h){i.push(h);const g=()=>{const A=i.indexOf(h);A>-1&&i.splice(A,1)};return a.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:Mr()}),"")}function m(){for(const h of a)h();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:m}}function ko(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Mr():null}}function Rm(e){const{history:t,location:n}=window,r={value:Ol(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,f,c){const m=e.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:Pm()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),i.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=X({},t.state,ko(i.value.back,l,i.value.forward,!0),f,{position:i.value.position});a(l,c,!0),r.value=l}function s(l,f){const c=X({},i.value,t.state,{forward:l,scroll:Mr()});a(c.current,c,!0);const m=X({},ko(r.value,l,null),{position:c.position+1},f);a(l,m,!1),r.value=l}return{location:r,state:i,push:s,replace:o}}function Im(e){e=wm(e);const t=Rm(e),n=Cm(e,t.state,t.location,t.replace);function r(a,o=!0){o||n.pauseListeners(),history.go(a)}const i=X({location:"",base:e,go:r,createHref:Em.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Tm(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Im(e)}function Nm(e){return typeof e=="string"||e&&typeof e=="object"}function Pl(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cl=Symbol("");var So;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(So||(So={}));function Xt(e,t){return X(new Error,{type:e,[Cl]:!0},t)}function We(e,t){return e instanceof Error&&Cl in e&&(t==null||!!(e.type&t))}const Ao="[^/]+?",Mm={sensitive:!1,strict:!1,start:!0,end:!0},Lm=/[.+*?^${}()[\]/\\]/g;function Fm(e,t){const n=X({},Mm,t),r=[];let i=n.start?"^":"";const a=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let m=0;m<f.length;m++){const h=f[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(i+="/"),i+=h.value.replace(Lm,"\\$&"),g+=40;else if(h.type===1){const{value:A,repeatable:R,optional:j,regexp:y}=h;a.push({name:A,repeatable:R,optional:j});const w=y||Ao;if(w!==Ao){g+=10;try{new RegExp(`(${w})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${A}" (${w}): `+D.message)}}let C=R?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;m||(C=j&&f.length<2?`(?:/${C})`:"/"+C),j&&(C+="?"),i+=C,g+=20,j&&(g+=-8),R&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function s(f){const c=f.match(o),m={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",A=a[h-1];m[A.name]=g&&A.repeatable?g.split("/"):g}return m}function l(f){let c="",m=!1;for(const h of e){(!m||!c.endsWith("/"))&&(c+="/"),m=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:R,optional:j}=g,y=A in f?f[A]:"";if(Fe(y)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const w=Fe(y)?y.join("/"):y;if(!w)if(j)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):m=!0);else throw new Error(`Missing required param "${A}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:a,parse:s,stringify:l}}function jm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function $m(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const a=jm(r[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-r.length)===1){if(Oo(r))return 1;if(Oo(i))return-1}return i.length-r.length}function Oo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Dm={type:0,value:""},zm=/[a-zA-Z0-9_]/;function Hm(e){if(!e)return[[]];if(e==="/")return[[Dm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const i=[];let a;function o(){a&&i.push(a),a=[]}let s=0,l,f="",c="";function m(){f&&(n===0?a.push({type:0,value:f}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&m(),o()):l===":"?(m(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:zm.test(l)?h():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),m(),o(),i}function Um(e,t,n){const r=Fm(Hm(e.path),n),i=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Vm(e,t){const n=[],r=new Map;t=Ro({strict:!1,end:!0,sensitive:!1},t);function i(c){return r.get(c)}function a(c,m,h){const g=!h,A=Bm(c);A.aliasOf=h&&h.record;const R=Ro(t,c),j=[A];if("alias"in c){const C=typeof c.alias=="string"?[c.alias]:c.alias;for(const D of C)j.push(X({},A,{components:h?h.record.components:A.components,path:D,aliasOf:h?h.record:A}))}let y,w;for(const C of j){const{path:D}=C;if(m&&D[0]!=="/"){const B=m.record.path,$=B[B.length-1]==="/"?"":"/";C.path=m.record.path+(D&&$+D)}if(y=Um(C,m,R),h?h.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&c.name&&!Co(y)&&o(c.name)),A.children){const B=A.children;for(let $=0;$<B.length;$++)a(B[$],y,h&&h.children[$])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return w?()=>{o(w)}:pn}function o(c){if(Pl(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let m=0;for(;m<n.length&&$m(c,n[m])>=0&&(c.record.path!==n[m].record.path||!Rl(c,n[m]));)m++;n.splice(m,0,c),c.record.name&&!Co(c)&&r.set(c.record.name,c)}function f(c,m){let h,g={},A,R;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Xt(1,{location:c});R=h.record.name,g=X(Po(m.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),c.params&&Po(c.params,h.keys.map(w=>w.name))),A=h.stringify(g)}else if(c.path!=null)A=c.path,h=n.find(w=>w.re.test(A)),h&&(g=h.parse(A),R=h.record.name);else{if(h=m.name?r.get(m.name):n.find(w=>w.re.test(m.path)),!h)throw Xt(1,{location:c,currentLocation:m});R=h.record.name,g=X({},m.params,c.params),A=h.stringify(g)}const j=[];let y=h;for(;y;)j.unshift(y.record),y=y.parent;return{name:R,path:A,params:g,matched:j,meta:Wm(j)}}return e.forEach(c=>a(c)),{addRoute:a,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:i}}function Po(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Bm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Km(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Km(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Co(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wm(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Ro(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Rl(e,t){return t.children.some(n=>n===e||Rl(e,n))}function Ym(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const a=r[i].replace(xl," "),o=a.indexOf("="),s=Cn(o<0?a:a.slice(0,o)),l=o<0?null:Cn(a.slice(o+1));if(s in t){let f=t[s];Fe(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Io(e){let t="";for(let n in e){const r=e[n];if(n=dm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Fe(r)?r.map(a=>a&&Ei(a)):[r&&Ei(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Gm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Fe(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const qm=Symbol(""),To=Symbol(""),oa=Symbol(""),Il=Symbol(""),Si=Symbol("");function nn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ut(e,t,n,r,i,a=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,l)=>{const f=h=>{h===!1?l(Xt(4,{from:n,to:t})):h instanceof Error?l(h):Nm(h)?l(Xt(2,{from:t,to:h})):(o&&r.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),s())},c=a(()=>e.call(r&&r.instances[i],t,n,f));let m=Promise.resolve(c);e.length<3&&(m=m.then(f)),m.catch(h=>l(h))})}function Qr(e,t,n,r,i=a=>a()){const a=[];for(const o of e)for(const s in o.components){let l=o.components[s];if(!(t!=="beforeRouteEnter"&&!o.instances[s]))if(Xm(l)){const c=(l.__vccOpts||l)[t];c&&a.push(ut(c,n,r,o,s,i))}else{let f=l();a.push(()=>f.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const m=tm(c)?c.default:c;o.components[s]=m;const g=(m.__vccOpts||m)[t];return g&&ut(g,n,r,o,s,i)()}))}}return a}function Xm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function No(e){const t=qe(oa),n=qe(Il),r=me(()=>{const l=ht(e.to);return t.resolve(l)}),i=me(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],m=n.matched;if(!c||!m.length)return-1;const h=m.findIndex(qt.bind(null,c));if(h>-1)return h;const g=Mo(l[f-2]);return f>1&&Mo(c)===g&&m[m.length-1].path!==g?m.findIndex(qt.bind(null,l[f-2])):h}),a=me(()=>i.value>-1&&Zm(n.params,r.value.params)),o=me(()=>i.value>-1&&i.value===n.matched.length-1&&Al(n.params,r.value.params));function s(l={}){return Jm(l)?t[ht(e.replace)?"replace":"push"](ht(e.to)).catch(pn):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}const Qm=Nn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:No,setup(e,{slots:t}){const n=Er(No(e)),{options:r}=qe(oa),i=me(()=>({[Lo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Lo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Ki("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),Tl=Qm;function Jm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Zm(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Fe(i)||i.length!==r.length||r.some((a,o)=>a!==i[o]))return!1}return!0}function Mo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Lo=(e,t,n)=>e??t??n,eh=Nn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=qe(Si),i=me(()=>e.route||r.value),a=qe(To,0),o=me(()=>{let f=ht(a);const{matched:c}=i.value;let m;for(;(m=c[f])&&!m.components;)f++;return f}),s=me(()=>i.value.matched[o.value]);nr(To,me(()=>o.value+1)),nr(qm,s),nr(Si,i);const l=cs();return ln(()=>[l.value,s.value,e.name],([f,c,m],[h,g,A])=>{c&&(c.instances[m]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!qt(c,g)||!h)&&(c.enterCallbacks[m]||[]).forEach(R=>R(f))},{flush:"post"}),()=>{const f=i.value,c=e.name,m=s.value,h=m&&m.components[c];if(!h)return Fo(n.default,{Component:h,route:f});const g=m.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,j=Ki(h,X({},A,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[c]=null)},ref:l}));return Fo(n.default,{Component:j,route:f})||j}}});function Fo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Nl=eh;function th(e){const t=Vm(e.routes,e),n=e.parseQuery||Ym,r=e.stringifyQuery||Io,i=e.history,a=nn(),o=nn(),s=nn(),l=gc(st);let f=st;Dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=qr.bind(null,b=>""+b),m=qr.bind(null,hm),h=qr.bind(null,Cn);function g(b,T){let O,L;return Pl(b)?(O=t.getRecordMatcher(b),L=T):L=b,t.addRoute(L,O)}function A(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function R(){return t.getRoutes().map(b=>b.record)}function j(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=X({},T||l.value),typeof b=="string"){const d=Xr(n,b,T.path),p=t.resolve({path:d.path},T),_=i.createHref(d.fullPath);return X(d,p,{params:h(p.params),hash:Cn(d.hash),redirectedFrom:void 0,href:_})}let O;if(b.path!=null)O=X({},b,{path:Xr(n,b.path,T.path).path});else{const d=X({},b.params);for(const p in d)d[p]==null&&delete d[p];O=X({},b,{params:m(d)}),T.params=m(T.params)}const L=t.resolve(O,T),G=b.hash||"";L.params=c(h(L.params));const ie=vm(r,X({},b,{hash:um(G),path:L.path})),u=i.createHref(ie);return X({fullPath:ie,hash:G,query:r===Io?Gm(b.query):b.query||{}},L,{redirectedFrom:void 0,href:u})}function w(b){return typeof b=="string"?Xr(n,b,l.value.path):X({},b)}function C(b,T){if(f!==b)return Xt(8,{from:T,to:b})}function D(b){return Z(b)}function B(b){return D(X(w(b),{replace:!0}))}function $(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let L=typeof O=="function"?O(b):O;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=w(L):{path:L},L.params={}),X({query:b.query,hash:b.hash,params:L.path!=null?{}:b.params},L)}}function Z(b,T){const O=f=y(b),L=l.value,G=b.state,ie=b.force,u=b.replace===!0,d=$(O);if(d)return Z(X(w(d),{state:typeof d=="object"?X({},G,d.state):G,force:ie,replace:u}),T||O);const p=O;p.redirectedFrom=T;let _;return!ie&&bm(r,L,O)&&(_=Xt(16,{to:p,from:L}),$e(L,L,!0,!1)),(_?Promise.resolve(_):Ce(p,L)).catch(v=>We(v)?We(v,2)?v:it(v):Y(v,p,L)).then(v=>{if(v){if(We(v,2))return Z(X({replace:u},w(v.to),{state:typeof v.to=="object"?X({},G,v.to.state):G,force:ie}),T||p)}else v=Et(p,L,!0,u,G);return rt(p,L,v),v})}function pe(b,T){const O=C(b,T);return O?Promise.reject(O):Promise.resolve()}function ge(b){const T=jt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Ce(b,T){let O;const[L,G,ie]=nh(b,T);O=Qr(L.reverse(),"beforeRouteLeave",b,T);for(const d of L)d.leaveGuards.forEach(p=>{O.push(ut(p,b,T))});const u=pe.bind(null,b,T);return O.push(u),ve(O).then(()=>{O=[];for(const d of a.list())O.push(ut(d,b,T));return O.push(u),ve(O)}).then(()=>{O=Qr(G,"beforeRouteUpdate",b,T);for(const d of G)d.updateGuards.forEach(p=>{O.push(ut(p,b,T))});return O.push(u),ve(O)}).then(()=>{O=[];for(const d of ie)if(d.beforeEnter)if(Fe(d.beforeEnter))for(const p of d.beforeEnter)O.push(ut(p,b,T));else O.push(ut(d.beforeEnter,b,T));return O.push(u),ve(O)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),O=Qr(ie,"beforeRouteEnter",b,T,ge),O.push(u),ve(O))).then(()=>{O=[];for(const d of o.list())O.push(ut(d,b,T));return O.push(u),ve(O)}).catch(d=>We(d,8)?d:Promise.reject(d))}function rt(b,T,O){s.list().forEach(L=>ge(()=>L(b,T,O)))}function Et(b,T,O,L,G){const ie=C(b,T);if(ie)return ie;const u=T===st,d=Dt?history.state:{};O&&(L||u?i.replace(b.fullPath,X({scroll:u&&d&&d.scroll},G)):i.push(b.fullPath,G)),l.value=b,$e(b,T,O,u),it()}let je;function Zt(){je||(je=i.listen((b,T,O)=>{if(!$n.listening)return;const L=y(b),G=$(L);if(G){Z(X(G,{replace:!0}),L).catch(pn);return}f=L;const ie=l.value;Dt&&Am(Eo(ie.fullPath,O.delta),Mr()),Ce(L,ie).catch(u=>We(u,12)?u:We(u,2)?(Z(u.to,L).then(d=>{We(d,20)&&!O.delta&&O.type===Rn.pop&&i.go(-1,!1)}).catch(pn),Promise.reject()):(O.delta&&i.go(-O.delta,!1),Y(u,L,ie))).then(u=>{u=u||Et(L,ie,!1),u&&(O.delta&&!We(u,8)?i.go(-O.delta,!1):O.type===Rn.pop&&We(u,20)&&i.go(-1,!1)),rt(L,ie,u)}).catch(pn)}))}let Lt=nn(),ce=nn(),Q;function Y(b,T,O){it(b);const L=ce.list();return L.length?L.forEach(G=>G(b,T,O)):console.error(b),Promise.reject(b)}function Ke(){return Q&&l.value!==st?Promise.resolve():new Promise((b,T)=>{Lt.add([b,T])})}function it(b){return Q||(Q=!b,Zt(),Lt.list().forEach(([T,O])=>b?O(b):T()),Lt.reset()),b}function $e(b,T,O,L){const{scrollBehavior:G}=e;if(!Dt||!G)return Promise.resolve();const ie=!O&&Om(Eo(b.fullPath,0))||(L||!O)&&history.state&&history.state.scroll||null;return zi().then(()=>G(b,T,ie)).then(u=>u&&Sm(u)).catch(u=>Y(u,b,T))}const we=b=>i.go(b);let Ft;const jt=new Set,$n={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:j,getRoutes:R,resolve:y,options:e,push:D,replace:B,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ce.add,isReady:Ke,install(b){const T=this;b.component("RouterLink",Tl),b.component("RouterView",Nl),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),Dt&&!Ft&&l.value===st&&(Ft=!0,D(i.location).catch(G=>{}));const O={};for(const G in st)Object.defineProperty(O,G,{get:()=>l.value[G],enumerable:!0});b.provide(oa,T),b.provide(Il,rs(O)),b.provide(Si,l);const L=b.unmount;jt.add(b),b.unmount=function(){jt.delete(b),jt.size<1&&(f=st,je&&je(),je=null,l.value=st,Ft=!1,Q=!1),L()}}};function ve(b){return b.reduce((T,O)=>T.then(()=>ge(O)),Promise.resolve())}return $n}function nh(e,t){const n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const s=t.matched[o];s&&(e.matched.find(f=>qt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>qt(f,l))||i.push(l))}return[n,r,i]}const rh={class:"tabs"},ih=Nn({__name:"Navigation",setup(e){const t=[{name:"games",label:"Games"},{name:"platforms",label:"Platforms"},{name:"utils",label:"Utils"}];return(n,r)=>(wn(),ci("div",rh,[dr("ul",null,[(wn(),ci(Re,null,Gc(t,(i,a)=>dr("li",{key:a,class:wr({"is-active":n.$route.name===i.name})},[he(ht(Tl),{class:"navbar-item",to:{name:i.name}},{default:bs(()=>[Hs(Wl(i.label),1)]),_:2},1032,["to"])],2)),64))])]))}}),ah=Nn({__name:"App",setup(e){return(t,n)=>(wn(),ci("div",null,[he(ih),he(ht(Nl))]))}});const oh="modulepreload",sh=function(e){return"/vgamelibrary/"+e},jo={},Jr=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=sh(a),a in jo)return;jo[a]=!0;const o=a.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const m=i[c];if(m.href===a&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":oh,o||(f.as="script",f.crossOrigin=""),f.href=a,document.head.appendChild(f),o)return new Promise((c,m)=>{f.addEventListener("load",c),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},lh=th({history:Tm(),routes:[{path:"/",redirect:"games"},{path:"/platforms",name:"platforms",component:()=>Jr(()=>import("./Platforms-ab345d98.js"),["assets/Platforms-ab345d98.js","assets/PlatformRepository-8719ee6f.js"])},{path:"/games",name:"games",component:()=>Jr(()=>import("./Games-e3eeb0a0.js"),["assets/Games-e3eeb0a0.js","assets/PlatformRepository-8719ee6f.js","assets/GameRepository-cfff9b67.js"])},{path:"/utils",name:"utils",component:()=>Jr(()=>import("./Utils-e6955906.js"),["assets/Utils-e6955906.js","assets/PlatformRepository-8719ee6f.js","assets/GameRepository-cfff9b67.js"])}]});Dd.add(em,Zd);const Lr=tu(ah);Lr.use(ou());Lr.use(lh);Lr.component("font-awesome-icon",Jd);Lr.mount("#app");export{Re as F,wn as a,dr as b,Ds as c,Nn as d,fh as e,gh as f,me as g,ci as h,Er as i,Gc as j,dh as k,ch as l,hh as m,wr as n,zc as o,he as p,ph as q,cs as r,vh as s,Wl as t,uh as u,mh as v,bs as w};
