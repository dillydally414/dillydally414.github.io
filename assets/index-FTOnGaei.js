function tm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function nm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rf={exports:{}},wo={},If={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),rm=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),sm=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),lm=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),cm=Symbol.for("react.suspense"),dm=Symbol.for("react.memo"),fm=Symbol.for("react.lazy"),Ic=Symbol.iterator;function hm(e){return e===null||typeof e!="object"?null:(e=Ic&&e[Ic]||e["@@iterator"],typeof e=="function"?e:null)}var Af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lf=Object.assign,Nf={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=Nf,this.updater=n||Af}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zf(){}zf.prototype=Tr.prototype;function du(e,t,n){this.props=e,this.context=t,this.refs=Nf,this.updater=n||Af}var fu=du.prototype=new zf;fu.constructor=du;Lf(fu,Tr.prototype);fu.isPureReactComponent=!0;var Ac=Array.isArray,Df=Object.prototype.hasOwnProperty,hu={current:null},Ff={key:!0,ref:!0,__self:!0,__source:!0};function Mf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Df.call(t,r)&&!Ff.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Di,type:e,key:s,ref:o,props:i,_owner:hu.current}}function pm(e,t){return{$$typeof:Di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Di}function mm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lc=/\/+/g;function ma(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mm(""+e.key):t.toString(36)}function Ss(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Di:case rm:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ma(o,0):r,Ac(i)?(n="",e!=null&&(n=e.replace(Lc,"$&/")+"/"),Ss(i,t,n,"",function(u){return u})):i!=null&&(pu(i)&&(i=pm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ac(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+ma(s,a);o+=Ss(s,t,n,l,i)}else if(l=hm(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+ma(s,a++),o+=Ss(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ji(e,t,n){if(e==null)return e;var r=[],i=0;return Ss(e,r,"","",function(s){return t.call(n,s,i++)}),r}function gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},xs={transition:null},ym={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:xs,ReactCurrentOwner:hu};N.Children={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!pu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=Tr;N.Fragment=im;N.Profiler=om;N.PureComponent=du;N.StrictMode=sm;N.Suspense=cm;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ym;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=hu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Df.call(t,l)&&!Ff.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Di,type:e.type,key:i,ref:s,props:r,_owner:o}};N.createContext=function(e){return e={$$typeof:lm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:am,_context:e},e.Consumer=e};N.createElement=Mf;N.createFactory=function(e){var t=Mf.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:um,render:e}};N.isValidElement=pu;N.lazy=function(e){return{$$typeof:fm,_payload:{_status:-1,_result:e},_init:gm}};N.memo=function(e,t){return{$$typeof:dm,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=xs.transition;xs.transition={};try{e()}finally{xs.transition=t}};N.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};N.useCallback=function(e,t){return Re.current.useCallback(e,t)};N.useContext=function(e){return Re.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};N.useEffect=function(e,t){return Re.current.useEffect(e,t)};N.useId=function(){return Re.current.useId()};N.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return Re.current.useMemo(e,t)};N.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};N.useRef=function(e){return Re.current.useRef(e)};N.useState=function(e){return Re.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return Re.current.useTransition()};N.version="18.2.0";If.exports=N;var C=If.exports;const Te=nm(C),Nc=tm({__proto__:null,default:Te},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=C,wm=Symbol.for("react.element"),_m=Symbol.for("react.fragment"),Sm=Object.prototype.hasOwnProperty,xm=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,km={key:!0,ref:!0,__self:!0,__source:!0};function Uf(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Sm.call(t,r)&&!km.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wm,type:e,key:s,ref:o,props:i,_owner:xm.current}}wo.Fragment=_m;wo.jsx=Uf;wo.jsxs=Uf;Rf.exports=wo;var _=Rf.exports,el={},Bf={exports:{}},Ye={},Hf={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,O){var R=P.length;P.push(O);e:for(;0<R;){var B=R-1>>>1,se=P[B];if(0<i(se,O))P[B]=O,P[R]=se,R=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var O=P[0],R=P.pop();if(R!==O){P[0]=R;e:for(var B=0,se=P.length,Mt=se>>>1;B<Mt;){var qe=2*(B+1)-1,bt=P[qe],Xe=qe+1,yt=P[Xe];if(0>i(bt,R))Xe<se&&0>i(yt,bt)?(P[B]=yt,P[Xe]=R,B=Xe):(P[B]=bt,P[qe]=R,B=qe);else if(Xe<se&&0>i(yt,R))P[B]=yt,P[Xe]=R,B=Xe;else break e}}return O}function i(P,O){var R=P.sortIndex-O.sortIndex;return R!==0?R:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=P)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function w(P){if(y=!1,p(P),!v)if(n(l)!==null)v=!0,zr(S);else{var O=n(u);O!==null&&vn(w,O.startTime-P)}}function S(P,O){v=!1,y&&(y=!1,m(T),T=-1),g=!0;var R=h;try{for(p(O),d=n(l);d!==null&&(!(d.expirationTime>O)||P&&!Me());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var se=B(d.expirationTime<=O);O=e.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),p(O)}else r(l);d=n(l)}if(d!==null)var Mt=!0;else{var qe=n(u);qe!==null&&vn(w,qe.startTime-O),Mt=!1}return Mt}finally{d=null,h=R,g=!1}}var E=!1,x=null,T=-1,K=5,L=-1;function Me(){return!(e.unstable_now()-L<K)}function gn(){if(x!==null){var P=e.unstable_now();L=P;var O=!0;try{O=x(!0,P)}finally{O?yn():(E=!1,x=null)}}else E=!1}var yn;if(typeof f=="function")yn=function(){f(gn)};else if(typeof MessageChannel<"u"){var Yi=new MessageChannel,ha=Yi.port2;Yi.port1.onmessage=gn,yn=function(){ha.postMessage(null)}}else yn=function(){k(gn,0)};function zr(P){x=P,E||(E=!0,yn())}function vn(P,O){T=k(function(){P(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,zr(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var R=h;h=O;try{return P()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=h;h=P;try{return O()}finally{h=R}},e.unstable_scheduleCallback=function(P,O,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,P){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=R+se,P={id:c++,callback:O,priorityLevel:P,startTime:R,expirationTime:se,sortIndex:-1},R>B?(P.sortIndex=R,t(u,P),n(l)===null&&P===n(u)&&(y?(m(T),T=-1):y=!0,vn(w,R-B))):(P.sortIndex=se,t(l,P),v||g||(v=!0,zr(S))),P},e.unstable_shouldYield=Me,e.unstable_wrapCallback=function(P){var O=h;return function(){var R=h;h=O;try{return P.apply(this,arguments)}finally{h=R}}}})(Vf);Hf.exports=Vf;var Em=Hf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf=C,Ke=Em;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gf=new Set,pi={};function Fn(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(pi[e]=t,e=0;e<t.length;e++)Gf.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,$m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Dc={};function Cm(e){return tl.call(Dc,e)?!0:tl.call(zc,e)?!1:$m.test(e)?Dc[e]=!0:(zc[e]=!0,!1)}function bm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pm(e,t,n,r){if(t===null||typeof t>"u"||bm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var mu=/[\-:]([a-z])/g;function gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mu,gu);xe[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mu,gu);xe[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mu,gu);xe[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function yu(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pm(t,n,i,r)&&(n=null),r||i===null?Cm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qi=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),vu=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),Kf=Symbol.for("react.provider"),Yf=Symbol.for("react.context"),wu=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),_u=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Qf=Symbol.for("react.offscreen"),Fc=Symbol.iterator;function Dr(e){return e===null||typeof e!="object"?null:(e=Fc&&e[Fc]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,ga;function Yr(e){if(ga===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ga=t&&t[1]||""}return`
`+ga+e}var ya=!1;function va(e,t){if(!e||ya)return"";ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{ya=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function jm(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=va(e.type,!1),e;case 11:return e=va(e.type.render,!1),e;case 1:return e=va(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Qn:return"Portal";case nl:return"Profiler";case vu:return"StrictMode";case rl:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yf:return(e.displayName||"Context")+".Consumer";case Kf:return(e._context.displayName||"Context")+".Provider";case wu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _u:return t=e.displayName||null,t!==null?t:sl(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return sl(e(t))}catch{}}return null}function Tm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(t);case 8:return t===vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Om(e){var t=Jf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){e._valueTracker||(e._valueTracker=Om(e))}function qf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ol(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xf(e,t){t=t.checked,t!=null&&yu(e,"checked",t,!1)}function al(e,t){Xf(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&ll(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ll(e,t,n){(t!=="number"||Bs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qr=Array.isArray;function lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Qr(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function Zf(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function eh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?eh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zi,th=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zi=Zi||document.createElement("div"),Zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rm=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){Rm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ti[t]=ti[e]})});function nh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ti.hasOwnProperty(e)&&ti[e]?(""+t).trim():t+"px"}function rh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Im=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dl(e,t){if(t){if(Im[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pl=null,ur=null,cr=null;function Vc(e){if(e=Ui(e)){if(typeof pl!="function")throw Error($(280));var t=e.stateNode;t&&(t=Eo(t),pl(e.stateNode,e.type,t))}}function ih(e){ur?cr?cr.push(e):cr=[e]:ur=e}function sh(){if(ur){var e=ur,t=cr;if(cr=ur=null,Vc(e),t)for(e=0;e<t.length;e++)Vc(t[e])}}function oh(e,t){return e(t)}function ah(){}var wa=!1;function lh(e,t,n){if(wa)return e(t,n);wa=!0;try{return oh(e,t,n)}finally{wa=!1,(ur!==null||cr!==null)&&(ah(),sh())}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var ml=!1;if(Lt)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){ml=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{ml=!1}function Am(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ni=!1,Hs=null,Vs=!1,gl=null,Lm={onError:function(e){ni=!0,Hs=e}};function Nm(e,t,n,r,i,s,o,a,l){ni=!1,Hs=null,Am.apply(Lm,arguments)}function zm(e,t,n,r,i,s,o,a,l){if(Nm.apply(this,arguments),ni){if(ni){var u=Hs;ni=!1,Hs=null}else throw Error($(198));Vs||(Vs=!0,gl=u)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wc(e){if(Mn(e)!==e)throw Error($(188))}function Dm(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wc(i),e;if(s===r)return Wc(i),t;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function ch(e){return e=Dm(e),e!==null?dh(e):null}function dh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dh(e);if(t!==null)return t;e=e.sibling}return null}var fh=Ke.unstable_scheduleCallback,Gc=Ke.unstable_cancelCallback,Fm=Ke.unstable_shouldYield,Mm=Ke.unstable_requestPaint,oe=Ke.unstable_now,Um=Ke.unstable_getCurrentPriorityLevel,xu=Ke.unstable_ImmediatePriority,hh=Ke.unstable_UserBlockingPriority,Ws=Ke.unstable_NormalPriority,Bm=Ke.unstable_LowPriority,ph=Ke.unstable_IdlePriority,_o=null,Et=null;function Hm(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Gm,Vm=Math.log,Wm=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(Vm(e)/Wm|0)|0}var es=64,ts=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Jr(a):(s&=o,s!==0&&(r=Jr(s)))}else o=n&~i,o!==0?r=Jr(o):s!==0&&(r=Jr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),i=1<<n,r|=e[n],t&=~i;return r}function Km(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ym(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-ht(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Km(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mh(){var e=es;return es<<=1,!(es&4194240)&&(es=64),e}function _a(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function Qm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ht(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ku(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function gh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yh,Eu,vh,wh,_h,vl=!1,ns=[],en=null,tn=null,nn=null,yi=new Map,vi=new Map,Qt=[],Jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kc(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function Mr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ui(t),t!==null&&Eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qm(e,t,n,r,i){switch(t){case"focusin":return en=Mr(en,e,t,n,r,i),!0;case"dragenter":return tn=Mr(tn,e,t,n,r,i),!0;case"mouseover":return nn=Mr(nn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return yi.set(s,Mr(yi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vi.set(s,Mr(vi.get(s)||null,e,t,n,r,i)),!0}return!1}function Sh(e){var t=Cn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=uh(n),t!==null){e.blockedOn=t,_h(e.priority,function(){vh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return t=Ui(n),t!==null&&Eu(t),e.blockedOn=n,!1;t.shift()}return!0}function Yc(e,t,n){ks(e)&&n.delete(t)}function Xm(){vl=!1,en!==null&&ks(en)&&(en=null),tn!==null&&ks(tn)&&(tn=null),nn!==null&&ks(nn)&&(nn=null),yi.forEach(Yc),vi.forEach(Yc)}function Ur(e,t){e.blockedOn===t&&(e.blockedOn=null,vl||(vl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Xm)))}function wi(e){function t(i){return Ur(i,e)}if(0<ns.length){Ur(ns[0],e);for(var n=1;n<ns.length;n++){var r=ns[n];r.blockedOn===e&&(r.blockedOn=null)}}for(en!==null&&Ur(en,e),tn!==null&&Ur(tn,e),nn!==null&&Ur(nn,e),yi.forEach(t),vi.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)Sh(n),n.blockedOn===null&&Qt.shift()}var dr=Ft.ReactCurrentBatchConfig,Ks=!0;function Zm(e,t,n,r){var i=V,s=dr.transition;dr.transition=null;try{V=1,$u(e,t,n,r)}finally{V=i,dr.transition=s}}function eg(e,t,n,r){var i=V,s=dr.transition;dr.transition=null;try{V=4,$u(e,t,n,r)}finally{V=i,dr.transition=s}}function $u(e,t,n,r){if(Ks){var i=wl(e,t,n,r);if(i===null)Ta(e,t,r,Ys,n),Kc(e,r);else if(qm(i,e,t,n,r))r.stopPropagation();else if(Kc(e,r),t&4&&-1<Jm.indexOf(e)){for(;i!==null;){var s=Ui(i);if(s!==null&&yh(s),s=wl(e,t,n,r),s===null&&Ta(e,t,r,Ys,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ta(e,t,r,null,n)}}var Ys=null;function wl(e,t,n,r){if(Ys=null,e=Su(r),e=Cn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ys=e,null}function xh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Um()){case xu:return 1;case hh:return 4;case Ws:case Bm:return 16;case ph:return 536870912;default:return 16}default:return 16}}var Xt=null,Cu=null,Es=null;function kh(){if(Es)return Es;var e,t=Cu,n=t.length,r,i="value"in Xt?Xt.value:Xt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Es=i.slice(e,1<r?1-r:void 0)}function $s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rs(){return!0}function Qc(){return!1}function Qe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rs:Qc,this.isPropagationStopped=Qc,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=Qe(Or),Mi=re({},Or,{view:0,detail:0}),tg=Qe(Mi),Sa,xa,Br,So=re({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(Sa=e.screenX-Br.screenX,xa=e.screenY-Br.screenY):xa=Sa=0,Br=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:xa}}),Jc=Qe(So),ng=re({},So,{dataTransfer:0}),rg=Qe(ng),ig=re({},Mi,{relatedTarget:0}),ka=Qe(ig),sg=re({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),og=Qe(sg),ag=re({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lg=Qe(ag),ug=re({},Or,{data:0}),qc=Qe(ug),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fg[e])?!!t[e]:!1}function Pu(){return hg}var pg=re({},Mi,{key:function(e){if(e.key){var t=cg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(e){return e.type==="keypress"?$s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=Qe(pg),gg=re({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=Qe(gg),yg=re({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),vg=Qe(yg),wg=re({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=Qe(wg),Sg=re({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xg=Qe(Sg),kg=[9,13,27,32],ju=Lt&&"CompositionEvent"in window,ri=null;Lt&&"documentMode"in document&&(ri=document.documentMode);var Eg=Lt&&"TextEvent"in window&&!ri,Eh=Lt&&(!ju||ri&&8<ri&&11>=ri),Zc=" ",ed=!1;function $h(e,t){switch(e){case"keyup":return kg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ch(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function $g(e,t){switch(e){case"compositionend":return Ch(t);case"keypress":return t.which!==32?null:(ed=!0,Zc);case"textInput":return e=t.data,e===Zc&&ed?null:e;default:return null}}function Cg(e,t){if(qn)return e==="compositionend"||!ju&&$h(e,t)?(e=kh(),Es=Cu=Xt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eh&&t.locale!=="ko"?null:t.data;default:return null}}var bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bg[e.type]:t==="textarea"}function bh(e,t,n,r){ih(r),t=Qs(t,"onChange"),0<t.length&&(n=new bu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ii=null,_i=null;function Pg(e){Dh(e,0)}function xo(e){var t=er(e);if(qf(t))return e}function jg(e,t){if(e==="change")return t}var Ph=!1;if(Lt){var Ea;if(Lt){var $a="oninput"in document;if(!$a){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),$a=typeof nd.oninput=="function"}Ea=$a}else Ea=!1;Ph=Ea&&(!document.documentMode||9<document.documentMode)}function rd(){ii&&(ii.detachEvent("onpropertychange",jh),_i=ii=null)}function jh(e){if(e.propertyName==="value"&&xo(_i)){var t=[];bh(t,_i,e,Su(e)),lh(Pg,t)}}function Tg(e,t,n){e==="focusin"?(rd(),ii=t,_i=n,ii.attachEvent("onpropertychange",jh)):e==="focusout"&&rd()}function Og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(_i)}function Rg(e,t){if(e==="click")return xo(t)}function Ig(e,t){if(e==="input"||e==="change")return xo(t)}function Ag(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Ag;function Si(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tl.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sd(e,t){var n=id(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function Th(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Th(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oh(){for(var e=window,t=Bs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bs(e.document)}return t}function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lg(e){var t=Oh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Th(n.ownerDocument.documentElement,n)){if(r!==null&&Tu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=sd(n,s);var o=sd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ng=Lt&&"documentMode"in document&&11>=document.documentMode,Xn=null,_l=null,si=null,Sl=!1;function od(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||Xn==null||Xn!==Bs(r)||(r=Xn,"selectionStart"in r&&Tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),si&&Si(si,r)||(si=r,r=Qs(_l,"onSelect"),0<r.length&&(t=new bu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zn={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionend:is("Transition","TransitionEnd")},Ca={},Rh={};Lt&&(Rh=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function ko(e){if(Ca[e])return Ca[e];if(!Zn[e])return e;var t=Zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rh)return Ca[e]=t[n];return e}var Ih=ko("animationend"),Ah=ko("animationiteration"),Lh=ko("animationstart"),Nh=ko("transitionend"),zh=new Map,ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){zh.set(e,t),Fn(t,[e])}for(var ba=0;ba<ad.length;ba++){var Pa=ad[ba],zg=Pa.toLowerCase(),Dg=Pa[0].toUpperCase()+Pa.slice(1);hn(zg,"on"+Dg)}hn(Ih,"onAnimationEnd");hn(Ah,"onAnimationIteration");hn(Lh,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Nh,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function ld(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zm(r,t,void 0,e),e.currentTarget=null}function Dh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ld(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ld(i,a,u),s=l}}}if(Vs)throw e=gl,Vs=!1,gl=null,e}function q(e,t){var n=t[Cl];n===void 0&&(n=t[Cl]=new Set);var r=e+"__bubble";n.has(r)||(Fh(t,e,2,!1),n.add(r))}function ja(e,t,n){var r=0;t&&(r|=4),Fh(n,e,r,t)}var ss="_reactListening"+Math.random().toString(36).slice(2);function xi(e){if(!e[ss]){e[ss]=!0,Gf.forEach(function(n){n!=="selectionchange"&&(Fg.has(n)||ja(n,!1,e),ja(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ss]||(t[ss]=!0,ja("selectionchange",!1,t))}}function Fh(e,t,n,r){switch(xh(t)){case 1:var i=Zm;break;case 4:i=eg;break;default:i=$u}n=i.bind(null,t,n,e),i=void 0,!ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ta(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Cn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}lh(function(){var u=s,c=Su(n),d=[];e:{var h=zh.get(e);if(h!==void 0){var g=bu,v=e;switch(e){case"keypress":if($s(n)===0)break e;case"keydown":case"keyup":g=mg;break;case"focusin":v="focus",g=ka;break;case"focusout":v="blur",g=ka;break;case"beforeblur":case"afterblur":g=ka;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=vg;break;case Ih:case Ah:case Lh:g=og;break;case Nh:g=_g;break;case"scroll":g=tg;break;case"wheel":g=xg;break;case"copy":case"cut":case"paste":g=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xc}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,p;f!==null;){p=f;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,m!==null&&(w=gi(f,m),w!=null&&y.push(ki(f,w,p)))),k)break;f=f.return}0<y.length&&(h=new g(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==hl&&(v=n.relatedTarget||n.fromElement)&&(Cn(v)||v[Nt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Cn(v):null,v!==null&&(k=Mn(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Jc,w="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Xc,w="onPointerLeave",m="onPointerEnter",f="pointer"),k=g==null?h:er(g),p=v==null?h:er(v),h=new y(w,f+"leave",g,n,c),h.target=k,h.relatedTarget=p,w=null,Cn(c)===u&&(y=new y(m,f+"enter",v,n,c),y.target=p,y.relatedTarget=k,w=y),k=w,g&&v)t:{for(y=g,m=v,f=0,p=y;p;p=Bn(p))f++;for(p=0,w=m;w;w=Bn(w))p++;for(;0<f-p;)y=Bn(y),f--;for(;0<p-f;)m=Bn(m),p--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Bn(y),m=Bn(m)}y=null}else y=null;g!==null&&ud(d,h,g,y,!1),v!==null&&k!==null&&ud(d,k,v,y,!0)}}e:{if(h=u?er(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=jg;else if(td(h))if(Ph)S=Ig;else{S=Og;var E=Tg}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Rg);if(S&&(S=S(e,u))){bh(d,S,n,c);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&ll(h,"number",h.value)}switch(E=u?er(u):window,e){case"focusin":(td(E)||E.contentEditable==="true")&&(Xn=E,_l=u,si=null);break;case"focusout":si=_l=Xn=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,od(d,n,c);break;case"selectionchange":if(Ng)break;case"keydown":case"keyup":od(d,n,c)}var x;if(ju)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else qn?$h(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Eh&&n.locale!=="ko"&&(qn||T!=="onCompositionStart"?T==="onCompositionEnd"&&qn&&(x=kh()):(Xt=c,Cu="value"in Xt?Xt.value:Xt.textContent,qn=!0)),E=Qs(u,T),0<E.length&&(T=new qc(T,e,null,n,c),d.push({event:T,listeners:E}),x?T.data=x:(x=Ch(n),x!==null&&(T.data=x)))),(x=Eg?$g(e,n):Cg(e,n))&&(u=Qs(u,"onBeforeInput"),0<u.length&&(c=new qc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}Dh(d,t)})}function ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gi(e,n),s!=null&&r.unshift(ki(e,s,i)),s=gi(e,t),s!=null&&r.push(ki(e,s,i))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ud(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=gi(n,s),l!=null&&o.unshift(ki(n,l,a))):i||(l=gi(n,s),l!=null&&o.push(ki(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Mg=/\r\n?/g,Ug=/\u0000|\uFFFD/g;function cd(e){return(typeof e=="string"?e:""+e).replace(Mg,`
`).replace(Ug,"")}function os(e,t,n){if(t=cd(t),cd(e)!==t&&n)throw Error($(425))}function Js(){}var xl=null,kl=null;function El(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(e){return dd.resolve(null).then(e).catch(Vg)}:$l;function Vg(e){setTimeout(function(){throw e})}function Oa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wi(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),kt="__reactFiber$"+Rr,Ei="__reactProps$"+Rr,Nt="__reactContainer$"+Rr,Cl="__reactEvents$"+Rr,Wg="__reactListeners$"+Rr,Gg="__reactHandles$"+Rr;function Cn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fd(e);e!==null;){if(n=e[kt])return n;e=fd(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[kt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function Eo(e){return e[Ei]||null}var bl=[],tr=-1;function pn(e){return{current:e}}function Z(e){0>tr||(e.current=bl[tr],bl[tr]=null,tr--)}function Q(e,t){tr++,bl[tr]=e.current,e.current=t}var dn={},Pe=pn(dn),Ne=pn(!1),In=dn;function gr(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function qs(){Z(Ne),Z(Pe)}function hd(e,t,n){if(Pe.current!==dn)throw Error($(168));Q(Pe,t),Q(Ne,n)}function Mh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,Tm(e)||"Unknown",i));return re({},n,r)}function Xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,In=Pe.current,Q(Pe,e),Q(Ne,Ne.current),!0}function pd(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Mh(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,Z(Ne),Z(Pe),Q(Pe,e)):Z(Ne),Q(Ne,n)}var Ot=null,$o=!1,Ra=!1;function Uh(e){Ot===null?Ot=[e]:Ot.push(e)}function Kg(e){$o=!0,Uh(e)}function mn(){if(!Ra&&Ot!==null){Ra=!0;var e=0,t=V;try{var n=Ot;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,$o=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(e+1)),fh(xu,mn),i}finally{V=t,Ra=!1}}return null}var nr=[],rr=0,Zs=null,eo=0,et=[],tt=0,An=null,Rt=1,It="";function xn(e,t){nr[rr++]=eo,nr[rr++]=Zs,Zs=e,eo=t}function Bh(e,t,n){et[tt++]=Rt,et[tt++]=It,et[tt++]=An,An=e;var r=Rt;e=It;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var s=32-ht(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rt=1<<32-ht(t)+i|n<<i|r,It=s+e}else Rt=1<<s|n<<i|r,It=e}function Ou(e){e.return!==null&&(xn(e,1),Bh(e,1,0))}function Ru(e){for(;e===Zs;)Zs=nr[--rr],nr[rr]=null,eo=nr[--rr],nr[rr]=null;for(;e===An;)An=et[--tt],et[tt]=null,It=et[--tt],et[tt]=null,Rt=et[--tt],et[tt]=null}var We=null,Ve=null,ee=!1,ft=null;function Hh(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function md(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ve=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Rt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ve=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(ee){var t=Ve;if(t){var n=t;if(!md(e,t)){if(Pl(e))throw Error($(418));t=rn(n.nextSibling);var r=We;t&&md(e,t)?Hh(r,n):(e.flags=e.flags&-4097|2,ee=!1,We=e)}}else{if(Pl(e))throw Error($(418));e.flags=e.flags&-4097|2,ee=!1,We=e}}}function gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function as(e){if(e!==We)return!1;if(!ee)return gd(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!El(e.type,e.memoizedProps)),t&&(t=Ve)){if(Pl(e))throw Vh(),Error($(418));for(;t;)Hh(e,t),t=rn(t.nextSibling)}if(gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=We?rn(e.stateNode.nextSibling):null;return!0}function Vh(){for(var e=Ve;e;)e=rn(e.nextSibling)}function yr(){Ve=We=null,ee=!1}function Iu(e){ft===null?ft=[e]:ft.push(e)}var Yg=Ft.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var to=pn(null),no=null,ir=null,Au=null;function Lu(){Au=ir=no=null}function Nu(e){var t=to.current;Z(to),e._currentValue=t}function Tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){no=e,Au=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Au!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(no===null)throw Error($(308));ir=e,no.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var bn=null;function zu(e){bn===null?bn=[e]:bn.push(e)}function Wh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zu(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,zu(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function Cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ku(e,n)}}function yd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ro(e,t,n,r){var i=e.updateQueue;Kt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(g,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,d,h):v,h==null)break e;d=re({},d,h);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Nn|=o,e.lanes=o,e.memoizedState=d}}function vd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Kh=new Wf.Component().refs;function Ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=an(e),s=At(r,i);s.payload=t,n!=null&&(s.callback=n),t=sn(e,s,i),t!==null&&(pt(t,e,i,r),Cs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=an(e),s=At(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=sn(e,s,i),t!==null&&(pt(t,e,i,r),Cs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=an(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=sn(e,i,r),t!==null&&(pt(t,e,r,n),Cs(t,e,r))}};function wd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Si(n,r)||!Si(i,s):!0}function Yh(e,t,n){var r=!1,i=dn,s=t.contextType;return typeof s=="object"&&s!==null?s=it(s):(i=ze(t)?In:Pe.current,r=t.contextTypes,s=(r=r!=null)?gr(e,i):dn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function _d(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function Rl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Kh,Du(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=it(s):(s=ze(t)?In:Pe.current,i.context=gr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ol(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),ro(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Kh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function ls(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sd(e){var t=e._init;return t(e._payload)}function Qh(e){function t(m,f){if(e){var p=m.deletions;p===null?(m.deletions=[f],m.flags|=16):p.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=ln(m,f),m.index=0,m.sibling=null,m}function s(m,f,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<f?(m.flags|=2,f):p):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,p,w){return f===null||f.tag!==6?(f=Fa(p,m.mode,w),f.return=m,f):(f=i(f,p),f.return=m,f)}function l(m,f,p,w){var S=p.type;return S===Jn?c(m,f,p.props.children,w,p.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gt&&Sd(S)===f.type)?(w=i(f,p.props),w.ref=Hr(m,f,p),w.return=m,w):(w=Rs(p.type,p.key,p.props,null,m.mode,w),w.ref=Hr(m,f,p),w.return=m,w)}function u(m,f,p,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Ma(p,m.mode,w),f.return=m,f):(f=i(f,p.children||[]),f.return=m,f)}function c(m,f,p,w,S){return f===null||f.tag!==7?(f=On(p,m.mode,w,S),f.return=m,f):(f=i(f,p),f.return=m,f)}function d(m,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Fa(""+f,m.mode,p),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case qi:return p=Rs(f.type,f.key,f.props,null,m.mode,p),p.ref=Hr(m,null,f),p.return=m,p;case Qn:return f=Ma(f,m.mode,p),f.return=m,f;case Gt:var w=f._init;return d(m,w(f._payload),p)}if(Qr(f)||Dr(f))return f=On(f,m.mode,p,null),f.return=m,f;ls(m,f)}return null}function h(m,f,p,w){var S=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(m,f,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case qi:return p.key===S?l(m,f,p,w):null;case Qn:return p.key===S?u(m,f,p,w):null;case Gt:return S=p._init,h(m,f,S(p._payload),w)}if(Qr(p)||Dr(p))return S!==null?null:c(m,f,p,w,null);ls(m,p)}return null}function g(m,f,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(p)||null,a(f,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case qi:return m=m.get(w.key===null?p:w.key)||null,l(f,m,w,S);case Qn:return m=m.get(w.key===null?p:w.key)||null,u(f,m,w,S);case Gt:var E=w._init;return g(m,f,p,E(w._payload),S)}if(Qr(w)||Dr(w))return m=m.get(p)||null,c(f,m,w,S,null);ls(f,w)}return null}function v(m,f,p,w){for(var S=null,E=null,x=f,T=f=0,K=null;x!==null&&T<p.length;T++){x.index>T?(K=x,x=null):K=x.sibling;var L=h(m,x,p[T],w);if(L===null){x===null&&(x=K);break}e&&x&&L.alternate===null&&t(m,x),f=s(L,f,T),E===null?S=L:E.sibling=L,E=L,x=K}if(T===p.length)return n(m,x),ee&&xn(m,T),S;if(x===null){for(;T<p.length;T++)x=d(m,p[T],w),x!==null&&(f=s(x,f,T),E===null?S=x:E.sibling=x,E=x);return ee&&xn(m,T),S}for(x=r(m,x);T<p.length;T++)K=g(x,m,T,p[T],w),K!==null&&(e&&K.alternate!==null&&x.delete(K.key===null?T:K.key),f=s(K,f,T),E===null?S=K:E.sibling=K,E=K);return e&&x.forEach(function(Me){return t(m,Me)}),ee&&xn(m,T),S}function y(m,f,p,w){var S=Dr(p);if(typeof S!="function")throw Error($(150));if(p=S.call(p),p==null)throw Error($(151));for(var E=S=null,x=f,T=f=0,K=null,L=p.next();x!==null&&!L.done;T++,L=p.next()){x.index>T?(K=x,x=null):K=x.sibling;var Me=h(m,x,L.value,w);if(Me===null){x===null&&(x=K);break}e&&x&&Me.alternate===null&&t(m,x),f=s(Me,f,T),E===null?S=Me:E.sibling=Me,E=Me,x=K}if(L.done)return n(m,x),ee&&xn(m,T),S;if(x===null){for(;!L.done;T++,L=p.next())L=d(m,L.value,w),L!==null&&(f=s(L,f,T),E===null?S=L:E.sibling=L,E=L);return ee&&xn(m,T),S}for(x=r(m,x);!L.done;T++,L=p.next())L=g(x,m,T,L.value,w),L!==null&&(e&&L.alternate!==null&&x.delete(L.key===null?T:L.key),f=s(L,f,T),E===null?S=L:E.sibling=L,E=L);return e&&x.forEach(function(gn){return t(m,gn)}),ee&&xn(m,T),S}function k(m,f,p,w){if(typeof p=="object"&&p!==null&&p.type===Jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case qi:e:{for(var S=p.key,E=f;E!==null;){if(E.key===S){if(S=p.type,S===Jn){if(E.tag===7){n(m,E.sibling),f=i(E,p.props.children),f.return=m,m=f;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gt&&Sd(S)===E.type){n(m,E.sibling),f=i(E,p.props),f.ref=Hr(m,E,p),f.return=m,m=f;break e}n(m,E);break}else t(m,E);E=E.sibling}p.type===Jn?(f=On(p.props.children,m.mode,w,p.key),f.return=m,m=f):(w=Rs(p.type,p.key,p.props,null,m.mode,w),w.ref=Hr(m,f,p),w.return=m,m=w)}return o(m);case Qn:e:{for(E=p.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(m,f.sibling),f=i(f,p.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Ma(p,m.mode,w),f.return=m,m=f}return o(m);case Gt:return E=p._init,k(m,f,E(p._payload),w)}if(Qr(p))return v(m,f,p,w);if(Dr(p))return y(m,f,p,w);ls(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,p),f.return=m,m=f):(n(m,f),f=Fa(p,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return k}var vr=Qh(!0),Jh=Qh(!1),Bi={},$t=pn(Bi),$i=pn(Bi),Ci=pn(Bi);function Pn(e){if(e===Bi)throw Error($(174));return e}function Fu(e,t){switch(Q(Ci,t),Q($i,e),Q($t,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cl(t,e)}Z($t),Q($t,t)}function wr(){Z($t),Z($i),Z(Ci)}function qh(e){Pn(Ci.current);var t=Pn($t.current),n=cl(t,e.type);t!==n&&(Q($i,e),Q($t,n))}function Mu(e){$i.current===e&&(Z($t),Z($i))}var te=pn(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ia=[];function Uu(){for(var e=0;e<Ia.length;e++)Ia[e]._workInProgressVersionPrimary=null;Ia.length=0}var bs=Ft.ReactCurrentDispatcher,Aa=Ft.ReactCurrentBatchConfig,Ln=0,ne=null,ce=null,he=null,so=!1,oi=!1,bi=0,Qg=0;function ke(){throw Error($(321))}function Bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Hu(e,t,n,r,i,s){if(Ln=s,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bs.current=e===null||e.memoizedState===null?Zg:e1,e=n(r,i),oi){s=0;do{if(oi=!1,bi=0,25<=s)throw Error($(301));s+=1,he=ce=null,t.updateQueue=null,bs.current=t1,e=n(r,i)}while(oi)}if(bs.current=oo,t=ce!==null&&ce.next!==null,Ln=0,he=ce=ne=null,so=!1,t)throw Error($(300));return e}function Vu(){var e=bi!==0;return bi=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ne.memoizedState=he=e:he=he.next=e,he}function st(){if(ce===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=he===null?ne.memoizedState:he.next;if(t!==null)he=t,ce=e;else{if(e===null)throw Error($(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},he===null?ne.memoizedState=he=e:he=he.next=e}return he}function Pi(e,t){return typeof t=="function"?t(e):t}function La(e){var t=st(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ln&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ne.lanes|=c,Nn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,gt(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ne.lanes|=s,Nn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Na(e){var t=st(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);gt(s,t.memoizedState)||(Le=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Xh(){}function Zh(e,t){var n=ne,r=st(),i=t(),s=!gt(r.memoizedState,i);if(s&&(r.memoizedState=i,Le=!0),r=r.queue,Wu(np.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,ji(9,tp.bind(null,n,r,i,t),void 0,null),ge===null)throw Error($(349));Ln&30||ep(n,t,i)}return i}function ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tp(e,t,n,r){t.value=n,t.getSnapshot=r,rp(t)&&ip(e)}function np(e,t,n){return n(function(){rp(t)&&ip(e)})}function rp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function ip(e){var t=zt(e,1);t!==null&&pt(t,e,1,-1)}function xd(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t.queue=e,e=e.dispatch=Xg.bind(null,ne,e),[t.memoizedState,e]}function ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sp(){return st().memoizedState}function Ps(e,t,n,r){var i=wt();ne.flags|=e,i.memoizedState=ji(1|t,n,void 0,r===void 0?null:r)}function bo(e,t,n,r){var i=st();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&Bu(r,o.deps)){i.memoizedState=ji(t,n,s,r);return}}ne.flags|=e,i.memoizedState=ji(1|t,n,s,r)}function kd(e,t){return Ps(8390656,8,e,t)}function Wu(e,t){return bo(2048,8,e,t)}function op(e,t){return bo(4,2,e,t)}function ap(e,t){return bo(4,4,e,t)}function lp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function up(e,t,n){return n=n!=null?n.concat([e]):null,bo(4,4,lp.bind(null,t,e),n)}function Gu(){}function cp(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dp(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fp(e,t,n){return Ln&21?(gt(n,t)||(n=mh(),ne.lanes|=n,Nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function Jg(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Aa.transition;Aa.transition={};try{e(!1),t()}finally{V=n,Aa.transition=r}}function hp(){return st().memoizedState}function qg(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pp(e))mp(t,n);else if(n=Wh(e,t,n,r),n!==null){var i=Oe();pt(n,e,r,i),gp(n,t,r)}}function Xg(e,t,n){var r=an(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pp(e))mp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gt(a,o)){var l=t.interleaved;l===null?(i.next=i,zu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Wh(e,t,i,r),n!==null&&(i=Oe(),pt(n,e,r,i),gp(n,t,r))}}function pp(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function mp(e,t){oi=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ku(e,n)}}var oo={readContext:it,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Zg={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:kd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ps(4194308,4,lp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ps(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qg.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:xd,useDebugValue:Gu,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=xd(!1),t=e[0];return e=Jg.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=wt();if(ee){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),ge===null)throw Error($(349));Ln&30||ep(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,kd(np.bind(null,r,s,e),[e]),r.flags|=2048,ji(9,tp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=wt(),t=ge.identifierPrefix;if(ee){var n=It,r=Rt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},e1={readContext:it,useCallback:cp,useContext:it,useEffect:Wu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:ap,useMemo:dp,useReducer:La,useRef:sp,useState:function(){return La(Pi)},useDebugValue:Gu,useDeferredValue:function(e){var t=st();return fp(t,ce.memoizedState,e)},useTransition:function(){var e=La(Pi)[0],t=st().memoizedState;return[e,t]},useMutableSource:Xh,useSyncExternalStore:Zh,useId:hp,unstable_isNewReconciler:!1},t1={readContext:it,useCallback:cp,useContext:it,useEffect:Wu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:ap,useMemo:dp,useReducer:Na,useRef:sp,useState:function(){return Na(Pi)},useDebugValue:Gu,useDeferredValue:function(e){var t=st();return ce===null?t.memoizedState=e:fp(t,ce.memoizedState,e)},useTransition:function(){var e=Na(Pi)[0],t=st().memoizedState;return[e,t]},useMutableSource:Xh,useSyncExternalStore:Zh,useId:hp,unstable_isNewReconciler:!1};function _r(e,t){try{var n="",r=t;do n+=jm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function za(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var n1=typeof WeakMap=="function"?WeakMap:Map;function yp(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lo||(lo=!0,Hl=r),Il(e,t)},n}function vp(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Il(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Il(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ed(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new n1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=g1.bind(null,e,t,n),t.then(e,e))}function $d(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var r1=Ft.ReactCurrentOwner,Le=!1;function je(e,t,n,r){t.child=e===null?Jh(t,null,n,r):vr(t,e.child,n,r)}function bd(e,t,n,r,i){n=n.render;var s=t.ref;return fr(t,i),r=Hu(e,t,n,r,s,i),n=Vu(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ee&&n&&Ou(t),t.flags|=1,je(e,t,r,i),t.child)}function Pd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ec(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,wp(e,t,s,r,i)):(e=Rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Si,n(o,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=ln(s,r),e.ref=t.ref,e.return=t,t.child=e}function wp(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Si(s,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return Al(e,t,n,r,i)}function _p(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(or,He),He|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(or,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(or,He),He|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Q(or,He),He|=r;return je(e,t,i,n),t.child}function Sp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,n,r,i){var s=ze(n)?In:Pe.current;return s=gr(t,s),fr(t,i),n=Hu(e,t,n,r,s,i),r=Vu(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ee&&r&&Ou(t),t.flags|=1,je(e,t,n,i),t.child)}function jd(e,t,n,r,i){if(ze(n)){var s=!0;Xs(t)}else s=!1;if(fr(t,i),t.stateNode===null)js(e,t),Yh(t,n,r),Rl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=ze(n)?In:Pe.current,u=gr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_d(t,o,r,u),Kt=!1;var h=t.memoizedState;o.state=h,ro(t,r,o,i),l=t.memoizedState,a!==r||h!==l||Ne.current||Kt?(typeof c=="function"&&(Ol(t,n,c,r),l=t.memoizedState),(a=Kt||wd(t,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Gh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ut(t.type,a),o.props=u,d=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=ze(n)?In:Pe.current,l=gr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&_d(t,o,r,l),Kt=!1,h=t.memoizedState,o.state=h,ro(t,r,o,i);var v=t.memoizedState;a!==d||h!==v||Ne.current||Kt?(typeof g=="function"&&(Ol(t,n,g,r),v=t.memoizedState),(u=Kt||wd(t,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ll(e,t,n,r,s,i)}function Ll(e,t,n,r,i,s){Sp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&pd(t,n,!1),Dt(e,t,s);r=t.stateNode,r1.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=vr(t,e.child,null,s),t.child=vr(t,null,a,s)):je(e,t,a,s),t.memoizedState=r.state,i&&pd(t,n,!0),t.child}function xp(e){var t=e.stateNode;t.pendingContext?hd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hd(e,t.context,!1),Fu(e,t.containerInfo)}function Td(e,t,n,r,i){return yr(),Iu(i),t.flags|=256,je(e,t,n,r),t.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function kp(e,t,n){var r=t.pendingProps,i=te.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(te,i&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=To(o,r,0,null),e=On(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=zl(n),t.memoizedState=Nl,e):Ku(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return i1(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ln(a,s):(s=On(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Nl,r}return s=e.child,e=s.sibling,r=ln(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ku(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function us(e,t,n,r){return r!==null&&Iu(r),vr(t,e.child,null,n),e=Ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=za(Error($(422))),us(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=To({mode:"visible",children:r.children},i,0,null),s=On(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&vr(t,e.child,null,o),t.child.memoizedState=zl(o),t.memoizedState=Nl,s);if(!(t.mode&1))return us(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=za(s,r,void 0),us(e,t,o,r)}if(a=(o&e.childLanes)!==0,Le||a){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zt(e,i),pt(r,e,i,-1))}return Zu(),r=za(Error($(421))),us(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=y1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ve=rn(i.nextSibling),We=t,ee=!0,ft=null,e!==null&&(et[tt++]=Rt,et[tt++]=It,et[tt++]=An,Rt=e.id,It=e.overflow,An=t),t=Ku(t,r.children),t.flags|=4096,t)}function Od(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tl(e.return,t,n)}function Da(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ep(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(je(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,n,t);else if(e.tag===19)Od(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Da(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Da(t,!0,n,null,s);break;case"together":Da(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function s1(e,t,n){switch(t.tag){case 3:xp(t),yr();break;case 5:qh(t);break;case 1:ze(t.type)&&Xs(t);break;case 4:Fu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(to,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?kp(e,t,n):(Q(te,te.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);Q(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ep(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,_p(e,t,n)}return Dt(e,t,n)}var $p,Dl,Cp,bp;$p=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dl=function(){};Cp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pn($t.current);var s=null;switch(n){case"input":i=ol(e,i),r=ol(e,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=ul(e,i),r=ul(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Js)}dl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&q("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};bp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function o1(e,t,n){var r=t.pendingProps;switch(Ru(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return ze(t.type)&&qs(),Ee(t),null;case 3:return r=t.stateNode,wr(),Z(Ne),Z(Pe),Uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(as(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Gl(ft),ft=null))),Dl(e,t),Ee(t),null;case 5:Mu(t);var i=Pn(Ci.current);if(n=t.type,e!==null&&t.stateNode!=null)Cp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Ee(t),null}if(e=Pn($t.current),as(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[kt]=t,r[Ei]=s,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<qr.length;i++)q(qr[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Mc(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Bc(r,s),q("invalid",r)}dl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&os(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&os(r.textContent,a,e),i=["children",""+a]):pi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Xi(r),Uc(r,s,!0);break;case"textarea":Xi(r),Hc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Js)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[kt]=t,e[Ei]=r,$p(e,t,!1,!1),t.stateNode=e;e:{switch(o=fl(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<qr.length;i++)q(qr[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":Mc(e,r),i=ol(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),q("invalid",e);break;case"textarea":Bc(e,r),i=ul(e,r),q("invalid",e);break;default:i=r}dl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?rh(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&th(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mi(e,l):typeof l=="number"&&mi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&q("scroll",e):l!=null&&yu(e,s,l,o))}switch(n){case"input":Xi(e),Uc(e,r,!1);break;case"textarea":Xi(e),Hc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?lr(e,!!r.multiple,s,!1):r.defaultValue!=null&&lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Js)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)bp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=Pn(Ci.current),Pn($t.current),as(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(s=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:os(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&os(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Ee(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Ve!==null&&t.mode&1&&!(t.flags&128))Vh(),yr(),t.flags|=98560,s=!1;else if(s=as(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error($(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[kt]=t}else yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),s=!1}else ft!==null&&(Gl(ft),ft=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?de===0&&(de=3):Zu())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return wr(),Dl(e,t),e===null&&xi(t.stateNode.containerInfo),Ee(t),null;case 10:return Nu(t.type._context),Ee(t),null;case 17:return ze(t.type)&&qs(),Ee(t),null;case 19:if(Z(te),s=t.memoizedState,s===null)return Ee(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Vr(s,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=io(e),o!==null){for(t.flags|=128,Vr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(te,te.current&1|2),t.child}e=e.sibling}s.tail!==null&&oe()>Sr&&(t.flags|=128,r=!0,Vr(s,!1),t.lanes=4194304)}else{if(!r)if(e=io(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Ee(t),null}else 2*oe()-s.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,Vr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=oe(),t.sibling=null,n=te.current,Q(te,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function a1(e,t){switch(Ru(t),t.tag){case 1:return ze(t.type)&&qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),Z(Ne),Z(Pe),Uu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mu(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return wr(),null;case 10:return Nu(t.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var cs=!1,be=!1,l1=typeof WeakSet=="function"?WeakSet:Set,j=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Fl(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Rd=!1;function u1(e,t){if(xl=Ks,e=Oh(),Tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kl={focusedElem:e,selectionRange:n},Ks=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:ut(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(w){ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return v=Rd,Rd=!1,v}function ai(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fl(t,n,s)}i=i.next}while(i!==r)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ml(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pp(e){var t=e.alternate;t!==null&&(e.alternate=null,Pp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Ei],delete t[Cl],delete t[Wg],delete t[Gg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jp(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Js));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function Bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bl(e,t,n),e=e.sibling;e!==null;)Bl(e,t,n),e=e.sibling}var we=null,ct=!1;function Bt(e,t,n){for(n=n.child;n!==null;)Tp(e,t,n),n=n.sibling}function Tp(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:be||sr(n,t);case 6:var r=we,i=ct;we=null,Bt(e,t,n),we=r,ct=i,we!==null&&(ct?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(ct?(e=we,n=n.stateNode,e.nodeType===8?Oa(e.parentNode,n):e.nodeType===1&&Oa(e,n),wi(e)):Oa(we,n.stateNode));break;case 4:r=we,i=ct,we=n.stateNode.containerInfo,ct=!0,Bt(e,t,n),we=r,ct=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fl(n,t,o),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!be&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,t,a)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Bt(e,t,n),be=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function Ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l1),t.forEach(function(r){var i=v1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,ct=!1;break e;case 3:we=a.stateNode.containerInfo,ct=!0;break e;case 4:we=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(we===null)throw Error($(160));Tp(s,o,i),we=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Op(t,e),t=t.sibling}function Op(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),vt(e),r&4){try{ai(3,e,e.return),Po(3,e)}catch(y){ie(e,e.return,y)}try{ai(5,e,e.return)}catch(y){ie(e,e.return,y)}}break;case 1:lt(t,e),vt(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(lt(t,e),vt(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var i=e.stateNode;try{mi(i,"")}catch(y){ie(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xf(i,s),fl(a,o);var u=fl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?rh(i,d):c==="dangerouslySetInnerHTML"?th(i,d):c==="children"?mi(i,d):yu(i,c,d,u)}switch(a){case"input":al(i,s);break;case"textarea":Zf(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?lr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?lr(i,!!s.multiple,s.defaultValue,!0):lr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ei]=s}catch(y){ie(e,e.return,y)}}break;case 6:if(lt(t,e),vt(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){ie(e,e.return,y)}}break;case 3:if(lt(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(y){ie(e,e.return,y)}break;case 4:lt(t,e),vt(e);break;case 13:lt(t,e),vt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ju=oe())),r&4&&Ad(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(be=(u=be)||c,lt(t,e),be=u):lt(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(d=j=c;j!==null;){switch(h=j,g=h.child,h.tag){case 0:case 11:case 14:case 15:ai(4,h,h.return);break;case 1:sr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){ie(r,n,y)}}break;case 5:sr(h,h.return);break;case 22:if(h.memoizedState!==null){Nd(d);continue}}g!==null?(g.return=h,j=g):Nd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nh("display",o))}catch(y){ie(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ie(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(t,e),vt(e),r&4&&Ad(e);break;case 21:break;default:lt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jp(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mi(i,""),r.flags&=-33);var s=Id(e);Bl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Id(e);Ul(e,a,o);break;default:throw Error($(161))}}catch(l){ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c1(e,t,n){j=e,Rp(e)}function Rp(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cs;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||be;a=cs;var u=be;if(cs=o,(be=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?zd(i):l!==null?(l.return=o,j=l):zd(i);for(;s!==null;)j=s,Rp(s),s=s.sibling;j=i,cs=a,be=u}Ld(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):Ld(e)}}function Ld(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||Po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&vd(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vd(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&wi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}be||t.flags&512&&Ml(t)}catch(h){ie(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Nd(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function zd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Po(4,t)}catch(l){ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ie(t,i,l)}}var s=t.return;try{Ml(t)}catch(l){ie(t,s,l)}break;case 5:var o=t.return;try{Ml(t)}catch(l){ie(t,o,l)}}}catch(l){ie(t,t.return,l)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var d1=Math.ceil,ao=Ft.ReactCurrentDispatcher,Yu=Ft.ReactCurrentOwner,rt=Ft.ReactCurrentBatchConfig,D=0,ge=null,ue=null,Se=0,He=0,or=pn(0),de=0,Ti=null,Nn=0,jo=0,Qu=0,li=null,Ae=null,Ju=0,Sr=1/0,jt=null,lo=!1,Hl=null,on=null,ds=!1,Zt=null,uo=0,ui=0,Vl=null,Ts=-1,Os=0;function Oe(){return D&6?oe():Ts!==-1?Ts:Ts=oe()}function an(e){return e.mode&1?D&2&&Se!==0?Se&-Se:Yg.transition!==null?(Os===0&&(Os=mh()),Os):(e=V,e!==0||(e=window.event,e=e===void 0?16:xh(e.type)),e):1}function pt(e,t,n,r){if(50<ui)throw ui=0,Vl=null,Error($(185));Fi(e,n,r),(!(D&2)||e!==ge)&&(e===ge&&(!(D&2)&&(jo|=n),de===4&&Jt(e,Se)),De(e,r),n===1&&D===0&&!(t.mode&1)&&(Sr=oe()+500,$o&&mn()))}function De(e,t){var n=e.callbackNode;Ym(e,t);var r=Gs(e,e===ge?Se:0);if(r===0)n!==null&&Gc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gc(n),t===1)e.tag===0?Kg(Dd.bind(null,e)):Uh(Dd.bind(null,e)),Hg(function(){!(D&6)&&mn()}),n=null;else{switch(gh(r)){case 1:n=xu;break;case 4:n=hh;break;case 16:n=Ws;break;case 536870912:n=ph;break;default:n=Ws}n=Mp(n,Ip.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ip(e,t){if(Ts=-1,Os=0,D&6)throw Error($(327));var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var r=Gs(e,e===ge?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=co(e,r);else{t=r;var i=D;D|=2;var s=Lp();(ge!==e||Se!==t)&&(jt=null,Sr=oe()+500,Tn(e,t));do try{p1();break}catch(a){Ap(e,a)}while(!0);Lu(),ao.current=s,D=i,ue!==null?t=0:(ge=null,Se=0,t=de)}if(t!==0){if(t===2&&(i=yl(e),i!==0&&(r=i,t=Wl(e,i))),t===1)throw n=Ti,Tn(e,0),Jt(e,r),De(e,oe()),n;if(t===6)Jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!f1(i)&&(t=co(e,r),t===2&&(s=yl(e),s!==0&&(r=s,t=Wl(e,s))),t===1))throw n=Ti,Tn(e,0),Jt(e,r),De(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:kn(e,Ae,jt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=Ju+500-oe(),10<t)){if(Gs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$l(kn.bind(null,e,Ae,jt),t);break}kn(e,Ae,jt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ht(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d1(r/1960))-r,10<r){e.timeoutHandle=$l(kn.bind(null,e,Ae,jt),r);break}kn(e,Ae,jt);break;case 5:kn(e,Ae,jt);break;default:throw Error($(329))}}}return De(e,oe()),e.callbackNode===n?Ip.bind(null,e):null}function Wl(e,t){var n=li;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=co(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Gl(t)),e}function Gl(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function f1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~Qu,t&=~jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Dd(e){if(D&6)throw Error($(327));hr();var t=Gs(e,0);if(!(t&1))return De(e,oe()),null;var n=co(e,t);if(e.tag!==0&&n===2){var r=yl(e);r!==0&&(t=r,n=Wl(e,r))}if(n===1)throw n=Ti,Tn(e,0),Jt(e,t),De(e,oe()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ae,jt),De(e,oe()),null}function qu(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Sr=oe()+500,$o&&mn())}}function zn(e){Zt!==null&&Zt.tag===0&&!(D&6)&&hr();var t=D;D|=1;var n=rt.transition,r=V;try{if(rt.transition=null,V=1,e)return e()}finally{V=r,rt.transition=n,D=t,!(D&6)&&mn()}}function Xu(){He=or.current,Z(or)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bg(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qs();break;case 3:wr(),Z(Ne),Z(Pe),Uu();break;case 5:Mu(r);break;case 4:wr();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Nu(r.type._context);break;case 22:case 23:Xu()}n=n.return}if(ge=e,ue=e=ln(e.current,null),Se=He=t,de=0,Ti=null,Qu=jo=Nn=0,Ae=li=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}bn=null}return e}function Ap(e,t){do{var n=ue;try{if(Lu(),bs.current=oo,so){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}so=!1}if(Ln=0,he=ce=ne=null,oi=!1,bi=0,Yu.current=null,n===null||n.return===null){de=1,Ti=t,ue=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Se,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=$d(o);if(g!==null){g.flags&=-257,Cd(g,o,a,s,t),g.mode&1&&Ed(s,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){Ed(s,u,t),Zu();break e}l=Error($(426))}}else if(ee&&a.mode&1){var k=$d(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Cd(k,o,a,s,t),Iu(_r(l,a));break e}}s=l=_r(l,a),de!==4&&(de=2),li===null?li=[s]:li.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=yp(s,l,t);yd(s,m);break e;case 1:a=l;var f=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(on===null||!on.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=vp(s,a,t);yd(s,w);break e}}s=s.return}while(s!==null)}zp(n)}catch(S){t=S,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function Lp(){var e=ao.current;return ao.current=oo,e===null?oo:e}function Zu(){(de===0||de===3||de===2)&&(de=4),ge===null||!(Nn&268435455)&&!(jo&268435455)||Jt(ge,Se)}function co(e,t){var n=D;D|=2;var r=Lp();(ge!==e||Se!==t)&&(jt=null,Tn(e,t));do try{h1();break}catch(i){Ap(e,i)}while(!0);if(Lu(),D=n,ao.current=r,ue!==null)throw Error($(261));return ge=null,Se=0,de}function h1(){for(;ue!==null;)Np(ue)}function p1(){for(;ue!==null&&!Fm();)Np(ue)}function Np(e){var t=Fp(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?zp(e):ue=t,Yu.current=null}function zp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=a1(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ue=null;return}}else if(n=o1(n,t,He),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);de===0&&(de=5)}function kn(e,t,n){var r=V,i=rt.transition;try{rt.transition=null,V=1,m1(e,t,n,r)}finally{rt.transition=i,V=r}return null}function m1(e,t,n,r){do hr();while(Zt!==null);if(D&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qm(e,s),e===ge&&(ue=ge=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ds||(ds=!0,Mp(Ws,function(){return hr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var o=V;V=1;var a=D;D|=4,Yu.current=null,u1(e,n),Op(n,e),Lg(kl),Ks=!!xl,kl=xl=null,e.current=n,c1(n),Mm(),D=a,V=o,rt.transition=s}else e.current=n;if(ds&&(ds=!1,Zt=e,uo=i),s=e.pendingLanes,s===0&&(on=null),Hm(n.stateNode),De(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lo)throw lo=!1,e=Hl,Hl=null,e;return uo&1&&e.tag!==0&&hr(),s=e.pendingLanes,s&1?e===Vl?ui++:(ui=0,Vl=e):ui=0,mn(),null}function hr(){if(Zt!==null){var e=gh(uo),t=rt.transition,n=V;try{if(rt.transition=null,V=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,uo=0,D&6)throw Error($(331));var i=D;for(D|=4,j=e.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:ai(8,c,s)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var h=c.sibling,g=c.return;if(Pp(c),c===u){j=null;break}if(h!==null){h.return=g,j=h;break}j=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ai(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,j=m;break e}j=s.return}}var f=e.current;for(j=f;j!==null;){o=j;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,j=p;else e:for(o=f;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Po(9,a)}}catch(S){ie(a,a.return,S)}if(a===o){j=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,j=w;break e}j=a.return}}if(D=i,mn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{V=n,rt.transition=t}}return!1}function Fd(e,t,n){t=_r(n,t),t=yp(e,t,1),e=sn(e,t,1),t=Oe(),e!==null&&(Fi(e,1,t),De(e,t))}function ie(e,t,n){if(e.tag===3)Fd(e,e,n);else for(;t!==null;){if(t.tag===3){Fd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=_r(n,e),e=vp(t,e,1),t=sn(t,e,1),e=Oe(),t!==null&&(Fi(t,1,e),De(t,e));break}}t=t.return}}function g1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(Se&n)===n&&(de===4||de===3&&(Se&130023424)===Se&&500>oe()-Ju?Tn(e,0):Qu|=n),De(e,t)}function Dp(e,t){t===0&&(e.mode&1?(t=ts,ts<<=1,!(ts&130023424)&&(ts=4194304)):t=1);var n=Oe();e=zt(e,t),e!==null&&(Fi(e,t,n),De(e,n))}function y1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dp(e,n)}function v1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),Dp(e,n)}var Fp;Fp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,s1(e,t,n);Le=!!(e.flags&131072)}else Le=!1,ee&&t.flags&1048576&&Bh(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;js(e,t),e=t.pendingProps;var i=gr(t,Pe.current);fr(t,n),i=Hu(null,t,r,e,i,n);var s=Vu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(s=!0,Xs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Du(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,Rl(t,r,e,n),t=Ll(null,t,r,!0,s,n)):(t.tag=0,ee&&s&&Ou(t),je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(js(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=_1(r),e=ut(r,e),i){case 0:t=Al(null,t,r,e,n);break e;case 1:t=jd(null,t,r,e,n);break e;case 11:t=bd(null,t,r,e,n);break e;case 14:t=Pd(null,t,r,ut(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Al(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),jd(e,t,r,i,n);case 3:e:{if(xp(t),e===null)throw Error($(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Gh(e,t),ro(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=_r(Error($(423)),t),t=Td(e,t,r,n,i);break e}else if(r!==i){i=_r(Error($(424)),t),t=Td(e,t,r,n,i);break e}else for(Ve=rn(t.stateNode.containerInfo.firstChild),We=t,ee=!0,ft=null,n=Jh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===i){t=Dt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return qh(t),e===null&&jl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,El(r,i)?o=null:s!==null&&El(r,s)&&(t.flags|=32),Sp(e,t),je(e,t,o,n),t.child;case 6:return e===null&&jl(t),null;case 13:return kp(e,t,n);case 4:return Fu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),bd(e,t,r,i,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Q(to,r._currentValue),r._currentValue=o,s!==null)if(gt(s.value,o)){if(s.children===i.children&&!Ne.current){t=Dt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=At(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Tl(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Tl(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fr(t,n),i=it(i),r=r(i),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),Pd(e,t,r,i,n);case 15:return wp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),js(e,t),t.tag=1,ze(r)?(e=!0,Xs(t)):e=!1,fr(t,n),Yh(t,r,i),Rl(t,r,i,n),Ll(null,t,r,!0,e,n);case 19:return Ep(e,t,n);case 22:return _p(e,t,n)}throw Error($(156,t.tag))};function Mp(e,t){return fh(e,t)}function w1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new w1(e,t,n,r)}function ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _1(e){if(typeof e=="function")return ec(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wu)return 11;if(e===_u)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")ec(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Jn:return On(n.children,i,s,t);case vu:o=8,i|=8;break;case nl:return e=nt(12,n,t,i|2),e.elementType=nl,e.lanes=s,e;case rl:return e=nt(13,n,t,i),e.elementType=rl,e.lanes=s,e;case il:return e=nt(19,n,t,i),e.elementType=il,e.lanes=s,e;case Qf:return To(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kf:o=10;break e;case Yf:o=9;break e;case wu:o=11;break e;case _u:o=14;break e;case Gt:o=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=nt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function On(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Qf,e.lanes=n,e.stateNode={isHidden:!1},e}function Fa(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function Ma(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function S1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tc(e,t,n,r,i,s,o,a,l){return e=new S1(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=nt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(s),e}function x1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Up(e){if(!e)return dn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(ze(n))return Mh(e,n,t)}return t}function Bp(e,t,n,r,i,s,o,a,l){return e=tc(n,r,!0,e,i,s,o,a,l),e.context=Up(null),n=e.current,r=Oe(),i=an(n),s=At(r,i),s.callback=t??null,sn(n,s,i),e.current.lanes=i,Fi(e,i,r),De(e,r),e}function Oo(e,t,n,r){var i=t.current,s=Oe(),o=an(i);return n=Up(n),t.context===null?t.context=n:t.pendingContext=n,t=At(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(i,t,o),e!==null&&(pt(e,i,o,s),Cs(e,i,o)),o}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nc(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function k1(){return null}var Hp=typeof reportError=="function"?reportError:function(e){console.error(e)};function rc(e){this._internalRoot=e}Ro.prototype.render=rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Oo(e,t,null,null)};Ro.prototype.unmount=rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){Oo(null,e,null,null)}),t[Nt]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=wh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&Sh(e)}};function ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ud(){}function E1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=fo(o);s.call(u)}}var o=Bp(t,r,e,0,null,!1,!1,"",Ud);return e._reactRootContainer=o,e[Nt]=o.current,xi(e.nodeType===8?e.parentNode:e),zn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=fo(l);a.call(u)}}var l=tc(e,0,!1,null,null,!1,!1,"",Ud);return e._reactRootContainer=l,e[Nt]=l.current,xi(e.nodeType===8?e.parentNode:e),zn(function(){Oo(t,l,n,r)}),l}function Ao(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=fo(o);a.call(l)}}Oo(t,o,e,i)}else o=E1(n,t,e,i,r);return fo(o)}yh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(ku(t,n|1),De(t,oe()),!(D&6)&&(Sr=oe()+500,mn()))}break;case 13:zn(function(){var r=zt(e,1);if(r!==null){var i=Oe();pt(r,e,1,i)}}),nc(e,1)}};Eu=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Oe();pt(t,e,134217728,n)}nc(e,134217728)}};vh=function(e){if(e.tag===13){var t=an(e),n=zt(e,t);if(n!==null){var r=Oe();pt(n,e,t,r)}nc(e,t)}};wh=function(){return V};_h=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};pl=function(e,t,n){switch(t){case"input":if(al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Eo(r);if(!i)throw Error($(90));qf(r),al(r,i)}}}break;case"textarea":Zf(e,n);break;case"select":t=n.value,t!=null&&lr(e,!!n.multiple,t,!1)}};oh=qu;ah=zn;var $1={usingClientEntryPoint:!1,Events:[Ui,er,Eo,ih,sh,qu]},Wr={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},C1={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ch(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||k1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{_o=fs.inject(C1),Et=fs}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ic(t))throw Error($(200));return x1(e,t,null,n)};Ye.createRoot=function(e,t){if(!ic(e))throw Error($(299));var n=!1,r="",i=Hp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tc(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,xi(e.nodeType===8?e.parentNode:e),new rc(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=ch(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return zn(e)};Ye.hydrate=function(e,t,n){if(!Io(t))throw Error($(200));return Ao(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!ic(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Hp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Bp(t,null,e,1,n??null,i,!1,s,o),e[Nt]=t.current,xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ro(t)};Ye.render=function(e,t,n){if(!Io(t))throw Error($(200));return Ao(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!Io(e))throw Error($(40));return e._reactRootContainer?(zn(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Ye.unstable_batchedUpdates=qu;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Io(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Ao(e,t,n,!1,r)};Ye.version="18.2.0-next-9e3b772b8-20220608";function Vp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vp)}catch(e){console.error(e)}}Vp(),Bf.exports=Ye;var b1=Bf.exports,Bd=b1;el.createRoot=Bd.createRoot,el.hydrateRoot=Bd.hydrateRoot;var me=function(){return me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},me.apply(this,arguments)};function xr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function P1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var X="-ms-",ci="-moz-",H="-webkit-",Wp="comm",Lo="rule",sc="decl",j1="@import",Gp="@keyframes",T1="@layer",O1=Math.abs,oc=String.fromCharCode,Kl=Object.assign;function R1(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function Kp(e){return e.trim()}function Tt(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function Is(e,t){return e.indexOf(t)}function pe(e,t){return e.charCodeAt(t)|0}function kr(e,t,n){return e.slice(t,n)}function _t(e){return e.length}function Yp(e){return e.length}function Xr(e,t){return t.push(e),e}function I1(e,t){return e.map(t).join("")}function Hd(e,t){return e.filter(function(n){return!Tt(n,t)})}var No=1,Er=1,Qp=0,ot=0,ae=0,Ir="";function zo(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:No,column:Er,length:o,return:"",siblings:a}}function Vt(e,t){return Kl(zo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Hn(e){for(;e.root;)e=Vt(e.root,{children:[e]});Xr(e,e.siblings)}function A1(){return ae}function L1(){return ae=ot>0?pe(Ir,--ot):0,Er--,ae===10&&(Er=1,No--),ae}function mt(){return ae=ot<Qp?pe(Ir,ot++):0,Er++,ae===10&&(Er=1,No++),ae}function Rn(){return pe(Ir,ot)}function As(){return ot}function Do(e,t){return kr(Ir,e,t)}function Yl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N1(e){return No=Er=1,Qp=_t(Ir=e),ot=0,[]}function z1(e){return Ir="",e}function Ua(e){return Kp(Do(ot-1,Ql(e===91?e+2:e===40?e+1:e)))}function D1(e){for(;(ae=Rn())&&ae<33;)mt();return Yl(e)>2||Yl(ae)>3?"":" "}function F1(e,t){for(;--t&&mt()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return Do(e,As()+(t<6&&Rn()==32&&mt()==32))}function Ql(e){for(;mt();)switch(ae){case e:return ot;case 34:case 39:e!==34&&e!==39&&Ql(ae);break;case 40:e===41&&Ql(e);break;case 92:mt();break}return ot}function M1(e,t){for(;mt()&&e+ae!==57;)if(e+ae===84&&Rn()===47)break;return"/*"+Do(t,ot-1)+"*"+oc(e===47?e:mt())}function U1(e){for(;!Yl(Rn());)mt();return Do(e,ot)}function B1(e){return z1(Ls("",null,null,null,[""],e=N1(e),0,[0],e))}function Ls(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,g=0,v=0,y=1,k=1,m=1,f=0,p="",w=i,S=s,E=r,x=p;k;)switch(v=f,f=mt()){case 40:if(v!=108&&pe(x,d-1)==58){Is(x+=A(Ua(f),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:x+=Ua(f);break;case 9:case 10:case 13:case 32:x+=D1(v);break;case 92:x+=F1(As()-1,7);continue;case 47:switch(Rn()){case 42:case 47:Xr(H1(M1(mt(),As()),t,n,l),l);break;default:x+="/"}break;case 123*y:a[u++]=_t(x)*m;case 125*y:case 59:case 0:switch(f){case 0:case 125:k=0;case 59+c:m==-1&&(x=A(x,/\f/g,"")),g>0&&_t(x)-d&&Xr(g>32?Wd(x+";",r,n,d-1,l):Wd(A(x," ","")+";",r,n,d-2,l),l);break;case 59:x+=";";default:if(Xr(E=Vd(x,t,n,u,c,i,a,p,w=[],S=[],d,s),s),f===123)if(c===0)Ls(x,t,E,E,w,s,d,a,S);else switch(h===99&&pe(x,3)===110?100:h){case 100:case 108:case 109:case 115:Ls(e,E,E,r&&Xr(Vd(e,E,E,0,0,i,a,p,i,w=[],d,S),S),i,S,d,a,r?w:S);break;default:Ls(x,E,E,E,[""],S,0,a,S)}}u=c=g=0,y=m=1,p=x="",d=o;break;case 58:d=1+_t(x),g=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&L1()==125)continue}switch(x+=oc(f),f*y){case 38:m=c>0?1:(x+="\f",-1);break;case 44:a[u++]=(_t(x)-1)*m,m=1;break;case 64:Rn()===45&&(x+=Ua(mt())),h=Rn(),c=d=_t(p=x+=U1(As())),f++;break;case 45:v===45&&_t(x)==2&&(y=0)}}return s}function Vd(e,t,n,r,i,s,o,a,l,u,c,d){for(var h=i-1,g=i===0?s:[""],v=Yp(g),y=0,k=0,m=0;y<r;++y)for(var f=0,p=kr(e,h+1,h=O1(k=o[y])),w=e;f<v;++f)(w=Kp(k>0?g[f]+" "+p:A(p,/&\f/g,g[f])))&&(l[m++]=w);return zo(e,t,n,i===0?Lo:a,l,u,c,d)}function H1(e,t,n,r){return zo(e,t,n,Wp,oc(A1()),kr(e,2,-2),0,r)}function Wd(e,t,n,r,i){return zo(e,t,n,sc,kr(e,0,r),kr(e,r+1,-1),r,i)}function Jp(e,t,n){switch(R1(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return ci+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+ci+e+X+e+e;case 5936:switch(pe(e,t+11)){case 114:return H+e+X+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+X+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+X+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+X+e+e;case 6165:return H+e+X+"flex-"+e+e;case 5187:return H+e+A(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return H+e+X+"flex-item-"+A(e,/flex-|-self/g,"")+(Tt(e,/flex-|baseline/)?"":X+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return H+e+X+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+X+A(e,"shrink","negative")+e;case 5292:return H+e+X+A(e,"basis","preferred-size")+e;case 6060:return H+"box-"+A(e,"-grow","")+H+e+X+A(e,"grow","positive")+e;case 4554:return H+A(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!Tt(e,/flex-|baseline/))return X+"grid-column-align"+kr(e,t)+e;break;case 2592:case 3360:return X+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Tt(r.props,/grid-\w+-end/)})?~Is(e+(n=n[t].value),"span")?e:X+A(e,"-start","")+e+X+"grid-row-span:"+(~Is(n,"span")?Tt(n,/\d+/):+Tt(n,/\d+/)-+Tt(e,/\d+/))+";":X+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Tt(r.props,/grid-\w+-start/)})?e:X+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+ci+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Is(e,"stretch")?Jp(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return X+i+":"+s+u+(o?X+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(pe(e,t+6)===121)return A(e,":",":"+H)+e;break;case 6444:switch(pe(e,pe(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(pe(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+X+"$2box$3")+e;case 100:return A(e,":",":"+X)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function ho(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function V1(e,t,n,r){switch(e.type){case T1:if(e.children.length)break;case j1:case sc:return e.return=e.return||e.value;case Wp:return"";case Gp:return e.return=e.value+"{"+ho(e.children,r)+"}";case Lo:if(!_t(e.value=e.props.join(",")))return""}return _t(n=ho(e.children,r))?e.return=e.value+"{"+n+"}":""}function W1(e){var t=Yp(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function G1(e){return function(t){t.root||(t=t.return)&&e(t)}}function K1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case sc:e.return=Jp(e.value,e.length,n);return;case Gp:return ho([Vt(e,{value:A(e.value,"@","@"+H)})],r);case Lo:if(e.length)return I1(n=e.props,function(i){switch(Tt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hn(Vt(e,{props:[A(i,/:(read-\w+)/,":"+ci+"$1")]})),Hn(Vt(e,{props:[i]})),Kl(e,{props:Hd(n,r)});break;case"::placeholder":Hn(Vt(e,{props:[A(i,/:(plac\w+)/,":"+H+"input-$1")]})),Hn(Vt(e,{props:[A(i,/:(plac\w+)/,":"+ci+"$1")]})),Hn(Vt(e,{props:[A(i,/:(plac\w+)/,X+"input-$1")]})),Hn(Vt(e,{props:[i]})),Kl(e,{props:Hd(n,r)});break}return""})}}var qp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Be={},$r=typeof process<"u"&&Be!==void 0&&(Be.REACT_APP_SC_ATTR||Be.SC_ATTR)||"data-styled",ac=typeof window<"u"&&"HTMLElement"in window,Y1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==""?Be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.SC_DISABLE_SPEEDY!==void 0&&Be.SC_DISABLE_SPEEDY!==""&&Be.SC_DISABLE_SPEEDY!=="false"&&Be.SC_DISABLE_SPEEDY),Q1={},Fo=Object.freeze([]),Cr=Object.freeze({});function Xp(e,t,n){return n===void 0&&(n=Cr),e.theme!==n.theme&&e.theme||t||n.theme}var Zp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),J1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q1=/(^-|-$)/g;function Gd(e){return e.replace(J1,"-").replace(q1,"")}var X1=/(a)(d)/gi,Kd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kd(t%52)+n;return(Kd(t%52)+n).replace(X1,"$1-$2")}var Ba,ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},e0=function(e){return ar(5381,e)};function lc(e){return Jl(e0(e)>>>0)}function Z1(e){return e.displayName||e.name||"Component"}function Ha(e){return typeof e=="string"&&!0}var t0=typeof Symbol=="function"&&Symbol.for,n0=t0?Symbol.for("react.memo"):60115,ey=t0?Symbol.for("react.forward_ref"):60112,ty={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ny={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ry=((Ba={})[ey]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ba[n0]=r0,Ba);function Yd(e){return("type"in(t=e)&&t.type.$$typeof)===n0?r0:"$$typeof"in e?ry[e.$$typeof]:ty;var t}var iy=Object.defineProperty,sy=Object.getOwnPropertyNames,Qd=Object.getOwnPropertySymbols,oy=Object.getOwnPropertyDescriptor,ay=Object.getPrototypeOf,Jd=Object.prototype;function i0(e,t,n){if(typeof t!="string"){if(Jd){var r=ay(t);r&&r!==Jd&&i0(e,r,n)}var i=sy(t);Qd&&(i=i.concat(Qd(t)));for(var s=Yd(e),o=Yd(t),a=0;a<i.length;++a){var l=i[a];if(!(l in ny||n&&n[l]||o&&l in o||s&&l in s)){var u=oy(t,l);try{iy(e,l,u)}catch{}}}}return e}function Dn(e){return typeof e=="function"}function uc(e){return typeof e=="object"&&"styledComponentId"in e}function jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function po(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Oi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ql(e,t,n){if(n===void 0&&(n=!1),!n&&!Oi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ql(e[r],t[r]);else if(Oi(t))for(var r in t)e[r]=ql(e[r],t[r]);return e}function cc(e,t){Object.defineProperty(e,"toString",{value:t})}function fn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ly=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw fn(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Ns=new Map,mo=new Map,zs=1,hs=function(e){if(Ns.has(e))return Ns.get(e);for(;mo.has(zs);)zs++;var t=zs++;return Ns.set(e,t),mo.set(t,e),t},uy=function(e,t){zs=t+1,Ns.set(e,t),mo.set(t,e)},cy="style[".concat($r,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),dy=new RegExp("^".concat($r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fy=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},hy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(dy);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(uy(c,u),fy(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function py(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var s0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat($r,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute($r,"active"),r.setAttribute("data-styled-version","6.1.1");var o=py();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},my=function(){function e(t){this.element=s0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw fn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),gy=function(){function e(t){this.element=s0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),yy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),qd=ac,vy={isServer:!ac,useCSSOMInjection:!Y1},go=function(){function e(t,n,r){t===void 0&&(t=Cr),n===void 0&&(n={});var i=this;this.options=me(me({},vy),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ac&&qd&&(qd=!1,function(s){for(var o=document.querySelectorAll(cy),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute($r)!=="active"&&(hy(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),cc(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var h=function(m){return mo.get(m)}(d);if(h===void 0)return"continue";var g=s.names.get(h),v=o.getGroup(d);if(g===void 0||v.length===0)return"continue";var y="".concat($r,".g").concat(d,'[id="').concat(h,'"]'),k="";g!==void 0&&g.forEach(function(m){m.length>0&&(k+="".concat(m,","))}),l+="".concat(v).concat(y,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return hs(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(me(me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new yy(i):r?new my(i):new gy(i)}(this.options),new ly(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(hs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(hs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(hs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wy=/&/g,_y=/^\s*\/\/.*$/gm;function o0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=o0(n.children,t)),n})}function Sy(e){var t,n,r,i=e===void 0?Cr:e,s=i.options,o=s===void 0?Cr:s,a=i.plugins,l=a===void 0?Fo:a,u=function(h,g,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===Lo&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(wy,n).replace(r,u))}),o.prefix&&c.push(K1),c.push(V1);var d=function(h,g,v,y){g===void 0&&(g=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=h.replace(_y,""),m=B1(v||g?"".concat(v," ").concat(g," { ").concat(k," }"):k);o.namespace&&(m=o0(m,o.namespace));var f=[];return ho(m,W1(c.concat(G1(function(p){return f.push(p)})))),f};return d.hash=l.length?l.reduce(function(h,g){return g.name||fn(15),ar(h,g.name)},5381).toString():"",d}var xy=new go,Xl=Sy(),a0=Te.createContext({shouldForwardProp:void 0,styleSheet:xy,stylis:Xl});a0.Consumer;Te.createContext(void 0);function Zl(){return C.useContext(a0)}var l0=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Xl);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cc(this,function(){throw fn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Xl),this.name+t.hash},e}(),ky=function(e){return e>="A"&&e<="Z"};function Xd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ky(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var u0=function(e){return e==null||e===!1||e===""},c0=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!u0(s)&&(Array.isArray(s)&&s.isCss||Dn(s)?r.push("".concat(Xd(i),":"),s,";"):Oi(s)?r.push.apply(r,xr(xr(["".concat(i," {")],c0(s),!1),["}"],!1)):r.push("".concat(Xd(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in qp||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function un(e,t,n,r){if(u0(e))return[];if(uc(e))return[".".concat(e.styledComponentId)];if(Dn(e)){if(!Dn(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return un(i,t,n,r)}var s;return e instanceof l0?n?(e.inject(n,r),[e.getName(r)]):[e]:Oi(e)?c0(e):Array.isArray(e)?Array.prototype.concat.apply(Fo,e.map(function(o){return un(o,t,n,r)})):[e.toString()]}function d0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Dn(n)&&!uc(n))return!1}return!0}var Ey=e0("6.1.1"),$y=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&d0(t),this.componentId=n,this.baseHash=ar(Ey,n),this.baseStyle=r,go.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=jn(i,this.staticRulesId);else{var s=po(un(this.rules,t,n,r)),o=Jl(ar(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=jn(i,o),this.staticRulesId=o}else{for(var l=ar(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=po(un(d,t,n,r));l=ar(l,h+c),u+=h}}if(u){var g=Jl(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=jn(i,g)}}return i},e}(),br=Te.createContext(void 0);br.Consumer;function Cy(){var e=C.useContext(br);if(!e)throw fn(18);return e}function by(e){var t=Te.useContext(br),n=C.useMemo(function(){return function(r,i){if(!r)throw fn(14);if(Dn(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw fn(8);return i?me(me({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Te.createElement(br.Provider,{value:n},e.children):null}var Va={};function Py(e,t,n){var r=uc(e),i=e,s=!Ha(e),o=t.attrs,a=o===void 0?Fo:o,l=t.componentId,u=l===void 0?function(w,S){var E=typeof w!="string"?"sc":Gd(w);Va[E]=(Va[E]||0)+1;var x="".concat(E,"-").concat(lc("6.1.1"+E+Va[E]));return S?"".concat(S,"-").concat(x):x}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(w){return Ha(w)?"styled.".concat(w):"Styled(".concat(Z1(w),")")}(e):c,h=t.displayName&&t.componentId?"".concat(Gd(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(w,S){return y(w,S)&&k(w,S)}}else v=y}var m=new $y(n,h,r?i.componentStyle:void 0);function f(w,S){return function(E,x,T){var K=E.attrs,L=E.componentStyle,Me=E.defaultProps,gn=E.foldedComponentIds,yn=E.styledComponentId,Yi=E.target,ha=Te.useContext(br),zr=Zl(),vn=E.shouldForwardProp||zr.shouldForwardProp,P=function(qe,bt,Xe){for(var yt,wn=me(me({},bt),{className:void 0,theme:Xe}),pa=0;pa<qe.length;pa+=1){var Qi=Dn(yt=qe[pa])?yt(wn):yt;for(var Ut in Qi)wn[Ut]=Ut==="className"?jn(wn[Ut],Qi[Ut]):Ut==="style"?me(me({},wn[Ut]),Qi[Ut]):Qi[Ut]}return bt.className&&(wn.className=jn(wn.className,bt.className)),wn}(K,x,Xp(x,ha,Me)||Cr),O=P.as||Yi,R={};for(var B in P)P[B]===void 0||B[0]==="$"||B==="as"||B==="theme"||(B==="forwardedAs"?R.as=P.forwardedAs:vn&&!vn(B,O)||(R[B]=P[B]));var se=function(qe,bt){var Xe=Zl(),yt=qe.generateAndInjectStyles(bt,Xe.styleSheet,Xe.stylis);return yt}(L,P),Mt=jn(gn,yn);return se&&(Mt+=" "+se),P.className&&(Mt+=" "+P.className),R[Ha(O)&&!Zp.has(O)?"class":"className"]=Mt,R.ref=T,C.createElement(O,R)}(p,w,S)}f.displayName=d;var p=Te.forwardRef(f);return p.attrs=g,p.componentStyle=m,p.displayName=d,p.shouldForwardProp=v,p.foldedComponentIds=r?jn(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=h,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var E=[],x=1;x<arguments.length;x++)E[x-1]=arguments[x];for(var T=0,K=E;T<K.length;T++)ql(S,K[T],!0);return S}({},i.defaultProps,w):w}}),cc(p,function(){return".".concat(p.styledComponentId)}),s&&i0(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Zd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ef=function(e){return Object.assign(e,{isCss:!0})};function Mo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Dn(e)||Oi(e)){var r=e;return ef(un(Zd(Fo,xr([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?un(i):ef(un(Zd(i,t)))}function eu(e,t,n){if(n===void 0&&(n=Cr),!t)throw fn(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Mo.apply(void 0,xr([i],s,!1)))};return r.attrs=function(i){return eu(e,t,me(me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return eu(e,t,me(me({},n),i))},r}var f0=function(e){return eu(Py,e)},I=f0;Zp.forEach(function(e){I[e]=f0(e)});var jy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=d0(t),go.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(po(un(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&go.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Ty(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Mo.apply(void 0,xr([e],t,!1)),i="sc-global-".concat(lc(JSON.stringify(r))),s=new jy(r,i),o=function(l){var u=Zl(),c=Te.useContext(br),d=Te.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Te.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,h){if(s.isStatic)s.renderStyles(l,Q1,c,h);else{var g=me(me({},u),{theme:Xp(u,d,o.defaultProps)});s.renderStyles(l,g,c,h)}}return Te.memo(o)}function Oy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=po(Mo.apply(void 0,xr([e],t,!1))),i=lc(r);return new l0(i,r)}const Ry=e=>C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},C.createElement("path",{d:"M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"})),Iy=e=>C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},C.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"})),tu=e=>C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},C.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})),Ay="/assets/scott-yERU3hYK.jpg";function Ly(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ny(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var zy=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ny(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Ly(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),$e="-ms-",yo="-moz-",M="-webkit-",h0="comm",dc="rule",fc="decl",Dy="@import",p0="@keyframes",Fy="@layer",My=Math.abs,Uo=String.fromCharCode,Uy=Object.assign;function By(e,t){return _e(e,0)^45?(((t<<2^_e(e,0))<<2^_e(e,1))<<2^_e(e,2))<<2^_e(e,3):0}function m0(e){return e.trim()}function Hy(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function nu(e,t){return e.indexOf(t)}function _e(e,t){return e.charCodeAt(t)|0}function Ri(e,t,n){return e.slice(t,n)}function St(e){return e.length}function hc(e){return e.length}function ps(e,t){return t.push(e),e}function Vy(e,t){return e.map(t).join("")}var Bo=1,Pr=1,g0=0,Fe=0,le=0,Ar="";function Ho(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Bo,column:Pr,length:o,return:""}}function Gr(e,t){return Uy(Ho("",null,null,"",null,null,0),e,{length:-e.length},t)}function Wy(){return le}function Gy(){return le=Fe>0?_e(Ar,--Fe):0,Pr--,le===10&&(Pr=1,Bo--),le}function Ge(){return le=Fe<g0?_e(Ar,Fe++):0,Pr++,le===10&&(Pr=1,Bo++),le}function Ct(){return _e(Ar,Fe)}function Ds(){return Fe}function Hi(e,t){return Ri(Ar,e,t)}function Ii(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function y0(e){return Bo=Pr=1,g0=St(Ar=e),Fe=0,[]}function v0(e){return Ar="",e}function Fs(e){return m0(Hi(Fe-1,ru(e===91?e+2:e===40?e+1:e)))}function Ky(e){for(;(le=Ct())&&le<33;)Ge();return Ii(e)>2||Ii(le)>3?"":" "}function Yy(e,t){for(;--t&&Ge()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return Hi(e,Ds()+(t<6&&Ct()==32&&Ge()==32))}function ru(e){for(;Ge();)switch(le){case e:return Fe;case 34:case 39:e!==34&&e!==39&&ru(le);break;case 40:e===41&&ru(e);break;case 92:Ge();break}return Fe}function Qy(e,t){for(;Ge()&&e+le!==57;)if(e+le===84&&Ct()===47)break;return"/*"+Hi(t,Fe-1)+"*"+Uo(e===47?e:Ge())}function Jy(e){for(;!Ii(Ct());)Ge();return Hi(e,Fe)}function qy(e){return v0(Ms("",null,null,null,[""],e=y0(e),0,[0],e))}function Ms(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,g=0,v=0,y=1,k=1,m=1,f=0,p="",w=i,S=s,E=r,x=p;k;)switch(v=f,f=Ge()){case 40:if(v!=108&&_e(x,d-1)==58){nu(x+=U(Fs(f),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:x+=Fs(f);break;case 9:case 10:case 13:case 32:x+=Ky(v);break;case 92:x+=Yy(Ds()-1,7);continue;case 47:switch(Ct()){case 42:case 47:ps(Xy(Qy(Ge(),Ds()),t,n),l);break;default:x+="/"}break;case 123*y:a[u++]=St(x)*m;case 125*y:case 59:case 0:switch(f){case 0:case 125:k=0;case 59+c:m==-1&&(x=U(x,/\f/g,"")),g>0&&St(x)-d&&ps(g>32?nf(x+";",r,n,d-1):nf(U(x," ","")+";",r,n,d-2),l);break;case 59:x+=";";default:if(ps(E=tf(x,t,n,u,c,i,a,p,w=[],S=[],d),s),f===123)if(c===0)Ms(x,t,E,E,w,s,d,a,S);else switch(h===99&&_e(x,3)===110?100:h){case 100:case 108:case 109:case 115:Ms(e,E,E,r&&ps(tf(e,E,E,0,0,i,a,p,i,w=[],d),S),i,S,d,a,r?w:S);break;default:Ms(x,E,E,E,[""],S,0,a,S)}}u=c=g=0,y=m=1,p=x="",d=o;break;case 58:d=1+St(x),g=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Gy()==125)continue}switch(x+=Uo(f),f*y){case 38:m=c>0?1:(x+="\f",-1);break;case 44:a[u++]=(St(x)-1)*m,m=1;break;case 64:Ct()===45&&(x+=Fs(Ge())),h=Ct(),c=d=St(p=x+=Jy(Ds())),f++;break;case 45:v===45&&St(x)==2&&(y=0)}}return s}function tf(e,t,n,r,i,s,o,a,l,u,c){for(var d=i-1,h=i===0?s:[""],g=hc(h),v=0,y=0,k=0;v<r;++v)for(var m=0,f=Ri(e,d+1,d=My(y=o[v])),p=e;m<g;++m)(p=m0(y>0?h[m]+" "+f:U(f,/&\f/g,h[m])))&&(l[k++]=p);return Ho(e,t,n,i===0?dc:a,l,u,c)}function Xy(e,t,n){return Ho(e,t,n,h0,Uo(Wy()),Ri(e,2,-2),0)}function nf(e,t,n,r){return Ho(e,t,n,fc,Ri(e,0,r),Ri(e,r+1,-1),r)}function pr(e,t){for(var n="",r=hc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Zy(e,t,n,r){switch(e.type){case Fy:if(e.children.length)break;case Dy:case fc:return e.return=e.return||e.value;case h0:return"";case p0:return e.return=e.value+"{"+pr(e.children,r)+"}";case dc:e.value=e.props.join(",")}return St(n=pr(e.children,r))?e.return=e.value+"{"+n+"}":""}function ev(e){var t=hc(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function tv(e){return function(t){t.root||(t=t.return)&&e(t)}}var nv=function(t,n,r){for(var i=0,s=0;i=s,s=Ct(),i===38&&s===12&&(n[r]=1),!Ii(s);)Ge();return Hi(t,Fe)},rv=function(t,n){var r=-1,i=44;do switch(Ii(i)){case 0:i===38&&Ct()===12&&(n[r]=1),t[r]+=nv(Fe-1,n,r);break;case 2:t[r]+=Fs(i);break;case 4:if(i===44){t[++r]=Ct()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Uo(i)}while(i=Ge());return t},iv=function(t,n){return v0(rv(y0(t),n))},rf=new WeakMap,sv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!rf.get(r))&&!i){rf.set(t,!0);for(var s=[],o=iv(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},ov=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function w0(e,t){switch(By(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+yo+e+$e+e+e;case 6828:case 4268:return M+e+$e+e+e;case 6165:return M+e+$e+"flex-"+e+e;case 5187:return M+e+U(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+$e+"flex-$1$2")+e;case 5443:return M+e+$e+"flex-item-"+U(e,/flex-|-self/,"")+e;case 4675:return M+e+$e+"flex-line-pack"+U(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+$e+U(e,"shrink","negative")+e;case 5292:return M+e+$e+U(e,"basis","preferred-size")+e;case 6060:return M+"box-"+U(e,"-grow","")+M+e+$e+U(e,"grow","positive")+e;case 4554:return M+U(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+$e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(St(e)-1-t>6)switch(_e(e,t+1)){case 109:if(_e(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+yo+(_e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~nu(e,"stretch")?w0(U(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(_e(e,t+1)!==115)break;case 6444:switch(_e(e,St(e)-3-(~nu(e,"!important")&&10))){case 107:return U(e,":",":"+M)+e;case 101:return U(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(_e(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+$e+"$2box$3")+e}break;case 5936:switch(_e(e,t+11)){case 114:return M+e+$e+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+$e+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+$e+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+$e+e+e}return e}var av=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case fc:t.return=w0(t.value,t.length);break;case p0:return pr([Gr(t,{value:U(t.value,"@","@"+M)})],i);case dc:if(t.length)return Vy(t.props,function(s){switch(Hy(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return pr([Gr(t,{props:[U(s,/:(read-\w+)/,":"+yo+"$1")]})],i);case"::placeholder":return pr([Gr(t,{props:[U(s,/:(plac\w+)/,":"+M+"input-$1")]}),Gr(t,{props:[U(s,/:(plac\w+)/,":"+yo+"$1")]}),Gr(t,{props:[U(s,/:(plac\w+)/,$e+"input-$1")]})],i)}return""})}},lv=[av],uv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var k=y.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||lv,s={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var k=y.getAttribute("data-emotion").split(" "),m=1;m<k.length;m++)s[k[m]]=!0;a.push(y)});var l,u=[sv,ov];{var c,d=[Zy,tv(function(y){c.insert(y)})],h=ev(u.concat(i,d)),g=function(k){return pr(qy(k),h)};l=function(k,m,f,p){c=f,g(k?k+"{"+m.styles+"}":m.styles),p&&(v.inserted[m.name]=!0)}}var v={key:n,sheet:new zy({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},_0={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,pc=ye?Symbol.for("react.element"):60103,mc=ye?Symbol.for("react.portal"):60106,Vo=ye?Symbol.for("react.fragment"):60107,Wo=ye?Symbol.for("react.strict_mode"):60108,Go=ye?Symbol.for("react.profiler"):60114,Ko=ye?Symbol.for("react.provider"):60109,Yo=ye?Symbol.for("react.context"):60110,gc=ye?Symbol.for("react.async_mode"):60111,Qo=ye?Symbol.for("react.concurrent_mode"):60111,Jo=ye?Symbol.for("react.forward_ref"):60112,qo=ye?Symbol.for("react.suspense"):60113,cv=ye?Symbol.for("react.suspense_list"):60120,Xo=ye?Symbol.for("react.memo"):60115,Zo=ye?Symbol.for("react.lazy"):60116,dv=ye?Symbol.for("react.block"):60121,fv=ye?Symbol.for("react.fundamental"):60117,hv=ye?Symbol.for("react.responder"):60118,pv=ye?Symbol.for("react.scope"):60119;function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pc:switch(e=e.type,e){case gc:case Qo:case Vo:case Go:case Wo:case qo:return e;default:switch(e=e&&e.$$typeof,e){case Yo:case Jo:case Zo:case Xo:case Ko:return e;default:return t}}case mc:return t}}}function S0(e){return Je(e)===Qo}W.AsyncMode=gc;W.ConcurrentMode=Qo;W.ContextConsumer=Yo;W.ContextProvider=Ko;W.Element=pc;W.ForwardRef=Jo;W.Fragment=Vo;W.Lazy=Zo;W.Memo=Xo;W.Portal=mc;W.Profiler=Go;W.StrictMode=Wo;W.Suspense=qo;W.isAsyncMode=function(e){return S0(e)||Je(e)===gc};W.isConcurrentMode=S0;W.isContextConsumer=function(e){return Je(e)===Yo};W.isContextProvider=function(e){return Je(e)===Ko};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pc};W.isForwardRef=function(e){return Je(e)===Jo};W.isFragment=function(e){return Je(e)===Vo};W.isLazy=function(e){return Je(e)===Zo};W.isMemo=function(e){return Je(e)===Xo};W.isPortal=function(e){return Je(e)===mc};W.isProfiler=function(e){return Je(e)===Go};W.isStrictMode=function(e){return Je(e)===Wo};W.isSuspense=function(e){return Je(e)===qo};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Vo||e===Qo||e===Go||e===Wo||e===qo||e===cv||typeof e=="object"&&e!==null&&(e.$$typeof===Zo||e.$$typeof===Xo||e.$$typeof===Ko||e.$$typeof===Yo||e.$$typeof===Jo||e.$$typeof===fv||e.$$typeof===hv||e.$$typeof===pv||e.$$typeof===dv)};W.typeOf=Je;_0.exports=W;var mv=_0.exports,x0=mv,gv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},k0={};k0[x0.ForwardRef]=gv;k0[x0.Memo]=yv;var vv=!0;function E0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var yc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||vv===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},$0=function(t,n,r){yc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function wv(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var _v=/[A-Z]|^ms/g,Sv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,C0=function(t){return t.charCodeAt(1)===45},sf=function(t){return t!=null&&typeof t!="boolean"},Wa=P1(function(e){return C0(e)?e:e.replace(_v,"-$&").toLowerCase()}),of=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Sv,function(r,i,s){return xt={name:i,styles:s,next:xt},i})}return qp[t]!==1&&!C0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ai(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return xt={name:n.name,styles:n.styles,next:xt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)xt={name:r.name,styles:r.styles,next:xt},r=r.next;var i=n.styles+";";return i}return xv(e,t,n)}case"function":{if(e!==void 0){var s=xt,o=n(e);return xt=s,Ai(e,t,o)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function xv(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ai(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=s+"{"+t[o]+"}":sf(o)&&(r+=Wa(s)+":"+of(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var a=0;a<o.length;a++)sf(o[a])&&(r+=Wa(s)+":"+of(s,o[a])+";");else{var l=Ai(e,t,o);switch(s){case"animation":case"animationName":{r+=Wa(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var af=/label:\s*([^\s;\n{]+)\s*(;|$)/g,xt,vc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";xt=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,s+=Ai(r,n,o)):s+=o[0];for(var a=1;a<t.length;a++)s+=Ai(r,n,t[a]),i&&(s+=o[a]);af.lastIndex=0;for(var l="",u;(u=af.exec(s))!==null;)l+="-"+u[1];var c=wv(s)+l;return{name:c,styles:s,next:xt}},kv=function(t){return t()},Ev=Nc.useInsertionEffect?Nc.useInsertionEffect:!1,b0=Ev||kv,wc={}.hasOwnProperty,P0=C.createContext(typeof HTMLElement<"u"?uv({key:"css"}):null);P0.Provider;var j0=function(t){return C.forwardRef(function(n,r){var i=C.useContext(P0);return t(n,i,r)})},T0=C.createContext({}),iu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",$v=function(t,n){var r={};for(var i in n)wc.call(n,i)&&(r[i]=n[i]);return r[iu]=t,r},Cv=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return yc(n,r,i),b0(function(){return $0(n,r,i)}),null},bv=j0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[iu],s=[r],o="";typeof e.className=="string"?o=E0(t.registered,s,e.className):e.className!=null&&(o=e.className+" ");var a=vc(s,void 0,C.useContext(T0));o+=t.key+"-"+a.name;var l={};for(var u in e)wc.call(e,u)&&u!=="css"&&u!==iu&&(l[u]=e[u]);return l.ref=n,l.className=o,C.createElement(C.Fragment,null,C.createElement(Cv,{cache:t,serialized:a,isStringTag:typeof i=="string"}),C.createElement(i,l))}),Pv=bv,jv=_.Fragment;function fe(e,t,n){return wc.call(t,"css")?_.jsx(Pv,$v(e,t),n):_.jsx(e,t,n)}function O0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return vc(t)}var b=function(){var t=O0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Tv=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var s=t[r];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=e(s);else{o="";for(var a in s)s[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=s}o&&(i&&(i+=" "),i+=o)}}return i};function Ov(e,t,n){var r=[],i=E0(e,r,n);return r.length<2?n:i+t(r)}var Rv=function(t){var n=t.cache,r=t.serializedArr;return b0(function(){for(var i=0;i<r.length;i++)$0(n,r[i],!1)}),null},Ga=j0(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];var h=vc(c,t.registered);return r.push(h),yc(t,h,!1),t.key+"-"+h.name},s=function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];return Ov(t.registered,i,Tv(c))},o={css:i,cx:s,theme:C.useContext(T0)},a=e.children(o);return n=!0,C.createElement(C.Fragment,null,C.createElement(Rv,{cache:t,serializedArr:r}),a)}),Iv=Object.defineProperty,Av=(e,t,n)=>t in e?Iv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ms=(e,t,n)=>(Av(e,typeof t!="symbol"?t+"":t,n),n),su=new Map,gs=new WeakMap,lf=0,Lv=void 0;function Nv(e){return e?(gs.has(e)||(lf+=1,gs.set(e,lf.toString())),gs.get(e)):"0"}function zv(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Nv(e.root):e[t]}`).toString()}function Dv(e){let t=zv(e),n=su.get(t);if(!n){const r=new Map;let i;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const u=a.isIntersecting&&i.some(c=>a.intersectionRatio>=c);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=r.get(a.target))==null||l.forEach(c=>{c(u,a)})})},e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:r},su.set(t,n)}return n}function R0(e,t,n={},r=Lv){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:s,elements:o}=Dv(n);let a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(o.delete(e),s.unobserve(e)),o.size===0&&(s.disconnect(),su.delete(i))}}function Fv(e){return typeof e.children!="function"}var uf=class extends C.Component{constructor(e){super(e),ms(this,"node",null),ms(this,"_unobserveCb",null),ms(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ms(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Fv(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:s}=this.props;this._unobserveCb=R0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:v}=this.state;return e({inView:g,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:s,onChange:o,skip:a,trackVisibility:l,delay:u,initialInView:c,fallbackInView:d,...h}=this.props;return C.createElement(t||"div",{ref:this.handleNode,...h},e)}};function I0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:u}={}){var c;const[d,h]=C.useState(null),g=C.useRef(),[v,y]=C.useState({inView:!!a,entry:void 0});g.current=u,C.useEffect(()=>{if(o||!d)return;let p;return p=R0(d,(w,S)=>{y({inView:w,entry:S}),g.current&&g.current(w,S),S.isIntersecting&&s&&p&&(p(),p=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,d,i,r,s,o,n,l,t]);const k=(c=v.entry)==null?void 0:c.target,m=C.useRef();!d&&k&&!s&&!o&&m.current!==k&&(m.current=k,y({inView:!!a,entry:void 0}));const f=[h,v.inView,v.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var A0={exports:{}},G={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=Symbol.for("react.element"),Sc=Symbol.for("react.portal"),ea=Symbol.for("react.fragment"),ta=Symbol.for("react.strict_mode"),na=Symbol.for("react.profiler"),ra=Symbol.for("react.provider"),ia=Symbol.for("react.context"),Mv=Symbol.for("react.server_context"),sa=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),aa=Symbol.for("react.suspense_list"),la=Symbol.for("react.memo"),ua=Symbol.for("react.lazy"),Uv=Symbol.for("react.offscreen"),L0;L0=Symbol.for("react.module.reference");function at(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _c:switch(e=e.type,e){case ea:case na:case ta:case oa:case aa:return e;default:switch(e=e&&e.$$typeof,e){case Mv:case ia:case sa:case ua:case la:case ra:return e;default:return t}}case Sc:return t}}}G.ContextConsumer=ia;G.ContextProvider=ra;G.Element=_c;G.ForwardRef=sa;G.Fragment=ea;G.Lazy=ua;G.Memo=la;G.Portal=Sc;G.Profiler=na;G.StrictMode=ta;G.Suspense=oa;G.SuspenseList=aa;G.isAsyncMode=function(){return!1};G.isConcurrentMode=function(){return!1};G.isContextConsumer=function(e){return at(e)===ia};G.isContextProvider=function(e){return at(e)===ra};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_c};G.isForwardRef=function(e){return at(e)===sa};G.isFragment=function(e){return at(e)===ea};G.isLazy=function(e){return at(e)===ua};G.isMemo=function(e){return at(e)===la};G.isPortal=function(e){return at(e)===Sc};G.isProfiler=function(e){return at(e)===na};G.isStrictMode=function(e){return at(e)===ta};G.isSuspense=function(e){return at(e)===oa};G.isSuspenseList=function(e){return at(e)===aa};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ea||e===na||e===ta||e===oa||e===aa||e===Uv||typeof e=="object"&&e!==null&&(e.$$typeof===ua||e.$$typeof===la||e.$$typeof===ra||e.$$typeof===ia||e.$$typeof===sa||e.$$typeof===L0||e.getModuleId!==void 0)};G.typeOf=at;A0.exports=G;var Bv=A0.exports;b`
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
`;b`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;b`
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
`;b`
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
`;b`
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
`;b`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;const Hv=b`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Vv=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wv=b`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gv=b`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Kv=b`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xc=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yv=b`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qv=b`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Jv=b`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qv=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xv=b`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zv=b`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ew=b`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function tw({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=xc,iterationCount:i=1}){return O0`
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
  `}function nw(e){return e==null}function rw(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function N0(e,t){return n=>n?e():t()}function Li(e){return N0(e,()=>null)}function ou(e){return Li(()=>({opacity:0}))(e)}const z0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:s=0,keyframes:o=xc,triggerOnce:a=!1,className:l,style:u,childClassName:c,childStyle:d,children:h,onVisibilityChange:g}=e,v=C.useMemo(()=>tw({keyframes:o,duration:i}),[i,o]);return nw(h)?null:rw(h)?fe(sw,{...e,animationStyles:v,children:String(h)}):Bv.isFragment(h)?fe(D0,{...e,animationStyles:v}):fe(jv,{children:C.Children.map(h,(y,k)=>{if(!C.isValidElement(y))return null;const m=r+(t?k*i*n:0);switch(y.type){case"ol":case"ul":return fe(Ga,{children:({cx:f})=>fe(y.type,{...y.props,className:f(l,y.props.className),style:Object.assign({},u,y.props.style),children:fe(z0,{...e,children:y.props.children})})});case"li":return fe(uf,{threshold:s,triggerOnce:a,onChange:g,children:({inView:f,ref:p})=>fe(Ga,{children:({cx:w})=>fe(y.type,{...y.props,ref:p,className:w(c,y.props.className),css:Li(()=>v)(f),style:Object.assign({},d,y.props.style,ou(!f),{animationDelay:m+"ms"})})})});default:return fe(uf,{threshold:s,triggerOnce:a,onChange:g,children:({inView:f,ref:p})=>fe("div",{ref:p,className:l,css:Li(()=>v)(f),style:Object.assign({},u,ou(!f),{animationDelay:m+"ms"}),children:fe(Ga,{children:({cx:w})=>fe(y.type,{...y.props,className:w(c,y.props.className),style:Object.assign({},d,y.props.style)})})})})}})})},iw={display:"inline-block",whiteSpace:"pre"},sw=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,className:l,style:u,children:c,onVisibilityChange:d}=e,{ref:h,inView:g}=I0({triggerOnce:a,threshold:o,onChange:d});return N0(()=>fe("div",{ref:h,className:l,style:Object.assign({},u,iw),children:c.split("").map((v,y)=>fe("span",{css:Li(()=>t)(g),style:{animationDelay:i+y*s*r+"ms"},children:v},y))}),()=>fe(D0,{...e,children:c}))(n)},D0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:s,children:o,onVisibilityChange:a}=e,{ref:l,inView:u}=I0({triggerOnce:r,threshold:n,onChange:a});return fe("div",{ref:l,className:i,css:Li(()=>t)(u),style:Object.assign({},s,ou(!u)),children:o})};b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;b`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;b`
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
`;const ow=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,aw=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,lw=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,uw=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,cw=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,dw=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,fw=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,hw=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,pw=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,mw=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,gw=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,yw=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,vw=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function ww(e,t,n){switch(n){case"bottom-left":return t?aw:Vv;case"bottom-right":return t?lw:Wv;case"down":return e?t?cw:Kv:t?uw:Gv;case"left":return e?t?fw:Yv:t?dw:xc;case"right":return e?t?pw:Jv:t?hw:Qv;case"top-left":return t?mw:qv;case"top-right":return t?gw:Xv;case"up":return e?t?vw:ew:t?yw:Zv;default:return t?ow:Hv}}const ca=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,s=C.useMemo(()=>ww(t,r,n),[t,n,r]);return fe(z0,{keyframes:s,...i})};b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;b`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;b`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
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
`;b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;b`
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
`;const _w=I.h1`
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
    animation: ${e=>e.$animate?Sw(e.$text):"none"}
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
`,Sw=e=>{var t="";const n=100/(e.length+(e.length%2===0?1:.5));for(let r=0;r<=e.length;r++)r%6<=2?t+=`
      ${(n*r).toFixed(2)}% {content: '${e.substring(0,r)}_${r<e.length?" ".repeat(e.length-r):""}'}`:t+=`
      ${(n*r).toFixed(2)}% {content: '${e.substring(0,r)+" ".repeat(e.length-r+1)}'}`;return t+=`
  100% {content: '${e+" "}'}`,Oy`${t}`},kc=({text:e,className:t=""})=>{const n=C.useRef(),r=xw(n,"-100px"),[i,s]=C.useState(!1);return C.useEffect(()=>{r&&s(!0)},[r]),_.jsx(_w,{className:t,$text:e,$animate:i,ref:n,"aria-label":e})};function xw(e,t="0px"){const[n,r]=C.useState(!1);return C.useEffect(()=>{const i=e.current,s=new IntersectionObserver(([o])=>{r(o.isIntersecting)},{rootMargin:t});return i&&s.observe(i),()=>{s.unobserve(i)}},[]),n}const F0=I.h2`
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
`,Vi=I.a`
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
`,Us=I.p`
  align-self: center;
  font-family: ${e=>e.theme.bodyFont};
  justify-self: flex-start;
  margin: 0;
`;I(kc)`
  align-self: center;
  font-family: ${e=>e.theme.titleFont};
  margin: 1rem;
`;I.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;I.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 90%;
`;const Wi=I.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  margin: -1rem 0;
  padding: 0;
`;I.div`
  ${e=>e.theme.defaultProps}

  border-bottom: 0.1rem solid ${e=>e.theme.accent2};
  margin: 1rem 0;
  width: 20%;
`;const Wt=I.p`
  ${e=>e.theme.defaultProps}
  cursor: default;
  font-family: ${e=>e.theme.bodyFont};
  color: ${e=>e.theme.text2};
  margin: 0;
  margin-top: 0.5rem;
`;I.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;const kw=I.div`
  align-items: flex-start;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,ys=I(Vi)`
  align-self: unset;
  justify-content: center;
  margin: 1rem 2rem 0 0;
  width: fit-content;
`,M0=I.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: fit-content;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: self-start;
  }
`;I(kc)`
  align-self: center;
  font-family: ${e=>e.theme.titleFont};
  margin: 1rem;
  margin-bottom: 0rem;
`;const cf=I.div`
  margin: 1rem 0 0;
`,Ka=I.p`
  ${e=>e.theme.defaultProps}
  cursor: default;
  font-family: ${e=>e.theme.titleFont};
  font-size: 1.25rem;
  color: ${e=>e.theme.accent};
  margin: 0;
`,ve=I.textarea`
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
`,Ew="modulepreload",$w=function(e){return"/"+e},df={},Gi=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=$w(o),o in df)return;df[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Ew,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Cw=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Gi(()=>Promise.resolve().then(()=>Ki),void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)};class Ec extends Error{constructor(t,n="FunctionsError",r){super(t),this.name=n,this.context=r}}class bw extends Ec{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class Pw extends Ec{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class jw extends Ec{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var Tw=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};class Ow{constructor(t,{headers:n={},customFetch:r}={}){this.url=t,this.headers=n,this.fetch=Cw(r)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,n={}){var r;return Tw(this,void 0,void 0,function*(){try{const{headers:i,method:s,body:o}=n;let a={},l;o&&(i&&!Object.prototype.hasOwnProperty.call(i,"Content-Type")||!i)&&(typeof Blob<"u"&&o instanceof Blob||o instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",l=o):typeof o=="string"?(a["Content-Type"]="text/plain",l=o):typeof FormData<"u"&&o instanceof FormData?l=o:(a["Content-Type"]="application/json",l=JSON.stringify(o)));const u=yield this.fetch(`${this.url}/${t}`,{method:s||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),i),body:l}).catch(g=>{throw new bw(g)}),c=u.headers.get("x-relay-error");if(c&&c==="true")throw new Pw(u);if(!u.ok)throw new jw(u);let d=((r=u.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),h;return d==="application/json"?h=yield u.json():d==="application/octet-stream"?h=yield u.blob():d==="multipart/form-data"?h=yield u.formData():h=yield u.text(),{data:h,error:null}}catch(i){return{data:null,error:i}}})}}var Rw=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},jr=Rw();const Iw=jr.fetch,$c=jr.fetch.bind(jr),U0=jr.Headers,Aw=jr.Request,Lw=jr.Response,Ki=Object.freeze(Object.defineProperty({__proto__:null,Headers:U0,Request:Aw,Response:Lw,default:$c,fetch:Iw},Symbol.toStringTag,{value:"Module"}));class Nw{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=$c:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}then(t,n){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const r=this.fetch;let i=r(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async s=>{var o,a,l;let u=null,c=null,d=null,h=s.status,g=s.statusText;if(s.ok){if(this.method!=="HEAD"){const m=await s.text();m===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?c=m:c=JSON.parse(m))}const y=(o=this.headers.Prefer)===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),k=(a=s.headers.get("content-range"))===null||a===void 0?void 0:a.split("/");y&&k&&k.length>1&&(d=parseInt(k[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(c)&&(c.length>1?(u={code:"PGRST116",details:`Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},c=null,d=null,h=406,g="Not Acceptable"):c.length===1?c=c[0]:c=null)}else{const y=await s.text();try{u=JSON.parse(y),Array.isArray(u)&&s.status===404&&(c=[],u=null,h=200,g="OK")}catch{s.status===404&&y===""?(h=204,g="No Content"):u={message:y}}if(u&&this.isMaybeSingle&&(!((l=u==null?void 0:u.details)===null||l===void 0)&&l.includes("0 rows"))&&(u=null,h=200,g="OK"),u&&this.shouldThrowOnError)throw u}return{error:u,data:c,count:d,status:h,statusText:g}});return this.shouldThrowOnError||(i=i.catch(s=>{var o,a,l;return{error:{message:`${(o=s==null?void 0:s.name)!==null&&o!==void 0?o:"FetchError"}: ${s==null?void 0:s.message}`,details:`${(a=s==null?void 0:s.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=s==null?void 0:s.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),i.then(t,n)}}class zw extends Nw{select(t){let n=!1;const r=(t??"*").split("").map(i=>/\s/.test(i)&&!n?"":(i==='"'&&(n=!n),i)).join("");return this.url.searchParams.set("select",r),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:n=!0,nullsFirst:r,foreignTable:i,referencedTable:s=i}={}){const o=s?`${s}.order`:"order",a=this.url.searchParams.get(o);return this.url.searchParams.set(o,`${a?`${a},`:""}${t}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:n,referencedTable:r=n}={}){const i=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(i,`${t}`),this}range(t,n,{foreignTable:r,referencedTable:i=r}={}){const s=typeof i>"u"?"offset":`${i}.offset`,o=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(s,`${t}`),this.url.searchParams.set(o,`${n-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:n=!1,settings:r=!1,buffers:i=!1,wal:s=!1,format:o="text"}={}){var a;const l=[t?"analyze":null,n?"verbose":null,r?"settings":null,i?"buffers":null,s?"wal":null].filter(Boolean).join("|"),u=(a=this.headers.Accept)!==null&&a!==void 0?a:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${o}; for="${u}"; options=${l};`,o==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}class Yn extends zw{eq(t,n){return this.url.searchParams.append(t,`eq.${n}`),this}neq(t,n){return this.url.searchParams.append(t,`neq.${n}`),this}gt(t,n){return this.url.searchParams.append(t,`gt.${n}`),this}gte(t,n){return this.url.searchParams.append(t,`gte.${n}`),this}lt(t,n){return this.url.searchParams.append(t,`lt.${n}`),this}lte(t,n){return this.url.searchParams.append(t,`lte.${n}`),this}like(t,n){return this.url.searchParams.append(t,`like.${n}`),this}likeAllOf(t,n){return this.url.searchParams.append(t,`like(all).{${n.join(",")}}`),this}likeAnyOf(t,n){return this.url.searchParams.append(t,`like(any).{${n.join(",")}}`),this}ilike(t,n){return this.url.searchParams.append(t,`ilike.${n}`),this}ilikeAllOf(t,n){return this.url.searchParams.append(t,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(t,n){return this.url.searchParams.append(t,`ilike(any).{${n.join(",")}}`),this}is(t,n){return this.url.searchParams.append(t,`is.${n}`),this}in(t,n){const r=n.map(i=>typeof i=="string"&&new RegExp("[,()]").test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`in.(${r})`),this}contains(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cs.{${n.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(n)}`),this}containedBy(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cd.{${n.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(n)}`),this}rangeGt(t,n){return this.url.searchParams.append(t,`sr.${n}`),this}rangeGte(t,n){return this.url.searchParams.append(t,`nxl.${n}`),this}rangeLt(t,n){return this.url.searchParams.append(t,`sl.${n}`),this}rangeLte(t,n){return this.url.searchParams.append(t,`nxr.${n}`),this}rangeAdjacent(t,n){return this.url.searchParams.append(t,`adj.${n}`),this}overlaps(t,n){return typeof n=="string"?this.url.searchParams.append(t,`ov.${n}`):this.url.searchParams.append(t,`ov.{${n.join(",")}}`),this}textSearch(t,n,{config:r,type:i}={}){let s="";i==="plain"?s="pl":i==="phrase"?s="ph":i==="websearch"&&(s="w");const o=r===void 0?"":`(${r})`;return this.url.searchParams.append(t,`${s}fts${o}.${n}`),this}match(t){return Object.entries(t).forEach(([n,r])=>{this.url.searchParams.append(n,`eq.${r}`)}),this}not(t,n,r){return this.url.searchParams.append(t,`not.${n}.${r}`),this}or(t,{foreignTable:n,referencedTable:r=n}={}){const i=r?`${r}.or`:"or";return this.url.searchParams.append(i,`(${t})`),this}filter(t,n,r){return this.url.searchParams.append(t,`${n}.${r}`),this}}class Dw{constructor(t,{headers:n={},schema:r,fetch:i}){this.url=t,this.headers=n,this.schema=r,this.fetch=i}select(t,{head:n=!1,count:r}={}){const i=n?"HEAD":"GET";let s=!1;const o=(t??"*").split("").map(a=>/\s/.test(a)&&!s?"":(a==='"'&&(s=!s),a)).join("");return this.url.searchParams.set("select",o),r&&(this.headers.Prefer=`count=${r}`),new Yn({method:i,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:n,defaultToNull:r=!0}={}){const i="POST",s=[];if(this.headers.Prefer&&s.push(this.headers.Prefer),n&&s.push(`count=${n}`),r||s.push("missing=default"),this.headers.Prefer=s.join(","),Array.isArray(t)){const o=t.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(o.length>0){const a=[...new Set(o)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new Yn({method:i,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:n,ignoreDuplicates:r=!1,count:i,defaultToNull:s=!0}={}){const o="POST",a=[`resolution=${r?"ignore":"merge"}-duplicates`];if(n!==void 0&&this.url.searchParams.set("on_conflict",n),this.headers.Prefer&&a.push(this.headers.Prefer),i&&a.push(`count=${i}`),s||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const l=t.reduce((u,c)=>u.concat(Object.keys(c)),[]);if(l.length>0){const u=[...new Set(l)].map(c=>`"${c}"`);this.url.searchParams.set("columns",u.join(","))}}return new Yn({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:n}={}){const r="PATCH",i=[];return this.headers.Prefer&&i.push(this.headers.Prefer),n&&i.push(`count=${n}`),this.headers.Prefer=i.join(","),new Yn({method:r,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const n="DELETE",r=[];return t&&r.push(`count=${t}`),this.headers.Prefer&&r.unshift(this.headers.Prefer),this.headers.Prefer=r.join(","),new Yn({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}const Fw="1.9.0",Mw={"X-Client-Info":`postgrest-js/${Fw}`};class Cc{constructor(t,{headers:n={},schema:r,fetch:i}={}){this.url=t,this.headers=Object.assign(Object.assign({},Mw),n),this.schemaName=r,this.fetch=i}from(t){const n=new URL(`${this.url}/${t}`);return new Dw(n,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new Cc(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,n={},{head:r=!1,count:i}={}){let s;const o=new URL(`${this.url}/rpc/${t}`);let a;r?(s="HEAD",Object.entries(n).forEach(([u,c])=>{o.searchParams.append(u,`${c}`)})):(s="POST",a=n);const l=Object.assign({},this.headers);return i&&(l.Prefer=`count=${i}`),new Yn({method:s,url:o,headers:l,schema:this.schemaName,body:a,fetch:this.fetch,allowEmpty:!1})}}var Ya,ff;function Uw(){if(ff)return Ya;ff=1;var e=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return Ya=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return e()}try{return __global__||e()}finally{delete Object.prototype.__global__}}(),Ya}const Bw="websocket",Hw="Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",Vw=["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],Ww="Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",Gw=["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],Kw="1.0.34",Yw={type:"git",url:"https://github.com/theturtle32/WebSocket-Node.git"},Qw="https://github.com/theturtle32/WebSocket-Node",Jw={node:">=4.0.0"},qw={bufferutil:"^4.0.1",debug:"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2",yaeti:"^0.0.6"},Xw={"buffer-equal":"^1.0.0",gulp:"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1",jshint:"^2.0.0",tape:"^4.9.1"},Zw={verbose:!1},e_={test:"tape test/unit/*.js",gulp:"gulp"},t_="index",n_={lib:"./lib"},r_="lib/browser.js",i_="Apache-2.0",s_={name:Bw,description:Hw,keywords:Vw,author:Ww,contributors:Gw,version:Kw,repository:Yw,homepage:Qw,engines:Jw,dependencies:qw,devDependencies:Xw,config:Zw,scripts:e_,main:t_,directories:n_,browser:r_,license:i_};var o_=s_.version,En;if(typeof globalThis=="object")En=globalThis;else try{En=Uw()}catch{}finally{if(!En&&typeof window<"u"&&(En=window),!En)throw new Error("Could not determine global this")}var Ni=En.WebSocket||En.MozWebSocket,a_=o_;function B0(e,t){var n;return t?n=new Ni(e,t):n=new Ni(e),n}Ni&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(e){Object.defineProperty(B0,e,{get:function(){return Ni[e]}})});var l_={w3cwebsocket:Ni?B0:null,version:a_};const u_="2.8.4",c_={"X-Client-Info":`realtime-js/${u_}`},d_="1.0.0",H0=1e4,f_=1e3;var di;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(di||(di={}));var Ue;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(Ue||(Ue={}));var dt;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(dt||(dt={}));var au;(function(e){e.websocket="websocket"})(au||(au={}));var $n;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})($n||($n={}));class V0{constructor(t,n){this.callback=t,this.timerCalc=n,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=n}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}class h_{constructor(){this.HEADER_LENGTH=1}decode(t,n){return t.constructor===ArrayBuffer?n(this._binaryDecode(t)):n(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const n=new DataView(t),r=new TextDecoder;return this._decodeBroadcast(t,n,r)}_decodeBroadcast(t,n,r){const i=n.getUint8(1),s=n.getUint8(2);let o=this.HEADER_LENGTH+2;const a=r.decode(t.slice(o,o+i));o=o+i;const l=r.decode(t.slice(o,o+s));o=o+s;const u=JSON.parse(r.decode(t.slice(o,t.byteLength)));return{ref:null,topic:a,event:l,payload:u}}}class Qa{constructor(t,n,r={},i=H0){this.channel=t,this.event=n,this.payload=r,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,n){var r;return this._hasReceived(t)&&n((r=this.receivedResp)===null||r===void 0?void 0:r.response),this.recHooks.push({status:t,callback:n}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=n=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=n,this._matchReceive(n)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,n){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:n})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:n}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(n))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var hf;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(hf||(hf={}));class fi{constructor(t,n){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const r=(n==null?void 0:n.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(r.state,{},i=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=fi.syncState(this.state,i,s,o),this.pendingDiffs.forEach(l=>{this.state=fi.syncDiff(this.state,l,s,o)}),this.pendingDiffs=[],a()}),this.channel._on(r.diff,{},i=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=fi.syncDiff(this.state,i,s,o),a())}),this.onJoin((i,s,o)=>{this.channel._trigger("presence",{event:"join",key:i,currentPresences:s,newPresences:o})}),this.onLeave((i,s,o)=>{this.channel._trigger("presence",{event:"leave",key:i,currentPresences:s,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,n,r,i){const s=this.cloneDeep(t),o=this.transformState(n),a={},l={};return this.map(s,(u,c)=>{o[u]||(l[u]=c)}),this.map(o,(u,c)=>{const d=s[u];if(d){const h=c.map(k=>k.presence_ref),g=d.map(k=>k.presence_ref),v=c.filter(k=>g.indexOf(k.presence_ref)<0),y=d.filter(k=>h.indexOf(k.presence_ref)<0);v.length>0&&(a[u]=v),y.length>0&&(l[u]=y)}else a[u]=c}),this.syncDiff(s,{joins:a,leaves:l},r,i)}static syncDiff(t,n,r,i){const{joins:s,leaves:o}={joins:this.transformState(n.joins),leaves:this.transformState(n.leaves)};return r||(r=()=>{}),i||(i=()=>{}),this.map(s,(a,l)=>{var u;const c=(u=t[a])!==null&&u!==void 0?u:[];if(t[a]=this.cloneDeep(l),c.length>0){const d=t[a].map(g=>g.presence_ref),h=c.filter(g=>d.indexOf(g.presence_ref)<0);t[a].unshift(...h)}r(a,c,l)}),this.map(o,(a,l)=>{let u=t[a];if(!u)return;const c=l.map(d=>d.presence_ref);u=u.filter(d=>c.indexOf(d.presence_ref)<0),t[a]=u,i(a,u,l),u.length===0&&delete t[a]}),t}static map(t,n){return Object.getOwnPropertyNames(t).map(r=>n(r,t[r]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((n,r)=>{const i=t[r];return"metas"in i?n[r]=i.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):n[r]=i,n},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Y;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(Y||(Y={}));const pf=(e,t,n={})=>{var r;const i=(r=n.skipTypes)!==null&&r!==void 0?r:[];return Object.keys(t).reduce((s,o)=>(s[o]=p_(o,e,t,i),s),{})},p_=(e,t,n,r)=>{const i=t.find(a=>a.name===e),s=i==null?void 0:i.type,o=n[e];return s&&!r.includes(s)?W0(s,o):lu(o)},W0=(e,t)=>{if(e.charAt(0)==="_"){const n=e.slice(1,e.length);return v_(t,n)}switch(e){case Y.bool:return m_(t);case Y.float4:case Y.float8:case Y.int2:case Y.int4:case Y.int8:case Y.numeric:case Y.oid:return g_(t);case Y.json:case Y.jsonb:return y_(t);case Y.timestamp:return w_(t);case Y.abstime:case Y.date:case Y.daterange:case Y.int4range:case Y.int8range:case Y.money:case Y.reltime:case Y.text:case Y.time:case Y.timestamptz:case Y.timetz:case Y.tsrange:case Y.tstzrange:return lu(t);default:return lu(t)}},lu=e=>e,m_=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},g_=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},y_=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},v_=(e,t)=>{if(typeof e!="string")return e;const n=e.length-1,r=e[n];if(e[0]==="{"&&r==="}"){let s;const o=e.slice(1,n);try{s=JSON.parse("["+o+"]")}catch{s=o?o.split(","):[]}return s.map(a=>W0(t,a))}return e},w_=e=>typeof e=="string"?e.replace(" ","T"):e;var mf;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(mf||(mf={}));var gf;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes"})(gf||(gf={}));var yf;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(yf||(yf={}));class bc{constructor(t,n={config:{}},r){this.topic=t,this.params=n,this.socket=r,this.bindings={},this.state=Ue.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},n.config),this.timeout=this.socket.timeout,this.joinPush=new Qa(this,dt.join,this.params,this.timeout),this.rejoinTimer=new V0(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Ue.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Ue.closed,this.socket._remove(this)}),this._onError(i=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,i),this.state=Ue.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Ue.errored,this.rejoinTimer.scheduleTimeout())}),this._on(dt.reply,{},(i,s)=>{this._trigger(this._replyEventName(s),i)}),this.presence=new fi(this),this.broadcastEndpointURL=this._broadcastEndpointURL()}subscribe(t,n=this.timeout){var r,i;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:s,presence:o}}=this.params;this._onError(u=>t&&t("CHANNEL_ERROR",u)),this._onClose(()=>t&&t("CLOSED"));const a={},l={broadcast:s,presence:o,postgres_changes:(i=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(u=>u.filter))!==null&&i!==void 0?i:[]};this.socket.accessToken&&(a.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:l},a)),this.joinedOnce=!0,this._rejoin(n),this.joinPush.receive("ok",({postgres_changes:u})=>{var c;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),u===void 0){t&&t("SUBSCRIBED");return}else{const d=this.bindings.postgres_changes,h=(c=d==null?void 0:d.length)!==null&&c!==void 0?c:0,g=[];for(let v=0;v<h;v++){const y=d[v],{filter:{event:k,schema:m,table:f,filter:p}}=y,w=u&&u[v];if(w&&w.event===k&&w.schema===m&&w.table===f&&w.filter===p)g.push(Object.assign(Object.assign({},y),{id:w.id}));else{this.unsubscribe(),t&&t("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=g,t&&t("SUBSCRIBED");return}}).receive("error",u=>{t&&t("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(u).join(", ")||"error")))}).receive("timeout",()=>{t&&t("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(t,n={}){return await this.send({type:"presence",event:"track",payload:t},n.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,n,r){return this._on(t,n,r)}async send(t,n={}){var r,i;if(!this._canPush()&&t.type==="broadcast"){const{event:s,payload:o}=t,a={method:"POST",headers:{apikey:(r=this.socket.accessToken)!==null&&r!==void 0?r:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:o}]})};try{return(await this._fetchWithTimeout(this.broadcastEndpointURL,a,(i=n.timeout)!==null&&i!==void 0?i:this.timeout)).ok?"ok":"error"}catch(l){return l.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var o,a,l;const u=this._push(t.type,t,n.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(a=(o=this.params)===null||o===void 0?void 0:o.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),u.receive("ok",()=>s("ok")),u.receive("timeout",()=>s("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=Ue.leaving;const n=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(dt.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(r=>{const i=new Qa(this,dt.leave,{},t);i.receive("ok",()=>{n(),r("ok")}).receive("timeout",()=>{n(),r("timed out")}).receive("error",()=>{r("error")}),i.send(),this._canPush()||i.trigger("ok",{})})}_broadcastEndpointURL(){let t=this.socket.endPoint;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")+"/api/broadcast"}async _fetchWithTimeout(t,n,r){const i=new AbortController,s=setTimeout(()=>i.abort(),r),o=await this.socket.fetch(t,Object.assign(Object.assign({},n),{signal:i.signal}));return clearTimeout(s),o}_push(t,n,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new Qa(this,t,n,r);return this._canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}_onMessage(t,n,r){return n}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,n,r){var i,s;const o=t.toLocaleLowerCase(),{close:a,error:l,leave:u,join:c}=dt;if(r&&[a,l,u,c].indexOf(o)>=0&&r!==this._joinRef())return;let h=this._onMessage(o,n,r);if(n&&!h)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(i=this.bindings.postgres_changes)===null||i===void 0||i.filter(g=>{var v,y,k;return((v=g.filter)===null||v===void 0?void 0:v.event)==="*"||((k=(y=g.filter)===null||y===void 0?void 0:y.event)===null||k===void 0?void 0:k.toLocaleLowerCase())===o}).map(g=>g.callback(h,r)):(s=this.bindings[o])===null||s===void 0||s.filter(g=>{var v,y,k,m,f,p;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in g){const w=g.id,S=(v=g.filter)===null||v===void 0?void 0:v.event;return w&&((y=n.ids)===null||y===void 0?void 0:y.includes(w))&&(S==="*"||(S==null?void 0:S.toLocaleLowerCase())===((k=n.data)===null||k===void 0?void 0:k.type.toLocaleLowerCase()))}else{const w=(f=(m=g==null?void 0:g.filter)===null||m===void 0?void 0:m.event)===null||f===void 0?void 0:f.toLocaleLowerCase();return w==="*"||w===((p=n==null?void 0:n.event)===null||p===void 0?void 0:p.toLocaleLowerCase())}else return g.type.toLocaleLowerCase()===o}).map(g=>{if(typeof h=="object"&&"ids"in h){const v=h.data,{schema:y,table:k,commit_timestamp:m,type:f,errors:p}=v;h=Object.assign(Object.assign({},{schema:y,table:k,commit_timestamp:m,eventType:f,new:{},old:{},errors:p}),this._getPayloadRecords(v))}g.callback(h,r)})}_isClosed(){return this.state===Ue.closed}_isJoined(){return this.state===Ue.joined}_isJoining(){return this.state===Ue.joining}_isLeaving(){return this.state===Ue.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,n,r){const i=t.toLocaleLowerCase(),s={type:i,filter:n,callback:r};return this.bindings[i]?this.bindings[i].push(s):this.bindings[i]=[s],this}_off(t,n){const r=t.toLocaleLowerCase();return this.bindings[r]=this.bindings[r].filter(i=>{var s;return!(((s=i.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===r&&bc.isEqual(i.filter,n))}),this}static isEqual(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const r in t)if(t[r]!==n[r])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(dt.close,{},t)}_onError(t){this._on(dt.error,{},n=>t(n))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Ue.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const n={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(n.new=pf(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(n.old=pf(t.columns,t.old_record)),n}}const __=()=>{};class S_{constructor(t,n){var r;this.accessToken=null,this.channels=[],this.endPoint="",this.headers=c_,this.params={},this.timeout=H0,this.transport=l_.w3cwebsocket,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=__,this.conn=null,this.sendBuffer=[],this.serializer=new h_,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=s=>{let o;return s?o=s:typeof fetch>"u"?o=(...a)=>Gi(()=>Promise.resolve().then(()=>Ki),void 0).then(({default:l})=>l(...a)):o=fetch,(...a)=>o(...a)},this.endPoint=`${t}/${au.websocket}`,n!=null&&n.params&&(this.params=n.params),n!=null&&n.headers&&(this.headers=Object.assign(Object.assign({},this.headers),n.headers)),n!=null&&n.timeout&&(this.timeout=n.timeout),n!=null&&n.logger&&(this.logger=n.logger),n!=null&&n.transport&&(this.transport=n.transport),n!=null&&n.heartbeatIntervalMs&&(this.heartbeatIntervalMs=n.heartbeatIntervalMs);const i=(r=n==null?void 0:n.params)===null||r===void 0?void 0:r.apikey;i&&(this.accessToken=i),this.reconnectAfterMs=n!=null&&n.reconnectAfterMs?n.reconnectAfterMs:s=>[1e3,2e3,5e3,1e4][s-1]||1e4,this.encode=n!=null&&n.encode?n.encode:(s,o)=>o(JSON.stringify(s)),this.decode=n!=null&&n.decode?n.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new V0(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(n==null?void 0:n.fetch)}connect(){this.conn||(this.conn=new this.transport(this._endPointURL(),[],null,this.headers),this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t)))}disconnect(t,n){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,n??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(t){const n=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),n}async removeAllChannels(){const t=await Promise.all(this.channels.map(n=>n.unsubscribe()));return this.disconnect(),t}log(t,n,r){this.logger(t,n,r)}connectionState(){switch(this.conn&&this.conn.readyState){case di.connecting:return $n.Connecting;case di.open:return $n.Open;case di.closing:return $n.Closing;default:return $n.Closed}}isConnected(){return this.connectionState()===$n.Open}channel(t,n={config:{}}){const r=new bc(`realtime:${t}`,n,this);return this.channels.push(r),r}push(t){const{topic:n,event:r,payload:i,ref:s}=t,o=()=>{this.encode(t,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${n} ${r} (${s})`,i),this.isConnected()?o():this.sendBuffer.push(o)}setAuth(t){this.accessToken=t,this.channels.forEach(n=>{t&&n.updateJoinPayload({access_token:t}),n.joinedOnce&&n._isJoined()&&n._push(dt.access_token,{access_token:t})})}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let n=this.channels.find(r=>r.topic===t&&(r._isJoined()||r._isJoining()));n&&(this.log("transport",`leaving duplicate topic "${t}"`),n.unsubscribe())}_remove(t){this.channels=this.channels.filter(n=>n._joinRef()!==t._joinRef())}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:d_}))}_onConnMessage(t){this.decode(t.data,n=>{let{topic:r,event:i,payload:s,ref:o}=n;(o&&o===this.pendingHeartbeatRef||i===(s==null?void 0:s.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${s.status||""} ${r} ${i} ${o&&"("+o+")"||""}`,s),this.channels.filter(a=>a._isMember(r)).forEach(a=>a._trigger(i,s,o)),this.stateChangeCallbacks.message.forEach(a=>a(n))})}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach(t=>t())}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(n=>n(t))}_onConnError(t){this.log("transport",t.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(n=>n(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger(dt.error))}_appendParams(t,n){if(Object.keys(n).length===0)return t;const r=t.match(/\?/)?"&":"?",i=new URLSearchParams(n);return`${t}${r}${i}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_sendHeartbeat(){var t;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(t=this.conn)===null||t===void 0||t.close(f_,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}}class Pc extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function Ce(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class x_ extends Pc{constructor(t,n){super(t),this.name="StorageApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class vf extends Pc{constructor(t,n){super(t),this.name="StorageUnknownError",this.originalError=n}}var k_=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const G0=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Gi(()=>Promise.resolve().then(()=>Ki),void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},E_=()=>k_(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Gi(()=>Promise.resolve().then(()=>Ki),void 0)).Response:Response});var Lr=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const Ja=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),$_=(e,t)=>Lr(void 0,void 0,void 0,function*(){const n=yield E_();e instanceof n?e.json().then(r=>{t(new x_(Ja(r),e.status||500))}).catch(r=>{t(new vf(Ja(r),r))}):t(new vf(Ja(e),e))}),C_=(e,t,n,r)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};function da(e,t,n,r,i,s){return Lr(this,void 0,void 0,function*(){return new Promise((o,a)=>{e(n,C_(t,r,i,s)).then(l=>{if(!l.ok)throw l;return r!=null&&r.noResolveJson?l:l.json()}).then(l=>o(l)).catch(l=>$_(l,a))})})}function uu(e,t,n,r){return Lr(this,void 0,void 0,function*(){return da(e,"GET",t,n,r)})}function Yt(e,t,n,r,i){return Lr(this,void 0,void 0,function*(){return da(e,"POST",t,r,i,n)})}function b_(e,t,n,r,i){return Lr(this,void 0,void 0,function*(){return da(e,"PUT",t,r,i,n)})}function K0(e,t,n,r,i){return Lr(this,void 0,void 0,function*(){return da(e,"DELETE",t,r,i,n)})}var Ze=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const P_={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},wf={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class j_{constructor(t,n={},r,i){this.url=t,this.headers=n,this.bucketId=r,this.fetch=G0(i)}uploadOrUpdate(t,n,r,i){return Ze(this,void 0,void 0,function*(){try{let s;const o=Object.assign(Object.assign({},wf),i),a=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(o.upsert)});typeof Blob<"u"&&r instanceof Blob?(s=new FormData,s.append("cacheControl",o.cacheControl),s.append("",r)):typeof FormData<"u"&&r instanceof FormData?(s=r,s.append("cacheControl",o.cacheControl)):(s=r,a["cache-control"]=`max-age=${o.cacheControl}`,a["content-type"]=o.contentType);const l=this._removeEmptyFolders(n),u=this._getFinalPath(l),c=yield this.fetch(`${this.url}/object/${u}`,Object.assign({method:t,body:s,headers:a},o!=null&&o.duplex?{duplex:o.duplex}:{}));return c.ok?{data:{path:l},error:null}:{data:null,error:yield c.json()}}catch(s){if(Ce(s))return{data:null,error:s};throw s}})}upload(t,n,r){return Ze(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,n,r)})}uploadToSignedUrl(t,n,r,i){return Ze(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(t),o=this._getFinalPath(s),a=new URL(this.url+`/object/upload/sign/${o}`);a.searchParams.set("token",n);try{let l;const u=Object.assign({upsert:wf.upsert},i),c=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.append("cacheControl",u.cacheControl)):(l=r,c["cache-control"]=`max-age=${u.cacheControl}`,c["content-type"]=u.contentType);const d=yield this.fetch(a.toString(),{method:"PUT",body:l,headers:c});return d.ok?{data:{path:s},error:null}:{data:null,error:yield d.json()}}catch(l){if(Ce(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t){return Ze(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const r=yield Yt(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:this.headers}),i=new URL(this.url+r.url),s=i.searchParams.get("token");if(!s)throw new Pc("No token returned by API");return{data:{signedUrl:i.toString(),path:t,token:s},error:null}}catch(n){if(Ce(n))return{data:null,error:n};throw n}})}update(t,n,r){return Ze(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,n,r)})}move(t,n){return Ze(this,void 0,void 0,function*(){try{return{data:yield Yt(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n},{headers:this.headers}),error:null}}catch(r){if(Ce(r))return{data:null,error:r};throw r}})}copy(t,n){return Ze(this,void 0,void 0,function*(){try{return{data:{path:(yield Yt(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n},{headers:this.headers})).Key},error:null}}catch(r){if(Ce(r))return{data:null,error:r};throw r}})}createSignedUrl(t,n,r){return Ze(this,void 0,void 0,function*(){try{let i=this._getFinalPath(t),s=yield Yt(this.fetch,`${this.url}/object/sign/${i}`,Object.assign({expiresIn:n},r!=null&&r.transform?{transform:r.transform}:{}),{headers:this.headers});const o=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${o}`)},{data:s,error:null}}catch(i){if(Ce(i))return{data:null,error:i};throw i}})}createSignedUrls(t,n,r){return Ze(this,void 0,void 0,function*(){try{const i=yield Yt(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:n,paths:t},{headers:this.headers}),s=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return{data:i.map(o=>Object.assign(Object.assign({},o),{signedUrl:o.signedURL?encodeURI(`${this.url}${o.signedURL}${s}`):null})),error:null}}catch(i){if(Ce(i))return{data:null,error:i};throw i}})}download(t,n){return Ze(this,void 0,void 0,function*(){const i=typeof(n==null?void 0:n.transform)<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString((n==null?void 0:n.transform)||{}),o=s?`?${s}`:"";try{const a=this._getFinalPath(t);return{data:yield(yield uu(this.fetch,`${this.url}/${i}/${a}${o}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(Ce(a))return{data:null,error:a};throw a}})}getPublicUrl(t,n){const r=this._getFinalPath(t),i=[],s=n!=null&&n.download?`download=${n.download===!0?"":n.download}`:"";s!==""&&i.push(s);const a=typeof(n==null?void 0:n.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((n==null?void 0:n.transform)||{});l!==""&&i.push(l);let u=i.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${r}${u}`)}}}remove(t){return Ze(this,void 0,void 0,function*(){try{return{data:yield K0(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(n){if(Ce(n))return{data:null,error:n};throw n}})}list(t,n,r){return Ze(this,void 0,void 0,function*(){try{const i=Object.assign(Object.assign(Object.assign({},P_),n),{prefix:t||""});return{data:yield Yt(this.fetch,`${this.url}/object/list/${this.bucketId}`,i,{headers:this.headers},r),error:null}}catch(i){if(Ce(i))return{data:null,error:i};throw i}})}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const n=[];return t.width&&n.push(`width=${t.width}`),t.height&&n.push(`height=${t.height}`),t.resize&&n.push(`resize=${t.resize}`),t.format&&n.push(`format=${t.format}`),t.quality&&n.push(`quality=${t.quality}`),n.join("&")}}const T_="2.5.4",O_={"X-Client-Info":`storage-js/${T_}`};var Vn=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};class R_{constructor(t,n={},r){this.url=t,this.headers=Object.assign(Object.assign({},O_),n),this.fetch=G0(r)}listBuckets(){return Vn(this,void 0,void 0,function*(){try{return{data:yield uu(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(Ce(t))return{data:null,error:t};throw t}})}getBucket(t){return Vn(this,void 0,void 0,function*(){try{return{data:yield uu(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(n){if(Ce(n))return{data:null,error:n};throw n}})}createBucket(t,n={public:!1}){return Vn(this,void 0,void 0,function*(){try{return{data:yield Yt(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(Ce(r))return{data:null,error:r};throw r}})}updateBucket(t,n){return Vn(this,void 0,void 0,function*(){try{return{data:yield b_(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(Ce(r))return{data:null,error:r};throw r}})}emptyBucket(t){return Vn(this,void 0,void 0,function*(){try{return{data:yield Yt(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(n){if(Ce(n))return{data:null,error:n};throw n}})}deleteBucket(t){return Vn(this,void 0,void 0,function*(){try{return{data:yield K0(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(n){if(Ce(n))return{data:null,error:n};throw n}})}}class I_ extends R_{constructor(t,n={},r){super(t,n,r)}from(t){return new j_(this.url,this.headers,t,this.fetch)}}const A_="2.38.5";let Zr="";typeof Deno<"u"?Zr="deno":typeof document<"u"?Zr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Zr="react-native":Zr="node";const L_={"X-Client-Info":`supabase-js-${Zr}/${A_}`};var N_=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const z_=e=>{let t;return e?t=e:typeof fetch>"u"?t=$c:t=fetch,(...n)=>t(...n)},D_=()=>typeof Headers>"u"?U0:Headers,F_=(e,t,n)=>{const r=z_(n),i=D_();return(s,o)=>N_(void 0,void 0,void 0,function*(){var a;const l=(a=yield t())!==null&&a!==void 0?a:e;let u=new i(o==null?void 0:o.headers);return u.has("apikey")||u.set("apikey",e),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),r(s,Object.assign(Object.assign({},o),{headers:u}))})};function M_(e){return e.replace(/\/$/,"")}function U_(e,t){const{db:n,auth:r,realtime:i,global:s}=e,{db:o,auth:a,realtime:l,global:u}=t;return{db:Object.assign(Object.assign({},o),n),auth:Object.assign(Object.assign({},a),r),realtime:Object.assign(Object.assign({},l),i),global:Object.assign(Object.assign({},u),s)}}function B_(e){return Math.round(Date.now()/1e3)+e}function H_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const Pt=()=>typeof document<"u",_n={tested:!1,writable:!1},hi=()=>{if(!Pt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(_n.tested)return _n.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),_n.tested=!0,_n.writable=!0}catch{_n.tested=!0,_n.writable=!1}return _n.writable};function qa(e){const t={},n=new URL(e);if(n.hash&&n.hash[0]==="#")try{new URLSearchParams(n.hash.substring(1)).forEach((i,s)=>{t[s]=i})}catch{}return n.searchParams.forEach((r,i)=>{t[i]=r}),t}const Y0=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Gi(()=>Promise.resolve().then(()=>Ki),void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},V_=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",Sn=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},vs=async(e,t)=>{const n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return n}},Xa=async(e,t)=>{await e.removeItem(t)};function W_(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let n="",r,i,s,o,a,l,u,c=0;for(e=e.replace("-","+").replace("_","/");c<e.length;)o=t.indexOf(e.charAt(c++)),a=t.indexOf(e.charAt(c++)),l=t.indexOf(e.charAt(c++)),u=t.indexOf(e.charAt(c++)),r=o<<2|a>>4,i=(a&15)<<4|l>>2,s=(l&3)<<6|u,n=n+String.fromCharCode(r),l!=64&&i!=0&&(n=n+String.fromCharCode(i)),u!=64&&s!=0&&(n=n+String.fromCharCode(s));return n}class fa{constructor(){this.promise=new fa.promiseConstructor((t,n)=>{this.resolve=t,this.reject=n})}}fa.promiseConstructor=Promise;function _f(e){const t=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,n=e.split(".");if(n.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!t.test(n[1]))throw new Error("JWT is not valid: payload is not in base64url format");const r=n[1];return JSON.parse(W_(r))}async function G_(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function K_(e,t){return new Promise((r,i)=>{(async()=>{for(let s=0;s<1/0;s++)try{const o=await e(s);if(!t(s,null,o)){r(o);return}}catch(o){if(!t(s,o)){i(o);return}}})()})}function Y_(e){return("0"+e.toString(16)).substr(-2)}function Wn(){const t=new Uint32Array(56);if(typeof crypto>"u"){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=n.length;let i="";for(let s=0;s<56;s++)i+=n.charAt(Math.floor(Math.random()*r));return i}return crypto.getRandomValues(t),Array.from(t,Y_).join("")}async function Q_(e){const n=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",n),i=new Uint8Array(r);return Array.from(i).map(s=>String.fromCharCode(s)).join("")}function J_(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Gn(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const n=await Q_(e);return J_(n)}class jc extends Error{constructor(t,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=n}}function z(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class q_ extends jc{constructor(t,n){super(t,n),this.name="AuthApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}function X_(e){return z(e)&&e.name==="AuthApiError"}class Q0 extends jc{constructor(t,n){super(t),this.name="AuthUnknownError",this.originalError=n}}class Nr extends jc{constructor(t,n,r){super(t),this.name=n,this.status=r}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Kn extends Nr{constructor(){super("Auth session missing!","AuthSessionMissingError",400)}}class Za extends Nr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500)}}class ws extends Nr{constructor(t){super(t,"AuthInvalidCredentialsError",400)}}class _s extends Nr{constructor(t,n=null){super(t,"AuthImplicitGrantRedirectError",500),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Sf extends Nr{constructor(t,n=null){super(t,"AuthPKCEGrantCodeExchangeError",500),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class cu extends Nr{constructor(t,n){super(t,"AuthRetryableFetchError",n)}}function xf(e){return z(e)&&e.name==="AuthRetryableFetchError"}var Z_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const ei=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),eS=[502,503,504];async function kf(e){if(!V_(e))throw new cu(ei(e),0);if(eS.includes(e.status))throw new cu(ei(e),e.status);let t;try{t=await e.json()}catch(n){throw new Q0(ei(n),n)}throw new q_(ei(t),e.status||500)}const tS=(e,t,n,r)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function F(e,t,n,r){var i;const s=Object.assign({},r==null?void 0:r.headers);r!=null&&r.jwt&&(s.Authorization=`Bearer ${r.jwt}`);const o=(i=r==null?void 0:r.query)!==null&&i!==void 0?i:{};r!=null&&r.redirectTo&&(o.redirect_to=r.redirectTo);const a=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",l=await nS(e,t,n+a,{headers:s,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function nS(e,t,n,r,i,s){const o=tS(t,r,i,s);let a;try{a=await e(n,o)}catch(l){throw console.error(l),new cu(ei(l),0)}if(a.ok||await kf(a),r!=null&&r.noResolveJson)return a;try{return await a.json()}catch(l){await kf(l)}}function Ht(e){var t;let n=null;oS(e)&&(n=Object.assign({},e),e.expires_at||(n.expires_at=B_(e.expires_in)));const r=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:n,user:r},error:null}}function qt(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function rS(e){return{data:e,error:null}}function iS(e){const{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:s}=e,o=Z_(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:s},l=Object.assign({},o);return{data:{properties:a,user:l},error:null}}function sS(e){return e}function oS(e){return e.access_token&&e.refresh_token&&e.expires_in}var aS=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};class lS{constructor({url:t="",headers:n={},fetch:r}){this.url=t,this.headers=n,this.fetch=Y0(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,n="global"){try{return await F(this.fetch,"POST",`${this.url}/logout?scope=${n}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(r){if(z(r))return{data:null,error:r};throw r}}async inviteUserByEmail(t,n={}){try{return await F(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:n.data},headers:this.headers,redirectTo:n.redirectTo,xform:qt})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}async generateLink(t){try{const{options:n}=t,r=aS(t,["options"]),i=Object.assign(Object.assign({},r),n);return"newEmail"in r&&(i.new_email=r==null?void 0:r.newEmail,delete i.newEmail),await F(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:iS,redirectTo:n==null?void 0:n.redirectTo})}catch(n){if(z(n))return{data:{properties:null,user:null},error:n};throw n}}async createUser(t){try{return await F(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:qt})}catch(n){if(z(n))return{data:{user:null},error:n};throw n}}async listUsers(t){var n,r,i,s,o,a,l;try{const u={nextPage:null,lastPage:0,total:0},c=await F(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(n=t==null?void 0:t.page)===null||n===void 0?void 0:n.toString())!==null&&r!==void 0?r:"",per_page:(s=(i=t==null?void 0:t.perPage)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:""},xform:sS});if(c.error)throw c.error;const d=await c.json(),h=(o=c.headers.get("x-total-count"))!==null&&o!==void 0?o:0,g=(l=(a=c.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return g.length>0&&(g.forEach(v=>{const y=parseInt(v.split(";")[0].split("=")[1].substring(0,1)),k=JSON.parse(v.split(";")[1].split("=")[1]);u[`${k}Page`]=y}),u.total=parseInt(h)),{data:Object.assign(Object.assign({},d),u),error:null}}catch(u){if(z(u))return{data:{users:[]},error:u};throw u}}async getUserById(t){try{return await F(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:qt})}catch(n){if(z(n))return{data:{user:null},error:n};throw n}}async updateUserById(t,n){try{return await F(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:n,headers:this.headers,xform:qt})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}async deleteUser(t,n=!1){try{return await F(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:n},xform:qt})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}async _listFactors(t){try{const{data:n,error:r}=await F(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:n,error:r}}catch(n){if(z(n))return{data:null,error:n};throw n}}async _deleteFactor(t){try{return{data:await F(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(n){if(z(n))return{data:null,error:n};throw n}}}const J0="2.57.0",uS="http://localhost:9999",cS="supabase.auth.token",dS={"X-Client-Info":`gotrue-js/${J0}`},Ef=10,fS={getItem:e=>hi()?globalThis.localStorage.getItem(e):null,setItem:(e,t)=>{hi()&&globalThis.localStorage.setItem(e,t)},removeItem:e=>{hi()&&globalThis.localStorage.removeItem(e)}};function $f(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}function hS(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}globalThis&&hi()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class pS extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}hS();const mS={url:uS,storageKey:cS,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:dS,flowType:"implicit",debug:!1},Kr=30*1e3,Cf=3;async function gS(e,t,n){return await n()}class zi{constructor(t){var n;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=zi.nextInstanceID,zi.nextInstanceID+=1,this.instanceID>0&&Pt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const r=Object.assign(Object.assign({},mS),t);if(this.logDebugMessages=!!r.debug,typeof r.debug=="function"&&(this.logger=r.debug),this.persistSession=r.persistSession,this.storageKey=r.storageKey,this.autoRefreshToken=r.autoRefreshToken,this.admin=new lS({url:r.url,headers:r.headers,fetch:r.fetch}),this.url=r.url,this.headers=r.headers,this.fetch=Y0(r.fetch),this.lock=r.lock||gS,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?r.storage?this.storage=r.storage:hi()?this.storage=fS:(this.memoryStorage={},this.storage=$f(this.memoryStorage)):(this.memoryStorage={},this.storage=$f(this.memoryStorage)),Pt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${J0}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const t=Pt()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",t),t||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:n,error:r}=await this._getSessionFromURL(t);if(r)return this._debug("#_initialize()","error detecting session from URL",r),await this._removeSession(),{error:r};const{session:i,redirectType:s}=n;return this._debug("#_initialize()","detected session in URL",i,"redirect type",s),await this._saveSession(i),setTimeout(async()=>{s==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",i):await this._notifyAllSubscribers("SIGNED_IN",i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return z(t)?{error:t}:{error:new Q0("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signUp(t){var n,r,i;try{await this._removeSession();let s;if("email"in t){const{email:c,password:d,options:h}=t;let g=null,v=null;if(this.flowType==="pkce"){const y=Wn();await Sn(this.storage,`${this.storageKey}-code-verifier`,y),g=await Gn(y),v=y===g?"plain":"s256"}s=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h==null?void 0:h.emailRedirectTo,body:{email:c,password:d,data:(n=h==null?void 0:h.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},code_challenge:g,code_challenge_method:v},xform:Ht})}else if("phone"in t){const{phone:c,password:d,options:h}=t;s=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:c,password:d,data:(r=h==null?void 0:h.data)!==null&&r!==void 0?r:{},channel:(i=h==null?void 0:h.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Ht})}else throw new ws("You must provide either an email or phone number and a password");const{data:o,error:a}=s;if(a||!o)return{data:{user:null,session:null},error:a};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(z(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithPassword(t){try{await this._removeSession();let n;if("email"in t){const{email:s,password:o,options:a}=t;n=await F(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Ht})}else if("phone"in t){const{phone:s,password:o,options:a}=t;n=await F(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Ht})}else throw new ws("You must provide either an email or phone number and a password");const{data:r,error:i}=n;return i?{data:{user:null,session:null},error:i}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new Za}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:{user:r.user,session:r.session},error:i})}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOAuth(t){var n,r,i,s;return await this._removeSession(),await this._handleProviderSignIn(t.provider,{redirectTo:(n=t.options)===null||n===void 0?void 0:n.redirectTo,scopes:(r=t.options)===null||r===void 0?void 0:r.scopes,queryParams:(i=t.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(s=t.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async _exchangeCodeForSession(t){const n=await vs(this.storage,`${this.storageKey}-code-verifier`),{data:r,error:i}=await F(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:Ht});return await Xa(this.storage,`${this.storageKey}-code-verifier`),i?{data:{user:null,session:null},error:i}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new Za}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:r,error:i})}async signInWithIdToken(t){await this._removeSession();try{const{options:n,provider:r,token:i,access_token:s,nonce:o}=t,a=await F(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:i,access_token:s,nonce:o,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:Ht}),{data:l,error:u}=a;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new Za}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOtp(t){var n,r,i,s,o;try{if(await this._removeSession(),"email"in t){const{email:a,options:l}=t;let u=null,c=null;if(this.flowType==="pkce"){const h=Wn();await Sn(this.storage,`${this.storageKey}-code-verifier`,h),u=await Gn(h),c=h===u?"plain":"s256"}const{error:d}=await F(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(n=l==null?void 0:l.data)!==null&&n!==void 0?n:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:c},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:d}}if("phone"in t){const{phone:a,options:l}=t,{data:u,error:c}=await F(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(i=l==null?void 0:l.data)!==null&&i!==void 0?i:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(o=l==null?void 0:l.channel)!==null&&o!==void 0?o:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:c}}throw new ws("You must provide either an email or phone number.")}catch(a){if(z(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(t){var n,r;try{t.type!=="email_change"&&t.type!=="phone_change"&&await this._removeSession();let i,s;"options"in t&&(i=(n=t.options)===null||n===void 0?void 0:n.redirectTo,s=(r=t.options)===null||r===void 0?void 0:r.captchaToken);const{data:o,error:a}=await F(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:s}}),redirectTo:i,xform:Ht});if(a)throw a;if(!o)throw new Error("An error occurred on token verification.");const l=o.session,u=o.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(z(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithSSO(t){var n,r,i;try{await this._removeSession();let s=null,o=null;if(this.flowType==="pkce"){const a=Wn();await Sn(this.storage,`${this.storageKey}-code-verifier`,a),s=await Gn(a),o=a===s?"plain":"s256"}return await F(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(r=(n=t.options)===null||n===void 0?void 0:n.redirectTo)!==null&&r!==void 0?r:void 0}),!((i=t==null?void 0:t.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:s,code_challenge_method:o}),headers:this.headers,xform:rS})}catch(s){if(z(s))return{data:null,error:s};throw s}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:n},error:r}=t;if(r)throw r;if(!n)throw new Kn;const{error:i}=await F(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:n.access_token});return{data:{user:null,session:null},error:i}})}catch(t){if(z(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{t.type!="email_change"&&t.type!="phone_change"&&await this._removeSession();const n=`${this.url}/resend`;if("email"in t){const{email:r,type:i,options:s}=t,{error:o}=await F(this.fetch,"POST",n,{headers:this.headers,body:{email:r,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},redirectTo:s==null?void 0:s.emailRedirectTo});return{data:{user:null,session:null},error:o}}else if("phone"in t){const{phone:r,type:i,options:s}=t,{data:o,error:a}=await F(this.fetch,"POST",n,{headers:this.headers,body:{phone:r,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return{data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:a}}throw new ws("You must provide either an email or phone number and a type")}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async getSession(){return await this.initializePromise,this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(t,n){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await r,await n()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=n();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const n=await this.__loadSession();return await t(n)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const n=await vs(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",n),n!==null&&(this._isValidSession(n)?t=n:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const r=t.expires_at?t.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",t.expires_at),!r)return{data:{session:t},error:null};const{session:i,error:s}=await this._callRefreshToken(t.refresh_token);return s?{data:{session:null},error:s}:{data:{session:i},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await F(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:qt}):await this._useSession(async n=>{var r,i;const{data:s,error:o}=n;if(o)throw o;return await F(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(r=s.session)===null||r===void 0?void 0:r.access_token)!==null&&i!==void 0?i:void 0,xform:qt})})}catch(n){if(z(n))return{data:{user:null},error:n};throw n}}async updateUser(t,n={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,n))}async _updateUser(t,n={}){try{return await this._useSession(async r=>{const{data:i,error:s}=r;if(s)throw s;if(!i.session)throw new Kn;const o=i.session;let a=null,l=null;if(this.flowType==="pkce"&&t.email!=null){const d=Wn();await Sn(this.storage,`${this.storageKey}-code-verifier`,d),a=await Gn(d),l=d===a?"plain":"s256"}const{data:u,error:c}=await F(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:n==null?void 0:n.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:a,code_challenge_method:l}),jwt:o.access_token,xform:qt});if(c)throw c;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),{data:{user:o.user},error:null}})}catch(r){if(z(r))return{data:{user:null},error:r};throw r}}_decodeJWT(t){return _f(t)}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Kn;const n=Date.now()/1e3;let r=n,i=!0,s=null;const o=_f(t.access_token);if(o.exp&&(r=o.exp,i=r<=n),i){const{session:a,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};s=a}else{const{data:a,error:l}=await this._getUser(t.access_token);if(l)throw l;s={access_token:t.access_token,refresh_token:t.refresh_token,user:a.user,token_type:"bearer",expires_in:r-n,expires_at:r},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return{data:{user:s.user,session:s},error:null}}catch(n){if(z(n))return{data:{session:null,user:null},error:n};throw n}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async n=>{var r;if(!t){const{data:o,error:a}=n;if(a)throw a;t=(r=o.session)!==null&&r!==void 0?r:void 0}if(!(t!=null&&t.refresh_token))throw new Kn;const{session:i,error:s}=await this._callRefreshToken(t.refresh_token);return s?{data:{user:null,session:null},error:s}:i?{data:{user:i.user,session:i},error:null}:{data:{user:null,session:null},error:null}})}catch(n){if(z(n))return{data:{user:null,session:null},error:n};throw n}}async _getSessionFromURL(t){try{if(!Pt())throw new _s("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new _s("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!t)throw new Sf("Not a valid PKCE flow url.");const n=qa(window.location.href);if(t){if(!n.code)throw new Sf("No code detected.");const{data:f,error:p}=await this._exchangeCodeForSession(n.code);if(p)throw p;const w=new URL(window.location.href);return w.searchParams.delete("code"),window.history.replaceState(window.history.state,"",w.toString()),{data:{session:f.session,redirectType:null},error:null}}if(n.error||n.error_description||n.error_code)throw new _s(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});const{provider_token:r,provider_refresh_token:i,access_token:s,refresh_token:o,expires_in:a,expires_at:l,token_type:u}=n;if(!s||!a||!o||!u)throw new _s("No session defined in URL");const c=Math.round(Date.now()/1e3),d=parseInt(a);let h=c+d;l&&(h=parseInt(l));const g=h-c;g*1e3<=Kr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${d}s`);const v=h-d;c-v>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",v,h,c):c-v<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",v,h,c);const{data:y,error:k}=await this._getUser(s);if(k)throw k;const m={provider_token:r,provider_refresh_token:i,access_token:s,expires_in:d,expires_at:h,refresh_token:o,token_type:u,user:y.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:m,redirectType:n.type},error:null}}catch(n){if(z(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantFlow(){const t=qa(window.location.href);return!!(Pt()&&(t.access_token||t.error_description))}async _isPKCEFlow(){const t=qa(window.location.href),n=await vs(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&n)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async n=>{var r;const{data:i,error:s}=n;if(s)return{error:s};const o=(r=i.session)===null||r===void 0?void 0:r.access_token;if(o){const{error:a}=await this.admin.signOut(o,t);if(a&&!(X_(a)&&(a.status===404||a.status===401)))return{error:a}}return t!=="others"&&(await this._removeSession(),await Xa(this.storage,`${this.storageKey}-code-verifier`),await this._notifyAllSubscribers("SIGNED_OUT",null)),{error:null}})}onAuthStateChange(t){const n=H_(),r={id:n,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}};return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,r),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(n)})))(),{data:{subscription:r}}}async _emitInitialSession(t){return await this._useSession(async n=>{var r,i;try{const{data:{session:s},error:o}=n;if(o)throw o;await((r=this.stateChangeEmitters.get(t))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",t,"session",s)}catch(s){await((i=this.stateChangeEmitters.get(t))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",s),console.error(s)}})}async resetPasswordForEmail(t,n={}){let r=null,i=null;if(this.flowType==="pkce"){const s=Wn();await Sn(this.storage,`${this.storageKey}-code-verifier`,s),r=await Gn(s),i=s===r?"plain":"s256"}try{return await F(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:r,code_challenge_method:i,gotrue_meta_security:{captcha_token:n.captchaToken}},headers:this.headers,redirectTo:n.redirectTo})}catch(s){if(z(s))return{data:null,error:s};throw s}}async _refreshAccessToken(t){const n=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(n,"begin");try{const r=Date.now();return await K_(async i=>(await G_(i*200),this._debug(n,"refreshing attempt",i),await F(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:Ht})),(i,s,o)=>o&&o.error&&xf(o.error)&&Date.now()+(i+1)*200-r<Kr)}catch(r){if(this._debug(n,"error",r),z(r))return{data:{session:null,user:null},error:r};throw r}finally{this._debug(n,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,n){const r=await this._getUrlForProvider(t,{redirectTo:n.redirectTo,scopes:n.scopes,queryParams:n.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",n,"url",r),Pt()&&!n.skipBrowserRedirect&&window.location.assign(r),{data:{provider:t,url:r},error:null}}async _recoverAndRefresh(){var t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const r=await vs(this.storage,this.storageKey);if(this._debug(n,"session from storage",r),!this._isValidSession(r)){this._debug(n,"session is not valid"),r!==null&&await this._removeSession();return}const i=Math.round(Date.now()/1e3),s=((t=r.expires_at)!==null&&t!==void 0?t:1/0)<i+Ef;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${Ef}s`),s){if(this.autoRefreshToken&&r.refresh_token){const{error:o}=await this._callRefreshToken(r.refresh_token);o&&(console.error(o),xf(o)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",o),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(n,"error",r),console.error(r);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var n,r;if(!t)throw new Kn;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const i=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(i,"begin");try{this.refreshingDeferred=new fa;const{data:s,error:o}=await this._refreshAccessToken(t);if(o)throw o;if(!s.session)throw new Kn;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const a={session:s.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(s){if(this._debug(i,"error",s),z(s)){const o={session:null,error:s};return(n=this.refreshingDeferred)===null||n===void 0||n.resolve(o),o}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(s),s}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(t,n,r=!0){const i=`#_notifyAllSubscribers(${t})`;this._debug(i,"begin",n,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:t,session:n});const s=[],o=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(t,n)}catch(l){s.push(l)}});if(await Promise.all(o),s.length>0){for(let a=0;a<s.length;a+=1)console.error(s[a]);throw s[0]}}finally{this._debug(i,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),await this._persistSession(t)}_persistSession(t){return this._debug("#_persistSession()",t),Sn(this.storage,this.storageKey,t)}async _removeSession(){this._debug("#_removeSession()"),await Xa(this.storage,this.storageKey)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&Pt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(n){console.error("removing visibilitychange callback failed",n)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Kr);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async n=>{const{data:{session:r}}=n;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((r.expires_at*1e3-t)/Kr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${Kr}ms, refresh threshold is ${Cf} ticks`),i<=Cf&&await this._callRefreshToken(r.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof pS)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Pt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const n=`#_onVisibilityChanged(${t})`;this._debug(n,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(n,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,n){const r=[`provider=${encodeURIComponent(t)}`];if(n!=null&&n.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const i=Wn();await Sn(this.storage,`${this.storageKey}-code-verifier`,i);const s=await Gn(i),o=i===s?"plain":"s256";this._debug("PKCE","code verifier",`${i.substring(0,5)}...`,"code challenge",s,"method",o);const a=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(o)}`});r.push(a.toString())}if(n!=null&&n.queryParams){const i=new URLSearchParams(n.queryParams);r.push(i.toString())}return`${this.url}/authorize?${r.join("&")}`}async _unenroll(t){try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;return s?{data:null,error:s}:await F(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(z(n))return{data:null,error:n};throw n}}async _enroll(t){try{return await this._useSession(async n=>{var r,i;const{data:s,error:o}=n;if(o)return{data:null,error:o};const{data:a,error:l}=await F(this.fetch,"POST",`${this.url}/factors`,{body:{friendly_name:t.friendlyName,factor_type:t.factorType,issuer:t.issuer},headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});return l?{data:null,error:l}:(!((i=a==null?void 0:a.totp)===null||i===void 0)&&i.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),{data:a,error:null})})}catch(n){if(z(n))return{data:null,error:n};throw n}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;if(s)return{data:null,error:s};const{data:o,error:a}=await F(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),{data:o,error:a})})}catch(n){if(z(n))return{data:null,error:n};throw n}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;return s?{data:null,error:s}:await F(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(z(n))return{data:null,error:n};throw n}})}async _challengeAndVerify(t){const{data:n,error:r}=await this._challenge({factorId:t.factorId});return r?{data:null,error:r}:await this._verify({factorId:t.factorId,challengeId:n.id,code:t.code})}async _listFactors(){const{data:{user:t},error:n}=await this.getUser();if(n)return{data:null,error:n};const r=(t==null?void 0:t.factors)||[],i=r.filter(s=>s.factor_type==="totp"&&s.status==="verified");return{data:{all:r,totp:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var n,r;const{data:{session:i},error:s}=t;if(s)return{data:null,error:s};if(!i)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const o=this._decodeJWT(i.access_token);let a=null;o.aal&&(a=o.aal);let l=a;((r=(n=i.user.factors)===null||n===void 0?void 0:n.filter(d=>d.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(l="aal2");const c=o.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:c},error:null}}))}}zi.nextInstanceID=0;class yS extends zi{constructor(t){super(t)}}var vS=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})};const wS={headers:L_},_S={schema:"public"},SS={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},xS={};class kS{constructor(t,n,r){var i,s,o,a,l,u,c,d;if(this.supabaseUrl=t,this.supabaseKey=n,!t)throw new Error("supabaseUrl is required.");if(!n)throw new Error("supabaseKey is required.");const h=M_(t);this.realtimeUrl=`${h}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${h}/auth/v1`,this.storageUrl=`${h}/storage/v1`,this.functionsUrl=`${h}/functions/v1`;const g=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,v={db:_S,realtime:xS,auth:Object.assign(Object.assign({},SS),{storageKey:g}),global:wS},y=U_(r??{},v);this.storageKey=(s=(i=y.auth)===null||i===void 0?void 0:i.storageKey)!==null&&s!==void 0?s:"",this.headers=(a=(o=y.global)===null||o===void 0?void 0:o.headers)!==null&&a!==void 0?a:{},this.auth=this._initSupabaseAuthClient((l=y.auth)!==null&&l!==void 0?l:{},this.headers,(u=y.global)===null||u===void 0?void 0:u.fetch),this.fetch=F_(n,this._getAccessToken.bind(this),(c=y.global)===null||c===void 0?void 0:c.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},y.realtime)),this.rest=new Cc(`${h}/rest/v1`,{headers:this.headers,schema:(d=y.db)===null||d===void 0?void 0:d.schema,fetch:this.fetch}),this._listenForAuthEvents()}get functions(){return new Ow(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new I_(this.storageUrl,this.headers,this.fetch)}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,n={},r){return this.rest.rpc(t,n,r)}channel(t,n={config:{}}){return this.realtime.channel(t,n)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,n;return vS(this,void 0,void 0,function*(){const{data:r}=yield this.auth.getSession();return(n=(t=r.session)===null||t===void 0?void 0:t.access_token)!==null&&n!==void 0?n:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:i,storageKey:s,flowType:o,debug:a},l,u){const c={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new yS({url:this.authUrl,headers:Object.assign(Object.assign({},c),l),storageKey:s,autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:i,flowType:o,debug:a,fetch:u})}_initRealtimeClient(t){return new S_(this.realtimeUrl,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,r)=>{this._handleTokenChanged(n,"CLIENT",r==null?void 0:r.access_token)})}_handleTokenChanged(t,n,r){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==r?(this.realtime.setAuth(r??null),this.changedAccessToken=r):t==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const ES=(e,t,n)=>new kS(e,t,n);var Tc={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const $S="https://yfaqmlswjffrcahnqlms.supabase.co",CS=Tc.VITE_SUPABASE_KEY??"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmYXFtbHN3amZmcmNhaG5xbG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMzI3OTcsImV4cCI6MjAxNjYwODc5N30.vgsBnGcwNHuMGzYW7qsUDc5b4OuWLbs2Osm_t7KlxJY",bS=Tc.VITE_SUPABASE_KEY!==void 0,PS=Tc.VITE_EDIT_MODE==="EDIT",J=ES($S,CS),q0={homeBlurb:null,projects:[],experiences:[],research:[],rawHomeData:"",updateHomeBlurb:async()=>{},updateProjects:async()=>{},updateExperiences:async()=>{},updateResearch:async()=>{},uploadFile:async()=>{},editing:!1},Un=C.createContext(q0),jS=()=>{const[e,t]=C.useState(q0);return C.useEffect(()=>{const n=async()=>{var y,k,m;const r=J.from("home").select().order("created_at",{ascending:!0}),i=J.from("project").select().order("created_at",{ascending:!1}),s=J.from("experience").select().order("created_at",{ascending:!1}),o=J.from("position").select().order("created_at",{ascending:!1}),a=J.from("research").select().order("created_at",{ascending:!1}),l=J.from("paper").select().order("created_at",{ascending:!1}),[u,c,d,h,g,v]=await Promise.all([r,i,s,o,a,l]);t({homeBlurb:OS(u.data),projects:((y=c.data)==null?void 0:y.map(f=>({type:"PROJECT",...f,name:f.name.toLowerCase()})))||[],experiences:((k=d.data)==null?void 0:k.map(f=>{var p;return{type:"EXPERIENCE",positions:((p=h.data)==null?void 0:p.filter(({experience_id:w})=>f.id===w).map(w=>({...w,title:w.title.toLowerCase()})))||[],...f,place_of_work:f.place_of_work.toLowerCase()}}))||[],research:((m=g.data)==null?void 0:m.map(f=>{var p;return{type:"RESEARCH",papers:((p=v.data)==null?void 0:p.filter(({research_id:w})=>f.id===w))||[],...f,area:f.area.toLowerCase()}}))||[],editing:bS&&PS,rawHomeData:X0(u.data),updateHomeBlurb:async f=>{await J.from("home").delete().neq("id",-1),await J.from("home").upsert(TS(f)),await n()},updateProjects:async f=>{const p=f.map(w=>{const S={...w};return delete S.type,S});await J.from("project").upsert(p.filter(w=>w.id!==void 0)),await J.from("project").delete().eq("name","delete"),await J.from("project").insert(p.filter(w=>w.id===void 0)),await n()},updateExperiences:async f=>{const p=f.flatMap(S=>S.positions||[]),w=f.map(S=>{const E={...S};return delete E.type,delete E.positions,E});await J.from("experience").upsert(w.filter(S=>S.id!==void 0)),await J.from("position").upsert(p.filter(S=>S.id!==void 0)),await J.from("position").delete().eq("title","delete"),await J.from("experience").delete().eq("place_of_work","delete"),await J.from("experience").insert(w.filter(S=>S.id===void 0)),await J.from("position").insert(p.filter(S=>S.id===void 0)),await n()},updateResearch:async f=>{const p=f.flatMap(S=>S.papers||[]),w=f.map(S=>{const E={...S};return delete E.type,delete E.papers,E});await J.from("research").upsert(w.filter(S=>S.id!==void 0)),await J.from("paper").upsert(p.filter(S=>S.id!==void 0)),await J.from("paper").delete().eq("title","delete"),await J.from("research").delete().eq("area","delete"),await J.from("research").insert(w.filter(S=>S.id===void 0)),await J.from("paper").insert(p.filter(S=>S.id===void 0)),await n()},uploadFile:async(f,p)=>(await J.storage.from("assets").upload(f,p,{upsert:!0}),J.storage.from("assets").getPublicUrl(f))})};n()},[]),e},TS=e=>{const t=e.split(`

`),n=[];return[...t.map(i=>{let s=i;return[...i.matchAll(/\[.*\]\(.*\)/g)].map(([a])=>{const[l,u]=a.split(/\[|\]|\(|\)/g).filter(c=>c!=="");return s=s.replace(a,l),[l,u]}).forEach(([a,l])=>{n.push({type:"substitution",substitute_text:a,substitute_link:l})}),{type:"paragraph",paragraph:s}}),...n]},X0=e=>{if(e===null)return"";const t=e.filter(({type:r})=>r==="paragraph"),n=e.filter(({type:r})=>r==="substitution");return t.map(({paragraph:r})=>n.reduce((i,{substitute_text:s,substitute_link:o})=>{if(!i.includes(s))return i;const[a,l]=i.split(s);return`${a}[${s}](${o})${l}`},r)).join(`

`)},OS=e=>{const t=X0(e);if(t==="")return _.jsx(_.Fragment,{});const r=t.split(`

`).map(i=>{const s=[...i.matchAll(/\[.*\]\(.*\)/g)].map(([o])=>[o,...o.split(/\[|\]|\(|\)/g).filter(a=>a!=="")]);return _.jsx(_.Fragment,{children:s.reduce((o,[a,l,u])=>o.flatMap(c=>{if(typeof c!="string"||!c.includes(l))return c;const[d,h]=c.split(a);return[d,_.jsx(Vi,{href:u,target:"_blank",$inline:!0,children:l}),h]}),[i])})});return _.jsx(_.Fragment,{children:r.map((i,s)=>s===r.length-1?i:_.jsxs(_.Fragment,{children:[i,_.jsx("br",{}),_.jsx("br",{})]}))})},RS=I(Wi)`
  width: 30%;

  @media screen and (max-width: 480px) {
    width: 100%;
    h2 {
      display: none;
    }
  }
`,IS=I(Wi)`
  width: 65%;

  @media screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`,AS=I.img`
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
`,LS=I.p`
  align-self: center;
  font-family: ${e=>e.theme.bodyFont};
  color: ${e=>e.theme.text2};
  width: 85%;

  @media screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`,NS=I.div`
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
`,zS=I.div`
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
`,DS=[{link:"mailto:dilloncscott1@gmail.com",icon:_.jsx(Ry,{}),text:"dilloncscott1@gmail.com"},{link:"https://linkedin.com/in/dillon-scott",icon:_.jsx(Iy,{}),text:"linkedin.com/in/dillon-scott"},{link:"https://github.com/dillydally414",icon:_.jsx(tu,{}),text:"github.com/dillydally414"}],FS=()=>{const{editing:e,homeBlurb:t,rawHomeData:n,updateHomeBlurb:r}=C.useContext(Un),[i,s]=C.useState(n);return C.useEffect(()=>{s(n)},[n]),_.jsxs(NS,{children:[_.jsxs(RS,{children:[_.jsx(AS,{src:Ay,alt:"A picture of me!",width:"100%"}),_.jsx(F0,{$align:"center",children:"drop a line"}),_.jsx(zS,{children:DS.map(o=>_.jsxs(Vi,{href:o.link,target:"_blank",children:[o.icon,_.jsx(Us,{children:o.text})]},o.text))})]}),_.jsx(IS,{children:_.jsxs(ca,{direction:"up",cascade:!0,triggerOnce:!0,children:[_.jsx(kc,{text:"dillon c scott"}),t&&(e?_.jsx(ve,{$align:"center",value:i,onChange:o=>s(o.target.value)}):_.jsx(LS,{children:t})),e&&_.jsx("button",{style:{margin:"1rem 0"},onClick:()=>r(i),children:"save"})]})})]})},MS=e=>{switch(e.type){case"EXPERIENCE":return"place_of_work";case"PROJECT":return"name";case"RESEARCH":return"title"}},vo=e=>{switch(e.type){case"EXPERIENCE":return e.place_of_work;case"PROJECT":return e.name;case"RESEARCH":return e.area}},bf=e=>C.createElement("svg",{id:"mouse_click","data-name":"mouse click",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 109.21 122.88",...e},C.createElement("path",{d:"M86,122.31a5.57,5.57,0,0,1-.9.35,5.09,5.09,0,0,1-1,.18,5.46,5.46,0,0,1-1,0,6.77,6.77,0,0,1-1-.15,6,6,0,0,1-1-.36l0,0a5.51,5.51,0,0,1-.92-.53l0,0a6.41,6.41,0,0,1-.78-.69,5.19,5.19,0,0,1-.65-.87l-9.08-14.88-7.69,9a15.49,15.49,0,0,1-1.1,1.18c-.39.37-.78.71-1.18,1l-.08.06a12.19,12.19,0,0,1-1.2.82,9.66,9.66,0,0,1-1.24.63,6.91,6.91,0,0,1-1,.37,6.21,6.21,0,0,1-1,.22,7.55,7.55,0,0,1-1.06.07,7.19,7.19,0,0,1-1-.11,6.14,6.14,0,0,1-1.18-.35,5.42,5.42,0,0,1-1.06-.57,6.22,6.22,0,0,1-.92-.78l0,0a7.31,7.31,0,0,1-.75-1l-.11-.2-.09-.21L47.72,112l0-.17L40.91,43.26a4.52,4.52,0,0,1,0-1.33,4.3,4.3,0,0,1,.43-1.25,4.31,4.31,0,0,1,1.39-1.55l0,0a3.82,3.82,0,0,1,.9-.46,4.25,4.25,0,0,1,1-.24h0a4.31,4.31,0,0,1,1.29.05,4.67,4.67,0,0,1,1.25.44l.3.16c13.51,8.84,26.1,17.06,38.64,25.25l19,12.39a11.72,11.72,0,0,1,1,.72l0,0a8.78,8.78,0,0,1,.82.73l.06.07a7.41,7.41,0,0,1,.71.82,5.91,5.91,0,0,1,.57.87,6.42,6.42,0,0,1,.51,1.14,5.6,5.6,0,0,1,.26,1.17,5.44,5.44,0,0,1,0,1.21h0a6.59,6.59,0,0,1-.23,1.19,6.54,6.54,0,0,1-.94,1.88,6.41,6.41,0,0,1-.67.83,7.45,7.45,0,0,1-.82.76,10.42,10.42,0,0,1-1.16.83,12.92,12.92,0,0,1-1.34.7c-.47.21-1,.41-1.46.58a14.27,14.27,0,0,1-1.55.43h0c-2.77.54-5.53,1.21-8.27,1.87l-3.25.77,9,14.94a5.84,5.84,0,0,1,.46,1,5.59,5.59,0,0,1,.15,3.21l0,.1a5.53,5.53,0,0,1-.33.94,6.43,6.43,0,0,1-.51.89,5.62,5.62,0,0,1-.68.81,6,6,0,0,1-.82.67l-2,1.29A83,83,0,0,1,86,122.31ZM37.63,19.46a4,4,0,0,1-6.92,4l-8-14a4,4,0,0,1,6.91-4l8.06,14Zm-15,46.77a4,4,0,0,1,4,6.91l-14,8.06a4,4,0,0,1-4-6.91l14-8.06ZM20.56,39.84a4,4,0,0,1-2.07,7.72L3,43.36A4,4,0,0,1,5,35.64l15.53,4.2ZM82,41.17a4,4,0,0,1-4-6.91L92,26.2a4,4,0,0,1,4,6.91L82,41.17ZM63.46,20.57a4,4,0,1,1-7.71-2.06L59.87,3A4,4,0,0,1,67.59,5L63.46,20.57Zm20.17,96.36,9.67-5.86c-3.38-5.62-8.85-13.55-11.51-19.17a2.17,2.17,0,0,1-.12-.36,2.4,2.4,0,0,1,1.81-2.87c5.38-1.23,10.88-2.39,16.22-3.73a10.28,10.28,0,0,0,1.8-.58,6.11,6.11,0,0,0,1.3-.77,3.38,3.38,0,0,0,.38-.38.9.9,0,0,0,.14-.24l-.06-.18a2.15,2.15,0,0,0-.44-.53,5.75,5.75,0,0,0-.83-.63L47.06,45.75c2.11,21.36,5.2,44.1,6.45,65.31a6.28,6.28,0,0,0,.18,1,2.89,2.89,0,0,0,.26.62l.13.14a1,1,0,0,0,.29,0,2.76,2.76,0,0,0,.51-.17,5.71,5.71,0,0,0,1.28-.79,11.22,11.22,0,0,0,1.35-1.33c1.93-2.27,9.6-12.14,11.4-13.18a2.4,2.4,0,0,1,3.28.82l11.44,18.75Z"})),Pf=e=>C.createElement("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1wmkh38",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"DescriptionOutlinedIcon",...e},C.createElement("path",{d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"})),jf=({github:e,visual:t,project:n,editing:r,updateGithub:i,updateVisual:s})=>_.jsx(M0,{children:r?_.jsxs(_.Fragment,{children:[_.jsx(ve,{$align:"center",$height:"1rem",$width:"5rem",value:e??"",onChange:o=>i(o.target.value)}),_.jsx(ys,{href:e??"",target:"_blank",style:{margin:0},children:_.jsx(tu,{})}),_.jsx(ve,{$align:"center",$height:"1rem",$width:"5rem",value:t??"",onChange:o=>s(o.target.value)}),_.jsx(ys,{href:t??"",target:"_blank",style:{margin:0},children:n?_.jsx(bf,{height:"24"}):_.jsx(Pf,{height:"24"})})]}):_.jsxs(_.Fragment,{children:[e?_.jsxs(ys,{href:e,target:"_blank",children:[_.jsx(tu,{height:"24",width:"24"}),_.jsx(Us,{children:"See the code"})]}):_.jsx(Wt,{children:"Available upon request"}),t&&_.jsx(ys,{href:t,target:"_blank",children:n?_.jsxs(_.Fragment,{children:[_.jsx(bf,{height:"24",width:"24"}),_.jsx(Us,{children:"See it in action"})]}):_.jsxs(_.Fragment,{children:[_.jsx(Pf,{height:"24",width:"24"}),_.jsx(Us,{children:"Read the paper"})]})})]})}),Tf=({start:e,end:t})=>`${e.toLowerCase()}${t?t!==e?" - "+t.toLowerCase():"":" - current"}`,Oc=({info:e,passRef:t,updateFn:n})=>{const{editing:r,uploadFile:i}=C.useContext(Un),s=C.useRef(null),o=C.useRef(null);C.useEffect(()=>{s!==null&&t(s)},[s]);const[a,l]=C.useState(e);return C.useEffect(()=>{l(e)},[e]),C.useEffect(()=>{n(a)},[a]),_.jsx(_.Fragment,{children:_.jsxs(kw,{children:[r?_.jsxs(_.Fragment,{children:[_.jsx(ve,{$align:"flex-start",$height:"1rem",$width:"15rem",value:vo(a),onChange:u=>l({...a,[MS(a)]:u.target.value}),ref:s}),_.jsxs("div",{children:[_.jsx("input",{type:"file",accept:"image/*",ref:o}),_.jsx("button",{onClick:async()=>{var d,h;const u=(h=(d=o.current)==null?void 0:d.files)==null?void 0:h.item(0);if(!u)return;const c=await i(u.name,u);c!=null&&c.data&&l({...a,image_url:c.data.publicUrl})},children:"upload"})]})]}):_.jsx(F0,{$align:"flex-start",$underline:e.id===1,ref:s,children:vo(e)}),a.type==="EXPERIENCE"?_.jsxs(_.Fragment,{children:[r&&_.jsx("button",{style:{margin:"1rem 0"},onClick:()=>l({...a,positions:[...a.positions,{experience_id:a.id}]}),children:"add position"}),a.positions.map((u,c)=>_.jsxs(Te.Fragment,{children:[_.jsx(cf,{children:r?_.jsxs(_.Fragment,{children:[_.jsx(ve,{$align:"flex-start",$height:"1rem",$width:"21rem",value:u.title,onChange:d=>l({...a,positions:a.positions.map((h,g)=>g===c?{...h,title:d.target.value}:h)})}),_.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[_.jsx(ve,{$align:"flex-start",$height:"1rem",$width:"10rem",value:u.start,onChange:d=>l({...a,positions:a.positions.map((h,g)=>g===c?{...h,start:d.target.value}:h)})})," - ",_.jsx(ve,{$align:"flex-start",$height:"1rem",$width:"10rem",value:u.end||"",onChange:d=>l({...a,positions:a.positions.map((h,g)=>g===c?{...h,end:d.target.value}:h)})})]})]}):_.jsxs(_.Fragment,{children:[_.jsx(Ka,{children:u.title}),_.jsx(Ka,{children:Tf(u)})]})}),r?_.jsx(ve,{$align:"flex-start",$height:"5rem",value:u.description,onChange:d=>l({...a,positions:a.positions.map((h,g)=>g===c?{...h,description:d.target.value}:h)})}):_.jsx(Wt,{children:u.description})]},u.id))]}):a.type==="PROJECT"?_.jsxs(_.Fragment,{children:[_.jsx(cf,{children:r?_.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[_.jsx(ve,{$align:"flex-start",$height:"1rem",$width:"10rem",value:a.start,onChange:u=>l({...a,start:u.target.value})})," - ",_.jsx(ve,{$align:"flex-start",$height:"1rem",$width:"10rem",value:a.end||"",onChange:u=>l({...a,end:u.target.value})})]}):_.jsx(Ka,{children:Tf(a)})}),r?_.jsx(ve,{$align:"flex-start",$height:"5rem",value:a.description,onChange:u=>l({...a,description:u.target.value})}):_.jsx(Wt,{children:a.description})]}):_.jsxs(_.Fragment,{children:[r?_.jsx(ve,{$align:"flex-start",$height:"5rem",value:a.description,onChange:u=>l({...a,description:u.target.value})}):_.jsx(Wt,{children:a.description}),r&&_.jsx("button",{style:{margin:"1rem 0"},onClick:()=>l({...a,papers:[...a.papers,{research_id:a.id}]}),children:"add paper"}),a.papers.map((u,c)=>_.jsxs(Te.Fragment,{children:[r?_.jsxs(_.Fragment,{children:[_.jsx(ve,{$align:"flex-start",$height:"2rem",value:u.title,onChange:d=>l({...a,papers:a.papers.map((h,g)=>g===c?{...h,title:d.target.value}:h)})}),_.jsx(ve,{$align:"flex-start",$height:"3rem",value:u.authors,onChange:d=>l({...a,papers:a.papers.map((h,g)=>g===c?{...h,authors:d.target.value}:h)})}),_.jsxs(M0,{children:[_.jsx(ve,{$align:"center",$height:"1rem",$width:"5rem",value:u.journal,onChange:d=>l({...a,papers:a.papers.map((h,g)=>g===c?{...h,journal:d.target.value}:h)})}),", ",_.jsx(ve,{$align:"center",$height:"1rem",$width:"5rem",value:u.year,onChange:d=>l({...a,papers:a.papers.map((h,g)=>g===c?{...h,year:d.target.value}:h)})})]})]}):_.jsxs(_.Fragment,{children:[_.jsx(Wt,{children:u.title}),_.jsx(Wt,{children:u.authors}),_.jsxs(Wt,{children:[u.journal,", ",u.year]})]}),_.jsx(jf,{github:u.github_link,visual:u.doi,editing:r,updateGithub:d=>l({...a,papers:a.papers.map((h,g)=>g===c?{...h,github_link:d}:h)}),updateVisual:d=>l({...a,papers:a.papers.map((h,g)=>g===c?{...h,doi:d}:h)})})]},u.id))]}),r&&a.type!=="RESEARCH"?_.jsx(ve,{$align:"flex-start",$height:"1rem",value:a.type==="PROJECT"?a.tech_used:a.relevant_tech,onChange:u=>l({...a,[a.type==="PROJECT"?"tech_used":"relevant_tech"]:u.target.value})}):!r&&e.type!=="RESEARCH"&&_.jsx(Wt,{children:e.type==="PROJECT"?e.tech_used:e.relevant_tech}),a.type==="PROJECT"&&_.jsx(jf,{github:a.github_link,visual:a.visual_link,project:!0,editing:r,updateGithub:u=>l({...a,github_link:u}),updateVisual:u=>l({...a,visual_link:u})})]})})},US=I.div`
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
`,BS=I.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  width: 1rem;
  min-width: 1rem;
  height: 100%;
  max-height: 100%;
`,HS=I.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  justify-content: start;
  height: 100%;
  object-fit: contain;
`,VS=I(Vi)`
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
`,WS=I.div`
  display: flex;
  flex-direction: column;
  width: 4rem;

  @media screen and (max-width: 480px) {
    display: none;
  }
`,GS=I.img`
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
`,KS=(e,t,n)=>{const[r,i]=C.useState(0),[s,o]=C.useState(e.map(g=>!1)),[a,l]=C.useState(!1),u=Cy();C.useEffect(()=>{n&&n.parentElement&&(n.parentElement.scrollTop=0)},[n]);const c=g=>{var y,k;if(!t[g])return;const v=t[g].offsetTop-.5*(t[g].parentElement.offsetHeight-t[g].offsetHeight);(k=(y=t[g])==null?void 0:y.parentElement)==null||k.scrollTo({behavior:"smooth",top:v})},d=g=>{var y,k,m,f,p,w,S;if(!e[g])return;const v=e[g].parentElement.parentElement.offsetTop-((y=n.parentElement)==null?void 0:y.offsetTop)-.3*n.parentElement.offsetHeight;(k=n==null?void 0:n.parentElement)==null||k.scrollTo({behavior:"smooth",top:v}),((p=(f=(m=e[g])==null?void 0:m.parentElement)==null?void 0:f.parentElement)==null?void 0:p.offsetTop)===((w=n==null?void 0:n.parentElement)==null?void 0:w.offsetTop)&&l(!1),(S=n==null?void 0:n.parentElement)==null||S.addEventListener("scrollend",()=>l(!1),{once:!0})},h=g=>{l(!0),c(g),d(g),i(g)};return C.useEffect(()=>{e[r]&&(e[r].style.textDecorationColor=u.accent),e.map((g,v)=>{v!==r&&g&&(g.style.textDecorationColor=u.accent2)})},[u,e,r]),C.useEffect(()=>{var g;if(n&&n.parentElement!==null&&e.length>0&&e.every(v=>v!==null)){const v=n.parentElement,y=()=>o(k=>{const m=v.scrollTop<=5,f=Math.abs(v.scrollTop+v.offsetHeight-v.scrollHeight)<=5;return[m,...k.slice(1,-1),f]});return(g=n==null?void 0:n.parentElement)==null||g.addEventListener("scroll",y),()=>{var k;return(k=n==null?void 0:n.parentElement)==null?void 0:k.removeEventListener("scroll",y)}}},[n,e,o]),C.useEffect(()=>{if(!a){let g;s[r]||(g=s[r+1]?s.indexOf(!0):s.lastIndexOf(!0)),s[0]&&(g=0),s[s.length-1]&&(g=s.length-1),g!==void 0&&(c(g),i(g))}},[i,c,r,s]),C.useEffect(()=>{const g=new IntersectionObserver(v=>o(y=>{const k=[...y];return v.map(m=>{const f=e.findIndex(w=>(w==null?void 0:w.parentElement)===m.target);f!==-1&&(k[f]=m.isIntersecting);const p=n==null?void 0:n.parentElement;if(p){const w=p.scrollTop<=5||f===0&&m.isIntersecting,S=Math.abs(p.scrollTop+p.offsetHeight-p.scrollHeight)<=5||f===k.length-1&&m.isIntersecting;k[0]=w,k[k.length-1]=S}}),k}),{rootMargin:"-300px 0px"});return e.map(v=>(v==null?void 0:v.parentElement)&&g.observe(v.parentElement)),()=>g.disconnect()},[e,n,i,o]),[r,h]},Rc=({elements:e,scrollRefs:t,containerRef:n})=>{const r=C.useRef([]).current,[i,s]=KS(t,r,n);return _.jsxs(US,{children:[_.jsx(BS,{children:_.jsx(HS,{children:e.map((o,a)=>_.jsx(VS,{onClick:()=>{s(a)},"aria-label":`scroll to ${vo(o)}`,$active:a===i,$name:vo(o),as:"button",ref:l=>r[a]=l}))})}),_.jsx(WS,{children:e.map((o,a)=>{var l,u,c,d;return _.jsx(GS,{$selected:a===i,src:e[a].image_url,alt:e[a].alt_text,style:{top:(((c=(u=(l=t[a])==null?void 0:l.parentElement)==null?void 0:u.parentElement)==null?void 0:c.offsetTop)||0)-(((d=n==null?void 0:n.parentElement)==null?void 0:d.scrollTop)||0)-((n==null?void 0:n.offsetTop)||0)}})})})]})},YS=()=>{const{research:e,updateResearch:t,editing:n}=C.useContext(Un),r=C.useRef([]).current,[i,s]=C.useState(null),[o,a]=C.useState(e);return C.useEffect(()=>{a(e)},[e]),_.jsxs(_.Fragment,{children:[_.jsx(Rc,{elements:e,scrollRefs:r,containerRef:i}),_.jsx(Wi,{ref:s,children:_.jsxs(ca,{direction:"up",cascade:!0,triggerOnce:!0,damping:.05,children:[n&&_.jsxs(_.Fragment,{children:[_.jsx("button",{style:{margin:"1rem 3rem 1rem 0"},onClick:()=>t(o),children:"save"}),_.jsx("button",{style:{margin:"1rem 0"},onClick:()=>t([...o,{area:"",description:"",image_url:"",alt_text:""}]),children:"add research area"})]}),o.map((l,u)=>_.jsx(Oc,{info:l,passRef:c=>r[u]=c.current,updateFn:c=>a([...o.slice(0,u),c,...o.slice(u+1)])},l.id))]})})]})},QS=()=>{const{experiences:e,updateExperiences:t,editing:n}=C.useContext(Un),r=C.useRef([]).current,[i,s]=C.useState(null),[o,a]=C.useState(e);return C.useEffect(()=>{a(e)},[e]),_.jsxs(_.Fragment,{children:[_.jsx(Rc,{elements:e,scrollRefs:r,containerRef:i}),_.jsx(Wi,{ref:s,children:_.jsxs(ca,{direction:"up",cascade:!0,triggerOnce:!0,damping:.05,children:[n&&_.jsxs(_.Fragment,{children:[_.jsx("button",{style:{margin:"1rem 3rem 1rem 0"},onClick:()=>t(o),children:"save"}),_.jsx("button",{style:{margin:"1rem 0"},onClick:()=>t([...o,{place_of_work:"",relevant_tech:"",image_url:"",alt_text:""}]),children:"add experience"})]}),o.map((l,u)=>_.jsx(Oc,{info:l,passRef:c=>r[u]=c.current,updateFn:c=>a([...o.slice(0,u),c,...o.slice(u+1)])},l.id))]})})]})},JS=()=>{const{projects:e,updateProjects:t,editing:n}=C.useContext(Un),r=C.useRef([]).current,[i,s]=C.useState(null),[o,a]=C.useState(e);return C.useEffect(()=>{a(e)},[e]),_.jsxs(_.Fragment,{children:[_.jsx(Rc,{elements:e,scrollRefs:r,containerRef:i}),_.jsx(Wi,{ref:s,children:_.jsxs(ca,{direction:"up",cascade:!0,triggerOnce:!0,damping:.05,children:[n&&_.jsxs(_.Fragment,{children:[_.jsx("button",{style:{margin:"1rem 3rem 1rem 0"},onClick:()=>t(o),children:"save"}),_.jsx("button",{style:{margin:"1rem 0"},onClick:()=>t([...o,{name:"",start:"",description:"",tech_used:"",image_url:"",alt_text:""}]),children:"add project"})]}),o.map((l,u)=>_.jsx(Oc,{info:l,passRef:c=>r[u]=c.current,updateFn:c=>a([...o.slice(0,u),c,...o.slice(u+1)])},l.id))]})})]})},qS="https://yfaqmlswjffrcahnqlms.supabase.co/storage/v1/object/public/assets/cv.pdf";I(Vi)`
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
`;const XS=I.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`,ZS=I.iframe`
  border-color: transparent;
  margin: 1rem 0;
  width: 650px;
  height: 100%;

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`,ex=()=>{const{editing:e,uploadFile:t}=C.useContext(Un),n=C.useRef(null);return _.jsxs(XS,{children:[e&&_.jsxs(_.Fragment,{children:[_.jsx("input",{type:"file",accept:".pdf",ref:n}),_.jsx("button",{onClick:()=>{var i,s;const r=(s=(i=n.current)==null?void 0:i.files)==null?void 0:s.item(0);r&&t("cv.pdf",r)},children:"save"})]}),_.jsx(ZS,{src:`https://docs.google.com/gview?url=${qS}&embedded=true`,title:"Dillon Scott CV"})]})},Of=[{title:"home",element:_.jsx(FS,{})},{title:"research",element:_.jsx(YS,{})},{title:"experience",element:_.jsx(QS,{})},{title:"other projects",element:_.jsx(JS,{})},{title:"cv",element:_.jsx(ex,{})}],Z0={defaultProps:Mo`
    transition-duration: 0.5s;
  `,titleFont:"DM Sans",bodyFont:"Gothic A1"},em={background:"#232244",text:"#FFFFFF",text2:"#F4D6CC",accent:"#FFC933",accent2:"#A6E1FA",...Z0},tx={background:"#FCF0EE",text:em.background,text2:"#542111",accent:"#DA1643",accent2:"#5465FF",...Z0},nx=I.main`
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
`,rx=I.span`
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
`,ix=I.button`
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
`,sx=I.div`
  display: flex;
  justify-content: flex-start;
  flex: auto;
  max-width: 50rem;
  min-width: fit-content;
`,ox=I.header`
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
`,ax=I.label`
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
`,lx=I.button`
  ${e=>e.theme.defaultProps}

  display: flex;
  align-self: center;
  background-color: ${e=>e.theme.accent};
  border-radius: 1rem;
  border-width: 0;
  height: 105%;
  aspect-ratio: 1/1;
  transition-property: background-color;
`,ux=Ty`
  html {
    background-color: ${e=>e.theme.accent2};
  }

  body {
    overscroll-behavior-x: none;
    margin: 0;
    min-height: 100vh;
    width: 100vw;
  }
`,cx=()=>{var s;const[e,t]=C.useState("home"),[n,r]=C.useState(window.matchMedia("(prefers-color-scheme: dark)").matches),i=jS();return _.jsxs(by,{theme:n?em:tx,children:[_.jsx(ux,{}),_.jsxs(ox,{children:[_.jsx(sx,{children:Of.map(({title:o,element:a},l)=>_.jsx(rx,{$active:o===e,children:_.jsx(ix,{onClick:()=>t(o),$title:o,$active:o===e,children:o})},o))}),_.jsx(ax,{$checked:n,"aria-label":`Turn ${n?"off":"on"} dark mode`,id:"theme-label",children:_.jsx(lx,{onClick:()=>r(o=>!o),"aria-labelledby":"theme-label"})})]}),_.jsx(Un.Provider,{value:i,children:_.jsx(nx,{children:(s=Of.find(({title:o})=>o===e))==null?void 0:s.element})})]})};el.createRoot(document.getElementById("root")).render(_.jsx(Te.StrictMode,{children:_.jsx(cx,{})}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}