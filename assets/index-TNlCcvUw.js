function q0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function X0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bf={exports:{}},go={},Pf={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zi=Symbol.for("react.element"),Z0=Symbol.for("react.portal"),em=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),im=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),om=Symbol.for("react.suspense"),am=Symbol.for("react.memo"),lm=Symbol.for("react.lazy"),jc=Symbol.iterator;function um(e){return e===null||typeof e!="object"?null:(e=jc&&e[jc]||e["@@iterator"],typeof e=="function"?e:null)}var Tf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jf=Object.assign,Of={};function Pr(e,t,n){this.props=e,this.context=t,this.refs=Of,this.updater=n||Tf}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function If(){}If.prototype=Pr.prototype;function uu(e,t,n){this.props=e,this.context=t,this.refs=Of,this.updater=n||Tf}var cu=uu.prototype=new If;cu.constructor=uu;jf(cu,Pr.prototype);cu.isPureReactComponent=!0;var Oc=Array.isArray,Rf=Object.prototype.hasOwnProperty,du={current:null},Af={key:!0,ref:!0,__self:!0,__source:!0};function Lf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Rf.call(t,r)&&!Af.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zi,type:e,key:s,ref:o,props:i,_owner:du.current}}function cm(e,t){return{$$typeof:zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===zi}function dm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ic=/\/+/g;function fa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dm(""+e.key):t.toString(36)}function _s(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case zi:case Z0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+fa(o,0):r,Oc(i)?(n="",e!=null&&(n=e.replace(Ic,"$&/")+"/"),_s(i,t,n,"",function(u){return u})):i!=null&&(fu(i)&&(i=cm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ic,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Oc(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+fa(s,a);o+=_s(s,t,n,l,i)}else if(l=um(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+fa(s,a++),o+=_s(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yi(e,t,n){if(e==null)return e;var r=[],i=0;return _s(e,r,"","",function(s){return t.call(n,s,i++)}),r}function fm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Ss={transition:null},hm={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Ss,ReactCurrentOwner:du};N.Children={map:Yi,forEach:function(e,t,n){Yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yi(e,function(){t++}),t},toArray:function(e){return Yi(e,function(t){return t})||[]},only:function(e){if(!fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=Pr;N.Fragment=em;N.Profiler=nm;N.PureComponent=uu;N.StrictMode=tm;N.Suspense=om;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hm;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=du.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Rf.call(t,l)&&!Af.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zi,type:e.type,key:i,ref:s,props:r,_owner:o}};N.createContext=function(e){return e={$$typeof:im,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rm,_context:e},e.Consumer=e};N.createElement=Lf;N.createFactory=function(e){var t=Lf.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:sm,render:e}};N.isValidElement=fu;N.lazy=function(e){return{$$typeof:lm,_payload:{_status:-1,_result:e},_init:fm}};N.memo=function(e,t){return{$$typeof:am,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=Ss.transition;Ss.transition={};try{e()}finally{Ss.transition=t}};N.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};N.useCallback=function(e,t){return je.current.useCallback(e,t)};N.useContext=function(e){return je.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return je.current.useDeferredValue(e)};N.useEffect=function(e,t){return je.current.useEffect(e,t)};N.useId=function(){return je.current.useId()};N.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return je.current.useMemo(e,t)};N.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};N.useRef=function(e){return je.current.useRef(e)};N.useState=function(e){return je.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return je.current.useTransition()};N.version="18.2.0";Pf.exports=N;var b=Pf.exports;const Re=X0(b),Rc=q0({__proto__:null,default:Re},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=b,mm=Symbol.for("react.element"),gm=Symbol.for("react.fragment"),ym=Object.prototype.hasOwnProperty,vm=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wm={key:!0,ref:!0,__self:!0,__source:!0};function Nf(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ym.call(t,r)&&!wm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:mm,type:e,key:s,ref:o,props:i,_owner:vm.current}}go.Fragment=gm;go.jsx=Nf;go.jsxs=Nf;bf.exports=go;var _=bf.exports,qa={},zf={exports:{}},Ke={},Df={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,O){var I=P.length;P.push(O);e:for(;0<I;){var B=I-1>>>1,ie=P[B];if(0<i(ie,O))P[B]=O,P[I]=ie,I=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var O=P[0],I=P.pop();if(I!==O){P[0]=I;e:for(var B=0,ie=P.length,Mt=ie>>>1;B<Mt;){var Qe=2*(B+1)-1,bt=P[Qe],qe=Qe+1,yt=P[qe];if(0>i(bt,I))qe<ie&&0>i(yt,bt)?(P[B]=yt,P[qe]=I,B=qe):(P[B]=bt,P[Qe]=I,B=Qe);else if(qe<ie&&0>i(yt,I))P[B]=yt,P[qe]=I,B=qe;else break e}}return O}function i(P,O){var I=P.sortIndex-O.sortIndex;return I!==0?I:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=P)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function w(P){if(y=!1,g(P),!v)if(n(l)!==null)v=!0,Nr(x);else{var O=n(u);O!==null&&yn(w,O.startTime-P)}}function x(P,O){v=!1,y&&(y=!1,p(j),j=-1),m=!0;var I=h;try{for(g(O),d=n(l);d!==null&&(!(d.expirationTime>O)||P&&!Fe());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var ie=B(d.expirationTime<=O);O=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&r(l),g(O)}else r(l);d=n(l)}if(d!==null)var Mt=!0;else{var Qe=n(u);Qe!==null&&yn(w,Qe.startTime-O),Mt=!1}return Mt}finally{d=null,h=I,m=!1}}var E=!1,k=null,j=-1,K=5,L=-1;function Fe(){return!(e.unstable_now()-L<K)}function mn(){if(k!==null){var P=e.unstable_now();L=P;var O=!0;try{O=k(!0,P)}finally{O?gn():(E=!1,k=null)}}else E=!1}var gn;if(typeof f=="function")gn=function(){f(mn)};else if(typeof MessageChannel<"u"){var Gi=new MessageChannel,ca=Gi.port2;Gi.port1.onmessage=mn,gn=function(){ca.postMessage(null)}}else gn=function(){S(mn,0)};function Nr(P){k=P,E||(E=!0,gn())}function yn(P,O){j=S(function(){P(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Nr(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var I=h;h=O;try{return P()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var I=h;h=P;try{return O()}finally{h=I}},e.unstable_scheduleCallback=function(P,O,I){var B=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?B+I:B):I=B,P){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=I+ie,P={id:c++,callback:O,priorityLevel:P,startTime:I,expirationTime:ie,sortIndex:-1},I>B?(P.sortIndex=I,t(u,P),n(l)===null&&P===n(u)&&(y?(p(j),j=-1):y=!0,yn(w,I-B))):(P.sortIndex=ie,t(l,P),v||m||(v=!0,Nr(x))),P},e.unstable_shouldYield=Fe,e.unstable_wrapCallback=function(P){var O=h;return function(){var I=h;h=O;try{return P.apply(this,arguments)}finally{h=I}}}})(Ff);Df.exports=Ff;var _m=Df.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=b,Ge=_m;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uf=new Set,hi={};function Dn(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(hi[e]=t,e=0;e<t.length;e++)Uf.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=Object.prototype.hasOwnProperty,Sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ac={},Lc={};function km(e){return Xa.call(Lc,e)?!0:Xa.call(Ac,e)?!1:Sm.test(e)?Lc[e]=!0:(Ac[e]=!0,!1)}function xm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Em(e,t,n,r){if(t===null||typeof t>"u"||xm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var hu=/[\-:]([a-z])/g;function pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hu,pu);Se[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hu,pu);Se[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hu,pu);Se[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function mu(e,t,n,r){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Em(t,n,i,r)&&(n=null),r||i===null?km(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),gu=Symbol.for("react.strict_mode"),Za=Symbol.for("react.profiler"),Bf=Symbol.for("react.provider"),Vf=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),el=Symbol.for("react.suspense"),tl=Symbol.for("react.suspense_list"),vu=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),Hf=Symbol.for("react.offscreen"),Nc=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Nc&&e[Nc]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,ha;function Kr(e){if(ha===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ha=t&&t[1]||""}return`
`+ha+e}var pa=!1;function ma(e,t){if(!e||pa)return"";pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Kr(e):""}function $m(e){switch(e.tag){case 5:return Kr(e.type);case 16:return Kr("Lazy");case 13:return Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 2:case 15:return e=ma(e.type,!1),e;case 11:return e=ma(e.type.render,!1),e;case 1:return e=ma(e.type,!0),e;default:return""}}function nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Kn:return"Portal";case Za:return"Profiler";case gu:return"StrictMode";case el:return"Suspense";case tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vf:return(e.displayName||"Context")+".Consumer";case Bf:return(e._context.displayName||"Context")+".Provider";case yu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vu:return t=e.displayName||null,t!==null?t:nl(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return nl(e(t))}catch{}}return null}function Cm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nl(t);case 8:return t===gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bm(e){var t=Wf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=bm(e))}function Gf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rl(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kf(e,t){t=t.checked,t!=null&&mu(e,"checked",t,!1)}function il(e,t){Kf(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&sl(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sl(e,t,n){(t!=="number"||Ms(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yr=Array.isArray;function or(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Yr(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function Yf(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,Qf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pm=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){Pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function qf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function Xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Tm=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,t){if(t){if(Tm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cl=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,ar=null,lr=null;function Uc(e){if(e=Mi(e)){if(typeof dl!="function")throw Error($(280));var t=e.stateNode;t&&(t=So(t),dl(e.stateNode,e.type,t))}}function Zf(e){ar?lr?lr.push(e):lr=[e]:ar=e}function eh(){if(ar){var e=ar,t=lr;if(lr=ar=null,Uc(e),t)for(e=0;e<t.length;e++)Uc(t[e])}}function th(e,t){return e(t)}function nh(){}var ga=!1;function rh(e,t,n){if(ga)return e(t,n);ga=!0;try{return th(e,t,n)}finally{ga=!1,(ar!==null||lr!==null)&&(nh(),eh())}}function mi(e,t){var n=e.stateNode;if(n===null)return null;var r=So(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var fl=!1;if(Lt)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){fl=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{fl=!1}function jm(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ti=!1,Us=null,Bs=!1,hl=null,Om={onError:function(e){ti=!0,Us=e}};function Im(e,t,n,r,i,s,o,a,l){ti=!1,Us=null,jm.apply(Om,arguments)}function Rm(e,t,n,r,i,s,o,a,l){if(Im.apply(this,arguments),ti){if(ti){var u=Us;ti=!1,Us=null}else throw Error($(198));Bs||(Bs=!0,hl=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ih(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bc(e){if(Fn(e)!==e)throw Error($(188))}function Am(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bc(i),e;if(s===r)return Bc(i),t;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function sh(e){return e=Am(e),e!==null?oh(e):null}function oh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oh(e);if(t!==null)return t;e=e.sibling}return null}var ah=Ge.unstable_scheduleCallback,Vc=Ge.unstable_cancelCallback,Lm=Ge.unstable_shouldYield,Nm=Ge.unstable_requestPaint,se=Ge.unstable_now,zm=Ge.unstable_getCurrentPriorityLevel,_u=Ge.unstable_ImmediatePriority,lh=Ge.unstable_UserBlockingPriority,Vs=Ge.unstable_NormalPriority,Dm=Ge.unstable_LowPriority,uh=Ge.unstable_IdlePriority,yo=null,Et=null;function Fm(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Bm,Mm=Math.log,Um=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(Mm(e)/Um|0)|0}var Xi=64,Zi=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Jr(a):(s&=o,s!==0&&(r=Jr(s)))}else o=n&~i,o!==0?r=Jr(o):s!==0&&(r=Jr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),i=1<<n,r|=e[n],t&=~i;return r}function Vm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-ht(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Vm(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ch(){var e=Xi;return Xi<<=1,!(Xi&4194240)&&(Xi=64),e}function ya(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function Wm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ht(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function dh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fh,ku,hh,ph,mh,ml=!1,es=[],Zt=null,en=null,tn=null,gi=new Map,yi=new Map,Yt=[],Gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hc(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function Fr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Mi(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Km(e,t,n,r,i){switch(t){case"focusin":return Zt=Fr(Zt,e,t,n,r,i),!0;case"dragenter":return en=Fr(en,e,t,n,r,i),!0;case"mouseover":return tn=Fr(tn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return gi.set(s,Fr(gi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yi.set(s,Fr(yi.get(s)||null,e,t,n,r,i)),!0}return!1}function gh(e){var t=$n(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=ih(n),t!==null){e.blockedOn=t,mh(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cl=r,n.target.dispatchEvent(r),cl=null}else return t=Mi(n),t!==null&&ku(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){ks(e)&&n.delete(t)}function Ym(){ml=!1,Zt!==null&&ks(Zt)&&(Zt=null),en!==null&&ks(en)&&(en=null),tn!==null&&ks(tn)&&(tn=null),gi.forEach(Wc),yi.forEach(Wc)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,ml||(ml=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Ym)))}function vi(e){function t(i){return Mr(i,e)}if(0<es.length){Mr(es[0],e);for(var n=1;n<es.length;n++){var r=es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&Mr(Zt,e),en!==null&&Mr(en,e),tn!==null&&Mr(tn,e),gi.forEach(t),yi.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)gh(n),n.blockedOn===null&&Yt.shift()}var ur=Ft.ReactCurrentBatchConfig,Ws=!0;function Jm(e,t,n,r){var i=H,s=ur.transition;ur.transition=null;try{H=1,xu(e,t,n,r)}finally{H=i,ur.transition=s}}function Qm(e,t,n,r){var i=H,s=ur.transition;ur.transition=null;try{H=4,xu(e,t,n,r)}finally{H=i,ur.transition=s}}function xu(e,t,n,r){if(Ws){var i=gl(e,t,n,r);if(i===null)ba(e,t,r,Gs,n),Hc(e,r);else if(Km(i,e,t,n,r))r.stopPropagation();else if(Hc(e,r),t&4&&-1<Gm.indexOf(e)){for(;i!==null;){var s=Mi(i);if(s!==null&&fh(s),s=gl(e,t,n,r),s===null&&ba(e,t,r,Gs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ba(e,t,r,null,n)}}var Gs=null;function gl(e,t,n,r){if(Gs=null,e=wu(r),e=$n(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ih(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gs=e,null}function yh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zm()){case _u:return 1;case lh:return 4;case Vs:case Dm:return 16;case uh:return 536870912;default:return 16}default:return 16}}var qt=null,Eu=null,xs=null;function vh(){if(xs)return xs;var e,t=Eu,n=t.length,r,i="value"in qt?qt.value:qt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return xs=i.slice(e,1<r?1-r:void 0)}function Es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function Gc(){return!1}function Ye(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ts:Gc,this.isPropagationStopped=Gc,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=Ye(Tr),Fi=ne({},Tr,{view:0,detail:0}),qm=Ye(Fi),va,wa,Ur,vo=ne({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(va=e.screenX-Ur.screenX,wa=e.screenY-Ur.screenY):wa=va=0,Ur=e),va)},movementY:function(e){return"movementY"in e?e.movementY:wa}}),Kc=Ye(vo),Xm=ne({},vo,{dataTransfer:0}),Zm=Ye(Xm),eg=ne({},Fi,{relatedTarget:0}),_a=Ye(eg),tg=ne({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),ng=Ye(tg),rg=ne({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ig=Ye(rg),sg=ne({},Tr,{data:0}),Yc=Ye(sg),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lg[e])?!!t[e]:!1}function Cu(){return ug}var cg=ne({},Fi,{key:function(e){if(e.key){var t=og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ag[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?Es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dg=Ye(cg),fg=ne({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jc=Ye(fg),hg=ne({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),pg=Ye(hg),mg=ne({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),gg=Ye(mg),yg=ne({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=Ye(yg),wg=[9,13,27,32],bu=Lt&&"CompositionEvent"in window,ni=null;Lt&&"documentMode"in document&&(ni=document.documentMode);var _g=Lt&&"TextEvent"in window&&!ni,wh=Lt&&(!bu||ni&&8<ni&&11>=ni),Qc=" ",qc=!1;function _h(e,t){switch(e){case"keyup":return wg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Sg(e,t){switch(e){case"compositionend":return Sh(t);case"keypress":return t.which!==32?null:(qc=!0,Qc);case"textInput":return e=t.data,e===Qc&&qc?null:e;default:return null}}function kg(e,t){if(Jn)return e==="compositionend"||!bu&&_h(e,t)?(e=vh(),xs=Eu=qt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wh&&t.locale!=="ko"?null:t.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xg[e.type]:t==="textarea"}function kh(e,t,n,r){Zf(r),t=Ks(t,"onChange"),0<t.length&&(n=new $u("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ri=null,wi=null;function Eg(e){Rh(e,0)}function wo(e){var t=Xn(e);if(Gf(t))return e}function $g(e,t){if(e==="change")return t}var xh=!1;if(Lt){var Sa;if(Lt){var ka="oninput"in document;if(!ka){var Zc=document.createElement("div");Zc.setAttribute("oninput","return;"),ka=typeof Zc.oninput=="function"}Sa=ka}else Sa=!1;xh=Sa&&(!document.documentMode||9<document.documentMode)}function ed(){ri&&(ri.detachEvent("onpropertychange",Eh),wi=ri=null)}function Eh(e){if(e.propertyName==="value"&&wo(wi)){var t=[];kh(t,wi,e,wu(e)),rh(Eg,t)}}function Cg(e,t,n){e==="focusin"?(ed(),ri=t,wi=n,ri.attachEvent("onpropertychange",Eh)):e==="focusout"&&ed()}function bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(wi)}function Pg(e,t){if(e==="click")return wo(t)}function Tg(e,t){if(e==="input"||e==="change")return wo(t)}function jg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:jg;function _i(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xa.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nd(e,t){var n=td(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=td(n)}}function $h(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$h(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ch(){for(var e=window,t=Ms();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ms(e.document)}return t}function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Og(e){var t=Ch(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$h(n.ownerDocument.documentElement,n)){if(r!==null&&Pu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=nd(n,s);var o=nd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ig=Lt&&"documentMode"in document&&11>=document.documentMode,Qn=null,yl=null,ii=null,vl=!1;function rd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||Qn==null||Qn!==Ms(r)||(r=Qn,"selectionStart"in r&&Pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ii&&_i(ii,r)||(ii=r,r=Ks(yl,"onSelect"),0<r.length&&(t=new $u("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function ns(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionend:ns("Transition","TransitionEnd")},xa={},bh={};Lt&&(bh=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function _o(e){if(xa[e])return xa[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bh)return xa[e]=t[n];return e}var Ph=_o("animationend"),Th=_o("animationiteration"),jh=_o("animationstart"),Oh=_o("transitionend"),Ih=new Map,id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){Ih.set(e,t),Dn(t,[e])}for(var Ea=0;Ea<id.length;Ea++){var $a=id[Ea],Rg=$a.toLowerCase(),Ag=$a[0].toUpperCase()+$a.slice(1);fn(Rg,"on"+Ag)}fn(Ph,"onAnimationEnd");fn(Th,"onAnimationIteration");fn(jh,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(Oh,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function sd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rm(r,t,void 0,e),e.currentTarget=null}function Rh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sd(i,a,u),s=l}}}if(Bs)throw e=hl,Bs=!1,hl=null,e}function Q(e,t){var n=t[xl];n===void 0&&(n=t[xl]=new Set);var r=e+"__bubble";n.has(r)||(Ah(t,e,2,!1),n.add(r))}function Ca(e,t,n){var r=0;t&&(r|=4),Ah(n,e,r,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function Si(e){if(!e[rs]){e[rs]=!0,Uf.forEach(function(n){n!=="selectionchange"&&(Lg.has(n)||Ca(n,!1,e),Ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,Ca("selectionchange",!1,t))}}function Ah(e,t,n,r){switch(yh(t)){case 1:var i=Jm;break;case 4:i=Qm;break;default:i=xu}n=i.bind(null,t,n,e),i=void 0,!fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ba(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$n(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}rh(function(){var u=s,c=wu(n),d=[];e:{var h=Ih.get(e);if(h!==void 0){var m=$u,v=e;switch(e){case"keypress":if(Es(n)===0)break e;case"keydown":case"keyup":m=dg;break;case"focusin":v="focus",m=_a;break;case"focusout":v="blur",m=_a;break;case"beforeblur":case"afterblur":m=_a;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=pg;break;case Ph:case Th:case jh:m=ng;break;case Oh:m=gg;break;case"scroll":m=qm;break;case"wheel":m=vg;break;case"copy":case"cut":case"paste":m=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jc}var y=(t&4)!==0,S=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=mi(f,p),w!=null&&y.push(ki(f,w,g)))),S)break;f=f.return}0<y.length&&(h=new m(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==cl&&(v=n.relatedTarget||n.fromElement)&&($n(v)||v[Nt]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?$n(v):null,v!==null&&(S=Fn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(y=Kc,w="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Jc,w="onPointerLeave",p="onPointerEnter",f="pointer"),S=m==null?h:Xn(m),g=v==null?h:Xn(v),h=new y(w,f+"leave",m,n,c),h.target=S,h.relatedTarget=g,w=null,$n(c)===u&&(y=new y(p,f+"enter",v,n,c),y.target=g,y.relatedTarget=S,w=y),S=w,m&&v)t:{for(y=m,p=v,f=0,g=y;g;g=Mn(g))f++;for(g=0,w=p;w;w=Mn(w))g++;for(;0<f-g;)y=Mn(y),f--;for(;0<g-f;)p=Mn(p),g--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Mn(y),p=Mn(p)}y=null}else y=null;m!==null&&od(d,h,m,y,!1),v!==null&&S!==null&&od(d,S,v,y,!0)}}e:{if(h=u?Xn(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var x=$g;else if(Xc(h))if(xh)x=Tg;else{x=bg;var E=Cg}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=Pg);if(x&&(x=x(e,u))){kh(d,x,n,c);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&sl(h,"number",h.value)}switch(E=u?Xn(u):window,e){case"focusin":(Xc(E)||E.contentEditable==="true")&&(Qn=E,yl=u,ii=null);break;case"focusout":ii=yl=Qn=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,rd(d,n,c);break;case"selectionchange":if(Ig)break;case"keydown":case"keyup":rd(d,n,c)}var k;if(bu)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Jn?_h(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(wh&&n.locale!=="ko"&&(Jn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Jn&&(k=vh()):(qt=c,Eu="value"in qt?qt.value:qt.textContent,Jn=!0)),E=Ks(u,j),0<E.length&&(j=new Yc(j,e,null,n,c),d.push({event:j,listeners:E}),k?j.data=k:(k=Sh(n),k!==null&&(j.data=k)))),(k=_g?Sg(e,n):kg(e,n))&&(u=Ks(u,"onBeforeInput"),0<u.length&&(c=new Yc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=k))}Rh(d,t)})}function ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ks(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=mi(e,n),s!=null&&r.unshift(ki(e,s,i)),s=mi(e,t),s!=null&&r.push(ki(e,s,i))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function od(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=mi(n,s),l!=null&&o.unshift(ki(n,l,a))):i||(l=mi(n,s),l!=null&&o.push(ki(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ng=/\r\n?/g,zg=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(Ng,`
`).replace(zg,"")}function is(e,t,n){if(t=ad(t),ad(e)!==t&&n)throw Error($(425))}function Ys(){}var wl=null,_l=null;function Sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,Dg=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,Fg=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(Mg)}:kl;function Mg(e){setTimeout(function(){throw e})}function Pa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vi(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),xt="__reactFiber$"+jr,xi="__reactProps$"+jr,Nt="__reactContainer$"+jr,xl="__reactEvents$"+jr,Ug="__reactListeners$"+jr,Bg="__reactHandles$"+jr;function $n(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ud(e);e!==null;){if(n=e[xt])return n;e=ud(e)}return t}e=n,n=e.parentNode}return null}function Mi(e){return e=e[xt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function So(e){return e[xi]||null}var El=[],Zn=-1;function hn(e){return{current:e}}function X(e){0>Zn||(e.current=El[Zn],El[Zn]=null,Zn--)}function J(e,t){Zn++,El[Zn]=e.current,e.current=t}var cn={},be=hn(cn),Le=hn(!1),In=cn;function pr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function Js(){X(Le),X(be)}function cd(e,t,n){if(be.current!==cn)throw Error($(168));J(be,t),J(Le,n)}function Lh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,Cm(e)||"Unknown",i));return ne({},n,r)}function Qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,In=be.current,J(be,e),J(Le,Le.current),!0}function dd(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Lh(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,X(Le),X(be),J(be,e)):X(Le),J(Le,n)}var Ot=null,ko=!1,Ta=!1;function Nh(e){Ot===null?Ot=[e]:Ot.push(e)}function Vg(e){ko=!0,Nh(e)}function pn(){if(!Ta&&Ot!==null){Ta=!0;var e=0,t=H;try{var n=Ot;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,ko=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(e+1)),ah(_u,pn),i}finally{H=t,Ta=!1}}return null}var er=[],tr=0,qs=null,Xs=0,et=[],tt=0,Rn=null,It=1,Rt="";function Sn(e,t){er[tr++]=Xs,er[tr++]=qs,qs=e,Xs=t}function zh(e,t,n){et[tt++]=It,et[tt++]=Rt,et[tt++]=Rn,Rn=e;var r=It;e=Rt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var s=32-ht(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,It=1<<32-ht(t)+i|n<<i|r,Rt=s+e}else It=1<<s|n<<i|r,Rt=e}function Tu(e){e.return!==null&&(Sn(e,1),zh(e,1,0))}function ju(e){for(;e===qs;)qs=er[--tr],er[tr]=null,Xs=er[--tr],er[tr]=null;for(;e===Rn;)Rn=et[--tt],et[tt]=null,Rt=et[--tt],et[tt]=null,It=et[--tt],et[tt]=null}var He=null,Ve=null,Z=!1,ft=null;function Dh(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ve=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rn!==null?{id:It,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ve=null,!0):!1;default:return!1}}function $l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(Z){var t=Ve;if(t){var n=t;if(!fd(e,t)){if($l(e))throw Error($(418));t=nn(n.nextSibling);var r=He;t&&fd(e,t)?Dh(r,n):(e.flags=e.flags&-4097|2,Z=!1,He=e)}}else{if($l(e))throw Error($(418));e.flags=e.flags&-4097|2,Z=!1,He=e}}}function hd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function ss(e){if(e!==He)return!1;if(!Z)return hd(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sl(e.type,e.memoizedProps)),t&&(t=Ve)){if($l(e))throw Fh(),Error($(418));for(;t;)Dh(e,t),t=nn(t.nextSibling)}if(hd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=He?nn(e.stateNode.nextSibling):null;return!0}function Fh(){for(var e=Ve;e;)e=nn(e.nextSibling)}function mr(){Ve=He=null,Z=!1}function Ou(e){ft===null?ft=[e]:ft.push(e)}var Hg=Ft.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zs=hn(null),eo=null,nr=null,Iu=null;function Ru(){Iu=nr=eo=null}function Au(e){var t=Zs.current;X(Zs),e._currentValue=t}function bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){eo=e,Iu=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Iu!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(eo===null)throw Error($(308));nr=e,eo.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Cn=null;function Lu(e){Cn===null?Cn=[e]:Cn.push(e)}function Mh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lu(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,Lu(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function $s(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}function pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var i=e.updateQueue;Gt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=t,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=ne({},d,h);break e;case 2:Gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ln|=o,e.lanes=o,e.memoizedState=d}}function md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Bh=new Mf.Component().refs;function Pl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xo={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=on(e),s=At(r,i);s.payload=t,n!=null&&(s.callback=n),t=rn(e,s,i),t!==null&&(pt(t,e,i,r),$s(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=on(e),s=At(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=rn(e,s,i),t!==null&&(pt(t,e,i,r),$s(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=on(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=rn(e,i,r),t!==null&&(pt(t,e,r,n),$s(t,e,r))}};function gd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!_i(n,r)||!_i(i,s):!0}function Vh(e,t,n){var r=!1,i=cn,s=t.contextType;return typeof s=="object"&&s!==null?s=it(s):(i=Ne(t)?In:be.current,r=t.contextTypes,s=(r=r!=null)?pr(e,i):cn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function Tl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Bh,Nu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=it(s):(s=Ne(t)?In:be.current,i.context=pr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Pl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xo.enqueueReplaceState(i,i.state,null),to(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Bh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function os(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vd(e){var t=e._init;return t(e._payload)}function Hh(e){function t(p,f){if(e){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=an(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,w){return f===null||f.tag!==6?(f=Na(g,p.mode,w),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,w){var x=g.type;return x===Yn?c(p,f,g.props.children,w,g.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Wt&&vd(x)===f.type)?(w=i(f,g.props),w.ref=Br(p,f,g),w.return=p,w):(w=Os(g.type,g.key,g.props,null,p.mode,w),w.ref=Br(p,f,g),w.return=p,w)}function u(p,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=za(g,p.mode,w),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,w,x){return f===null||f.tag!==7?(f=jn(g,p.mode,w,x),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Na(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ji:return g=Os(f.type,f.key,f.props,null,p.mode,g),g.ref=Br(p,null,f),g.return=p,g;case Kn:return f=za(f,p.mode,g),f.return=p,f;case Wt:var w=f._init;return d(p,w(f._payload),g)}if(Yr(f)||zr(f))return f=jn(f,p.mode,g,null),f.return=p,f;os(p,f)}return null}function h(p,f,g,w){var x=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:a(p,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ji:return g.key===x?l(p,f,g,w):null;case Kn:return g.key===x?u(p,f,g,w):null;case Wt:return x=g._init,h(p,f,x(g._payload),w)}if(Yr(g)||zr(g))return x!==null?null:c(p,f,g,w,null);os(p,g)}return null}function m(p,f,g,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,a(f,p,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ji:return p=p.get(w.key===null?g:w.key)||null,l(f,p,w,x);case Kn:return p=p.get(w.key===null?g:w.key)||null,u(f,p,w,x);case Wt:var E=w._init;return m(p,f,g,E(w._payload),x)}if(Yr(w)||zr(w))return p=p.get(g)||null,c(f,p,w,x,null);os(f,w)}return null}function v(p,f,g,w){for(var x=null,E=null,k=f,j=f=0,K=null;k!==null&&j<g.length;j++){k.index>j?(K=k,k=null):K=k.sibling;var L=h(p,k,g[j],w);if(L===null){k===null&&(k=K);break}e&&k&&L.alternate===null&&t(p,k),f=s(L,f,j),E===null?x=L:E.sibling=L,E=L,k=K}if(j===g.length)return n(p,k),Z&&Sn(p,j),x;if(k===null){for(;j<g.length;j++)k=d(p,g[j],w),k!==null&&(f=s(k,f,j),E===null?x=k:E.sibling=k,E=k);return Z&&Sn(p,j),x}for(k=r(p,k);j<g.length;j++)K=m(k,p,j,g[j],w),K!==null&&(e&&K.alternate!==null&&k.delete(K.key===null?j:K.key),f=s(K,f,j),E===null?x=K:E.sibling=K,E=K);return e&&k.forEach(function(Fe){return t(p,Fe)}),Z&&Sn(p,j),x}function y(p,f,g,w){var x=zr(g);if(typeof x!="function")throw Error($(150));if(g=x.call(g),g==null)throw Error($(151));for(var E=x=null,k=f,j=f=0,K=null,L=g.next();k!==null&&!L.done;j++,L=g.next()){k.index>j?(K=k,k=null):K=k.sibling;var Fe=h(p,k,L.value,w);if(Fe===null){k===null&&(k=K);break}e&&k&&Fe.alternate===null&&t(p,k),f=s(Fe,f,j),E===null?x=Fe:E.sibling=Fe,E=Fe,k=K}if(L.done)return n(p,k),Z&&Sn(p,j),x;if(k===null){for(;!L.done;j++,L=g.next())L=d(p,L.value,w),L!==null&&(f=s(L,f,j),E===null?x=L:E.sibling=L,E=L);return Z&&Sn(p,j),x}for(k=r(p,k);!L.done;j++,L=g.next())L=m(k,p,j,L.value,w),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?j:L.key),f=s(L,f,j),E===null?x=L:E.sibling=L,E=L);return e&&k.forEach(function(mn){return t(p,mn)}),Z&&Sn(p,j),x}function S(p,f,g,w){if(typeof g=="object"&&g!==null&&g.type===Yn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ji:e:{for(var x=g.key,E=f;E!==null;){if(E.key===x){if(x=g.type,x===Yn){if(E.tag===7){n(p,E.sibling),f=i(E,g.props.children),f.return=p,p=f;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Wt&&vd(x)===E.type){n(p,E.sibling),f=i(E,g.props),f.ref=Br(p,E,g),f.return=p,p=f;break e}n(p,E);break}else t(p,E);E=E.sibling}g.type===Yn?(f=jn(g.props.children,p.mode,w,g.key),f.return=p,p=f):(w=Os(g.type,g.key,g.props,null,p.mode,w),w.ref=Br(p,f,g),w.return=p,p=w)}return o(p);case Kn:e:{for(E=g.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=za(g,p.mode,w),f.return=p,p=f}return o(p);case Wt:return E=g._init,S(p,f,E(g._payload),w)}if(Yr(g))return v(p,f,g,w);if(zr(g))return y(p,f,g,w);os(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Na(g,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return S}var gr=Hh(!0),Wh=Hh(!1),Ui={},$t=hn(Ui),Ei=hn(Ui),$i=hn(Ui);function bn(e){if(e===Ui)throw Error($(174));return e}function zu(e,t){switch(J($i,t),J(Ei,e),J($t,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=al(t,e)}X($t),J($t,t)}function yr(){X($t),X(Ei),X($i)}function Gh(e){bn($i.current);var t=bn($t.current),n=al(t,e.type);t!==n&&(J(Ei,e),J($t,n))}function Du(e){Ei.current===e&&(X($t),X(Ei))}var ee=hn(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ja=[];function Fu(){for(var e=0;e<ja.length;e++)ja[e]._workInProgressVersionPrimary=null;ja.length=0}var Cs=Ft.ReactCurrentDispatcher,Oa=Ft.ReactCurrentBatchConfig,An=0,te=null,ue=null,fe=null,ro=!1,si=!1,Ci=0,Wg=0;function ke(){throw Error($(321))}function Mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Uu(e,t,n,r,i,s){if(An=s,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cs.current=e===null||e.memoizedState===null?Jg:Qg,e=n(r,i),si){s=0;do{if(si=!1,Ci=0,25<=s)throw Error($(301));s+=1,fe=ue=null,t.updateQueue=null,Cs.current=qg,e=n(r,i)}while(si)}if(Cs.current=io,t=ue!==null&&ue.next!==null,An=0,fe=ue=te=null,ro=!1,t)throw Error($(300));return e}function Bu(){var e=Ci!==0;return Ci=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?te.memoizedState=fe=e:fe=fe.next=e,fe}function st(){if(ue===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=fe===null?te.memoizedState:fe.next;if(t!==null)fe=t,ue=e;else{if(e===null)throw Error($(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?te.memoizedState=fe=e:fe=fe.next=e}return fe}function bi(e,t){return typeof t=="function"?t(e):t}function Ia(e){var t=st(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((An&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,te.lanes|=c,Ln|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,gt(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,te.lanes|=s,Ln|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ra(e){var t=st(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);gt(s,t.memoizedState)||(Ae=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Kh(){}function Yh(e,t){var n=te,r=st(),i=t(),s=!gt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ae=!0),r=r.queue,Vu(qh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Pi(9,Qh.bind(null,n,r,i,t),void 0,null),me===null)throw Error($(349));An&30||Jh(n,t,i)}return i}function Jh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qh(e,t,n,r){t.value=n,t.getSnapshot=r,Xh(t)&&Zh(e)}function qh(e,t,n){return n(function(){Xh(t)&&Zh(e)})}function Xh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Zh(e){var t=zt(e,1);t!==null&&pt(t,e,1,-1)}function wd(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:e},t.queue=e,e=e.dispatch=Yg.bind(null,te,e),[t.memoizedState,e]}function Pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ep(){return st().memoizedState}function bs(e,t,n,r){var i=wt();te.flags|=e,i.memoizedState=Pi(1|t,n,void 0,r===void 0?null:r)}function Eo(e,t,n,r){var i=st();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&Mu(r,o.deps)){i.memoizedState=Pi(t,n,s,r);return}}te.flags|=e,i.memoizedState=Pi(1|t,n,s,r)}function _d(e,t){return bs(8390656,8,e,t)}function Vu(e,t){return Eo(2048,8,e,t)}function tp(e,t){return Eo(4,2,e,t)}function np(e,t){return Eo(4,4,e,t)}function rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ip(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4,4,rp.bind(null,t,e),n)}function Hu(){}function sp(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function op(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ap(e,t,n){return An&21?(gt(n,t)||(n=ch(),te.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function Gg(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Oa.transition;Oa.transition={};try{e(!1),t()}finally{H=n,Oa.transition=r}}function lp(){return st().memoizedState}function Kg(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},up(e))cp(t,n);else if(n=Mh(e,t,n,r),n!==null){var i=Te();pt(n,e,r,i),dp(n,t,r)}}function Yg(e,t,n){var r=on(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(up(e))cp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gt(a,o)){var l=t.interleaved;l===null?(i.next=i,Lu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Mh(e,t,i,r),n!==null&&(i=Te(),pt(n,e,r,i),dp(n,t,r))}}function up(e){var t=e.alternate;return e===te||t!==null&&t===te}function cp(e,t){si=ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}var io={readContext:it,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Jg={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:_d,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bs(4194308,4,rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bs(4194308,4,e,t)},useInsertionEffect:function(e,t){return bs(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kg.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:wd,useDebugValue:Hu,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=wd(!1),t=e[0];return e=Gg.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=wt();if(Z){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),me===null)throw Error($(349));An&30||Jh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,_d(qh.bind(null,r,s,e),[e]),r.flags|=2048,Pi(9,Qh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=wt(),t=me.identifierPrefix;if(Z){var n=Rt,r=It;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qg={readContext:it,useCallback:sp,useContext:it,useEffect:Vu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:np,useMemo:op,useReducer:Ia,useRef:ep,useState:function(){return Ia(bi)},useDebugValue:Hu,useDeferredValue:function(e){var t=st();return ap(t,ue.memoizedState,e)},useTransition:function(){var e=Ia(bi)[0],t=st().memoizedState;return[e,t]},useMutableSource:Kh,useSyncExternalStore:Yh,useId:lp,unstable_isNewReconciler:!1},qg={readContext:it,useCallback:sp,useContext:it,useEffect:Vu,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:np,useMemo:op,useReducer:Ra,useRef:ep,useState:function(){return Ra(bi)},useDebugValue:Hu,useDeferredValue:function(e){var t=st();return ue===null?t.memoizedState=e:ap(t,ue.memoizedState,e)},useTransition:function(){var e=Ra(bi)[0],t=st().memoizedState;return[e,t]},useMutableSource:Kh,useSyncExternalStore:Yh,useId:lp,unstable_isNewReconciler:!1};function vr(e,t){try{var n="",r=t;do n+=$m(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xg=typeof WeakMap=="function"?WeakMap:Map;function fp(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Ml=r),jl(e,t)},n}function hp(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jl(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=f1.bind(null,e,t,n),t.then(e,e))}function kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var Zg=Ft.ReactCurrentOwner,Ae=!1;function Pe(e,t,n,r){t.child=e===null?Wh(t,null,n,r):gr(t,e.child,n,r)}function Ed(e,t,n,r,i){n=n.render;var s=t.ref;return cr(t,i),r=Uu(e,t,n,r,s,i),n=Bu(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(Z&&n&&Tu(t),t.flags|=1,Pe(e,t,r,i),t.child)}function $d(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Xu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,pp(e,t,s,r,i)):(e=Os(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(o,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=an(s,r),e.ref=t.ref,e.return=t,t.child=e}function pp(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(_i(s,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return Ol(e,t,n,r,i)}function mp(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(ir,Be),Be|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(ir,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(ir,Be),Be|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,J(ir,Be),Be|=r;return Pe(e,t,i,n),t.child}function gp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,i){var s=Ne(n)?In:be.current;return s=pr(t,s),cr(t,i),n=Uu(e,t,n,r,s,i),r=Bu(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(Z&&r&&Tu(t),t.flags|=1,Pe(e,t,n,i),t.child)}function Cd(e,t,n,r,i){if(Ne(n)){var s=!0;Qs(t)}else s=!1;if(cr(t,i),t.stateNode===null)Ps(e,t),Vh(t,n,r),Tl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=Ne(n)?In:be.current,u=pr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yd(t,o,r,u),Gt=!1;var h=t.memoizedState;o.state=h,to(t,r,o,i),l=t.memoizedState,a!==r||h!==l||Le.current||Gt?(typeof c=="function"&&(Pl(t,n,c,r),l=t.memoizedState),(a=Gt||gd(t,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Uh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ut(t.type,a),o.props=u,d=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=Ne(n)?In:be.current,l=pr(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&yd(t,o,r,l),Gt=!1,h=t.memoizedState,o.state=h,to(t,r,o,i);var v=t.memoizedState;a!==d||h!==v||Le.current||Gt?(typeof m=="function"&&(Pl(t,n,m,r),v=t.memoizedState),(u=Gt||gd(t,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,s,i)}function Il(e,t,n,r,i,s){gp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&dd(t,n,!1),Dt(e,t,s);r=t.stateNode,Zg.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=gr(t,e.child,null,s),t.child=gr(t,null,a,s)):Pe(e,t,a,s),t.memoizedState=r.state,i&&dd(t,n,!0),t.child}function yp(e){var t=e.stateNode;t.pendingContext?cd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cd(e,t.context,!1),zu(e,t.containerInfo)}function bd(e,t,n,r,i){return mr(),Ou(i),t.flags|=256,Pe(e,t,n,r),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function vp(e,t,n){var r=t.pendingProps,i=ee.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),J(ee,i&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bo(o,r,0,null),e=jn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Al(n),t.memoizedState=Rl,e):Wu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return e1(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=an(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=an(a,s):(s=jn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Al(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Rl,r}return s=e.child,e=s.sibling,r=an(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wu(e,t){return t=bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function as(e,t,n,r){return r!==null&&Ou(r),gr(t,e.child,null,n),e=Wu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function e1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Aa(Error($(422))),as(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=bo({mode:"visible",children:r.children},i,0,null),s=jn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&gr(t,e.child,null,o),t.child.memoizedState=Al(o),t.memoizedState=Rl,s);if(!(t.mode&1))return as(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Aa(s,r,void 0),as(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ae||a){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zt(e,i),pt(r,e,i,-1))}return qu(),r=Aa(Error($(421))),as(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=h1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ve=nn(i.nextSibling),He=t,Z=!0,ft=null,e!==null&&(et[tt++]=It,et[tt++]=Rt,et[tt++]=Rn,It=e.id,Rt=e.overflow,Rn=t),t=Wu(t,r.children),t.flags|=4096,t)}function Pd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bl(e.return,t,n)}function La(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Pe(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,n,t);else if(e.tag===19)Pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),La(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}La(t,!0,n,null,s);break;case"together":La(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ps(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function t1(e,t,n){switch(t.tag){case 3:yp(t),mr();break;case 5:Gh(t);break;case 1:Ne(t.type)&&Qs(t);break;case 4:zu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;J(Zs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?vp(e,t,n):(J(ee,ee.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);J(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,mp(e,t,n)}return Dt(e,t,n)}var _p,Ll,Sp,kp;_p=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ll=function(){};Sp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bn($t.current);var s=null;switch(n){case"input":i=rl(e,i),r=rl(e,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=ol(e,i),r=ol(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ys)}ll(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Q("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};kp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function n1(e,t,n){var r=t.pendingProps;switch(ju(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Ne(t.type)&&Js(),xe(t),null;case 3:return r=t.stateNode,yr(),X(Le),X(be),Fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Vl(ft),ft=null))),Ll(e,t),xe(t),null;case 5:Du(t);var i=bn($i.current);if(n=t.type,e!==null&&t.stateNode!=null)Sp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return xe(t),null}if(e=bn($t.current),ss(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[xt]=t,r[xi]=s,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Qr.length;i++)Q(Qr[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":zc(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":Fc(r,s),Q("invalid",r)}ll(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&is(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&is(r.textContent,a,e),i=["children",""+a]):hi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Qi(r),Dc(r,s,!0);break;case"textarea":Qi(r),Mc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ys)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[xt]=t,e[xi]=r,_p(e,t,!1,!1),t.stateNode=e;e:{switch(o=ul(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qr.length;i++)Q(Qr[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":zc(e,r),i=rl(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Fc(e,r),i=ol(e,r),Q("invalid",e);break;default:i=r}ll(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Xf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qf(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pi(e,l):typeof l=="number"&&pi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Q("scroll",e):l!=null&&mu(e,s,l,o))}switch(n){case"input":Qi(e),Dc(e,r,!1);break;case"textarea":Qi(e),Mc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?or(e,!!r.multiple,s,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ys)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)kp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=bn($i.current),bn($t.current),ss(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(s=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:is(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&is(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return xe(t),null;case 13:if(X(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ve!==null&&t.mode&1&&!(t.flags&128))Fh(),mr(),t.flags|=98560,s=!1;else if(s=ss(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error($(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[xt]=t}else mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),s=!1}else ft!==null&&(Vl(ft),ft=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ce===0&&(ce=3):qu())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return yr(),Ll(e,t),e===null&&Si(t.stateNode.containerInfo),xe(t),null;case 10:return Au(t.type._context),xe(t),null;case 17:return Ne(t.type)&&Js(),xe(t),null;case 19:if(X(ee),s=t.memoizedState,s===null)return xe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Vr(s,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=no(e),o!==null){for(t.flags|=128,Vr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ee,ee.current&1|2),t.child}e=e.sibling}s.tail!==null&&se()>wr&&(t.flags|=128,r=!0,Vr(s,!1),t.lanes=4194304)}else{if(!r)if(e=no(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return xe(t),null}else 2*se()-s.renderingStartTime>wr&&n!==1073741824&&(t.flags|=128,r=!0,Vr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=se(),t.sibling=null,n=ee.current,J(ee,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Qu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function r1(e,t){switch(ju(t),t.tag){case 1:return Ne(t.type)&&Js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),X(Le),X(be),Fu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Du(t),null;case 13:if(X(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ee),null;case 4:return yr(),null;case 10:return Au(t.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var ls=!1,Ce=!1,i1=typeof WeakSet=="function"?WeakSet:Set,T=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Nl(e,t,n){try{n()}catch(r){re(e,t,r)}}var Td=!1;function s1(e,t){if(wl=Ws,e=Ch(),Pu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_l={focusedElem:e,selectionRange:n},Ws=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:ut(t.type,y),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=Td,Td=!1,v}function oi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nl(t,n,s)}i=i.next}while(i!==r)}}function $o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xp(e){var t=e.alternate;t!==null&&(e.alternate=null,xp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[xi],delete t[xl],delete t[Ug],delete t[Bg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ep(e){return e.tag===5||e.tag===3||e.tag===4}function jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ys));else if(r!==4&&(e=e.child,e!==null))for(Dl(e,t,n),e=e.sibling;e!==null;)Dl(e,t,n),e=e.sibling}function Fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;e!==null;)Fl(e,t,n),e=e.sibling}var ve=null,ct=!1;function Bt(e,t,n){for(n=n.child;n!==null;)$p(e,t,n),n=n.sibling}function $p(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:Ce||rr(n,t);case 6:var r=ve,i=ct;ve=null,Bt(e,t,n),ve=r,ct=i,ve!==null&&(ct?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ct?(e=ve,n=n.stateNode,e.nodeType===8?Pa(e.parentNode,n):e.nodeType===1&&Pa(e,n),vi(e)):Pa(ve,n.stateNode));break;case 4:r=ve,i=ct,ve=n.stateNode.containerInfo,ct=!0,Bt(e,t,n),ve=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nl(n,t,o),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!Ce&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Bt(e,t,n),Ce=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function Od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new i1),t.forEach(function(r){var i=p1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ve=a.stateNode,ct=!1;break e;case 3:ve=a.stateNode.containerInfo,ct=!0;break e;case 4:ve=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(ve===null)throw Error($(160));$p(s,o,i),ve=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cp(t,e),t=t.sibling}function Cp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),vt(e),r&4){try{oi(3,e,e.return),$o(3,e)}catch(y){re(e,e.return,y)}try{oi(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:lt(t,e),vt(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(lt(t,e),vt(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var i=e.stateNode;try{pi(i,"")}catch(y){re(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Kf(i,s),ul(a,o);var u=ul(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Xf(i,d):c==="dangerouslySetInnerHTML"?Qf(i,d):c==="children"?pi(i,d):mu(i,c,d,u)}switch(a){case"input":il(i,s);break;case"textarea":Yf(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?or(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?or(i,!!s.multiple,s.defaultValue,!0):or(i,!!s.multiple,s.multiple?[]:"",!1))}i[xi]=s}catch(y){re(e,e.return,y)}}break;case 6:if(lt(t,e),vt(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){re(e,e.return,y)}}break;case 3:if(lt(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:lt(t,e),vt(e);break;case 13:lt(t,e),vt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Yu=se())),r&4&&Od(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||c,lt(t,e),Ce=u):lt(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(d=T=c;T!==null;){switch(h=T,m=h.child,h.tag){case 0:case 11:case 14:case 15:oi(4,h,h.return);break;case 1:rr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:rr(h,h.return);break;case 22:if(h.memoizedState!==null){Rd(d);continue}}m!==null?(m.return=h,T=m):Rd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qf("display",o))}catch(y){re(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){re(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(t,e),vt(e),r&4&&Od(e);break;case 21:break;default:lt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ep(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pi(i,""),r.flags&=-33);var s=jd(e);Fl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=jd(e);Dl(e,a,o);break;default:throw Error($(161))}}catch(l){re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function o1(e,t,n){T=e,bp(e)}function bp(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ls;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ce;a=ls;var u=Ce;if(ls=o,(Ce=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?Ad(i):l!==null?(l.return=o,T=l):Ad(i);for(;s!==null;)T=s,bp(s),s=s.sibling;T=i,ls=a,Ce=u}Id(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):Id(e)}}function Id(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||$o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&md(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}md(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&vi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ce||t.flags&512&&zl(t)}catch(h){re(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Rd(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Ad(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$o(4,t)}catch(l){re(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){re(t,i,l)}}var s=t.return;try{zl(t)}catch(l){re(t,s,l)}break;case 5:var o=t.return;try{zl(t)}catch(l){re(t,o,l)}}}catch(l){re(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var a1=Math.ceil,so=Ft.ReactCurrentDispatcher,Gu=Ft.ReactCurrentOwner,rt=Ft.ReactCurrentBatchConfig,D=0,me=null,le=null,_e=0,Be=0,ir=hn(0),ce=0,Ti=null,Ln=0,Co=0,Ku=0,ai=null,Ie=null,Yu=0,wr=1/0,Tt=null,oo=!1,Ml=null,sn=null,us=!1,Xt=null,ao=0,li=0,Ul=null,Ts=-1,js=0;function Te(){return D&6?se():Ts!==-1?Ts:Ts=se()}function on(e){return e.mode&1?D&2&&_e!==0?_e&-_e:Hg.transition!==null?(js===0&&(js=ch()),js):(e=H,e!==0||(e=window.event,e=e===void 0?16:yh(e.type)),e):1}function pt(e,t,n,r){if(50<li)throw li=0,Ul=null,Error($(185));Di(e,n,r),(!(D&2)||e!==me)&&(e===me&&(!(D&2)&&(Co|=n),ce===4&&Jt(e,_e)),ze(e,r),n===1&&D===0&&!(t.mode&1)&&(wr=se()+500,ko&&pn()))}function ze(e,t){var n=e.callbackNode;Hm(e,t);var r=Hs(e,e===me?_e:0);if(r===0)n!==null&&Vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vc(n),t===1)e.tag===0?Vg(Ld.bind(null,e)):Nh(Ld.bind(null,e)),Fg(function(){!(D&6)&&pn()}),n=null;else{switch(dh(r)){case 1:n=_u;break;case 4:n=lh;break;case 16:n=Vs;break;case 536870912:n=uh;break;default:n=Vs}n=Lp(n,Pp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pp(e,t){if(Ts=-1,js=0,D&6)throw Error($(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=Hs(e,e===me?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var i=D;D|=2;var s=jp();(me!==e||_e!==t)&&(Tt=null,wr=se()+500,Tn(e,t));do try{c1();break}catch(a){Tp(e,a)}while(!0);Ru(),so.current=s,D=i,le!==null?t=0:(me=null,_e=0,t=ce)}if(t!==0){if(t===2&&(i=pl(e),i!==0&&(r=i,t=Bl(e,i))),t===1)throw n=Ti,Tn(e,0),Jt(e,r),ze(e,se()),n;if(t===6)Jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!l1(i)&&(t=lo(e,r),t===2&&(s=pl(e),s!==0&&(r=s,t=Bl(e,s))),t===1))throw n=Ti,Tn(e,0),Jt(e,r),ze(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:kn(e,Ie,Tt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=Yu+500-se(),10<t)){if(Hs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kl(kn.bind(null,e,Ie,Tt),t);break}kn(e,Ie,Tt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ht(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*a1(r/1960))-r,10<r){e.timeoutHandle=kl(kn.bind(null,e,Ie,Tt),r);break}kn(e,Ie,Tt);break;case 5:kn(e,Ie,Tt);break;default:throw Error($(329))}}}return ze(e,se()),e.callbackNode===n?Pp.bind(null,e):null}function Bl(e,t){var n=ai;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=lo(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Vl(t)),e}function Vl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function l1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~Ku,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Ld(e){if(D&6)throw Error($(327));dr();var t=Hs(e,0);if(!(t&1))return ze(e,se()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=pl(e);r!==0&&(t=r,n=Bl(e,r))}if(n===1)throw n=Ti,Tn(e,0),Jt(e,t),ze(e,se()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ie,Tt),ze(e,se()),null}function Ju(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(wr=se()+500,ko&&pn())}}function Nn(e){Xt!==null&&Xt.tag===0&&!(D&6)&&dr();var t=D;D|=1;var n=rt.transition,r=H;try{if(rt.transition=null,H=1,e)return e()}finally{H=r,rt.transition=n,D=t,!(D&6)&&pn()}}function Qu(){Be=ir.current,X(ir)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dg(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(ju(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Js();break;case 3:yr(),X(Le),X(be),Fu();break;case 5:Du(r);break;case 4:yr();break;case 13:X(ee);break;case 19:X(ee);break;case 10:Au(r.type._context);break;case 22:case 23:Qu()}n=n.return}if(me=e,le=e=an(e.current,null),_e=Be=t,ce=0,Ti=null,Ku=Co=Ln=0,Ie=ai=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Cn=null}return e}function Tp(e,t){do{var n=le;try{if(Ru(),Cs.current=io,ro){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ro=!1}if(An=0,fe=ue=te=null,si=!1,Ci=0,Gu.current=null,n===null||n.return===null){ce=1,Ti=t,le=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=_e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=kd(o);if(m!==null){m.flags&=-257,xd(m,o,a,s,t),m.mode&1&&Sd(s,u,t),t=m,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){Sd(s,u,t),qu();break e}l=Error($(426))}}else if(Z&&a.mode&1){var S=kd(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),xd(S,o,a,s,t),Ou(vr(l,a));break e}}s=l=vr(l,a),ce!==4&&(ce=2),ai===null?ai=[s]:ai.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=fp(s,l,t);pd(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(sn===null||!sn.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=hp(s,a,t);pd(s,w);break e}}s=s.return}while(s!==null)}Ip(n)}catch(x){t=x,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function jp(){var e=so.current;return so.current=io,e===null?io:e}function qu(){(ce===0||ce===3||ce===2)&&(ce=4),me===null||!(Ln&268435455)&&!(Co&268435455)||Jt(me,_e)}function lo(e,t){var n=D;D|=2;var r=jp();(me!==e||_e!==t)&&(Tt=null,Tn(e,t));do try{u1();break}catch(i){Tp(e,i)}while(!0);if(Ru(),D=n,so.current=r,le!==null)throw Error($(261));return me=null,_e=0,ce}function u1(){for(;le!==null;)Op(le)}function c1(){for(;le!==null&&!Lm();)Op(le)}function Op(e){var t=Ap(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Ip(e):le=t,Gu.current=null}function Ip(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=r1(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}else if(n=n1(n,t,Be),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function kn(e,t,n){var r=H,i=rt.transition;try{rt.transition=null,H=1,d1(e,t,n,r)}finally{rt.transition=i,H=r}return null}function d1(e,t,n,r){do dr();while(Xt!==null);if(D&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wm(e,s),e===me&&(le=me=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||us||(us=!0,Lp(Vs,function(){return dr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var o=H;H=1;var a=D;D|=4,Gu.current=null,s1(e,n),Cp(n,e),Og(_l),Ws=!!wl,_l=wl=null,e.current=n,o1(n),Nm(),D=a,H=o,rt.transition=s}else e.current=n;if(us&&(us=!1,Xt=e,ao=i),s=e.pendingLanes,s===0&&(sn=null),Fm(n.stateNode),ze(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Ml,Ml=null,e;return ao&1&&e.tag!==0&&dr(),s=e.pendingLanes,s&1?e===Ul?li++:(li=0,Ul=e):li=0,pn(),null}function dr(){if(Xt!==null){var e=dh(ao),t=rt.transition,n=H;try{if(rt.transition=null,H=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,ao=0,D&6)throw Error($(331));var i=D;for(D|=4,T=e.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:oi(8,c,s)}var d=c.child;if(d!==null)d.return=c,T=d;else for(;T!==null;){c=T;var h=c.sibling,m=c.return;if(xp(c),c===u){T=null;break}if(h!==null){h.return=m,T=h;break}T=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var f=e.current;for(T=f;T!==null;){o=T;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,T=g;else e:for(o=f;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$o(9,a)}}catch(x){re(a,a.return,x)}if(a===o){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(D=i,pn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{H=n,rt.transition=t}}return!1}function Nd(e,t,n){t=vr(n,t),t=fp(e,t,1),e=rn(e,t,1),t=Te(),e!==null&&(Di(e,1,t),ze(e,t))}function re(e,t,n){if(e.tag===3)Nd(e,e,n);else for(;t!==null;){if(t.tag===3){Nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=vr(n,e),e=hp(t,e,1),t=rn(t,e,1),e=Te(),t!==null&&(Di(t,1,e),ze(t,e));break}}t=t.return}}function f1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(_e&n)===n&&(ce===4||ce===3&&(_e&130023424)===_e&&500>se()-Yu?Tn(e,0):Ku|=n),ze(e,t)}function Rp(e,t){t===0&&(e.mode&1?(t=Zi,Zi<<=1,!(Zi&130023424)&&(Zi=4194304)):t=1);var n=Te();e=zt(e,t),e!==null&&(Di(e,t,n),ze(e,n))}function h1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rp(e,n)}function p1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),Rp(e,n)}var Ap;Ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,t1(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,Z&&t.flags&1048576&&zh(t,Xs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ps(e,t),e=t.pendingProps;var i=pr(t,be.current);cr(t,n),i=Uu(null,t,r,e,i,n);var s=Bu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(s=!0,Qs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nu(t),i.updater=xo,t.stateNode=i,i._reactInternals=t,Tl(t,r,e,n),t=Il(null,t,r,!0,s,n)):(t.tag=0,Z&&s&&Tu(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ps(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=g1(r),e=ut(r,e),i){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=Cd(null,t,r,e,n);break e;case 11:t=Ed(null,t,r,e,n);break e;case 14:t=$d(null,t,r,ut(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Cd(e,t,r,i,n);case 3:e:{if(yp(t),e===null)throw Error($(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Uh(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=vr(Error($(423)),t),t=bd(e,t,r,n,i);break e}else if(r!==i){i=vr(Error($(424)),t),t=bd(e,t,r,n,i);break e}else for(Ve=nn(t.stateNode.containerInfo.firstChild),He=t,Z=!0,ft=null,n=Wh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mr(),r===i){t=Dt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return Gh(t),e===null&&Cl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Sl(r,i)?o=null:s!==null&&Sl(r,s)&&(t.flags|=32),gp(e,t),Pe(e,t,o,n),t.child;case 6:return e===null&&Cl(t),null;case 13:return vp(e,t,n);case 4:return zu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ed(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,J(Zs,r._currentValue),r._currentValue=o,s!==null)if(gt(s.value,o)){if(s.children===i.children&&!Le.current){t=Dt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=At(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bl(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bl(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cr(t,n),i=it(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),$d(e,t,r,i,n);case 15:return pp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ps(e,t),t.tag=1,Ne(r)?(e=!0,Qs(t)):e=!1,cr(t,n),Vh(t,r,i),Tl(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return wp(e,t,n);case 22:return mp(e,t,n)}throw Error($(156,t.tag))};function Lp(e,t){return ah(e,t)}function m1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new m1(e,t,n,r)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function g1(e){if(typeof e=="function")return Xu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yu)return 11;if(e===vu)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Os(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Xu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yn:return jn(n.children,i,s,t);case gu:o=8,i|=8;break;case Za:return e=nt(12,n,t,i|2),e.elementType=Za,e.lanes=s,e;case el:return e=nt(13,n,t,i),e.elementType=el,e.lanes=s,e;case tl:return e=nt(19,n,t,i),e.elementType=tl,e.lanes=s,e;case Hf:return bo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bf:o=10;break e;case Vf:o=9;break e;case yu:o=11;break e;case vu:o=14;break e;case Wt:o=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=nt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function jn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function bo(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Hf,e.lanes=n,e.stateNode={isHidden:!1},e}function Na(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function za(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function y1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zu(e,t,n,r,i,s,o,a,l){return e=new y1(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=nt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nu(s),e}function v1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Np(e){if(!e)return cn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Lh(e,n,t)}return t}function zp(e,t,n,r,i,s,o,a,l){return e=Zu(n,r,!0,e,i,s,o,a,l),e.context=Np(null),n=e.current,r=Te(),i=on(n),s=At(r,i),s.callback=t??null,rn(n,s,i),e.current.lanes=i,Di(e,i,r),ze(e,r),e}function Po(e,t,n,r){var i=t.current,s=Te(),o=on(i);return n=Np(n),t.context===null?t.context=n:t.pendingContext=n,t=At(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(i,t,o),e!==null&&(pt(e,i,o,s),$s(e,i,o)),o}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){zd(e,t),(e=e.alternate)&&zd(e,t)}function w1(){return null}var Dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}To.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Po(e,t,null,null)};To.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){Po(null,e,null,null)}),t[Nt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=ph();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&gh(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function _1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=uo(o);s.call(u)}}var o=zp(t,r,e,0,null,!1,!1,"",Dd);return e._reactRootContainer=o,e[Nt]=o.current,Si(e.nodeType===8?e.parentNode:e),Nn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=uo(l);a.call(u)}}var l=Zu(e,0,!1,null,null,!1,!1,"",Dd);return e._reactRootContainer=l,e[Nt]=l.current,Si(e.nodeType===8?e.parentNode:e),Nn(function(){Po(t,l,n,r)}),l}function Oo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=uo(o);a.call(l)}}Po(t,o,e,i)}else o=_1(n,t,e,i,r);return uo(o)}fh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(Su(t,n|1),ze(t,se()),!(D&6)&&(wr=se()+500,pn()))}break;case 13:Nn(function(){var r=zt(e,1);if(r!==null){var i=Te();pt(r,e,1,i)}}),ec(e,1)}};ku=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Te();pt(t,e,134217728,n)}ec(e,134217728)}};hh=function(e){if(e.tag===13){var t=on(e),n=zt(e,t);if(n!==null){var r=Te();pt(n,e,t,r)}ec(e,t)}};ph=function(){return H};mh=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};dl=function(e,t,n){switch(t){case"input":if(il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=So(r);if(!i)throw Error($(90));Gf(r),il(r,i)}}}break;case"textarea":Yf(e,n);break;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}};th=Ju;nh=Nn;var S1={usingClientEntryPoint:!1,Events:[Mi,Xn,So,Zf,eh,Ju]},Hr={findFiberByHostInstance:$n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},k1={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sh(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||w1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{yo=cs.inject(k1),Et=cs}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S1;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error($(200));return v1(e,t,null,n)};Ke.createRoot=function(e,t){if(!nc(e))throw Error($(299));var n=!1,r="",i=Dp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zu(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,Si(e.nodeType===8?e.parentNode:e),new tc(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=sh(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return Nn(e)};Ke.hydrate=function(e,t,n){if(!jo(t))throw Error($(200));return Oo(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!nc(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=zp(t,null,e,1,n??null,i,!1,s,o),e[Nt]=t.current,Si(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new To(t)};Ke.render=function(e,t,n){if(!jo(t))throw Error($(200));return Oo(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!jo(e))throw Error($(40));return e._reactRootContainer?(Nn(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Ju;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jo(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Oo(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function Fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fp)}catch(e){console.error(e)}}Fp(),zf.exports=Ke;var x1=zf.exports,Fd=x1;qa.createRoot=Fd.createRoot,qa.hydrateRoot=Fd.hydrateRoot;var pe=function(){return pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},pe.apply(this,arguments)};function _r(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function E1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var q="-ms-",ui="-moz-",V="-webkit-",Mp="comm",Io="rule",rc="decl",$1="@import",Up="@keyframes",C1="@layer",b1=Math.abs,ic=String.fromCharCode,Hl=Object.assign;function P1(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function Bp(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function Is(e,t){return e.indexOf(t)}function he(e,t){return e.charCodeAt(t)|0}function Sr(e,t,n){return e.slice(t,n)}function _t(e){return e.length}function Vp(e){return e.length}function qr(e,t){return t.push(e),e}function T1(e,t){return e.map(t).join("")}function Md(e,t){return e.filter(function(n){return!jt(n,t)})}var Ro=1,kr=1,Hp=0,ot=0,oe=0,Or="";function Ao(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ro,column:kr,length:o,return:"",siblings:a}}function Ht(e,t){return Hl(Ao("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Un(e){for(;e.root;)e=Ht(e.root,{children:[e]});qr(e,e.siblings)}function j1(){return oe}function O1(){return oe=ot>0?he(Or,--ot):0,kr--,oe===10&&(kr=1,Ro--),oe}function mt(){return oe=ot<Hp?he(Or,ot++):0,kr++,oe===10&&(kr=1,Ro++),oe}function On(){return he(Or,ot)}function Rs(){return ot}function Lo(e,t){return Sr(Or,e,t)}function Wl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I1(e){return Ro=kr=1,Hp=_t(Or=e),ot=0,[]}function R1(e){return Or="",e}function Da(e){return Bp(Lo(ot-1,Gl(e===91?e+2:e===40?e+1:e)))}function A1(e){for(;(oe=On())&&oe<33;)mt();return Wl(e)>2||Wl(oe)>3?"":" "}function L1(e,t){for(;--t&&mt()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return Lo(e,Rs()+(t<6&&On()==32&&mt()==32))}function Gl(e){for(;mt();)switch(oe){case e:return ot;case 34:case 39:e!==34&&e!==39&&Gl(oe);break;case 40:e===41&&Gl(e);break;case 92:mt();break}return ot}function N1(e,t){for(;mt()&&e+oe!==57;)if(e+oe===84&&On()===47)break;return"/*"+Lo(t,ot-1)+"*"+ic(e===47?e:mt())}function z1(e){for(;!Wl(On());)mt();return Lo(e,ot)}function D1(e){return R1(As("",null,null,null,[""],e=I1(e),0,[0],e))}function As(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,m=0,v=0,y=1,S=1,p=1,f=0,g="",w=i,x=s,E=r,k=g;S;)switch(v=f,f=mt()){case 40:if(v!=108&&he(k,d-1)==58){Is(k+=A(Da(f),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:k+=Da(f);break;case 9:case 10:case 13:case 32:k+=A1(v);break;case 92:k+=L1(Rs()-1,7);continue;case 47:switch(On()){case 42:case 47:qr(F1(N1(mt(),Rs()),t,n,l),l);break;default:k+="/"}break;case 123*y:a[u++]=_t(k)*p;case 125*y:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+c:p==-1&&(k=A(k,/\f/g,"")),m>0&&_t(k)-d&&qr(m>32?Bd(k+";",r,n,d-1,l):Bd(A(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(qr(E=Ud(k,t,n,u,c,i,a,g,w=[],x=[],d,s),s),f===123)if(c===0)As(k,t,E,E,w,s,d,a,x);else switch(h===99&&he(k,3)===110?100:h){case 100:case 108:case 109:case 115:As(e,E,E,r&&qr(Ud(e,E,E,0,0,i,a,g,i,w=[],d,x),x),i,x,d,a,r?w:x);break;default:As(k,E,E,E,[""],x,0,a,x)}}u=c=m=0,y=p=1,g=k="",d=o;break;case 58:d=1+_t(k),m=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&O1()==125)continue}switch(k+=ic(f),f*y){case 38:p=c>0?1:(k+="\f",-1);break;case 44:a[u++]=(_t(k)-1)*p,p=1;break;case 64:On()===45&&(k+=Da(mt())),h=On(),c=d=_t(g=k+=z1(Rs())),f++;break;case 45:v===45&&_t(k)==2&&(y=0)}}return s}function Ud(e,t,n,r,i,s,o,a,l,u,c,d){for(var h=i-1,m=i===0?s:[""],v=Vp(m),y=0,S=0,p=0;y<r;++y)for(var f=0,g=Sr(e,h+1,h=b1(S=o[y])),w=e;f<v;++f)(w=Bp(S>0?m[f]+" "+g:A(g,/&\f/g,m[f])))&&(l[p++]=w);return Ao(e,t,n,i===0?Io:a,l,u,c,d)}function F1(e,t,n,r){return Ao(e,t,n,Mp,ic(j1()),Sr(e,2,-2),0,r)}function Bd(e,t,n,r,i){return Ao(e,t,n,rc,Sr(e,0,r),Sr(e,r+1,-1),r,i)}function Wp(e,t,n){switch(P1(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return ui+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+ui+e+q+e+e;case 5936:switch(he(e,t+11)){case 114:return V+e+q+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+q+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+q+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+q+e+e;case 6165:return V+e+q+"flex-"+e+e;case 5187:return V+e+A(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return V+e+q+"flex-item-"+A(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":q+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return V+e+q+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+q+A(e,"shrink","negative")+e;case 5292:return V+e+q+A(e,"basis","preferred-size")+e;case 6060:return V+"box-"+A(e,"-grow","")+V+e+q+A(e,"grow","positive")+e;case 4554:return V+A(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!jt(e,/flex-|baseline/))return q+"grid-column-align"+Sr(e,t)+e;break;case 2592:case 3360:return q+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,jt(r.props,/grid-\w+-end/)})?~Is(e+(n=n[t].value),"span")?e:q+A(e,"-start","")+e+q+"grid-row-span:"+(~Is(n,"span")?jt(n,/\d+/):+jt(n,/\d+/)-+jt(e,/\d+/))+";":q+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return jt(r.props,/grid-\w+-start/)})?e:q+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+ui+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Is(e,"stretch")?Wp(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return q+i+":"+s+u+(o?q+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(he(e,t+6)===121)return A(e,":",":"+V)+e;break;case 6444:switch(he(e,he(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(he(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+q+"$2box$3")+e;case 100:return A(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function co(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function M1(e,t,n,r){switch(e.type){case C1:if(e.children.length)break;case $1:case rc:return e.return=e.return||e.value;case Mp:return"";case Up:return e.return=e.value+"{"+co(e.children,r)+"}";case Io:if(!_t(e.value=e.props.join(",")))return""}return _t(n=co(e.children,r))?e.return=e.value+"{"+n+"}":""}function U1(e){var t=Vp(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function B1(e){return function(t){t.root||(t=t.return)&&e(t)}}function V1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rc:e.return=Wp(e.value,e.length,n);return;case Up:return co([Ht(e,{value:A(e.value,"@","@"+V)})],r);case Io:if(e.length)return T1(n=e.props,function(i){switch(jt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Un(Ht(e,{props:[A(i,/:(read-\w+)/,":"+ui+"$1")]})),Un(Ht(e,{props:[i]})),Hl(e,{props:Md(n,r)});break;case"::placeholder":Un(Ht(e,{props:[A(i,/:(plac\w+)/,":"+V+"input-$1")]})),Un(Ht(e,{props:[A(i,/:(plac\w+)/,":"+ui+"$1")]})),Un(Ht(e,{props:[A(i,/:(plac\w+)/,q+"input-$1")]})),Un(Ht(e,{props:[i]})),Hl(e,{props:Md(n,r)});break}return""})}}var Gp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},xr=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",sc=typeof window<"u"&&"HTMLElement"in window,H1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),W1={},No=Object.freeze([]),Er=Object.freeze({});function Kp(e,t,n){return n===void 0&&(n=Er),e.theme!==n.theme&&e.theme||t||n.theme}var Yp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),G1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,K1=/(^-|-$)/g;function Vd(e){return e.replace(G1,"-").replace(K1,"")}var Y1=/(a)(d)/gi,Hd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Hd(t%52)+n;return(Hd(t%52)+n).replace(Y1,"$1-$2")}var Fa,sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jp=function(e){return sr(5381,e)};function oc(e){return Kl(Jp(e)>>>0)}function J1(e){return e.displayName||e.name||"Component"}function Ma(e){return typeof e=="string"&&!0}var Qp=typeof Symbol=="function"&&Symbol.for,qp=Qp?Symbol.for("react.memo"):60115,Q1=Qp?Symbol.for("react.forward_ref"):60112,q1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},X1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Z1=((Fa={})[Q1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fa[qp]=Xp,Fa);function Wd(e){return("type"in(t=e)&&t.type.$$typeof)===qp?Xp:"$$typeof"in e?Z1[e.$$typeof]:q1;var t}var ey=Object.defineProperty,ty=Object.getOwnPropertyNames,Gd=Object.getOwnPropertySymbols,ny=Object.getOwnPropertyDescriptor,ry=Object.getPrototypeOf,Kd=Object.prototype;function Zp(e,t,n){if(typeof t!="string"){if(Kd){var r=ry(t);r&&r!==Kd&&Zp(e,r,n)}var i=ty(t);Gd&&(i=i.concat(Gd(t)));for(var s=Wd(e),o=Wd(t),a=0;a<i.length;++a){var l=i[a];if(!(l in X1||n&&n[l]||o&&l in o||s&&l in s)){var u=ny(t,l);try{ey(e,l,u)}catch{}}}}return e}function zn(e){return typeof e=="function"}function ac(e){return typeof e=="object"&&"styledComponentId"in e}function Pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function fo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ji(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yl(e,t,n){if(n===void 0&&(n=!1),!n&&!ji(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Yl(e[r],t[r]);else if(ji(t))for(var r in t)e[r]=Yl(e[r],t[r]);return e}function lc(e,t){Object.defineProperty(e,"toString",{value:t})}function dn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var iy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw dn(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Ls=new Map,ho=new Map,Ns=1,ds=function(e){if(Ls.has(e))return Ls.get(e);for(;ho.has(Ns);)Ns++;var t=Ns++;return Ls.set(e,t),ho.set(t,e),t},sy=function(e,t){Ns=t+1,Ls.set(e,t),ho.set(t,e)},oy="style[".concat(xr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),ay=new RegExp("^".concat(xr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ly=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},uy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(ay);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(sy(c,u),ly(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function cy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(xr,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(xr,"active"),r.setAttribute("data-styled-version","6.1.1");var o=cy();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},dy=function(){function e(t){this.element=e0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw dn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),fy=function(){function e(t){this.element=e0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),hy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Yd=sc,py={isServer:!sc,useCSSOMInjection:!H1},po=function(){function e(t,n,r){t===void 0&&(t=Er),n===void 0&&(n={});var i=this;this.options=pe(pe({},py),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&sc&&Yd&&(Yd=!1,function(s){for(var o=document.querySelectorAll(oy),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(xr)!=="active"&&(uy(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),lc(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var h=function(p){return ho.get(p)}(d);if(h===void 0)return"continue";var m=s.names.get(h),v=o.getGroup(d);if(m===void 0||v.length===0)return"continue";var y="".concat(xr,".g").concat(d,'[id="').concat(h,'"]'),S="";m!==void 0&&m.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),l+="".concat(v).concat(y,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return ds(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(pe(pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new hy(i):r?new dy(i):new fy(i)}(this.options),new iy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ds(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ds(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ds(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),my=/&/g,gy=/^\s*\/\/.*$/gm;function t0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=t0(n.children,t)),n})}function yy(e){var t,n,r,i=e===void 0?Er:e,s=i.options,o=s===void 0?Er:s,a=i.plugins,l=a===void 0?No:a,u=function(h,m,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===Io&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(my,n).replace(r,u))}),o.prefix&&c.push(V1),c.push(M1);var d=function(h,m,v,y){m===void 0&&(m=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(gy,""),p=D1(v||m?"".concat(v," ").concat(m," { ").concat(S," }"):S);o.namespace&&(p=t0(p,o.namespace));var f=[];return co(p,U1(c.concat(B1(function(g){return f.push(g)})))),f};return d.hash=l.length?l.reduce(function(h,m){return m.name||dn(15),sr(h,m.name)},5381).toString():"",d}var vy=new po,Jl=yy(),n0=Re.createContext({shouldForwardProp:void 0,styleSheet:vy,stylis:Jl});n0.Consumer;Re.createContext(void 0);function Ql(){return b.useContext(n0)}var r0=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Jl);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,lc(this,function(){throw dn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Jl),this.name+t.hash},e}(),wy=function(e){return e>="A"&&e<="Z"};function Jd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;wy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var i0=function(e){return e==null||e===!1||e===""},s0=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!i0(s)&&(Array.isArray(s)&&s.isCss||zn(s)?r.push("".concat(Jd(i),":"),s,";"):ji(s)?r.push.apply(r,_r(_r(["".concat(i," {")],s0(s),!1),["}"],!1)):r.push("".concat(Jd(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Gp||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ln(e,t,n,r){if(i0(e))return[];if(ac(e))return[".".concat(e.styledComponentId)];if(zn(e)){if(!zn(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return ln(i,t,n,r)}var s;return e instanceof r0?n?(e.inject(n,r),[e.getName(r)]):[e]:ji(e)?s0(e):Array.isArray(e)?Array.prototype.concat.apply(No,e.map(function(o){return ln(o,t,n,r)})):[e.toString()]}function o0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zn(n)&&!ac(n))return!1}return!0}var _y=Jp("6.1.1"),Sy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&o0(t),this.componentId=n,this.baseHash=sr(_y,n),this.baseStyle=r,po.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Pn(i,this.staticRulesId);else{var s=fo(ln(this.rules,t,n,r)),o=Kl(sr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Pn(i,o),this.staticRulesId=o}else{for(var l=sr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=fo(ln(d,t,n,r));l=sr(l,h+c),u+=h}}if(u){var m=Kl(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=Pn(i,m)}}return i},e}(),$r=Re.createContext(void 0);$r.Consumer;function ky(){var e=b.useContext($r);if(!e)throw dn(18);return e}function xy(e){var t=Re.useContext($r),n=b.useMemo(function(){return function(r,i){if(!r)throw dn(14);if(zn(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw dn(8);return i?pe(pe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Re.createElement($r.Provider,{value:n},e.children):null}var Ua={};function Ey(e,t,n){var r=ac(e),i=e,s=!Ma(e),o=t.attrs,a=o===void 0?No:o,l=t.componentId,u=l===void 0?function(w,x){var E=typeof w!="string"?"sc":Vd(w);Ua[E]=(Ua[E]||0)+1;var k="".concat(E,"-").concat(oc("6.1.1"+E+Ua[E]));return x?"".concat(x,"-").concat(k):k}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(w){return Ma(w)?"styled.".concat(w):"Styled(".concat(J1(w),")")}(e):c,h=t.displayName&&t.componentId?"".concat(Vd(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(w,x){return y(w,x)&&S(w,x)}}else v=y}var p=new Sy(n,h,r?i.componentStyle:void 0);function f(w,x){return function(E,k,j){var K=E.attrs,L=E.componentStyle,Fe=E.defaultProps,mn=E.foldedComponentIds,gn=E.styledComponentId,Gi=E.target,ca=Re.useContext($r),Nr=Ql(),yn=E.shouldForwardProp||Nr.shouldForwardProp,P=function(Qe,bt,qe){for(var yt,vn=pe(pe({},bt),{className:void 0,theme:qe}),da=0;da<Qe.length;da+=1){var Ki=zn(yt=Qe[da])?yt(vn):yt;for(var Ut in Ki)vn[Ut]=Ut==="className"?Pn(vn[Ut],Ki[Ut]):Ut==="style"?pe(pe({},vn[Ut]),Ki[Ut]):Ki[Ut]}return bt.className&&(vn.className=Pn(vn.className,bt.className)),vn}(K,k,Kp(k,ca,Fe)||Er),O=P.as||Gi,I={};for(var B in P)P[B]===void 0||B[0]==="$"||B==="as"||B==="theme"||(B==="forwardedAs"?I.as=P.forwardedAs:yn&&!yn(B,O)||(I[B]=P[B]));var ie=function(Qe,bt){var qe=Ql(),yt=Qe.generateAndInjectStyles(bt,qe.styleSheet,qe.stylis);return yt}(L,P),Mt=Pn(mn,gn);return ie&&(Mt+=" "+ie),P.className&&(Mt+=" "+P.className),I[Ma(O)&&!Yp.has(O)?"class":"className"]=Mt,I.ref=j,b.createElement(O,I)}(g,w,x)}f.displayName=d;var g=Re.forwardRef(f);return g.attrs=m,g.componentStyle=p,g.displayName=d,g.shouldForwardProp=v,g.foldedComponentIds=r?Pn(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=h,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(x){for(var E=[],k=1;k<arguments.length;k++)E[k-1]=arguments[k];for(var j=0,K=E;j<K.length;j++)Yl(x,K[j],!0);return x}({},i.defaultProps,w):w}}),lc(g,function(){return".".concat(g.styledComponentId)}),s&&Zp(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Qd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var qd=function(e){return Object.assign(e,{isCss:!0})};function zo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zn(e)||ji(e)){var r=e;return qd(ln(Qd(No,_r([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ln(i):qd(ln(Qd(i,t)))}function ql(e,t,n){if(n===void 0&&(n=Er),!t)throw dn(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,zo.apply(void 0,_r([i],s,!1)))};return r.attrs=function(i){return ql(e,t,pe(pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ql(e,t,pe(pe({},n),i))},r}var a0=function(e){return ql(Ey,e)},R=a0;Yp.forEach(function(e){R[e]=a0(e)});var $y=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=o0(t),po.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(fo(ln(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&po.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Cy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zo.apply(void 0,_r([e],t,!1)),i="sc-global-".concat(oc(JSON.stringify(r))),s=new $y(r,i),o=function(l){var u=Ql(),c=Re.useContext($r),d=Re.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Re.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,h){if(s.isStatic)s.renderStyles(l,W1,c,h);else{var m=pe(pe({},u),{theme:Kp(u,d,o.defaultProps)});s.renderStyles(l,m,c,h)}}return Re.memo(o)}function by(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=fo(zo.apply(void 0,_r([e],t,!1))),i=oc(r);return new r0(i,r)}const Py=e=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},b.createElement("path",{d:"M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"})),Ty=e=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},b.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"})),Xl=e=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},b.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})),jy="/assets/scott-yERU3hYK.jpg";function Oy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Iy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ry=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Iy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Oy(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ee="-ms-",mo="-moz-",M="-webkit-",l0="comm",uc="rule",cc="decl",Ay="@import",u0="@keyframes",Ly="@layer",Ny=Math.abs,Do=String.fromCharCode,zy=Object.assign;function Dy(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function c0(e){return e.trim()}function Fy(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function Zl(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function Oi(e,t,n){return e.slice(t,n)}function St(e){return e.length}function dc(e){return e.length}function fs(e,t){return t.push(e),e}function My(e,t){return e.map(t).join("")}var Fo=1,Cr=1,d0=0,De=0,ae=0,Ir="";function Mo(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Fo,column:Cr,length:o,return:""}}function Wr(e,t){return zy(Mo("",null,null,"",null,null,0),e,{length:-e.length},t)}function Uy(){return ae}function By(){return ae=De>0?we(Ir,--De):0,Cr--,ae===10&&(Cr=1,Fo--),ae}function We(){return ae=De<d0?we(Ir,De++):0,Cr++,ae===10&&(Cr=1,Fo++),ae}function Ct(){return we(Ir,De)}function zs(){return De}function Bi(e,t){return Oi(Ir,e,t)}function Ii(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function f0(e){return Fo=Cr=1,d0=St(Ir=e),De=0,[]}function h0(e){return Ir="",e}function Ds(e){return c0(Bi(De-1,eu(e===91?e+2:e===40?e+1:e)))}function Vy(e){for(;(ae=Ct())&&ae<33;)We();return Ii(e)>2||Ii(ae)>3?"":" "}function Hy(e,t){for(;--t&&We()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return Bi(e,zs()+(t<6&&Ct()==32&&We()==32))}function eu(e){for(;We();)switch(ae){case e:return De;case 34:case 39:e!==34&&e!==39&&eu(ae);break;case 40:e===41&&eu(e);break;case 92:We();break}return De}function Wy(e,t){for(;We()&&e+ae!==57;)if(e+ae===84&&Ct()===47)break;return"/*"+Bi(t,De-1)+"*"+Do(e===47?e:We())}function Gy(e){for(;!Ii(Ct());)We();return Bi(e,De)}function Ky(e){return h0(Fs("",null,null,null,[""],e=f0(e),0,[0],e))}function Fs(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,m=0,v=0,y=1,S=1,p=1,f=0,g="",w=i,x=s,E=r,k=g;S;)switch(v=f,f=We()){case 40:if(v!=108&&we(k,d-1)==58){Zl(k+=U(Ds(f),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:k+=Ds(f);break;case 9:case 10:case 13:case 32:k+=Vy(v);break;case 92:k+=Hy(zs()-1,7);continue;case 47:switch(Ct()){case 42:case 47:fs(Yy(Wy(We(),zs()),t,n),l);break;default:k+="/"}break;case 123*y:a[u++]=St(k)*p;case 125*y:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+c:p==-1&&(k=U(k,/\f/g,"")),m>0&&St(k)-d&&fs(m>32?Zd(k+";",r,n,d-1):Zd(U(k," ","")+";",r,n,d-2),l);break;case 59:k+=";";default:if(fs(E=Xd(k,t,n,u,c,i,a,g,w=[],x=[],d),s),f===123)if(c===0)Fs(k,t,E,E,w,s,d,a,x);else switch(h===99&&we(k,3)===110?100:h){case 100:case 108:case 109:case 115:Fs(e,E,E,r&&fs(Xd(e,E,E,0,0,i,a,g,i,w=[],d),x),i,x,d,a,r?w:x);break;default:Fs(k,E,E,E,[""],x,0,a,x)}}u=c=m=0,y=p=1,g=k="",d=o;break;case 58:d=1+St(k),m=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&By()==125)continue}switch(k+=Do(f),f*y){case 38:p=c>0?1:(k+="\f",-1);break;case 44:a[u++]=(St(k)-1)*p,p=1;break;case 64:Ct()===45&&(k+=Ds(We())),h=Ct(),c=d=St(g=k+=Gy(zs())),f++;break;case 45:v===45&&St(k)==2&&(y=0)}}return s}function Xd(e,t,n,r,i,s,o,a,l,u,c){for(var d=i-1,h=i===0?s:[""],m=dc(h),v=0,y=0,S=0;v<r;++v)for(var p=0,f=Oi(e,d+1,d=Ny(y=o[v])),g=e;p<m;++p)(g=c0(y>0?h[p]+" "+f:U(f,/&\f/g,h[p])))&&(l[S++]=g);return Mo(e,t,n,i===0?uc:a,l,u,c)}function Yy(e,t,n){return Mo(e,t,n,l0,Do(Uy()),Oi(e,2,-2),0)}function Zd(e,t,n,r){return Mo(e,t,n,cc,Oi(e,0,r),Oi(e,r+1,-1),r)}function fr(e,t){for(var n="",r=dc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Jy(e,t,n,r){switch(e.type){case Ly:if(e.children.length)break;case Ay:case cc:return e.return=e.return||e.value;case l0:return"";case u0:return e.return=e.value+"{"+fr(e.children,r)+"}";case uc:e.value=e.props.join(",")}return St(n=fr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Qy(e){var t=dc(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function qy(e){return function(t){t.root||(t=t.return)&&e(t)}}var Xy=function(t,n,r){for(var i=0,s=0;i=s,s=Ct(),i===38&&s===12&&(n[r]=1),!Ii(s);)We();return Bi(t,De)},Zy=function(t,n){var r=-1,i=44;do switch(Ii(i)){case 0:i===38&&Ct()===12&&(n[r]=1),t[r]+=Xy(De-1,n,r);break;case 2:t[r]+=Ds(i);break;case 4:if(i===44){t[++r]=Ct()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Do(i)}while(i=We());return t},ev=function(t,n){return h0(Zy(f0(t),n))},ef=new WeakMap,tv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ef.get(r))&&!i){ef.set(t,!0);for(var s=[],o=ev(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},nv=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function p0(e,t){switch(Dy(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+mo+e+Ee+e+e;case 6828:case 4268:return M+e+Ee+e+e;case 6165:return M+e+Ee+"flex-"+e+e;case 5187:return M+e+U(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+Ee+"flex-$1$2")+e;case 5443:return M+e+Ee+"flex-item-"+U(e,/flex-|-self/,"")+e;case 4675:return M+e+Ee+"flex-line-pack"+U(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+Ee+U(e,"shrink","negative")+e;case 5292:return M+e+Ee+U(e,"basis","preferred-size")+e;case 6060:return M+"box-"+U(e,"-grow","")+M+e+Ee+U(e,"grow","positive")+e;case 4554:return M+U(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(St(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+mo+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zl(e,"stretch")?p0(U(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,St(e)-3-(~Zl(e,"!important")&&10))){case 107:return U(e,":",":"+M)+e;case 101:return U(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(we(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+Ee+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return M+e+Ee+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+Ee+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+Ee+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+Ee+e+e}return e}var rv=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case cc:t.return=p0(t.value,t.length);break;case u0:return fr([Wr(t,{value:U(t.value,"@","@"+M)})],i);case uc:if(t.length)return My(t.props,function(s){switch(Fy(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fr([Wr(t,{props:[U(s,/:(read-\w+)/,":"+mo+"$1")]})],i);case"::placeholder":return fr([Wr(t,{props:[U(s,/:(plac\w+)/,":"+M+"input-$1")]}),Wr(t,{props:[U(s,/:(plac\w+)/,":"+mo+"$1")]}),Wr(t,{props:[U(s,/:(plac\w+)/,Ee+"input-$1")]})],i)}return""})}},iv=[rv],sv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var S=y.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||iv,s={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var S=y.getAttribute("data-emotion").split(" "),p=1;p<S.length;p++)s[S[p]]=!0;a.push(y)});var l,u=[tv,nv];{var c,d=[Jy,qy(function(y){c.insert(y)})],h=Qy(u.concat(i,d)),m=function(S){return fr(Ky(S),h)};l=function(S,p,f,g){c=f,m(S?S+"{"+p.styles+"}":p.styles),g&&(v.inserted[p.name]=!0)}}var v={key:n,sheet:new Ry({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},m0={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge=typeof Symbol=="function"&&Symbol.for,fc=ge?Symbol.for("react.element"):60103,hc=ge?Symbol.for("react.portal"):60106,Uo=ge?Symbol.for("react.fragment"):60107,Bo=ge?Symbol.for("react.strict_mode"):60108,Vo=ge?Symbol.for("react.profiler"):60114,Ho=ge?Symbol.for("react.provider"):60109,Wo=ge?Symbol.for("react.context"):60110,pc=ge?Symbol.for("react.async_mode"):60111,Go=ge?Symbol.for("react.concurrent_mode"):60111,Ko=ge?Symbol.for("react.forward_ref"):60112,Yo=ge?Symbol.for("react.suspense"):60113,ov=ge?Symbol.for("react.suspense_list"):60120,Jo=ge?Symbol.for("react.memo"):60115,Qo=ge?Symbol.for("react.lazy"):60116,av=ge?Symbol.for("react.block"):60121,lv=ge?Symbol.for("react.fundamental"):60117,uv=ge?Symbol.for("react.responder"):60118,cv=ge?Symbol.for("react.scope"):60119;function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fc:switch(e=e.type,e){case pc:case Go:case Uo:case Vo:case Bo:case Yo:return e;default:switch(e=e&&e.$$typeof,e){case Wo:case Ko:case Qo:case Jo:case Ho:return e;default:return t}}case hc:return t}}}function g0(e){return Je(e)===Go}W.AsyncMode=pc;W.ConcurrentMode=Go;W.ContextConsumer=Wo;W.ContextProvider=Ho;W.Element=fc;W.ForwardRef=Ko;W.Fragment=Uo;W.Lazy=Qo;W.Memo=Jo;W.Portal=hc;W.Profiler=Vo;W.StrictMode=Bo;W.Suspense=Yo;W.isAsyncMode=function(e){return g0(e)||Je(e)===pc};W.isConcurrentMode=g0;W.isContextConsumer=function(e){return Je(e)===Wo};W.isContextProvider=function(e){return Je(e)===Ho};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fc};W.isForwardRef=function(e){return Je(e)===Ko};W.isFragment=function(e){return Je(e)===Uo};W.isLazy=function(e){return Je(e)===Qo};W.isMemo=function(e){return Je(e)===Jo};W.isPortal=function(e){return Je(e)===hc};W.isProfiler=function(e){return Je(e)===Vo};W.isStrictMode=function(e){return Je(e)===Bo};W.isSuspense=function(e){return Je(e)===Yo};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Uo||e===Go||e===Vo||e===Bo||e===Yo||e===ov||typeof e=="object"&&e!==null&&(e.$$typeof===Qo||e.$$typeof===Jo||e.$$typeof===Ho||e.$$typeof===Wo||e.$$typeof===Ko||e.$$typeof===lv||e.$$typeof===uv||e.$$typeof===cv||e.$$typeof===av)};W.typeOf=Je;m0.exports=W;var dv=m0.exports,y0=dv,fv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v0={};v0[y0.ForwardRef]=fv;v0[y0.Memo]=hv;var pv=!0;function w0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var mc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||pv===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},_0=function(t,n,r){mc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function mv(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var gv=/[A-Z]|^ms/g,yv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,S0=function(t){return t.charCodeAt(1)===45},tf=function(t){return t!=null&&typeof t!="boolean"},Ba=E1(function(e){return S0(e)?e:e.replace(gv,"-$&").toLowerCase()}),nf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(yv,function(r,i,s){return kt={name:i,styles:s,next:kt},i})}return Gp[t]!==1&&!S0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ri(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return kt={name:n.name,styles:n.styles,next:kt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)kt={name:r.name,styles:r.styles,next:kt},r=r.next;var i=n.styles+";";return i}return vv(e,t,n)}case"function":{if(e!==void 0){var s=kt,o=n(e);return kt=s,Ri(e,t,o)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function vv(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ri(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=s+"{"+t[o]+"}":tf(o)&&(r+=Ba(s)+":"+nf(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var a=0;a<o.length;a++)tf(o[a])&&(r+=Ba(s)+":"+nf(s,o[a])+";");else{var l=Ri(e,t,o);switch(s){case"animation":case"animationName":{r+=Ba(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var rf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,kt,gc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";kt=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,s+=Ri(r,n,o)):s+=o[0];for(var a=1;a<t.length;a++)s+=Ri(r,n,t[a]),i&&(s+=o[a]);rf.lastIndex=0;for(var l="",u;(u=rf.exec(s))!==null;)l+="-"+u[1];var c=mv(s)+l;return{name:c,styles:s,next:kt}},wv=function(t){return t()},_v=Rc.useInsertionEffect?Rc.useInsertionEffect:!1,k0=_v||wv,yc={}.hasOwnProperty,x0=b.createContext(typeof HTMLElement<"u"?sv({key:"css"}):null);x0.Provider;var E0=function(t){return b.forwardRef(function(n,r){var i=b.useContext(x0);return t(n,i,r)})},$0=b.createContext({}),tu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Sv=function(t,n){var r={};for(var i in n)yc.call(n,i)&&(r[i]=n[i]);return r[tu]=t,r},kv=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return mc(n,r,i),k0(function(){return _0(n,r,i)}),null},xv=E0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[tu],s=[r],o="";typeof e.className=="string"?o=w0(t.registered,s,e.className):e.className!=null&&(o=e.className+" ");var a=gc(s,void 0,b.useContext($0));o+=t.key+"-"+a.name;var l={};for(var u in e)yc.call(e,u)&&u!=="css"&&u!==tu&&(l[u]=e[u]);return l.ref=n,l.className=o,b.createElement(b.Fragment,null,b.createElement(kv,{cache:t,serialized:a,isStringTag:typeof i=="string"}),b.createElement(i,l))}),Ev=xv,$v=_.Fragment;function de(e,t,n){return yc.call(t,"css")?_.jsx(Ev,Sv(e,t),n):_.jsx(e,t,n)}function C0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return gc(t)}var C=function(){var t=C0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Cv=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var s=t[r];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=e(s);else{o="";for(var a in s)s[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=s}o&&(i&&(i+=" "),i+=o)}}return i};function bv(e,t,n){var r=[],i=w0(e,r,n);return r.length<2?n:i+t(r)}var Pv=function(t){var n=t.cache,r=t.serializedArr;return k0(function(){for(var i=0;i<r.length;i++)_0(n,r[i],!1)}),null},Va=E0(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];var h=gc(c,t.registered);return r.push(h),mc(t,h,!1),t.key+"-"+h.name},s=function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];return bv(t.registered,i,Cv(c))},o={css:i,cx:s,theme:b.useContext($0)},a=e.children(o);return n=!0,b.createElement(b.Fragment,null,b.createElement(Pv,{cache:t,serializedArr:r}),a)}),Tv=Object.defineProperty,jv=(e,t,n)=>t in e?Tv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hs=(e,t,n)=>(jv(e,typeof t!="symbol"?t+"":t,n),n),nu=new Map,ps=new WeakMap,sf=0,Ov=void 0;function Iv(e){return e?(ps.has(e)||(sf+=1,ps.set(e,sf.toString())),ps.get(e)):"0"}function Rv(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Iv(e.root):e[t]}`).toString()}function Av(e){let t=Rv(e),n=nu.get(t);if(!n){const r=new Map;let i;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const u=a.isIntersecting&&i.some(c=>a.intersectionRatio>=c);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=r.get(a.target))==null||l.forEach(c=>{c(u,a)})})},e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:r},nu.set(t,n)}return n}function b0(e,t,n={},r=Ov){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:s,elements:o}=Av(n);let a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(o.delete(e),s.unobserve(e)),o.size===0&&(s.disconnect(),nu.delete(i))}}function Lv(e){return typeof e.children!="function"}var of=class extends b.Component{constructor(e){super(e),hs(this,"node",null),hs(this,"_unobserveCb",null),hs(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),hs(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Lv(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:s}=this.props;this._unobserveCb=b0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:m,entry:v}=this.state;return e({inView:m,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:s,onChange:o,skip:a,trackVisibility:l,delay:u,initialInView:c,fallbackInView:d,...h}=this.props;return b.createElement(t||"div",{ref:this.handleNode,...h},e)}};function P0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:u}={}){var c;const[d,h]=b.useState(null),m=b.useRef(),[v,y]=b.useState({inView:!!a,entry:void 0});m.current=u,b.useEffect(()=>{if(o||!d)return;let g;return g=b0(d,(w,x)=>{y({inView:w,entry:x}),m.current&&m.current(w,x),x.isIntersecting&&s&&g&&(g(),g=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{g&&g()}},[Array.isArray(e)?e.toString():e,d,i,r,s,o,n,l,t]);const S=(c=v.entry)==null?void 0:c.target,p=b.useRef();!d&&S&&!s&&!o&&p.current!==S&&(p.current=S,y({inView:!!a,entry:void 0}));const f=[h,v.inView,v.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var T0={exports:{}},G={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc=Symbol.for("react.element"),wc=Symbol.for("react.portal"),qo=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Zo=Symbol.for("react.profiler"),ea=Symbol.for("react.provider"),ta=Symbol.for("react.context"),Nv=Symbol.for("react.server_context"),na=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),sa=Symbol.for("react.memo"),oa=Symbol.for("react.lazy"),zv=Symbol.for("react.offscreen"),j0;j0=Symbol.for("react.module.reference");function at(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case vc:switch(e=e.type,e){case qo:case Zo:case Xo:case ra:case ia:return e;default:switch(e=e&&e.$$typeof,e){case Nv:case ta:case na:case oa:case sa:case ea:return e;default:return t}}case wc:return t}}}G.ContextConsumer=ta;G.ContextProvider=ea;G.Element=vc;G.ForwardRef=na;G.Fragment=qo;G.Lazy=oa;G.Memo=sa;G.Portal=wc;G.Profiler=Zo;G.StrictMode=Xo;G.Suspense=ra;G.SuspenseList=ia;G.isAsyncMode=function(){return!1};G.isConcurrentMode=function(){return!1};G.isContextConsumer=function(e){return at(e)===ta};G.isContextProvider=function(e){return at(e)===ea};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vc};G.isForwardRef=function(e){return at(e)===na};G.isFragment=function(e){return at(e)===qo};G.isLazy=function(e){return at(e)===oa};G.isMemo=function(e){return at(e)===sa};G.isPortal=function(e){return at(e)===wc};G.isProfiler=function(e){return at(e)===Zo};G.isStrictMode=function(e){return at(e)===Xo};G.isSuspense=function(e){return at(e)===ra};G.isSuspenseList=function(e){return at(e)===ia};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qo||e===Zo||e===Xo||e===ra||e===ia||e===zv||typeof e=="object"&&e!==null&&(e.$$typeof===oa||e.$$typeof===sa||e.$$typeof===ea||e.$$typeof===ta||e.$$typeof===na||e.$$typeof===j0||e.getModuleId!==void 0)};G.typeOf=at;T0.exports=G;var Dv=T0.exports;C`
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
`;const Fv=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Mv=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Uv=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bv=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vv=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_c=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hv=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wv=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gv=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Kv=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yv=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Jv=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qv=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function qv({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=_c,iterationCount:i=1}){return C0`
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
  `}function Xv(e){return e==null}function Zv(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function O0(e,t){return n=>n?e():t()}function Ai(e){return O0(e,()=>null)}function ru(e){return Ai(()=>({opacity:0}))(e)}const I0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:s=0,keyframes:o=_c,triggerOnce:a=!1,className:l,style:u,childClassName:c,childStyle:d,children:h,onVisibilityChange:m}=e,v=b.useMemo(()=>qv({keyframes:o,duration:i}),[i,o]);return Xv(h)?null:Zv(h)?de(tw,{...e,animationStyles:v,children:String(h)}):Dv.isFragment(h)?de(R0,{...e,animationStyles:v}):de($v,{children:b.Children.map(h,(y,S)=>{if(!b.isValidElement(y))return null;const p=r+(t?S*i*n:0);switch(y.type){case"ol":case"ul":return de(Va,{children:({cx:f})=>de(y.type,{...y.props,className:f(l,y.props.className),style:Object.assign({},u,y.props.style),children:de(I0,{...e,children:y.props.children})})});case"li":return de(of,{threshold:s,triggerOnce:a,onChange:m,children:({inView:f,ref:g})=>de(Va,{children:({cx:w})=>de(y.type,{...y.props,ref:g,className:w(c,y.props.className),css:Ai(()=>v)(f),style:Object.assign({},d,y.props.style,ru(!f),{animationDelay:p+"ms"})})})});default:return de(of,{threshold:s,triggerOnce:a,onChange:m,children:({inView:f,ref:g})=>de("div",{ref:g,className:l,css:Ai(()=>v)(f),style:Object.assign({},u,ru(!f),{animationDelay:p+"ms"}),children:de(Va,{children:({cx:w})=>de(y.type,{...y.props,className:w(c,y.props.className),style:Object.assign({},d,y.props.style)})})})})}})})},ew={display:"inline-block",whiteSpace:"pre"},tw=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,className:l,style:u,children:c,onVisibilityChange:d}=e,{ref:h,inView:m}=P0({triggerOnce:a,threshold:o,onChange:d});return O0(()=>de("div",{ref:h,className:l,style:Object.assign({},u,ew),children:c.split("").map((v,y)=>de("span",{css:Ai(()=>t)(m),style:{animationDelay:i+y*s*r+"ms"},children:v},y))}),()=>de(R0,{...e,children:c}))(n)},R0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:s,children:o,onVisibilityChange:a}=e,{ref:l,inView:u}=P0({triggerOnce:r,threshold:n,onChange:a});return de("div",{ref:l,className:i,css:Ai(()=>t)(u),style:Object.assign({},s,ru(!u)),children:o})};C`
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
`;const nw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,rw=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,iw=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,sw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,ow=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,aw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,lw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,uw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,cw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,dw=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,fw=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,hw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,pw=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function mw(e,t,n){switch(n){case"bottom-left":return t?rw:Mv;case"bottom-right":return t?iw:Uv;case"down":return e?t?ow:Vv:t?sw:Bv;case"left":return e?t?lw:Hv:t?aw:_c;case"right":return e?t?cw:Gv:t?uw:Wv;case"top-left":return t?dw:Kv;case"top-right":return t?fw:Yv;case"up":return e?t?pw:Qv:t?hw:Jv;default:return t?nw:Fv}}const Sc=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,s=b.useMemo(()=>mw(t,r,n),[t,n,r]);return de(I0,{keyframes:s,...i})};C`
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
`;const gw=R.h1`
  ${e=>e.theme.defaultProps}
  font-family: ${e=>e.theme.titleFont};
  color: ${e=>e.theme.text};
  font-size: 5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  transition-property: color;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
    margin-left: 1rem;
  }

  &:after {
    animation: ${e=>e.$animate?yw(e.$text):"none"}
      ${e=>(e.$text.length+(e.$text.length%2===0?1:.5))/5}s
      ease-in-out ${e=>e.id?e.id:"0s"};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    content: "";
    white-space: pre-wrap;
  }

  &:before {
    display: block;
    content: "${e=>e.$text}_";
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`,yw=e=>{var t="";const n=100/(e.length+(e.length%2===0?1:.5));for(let r=0;r<=e.length;r++)r%6<=2?t+=`
      ${(n*r).toFixed(2)}% {content: '${e.substring(0,r)}_${r<e.length?" ".repeat(e.length-r):""}'}`:t+=`
      ${(n*r).toFixed(2)}% {content: '${e.substring(0,r)+" ".repeat(e.length-r+1)}'}`;return t+=`
  100% {content: '${e+" "}'}`,by`${t}`},kc=({text:e,className:t=""})=>{const n=b.useRef(),r=vw(n,"-100px"),[i,s]=b.useState(!1);return b.useEffect(()=>{r&&s(!0)},[r]),_.jsx(gw,{className:t,$text:e,$animate:i,ref:n,"aria-label":e})};function vw(e,t="0px"){const[n,r]=b.useState(!1);return b.useEffect(()=>{const i=e.current,s=new IntersectionObserver(([o])=>{r(o.isIntersecting)},{rootMargin:t});return i&&s.observe(i),()=>{s.unobserve(i)}},[]),n}const A0=R.h2`
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

  @media screen and (max-width: 480px) {
    font-size: 1.75rem;
  }
`,Vi=R.a`
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
`,iu=R.p`
  align-self: center;
  font-family: ${e=>e.theme.bodyFont};
  justify-self: flex-start;
  margin: 0;
`;R(kc)`
  align-self: center;
  font-family: ${e=>e.theme.titleFont};
  margin: 1rem;
`;R.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;R.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 90%;
`;const aa=R.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  margin: -1rem 0;
  padding: 0;
`;R.div`
  ${e=>e.theme.defaultProps}

  border-bottom: 0.1rem solid ${e=>e.theme.accent2};
  margin: 1rem 0;
  width: 20%;
`;const ms=R.p`
  ${e=>e.theme.defaultProps}
  cursor: default;
  font-family: ${e=>e.theme.bodyFont};
  color: ${e=>e.theme.text2};
  margin: 0;
  margin-top: 0.5rem;
`;R.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;const ww=R.div`
  align-items: flex-start;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,gs=R(Vi)`
  align-self: unset;
  justify-content: center;
  margin: 1rem 2rem 0 0;
  width: fit-content;
`,_w=R.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: fit-content;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: self-start;
  }
`;R(kc)`
  align-self: center;
  font-family: ${e=>e.theme.titleFont};
  margin: 1rem;
  margin-bottom: 0rem;
`;const af=R.div`
  margin: 1rem 0 0;
`,Ha=R.p`
  ${e=>e.theme.defaultProps}
  cursor: default;
  font-family: ${e=>e.theme.titleFont};
  font-size: 1.25rem;
  color: ${e=>e.theme.accent};
  margin: 0;
`,Ze=R.textarea`
  align-self: ${e=>e.$align};
  background-color: inherit;
  border-color: ${e=>e.theme.accent2};
  border-style: solid;
  border-radius: 5px;
  display: flex;
  padding: 0.25rem;
  font-family: ${e=>e.theme.bodyFont};
  color: ${e=>e.theme.text2};
  width: ${e=>e.$width??"50vw"};
  height: ${e=>e.$height??"20vh"};
`,Sw="modulepreload",kw=function(e){return"/"+e},lf={},Hi=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=kw(o),o in lf)return;lf[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Sw,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},xw=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Hi(()=>Promise.resolve().then(()=>Wi),void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)};class xc extends Error{constructor(t,n="FunctionsError",r){super(t),this.name=n,this.context=r}}class Ew extends xc{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class $w extends xc{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class Cw extends xc{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var bw=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};class Pw{constructor(t,{headers:n={},customFetch:r}={}){this.url=t,this.headers=n,this.fetch=xw(r)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,n={}){var r;return bw(this,void 0,void 0,function*(){try{const{headers:i,method:s,body:o}=n;let a={},l;o&&(i&&!Object.prototype.hasOwnProperty.call(i,"Content-Type")||!i)&&(typeof Blob<"u"&&o instanceof Blob||o instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",l=o):typeof o=="string"?(a["Content-Type"]="text/plain",l=o):typeof FormData<"u"&&o instanceof FormData?l=o:(a["Content-Type"]="application/json",l=JSON.stringify(o)));const u=yield this.fetch(`${this.url}/${t}`,{method:s||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),i),body:l}).catch(m=>{throw new Ew(m)}),c=u.headers.get("x-relay-error");if(c&&c==="true")throw new $w(u);if(!u.ok)throw new Cw(u);let d=((r=u.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),h;return d==="application/json"?h=yield u.json():d==="application/octet-stream"?h=yield u.blob():d==="multipart/form-data"?h=yield u.formData():h=yield u.text(),{data:h,error:null}}catch(i){return{data:null,error:i}}})}}var Tw=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},br=Tw();const jw=br.fetch,Ec=br.fetch.bind(br),L0=br.Headers,Ow=br.Request,Iw=br.Response,Wi=Object.freeze(Object.defineProperty({__proto__:null,Headers:L0,Request:Ow,Response:Iw,default:Ec,fetch:jw},Symbol.toStringTag,{value:"Module"}));class Rw{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=Ec:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}then(t,n){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const r=this.fetch;let i=r(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async s=>{var o,a,l;let u=null,c=null,d=null,h=s.status,m=s.statusText;if(s.ok){if(this.method!=="HEAD"){const p=await s.text();p===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?c=p:c=JSON.parse(p))}const y=(o=this.headers.Prefer)===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),S=(a=s.headers.get("content-range"))===null||a===void 0?void 0:a.split("/");y&&S&&S.length>1&&(d=parseInt(S[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(c)&&(c.length>1?(u={code:"PGRST116",details:`Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},c=null,d=null,h=406,m="Not Acceptable"):c.length===1?c=c[0]:c=null)}else{const y=await s.text();try{u=JSON.parse(y),Array.isArray(u)&&s.status===404&&(c=[],u=null,h=200,m="OK")}catch{s.status===404&&y===""?(h=204,m="No Content"):u={message:y}}if(u&&this.isMaybeSingle&&(!((l=u==null?void 0:u.details)===null||l===void 0)&&l.includes("0 rows"))&&(u=null,h=200,m="OK"),u&&this.shouldThrowOnError)throw u}return{error:u,data:c,count:d,status:h,statusText:m}});return this.shouldThrowOnError||(i=i.catch(s=>{var o,a,l;return{error:{message:`${(o=s==null?void 0:s.name)!==null&&o!==void 0?o:"FetchError"}: ${s==null?void 0:s.message}`,details:`${(a=s==null?void 0:s.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=s==null?void 0:s.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),i.then(t,n)}}class Aw extends Rw{select(t){let n=!1;const r=(t??"*").split("").map(i=>/\s/.test(i)&&!n?"":(i==='"'&&(n=!n),i)).join("");return this.url.searchParams.set("select",r),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:n=!0,nullsFirst:r,foreignTable:i,referencedTable:s=i}={}){const o=s?`${s}.order`:"order",a=this.url.searchParams.get(o);return this.url.searchParams.set(o,`${a?`${a},`:""}${t}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:n,referencedTable:r=n}={}){const i=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(i,`${t}`),this}range(t,n,{foreignTable:r,referencedTable:i=r}={}){const s=typeof i>"u"?"offset":`${i}.offset`,o=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(s,`${t}`),this.url.searchParams.set(o,`${n-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:n=!1,settings:r=!1,buffers:i=!1,wal:s=!1,format:o="text"}={}){var a;const l=[t?"analyze":null,n?"verbose":null,r?"settings":null,i?"buffers":null,s?"wal":null].filter(Boolean).join("|"),u=(a=this.headers.Accept)!==null&&a!==void 0?a:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${o}; for="${u}"; options=${l};`,o==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}class Gn extends Aw{eq(t,n){return this.url.searchParams.append(t,`eq.${n}`),this}neq(t,n){return this.url.searchParams.append(t,`neq.${n}`),this}gt(t,n){return this.url.searchParams.append(t,`gt.${n}`),this}gte(t,n){return this.url.searchParams.append(t,`gte.${n}`),this}lt(t,n){return this.url.searchParams.append(t,`lt.${n}`),this}lte(t,n){return this.url.searchParams.append(t,`lte.${n}`),this}like(t,n){return this.url.searchParams.append(t,`like.${n}`),this}likeAllOf(t,n){return this.url.searchParams.append(t,`like(all).{${n.join(",")}}`),this}likeAnyOf(t,n){return this.url.searchParams.append(t,`like(any).{${n.join(",")}}`),this}ilike(t,n){return this.url.searchParams.append(t,`ilike.${n}`),this}ilikeAllOf(t,n){return this.url.searchParams.append(t,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(t,n){return this.url.searchParams.append(t,`ilike(any).{${n.join(",")}}`),this}is(t,n){return this.url.searchParams.append(t,`is.${n}`),this}in(t,n){const r=n.map(i=>typeof i=="string"&&new RegExp("[,()]").test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`in.(${r})`),this}contains(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cs.{${n.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(n)}`),this}containedBy(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cd.{${n.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(n)}`),this}rangeGt(t,n){return this.url.searchParams.append(t,`sr.${n}`),this}rangeGte(t,n){return this.url.searchParams.append(t,`nxl.${n}`),this}rangeLt(t,n){return this.url.searchParams.append(t,`sl.${n}`),this}rangeLte(t,n){return this.url.searchParams.append(t,`nxr.${n}`),this}rangeAdjacent(t,n){return this.url.searchParams.append(t,`adj.${n}`),this}overlaps(t,n){return typeof n=="string"?this.url.searchParams.append(t,`ov.${n}`):this.url.searchParams.append(t,`ov.{${n.join(",")}}`),this}textSearch(t,n,{config:r,type:i}={}){let s="";i==="plain"?s="pl":i==="phrase"?s="ph":i==="websearch"&&(s="w");const o=r===void 0?"":`(${r})`;return this.url.searchParams.append(t,`${s}fts${o}.${n}`),this}match(t){return Object.entries(t).forEach(([n,r])=>{this.url.searchParams.append(n,`eq.${r}`)}),this}not(t,n,r){return this.url.searchParams.append(t,`not.${n}.${r}`),this}or(t,{foreignTable:n,referencedTable:r=n}={}){const i=r?`${r}.or`:"or";return this.url.searchParams.append(i,`(${t})`),this}filter(t,n,r){return this.url.searchParams.append(t,`${n}.${r}`),this}}class Lw{constructor(t,{headers:n={},schema:r,fetch:i}){this.url=t,this.headers=n,this.schema=r,this.fetch=i}select(t,{head:n=!1,count:r}={}){const i=n?"HEAD":"GET";let s=!1;const o=(t??"*").split("").map(a=>/\s/.test(a)&&!s?"":(a==='"'&&(s=!s),a)).join("");return this.url.searchParams.set("select",o),r&&(this.headers.Prefer=`count=${r}`),new Gn({method:i,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:n,defaultToNull:r=!0}={}){const i="POST",s=[];if(this.headers.Prefer&&s.push(this.headers.Prefer),n&&s.push(`count=${n}`),r||s.push("missing=default"),this.headers.Prefer=s.join(","),Array.isArray(t)){const o=t.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(o.length>0){const a=[...new Set(o)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new Gn({method:i,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:n,ignoreDuplicates:r=!1,count:i,defaultToNull:s=!0}={}){const o="POST",a=[`resolution=${r?"ignore":"merge"}-duplicates`];if(n!==void 0&&this.url.searchParams.set("on_conflict",n),this.headers.Prefer&&a.push(this.headers.Prefer),i&&a.push(`count=${i}`),s||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const l=t.reduce((u,c)=>u.concat(Object.keys(c)),[]);if(l.length>0){const u=[...new Set(l)].map(c=>`"${c}"`);this.url.searchParams.set("columns",u.join(","))}}return new Gn({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:n}={}){const r="PATCH",i=[];return this.headers.Prefer&&i.push(this.headers.Prefer),n&&i.push(`count=${n}`),this.headers.Prefer=i.join(","),new Gn({method:r,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const n="DELETE",r=[];return t&&r.push(`count=${t}`),this.headers.Prefer&&r.unshift(this.headers.Prefer),this.headers.Prefer=r.join(","),new Gn({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}const Nw="1.9.0",zw={"X-Client-Info":`postgrest-js/${Nw}`};class $c{constructor(t,{headers:n={},schema:r,fetch:i}={}){this.url=t,this.headers=Object.assign(Object.assign({},zw),n),this.schemaName=r,this.fetch=i}from(t){const n=new URL(`${this.url}/${t}`);return new Lw(n,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new $c(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,n={},{head:r=!1,count:i}={}){let s;const o=new URL(`${this.url}/rpc/${t}`);let a;r?(s="HEAD",Object.entries(n).forEach(([u,c])=>{o.searchParams.append(u,`${c}`)})):(s="POST",a=n);const l=Object.assign({},this.headers);return i&&(l.Prefer=`count=${i}`),new Gn({method:s,url:o,headers:l,schema:this.schemaName,body:a,fetch:this.fetch,allowEmpty:!1})}}var Wa,uf;function Dw(){if(uf)return Wa;uf=1;var e=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return Wa=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return e()}try{return __global__||e()}finally{delete Object.prototype.__global__}}(),Wa}const Fw="websocket",Mw="Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",Uw=["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],Bw="Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",Vw=["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],Hw="1.0.34",Ww={type:"git",url:"https://github.com/theturtle32/WebSocket-Node.git"},Gw="https://github.com/theturtle32/WebSocket-Node",Kw={node:">=4.0.0"},Yw={bufferutil:"^4.0.1",debug:"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2",yaeti:"^0.0.6"},Jw={"buffer-equal":"^1.0.0",gulp:"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1",jshint:"^2.0.0",tape:"^4.9.1"},Qw={verbose:!1},qw={test:"tape test/unit/*.js",gulp:"gulp"},Xw="index",Zw={lib:"./lib"},e_="lib/browser.js",t_="Apache-2.0",n_={name:Fw,description:Mw,keywords:Uw,author:Bw,contributors:Vw,version:Hw,repository:Ww,homepage:Gw,engines:Kw,dependencies:Yw,devDependencies:Jw,config:Qw,scripts:qw,main:Xw,directories:Zw,browser:e_,license:t_};var r_=n_.version,xn;if(typeof globalThis=="object")xn=globalThis;else try{xn=Dw()}catch{}finally{if(!xn&&typeof window<"u"&&(xn=window),!xn)throw new Error("Could not determine global this")}var Li=xn.WebSocket||xn.MozWebSocket,i_=r_;function N0(e,t){var n;return t?n=new Li(e,t):n=new Li(e),n}Li&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(e){Object.defineProperty(N0,e,{get:function(){return Li[e]}})});var s_={w3cwebsocket:Li?N0:null,version:i_};const o_="2.8.4",a_={"X-Client-Info":`realtime-js/${o_}`},l_="1.0.0",z0=1e4,u_=1e3;var ci;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(ci||(ci={}));var Me;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(Me||(Me={}));var dt;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(dt||(dt={}));var su;(function(e){e.websocket="websocket"})(su||(su={}));var En;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(En||(En={}));class D0{constructor(t,n){this.callback=t,this.timerCalc=n,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=n}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}class c_{constructor(){this.HEADER_LENGTH=1}decode(t,n){return t.constructor===ArrayBuffer?n(this._binaryDecode(t)):n(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const n=new DataView(t),r=new TextDecoder;return this._decodeBroadcast(t,n,r)}_decodeBroadcast(t,n,r){const i=n.getUint8(1),s=n.getUint8(2);let o=this.HEADER_LENGTH+2;const a=r.decode(t.slice(o,o+i));o=o+i;const l=r.decode(t.slice(o,o+s));o=o+s;const u=JSON.parse(r.decode(t.slice(o,t.byteLength)));return{ref:null,topic:a,event:l,payload:u}}}class Ga{constructor(t,n,r={},i=z0){this.channel=t,this.event=n,this.payload=r,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,n){var r;return this._hasReceived(t)&&n((r=this.receivedResp)===null||r===void 0?void 0:r.response),this.recHooks.push({status:t,callback:n}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=n=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=n,this._matchReceive(n)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,n){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:n})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:n}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(n))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var cf;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(cf||(cf={}));class di{constructor(t,n){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const r=(n==null?void 0:n.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(r.state,{},i=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=di.syncState(this.state,i,s,o),this.pendingDiffs.forEach(l=>{this.state=di.syncDiff(this.state,l,s,o)}),this.pendingDiffs=[],a()}),this.channel._on(r.diff,{},i=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=di.syncDiff(this.state,i,s,o),a())}),this.onJoin((i,s,o)=>{this.channel._trigger("presence",{event:"join",key:i,currentPresences:s,newPresences:o})}),this.onLeave((i,s,o)=>{this.channel._trigger("presence",{event:"leave",key:i,currentPresences:s,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,n,r,i){const s=this.cloneDeep(t),o=this.transformState(n),a={},l={};return this.map(s,(u,c)=>{o[u]||(l[u]=c)}),this.map(o,(u,c)=>{const d=s[u];if(d){const h=c.map(S=>S.presence_ref),m=d.map(S=>S.presence_ref),v=c.filter(S=>m.indexOf(S.presence_ref)<0),y=d.filter(S=>h.indexOf(S.presence_ref)<0);v.length>0&&(a[u]=v),y.length>0&&(l[u]=y)}else a[u]=c}),this.syncDiff(s,{joins:a,leaves:l},r,i)}static syncDiff(t,n,r,i){const{joins:s,leaves:o}={joins:this.transformState(n.joins),leaves:this.transformState(n.leaves)};return r||(r=()=>{}),i||(i=()=>{}),this.map(s,(a,l)=>{var u;const c=(u=t[a])!==null&&u!==void 0?u:[];if(t[a]=this.cloneDeep(l),c.length>0){const d=t[a].map(m=>m.presence_ref),h=c.filter(m=>d.indexOf(m.presence_ref)<0);t[a].unshift(...h)}r(a,c,l)}),this.map(o,(a,l)=>{let u=t[a];if(!u)return;const c=l.map(d=>d.presence_ref);u=u.filter(d=>c.indexOf(d.presence_ref)<0),t[a]=u,i(a,u,l),u.length===0&&delete t[a]}),t}static map(t,n){return Object.getOwnPropertyNames(t).map(r=>n(r,t[r]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((n,r)=>{const i=t[r];return"metas"in i?n[r]=i.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):n[r]=i,n},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Y;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(Y||(Y={}));const df=(e,t,n={})=>{var r;const i=(r=n.skipTypes)!==null&&r!==void 0?r:[];return Object.keys(t).reduce((s,o)=>(s[o]=d_(o,e,t,i),s),{})},d_=(e,t,n,r)=>{const i=t.find(a=>a.name===e),s=i==null?void 0:i.type,o=n[e];return s&&!r.includes(s)?F0(s,o):ou(o)},F0=(e,t)=>{if(e.charAt(0)==="_"){const n=e.slice(1,e.length);return m_(t,n)}switch(e){case Y.bool:return f_(t);case Y.float4:case Y.float8:case Y.int2:case Y.int4:case Y.int8:case Y.numeric:case Y.oid:return h_(t);case Y.json:case Y.jsonb:return p_(t);case Y.timestamp:return g_(t);case Y.abstime:case Y.date:case Y.daterange:case Y.int4range:case Y.int8range:case Y.money:case Y.reltime:case Y.text:case Y.time:case Y.timestamptz:case Y.timetz:case Y.tsrange:case Y.tstzrange:return ou(t);default:return ou(t)}},ou=e=>e,f_=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},h_=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},p_=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},m_=(e,t)=>{if(typeof e!="string")return e;const n=e.length-1,r=e[n];if(e[0]==="{"&&r==="}"){let s;const o=e.slice(1,n);try{s=JSON.parse("["+o+"]")}catch{s=o?o.split(","):[]}return s.map(a=>F0(t,a))}return e},g_=e=>typeof e=="string"?e.replace(" ","T"):e;var ff;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(ff||(ff={}));var hf;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes"})(hf||(hf={}));var pf;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(pf||(pf={}));class Cc{constructor(t,n={config:{}},r){this.topic=t,this.params=n,this.socket=r,this.bindings={},this.state=Me.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},n.config),this.timeout=this.socket.timeout,this.joinPush=new Ga(this,dt.join,this.params,this.timeout),this.rejoinTimer=new D0(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Me.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Me.closed,this.socket._remove(this)}),this._onError(i=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,i),this.state=Me.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Me.errored,this.rejoinTimer.scheduleTimeout())}),this._on(dt.reply,{},(i,s)=>{this._trigger(this._replyEventName(s),i)}),this.presence=new di(this),this.broadcastEndpointURL=this._broadcastEndpointURL()}subscribe(t,n=this.timeout){var r,i;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:s,presence:o}}=this.params;this._onError(u=>t&&t("CHANNEL_ERROR",u)),this._onClose(()=>t&&t("CLOSED"));const a={},l={broadcast:s,presence:o,postgres_changes:(i=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(u=>u.filter))!==null&&i!==void 0?i:[]};this.socket.accessToken&&(a.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:l},a)),this.joinedOnce=!0,this._rejoin(n),this.joinPush.receive("ok",({postgres_changes:u})=>{var c;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),u===void 0){t&&t("SUBSCRIBED");return}else{const d=this.bindings.postgres_changes,h=(c=d==null?void 0:d.length)!==null&&c!==void 0?c:0,m=[];for(let v=0;v<h;v++){const y=d[v],{filter:{event:S,schema:p,table:f,filter:g}}=y,w=u&&u[v];if(w&&w.event===S&&w.schema===p&&w.table===f&&w.filter===g)m.push(Object.assign(Object.assign({},y),{id:w.id}));else{this.unsubscribe(),t&&t("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=m,t&&t("SUBSCRIBED");return}}).receive("error",u=>{t&&t("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(u).join(", ")||"error")))}).receive("timeout",()=>{t&&t("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(t,n={}){return await this.send({type:"presence",event:"track",payload:t},n.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,n,r){return this._on(t,n,r)}async send(t,n={}){var r,i;if(!this._canPush()&&t.type==="broadcast"){const{event:s,payload:o}=t,a={method:"POST",headers:{apikey:(r=this.socket.accessToken)!==null&&r!==void 0?r:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:o}]})};try{return(await this._fetchWithTimeout(this.broadcastEndpointURL,a,(i=n.timeout)!==null&&i!==void 0?i:this.timeout)).ok?"ok":"error"}catch(l){return l.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var o,a,l;const u=this._push(t.type,t,n.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(a=(o=this.params)===null||o===void 0?void 0:o.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),u.receive("ok",()=>s("ok")),u.receive("timeout",()=>s("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=Me.leaving;const n=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(dt.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(r=>{const i=new Ga(this,dt.leave,{},t);i.receive("ok",()=>{n(),r("ok")}).receive("timeout",()=>{n(),r("timed out")}).receive("error",()=>{r("error")}),i.send(),this._canPush()||i.trigger("ok",{})})}_broadcastEndpointURL(){let t=this.socket.endPoint;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"}async _fetchWithTimeout(t,n,r){const i=new AbortController,s=setTimeout(()=>i.abort(),r),o=await this.socket.fetch(t,Object.assign(Object.assign({},n),{signal:i.signal}));return clearTimeout(s),o}_push(t,n,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new Ga(this,t,n,r);return this._canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}_onMessage(t,n,r){return n}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,n,r){var i,s;const o=t.toLocaleLowerCase(),{close:a,error:l,leave:u,join:c}=dt;if(r&&[a,l,u,c].indexOf(o)>=0&&r!==this._joinRef())return;let h=this._onMessage(o,n,r);if(n&&!h)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(i=this.bindings.postgres_changes)===null||i===void 0||i.filter(m=>{var v,y,S;return((v=m.filter)===null||v===void 0?void 0:v.event)==="*"||((S=(y=m.filter)===null||y===void 0?void 0:y.event)===null||S===void 0?void 0:S.toLocaleLowerCase())===o}).map(m=>m.callback(h,r)):(s=this.bindings[o])===null||s===void 0||s.filter(m=>{var v,y,S,p,f,g;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in m){const w=m.id,x=(v=m.filter)===null||v===void 0?void 0:v.event;return w&&((y=n.ids)===null||y===void 0?void 0:y.includes(w))&&(x==="*"||(x==null?void 0:x.toLocaleLowerCase())===((S=n.data)===null||S===void 0?void 0:S.type.toLocaleLowerCase()))}else{const w=(f=(p=m==null?void 0:m.filter)===null||p===void 0?void 0:p.event)===null||f===void 0?void 0:f.toLocaleLowerCase();return w==="*"||w===((g=n==null?void 0:n.event)===null||g===void 0?void 0:g.toLocaleLowerCase())}else return m.type.toLocaleLowerCase()===o}).map(m=>{if(typeof h=="object"&&"ids"in h){const v=h.data,{schema:y,table:S,commit_timestamp:p,type:f,errors:g}=v;h=Object.assign(Object.assign({},{schema:y,table:S,commit_timestamp:p,eventType:f,new:{},old:{},errors:g}),this._getPayloadRecords(v))}m.callback(h,r)})}_isClosed(){return this.state===Me.closed}_isJoined(){return this.state===Me.joined}_isJoining(){return this.state===Me.joining}_isLeaving(){return this.state===Me.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,n,r){const i=t.toLocaleLowerCase(),s={type:i,filter:n,callback:r};return this.bindings[i]?this.bindings[i].push(s):this.bindings[i]=[s],this}_off(t,n){const r=t.toLocaleLowerCase();return this.bindings[r]=this.bindings[r].filter(i=>{var s;return!(((s=i.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===r&&Cc.isEqual(i.filter,n))}),this}static isEqual(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const r in t)if(t[r]!==n[r])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(dt.close,{},t)}_onError(t){this._on(dt.error,{},n=>t(n))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Me.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const n={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(n.new=df(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(n.old=df(t.columns,t.old_record)),n}}const y_=()=>{};class v_{constructor(t,n){var r;this.accessToken=null,this.channels=[],this.endPoint="",this.headers=a_,this.params={},this.timeout=z0,this.transport=s_.w3cwebsocket,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=y_,this.conn=null,this.sendBuffer=[],this.serializer=new c_,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=s=>{let o;return s?o=s:typeof fetch>"u"?o=(...a)=>Hi(()=>Promise.resolve().then(()=>Wi),void 0).then(({default:l})=>l(...a)):o=fetch,(...a)=>o(...a)},this.endPoint=`${t}/${su.websocket}`,n!=null&&n.params&&(this.params=n.params),n!=null&&n.headers&&(this.headers=Object.assign(Object.assign({},this.headers),n.headers)),n!=null&&n.timeout&&(this.timeout=n.timeout),n!=null&&n.logger&&(this.logger=n.logger),n!=null&&n.transport&&(this.transport=n.transport),n!=null&&n.heartbeatIntervalMs&&(this.heartbeatIntervalMs=n.heartbeatIntervalMs);const i=(r=n==null?void 0:n.params)===null||r===void 0?void 0:r.apikey;i&&(this.accessToken=i),this.reconnectAfterMs=n!=null&&n.reconnectAfterMs?n.reconnectAfterMs:s=>[1e3,2e3,5e3,1e4][s-1]||1e4,this.encode=n!=null&&n.encode?n.encode:(s,o)=>o(JSON.stringify(s)),this.decode=n!=null&&n.decode?n.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new D0(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(n==null?void 0:n.fetch)}connect(){this.conn||(this.conn=new this.transport(this._endPointURL(),[],null,this.headers),this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t)))}disconnect(t,n){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,n??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(t){const n=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),n}async removeAllChannels(){const t=await Promise.all(this.channels.map(n=>n.unsubscribe()));return this.disconnect(),t}log(t,n,r){this.logger(t,n,r)}connectionState(){switch(this.conn&&this.conn.readyState){case ci.connecting:return En.Connecting;case ci.open:return En.Open;case ci.closing:return En.Closing;default:return En.Closed}}isConnected(){return this.connectionState()===En.Open}channel(t,n={config:{}}){const r=new Cc(`realtime:${t}`,n,this);return this.channels.push(r),r}push(t){const{topic:n,event:r,payload:i,ref:s}=t,o=()=>{this.encode(t,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${n} ${r} (${s})`,i),this.isConnected()?o():this.sendBuffer.push(o)}setAuth(t){this.accessToken=t,this.channels.forEach(n=>{t&&n.updateJoinPayload({access_token:t}),n.joinedOnce&&n._isJoined()&&n._push(dt.access_token,{access_token:t})})}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let n=this.channels.find(r=>r.topic===t&&(r._isJoined()||r._isJoining()));n&&(this.log("transport",`leaving duplicate topic "${t}"`),n.unsubscribe())}_remove(t){this.channels=this.channels.filter(n=>n._joinRef()!==t._joinRef())}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:l_}))}_onConnMessage(t){this.decode(t.data,n=>{let{topic:r,event:i,payload:s,ref:o}=n;(o&&o===this.pendingHeartbeatRef||i===(s==null?void 0:s.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${s.status||""} ${r} ${i} ${o&&"("+o+")"||""}`,s),this.channels.filter(a=>a._isMember(r)).forEach(a=>a._trigger(i,s,o)),this.stateChangeCallbacks.message.forEach(a=>a(n))})}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach(t=>t())}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(n=>n(t))}_onConnError(t){this.log("transport",t.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(n=>n(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger(dt.error))}_appendParams(t,n){if(Object.keys(n).length===0)return t;const r=t.match(/\?/)?"&":"?",i=new URLSearchParams(n);return`${t}${r}${i}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_sendHeartbeat(){var t;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(t=this.conn)===null||t===void 0||t.close(u_,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}}class bc extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function $e(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class w_ extends bc{constructor(t,n){super(t),this.name="StorageApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class mf extends bc{constructor(t,n){super(t),this.name="StorageUnknownError",this.originalError=n}}var __=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const M0=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Hi(()=>Promise.resolve().then(()=>Wi),void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},S_=()=>__(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Hi(()=>Promise.resolve().then(()=>Wi),void 0)).Response:Response});var Rr=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const Ka=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),k_=(e,t)=>Rr(void 0,void 0,void 0,function*(){const n=yield S_();e instanceof n?e.json().then(r=>{t(new w_(Ka(r),e.status||500))}).catch(r=>{t(new mf(Ka(r),r))}):t(new mf(Ka(e),e))}),x_=(e,t,n,r)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};function la(e,t,n,r,i,s){return Rr(this,void 0,void 0,function*(){return new Promise((o,a)=>{e(n,x_(t,r,i,s)).then(l=>{if(!l.ok)throw l;return r!=null&&r.noResolveJson?l:l.json()}).then(l=>o(l)).catch(l=>k_(l,a))})})}function au(e,t,n,r){return Rr(this,void 0,void 0,function*(){return la(e,"GET",t,n,r)})}function Kt(e,t,n,r,i){return Rr(this,void 0,void 0,function*(){return la(e,"POST",t,r,i,n)})}function E_(e,t,n,r,i){return Rr(this,void 0,void 0,function*(){return la(e,"PUT",t,r,i,n)})}function U0(e,t,n,r,i){return Rr(this,void 0,void 0,function*(){return la(e,"DELETE",t,r,i,n)})}var Xe=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const $_={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},gf={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class C_{constructor(t,n={},r,i){this.url=t,this.headers=n,this.bucketId=r,this.fetch=M0(i)}uploadOrUpdate(t,n,r,i){return Xe(this,void 0,void 0,function*(){try{let s;const o=Object.assign(Object.assign({},gf),i),a=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(o.upsert)});typeof Blob<"u"&&r instanceof Blob?(s=new FormData,s.append("cacheControl",o.cacheControl),s.append("",r)):typeof FormData<"u"&&r instanceof FormData?(s=r,s.append("cacheControl",o.cacheControl)):(s=r,a["cache-control"]=`max-age=${o.cacheControl}`,a["content-type"]=o.contentType);const l=this._removeEmptyFolders(n),u=this._getFinalPath(l),c=yield this.fetch(`${this.url}/object/${u}`,Object.assign({method:t,body:s,headers:a},o!=null&&o.duplex?{duplex:o.duplex}:{}));return c.ok?{data:{path:l},error:null}:{data:null,error:yield c.json()}}catch(s){if($e(s))return{data:null,error:s};throw s}})}upload(t,n,r){return Xe(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,n,r)})}uploadToSignedUrl(t,n,r,i){return Xe(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(t),o=this._getFinalPath(s),a=new URL(this.url+`/object/upload/sign/${o}`);a.searchParams.set("token",n);try{let l;const u=Object.assign({upsert:gf.upsert},i),c=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.append("cacheControl",u.cacheControl)):(l=r,c["cache-control"]=`max-age=${u.cacheControl}`,c["content-type"]=u.contentType);const d=yield this.fetch(a.toString(),{method:"PUT",body:l,headers:c});return d.ok?{data:{path:s},error:null}:{data:null,error:yield d.json()}}catch(l){if($e(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t){return Xe(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const r=yield Kt(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:this.headers}),i=new URL(this.url+r.url),s=i.searchParams.get("token");if(!s)throw new bc("No token returned by API");return{data:{signedUrl:i.toString(),path:t,token:s},error:null}}catch(n){if($e(n))return{data:null,error:n};throw n}})}update(t,n,r){return Xe(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,n,r)})}move(t,n){return Xe(this,void 0,void 0,function*(){try{return{data:yield Kt(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n},{headers:this.headers}),error:null}}catch(r){if($e(r))return{data:null,error:r};throw r}})}copy(t,n){return Xe(this,void 0,void 0,function*(){try{return{data:{path:(yield Kt(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n},{headers:this.headers})).Key},error:null}}catch(r){if($e(r))return{data:null,error:r};throw r}})}createSignedUrl(t,n,r){return Xe(this,void 0,void 0,function*(){try{let i=this._getFinalPath(t),s=yield Kt(this.fetch,`${this.url}/object/sign/${i}`,Object.assign({expiresIn:n},r!=null&&r.transform?{transform:r.transform}:{}),{headers:this.headers});const o=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${o}`)},{data:s,error:null}}catch(i){if($e(i))return{data:null,error:i};throw i}})}createSignedUrls(t,n,r){return Xe(this,void 0,void 0,function*(){try{const i=yield Kt(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:n,paths:t},{headers:this.headers}),s=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return{data:i.map(o=>Object.assign(Object.assign({},o),{signedUrl:o.signedURL?encodeURI(`${this.url}${o.signedURL}${s}`):null})),error:null}}catch(i){if($e(i))return{data:null,error:i};throw i}})}download(t,n){return Xe(this,void 0,void 0,function*(){const i=typeof(n==null?void 0:n.transform)<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString((n==null?void 0:n.transform)||{}),o=s?`?${s}`:"";try{const a=this._getFinalPath(t);return{data:yield(yield au(this.fetch,`${this.url}/${i}/${a}${o}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if($e(a))return{data:null,error:a};throw a}})}getPublicUrl(t,n){const r=this._getFinalPath(t),i=[],s=n!=null&&n.download?`download=${n.download===!0?"":n.download}`:"";s!==""&&i.push(s);const a=typeof(n==null?void 0:n.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((n==null?void 0:n.transform)||{});l!==""&&i.push(l);let u=i.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${r}${u}`)}}}remove(t){return Xe(this,void 0,void 0,function*(){try{return{data:yield U0(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(n){if($e(n))return{data:null,error:n};throw n}})}list(t,n,r){return Xe(this,void 0,void 0,function*(){try{const i=Object.assign(Object.assign(Object.assign({},$_),n),{prefix:t||""});return{data:yield Kt(this.fetch,`${this.url}/object/list/${this.bucketId}`,i,{headers:this.headers},r),error:null}}catch(i){if($e(i))return{data:null,error:i};throw i}})}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const n=[];return t.width&&n.push(`width=${t.width}`),t.height&&n.push(`height=${t.height}`),t.resize&&n.push(`resize=${t.resize}`),t.format&&n.push(`format=${t.format}`),t.quality&&n.push(`quality=${t.quality}`),n.join("&")}}const b_="2.5.4",P_={"X-Client-Info":`storage-js/${b_}`};var Bn=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};class T_{constructor(t,n={},r){this.url=t,this.headers=Object.assign(Object.assign({},P_),n),this.fetch=M0(r)}listBuckets(){return Bn(this,void 0,void 0,function*(){try{return{data:yield au(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if($e(t))return{data:null,error:t};throw t}})}getBucket(t){return Bn(this,void 0,void 0,function*(){try{return{data:yield au(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(n){if($e(n))return{data:null,error:n};throw n}})}createBucket(t,n={public:!1}){return Bn(this,void 0,void 0,function*(){try{return{data:yield Kt(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if($e(r))return{data:null,error:r};throw r}})}updateBucket(t,n){return Bn(this,void 0,void 0,function*(){try{return{data:yield E_(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if($e(r))return{data:null,error:r};throw r}})}emptyBucket(t){return Bn(this,void 0,void 0,function*(){try{return{data:yield Kt(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(n){if($e(n))return{data:null,error:n};throw n}})}deleteBucket(t){return Bn(this,void 0,void 0,function*(){try{return{data:yield U0(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(n){if($e(n))return{data:null,error:n};throw n}})}}class j_ extends T_{constructor(t,n={},r){super(t,n,r)}from(t){return new C_(this.url,this.headers,t,this.fetch)}}const O_="2.38.5";let Xr="";typeof Deno<"u"?Xr="deno":typeof document<"u"?Xr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Xr="react-native":Xr="node";const I_={"X-Client-Info":`supabase-js-${Xr}/${O_}`};var R_=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const A_=e=>{let t;return e?t=e:typeof fetch>"u"?t=Ec:t=fetch,(...n)=>t(...n)},L_=()=>typeof Headers>"u"?L0:Headers,N_=(e,t,n)=>{const r=A_(n),i=L_();return(s,o)=>R_(void 0,void 0,void 0,function*(){var a;const l=(a=yield t())!==null&&a!==void 0?a:e;let u=new i(o==null?void 0:o.headers);return u.has("apikey")||u.set("apikey",e),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),r(s,Object.assign(Object.assign({},o),{headers:u}))})};function z_(e){return e.replace(/\/$/,"")}function D_(e,t){const{db:n,auth:r,realtime:i,global:s}=e,{db:o,auth:a,realtime:l,global:u}=t;return{db:Object.assign(Object.assign({},o),n),auth:Object.assign(Object.assign({},a),r),realtime:Object.assign(Object.assign({},l),i),global:Object.assign(Object.assign({},u),s)}}function F_(e){return Math.round(Date.now()/1e3)+e}function M_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const Pt=()=>typeof document<"u",wn={tested:!1,writable:!1},fi=()=>{if(!Pt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(wn.tested)return wn.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),wn.tested=!0,wn.writable=!0}catch{wn.tested=!0,wn.writable=!1}return wn.writable};function Ya(e){const t={},n=new URL(e);if(n.hash&&n.hash[0]==="#")try{new URLSearchParams(n.hash.substring(1)).forEach((i,s)=>{t[s]=i})}catch{}return n.searchParams.forEach((r,i)=>{t[i]=r}),t}const B0=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Hi(()=>Promise.resolve().then(()=>Wi),void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},U_=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",_n=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},ys=async(e,t)=>{const n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return n}},Ja=async(e,t)=>{await e.removeItem(t)};function B_(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let n="",r,i,s,o,a,l,u,c=0;for(e=e.replace("-","+").replace("_","/");c<e.length;)o=t.indexOf(e.charAt(c++)),a=t.indexOf(e.charAt(c++)),l=t.indexOf(e.charAt(c++)),u=t.indexOf(e.charAt(c++)),r=o<<2|a>>4,i=(a&15)<<4|l>>2,s=(l&3)<<6|u,n=n+String.fromCharCode(r),l!=64&&i!=0&&(n=n+String.fromCharCode(i)),u!=64&&s!=0&&(n=n+String.fromCharCode(s));return n}class ua{constructor(){this.promise=new ua.promiseConstructor((t,n)=>{this.resolve=t,this.reject=n})}}ua.promiseConstructor=Promise;function yf(e){const t=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,n=e.split(".");if(n.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!t.test(n[1]))throw new Error("JWT is not valid: payload is not in base64url format");const r=n[1];return JSON.parse(B_(r))}async function V_(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function H_(e,t){return new Promise((r,i)=>{(async()=>{for(let s=0;s<1/0;s++)try{const o=await e(s);if(!t(s,null,o)){r(o);return}}catch(o){if(!t(s,o)){i(o);return}}})()})}function W_(e){return("0"+e.toString(16)).substr(-2)}function Vn(){const t=new Uint32Array(56);if(typeof crypto>"u"){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=n.length;let i="";for(let s=0;s<56;s++)i+=n.charAt(Math.floor(Math.random()*r));return i}return crypto.getRandomValues(t),Array.from(t,W_).join("")}async function G_(e){const n=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",n),i=new Uint8Array(r);return Array.from(i).map(s=>String.fromCharCode(s)).join("")}function K_(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Hn(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const n=await G_(e);return K_(n)}class Pc extends Error{constructor(t,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=n}}function z(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class Y_ extends Pc{constructor(t,n){super(t,n),this.name="AuthApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}function J_(e){return z(e)&&e.name==="AuthApiError"}class V0 extends Pc{constructor(t,n){super(t),this.name="AuthUnknownError",this.originalError=n}}class Ar extends Pc{constructor(t,n,r){super(t),this.name=n,this.status=r}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Wn extends Ar{constructor(){super("Auth session missing!","AuthSessionMissingError",400)}}class Qa extends Ar{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500)}}class vs extends Ar{constructor(t){super(t,"AuthInvalidCredentialsError",400)}}class ws extends Ar{constructor(t,n=null){super(t,"AuthImplicitGrantRedirectError",500),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class vf extends Ar{constructor(t,n=null){super(t,"AuthPKCEGrantCodeExchangeError",500),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class lu extends Ar{constructor(t,n){super(t,"AuthRetryableFetchError",n)}}function wf(e){return z(e)&&e.name==="AuthRetryableFetchError"}var Q_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const Zr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),q_=[502,503,504];async function _f(e){if(!U_(e))throw new lu(Zr(e),0);if(q_.includes(e.status))throw new lu(Zr(e),e.status);let t;try{t=await e.json()}catch(n){throw new V0(Zr(n),n)}throw new Y_(Zr(t),e.status||500)}const X_=(e,t,n,r)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function F(e,t,n,r){var i;const s=Object.assign({},r==null?void 0:r.headers);r!=null&&r.jwt&&(s.Authorization=`Bearer ${r.jwt}`);const o=(i=r==null?void 0:r.query)!==null&&i!==void 0?i:{};r!=null&&r.redirectTo&&(o.redirect_to=r.redirectTo);const a=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",l=await Z_(e,t,n+a,{headers:s,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function Z_(e,t,n,r,i,s){const o=X_(t,r,i,s);let a;try{a=await e(n,o)}catch(l){throw console.error(l),new lu(Zr(l),0)}if(a.ok||await _f(a),r!=null&&r.noResolveJson)return a;try{return await a.json()}catch(l){await _f(l)}}function Vt(e){var t;let n=null;rS(e)&&(n=Object.assign({},e),e.expires_at||(n.expires_at=F_(e.expires_in)));const r=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:n,user:r},error:null}}function Qt(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function eS(e){return{data:e,error:null}}function tS(e){const{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:s}=e,o=Q_(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:s},l=Object.assign({},o);return{data:{properties:a,user:l},error:null}}function nS(e){return e}function rS(e){return e.access_token&&e.refresh_token&&e.expires_in}var iS=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};class sS{constructor({url:t="",headers:n={},fetch:r}){this.url=t,this.headers=n,this.fetch=B0(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,n="global"){try{return await F(this.fetch,"POST",`${this.url}/logout?scope=${n}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(r){if(z(r))return{data:null,error:r};throw r}}async inviteUserByEmail(t,n={}){try{return await F(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:n.data},headers:this.headers,redirectTo:n.redirectTo,xform:Qt})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}async generateLink(t){try{const{options:n}=t,r=iS(t,["options"]),i=Object.assign(Object.assign({},r),n);return"newEmail"in r&&(i.new_email=r==null?void 0:r.newEmail,delete i.newEmail),await F(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:tS,redirectTo:n==null?void 0:n.redirectTo})}catch(n){if(z(n))return{data:{properties:null,user:null},error:n};throw n}}async createUser(t){try{return await F(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:Qt})}catch(n){if(z(n))return{data:{user:null},error:n};throw n}}async listUsers(t){var n,r,i,s,o,a,l;try{const u={nextPage:null,lastPage:0,total:0},c=await F(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(n=t==null?void 0:t.page)===null||n===void 0?void 0:n.toString())!==null&&r!==void 0?r:"",per_page:(s=(i=t==null?void 0:t.perPage)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:""},xform:nS});if(c.error)throw c.error;const d=await c.json(),h=(o=c.headers.get("x-total-count"))!==null&&o!==void 0?o:0,m=(l=(a=c.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return m.length>0&&(m.forEach(v=>{const y=parseInt(v.split(";")[0].split("=")[1].substring(0,1)),S=JSON.parse(v.split(";")[1].split("=")[1]);u[`${S}Page`]=y}),u.total=parseInt(h)),{data:Object.assign(Object.assign({},d),u),error:null}}catch(u){if(z(u))return{data:{users:[]},error:u};throw u}}async getUserById(t){try{return await F(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:Qt})}catch(n){if(z(n))return{data:{user:null},error:n};throw n}}async updateUserById(t,n){try{return await F(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:n,headers:this.headers,xform:Qt})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}async deleteUser(t,n=!1){try{return await F(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:n},xform:Qt})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}async _listFactors(t){try{const{data:n,error:r}=await F(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:n,error:r}}catch(n){if(z(n))return{data:null,error:n};throw n}}async _deleteFactor(t){try{return{data:await F(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(n){if(z(n))return{data:null,error:n};throw n}}}const H0="2.57.0",oS="http://localhost:9999",aS="supabase.auth.token",lS={"X-Client-Info":`gotrue-js/${H0}`},Sf=10,uS={getItem:e=>fi()?globalThis.localStorage.getItem(e):null,setItem:(e,t)=>{fi()&&globalThis.localStorage.setItem(e,t)},removeItem:e=>{fi()&&globalThis.localStorage.removeItem(e)}};function kf(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}function cS(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}globalThis&&fi()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class dS extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}cS();const fS={url:oS,storageKey:aS,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:lS,flowType:"implicit",debug:!1},Gr=30*1e3,xf=3;async function hS(e,t,n){return await n()}class Ni{constructor(t){var n;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Ni.nextInstanceID,Ni.nextInstanceID+=1,this.instanceID>0&&Pt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const r=Object.assign(Object.assign({},fS),t);if(this.logDebugMessages=!!r.debug,typeof r.debug=="function"&&(this.logger=r.debug),this.persistSession=r.persistSession,this.storageKey=r.storageKey,this.autoRefreshToken=r.autoRefreshToken,this.admin=new sS({url:r.url,headers:r.headers,fetch:r.fetch}),this.url=r.url,this.headers=r.headers,this.fetch=B0(r.fetch),this.lock=r.lock||hS,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?r.storage?this.storage=r.storage:fi()?this.storage=uS:(this.memoryStorage={},this.storage=kf(this.memoryStorage)):(this.memoryStorage={},this.storage=kf(this.memoryStorage)),Pt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${H0}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const t=Pt()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",t),t||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:n,error:r}=await this._getSessionFromURL(t);if(r)return this._debug("#_initialize()","error detecting session from URL",r),await this._removeSession(),{error:r};const{session:i,redirectType:s}=n;return this._debug("#_initialize()","detected session in URL",i,"redirect type",s),await this._saveSession(i),setTimeout(async()=>{s==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",i):await this._notifyAllSubscribers("SIGNED_IN",i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return z(t)?{error:t}:{error:new V0("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signUp(t){var n,r,i;try{await this._removeSession();let s;if("email"in t){const{email:c,password:d,options:h}=t;let m=null,v=null;if(this.flowType==="pkce"){const y=Vn();await _n(this.storage,`${this.storageKey}-code-verifier`,y),m=await Hn(y),v=y===m?"plain":"s256"}s=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h==null?void 0:h.emailRedirectTo,body:{email:c,password:d,data:(n=h==null?void 0:h.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},code_challenge:m,code_challenge_method:v},xform:Vt})}else if("phone"in t){const{phone:c,password:d,options:h}=t;s=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:c,password:d,data:(r=h==null?void 0:h.data)!==null&&r!==void 0?r:{},channel:(i=h==null?void 0:h.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Vt})}else throw new vs("You must provide either an email or phone number and a password");const{data:o,error:a}=s;if(a||!o)return{data:{user:null,session:null},error:a};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(z(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithPassword(t){try{await this._removeSession();let n;if("email"in t){const{email:s,password:o,options:a}=t;n=await F(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Vt})}else if("phone"in t){const{phone:s,password:o,options:a}=t;n=await F(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Vt})}else throw new vs("You must provide either an email or phone number and a password");const{data:r,error:i}=n;return i?{data:{user:null,session:null},error:i}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new Qa}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:{user:r.user,session:r.session},error:i})}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOAuth(t){var n,r,i,s;return await this._removeSession(),await this._handleProviderSignIn(t.provider,{redirectTo:(n=t.options)===null||n===void 0?void 0:n.redirectTo,scopes:(r=t.options)===null||r===void 0?void 0:r.scopes,queryParams:(i=t.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(s=t.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async _exchangeCodeForSession(t){const n=await ys(this.storage,`${this.storageKey}-code-verifier`),{data:r,error:i}=await F(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:Vt});return await Ja(this.storage,`${this.storageKey}-code-verifier`),i?{data:{user:null,session:null},error:i}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new Qa}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:r,error:i})}async signInWithIdToken(t){await this._removeSession();try{const{options:n,provider:r,token:i,access_token:s,nonce:o}=t,a=await F(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:i,access_token:s,nonce:o,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:Vt}),{data:l,error:u}=a;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new Qa}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOtp(t){var n,r,i,s,o;try{if(await this._removeSession(),"email"in t){const{email:a,options:l}=t;let u=null,c=null;if(this.flowType==="pkce"){const h=Vn();await _n(this.storage,`${this.storageKey}-code-verifier`,h),u=await Hn(h),c=h===u?"plain":"s256"}const{error:d}=await F(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(n=l==null?void 0:l.data)!==null&&n!==void 0?n:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:c},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:d}}if("phone"in t){const{phone:a,options:l}=t,{data:u,error:c}=await F(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(i=l==null?void 0:l.data)!==null&&i!==void 0?i:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(o=l==null?void 0:l.channel)!==null&&o!==void 0?o:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:c}}throw new vs("You must provide either an email or phone number.")}catch(a){if(z(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(t){var n,r;try{t.type!=="email_change"&&t.type!=="phone_change"&&await this._removeSession();let i,s;"options"in t&&(i=(n=t.options)===null||n===void 0?void 0:n.redirectTo,s=(r=t.options)===null||r===void 0?void 0:r.captchaToken);const{data:o,error:a}=await F(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:s}}),redirectTo:i,xform:Vt});if(a)throw a;if(!o)throw new Error("An error occurred on token verification.");const l=o.session,u=o.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(z(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithSSO(t){var n,r,i;try{await this._removeSession();let s=null,o=null;if(this.flowType==="pkce"){const a=Vn();await _n(this.storage,`${this.storageKey}-code-verifier`,a),s=await Hn(a),o=a===s?"plain":"s256"}return await F(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(r=(n=t.options)===null||n===void 0?void 0:n.redirectTo)!==null&&r!==void 0?r:void 0}),!((i=t==null?void 0:t.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:s,code_challenge_method:o}),headers:this.headers,xform:eS})}catch(s){if(z(s))return{data:null,error:s};throw s}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:n},error:r}=t;if(r)throw r;if(!n)throw new Wn;const{error:i}=await F(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:n.access_token});return{data:{user:null,session:null},error:i}})}catch(t){if(z(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{t.type!="email_change"&&t.type!="phone_change"&&await this._removeSession();const n=`${this.url}/resend`;if("email"in t){const{email:r,type:i,options:s}=t,{error:o}=await F(this.fetch,"POST",n,{headers:this.headers,body:{email:r,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},redirectTo:s==null?void 0:s.emailRedirectTo});return{data:{user:null,session:null},error:o}}else if("phone"in t){const{phone:r,type:i,options:s}=t,{data:o,error:a}=await F(this.fetch,"POST",n,{headers:this.headers,body:{phone:r,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return{data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:a}}throw new vs("You must provide either an email or phone number and a type")}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async getSession(){return await this.initializePromise,this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(t,n){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await r,await n()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=n();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const n=await this.__loadSession();return await t(n)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const n=await ys(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",n),n!==null&&(this._isValidSession(n)?t=n:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const r=t.expires_at?t.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",t.expires_at),!r)return{data:{session:t},error:null};const{session:i,error:s}=await this._callRefreshToken(t.refresh_token);return s?{data:{session:null},error:s}:{data:{session:i},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await F(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:Qt}):await this._useSession(async n=>{var r,i;const{data:s,error:o}=n;if(o)throw o;return await F(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(r=s.session)===null||r===void 0?void 0:r.access_token)!==null&&i!==void 0?i:void 0,xform:Qt})})}catch(n){if(z(n))return{data:{user:null},error:n};throw n}}async updateUser(t,n={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,n))}async _updateUser(t,n={}){try{return await this._useSession(async r=>{const{data:i,error:s}=r;if(s)throw s;if(!i.session)throw new Wn;const o=i.session;let a=null,l=null;if(this.flowType==="pkce"&&t.email!=null){const d=Vn();await _n(this.storage,`${this.storageKey}-code-verifier`,d),a=await Hn(d),l=d===a?"plain":"s256"}const{data:u,error:c}=await F(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:n==null?void 0:n.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:a,code_challenge_method:l}),jwt:o.access_token,xform:Qt});if(c)throw c;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),{data:{user:o.user},error:null}})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}_decodeJWT(t){return yf(t)}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Wn;const n=Date.now()/1e3;let r=n,i=!0,s=null;const o=yf(t.access_token);if(o.exp&&(r=o.exp,i=r<=n),i){const{session:a,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};s=a}else{const{data:a,error:l}=await this._getUser(t.access_token);if(l)throw l;s={access_token:t.access_token,refresh_token:t.refresh_token,user:a.user,token_type:"bearer",expires_in:r-n,expires_at:r},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return{data:{user:s.user,session:s},error:null}}catch(n){if(z(n))return{data:{session:null,user:null},error:n};throw n}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async n=>{var r;if(!t){const{data:o,error:a}=n;if(a)throw a;t=(r=o.session)!==null&&r!==void 0?r:void 0}if(!(t!=null&&t.refresh_token))throw new Wn;const{session:i,error:s}=await this._callRefreshToken(t.refresh_token);return s?{data:{user:null,session:null},error:s}:i?{data:{user:i.user,session:i},error:null}:{data:{user:null,session:null},error:null}})}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async _getSessionFromURL(t){try{if(!Pt())throw new ws("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new ws("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!t)throw new vf("Not a valid PKCE flow url.");const n=Ya(window.location.href);if(t){if(!n.code)throw new vf("No code detected.");const{data:f,error:g}=await this._exchangeCodeForSession(n.code);if(g)throw g;const w=new URL(window.location.href);return w.searchParams.delete("code"),window.history.replaceState(window.history.state,"",w.toString()),{data:{session:f.session,redirectType:null},error:null}}if(n.error||n.error_description||n.error_code)throw new ws(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});const{provider_token:r,provider_refresh_token:i,access_token:s,refresh_token:o,expires_in:a,expires_at:l,token_type:u}=n;if(!s||!a||!o||!u)throw new ws("No session defined in URL");const c=Math.round(Date.now()/1e3),d=parseInt(a);let h=c+d;l&&(h=parseInt(l));const m=h-c;m*1e3<=Gr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${d}s`);const v=h-d;c-v>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",v,h,c):c-v<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",v,h,c);const{data:y,error:S}=await this._getUser(s);if(S)throw S;const p={provider_token:r,provider_refresh_token:i,access_token:s,expires_in:d,expires_at:h,refresh_token:o,token_type:u,user:y.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:p,redirectType:n.type},error:null}}catch(n){if(z(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantFlow(){const t=Ya(window.location.href);return!!(Pt()&&(t.access_token||t.error_description))}async _isPKCEFlow(){const t=Ya(window.location.href),n=await ys(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&n)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async n=>{var r;const{data:i,error:s}=n;if(s)return{error:s};const o=(r=i.session)===null||r===void 0?void 0:r.access_token;if(o){const{error:a}=await this.admin.signOut(o,t);if(a&&!(J_(a)&&(a.status===404||a.status===401)))return{error:a}}return t!=="others"&&(await this._removeSession(),await Ja(this.storage,`${this.storageKey}-code-verifier`),await this._notifyAllSubscribers("SIGNED_OUT",null)),{error:null}})}onAuthStateChange(t){const n=M_(),r={id:n,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}};return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,r),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(n)})))(),{data:{subscription:r}}}async _emitInitialSession(t){return await this._useSession(async n=>{var r,i;try{const{data:{session:s},error:o}=n;if(o)throw o;await((r=this.stateChangeEmitters.get(t))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",t,"session",s)}catch(s){await((i=this.stateChangeEmitters.get(t))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",s),console.error(s)}})}async resetPasswordForEmail(t,n={}){let r=null,i=null;if(this.flowType==="pkce"){const s=Vn();await _n(this.storage,`${this.storageKey}-code-verifier`,s),r=await Hn(s),i=s===r?"plain":"s256"}try{return await F(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:r,code_challenge_method:i,gotrue_meta_security:{captcha_token:n.captchaToken}},headers:this.headers,redirectTo:n.redirectTo})}catch(s){if(z(s))return{data:null,error:s};throw s}}async _refreshAccessToken(t){const n=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(n,"begin");try{const r=Date.now();return await H_(async i=>(await V_(i*200),this._debug(n,"refreshing attempt",i),await F(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:Vt})),(i,s,o)=>o&&o.error&&wf(o.error)&&Date.now()+(i+1)*200-r<Gr)}catch(r){if(this._debug(n,"error",r),z(r))return{data:{session:null,user:null},error:r};throw r}finally{this._debug(n,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,n){const r=await this._getUrlForProvider(t,{redirectTo:n.redirectTo,scopes:n.scopes,queryParams:n.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",n,"url",r),Pt()&&!n.skipBrowserRedirect&&window.location.assign(r),{data:{provider:t,url:r},error:null}}async _recoverAndRefresh(){var t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const r=await ys(this.storage,this.storageKey);if(this._debug(n,"session from storage",r),!this._isValidSession(r)){this._debug(n,"session is not valid"),r!==null&&await this._removeSession();return}const i=Math.round(Date.now()/1e3),s=((t=r.expires_at)!==null&&t!==void 0?t:1/0)<i+Sf;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${Sf}s`),s){if(this.autoRefreshToken&&r.refresh_token){const{error:o}=await this._callRefreshToken(r.refresh_token);o&&(console.error(o),wf(o)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",o),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(n,"error",r),console.error(r);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var n,r;if(!t)throw new Wn;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const i=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(i,"begin");try{this.refreshingDeferred=new ua;const{data:s,error:o}=await this._refreshAccessToken(t);if(o)throw o;if(!s.session)throw new Wn;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const a={session:s.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(s){if(this._debug(i,"error",s),z(s)){const o={session:null,error:s};return(n=this.refreshingDeferred)===null||n===void 0||n.resolve(o),o}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(s),s}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(t,n,r=!0){const i=`#_notifyAllSubscribers(${t})`;this._debug(i,"begin",n,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:t,session:n});const s=[],o=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(t,n)}catch(l){s.push(l)}});if(await Promise.all(o),s.length>0){for(let a=0;a<s.length;a+=1)console.error(s[a]);throw s[0]}}finally{this._debug(i,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),await this._persistSession(t)}_persistSession(t){return this._debug("#_persistSession()",t),_n(this.storage,this.storageKey,t)}async _removeSession(){this._debug("#_removeSession()"),await Ja(this.storage,this.storageKey)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&Pt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(n){console.error("removing visibilitychange callback failed",n)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Gr);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async n=>{const{data:{session:r}}=n;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((r.expires_at*1e3-t)/Gr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${Gr}ms, refresh threshold is ${xf} ticks`),i<=xf&&await this._callRefreshToken(r.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof dS)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Pt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const n=`#_onVisibilityChanged(${t})`;this._debug(n,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(n,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,n){const r=[`provider=${encodeURIComponent(t)}`];if(n!=null&&n.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const i=Vn();await _n(this.storage,`${this.storageKey}-code-verifier`,i);const s=await Hn(i),o=i===s?"plain":"s256";this._debug("PKCE","code verifier",`${i.substring(0,5)}...`,"code challenge",s,"method",o);const a=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(o)}`});r.push(a.toString())}if(n!=null&&n.queryParams){const i=new URLSearchParams(n.queryParams);r.push(i.toString())}return`${this.url}/authorize?${r.join("&")}`}async _unenroll(t){try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;return s?{data:null,error:s}:await F(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(z(n))return{data:null,error:n};throw n}}async _enroll(t){try{return await this._useSession(async n=>{var r,i;const{data:s,error:o}=n;if(o)return{data:null,error:o};const{data:a,error:l}=await F(this.fetch,"POST",`${this.url}/factors`,{body:{friendly_name:t.friendlyName,factor_type:t.factorType,issuer:t.issuer},headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});return l?{data:null,error:l}:(!((i=a==null?void 0:a.totp)===null||i===void 0)&&i.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),{data:a,error:null})})}catch(n){if(z(n))return{data:null,error:n};throw n}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;if(s)return{data:null,error:s};const{data:o,error:a}=await F(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),{data:o,error:a})})}catch(n){if(z(n))return{data:null,error:n};throw n}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;return s?{data:null,error:s}:await F(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(z(n))return{data:null,error:n};throw n}})}async _challengeAndVerify(t){const{data:n,error:r}=await this._challenge({factorId:t.factorId});return r?{data:null,error:r}:await this._verify({factorId:t.factorId,challengeId:n.id,code:t.code})}async _listFactors(){const{data:{user:t},error:n}=await this.getUser();if(n)return{data:null,error:n};const r=(t==null?void 0:t.factors)||[],i=r.filter(s=>s.factor_type==="totp"&&s.status==="verified");return{data:{all:r,totp:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var n,r;const{data:{session:i},error:s}=t;if(s)return{data:null,error:s};if(!i)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const o=this._decodeJWT(i.access_token);let a=null;o.aal&&(a=o.aal);let l=a;((r=(n=i.user.factors)===null||n===void 0?void 0:n.filter(d=>d.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(l="aal2");const c=o.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:c},error:null}}))}}Ni.nextInstanceID=0;class pS extends Ni{constructor(t){super(t)}}var mS=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const gS={headers:I_},yS={schema:"public"},vS={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},wS={};class _S{constructor(t,n,r){var i,s,o,a,l,u,c,d;if(this.supabaseUrl=t,this.supabaseKey=n,!t)throw new Error("supabaseUrl is required.");if(!n)throw new Error("supabaseKey is required.");const h=z_(t);this.realtimeUrl=`${h}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${h}/auth/v1`,this.storageUrl=`${h}/storage/v1`,this.functionsUrl=`${h}/functions/v1`;const m=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,v={db:yS,realtime:wS,auth:Object.assign(Object.assign({},vS),{storageKey:m}),global:gS},y=D_(r??{},v);this.storageKey=(s=(i=y.auth)===null||i===void 0?void 0:i.storageKey)!==null&&s!==void 0?s:"",this.headers=(a=(o=y.global)===null||o===void 0?void 0:o.headers)!==null&&a!==void 0?a:{},this.auth=this._initSupabaseAuthClient((l=y.auth)!==null&&l!==void 0?l:{},this.headers,(u=y.global)===null||u===void 0?void 0:u.fetch),this.fetch=N_(n,this._getAccessToken.bind(this),(c=y.global)===null||c===void 0?void 0:c.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},y.realtime)),this.rest=new $c(`${h}/rest/v1`,{headers:this.headers,schema:(d=y.db)===null||d===void 0?void 0:d.schema,fetch:this.fetch}),this._listenForAuthEvents()}get functions(){return new Pw(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new j_(this.storageUrl,this.headers,this.fetch)}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,n={},r){return this.rest.rpc(t,n,r)}channel(t,n={config:{}}){return this.realtime.channel(t,n)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,n;return mS(this,void 0,void 0,function*(){const{data:r}=yield this.auth.getSession();return(n=(t=r.session)===null||t===void 0?void 0:t.access_token)!==null&&n!==void 0?n:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:i,storageKey:s,flowType:o,debug:a},l,u){const c={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new pS({url:this.authUrl,headers:Object.assign(Object.assign({},c),l),storageKey:s,autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:i,flowType:o,debug:a,fetch:u})}_initRealtimeClient(t){return new v_(this.realtimeUrl,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,r)=>{this._handleTokenChanged(n,"CLIENT",r==null?void 0:r.access_token)})}_handleTokenChanged(t,n,r){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==r?(this.realtime.setAuth(r??null),this.changedAccessToken=r):t==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const SS=(e,t,n)=>new _S(e,t,n);var Tc={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const kS="https://yfaqmlswjffrcahnqlms.supabase.co",xS=Tc.VITE_SUPABASE_KEY??"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmYXFtbHN3amZmcmNhaG5xbG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMzI3OTcsImV4cCI6MjAxNjYwODc5N30.vgsBnGcwNHuMGzYW7qsUDc5b4OuWLbs2Osm_t7KlxJY",ES=Tc.VITE_SUPABASE_KEY!==void 0,$S=Tc.VITE_EDIT_MODE==="EDIT",ye=SS(kS,xS),W0={homeBlurb:null,projects:[],experiences:[],rawHomeData:"",updateHomeBlurb:async()=>{},updateProjects:async()=>{},updateExperiences:async()=>{},uploadFile:async()=>{},editing:!1},Lr=b.createContext(W0),CS=()=>{const[e,t]=b.useState(W0);return b.useEffect(()=>{const n=async()=>{var d,h;const r=ye.from("home").select().order("created_at",{ascending:!0}),i=ye.from("project").select().order("created_at",{ascending:!1}),s=ye.from("experience").select().order("created_at",{ascending:!1}),o=ye.from("position").select().order("created_at",{ascending:!1}),[a,l,u,c]=await Promise.all([r,i,s,o]);t({homeBlurb:PS(a.data),projects:((d=l.data)==null?void 0:d.map(m=>({type:"PROJECT",...m,name:m.name.toLowerCase()})))||[],experiences:((h=u.data)==null?void 0:h.map(m=>{var v;return{type:"EXPERIENCE",positions:((v=c.data)==null?void 0:v.filter(({experience_id:y})=>m.id===y).map(y=>({...y,title:y.title.toLowerCase()})))||[],...m,place_of_work:m.place_of_work.toLowerCase()}}))||[],editing:ES&&$S,rawHomeData:G0(a.data),updateHomeBlurb:async m=>{await ye.from("home").delete().neq("id",-1),await ye.from("home").upsert(bS(m)),await n()},updateProjects:async m=>{const v=m.map(y=>{const S={...y};return delete S.type,S});await ye.from("project").upsert(v.filter(y=>y.id!==void 0)),await ye.from("project").delete().eq("name","delete"),await ye.from("project").insert(v.filter(y=>y.id===void 0)),await n()},updateExperiences:async m=>{const v=m.flatMap(S=>S.positions||[]),y=m.map(S=>{const p={...S};return delete p.type,delete p.positions,p});await ye.from("experience").upsert(y.filter(S=>S.id!==void 0)),await ye.from("position").upsert(v.filter(S=>S.id!==void 0)),await ye.from("position").delete().eq("title","delete"),await ye.from("experience").delete().eq("place_of_work","delete"),await ye.from("experience").insert(y.filter(S=>S.id===void 0)),await ye.from("position").insert(v.filter(S=>S.id===void 0)),await n()},uploadFile:async(m,v)=>(await ye.storage.from("assets").upload(m,v,{upsert:!0}),ye.storage.from("assets").getPublicUrl(m))})};n()},[]),e},bS=e=>{const t=e.split(`

`),n=[];return[...t.map(i=>{let s=i;return[...i.matchAll(/\[.*\]\(.*\)/g)].map(([a])=>{const[l,u]=a.split(/\[|\]|\(|\)/g).filter(c=>c!=="");return s=s.replace(a,l),[l,u]}).forEach(([a,l])=>{n.push({type:"substitution",substitute_text:a,substitute_link:l})}),{type:"paragraph",paragraph:s}}),...n]},G0=e=>{if(e===null)return"";const t=e.filter(({type:r})=>r==="paragraph"),n=e.filter(({type:r})=>r==="substitution");return t.map(({paragraph:r})=>n.reduce((i,{substitute_text:s,substitute_link:o})=>{if(!i.includes(s))return i;const[a,l]=i.split(s);return`${a}[${s}](${o})${l}`},r)).join(`

`)},PS=e=>{const t=G0(e);if(t==="")return _.jsx(_.Fragment,{});const r=t.split(`

`).map(i=>{const s=[...i.matchAll(/\[.*\]\(.*\)/g)].map(([o])=>[o,...o.split(/\[|\]|\(|\)/g).filter(a=>a!=="")]);return _.jsx(_.Fragment,{children:s.reduce((o,[a,l,u])=>o.flatMap(c=>{if(typeof c!="string"||!c.includes(l))return c;const[d,h]=c.split(a);return[d,_.jsx(Vi,{href:u,target:"_blank",$inline:!0,children:l}),h]}),[i])})});return _.jsx(_.Fragment,{children:r.map((i,s)=>s===r.length-1?i:_.jsxs(_.Fragment,{children:[i,_.jsx("br",{}),_.jsx("br",{})]}))})},TS=R(aa)`
  width: 30%;

  @media screen and (max-width: 480px) {
    width: 100%;
    h2 {
      display: none;
    }
  }
`,jS=R(aa)`
  width: 65%;

  @media screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`,OS=R.img`
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

  @media screen and (max-width: 480px) {
    margin-top: 12.5rem;
  }
`,IS=R.p`
  align-self: center;
  font-family: ${e=>e.theme.bodyFont};
  color: ${e=>e.theme.text2};
  width: 85%;

  @media screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`,RS=R.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  flex: auto;
  flex-basis: content;
  padding: calc(10vh-2rem) 0 2rem;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`,AS=R.div`
  align-self: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  @media screen and (max-width: 480px) {
    flex-direction: row;
    margin-top: 0;
    p {
      display: none;
    }
  }
`,LS=[{link:"mailto:dilloncscott1@gmail.com",icon:_.jsx(Py,{}),text:"dilloncscott1@gmail.com"},{link:"https://linkedin.com/in/dillon-scott",icon:_.jsx(Ty,{}),text:"linkedin.com/in/dillon-scott"},{link:"https://github.com/dillydally414",icon:_.jsx(Xl,{}),text:"github.com/dillydally414"}],NS=()=>{const{editing:e,homeBlurb:t,rawHomeData:n,updateHomeBlurb:r}=b.useContext(Lr),[i,s]=b.useState(n);return b.useEffect(()=>{s(n)},[n]),_.jsxs(RS,{children:[_.jsxs(TS,{children:[_.jsx(OS,{src:jy,alt:"A picture of me!",width:"100%"}),_.jsx(A0,{$align:"center",children:"drop a line"}),_.jsx(AS,{children:LS.map(o=>_.jsxs(Vi,{href:o.link,target:"_blank",children:[o.icon,_.jsx(iu,{children:o.text})]},o.text))})]}),_.jsx(jS,{children:_.jsxs(Sc,{direction:"up",cascade:!0,triggerOnce:!0,children:[_.jsx(kc,{text:"dillon c scott"}),t&&(e?_.jsx(Ze,{$align:"center",value:i,onChange:o=>s(o.target.value)}):_.jsx(IS,{children:t})),e&&_.jsx("button",{style:{margin:"1rem 0"},onClick:()=>r(i),children:"save"})]})})]})},Ef=e=>b.createElement("svg",{id:"mouse_click","data-name":"mouse click",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 109.21 122.88",...e},b.createElement("path",{d:"M86,122.31a5.57,5.57,0,0,1-.9.35,5.09,5.09,0,0,1-1,.18,5.46,5.46,0,0,1-1,0,6.77,6.77,0,0,1-1-.15,6,6,0,0,1-1-.36l0,0a5.51,5.51,0,0,1-.92-.53l0,0a6.41,6.41,0,0,1-.78-.69,5.19,5.19,0,0,1-.65-.87l-9.08-14.88-7.69,9a15.49,15.49,0,0,1-1.1,1.18c-.39.37-.78.71-1.18,1l-.08.06a12.19,12.19,0,0,1-1.2.82,9.66,9.66,0,0,1-1.24.63,6.91,6.91,0,0,1-1,.37,6.21,6.21,0,0,1-1,.22,7.55,7.55,0,0,1-1.06.07,7.19,7.19,0,0,1-1-.11,6.14,6.14,0,0,1-1.18-.35,5.42,5.42,0,0,1-1.06-.57,6.22,6.22,0,0,1-.92-.78l0,0a7.31,7.31,0,0,1-.75-1l-.11-.2-.09-.21L47.72,112l0-.17L40.91,43.26a4.52,4.52,0,0,1,0-1.33,4.3,4.3,0,0,1,.43-1.25,4.31,4.31,0,0,1,1.39-1.55l0,0a3.82,3.82,0,0,1,.9-.46,4.25,4.25,0,0,1,1-.24h0a4.31,4.31,0,0,1,1.29.05,4.67,4.67,0,0,1,1.25.44l.3.16c13.51,8.84,26.1,17.06,38.64,25.25l19,12.39a11.72,11.72,0,0,1,1,.72l0,0a8.78,8.78,0,0,1,.82.73l.06.07a7.41,7.41,0,0,1,.71.82,5.91,5.91,0,0,1,.57.87,6.42,6.42,0,0,1,.51,1.14,5.6,5.6,0,0,1,.26,1.17,5.44,5.44,0,0,1,0,1.21h0a6.59,6.59,0,0,1-.23,1.19,6.54,6.54,0,0,1-.94,1.88,6.41,6.41,0,0,1-.67.83,7.45,7.45,0,0,1-.82.76,10.42,10.42,0,0,1-1.16.83,12.92,12.92,0,0,1-1.34.7c-.47.21-1,.41-1.46.58a14.27,14.27,0,0,1-1.55.43h0c-2.77.54-5.53,1.21-8.27,1.87l-3.25.77,9,14.94a5.84,5.84,0,0,1,.46,1,5.59,5.59,0,0,1,.15,3.21l0,.1a5.53,5.53,0,0,1-.33.94,6.43,6.43,0,0,1-.51.89,5.62,5.62,0,0,1-.68.81,6,6,0,0,1-.82.67l-2,1.29A83,83,0,0,1,86,122.31ZM37.63,19.46a4,4,0,0,1-6.92,4l-8-14a4,4,0,0,1,6.91-4l8.06,14Zm-15,46.77a4,4,0,0,1,4,6.91l-14,8.06a4,4,0,0,1-4-6.91l14-8.06ZM20.56,39.84a4,4,0,0,1-2.07,7.72L3,43.36A4,4,0,0,1,5,35.64l15.53,4.2ZM82,41.17a4,4,0,0,1-4-6.91L92,26.2a4,4,0,0,1,4,6.91L82,41.17ZM63.46,20.57a4,4,0,1,1-7.71-2.06L59.87,3A4,4,0,0,1,67.59,5L63.46,20.57Zm20.17,96.36,9.67-5.86c-3.38-5.62-8.85-13.55-11.51-19.17a2.17,2.17,0,0,1-.12-.36,2.4,2.4,0,0,1,1.81-2.87c5.38-1.23,10.88-2.39,16.22-3.73a10.28,10.28,0,0,0,1.8-.58,6.11,6.11,0,0,0,1.3-.77,3.38,3.38,0,0,0,.38-.38.9.9,0,0,0,.14-.24l-.06-.18a2.15,2.15,0,0,0-.44-.53,5.75,5.75,0,0,0-.83-.63L47.06,45.75c2.11,21.36,5.2,44.1,6.45,65.31a6.28,6.28,0,0,0,.18,1,2.89,2.89,0,0,0,.26.62l.13.14a1,1,0,0,0,.29,0,2.76,2.76,0,0,0,.51-.17,5.71,5.71,0,0,0,1.28-.79,11.22,11.22,0,0,0,1.35-1.33c1.93-2.27,9.6-12.14,11.4-13.18a2.4,2.4,0,0,1,3.28.82l11.44,18.75Z"})),$f=({start:e,end:t})=>`${e.toLowerCase()}${t?t!==e?" - "+t.toLowerCase():"":" - current"}`,K0=({info:e,passRef:t,updateFn:n})=>{const{editing:r,uploadFile:i}=b.useContext(Lr),s=b.useRef(null),o=b.useRef(null);b.useEffect(()=>{s!==null&&t(s)},[s]);const[a,l]=b.useState(e);return b.useEffect(()=>{l(e)},[e]),b.useEffect(()=>{n(a)},[a]),_.jsx(_.Fragment,{children:_.jsxs(ww,{children:[r?_.jsxs(_.Fragment,{children:[_.jsx(Ze,{$align:"flex-start",$height:"1rem",$width:"15rem",value:a.type==="PROJECT"?a.name:a.place_of_work,onChange:u=>l({...a,[a.type==="PROJECT"?"name":"place_of_work"]:u.target.value}),ref:s}),_.jsxs("div",{children:[_.jsx("input",{type:"file",accept:"image/*",ref:o}),_.jsx("button",{onClick:async()=>{var d,h;const u=(h=(d=o.current)==null?void 0:d.files)==null?void 0:h.item(0);if(!u)return;const c=await i(u.name,u);c!=null&&c.data&&l({...a,image_url:c.data.publicUrl})},children:"upload"})]})]}):_.jsx(A0,{$align:"flex-start",$underline:e.id===1,ref:s,children:e.type==="PROJECT"?e.name:e.place_of_work}),a.type==="PROJECT"?_.jsxs(_.Fragment,{children:[_.jsx(af,{children:r?_.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[_.jsx(Ze,{$align:"flex-start",$height:"1rem",$width:"10rem",value:a.start,onChange:u=>l({...a,start:u.target.value})})," - ",_.jsx(Ze,{$align:"flex-start",$height:"1rem",$width:"10rem",value:a.end||"",onChange:u=>l({...a,end:u.target.value})})]}):_.jsx(Ha,{children:$f(a)})}),r?_.jsx(Ze,{$align:"flex-start",$height:"5rem",value:a.description,onChange:u=>l({...a,description:u.target.value})}):_.jsx(ms,{children:a.description})]}):_.jsxs(_.Fragment,{children:[r&&_.jsx("button",{style:{margin:"1rem 0"},onClick:()=>l({...a,positions:[...a.positions,{experience_id:a.id}]}),children:"add position"}),a.positions.map((u,c)=>_.jsxs(Re.Fragment,{children:[_.jsx(af,{children:r?_.jsxs(_.Fragment,{children:[_.jsx(Ze,{$align:"flex-start",$height:"1rem",$width:"21rem",value:u.title,onChange:d=>l({...a,positions:a.positions.map((h,m)=>m===c?{...h,title:d.target.value}:h)})}),_.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[_.jsx(Ze,{$align:"flex-start",$height:"1rem",$width:"10rem",value:u.start,onChange:d=>l({...a,positions:a.positions.map((h,m)=>m===c?{...h,start:d.target.value}:h)})})," - ",_.jsx(Ze,{$align:"flex-start",$height:"1rem",$width:"10rem",value:u.end||"",onChange:d=>l({...a,positions:a.positions.map((h,m)=>m===c?{...h,end:d.target.value}:h)})})]})]}):_.jsxs(_.Fragment,{children:[_.jsx(Ha,{children:u.title}),_.jsx(Ha,{children:$f(u)})]})}),r?_.jsx(Ze,{$align:"flex-start",$height:"5rem",value:u.description,onChange:d=>l({...a,positions:a.positions.map((h,m)=>m===c?{...h,description:d.target.value}:h)})}):_.jsx(ms,{children:u.description})]},u.id))]}),r?_.jsx(Ze,{$align:"flex-start",$height:"1rem",value:a.type==="PROJECT"?a.tech_used:a.relevant_tech,onChange:u=>l({...a,[a.type==="PROJECT"?"tech_used":"relevant_tech"]:u.target.value})}):_.jsx(ms,{children:e.type==="PROJECT"?e.tech_used:e.relevant_tech}),a.type==="PROJECT"&&_.jsx(_w,{children:r?_.jsxs(_.Fragment,{children:[_.jsx(Ze,{$align:"center",$height:"1rem",$width:"5rem",value:a.github_link??"",onChange:u=>l({...a,github_link:u.target.value})}),_.jsx(gs,{href:a.visual_link??"",target:"_blank",style:{margin:0},children:_.jsx(Xl,{})}),_.jsx(Ze,{$align:"center",$height:"1rem",$width:"5rem",value:a.visual_link??"",onChange:u=>l({...a,visual_link:u.target.value})}),_.jsx(gs,{href:a.visual_link??"",target:"_blank",style:{margin:0},children:_.jsx(Ef,{height:"24"})})]}):_.jsxs(_.Fragment,{children:[a.github_link?_.jsxs(gs,{href:a.github_link,target:"_blank",children:[_.jsx(Xl,{height:"24",width:"24"}),_.jsx(iu,{children:"See the code"})]}):_.jsx(ms,{children:"Available upon request"}),a.visual_link&&_.jsxs(gs,{href:a.visual_link,target:"_blank",children:[_.jsx(Ef,{height:"24",width:"24"}),_.jsx(iu,{children:"See it in action"})]})]})})]})})},zS=R.div`
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

  @media screen and (max-width: 480px) {
    margin-right: 0;
  }
`,DS=R.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  width: 1rem;
  min-width: 1rem;
  height: 100%;
  max-height: 100%;
`,FS=R.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  justify-content: start;
  height: 100%;
  object-fit: contain;
`,MS=R(Vi)`
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
    transition-property: opacity background-color;
    max-width: 5.5rem;
    width: max-content;
    overflow: hidden;
    overflow-wrap: break-word;
    pointer-events: none;
    cursor: default;
    padding: 0.25rem;
    z-index: 10;

    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  &:hover {
    text-decoration: none;
    &:after {
      content: "${e=>e.$name}";
      opacity: 1;
      overflow: visible;
    }
  }
`,US=R.div`
  display: flex;
  flex-direction: column;
  width: 4rem;

  @media screen and (max-width: 480px) {
    display: none;
  }
`,BS=R.img`
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
`,VS=(e,t,n)=>{const[r,i]=b.useState(0),[s,o]=b.useState(e.map(m=>!1)),[a,l]=b.useState(!1),u=ky();b.useEffect(()=>{n&&n.parentElement&&(n.parentElement.scrollTop=0)},[n]);const c=m=>{var y,S;if(!t[m])return;const v=t[m].offsetTop-.5*(t[m].parentElement.offsetHeight-t[m].offsetHeight);(S=(y=t[m])==null?void 0:y.parentElement)==null||S.scrollTo({behavior:"smooth",top:v})},d=m=>{var y,S,p,f,g,w,x;if(!e[m])return;const v=e[m].parentElement.parentElement.offsetTop-((y=n.parentElement)==null?void 0:y.offsetTop)-.3*n.parentElement.offsetHeight;(S=n==null?void 0:n.parentElement)==null||S.scrollTo({behavior:"smooth",top:v}),((g=(f=(p=e[m])==null?void 0:p.parentElement)==null?void 0:f.parentElement)==null?void 0:g.offsetTop)===((w=n==null?void 0:n.parentElement)==null?void 0:w.offsetTop)&&l(!1),(x=n==null?void 0:n.parentElement)==null||x.addEventListener("scrollend",()=>l(!1),{once:!0})},h=m=>{l(!0),c(m),d(m),i(m)};return b.useEffect(()=>{e[r]&&(e[r].style.textDecorationColor=u.accent),e.map((m,v)=>{v!==r&&m&&(m.style.textDecorationColor=u.accent2)})},[u,e,r]),b.useEffect(()=>{var m;if(n&&n.parentElement!==null&&e.length>0&&e.every(v=>v!==null)){const v=n.parentElement,y=()=>o(S=>{const p=v.scrollTop<=5,f=Math.abs(v.scrollTop+v.offsetHeight-v.scrollHeight)<=5;return[p,...S.slice(1,-1),f]});return(m=n==null?void 0:n.parentElement)==null||m.addEventListener("scroll",y),()=>{var S;return(S=n==null?void 0:n.parentElement)==null?void 0:S.removeEventListener("scroll",y)}}},[n,e,o]),b.useEffect(()=>{if(!a){let m;s[r]||(m=s[r+1]?s.indexOf(!0):s.lastIndexOf(!0)),s[0]&&(m=0),s[s.length-1]&&(m=s.length-1),m!==void 0&&(c(m),i(m))}},[i,c,r,s]),b.useEffect(()=>{const m=new IntersectionObserver(v=>o(y=>{const S=[...y];return v.map(p=>{const f=e.findIndex(w=>(w==null?void 0:w.parentElement)===p.target);f!==-1&&(S[f]=p.isIntersecting);const g=n==null?void 0:n.parentElement;if(g){const w=g.scrollTop<=5||f===0&&p.isIntersecting,x=Math.abs(g.scrollTop+g.offsetHeight-g.scrollHeight)<=5||f===S.length-1&&p.isIntersecting;S[0]=w,S[S.length-1]=x}}),S}),{rootMargin:"-300px 0px"});return e.map(v=>(v==null?void 0:v.parentElement)&&m.observe(v.parentElement)),()=>m.disconnect()},[e,n,i,o]),[r,h]},Y0=({elements:e,scrollRefs:t,containerRef:n})=>{const r=b.useRef([]).current,[i,s]=VS(t,r,n);return _.jsxs(zS,{children:[_.jsx(DS,{children:_.jsx(FS,{children:e.map((o,a)=>_.jsx(MS,{onClick:()=>{s(a)},"aria-label":`scroll to ${o.type==="PROJECT"?o.name:o.place_of_work}`,$active:a===i,$name:o.type==="PROJECT"?o.name:o.place_of_work,as:"button",ref:l=>r[a]=l}))})}),_.jsx(US,{children:e.map((o,a)=>{var l,u,c,d;return _.jsx(BS,{$selected:a===i,src:e[a].image_url,alt:e[a].alt_text,style:{top:(((c=(u=(l=t[a])==null?void 0:l.parentElement)==null?void 0:u.parentElement)==null?void 0:c.offsetTop)||0)-(((d=n==null?void 0:n.parentElement)==null?void 0:d.scrollTop)||0)-((n==null?void 0:n.offsetTop)||0)}})})})]})},HS=()=>{const{experiences:e,updateExperiences:t,editing:n}=b.useContext(Lr),r=b.useRef([]).current,[i,s]=b.useState(null),[o,a]=b.useState(e);return b.useEffect(()=>{a(e)},[e]),_.jsxs(_.Fragment,{children:[_.jsx(Y0,{elements:e,scrollRefs:r,containerRef:i}),_.jsx(aa,{ref:s,children:_.jsxs(Sc,{direction:"up",cascade:!0,triggerOnce:!0,damping:.05,children:[n&&_.jsxs(_.Fragment,{children:[_.jsx("button",{style:{margin:"1rem 3rem 1rem 0"},onClick:()=>t(o),children:"save"}),_.jsx("button",{style:{margin:"1rem 0"},onClick:()=>t([...o,{place_of_work:"",relevant_tech:"",image_url:"",alt_text:""}]),children:"add experience"})]}),o.map((l,u)=>_.jsx(K0,{info:l,passRef:c=>r[u]=c.current,updateFn:c=>a([...o.slice(0,u),c,...o.slice(u+1)])},l.id))]})})]})},WS=()=>{const{projects:e,updateProjects:t,editing:n}=b.useContext(Lr),r=b.useRef([]).current,[i,s]=b.useState(null),[o,a]=b.useState(e);return b.useEffect(()=>{a(e)},[e]),_.jsxs(_.Fragment,{children:[_.jsx(Y0,{elements:e,scrollRefs:r,containerRef:i}),_.jsx(aa,{ref:s,children:_.jsxs(Sc,{direction:"up",cascade:!0,triggerOnce:!0,damping:.05,children:[n&&_.jsxs(_.Fragment,{children:[_.jsx("button",{style:{margin:"1rem 3rem 1rem 0"},onClick:()=>t(o),children:"save"}),_.jsx("button",{style:{margin:"1rem 0"},onClick:()=>t([...o,{name:"",start:"",description:"",tech_used:"",image_url:"",alt_text:""}]),children:"add project"})]}),o.map((l,u)=>_.jsx(K0,{info:l,passRef:c=>r[u]=c.current,updateFn:c=>a([...o.slice(0,u),c,...o.slice(u+1)])},l.id))]})})]})},GS="https://yfaqmlswjffrcahnqlms.supabase.co/storage/v1/object/public/assets/cv.pdf";R(Vi)`
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
`;const KS=R.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`,YS=R.iframe`
  border-color: transparent;
  margin: 1rem 0;
  width: 650px;
  height: 100%;

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`,JS=()=>{const{editing:e,uploadFile:t}=b.useContext(Lr),n=b.useRef(null);return _.jsxs(KS,{children:[e&&_.jsxs(_.Fragment,{children:[_.jsx("input",{type:"file",accept:".pdf",ref:n}),_.jsx("button",{onClick:()=>{var i,s;const r=(s=(i=n.current)==null?void 0:i.files)==null?void 0:s.item(0);r&&t("cv.pdf",r)},children:"save"})]}),_.jsx(YS,{src:`https://docs.google.com/gview?url=${GS}&embedded=true`,title:"Dillon Scott CV"})]})},Cf=[{title:"home",element:_.jsx(NS,{})},{title:"experience",element:_.jsx(HS,{})},{title:"projects",element:_.jsx(WS,{})},{title:"cv",element:_.jsx(JS,{})}],J0={defaultProps:zo`
    transition-duration: 0.5s;
  `,titleFont:"DM Sans",bodyFont:"Gothic A1"},Q0={background:"#232244",text:"#FFFFFF",text2:"#F4D6CC",accent:"#FFC933",accent2:"#A6E1FA",...J0},QS={background:"#FCF0EE",text:Q0.background,text2:"#542111",accent:"#DA1643",accent2:"#5465FF",...J0},qS=R.main`
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
`,XS=R.span`
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

    @media screen and (max-width: 480px) {
      visibility: hidden;
    }
  }
`,ZS=R.button`
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
`,ek=R.div`
  display: flex;
  justify-content: flex-start;
  flex: auto;
  max-width: 40rem;
  min-width: fit-content;
`,tk=R.header`
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
  overflow: auto hidden;
`,nk=R.label`
  ${e=>e.theme.defaultProps}

  display: flex;
  cursor: pointer;
  padding-left: ${e=>e.$checked?"2rem":"0"};
  margin-left: 1.5rem;
  height: 2rem;
  width: 4rem;
  min-width: 4rem;
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
`,rk=R.button`
  ${e=>e.theme.defaultProps}

  display: flex;
  align-self: center;
  background-color: ${e=>e.theme.accent};
  border-radius: 1rem;
  border-width: 0;
  height: 105%;
  aspect-ratio: 1/1;
  transition-property: background-color;
`,ik=Cy`
  html {
    background-color: ${e=>e.theme.accent2};
  }

  body {
    overscroll-behavior-x: none;
    margin: 0;
    min-height: 100vh;
    width: 100vw;
  }
`,sk=()=>{var s;const[e,t]=b.useState("home"),[n,r]=b.useState(window.matchMedia("(prefers-color-scheme: dark)").matches),i=CS();return _.jsxs(xy,{theme:n?Q0:QS,children:[_.jsx(ik,{}),_.jsxs(tk,{children:[_.jsx(ek,{children:Cf.map(({title:o,element:a},l)=>_.jsx(XS,{$active:o===e,children:_.jsx(ZS,{onClick:()=>t(o),$title:o,$active:o===e,children:o})},o))}),_.jsx(nk,{$checked:n,"aria-label":`Turn ${n?"off":"on"} dark mode`,id:"theme-label",children:_.jsx(rk,{onClick:()=>r(o=>!o),"aria-labelledby":"theme-label"})})]}),_.jsx(Lr.Provider,{value:i,children:_.jsx(qS,{children:(s=Cf.find(({title:o})=>o===e))==null?void 0:s.element})})]})};qa.createRoot(document.getElementById("root")).render(_.jsx(Re.StrictMode,{children:_.jsx(sk,{})}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}