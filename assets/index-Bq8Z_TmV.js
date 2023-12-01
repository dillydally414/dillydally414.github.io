function Y0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Q0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $f={exports:{}},ho={},Cf={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Li=Symbol.for("react.element"),J0=Symbol.for("react.portal"),q0=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),Z0=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),nm=Symbol.for("react.forward_ref"),rm=Symbol.for("react.suspense"),im=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),bc=Symbol.iterator;function om(e){return e===null||typeof e!="object"?null:(e=bc&&e[bc]||e["@@iterator"],typeof e=="function"?e:null)}var bf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pf=Object.assign,Tf={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Tf,this.updater=n||bf}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Of(){}Of.prototype=Cr.prototype;function ou(e,t,n){this.props=e,this.context=t,this.refs=Tf,this.updater=n||bf}var au=ou.prototype=new Of;au.constructor=ou;Pf(au,Cr.prototype);au.isPureReactComponent=!0;var Pc=Array.isArray,jf=Object.prototype.hasOwnProperty,lu={current:null},If={key:!0,ref:!0,__self:!0,__source:!0};function Rf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)jf.call(t,r)&&!If.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Li,type:e,key:s,ref:o,props:i,_owner:lu.current}}function am(e,t){return{$$typeof:Li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function uu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Li}function lm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tc=/\/+/g;function ca(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lm(""+e.key):t.toString(36)}function ys(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Li:case J0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ca(o,0):r,Pc(i)?(n="",e!=null&&(n=e.replace(Tc,"$&/")+"/"),ys(i,t,n,"",function(u){return u})):i!=null&&(uu(i)&&(i=am(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Pc(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+ca(s,a);o+=ys(s,t,n,l,i)}else if(l=om(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+ca(s,a++),o+=ys(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Wi(e,t,n){if(e==null)return e;var r=[],i=0;return ys(e,r,"","",function(s){return t.call(n,s,i++)}),r}function um(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},vs={transition:null},cm={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:vs,ReactCurrentOwner:lu};A.Children={map:Wi,forEach:function(e,t,n){Wi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wi(e,function(){t++}),t},toArray:function(e){return Wi(e,function(t){return t})||[]},only:function(e){if(!uu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Cr;A.Fragment=q0;A.Profiler=Z0;A.PureComponent=ou;A.StrictMode=X0;A.Suspense=rm;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=lu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)jf.call(t,l)&&!If.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Li,type:e.type,key:i,ref:s,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:tm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:em,_context:e},e.Consumer=e};A.createElement=Rf;A.createFactory=function(e){var t=Rf.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:nm,render:e}};A.isValidElement=uu;A.lazy=function(e){return{$$typeof:sm,_payload:{_status:-1,_result:e},_init:um}};A.memo=function(e,t){return{$$typeof:im,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=vs.transition;vs.transition={};try{e()}finally{vs.transition=t}};A.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};A.useCallback=function(e,t){return Te.current.useCallback(e,t)};A.useContext=function(e){return Te.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};A.useEffect=function(e,t){return Te.current.useEffect(e,t)};A.useId=function(){return Te.current.useId()};A.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return Te.current.useMemo(e,t)};A.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};A.useRef=function(e){return Te.current.useRef(e)};A.useState=function(e){return Te.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return Te.current.useTransition()};A.version="18.2.0";Cf.exports=A;var P=Cf.exports;const Ie=Q0(P),Oc=Y0({__proto__:null,default:Ie},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm=P,fm=Symbol.for("react.element"),hm=Symbol.for("react.fragment"),pm=Object.prototype.hasOwnProperty,mm=dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gm={key:!0,ref:!0,__self:!0,__source:!0};function Lf(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)pm.call(t,r)&&!gm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fm,type:e,key:s,ref:o,props:i,_owner:mm.current}}ho.Fragment=hm;ho.jsx=Lf;ho.jsxs=Lf;$f.exports=ho;var $=$f.exports,Qa={},Nf={exports:{}},Ge={},Af={exports:{}},zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,j){var I=b.length;b.push(j);e:for(;0<I;){var B=I-1>>>1,ie=b[B];if(0<i(ie,j))b[B]=j,b[I]=ie,I=B;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var j=b[0],I=b.pop();if(I!==j){b[0]=I;e:for(var B=0,ie=b.length,Dt=ie>>>1;B<Dt;){var Qe=2*(B+1)-1,$t=b[Qe],Je=Qe+1,mt=b[Je];if(0>i($t,I))Je<ie&&0>i(mt,$t)?(b[B]=mt,b[Je]=I,B=Je):(b[B]=$t,b[Qe]=I,B=Qe);else if(Je<ie&&0>i(mt,I))b[B]=mt,b[Je]=I,B=Je;else break e}}return j}function i(b,j){var I=b.sortIndex-j.sortIndex;return I!==0?I:b.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=b)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function w(b){if(y=!1,m(b),!v)if(n(l)!==null)v=!0,Rr(k);else{var j=n(u);j!==null&&mn(w,j.startTime-b)}}function k(b,j){v=!1,y&&(y=!1,p(O),O=-1),g=!0;var I=h;try{for(m(j),d=n(l);d!==null&&(!(d.expirationTime>j)||b&&!De());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var ie=B(d.expirationTime<=j);j=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&r(l),m(j)}else r(l);d=n(l)}if(d!==null)var Dt=!0;else{var Qe=n(u);Qe!==null&&mn(w,Qe.startTime-j),Dt=!1}return Dt}finally{d=null,h=I,g=!1}}var x=!1,_=null,O=-1,K=5,N=-1;function De(){return!(e.unstable_now()-N<K)}function hn(){if(_!==null){var b=e.unstable_now();N=b;var j=!0;try{j=_(!0,b)}finally{j?pn():(x=!1,_=null)}}else x=!1}var pn;if(typeof f=="function")pn=function(){f(hn)};else if(typeof MessageChannel<"u"){var Vi=new MessageChannel,la=Vi.port2;Vi.port1.onmessage=hn,pn=function(){la.postMessage(null)}}else pn=function(){S(hn,0)};function Rr(b){_=b,x||(x=!0,pn())}function mn(b,j){O=S(function(){b(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Rr(k))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var I=h;h=j;try{return b()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var I=h;h=b;try{return j()}finally{h=I}},e.unstable_scheduleCallback=function(b,j,I){var B=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?B+I:B):I=B,b){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=I+ie,b={id:c++,callback:j,priorityLevel:b,startTime:I,expirationTime:ie,sortIndex:-1},I>B?(b.sortIndex=I,t(u,b),n(l)===null&&b===n(u)&&(y?(p(O),O=-1):y=!0,mn(w,I-B))):(b.sortIndex=ie,t(l,b),v||g||(v=!0,Rr(k))),b},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(b){var j=h;return function(){var I=h;h=j;try{return b.apply(this,arguments)}finally{h=I}}}})(zf);Af.exports=zf;var ym=Af.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=P,We=ym;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ff=new Set,ci={};function An(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(ci[e]=t,e=0;e<t.length;e++)Ff.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ja=Object.prototype.hasOwnProperty,vm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jc={},Ic={};function wm(e){return Ja.call(Ic,e)?!0:Ja.call(jc,e)?!1:vm.test(e)?Ic[e]=!0:(jc[e]=!0,!1)}function _m(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sm(e,t,n,r){if(t===null||typeof t>"u"||_m(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var cu=/[\-:]([a-z])/g;function du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cu,du);_e[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cu,du);_e[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cu,du);_e[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function fu(e,t,n,r){var i=_e.hasOwnProperty(t)?_e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sm(t,n,i,r)&&(n=null),r||i===null?wm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),hu=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),Uf=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),Xa=Symbol.for("react.suspense"),Za=Symbol.for("react.suspense_list"),mu=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Bf=Symbol.for("react.offscreen"),Rc=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,da;function Hr(e){if(da===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);da=t&&t[1]||""}return`
`+da+e}var fa=!1;function ha(e,t){if(!e||fa)return"";fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hr(e):""}function km(e){switch(e.tag){case 5:return Hr(e.type);case 16:return Hr("Lazy");case 13:return Hr("Suspense");case 19:return Hr("SuspenseList");case 0:case 2:case 15:return e=ha(e.type,!1),e;case 11:return e=ha(e.type.render,!1),e;case 1:return e=ha(e.type,!0),e;default:return""}}function el(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Wn:return"Portal";case qa:return"Profiler";case hu:return"StrictMode";case Xa:return"Suspense";case Za:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uf:return(e.displayName||"Context")+".Consumer";case Mf:return(e._context.displayName||"Context")+".Provider";case pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mu:return t=e.displayName||null,t!==null?t:el(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return el(e(t))}catch{}}return null}function xm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return el(t);case 8:return t===hu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Em(e){var t=Vf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ki(e){e._valueTracker||(e._valueTracker=Em(e))}function Hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tl(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wf(e,t){t=t.checked,t!=null&&fu(e,"checked",t,!1)}function nl(e,t){Wf(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&rl(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rl(e,t,n){(t!=="number"||zs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wr=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function il(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Wr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function Gf(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yi,Yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yi=Yi||document.createElement("div"),Yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$m=["Webkit","ms","Moz","O"];Object.keys(qr).forEach(function(e){$m.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qr[t]=qr[e]})});function Qf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qr.hasOwnProperty(e)&&qr[e]?(""+t).trim():t+"px"}function Jf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cm=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,t){if(t){if(Cm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ll=null;function gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,sr=null,or=null;function Dc(e){if(e=zi(e)){if(typeof ul!="function")throw Error(E(280));var t=e.stateNode;t&&(t=vo(t),ul(e.stateNode,e.type,t))}}function qf(e){sr?or?or.push(e):or=[e]:sr=e}function Xf(){if(sr){var e=sr,t=or;if(or=sr=null,Dc(e),t)for(e=0;e<t.length;e++)Dc(t[e])}}function Zf(e,t){return e(t)}function eh(){}var pa=!1;function th(e,t,n){if(pa)return e(t,n);pa=!0;try{return Zf(e,t,n)}finally{pa=!1,(sr!==null||or!==null)&&(eh(),Xf())}}function fi(e,t){var n=e.stateNode;if(n===null)return null;var r=vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var cl=!1;if(Rt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){cl=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{cl=!1}function bm(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Xr=!1,Ds=null,Fs=!1,dl=null,Pm={onError:function(e){Xr=!0,Ds=e}};function Tm(e,t,n,r,i,s,o,a,l){Xr=!1,Ds=null,bm.apply(Pm,arguments)}function Om(e,t,n,r,i,s,o,a,l){if(Tm.apply(this,arguments),Xr){if(Xr){var u=Ds;Xr=!1,Ds=null}else throw Error(E(198));Fs||(Fs=!0,dl=u)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fc(e){if(zn(e)!==e)throw Error(E(188))}function jm(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fc(i),e;if(s===r)return Fc(i),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function rh(e){return e=jm(e),e!==null?ih(e):null}function ih(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ih(e);if(t!==null)return t;e=e.sibling}return null}var sh=We.unstable_scheduleCallback,Mc=We.unstable_cancelCallback,Im=We.unstable_shouldYield,Rm=We.unstable_requestPaint,se=We.unstable_now,Lm=We.unstable_getCurrentPriorityLevel,yu=We.unstable_ImmediatePriority,oh=We.unstable_UserBlockingPriority,Ms=We.unstable_NormalPriority,Nm=We.unstable_LowPriority,ah=We.unstable_IdlePriority,po=null,kt=null;function Am(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(po,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Fm,zm=Math.log,Dm=Math.LN2;function Fm(e){return e>>>=0,e===0?32:31-(zm(e)/Dm|0)|0}var Qi=64,Ji=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Us(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Gr(a):(s&=o,s!==0&&(r=Gr(s)))}else o=n&~i,o!==0?r=Gr(o):s!==0&&(r=Gr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Mm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Um(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-dt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Mm(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lh(){var e=Qi;return Qi<<=1,!(Qi&4194240)&&(Qi=64),e}function ma(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Bm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function vu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function uh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ch,wu,dh,fh,hh,hl=!1,qi=[],qt=null,Xt=null,Zt=null,hi=new Map,pi=new Map,Gt=[],Vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function Ar(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=zi(t),t!==null&&wu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hm(e,t,n,r,i){switch(t){case"focusin":return qt=Ar(qt,e,t,n,r,i),!0;case"dragenter":return Xt=Ar(Xt,e,t,n,r,i),!0;case"mouseover":return Zt=Ar(Zt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return hi.set(s,Ar(hi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,pi.set(s,Ar(pi.get(s)||null,e,t,n,r,i)),!0}return!1}function ph(e){var t=xn(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=nh(n),t!==null){e.blockedOn=t,hh(e.priority,function(){dh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ll=r,n.target.dispatchEvent(r),ll=null}else return t=zi(n),t!==null&&wu(t),e.blockedOn=n,!1;t.shift()}return!0}function Bc(e,t,n){ws(e)&&n.delete(t)}function Wm(){hl=!1,qt!==null&&ws(qt)&&(qt=null),Xt!==null&&ws(Xt)&&(Xt=null),Zt!==null&&ws(Zt)&&(Zt=null),hi.forEach(Bc),pi.forEach(Bc)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,hl||(hl=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Wm)))}function mi(e){function t(i){return zr(i,e)}if(0<qi.length){zr(qi[0],e);for(var n=1;n<qi.length;n++){var r=qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&zr(qt,e),Xt!==null&&zr(Xt,e),Zt!==null&&zr(Zt,e),hi.forEach(t),pi.forEach(t),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)ph(n),n.blockedOn===null&&Gt.shift()}var ar=zt.ReactCurrentBatchConfig,Bs=!0;function Gm(e,t,n,r){var i=H,s=ar.transition;ar.transition=null;try{H=1,_u(e,t,n,r)}finally{H=i,ar.transition=s}}function Km(e,t,n,r){var i=H,s=ar.transition;ar.transition=null;try{H=4,_u(e,t,n,r)}finally{H=i,ar.transition=s}}function _u(e,t,n,r){if(Bs){var i=pl(e,t,n,r);if(i===null)$a(e,t,r,Vs,n),Uc(e,r);else if(Hm(i,e,t,n,r))r.stopPropagation();else if(Uc(e,r),t&4&&-1<Vm.indexOf(e)){for(;i!==null;){var s=zi(i);if(s!==null&&ch(s),s=pl(e,t,n,r),s===null&&$a(e,t,r,Vs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $a(e,t,r,null,n)}}var Vs=null;function pl(e,t,n,r){if(Vs=null,e=gu(r),e=xn(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vs=e,null}function mh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lm()){case yu:return 1;case oh:return 4;case Ms:case Nm:return 16;case ah:return 536870912;default:return 16}default:return 16}}var Qt=null,Su=null,_s=null;function gh(){if(_s)return _s;var e,t=Su,n=t.length,r,i="value"in Qt?Qt.value:Qt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return _s=i.slice(e,1<r?1-r:void 0)}function Ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function Vc(){return!1}function Ke(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xi:Vc,this.isPropagationStopped=Vc,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ku=Ke(br),Ai=ne({},br,{view:0,detail:0}),Ym=Ke(Ai),ga,ya,Dr,mo=ne({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(ga=e.screenX-Dr.screenX,ya=e.screenY-Dr.screenY):ya=ga=0,Dr=e),ga)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),Hc=Ke(mo),Qm=ne({},mo,{dataTransfer:0}),Jm=Ke(Qm),qm=ne({},Ai,{relatedTarget:0}),va=Ke(qm),Xm=ne({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=Ke(Xm),eg=ne({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tg=Ke(eg),ng=ne({},br,{data:0}),Wc=Ke(ng),rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function og(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sg[e])?!!t[e]:!1}function xu(){return og}var ag=ne({},Ai,{key:function(e){if(e.key){var t=rg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ig[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lg=Ke(ag),ug=ne({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=Ke(ug),cg=ne({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),dg=Ke(cg),fg=ne({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=Ke(fg),pg=ne({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=Ke(pg),gg=[9,13,27,32],Eu=Rt&&"CompositionEvent"in window,Zr=null;Rt&&"documentMode"in document&&(Zr=document.documentMode);var yg=Rt&&"TextEvent"in window&&!Zr,yh=Rt&&(!Eu||Zr&&8<Zr&&11>=Zr),Kc=" ",Yc=!1;function vh(e,t){switch(e){case"keyup":return gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function vg(e,t){switch(e){case"compositionend":return wh(t);case"keypress":return t.which!==32?null:(Yc=!0,Kc);case"textInput":return e=t.data,e===Kc&&Yc?null:e;default:return null}}function wg(e,t){if(Kn)return e==="compositionend"||!Eu&&vh(e,t)?(e=gh(),_s=Su=Qt=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yh&&t.locale!=="ko"?null:t.data;default:return null}}var _g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_g[e.type]:t==="textarea"}function _h(e,t,n,r){qf(r),t=Hs(t,"onChange"),0<t.length&&(n=new ku("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ei=null,gi=null;function Sg(e){jh(e,0)}function go(e){var t=Jn(e);if(Hf(t))return e}function kg(e,t){if(e==="change")return t}var Sh=!1;if(Rt){var wa;if(Rt){var _a="oninput"in document;if(!_a){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),_a=typeof Jc.oninput=="function"}wa=_a}else wa=!1;Sh=wa&&(!document.documentMode||9<document.documentMode)}function qc(){ei&&(ei.detachEvent("onpropertychange",kh),gi=ei=null)}function kh(e){if(e.propertyName==="value"&&go(gi)){var t=[];_h(t,gi,e,gu(e)),th(Sg,t)}}function xg(e,t,n){e==="focusin"?(qc(),ei=t,gi=n,ei.attachEvent("onpropertychange",kh)):e==="focusout"&&qc()}function Eg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(gi)}function $g(e,t){if(e==="click")return go(t)}function Cg(e,t){if(e==="input"||e==="change")return go(t)}function bg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:bg;function yi(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ja.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zc(e,t){var n=Xc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xc(n)}}function xh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Eh(){for(var e=window,t=zs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zs(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pg(e){var t=Eh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xh(n.ownerDocument.documentElement,n)){if(r!==null&&$u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Zc(n,s);var o=Zc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tg=Rt&&"documentMode"in document&&11>=document.documentMode,Yn=null,ml=null,ti=null,gl=!1;function ed(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gl||Yn==null||Yn!==zs(r)||(r=Yn,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ti&&yi(ti,r)||(ti=r,r=Hs(ml,"onSelect"),0<r.length&&(t=new ku("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function Zi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Zi("Animation","AnimationEnd"),animationiteration:Zi("Animation","AnimationIteration"),animationstart:Zi("Animation","AnimationStart"),transitionend:Zi("Transition","TransitionEnd")},Sa={},$h={};Rt&&($h=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function yo(e){if(Sa[e])return Sa[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $h)return Sa[e]=t[n];return e}var Ch=yo("animationend"),bh=yo("animationiteration"),Ph=yo("animationstart"),Th=yo("transitionend"),Oh=new Map,td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){Oh.set(e,t),An(t,[e])}for(var ka=0;ka<td.length;ka++){var xa=td[ka],Og=xa.toLowerCase(),jg=xa[0].toUpperCase()+xa.slice(1);cn(Og,"on"+jg)}cn(Ch,"onAnimationEnd");cn(bh,"onAnimationIteration");cn(Ph,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Th,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function nd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Om(r,t,void 0,e),e.currentTarget=null}function jh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;nd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;nd(i,a,u),s=l}}}if(Fs)throw e=dl,Fs=!1,dl=null,e}function J(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(Ih(t,e,2,!1),n.add(r))}function Ea(e,t,n){var r=0;t&&(r|=4),Ih(n,e,r,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function vi(e){if(!e[es]){e[es]=!0,Ff.forEach(function(n){n!=="selectionchange"&&(Ig.has(n)||Ea(n,!1,e),Ea(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,Ea("selectionchange",!1,t))}}function Ih(e,t,n,r){switch(mh(t)){case 1:var i=Gm;break;case 4:i=Km;break;default:i=_u}n=i.bind(null,t,n,e),i=void 0,!cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $a(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}th(function(){var u=s,c=gu(n),d=[];e:{var h=Oh.get(e);if(h!==void 0){var g=ku,v=e;switch(e){case"keypress":if(Ss(n)===0)break e;case"keydown":case"keyup":g=lg;break;case"focusin":v="focus",g=va;break;case"focusout":v="blur",g=va;break;case"beforeblur":case"afterblur":g=va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=dg;break;case Ch:case bh:case Ph:g=Zm;break;case Th:g=hg;break;case"scroll":g=Ym;break;case"wheel":g=mg;break;case"copy":case"cut":case"paste":g=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gc}var y=(t&4)!==0,S=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=fi(f,p),w!=null&&y.push(wi(f,w,m)))),S)break;f=f.return}0<y.length&&(h=new g(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==ll&&(v=n.relatedTarget||n.fromElement)&&(xn(v)||v[Lt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?xn(v):null,v!==null&&(S=zn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Hc,w="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Gc,w="onPointerLeave",p="onPointerEnter",f="pointer"),S=g==null?h:Jn(g),m=v==null?h:Jn(v),h=new y(w,f+"leave",g,n,c),h.target=S,h.relatedTarget=m,w=null,xn(c)===u&&(y=new y(p,f+"enter",v,n,c),y.target=m,y.relatedTarget=S,w=y),S=w,g&&v)t:{for(y=g,p=v,f=0,m=y;m;m=Dn(m))f++;for(m=0,w=p;w;w=Dn(w))m++;for(;0<f-m;)y=Dn(y),f--;for(;0<m-f;)p=Dn(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Dn(y),p=Dn(p)}y=null}else y=null;g!==null&&rd(d,h,g,y,!1),v!==null&&S!==null&&rd(d,S,v,y,!0)}}e:{if(h=u?Jn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=kg;else if(Qc(h))if(Sh)k=Cg;else{k=Eg;var x=xg}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=$g);if(k&&(k=k(e,u))){_h(d,k,n,c);break e}x&&x(e,h,u),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&rl(h,"number",h.value)}switch(x=u?Jn(u):window,e){case"focusin":(Qc(x)||x.contentEditable==="true")&&(Yn=x,ml=u,ti=null);break;case"focusout":ti=ml=Yn=null;break;case"mousedown":gl=!0;break;case"contextmenu":case"mouseup":case"dragend":gl=!1,ed(d,n,c);break;case"selectionchange":if(Tg)break;case"keydown":case"keyup":ed(d,n,c)}var _;if(Eu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Kn?vh(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(yh&&n.locale!=="ko"&&(Kn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Kn&&(_=gh()):(Qt=c,Su="value"in Qt?Qt.value:Qt.textContent,Kn=!0)),x=Hs(u,O),0<x.length&&(O=new Wc(O,e,null,n,c),d.push({event:O,listeners:x}),_?O.data=_:(_=wh(n),_!==null&&(O.data=_)))),(_=yg?vg(e,n):wg(e,n))&&(u=Hs(u,"onBeforeInput"),0<u.length&&(c=new Wc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}jh(d,t)})}function wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fi(e,n),s!=null&&r.unshift(wi(e,s,i)),s=fi(e,t),s!=null&&r.push(wi(e,s,i))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rd(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fi(n,s),l!=null&&o.unshift(wi(n,l,a))):i||(l=fi(n,s),l!=null&&o.push(wi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Rg=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function id(e){return(typeof e=="string"?e:""+e).replace(Rg,`
`).replace(Lg,"")}function ts(e,t,n){if(t=id(t),id(e)!==t&&n)throw Error(E(425))}function Ws(){}var yl=null,vl=null;function wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _l=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,Ag=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(e){return sd.resolve(null).then(e).catch(zg)}:_l;function zg(e){setTimeout(function(){throw e})}function Ca(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),mi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mi(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),St="__reactFiber$"+Pr,_i="__reactProps$"+Pr,Lt="__reactContainer$"+Pr,Sl="__reactEvents$"+Pr,Dg="__reactListeners$"+Pr,Fg="__reactHandles$"+Pr;function xn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=od(e);e!==null;){if(n=e[St])return n;e=od(e)}return t}e=n,n=e.parentNode}return null}function zi(e){return e=e[St]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function vo(e){return e[_i]||null}var kl=[],qn=-1;function dn(e){return{current:e}}function X(e){0>qn||(e.current=kl[qn],kl[qn]=null,qn--)}function Q(e,t){qn++,kl[qn]=e.current,e.current=t}var ln={},Ce=dn(ln),Le=dn(!1),On=ln;function fr(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function Gs(){X(Le),X(Ce)}function ad(e,t,n){if(Ce.current!==ln)throw Error(E(168));Q(Ce,t),Q(Le,n)}function Rh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,xm(e)||"Unknown",i));return ne({},n,r)}function Ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,On=Ce.current,Q(Ce,e),Q(Le,Le.current),!0}function ld(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Rh(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,X(Le),X(Ce),Q(Ce,e)):X(Le),Q(Le,n)}var Tt=null,wo=!1,ba=!1;function Lh(e){Tt===null?Tt=[e]:Tt.push(e)}function Mg(e){wo=!0,Lh(e)}function fn(){if(!ba&&Tt!==null){ba=!0;var e=0,t=H;try{var n=Tt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,wo=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),sh(yu,fn),i}finally{H=t,ba=!1}}return null}var Xn=[],Zn=0,Ys=null,Qs=0,Xe=[],Ze=0,jn=null,Ot=1,jt="";function wn(e,t){Xn[Zn++]=Qs,Xn[Zn++]=Ys,Ys=e,Qs=t}function Nh(e,t,n){Xe[Ze++]=Ot,Xe[Ze++]=jt,Xe[Ze++]=jn,jn=e;var r=Ot;e=jt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ot=1<<32-dt(t)+i|n<<i|r,jt=s+e}else Ot=1<<s|n<<i|r,jt=e}function Cu(e){e.return!==null&&(wn(e,1),Nh(e,1,0))}function bu(e){for(;e===Ys;)Ys=Xn[--Zn],Xn[Zn]=null,Qs=Xn[--Zn],Xn[Zn]=null;for(;e===jn;)jn=Xe[--Ze],Xe[Ze]=null,jt=Xe[--Ze],Xe[Ze]=null,Ot=Xe[--Ze],Xe[Ze]=null}var Ve=null,Be=null,Z=!1,ct=null;function Ah(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ud(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,Be=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:Ot,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,Be=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function El(e){if(Z){var t=Be;if(t){var n=t;if(!ud(e,t)){if(xl(e))throw Error(E(418));t=en(n.nextSibling);var r=Ve;t&&ud(e,t)?Ah(r,n):(e.flags=e.flags&-4097|2,Z=!1,Ve=e)}}else{if(xl(e))throw Error(E(418));e.flags=e.flags&-4097|2,Z=!1,Ve=e}}}function cd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ns(e){if(e!==Ve)return!1;if(!Z)return cd(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wl(e.type,e.memoizedProps)),t&&(t=Be)){if(xl(e))throw zh(),Error(E(418));for(;t;)Ah(e,t),t=en(t.nextSibling)}if(cd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=Ve?en(e.stateNode.nextSibling):null;return!0}function zh(){for(var e=Be;e;)e=en(e.nextSibling)}function hr(){Be=Ve=null,Z=!1}function Pu(e){ct===null?ct=[e]:ct.push(e)}var Ug=zt.ReactCurrentBatchConfig;function at(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Js=dn(null),qs=null,er=null,Tu=null;function Ou(){Tu=er=qs=null}function ju(e){var t=Js.current;X(Js),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lr(e,t){qs=e,Tu=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Tu!==e)if(e={context:e,memoizedValue:t,next:null},er===null){if(qs===null)throw Error(E(308));er=e,qs.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return t}var En=null;function Iu(e){En===null?En=[e]:En.push(e)}function Dh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Iu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nt(e,n)}return i=r.interleaved,i===null?(t.next=t,Iu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nt(e,n)}function ks(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vu(e,n)}}function dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xs(e,t,n,r){var i=e.updateQueue;Ht=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(g,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,d,h):v,h==null)break e;d=ne({},d,h);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Rn|=o,e.lanes=o,e.memoizedState=d}}function fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Mh=new Df.Component().refs;function Cl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=rn(e),s=It(r,i);s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,i),t!==null&&(ft(t,e,i,r),ks(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=rn(e),s=It(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,i),t!==null&&(ft(t,e,i,r),ks(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=rn(e),i=It(n,r);i.tag=2,t!=null&&(i.callback=t),t=tn(e,i,r),t!==null&&(ft(t,e,r,n),ks(t,e,r))}};function hd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!yi(n,r)||!yi(i,s):!0}function Uh(e,t,n){var r=!1,i=ln,s=t.contextType;return typeof s=="object"&&s!==null?s=nt(s):(i=Ne(t)?On:Ce.current,r=t.contextTypes,s=(r=r!=null)?fr(e,i):ln),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function pd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function bl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Mh,Ru(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=nt(s):(s=Ne(t)?On:Ce.current,i.context=fr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Cl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_o.enqueueReplaceState(i,i.state,null),Xs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Mh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function md(e){var t=e._init;return t(e._payload)}function Bh(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=sn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=La(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var k=m.type;return k===Gn?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Vt&&md(k)===f.type)?(w=i(f,m.props),w.ref=Fr(p,f,m),w.return=p,w):(w=Ps(m.type,m.key,m.props,null,p.mode,w),w.ref=Fr(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Na(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,k){return f===null||f.tag!==7?(f=Pn(m,p.mode,w,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=La(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Gi:return m=Ps(f.type,f.key,f.props,null,p.mode,m),m.ref=Fr(p,null,f),m.return=p,m;case Wn:return f=Na(f,p.mode,m),f.return=p,f;case Vt:var w=f._init;return d(p,w(f._payload),m)}if(Wr(f)||Lr(f))return f=Pn(f,p.mode,m,null),f.return=p,f;rs(p,f)}return null}function h(p,f,m,w){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Gi:return m.key===k?l(p,f,m,w):null;case Wn:return m.key===k?u(p,f,m,w):null;case Vt:return k=m._init,h(p,f,k(m._payload),w)}if(Wr(m)||Lr(m))return k!==null?null:c(p,f,m,w,null);rs(p,m)}return null}function g(p,f,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gi:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,k);case Wn:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,k);case Vt:var x=w._init;return g(p,f,m,x(w._payload),k)}if(Wr(w)||Lr(w))return p=p.get(m)||null,c(f,p,w,k,null);rs(f,w)}return null}function v(p,f,m,w){for(var k=null,x=null,_=f,O=f=0,K=null;_!==null&&O<m.length;O++){_.index>O?(K=_,_=null):K=_.sibling;var N=h(p,_,m[O],w);if(N===null){_===null&&(_=K);break}e&&_&&N.alternate===null&&t(p,_),f=s(N,f,O),x===null?k=N:x.sibling=N,x=N,_=K}if(O===m.length)return n(p,_),Z&&wn(p,O),k;if(_===null){for(;O<m.length;O++)_=d(p,m[O],w),_!==null&&(f=s(_,f,O),x===null?k=_:x.sibling=_,x=_);return Z&&wn(p,O),k}for(_=r(p,_);O<m.length;O++)K=g(_,p,O,m[O],w),K!==null&&(e&&K.alternate!==null&&_.delete(K.key===null?O:K.key),f=s(K,f,O),x===null?k=K:x.sibling=K,x=K);return e&&_.forEach(function(De){return t(p,De)}),Z&&wn(p,O),k}function y(p,f,m,w){var k=Lr(m);if(typeof k!="function")throw Error(E(150));if(m=k.call(m),m==null)throw Error(E(151));for(var x=k=null,_=f,O=f=0,K=null,N=m.next();_!==null&&!N.done;O++,N=m.next()){_.index>O?(K=_,_=null):K=_.sibling;var De=h(p,_,N.value,w);if(De===null){_===null&&(_=K);break}e&&_&&De.alternate===null&&t(p,_),f=s(De,f,O),x===null?k=De:x.sibling=De,x=De,_=K}if(N.done)return n(p,_),Z&&wn(p,O),k;if(_===null){for(;!N.done;O++,N=m.next())N=d(p,N.value,w),N!==null&&(f=s(N,f,O),x===null?k=N:x.sibling=N,x=N);return Z&&wn(p,O),k}for(_=r(p,_);!N.done;O++,N=m.next())N=g(_,p,O,N.value,w),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?O:N.key),f=s(N,f,O),x===null?k=N:x.sibling=N,x=N);return e&&_.forEach(function(hn){return t(p,hn)}),Z&&wn(p,O),k}function S(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Gn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Gi:e:{for(var k=m.key,x=f;x!==null;){if(x.key===k){if(k=m.type,k===Gn){if(x.tag===7){n(p,x.sibling),f=i(x,m.props.children),f.return=p,p=f;break e}}else if(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Vt&&md(k)===x.type){n(p,x.sibling),f=i(x,m.props),f.ref=Fr(p,x,m),f.return=p,p=f;break e}n(p,x);break}else t(p,x);x=x.sibling}m.type===Gn?(f=Pn(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Ps(m.type,m.key,m.props,null,p.mode,w),w.ref=Fr(p,f,m),w.return=p,p=w)}return o(p);case Wn:e:{for(x=m.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Na(m,p.mode,w),f.return=p,p=f}return o(p);case Vt:return x=m._init,S(p,f,x(m._payload),w)}if(Wr(m))return v(p,f,m,w);if(Lr(m))return y(p,f,m,w);rs(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=La(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return S}var pr=Bh(!0),Vh=Bh(!1),Di={},xt=dn(Di),Si=dn(Di),ki=dn(Di);function $n(e){if(e===Di)throw Error(E(174));return e}function Lu(e,t){switch(Q(ki,t),Q(Si,e),Q(xt,Di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sl(t,e)}X(xt),Q(xt,t)}function mr(){X(xt),X(Si),X(ki)}function Hh(e){$n(ki.current);var t=$n(xt.current),n=sl(t,e.type);t!==n&&(Q(Si,e),Q(xt,n))}function Nu(e){Si.current===e&&(X(xt),X(Si))}var ee=dn(0);function Zs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pa=[];function Au(){for(var e=0;e<Pa.length;e++)Pa[e]._workInProgressVersionPrimary=null;Pa.length=0}var xs=zt.ReactCurrentDispatcher,Ta=zt.ReactCurrentBatchConfig,In=0,te=null,ue=null,fe=null,eo=!1,ni=!1,xi=0,Bg=0;function Se(){throw Error(E(321))}function zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Du(e,t,n,r,i,s){if(In=s,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xs.current=e===null||e.memoizedState===null?Gg:Kg,e=n(r,i),ni){s=0;do{if(ni=!1,xi=0,25<=s)throw Error(E(301));s+=1,fe=ue=null,t.updateQueue=null,xs.current=Yg,e=n(r,i)}while(ni)}if(xs.current=to,t=ue!==null&&ue.next!==null,In=0,fe=ue=te=null,eo=!1,t)throw Error(E(300));return e}function Fu(){var e=xi!==0;return xi=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?te.memoizedState=fe=e:fe=fe.next=e,fe}function rt(){if(ue===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=fe===null?te.memoizedState:fe.next;if(t!==null)fe=t,ue=e;else{if(e===null)throw Error(E(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?te.memoizedState=fe=e:fe=fe.next=e}return fe}function Ei(e,t){return typeof t=="function"?t(e):t}function Oa(e){var t=rt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((In&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,te.lanes|=c,Rn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,pt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,te.lanes|=s,Rn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ja(e){var t=rt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);pt(s,t.memoizedState)||(Re=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Wh(){}function Gh(e,t){var n=te,r=rt(),i=t(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Re=!0),r=r.queue,Mu(Qh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,$i(9,Yh.bind(null,n,r,i,t),void 0,null),me===null)throw Error(E(349));In&30||Kh(n,t,i)}return i}function Kh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yh(e,t,n,r){t.value=n,t.getSnapshot=r,Jh(t)&&qh(e)}function Qh(e,t,n){return n(function(){Jh(t)&&qh(e)})}function Jh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function qh(e){var t=Nt(e,1);t!==null&&ft(t,e,1,-1)}function gd(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:e},t.queue=e,e=e.dispatch=Wg.bind(null,te,e),[t.memoizedState,e]}function $i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xh(){return rt().memoizedState}function Es(e,t,n,r){var i=yt();te.flags|=e,i.memoizedState=$i(1|t,n,void 0,r===void 0?null:r)}function So(e,t,n,r){var i=rt();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&zu(r,o.deps)){i.memoizedState=$i(t,n,s,r);return}}te.flags|=e,i.memoizedState=$i(1|t,n,s,r)}function yd(e,t){return Es(8390656,8,e,t)}function Mu(e,t){return So(2048,8,e,t)}function Zh(e,t){return So(4,2,e,t)}function ep(e,t){return So(4,4,e,t)}function tp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function np(e,t,n){return n=n!=null?n.concat([e]):null,So(4,4,tp.bind(null,t,e),n)}function Uu(){}function rp(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ip(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sp(e,t,n){return In&21?(pt(n,t)||(n=lh(),te.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Vg(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ta.transition;Ta.transition={};try{e(!1),t()}finally{H=n,Ta.transition=r}}function op(){return rt().memoizedState}function Hg(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ap(e))lp(t,n);else if(n=Dh(e,t,n,r),n!==null){var i=Pe();ft(n,e,r,i),up(n,t,r)}}function Wg(e,t,n){var r=rn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ap(e))lp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,pt(a,o)){var l=t.interleaved;l===null?(i.next=i,Iu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Dh(e,t,i,r),n!==null&&(i=Pe(),ft(n,e,r,i),up(n,t,r))}}function ap(e){var t=e.alternate;return e===te||t!==null&&t===te}function lp(e,t){ni=eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function up(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vu(e,n)}}var to={readContext:nt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Gg={readContext:nt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:yd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Es(4194308,4,tp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Es(4194308,4,e,t)},useInsertionEffect:function(e,t){return Es(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hg.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:gd,useDebugValue:Uu,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=gd(!1),t=e[0];return e=Vg.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=yt();if(Z){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),me===null)throw Error(E(349));In&30||Kh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,yd(Qh.bind(null,r,s,e),[e]),r.flags|=2048,$i(9,Yh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=yt(),t=me.identifierPrefix;if(Z){var n=jt,r=Ot;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kg={readContext:nt,useCallback:rp,useContext:nt,useEffect:Mu,useImperativeHandle:np,useInsertionEffect:Zh,useLayoutEffect:ep,useMemo:ip,useReducer:Oa,useRef:Xh,useState:function(){return Oa(Ei)},useDebugValue:Uu,useDeferredValue:function(e){var t=rt();return sp(t,ue.memoizedState,e)},useTransition:function(){var e=Oa(Ei)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Wh,useSyncExternalStore:Gh,useId:op,unstable_isNewReconciler:!1},Yg={readContext:nt,useCallback:rp,useContext:nt,useEffect:Mu,useImperativeHandle:np,useInsertionEffect:Zh,useLayoutEffect:ep,useMemo:ip,useReducer:ja,useRef:Xh,useState:function(){return ja(Ei)},useDebugValue:Uu,useDeferredValue:function(e){var t=rt();return ue===null?t.memoizedState=e:sp(t,ue.memoizedState,e)},useTransition:function(){var e=ja(Ei)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Wh,useSyncExternalStore:Gh,useId:op,unstable_isNewReconciler:!1};function gr(e,t){try{var n="",r=t;do n+=km(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ia(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qg=typeof WeakMap=="function"?WeakMap:Map;function cp(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ro||(ro=!0,Dl=r),Pl(e,t)},n}function dp(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pl(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function vd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=u1.bind(null,e,t,n),t.then(e,e))}function wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _d(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var Jg=zt.ReactCurrentOwner,Re=!1;function be(e,t,n,r){t.child=e===null?Vh(t,null,n,r):pr(t,e.child,n,r)}function Sd(e,t,n,r,i){n=n.render;var s=t.ref;return lr(t,i),r=Du(e,t,n,r,s,i),n=Fu(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(Z&&n&&Cu(t),t.flags|=1,be(e,t,r,i),t.child)}function kd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Qu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,fp(e,t,s,r,i)):(e=Ps(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yi,n(o,r)&&e.ref===t.ref)return At(e,t,i)}return t.flags|=1,e=sn(s,r),e.ref=t.ref,e.return=t,t.child=e}function fp(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(yi(s,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,At(e,t,i)}return Tl(e,t,n,r,i)}function hp(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(nr,Ue),Ue|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(nr,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(nr,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Q(nr,Ue),Ue|=r;return be(e,t,i,n),t.child}function pp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,n,r,i){var s=Ne(n)?On:Ce.current;return s=fr(t,s),lr(t,i),n=Du(e,t,n,r,s,i),r=Fu(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(Z&&r&&Cu(t),t.flags|=1,be(e,t,n,i),t.child)}function xd(e,t,n,r,i){if(Ne(n)){var s=!0;Ks(t)}else s=!1;if(lr(t,i),t.stateNode===null)$s(e,t),Uh(t,n,r),bl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Ne(n)?On:Ce.current,u=fr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&pd(t,o,r,u),Ht=!1;var h=t.memoizedState;o.state=h,Xs(t,r,o,i),l=t.memoizedState,a!==r||h!==l||Le.current||Ht?(typeof c=="function"&&(Cl(t,n,c,r),l=t.memoizedState),(a=Ht||hd(t,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Fh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:at(t.type,a),o.props=u,d=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=nt(l):(l=Ne(n)?On:Ce.current,l=fr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&pd(t,o,r,l),Ht=!1,h=t.memoizedState,o.state=h,Xs(t,r,o,i);var v=t.memoizedState;a!==d||h!==v||Le.current||Ht?(typeof g=="function"&&(Cl(t,n,g,r),v=t.memoizedState),(u=Ht||hd(t,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ol(e,t,n,r,s,i)}function Ol(e,t,n,r,i,s){pp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ld(t,n,!1),At(e,t,s);r=t.stateNode,Jg.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=pr(t,e.child,null,s),t.child=pr(t,null,a,s)):be(e,t,a,s),t.memoizedState=r.state,i&&ld(t,n,!0),t.child}function mp(e){var t=e.stateNode;t.pendingContext?ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ad(e,t.context,!1),Lu(e,t.containerInfo)}function Ed(e,t,n,r,i){return hr(),Pu(i),t.flags|=256,be(e,t,n,r),t.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function gp(e,t,n){var r=t.pendingProps,i=ee.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(ee,i&1),e===null)return El(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eo(o,r,0,null),e=Pn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Il(n),t.memoizedState=jl,e):Bu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qg(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=sn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sn(a,s):(s=Pn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Il(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=jl,r}return s=e.child,e=s.sibling,r=sn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bu(e,t){return t=Eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function is(e,t,n,r){return r!==null&&Pu(r),pr(t,e.child,null,n),e=Bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qg(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ia(Error(E(422))),is(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Eo({mode:"visible",children:r.children},i,0,null),s=Pn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&pr(t,e.child,null,o),t.child.memoizedState=Il(o),t.memoizedState=jl,s);if(!(t.mode&1))return is(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Ia(s,r,void 0),is(e,t,o,r)}if(a=(o&e.childLanes)!==0,Re||a){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nt(e,i),ft(r,e,i,-1))}return Yu(),r=Ia(Error(E(421))),is(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=c1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Be=en(i.nextSibling),Ve=t,Z=!0,ct=null,e!==null&&(Xe[Ze++]=Ot,Xe[Ze++]=jt,Xe[Ze++]=jn,Ot=e.id,jt=e.overflow,jn=t),t=Bu(t,r.children),t.flags|=4096,t)}function $d(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$l(e.return,t,n)}function Ra(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(be(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$d(e,n,t);else if(e.tag===19)$d(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ra(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ra(t,!0,n,null,s);break;case"together":Ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xg(e,t,n){switch(t.tag){case 3:mp(t),hr();break;case 5:Hh(t);break;case 1:Ne(t.type)&&Ks(t);break;case 4:Lu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(Js,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?gp(e,t,n):(Q(ee,ee.current&1),e=At(e,t,n),e!==null?e.sibling:null);Q(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,hp(e,t,n)}return At(e,t,n)}var vp,Rl,wp,_p;vp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rl=function(){};wp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(xt.current);var s=null;switch(n){case"input":i=tl(e,i),r=tl(e,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=il(e,i),r=il(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ws)}ol(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ci.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ci.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};_p=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zg(e,t,n){var r=t.pendingProps;switch(bu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Ne(t.type)&&Gs(),ke(t),null;case 3:return r=t.stateNode,mr(),X(Le),X(Ce),Au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Ul(ct),ct=null))),Rl(e,t),ke(t),null;case 5:Nu(t);var i=$n(ki.current);if(n=t.type,e!==null&&t.stateNode!=null)wp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ke(t),null}if(e=$n(xt.current),ns(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[St]=t,r[_i]=s,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Kr.length;i++)J(Kr[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Lc(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Ac(r,s),J("invalid",r)}ol(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ts(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ts(r.textContent,a,e),i=["children",""+a]):ci.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Ki(r),Nc(r,s,!0);break;case"textarea":Ki(r),zc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ws)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[St]=t,e[_i]=r,vp(e,t,!1,!1),t.stateNode=e;e:{switch(o=al(n,r),n){case"dialog":J("cancel",e),J("close",e),i=r;break;case"iframe":case"object":case"embed":J("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kr.length;i++)J(Kr[i],e);i=r;break;case"source":J("error",e),i=r;break;case"img":case"image":case"link":J("error",e),J("load",e),i=r;break;case"details":J("toggle",e),i=r;break;case"input":Lc(e,r),i=tl(e,r),J("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),J("invalid",e);break;case"textarea":Ac(e,r),i=il(e,r),J("invalid",e);break;default:i=r}ol(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yf(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&di(e,l):typeof l=="number"&&di(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ci.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",e):l!=null&&fu(e,s,l,o))}switch(n){case"input":Ki(e),Nc(e,r,!1);break;case"textarea":Ki(e),zc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ir(e,!!r.multiple,s,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ws)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)_p(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=$n(ki.current),$n(xt.current),ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(s=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:ts(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ts(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return ke(t),null;case 13:if(X(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Be!==null&&t.mode&1&&!(t.flags&128))zh(),hr(),t.flags|=98560,s=!1;else if(s=ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[St]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),s=!1}else ct!==null&&(Ul(ct),ct=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ce===0&&(ce=3):Yu())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return mr(),Rl(e,t),e===null&&vi(t.stateNode.containerInfo),ke(t),null;case 10:return ju(t.type._context),ke(t),null;case 17:return Ne(t.type)&&Gs(),ke(t),null;case 19:if(X(ee),s=t.memoizedState,s===null)return ke(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Mr(s,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zs(e),o!==null){for(t.flags|=128,Mr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(ee,ee.current&1|2),t.child}e=e.sibling}s.tail!==null&&se()>yr&&(t.flags|=128,r=!0,Mr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Zs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return ke(t),null}else 2*se()-s.renderingStartTime>yr&&n!==1073741824&&(t.flags|=128,r=!0,Mr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=se(),t.sibling=null,n=ee.current,Q(ee,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return Ku(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function e1(e,t){switch(bu(t),t.tag){case 1:return Ne(t.type)&&Gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),X(Le),X(Ce),Au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nu(t),null;case 13:if(X(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ee),null;case 4:return mr(),null;case 10:return ju(t.type._context),null;case 22:case 23:return Ku(),null;case 24:return null;default:return null}}var ss=!1,$e=!1,t1=typeof WeakSet=="function"?WeakSet:Set,T=null;function tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Ll(e,t,n){try{n()}catch(r){re(e,t,r)}}var Cd=!1;function n1(e,t){if(yl=Bs,e=Eh(),$u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},Bs=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:at(t.type,y),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=Cd,Cd=!1,v}function ri(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ll(t,n,s)}i=i.next}while(i!==r)}}function ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sp(e){var t=e.alternate;t!==null&&(e.alternate=null,Sp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[_i],delete t[Sl],delete t[Dg],delete t[Fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kp(e){return e.tag===5||e.tag===3||e.tag===4}function bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ws));else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}var ye=null,lt=!1;function Mt(e,t,n){for(n=n.child;n!==null;)xp(e,t,n),n=n.sibling}function xp(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(po,n)}catch{}switch(n.tag){case 5:$e||tr(n,t);case 6:var r=ye,i=lt;ye=null,Mt(e,t,n),ye=r,lt=i,ye!==null&&(lt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(lt?(e=ye,n=n.stateNode,e.nodeType===8?Ca(e.parentNode,n):e.nodeType===1&&Ca(e,n),mi(e)):Ca(ye,n.stateNode));break;case 4:r=ye,i=lt,ye=n.stateNode.containerInfo,lt=!0,Mt(e,t,n),ye=r,lt=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ll(n,t,o),i=i.next}while(i!==r)}Mt(e,t,n);break;case 1:if(!$e&&(tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,Mt(e,t,n),$e=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function Pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new t1),t.forEach(function(r){var i=d1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,lt=!1;break e;case 3:ye=a.stateNode.containerInfo,lt=!0;break e;case 4:ye=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(ye===null)throw Error(E(160));xp(s,o,i),ye=null,lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ep(t,e),t=t.sibling}function Ep(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),gt(e),r&4){try{ri(3,e,e.return),ko(3,e)}catch(y){re(e,e.return,y)}try{ri(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:ot(t,e),gt(e),r&512&&n!==null&&tr(n,n.return);break;case 5:if(ot(t,e),gt(e),r&512&&n!==null&&tr(n,n.return),e.flags&32){var i=e.stateNode;try{di(i,"")}catch(y){re(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wf(i,s),al(a,o);var u=al(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Jf(i,d):c==="dangerouslySetInnerHTML"?Yf(i,d):c==="children"?di(i,d):fu(i,c,d,u)}switch(a){case"input":nl(i,s);break;case"textarea":Gf(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ir(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ir(i,!!s.multiple,s.defaultValue,!0):ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[_i]=s}catch(y){re(e,e.return,y)}}break;case 6:if(ot(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){re(e,e.return,y)}}break;case 3:if(ot(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mi(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:ot(t,e),gt(e);break;case 13:ot(t,e),gt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wu=se())),r&4&&Pd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?($e=(u=$e)||c,ot(t,e),$e=u):ot(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(d=T=c;T!==null;){switch(h=T,g=h.child,h.tag){case 0:case 11:case 14:case 15:ri(4,h,h.return);break;case 1:tr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:tr(h,h.return);break;case 22:if(h.memoizedState!==null){Od(d);continue}}g!==null?(g.return=h,T=g):Od(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qf("display",o))}catch(y){re(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){re(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ot(t,e),gt(e),r&4&&Pd(e);break;case 21:break;default:ot(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kp(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(di(i,""),r.flags&=-33);var s=bd(e);zl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=bd(e);Al(e,a,o);break;default:throw Error(E(161))}}catch(l){re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r1(e,t,n){T=e,$p(e)}function $p(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ss;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=ss;var u=$e;if(ss=o,($e=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?jd(i):l!==null?(l.return=o,T=l):jd(i);for(;s!==null;)T=s,$p(s),s=s.sibling;T=i,ss=a,$e=u}Td(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):Td(e)}}function Td(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$e||ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&fd(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fd(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&mi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}$e||t.flags&512&&Nl(t)}catch(h){re(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Od(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function jd(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ko(4,t)}catch(l){re(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){re(t,i,l)}}var s=t.return;try{Nl(t)}catch(l){re(t,s,l)}break;case 5:var o=t.return;try{Nl(t)}catch(l){re(t,o,l)}}}catch(l){re(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var i1=Math.ceil,no=zt.ReactCurrentDispatcher,Vu=zt.ReactCurrentOwner,tt=zt.ReactCurrentBatchConfig,D=0,me=null,le=null,we=0,Ue=0,nr=dn(0),ce=0,Ci=null,Rn=0,xo=0,Hu=0,ii=null,je=null,Wu=0,yr=1/0,bt=null,ro=!1,Dl=null,nn=null,os=!1,Jt=null,io=0,si=0,Fl=null,Cs=-1,bs=0;function Pe(){return D&6?se():Cs!==-1?Cs:Cs=se()}function rn(e){return e.mode&1?D&2&&we!==0?we&-we:Ug.transition!==null?(bs===0&&(bs=lh()),bs):(e=H,e!==0||(e=window.event,e=e===void 0?16:mh(e.type)),e):1}function ft(e,t,n,r){if(50<si)throw si=0,Fl=null,Error(E(185));Ni(e,n,r),(!(D&2)||e!==me)&&(e===me&&(!(D&2)&&(xo|=n),ce===4&&Kt(e,we)),Ae(e,r),n===1&&D===0&&!(t.mode&1)&&(yr=se()+500,wo&&fn()))}function Ae(e,t){var n=e.callbackNode;Um(e,t);var r=Us(e,e===me?we:0);if(r===0)n!==null&&Mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mc(n),t===1)e.tag===0?Mg(Id.bind(null,e)):Lh(Id.bind(null,e)),Ag(function(){!(D&6)&&fn()}),n=null;else{switch(uh(r)){case 1:n=yu;break;case 4:n=oh;break;case 16:n=Ms;break;case 536870912:n=ah;break;default:n=Ms}n=Rp(n,Cp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cp(e,t){if(Cs=-1,bs=0,D&6)throw Error(E(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=Us(e,e===me?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=so(e,r);else{t=r;var i=D;D|=2;var s=Pp();(me!==e||we!==t)&&(bt=null,yr=se()+500,bn(e,t));do try{a1();break}catch(a){bp(e,a)}while(!0);Ou(),no.current=s,D=i,le!==null?t=0:(me=null,we=0,t=ce)}if(t!==0){if(t===2&&(i=fl(e),i!==0&&(r=i,t=Ml(e,i))),t===1)throw n=Ci,bn(e,0),Kt(e,r),Ae(e,se()),n;if(t===6)Kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!s1(i)&&(t=so(e,r),t===2&&(s=fl(e),s!==0&&(r=s,t=Ml(e,s))),t===1))throw n=Ci,bn(e,0),Kt(e,r),Ae(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:_n(e,je,bt);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=Wu+500-se(),10<t)){if(Us(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=_l(_n.bind(null,e,je,bt),t);break}_n(e,je,bt);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i1(r/1960))-r,10<r){e.timeoutHandle=_l(_n.bind(null,e,je,bt),r);break}_n(e,je,bt);break;case 5:_n(e,je,bt);break;default:throw Error(E(329))}}}return Ae(e,se()),e.callbackNode===n?Cp.bind(null,e):null}function Ml(e,t){var n=ii;return e.current.memoizedState.isDehydrated&&(bn(e,t).flags|=256),e=so(e,t),e!==2&&(t=je,je=n,t!==null&&Ul(t)),e}function Ul(e){je===null?je=e:je.push.apply(je,e)}function s1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~Hu,t&=~xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Id(e){if(D&6)throw Error(E(327));ur();var t=Us(e,0);if(!(t&1))return Ae(e,se()),null;var n=so(e,t);if(e.tag!==0&&n===2){var r=fl(e);r!==0&&(t=r,n=Ml(e,r))}if(n===1)throw n=Ci,bn(e,0),Kt(e,t),Ae(e,se()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,je,bt),Ae(e,se()),null}function Gu(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(yr=se()+500,wo&&fn())}}function Ln(e){Jt!==null&&Jt.tag===0&&!(D&6)&&ur();var t=D;D|=1;var n=tt.transition,r=H;try{if(tt.transition=null,H=1,e)return e()}finally{H=r,tt.transition=n,D=t,!(D&6)&&fn()}}function Ku(){Ue=nr.current,X(nr)}function bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ng(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gs();break;case 3:mr(),X(Le),X(Ce),Au();break;case 5:Nu(r);break;case 4:mr();break;case 13:X(ee);break;case 19:X(ee);break;case 10:ju(r.type._context);break;case 22:case 23:Ku()}n=n.return}if(me=e,le=e=sn(e.current,null),we=Ue=t,ce=0,Ci=null,Hu=xo=Rn=0,je=ii=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}En=null}return e}function bp(e,t){do{var n=le;try{if(Ou(),xs.current=to,eo){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}eo=!1}if(In=0,fe=ue=te=null,ni=!1,xi=0,Vu.current=null,n===null||n.return===null){ce=1,Ci=t,le=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=we,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=wd(o);if(g!==null){g.flags&=-257,_d(g,o,a,s,t),g.mode&1&&vd(s,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){vd(s,u,t),Yu();break e}l=Error(E(426))}}else if(Z&&a.mode&1){var S=wd(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),_d(S,o,a,s,t),Pu(gr(l,a));break e}}s=l=gr(l,a),ce!==4&&(ce=2),ii===null?ii=[s]:ii.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=cp(s,l,t);dd(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nn===null||!nn.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=dp(s,a,t);dd(s,w);break e}}s=s.return}while(s!==null)}Op(n)}catch(k){t=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Pp(){var e=no.current;return no.current=to,e===null?to:e}function Yu(){(ce===0||ce===3||ce===2)&&(ce=4),me===null||!(Rn&268435455)&&!(xo&268435455)||Kt(me,we)}function so(e,t){var n=D;D|=2;var r=Pp();(me!==e||we!==t)&&(bt=null,bn(e,t));do try{o1();break}catch(i){bp(e,i)}while(!0);if(Ou(),D=n,no.current=r,le!==null)throw Error(E(261));return me=null,we=0,ce}function o1(){for(;le!==null;)Tp(le)}function a1(){for(;le!==null&&!Im();)Tp(le)}function Tp(e){var t=Ip(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Op(e):le=t,Vu.current=null}function Op(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=e1(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}else if(n=Zg(n,t,Ue),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function _n(e,t,n){var r=H,i=tt.transition;try{tt.transition=null,H=1,l1(e,t,n,r)}finally{tt.transition=i,H=r}return null}function l1(e,t,n,r){do ur();while(Jt!==null);if(D&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Bm(e,s),e===me&&(le=me=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||os||(os=!0,Rp(Ms,function(){return ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tt.transition,tt.transition=null;var o=H;H=1;var a=D;D|=4,Vu.current=null,n1(e,n),Ep(n,e),Pg(vl),Bs=!!yl,vl=yl=null,e.current=n,r1(n),Rm(),D=a,H=o,tt.transition=s}else e.current=n;if(os&&(os=!1,Jt=e,io=i),s=e.pendingLanes,s===0&&(nn=null),Am(n.stateNode),Ae(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ro)throw ro=!1,e=Dl,Dl=null,e;return io&1&&e.tag!==0&&ur(),s=e.pendingLanes,s&1?e===Fl?si++:(si=0,Fl=e):si=0,fn(),null}function ur(){if(Jt!==null){var e=uh(io),t=tt.transition,n=H;try{if(tt.transition=null,H=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,io=0,D&6)throw Error(E(331));var i=D;for(D|=4,T=e.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:ri(8,c,s)}var d=c.child;if(d!==null)d.return=c,T=d;else for(;T!==null;){c=T;var h=c.sibling,g=c.return;if(Sp(c),c===u){T=null;break}if(h!==null){h.return=g,T=h;break}T=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ri(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var f=e.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ko(9,a)}}catch(k){re(a,a.return,k)}if(a===o){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(D=i,fn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(po,e)}catch{}r=!0}return r}finally{H=n,tt.transition=t}}return!1}function Rd(e,t,n){t=gr(n,t),t=cp(e,t,1),e=tn(e,t,1),t=Pe(),e!==null&&(Ni(e,1,t),Ae(e,t))}function re(e,t,n){if(e.tag===3)Rd(e,e,n);else for(;t!==null;){if(t.tag===3){Rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=gr(n,e),e=dp(t,e,1),t=tn(t,e,1),e=Pe(),t!==null&&(Ni(t,1,e),Ae(t,e));break}}t=t.return}}function u1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(we&n)===n&&(ce===4||ce===3&&(we&130023424)===we&&500>se()-Wu?bn(e,0):Hu|=n),Ae(e,t)}function jp(e,t){t===0&&(e.mode&1?(t=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):t=1);var n=Pe();e=Nt(e,t),e!==null&&(Ni(e,t,n),Ae(e,n))}function c1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jp(e,n)}function d1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),jp(e,n)}var Ip;Ip=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Xg(e,t,n);Re=!!(e.flags&131072)}else Re=!1,Z&&t.flags&1048576&&Nh(t,Qs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var i=fr(t,Ce.current);lr(t,n),i=Du(null,t,r,e,i,n);var s=Fu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(s=!0,Ks(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ru(t),i.updater=_o,t.stateNode=i,i._reactInternals=t,bl(t,r,e,n),t=Ol(null,t,r,!0,s,n)):(t.tag=0,Z&&s&&Cu(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=h1(r),e=at(r,e),i){case 0:t=Tl(null,t,r,e,n);break e;case 1:t=xd(null,t,r,e,n);break e;case 11:t=Sd(null,t,r,e,n);break e;case 14:t=kd(null,t,r,at(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Tl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),xd(e,t,r,i,n);case 3:e:{if(mp(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Fh(e,t),Xs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=gr(Error(E(423)),t),t=Ed(e,t,r,n,i);break e}else if(r!==i){i=gr(Error(E(424)),t),t=Ed(e,t,r,n,i);break e}else for(Be=en(t.stateNode.containerInfo.firstChild),Ve=t,Z=!0,ct=null,n=Vh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hr(),r===i){t=At(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Hh(t),e===null&&El(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,wl(r,i)?o=null:s!==null&&wl(r,s)&&(t.flags|=32),pp(e,t),be(e,t,o,n),t.child;case 6:return e===null&&El(t),null;case 13:return gp(e,t,n);case 4:return Lu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Sd(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Q(Js,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!Le.current){t=At(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=It(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$l(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$l(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,lr(t,n),i=nt(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=at(r,t.pendingProps),i=at(r.type,i),kd(e,t,r,i,n);case 15:return fp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),$s(e,t),t.tag=1,Ne(r)?(e=!0,Ks(t)):e=!1,lr(t,n),Uh(t,r,i),bl(t,r,i,n),Ol(null,t,r,!0,e,n);case 19:return yp(e,t,n);case 22:return hp(e,t,n)}throw Error(E(156,t.tag))};function Rp(e,t){return sh(e,t)}function f1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new f1(e,t,n,r)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function h1(e){if(typeof e=="function")return Qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pu)return 11;if(e===mu)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ps(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Qu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Gn:return Pn(n.children,i,s,t);case hu:o=8,i|=8;break;case qa:return e=et(12,n,t,i|2),e.elementType=qa,e.lanes=s,e;case Xa:return e=et(13,n,t,i),e.elementType=Xa,e.lanes=s,e;case Za:return e=et(19,n,t,i),e.elementType=Za,e.lanes=s,e;case Bf:return Eo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mf:o=10;break e;case Uf:o=9;break e;case pu:o=11;break e;case mu:o=14;break e;case Vt:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=et(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Pn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Eo(e,t,n,r){return e=et(22,e,r,t),e.elementType=Bf,e.lanes=n,e.stateNode={isHidden:!1},e}function La(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Na(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function p1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ju(e,t,n,r,i,s,o,a,l){return e=new p1(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=et(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ru(s),e}function m1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lp(e){if(!e)return ln;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Rh(e,n,t)}return t}function Np(e,t,n,r,i,s,o,a,l){return e=Ju(n,r,!0,e,i,s,o,a,l),e.context=Lp(null),n=e.current,r=Pe(),i=rn(n),s=It(r,i),s.callback=t??null,tn(n,s,i),e.current.lanes=i,Ni(e,i,r),Ae(e,r),e}function $o(e,t,n,r){var i=t.current,s=Pe(),o=rn(i);return n=Lp(n),t.context===null?t.context=n:t.pendingContext=n,t=It(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(i,t,o),e!==null&&(ft(e,i,o,s),ks(e,i,o)),o}function oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qu(e,t){Ld(e,t),(e=e.alternate)&&Ld(e,t)}function g1(){return null}var Ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xu(e){this._internalRoot=e}Co.prototype.render=Xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));$o(e,t,null,null)};Co.prototype.unmount=Xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){$o(null,e,null,null)}),t[Lt]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var t=fh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gt.length&&t!==0&&t<Gt[n].priority;n++);Gt.splice(n,0,e),n===0&&ph(e)}};function Zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nd(){}function y1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=oo(o);s.call(u)}}var o=Np(t,r,e,0,null,!1,!1,"",Nd);return e._reactRootContainer=o,e[Lt]=o.current,vi(e.nodeType===8?e.parentNode:e),Ln(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=oo(l);a.call(u)}}var l=Ju(e,0,!1,null,null,!1,!1,"",Nd);return e._reactRootContainer=l,e[Lt]=l.current,vi(e.nodeType===8?e.parentNode:e),Ln(function(){$o(t,l,n,r)}),l}function Po(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=oo(o);a.call(l)}}$o(t,o,e,i)}else o=y1(n,t,e,i,r);return oo(o)}ch=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gr(t.pendingLanes);n!==0&&(vu(t,n|1),Ae(t,se()),!(D&6)&&(yr=se()+500,fn()))}break;case 13:Ln(function(){var r=Nt(e,1);if(r!==null){var i=Pe();ft(r,e,1,i)}}),qu(e,1)}};wu=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Pe();ft(t,e,134217728,n)}qu(e,134217728)}};dh=function(e){if(e.tag===13){var t=rn(e),n=Nt(e,t);if(n!==null){var r=Pe();ft(n,e,t,r)}qu(e,t)}};fh=function(){return H};hh=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};ul=function(e,t,n){switch(t){case"input":if(nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vo(r);if(!i)throw Error(E(90));Hf(r),nl(r,i)}}}break;case"textarea":Gf(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};Zf=Gu;eh=Ln;var v1={usingClientEntryPoint:!1,Events:[zi,Jn,vo,qf,Xf,Gu]},Ur={findFiberByHostInstance:xn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},w1={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rh(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{po=as.inject(w1),kt=as}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v1;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(t))throw Error(E(200));return m1(e,t,null,n)};Ge.createRoot=function(e,t){if(!Zu(e))throw Error(E(299));var n=!1,r="",i=Ap;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ju(e,1,!1,null,null,n,!1,r,i),e[Lt]=t.current,vi(e.nodeType===8?e.parentNode:e),new Xu(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=rh(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Ln(e)};Ge.hydrate=function(e,t,n){if(!bo(t))throw Error(E(200));return Po(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Zu(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ap;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Np(t,null,e,1,n??null,i,!1,s,o),e[Lt]=t.current,vi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Co(t)};Ge.render=function(e,t,n){if(!bo(t))throw Error(E(200));return Po(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!bo(e))throw Error(E(40));return e._reactRootContainer?(Ln(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Gu;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Po(e,t,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";function zp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zp)}catch(e){console.error(e)}}zp(),Nf.exports=Ge;var _1=Nf.exports,Ad=_1;Qa.createRoot=Ad.createRoot,Qa.hydrateRoot=Ad.hydrateRoot;var pe=function(){return pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},pe.apply(this,arguments)};function vr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function S1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var q="-ms-",oi="-moz-",V="-webkit-",Dp="comm",To="rule",ec="decl",k1="@import",Fp="@keyframes",x1="@layer",E1=Math.abs,tc=String.fromCharCode,Bl=Object.assign;function $1(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function Mp(e){return e.trim()}function Pt(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function Ts(e,t){return e.indexOf(t)}function he(e,t){return e.charCodeAt(t)|0}function wr(e,t,n){return e.slice(t,n)}function vt(e){return e.length}function Up(e){return e.length}function Yr(e,t){return t.push(e),e}function C1(e,t){return e.map(t).join("")}function zd(e,t){return e.filter(function(n){return!Pt(n,t)})}var Oo=1,_r=1,Bp=0,it=0,oe=0,Tr="";function jo(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Oo,column:_r,length:o,return:"",siblings:a}}function Bt(e,t){return Bl(jo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fn(e){for(;e.root;)e=Bt(e.root,{children:[e]});Yr(e,e.siblings)}function b1(){return oe}function P1(){return oe=it>0?he(Tr,--it):0,_r--,oe===10&&(_r=1,Oo--),oe}function ht(){return oe=it<Bp?he(Tr,it++):0,_r++,oe===10&&(_r=1,Oo++),oe}function Tn(){return he(Tr,it)}function Os(){return it}function Io(e,t){return wr(Tr,e,t)}function Vl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T1(e){return Oo=_r=1,Bp=vt(Tr=e),it=0,[]}function O1(e){return Tr="",e}function Aa(e){return Mp(Io(it-1,Hl(e===91?e+2:e===40?e+1:e)))}function j1(e){for(;(oe=Tn())&&oe<33;)ht();return Vl(e)>2||Vl(oe)>3?"":" "}function I1(e,t){for(;--t&&ht()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return Io(e,Os()+(t<6&&Tn()==32&&ht()==32))}function Hl(e){for(;ht();)switch(oe){case e:return it;case 34:case 39:e!==34&&e!==39&&Hl(oe);break;case 40:e===41&&Hl(e);break;case 92:ht();break}return it}function R1(e,t){for(;ht()&&e+oe!==57;)if(e+oe===84&&Tn()===47)break;return"/*"+Io(t,it-1)+"*"+tc(e===47?e:ht())}function L1(e){for(;!Vl(Tn());)ht();return Io(e,it)}function N1(e){return O1(js("",null,null,null,[""],e=T1(e),0,[0],e))}function js(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,g=0,v=0,y=1,S=1,p=1,f=0,m="",w=i,k=s,x=r,_=m;S;)switch(v=f,f=ht()){case 40:if(v!=108&&he(_,d-1)==58){Ts(_+=R(Aa(f),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Aa(f);break;case 9:case 10:case 13:case 32:_+=j1(v);break;case 92:_+=I1(Os()-1,7);continue;case 47:switch(Tn()){case 42:case 47:Yr(A1(R1(ht(),Os()),t,n,l),l);break;default:_+="/"}break;case 123*y:a[u++]=vt(_)*p;case 125*y:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+c:p==-1&&(_=R(_,/\f/g,"")),g>0&&vt(_)-d&&Yr(g>32?Fd(_+";",r,n,d-1,l):Fd(R(_," ","")+";",r,n,d-2,l),l);break;case 59:_+=";";default:if(Yr(x=Dd(_,t,n,u,c,i,a,m,w=[],k=[],d,s),s),f===123)if(c===0)js(_,t,x,x,w,s,d,a,k);else switch(h===99&&he(_,3)===110?100:h){case 100:case 108:case 109:case 115:js(e,x,x,r&&Yr(Dd(e,x,x,0,0,i,a,m,i,w=[],d,k),k),i,k,d,a,r?w:k);break;default:js(_,x,x,x,[""],k,0,a,k)}}u=c=g=0,y=p=1,m=_="",d=o;break;case 58:d=1+vt(_),g=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&P1()==125)continue}switch(_+=tc(f),f*y){case 38:p=c>0?1:(_+="\f",-1);break;case 44:a[u++]=(vt(_)-1)*p,p=1;break;case 64:Tn()===45&&(_+=Aa(ht())),h=Tn(),c=d=vt(m=_+=L1(Os())),f++;break;case 45:v===45&&vt(_)==2&&(y=0)}}return s}function Dd(e,t,n,r,i,s,o,a,l,u,c,d){for(var h=i-1,g=i===0?s:[""],v=Up(g),y=0,S=0,p=0;y<r;++y)for(var f=0,m=wr(e,h+1,h=E1(S=o[y])),w=e;f<v;++f)(w=Mp(S>0?g[f]+" "+m:R(m,/&\f/g,g[f])))&&(l[p++]=w);return jo(e,t,n,i===0?To:a,l,u,c,d)}function A1(e,t,n,r){return jo(e,t,n,Dp,tc(b1()),wr(e,2,-2),0,r)}function Fd(e,t,n,r,i){return jo(e,t,n,ec,wr(e,0,r),wr(e,r+1,-1),r,i)}function Vp(e,t,n){switch($1(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return oi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+oi+e+q+e+e;case 5936:switch(he(e,t+11)){case 114:return V+e+q+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+q+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+q+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+q+e+e;case 6165:return V+e+q+"flex-"+e+e;case 5187:return V+e+R(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return V+e+q+"flex-item-"+R(e,/flex-|-self/g,"")+(Pt(e,/flex-|baseline/)?"":q+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return V+e+q+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+q+R(e,"shrink","negative")+e;case 5292:return V+e+q+R(e,"basis","preferred-size")+e;case 6060:return V+"box-"+R(e,"-grow","")+V+e+q+R(e,"grow","positive")+e;case 4554:return V+R(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!Pt(e,/flex-|baseline/))return q+"grid-column-align"+wr(e,t)+e;break;case 2592:case 3360:return q+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Pt(r.props,/grid-\w+-end/)})?~Ts(e+(n=n[t].value),"span")?e:q+R(e,"-start","")+e+q+"grid-row-span:"+(~Ts(n,"span")?Pt(n,/\d+/):+Pt(n,/\d+/)-+Pt(e,/\d+/))+";":q+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Pt(r.props,/grid-\w+-start/)})?e:q+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vt(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+oi+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ts(e,"stretch")?Vp(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return q+i+":"+s+u+(o?q+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(he(e,t+6)===121)return R(e,":",":"+V)+e;break;case 6444:switch(he(e,he(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(he(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+q+"$2box$3")+e;case 100:return R(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function ao(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function z1(e,t,n,r){switch(e.type){case x1:if(e.children.length)break;case k1:case ec:return e.return=e.return||e.value;case Dp:return"";case Fp:return e.return=e.value+"{"+ao(e.children,r)+"}";case To:if(!vt(e.value=e.props.join(",")))return""}return vt(n=ao(e.children,r))?e.return=e.value+"{"+n+"}":""}function D1(e){var t=Up(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function F1(e){return function(t){t.root||(t=t.return)&&e(t)}}function M1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ec:e.return=Vp(e.value,e.length,n);return;case Fp:return ao([Bt(e,{value:R(e.value,"@","@"+V)})],r);case To:if(e.length)return C1(n=e.props,function(i){switch(Pt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fn(Bt(e,{props:[R(i,/:(read-\w+)/,":"+oi+"$1")]})),Fn(Bt(e,{props:[i]})),Bl(e,{props:zd(n,r)});break;case"::placeholder":Fn(Bt(e,{props:[R(i,/:(plac\w+)/,":"+V+"input-$1")]})),Fn(Bt(e,{props:[R(i,/:(plac\w+)/,":"+oi+"$1")]})),Fn(Bt(e,{props:[R(i,/:(plac\w+)/,q+"input-$1")]})),Fn(Bt(e,{props:[i]})),Bl(e,{props:zd(n,r)});break}return""})}}var Hp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Me={},Sr=typeof process<"u"&&Me!==void 0&&(Me.REACT_APP_SC_ATTR||Me.SC_ATTR)||"data-styled",nc=typeof window<"u"&&"HTMLElement"in window,U1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Me!==void 0&&Me.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Me.REACT_APP_SC_DISABLE_SPEEDY!==""?Me.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Me.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Me!==void 0&&Me.SC_DISABLE_SPEEDY!==void 0&&Me.SC_DISABLE_SPEEDY!==""&&Me.SC_DISABLE_SPEEDY!=="false"&&Me.SC_DISABLE_SPEEDY),B1={},Ro=Object.freeze([]),kr=Object.freeze({});function Wp(e,t,n){return n===void 0&&(n=kr),e.theme!==n.theme&&e.theme||t||n.theme}var Gp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),V1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H1=/(^-|-$)/g;function Md(e){return e.replace(V1,"-").replace(H1,"")}var W1=/(a)(d)/gi,Ud=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ud(t%52)+n;return(Ud(t%52)+n).replace(W1,"$1-$2")}var za,rr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Kp=function(e){return rr(5381,e)};function rc(e){return Wl(Kp(e)>>>0)}function G1(e){return e.displayName||e.name||"Component"}function Da(e){return typeof e=="string"&&!0}var Yp=typeof Symbol=="function"&&Symbol.for,Qp=Yp?Symbol.for("react.memo"):60115,K1=Yp?Symbol.for("react.forward_ref"):60112,Y1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Q1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J1=((za={})[K1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},za[Qp]=Jp,za);function Bd(e){return("type"in(t=e)&&t.type.$$typeof)===Qp?Jp:"$$typeof"in e?J1[e.$$typeof]:Y1;var t}var q1=Object.defineProperty,X1=Object.getOwnPropertyNames,Vd=Object.getOwnPropertySymbols,Z1=Object.getOwnPropertyDescriptor,ey=Object.getPrototypeOf,Hd=Object.prototype;function qp(e,t,n){if(typeof t!="string"){if(Hd){var r=ey(t);r&&r!==Hd&&qp(e,r,n)}var i=X1(t);Vd&&(i=i.concat(Vd(t)));for(var s=Bd(e),o=Bd(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Q1||n&&n[l]||o&&l in o||s&&l in s)){var u=Z1(t,l);try{q1(e,l,u)}catch{}}}}return e}function Nn(e){return typeof e=="function"}function ic(e){return typeof e=="object"&&"styledComponentId"in e}function Cn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function lo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function bi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gl(e,t,n){if(n===void 0&&(n=!1),!n&&!bi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gl(e[r],t[r]);else if(bi(t))for(var r in t)e[r]=Gl(e[r],t[r]);return e}function sc(e,t){Object.defineProperty(e,"toString",{value:t})}function un(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ty=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw un(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Is=new Map,uo=new Map,Rs=1,ls=function(e){if(Is.has(e))return Is.get(e);for(;uo.has(Rs);)Rs++;var t=Rs++;return Is.set(e,t),uo.set(t,e),t},ny=function(e,t){Rs=t+1,Is.set(e,t),uo.set(t,e)},ry="style[".concat(Sr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),iy=new RegExp("^".concat(Sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sy=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},oy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(iy);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(ny(c,u),sy(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function ay(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Xp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Sr,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Sr,"active"),r.setAttribute("data-styled-version","6.1.1");var o=ay();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},ly=function(){function e(t){this.element=Xp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw un(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),uy=function(){function e(t){this.element=Xp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),cy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wd=nc,dy={isServer:!nc,useCSSOMInjection:!U1},co=function(){function e(t,n,r){t===void 0&&(t=kr),n===void 0&&(n={});var i=this;this.options=pe(pe({},dy),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&nc&&Wd&&(Wd=!1,function(s){for(var o=document.querySelectorAll(ry),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Sr)!=="active"&&(oy(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),sc(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var h=function(p){return uo.get(p)}(d);if(h===void 0)return"continue";var g=s.names.get(h),v=o.getGroup(d);if(g===void 0||v.length===0)return"continue";var y="".concat(Sr,".g").concat(d,'[id="').concat(h,'"]'),S="";g!==void 0&&g.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),l+="".concat(v).concat(y,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return ls(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(pe(pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new cy(i):r?new ly(i):new uy(i)}(this.options),new ty(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ls(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ls(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ls(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),fy=/&/g,hy=/^\s*\/\/.*$/gm;function Zp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Zp(n.children,t)),n})}function py(e){var t,n,r,i=e===void 0?kr:e,s=i.options,o=s===void 0?kr:s,a=i.plugins,l=a===void 0?Ro:a,u=function(h,g,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===To&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(fy,n).replace(r,u))}),o.prefix&&c.push(M1),c.push(z1);var d=function(h,g,v,y){g===void 0&&(g=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(hy,""),p=N1(v||g?"".concat(v," ").concat(g," { ").concat(S," }"):S);o.namespace&&(p=Zp(p,o.namespace));var f=[];return ao(p,D1(c.concat(F1(function(m){return f.push(m)})))),f};return d.hash=l.length?l.reduce(function(h,g){return g.name||un(15),rr(h,g.name)},5381).toString():"",d}var my=new co,Kl=py(),e0=Ie.createContext({shouldForwardProp:void 0,styleSheet:my,stylis:Kl});e0.Consumer;Ie.createContext(void 0);function Yl(){return P.useContext(e0)}var t0=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Kl);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,sc(this,function(){throw un(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Kl),this.name+t.hash},e}(),gy=function(e){return e>="A"&&e<="Z"};function Gd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;gy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var n0=function(e){return e==null||e===!1||e===""},r0=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!n0(s)&&(Array.isArray(s)&&s.isCss||Nn(s)?r.push("".concat(Gd(i),":"),s,";"):bi(s)?r.push.apply(r,vr(vr(["".concat(i," {")],r0(s),!1),["}"],!1)):r.push("".concat(Gd(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Hp||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function on(e,t,n,r){if(n0(e))return[];if(ic(e))return[".".concat(e.styledComponentId)];if(Nn(e)){if(!Nn(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return on(i,t,n,r)}var s;return e instanceof t0?n?(e.inject(n,r),[e.getName(r)]):[e]:bi(e)?r0(e):Array.isArray(e)?Array.prototype.concat.apply(Ro,e.map(function(o){return on(o,t,n,r)})):[e.toString()]}function i0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Nn(n)&&!ic(n))return!1}return!0}var yy=Kp("6.1.1"),vy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&i0(t),this.componentId=n,this.baseHash=rr(yy,n),this.baseStyle=r,co.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Cn(i,this.staticRulesId);else{var s=lo(on(this.rules,t,n,r)),o=Wl(rr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Cn(i,o),this.staticRulesId=o}else{for(var l=rr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=lo(on(d,t,n,r));l=rr(l,h+c),u+=h}}if(u){var g=Wl(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Cn(i,g)}}return i},e}(),xr=Ie.createContext(void 0);xr.Consumer;function wy(){var e=P.useContext(xr);if(!e)throw un(18);return e}function _y(e){var t=Ie.useContext(xr),n=P.useMemo(function(){return function(r,i){if(!r)throw un(14);if(Nn(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw un(8);return i?pe(pe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ie.createElement(xr.Provider,{value:n},e.children):null}var Fa={};function Sy(e,t,n){var r=ic(e),i=e,s=!Da(e),o=t.attrs,a=o===void 0?Ro:o,l=t.componentId,u=l===void 0?function(w,k){var x=typeof w!="string"?"sc":Md(w);Fa[x]=(Fa[x]||0)+1;var _="".concat(x,"-").concat(rc("6.1.1"+x+Fa[x]));return k?"".concat(k,"-").concat(_):_}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(w){return Da(w)?"styled.".concat(w):"Styled(".concat(G1(w),")")}(e):c,h=t.displayName&&t.componentId?"".concat(Md(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(w,k){return y(w,k)&&S(w,k)}}else v=y}var p=new vy(n,h,r?i.componentStyle:void 0);function f(w,k){return function(x,_,O){var K=x.attrs,N=x.componentStyle,De=x.defaultProps,hn=x.foldedComponentIds,pn=x.styledComponentId,Vi=x.target,la=Ie.useContext(xr),Rr=Yl(),mn=x.shouldForwardProp||Rr.shouldForwardProp,b=function(Qe,$t,Je){for(var mt,gn=pe(pe({},$t),{className:void 0,theme:Je}),ua=0;ua<Qe.length;ua+=1){var Hi=Nn(mt=Qe[ua])?mt(gn):mt;for(var Ft in Hi)gn[Ft]=Ft==="className"?Cn(gn[Ft],Hi[Ft]):Ft==="style"?pe(pe({},gn[Ft]),Hi[Ft]):Hi[Ft]}return $t.className&&(gn.className=Cn(gn.className,$t.className)),gn}(K,_,Wp(_,la,De)||kr),j=b.as||Vi,I={};for(var B in b)b[B]===void 0||B[0]==="$"||B==="as"||B==="theme"||(B==="forwardedAs"?I.as=b.forwardedAs:mn&&!mn(B,j)||(I[B]=b[B]));var ie=function(Qe,$t){var Je=Yl(),mt=Qe.generateAndInjectStyles($t,Je.styleSheet,Je.stylis);return mt}(N,b),Dt=Cn(hn,pn);return ie&&(Dt+=" "+ie),b.className&&(Dt+=" "+b.className),I[Da(j)&&!Gp.has(j)?"class":"className"]=Dt,I.ref=O,P.createElement(j,I)}(m,w,k)}f.displayName=d;var m=Ie.forwardRef(f);return m.attrs=g,m.componentStyle=p,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?Cn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=h,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var x=[],_=1;_<arguments.length;_++)x[_-1]=arguments[_];for(var O=0,K=x;O<K.length;O++)Gl(k,K[O],!0);return k}({},i.defaultProps,w):w}}),sc(m,function(){return".".concat(m.styledComponentId)}),s&&qp(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Kd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Yd=function(e){return Object.assign(e,{isCss:!0})};function Lo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Nn(e)||bi(e)){var r=e;return Yd(on(Kd(Ro,vr([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?on(i):Yd(on(Kd(i,t)))}function Ql(e,t,n){if(n===void 0&&(n=kr),!t)throw un(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Lo.apply(void 0,vr([i],s,!1)))};return r.attrs=function(i){return Ql(e,t,pe(pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ql(e,t,pe(pe({},n),i))},r}var s0=function(e){return Ql(Sy,e)},L=s0;Gp.forEach(function(e){L[e]=s0(e)});var ky=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=i0(t),co.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(lo(on(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&co.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function xy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Lo.apply(void 0,vr([e],t,!1)),i="sc-global-".concat(rc(JSON.stringify(r))),s=new ky(r,i),o=function(l){var u=Yl(),c=Ie.useContext(xr),d=Ie.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Ie.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,h){if(s.isStatic)s.renderStyles(l,B1,c,h);else{var g=pe(pe({},u),{theme:Wp(u,d,o.defaultProps)});s.renderStyles(l,g,c,h)}}return Ie.memo(o)}function Ey(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=lo(Lo.apply(void 0,vr([e],t,!1))),i=rc(r);return new t0(i,r)}const $y=e=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},P.createElement("path",{d:"M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"})),Cy=e=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},P.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"})),o0=e=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},P.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})),by="/assets/scott-yERU3hYK.jpg";function Py(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ty(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Oy=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ty(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Py(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),xe="-ms-",fo="-moz-",M="-webkit-",a0="comm",oc="rule",ac="decl",jy="@import",l0="@keyframes",Iy="@layer",Ry=Math.abs,No=String.fromCharCode,Ly=Object.assign;function Ny(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function u0(e){return e.trim()}function Ay(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function Jl(e,t){return e.indexOf(t)}function ve(e,t){return e.charCodeAt(t)|0}function Pi(e,t,n){return e.slice(t,n)}function wt(e){return e.length}function lc(e){return e.length}function us(e,t){return t.push(e),e}function zy(e,t){return e.map(t).join("")}var Ao=1,Er=1,c0=0,ze=0,ae=0,Or="";function zo(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ao,column:Er,length:o,return:""}}function Br(e,t){return Ly(zo("",null,null,"",null,null,0),e,{length:-e.length},t)}function Dy(){return ae}function Fy(){return ae=ze>0?ve(Or,--ze):0,Er--,ae===10&&(Er=1,Ao--),ae}function He(){return ae=ze<c0?ve(Or,ze++):0,Er++,ae===10&&(Er=1,Ao++),ae}function Et(){return ve(Or,ze)}function Ls(){return ze}function Fi(e,t){return Pi(Or,e,t)}function Ti(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d0(e){return Ao=Er=1,c0=wt(Or=e),ze=0,[]}function f0(e){return Or="",e}function Ns(e){return u0(Fi(ze-1,ql(e===91?e+2:e===40?e+1:e)))}function My(e){for(;(ae=Et())&&ae<33;)He();return Ti(e)>2||Ti(ae)>3?"":" "}function Uy(e,t){for(;--t&&He()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return Fi(e,Ls()+(t<6&&Et()==32&&He()==32))}function ql(e){for(;He();)switch(ae){case e:return ze;case 34:case 39:e!==34&&e!==39&&ql(ae);break;case 40:e===41&&ql(e);break;case 92:He();break}return ze}function By(e,t){for(;He()&&e+ae!==57;)if(e+ae===84&&Et()===47)break;return"/*"+Fi(t,ze-1)+"*"+No(e===47?e:He())}function Vy(e){for(;!Ti(Et());)He();return Fi(e,ze)}function Hy(e){return f0(As("",null,null,null,[""],e=d0(e),0,[0],e))}function As(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,g=0,v=0,y=1,S=1,p=1,f=0,m="",w=i,k=s,x=r,_=m;S;)switch(v=f,f=He()){case 40:if(v!=108&&ve(_,d-1)==58){Jl(_+=U(Ns(f),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Ns(f);break;case 9:case 10:case 13:case 32:_+=My(v);break;case 92:_+=Uy(Ls()-1,7);continue;case 47:switch(Et()){case 42:case 47:us(Wy(By(He(),Ls()),t,n),l);break;default:_+="/"}break;case 123*y:a[u++]=wt(_)*p;case 125*y:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+c:p==-1&&(_=U(_,/\f/g,"")),g>0&&wt(_)-d&&us(g>32?Jd(_+";",r,n,d-1):Jd(U(_," ","")+";",r,n,d-2),l);break;case 59:_+=";";default:if(us(x=Qd(_,t,n,u,c,i,a,m,w=[],k=[],d),s),f===123)if(c===0)As(_,t,x,x,w,s,d,a,k);else switch(h===99&&ve(_,3)===110?100:h){case 100:case 108:case 109:case 115:As(e,x,x,r&&us(Qd(e,x,x,0,0,i,a,m,i,w=[],d),k),i,k,d,a,r?w:k);break;default:As(_,x,x,x,[""],k,0,a,k)}}u=c=g=0,y=p=1,m=_="",d=o;break;case 58:d=1+wt(_),g=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Fy()==125)continue}switch(_+=No(f),f*y){case 38:p=c>0?1:(_+="\f",-1);break;case 44:a[u++]=(wt(_)-1)*p,p=1;break;case 64:Et()===45&&(_+=Ns(He())),h=Et(),c=d=wt(m=_+=Vy(Ls())),f++;break;case 45:v===45&&wt(_)==2&&(y=0)}}return s}function Qd(e,t,n,r,i,s,o,a,l,u,c){for(var d=i-1,h=i===0?s:[""],g=lc(h),v=0,y=0,S=0;v<r;++v)for(var p=0,f=Pi(e,d+1,d=Ry(y=o[v])),m=e;p<g;++p)(m=u0(y>0?h[p]+" "+f:U(f,/&\f/g,h[p])))&&(l[S++]=m);return zo(e,t,n,i===0?oc:a,l,u,c)}function Wy(e,t,n){return zo(e,t,n,a0,No(Dy()),Pi(e,2,-2),0)}function Jd(e,t,n,r){return zo(e,t,n,ac,Pi(e,0,r),Pi(e,r+1,-1),r)}function cr(e,t){for(var n="",r=lc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Gy(e,t,n,r){switch(e.type){case Iy:if(e.children.length)break;case jy:case ac:return e.return=e.return||e.value;case a0:return"";case l0:return e.return=e.value+"{"+cr(e.children,r)+"}";case oc:e.value=e.props.join(",")}return wt(n=cr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ky(e){var t=lc(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function Yy(e){return function(t){t.root||(t=t.return)&&e(t)}}var Qy=function(t,n,r){for(var i=0,s=0;i=s,s=Et(),i===38&&s===12&&(n[r]=1),!Ti(s);)He();return Fi(t,ze)},Jy=function(t,n){var r=-1,i=44;do switch(Ti(i)){case 0:i===38&&Et()===12&&(n[r]=1),t[r]+=Qy(ze-1,n,r);break;case 2:t[r]+=Ns(i);break;case 4:if(i===44){t[++r]=Et()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=No(i)}while(i=He());return t},qy=function(t,n){return f0(Jy(d0(t),n))},qd=new WeakMap,Xy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!qd.get(r))&&!i){qd.set(t,!0);for(var s=[],o=qy(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},Zy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function h0(e,t){switch(Ny(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+fo+e+xe+e+e;case 6828:case 4268:return M+e+xe+e+e;case 6165:return M+e+xe+"flex-"+e+e;case 5187:return M+e+U(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return M+e+xe+"flex-item-"+U(e,/flex-|-self/,"")+e;case 4675:return M+e+xe+"flex-line-pack"+U(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+xe+U(e,"shrink","negative")+e;case 5292:return M+e+xe+U(e,"basis","preferred-size")+e;case 6060:return M+"box-"+U(e,"-grow","")+M+e+xe+U(e,"grow","positive")+e;case 4554:return M+U(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+fo+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Jl(e,"stretch")?h0(U(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ve(e,t+1)!==115)break;case 6444:switch(ve(e,wt(e)-3-(~Jl(e,"!important")&&10))){case 107:return U(e,":",":"+M)+e;case 101:return U(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(ve(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+xe+"$2box$3")+e}break;case 5936:switch(ve(e,t+11)){case 114:return M+e+xe+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+xe+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+xe+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+xe+e+e}return e}var ev=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case ac:t.return=h0(t.value,t.length);break;case l0:return cr([Br(t,{value:U(t.value,"@","@"+M)})],i);case oc:if(t.length)return zy(t.props,function(s){switch(Ay(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return cr([Br(t,{props:[U(s,/:(read-\w+)/,":"+fo+"$1")]})],i);case"::placeholder":return cr([Br(t,{props:[U(s,/:(plac\w+)/,":"+M+"input-$1")]}),Br(t,{props:[U(s,/:(plac\w+)/,":"+fo+"$1")]}),Br(t,{props:[U(s,/:(plac\w+)/,xe+"input-$1")]})],i)}return""})}},tv=[ev],nv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var S=y.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||tv,s={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var S=y.getAttribute("data-emotion").split(" "),p=1;p<S.length;p++)s[S[p]]=!0;a.push(y)});var l,u=[Xy,Zy];{var c,d=[Gy,Yy(function(y){c.insert(y)})],h=Ky(u.concat(i,d)),g=function(S){return cr(Hy(S),h)};l=function(S,p,f,m){c=f,g(S?S+"{"+p.styles+"}":p.styles),m&&(v.inserted[p.name]=!0)}}var v={key:n,sheet:new Oy({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},p0={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge=typeof Symbol=="function"&&Symbol.for,uc=ge?Symbol.for("react.element"):60103,cc=ge?Symbol.for("react.portal"):60106,Do=ge?Symbol.for("react.fragment"):60107,Fo=ge?Symbol.for("react.strict_mode"):60108,Mo=ge?Symbol.for("react.profiler"):60114,Uo=ge?Symbol.for("react.provider"):60109,Bo=ge?Symbol.for("react.context"):60110,dc=ge?Symbol.for("react.async_mode"):60111,Vo=ge?Symbol.for("react.concurrent_mode"):60111,Ho=ge?Symbol.for("react.forward_ref"):60112,Wo=ge?Symbol.for("react.suspense"):60113,rv=ge?Symbol.for("react.suspense_list"):60120,Go=ge?Symbol.for("react.memo"):60115,Ko=ge?Symbol.for("react.lazy"):60116,iv=ge?Symbol.for("react.block"):60121,sv=ge?Symbol.for("react.fundamental"):60117,ov=ge?Symbol.for("react.responder"):60118,av=ge?Symbol.for("react.scope"):60119;function Ye(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case uc:switch(e=e.type,e){case dc:case Vo:case Do:case Mo:case Fo:case Wo:return e;default:switch(e=e&&e.$$typeof,e){case Bo:case Ho:case Ko:case Go:case Uo:return e;default:return t}}case cc:return t}}}function m0(e){return Ye(e)===Vo}W.AsyncMode=dc;W.ConcurrentMode=Vo;W.ContextConsumer=Bo;W.ContextProvider=Uo;W.Element=uc;W.ForwardRef=Ho;W.Fragment=Do;W.Lazy=Ko;W.Memo=Go;W.Portal=cc;W.Profiler=Mo;W.StrictMode=Fo;W.Suspense=Wo;W.isAsyncMode=function(e){return m0(e)||Ye(e)===dc};W.isConcurrentMode=m0;W.isContextConsumer=function(e){return Ye(e)===Bo};W.isContextProvider=function(e){return Ye(e)===Uo};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===uc};W.isForwardRef=function(e){return Ye(e)===Ho};W.isFragment=function(e){return Ye(e)===Do};W.isLazy=function(e){return Ye(e)===Ko};W.isMemo=function(e){return Ye(e)===Go};W.isPortal=function(e){return Ye(e)===cc};W.isProfiler=function(e){return Ye(e)===Mo};W.isStrictMode=function(e){return Ye(e)===Fo};W.isSuspense=function(e){return Ye(e)===Wo};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Do||e===Vo||e===Mo||e===Fo||e===Wo||e===rv||typeof e=="object"&&e!==null&&(e.$$typeof===Ko||e.$$typeof===Go||e.$$typeof===Uo||e.$$typeof===Bo||e.$$typeof===Ho||e.$$typeof===sv||e.$$typeof===ov||e.$$typeof===av||e.$$typeof===iv)};W.typeOf=Ye;p0.exports=W;var lv=p0.exports,g0=lv,uv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},y0={};y0[g0.ForwardRef]=uv;y0[g0.Memo]=cv;var dv=!0;function v0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var fc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||dv===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},w0=function(t,n,r){fc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function fv(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var hv=/[A-Z]|^ms/g,pv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_0=function(t){return t.charCodeAt(1)===45},Xd=function(t){return t!=null&&typeof t!="boolean"},Ma=S1(function(e){return _0(e)?e:e.replace(hv,"-$&").toLowerCase()}),Zd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(pv,function(r,i,s){return _t={name:i,styles:s,next:_t},i})}return Hp[t]!==1&&!_0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Oi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return _t={name:n.name,styles:n.styles,next:_t},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)_t={name:r.name,styles:r.styles,next:_t},r=r.next;var i=n.styles+";";return i}return mv(e,t,n)}case"function":{if(e!==void 0){var s=_t,o=n(e);return _t=s,Oi(e,t,o)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function mv(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Oi(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=s+"{"+t[o]+"}":Xd(o)&&(r+=Ma(s)+":"+Zd(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var a=0;a<o.length;a++)Xd(o[a])&&(r+=Ma(s)+":"+Zd(s,o[a])+";");else{var l=Oi(e,t,o);switch(s){case"animation":case"animationName":{r+=Ma(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var ef=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_t,hc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";_t=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,s+=Oi(r,n,o)):s+=o[0];for(var a=1;a<t.length;a++)s+=Oi(r,n,t[a]),i&&(s+=o[a]);ef.lastIndex=0;for(var l="",u;(u=ef.exec(s))!==null;)l+="-"+u[1];var c=fv(s)+l;return{name:c,styles:s,next:_t}},gv=function(t){return t()},yv=Oc.useInsertionEffect?Oc.useInsertionEffect:!1,S0=yv||gv,pc={}.hasOwnProperty,k0=P.createContext(typeof HTMLElement<"u"?nv({key:"css"}):null);k0.Provider;var x0=function(t){return P.forwardRef(function(n,r){var i=P.useContext(k0);return t(n,i,r)})},E0=P.createContext({}),Xl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",vv=function(t,n){var r={};for(var i in n)pc.call(n,i)&&(r[i]=n[i]);return r[Xl]=t,r},wv=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return fc(n,r,i),S0(function(){return w0(n,r,i)}),null},_v=x0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Xl],s=[r],o="";typeof e.className=="string"?o=v0(t.registered,s,e.className):e.className!=null&&(o=e.className+" ");var a=hc(s,void 0,P.useContext(E0));o+=t.key+"-"+a.name;var l={};for(var u in e)pc.call(e,u)&&u!=="css"&&u!==Xl&&(l[u]=e[u]);return l.ref=n,l.className=o,P.createElement(P.Fragment,null,P.createElement(wv,{cache:t,serialized:a,isStringTag:typeof i=="string"}),P.createElement(i,l))}),Sv=_v,kv=$.Fragment;function de(e,t,n){return pc.call(t,"css")?$.jsx(Sv,vv(e,t),n):$.jsx(e,t,n)}function $0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return hc(t)}var C=function(){var t=$0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},xv=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var s=t[r];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=e(s);else{o="";for(var a in s)s[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=s}o&&(i&&(i+=" "),i+=o)}}return i};function Ev(e,t,n){var r=[],i=v0(e,r,n);return r.length<2?n:i+t(r)}var $v=function(t){var n=t.cache,r=t.serializedArr;return S0(function(){for(var i=0;i<r.length;i++)w0(n,r[i],!1)}),null},Ua=x0(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];var h=hc(c,t.registered);return r.push(h),fc(t,h,!1),t.key+"-"+h.name},s=function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];return Ev(t.registered,i,xv(c))},o={css:i,cx:s,theme:P.useContext(E0)},a=e.children(o);return n=!0,P.createElement(P.Fragment,null,P.createElement($v,{cache:t,serializedArr:r}),a)}),Cv=Object.defineProperty,bv=(e,t,n)=>t in e?Cv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cs=(e,t,n)=>(bv(e,typeof t!="symbol"?t+"":t,n),n),Zl=new Map,ds=new WeakMap,tf=0,Pv=void 0;function Tv(e){return e?(ds.has(e)||(tf+=1,ds.set(e,tf.toString())),ds.get(e)):"0"}function Ov(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Tv(e.root):e[t]}`).toString()}function jv(e){let t=Ov(e),n=Zl.get(t);if(!n){const r=new Map;let i;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const u=a.isIntersecting&&i.some(c=>a.intersectionRatio>=c);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=r.get(a.target))==null||l.forEach(c=>{c(u,a)})})},e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:r},Zl.set(t,n)}return n}function C0(e,t,n={},r=Pv){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:s,elements:o}=jv(n);let a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(o.delete(e),s.unobserve(e)),o.size===0&&(s.disconnect(),Zl.delete(i))}}function Iv(e){return typeof e.children!="function"}var nf=class extends P.Component{constructor(e){super(e),cs(this,"node",null),cs(this,"_unobserveCb",null),cs(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),cs(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Iv(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:s}=this.props;this._unobserveCb=C0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:v}=this.state;return e({inView:g,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:s,onChange:o,skip:a,trackVisibility:l,delay:u,initialInView:c,fallbackInView:d,...h}=this.props;return P.createElement(t||"div",{ref:this.handleNode,...h},e)}};function b0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:u}={}){var c;const[d,h]=P.useState(null),g=P.useRef(),[v,y]=P.useState({inView:!!a,entry:void 0});g.current=u,P.useEffect(()=>{if(o||!d)return;let m;return m=C0(d,(w,k)=>{y({inView:w,entry:k}),g.current&&g.current(w,k),k.isIntersecting&&s&&m&&(m(),m=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,d,i,r,s,o,n,l,t]);const S=(c=v.entry)==null?void 0:c.target,p=P.useRef();!d&&S&&!s&&!o&&p.current!==S&&(p.current=S,y({inView:!!a,entry:void 0}));const f=[h,v.inView,v.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var P0={exports:{}},G={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc=Symbol.for("react.element"),gc=Symbol.for("react.portal"),Yo=Symbol.for("react.fragment"),Qo=Symbol.for("react.strict_mode"),Jo=Symbol.for("react.profiler"),qo=Symbol.for("react.provider"),Xo=Symbol.for("react.context"),Rv=Symbol.for("react.server_context"),Zo=Symbol.for("react.forward_ref"),ea=Symbol.for("react.suspense"),ta=Symbol.for("react.suspense_list"),na=Symbol.for("react.memo"),ra=Symbol.for("react.lazy"),Lv=Symbol.for("react.offscreen"),T0;T0=Symbol.for("react.module.reference");function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case mc:switch(e=e.type,e){case Yo:case Jo:case Qo:case ea:case ta:return e;default:switch(e=e&&e.$$typeof,e){case Rv:case Xo:case Zo:case ra:case na:case qo:return e;default:return t}}case gc:return t}}}G.ContextConsumer=Xo;G.ContextProvider=qo;G.Element=mc;G.ForwardRef=Zo;G.Fragment=Yo;G.Lazy=ra;G.Memo=na;G.Portal=gc;G.Profiler=Jo;G.StrictMode=Qo;G.Suspense=ea;G.SuspenseList=ta;G.isAsyncMode=function(){return!1};G.isConcurrentMode=function(){return!1};G.isContextConsumer=function(e){return st(e)===Xo};G.isContextProvider=function(e){return st(e)===qo};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===mc};G.isForwardRef=function(e){return st(e)===Zo};G.isFragment=function(e){return st(e)===Yo};G.isLazy=function(e){return st(e)===ra};G.isMemo=function(e){return st(e)===na};G.isPortal=function(e){return st(e)===gc};G.isProfiler=function(e){return st(e)===Jo};G.isStrictMode=function(e){return st(e)===Qo};G.isSuspense=function(e){return st(e)===ea};G.isSuspenseList=function(e){return st(e)===ta};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yo||e===Jo||e===Qo||e===ea||e===ta||e===Lv||typeof e=="object"&&e!==null&&(e.$$typeof===ra||e.$$typeof===na||e.$$typeof===qo||e.$$typeof===Xo||e.$$typeof===Zo||e.$$typeof===T0||e.getModuleId!==void 0)};G.typeOf=st;P0.exports=G;var Nv=P0.exports;C`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;C`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;C`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;C`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;C`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;C`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Av=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,zv=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dv=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fv=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Mv=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yc=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Uv=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bv=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vv=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hv=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wv=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gv=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Kv=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Yv({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=yc,iterationCount:i=1}){return $0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Qv(e){return e==null}function Jv(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function O0(e,t){return n=>n?e():t()}function ji(e){return O0(e,()=>null)}function eu(e){return ji(()=>({opacity:0}))(e)}const j0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:s=0,keyframes:o=yc,triggerOnce:a=!1,className:l,style:u,childClassName:c,childStyle:d,children:h,onVisibilityChange:g}=e,v=P.useMemo(()=>Yv({keyframes:o,duration:i}),[i,o]);return Qv(h)?null:Jv(h)?de(Xv,{...e,animationStyles:v,children:String(h)}):Nv.isFragment(h)?de(I0,{...e,animationStyles:v}):de(kv,{children:P.Children.map(h,(y,S)=>{if(!P.isValidElement(y))return null;const p=r+(t?S*i*n:0);switch(y.type){case"ol":case"ul":return de(Ua,{children:({cx:f})=>de(y.type,{...y.props,className:f(l,y.props.className),style:Object.assign({},u,y.props.style),children:de(j0,{...e,children:y.props.children})})});case"li":return de(nf,{threshold:s,triggerOnce:a,onChange:g,children:({inView:f,ref:m})=>de(Ua,{children:({cx:w})=>de(y.type,{...y.props,ref:m,className:w(c,y.props.className),css:ji(()=>v)(f),style:Object.assign({},d,y.props.style,eu(!f),{animationDelay:p+"ms"})})})});default:return de(nf,{threshold:s,triggerOnce:a,onChange:g,children:({inView:f,ref:m})=>de("div",{ref:m,className:l,css:ji(()=>v)(f),style:Object.assign({},u,eu(!f),{animationDelay:p+"ms"}),children:de(Ua,{children:({cx:w})=>de(y.type,{...y.props,className:w(c,y.props.className),style:Object.assign({},d,y.props.style)})})})})}})})},qv={display:"inline-block",whiteSpace:"pre"},Xv=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,className:l,style:u,children:c,onVisibilityChange:d}=e,{ref:h,inView:g}=b0({triggerOnce:a,threshold:o,onChange:d});return O0(()=>de("div",{ref:h,className:l,style:Object.assign({},u,qv),children:c.split("").map((v,y)=>de("span",{css:ji(()=>t)(g),style:{animationDelay:i+y*s*r+"ms"},children:v},y))}),()=>de(I0,{...e,children:c}))(n)},I0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:s,children:o,onVisibilityChange:a}=e,{ref:l,inView:u}=b0({triggerOnce:r,threshold:n,onChange:a});return de("div",{ref:l,className:i,css:ji(()=>t)(u),style:Object.assign({},s,eu(!u)),children:o})};C`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;C`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Zv=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ew=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,tw=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,nw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,rw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,iw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,sw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ow=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,aw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,lw=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,uw=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,cw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,dw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function fw(e,t,n){switch(n){case"bottom-left":return t?ew:zv;case"bottom-right":return t?tw:Dv;case"down":return e?t?rw:Mv:t?nw:Fv;case"left":return e?t?sw:Uv:t?iw:yc;case"right":return e?t?aw:Vv:t?ow:Bv;case"top-left":return t?lw:Hv;case"top-right":return t?uw:Wv;case"up":return e?t?dw:Kv:t?cw:Gv;default:return t?Zv:Av}}const vc=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,s=P.useMemo(()=>fw(t,r,n),[t,n,r]);return de(j0,{keyframes:s,...i})};C`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;C`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;C`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const hw=L.h1`
  ${e=>e.theme.defaultProps}
  font-family: ${e=>e.theme.titleFont};
  color: ${e=>e.theme.text};
  font-size: 5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  transition-property: color;

  &:after {
    animation: ${e=>e.$animate?pw(e.$text):"none"}
      ${e=>(e.$text.length+(e.$text.length%2===0?1:.5))/5}s
      ease-in-out ${e=>e.id?e.id:"0s"};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    content: ${e=>"'"+" ".repeat(e.$text.length+1)+"'"};
    white-space: pre;
  }
`,pw=e=>{var t="";const n=100/(e.length+(e.length%2===0?1:.5));for(let r=0;r<=e.length;r++)r%6<=2?t+=`
      ${(n*r).toFixed(2)}% {content: '${e.substring(0,r)}_${r<e.length?" ".repeat(e.length-r):""}'}`:t+=`
      ${(n*r).toFixed(2)}% {content: '${e.substring(0,r)+" ".repeat(e.length-r+1)}'}`;return t+=`
  100% {content: '${e+" "}'}`,Ey`${t}`},wc=({text:e,className:t=""})=>{const n=P.useRef(),r=mw(n,"-100px"),[i,s]=P.useState(!1);return P.useEffect(()=>{r&&s(!0)},[r]),$.jsx(hw,{className:t,$text:e,$animate:i,ref:n,"aria-label":e})};function mw(e,t="0px"){const[n,r]=P.useState(!1);return P.useEffect(()=>{const i=e.current,s=new IntersectionObserver(([o])=>{r(o.isIntersecting)},{rootMargin:t});return i&&s.observe(i),()=>{s.unobserve(i)}},[]),n}const _c=L.h2`
  ${e=>e.theme.defaultProps}
  align-self: ${e=>e.$align};
  font-family: ${e=>e.theme.titleFont};
  color: ${e=>e.theme.text};
  font-size: 2.5rem;
  margin: 0 0 -0.5rem;
  scroll-margin: 1.5rem;
  text-decoration: underline;
  text-decoration-color: ${e=>e.$underline?"underline":"transparent"};
  transition-property: text-decoration-color, color;
`,Mi=L.a`
  ${e=>e.theme.defaultProps}

  align-items: center;
  align-self: center;
  color: ${e=>e.$inline?e.theme.accent:e.theme.text2};
  cursor: pointer;
  display: ${e=>e.$inline?"inline":"flex"};
  flex-direction: row;
  justify-self: center;
  margin: 0.5rem 0;
  text-decoration: underline;
  text-decoration-color: transparent;
  width: 100%;

  transition-property: text-decoration-color, color;

  &:hover {
    color: ${e=>e.theme.accent};
    text-decoration-color: ${e=>e.theme.accent};

    svg {
      fill: ${e=>e.theme.accent};
      opacity: 100%;
    }
  }

  svg {
    fill: ${e=>e.$inline?e.theme.accent:e.theme.text2};
    align-self: flex-start;
    margin-right: 0.75rem;
    opacity: 100%;
    transition-duration: 0.5s;
  }
`,tu=L.p`
  align-self: center;
  font-family: ${e=>e.theme.bodyFont};
  justify-self: flex-start;
  margin: 0;
`;L(wc)`
  align-self: center;
  font-family: ${e=>e.theme.titleFont};
  margin: 1rem;
`;L.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;L.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 90%;
`;const ia=L.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  margin: -1rem 0;
  padding: 0;
`;L.div`
  ${e=>e.theme.defaultProps}

  border-bottom: 0.1rem solid ${e=>e.theme.accent2};
  margin: 1rem 0;
  width: 20%;
`;const fs=L.p`
  ${e=>e.theme.defaultProps}
  cursor: default;
  font-family: ${e=>e.theme.bodyFont};
  color: ${e=>e.theme.text2};
  margin: 0;
  margin-top: 0.5rem;
`;L.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;const gw=L.div`
  align-items: flex-start;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,rf=L(Mi)`
  justify-content: center;
  margin: 1rem 2rem 0 0;
  width: fit-content;
`,yw=L.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: fit-content;
`;L(wc)`
  align-self: center;
  font-family: ${e=>e.theme.titleFont};
  margin: 1rem;
  margin-bottom: 0rem;
`;const sf=L.div`
  margin: 1rem 0 0;
`,Ba=L.p`
  ${e=>e.theme.defaultProps}
  cursor: default;
  font-family: ${e=>e.theme.titleFont};
  font-size: 1.25rem;
  color: ${e=>e.theme.accent};
  margin: 0;
`,vw="modulepreload",ww=function(e){return"/"+e},of={},Ui=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=ww(s),s in of)return;of[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":vw,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},_w=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Ui(()=>Promise.resolve().then(()=>Bi),void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)};class Sc extends Error{constructor(t,n="FunctionsError",r){super(t),this.name=n,this.context=r}}class Sw extends Sc{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class kw extends Sc{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class xw extends Sc{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var Ew=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};class $w{constructor(t,{headers:n={},customFetch:r}={}){this.url=t,this.headers=n,this.fetch=_w(r)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,n={}){var r;return Ew(this,void 0,void 0,function*(){try{const{headers:i,method:s,body:o}=n;let a={},l;o&&(i&&!Object.prototype.hasOwnProperty.call(i,"Content-Type")||!i)&&(typeof Blob<"u"&&o instanceof Blob||o instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",l=o):typeof o=="string"?(a["Content-Type"]="text/plain",l=o):typeof FormData<"u"&&o instanceof FormData?l=o:(a["Content-Type"]="application/json",l=JSON.stringify(o)));const u=yield this.fetch(`${this.url}/${t}`,{method:s||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),i),body:l}).catch(g=>{throw new Sw(g)}),c=u.headers.get("x-relay-error");if(c&&c==="true")throw new kw(u);if(!u.ok)throw new xw(u);let d=((r=u.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),h;return d==="application/json"?h=yield u.json():d==="application/octet-stream"?h=yield u.blob():d==="multipart/form-data"?h=yield u.formData():h=yield u.text(),{data:h,error:null}}catch(i){return{data:null,error:i}}})}}var Cw=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},$r=Cw();const bw=$r.fetch,kc=$r.fetch.bind($r),R0=$r.Headers,Pw=$r.Request,Tw=$r.Response,Bi=Object.freeze(Object.defineProperty({__proto__:null,Headers:R0,Request:Pw,Response:Tw,default:kc,fetch:bw},Symbol.toStringTag,{value:"Module"}));class Ow{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=kc:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}then(t,n){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const r=this.fetch;let i=r(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async s=>{var o,a,l;let u=null,c=null,d=null,h=s.status,g=s.statusText;if(s.ok){if(this.method!=="HEAD"){const p=await s.text();p===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?c=p:c=JSON.parse(p))}const y=(o=this.headers.Prefer)===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),S=(a=s.headers.get("content-range"))===null||a===void 0?void 0:a.split("/");y&&S&&S.length>1&&(d=parseInt(S[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(c)&&(c.length>1?(u={code:"PGRST116",details:`Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},c=null,d=null,h=406,g="Not Acceptable"):c.length===1?c=c[0]:c=null)}else{const y=await s.text();try{u=JSON.parse(y),Array.isArray(u)&&s.status===404&&(c=[],u=null,h=200,g="OK")}catch{s.status===404&&y===""?(h=204,g="No Content"):u={message:y}}if(u&&this.isMaybeSingle&&(!((l=u==null?void 0:u.details)===null||l===void 0)&&l.includes("0 rows"))&&(u=null,h=200,g="OK"),u&&this.shouldThrowOnError)throw u}return{error:u,data:c,count:d,status:h,statusText:g}});return this.shouldThrowOnError||(i=i.catch(s=>{var o,a,l;return{error:{message:`${(o=s==null?void 0:s.name)!==null&&o!==void 0?o:"FetchError"}: ${s==null?void 0:s.message}`,details:`${(a=s==null?void 0:s.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=s==null?void 0:s.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),i.then(t,n)}}class jw extends Ow{select(t){let n=!1;const r=(t??"*").split("").map(i=>/\s/.test(i)&&!n?"":(i==='"'&&(n=!n),i)).join("");return this.url.searchParams.set("select",r),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:n=!0,nullsFirst:r,foreignTable:i,referencedTable:s=i}={}){const o=s?`${s}.order`:"order",a=this.url.searchParams.get(o);return this.url.searchParams.set(o,`${a?`${a},`:""}${t}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:n,referencedTable:r=n}={}){const i=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(i,`${t}`),this}range(t,n,{foreignTable:r,referencedTable:i=r}={}){const s=typeof i>"u"?"offset":`${i}.offset`,o=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(s,`${t}`),this.url.searchParams.set(o,`${n-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:n=!1,settings:r=!1,buffers:i=!1,wal:s=!1,format:o="text"}={}){var a;const l=[t?"analyze":null,n?"verbose":null,r?"settings":null,i?"buffers":null,s?"wal":null].filter(Boolean).join("|"),u=(a=this.headers.Accept)!==null&&a!==void 0?a:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${o}; for="${u}"; options=${l};`,o==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}class Hn extends jw{eq(t,n){return this.url.searchParams.append(t,`eq.${n}`),this}neq(t,n){return this.url.searchParams.append(t,`neq.${n}`),this}gt(t,n){return this.url.searchParams.append(t,`gt.${n}`),this}gte(t,n){return this.url.searchParams.append(t,`gte.${n}`),this}lt(t,n){return this.url.searchParams.append(t,`lt.${n}`),this}lte(t,n){return this.url.searchParams.append(t,`lte.${n}`),this}like(t,n){return this.url.searchParams.append(t,`like.${n}`),this}likeAllOf(t,n){return this.url.searchParams.append(t,`like(all).{${n.join(",")}}`),this}likeAnyOf(t,n){return this.url.searchParams.append(t,`like(any).{${n.join(",")}}`),this}ilike(t,n){return this.url.searchParams.append(t,`ilike.${n}`),this}ilikeAllOf(t,n){return this.url.searchParams.append(t,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(t,n){return this.url.searchParams.append(t,`ilike(any).{${n.join(",")}}`),this}is(t,n){return this.url.searchParams.append(t,`is.${n}`),this}in(t,n){const r=n.map(i=>typeof i=="string"&&new RegExp("[,()]").test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`in.(${r})`),this}contains(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cs.{${n.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(n)}`),this}containedBy(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cd.{${n.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(n)}`),this}rangeGt(t,n){return this.url.searchParams.append(t,`sr.${n}`),this}rangeGte(t,n){return this.url.searchParams.append(t,`nxl.${n}`),this}rangeLt(t,n){return this.url.searchParams.append(t,`sl.${n}`),this}rangeLte(t,n){return this.url.searchParams.append(t,`nxr.${n}`),this}rangeAdjacent(t,n){return this.url.searchParams.append(t,`adj.${n}`),this}overlaps(t,n){return typeof n=="string"?this.url.searchParams.append(t,`ov.${n}`):this.url.searchParams.append(t,`ov.{${n.join(",")}}`),this}textSearch(t,n,{config:r,type:i}={}){let s="";i==="plain"?s="pl":i==="phrase"?s="ph":i==="websearch"&&(s="w");const o=r===void 0?"":`(${r})`;return this.url.searchParams.append(t,`${s}fts${o}.${n}`),this}match(t){return Object.entries(t).forEach(([n,r])=>{this.url.searchParams.append(n,`eq.${r}`)}),this}not(t,n,r){return this.url.searchParams.append(t,`not.${n}.${r}`),this}or(t,{foreignTable:n,referencedTable:r=n}={}){const i=r?`${r}.or`:"or";return this.url.searchParams.append(i,`(${t})`),this}filter(t,n,r){return this.url.searchParams.append(t,`${n}.${r}`),this}}class Iw{constructor(t,{headers:n={},schema:r,fetch:i}){this.url=t,this.headers=n,this.schema=r,this.fetch=i}select(t,{head:n=!1,count:r}={}){const i=n?"HEAD":"GET";let s=!1;const o=(t??"*").split("").map(a=>/\s/.test(a)&&!s?"":(a==='"'&&(s=!s),a)).join("");return this.url.searchParams.set("select",o),r&&(this.headers.Prefer=`count=${r}`),new Hn({method:i,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:n,defaultToNull:r=!0}={}){const i="POST",s=[];if(this.headers.Prefer&&s.push(this.headers.Prefer),n&&s.push(`count=${n}`),r||s.push("missing=default"),this.headers.Prefer=s.join(","),Array.isArray(t)){const o=t.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(o.length>0){const a=[...new Set(o)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new Hn({method:i,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:n,ignoreDuplicates:r=!1,count:i,defaultToNull:s=!0}={}){const o="POST",a=[`resolution=${r?"ignore":"merge"}-duplicates`];if(n!==void 0&&this.url.searchParams.set("on_conflict",n),this.headers.Prefer&&a.push(this.headers.Prefer),i&&a.push(`count=${i}`),s||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const l=t.reduce((u,c)=>u.concat(Object.keys(c)),[]);if(l.length>0){const u=[...new Set(l)].map(c=>`"${c}"`);this.url.searchParams.set("columns",u.join(","))}}return new Hn({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:n}={}){const r="PATCH",i=[];return this.headers.Prefer&&i.push(this.headers.Prefer),n&&i.push(`count=${n}`),this.headers.Prefer=i.join(","),new Hn({method:r,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const n="DELETE",r=[];return t&&r.push(`count=${t}`),this.headers.Prefer&&r.unshift(this.headers.Prefer),this.headers.Prefer=r.join(","),new Hn({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}const Rw="1.9.0",Lw={"X-Client-Info":`postgrest-js/${Rw}`};class xc{constructor(t,{headers:n={},schema:r,fetch:i}={}){this.url=t,this.headers=Object.assign(Object.assign({},Lw),n),this.schemaName=r,this.fetch=i}from(t){const n=new URL(`${this.url}/${t}`);return new Iw(n,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new xc(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,n={},{head:r=!1,count:i}={}){let s;const o=new URL(`${this.url}/rpc/${t}`);let a;r?(s="HEAD",Object.entries(n).forEach(([u,c])=>{o.searchParams.append(u,`${c}`)})):(s="POST",a=n);const l=Object.assign({},this.headers);return i&&(l.Prefer=`count=${i}`),new Hn({method:s,url:o,headers:l,schema:this.schemaName,body:a,fetch:this.fetch,allowEmpty:!1})}}var Va,af;function Nw(){if(af)return Va;af=1;var e=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return Va=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return e()}try{return __global__||e()}finally{delete Object.prototype.__global__}}(),Va}const Aw="websocket",zw="Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",Dw=["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],Fw="Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",Mw=["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],Uw="1.0.34",Bw={type:"git",url:"https://github.com/theturtle32/WebSocket-Node.git"},Vw="https://github.com/theturtle32/WebSocket-Node",Hw={node:">=4.0.0"},Ww={bufferutil:"^4.0.1",debug:"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2",yaeti:"^0.0.6"},Gw={"buffer-equal":"^1.0.0",gulp:"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1",jshint:"^2.0.0",tape:"^4.9.1"},Kw={verbose:!1},Yw={test:"tape test/unit/*.js",gulp:"gulp"},Qw="index",Jw={lib:"./lib"},qw="lib/browser.js",Xw="Apache-2.0",Zw={name:Aw,description:zw,keywords:Dw,author:Fw,contributors:Mw,version:Uw,repository:Bw,homepage:Vw,engines:Hw,dependencies:Ww,devDependencies:Gw,config:Kw,scripts:Yw,main:Qw,directories:Jw,browser:qw,license:Xw};var e_=Zw.version,Sn;if(typeof globalThis=="object")Sn=globalThis;else try{Sn=Nw()}catch{}finally{if(!Sn&&typeof window<"u"&&(Sn=window),!Sn)throw new Error("Could not determine global this")}var Ii=Sn.WebSocket||Sn.MozWebSocket,t_=e_;function L0(e,t){var n;return t?n=new Ii(e,t):n=new Ii(e),n}Ii&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(e){Object.defineProperty(L0,e,{get:function(){return Ii[e]}})});var n_={w3cwebsocket:Ii?L0:null,version:t_};const r_="2.8.4",i_={"X-Client-Info":`realtime-js/${r_}`},s_="1.0.0",N0=1e4,o_=1e3;var ai;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(ai||(ai={}));var Fe;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(Fe||(Fe={}));var ut;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(ut||(ut={}));var nu;(function(e){e.websocket="websocket"})(nu||(nu={}));var kn;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(kn||(kn={}));class A0{constructor(t,n){this.callback=t,this.timerCalc=n,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=n}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}class a_{constructor(){this.HEADER_LENGTH=1}decode(t,n){return t.constructor===ArrayBuffer?n(this._binaryDecode(t)):n(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const n=new DataView(t),r=new TextDecoder;return this._decodeBroadcast(t,n,r)}_decodeBroadcast(t,n,r){const i=n.getUint8(1),s=n.getUint8(2);let o=this.HEADER_LENGTH+2;const a=r.decode(t.slice(o,o+i));o=o+i;const l=r.decode(t.slice(o,o+s));o=o+s;const u=JSON.parse(r.decode(t.slice(o,t.byteLength)));return{ref:null,topic:a,event:l,payload:u}}}class Ha{constructor(t,n,r={},i=N0){this.channel=t,this.event=n,this.payload=r,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,n){var r;return this._hasReceived(t)&&n((r=this.receivedResp)===null||r===void 0?void 0:r.response),this.recHooks.push({status:t,callback:n}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=n=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=n,this._matchReceive(n)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,n){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:n})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:n}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(n))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var lf;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(lf||(lf={}));class li{constructor(t,n){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const r=(n==null?void 0:n.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(r.state,{},i=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=li.syncState(this.state,i,s,o),this.pendingDiffs.forEach(l=>{this.state=li.syncDiff(this.state,l,s,o)}),this.pendingDiffs=[],a()}),this.channel._on(r.diff,{},i=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=li.syncDiff(this.state,i,s,o),a())}),this.onJoin((i,s,o)=>{this.channel._trigger("presence",{event:"join",key:i,currentPresences:s,newPresences:o})}),this.onLeave((i,s,o)=>{this.channel._trigger("presence",{event:"leave",key:i,currentPresences:s,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,n,r,i){const s=this.cloneDeep(t),o=this.transformState(n),a={},l={};return this.map(s,(u,c)=>{o[u]||(l[u]=c)}),this.map(o,(u,c)=>{const d=s[u];if(d){const h=c.map(S=>S.presence_ref),g=d.map(S=>S.presence_ref),v=c.filter(S=>g.indexOf(S.presence_ref)<0),y=d.filter(S=>h.indexOf(S.presence_ref)<0);v.length>0&&(a[u]=v),y.length>0&&(l[u]=y)}else a[u]=c}),this.syncDiff(s,{joins:a,leaves:l},r,i)}static syncDiff(t,n,r,i){const{joins:s,leaves:o}={joins:this.transformState(n.joins),leaves:this.transformState(n.leaves)};return r||(r=()=>{}),i||(i=()=>{}),this.map(s,(a,l)=>{var u;const c=(u=t[a])!==null&&u!==void 0?u:[];if(t[a]=this.cloneDeep(l),c.length>0){const d=t[a].map(g=>g.presence_ref),h=c.filter(g=>d.indexOf(g.presence_ref)<0);t[a].unshift(...h)}r(a,c,l)}),this.map(o,(a,l)=>{let u=t[a];if(!u)return;const c=l.map(d=>d.presence_ref);u=u.filter(d=>c.indexOf(d.presence_ref)<0),t[a]=u,i(a,u,l),u.length===0&&delete t[a]}),t}static map(t,n){return Object.getOwnPropertyNames(t).map(r=>n(r,t[r]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((n,r)=>{const i=t[r];return"metas"in i?n[r]=i.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):n[r]=i,n},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Y;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(Y||(Y={}));const uf=(e,t,n={})=>{var r;const i=(r=n.skipTypes)!==null&&r!==void 0?r:[];return Object.keys(t).reduce((s,o)=>(s[o]=l_(o,e,t,i),s),{})},l_=(e,t,n,r)=>{const i=t.find(a=>a.name===e),s=i==null?void 0:i.type,o=n[e];return s&&!r.includes(s)?z0(s,o):ru(o)},z0=(e,t)=>{if(e.charAt(0)==="_"){const n=e.slice(1,e.length);return f_(t,n)}switch(e){case Y.bool:return u_(t);case Y.float4:case Y.float8:case Y.int2:case Y.int4:case Y.int8:case Y.numeric:case Y.oid:return c_(t);case Y.json:case Y.jsonb:return d_(t);case Y.timestamp:return h_(t);case Y.abstime:case Y.date:case Y.daterange:case Y.int4range:case Y.int8range:case Y.money:case Y.reltime:case Y.text:case Y.time:case Y.timestamptz:case Y.timetz:case Y.tsrange:case Y.tstzrange:return ru(t);default:return ru(t)}},ru=e=>e,u_=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},c_=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},d_=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},f_=(e,t)=>{if(typeof e!="string")return e;const n=e.length-1,r=e[n];if(e[0]==="{"&&r==="}"){let s;const o=e.slice(1,n);try{s=JSON.parse("["+o+"]")}catch{s=o?o.split(","):[]}return s.map(a=>z0(t,a))}return e},h_=e=>typeof e=="string"?e.replace(" ","T"):e;var cf;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(cf||(cf={}));var df;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes"})(df||(df={}));var ff;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(ff||(ff={}));class Ec{constructor(t,n={config:{}},r){this.topic=t,this.params=n,this.socket=r,this.bindings={},this.state=Fe.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},n.config),this.timeout=this.socket.timeout,this.joinPush=new Ha(this,ut.join,this.params,this.timeout),this.rejoinTimer=new A0(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Fe.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Fe.closed,this.socket._remove(this)}),this._onError(i=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,i),this.state=Fe.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Fe.errored,this.rejoinTimer.scheduleTimeout())}),this._on(ut.reply,{},(i,s)=>{this._trigger(this._replyEventName(s),i)}),this.presence=new li(this),this.broadcastEndpointURL=this._broadcastEndpointURL()}subscribe(t,n=this.timeout){var r,i;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:s,presence:o}}=this.params;this._onError(u=>t&&t("CHANNEL_ERROR",u)),this._onClose(()=>t&&t("CLOSED"));const a={},l={broadcast:s,presence:o,postgres_changes:(i=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(u=>u.filter))!==null&&i!==void 0?i:[]};this.socket.accessToken&&(a.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:l},a)),this.joinedOnce=!0,this._rejoin(n),this.joinPush.receive("ok",({postgres_changes:u})=>{var c;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),u===void 0){t&&t("SUBSCRIBED");return}else{const d=this.bindings.postgres_changes,h=(c=d==null?void 0:d.length)!==null&&c!==void 0?c:0,g=[];for(let v=0;v<h;v++){const y=d[v],{filter:{event:S,schema:p,table:f,filter:m}}=y,w=u&&u[v];if(w&&w.event===S&&w.schema===p&&w.table===f&&w.filter===m)g.push(Object.assign(Object.assign({},y),{id:w.id}));else{this.unsubscribe(),t&&t("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=g,t&&t("SUBSCRIBED");return}}).receive("error",u=>{t&&t("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(u).join(", ")||"error")))}).receive("timeout",()=>{t&&t("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(t,n={}){return await this.send({type:"presence",event:"track",payload:t},n.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,n,r){return this._on(t,n,r)}async send(t,n={}){var r,i;if(!this._canPush()&&t.type==="broadcast"){const{event:s,payload:o}=t,a={method:"POST",headers:{apikey:(r=this.socket.accessToken)!==null&&r!==void 0?r:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:o}]})};try{return(await this._fetchWithTimeout(this.broadcastEndpointURL,a,(i=n.timeout)!==null&&i!==void 0?i:this.timeout)).ok?"ok":"error"}catch(l){return l.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var o,a,l;const u=this._push(t.type,t,n.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(a=(o=this.params)===null||o===void 0?void 0:o.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),u.receive("ok",()=>s("ok")),u.receive("timeout",()=>s("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=Fe.leaving;const n=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(ut.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(r=>{const i=new Ha(this,ut.leave,{},t);i.receive("ok",()=>{n(),r("ok")}).receive("timeout",()=>{n(),r("timed out")}).receive("error",()=>{r("error")}),i.send(),this._canPush()||i.trigger("ok",{})})}_broadcastEndpointURL(){let t=this.socket.endPoint;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"}async _fetchWithTimeout(t,n,r){const i=new AbortController,s=setTimeout(()=>i.abort(),r),o=await this.socket.fetch(t,Object.assign(Object.assign({},n),{signal:i.signal}));return clearTimeout(s),o}_push(t,n,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new Ha(this,t,n,r);return this._canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}_onMessage(t,n,r){return n}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,n,r){var i,s;const o=t.toLocaleLowerCase(),{close:a,error:l,leave:u,join:c}=ut;if(r&&[a,l,u,c].indexOf(o)>=0&&r!==this._joinRef())return;let h=this._onMessage(o,n,r);if(n&&!h)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(i=this.bindings.postgres_changes)===null||i===void 0||i.filter(g=>{var v,y,S;return((v=g.filter)===null||v===void 0?void 0:v.event)==="*"||((S=(y=g.filter)===null||y===void 0?void 0:y.event)===null||S===void 0?void 0:S.toLocaleLowerCase())===o}).map(g=>g.callback(h,r)):(s=this.bindings[o])===null||s===void 0||s.filter(g=>{var v,y,S,p,f,m;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in g){const w=g.id,k=(v=g.filter)===null||v===void 0?void 0:v.event;return w&&((y=n.ids)===null||y===void 0?void 0:y.includes(w))&&(k==="*"||(k==null?void 0:k.toLocaleLowerCase())===((S=n.data)===null||S===void 0?void 0:S.type.toLocaleLowerCase()))}else{const w=(f=(p=g==null?void 0:g.filter)===null||p===void 0?void 0:p.event)===null||f===void 0?void 0:f.toLocaleLowerCase();return w==="*"||w===((m=n==null?void 0:n.event)===null||m===void 0?void 0:m.toLocaleLowerCase())}else return g.type.toLocaleLowerCase()===o}).map(g=>{if(typeof h=="object"&&"ids"in h){const v=h.data,{schema:y,table:S,commit_timestamp:p,type:f,errors:m}=v;h=Object.assign(Object.assign({},{schema:y,table:S,commit_timestamp:p,eventType:f,new:{},old:{},errors:m}),this._getPayloadRecords(v))}g.callback(h,r)})}_isClosed(){return this.state===Fe.closed}_isJoined(){return this.state===Fe.joined}_isJoining(){return this.state===Fe.joining}_isLeaving(){return this.state===Fe.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,n,r){const i=t.toLocaleLowerCase(),s={type:i,filter:n,callback:r};return this.bindings[i]?this.bindings[i].push(s):this.bindings[i]=[s],this}_off(t,n){const r=t.toLocaleLowerCase();return this.bindings[r]=this.bindings[r].filter(i=>{var s;return!(((s=i.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===r&&Ec.isEqual(i.filter,n))}),this}static isEqual(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const r in t)if(t[r]!==n[r])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(ut.close,{},t)}_onError(t){this._on(ut.error,{},n=>t(n))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Fe.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const n={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(n.new=uf(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(n.old=uf(t.columns,t.old_record)),n}}const p_=()=>{};class m_{constructor(t,n){var r;this.accessToken=null,this.channels=[],this.endPoint="",this.headers=i_,this.params={},this.timeout=N0,this.transport=n_.w3cwebsocket,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=p_,this.conn=null,this.sendBuffer=[],this.serializer=new a_,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=s=>{let o;return s?o=s:typeof fetch>"u"?o=(...a)=>Ui(()=>Promise.resolve().then(()=>Bi),void 0).then(({default:l})=>l(...a)):o=fetch,(...a)=>o(...a)},this.endPoint=`${t}/${nu.websocket}`,n!=null&&n.params&&(this.params=n.params),n!=null&&n.headers&&(this.headers=Object.assign(Object.assign({},this.headers),n.headers)),n!=null&&n.timeout&&(this.timeout=n.timeout),n!=null&&n.logger&&(this.logger=n.logger),n!=null&&n.transport&&(this.transport=n.transport),n!=null&&n.heartbeatIntervalMs&&(this.heartbeatIntervalMs=n.heartbeatIntervalMs);const i=(r=n==null?void 0:n.params)===null||r===void 0?void 0:r.apikey;i&&(this.accessToken=i),this.reconnectAfterMs=n!=null&&n.reconnectAfterMs?n.reconnectAfterMs:s=>[1e3,2e3,5e3,1e4][s-1]||1e4,this.encode=n!=null&&n.encode?n.encode:(s,o)=>o(JSON.stringify(s)),this.decode=n!=null&&n.decode?n.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new A0(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(n==null?void 0:n.fetch)}connect(){this.conn||(this.conn=new this.transport(this._endPointURL(),[],null,this.headers),this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t)))}disconnect(t,n){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,n??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(t){const n=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),n}async removeAllChannels(){const t=await Promise.all(this.channels.map(n=>n.unsubscribe()));return this.disconnect(),t}log(t,n,r){this.logger(t,n,r)}connectionState(){switch(this.conn&&this.conn.readyState){case ai.connecting:return kn.Connecting;case ai.open:return kn.Open;case ai.closing:return kn.Closing;default:return kn.Closed}}isConnected(){return this.connectionState()===kn.Open}channel(t,n={config:{}}){const r=new Ec(`realtime:${t}`,n,this);return this.channels.push(r),r}push(t){const{topic:n,event:r,payload:i,ref:s}=t,o=()=>{this.encode(t,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${n} ${r} (${s})`,i),this.isConnected()?o():this.sendBuffer.push(o)}setAuth(t){this.accessToken=t,this.channels.forEach(n=>{t&&n.updateJoinPayload({access_token:t}),n.joinedOnce&&n._isJoined()&&n._push(ut.access_token,{access_token:t})})}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let n=this.channels.find(r=>r.topic===t&&(r._isJoined()||r._isJoining()));n&&(this.log("transport",`leaving duplicate topic "${t}"`),n.unsubscribe())}_remove(t){this.channels=this.channels.filter(n=>n._joinRef()!==t._joinRef())}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:s_}))}_onConnMessage(t){this.decode(t.data,n=>{let{topic:r,event:i,payload:s,ref:o}=n;(o&&o===this.pendingHeartbeatRef||i===(s==null?void 0:s.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${s.status||""} ${r} ${i} ${o&&"("+o+")"||""}`,s),this.channels.filter(a=>a._isMember(r)).forEach(a=>a._trigger(i,s,o)),this.stateChangeCallbacks.message.forEach(a=>a(n))})}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach(t=>t())}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(n=>n(t))}_onConnError(t){this.log("transport",t.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(n=>n(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger(ut.error))}_appendParams(t,n){if(Object.keys(n).length===0)return t;const r=t.match(/\?/)?"&":"?",i=new URLSearchParams(n);return`${t}${r}${i}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_sendHeartbeat(){var t;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(t=this.conn)===null||t===void 0||t.close(o_,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}}class $c extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function Ee(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class g_ extends $c{constructor(t,n){super(t),this.name="StorageApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class hf extends $c{constructor(t,n){super(t),this.name="StorageUnknownError",this.originalError=n}}var y_=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const D0=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Ui(()=>Promise.resolve().then(()=>Bi),void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},v_=()=>y_(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Ui(()=>Promise.resolve().then(()=>Bi),void 0)).Response:Response});var jr=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const Wa=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),w_=(e,t)=>jr(void 0,void 0,void 0,function*(){const n=yield v_();e instanceof n?e.json().then(r=>{t(new g_(Wa(r),e.status||500))}).catch(r=>{t(new hf(Wa(r),r))}):t(new hf(Wa(e),e))}),__=(e,t,n,r)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};function sa(e,t,n,r,i,s){return jr(this,void 0,void 0,function*(){return new Promise((o,a)=>{e(n,__(t,r,i,s)).then(l=>{if(!l.ok)throw l;return r!=null&&r.noResolveJson?l:l.json()}).then(l=>o(l)).catch(l=>w_(l,a))})})}function iu(e,t,n,r){return jr(this,void 0,void 0,function*(){return sa(e,"GET",t,n,r)})}function Wt(e,t,n,r,i){return jr(this,void 0,void 0,function*(){return sa(e,"POST",t,r,i,n)})}function S_(e,t,n,r,i){return jr(this,void 0,void 0,function*(){return sa(e,"PUT",t,r,i,n)})}function F0(e,t,n,r,i){return jr(this,void 0,void 0,function*(){return sa(e,"DELETE",t,r,i,n)})}var qe=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const k_={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},pf={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class x_{constructor(t,n={},r,i){this.url=t,this.headers=n,this.bucketId=r,this.fetch=D0(i)}uploadOrUpdate(t,n,r,i){return qe(this,void 0,void 0,function*(){try{let s;const o=Object.assign(Object.assign({},pf),i),a=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(o.upsert)});typeof Blob<"u"&&r instanceof Blob?(s=new FormData,s.append("cacheControl",o.cacheControl),s.append("",r)):typeof FormData<"u"&&r instanceof FormData?(s=r,s.append("cacheControl",o.cacheControl)):(s=r,a["cache-control"]=`max-age=${o.cacheControl}`,a["content-type"]=o.contentType);const l=this._removeEmptyFolders(n),u=this._getFinalPath(l),c=yield this.fetch(`${this.url}/object/${u}`,Object.assign({method:t,body:s,headers:a},o!=null&&o.duplex?{duplex:o.duplex}:{}));return c.ok?{data:{path:l},error:null}:{data:null,error:yield c.json()}}catch(s){if(Ee(s))return{data:null,error:s};throw s}})}upload(t,n,r){return qe(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,n,r)})}uploadToSignedUrl(t,n,r,i){return qe(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(t),o=this._getFinalPath(s),a=new URL(this.url+`/object/upload/sign/${o}`);a.searchParams.set("token",n);try{let l;const u=Object.assign({upsert:pf.upsert},i),c=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.append("cacheControl",u.cacheControl)):(l=r,c["cache-control"]=`max-age=${u.cacheControl}`,c["content-type"]=u.contentType);const d=yield this.fetch(a.toString(),{method:"PUT",body:l,headers:c});return d.ok?{data:{path:s},error:null}:{data:null,error:yield d.json()}}catch(l){if(Ee(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t){return qe(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const r=yield Wt(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:this.headers}),i=new URL(this.url+r.url),s=i.searchParams.get("token");if(!s)throw new $c("No token returned by API");return{data:{signedUrl:i.toString(),path:t,token:s},error:null}}catch(n){if(Ee(n))return{data:null,error:n};throw n}})}update(t,n,r){return qe(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,n,r)})}move(t,n){return qe(this,void 0,void 0,function*(){try{return{data:yield Wt(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n},{headers:this.headers}),error:null}}catch(r){if(Ee(r))return{data:null,error:r};throw r}})}copy(t,n){return qe(this,void 0,void 0,function*(){try{return{data:{path:(yield Wt(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n},{headers:this.headers})).Key},error:null}}catch(r){if(Ee(r))return{data:null,error:r};throw r}})}createSignedUrl(t,n,r){return qe(this,void 0,void 0,function*(){try{let i=this._getFinalPath(t),s=yield Wt(this.fetch,`${this.url}/object/sign/${i}`,Object.assign({expiresIn:n},r!=null&&r.transform?{transform:r.transform}:{}),{headers:this.headers});const o=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${o}`)},{data:s,error:null}}catch(i){if(Ee(i))return{data:null,error:i};throw i}})}createSignedUrls(t,n,r){return qe(this,void 0,void 0,function*(){try{const i=yield Wt(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:n,paths:t},{headers:this.headers}),s=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return{data:i.map(o=>Object.assign(Object.assign({},o),{signedUrl:o.signedURL?encodeURI(`${this.url}${o.signedURL}${s}`):null})),error:null}}catch(i){if(Ee(i))return{data:null,error:i};throw i}})}download(t,n){return qe(this,void 0,void 0,function*(){const i=typeof(n==null?void 0:n.transform)<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString((n==null?void 0:n.transform)||{}),o=s?`?${s}`:"";try{const a=this._getFinalPath(t);return{data:yield(yield iu(this.fetch,`${this.url}/${i}/${a}${o}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(Ee(a))return{data:null,error:a};throw a}})}getPublicUrl(t,n){const r=this._getFinalPath(t),i=[],s=n!=null&&n.download?`download=${n.download===!0?"":n.download}`:"";s!==""&&i.push(s);const a=typeof(n==null?void 0:n.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((n==null?void 0:n.transform)||{});l!==""&&i.push(l);let u=i.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${r}${u}`)}}}remove(t){return qe(this,void 0,void 0,function*(){try{return{data:yield F0(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(n){if(Ee(n))return{data:null,error:n};throw n}})}list(t,n,r){return qe(this,void 0,void 0,function*(){try{const i=Object.assign(Object.assign(Object.assign({},k_),n),{prefix:t||""});return{data:yield Wt(this.fetch,`${this.url}/object/list/${this.bucketId}`,i,{headers:this.headers},r),error:null}}catch(i){if(Ee(i))return{data:null,error:i};throw i}})}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const n=[];return t.width&&n.push(`width=${t.width}`),t.height&&n.push(`height=${t.height}`),t.resize&&n.push(`resize=${t.resize}`),t.format&&n.push(`format=${t.format}`),t.quality&&n.push(`quality=${t.quality}`),n.join("&")}}const E_="2.5.4",$_={"X-Client-Info":`storage-js/${E_}`};var Mn=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};class C_{constructor(t,n={},r){this.url=t,this.headers=Object.assign(Object.assign({},$_),n),this.fetch=D0(r)}listBuckets(){return Mn(this,void 0,void 0,function*(){try{return{data:yield iu(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(Ee(t))return{data:null,error:t};throw t}})}getBucket(t){return Mn(this,void 0,void 0,function*(){try{return{data:yield iu(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(n){if(Ee(n))return{data:null,error:n};throw n}})}createBucket(t,n={public:!1}){return Mn(this,void 0,void 0,function*(){try{return{data:yield Wt(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(Ee(r))return{data:null,error:r};throw r}})}updateBucket(t,n){return Mn(this,void 0,void 0,function*(){try{return{data:yield S_(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(Ee(r))return{data:null,error:r};throw r}})}emptyBucket(t){return Mn(this,void 0,void 0,function*(){try{return{data:yield Wt(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(n){if(Ee(n))return{data:null,error:n};throw n}})}deleteBucket(t){return Mn(this,void 0,void 0,function*(){try{return{data:yield F0(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(n){if(Ee(n))return{data:null,error:n};throw n}})}}class b_ extends C_{constructor(t,n={},r){super(t,n,r)}from(t){return new x_(this.url,this.headers,t,this.fetch)}}const P_="2.38.5";let Qr="";typeof Deno<"u"?Qr="deno":typeof document<"u"?Qr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Qr="react-native":Qr="node";const T_={"X-Client-Info":`supabase-js-${Qr}/${P_}`};var O_=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const j_=e=>{let t;return e?t=e:typeof fetch>"u"?t=kc:t=fetch,(...n)=>t(...n)},I_=()=>typeof Headers>"u"?R0:Headers,R_=(e,t,n)=>{const r=j_(n),i=I_();return(s,o)=>O_(void 0,void 0,void 0,function*(){var a;const l=(a=yield t())!==null&&a!==void 0?a:e;let u=new i(o==null?void 0:o.headers);return u.has("apikey")||u.set("apikey",e),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),r(s,Object.assign(Object.assign({},o),{headers:u}))})};function L_(e){return e.replace(/\/$/,"")}function N_(e,t){const{db:n,auth:r,realtime:i,global:s}=e,{db:o,auth:a,realtime:l,global:u}=t;return{db:Object.assign(Object.assign({},o),n),auth:Object.assign(Object.assign({},a),r),realtime:Object.assign(Object.assign({},l),i),global:Object.assign(Object.assign({},u),s)}}function A_(e){return Math.round(Date.now()/1e3)+e}function z_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const Ct=()=>typeof document<"u",yn={tested:!1,writable:!1},ui=()=>{if(!Ct())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(yn.tested)return yn.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),yn.tested=!0,yn.writable=!0}catch{yn.tested=!0,yn.writable=!1}return yn.writable};function Ga(e){const t={},n=new URL(e);if(n.hash&&n.hash[0]==="#")try{new URLSearchParams(n.hash.substring(1)).forEach((i,s)=>{t[s]=i})}catch{}return n.searchParams.forEach((r,i)=>{t[i]=r}),t}const M0=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Ui(()=>Promise.resolve().then(()=>Bi),void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},D_=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",vn=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},hs=async(e,t)=>{const n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return n}},Ka=async(e,t)=>{await e.removeItem(t)};function F_(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let n="",r,i,s,o,a,l,u,c=0;for(e=e.replace("-","+").replace("_","/");c<e.length;)o=t.indexOf(e.charAt(c++)),a=t.indexOf(e.charAt(c++)),l=t.indexOf(e.charAt(c++)),u=t.indexOf(e.charAt(c++)),r=o<<2|a>>4,i=(a&15)<<4|l>>2,s=(l&3)<<6|u,n=n+String.fromCharCode(r),l!=64&&i!=0&&(n=n+String.fromCharCode(i)),u!=64&&s!=0&&(n=n+String.fromCharCode(s));return n}class oa{constructor(){this.promise=new oa.promiseConstructor((t,n)=>{this.resolve=t,this.reject=n})}}oa.promiseConstructor=Promise;function mf(e){const t=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,n=e.split(".");if(n.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!t.test(n[1]))throw new Error("JWT is not valid: payload is not in base64url format");const r=n[1];return JSON.parse(F_(r))}async function M_(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function U_(e,t){return new Promise((r,i)=>{(async()=>{for(let s=0;s<1/0;s++)try{const o=await e(s);if(!t(s,null,o)){r(o);return}}catch(o){if(!t(s,o)){i(o);return}}})()})}function B_(e){return("0"+e.toString(16)).substr(-2)}function Un(){const t=new Uint32Array(56);if(typeof crypto>"u"){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=n.length;let i="";for(let s=0;s<56;s++)i+=n.charAt(Math.floor(Math.random()*r));return i}return crypto.getRandomValues(t),Array.from(t,B_).join("")}async function V_(e){const n=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",n),i=new Uint8Array(r);return Array.from(i).map(s=>String.fromCharCode(s)).join("")}function H_(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Bn(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const n=await V_(e);return H_(n)}class Cc extends Error{constructor(t,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=n}}function z(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class W_ extends Cc{constructor(t,n){super(t,n),this.name="AuthApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}function G_(e){return z(e)&&e.name==="AuthApiError"}class U0 extends Cc{constructor(t,n){super(t),this.name="AuthUnknownError",this.originalError=n}}class Ir extends Cc{constructor(t,n,r){super(t),this.name=n,this.status=r}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Vn extends Ir{constructor(){super("Auth session missing!","AuthSessionMissingError",400)}}class Ya extends Ir{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500)}}class ps extends Ir{constructor(t){super(t,"AuthInvalidCredentialsError",400)}}class ms extends Ir{constructor(t,n=null){super(t,"AuthImplicitGrantRedirectError",500),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class gf extends Ir{constructor(t,n=null){super(t,"AuthPKCEGrantCodeExchangeError",500),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class su extends Ir{constructor(t,n){super(t,"AuthRetryableFetchError",n)}}function yf(e){return z(e)&&e.name==="AuthRetryableFetchError"}var K_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const Jr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),Y_=[502,503,504];async function vf(e){if(!D_(e))throw new su(Jr(e),0);if(Y_.includes(e.status))throw new su(Jr(e),e.status);let t;try{t=await e.json()}catch(n){throw new U0(Jr(n),n)}throw new W_(Jr(t),e.status||500)}const Q_=(e,t,n,r)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function F(e,t,n,r){var i;const s=Object.assign({},r==null?void 0:r.headers);r!=null&&r.jwt&&(s.Authorization=`Bearer ${r.jwt}`);const o=(i=r==null?void 0:r.query)!==null&&i!==void 0?i:{};r!=null&&r.redirectTo&&(o.redirect_to=r.redirectTo);const a=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",l=await J_(e,t,n+a,{headers:s,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function J_(e,t,n,r,i,s){const o=Q_(t,r,i,s);let a;try{a=await e(n,o)}catch(l){throw console.error(l),new su(Jr(l),0)}if(a.ok||await vf(a),r!=null&&r.noResolveJson)return a;try{return await a.json()}catch(l){await vf(l)}}function Ut(e){var t;let n=null;eS(e)&&(n=Object.assign({},e),e.expires_at||(n.expires_at=A_(e.expires_in)));const r=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:n,user:r},error:null}}function Yt(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function q_(e){return{data:e,error:null}}function X_(e){const{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:s}=e,o=K_(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:s},l=Object.assign({},o);return{data:{properties:a,user:l},error:null}}function Z_(e){return e}function eS(e){return e.access_token&&e.refresh_token&&e.expires_in}var tS=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};class nS{constructor({url:t="",headers:n={},fetch:r}){this.url=t,this.headers=n,this.fetch=M0(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,n="global"){try{return await F(this.fetch,"POST",`${this.url}/logout?scope=${n}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(r){if(z(r))return{data:null,error:r};throw r}}async inviteUserByEmail(t,n={}){try{return await F(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:n.data},headers:this.headers,redirectTo:n.redirectTo,xform:Yt})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}async generateLink(t){try{const{options:n}=t,r=tS(t,["options"]),i=Object.assign(Object.assign({},r),n);return"newEmail"in r&&(i.new_email=r==null?void 0:r.newEmail,delete i.newEmail),await F(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:X_,redirectTo:n==null?void 0:n.redirectTo})}catch(n){if(z(n))return{data:{properties:null,user:null},error:n};throw n}}async createUser(t){try{return await F(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:Yt})}catch(n){if(z(n))return{data:{user:null},error:n};throw n}}async listUsers(t){var n,r,i,s,o,a,l;try{const u={nextPage:null,lastPage:0,total:0},c=await F(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(n=t==null?void 0:t.page)===null||n===void 0?void 0:n.toString())!==null&&r!==void 0?r:"",per_page:(s=(i=t==null?void 0:t.perPage)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:""},xform:Z_});if(c.error)throw c.error;const d=await c.json(),h=(o=c.headers.get("x-total-count"))!==null&&o!==void 0?o:0,g=(l=(a=c.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return g.length>0&&(g.forEach(v=>{const y=parseInt(v.split(";")[0].split("=")[1].substring(0,1)),S=JSON.parse(v.split(";")[1].split("=")[1]);u[`${S}Page`]=y}),u.total=parseInt(h)),{data:Object.assign(Object.assign({},d),u),error:null}}catch(u){if(z(u))return{data:{users:[]},error:u};throw u}}async getUserById(t){try{return await F(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:Yt})}catch(n){if(z(n))return{data:{user:null},error:n};throw n}}async updateUserById(t,n){try{return await F(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:n,headers:this.headers,xform:Yt})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}async deleteUser(t,n=!1){try{return await F(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:n},xform:Yt})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}async _listFactors(t){try{const{data:n,error:r}=await F(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:n,error:r}}catch(n){if(z(n))return{data:null,error:n};throw n}}async _deleteFactor(t){try{return{data:await F(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(n){if(z(n))return{data:null,error:n};throw n}}}const B0="2.57.0",rS="http://localhost:9999",iS="supabase.auth.token",sS={"X-Client-Info":`gotrue-js/${B0}`},wf=10,oS={getItem:e=>ui()?globalThis.localStorage.getItem(e):null,setItem:(e,t)=>{ui()&&globalThis.localStorage.setItem(e,t)},removeItem:e=>{ui()&&globalThis.localStorage.removeItem(e)}};function _f(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}function aS(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}globalThis&&ui()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class lS extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}aS();const uS={url:rS,storageKey:iS,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:sS,flowType:"implicit",debug:!1},Vr=30*1e3,Sf=3;async function cS(e,t,n){return await n()}class Ri{constructor(t){var n;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Ri.nextInstanceID,Ri.nextInstanceID+=1,this.instanceID>0&&Ct()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const r=Object.assign(Object.assign({},uS),t);if(this.logDebugMessages=!!r.debug,typeof r.debug=="function"&&(this.logger=r.debug),this.persistSession=r.persistSession,this.storageKey=r.storageKey,this.autoRefreshToken=r.autoRefreshToken,this.admin=new nS({url:r.url,headers:r.headers,fetch:r.fetch}),this.url=r.url,this.headers=r.headers,this.fetch=M0(r.fetch),this.lock=r.lock||cS,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?r.storage?this.storage=r.storage:ui()?this.storage=oS:(this.memoryStorage={},this.storage=_f(this.memoryStorage)):(this.memoryStorage={},this.storage=_f(this.memoryStorage)),Ct()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${B0}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const t=Ct()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",t),t||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:n,error:r}=await this._getSessionFromURL(t);if(r)return this._debug("#_initialize()","error detecting session from URL",r),await this._removeSession(),{error:r};const{session:i,redirectType:s}=n;return this._debug("#_initialize()","detected session in URL",i,"redirect type",s),await this._saveSession(i),setTimeout(async()=>{s==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",i):await this._notifyAllSubscribers("SIGNED_IN",i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return z(t)?{error:t}:{error:new U0("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signUp(t){var n,r,i;try{await this._removeSession();let s;if("email"in t){const{email:c,password:d,options:h}=t;let g=null,v=null;if(this.flowType==="pkce"){const y=Un();await vn(this.storage,`${this.storageKey}-code-verifier`,y),g=await Bn(y),v=y===g?"plain":"s256"}s=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h==null?void 0:h.emailRedirectTo,body:{email:c,password:d,data:(n=h==null?void 0:h.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},code_challenge:g,code_challenge_method:v},xform:Ut})}else if("phone"in t){const{phone:c,password:d,options:h}=t;s=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:c,password:d,data:(r=h==null?void 0:h.data)!==null&&r!==void 0?r:{},channel:(i=h==null?void 0:h.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Ut})}else throw new ps("You must provide either an email or phone number and a password");const{data:o,error:a}=s;if(a||!o)return{data:{user:null,session:null},error:a};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(z(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithPassword(t){try{await this._removeSession();let n;if("email"in t){const{email:s,password:o,options:a}=t;n=await F(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Ut})}else if("phone"in t){const{phone:s,password:o,options:a}=t;n=await F(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Ut})}else throw new ps("You must provide either an email or phone number and a password");const{data:r,error:i}=n;return i?{data:{user:null,session:null},error:i}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new Ya}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:{user:r.user,session:r.session},error:i})}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOAuth(t){var n,r,i,s;return await this._removeSession(),await this._handleProviderSignIn(t.provider,{redirectTo:(n=t.options)===null||n===void 0?void 0:n.redirectTo,scopes:(r=t.options)===null||r===void 0?void 0:r.scopes,queryParams:(i=t.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(s=t.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async _exchangeCodeForSession(t){const n=await hs(this.storage,`${this.storageKey}-code-verifier`),{data:r,error:i}=await F(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:Ut});return await Ka(this.storage,`${this.storageKey}-code-verifier`),i?{data:{user:null,session:null},error:i}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new Ya}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:r,error:i})}async signInWithIdToken(t){await this._removeSession();try{const{options:n,provider:r,token:i,access_token:s,nonce:o}=t,a=await F(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:i,access_token:s,nonce:o,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:Ut}),{data:l,error:u}=a;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new Ya}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOtp(t){var n,r,i,s,o;try{if(await this._removeSession(),"email"in t){const{email:a,options:l}=t;let u=null,c=null;if(this.flowType==="pkce"){const h=Un();await vn(this.storage,`${this.storageKey}-code-verifier`,h),u=await Bn(h),c=h===u?"plain":"s256"}const{error:d}=await F(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(n=l==null?void 0:l.data)!==null&&n!==void 0?n:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:c},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:d}}if("phone"in t){const{phone:a,options:l}=t,{data:u,error:c}=await F(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(i=l==null?void 0:l.data)!==null&&i!==void 0?i:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(o=l==null?void 0:l.channel)!==null&&o!==void 0?o:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:c}}throw new ps("You must provide either an email or phone number.")}catch(a){if(z(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(t){var n,r;try{t.type!=="email_change"&&t.type!=="phone_change"&&await this._removeSession();let i,s;"options"in t&&(i=(n=t.options)===null||n===void 0?void 0:n.redirectTo,s=(r=t.options)===null||r===void 0?void 0:r.captchaToken);const{data:o,error:a}=await F(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:s}}),redirectTo:i,xform:Ut});if(a)throw a;if(!o)throw new Error("An error occurred on token verification.");const l=o.session,u=o.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(z(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithSSO(t){var n,r,i;try{await this._removeSession();let s=null,o=null;if(this.flowType==="pkce"){const a=Un();await vn(this.storage,`${this.storageKey}-code-verifier`,a),s=await Bn(a),o=a===s?"plain":"s256"}return await F(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(r=(n=t.options)===null||n===void 0?void 0:n.redirectTo)!==null&&r!==void 0?r:void 0}),!((i=t==null?void 0:t.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:s,code_challenge_method:o}),headers:this.headers,xform:q_})}catch(s){if(z(s))return{data:null,error:s};throw s}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:n},error:r}=t;if(r)throw r;if(!n)throw new Vn;const{error:i}=await F(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:n.access_token});return{data:{user:null,session:null},error:i}})}catch(t){if(z(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{t.type!="email_change"&&t.type!="phone_change"&&await this._removeSession();const n=`${this.url}/resend`;if("email"in t){const{email:r,type:i,options:s}=t,{error:o}=await F(this.fetch,"POST",n,{headers:this.headers,body:{email:r,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},redirectTo:s==null?void 0:s.emailRedirectTo});return{data:{user:null,session:null},error:o}}else if("phone"in t){const{phone:r,type:i,options:s}=t,{data:o,error:a}=await F(this.fetch,"POST",n,{headers:this.headers,body:{phone:r,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return{data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:a}}throw new ps("You must provide either an email or phone number and a type")}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async getSession(){return await this.initializePromise,this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(t,n){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await r,await n()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=n();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const n=await this.__loadSession();return await t(n)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const n=await hs(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",n),n!==null&&(this._isValidSession(n)?t=n:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const r=t.expires_at?t.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",t.expires_at),!r)return{data:{session:t},error:null};const{session:i,error:s}=await this._callRefreshToken(t.refresh_token);return s?{data:{session:null},error:s}:{data:{session:i},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await F(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:Yt}):await this._useSession(async n=>{var r,i;const{data:s,error:o}=n;if(o)throw o;return await F(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(r=s.session)===null||r===void 0?void 0:r.access_token)!==null&&i!==void 0?i:void 0,xform:Yt})})}catch(n){if(z(n))return{data:{user:null},error:n};throw n}}async updateUser(t,n={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,n))}async _updateUser(t,n={}){try{return await this._useSession(async r=>{const{data:i,error:s}=r;if(s)throw s;if(!i.session)throw new Vn;const o=i.session;let a=null,l=null;if(this.flowType==="pkce"&&t.email!=null){const d=Un();await vn(this.storage,`${this.storageKey}-code-verifier`,d),a=await Bn(d),l=d===a?"plain":"s256"}const{data:u,error:c}=await F(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:n==null?void 0:n.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:a,code_challenge_method:l}),jwt:o.access_token,xform:Yt});if(c)throw c;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),{data:{user:o.user},error:null}})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}_decodeJWT(t){return mf(t)}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Vn;const n=Date.now()/1e3;let r=n,i=!0,s=null;const o=mf(t.access_token);if(o.exp&&(r=o.exp,i=r<=n),i){const{session:a,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};s=a}else{const{data:a,error:l}=await this._getUser(t.access_token);if(l)throw l;s={access_token:t.access_token,refresh_token:t.refresh_token,user:a.user,token_type:"bearer",expires_in:r-n,expires_at:r},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return{data:{user:s.user,session:s},error:null}}catch(n){if(z(n))return{data:{session:null,user:null},error:n};throw n}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async n=>{var r;if(!t){const{data:o,error:a}=n;if(a)throw a;t=(r=o.session)!==null&&r!==void 0?r:void 0}if(!(t!=null&&t.refresh_token))throw new Vn;const{session:i,error:s}=await this._callRefreshToken(t.refresh_token);return s?{data:{user:null,session:null},error:s}:i?{data:{user:i.user,session:i},error:null}:{data:{user:null,session:null},error:null}})}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async _getSessionFromURL(t){try{if(!Ct())throw new ms("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new ms("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!t)throw new gf("Not a valid PKCE flow url.");const n=Ga(window.location.href);if(t){if(!n.code)throw new gf("No code detected.");const{data:f,error:m}=await this._exchangeCodeForSession(n.code);if(m)throw m;const w=new URL(window.location.href);return w.searchParams.delete("code"),window.history.replaceState(window.history.state,"",w.toString()),{data:{session:f.session,redirectType:null},error:null}}if(n.error||n.error_description||n.error_code)throw new ms(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});const{provider_token:r,provider_refresh_token:i,access_token:s,refresh_token:o,expires_in:a,expires_at:l,token_type:u}=n;if(!s||!a||!o||!u)throw new ms("No session defined in URL");const c=Math.round(Date.now()/1e3),d=parseInt(a);let h=c+d;l&&(h=parseInt(l));const g=h-c;g*1e3<=Vr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${d}s`);const v=h-d;c-v>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",v,h,c):c-v<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",v,h,c);const{data:y,error:S}=await this._getUser(s);if(S)throw S;const p={provider_token:r,provider_refresh_token:i,access_token:s,expires_in:d,expires_at:h,refresh_token:o,token_type:u,user:y.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:p,redirectType:n.type},error:null}}catch(n){if(z(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantFlow(){const t=Ga(window.location.href);return!!(Ct()&&(t.access_token||t.error_description))}async _isPKCEFlow(){const t=Ga(window.location.href),n=await hs(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&n)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async n=>{var r;const{data:i,error:s}=n;if(s)return{error:s};const o=(r=i.session)===null||r===void 0?void 0:r.access_token;if(o){const{error:a}=await this.admin.signOut(o,t);if(a&&!(G_(a)&&(a.status===404||a.status===401)))return{error:a}}return t!=="others"&&(await this._removeSession(),await Ka(this.storage,`${this.storageKey}-code-verifier`),await this._notifyAllSubscribers("SIGNED_OUT",null)),{error:null}})}onAuthStateChange(t){const n=z_(),r={id:n,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}};return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,r),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(n)})))(),{data:{subscription:r}}}async _emitInitialSession(t){return await this._useSession(async n=>{var r,i;try{const{data:{session:s},error:o}=n;if(o)throw o;await((r=this.stateChangeEmitters.get(t))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",t,"session",s)}catch(s){await((i=this.stateChangeEmitters.get(t))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",s),console.error(s)}})}async resetPasswordForEmail(t,n={}){let r=null,i=null;if(this.flowType==="pkce"){const s=Un();await vn(this.storage,`${this.storageKey}-code-verifier`,s),r=await Bn(s),i=s===r?"plain":"s256"}try{return await F(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:r,code_challenge_method:i,gotrue_meta_security:{captcha_token:n.captchaToken}},headers:this.headers,redirectTo:n.redirectTo})}catch(s){if(z(s))return{data:null,error:s};throw s}}async _refreshAccessToken(t){const n=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(n,"begin");try{const r=Date.now();return await U_(async i=>(await M_(i*200),this._debug(n,"refreshing attempt",i),await F(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:Ut})),(i,s,o)=>o&&o.error&&yf(o.error)&&Date.now()+(i+1)*200-r<Vr)}catch(r){if(this._debug(n,"error",r),z(r))return{data:{session:null,user:null},error:r};throw r}finally{this._debug(n,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,n){const r=await this._getUrlForProvider(t,{redirectTo:n.redirectTo,scopes:n.scopes,queryParams:n.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",n,"url",r),Ct()&&!n.skipBrowserRedirect&&window.location.assign(r),{data:{provider:t,url:r},error:null}}async _recoverAndRefresh(){var t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const r=await hs(this.storage,this.storageKey);if(this._debug(n,"session from storage",r),!this._isValidSession(r)){this._debug(n,"session is not valid"),r!==null&&await this._removeSession();return}const i=Math.round(Date.now()/1e3),s=((t=r.expires_at)!==null&&t!==void 0?t:1/0)<i+wf;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${wf}s`),s){if(this.autoRefreshToken&&r.refresh_token){const{error:o}=await this._callRefreshToken(r.refresh_token);o&&(console.error(o),yf(o)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",o),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(n,"error",r),console.error(r);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var n,r;if(!t)throw new Vn;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const i=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(i,"begin");try{this.refreshingDeferred=new oa;const{data:s,error:o}=await this._refreshAccessToken(t);if(o)throw o;if(!s.session)throw new Vn;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const a={session:s.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(s){if(this._debug(i,"error",s),z(s)){const o={session:null,error:s};return(n=this.refreshingDeferred)===null||n===void 0||n.resolve(o),o}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(s),s}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(t,n,r=!0){const i=`#_notifyAllSubscribers(${t})`;this._debug(i,"begin",n,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:t,session:n});const s=[],o=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(t,n)}catch(l){s.push(l)}});if(await Promise.all(o),s.length>0){for(let a=0;a<s.length;a+=1)console.error(s[a]);throw s[0]}}finally{this._debug(i,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),await this._persistSession(t)}_persistSession(t){return this._debug("#_persistSession()",t),vn(this.storage,this.storageKey,t)}async _removeSession(){this._debug("#_removeSession()"),await Ka(this.storage,this.storageKey)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&Ct()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(n){console.error("removing visibilitychange callback failed",n)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Vr);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async n=>{const{data:{session:r}}=n;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((r.expires_at*1e3-t)/Vr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${Vr}ms, refresh threshold is ${Sf} ticks`),i<=Sf&&await this._callRefreshToken(r.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof lS)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Ct()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const n=`#_onVisibilityChanged(${t})`;this._debug(n,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(n,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,n){const r=[`provider=${encodeURIComponent(t)}`];if(n!=null&&n.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const i=Un();await vn(this.storage,`${this.storageKey}-code-verifier`,i);const s=await Bn(i),o=i===s?"plain":"s256";this._debug("PKCE","code verifier",`${i.substring(0,5)}...`,"code challenge",s,"method",o);const a=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(o)}`});r.push(a.toString())}if(n!=null&&n.queryParams){const i=new URLSearchParams(n.queryParams);r.push(i.toString())}return`${this.url}/authorize?${r.join("&")}`}async _unenroll(t){try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;return s?{data:null,error:s}:await F(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(z(n))return{data:null,error:n};throw n}}async _enroll(t){try{return await this._useSession(async n=>{var r,i;const{data:s,error:o}=n;if(o)return{data:null,error:o};const{data:a,error:l}=await F(this.fetch,"POST",`${this.url}/factors`,{body:{friendly_name:t.friendlyName,factor_type:t.factorType,issuer:t.issuer},headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});return l?{data:null,error:l}:(!((i=a==null?void 0:a.totp)===null||i===void 0)&&i.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),{data:a,error:null})})}catch(n){if(z(n))return{data:null,error:n};throw n}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;if(s)return{data:null,error:s};const{data:o,error:a}=await F(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),{data:o,error:a})})}catch(n){if(z(n))return{data:null,error:n};throw n}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;return s?{data:null,error:s}:await F(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(z(n))return{data:null,error:n};throw n}})}async _challengeAndVerify(t){const{data:n,error:r}=await this._challenge({factorId:t.factorId});return r?{data:null,error:r}:await this._verify({factorId:t.factorId,challengeId:n.id,code:t.code})}async _listFactors(){const{data:{user:t},error:n}=await this.getUser();if(n)return{data:null,error:n};const r=(t==null?void 0:t.factors)||[],i=r.filter(s=>s.factor_type==="totp"&&s.status==="verified");return{data:{all:r,totp:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var n,r;const{data:{session:i},error:s}=t;if(s)return{data:null,error:s};if(!i)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const o=this._decodeJWT(i.access_token);let a=null;o.aal&&(a=o.aal);let l=a;((r=(n=i.user.factors)===null||n===void 0?void 0:n.filter(d=>d.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(l="aal2");const c=o.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:c},error:null}}))}}Ri.nextInstanceID=0;class dS extends Ri{constructor(t){super(t)}}var fS=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const hS={headers:T_},pS={schema:"public"},mS={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},gS={};class yS{constructor(t,n,r){var i,s,o,a,l,u,c,d;if(this.supabaseUrl=t,this.supabaseKey=n,!t)throw new Error("supabaseUrl is required.");if(!n)throw new Error("supabaseKey is required.");const h=L_(t);this.realtimeUrl=`${h}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${h}/auth/v1`,this.storageUrl=`${h}/storage/v1`,this.functionsUrl=`${h}/functions/v1`;const g=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,v={db:pS,realtime:gS,auth:Object.assign(Object.assign({},mS),{storageKey:g}),global:hS},y=N_(r??{},v);this.storageKey=(s=(i=y.auth)===null||i===void 0?void 0:i.storageKey)!==null&&s!==void 0?s:"",this.headers=(a=(o=y.global)===null||o===void 0?void 0:o.headers)!==null&&a!==void 0?a:{},this.auth=this._initSupabaseAuthClient((l=y.auth)!==null&&l!==void 0?l:{},this.headers,(u=y.global)===null||u===void 0?void 0:u.fetch),this.fetch=R_(n,this._getAccessToken.bind(this),(c=y.global)===null||c===void 0?void 0:c.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},y.realtime)),this.rest=new xc(`${h}/rest/v1`,{headers:this.headers,schema:(d=y.db)===null||d===void 0?void 0:d.schema,fetch:this.fetch}),this._listenForAuthEvents()}get functions(){return new $w(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new b_(this.storageUrl,this.headers,this.fetch)}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,n={},r){return this.rest.rpc(t,n,r)}channel(t,n={config:{}}){return this.realtime.channel(t,n)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,n;return fS(this,void 0,void 0,function*(){const{data:r}=yield this.auth.getSession();return(n=(t=r.session)===null||t===void 0?void 0:t.access_token)!==null&&n!==void 0?n:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:i,storageKey:s,flowType:o,debug:a},l,u){const c={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new dS({url:this.authUrl,headers:Object.assign(Object.assign({},c),l),storageKey:s,autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:i,flowType:o,debug:a,fetch:u})}_initRealtimeClient(t){return new m_(this.realtimeUrl,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,r)=>{this._handleTokenChanged(n,"CLIENT",r==null?void 0:r.access_token)})}_handleTokenChanged(t,n,r){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==r?(this.realtime.setAuth(r??null),this.changedAccessToken=r):t==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const vS=(e,t,n)=>new yS(e,t,n),gs=vS("https://yfaqmlswjffrcahnqlms.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmYXFtbHN3amZmcmNhaG5xbG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMzI3OTcsImV4cCI6MjAxNjYwODc5N30.vgsBnGcwNHuMGzYW7qsUDc5b4OuWLbs2Osm_t7KlxJY"),V0={homeBlurb:null,projects:[],experiences:[]},aa=P.createContext(V0),wS=()=>{const[e,t]=P.useState(V0);return P.useEffect(()=>{(async()=>{var d,h;const r=gs.from("home").select().order("created_at",{ascending:!0}),i=gs.from("project").select().order("created_at",{ascending:!1}),s=gs.from("experience").select().order("created_at",{ascending:!1}),o=gs.from("position").select().order("created_at",{ascending:!1}),[a,l,u,c]=await Promise.all([r,i,s,o]);t({homeBlurb:_S(a.data),projects:((d=l.data)==null?void 0:d.map(g=>({type:"PROJECT",...g,name:g.name.toLowerCase()})))||[],experiences:((h=u.data)==null?void 0:h.map(g=>{var v;return{type:"EXPERIENCE",positions:((v=c.data)==null?void 0:v.filter(({experience_id:y})=>g.id===y).map(y=>({...y,title:y.title.toLowerCase()})))||[],...g,place_of_work:g.place_of_work.toLowerCase()}}))||[]})})()},[]),e},_S=e=>{if(e===null)return null;const t=e.filter(({type:i})=>i==="paragraph"),n=e.filter(({type:i})=>i==="substitution"),r=t.map(({paragraph:i})=>$.jsx($.Fragment,{children:n.reduce((s,{substitute_text:o,substitute_link:a})=>s.flatMap(l=>{if(typeof l!="string"||!l.includes(o))return l;const[u,c]=l.split(o);return[u,$.jsx(Mi,{href:a,target:"_blank",$inline:!0,children:o}),c]}),[i])}));return $.jsx($.Fragment,{children:r.map((i,s)=>s===r.length-1?i:$.jsxs($.Fragment,{children:[i,$.jsx("br",{}),$.jsx("br",{})]}))})},SS=L(ia)`
  width: 30%;
`,kS=L(ia)`
  width: 65%;
`,xS=L.img`
  ${e=>e.theme.defaultProps};
  align-self: center;
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  border-color: ${e=>e.theme.accent};
  margin-bottom: 1rem;
  height: auto;
  max-width: 75%;
  transition-property: border-color;
`,ES=L.p`
  align-self: center;
  font-family: ${e=>e.theme.bodyFont};
  color: ${e=>e.theme.text2};
  width: 85%;
`,$S=L.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  flex: auto;
  flex-basis: content;
  padding: calc(10vh-2rem) 0 2rem;
  align-items: flex-start;
  justify-content: space-between;
`,CS=L.div`
  align-self: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`,bS=[{link:"mailto:dilloncscott1@gmail.com",icon:$.jsx($y,{}),text:"dilloncscott1@gmail.com"},{link:"https://linkedin.com/in/dillon-scott",icon:$.jsx(Cy,{}),text:"linkedin.com/in/dillon-scott"},{link:"https://github.com/dillydally414",icon:$.jsx(o0,{}),text:"github.com/dillydally414"}],PS=()=>{const{homeBlurb:e}=P.useContext(aa);return $.jsxs($S,{children:[$.jsxs(SS,{children:[$.jsx(xS,{src:by,alt:"A picture of me!",width:"100%"}),$.jsx(_c,{$align:"center",children:"drop a line"}),$.jsx(CS,{children:bS.map(t=>$.jsxs(Mi,{href:t.link,target:"_blank",children:[t.icon,$.jsx(tu,{children:t.text})]},t.text))})]}),$.jsx(kS,{children:$.jsxs(vc,{direction:"up",cascade:!0,triggerOnce:!0,children:[$.jsx(wc,{text:"dillon c scott"}),e&&$.jsx(ES,{children:e})]})})]})},TS=e=>P.createElement("svg",{id:"mouse_click","data-name":"mouse click",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 109.21 122.88",...e},P.createElement("path",{d:"M86,122.31a5.57,5.57,0,0,1-.9.35,5.09,5.09,0,0,1-1,.18,5.46,5.46,0,0,1-1,0,6.77,6.77,0,0,1-1-.15,6,6,0,0,1-1-.36l0,0a5.51,5.51,0,0,1-.92-.53l0,0a6.41,6.41,0,0,1-.78-.69,5.19,5.19,0,0,1-.65-.87l-9.08-14.88-7.69,9a15.49,15.49,0,0,1-1.1,1.18c-.39.37-.78.71-1.18,1l-.08.06a12.19,12.19,0,0,1-1.2.82,9.66,9.66,0,0,1-1.24.63,6.91,6.91,0,0,1-1,.37,6.21,6.21,0,0,1-1,.22,7.55,7.55,0,0,1-1.06.07,7.19,7.19,0,0,1-1-.11,6.14,6.14,0,0,1-1.18-.35,5.42,5.42,0,0,1-1.06-.57,6.22,6.22,0,0,1-.92-.78l0,0a7.31,7.31,0,0,1-.75-1l-.11-.2-.09-.21L47.72,112l0-.17L40.91,43.26a4.52,4.52,0,0,1,0-1.33,4.3,4.3,0,0,1,.43-1.25,4.31,4.31,0,0,1,1.39-1.55l0,0a3.82,3.82,0,0,1,.9-.46,4.25,4.25,0,0,1,1-.24h0a4.31,4.31,0,0,1,1.29.05,4.67,4.67,0,0,1,1.25.44l.3.16c13.51,8.84,26.1,17.06,38.64,25.25l19,12.39a11.72,11.72,0,0,1,1,.72l0,0a8.78,8.78,0,0,1,.82.73l.06.07a7.41,7.41,0,0,1,.71.82,5.91,5.91,0,0,1,.57.87,6.42,6.42,0,0,1,.51,1.14,5.6,5.6,0,0,1,.26,1.17,5.44,5.44,0,0,1,0,1.21h0a6.59,6.59,0,0,1-.23,1.19,6.54,6.54,0,0,1-.94,1.88,6.41,6.41,0,0,1-.67.83,7.45,7.45,0,0,1-.82.76,10.42,10.42,0,0,1-1.16.83,12.92,12.92,0,0,1-1.34.7c-.47.21-1,.41-1.46.58a14.27,14.27,0,0,1-1.55.43h0c-2.77.54-5.53,1.21-8.27,1.87l-3.25.77,9,14.94a5.84,5.84,0,0,1,.46,1,5.59,5.59,0,0,1,.15,3.21l0,.1a5.53,5.53,0,0,1-.33.94,6.43,6.43,0,0,1-.51.89,5.62,5.62,0,0,1-.68.81,6,6,0,0,1-.82.67l-2,1.29A83,83,0,0,1,86,122.31ZM37.63,19.46a4,4,0,0,1-6.92,4l-8-14a4,4,0,0,1,6.91-4l8.06,14Zm-15,46.77a4,4,0,0,1,4,6.91l-14,8.06a4,4,0,0,1-4-6.91l14-8.06ZM20.56,39.84a4,4,0,0,1-2.07,7.72L3,43.36A4,4,0,0,1,5,35.64l15.53,4.2ZM82,41.17a4,4,0,0,1-4-6.91L92,26.2a4,4,0,0,1,4,6.91L82,41.17ZM63.46,20.57a4,4,0,1,1-7.71-2.06L59.87,3A4,4,0,0,1,67.59,5L63.46,20.57Zm20.17,96.36,9.67-5.86c-3.38-5.62-8.85-13.55-11.51-19.17a2.17,2.17,0,0,1-.12-.36,2.4,2.4,0,0,1,1.81-2.87c5.38-1.23,10.88-2.39,16.22-3.73a10.28,10.28,0,0,0,1.8-.58,6.11,6.11,0,0,0,1.3-.77,3.38,3.38,0,0,0,.38-.38.9.9,0,0,0,.14-.24l-.06-.18a2.15,2.15,0,0,0-.44-.53,5.75,5.75,0,0,0-.83-.63L47.06,45.75c2.11,21.36,5.2,44.1,6.45,65.31a6.28,6.28,0,0,0,.18,1,2.89,2.89,0,0,0,.26.62l.13.14a1,1,0,0,0,.29,0,2.76,2.76,0,0,0,.51-.17,5.71,5.71,0,0,0,1.28-.79,11.22,11.22,0,0,0,1.35-1.33c1.93-2.27,9.6-12.14,11.4-13.18a2.4,2.4,0,0,1,3.28.82l11.44,18.75Z"})),kf=({start:e,end:t})=>`${e.toLowerCase()}${t?t!==e?" - "+t.toLowerCase():"":" - current"}`,H0=({info:e,passRef:t})=>{const n=P.useRef(null);return P.useEffect(()=>{n!==null&&t(n)},[n]),$.jsx($.Fragment,{children:$.jsxs(gw,{children:[$.jsx(_c,{$align:"flex-start",$underline:e.id===1,ref:n,children:e.type==="PROJECT"?e.name:e.place_of_work}),e.type==="PROJECT"?$.jsxs($.Fragment,{children:[$.jsx(sf,{children:$.jsx(Ba,{children:kf(e)})}),$.jsx(fs,{children:e.description})]}):e.positions.map(r=>$.jsxs(Ie.Fragment,{children:[$.jsxs(sf,{children:[$.jsx(Ba,{children:r.title}),$.jsx(Ba,{children:kf(r)})]}),$.jsx(fs,{children:r.description})]},`${e.place_of_work} ${r.title} ${r.start}`)),$.jsx(fs,{children:e.type==="PROJECT"?e.tech_used:e.relevant_tech}),e.type==="PROJECT"&&$.jsxs(yw,{children:[e.github_link?$.jsxs(rf,{href:e.github_link,target:"_blank",children:[$.jsx(o0,{}),$.jsx(tu,{children:"See the code"})]}):$.jsx(fs,{children:"Available upon request"}),e.visual_link&&$.jsxs(rf,{href:e.visual_link,target:"_blank",children:[$.jsx(TS,{height:"24"}),$.jsx(tu,{children:"See it in action"})]})]})]})})},OS=L.div`
  align-items: center;
  display: flex;
  flex: 0 1 fit-content;
  flex-direction: row;
  justify-content: center;
  margin-right: 1rem;
  height: 100%;
  max-height: 100%;
  position: sticky;
  top: 0;
`,jS=L.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  width: 1rem;
  min-width: 1rem;
  height: 100%;
  max-height: 100%;
`,IS=L.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  justify-content: start;
  height: 100%;
  object-fit: contain;
`,RS=L(Mi)`
  ${e=>e.theme.defaultProps}
  background-color: ${e=>e.$active?e.theme.accent:e.theme.accent2};

  flex-direction: column;
  width: 100%;
  height: 100%;
  border: unset;
  padding: unset;
  margin: 1px;
  border-radius: 5px;
  transition-property: background-color;
  justify-content: center;

  &:after {
    ${e=>e.theme.defaultProps};
    background-color: ${e=>e.$active?e.theme.accent:e.theme.accent2};
    color: ${e=>e.theme.background};
    content: "${e=>e.$name}";
    align-self: baseline;
    position: relative;
    border-radius: 5px;
    left: 150%;
    text-align: start;
    opacity: 0;
    transition-property: opacity;
    max-width: 0;
    overflow: hidden;
    z-index: 10;
  }

  &:hover {
    text-decoration: none;
    &:after {
      content: "${e=>e.$name}";
      opacity: 1;
      max-width: 5.5rem;
      overflow-wrap: break-word;
      width: max-content;
      padding: 0.25rem;
    }
  }
`,LS=L.div`
  display: flex;
  flex-direction: column;
  width: 4rem;
`,NS=L.img`
  align-self: start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  height: fit-content;
  max-width: 4rem;
  object-fit: contain;
  position: absolute;
  ${e=>e.theme.defaultProps};
  opacity: ${e=>e.$selected?"100%":"50%"};
  transition-property: opacity;
`,AS=(e,t,n)=>{const[r,i]=P.useState(0),[s,o]=P.useState(e.map(g=>!1)),[a,l]=P.useState(!1),u=wy();P.useEffect(()=>{n&&n.parentElement&&(n.parentElement.scrollTop=0)},[n]);const c=g=>{var y,S;if(!t[g])return;const v=t[g].offsetTop-.5*(t[g].parentElement.offsetHeight-t[g].offsetHeight);(S=(y=t[g])==null?void 0:y.parentElement)==null||S.scrollTo({behavior:"smooth",top:v})},d=g=>{var y,S,p,f,m,w,k;if(!e[g])return;const v=e[g].parentElement.parentElement.offsetTop-((y=n.parentElement)==null?void 0:y.offsetTop)-.3*n.parentElement.offsetHeight;(S=n==null?void 0:n.parentElement)==null||S.scrollTo({behavior:"smooth",top:v}),((m=(f=(p=e[g])==null?void 0:p.parentElement)==null?void 0:f.parentElement)==null?void 0:m.offsetTop)===((w=n==null?void 0:n.parentElement)==null?void 0:w.offsetTop)&&l(!1),(k=n==null?void 0:n.parentElement)==null||k.addEventListener("scrollend",()=>l(!1),{once:!0})},h=g=>{l(!0),c(g),d(g),i(g)};return P.useEffect(()=>{var g;(g=e[r])==null||g.attributeStyleMap.set("text-decoration-color",u.accent),e.map((v,y)=>y!==r&&(v==null?void 0:v.attributeStyleMap.set("text-decoration-color",u.accent2)))},[u,e,r]),P.useEffect(()=>{var g;if(n&&n.parentElement!==null&&e.length>0&&e.every(v=>v!==null)){const v=n.parentElement,y=()=>o(S=>{const p=v.scrollTop<=5,f=Math.abs(v.scrollTop+v.offsetHeight-v.scrollHeight)<=5;return[p,...S.slice(1,-1),f]});return(g=n==null?void 0:n.parentElement)==null||g.addEventListener("scroll",y),()=>{var S;return(S=n==null?void 0:n.parentElement)==null?void 0:S.removeEventListener("scroll",y)}}},[n,e,o]),P.useEffect(()=>{if(!a){let g;s[r]||(g=s[r+1]?s.indexOf(!0):s.lastIndexOf(!0)),s[0]&&(g=0),s[s.length-1]&&(g=s.length-1),g!==void 0&&(c(g),i(g))}},[i,c,r,s]),P.useEffect(()=>{const g=new IntersectionObserver(v=>o(y=>{const S=[...y];return v.map(p=>{const f=e.findIndex(w=>(w==null?void 0:w.parentElement)===p.target);f!==-1&&(S[f]=p.isIntersecting);const m=n==null?void 0:n.parentElement;if(m){const w=m.scrollTop<=5,k=Math.abs(m.scrollTop+m.offsetHeight-m.scrollHeight)<=5;S[0]=w,S[S.length-1]=k}}),S}),{rootMargin:"-300px 0px"});return e.map(v=>(v==null?void 0:v.parentElement)&&g.observe(v.parentElement)),()=>g.disconnect()},[e,n,i,o]),[r,h]},W0=({elements:e,scrollRefs:t,containerRef:n})=>{const r=P.useRef([]).current,[i,s]=AS(t,r,n);return $.jsxs(OS,{children:[$.jsx(jS,{children:$.jsx(IS,{children:e.map((o,a)=>$.jsx(RS,{onClick:()=>{s(a)},"aria-label":`scroll to ${o.type==="PROJECT"?o.name:o.place_of_work}`,$active:a===i,$name:o.type==="PROJECT"?o.name:o.place_of_work,as:"button",ref:l=>r[a]=l}))})}),$.jsx(LS,{children:e.map((o,a)=>{var l,u,c,d;return $.jsx(NS,{$selected:a===i,src:e[a].image_url,alt:e[a].alt_text,style:{top:(((c=(u=(l=t[a])==null?void 0:l.parentElement)==null?void 0:u.parentElement)==null?void 0:c.offsetTop)||0)-(((d=n==null?void 0:n.parentElement)==null?void 0:d.scrollTop)||0)-((n==null?void 0:n.offsetTop)||0)}})})})]})},zS=()=>{const{experiences:e}=P.useContext(aa),t=P.useRef([]).current,[n,r]=P.useState(null);return $.jsxs($.Fragment,{children:[$.jsx(W0,{elements:e,scrollRefs:t,containerRef:n}),$.jsx(ia,{ref:r,children:$.jsx(vc,{direction:"up",cascade:!0,triggerOnce:!0,damping:.05,children:e.map((i,s)=>$.jsx(H0,{info:i,passRef:o=>t[s]=o.current},`${i.id} ${i.place_of_work}`))})})]})},DS=()=>{const{projects:e}=P.useContext(aa),t=P.useRef([]).current,[n,r]=P.useState(null);return $.jsxs($.Fragment,{children:[$.jsx(W0,{elements:e,scrollRefs:t,containerRef:n}),$.jsx(ia,{ref:r,children:$.jsx(vc,{direction:"up",cascade:!0,triggerOnce:!0,damping:.05,children:e.map((i,s)=>$.jsx(H0,{info:i,passRef:o=>t[s]=o.current},`${i.name} ${i.id}`))})})]})},FS=e=>P.createElement("svg",{width:72,height:72,viewBox:"0 0 72 72",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("path",{d:"M8 0C3.62775 0 0 3.62775 0 8V64C0 68.3723 3.62775 72 8 72H64C68.3723 72 72 68.3723 72 64V36H64V64H8V8H36V0H8ZM44 0V8H58.3438L21.1719 45.1719L26.8281 50.8281L64 13.6562V28H72V0H44Z"})),xf="https://yfaqmlswjffrcahnqlms.supabase.co/storage/v1/object/public/assets/cv.pdf",MS=L(Mi)`
  align-items: flex-end;
  height: 2.5rem;
  justify-content: center;
  width: fit-content;

  svg {
    align-self: flex-end;
    fill: ${e=>e.theme.text};
    height: 1.5rem;
    width: fit-content;
    aspect-ratio: 1;
  }

  :hover {
    color: ${e=>e.theme.accent};
    svg {
      fill: ${e=>e.theme.accent};
    }
  }
`,US=L.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`,BS=L.iframe`
  border-color: transparent;
  margin: 1rem 0;
`,VS=()=>$.jsxs(US,{children:[$.jsxs(MS,{href:xf,target:"_blank",children:[$.jsx(FS,{height:"100%"}),$.jsx(_c,{$align:"center",children:"open in new tab"})]}),$.jsx(BS,{src:xf,width:"650rem",height:"900rem",title:"Dillon Scott CV",allowFullScreen:!0})]}),Ef=[{title:"home",element:$.jsx(PS,{})},{title:"experience",element:$.jsx(zS,{})},{title:"projects",element:$.jsx(DS,{})},{title:"cv",element:$.jsx(VS,{})}],G0={defaultProps:Lo`
    transition-duration: 0.5s;
  `,titleFont:"DM Sans",bodyFont:"Gothic A1"},K0={background:"#232244",text:"#FFFFFF",text2:"#F4D6CC",accent:"#FFC933",accent2:"#A6E1FA",...G0},HS={background:"#FCF0EE",text:K0.background,text2:"#542111",accent:"#DA1643",accent2:"#5465FF",...G0},WS=L.main`
  ${e=>e.theme.defaultProps}

  align-items: flex-start;
  background-color: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  display: flex;
  flex-direction: row;
  height: calc(92vh - 5rem);
  width: calc(100% - 2 * min(5rem, 5%));
  overflow: scroll;
  padding: 2rem min(5rem, 5%) 3rem;
  z-index: 1;
`,GS=L.span`
  ${e=>e.theme.defaultProps}

  align-self: center;
  background-color: inherit;
  border: inherit;
  display: flex;
  flex: auto;
  flex-basis: content;

  &:before {
    align-self: center;
    width: 1rem;
    height: 1rem;
    background-color: ${e=>e.theme.accent};
    content: "";
    -webkit-mask: url(/star.svg) no-repeat 50% 50%;
    mask: url(/star.svg) no-repeat 50% 50%;
    -webkit-mask-size: ${e=>e.$active?"100%":"0%"};
    mask-size: ${e=>e.$active?"100%":"0%"};
    transition-property: background-color, -webkit-mask-size, mask-size;
    ${e=>e.theme.defaultProps}
  }
`,KS=L.button`
  ${e=>e.theme.defaultProps}

  align-self: center;
  background-color: inherit;
  border: inherit;
  color: ${e=>e.$active?e.theme.accent:e.theme.accent2};
  cursor: pointer;
  display: inline-block;
  font-family: ${e=>e.theme.titleFont};
  font-weight: ${e=>e.$active?600:200};
  font-size: 1.5rem;
  transition-property: color, font-weight;

  &:hover {
    color: ${e=>e.theme.accent};
  }

  &:before {
    display: block;
    content: "${e=>e.$title}";
    font-weight: 600;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`,YS=L.div`
  display: flex;
  justify-content: flex-start;
  flex: auto;
  max-width: 40rem;
  min-width: fit-content;
`,QS=L.header`
  ${e=>e.theme.defaultProps}

  align-items: center;
  background-color: ${e=>e.theme.background};
  box-shadow: 0 1rem 1rem 0.5rem ${e=>e.theme.background};
  display: flex;
  flex-direction: row;
  height: calc(8vh - 2rem);
  justify-content: space-between;
  padding: 1rem min(5rem, 5%);
  position: sticky;
  top: 0;
  z-index: 1;
`,JS=L.label`
  ${e=>e.theme.defaultProps}

  display: flex;
  cursor: pointer;
  padding-left: ${e=>e.$checked?"2rem":"0"};
  height: 2rem;
  width: 4rem;
  background-color: ${e=>e.theme.background};
  background: url("/sun.svg") 2.25rem center, url("/moon.svg") 0.25rem center;
  background-repeat: no-repeat;
  background-origin: padding-box;
  border-color: ${e=>e.theme.accent};
  border-width: 0.125rem;
  border-style: solid;
  border-radius: 1rem;
  transition-property: border-color, background-color, padding-left;
  box-sizing: border-box;
`,qS=L.button`
  ${e=>e.theme.defaultProps}

  display: flex;
  align-self: center;
  background-color: ${e=>e.theme.accent};
  border-radius: 1rem;
  border-width: 0;
  height: 105%;
  aspect-ratio: 1/1;
  transition-property: background-color;
`,XS=xy`
  html {
    background-color: ${e=>e.theme.accent2};
  }

  body {
    overscroll-behavior-x: none;
    margin: 0;
    min-height: 100vh;
    width: 100vw;
  }
`,ZS=()=>{var s;const[e,t]=P.useState("home"),[n,r]=P.useState(window.matchMedia("(prefers-color-scheme: dark)").matches),i=wS();return $.jsxs(_y,{theme:n?K0:HS,children:[$.jsx(XS,{}),$.jsxs(QS,{children:[$.jsx(YS,{children:Ef.map(({title:o,element:a},l)=>$.jsx(GS,{$active:o===e,children:$.jsx(KS,{onClick:()=>t(o),$title:o,$active:o===e,children:o})},o))}),$.jsx(JS,{$checked:n,"aria-label":`Turn ${n?"off":"on"} dark mode`,id:"theme-label",children:$.jsx(qS,{onClick:()=>r(o=>!o),"aria-labelledby":"theme-label"})})]}),$.jsx(aa.Provider,{value:i,children:$.jsx(WS,{children:(s=Ef.find(({title:o})=>o===e))==null?void 0:s.element})})]})};Qa.createRoot(document.getElementById("root")).render($.jsx(Ie.StrictMode,{children:$.jsx(ZS,{})}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}