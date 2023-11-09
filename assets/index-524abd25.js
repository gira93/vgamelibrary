(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Pa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const te={},Ht=[],Me=()=>{},Pl=()=>!1,Cl=/^on[^a-z]/,xr=e=>Cl.test(e),Ca=e=>e.startsWith("onUpdate:"),me=Object.assign,Sa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Sl=Object.prototype.hasOwnProperty,W=(e,t)=>Sl.call(e,t),$=Array.isArray,Bt=e=>Nn(e)==="[object Map]",en=e=>Nn(e)==="[object Set]",ui=e=>Nn(e)==="[object Date]",B=e=>typeof e=="function",se=e=>typeof e=="string",Yt=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Do=e=>(ee(e)||B(e))&&B(e.then)&&B(e.catch),zo=Object.prototype.toString,Nn=e=>zo.call(e),Rl=e=>Nn(e).slice(8,-1),$o=e=>Nn(e)==="[object Object]",Ra=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tr=Pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Il=/-(\w)/g,Ke=wr(e=>e.replace(Il,(t,n)=>n?n.toUpperCase():"")),Tl=/\B([A-Z])/g,Tt=wr(e=>e.replace(Tl,"-$1").toLowerCase()),_r=wr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Dr=wr(e=>e?`on${_r(e)}`:""),St=(e,t)=>!Object.is(e,t),nr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},sr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},lr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let di;const Zr=()=>di||(di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ia(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=se(r)?Fl(r):Ia(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(se(e)||ee(e))return e}const Nl=/;(?![^(]*\))/g,Ml=/:([^]+)/,Ll=/\/\*[^]*?\*\//g;function Fl(e){const t={};return e.replace(Ll,"").split(Nl).forEach(n=>{if(n){const r=n.split(Ml);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Er(e){let t="";if(se(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=Er(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const jl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dl=Pa(jl);function Ho(e){return!!e||e===""}function zl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Mn(e[r],t[r]);return n}function Mn(e,t){if(e===t)return!0;let n=ui(e),r=ui(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Yt(e),r=Yt(t),n||r)return e===t;if(n=$(e),r=$(t),n||r)return n&&r?zl(e,t):!1;if(n=ee(e),r=ee(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Mn(e[o],t[o]))return!1}}return String(e)===String(t)}function Ta(e,t){return e.findIndex(n=>Mn(n,t))}const $l=e=>se(e)?e:e==null?"":$(e)||ee(e)&&(e.toString===zo||!B(e.toString))?JSON.stringify(e,Bo,2):String(e),Bo=(e,t)=>t&&t.__v_isRef?Bo(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:en(t)?{[`Set(${t.size})`]:[...t.values()]}:ee(t)&&!$(t)&&!$o(t)?String(t):t;let Re;class Uo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Hl(e){return new Uo(e)}function Bl(e,t=Re){t&&t.active&&t.effects.push(e)}function Ul(){return Re}const Na=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ko=e=>(e.w&pt)>0,Wo=e=>(e.n&pt)>0,Kl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pt},Wl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ko(a)&&!Wo(a)?a.delete(e):t[n++]=a,a.w&=~pt,a.n&=~pt}t.length=n}},ea=new WeakMap;let fn=0,pt=1;const ta=30;let Ie;const Pt=Symbol(""),na=Symbol("");class Ma{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bl(this,r)}run(){if(!this.active)return this.fn();let t=Ie,n=ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ie,Ie=this,ut=!0,pt=1<<++fn,fn<=ta?Kl(this):mi(this),this.fn()}finally{fn<=ta&&Wl(this),pt=1<<--fn,Ie=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ie===this?this.deferStop=!0:this.active&&(mi(this),this.onStop&&this.onStop(),this.active=!1)}}function mi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ut=!0;const Yo=[];function tn(){Yo.push(ut),ut=!1}function nn(){const e=Yo.pop();ut=e===void 0?!0:e}function Ee(e,t,n){if(ut&&Ie){let r=ea.get(e);r||ea.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Na()),Vo(a)}}function Vo(e,t){let n=!1;fn<=ta?Wo(e)||(e.n|=pt,n=!Ko(e)):n=!e.has(Ie),n&&(e.add(Ie),Ie.deps.push(e))}function Xe(e,t,n,r,a,i){const o=ea.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||!Yt(c)&&c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?Ra(n)&&s.push(o.get("length")):(s.push(o.get(Pt)),Bt(e)&&s.push(o.get(na)));break;case"delete":$(e)||(s.push(o.get(Pt)),Bt(e)&&s.push(o.get(na)));break;case"set":Bt(e)&&s.push(o.get(Pt));break}if(s.length===1)s[0]&&ra(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);ra(Na(l))}}function ra(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&pi(r);for(const r of n)r.computed||pi(r)}function pi(e,t){(e!==Ie||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Yl=Pa("__proto__,__v_isRef,__isVue"),qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yt)),hi=Vl();function Vl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tn();const r=Y(this)[t].apply(this,n);return nn(),r}}),e}function ql(e){const t=Y(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Xo{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?lf:Zo:i?Jo:Qo).get(t))return t;const o=$(t);if(!a){if(o&&W(hi,n))return Reflect.get(hi,n,r);if(n==="hasOwnProperty")return ql}const s=Reflect.get(t,n,r);return(Yt(n)?qo.has(n):Yl(n))||(a||Ee(t,"get",n),i)?s:ge(s)?o&&Ra(n)?s:s.value:ee(s)?a?ts(s):Ar(s):s}}class Go extends Xo{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Vt(i)&&ge(i)&&!ge(r))return!1;if(!this._shallow&&(!fr(r)&&!Vt(r)&&(i=Y(i),r=Y(r)),!$(t)&&ge(i)&&!ge(r)))return i.value=r,!0;const o=$(t)&&Ra(n)?Number(n)<t.length:W(t,n),s=Reflect.set(t,n,r,a);return t===Y(a)&&(o?St(r,i)&&Xe(t,"set",n,r):Xe(t,"add",n,r)),s}deleteProperty(t,n){const r=W(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Xe(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Yt(n)||!qo.has(n))&&Ee(t,"has",n),r}ownKeys(t){return Ee(t,"iterate",$(t)?"length":Pt),Reflect.ownKeys(t)}}class Xl extends Xo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Gl=new Go,Ql=new Xl,Jl=new Go(!0),La=e=>e,kr=e=>Reflect.getPrototypeOf(e);function $n(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(St(t,i)&&Ee(a,"get",t),Ee(a,"get",i));const{has:o}=kr(a),s=r?La:n?za:xn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Hn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(St(e,a)&&Ee(r,"has",e),Ee(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Bn(e,t=!1){return e=e.__v_raw,!t&&Ee(Y(e),"iterate",Pt),Reflect.get(e,"size",e)}function gi(e){e=Y(e);const t=Y(this);return kr(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function vi(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=kr(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?St(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function bi(e){const t=Y(this),{has:n,get:r}=kr(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Xe(t,"delete",e,void 0),i}function yi(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function Un(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?La:e?za:xn;return!e&&Ee(s,"iterate",Pt),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Kn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?La:t?za:xn;return!t&&Ee(i,"iterate",l?na:Pt),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:this}}function Zl(){const e={get(i){return $n(this,i)},get size(){return Bn(this)},has:Hn,add:gi,set:vi,delete:bi,clear:yi,forEach:Un(!1,!1)},t={get(i){return $n(this,i,!1,!0)},get size(){return Bn(this)},has:Hn,add:gi,set:vi,delete:bi,clear:yi,forEach:Un(!1,!0)},n={get(i){return $n(this,i,!0)},get size(){return Bn(this,!0)},has(i){return Hn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Un(!0,!1)},r={get(i){return $n(this,i,!0,!0)},get size(){return Bn(this,!0)},has(i){return Hn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Kn(i,!1,!1),n[i]=Kn(i,!0,!1),t[i]=Kn(i,!1,!0),r[i]=Kn(i,!0,!0)}),[e,n,t,r]}const[ef,tf,nf,rf]=Zl();function Fa(e,t){const n=t?e?rf:nf:e?tf:ef;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(W(n,a)&&a in r?n:r,a,i)}const af={get:Fa(!1,!1)},of={get:Fa(!1,!0)},sf={get:Fa(!0,!1)},Qo=new WeakMap,Jo=new WeakMap,Zo=new WeakMap,lf=new WeakMap;function ff(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cf(e){return e.__v_skip||!Object.isExtensible(e)?0:ff(Rl(e))}function Ar(e){return Vt(e)?e:ja(e,!1,Gl,af,Qo)}function es(e){return ja(e,!1,Jl,of,Jo)}function ts(e){return ja(e,!0,Ql,sf,Zo)}function ja(e,t,n,r,a){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=cf(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ut(e){return Vt(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function fr(e){return!!(e&&e.__v_isShallow)}function ns(e){return Ut(e)||Vt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Da(e){return sr(e,"__v_skip",!0),e}const xn=e=>ee(e)?Ar(e):e,za=e=>ee(e)?ts(e):e;function rs(e){ut&&Ie&&(e=Y(e),Vo(e.dep||(e.dep=Na())))}function as(e,t){e=Y(e);const n=e.dep;n&&ra(n)}function ge(e){return!!(e&&e.__v_isRef===!0)}function is(e){return os(e,!1)}function uf(e){return os(e,!0)}function os(e,t){return ge(e)?e:new df(e,t)}class df{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:xn(t)}get value(){return rs(this),this._value}set value(t){const n=this.__v_isShallow||fr(t)||Vt(t);t=n?t:Y(t),St(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xn(t),as(this))}}function dt(e){return ge(e)?e.value:e}const mf={get:(e,t,n)=>dt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ge(a)&&!ge(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ss(e){return Ut(e)?e:new Proxy(e,mf)}class pf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ma(t,()=>{this._dirty||(this._dirty=!0,as(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return rs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function hf(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Me):(r=e.get,a=e.set),new pf(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Or(i,t,n)}return a}function Le(e,t,n,r){if(B(e)){const i=mt(e,t,n,r);return i&&Do(i)&&i.catch(o=>{Or(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Le(e[i],t,n,r));return a}function Or(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){mt(l,null,10,[e,o,s]);return}}gf(e,n,a,r)}function gf(e,t,n,r=!0){console.error(e)}let wn=!1,aa=!1;const he=[];let Be=0;const Kt=[];let Ve=null,_t=0;const ls=Promise.resolve();let $a=null;function fs(e){const t=$a||ls;return e?t.then(this?e.bind(this):e):t}function vf(e){let t=Be+1,n=he.length;for(;t<n;){const r=t+n>>>1,a=he[r],i=_n(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function Ha(e){(!he.length||!he.includes(e,wn&&e.allowRecurse?Be+1:Be))&&(e.id==null?he.push(e):he.splice(vf(e.id),0,e),cs())}function cs(){!wn&&!aa&&(aa=!0,$a=ls.then(ds))}function bf(e){const t=he.indexOf(e);t>Be&&he.splice(t,1)}function yf(e){$(e)?Kt.push(...e):(!Ve||!Ve.includes(e,e.allowRecurse?_t+1:_t))&&Kt.push(e),cs()}function xi(e,t=wn?Be+1:0){for(;t<he.length;t++){const n=he[t];n&&n.pre&&(he.splice(t,1),t--,n())}}function us(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((n,r)=>_n(n)-_n(r)),_t=0;_t<Ve.length;_t++)Ve[_t]();Ve=null,_t=0}}const _n=e=>e.id==null?1/0:e.id,xf=(e,t)=>{const n=_n(e)-_n(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ds(e){aa=!1,wn=!0,he.sort(xf);const t=Me;try{for(Be=0;Be<he.length;Be++){const n=he[Be];n&&n.active!==!1&&mt(n,null,14)}}finally{Be=0,he.length=0,us(),wn=!1,$a=null,(he.length||Kt.length)&&ds()}}function wf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||te;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||te;p&&(a=n.map(g=>se(g)?g.trim():g)),d&&(a=n.map(lr))}let s,l=r[s=Dr(t)]||r[s=Dr(Ke(t))];!l&&i&&(l=r[s=Dr(Tt(t))]),l&&Le(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Le(f,e,6,a)}}function ms(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=f=>{const c=ms(f,t,!0);c&&(s=!0,me(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ee(e)&&r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):me(o,i),ee(e)&&r.set(e,o),o)}function Pr(e,t){return!e||!xr(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,Tt(t))||W(e,t))}let ve=null,ps=null;function cr(e){const t=ve;return ve=e,ps=e&&e.type.__scopeId||null,t}function hs(e,t=ve,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ii(-1);const i=cr(t);let o;try{o=e(...a)}finally{cr(i),r._d&&Ii(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:P,inheritAttrs:C}=e;let F,y;const w=cr(e);try{if(n.shapeFlag&4){const S=a||r;F=He(c.call(S,S,d,i,g,p,P)),y=l}else{const S=t;F=He(S.length>1?S(i,{attrs:l,slots:s,emit:f}):S(i,null)),y=t.props?l:_f(l)}}catch(S){hn.length=0,Or(S,e,1),F=de(ht)}let L=F;if(y&&C!==!1){const S=Object.keys(y),{shapeFlag:U}=L;S.length&&U&7&&(o&&S.some(Ca)&&(y=Ef(y,o)),L=qt(L,y))}return n.dirs&&(L=qt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),F=L,cr(w),F}const _f=e=>{let t;for(const n in e)(n==="class"||n==="style"||xr(n))&&((t||(t={}))[n]=e[n]);return t},Ef=(e,t)=>{const n={};for(const r in e)(!Ca(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function kf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!Pr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?wi(r,o,f):!0:!!o;return!1}function wi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Pr(n,i))return!0}return!1}function Af({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gs="components";function tp(e,t){return Pf(gs,e,!0,t)||e}const Of=Symbol.for("v-ndc");function Pf(e,t,n=!0,r=!1){const a=ve||ue;if(a){const i=a.type;if(e===gs){const s=yc(i,!1);if(s&&(s===t||s===Ke(t)||s===_r(Ke(t))))return i}const o=_i(a[e]||i[e],t)||_i(a.appContext[e],t);return!o&&r?i:o}}function _i(e,t){return e&&(e[t]||e[Ke(t)]||e[_r(Ke(t))])}const Cf=e=>e.__isSuspense;function Sf(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):yf(e)}const Wn={};function dn(e,t,n){return vs(e,t,n)}function vs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=te){var s;const l=Ul()===((s=ue)==null?void 0:s.scope)?ue:null;let f,c=!1,d=!1;if(ge(e)?(f=()=>e.value,c=fr(e)):Ut(e)?(f=()=>e,r=!0):$(e)?(d=!0,c=e.some(S=>Ut(S)||fr(S)),f=()=>e.map(S=>{if(ge(S))return S.value;if(Ut(S))return kt(S);if(B(S))return mt(S,l,2)})):B(e)?t?f=()=>mt(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),Le(e,l,3,[g])}:f=Me,t&&r){const S=f;f=()=>kt(S())}let p,g=S=>{p=w.onStop=()=>{mt(S,l,4)}},P;if(An)if(g=Me,t?n&&Le(t,l,3,[f(),d?[]:void 0,g]):f(),a==="sync"){const S=_c();P=S.__watcherHandles||(S.__watcherHandles=[])}else return Me;let C=d?new Array(e.length).fill(Wn):Wn;const F=()=>{if(w.active)if(t){const S=w.run();(r||c||(d?S.some((U,J)=>St(U,C[J])):St(S,C)))&&(p&&p(),Le(t,l,3,[S,C===Wn?void 0:d&&C[0]===Wn?[]:C,g]),C=S)}else w.run()};F.allowRecurse=!!t;let y;a==="sync"?y=F:a==="post"?y=()=>_e(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),y=()=>Ha(F));const w=new Ma(f,y);t?n?F():C=w.run():a==="post"?_e(w.run.bind(w),l&&l.suspense):w.run();const L=()=>{w.stop(),l&&l.scope&&Sa(l.scope.effects,w)};return P&&P.push(L),L}function Rf(e,t,n){const r=this.proxy,a=se(e)?e.includes(".")?bs(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=ue;Xt(this);const s=vs(a,i.bind(r),n);return o?Xt(o):Ct(),s}function bs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function kt(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))kt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)kt(e[n],t);else if(en(e)||Bt(e))e.forEach(n=>{kt(n,t)});else if($o(e))for(const n in e)kt(e[n],t);return e}function np(e,t){const n=ve;if(n===null)return e;const r=Ir(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=te]=t[i];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&kt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function xt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(tn(),Le(l,n,8,[e.el,s,e,t]),nn())}}/*! #__NO_SIDE_EFFECTS__ */function Ln(e,t){return B(e)?(()=>me({name:e.name},t,{setup:e}))():e}const mn=e=>!!e.type.__asyncLoader,ys=e=>e.type.__isKeepAlive;function If(e,t){xs(e,"a",t)}function Tf(e,t){xs(e,"da",t)}function xs(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Cr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ys(a.parent.vnode)&&Nf(r,t,n,a),a=a.parent}}function Nf(e,t,n,r){const a=Cr(t,e,r,!0);ws(()=>{Sa(r[t],a)},n)}function Cr(e,t,n=ue,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tn(),Xt(n);const s=Le(t,n,e,o);return Ct(),nn(),s});return r?a.unshift(i):a.push(i),i}}const tt=e=>(t,n=ue)=>(!An||e==="sp")&&Cr(e,(...r)=>t(...r),n),Mf=tt("bm"),Lf=tt("m"),Ff=tt("bu"),jf=tt("u"),Df=tt("bum"),ws=tt("um"),zf=tt("sp"),$f=tt("rtg"),Hf=tt("rtc");function Bf(e,t=ue){Cr("ec",e,t)}function Uf(e,t,n,r){let a;const i=n&&n[r];if($(e)||se(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ee(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}function rp(e,t,n={},r,a){if(ve.isCE||ve.parent&&mn(ve.parent)&&ve.parent.isCE)return t!=="default"&&(n.name=t),de("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),En();const o=i&&_s(i(n)),s=Ts(Ce,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function _s(e){return e.some(t=>mr(t)?!(t.type===ht||t.type===Ce&&!_s(t.children)):!0)?e:null}const ia=e=>e?Ls(e)?Ir(e)||e.proxy:ia(e.parent):null,pn=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ia(e.parent),$root:e=>ia(e.root),$emit:e=>e.emit,$options:e=>Ba(e),$forceUpdate:e=>e.f||(e.f=()=>Ha(e.update)),$nextTick:e=>e.n||(e.n=fs.bind(e.proxy)),$watch:e=>Rf.bind(e)}),$r=(e,t)=>e!==te&&!e.__isScriptSetup&&W(e,t),Kf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if($r(r,t))return o[t]=1,r[t];if(a!==te&&W(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&W(f,t))return o[t]=3,i[t];if(n!==te&&W(n,t))return o[t]=4,n[t];oa&&(o[t]=0)}}const c=pn[t];let d,p;if(c)return t==="$attrs"&&Ee(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==te&&W(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,W(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return $r(a,t)?(a[t]=n,!0):r!==te&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==te&&W(e,o)||$r(t,o)||(s=i[0])&&W(s,o)||W(r,o)||W(pn,o)||W(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ei(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let oa=!0;function Wf(e){const t=Ba(e),n=e.proxy,r=e.ctx;oa=!1,t.beforeCreate&&ki(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:P,activated:C,deactivated:F,beforeDestroy:y,beforeUnmount:w,destroyed:L,unmounted:S,render:U,renderTracked:J,renderTriggered:ae,errorCaptured:ke,serverPrefetch:be,expose:Pe,inheritAttrs:rt,components:yt,directives:je,filters:an}=t;if(f&&Yf(f,r,null),o)for(const Q in o){const V=o[Q];B(V)&&(r[Q]=V.bind(n))}if(a){const Q=a.call(n,n);ee(Q)&&(e.data=Ar(Q))}if(oa=!0,i)for(const Q in i){const V=i[Q],We=B(V)?V.bind(n,n):B(V.get)?V.get.bind(n,n):Me,at=!B(V)&&B(V.set)?V.set.bind(n):Me,De=ce({get:We,set:at});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>De.value,set:xe=>De.value=xe})}if(s)for(const Q in s)Es(s[Q],r,n,Q);if(l){const Q=B(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(V=>{rr(V,Q[V])})}c&&ki(c,e,"c");function fe(Q,V){$(V)?V.forEach(We=>Q(We.bind(n))):V&&Q(V.bind(n))}if(fe(Mf,d),fe(Lf,p),fe(Ff,g),fe(jf,P),fe(If,C),fe(Tf,F),fe(Bf,ke),fe(Hf,J),fe($f,ae),fe(Df,w),fe(ws,S),fe(zf,be),$(Pe))if(Pe.length){const Q=e.exposed||(e.exposed={});Pe.forEach(V=>{Object.defineProperty(Q,V,{get:()=>n[V],set:We=>n[V]=We})})}else e.exposed||(e.exposed={});U&&e.render===Me&&(e.render=U),rt!=null&&(e.inheritAttrs=rt),yt&&(e.components=yt),je&&(e.directives=je)}function Yf(e,t,n=Me){$(e)&&(e=sa(e));for(const r in e){const a=e[r];let i;ee(a)?"default"in a?i=Ge(a.from||r,a.default,!0):i=Ge(a.from||r):i=Ge(a),ge(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ki(e,t,n){Le($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Es(e,t,n,r){const a=r.includes(".")?bs(n,r):()=>n[r];if(se(e)){const i=t[e];B(i)&&dn(a,i)}else if(B(e))dn(a,e.bind(n));else if(ee(e))if($(e))e.forEach(i=>Es(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&dn(a,i,e)}}function Ba(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>ur(l,f,o,!0)),ur(l,t,o)),ee(t)&&i.set(t,l),l}function ur(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&ur(e,i,n,!0),a&&a.forEach(o=>ur(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Vf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Vf={data:Ai,props:Oi,emits:Oi,methods:cn,computed:cn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:cn,directives:cn,watch:Xf,provide:Ai,inject:qf};function Ai(e,t){return t?e?function(){return me(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function qf(e,t){return cn(sa(e),sa(t))}function sa(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?me(Object.create(null),e,t):t}function Oi(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:me(Object.create(null),Ei(e),Ei(t??{})):t}function Xf(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function ks(){return{app:null,config:{isNativeTag:Pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gf=0;function Qf(e,t){return function(r,a=null){B(r)||(r=me({},r)),a!=null&&!ee(a)&&(a=null);const i=ks(),o=new WeakSet;let s=!1;const l=i.app={_uid:Gf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Ec,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...c)):B(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const p=de(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),s=!0,l._container=f,f.__vue_app__=l,Ir(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l},runWithContext(f){dr=l;try{return f()}finally{dr=null}}};return l}}let dr=null;function rr(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=ue||ve;if(r||dr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:dr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}function Jf(e,t,n,r=!1){const a={},i={};sr(i,Rr,1),e.propsDefaults=Object.create(null),As(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:es(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Zf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Pr(e.emitsOptions,p))continue;const g=t[p];if(l)if(W(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const P=Ke(p);a[P]=la(l,s,P,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{As(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!W(t,d)&&((c=Tt(d))===d||!W(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=la(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!W(t,d))&&(delete i[d],f=!0)}f&&Xe(e,"set","$attrs")}function As(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(tr(l))continue;const f=t[l];let c;a&&W(a,c=Ke(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:Pr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Y(n),f=s||te;for(let c=0;c<i.length;c++){const d=i[c];n[d]=la(a,l,d,f[d],e,!W(f,d))}}return o}function la(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Xt(a),r=f[n]=l.call(null,t),Ct())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Tt(n))&&(r=!0))}return r}function Os(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const c=d=>{l=!0;const[p,g]=Os(d,t,!0);me(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ee(e)&&r.set(e,Ht),Ht;if($(i))for(let c=0;c<i.length;c++){const d=Ke(i[c]);Pi(d)&&(o[d]=te)}else if(i)for(const c in i){const d=Ke(c);if(Pi(d)){const p=i[c],g=o[d]=$(p)||B(p)?{type:p}:me({},p);if(g){const P=Ri(Boolean,g.type),C=Ri(String,g.type);g[0]=P>-1,g[1]=C<0||P<C,(P>-1||W(g,"default"))&&s.push(d)}}}const f=[o,s];return ee(e)&&r.set(e,f),f}function Pi(e){return e[0]!=="$"}function Ci(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Si(e,t){return Ci(e)===Ci(t)}function Ri(e,t){return $(t)?t.findIndex(n=>Si(n,e)):B(t)&&Si(t,e)?0:-1}const Ps=e=>e[0]==="_"||e==="$stable",Ua=e=>$(e)?e.map(He):[He(e)],ec=(e,t,n)=>{if(t._n)return t;const r=hs((...a)=>Ua(t(...a)),n);return r._c=!1,r},Cs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Ps(a))continue;const i=e[a];if(B(i))t[a]=ec(a,i,r);else if(i!=null){const o=Ua(i);t[a]=()=>o}}},Ss=(e,t)=>{const n=Ua(t);e.slots.default=()=>n},tc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),sr(t,"_",n)):Cs(t,e.slots={})}else e.slots={},t&&Ss(e,t);sr(e.slots,Rr,1)},nc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=te;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(me(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Cs(t,a)),o=t}else t&&(Ss(e,t),o={default:1});if(i)for(const s in a)!Ps(s)&&o[s]==null&&delete a[s]};function fa(e,t,n,r,a=!1){if($(e)){e.forEach((p,g)=>fa(p,t&&($(t)?t[g]:t),n,r,a));return}if(mn(r)&&!a)return;const i=r.shapeFlag&4?Ir(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===te?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(se(f)?(c[f]=null,W(d,f)&&(d[f]=null)):ge(f)&&(f.value=null)),B(l))mt(l,s,12,[o,c]);else{const p=se(l),g=ge(l);if(p||g){const P=()=>{if(e.f){const C=p?W(d,l)?d[l]:c[l]:l.value;a?$(C)&&Sa(C,i):$(C)?C.includes(i)||C.push(i):p?(c[l]=[i],W(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,W(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(P.id=-1,_e(P,n)):P()}}}const _e=Sf;function rc(e){return ac(e)}function ac(e,t){const n=Zr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=Me,insertStaticContent:P}=e,C=(u,m,h,v=null,x=null,_=null,R=!1,k=null,A=!!m.dynamicChildren)=>{if(u===m)return;u&&!sn(u,m)&&(v=b(u),xe(u,x,_,!0),u=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:E,ref:D,shapeFlag:N}=m;switch(E){case Sr:F(u,m,h,v);break;case ht:y(u,m,h,v);break;case Hr:u==null&&w(m,h,v,R);break;case Ce:yt(u,m,h,v,x,_,R,k,A);break;default:N&1?U(u,m,h,v,x,_,R,k,A):N&6?je(u,m,h,v,x,_,R,k,A):(N&64||N&128)&&E.process(u,m,h,v,x,_,R,k,A,O)}D!=null&&x&&fa(D,u&&u.ref,_,m||u,!m)},F=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const x=m.el=u.el;m.children!==u.children&&f(x,m.children)}},y=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},w=(u,m,h,v)=>{[u.el,u.anchor]=P(u.children,m,h,v,u.el,u.anchor)},L=({el:u,anchor:m},h,v)=>{let x;for(;u&&u!==m;)x=p(u),r(u,h,v),u=x;r(m,h,v)},S=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},U=(u,m,h,v,x,_,R,k,A)=>{R=R||m.type==="svg",u==null?J(m,h,v,x,_,R,k,A):be(u,m,x,_,R,k,A)},J=(u,m,h,v,x,_,R,k)=>{let A,E;const{type:D,props:N,shapeFlag:z,transition:H,dirs:K}=u;if(A=u.el=o(u.type,_,N&&N.is,N),z&8?c(A,u.children):z&16&&ke(u.children,A,null,v,x,_&&D!=="foreignObject",R,k),K&&xt(u,null,v,"created"),ae(A,u,u.scopeId,R,v),N){for(const G in N)G!=="value"&&!tr(G)&&i(A,G,null,N[G],_,u.children,v,x,pe);"value"in N&&i(A,"value",null,N.value),(E=N.onVnodeBeforeMount)&&$e(E,v,u)}K&&xt(u,null,v,"beforeMount");const Z=ic(x,H);Z&&H.beforeEnter(A),r(A,m,h),((E=N&&N.onVnodeMounted)||Z||K)&&_e(()=>{E&&$e(E,v,u),Z&&H.enter(A),K&&xt(u,null,v,"mounted")},x)},ae=(u,m,h,v,x)=>{if(h&&g(u,h),v)for(let _=0;_<v.length;_++)g(u,v[_]);if(x){let _=x.subTree;if(m===_){const R=x.vnode;ae(u,R,R.scopeId,R.slotScopeIds,x.parent)}}},ke=(u,m,h,v,x,_,R,k,A=0)=>{for(let E=A;E<u.length;E++){const D=u[E]=k?lt(u[E]):He(u[E]);C(null,D,m,h,v,x,_,R,k)}},be=(u,m,h,v,x,_,R)=>{const k=m.el=u.el;let{patchFlag:A,dynamicChildren:E,dirs:D}=m;A|=u.patchFlag&16;const N=u.props||te,z=m.props||te;let H;h&&wt(h,!1),(H=z.onVnodeBeforeUpdate)&&$e(H,h,m,u),D&&xt(m,u,h,"beforeUpdate"),h&&wt(h,!0);const K=x&&m.type!=="foreignObject";if(E?Pe(u.dynamicChildren,E,k,h,v,K,_):R||V(u,m,k,null,h,v,K,_,!1),A>0){if(A&16)rt(k,m,N,z,h,v,x);else if(A&2&&N.class!==z.class&&i(k,"class",null,z.class,x),A&4&&i(k,"style",N.style,z.style,x),A&8){const Z=m.dynamicProps;for(let G=0;G<Z.length;G++){const oe=Z[G],Se=N[oe],Ft=z[oe];(Ft!==Se||oe==="value")&&i(k,oe,Se,Ft,x,u.children,h,v,pe)}}A&1&&u.children!==m.children&&c(k,m.children)}else!R&&E==null&&rt(k,m,N,z,h,v,x);((H=z.onVnodeUpdated)||D)&&_e(()=>{H&&$e(H,h,m,u),D&&xt(m,u,h,"updated")},v)},Pe=(u,m,h,v,x,_,R)=>{for(let k=0;k<m.length;k++){const A=u[k],E=m[k],D=A.el&&(A.type===Ce||!sn(A,E)||A.shapeFlag&70)?d(A.el):h;C(A,E,D,null,v,x,_,R,!0)}},rt=(u,m,h,v,x,_,R)=>{if(h!==v){if(h!==te)for(const k in h)!tr(k)&&!(k in v)&&i(u,k,h[k],null,R,m.children,x,_,pe);for(const k in v){if(tr(k))continue;const A=v[k],E=h[k];A!==E&&k!=="value"&&i(u,k,E,A,R,m.children,x,_,pe)}"value"in v&&i(u,"value",h.value,v.value)}},yt=(u,m,h,v,x,_,R,k,A)=>{const E=m.el=u?u.el:s(""),D=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:z,slotScopeIds:H}=m;H&&(k=k?k.concat(H):H),u==null?(r(E,h,v),r(D,h,v),ke(m.children,h,D,x,_,R,k,A)):N>0&&N&64&&z&&u.dynamicChildren?(Pe(u.dynamicChildren,z,h,x,_,R,k),(m.key!=null||x&&m===x.subTree)&&Rs(u,m,!0)):V(u,m,h,D,x,_,R,k,A)},je=(u,m,h,v,x,_,R,k,A)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?x.ctx.activate(m,h,v,R,A):an(m,h,v,x,_,R,A):Nt(u,m,A)},an=(u,m,h,v,x,_,R)=>{const k=u.component=pc(u,v,x);if(ys(u)&&(k.ctx.renderer=O),hc(k),k.asyncDep){if(x&&x.registerDep(k,fe),!u.el){const A=k.subTree=de(ht);y(null,A,m,h)}return}fe(k,u,m,h,x,_,R)},Nt=(u,m,h)=>{const v=m.component=u.component;if(kf(u,m,h))if(v.asyncDep&&!v.asyncResolved){Q(v,m,h);return}else v.next=m,bf(v.update),v.update();else m.el=u.el,v.vnode=m},fe=(u,m,h,v,x,_,R)=>{const k=()=>{if(u.isMounted){let{next:D,bu:N,u:z,parent:H,vnode:K}=u,Z=D,G;wt(u,!1),D?(D.el=K.el,Q(u,D,R)):D=K,N&&nr(N),(G=D.props&&D.props.onVnodeBeforeUpdate)&&$e(G,H,D,K),wt(u,!0);const oe=zr(u),Se=u.subTree;u.subTree=oe,C(Se,oe,d(Se.el),b(Se),u,x,_),D.el=oe.el,Z===null&&Af(u,oe.el),z&&_e(z,x),(G=D.props&&D.props.onVnodeUpdated)&&_e(()=>$e(G,H,D,K),x)}else{let D;const{el:N,props:z}=m,{bm:H,m:K,parent:Z}=u,G=mn(m);if(wt(u,!1),H&&nr(H),!G&&(D=z&&z.onVnodeBeforeMount)&&$e(D,Z,m),wt(u,!0),N&&q){const oe=()=>{u.subTree=zr(u),q(N,u.subTree,u,x,null)};G?m.type.__asyncLoader().then(()=>!u.isUnmounted&&oe()):oe()}else{const oe=u.subTree=zr(u);C(null,oe,h,v,u,x,_),m.el=oe.el}if(K&&_e(K,x),!G&&(D=z&&z.onVnodeMounted)){const oe=m;_e(()=>$e(D,Z,oe),x)}(m.shapeFlag&256||Z&&mn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&_e(u.a,x),u.isMounted=!0,m=h=v=null}},A=u.effect=new Ma(k,()=>Ha(E),u.scope),E=u.update=()=>A.run();E.id=u.uid,wt(u,!0),E()},Q=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Zf(u,m.props,v,h),nc(u,m.children,h),tn(),xi(),nn()},V=(u,m,h,v,x,_,R,k,A=!1)=>{const E=u&&u.children,D=u?u.shapeFlag:0,N=m.children,{patchFlag:z,shapeFlag:H}=m;if(z>0){if(z&128){at(E,N,h,v,x,_,R,k,A);return}else if(z&256){We(E,N,h,v,x,_,R,k,A);return}}H&8?(D&16&&pe(E,x,_),N!==E&&c(h,N)):D&16?H&16?at(E,N,h,v,x,_,R,k,A):pe(E,x,_,!0):(D&8&&c(h,""),H&16&&ke(N,h,v,x,_,R,k,A))},We=(u,m,h,v,x,_,R,k,A)=>{u=u||Ht,m=m||Ht;const E=u.length,D=m.length,N=Math.min(E,D);let z;for(z=0;z<N;z++){const H=m[z]=A?lt(m[z]):He(m[z]);C(u[z],H,h,null,x,_,R,k,A)}E>D?pe(u,x,_,!0,!1,N):ke(m,h,v,x,_,R,k,A,N)},at=(u,m,h,v,x,_,R,k,A)=>{let E=0;const D=m.length;let N=u.length-1,z=D-1;for(;E<=N&&E<=z;){const H=u[E],K=m[E]=A?lt(m[E]):He(m[E]);if(sn(H,K))C(H,K,h,null,x,_,R,k,A);else break;E++}for(;E<=N&&E<=z;){const H=u[N],K=m[z]=A?lt(m[z]):He(m[z]);if(sn(H,K))C(H,K,h,null,x,_,R,k,A);else break;N--,z--}if(E>N){if(E<=z){const H=z+1,K=H<D?m[H].el:v;for(;E<=z;)C(null,m[E]=A?lt(m[E]):He(m[E]),h,K,x,_,R,k,A),E++}}else if(E>z)for(;E<=N;)xe(u[E],x,_,!0),E++;else{const H=E,K=E,Z=new Map;for(E=K;E<=z;E++){const Ae=m[E]=A?lt(m[E]):He(m[E]);Ae.key!=null&&Z.set(Ae.key,E)}let G,oe=0;const Se=z-K+1;let Ft=!1,li=0;const on=new Array(Se);for(E=0;E<Se;E++)on[E]=0;for(E=H;E<=N;E++){const Ae=u[E];if(oe>=Se){xe(Ae,x,_,!0);continue}let ze;if(Ae.key!=null)ze=Z.get(Ae.key);else for(G=K;G<=z;G++)if(on[G-K]===0&&sn(Ae,m[G])){ze=G;break}ze===void 0?xe(Ae,x,_,!0):(on[ze-K]=E+1,ze>=li?li=ze:Ft=!0,C(Ae,m[ze],h,null,x,_,R,k,A),oe++)}const fi=Ft?oc(on):Ht;for(G=fi.length-1,E=Se-1;E>=0;E--){const Ae=K+E,ze=m[Ae],ci=Ae+1<D?m[Ae+1].el:v;on[E]===0?C(null,ze,h,ci,x,_,R,k,A):Ft&&(G<0||E!==fi[G]?De(ze,h,ci,2):G--)}}},De=(u,m,h,v,x=null)=>{const{el:_,type:R,transition:k,children:A,shapeFlag:E}=u;if(E&6){De(u.component.subTree,m,h,v);return}if(E&128){u.suspense.move(m,h,v);return}if(E&64){R.move(u,m,h,O);return}if(R===Ce){r(_,m,h);for(let N=0;N<A.length;N++)De(A[N],m,h,v);r(u.anchor,m,h);return}if(R===Hr){L(u,m,h);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(_),r(_,m,h),_e(()=>k.enter(_),x);else{const{leave:N,delayLeave:z,afterLeave:H}=k,K=()=>r(_,m,h),Z=()=>{N(_,()=>{K(),H&&H()})};z?z(_,K,Z):Z()}else r(_,m,h)},xe=(u,m,h,v=!1,x=!1)=>{const{type:_,props:R,ref:k,children:A,dynamicChildren:E,shapeFlag:D,patchFlag:N,dirs:z}=u;if(k!=null&&fa(k,null,h,u,!0),D&256){m.ctx.deactivate(u);return}const H=D&1&&z,K=!mn(u);let Z;if(K&&(Z=R&&R.onVnodeBeforeUnmount)&&$e(Z,m,u),D&6)zn(u.component,h,v);else{if(D&128){u.suspense.unmount(h,v);return}H&&xt(u,null,m,"beforeUnmount"),D&64?u.type.remove(u,m,h,x,O,v):E&&(_!==Ce||N>0&&N&64)?pe(E,m,h,!1,!0):(_===Ce&&N&384||!x&&D&16)&&pe(A,m,h),v&&Mt(u)}(K&&(Z=R&&R.onVnodeUnmounted)||H)&&_e(()=>{Z&&$e(Z,m,u),H&&xt(u,null,m,"unmounted")},h)},Mt=u=>{const{type:m,el:h,anchor:v,transition:x}=u;if(m===Ce){Lt(h,v);return}if(m===Hr){S(u);return}const _=()=>{a(h),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:k}=x,A=()=>R(h,_);k?k(u.el,_,A):A()}else _()},Lt=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},zn=(u,m,h)=>{const{bum:v,scope:x,update:_,subTree:R,um:k}=u;v&&nr(v),x.stop(),_&&(_.active=!1,xe(R,u,m,h)),k&&_e(k,m),_e(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},pe=(u,m,h,v=!1,x=!1,_=0)=>{for(let R=_;R<u.length;R++)xe(u[R],m,h,v,x)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),T=(u,m,h)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,h),xi(),us(),m._vnode=u},O={p:C,um:xe,m:De,r:Mt,mt:an,mc:ke,pc:V,pbc:Pe,n:b,o:e};let j,q;return t&&([j,q]=t(O)),{render:T,hydrate:j,createApp:Qf(T,j)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ic(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Rs(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=lt(a[i]),s.el=o.el),n||Rs(o,s)),s.type===Sr&&(s.el=o.el)}}function oc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const sc=e=>e.__isTeleport,Ce=Symbol.for("v-fgt"),Sr=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Hr=Symbol.for("v-stc"),hn=[];let Te=null;function En(e=!1){hn.push(Te=e?null:[])}function lc(){hn.pop(),Te=hn[hn.length-1]||null}let kn=1;function Ii(e){kn+=e}function Is(e){return e.dynamicChildren=kn>0?Te||Ht:null,lc(),kn>0&&Te&&Te.push(e),e}function ca(e,t,n,r,a,i){return Is(pr(e,t,n,r,a,i,!0))}function Ts(e,t,n,r,a){return Is(de(e,t,n,r,a,!0))}function mr(e){return e?e.__v_isVNode===!0:!1}function sn(e,t){return e.type===t.type&&e.key===t.key}const Rr="__vInternal",Ns=({key:e})=>e??null,ar=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||ge(e)||B(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function pr(e,t=null,n=null,r=0,a=null,i=e===Ce?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ns(t),ref:t&&ar(t),scopeId:ps,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ve};return s?(Ka(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),kn>0&&!o&&Te&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Te.push(l),l}const de=fc;function fc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Of)&&(e=ht),mr(e)){const s=qt(e,t,!0);return n&&Ka(s,n),kn>0&&!i&&Te&&(s.shapeFlag&6?Te[Te.indexOf(e)]=s:Te.push(s)),s.patchFlag|=-2,s}if(xc(e)&&(e=e.__vccOpts),t){t=cc(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=Er(s)),ee(l)&&(ns(l)&&!$(l)&&(l=me({},l)),t.style=Ia(l))}const o=se(e)?1:Cf(e)?128:sc(e)?64:ee(e)?4:B(e)?2:0;return pr(e,t,n,r,a,o,i,!0)}function cc(e){return e?ns(e)||Rr in e?me({},e):e:null}function qt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?uc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ns(s),ref:t&&t.ref?n&&a?$(a)?a.concat(ar(t)):[a,ar(t)]:ar(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ms(e=" ",t=0){return de(Sr,null,e,t)}function ap(e="",t=!1){return t?(En(),Ts(ht,null,e)):de(ht,null,e)}function He(e){return e==null||typeof e=="boolean"?de(ht):$(e)?de(Ce,null,e.slice()):typeof e=="object"?lt(e):de(Sr,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function Ka(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ka(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Rr in t)?t._ctx=ve:a===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[Ms(t)]):n=8);e.children=t,e.shapeFlag|=n}function uc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Er([t.class,r.class]));else if(a==="style")t.style=Ia([t.style,r.style]);else if(xr(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){Le(e,t,7,[n,r])}const dc=ks();let mc=0;function pc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||dc,i={uid:mc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Uo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Os(r,a),emitsOptions:ms(r,a),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=wf.bind(null,i),e.ce&&e.ce(i),i}let ue=null,Wa,jt,Ti="__VUE_INSTANCE_SETTERS__";(jt=Zr()[Ti])||(jt=Zr()[Ti]=[]),jt.push(e=>ue=e),Wa=e=>{jt.length>1?jt.forEach(t=>t(e)):jt[0](e)};const Xt=e=>{Wa(e),e.scope.on()},Ct=()=>{ue&&ue.scope.off(),Wa(null)};function Ls(e){return e.vnode.shapeFlag&4}let An=!1;function hc(e,t=!1){An=t;const{props:n,children:r}=e.vnode,a=Ls(e);Jf(e,n,a,t),tc(e,r);const i=a?gc(e,t):void 0;return An=!1,i}function gc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Da(new Proxy(e.ctx,Kf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?bc(e):null;Xt(e),tn();const i=mt(r,e,0,[e.props,a]);if(nn(),Ct(),Do(i)){if(i.then(Ct,Ct),t)return i.then(o=>{Ni(e,o,t)}).catch(o=>{Or(o,e,0)});e.asyncDep=i}else Ni(e,i,t)}else Fs(e,t)}function Ni(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=ss(t)),Fs(e,n)}let Mi;function Fs(e,t,n){const r=e.type;if(!e.render){if(!t&&Mi&&!r.render){const a=r.template||Ba(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=me(me({isCustomElement:i,delimiters:s},o),l);r.render=Mi(a,f)}}e.render=r.render||Me}{Xt(e),tn();try{Wf(e)}finally{nn(),Ct()}}}function vc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}}))}function bc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return vc(e)},slots:e.slots,emit:e.emit,expose:t}}function Ir(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ss(Da(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in pn)return pn[n](e)},has(t,n){return n in t||n in pn}}))}function yc(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function xc(e){return B(e)&&"__vccOpts"in e}const ce=(e,t)=>hf(e,t,An);function Ya(e,t,n){const r=arguments.length;return r===2?ee(t)&&!$(t)?mr(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mr(n)&&(n=[n]),de(e,t,n))}const wc=Symbol.for("v-scx"),_c=()=>Ge(wc),Ec="3.3.8",kc="http://www.w3.org/2000/svg",Et=typeof document<"u"?document:null,Li=Et&&Et.createElement("template"),Ac={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Et.createElementNS(kc,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Li.innerHTML=r?`<svg>${e}</svg>`:e;const s=Li.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Oc=Symbol("_vtc");function Pc(e,t,n){const r=e[Oc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Cc=Symbol("_vod");function Sc(e,t,n){const r=e.style,a=se(n);if(n&&!a){if(t&&!se(t))for(const i in t)n[i]==null&&ua(r,i,"");for(const i in n)ua(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Cc in e&&(r.display=i)}}const Fi=/\s*!important$/;function ua(e,t,n){if($(n))n.forEach(r=>ua(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Rc(e,t);Fi.test(n)?e.setProperty(Tt(r),n.replace(Fi,""),"important"):e[r]=n}}const ji=["Webkit","Moz","ms"],Br={};function Rc(e,t){const n=Br[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return Br[t]=r;r=_r(r);for(let a=0;a<ji.length;a++){const i=ji[a]+r;if(i in e)return Br[t]=i}return t}const Di="http://www.w3.org/1999/xlink";function Ic(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Di,t.slice(6,t.length)):e.setAttributeNS(Di,t,n);else{const i=Dl(t);n==null||i&&!Ho(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Tc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Ho(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function ct(e,t,n,r){e.addEventListener(t,n,r)}function Nc(e,t,n,r){e.removeEventListener(t,n,r)}const zi=Symbol("_vei");function Mc(e,t,n,r,a=null){const i=e[zi]||(e[zi]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Lc(t);if(r){const f=i[t]=Dc(r,a);ct(e,s,f,l)}else o&&(Nc(e,s,o,l),i[t]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function Lc(e){let t;if($i.test(e)){t={};let r;for(;r=e.match($i);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),t]}let Ur=0;const Fc=Promise.resolve(),jc=()=>Ur||(Fc.then(()=>Ur=0),Ur=Date.now());function Dc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(zc(r,n.value),t,5,[r])};return n.value=e,n.attached=jc(),n}function zc(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Hi=/^on[a-z]/,$c=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Pc(e,r,a):t==="style"?Sc(e,n,r):xr(t)?Ca(t)||Mc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hc(e,t,r,a))?Tc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ic(e,t,r,a))};function Hc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Hi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Hi.test(t)&&se(n)?!1:t in e}const Gt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>nr(t,n):t};function Bc(e){e.target.composing=!0}function Bi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Qe=Symbol("_assign"),ip={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Qe]=Gt(a);const i=r||a.props&&a.props.type==="number";ct(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=lr(s)),e[Qe](s)}),n&&ct(e,"change",()=>{e.value=e.value.trim()}),t||(ct(e,"compositionstart",Bc),ct(e,"compositionend",Bi),ct(e,"change",Bi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Qe]=Gt(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&lr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},op={deep:!0,created(e,t,n){e[Qe]=Gt(n),ct(e,"change",()=>{const r=e._modelValue,a=On(e),i=e.checked,o=e[Qe];if($(r)){const s=Ta(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const f=[...r];f.splice(s,1),o(f)}}else if(en(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(js(e,i))})},mounted:Ui,beforeUpdate(e,t,n){e[Qe]=Gt(n),Ui(e,t,n)}};function Ui(e,{value:t,oldValue:n},r){e._modelValue=t,$(t)?e.checked=Ta(t,r.props.value)>-1:en(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Mn(t,js(e,!0)))}const sp={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=en(t);ct(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?lr(On(o)):On(o));e[Qe](e.multiple?a?new Set(i):i:i[0])}),e[Qe]=Gt(r)},mounted(e,{value:t}){Ki(e,t)},beforeUpdate(e,t,n){e[Qe]=Gt(n)},updated(e,{value:t}){Ki(e,t)}};function Ki(e,t){const n=e.multiple;if(!(n&&!$(t)&&!en(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=On(i);if(n)$(t)?i.selected=Ta(t,o)>-1:i.selected=t.has(o);else if(Mn(On(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function On(e){return"_value"in e?e._value:e.value}function js(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Uc=["ctrl","shift","alt","meta"],Kc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Uc.some(n=>e[`${n}Key`]&&!t.includes(n))},lp=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Kc[t[a]];if(i&&i(n,t))return}return e(n,...r)},Wc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},fp=(e,t)=>n=>{if(!("key"in n))return;const r=Tt(n.key);if(t.some(a=>a===r||Wc[a]===r))return e(n)},Yc=me({patchProp:$c},Ac);let Wi;function Vc(){return Wi||(Wi=rc(Yc))}const qc=(...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Xc(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Xc(e){return se(e)?document.querySelector(e):e}var Gc=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Qc=Symbol();var Yi;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Yi||(Yi={}));function Jc(){const e=Hl(!0),t=e.run(()=>is({}));let n=[],r=[];const a=Da({install(i){a._a=i,i.provide(Qc,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Gc?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}function Vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vi(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hr(e){"@babel/helpers - typeof";return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function Zc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function eu(e,t,n){return t&&qi(e.prototype,t),n&&qi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Va(e,t){return nu(e)||au(e,t)||Ds(e,t)||ou()}function Fn(e){return tu(e)||ru(e)||Ds(e)||iu()}function tu(e){if(Array.isArray(e))return da(e)}function nu(e){if(Array.isArray(e))return e}function ru(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function au(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ds(e,t){if(e){if(typeof e=="string")return da(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return da(e,t)}}function da(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function iu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ou(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xi=function(){},qa={},zs={},$s=null,Hs={mark:Xi,measure:Xi};try{typeof window<"u"&&(qa=window),typeof document<"u"&&(zs=document),typeof MutationObserver<"u"&&($s=MutationObserver),typeof performance<"u"&&(Hs=performance)}catch{}var su=qa.navigator||{},Gi=su.userAgent,Qi=Gi===void 0?"":Gi,gt=qa,re=zs,Ji=$s,Yn=Hs;gt.document;var nt=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Bs=~Qi.indexOf("MSIE")||~Qi.indexOf("Trident/"),Vn,qn,Xn,Gn,Qn,Je="___FONT_AWESOME___",ma=16,Us="fa",Ks="svg-inline--fa",Rt="data-fa-i2svg",pa="data-fa-pseudo-element",lu="data-fa-pseudo-element-pending",Xa="data-prefix",Ga="data-icon",Zi="fontawesome-i2svg",fu="async",cu=["HTML","HEAD","STYLE","SCRIPT"],Ws=function(){try{return!0}catch{return!1}}(),ne="classic",ie="sharp",Qa=[ne,ie];function jn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ne]}})}var Pn=jn((Vn={},le(Vn,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(Vn,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Vn)),Cn=jn((qn={},le(qn,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(qn,ie,{solid:"fass",regular:"fasr",light:"fasl"}),qn)),Sn=jn((Xn={},le(Xn,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Xn,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Xn)),uu=jn((Gn={},le(Gn,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Gn,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Gn)),du=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ys="fa-layers-text",mu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,pu=jn((Qn={},le(Qn,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Qn,ie,{900:"fass",400:"fasr",300:"fasl"}),Qn)),Vs=[1,2,3,4,5,6,7,8,9,10],hu=Vs.concat([11,12,13,14,15,16,17,18,19,20]),gu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rn=new Set;Object.keys(Cn[ne]).map(Rn.add.bind(Rn));Object.keys(Cn[ie]).map(Rn.add.bind(Rn));var vu=[].concat(Qa,Fn(Rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Vs.map(function(e){return"".concat(e,"x")})).concat(hu.map(function(e){return"w-".concat(e)})),gn=gt.FontAwesomeConfig||{};function bu(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function yu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var xu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];xu.forEach(function(e){var t=Va(e,2),n=t[0],r=t[1],a=yu(bu(n));a!=null&&(gn[r]=a)})}var qs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Us,replacementClass:Ks,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gn.familyPrefix&&(gn.cssPrefix=gn.familyPrefix);var Qt=I(I({},qs),gn);Qt.autoReplaceSvg||(Qt.observeMutations=!1);var M={};Object.keys(qs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Qt[e]=n,vn.forEach(function(r){return r(M)})},get:function(){return Qt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Qt.cssPrefix=t,vn.forEach(function(n){return n(M)})},get:function(){return Qt.cssPrefix}});gt.FontAwesomeConfig=M;var vn=[];function wu(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var ot=ma,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _u(e){if(!(!e||!nt)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return re.head.insertBefore(t,r),e}}var Eu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function In(){for(var e=12,t="";e-- >0;)t+=Eu[Math.random()*62|0];return t}function rn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ja(e){return e.classList?rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ku(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xs(e[n]),'" ')},"").trim()}function Tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Za(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function Au(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Ou(e){var t=e.transform,n=e.width,r=n===void 0?ma:n,a=e.height,i=a===void 0?ma:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Bs?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Pu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
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
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
}`;function Gs(){var e=Us,t=Ks,n=M.cssPrefix,r=M.replacementClass,a=Pu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var eo=!1;function Kr(){M.autoAddCss&&!eo&&(_u(Gs()),eo=!0)}var Cu={mixout:function(){return{dom:{css:Gs,insertCss:Kr}}},hooks:function(){return{beforeDOMElementCreation:function(){Kr()},beforeI2svg:function(){Kr()}}}},Ze=gt||{};Ze[Je]||(Ze[Je]={});Ze[Je].styles||(Ze[Je].styles={});Ze[Je].hooks||(Ze[Je].hooks={});Ze[Je].shims||(Ze[Je].shims=[]);var Ne=Ze[Je],Qs=[],Su=function e(){re.removeEventListener("DOMContentLoaded",e),gr=1,Qs.map(function(t){return t()})},gr=!1;nt&&(gr=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),gr||re.addEventListener("DOMContentLoaded",Su));function Ru(e){nt&&(gr?setTimeout(e,0):Qs.push(e))}function Dn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Xs(e):"<".concat(t," ").concat(ku(r),">").concat(i.map(Dn).join(""),"</").concat(t,">")}function to(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Iu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Wr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Iu(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Tu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ha(e){var t=Tu(e);return t.length===1?t[0].toString(16):null}function Nu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function no(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ga(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=no(t);typeof Ne.hooks.addPack=="function"&&!a?Ne.hooks.addPack(e,no(t)):Ne.styles[e]=I(I({},Ne.styles[e]||{}),i),e==="fas"&&ga("fa",t)}var Jn,Zn,er,zt=Ne.styles,Mu=Ne.shims,Lu=(Jn={},le(Jn,ne,Object.values(Sn[ne])),le(Jn,ie,Object.values(Sn[ie])),Jn),ei=null,Js={},Zs={},el={},tl={},nl={},Fu=(Zn={},le(Zn,ne,Object.keys(Pn[ne])),le(Zn,ie,Object.keys(Pn[ie])),Zn);function ju(e){return~vu.indexOf(e)}function Du(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ju(a)?a:null}var rl=function(){var t=function(i){return Wr(zt,function(o,s,l){return o[l]=Wr(s,i,{}),o},{})};Js=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Zs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),nl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in zt||M.autoFetchSvg,r=Wr(Mu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});el=r.names,tl=r.unicodes,ei=Nr(M.styleDefault,{family:M.familyDefault})};wu(function(e){ei=Nr(e.styleDefault,{family:M.familyDefault})});rl();function ti(e,t){return(Js[e]||{})[t]}function zu(e,t){return(Zs[e]||{})[t]}function Ot(e,t){return(nl[e]||{})[t]}function al(e){return el[e]||{prefix:null,iconName:null}}function $u(e){var t=tl[e],n=ti("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return ei}var ni=function(){return{prefix:null,iconName:null,rest:[]}};function Nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ne:n,a=Pn[r][e],i=Cn[r][e]||Cn[r][a],o=e in Ne.styles?e:null;return i||o||null}var ro=(er={},le(er,ne,Object.keys(Sn[ne])),le(er,ie,Object.keys(Sn[ie])),er);function Mr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},le(t,ne,"".concat(M.cssPrefix,"-").concat(ne)),le(t,ie,"".concat(M.cssPrefix,"-").concat(ie)),t),o=null,s=ne;(e.includes(i[ne])||e.some(function(f){return ro[ne].includes(f)}))&&(s=ne),(e.includes(i[ie])||e.some(function(f){return ro[ie].includes(f)}))&&(s=ie);var l=e.reduce(function(f,c){var d=Du(M.cssPrefix,c);if(zt[c]?(c=Lu[s].includes(c)?uu[s][c]:c,o=c,f.prefix=c):Fu[s].indexOf(c)>-1?(o=c,f.prefix=Nr(c,{family:s})):d?f.iconName=d:c!==M.replacementClass&&c!==i[ne]&&c!==i[ie]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?al(f.iconName):{},g=Ot(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!zt.far&&zt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},ni());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(zt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=vt()||"fas"),l}var Hu=function(){function e(){Zc(this,e),this.definitions={}}return eu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),ga(s,o[s]);var l=Sn[ne][s];l&&ga(l,o[s]),rl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),ao=[],$t={},Wt={},Bu=Object.keys(Wt);function Uu(e,t){var n=t.mixoutsTo;return ao=e,$t={},Object.keys(Wt).forEach(function(r){Bu.indexOf(r)===-1&&delete Wt[r]}),ao.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),hr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){$t[o]||($t[o]=[]),$t[o].push(i[o])})}r.provides&&r.provides(Wt)}),n}function va(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=$t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=$t[e]||[];a.forEach(function(i){i.apply(null,n)})}function et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wt[e]?Wt[e].apply(null,t):void 0}function ba(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||vt();if(t)return t=Ot(n,t)||t,to(il.definitions,n,t)||to(Ne.styles,n,t)}var il=new Hu,Ku=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,It("noAuto")},Wu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nt?(It("beforeI2svg",t),et("pseudoElements2svg",t),et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Ru(function(){Vu({autoReplaceSvgRoot:n}),It("watch",t)})}},Yu={icon:function(t){if(t===null)return null;if(hr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Nr(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(du))){var a=Mr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||vt(),iconName:Ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=vt();return{prefix:i,iconName:Ot(i,t)||t}}}},Oe={noAuto:Ku,config:M,dom:Wu,parse:Yu,library:il,findIconDefinition:ba,toHtml:Dn},Vu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(Ne.styles).length>0||M.autoFetchSvg)&&nt&&M.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Lr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Dn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(nt){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function qu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Za(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Tr(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Xu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function ri(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,P=r.found?r:n,C=P.width,F=P.height,y=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(be){return d.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(d.classes).join(" "),L={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(F)})},S=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/F*16*.0625,"em")}:{};g&&(L.attributes[Rt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(c||In())},children:[l]}),delete L.attributes.title);var U=I(I({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},S),d.styles)}),J=r.found&&n.found?et("generateAbstractMask",U)||{children:[],attributes:{}}:et("generateAbstractIcon",U)||{children:[],attributes:{}},ae=J.children,ke=J.attributes;return U.children=ae,U.attributes=ke,s?Xu(U):qu(U)}function io(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Rt]="");var c=I({},o.styles);Za(a)&&(c.transform=Ou({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Tr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Gu(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yr=Ne.styles;function ya(e){var t=e[0],n=e[1],r=e.slice(4),a=Va(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Qu={found:!1,width:512,height:512};function Ju(e,t){!Ws&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xa(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=vt()),new Promise(function(r,a){if(et("missingIconAbstract"),n==="fa"){var i=al(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Yr[t]&&Yr[t][e]){var o=Yr[t][e];return r(ya(o))}Ju(e,t),r(I(I({},Qu),{},{icon:M.showMissingIcons&&e?et("missingIconAbstract")||{}:{}}))})}var oo=function(){},wa=M.measurePerformance&&Yn&&Yn.mark&&Yn.measure?Yn:{mark:oo,measure:oo},un='FA "6.4.2"',Zu=function(t){return wa.mark("".concat(un," ").concat(t," begins")),function(){return ol(t)}},ol=function(t){wa.mark("".concat(un," ").concat(t," ends")),wa.measure("".concat(un," ").concat(t),"".concat(un," ").concat(t," begins"),"".concat(un," ").concat(t," ends"))},ai={begin:Zu,end:ol},ir=function(){};function so(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function ed(e){var t=e.getAttribute?e.getAttribute(Xa):null,n=e.getAttribute?e.getAttribute(Ga):null;return t&&n}function td(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function nd(){if(M.autoReplaceSvg===!0)return or.replace;var e=or[M.autoReplaceSvg];return e||or.replace}function rd(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function ad(e){return re.createElement(e)}function sl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?rd:ad:n;if(typeof e=="string")return re.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(sl(o,{ceFn:r}))}),a}function id(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var or={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(sl(a),n)}),n.getAttribute(Rt)===null&&M.keepOriginalSource){var r=re.createComment(id(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ja(n).indexOf(M.replacementClass))return or.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Dn(s)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function lo(e){e()}function ll(e,t){var n=typeof t=="function"?t:ir;if(e.length===0)n();else{var r=lo;M.mutateApproach===fu&&(r=gt.requestAnimationFrame||lo),r(function(){var a=nd(),i=ai.begin("mutate");e.map(a),i(),n()})}}var ii=!1;function fl(){ii=!0}function _a(){ii=!1}var vr=null;function fo(e){if(Ji&&M.observeMutations){var t=e.treeCallback,n=t===void 0?ir:t,r=e.nodeCallback,a=r===void 0?ir:r,i=e.pseudoElementsCallback,o=i===void 0?ir:i,s=e.observeMutationsRoot,l=s===void 0?re:s;vr=new Ji(function(f){if(!ii){var c=vt();rn(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!so(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&so(d.target)&&~gu.indexOf(d.attributeName))if(d.attributeName==="class"&&ed(d.target)){var p=Mr(Ja(d.target)),g=p.prefix,P=p.iconName;d.target.setAttribute(Xa,g||c),P&&d.target.setAttribute(Ga,P)}else td(d.target)&&a(d.target)})}}),nt&&vr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function od(){vr&&vr.disconnect()}function sd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ld(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mr(Ja(e));return a.prefix||(a.prefix=vt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=zu(a.prefix,e.innerText)||ti(a.prefix,ha(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function fd(e){var t=rn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||In()):(t["aria-hidden"]="true",t.focusable="false")),t}function cd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ld(e),r=n.iconName,a=n.prefix,i=n.rest,o=fd(e),s=va("parseNodeAttributes",{},e),l=t.styleParser?sd(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ud=Ne.styles;function cl(e){var t=M.autoReplaceSvg==="nest"?co(e,{styleParser:!1}):co(e);return~t.extra.classes.indexOf(Ys)?et("generateLayersText",e,t):et("generateSvgReplacementMutation",e,t)}var bt=new Set;Qa.map(function(e){bt.add("fa-".concat(e))});Object.keys(Pn[ne]).map(bt.add.bind(bt));Object.keys(Pn[ie]).map(bt.add.bind(bt));bt=Fn(bt);function uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nt)return Promise.resolve();var n=re.documentElement.classList,r=function(d){return n.add("".concat(Zi,"-").concat(d))},a=function(d){return n.remove("".concat(Zi,"-").concat(d))},i=M.autoFetchSvg?bt:Qa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ud));i.includes("fa")||i.push("fa");var o=[".".concat(Ys,":not([").concat(Rt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ai.begin("onTree"),f=s.reduce(function(c,d){try{var p=cl(d);p&&c.push(p)}catch(g){Ws||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){ll(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function dd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cl(e).then(function(n){n&&ll([n],t)})}function md(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ba(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ba(a||{})),e(r,I(I({},n),{},{mask:a}))}}var pd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ue:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,P=g===void 0?null:g,C=n.classes,F=C===void 0?[]:C,y=n.attributes,w=y===void 0?{}:y,L=n.styles,S=L===void 0?{}:L;if(t){var U=t.prefix,J=t.iconName,ae=t.icon;return Lr(I({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(P||In()):(w["aria-hidden"]="true",w.focusable="false")),ri({icons:{main:ya(ae),mask:l?ya(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:J,transform:I(I({},Ue),a),symbol:o,title:p,maskId:c,titleId:P,extra:{attributes:w,styles:S,classes:F}})})}},hd={mixout:function(){return{icon:md(pd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=uo,n.nodeCallback=dd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?re:r,i=n.callback,o=i===void 0?function(){}:i;return uo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,P){Promise.all([xa(a,s),c.iconName?xa(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var F=Va(C,2),y=F[0],w=F[1];g([n,ri({icons:{main:y,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Tr(s);l.length>0&&(a.style=l);var f;return Za(o)&&(f=et("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},gd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Lr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Fn(i)).join(" ")},children:o}]})}}}},vd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Lr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),Gu({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Fn(s))}})})}}}},bd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ue:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Lr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),io({content:n,transform:I(I({},Ue),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Fn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Bs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,io({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},yd=new RegExp('"',"ug"),mo=[1105920,1112319];function xd(e){var t=e.replace(yd,""),n=Nu(t,0),r=n>=mo[0]&&n<=mo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ha(a?t[0]:t),isSecondary:r||a}}function po(e,t){var n="".concat(lu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=rn(e.children),o=i.filter(function(ae){return ae.getAttribute(pa)===t})[0],s=gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(mu),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ie:ne,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Cn[p][l[2].toLowerCase()]:pu[p][f],P=xd(d),C=P.value,F=P.isSecondary,y=l[0].startsWith("FontAwesome"),w=ti(g,C),L=w;if(y){var S=$u(C);S.iconName&&S.prefix&&(w=S.iconName,g=S.prefix)}if(w&&!F&&(!o||o.getAttribute(Xa)!==g||o.getAttribute(Ga)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var U=cd(),J=U.extra;J.attributes[pa]=t,xa(w,g).then(function(ae){var ke=ri(I(I({},U),{},{icons:{main:ae,mask:ni()},prefix:g,iconName:L,extra:J,watchable:!0})),be=re.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=ke.map(function(Pe){return Dn(Pe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function wd(e){return Promise.all([po(e,"::before"),po(e,"::after")])}function _d(e){return e.parentNode!==document.head&&!~cu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(pa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ho(e){if(nt)return new Promise(function(t,n){var r=rn(e.querySelectorAll("*")).filter(_d).map(wd),a=ai.begin("searchPseudoElements");fl(),Promise.all(r).then(function(){a(),_a(),t()}).catch(function(){a(),_a(),n()})})}var Ed={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ho,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?re:r;M.searchPseudoElements&&ho(a)}}},go=!1,kd={mixout:function(){return{dom:{unwatch:function(){fl(),go=!0}}}},hooks:function(){return{bootstrap:function(){fo(va("mutationObserverCallbacks",{}))},noAuto:function(){od()},watch:function(n){var r=n.observeMutationsRoot;go?_a():fo(va("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Ad={mixout:function(){return{parse:{transform:function(n){return vo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=vo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Vr={x:0,y:0,width:"100%",height:"100%"};function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Od(e){return e.tag==="g"?e.children:[e]}var Pd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mr(a.split(" ").map(function(o){return o.trim()})):ni();return i.prefix||(i.prefix=vt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=Au({transform:l,containerWidth:d,iconWidth:f}),P={tag:"rect",attributes:I(I({},Vr),{},{fill:"white"})},C=c.children?{children:c.children.map(bo)}:{},F={tag:"g",attributes:I({},g.inner),children:[bo(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},C))]},y={tag:"g",attributes:I({},g.outer),children:[F]},w="mask-".concat(s||In()),L="clip-".concat(s||In()),S={tag:"mask",attributes:I(I({},Vr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,y]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Od(p)},S]};return r.push(U,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(w,")")},Vr)}),{children:r,attributes:a}}}},Cd={provides:function(t){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Sd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Rd=[Cu,hd,gd,vd,bd,Ed,kd,Ad,Pd,Cd,Sd];Uu(Rd,{mixoutsTo:Oe});Oe.noAuto;Oe.config;var Id=Oe.library;Oe.dom;var Ea=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var Td=Oe.icon;Oe.layer;Oe.text;Oe.counter;function yo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yo(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function br(e){"@babel/helpers - typeof";return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},br(e)}function we(e,t,n){return t=Fd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Md(e,t){if(e==null)return{};var n=Nd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ld(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fd(e){var t=Ld(e,"string");return typeof t=="symbol"?t:String(t)}var jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ul={exports:{}};(function(e){(function(t){var n=function(y,w,L){if(!f(w)||d(w)||p(w)||g(w)||l(w))return w;var S,U=0,J=0;if(c(w))for(S=[],J=w.length;U<J;U++)S.push(n(y,w[U],L));else{S={};for(var ae in w)Object.prototype.hasOwnProperty.call(w,ae)&&(S[y(ae,L)]=n(y,w[ae],L))}return S},r=function(y,w){w=w||{};var L=w.separator||"_",S=w.split||/(?=[A-Z])/;return y.split(S).join(L)},a=function(y){return P(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,L){return L?L.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var w=a(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},d=function(y){return s.call(y)=="[object Date]"},p=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},P=function(y){return y=y-0,y===y},C=function(y,w){var L=w&&"process"in w?w.process:w;return typeof L!="function"?y:function(S,U){return L(S,y,U)}},F={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,w){return n(C(a,w),y)},decamelizeKeys:function(y,w){return n(C(o,w),y,w)},pascalizeKeys:function(y,w){return n(C(i,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(jd)})(ul);var Dd=ul.exports,zd=["class","style"];function $d(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Dd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Hd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function dl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return dl(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Hd(c);break;case"style":l.style=$d(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Md(n,zd);return Ya(e.tag,qe(qe(qe({},t),{},{class:a.class,style:qe(qe({},a.style),o)},a.attrs),s),r)}var ml=!1;try{ml=!0}catch{}function Bd(){if(!ml&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function Ud(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function xo(e){if(e&&br(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ea.icon)return Ea.icon(e);if(e===null)return null;if(br(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Kd=Ln({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ce(function(){return xo(t.icon)}),i=ce(function(){return qr("classes",Ud(t))}),o=ce(function(){return qr("transform",typeof t.transform=="string"?Ea.transform(t.transform):t.transform)}),s=ce(function(){return qr("mask",xo(t.mask))}),l=ce(function(){return Td(a.value,qe(qe(qe(qe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});dn(l,function(c){if(!c)return Bd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ce(function(){return l.value?dl(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Wd={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},Yd={prefix:"far",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"]};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Dt=typeof window<"u";function Vd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Xr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Fe(a)?a.map(e):e(a)}return n}const bn=()=>{},Fe=Array.isArray,qd=/\/$/,Xd=e=>e.replace(qd,"");function Gr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Zd(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Gd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Qd(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Jt(t.matched[r],n.matched[a])&&pl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function pl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Jd(e[n],t[n]))return!1;return!0}function Jd(e,t){return Fe(e)?_o(e,t):Fe(t)?_o(t,e):e===t}function _o(e,t){return Fe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Zd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Tn;(function(e){e.pop="pop",e.push="push"})(Tn||(Tn={}));var yn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(yn||(yn={}));function em(e){if(!e)if(Dt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Xd(e)}const tm=/^[^#]+#/;function nm(e,t){return e.replace(tm,"#")+t}function rm(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Fr=()=>({left:window.pageXOffset,top:window.pageYOffset});function am(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=rm(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Eo(e,t){return(history.state?history.state.position-t:-1)+e}const ka=new Map;function im(e,t){ka.set(e,t)}function om(e){const t=ka.get(e);return ka.delete(e),t}let sm=()=>location.protocol+"//"+location.host;function hl(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),wo(l,"")}return wo(n,e)+r+a}function lm(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=hl(e,location),P=n.value,C=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===P){o=null;return}F=C?p.position-C.position:0}else r(g);a.forEach(y=>{y(n.value,P,{delta:F,type:Tn.pop,direction:F?F>0?yn.forward:yn.back:yn.unknown})})};function l(){o=n.value}function f(p){a.push(p);const g=()=>{const P=a.indexOf(p);P>-1&&a.splice(P,1)};return i.push(g),g}function c(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:Fr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function ko(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Fr():null}}function fm(e){const{history:t,location:n}=window,r={value:hl(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:sm()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(l,f){const c=X({},t.state,ko(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=X({},a.value,t.state,{forward:l,scroll:Fr()});i(c.current,c,!0);const d=X({},ko(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function cm(e){e=em(e);const t=fm(e),n=lm(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:nm.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function um(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),cm(e)}function dm(e){return typeof e=="string"||e&&typeof e=="object"}function gl(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vl=Symbol("");var Ao;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ao||(Ao={}));function Zt(e,t){return X(new Error,{type:e,[vl]:!0},t)}function Ye(e,t){return e instanceof Error&&vl in e&&(t==null||!!(e.type&t))}const Oo="[^/]+?",mm={sensitive:!1,strict:!1,start:!0,end:!0},pm=/[.+*?^${}()[\]/\\]/g;function hm(e,t){const n=X({},mm,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(pm,"\\$&"),g+=40;else if(p.type===1){const{value:P,repeatable:C,optional:F,regexp:y}=p;i.push({name:P,repeatable:C,optional:F});const w=y||Oo;if(w!==Oo){g+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${P}" (${w}): `+S.message)}}let L=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(L=F&&f.length<2?`(?:/${L})`:"/"+L),F&&(L+="?"),a+=L,g+=20,F&&(g+=-8),C&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",P=i[p-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:P,repeatable:C,optional:F}=g,y=P in f?f[P]:"";if(Fe(y)&&!C)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const w=Fe(y)?y.join("/"):y;if(!w)if(F)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function gm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function vm(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=gm(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Po(r))return 1;if(Po(a))return-1}return a.length-r.length}function Po(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const bm={type:0,value:""},ym=/[a-zA-Z0-9_]/;function xm(e){if(!e)return[[]];if(e==="/")return[[bm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:ym.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function wm(e,t,n){const r=hm(xm(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function _m(e,t){const n=[],r=new Map;t=Ro({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const g=!p,P=Em(c);P.aliasOf=p&&p.record;const C=Ro(t,c),F=[P];if("alias"in c){const L=typeof c.alias=="string"?[c.alias]:c.alias;for(const S of L)F.push(X({},P,{components:p?p.record.components:P.components,path:S,aliasOf:p?p.record:P}))}let y,w;for(const L of F){const{path:S}=L;if(d&&S[0]!=="/"){const U=d.record.path,J=U[U.length-1]==="/"?"":"/";L.path=d.record.path+(S&&J+S)}if(y=wm(L,d,C),p?p.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&c.name&&!So(y)&&o(c.name)),P.children){const U=P.children;for(let J=0;J<U.length;J++)i(U[J],y,p&&p.children[J])}p=p||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return w?()=>{o(w)}:bn}function o(c){if(gl(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&vm(c,n[d])>=0&&(c.record.path!==n[d].record.path||!bl(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!So(c)&&r.set(c.record.name,c)}function f(c,d){let p,g={},P,C;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Zt(1,{location:c});C=p.record.name,g=X(Co(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&Co(c.params,p.keys.map(w=>w.name))),P=p.stringify(g)}else if("path"in c)P=c.path,p=n.find(w=>w.re.test(P)),p&&(g=p.parse(P),C=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw Zt(1,{location:c,currentLocation:d});C=p.record.name,g=X({},d.params,c.params),P=p.stringify(g)}const F=[];let y=p;for(;y;)F.unshift(y.record),y=y.parent;return{name:C,path:P,params:g,matched:F,meta:Am(F)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Co(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Em(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:km(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function km(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function So(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Am(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Ro(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function bl(e,t){return t.children.some(n=>n===e||bl(e,n))}const yl=/#/g,Om=/&/g,Pm=/\//g,Cm=/=/g,Sm=/\?/g,xl=/\+/g,Rm=/%5B/g,Im=/%5D/g,wl=/%5E/g,Tm=/%60/g,_l=/%7B/g,Nm=/%7C/g,El=/%7D/g,Mm=/%20/g;function oi(e){return encodeURI(""+e).replace(Nm,"|").replace(Rm,"[").replace(Im,"]")}function Lm(e){return oi(e).replace(_l,"{").replace(El,"}").replace(wl,"^")}function Aa(e){return oi(e).replace(xl,"%2B").replace(Mm,"+").replace(yl,"%23").replace(Om,"%26").replace(Tm,"`").replace(_l,"{").replace(El,"}").replace(wl,"^")}function Fm(e){return Aa(e).replace(Cm,"%3D")}function jm(e){return oi(e).replace(yl,"%23").replace(Sm,"%3F")}function Dm(e){return e==null?"":jm(e).replace(Pm,"%2F")}function yr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function zm(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(xl," "),o=i.indexOf("="),s=yr(o<0?i:i.slice(0,o)),l=o<0?null:yr(i.slice(o+1));if(s in t){let f=t[s];Fe(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Io(e){let t="";for(let n in e){const r=e[n];if(n=Fm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Fe(r)?r.map(i=>i&&Aa(i)):[r&&Aa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function $m(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Fe(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Hm=Symbol(""),To=Symbol(""),si=Symbol(""),kl=Symbol(""),Oa=Symbol("");function ln(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ft(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Zt(4,{from:n,to:t})):d instanceof Error?s(d):dm(d)?s(Zt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Qr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Bm(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ft(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Vd(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&ft(p,n,r,i,o)()}))}}return a}function Bm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function No(e){const t=Ge(si),n=Ge(kl),r=ce(()=>t.resolve(dt(e.to))),a=ce(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(Jt.bind(null,c));if(p>-1)return p;const g=Mo(l[f-2]);return f>1&&Mo(c)===g&&d[d.length-1].path!==g?d.findIndex(Jt.bind(null,l[f-2])):p}),i=ce(()=>a.value>-1&&Wm(n.params,r.value.params)),o=ce(()=>a.value>-1&&a.value===n.matched.length-1&&pl(n.params,r.value.params));function s(l={}){return Km(l)?t[dt(e.replace)?"replace":"push"](dt(e.to)).catch(bn):Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Um=Ln({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:No,setup(e,{slots:t}){const n=Ar(No(e)),{options:r}=Ge(si),a=ce(()=>({[Lo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Lo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ya("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Al=Um;function Km(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wm(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Fe(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Mo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Lo=(e,t,n)=>e??t??n,Ym=Ln({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ge(Oa),a=ce(()=>e.route||r.value),i=Ge(To,0),o=ce(()=>{let f=dt(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=ce(()=>a.value.matched[o.value]);rr(To,ce(()=>o.value+1)),rr(Hm,s),rr(Oa,a);const l=is();return dn(()=>[l.value,s.value,e.name],([f,c,d],[p,g,P])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Jt(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,p=d&&d.components[c];if(!p)return Fo(n.default,{Component:p,route:f});const g=d.props[c],P=g?g===!0?f.params:typeof g=="function"?g(f):g:null,F=Ya(p,X({},P,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Fo(n.default,{Component:F,route:f})||F}}});function Fo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ol=Ym;function Vm(e){const t=_m(e.routes,e),n=e.parseQuery||zm,r=e.stringifyQuery||Io,a=e.history,i=ln(),o=ln(),s=ln(),l=uf(st);let f=st;Dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Xr.bind(null,b=>""+b),d=Xr.bind(null,Dm),p=Xr.bind(null,yr);function g(b,T){let O,j;return gl(b)?(O=t.getRecordMatcher(b),j=T):j=b,t.addRoute(j,O)}function P(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function C(){return t.getRoutes().map(b=>b.record)}function F(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=X({},T||l.value),typeof b=="string"){const h=Gr(n,b,T.path),v=t.resolve({path:h.path},T),x=a.createHref(h.fullPath);return X(h,v,{params:p(v.params),hash:yr(h.hash),redirectedFrom:void 0,href:x})}let O;if("path"in b)O=X({},b,{path:Gr(n,b.path,T.path).path});else{const h=X({},b.params);for(const v in h)h[v]==null&&delete h[v];O=X({},b,{params:d(h)}),T.params=d(T.params)}const j=t.resolve(O,T),q=b.hash||"";j.params=c(p(j.params));const u=Gd(r,X({},b,{hash:Lm(q),path:j.path})),m=a.createHref(u);return X({fullPath:u,hash:q,query:r===Io?$m(b.query):b.query||{}},j,{redirectedFrom:void 0,href:m})}function w(b){return typeof b=="string"?Gr(n,b,l.value.path):X({},b)}function L(b,T){if(f!==b)return Zt(8,{from:T,to:b})}function S(b){return ae(b)}function U(b){return S(X(w(b),{replace:!0}))}function J(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let j=typeof O=="function"?O(b):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=w(j):{path:j},j.params={}),X({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function ae(b,T){const O=f=y(b),j=l.value,q=b.state,u=b.force,m=b.replace===!0,h=J(O);if(h)return ae(X(w(h),{state:typeof h=="object"?X({},q,h.state):q,force:u,replace:m}),T||O);const v=O;v.redirectedFrom=T;let x;return!u&&Qd(r,j,O)&&(x=Zt(16,{to:v,from:j}),De(j,j,!0,!1)),(x?Promise.resolve(x):Pe(v,j)).catch(_=>Ye(_)?Ye(_,2)?_:at(_):V(_,v,j)).then(_=>{if(_){if(Ye(_,2))return ae(X({replace:m},w(_.to),{state:typeof _.to=="object"?X({},q,_.to.state):q,force:u}),T||v)}else _=yt(v,j,!0,m,q);return rt(v,j,_),_})}function ke(b,T){const O=L(b,T);return O?Promise.reject(O):Promise.resolve()}function be(b){const T=Lt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Pe(b,T){let O;const[j,q,u]=qm(b,T);O=Qr(j.reverse(),"beforeRouteLeave",b,T);for(const h of j)h.leaveGuards.forEach(v=>{O.push(ft(v,b,T))});const m=ke.bind(null,b,T);return O.push(m),pe(O).then(()=>{O=[];for(const h of i.list())O.push(ft(h,b,T));return O.push(m),pe(O)}).then(()=>{O=Qr(q,"beforeRouteUpdate",b,T);for(const h of q)h.updateGuards.forEach(v=>{O.push(ft(v,b,T))});return O.push(m),pe(O)}).then(()=>{O=[];for(const h of u)if(h.beforeEnter)if(Fe(h.beforeEnter))for(const v of h.beforeEnter)O.push(ft(v,b,T));else O.push(ft(h.beforeEnter,b,T));return O.push(m),pe(O)}).then(()=>(b.matched.forEach(h=>h.enterCallbacks={}),O=Qr(u,"beforeRouteEnter",b,T),O.push(m),pe(O))).then(()=>{O=[];for(const h of o.list())O.push(ft(h,b,T));return O.push(m),pe(O)}).catch(h=>Ye(h,8)?h:Promise.reject(h))}function rt(b,T,O){s.list().forEach(j=>be(()=>j(b,T,O)))}function yt(b,T,O,j,q){const u=L(b,T);if(u)return u;const m=T===st,h=Dt?history.state:{};O&&(j||m?a.replace(b.fullPath,X({scroll:m&&h&&h.scroll},q)):a.push(b.fullPath,q)),l.value=b,De(b,T,O,m),at()}let je;function an(){je||(je=a.listen((b,T,O)=>{if(!zn.listening)return;const j=y(b),q=J(j);if(q){ae(X(q,{replace:!0}),j).catch(bn);return}f=j;const u=l.value;Dt&&im(Eo(u.fullPath,O.delta),Fr()),Pe(j,u).catch(m=>Ye(m,12)?m:Ye(m,2)?(ae(m.to,j).then(h=>{Ye(h,20)&&!O.delta&&O.type===Tn.pop&&a.go(-1,!1)}).catch(bn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),V(m,j,u))).then(m=>{m=m||yt(j,u,!1),m&&(O.delta&&!Ye(m,8)?a.go(-O.delta,!1):O.type===Tn.pop&&Ye(m,20)&&a.go(-1,!1)),rt(j,u,m)}).catch(bn)}))}let Nt=ln(),fe=ln(),Q;function V(b,T,O){at(b);const j=fe.list();return j.length?j.forEach(q=>q(b,T,O)):console.error(b),Promise.reject(b)}function We(){return Q&&l.value!==st?Promise.resolve():new Promise((b,T)=>{Nt.add([b,T])})}function at(b){return Q||(Q=!b,an(),Nt.list().forEach(([T,O])=>b?O(b):T()),Nt.reset()),b}function De(b,T,O,j){const{scrollBehavior:q}=e;if(!Dt||!q)return Promise.resolve();const u=!O&&om(Eo(b.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return fs().then(()=>q(b,T,u)).then(m=>m&&am(m)).catch(m=>V(m,b,T))}const xe=b=>a.go(b);let Mt;const Lt=new Set,zn={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,hasRoute:F,getRoutes:C,resolve:y,options:e,push:S,replace:U,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:fe.add,isReady:We,install(b){const T=this;b.component("RouterLink",Al),b.component("RouterView",Ol),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(l)}),Dt&&!Mt&&l.value===st&&(Mt=!0,S(a.location).catch(q=>{}));const O={};for(const q in st)Object.defineProperty(O,q,{get:()=>l.value[q],enumerable:!0});b.provide(si,T),b.provide(kl,es(O)),b.provide(Oa,l);const j=b.unmount;Lt.add(b),b.unmount=function(){Lt.delete(b),Lt.size<1&&(f=st,je&&je(),je=null,l.value=st,Mt=!1,Q=!1),j()}}};function pe(b){return b.reduce((T,O)=>T.then(()=>be(O)),Promise.resolve())}return zn}function qm(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Jt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Jt(f,l))||a.push(l))}return[n,r,a]}const Xm={class:"tabs"},Gm=Ln({__name:"Navigation",setup(e){const t=[{name:"games",label:"Games"},{name:"platforms",label:"Platforms"},{name:"utils",label:"Utils"}];return(n,r)=>(En(),ca("div",Xm,[pr("ul",null,[(En(),ca(Ce,null,Uf(t,(a,i)=>pr("li",{key:i,class:Er({"is-active":n.$route.name===a.name})},[de(dt(Al),{class:"navbar-item",to:{name:a.name}},{default:hs(()=>[Ms($l(a.label),1)]),_:2},1032,["to"])],2)),64))])]))}}),Qm=Ln({__name:"App",setup(e){return(t,n)=>(En(),ca("div",null,[de(Gm),de(dt(Ol))]))}});const Jm="modulepreload",Zm=function(e){return"/vgamelibrary/"+e},jo={},Jr=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Zm(i),i in jo)return;jo[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":Jm,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,d)=>{f.addEventListener("load",c),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},ep=Vm({history:um(),routes:[{path:"/",redirect:"games"},{path:"/platforms",name:"platforms",component:()=>Jr(()=>import("./Platforms-1475da60.js"),["assets/Platforms-1475da60.js","assets/PlatformRepository-69836aad.js"])},{path:"/games",name:"games",component:()=>Jr(()=>import("./Games-8a40a8a6.js"),["assets/Games-8a40a8a6.js","assets/PlatformRepository-69836aad.js","assets/GameRepository-c92b449c.js"])},{path:"/utils",name:"utils",component:()=>Jr(()=>import("./Utils-b07a13f7.js"),["assets/Utils-b07a13f7.js","assets/PlatformRepository-69836aad.js","assets/GameRepository-c92b449c.js"])}]});Id.add(Yd,Wd);const jr=qc(Qm);jr.use(Jc());jr.use(ep);jr.component("font-awesome-icon",Kd);jr.mount("#app");export{Ce as F,En as a,pr as b,Ts as c,Ln as d,np as e,lp as f,ce as g,ca as h,Ar as i,tp as j,Uf as k,ap as l,op as m,Er as n,Lf as o,de as p,sp as q,is as r,fp as s,$l as t,rp as u,ip as v,hs as w};
