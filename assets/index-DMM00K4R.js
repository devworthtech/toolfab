(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function jy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Yh={exports:{}},Ca={},Jh={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function sw(){if($m)return Ce;$m=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function k(O){return O===null||typeof O!="object"?null:(O=C&&O[C]||O["@@iterator"],typeof O=="function"?O:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,X={};function W(O,z,ne){this.props=O,this.context=z,this.refs=X,this.updater=ne||B}W.prototype.isReactComponent={},W.prototype.setState=function(O,z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,z,"setState")},W.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Ie(){}Ie.prototype=W.prototype;function ve(O,z,ne){this.props=O,this.context=z,this.refs=X,this.updater=ne||B}var me=ve.prototype=new Ie;me.constructor=ve,G(me,W.prototype),me.isPureReactComponent=!0;var _e=Array.isArray,je=Object.prototype.hasOwnProperty,Se={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(O,z,ne){var ge,Ae={},Ne=null,be=null;if(z!=null)for(ge in z.ref!==void 0&&(be=z.ref),z.key!==void 0&&(Ne=""+z.key),z)je.call(z,ge)&&!D.hasOwnProperty(ge)&&(Ae[ge]=z[ge]);var Fe=arguments.length-2;if(Fe===1)Ae.children=ne;else if(1<Fe){for(var Be=Array(Fe),Et=0;Et<Fe;Et++)Be[Et]=arguments[Et+2];Ae.children=Be}if(O&&O.defaultProps)for(ge in Fe=O.defaultProps,Fe)Ae[ge]===void 0&&(Ae[ge]=Fe[ge]);return{$$typeof:i,type:O,key:Ne,ref:be,props:Ae,_owner:Se.current}}function A(O,z){return{$$typeof:i,type:O.type,key:z,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function x(O){var z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ne){return z[ne]})}var L=/\/+/g;function S(O,z){return typeof O=="object"&&O!==null&&O.key!=null?x(""+O.key):z.toString(36)}function Ke(O,z,ne,ge,Ae){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(Ne){case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case i:case e:be=!0}}if(be)return be=O,Ae=Ae(be),O=ge===""?"."+S(be,0):ge,_e(Ae)?(ne="",O!=null&&(ne=O.replace(L,"$&/")+"/"),Ke(Ae,z,ne,"",function(Et){return Et})):Ae!=null&&(P(Ae)&&(Ae=A(Ae,ne+(!Ae.key||be&&be.key===Ae.key?"":(""+Ae.key).replace(L,"$&/")+"/")+O)),z.push(Ae)),1;if(be=0,ge=ge===""?".":ge+":",_e(O))for(var Fe=0;Fe<O.length;Fe++){Ne=O[Fe];var Be=ge+S(Ne,Fe);be+=Ke(Ne,z,ne,Be,Ae)}else if(Be=k(O),typeof Be=="function")for(O=Be.call(O),Fe=0;!(Ne=O.next()).done;)Ne=Ne.value,Be=ge+S(Ne,Fe++),be+=Ke(Ne,z,ne,Be,Ae);else if(Ne==="object")throw z=String(O),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return be}function dt(O,z,ne){if(O==null)return O;var ge=[],Ae=0;return Ke(O,ge,"","",function(Ne){return z.call(ne,Ne,Ae++)}),ge}function Z(O){if(O._status===-1){var z=O._result;z=z(),z.then(function(ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=ne)},function(ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=ne)}),O._status===-1&&(O._status=0,O._result=z)}if(O._status===1)return O._result.default;throw O._result}var le={current:null},Q={transition:null},ue={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:Q,ReactCurrentOwner:Se};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:dt,forEach:function(O,z,ne){dt(O,function(){z.apply(this,arguments)},ne)},count:function(O){var z=0;return dt(O,function(){z++}),z},toArray:function(O){return dt(O,function(z){return z})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=W,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ve,Ce.StrictMode=s,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ce.act=te,Ce.cloneElement=function(O,z,ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ge=G({},O.props),Ae=O.key,Ne=O.ref,be=O._owner;if(z!=null){if(z.ref!==void 0&&(Ne=z.ref,be=Se.current),z.key!==void 0&&(Ae=""+z.key),O.type&&O.type.defaultProps)var Fe=O.type.defaultProps;for(Be in z)je.call(z,Be)&&!D.hasOwnProperty(Be)&&(ge[Be]=z[Be]===void 0&&Fe!==void 0?Fe[Be]:z[Be])}var Be=arguments.length-2;if(Be===1)ge.children=ne;else if(1<Be){Fe=Array(Be);for(var Et=0;Et<Be;Et++)Fe[Et]=arguments[Et+2];ge.children=Fe}return{$$typeof:i,type:O.type,key:Ae,ref:Ne,props:ge,_owner:be}},Ce.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ce.createElement=I,Ce.createFactory=function(O){var z=I.bind(null,O);return z.type=O,z},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:m,render:O}},Ce.isValidElement=P,Ce.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Z}},Ce.memo=function(O,z){return{$$typeof:_,type:O,compare:z===void 0?null:z}},Ce.startTransition=function(O){var z=Q.transition;Q.transition={};try{O()}finally{Q.transition=z}},Ce.unstable_act=te,Ce.useCallback=function(O,z){return le.current.useCallback(O,z)},Ce.useContext=function(O){return le.current.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O){return le.current.useDeferredValue(O)},Ce.useEffect=function(O,z){return le.current.useEffect(O,z)},Ce.useId=function(){return le.current.useId()},Ce.useImperativeHandle=function(O,z,ne){return le.current.useImperativeHandle(O,z,ne)},Ce.useInsertionEffect=function(O,z){return le.current.useInsertionEffect(O,z)},Ce.useLayoutEffect=function(O,z){return le.current.useLayoutEffect(O,z)},Ce.useMemo=function(O,z){return le.current.useMemo(O,z)},Ce.useReducer=function(O,z,ne){return le.current.useReducer(O,z,ne)},Ce.useRef=function(O){return le.current.useRef(O)},Ce.useState=function(O){return le.current.useState(O)},Ce.useSyncExternalStore=function(O,z,ne){return le.current.useSyncExternalStore(O,z,ne)},Ce.useTransition=function(){return le.current.useTransition()},Ce.version="18.3.1",Ce}var qm;function Hd(){return qm||(qm=1,Jh.exports=sw()),Jh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function ow(){if(Hm)return Ca;Hm=1;var i=Hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,C={},k=null,B=null;_!==void 0&&(k=""+_),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(B=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(C[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)C[w]===void 0&&(C[w]=g[w]);return{$$typeof:e,type:m,key:k,ref:B,props:C,_owner:o.current}}return Ca.Fragment=t,Ca.jsx=h,Ca.jsxs=h,Ca}var Wm;function aw(){return Wm||(Wm=1,Yh.exports=ow()),Yh.exports}var V=aw(),Je=Hd();const lw=jy(Je);var _u={},Xh={exports:{}},Zt={},Zh={exports:{}},ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function uw(){return Gm||(Gm=1,(function(i){function e(Q,ue){var te=Q.length;Q.push(ue);e:for(;0<te;){var O=te-1>>>1,z=Q[O];if(0<o(z,ue))Q[O]=ue,Q[te]=z,te=O;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var ue=Q[0],te=Q.pop();if(te!==ue){Q[0]=te;e:for(var O=0,z=Q.length,ne=z>>>1;O<ne;){var ge=2*(O+1)-1,Ae=Q[ge],Ne=ge+1,be=Q[Ne];if(0>o(Ae,te))Ne<z&&0>o(be,Ae)?(Q[O]=be,Q[Ne]=te,O=Ne):(Q[O]=Ae,Q[ge]=te,O=ge);else if(Ne<z&&0>o(be,te))Q[O]=be,Q[Ne]=te,O=Ne;else break e}}return ue}function o(Q,ue){var te=Q.sortIndex-ue.sortIndex;return te!==0?te:Q.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,C=null,k=3,B=!1,G=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,Ie=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(Q){for(var ue=t(_);ue!==null;){if(ue.callback===null)s(_);else if(ue.startTime<=Q)s(_),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(_)}}function _e(Q){if(X=!1,me(Q),!G)if(t(g)!==null)G=!0,Z(je);else{var ue=t(_);ue!==null&&le(_e,ue.startTime-Q)}}function je(Q,ue){G=!1,X&&(X=!1,Ie(I),I=-1),B=!0;var te=k;try{for(me(ue),C=t(g);C!==null&&(!(C.expirationTime>ue)||Q&&!x());){var O=C.callback;if(typeof O=="function"){C.callback=null,k=C.priorityLevel;var z=O(C.expirationTime<=ue);ue=i.unstable_now(),typeof z=="function"?C.callback=z:C===t(g)&&s(g),me(ue)}else s(g);C=t(g)}if(C!==null)var ne=!0;else{var ge=t(_);ge!==null&&le(_e,ge.startTime-ue),ne=!1}return ne}finally{C=null,k=te,B=!1}}var Se=!1,D=null,I=-1,A=5,P=-1;function x(){return!(i.unstable_now()-P<A)}function L(){if(D!==null){var Q=i.unstable_now();P=Q;var ue=!0;try{ue=D(!0,Q)}finally{ue?S():(Se=!1,D=null)}}else Se=!1}var S;if(typeof ve=="function")S=function(){ve(L)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,dt=Ke.port2;Ke.port1.onmessage=L,S=function(){dt.postMessage(null)}}else S=function(){W(L,0)};function Z(Q){D=Q,Se||(Se=!0,S())}function le(Q,ue){I=W(function(){Q(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Q){Q.callback=null},i.unstable_continueExecution=function(){G||B||(G=!0,Z(je))},i.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Q?Math.floor(1e3/Q):5},i.unstable_getCurrentPriorityLevel=function(){return k},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Q){switch(k){case 1:case 2:case 3:var ue=3;break;default:ue=k}var te=k;k=ue;try{return Q()}finally{k=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Q,ue){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var te=k;k=Q;try{return ue()}finally{k=te}},i.unstable_scheduleCallback=function(Q,ue,te){var O=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?O+te:O):te=O,Q){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=te+z,Q={id:w++,callback:ue,priorityLevel:Q,startTime:te,expirationTime:z,sortIndex:-1},te>O?(Q.sortIndex=te,e(_,Q),t(g)===null&&Q===t(_)&&(X?(Ie(I),I=-1):X=!0,le(_e,te-O))):(Q.sortIndex=z,e(g,Q),G||B||(G=!0,Z(je))),Q},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(Q){var ue=k;return function(){var te=k;k=ue;try{return Q.apply(this,arguments)}finally{k=te}}}})(ed)),ed}var Km;function cw(){return Km||(Km=1,Zh.exports=uw()),Zh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function hw(){if(Qm)return Zt;Qm=1;var i=Hd(),e=cw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function k(n){return g.call(C,n)?!0:g.call(w,n)?!1:_.test(n)?C[n]=!0:(w[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function G(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ie=/[\-:]([a-z])/g;function ve(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Ie,ve);W[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Ie,ve);W[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Ie,ve);W[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(G(r,a,d,c)&&(a=null),c||d===null?k(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var _e=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Se=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),x=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),Q=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,O;function z(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ne=!1;function ge(n,r){if(!n||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,T=p.length-1;1<=v&&0<=T&&d[v]!==p[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==p[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==p[T]){var R=`
`+d[v].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=v&&0<=T);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?z(n):""}function Ae(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=ge(n.type,!1),n;case 11:return n=ge(n.type.render,!1),n;case 1:return n=ge(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Se:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Ke:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case L:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case dt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Z:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function be(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Et(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function lr(n){n._valueTracker||(n._valueTracker=Et(n))}function cs(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ii(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function hs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Fe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function xo(n,r){r=r.checked,r!=null&&me(n,"checked",r,!1)}function Oo(n,r){xo(n,r);var a=Fe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ds(n,r.type,a):r.hasOwnProperty("defaultValue")&&ds(n,r.type,Fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function il(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ds(n,r,a){(r!=="number"||Dr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ur=Array.isArray;function cr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Vo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function fs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(ur(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Fe(a)}}function ps(n,r){var a=Fe(r.value),c=Fe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Lo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ft(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ft(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hr,Mo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=hr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function xr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ai=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(n){Ai.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Si[r]=Si[n]})});function bo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Si.hasOwnProperty(n)&&Si[n]?(""+r).trim():r+"px"}function Fo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=bo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Uo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jo(n,r){if(r){if(Uo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function zo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function ms(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gs=null,cn=null,jn=null;function ys(n){if(n=ha(n)){if(typeof gs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Vl(r),gs(n.stateNode,n.type,r))}}function zn(n){cn?jn?jn.push(n):jn=[n]:cn=n}function Bo(){if(cn){var n=cn,r=jn;if(jn=cn=null,ys(n),r)for(n=0;n<r.length;n++)ys(r[n])}}function Ri(n,r){return n(r)}function $o(){}var dr=!1;function qo(n,r,a){if(dr)return n(r,a);dr=!0;try{return Ri(n,r,a)}finally{dr=!1,(cn!==null||jn!==null)&&($o(),Bo())}}function rt(n,r){var a=n.stateNode;if(a===null)return null;var c=Vl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var vs=!1;if(m)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){vs=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{vs=!1}function ki(n,r,a,c,d,p,v,T,R){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(H){this.onError(H)}}var Pi=!1,_s=null,In=!1,Ho=null,Sc={onError:function(n){Pi=!0,_s=n}};function Es(n,r,a,c,d,p,v,T,R){Pi=!1,_s=null,ki.apply(Sc,arguments)}function sl(n,r,a,c,d,p,v,T,R){if(Es.apply(this,arguments),Pi){if(Pi){var U=_s;Pi=!1,_s=null}else throw Error(t(198));In||(In=!0,Ho=U)}}function Sn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ni(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function ol(n){var r=n.alternate;if(!r){if(r=Sn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return An(d),n;if(p===c)return An(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=p;break}if(T===c){v=!0,c=d,a=p;break}T=T.sibling}if(!v){for(T=p.child;T;){if(T===a){v=!0,a=p,c=d;break}if(T===c){v=!0,c=p,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Wo(n){return n=ol(n),n!==null?ws(n):null}function ws(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ws(n);if(r!==null)return r;n=n.sibling}return null}var Ts=e.unstable_scheduleCallback,Go=e.unstable_cancelCallback,al=e.unstable_shouldYield,Ac=e.unstable_requestPaint,$e=e.unstable_now,ll=e.unstable_getCurrentPriorityLevel,Di=e.unstable_ImmediatePriority,Or=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,Ko=e.unstable_LowPriority,ul=e.unstable_IdlePriority,xi=null,nn=null;function cl(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(xi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:dl,Qo=Math.log,hl=Math.LN2;function dl(n){return n>>>=0,n===0?32:31-(Qo(n)/hl|0)|0}var Is=64,Ss=4194304;function Vr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Oi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Vr(T):(p&=v,p!==0&&(c=Vr(p)))}else v=a&~d,v!==0?c=Vr(v):p!==0&&(c=Vr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Bt(r),d=1<<a,c|=n[a],r&=~d;return c}function Cc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Bt(p),T=1<<v,R=d[v];R===-1?((T&a)===0||(T&c)!==0)&&(d[v]=Cc(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Vi(){var n=Is;return Is<<=1,(Is&4194240)===0&&(Is=64),n}function Lr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Mr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Bt(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function br(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function Fr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var fl,As,pl,ml,gl,Yo=!1,Bn=[],Rt=null,Cn=null,Rn=null,Ur=new Map,dn=new Map,$n=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yl(n,r){switch(n){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Ur.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(r.pointerId)}}function Wt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=ha(r),r!==null&&As(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function kc(n,r,a,c,d){switch(r){case"focusin":return Rt=Wt(Rt,n,r,a,c,d),!0;case"dragenter":return Cn=Wt(Cn,n,r,a,c,d),!0;case"mouseover":return Rn=Wt(Rn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Ur.set(p,Wt(Ur.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,dn.set(p,Wt(dn.get(p)||null,n,r,a,c,d)),!0}return!1}function vl(n){var r=Ui(n.target);if(r!==null){var a=Sn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ni(a),r!==null){n.blockedOn=r,gl(n.priority,function(){pl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Cs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ci=c,a.target.dispatchEvent(c),Ci=null}else return r=ha(a),r!==null&&As(r),n.blockedOn=a,!1;r.shift()}return!0}function Li(n,r,a){pr(n)&&a.delete(r)}function _l(){Yo=!1,Rt!==null&&pr(Rt)&&(Rt=null),Cn!==null&&pr(Cn)&&(Cn=null),Rn!==null&&pr(Rn)&&(Rn=null),Ur.forEach(Li),dn.forEach(Li)}function kn(n,r){n.blockedOn===r&&(n.blockedOn=null,Yo||(Yo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_l)))}function Pn(n){function r(d){return kn(d,n)}if(0<Bn.length){kn(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Rt!==null&&kn(Rt,n),Cn!==null&&kn(Cn,n),Rn!==null&&kn(Rn,n),Ur.forEach(r),dn.forEach(r),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)vl(a),a.blockedOn===null&&$n.shift()}var mr=_e.ReactCurrentBatchConfig,jr=!0;function Qe(n,r,a,c){var d=Pe,p=mr.transition;mr.transition=null;try{Pe=1,Jo(n,r,a,c)}finally{Pe=d,mr.transition=p}}function Pc(n,r,a,c){var d=Pe,p=mr.transition;mr.transition=null;try{Pe=4,Jo(n,r,a,c)}finally{Pe=d,mr.transition=p}}function Jo(n,r,a,c){if(jr){var d=Cs(n,r,a,c);if(d===null)jc(n,r,c,Mi,a),yl(n,c);else if(kc(d,n,r,a,c))c.stopPropagation();else if(yl(n,c),r&4&&-1<Rc.indexOf(n)){for(;d!==null;){var p=ha(d);if(p!==null&&fl(p),p=Cs(n,r,a,c),p===null&&jc(n,r,c,Mi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else jc(n,r,c,null,a)}}var Mi=null;function Cs(n,r,a,c){if(Mi=null,n=ms(c),n=Ui(n),n!==null)if(r=Sn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ni(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Mi=n,null}function Xo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ll()){case Di:return 1;case Or:return 4;case hn:case Ko:return 16;case ul:return 536870912;default:return 16}default:return 16}}var sn=null,Rs=null,Gt=null;function Zo(){if(Gt)return Gt;var n,r=Rs,a=r.length,c,d="value"in sn?sn.value:sn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function ks(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function ea(){return!1}function kt(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?qn:ea,this.isPropagationStopped=ea,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),r}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=kt(Nn),Hn=te({},Nn,{view:0,detail:0}),Nc=kt(Hn),Ns,gr,zr,bi=te({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zr&&(zr&&n.type==="mousemove"?(Ns=n.screenX-zr.screenX,gr=n.screenY-zr.screenY):gr=Ns=0,zr=n),Ns)},movementY:function(n){return"movementY"in n?n.movementY:gr}}),Ds=kt(bi),ta=te({},bi,{dataTransfer:0}),El=kt(ta),xs=te({},Hn,{relatedTarget:0}),Os=kt(xs),wl=te({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),yr=kt(wl),Tl=te({},Nn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Il=kt(Tl),Sl=te({},Nn,{data:0}),na=kt(Sl),Vs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Al={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Al[n])?!!r[n]:!1}function Wn(){return Cl}var l=te({},Hn,{key:function(n){if(n.key){var r=Vs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ks(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(n){return n.type==="keypress"?ks(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ks(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=kt(l),y=te({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=kt(y),M=te({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn}),j=kt(M),ee=te({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=kt(ee),mt=te({},bi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=kt(mt),wt=[9,13,27,32],at=m&&"CompositionEvent"in window,fn=null;m&&"documentMode"in document&&(fn=document.documentMode);var on=m&&"TextEvent"in window&&!fn,Fi=m&&(!at||fn&&8<fn&&11>=fn),Ls=" ",bf=!1;function Ff(n,r){switch(n){case"keyup":return wt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function nE(n,r){switch(n){case"compositionend":return Uf(r);case"keypress":return r.which!==32?null:(bf=!0,Ls);case"textInput":return n=r.data,n===Ls&&bf?null:n;default:return null}}function rE(n,r){if(Ms)return n==="compositionend"||!at&&Ff(n,r)?(n=Zo(),Gt=Rs=sn=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fi&&r.locale!=="ko"?null:r.data;default:return null}}var iE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!iE[n.type]:r==="textarea"}function zf(n,r,a,c){zn(c),r=Dl(r,"onChange"),0<r.length&&(a=new Ps("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ra=null,ia=null;function sE(n){sp(n,0)}function Rl(n){var r=zs(n);if(cs(r))return n}function oE(n,r){if(n==="change")return r}var Bf=!1;if(m){var Dc;if(m){var xc="oninput"in document;if(!xc){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),xc=typeof $f.oninput=="function"}Dc=xc}else Dc=!1;Bf=Dc&&(!document.documentMode||9<document.documentMode)}function qf(){ra&&(ra.detachEvent("onpropertychange",Hf),ia=ra=null)}function Hf(n){if(n.propertyName==="value"&&Rl(ia)){var r=[];zf(r,ia,n,ms(n)),qo(sE,r)}}function aE(n,r,a){n==="focusin"?(qf(),ra=r,ia=a,ra.attachEvent("onpropertychange",Hf)):n==="focusout"&&qf()}function lE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rl(ia)}function uE(n,r){if(n==="click")return Rl(r)}function cE(n,r){if(n==="input"||n==="change")return Rl(r)}function hE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Dn=typeof Object.is=="function"?Object.is:hE;function sa(n,r){if(Dn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Dn(n[d],r[d]))return!1}return!0}function Wf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gf(n,r){var a=Wf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wf(a)}}function Kf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Kf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Qf(){for(var n=window,r=Dr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Dr(n.document)}return r}function Oc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function dE(n){var r=Qf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Kf(a.ownerDocument.documentElement,a)){if(c!==null&&Oc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Gf(a,p);var v=Gf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fE=m&&"documentMode"in document&&11>=document.documentMode,bs=null,Vc=null,oa=null,Lc=!1;function Yf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lc||bs==null||bs!==Dr(c)||(c=bs,"selectionStart"in c&&Oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),oa&&sa(oa,c)||(oa=c,c=Dl(Vc,"onSelect"),0<c.length&&(r=new Ps("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=bs)))}function kl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Fs={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Mc={},Jf={};m&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Pl(n){if(Mc[n])return Mc[n];if(!Fs[n])return n;var r=Fs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Jf)return Mc[n]=r[a];return n}var Xf=Pl("animationend"),Zf=Pl("animationiteration"),ep=Pl("animationstart"),tp=Pl("transitionend"),np=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(n,r){np.set(n,r),u(r,[n])}for(var bc=0;bc<rp.length;bc++){var Fc=rp[bc],pE=Fc.toLowerCase(),mE=Fc[0].toUpperCase()+Fc.slice(1);Br(pE,"on"+mE)}Br(Xf,"onAnimationEnd"),Br(Zf,"onAnimationIteration"),Br(ep,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br(tp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gE=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function ip(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,sl(c,r,void 0,n),n.currentTarget=null}function sp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],R=T.instance,U=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;ip(d,T,U),p=R}else for(v=0;v<c.length;v++){if(T=c[v],R=T.instance,U=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;ip(d,T,U),p=R}}}if(In)throw n=Ho,In=!1,Ho=null,n}function We(n,r){var a=r[Wc];a===void 0&&(a=r[Wc]=new Set);var c=n+"__bubble";a.has(c)||(op(r,n,2,!1),a.add(c))}function Uc(n,r,a){var c=0;r&&(c|=4),op(a,n,c,r)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function la(n){if(!n[Nl]){n[Nl]=!0,s.forEach(function(a){a!=="selectionchange"&&(gE.has(a)||Uc(a,!1,n),Uc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Nl]||(r[Nl]=!0,Uc("selectionchange",!1,r))}}function op(n,r,a,c){switch(Xo(r)){case 1:var d=Qe;break;case 4:d=Pc;break;default:d=Jo}a=d.bind(null,r,a,n),d=void 0,!vs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function jc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;v=v.return}for(;T!==null;){if(v=Ui(T),v===null)return;if(R=v.tag,R===5||R===6){c=p=v;continue e}T=T.parentNode}}c=c.return}qo(function(){var U=p,H=ms(a),K=[];e:{var q=np.get(n);if(q!==void 0){var re=Ps,ae=n;switch(n){case"keypress":if(ks(a)===0)break e;case"keydown":case"keyup":re=f;break;case"focusin":ae="focus",re=Os;break;case"focusout":ae="blur",re=Os;break;case"beforeblur":case"afterblur":re=Os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=El;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=j;break;case Xf:case Zf:case ep:re=yr;break;case tp:re=Ue;break;case"scroll":re=Nc;break;case"wheel":re=De;break;case"copy":case"cut":case"paste":re=Il;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=E}var ce=(r&4)!==0,it=!ce&&n==="scroll",b=ce?q!==null?q+"Capture":null:q;ce=[];for(var N=U,F;N!==null;){F=N;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,b!==null&&(J=rt(N,b),J!=null&&ce.push(ua(N,J,F)))),it)break;N=N.return}0<ce.length&&(q=new re(q,ae,null,a,H),K.push({event:q,listeners:ce}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",q&&a!==Ci&&(ae=a.relatedTarget||a.fromElement)&&(Ui(ae)||ae[vr]))break e;if((re||q)&&(q=H.window===H?H:(q=H.ownerDocument)?q.defaultView||q.parentWindow:window,re?(ae=a.relatedTarget||a.toElement,re=U,ae=ae?Ui(ae):null,ae!==null&&(it=Sn(ae),ae!==it||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(re=null,ae=U),re!==ae)){if(ce=Ds,J="onMouseLeave",b="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ce=E,J="onPointerLeave",b="onPointerEnter",N="pointer"),it=re==null?q:zs(re),F=ae==null?q:zs(ae),q=new ce(J,N+"leave",re,a,H),q.target=it,q.relatedTarget=F,J=null,Ui(H)===U&&(ce=new ce(b,N+"enter",ae,a,H),ce.target=F,ce.relatedTarget=it,J=ce),it=J,re&&ae)t:{for(ce=re,b=ae,N=0,F=ce;F;F=Us(F))N++;for(F=0,J=b;J;J=Us(J))F++;for(;0<N-F;)ce=Us(ce),N--;for(;0<F-N;)b=Us(b),F--;for(;N--;){if(ce===b||b!==null&&ce===b.alternate)break t;ce=Us(ce),b=Us(b)}ce=null}else ce=null;re!==null&&ap(K,q,re,ce,!1),ae!==null&&it!==null&&ap(K,it,ae,ce,!0)}}e:{if(q=U?zs(U):window,re=q.nodeName&&q.nodeName.toLowerCase(),re==="select"||re==="input"&&q.type==="file")var he=oE;else if(jf(q))if(Bf)he=cE;else{he=lE;var fe=aE}else(re=q.nodeName)&&re.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(he=uE);if(he&&(he=he(n,U))){zf(K,he,a,H);break e}fe&&fe(n,q,U),n==="focusout"&&(fe=q._wrapperState)&&fe.controlled&&q.type==="number"&&ds(q,"number",q.value)}switch(fe=U?zs(U):window,n){case"focusin":(jf(fe)||fe.contentEditable==="true")&&(bs=fe,Vc=U,oa=null);break;case"focusout":oa=Vc=bs=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,Yf(K,a,H);break;case"selectionchange":if(fE)break;case"keydown":case"keyup":Yf(K,a,H)}var pe;if(at)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ms?Ff(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Fi&&a.locale!=="ko"&&(Ms||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ms&&(pe=Zo()):(sn=H,Rs="value"in sn?sn.value:sn.textContent,Ms=!0)),fe=Dl(U,Ee),0<fe.length&&(Ee=new na(Ee,n,null,a,H),K.push({event:Ee,listeners:fe}),pe?Ee.data=pe:(pe=Uf(a),pe!==null&&(Ee.data=pe)))),(pe=on?nE(n,a):rE(n,a))&&(U=Dl(U,"onBeforeInput"),0<U.length&&(H=new na("onBeforeInput","beforeinput",null,a,H),K.push({event:H,listeners:U}),H.data=pe))}sp(K,r)})}function ua(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Dl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=rt(n,a),p!=null&&c.unshift(ua(n,p,d)),p=rt(n,r),p!=null&&c.push(ua(n,p,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ap(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var T=a,R=T.alternate,U=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&U!==null&&(T=U,d?(R=rt(a,p),R!=null&&v.unshift(ua(a,R,T))):d||(R=rt(a,p),R!=null&&v.push(ua(a,R,T)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var yE=/\r\n?/g,vE=/\u0000|\uFFFD/g;function lp(n){return(typeof n=="string"?n:""+n).replace(yE,`
`).replace(vE,"")}function xl(n,r,a){if(r=lp(r),lp(n)!==r&&a)throw Error(t(425))}function Ol(){}var zc=null,Bc=null;function $c(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,_E=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,EE=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(n){return up.resolve(null).then(n).catch(wE)}:qc;function wE(n){setTimeout(function(){throw n})}function Hc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(r)}function $r(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function cp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),Gn="__reactFiber$"+js,ca="__reactProps$"+js,vr="__reactContainer$"+js,Wc="__reactEvents$"+js,TE="__reactListeners$"+js,IE="__reactHandles$"+js;function Ui(n){var r=n[Gn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[vr]||a[Gn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=cp(n);n!==null;){if(a=n[Gn])return a;n=cp(n)}return r}n=a,a=n.parentNode}return null}function ha(n){return n=n[Gn]||n[vr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vl(n){return n[ca]||null}var Gc=[],Bs=-1;function qr(n){return{current:n}}function Ge(n){0>Bs||(n.current=Gc[Bs],Gc[Bs]=null,Bs--)}function qe(n,r){Bs++,Gc[Bs]=n.current,n.current=r}var Hr={},Ot=qr(Hr),Kt=qr(!1),ji=Hr;function $s(n,r){var a=n.type.contextTypes;if(!a)return Hr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function Ll(){Ge(Kt),Ge(Ot)}function hp(n,r,a){if(Ot.current!==Hr)throw Error(t(168));qe(Ot,r),qe(Kt,a)}function dp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,be(n)||"Unknown",d));return te({},a,c)}function Ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Hr,ji=Ot.current,qe(Ot,n),qe(Kt,Kt.current),!0}function fp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=dp(n,r,ji),c.__reactInternalMemoizedMergedChildContext=n,Ge(Kt),Ge(Ot),qe(Ot,n)):Ge(Kt),qe(Kt,a)}var _r=null,bl=!1,Kc=!1;function pp(n){_r===null?_r=[n]:_r.push(n)}function SE(n){bl=!0,pp(n)}function Wr(){if(!Kc&&_r!==null){Kc=!0;var n=0,r=Pe;try{var a=_r;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}_r=null,bl=!1}catch(d){throw _r!==null&&(_r=_r.slice(n+1)),Ts(Di,Wr),d}finally{Pe=r,Kc=!1}}return null}var qs=[],Hs=0,Fl=null,Ul=0,pn=[],mn=0,zi=null,Er=1,wr="";function Bi(n,r){qs[Hs++]=Ul,qs[Hs++]=Fl,Fl=n,Ul=r}function mp(n,r,a){pn[mn++]=Er,pn[mn++]=wr,pn[mn++]=zi,zi=n;var c=Er;n=wr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var p=32-Bt(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Er=1<<32-Bt(r)+d|a<<d|c,wr=p+n}else Er=1<<p|a<<d|c,wr=n}function Qc(n){n.return!==null&&(Bi(n,1),mp(n,1,0))}function Yc(n){for(;n===Fl;)Fl=qs[--Hs],qs[Hs]=null,Ul=qs[--Hs],qs[Hs]=null;for(;n===zi;)zi=pn[--mn],pn[mn]=null,wr=pn[--mn],pn[mn]=null,Er=pn[--mn],pn[mn]=null}var an=null,ln=null,Ye=!1,xn=null;function gp(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function yp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,an=n,ln=$r(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,an=n,ln=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=zi!==null?{id:Er,overflow:wr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function Jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(Ye){var r=ln;if(r){var a=r;if(!yp(n,r)){if(Jc(n))throw Error(t(418));r=$r(a.nextSibling);var c=an;r&&yp(n,r)?gp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,an=n)}}else{if(Jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,an=n}}}function vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function jl(n){if(n!==an)return!1;if(!Ye)return vp(n),Ye=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!$c(n.type,n.memoizedProps)),r&&(r=ln)){if(Jc(n))throw _p(),Error(t(418));for(;r;)gp(n,r),r=$r(r.nextSibling)}if(vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){ln=$r(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}ln=null}}else ln=an?$r(n.stateNode.nextSibling):null;return!0}function _p(){for(var n=ln;n;)n=$r(n.nextSibling)}function Ws(){ln=an=null,Ye=!1}function Zc(n){xn===null?xn=[n]:xn.push(n)}var AE=_e.ReactCurrentBatchConfig;function da(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var T=d.refs;v===null?delete T[p]:T[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Ep(n){var r=n._init;return r(n._payload)}function wp(n){function r(b,N){if(n){var F=b.deletions;F===null?(b.deletions=[N],b.flags|=16):F.push(N)}}function a(b,N){if(!n)return null;for(;N!==null;)r(b,N),N=N.sibling;return null}function c(b,N){for(b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function d(b,N){return b=ei(b,N),b.index=0,b.sibling=null,b}function p(b,N,F){return b.index=F,n?(F=b.alternate,F!==null?(F=F.index,F<N?(b.flags|=2,N):F):(b.flags|=2,N)):(b.flags|=1048576,N)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function T(b,N,F,J){return N===null||N.tag!==6?(N=qh(F,b.mode,J),N.return=b,N):(N=d(N,F),N.return=b,N)}function R(b,N,F,J){var he=F.type;return he===D?H(b,N,F.props.children,J,F.key):N!==null&&(N.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Z&&Ep(he)===N.type)?(J=d(N,F.props),J.ref=da(b,N,F),J.return=b,J):(J=hu(F.type,F.key,F.props,null,b.mode,J),J.ref=da(b,N,F),J.return=b,J)}function U(b,N,F,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=Hh(F,b.mode,J),N.return=b,N):(N=d(N,F.children||[]),N.return=b,N)}function H(b,N,F,J,he){return N===null||N.tag!==7?(N=Yi(F,b.mode,J,he),N.return=b,N):(N=d(N,F),N.return=b,N)}function K(b,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=qh(""+N,b.mode,F),N.return=b,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case je:return F=hu(N.type,N.key,N.props,null,b.mode,F),F.ref=da(b,null,N),F.return=b,F;case Se:return N=Hh(N,b.mode,F),N.return=b,N;case Z:var J=N._init;return K(b,J(N._payload),F)}if(ur(N)||ue(N))return N=Yi(N,b.mode,F,null),N.return=b,N;zl(b,N)}return null}function q(b,N,F,J){var he=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:T(b,N,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case je:return F.key===he?R(b,N,F,J):null;case Se:return F.key===he?U(b,N,F,J):null;case Z:return he=F._init,q(b,N,he(F._payload),J)}if(ur(F)||ue(F))return he!==null?null:H(b,N,F,J,null);zl(b,F)}return null}function re(b,N,F,J,he){if(typeof J=="string"&&J!==""||typeof J=="number")return b=b.get(F)||null,T(N,b,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case je:return b=b.get(J.key===null?F:J.key)||null,R(N,b,J,he);case Se:return b=b.get(J.key===null?F:J.key)||null,U(N,b,J,he);case Z:var fe=J._init;return re(b,N,F,fe(J._payload),he)}if(ur(J)||ue(J))return b=b.get(F)||null,H(N,b,J,he,null);zl(N,J)}return null}function ae(b,N,F,J){for(var he=null,fe=null,pe=N,Ee=N=0,St=null;pe!==null&&Ee<F.length;Ee++){pe.index>Ee?(St=pe,pe=null):St=pe.sibling;var Me=q(b,pe,F[Ee],J);if(Me===null){pe===null&&(pe=St);break}n&&pe&&Me.alternate===null&&r(b,pe),N=p(Me,N,Ee),fe===null?he=Me:fe.sibling=Me,fe=Me,pe=St}if(Ee===F.length)return a(b,pe),Ye&&Bi(b,Ee),he;if(pe===null){for(;Ee<F.length;Ee++)pe=K(b,F[Ee],J),pe!==null&&(N=p(pe,N,Ee),fe===null?he=pe:fe.sibling=pe,fe=pe);return Ye&&Bi(b,Ee),he}for(pe=c(b,pe);Ee<F.length;Ee++)St=re(pe,b,Ee,F[Ee],J),St!==null&&(n&&St.alternate!==null&&pe.delete(St.key===null?Ee:St.key),N=p(St,N,Ee),fe===null?he=St:fe.sibling=St,fe=St);return n&&pe.forEach(function(ti){return r(b,ti)}),Ye&&Bi(b,Ee),he}function ce(b,N,F,J){var he=ue(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var fe=he=null,pe=N,Ee=N=0,St=null,Me=F.next();pe!==null&&!Me.done;Ee++,Me=F.next()){pe.index>Ee?(St=pe,pe=null):St=pe.sibling;var ti=q(b,pe,Me.value,J);if(ti===null){pe===null&&(pe=St);break}n&&pe&&ti.alternate===null&&r(b,pe),N=p(ti,N,Ee),fe===null?he=ti:fe.sibling=ti,fe=ti,pe=St}if(Me.done)return a(b,pe),Ye&&Bi(b,Ee),he;if(pe===null){for(;!Me.done;Ee++,Me=F.next())Me=K(b,Me.value,J),Me!==null&&(N=p(Me,N,Ee),fe===null?he=Me:fe.sibling=Me,fe=Me);return Ye&&Bi(b,Ee),he}for(pe=c(b,pe);!Me.done;Ee++,Me=F.next())Me=re(pe,b,Ee,Me.value,J),Me!==null&&(n&&Me.alternate!==null&&pe.delete(Me.key===null?Ee:Me.key),N=p(Me,N,Ee),fe===null?he=Me:fe.sibling=Me,fe=Me);return n&&pe.forEach(function(iw){return r(b,iw)}),Ye&&Bi(b,Ee),he}function it(b,N,F,J){if(typeof F=="object"&&F!==null&&F.type===D&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case je:e:{for(var he=F.key,fe=N;fe!==null;){if(fe.key===he){if(he=F.type,he===D){if(fe.tag===7){a(b,fe.sibling),N=d(fe,F.props.children),N.return=b,b=N;break e}}else if(fe.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Z&&Ep(he)===fe.type){a(b,fe.sibling),N=d(fe,F.props),N.ref=da(b,fe,F),N.return=b,b=N;break e}a(b,fe);break}else r(b,fe);fe=fe.sibling}F.type===D?(N=Yi(F.props.children,b.mode,J,F.key),N.return=b,b=N):(J=hu(F.type,F.key,F.props,null,b.mode,J),J.ref=da(b,N,F),J.return=b,b=J)}return v(b);case Se:e:{for(fe=F.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(b,N.sibling),N=d(N,F.children||[]),N.return=b,b=N;break e}else{a(b,N);break}else r(b,N);N=N.sibling}N=Hh(F,b.mode,J),N.return=b,b=N}return v(b);case Z:return fe=F._init,it(b,N,fe(F._payload),J)}if(ur(F))return ae(b,N,F,J);if(ue(F))return ce(b,N,F,J);zl(b,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(a(b,N.sibling),N=d(N,F),N.return=b,b=N):(a(b,N),N=qh(F,b.mode,J),N.return=b,b=N),v(b)):a(b,N)}return it}var Gs=wp(!0),Tp=wp(!1),Bl=qr(null),$l=null,Ks=null,eh=null;function th(){eh=Ks=$l=null}function nh(n){var r=Bl.current;Ge(Bl),n._currentValue=r}function rh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Qs(n,r){$l=n,eh=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Yt=!0),n.firstContext=null)}function gn(n){var r=n._currentValue;if(eh!==n)if(n={context:n,memoizedValue:r,next:null},Ks===null){if($l===null)throw Error(t(308));Ks=n,$l.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return r}var $i=null;function ih(n){$i===null?$i=[n]:$i.push(n)}function Ip(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,ih(r)):(a.next=d.next,d.next=a),r.interleaved=a,Tr(n,c)}function Tr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Gr=!1;function sh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Kr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Tr(n,a)}return d=c.interleaved,d===null?(r.next=r,ih(c)):(r.next=d.next,d.next=r),c.interleaved=r,Tr(n,a)}function ql(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,br(n,a)}}function Ap(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Hl(n,r,a,c){var d=n.updateQueue;Gr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,U=R.next;R.next=null,v===null?p=U:v.next=U,v=R;var H=n.alternate;H!==null&&(H=H.updateQueue,T=H.lastBaseUpdate,T!==v&&(T===null?H.firstBaseUpdate=U:T.next=U,H.lastBaseUpdate=R))}if(p!==null){var K=d.baseState;v=0,H=U=R=null,T=p;do{var q=T.lane,re=T.eventTime;if((c&q)===q){H!==null&&(H=H.next={eventTime:re,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ae=n,ce=T;switch(q=r,re=a,ce.tag){case 1:if(ae=ce.payload,typeof ae=="function"){K=ae.call(re,K,q);break e}K=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ce.payload,q=typeof ae=="function"?ae.call(re,K,q):ae,q==null)break e;K=te({},K,q);break e;case 2:Gr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else re={eventTime:re,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},H===null?(U=H=re,R=K):H=H.next=re,v|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(H===null&&(R=K),d.baseState=R,d.firstBaseUpdate=U,d.lastBaseUpdate=H,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Wi|=v,n.lanes=v,n.memoizedState=K}}function Cp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var fa={},Kn=qr(fa),pa=qr(fa),ma=qr(fa);function qi(n){if(n===fa)throw Error(t(174));return n}function oh(n,r){switch(qe(ma,r),qe(pa,n),qe(Kn,fa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:pt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=pt(r,n)}Ge(Kn),qe(Kn,r)}function Ys(){Ge(Kn),Ge(pa),Ge(ma)}function Rp(n){qi(ma.current);var r=qi(Kn.current),a=pt(r,n.type);r!==a&&(qe(pa,n),qe(Kn,a))}function ah(n){pa.current===n&&(Ge(Kn),Ge(pa))}var Ze=qr(0);function Wl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var lh=[];function uh(){for(var n=0;n<lh.length;n++)lh[n]._workInProgressVersionPrimary=null;lh.length=0}var Gl=_e.ReactCurrentDispatcher,ch=_e.ReactCurrentBatchConfig,Hi=0,et=null,gt=null,Tt=null,Kl=!1,ga=!1,ya=0,CE=0;function Vt(){throw Error(t(321))}function hh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Dn(n[a],r[a]))return!1;return!0}function dh(n,r,a,c,d,p){if(Hi=p,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Gl.current=n===null||n.memoizedState===null?NE:DE,n=a(c,d),ga){p=0;do{if(ga=!1,ya=0,25<=p)throw Error(t(301));p+=1,Tt=gt=null,r.updateQueue=null,Gl.current=xE,n=a(c,d)}while(ga)}if(Gl.current=Jl,r=gt!==null&&gt.next!==null,Hi=0,Tt=gt=et=null,Kl=!1,r)throw Error(t(300));return n}function fh(){var n=ya!==0;return ya=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?et.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function yn(){if(gt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var r=Tt===null?et.memoizedState:Tt.next;if(r!==null)Tt=r,gt=n;else{if(n===null)throw Error(t(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?et.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function va(n,r){return typeof r=="function"?r(n):r}function ph(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=gt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=v=null,R=null,U=p;do{var H=U.lane;if((Hi&H)===H)R!==null&&(R=R.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:H,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};R===null?(T=R=K,v=c):R=R.next=K,et.lanes|=H,Wi|=H}U=U.next}while(U!==null&&U!==p);R===null?v=c:R.next=T,Dn(c,r.memoizedState)||(Yt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,et.lanes|=p,Wi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function mh(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Dn(p,r.memoizedState)||(Yt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function kp(){}function Pp(n,r){var a=et,c=yn(),d=r(),p=!Dn(c.memoizedState,d);if(p&&(c.memoizedState=d,Yt=!0),c=c.queue,gh(xp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,_a(9,Dp.bind(null,a,c,d,r),void 0,null),It===null)throw Error(t(349));(Hi&30)!==0||Np(a,r,d)}return d}function Np(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Dp(n,r,a,c){r.value=a,r.getSnapshot=c,Op(r)&&Vp(n)}function xp(n,r,a){return a(function(){Op(r)&&Vp(n)})}function Op(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Dn(n,a)}catch{return!0}}function Vp(n){var r=Tr(n,1);r!==null&&Mn(r,n,1,-1)}function Lp(n){var r=Qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:n},r.queue=n,n=n.dispatch=PE.bind(null,et,n),[r.memoizedState,n]}function _a(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Mp(){return yn().memoizedState}function Ql(n,r,a,c){var d=Qn();et.flags|=n,d.memoizedState=_a(1|r,a,void 0,c===void 0?null:c)}function Yl(n,r,a,c){var d=yn();c=c===void 0?null:c;var p=void 0;if(gt!==null){var v=gt.memoizedState;if(p=v.destroy,c!==null&&hh(c,v.deps)){d.memoizedState=_a(r,a,p,c);return}}et.flags|=n,d.memoizedState=_a(1|r,a,p,c)}function bp(n,r){return Ql(8390656,8,n,r)}function gh(n,r){return Yl(2048,8,n,r)}function Fp(n,r){return Yl(4,2,n,r)}function Up(n,r){return Yl(4,4,n,r)}function jp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function zp(n,r,a){return a=a!=null?a.concat([n]):null,Yl(4,4,jp.bind(null,r,n),a)}function yh(){}function Bp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&hh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function $p(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&hh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function qp(n,r,a){return(Hi&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a):(Dn(a,r)||(a=Vi(),et.lanes|=a,Wi|=a,n.baseState=!0),r)}function RE(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=ch.transition;ch.transition={};try{n(!1),r()}finally{Pe=a,ch.transition=c}}function Hp(){return yn().memoizedState}function kE(n,r,a){var c=Xr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Wp(n))Gp(r,a);else if(a=Ip(n,r,a,c),a!==null){var d=Ht();Mn(a,n,c,d),Kp(a,r,c)}}function PE(n,r,a){var c=Xr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wp(n))Gp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,T=p(v,a);if(d.hasEagerState=!0,d.eagerState=T,Dn(T,v)){var R=r.interleaved;R===null?(d.next=d,ih(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=Ip(n,r,d,c),a!==null&&(d=Ht(),Mn(a,n,c,d),Kp(a,r,c))}}function Wp(n){var r=n.alternate;return n===et||r!==null&&r===et}function Gp(n,r){ga=Kl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Kp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,br(n,a)}}var Jl={readContext:gn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},NE={readContext:gn,useCallback:function(n,r){return Qn().memoizedState=[n,r===void 0?null:r],n},useContext:gn,useEffect:bp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ql(4194308,4,jp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ql(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ql(4,2,n,r)},useMemo:function(n,r){var a=Qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=kE.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var r=Qn();return n={current:n},r.memoizedState=n},useState:Lp,useDebugValue:yh,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Lp(!1),r=n[0];return n=RE.bind(null,n[1]),Qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=et,d=Qn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),It===null)throw Error(t(349));(Hi&30)!==0||Np(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,bp(xp.bind(null,c,p,n),[n]),c.flags|=2048,_a(9,Dp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Qn(),r=It.identifierPrefix;if(Ye){var a=wr,c=Er;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ya++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=CE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},DE={readContext:gn,useCallback:Bp,useContext:gn,useEffect:gh,useImperativeHandle:zp,useInsertionEffect:Fp,useLayoutEffect:Up,useMemo:$p,useReducer:ph,useRef:Mp,useState:function(){return ph(va)},useDebugValue:yh,useDeferredValue:function(n){var r=yn();return qp(r,gt.memoizedState,n)},useTransition:function(){var n=ph(va)[0],r=yn().memoizedState;return[n,r]},useMutableSource:kp,useSyncExternalStore:Pp,useId:Hp,unstable_isNewReconciler:!1},xE={readContext:gn,useCallback:Bp,useContext:gn,useEffect:gh,useImperativeHandle:zp,useInsertionEffect:Fp,useLayoutEffect:Up,useMemo:$p,useReducer:mh,useRef:Mp,useState:function(){return mh(va)},useDebugValue:yh,useDeferredValue:function(n){var r=yn();return gt===null?r.memoizedState=n:qp(r,gt.memoizedState,n)},useTransition:function(){var n=mh(va)[0],r=yn().memoizedState;return[n,r]},useMutableSource:kp,useSyncExternalStore:Pp,useId:Hp,unstable_isNewReconciler:!1};function On(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function vh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xl={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=Xr(n),p=Ir(c,d);p.payload=r,a!=null&&(p.callback=a),r=Kr(n,p,d),r!==null&&(Mn(r,n,d,c),ql(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=Xr(n),p=Ir(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Kr(n,p,d),r!==null&&(Mn(r,n,d,c),ql(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Ht(),c=Xr(n),d=Ir(a,c);d.tag=2,r!=null&&(d.callback=r),r=Kr(n,d,c),r!==null&&(Mn(r,n,c,a),ql(r,n,c))}};function Qp(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!sa(a,c)||!sa(d,p):!0}function Yp(n,r,a){var c=!1,d=Hr,p=r.contextType;return typeof p=="object"&&p!==null?p=gn(p):(d=Qt(r)?ji:Ot.current,c=r.contextTypes,p=(c=c!=null)?$s(n,d):Hr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Jp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Xl.enqueueReplaceState(r,r.state,null)}function _h(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},sh(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=gn(p):(p=Qt(r)?ji:Ot.current,d.context=$s(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(vh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Xl.enqueueReplaceState(d,d.state,null),Hl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Js(n,r){try{var a="",c=r;do a+=Ae(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Eh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function wh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var OE=typeof WeakMap=="function"?WeakMap:Map;function Xp(n,r,a){a=Ir(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){su||(su=!0,Mh=c),wh(n,r)},a}function Zp(n,r,a){a=Ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){wh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){wh(n,r),typeof c!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function em(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new OE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=GE.bind(null,n,r,a),r.then(n,n))}function tm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function nm(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ir(-1,1),r.tag=2,Kr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var VE=_e.ReactCurrentOwner,Yt=!1;function qt(n,r,a,c){r.child=n===null?Tp(r,null,a,c):Gs(r,n.child,a,c)}function rm(n,r,a,c,d){a=a.render;var p=r.ref;return Qs(r,d),c=dh(n,r,a,c,p,d),a=fh(),n!==null&&!Yt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Ye&&a&&Qc(r),r.flags|=1,qt(n,r,c,d),r.child)}function im(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!$h(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,sm(n,r,p,c,d)):(n=hu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:sa,a(v,c)&&n.ref===r.ref)return Sr(n,r,d)}return r.flags|=1,n=ei(p,c),n.ref=r.ref,n.return=r,r.child=n}function sm(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(sa(p,c)&&n.ref===r.ref)if(Yt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yt=!0);else return r.lanes=n.lanes,Sr(n,r,d)}return Th(n,r,a,c,d)}function om(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Zs,un),un|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(Zs,un),un|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,qe(Zs,un),un|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,qe(Zs,un),un|=c;return qt(n,r,d,a),r.child}function am(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Th(n,r,a,c,d){var p=Qt(a)?ji:Ot.current;return p=$s(r,p),Qs(r,d),a=dh(n,r,a,c,p,d),c=fh(),n!==null&&!Yt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Ye&&c&&Qc(r),r.flags|=1,qt(n,r,a,d),r.child)}function lm(n,r,a,c,d){if(Qt(a)){var p=!0;Ml(r)}else p=!1;if(Qs(r,d),r.stateNode===null)eu(n,r),Yp(r,a,c),_h(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var R=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=gn(U):(U=Qt(a)?ji:Ot.current,U=$s(r,U));var H=a.getDerivedStateFromProps,K=typeof H=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||R!==U)&&Jp(r,v,c,U),Gr=!1;var q=r.memoizedState;v.state=q,Hl(r,c,v,d),R=r.memoizedState,T!==c||q!==R||Kt.current||Gr?(typeof H=="function"&&(vh(r,a,H,c),R=r.memoizedState),(T=Gr||Qp(r,a,T,c,q,R,U))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),v.props=c,v.state=R,v.context=U,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,Sp(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:On(r.type,T),v.props=U,K=r.pendingProps,q=v.context,R=a.contextType,typeof R=="object"&&R!==null?R=gn(R):(R=Qt(a)?ji:Ot.current,R=$s(r,R));var re=a.getDerivedStateFromProps;(H=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==K||q!==R)&&Jp(r,v,c,R),Gr=!1,q=r.memoizedState,v.state=q,Hl(r,c,v,d);var ae=r.memoizedState;T!==K||q!==ae||Kt.current||Gr?(typeof re=="function"&&(vh(r,a,re,c),ae=r.memoizedState),(U=Gr||Qp(r,a,U,c,q,ae,R)||!1)?(H||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,R),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,R)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ae),v.props=c,v.state=ae,v.context=R,c=U):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return Ih(n,r,a,c,p,d)}function Ih(n,r,a,c,d,p){am(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&fp(r,a,!1),Sr(n,r,p);c=r.stateNode,VE.current=r;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Gs(r,n.child,null,p),r.child=Gs(r,null,T,p)):qt(n,r,T,p),r.memoizedState=c.state,d&&fp(r,a,!0),r.child}function um(n){var r=n.stateNode;r.pendingContext?hp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&hp(n,r.context,!1),oh(n,r.containerInfo)}function cm(n,r,a,c,d){return Ws(),Zc(d),r.flags|=256,qt(n,r,a,c),r.child}var Sh={dehydrated:null,treeContext:null,retryLane:0};function Ah(n){return{baseLanes:n,cachePool:null,transitions:null}}function hm(n,r,a){var c=r.pendingProps,d=Ze.current,p=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Ze,d&1),n===null)return Xc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=du(v,c,0,null),n=Yi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Ah(a),r.memoizedState=Sh,n):Ch(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return LE(n,r,v,c,T,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=ei(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=ei(T,p):(p=Yi(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?Ah(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=Sh,c}return p=n.child,n=p.sibling,c=ei(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Ch(n,r){return r=du({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Zl(n,r,a,c){return c!==null&&Zc(c),Gs(r,n.child,null,a),n=Ch(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function LE(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=Eh(Error(t(422))),Zl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=du({mode:"visible",children:c.children},d,0,null),p=Yi(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Gs(r,n.child,null,v),r.child.memoizedState=Ah(v),r.memoizedState=Sh,p);if((r.mode&1)===0)return Zl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Eh(p,c,void 0),Zl(n,r,v,c)}if(T=(v&n.childLanes)!==0,Yt||T){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Tr(n,d),Mn(c,n,d,-1))}return Bh(),c=Eh(Error(t(421))),Zl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=KE.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,ln=$r(d.nextSibling),an=r,Ye=!0,xn=null,n!==null&&(pn[mn++]=Er,pn[mn++]=wr,pn[mn++]=zi,Er=n.id,wr=n.overflow,zi=r),r=Ch(r,c.children),r.flags|=4096,r)}function dm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),rh(n.return,r,a)}function Rh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function fm(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(qt(n,r,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dm(n,a,r);else if(n.tag===19)dm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Ze,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Wl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Rh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Wl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Rh(r,!0,a,null,p);break;case"together":Rh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function eu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Sr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Wi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ei(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ei(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function ME(n,r,a){switch(r.tag){case 3:um(r),Ws();break;case 5:Rp(r);break;case 1:Qt(r.type)&&Ml(r);break;case 4:oh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(Bl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ze,Ze.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?hm(n,r,a):(qe(Ze,Ze.current&1),n=Sr(n,r,a),n!==null?n.sibling:null);qe(Ze,Ze.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return fm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ze,Ze.current),c)break;return null;case 22:case 23:return r.lanes=0,om(n,r,a)}return Sr(n,r,a)}var pm,kh,mm,gm;pm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},kh=function(){},mm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,qi(Kn.current);var p=null;switch(a){case"input":d=Ii(n,d),c=Ii(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=Vo(n,d),c=Vo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ol)}jo(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var R=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&R!==T&&(R!=null||T!=null))if(U==="style")if(T){for(v in T)!T.hasOwnProperty(v)||R&&R.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in R)R.hasOwnProperty(v)&&T[v]!==R[v]&&(a||(a={}),a[v]=R[v])}else a||(p||(p=[]),p.push(U,a)),a=R;else U==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(U,R)):U==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(U,""+R):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(R!=null&&U==="onScroll"&&We("scroll",n),p||T===R||(p=[])):(p=p||[]).push(U,R))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},gm=function(n,r,a,c){a!==c&&(r.flags|=4)};function Ea(n,r){if(!Ye)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function bE(n,r,a){var c=r.pendingProps;switch(Yc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(r),null;case 1:return Qt(r.type)&&Ll(),Lt(r),null;case 3:return c=r.stateNode,Ys(),Ge(Kt),Ge(Ot),uh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(jl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,xn!==null&&(Uh(xn),xn=null))),kh(n,r),Lt(r),null;case 5:ah(r);var d=qi(ma.current);if(a=r.type,n!==null&&r.stateNode!=null)mm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Lt(r),null}if(n=qi(Kn.current),jl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Gn]=r,c[ca]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<aa.length;d++)We(aa[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":hs(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":fs(c,p),We("invalid",c)}jo(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var T=p[v];v==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&xl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&xl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":lr(c),il(c,p,!0);break;case"textarea":lr(c),Lo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ol)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ft(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Gn]=r,n[ca]=c,pm(n,r,!1,!1),r.stateNode=n;e:{switch(v=zo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<aa.length;d++)We(aa[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":hs(n,c),d=Ii(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),We("invalid",n);break;case"textarea":fs(n,c),d=Vo(n,c),We("invalid",n);break;default:d=c}jo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?Fo(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Mo(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&xr(n,R):typeof R=="number"&&xr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&We("scroll",n):R!=null&&me(n,p,R,v))}switch(a){case"input":lr(n),il(n,c,!1);break;case"textarea":lr(n),Lo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?cr(n,!!c.multiple,p,!1):c.defaultValue!=null&&cr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ol)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Lt(r),null;case 6:if(n&&r.stateNode!=null)gm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=qi(ma.current),qi(Kn.current),jl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Gn]=r,(p=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:xl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=r,r.stateNode=c}return Lt(r),null;case 13:if(Ge(Ze),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&ln!==null&&(r.mode&1)!==0&&(r.flags&128)===0)_p(),Ws(),r.flags|=98560,p=!1;else if(p=jl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Gn]=r}else Ws(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Lt(r),p=!1}else xn!==null&&(Uh(xn),xn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ze.current&1)!==0?yt===0&&(yt=3):Bh())),r.updateQueue!==null&&(r.flags|=4),Lt(r),null);case 4:return Ys(),kh(n,r),n===null&&la(r.stateNode.containerInfo),Lt(r),null;case 10:return nh(r.type._context),Lt(r),null;case 17:return Qt(r.type)&&Ll(),Lt(r),null;case 19:if(Ge(Ze),p=r.memoizedState,p===null)return Lt(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)Ea(p,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Wl(n),v!==null){for(r.flags|=128,Ea(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Ze,Ze.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>eo&&(r.flags|=128,c=!0,Ea(p,!1),r.lanes=4194304)}else{if(!c)if(n=Wl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ea(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ye)return Lt(r),null}else 2*$e()-p.renderingStartTime>eo&&a!==1073741824&&(r.flags|=128,c=!0,Ea(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Ze.current,qe(Ze,c?a&1|2:a&1),r):(Lt(r),null);case 22:case 23:return zh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(un&1073741824)!==0&&(Lt(r),r.subtreeFlags&6&&(r.flags|=8192)):Lt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function FE(n,r){switch(Yc(r),r.tag){case 1:return Qt(r.type)&&Ll(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ys(),Ge(Kt),Ge(Ot),uh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ah(r),null;case 13:if(Ge(Ze),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ge(Ze),null;case 4:return Ys(),null;case 10:return nh(r.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var tu=!1,Mt=!1,UE=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Xs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,r,c)}else a.current=null}function Ph(n,r,a){try{a()}catch(c){nt(n,r,c)}}var ym=!1;function jE(n,r){if(zc=jr,n=Qf(),Oc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,T=-1,R=-1,U=0,H=0,K=n,q=null;t:for(;;){for(var re;K!==a||d!==0&&K.nodeType!==3||(T=v+d),K!==p||c!==0&&K.nodeType!==3||(R=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(re=K.firstChild)!==null;)q=K,K=re;for(;;){if(K===n)break t;if(q===a&&++U===d&&(T=v),q===p&&++H===c&&(R=v),(re=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=re}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:n,selectionRange:a},jr=!1,oe=r;oe!==null;)if(r=oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,oe=n;else for(;oe!==null;){r=oe;try{var ae=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var ce=ae.memoizedProps,it=ae.memoizedState,b=r.stateNode,N=b.getSnapshotBeforeUpdate(r.elementType===r.type?ce:On(r.type,ce),it);b.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){nt(r,r.return,J)}if(n=r.sibling,n!==null){n.return=r.return,oe=n;break}oe=r.return}return ae=ym,ym=!1,ae}function wa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ph(r,a,p)}d=d.next}while(d!==c)}}function nu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Nh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function vm(n){var r=n.alternate;r!==null&&(n.alternate=null,vm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gn],delete r[ca],delete r[Wc],delete r[TE],delete r[IE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _m(n){return n.tag===5||n.tag===3||n.tag===4}function Em(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_m(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Dh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Ol));else if(c!==4&&(n=n.child,n!==null))for(Dh(n,r,a),n=n.sibling;n!==null;)Dh(n,r,a),n=n.sibling}function xh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(xh(n,r,a),n=n.sibling;n!==null;)xh(n,r,a),n=n.sibling}var Pt=null,Vn=!1;function Qr(n,r,a){for(a=a.child;a!==null;)wm(n,r,a),a=a.sibling}function wm(n,r,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(xi,a)}catch{}switch(a.tag){case 5:Mt||Xs(a,r);case 6:var c=Pt,d=Vn;Pt=null,Qr(n,r,a),Pt=c,Vn=d,Pt!==null&&(Vn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Vn?(n=Pt,a=a.stateNode,n.nodeType===8?Hc(n.parentNode,a):n.nodeType===1&&Hc(n,a),Pn(n)):Hc(Pt,a.stateNode));break;case 4:c=Pt,d=Vn,Pt=a.stateNode.containerInfo,Vn=!0,Qr(n,r,a),Pt=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Ph(a,r,v),d=d.next}while(d!==c)}Qr(n,r,a);break;case 1:if(!Mt&&(Xs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){nt(a,r,T)}Qr(n,r,a);break;case 21:Qr(n,r,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,Qr(n,r,a),Mt=c):Qr(n,r,a);break;default:Qr(n,r,a)}}function Tm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new UE),r.forEach(function(c){var d=QE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:Pt=T.stateNode,Vn=!1;break e;case 3:Pt=T.stateNode.containerInfo,Vn=!0;break e;case 4:Pt=T.stateNode.containerInfo,Vn=!0;break e}T=T.return}if(Pt===null)throw Error(t(160));wm(p,v,d),Pt=null,Vn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(U){nt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Im(r,n),r=r.sibling}function Im(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(r,n),Yn(n),c&4){try{wa(3,n,n.return),nu(3,n)}catch(ce){nt(n,n.return,ce)}try{wa(5,n,n.return)}catch(ce){nt(n,n.return,ce)}}break;case 1:Ln(r,n),Yn(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(Ln(r,n),Yn(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var d=n.stateNode;try{xr(d,"")}catch(ce){nt(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&xo(d,p),zo(T,v);var U=zo(T,p);for(v=0;v<R.length;v+=2){var H=R[v],K=R[v+1];H==="style"?Fo(d,K):H==="dangerouslySetInnerHTML"?Mo(d,K):H==="children"?xr(d,K):me(d,H,K,U)}switch(T){case"input":Oo(d,p);break;case"textarea":ps(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?cr(d,!!p.multiple,re,!1):q!==!!p.multiple&&(p.defaultValue!=null?cr(d,!!p.multiple,p.defaultValue,!0):cr(d,!!p.multiple,p.multiple?[]:"",!1))}d[ca]=p}catch(ce){nt(n,n.return,ce)}}break;case 6:if(Ln(r,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ce){nt(n,n.return,ce)}}break;case 3:if(Ln(r,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(ce){nt(n,n.return,ce)}break;case 4:Ln(r,n),Yn(n);break;case 13:Ln(r,n),Yn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Lh=$e())),c&4&&Tm(n);break;case 22:if(H=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(U=Mt)||H,Ln(r,n),Mt=U):Ln(r,n),Yn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!H&&(n.mode&1)!==0)for(oe=n,H=n.child;H!==null;){for(K=oe=H;oe!==null;){switch(q=oe,re=q.child,q.tag){case 0:case 11:case 14:case 15:wa(4,q,q.return);break;case 1:Xs(q,q.return);var ae=q.stateNode;if(typeof ae.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,ae.props=r.memoizedProps,ae.state=r.memoizedState,ae.componentWillUnmount()}catch(ce){nt(c,a,ce)}}break;case 5:Xs(q,q.return);break;case 22:if(q.memoizedState!==null){Cm(K);continue}}re!==null?(re.return=q,oe=re):Cm(K)}H=H.sibling}e:for(H=null,K=n;;){if(K.tag===5){if(H===null){H=K;try{d=K.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=K.stateNode,R=K.memoizedProps.style,v=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=bo("display",v))}catch(ce){nt(n,n.return,ce)}}}else if(K.tag===6){if(H===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(ce){nt(n,n.return,ce)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;H===K&&(H=null),K=K.return}H===K&&(H=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Ln(r,n),Yn(n),c&4&&Tm(n);break;case 21:break;default:Ln(r,n),Yn(n)}}function Yn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(_m(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xr(d,""),c.flags&=-33);var p=Em(n);xh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=Em(n);Dh(n,T,v);break;default:throw Error(t(161))}}catch(R){nt(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function zE(n,r,a){oe=n,Sm(n)}function Sm(n,r,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||tu;if(!v){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Mt;T=tu;var U=Mt;if(tu=v,(Mt=R)&&!U)for(oe=d;oe!==null;)v=oe,R=v.child,v.tag===22&&v.memoizedState!==null?Rm(d):R!==null?(R.return=v,oe=R):Rm(d);for(;p!==null;)oe=p,Sm(p),p=p.sibling;oe=d,tu=T,Mt=U}Am(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,oe=p):Am(n)}}function Am(n){for(;oe!==null;){var r=oe;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mt||nu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:On(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Cp(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Cp(r,v,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var H=U.memoizedState;if(H!==null){var K=H.dehydrated;K!==null&&Pn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||r.flags&512&&Nh(r)}catch(q){nt(r,r.return,q)}}if(r===n){oe=null;break}if(a=r.sibling,a!==null){a.return=r.return,oe=a;break}oe=r.return}}function Cm(n){for(;oe!==null;){var r=oe;if(r===n){oe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,oe=a;break}oe=r.return}}function Rm(n){for(;oe!==null;){var r=oe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{nu(4,r)}catch(R){nt(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){nt(r,d,R)}}var p=r.return;try{Nh(r)}catch(R){nt(r,p,R)}break;case 5:var v=r.return;try{Nh(r)}catch(R){nt(r,v,R)}}}catch(R){nt(r,r.return,R)}if(r===n){oe=null;break}var T=r.sibling;if(T!==null){T.return=r.return,oe=T;break}oe=r.return}}var BE=Math.ceil,ru=_e.ReactCurrentDispatcher,Oh=_e.ReactCurrentOwner,vn=_e.ReactCurrentBatchConfig,Ve=0,It=null,lt=null,Nt=0,un=0,Zs=qr(0),yt=0,Ta=null,Wi=0,iu=0,Vh=0,Ia=null,Jt=null,Lh=0,eo=1/0,Ar=null,su=!1,Mh=null,Yr=null,ou=!1,Jr=null,au=0,Sa=0,bh=null,lu=-1,uu=0;function Ht(){return(Ve&6)!==0?$e():lu!==-1?lu:lu=$e()}function Xr(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Nt!==0?Nt&-Nt:AE.transition!==null?(uu===0&&(uu=Vi()),uu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Xo(n.type)),n)}function Mn(n,r,a,c){if(50<Sa)throw Sa=0,bh=null,Error(t(185));Mr(n,a,c),((Ve&2)===0||n!==It)&&(n===It&&((Ve&2)===0&&(iu|=a),yt===4&&Zr(n,Nt)),Xt(n,c),a===1&&Ve===0&&(r.mode&1)===0&&(eo=$e()+500,bl&&Wr()))}function Xt(n,r){var a=n.callbackNode;fr(n,r);var c=Oi(n,n===It?Nt:0);if(c===0)a!==null&&Go(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Go(a),r===1)n.tag===0?SE(Pm.bind(null,n)):pp(Pm.bind(null,n)),EE(function(){(Ve&6)===0&&Wr()}),a=null;else{switch(Fr(c)){case 1:a=Di;break;case 4:a=Or;break;case 16:a=hn;break;case 536870912:a=ul;break;default:a=hn}a=bm(a,km.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function km(n,r){if(lu=-1,uu=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(to()&&n.callbackNode!==a)return null;var c=Oi(n,n===It?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=cu(n,c);else{r=c;var d=Ve;Ve|=2;var p=Dm();(It!==n||Nt!==r)&&(Ar=null,eo=$e()+500,Ki(n,r));do try{HE();break}catch(T){Nm(n,T)}while(!0);th(),ru.current=p,Ve=d,lt!==null?r=0:(It=null,Nt=0,r=yt)}if(r!==0){if(r===2&&(d=rn(n),d!==0&&(c=d,r=Fh(n,d))),r===1)throw a=Ta,Ki(n,0),Zr(n,c),Xt(n,$e()),a;if(r===6)Zr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!$E(d)&&(r=cu(n,c),r===2&&(p=rn(n),p!==0&&(c=p,r=Fh(n,p))),r===1))throw a=Ta,Ki(n,0),Zr(n,c),Xt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Qi(n,Jt,Ar);break;case 3:if(Zr(n,c),(c&130023424)===c&&(r=Lh+500-$e(),10<r)){if(Oi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=qc(Qi.bind(null,n,Jt,Ar),r);break}Qi(n,Jt,Ar);break;case 4:if(Zr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*BE(c/1960))-c,10<c){n.timeoutHandle=qc(Qi.bind(null,n,Jt,Ar),c);break}Qi(n,Jt,Ar);break;case 5:Qi(n,Jt,Ar);break;default:throw Error(t(329))}}}return Xt(n,$e()),n.callbackNode===a?km.bind(null,n):null}function Fh(n,r){var a=Ia;return n.current.memoizedState.isDehydrated&&(Ki(n,r).flags|=256),n=cu(n,r),n!==2&&(r=Jt,Jt=a,r!==null&&Uh(r)),n}function Uh(n){Jt===null?Jt=n:Jt.push.apply(Jt,n)}function $E(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Dn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zr(n,r){for(r&=~Vh,r&=~iu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Bt(r),c=1<<a;n[a]=-1,r&=~c}}function Pm(n){if((Ve&6)!==0)throw Error(t(327));to();var r=Oi(n,0);if((r&1)===0)return Xt(n,$e()),null;var a=cu(n,r);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(r=c,a=Fh(n,c))}if(a===1)throw a=Ta,Ki(n,0),Zr(n,r),Xt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Qi(n,Jt,Ar),Xt(n,$e()),null}function jh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(eo=$e()+500,bl&&Wr())}}function Gi(n){Jr!==null&&Jr.tag===0&&(Ve&6)===0&&to();var r=Ve;Ve|=1;var a=vn.transition,c=Pe;try{if(vn.transition=null,Pe=1,n)return n()}finally{Pe=c,vn.transition=a,Ve=r,(Ve&6)===0&&Wr()}}function zh(){un=Zs.current,Ge(Zs)}function Ki(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,_E(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(Yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ll();break;case 3:Ys(),Ge(Kt),Ge(Ot),uh();break;case 5:ah(c);break;case 4:Ys();break;case 13:Ge(Ze);break;case 19:Ge(Ze);break;case 10:nh(c.type._context);break;case 22:case 23:zh()}a=a.return}if(It=n,lt=n=ei(n.current,null),Nt=un=r,yt=0,Ta=null,Vh=iu=Wi=0,Jt=Ia=null,$i!==null){for(r=0;r<$i.length;r++)if(a=$i[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}$i=null}return n}function Nm(n,r){do{var a=lt;try{if(th(),Gl.current=Jl,Kl){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Kl=!1}if(Hi=0,Tt=gt=et=null,ga=!1,ya=0,Oh.current=null,a===null||a.return===null){yt=1,Ta=r,lt=null;break}e:{var p=n,v=a.return,T=a,R=r;if(r=Nt,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var U=R,H=T,K=H.tag;if((H.mode&1)===0&&(K===0||K===11||K===15)){var q=H.alternate;q?(H.updateQueue=q.updateQueue,H.memoizedState=q.memoizedState,H.lanes=q.lanes):(H.updateQueue=null,H.memoizedState=null)}var re=tm(v);if(re!==null){re.flags&=-257,nm(re,v,T,p,r),re.mode&1&&em(p,U,r),r=re,R=U;var ae=r.updateQueue;if(ae===null){var ce=new Set;ce.add(R),r.updateQueue=ce}else ae.add(R);break e}else{if((r&1)===0){em(p,U,r),Bh();break e}R=Error(t(426))}}else if(Ye&&T.mode&1){var it=tm(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),nm(it,v,T,p,r),Zc(Js(R,T));break e}}p=R=Js(R,T),yt!==4&&(yt=2),Ia===null?Ia=[p]:Ia.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var b=Xp(p,R,r);Ap(p,b);break e;case 1:T=R;var N=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Yr===null||!Yr.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var J=Zp(p,T,r);Ap(p,J);break e}}p=p.return}while(p!==null)}Om(a)}catch(he){r=he,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function Dm(){var n=ru.current;return ru.current=Jl,n===null?Jl:n}function Bh(){(yt===0||yt===3||yt===2)&&(yt=4),It===null||(Wi&268435455)===0&&(iu&268435455)===0||Zr(It,Nt)}function cu(n,r){var a=Ve;Ve|=2;var c=Dm();(It!==n||Nt!==r)&&(Ar=null,Ki(n,r));do try{qE();break}catch(d){Nm(n,d)}while(!0);if(th(),Ve=a,ru.current=c,lt!==null)throw Error(t(261));return It=null,Nt=0,yt}function qE(){for(;lt!==null;)xm(lt)}function HE(){for(;lt!==null&&!al();)xm(lt)}function xm(n){var r=Mm(n.alternate,n,un);n.memoizedProps=n.pendingProps,r===null?Om(n):lt=r,Oh.current=null}function Om(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=bE(a,r,un),a!==null){lt=a;return}}else{if(a=FE(a,r),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yt=6,lt=null;return}}if(r=r.sibling,r!==null){lt=r;return}lt=r=n}while(r!==null);yt===0&&(yt=5)}function Qi(n,r,a){var c=Pe,d=vn.transition;try{vn.transition=null,Pe=1,WE(n,r,a,c)}finally{vn.transition=d,Pe=c}return null}function WE(n,r,a,c){do to();while(Jr!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===It&&(lt=It=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ou||(ou=!0,bm(hn,function(){return to(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=vn.transition,vn.transition=null;var v=Pe;Pe=1;var T=Ve;Ve|=4,Oh.current=null,jE(n,a),Im(a,n),dE(Bc),jr=!!zc,Bc=zc=null,n.current=a,zE(a),Ac(),Ve=T,Pe=v,vn.transition=p}else n.current=a;if(ou&&(ou=!1,Jr=n,au=d),p=n.pendingLanes,p===0&&(Yr=null),cl(a.stateNode),Xt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(su)throw su=!1,n=Mh,Mh=null,n;return(au&1)!==0&&n.tag!==0&&to(),p=n.pendingLanes,(p&1)!==0?n===bh?Sa++:(Sa=0,bh=n):Sa=0,Wr(),null}function to(){if(Jr!==null){var n=Fr(au),r=vn.transition,a=Pe;try{if(vn.transition=null,Pe=16>n?16:n,Jr===null)var c=!1;else{if(n=Jr,Jr=null,au=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,oe=n.current;oe!==null;){var p=oe,v=p.child;if((oe.flags&16)!==0){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var U=T[R];for(oe=U;oe!==null;){var H=oe;switch(H.tag){case 0:case 11:case 15:wa(8,H,p)}var K=H.child;if(K!==null)K.return=H,oe=K;else for(;oe!==null;){H=oe;var q=H.sibling,re=H.return;if(vm(H),H===U){oe=null;break}if(q!==null){q.return=re,oe=q;break}oe=re}}}var ae=p.alternate;if(ae!==null){var ce=ae.child;if(ce!==null){ae.child=null;do{var it=ce.sibling;ce.sibling=null,ce=it}while(ce!==null)}}oe=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,oe=v;else e:for(;oe!==null;){if(p=oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:wa(9,p,p.return)}var b=p.sibling;if(b!==null){b.return=p.return,oe=b;break e}oe=p.return}}var N=n.current;for(oe=N;oe!==null;){v=oe;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,oe=F;else e:for(v=N;oe!==null;){if(T=oe,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:nu(9,T)}}catch(he){nt(T,T.return,he)}if(T===v){oe=null;break e}var J=T.sibling;if(J!==null){J.return=T.return,oe=J;break e}oe=T.return}}if(Ve=d,Wr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(xi,n)}catch{}c=!0}return c}finally{Pe=a,vn.transition=r}}return!1}function Vm(n,r,a){r=Js(a,r),r=Xp(n,r,1),n=Kr(n,r,1),r=Ht(),n!==null&&(Mr(n,1,r),Xt(n,r))}function nt(n,r,a){if(n.tag===3)Vm(n,n,a);else for(;r!==null;){if(r.tag===3){Vm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Yr===null||!Yr.has(c))){n=Js(a,n),n=Zp(r,n,1),r=Kr(r,n,1),n=Ht(),r!==null&&(Mr(r,1,n),Xt(r,n));break}}r=r.return}}function GE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Ht(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(Nt&a)===a&&(yt===4||yt===3&&(Nt&130023424)===Nt&&500>$e()-Lh?Ki(n,0):Vh|=a),Xt(n,r)}function Lm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ss,Ss<<=1,(Ss&130023424)===0&&(Ss=4194304)));var a=Ht();n=Tr(n,r),n!==null&&(Mr(n,r,a),Xt(n,a))}function KE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Lm(n,a)}function QE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Lm(n,a)}var Mm;Mm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Kt.current)Yt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Yt=!1,ME(n,r,a);Yt=(n.flags&131072)!==0}else Yt=!1,Ye&&(r.flags&1048576)!==0&&mp(r,Ul,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;eu(n,r),n=r.pendingProps;var d=$s(r,Ot.current);Qs(r,a),d=dh(null,r,c,n,d,a);var p=fh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Qt(c)?(p=!0,Ml(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,sh(r),d.updater=Xl,r.stateNode=d,d._reactInternals=r,_h(r,c,n,a),r=Ih(null,r,c,!0,p,a)):(r.tag=0,Ye&&p&&Qc(r),qt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(eu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=JE(c),n=On(c,n),d){case 0:r=Th(null,r,c,n,a);break e;case 1:r=lm(null,r,c,n,a);break e;case 11:r=rm(null,r,c,n,a);break e;case 14:r=im(null,r,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),Th(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),lm(n,r,c,d,a);case 3:e:{if(um(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Sp(n,r),Hl(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Js(Error(t(423)),r),r=cm(n,r,c,a,d);break e}else if(c!==d){d=Js(Error(t(424)),r),r=cm(n,r,c,a,d);break e}else for(ln=$r(r.stateNode.containerInfo.firstChild),an=r,Ye=!0,xn=null,a=Tp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),c===d){r=Sr(n,r,a);break e}qt(n,r,c,a)}r=r.child}return r;case 5:return Rp(r),n===null&&Xc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,$c(c,d)?v=null:p!==null&&$c(c,p)&&(r.flags|=32),am(n,r),qt(n,r,v,a),r.child;case 6:return n===null&&Xc(r),null;case 13:return hm(n,r,a);case 4:return oh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Gs(r,null,c,a):qt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),rm(n,r,c,d,a);case 7:return qt(n,r,r.pendingProps,a),r.child;case 8:return qt(n,r,r.pendingProps.children,a),r.child;case 12:return qt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,qe(Bl,c._currentValue),c._currentValue=v,p!==null)if(Dn(p.value,v)){if(p.children===d.children&&!Kt.current){r=Sr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){v=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=Ir(-1,a&-a),R.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var H=U.pending;H===null?R.next=R:(R.next=H.next,H.next=R),U.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),rh(p.return,a,r),T.lanes|=a;break}R=R.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),rh(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}qt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Qs(r,a),d=gn(d),c=c(d),r.flags|=1,qt(n,r,c,a),r.child;case 14:return c=r.type,d=On(c,r.pendingProps),d=On(c.type,d),im(n,r,c,d,a);case 15:return sm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),eu(n,r),r.tag=1,Qt(c)?(n=!0,Ml(r)):n=!1,Qs(r,a),Yp(r,c,d),_h(r,c,d,a),Ih(null,r,c,!0,n,a);case 19:return fm(n,r,a);case 22:return om(n,r,a)}throw Error(t(156,r.tag))};function bm(n,r){return Ts(n,r)}function YE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new YE(n,r,a,c)}function $h(n){return n=n.prototype,!(!n||!n.isReactComponent)}function JE(n){if(typeof n=="function")return $h(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===dt)return 14}return 2}function ei(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hu(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")$h(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case D:return Yi(a.children,d,p,r);case I:v=8,d|=8;break;case A:return n=_n(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=_n(13,a,r,d),n.elementType=S,n.lanes=p,n;case Ke:return n=_n(19,a,r,d),n.elementType=Ke,n.lanes=p,n;case le:return du(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case x:v=9;break e;case L:v=11;break e;case dt:v=14;break e;case Z:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Yi(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function du(n,r,a,c){return n=_n(22,n,c,r),n.elementType=le,n.lanes=a,n.stateNode={isHidden:!1},n}function qh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Hh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function XE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lr(0),this.expirationTimes=Lr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Wh(n,r,a,c,d,p,v,T,R){return n=new XE(n,r,a,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=_n(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(p),n}function ZE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Fm(n){if(!n)return Hr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return dp(n,a,r)}return r}function Um(n,r,a,c,d,p,v,T,R){return n=Wh(a,c,!0,n,d,p,v,T,R),n.context=Fm(null),a=n.current,c=Ht(),d=Xr(a),p=Ir(c,d),p.callback=r??null,Kr(a,p,d),n.current.lanes=d,Mr(n,d,c),Xt(n,c),n}function fu(n,r,a,c){var d=r.current,p=Ht(),v=Xr(d);return a=Fm(a),r.context===null?r.context=a:r.pendingContext=a,r=Ir(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Kr(d,r,v),n!==null&&(Mn(n,d,v,p),ql(n,d,v)),v}function pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Gh(n,r){jm(n,r),(n=n.alternate)&&jm(n,r)}function ew(){return null}var zm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Kh(n){this._internalRoot=n}mu.prototype.render=Kh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));fu(n,r,null,null)},mu.prototype.unmount=Kh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Gi(function(){fu(null,n,null,null)}),r[vr]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var r=ml();n={blockedOn:null,target:n,priority:r};for(var a=0;a<$n.length&&r!==0&&r<$n[a].priority;a++);$n.splice(a,0,n),a===0&&vl(n)}};function Qh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function tw(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=pu(v);p.call(U)}}var v=Um(r,c,n,0,null,!1,!1,"",Bm);return n._reactRootContainer=v,n[vr]=v.current,la(n.nodeType===8?n.parentNode:n),Gi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=pu(R);T.call(U)}}var R=Wh(n,0,!1,null,null,!1,!1,"",Bm);return n._reactRootContainer=R,n[vr]=R.current,la(n.nodeType===8?n.parentNode:n),Gi(function(){fu(r,R,a,c)}),R}function yu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var T=d;d=function(){var R=pu(v);T.call(R)}}fu(r,v,n,d)}else v=tw(a,r,n,d,c);return pu(v)}fl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Vr(r.pendingLanes);a!==0&&(br(r,a|1),Xt(r,$e()),(Ve&6)===0&&(eo=$e()+500,Wr()))}break;case 13:Gi(function(){var c=Tr(n,1);if(c!==null){var d=Ht();Mn(c,n,1,d)}}),Gh(n,1)}},As=function(n){if(n.tag===13){var r=Tr(n,134217728);if(r!==null){var a=Ht();Mn(r,n,134217728,a)}Gh(n,134217728)}},pl=function(n){if(n.tag===13){var r=Xr(n),a=Tr(n,r);if(a!==null){var c=Ht();Mn(a,n,r,c)}Gh(n,r)}},ml=function(){return Pe},gl=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},gs=function(n,r,a){switch(r){case"input":if(Oo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Vl(c);if(!d)throw Error(t(90));cs(c),Oo(c,d)}}}break;case"textarea":ps(n,a);break;case"select":r=a.value,r!=null&&cr(n,!!a.multiple,r,!1)}},Ri=jh,$o=Gi;var nw={usingClientEntryPoint:!1,Events:[ha,zs,Vl,zn,Bo,jh]},Aa={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rw={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wo(n),n===null?null:n.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||ew,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{xi=vu.inject(rw),nn=vu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nw,Zt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qh(r))throw Error(t(200));return ZE(n,r,null,a)},Zt.createRoot=function(n,r){if(!Qh(n))throw Error(t(299));var a=!1,c="",d=zm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Wh(n,1,!1,null,null,a,!1,c,d),n[vr]=r.current,la(n.nodeType===8?n.parentNode:n),new Kh(r)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Wo(r),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return Gi(n)},Zt.hydrate=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!0,a)},Zt.hydrateRoot=function(n,r,a){if(!Qh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=zm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Um(r,null,n,1,a??null,d,!1,p,v),n[vr]=r.current,la(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new mu(r)},Zt.render=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!1,a)},Zt.unmountComponentAtNode=function(n){if(!gu(n))throw Error(t(40));return n._reactRootContainer?(Gi(function(){yu(null,null,n,!1,function(){n._reactRootContainer=null,n[vr]=null})}),!0):!1},Zt.unstable_batchedUpdates=jh,Zt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!gu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yu(n,r,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Ym;function dw(){if(Ym)return Xh.exports;Ym=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Xh.exports=hw(),Xh.exports}var Jm;function fw(){if(Jm)return _u;Jm=1;var i=dw();return _u.createRoot=i.createRoot,_u.hydrateRoot=i.hydrateRoot,_u}var pw=fw();const mw=jy(pw);/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=()=>{};var Xm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},yw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},By={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,w=u>>2,C=(u&3)<<4|m>>4;let k=(m&15)<<2|_>>6,B=_&63;g||(B=64,h||(k=64)),s.push(t[w],t[C],t[k],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(zy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):yw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const C=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||C==null)throw new vw;const k=u<<2|m>>4;if(s.push(k),_!==64){const B=m<<4&240|_>>2;if(s.push(B),C!==64){const G=_<<6&192|C;s.push(G)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class vw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(i){const e=zy(i);return By.encodeByteArray(e,!0)},Uu=function(i){return _w(i).replace(/\./g,"")},$y=function(i){try{return By.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=()=>Ew().__FIREBASE_DEFAULTS__,Tw=()=>{if(typeof process>"u"||typeof Xm>"u")return;const i=Xm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Iw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&$y(i[1]);return e&&JSON.parse(e)},rc=()=>{try{return gw()||ww()||Tw()||Iw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},qy=i=>{var e,t;return(t=(e=rc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Hy=i=>{const e=qy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Wy=()=>{var i;return(i=rc())===null||i===void 0?void 0:i.config},Gy=i=>{var e;return(e=rc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wd(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Uu(JSON.stringify(t)),Uu(JSON.stringify(h)),""].join(".")}const La={};function Cw(){const i={prod:[],emulator:[]};for(const e of Object.keys(La))La[e]?i.emulator.push(e):i.prod.push(e);return i}function Rw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Zm=!1;function Gd(i,e){if(typeof window>"u"||typeof document>"u"||!os(window.location.host)||La[i]===e||La[i]||Zm)return;La[i]=e;function t(k){return`__firebase__banner__${k}`}const s="__firebase__banner",u=Cw().prod.length>0;function h(){const k=document.getElementById(s);k&&k.remove()}function m(k){k.style.display="flex",k.style.background="#7faaf0",k.style.position="fixed",k.style.bottom="5px",k.style.left="5px",k.style.padding=".5em",k.style.borderRadius="5px",k.style.alignItems="center"}function g(k,B){k.setAttribute("width","24"),k.setAttribute("id",B),k.setAttribute("height","24"),k.setAttribute("viewBox","0 0 24 24"),k.setAttribute("fill","none"),k.style.marginLeft="-6px"}function _(){const k=document.createElement("span");return k.style.cursor="pointer",k.style.marginLeft="16px",k.style.fontSize="24px",k.innerHTML=" &times;",k.onclick=()=>{Zm=!0,h()},k}function w(k,B){k.setAttribute("id",B),k.innerText="Learn more",k.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",k.setAttribute("target","__blank"),k.style.paddingLeft="5px",k.style.textDecoration="underline"}function C(){const k=Rw(s),B=t("text"),G=document.getElementById(B)||document.createElement("span"),X=t("learnmore"),W=document.getElementById(X)||document.createElement("a"),Ie=t("preprendIcon"),ve=document.getElementById(Ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(k.created){const me=k.element;m(me),w(W,X);const _e=_();g(ve,Ie),me.append(ve,G,W,_e),document.body.appendChild(me)}u?(G.innerText="Preview backend disconnected.",ve.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ve.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function Pw(){var i;const e=(i=rc())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function xw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ow(){const i=zt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Vw(){return!Pw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lw(){try{return typeof indexedDB=="object"}catch{return!1}}function Mw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="FirebaseError";class or extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=bw,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qa.prototype.create)}}class Qa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Fw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new or(o,m,s)}}function Fw(i,e){return i.replace(Uw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Uw=/\{\$([^}]+)}/g;function jw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ns(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(eg(u)&&eg(h)){if(!ns(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function eg(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ka(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Pa(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function zw(i,e){const t=new Bw(i,e);return t.subscribe.bind(t)}class Bw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");$w(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=td),o.error===void 0&&(o.error=td),o.complete===void 0&&(o.complete=td);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $w(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function td(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(i){return i&&i._delegate?i._delegate:i}class pi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Sw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ww(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hw(i){return i===Xi?void 0:i}function Ww(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const Kw={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},Qw=ke.INFO,Yw={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},Jw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Yw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kd{constructor(e){this.name=e,this._logLevel=Qw,this._logHandler=Jw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const Xw=(i,e)=>e.some(t=>i instanceof t);let tg,ng;function Zw(){return tg||(tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e0(){return ng||(ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ky=new WeakMap,gd=new WeakMap,Qy=new WeakMap,nd=new WeakMap,Qd=new WeakMap;function t0(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ui(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ky.set(t,i)}).catch(()=>{}),Qd.set(e,i),e}function n0(i){if(gd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});gd.set(i,e)}let yd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return gd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Qy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ui(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function r0(i){yd=i(yd)}function i0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(rd(this),e,...t);return Qy.set(s,e.sort?e.sort():[e]),ui(s)}:e0().includes(i)?function(...e){return i.apply(rd(this),e),ui(Ky.get(this))}:function(...e){return ui(i.apply(rd(this),e))}}function s0(i){return typeof i=="function"?i0(i):(i instanceof IDBTransaction&&n0(i),Xw(i,Zw())?new Proxy(i,yd):i)}function ui(i){if(i instanceof IDBRequest)return t0(i);if(nd.has(i))return nd.get(i);const e=s0(i);return e!==i&&(nd.set(i,e),Qd.set(e,i)),e}const rd=i=>Qd.get(i);function o0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ui(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ui(h.result),g.oldVersion,g.newVersion,ui(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const a0=["get","getKey","getAll","getAllKeys","count"],l0=["put","add","delete","clear"],id=new Map;function rg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=l0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||a0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return id.set(e,u),u}r0(i=>({...i,get:(e,t,s)=>rg(e,t)||i.get(e,t,s),has:(e,t)=>!!rg(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(c0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function c0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vd="@firebase/app",ig="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Kd("@firebase/app"),h0="@firebase/app-compat",d0="@firebase/analytics-compat",f0="@firebase/analytics",p0="@firebase/app-check-compat",m0="@firebase/app-check",g0="@firebase/auth",y0="@firebase/auth-compat",v0="@firebase/database",_0="@firebase/data-connect",E0="@firebase/database-compat",w0="@firebase/functions",T0="@firebase/functions-compat",I0="@firebase/installations",S0="@firebase/installations-compat",A0="@firebase/messaging",C0="@firebase/messaging-compat",R0="@firebase/performance",k0="@firebase/performance-compat",P0="@firebase/remote-config",N0="@firebase/remote-config-compat",D0="@firebase/storage",x0="@firebase/storage-compat",O0="@firebase/firestore",V0="@firebase/ai",L0="@firebase/firestore-compat",M0="firebase",b0="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="[DEFAULT]",F0={[vd]:"fire-core",[h0]:"fire-core-compat",[f0]:"fire-analytics",[d0]:"fire-analytics-compat",[m0]:"fire-app-check",[p0]:"fire-app-check-compat",[g0]:"fire-auth",[y0]:"fire-auth-compat",[v0]:"fire-rtdb",[_0]:"fire-data-connect",[E0]:"fire-rtdb-compat",[w0]:"fire-fn",[T0]:"fire-fn-compat",[I0]:"fire-iid",[S0]:"fire-iid-compat",[A0]:"fire-fcm",[C0]:"fire-fcm-compat",[R0]:"fire-perf",[k0]:"fire-perf-compat",[P0]:"fire-rc",[N0]:"fire-rc-compat",[D0]:"fire-gcs",[x0]:"fire-gcs-compat",[O0]:"fire-fst",[L0]:"fire-fst-compat",[V0]:"fire-vertex","fire-js":"fire-js",[M0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map,U0=new Map,Ed=new Map;function sg(i,e){try{i.container.addComponent(e)}catch(t){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function rs(i){const e=i.name;if(Ed.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,i);for(const t of ju.values())sg(t,i);for(const t of U0.values())sg(t,i);return!0}function ic(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function En(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ci=new Qa("app","Firebase",j0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ci.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=b0;function Yy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_d,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw ci.create("bad-app-name",{appName:String(o)});if(t||(t=Wy()),!t)throw ci.create("no-options");const u=ju.get(o);if(u){if(ns(t,u.options)&&ns(s,u.config))return u;throw ci.create("duplicate-app",{appName:o})}const h=new Gw(o);for(const g of Ed.values())h.addComponent(g);const m=new z0(t,s,h);return ju.set(o,m),m}function Yd(i=_d){const e=ju.get(i);if(!e&&i===_d&&Wy())return Yy();if(!e)throw ci.create("no-app",{appName:i});return e}function Zn(i,e,t){var s;let o=(s=F0[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(m.join(" "));return}rs(new pi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="firebase-heartbeat-database",$0=1,za="firebase-heartbeat-store";let sd=null;function Jy(){return sd||(sd=o0(B0,$0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(za)}catch(t){console.warn(t)}}}}).catch(i=>{throw ci.create("idb-open",{originalErrorMessage:i.message})})),sd}async function q0(i){try{const t=(await Jy()).transaction(za),s=await t.objectStore(za).get(Xy(i));return await t.done,s}catch(e){if(e instanceof or)kr.warn(e.message);else{const t=ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(t.message)}}}async function og(i,e){try{const s=(await Jy()).transaction(za,"readwrite");await s.objectStore(za).put(e,Xy(i)),await s.done}catch(t){if(t instanceof or)kr.warn(t.message);else{const s=ci.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kr.warn(s.message)}}}function Xy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=1024,W0=30;class G0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Q0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=ag();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>W0){const h=Y0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ag(),{heartbeatsToSend:s,unsentEntries:o}=K0(this._heartbeatsCache.heartbeats),u=Uu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return kr.warn(t),""}}}function ag(){return new Date().toISOString().substring(0,10)}function K0(i,e=H0){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),lg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),lg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Q0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lw()?Mw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await q0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return og(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return og(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function lg(i){return Uu(JSON.stringify({version:2,heartbeats:i})).length}function Y0(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(i){rs(new pi("platform-logger",e=>new u0(e),"PRIVATE")),rs(new pi("heartbeat",e=>new G0(e),"PRIVATE")),Zn(vd,ig,i),Zn(vd,ig,"esm2017"),Zn("fire-js","")}J0("");function Jd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const X0=Zy,ev=new Qa("auth","Firebase",Zy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Kd("@firebase/auth");function Z0(i,...e){zu.logLevel<=ke.WARN&&zu.warn(`Auth (${So}): ${i}`,...e)}function Pu(i,...e){zu.logLevel<=ke.ERROR&&zu.error(`Auth (${So}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(i,...e){throw Xd(i,...e)}function er(i,...e){return Xd(i,...e)}function tv(i,e,t){const s=Object.assign(Object.assign({},X0()),{[e]:t});return new Qa("auth","Firebase",s).create(e,{appName:i.name})}function hi(i){return tv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return ev.create(i,...e)}function ye(i,e,...t){if(!i)throw Xd(e,...t)}function Cr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Pu(e),new Error(e)}function Pr(i,e){i||Cr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function eT(){return ug()==="http:"||ug()==="https:"}function ug(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eT()||Dw()||"connection"in navigator)?navigator.onLine:!0}function nT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pr(t>e,"Short delay should be less than long delay!"),this.isMobile=kw()||xw()}get(){return tT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(i,e){Pr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sT=new Ja(3e4,6e4);function as(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ti(i,e,t,s,o={}){return rv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ya(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:g},u);return Nw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&os(i.emulatorConfig.host)&&(_.credentials="include"),nv.fetch()(await iv(i,i.config.apiHost,t,m),_)})}async function rv(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},rT),e);try{const o=new aT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Eu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Eu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Eu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw tv(i,w,_);Fn(i,w)}}catch(o){if(o instanceof or)throw o;Fn(i,"network-request-failed",{message:String(o)})}}async function sc(i,e,t,s,o={}){const u=await Ti(i,e,t,s,o);return"mfaPendingCredential"in u&&Fn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function iv(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Zd(i.config,o):`${i.config.apiScheme}://${o}`;return iT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function oT(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(er(this.auth,"network-request-failed")),sT.get())})}}function Eu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=er(i,e,s);return o.customData._tokenResponse=t,o}function cg(i){return i!==void 0&&i.enterprise!==void 0}class lT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return oT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uT(i,e){return Ti(i,"GET","/v2/recaptchaConfig",as(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(i,e){return Ti(i,"POST","/v1/accounts:delete",e)}async function Bu(i,e){return Ti(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hT(i,e=!1){const t=Ct(i),s=await t.getIdToken(e),o=ef(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ma(od(o.auth_time)),issuedAtTime:Ma(od(o.iat)),expirationTime:Ma(od(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function od(i){return Number(i)*1e3}function ef(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const o=$y(t);return o?JSON.parse(o):(Pu("Failed to decode base64 JWT payload"),null)}catch(o){return Pu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function hg(i){const e=ef(i);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof or&&dT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function dT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ba(i,Bu(t,{idToken:s}));ye(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?sv(u.providerUserInfo):[],m=mT(i.providerData,h),g=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?_:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Td(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,C)}async function pT(i){const e=Ct(i);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function sv(i){return i.map(e=>{var{providerId:t}=e,s=Jd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT(i,e){const t=await rv(i,{},async()=>{const s=Ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await iv(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&os(i.emulatorConfig.host)&&(g.credentials="include"),nv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yT(i,e){return Ti(i,"POST","/v2/accounts:revokeToken",as(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=hg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await gT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new lo;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(i,e){ye(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Td(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ba(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hT(this,e)}reload(){return pT(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await $u(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await Ba(this,cT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,_,w;const C=(s=t.displayName)!==null&&s!==void 0?s:void 0,k=(o=t.email)!==null&&o!==void 0?o:void 0,B=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,G=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,Ie=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ve=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:me,emailVerified:_e,isAnonymous:je,providerData:Se,stsTokenManager:D}=t;ye(me&&D,e,"internal-error");const I=lo.fromJSON(this.name,D);ye(typeof me=="string",e,"internal-error"),ni(C,e.name),ni(k,e.name),ye(typeof _e=="boolean",e,"internal-error"),ye(typeof je=="boolean",e,"internal-error"),ni(B,e.name),ni(G,e.name),ni(X,e.name),ni(W,e.name),ni(Ie,e.name),ni(ve,e.name);const A=new bn({uid:me,auth:e,email:k,emailVerified:_e,displayName:C,isAnonymous:je,photoURL:G,phoneNumber:B,tenantId:X,stsTokenManager:I,createdAt:Ie,lastLoginAt:ve});return Se&&Array.isArray(Se)&&(A.providerData=Se.map(P=>Object.assign({},P))),W&&(A._redirectEventId=W),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new lo;o.updateFromServerResponse(t);const u=new bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await $u(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?sv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new lo;m.updateFromIdToken(s);const g=new bn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Td(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Map;function Rr(i){Pr(i instanceof Function,"Expected a class definition");let e=dg.get(i);return e?(Pr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,dg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ov.type="NONE";const fg=ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(i,e,t){return`firebase:${i}:${e}:${t}`}class uo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Nu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Nu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Bu(this.auth,{idToken:e}).catch(()=>{});return t?bn._fromGetAccountInfoResponse(this.auth,t,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new uo(Rr(fg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Rr(fg);const h=Nu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let C;if(typeof w=="string"){const k=await Bu(e,{idToken:w}).catch(()=>{});if(!k)break;C=await bn._fromGetAccountInfoResponse(e,k,w)}else C=bn._fromJSON(e,w);_!==u&&(m=C),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new uo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new uo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(av(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dv(e))return"Blackberry";if(fv(e))return"Webos";if(lv(e))return"Safari";if((e.includes("chrome/")||uv(e))&&!e.includes("edge/"))return"Chrome";if(hv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function av(i=zt()){return/firefox\//i.test(i)}function lv(i=zt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uv(i=zt()){return/crios\//i.test(i)}function cv(i=zt()){return/iemobile/i.test(i)}function hv(i=zt()){return/android/i.test(i)}function dv(i=zt()){return/blackberry/i.test(i)}function fv(i=zt()){return/webos/i.test(i)}function tf(i=zt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function vT(i=zt()){var e;return tf(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _T(){return Ow()&&document.documentMode===10}function pv(i=zt()){return tf(i)||hv(i)||fv(i)||dv(i)||/windows phone/i.test(i)||cv(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(i,e=[]){let t;switch(i){case"Browser":t=pg(zt());break;case"Worker":t=`${pg(zt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${So}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(i,e={}){return Ti(i,"GET","/v2/passwordPolicy",as(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=6;class IT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:TT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.beforeStateQueue=new ET(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ev,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bu(this,{idToken:e}),s=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(En(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(hi(this));const t=e?Ct(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wT(this),t=new IT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await yT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[Rr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Z0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ao(i){return Ct(i)}class mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=zw(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AT(i){oc=i}function gv(i){return oc.loadJS(i)}function CT(){return oc.recaptchaEnterpriseScript}function RT(){return oc.gapiScript}function kT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class PT{constructor(){this.enterprise=new NT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class NT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const DT="recaptcha-enterprise",yv="NO_RECAPTCHA";class xT{constructor(e){this.type=DT,this.auth=Ao(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{uT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new lT(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;cg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(yv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new PT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&cg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=CT();g.length!==0&&(g+=m),gv(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function gg(i,e,t,s=!1,o=!1){const u=new xT(i);let h;if(o)h=yv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function yg(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await gg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await gg(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(i,e){const t=ic(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ns(u,e??{}))return o;Fn(o,"already-initialized")}return t.initialize({options:e})}function VT(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Rr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function LT(i,e,t){const s=Ao(i);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=vv(e),{host:h,port:m}=MT(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(ns(_,s.config.emulator)&&ns(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,os(h)?(Wd(`${u}//${h}${g}`),Gd("Auth",!0)):bT()}function vv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function MT(i){const e=vv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:vg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:vg(h)}}}function vg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function bT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}async function FT(i,e){return Ti(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(i,e){return sc(i,"POST","/v1/accounts:signInWithPassword",as(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(i,e){return sc(i,"POST","/v1/accounts:signInWithEmailLink",as(i,e))}async function zT(i,e){return sc(i,"POST","/v1/accounts:signInWithEmailLink",as(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends nf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new $a(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new $a(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yg(e,t,"signInWithPassword",UT);case"emailLink":return jT(e,{email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yg(e,s,"signUpPassword",FT);case"emailLink":return zT(e,{idToken:t,email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(i,e){return sc(i,"POST","/v1/accounts:signInWithIdp",as(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="http://localhost";class is extends nf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Jd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new is(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return co(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,co(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,co(e,t)}buildRequest(){const e={requestUri:BT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ya(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qT(i){const e=ka(Pa(i)).link,t=e?ka(Pa(e)).deep_link_id:null,s=ka(Pa(i)).deep_link_id;return(s?ka(Pa(s)).link:null)||s||t||e||i}class rf{constructor(e){var t,s,o,u,h,m;const g=ka(Pa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,C=$T((o=g.mode)!==null&&o!==void 0?o:null);ye(_&&w&&C,"argument-error"),this.apiKey=_,this.operation=C,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=qT(e);try{return new rf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.providerId=Co.PROVIDER_ID}static credential(e,t){return $a._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=rf.parseLink(t);return ye(s,"argument-error"),$a._fromEmailAndCode(e,s.code,s.tenantId)}}Co.PROVIDER_ID="password";Co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends _v{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Xa{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return is._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Xa{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Xa{constructor(){super("twitter.com")}static credential(e,t){return is._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return oi.credential(t,s)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await bn._fromIdTokenResponse(e,s,o),h=_g(s);return new go({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=_g(s);return new go({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function _g(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends or{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new qu(e,t,s,o)}}function Ev(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(i,u,e,s):u})}async function HT(i,e,t=!1){const s=await Ba(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return go._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(i,e,t=!1){const{auth:s}=i;if(En(s.app))return Promise.reject(hi(s));const o="reauthenticate";try{const u=await Ba(i,Ev(s,o,e,i),t);ye(u.idToken,s,"internal-error");const h=ef(u.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(i.uid===m,s,"user-mismatch"),go._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Fn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(i,e,t=!1){if(En(i.app))return Promise.reject(hi(i));const s="signIn",o=await Ev(i,s,e),u=await go._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function GT(i,e){return wv(Ao(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(i){const e=Ao(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function QT(i,e,t){return En(i.app)?Promise.reject(hi(i)):GT(Ct(i),Co.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&KT(i),s})}function YT(i,e,t,s){return Ct(i).onIdTokenChanged(e,t,s)}function JT(i,e,t){return Ct(i).beforeAuthStateChanged(e,t)}function XT(i,e,t,s){return Ct(i).onAuthStateChanged(e,t,s)}function ad(i){return Ct(i).signOut()}const Hu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=1e3,eI=10;class Iv extends Tv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);_T()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,eI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iv.type="LOCAL";const tI=Iv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv extends Tv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sv.type="SESSION";const Av=Sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ac(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await nI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=sf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const k=C;if(k.data.eventId===_)switch(k.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(k.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}function iI(i){tr().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function sI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function aI(){return Cv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="firebaseLocalStorageDb",lI=1,Wu="firebaseLocalStorage",kv="fbase_key";class Za{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lc(i,e){return i.transaction([Wu],e?"readwrite":"readonly").objectStore(Wu)}function uI(){const i=indexedDB.deleteDatabase(Rv);return new Za(i).toPromise()}function Id(){const i=indexedDB.open(Rv,lI);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Wu,{keyPath:kv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Wu)?e(s):(s.close(),await uI(),e(await Id()))})})}async function Eg(i,e,t){const s=lc(i,!0).put({[kv]:e,value:t});return new Za(s).toPromise()}async function cI(i,e){const t=lc(i,!1).get(e),s=await new Za(t).toPromise();return s===void 0?null:s.value}function wg(i,e){const t=lc(i,!0).delete(e);return new Za(t).toPromise()}const hI=800,dI=3;class Pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Id(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>dI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(aI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sI(),!this.activeServiceWorker)return;this.sender=new rI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Id();return await Eg(e,Hu,"1"),await wg(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Eg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>cI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=lc(o,!1).getAll();return new Za(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pv.type="LOCAL";const fI=Pv;new Ja(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(i,e){return e?Rr(e):(ye(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of extends nf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mI(i){return wv(i.auth,new of(i),i.bypassAuthState)}function gI(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),WT(t,new of(i),i.bypassAuthState)}async function yI(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),HT(t,new of(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mI;case"linkViaPopup":case"linkViaRedirect":return yI;case"reauthViaPopup":case"reauthViaRedirect":return gI;default:Fn(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new Ja(2e3,1e4);class ao extends Nv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ao.currentPopupAction&&ao.currentPopupAction.cancel(),ao.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ao.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vI.get())};e()}}ao.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="pendingRedirect",Du=new Map;class EI extends Nv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Du.get(this.auth._key());if(!e){try{const s=await wI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Du.set(this.auth._key(),e)}return this.bypassAuthState||Du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wI(i,e){const t=SI(e),s=II(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function TI(i,e){Du.set(i._key(),e)}function II(i){return Rr(i._redirectPersistence)}function SI(i){return Nu(_I,i.config.apiKey,i.name)}async function AI(i,e,t=!1){if(En(i.app))return Promise.reject(hi(i));const s=Ao(i),o=pI(s,e),h=await new EI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=600*1e3;class RI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Dv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(er(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tg(e))}saveEventToCache(e){this.cachedEventUids.add(Tg(e)),this.lastProcessedEventTime=Date.now()}}function Tg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Dv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(i,e={}){return Ti(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DI=/^https?/;async function xI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await PI(i);for(const t of e)try{if(OI(t))return}catch{}Fn(i,"unauthorized-domain")}function OI(i){const e=wd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!DI.test(t))return!1;if(NI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new Ja(3e4,6e4);function Ig(){const i=tr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function LI(i){return new Promise((e,t)=>{var s,o,u;function h(){Ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ig(),t(er(i,"network-request-failed"))},timeout:VI.get()})}if(!((o=(s=tr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=tr().gapi)===null||u===void 0)&&u.load)h();else{const m=kT("iframefcb");return tr()[m]=()=>{gapi.load?h():t(er(i,"network-request-failed"))},gv(`${RT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw xu=null,e})}let xu=null;function MI(i){return xu=xu||LI(i),xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=new Ja(5e3,15e3),FI="__/auth/iframe",UI="emulator/auth/iframe",jI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BI(i){const e=i.config;ye(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Zd(e,UI):`https://${i.config.authDomain}/${FI}`,s={apiKey:e.apiKey,appName:i.name,v:So},o=zI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ya(s).slice(1)}`}async function $I(i){const e=await MI(i),t=tr().gapi;return ye(t,i,"internal-error"),e.open({where:document.body,url:BI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=er(i,"network-request-failed"),m=tr().setTimeout(()=>{u(h)},bI.get());function g(){tr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HI=500,WI=600,GI="_blank",KI="http://localhost";class Sg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QI(i,e,t,s=HI,o=WI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},qI),{width:s.toString(),height:o.toString(),top:u,left:h}),_=zt().toLowerCase();t&&(m=uv(_)?GI:t),av(_)&&(e=e||KI,g.scrollbars="yes");const w=Object.entries(g).reduce((k,[B,G])=>`${k}${B}=${G},`,"");if(vT(_)&&m!=="_self")return YI(e||"",m),new Sg(null);const C=window.open(e||"",m,w);ye(C,i,"popup-blocked");try{C.focus()}catch{}return new Sg(C)}function YI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="__/auth/handler",XI="emulator/auth/handler",ZI=encodeURIComponent("fac");async function Ag(i,e,t,s,o,u){ye(i.config.authDomain,i,"auth-domain-config-required"),ye(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:So,eventId:o};if(e instanceof _v){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",jw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,C]of Object.entries({}))h[w]=C}if(e instanceof Xa){const w=e.getScopes().filter(C=>C!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),_=g?`#${ZI}=${encodeURIComponent(g)}`:"";return`${e1(i)}?${Ya(m).slice(1)}${_}`}function e1({config:i}){return i.emulator?Zd(i,XI):`https://${i.authDomain}/${JI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="webStorageSupport";class t1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Av,this._completeRedirectFn=AI,this._overrideRedirectResult=TI}async _openPopup(e,t,s,o){var u;Pr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Ag(e,t,s,wd(),o);return QI(e,h,sf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Ag(e,t,s,wd(),o);return iI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Pr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await $I(e),s=new RI(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ld,{type:ld},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[ld];h!==void 0&&t(!!h),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pv()||lv()||tf()}}const n1=t1;var Cg="@firebase/auth",Rg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function s1(i){rs(new pi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mv(i)},_=new ST(s,o,u,g);return VT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),rs(new pi("auth-internal",e=>{const t=Ao(e.getProvider("auth").getImmediate());return(s=>new r1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(Cg,Rg,i1(i)),Zn(Cg,Rg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=300,a1=Gy("authIdTokenMaxAge")||o1;let kg=null;const l1=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>a1)return;const o=t==null?void 0:t.token;kg!==o&&(kg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function u1(i=Yd()){const e=ic(i,"auth");if(e.isInitialized())return e.getImmediate();const t=OT(i,{popupRedirectResolver:n1,persistence:[fI,tI,Av]}),s=Gy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=l1(u.toString());JT(t,h,()=>h(t.currentUser)),YT(t,m=>h(m))}}const o=qy("auth");return o&&LT(t,`http://${o}`),t}function c1(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}AT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=er("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",c1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});s1("Browser");var Pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,xv;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function A(){}A.prototype=I.prototype,D.D=I.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(P,x,L){for(var S=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)S[Ke-2]=arguments[Ke];return I.prototype[x].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,A){A||(A=0);var P=Array(16);if(typeof I=="string")for(var x=0;16>x;++x)P[x]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(x=0;16>x;++x)P[x]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=D.g[0],A=D.g[1],x=D.g[2];var L=D.g[3],S=I+(L^A&(x^L))+P[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=L+(x^I&(A^x))+P[1]+3905402710&4294967295,L=I+(S<<12&4294967295|S>>>20),S=x+(A^L&(I^A))+P[2]+606105819&4294967295,x=L+(S<<17&4294967295|S>>>15),S=A+(I^x&(L^I))+P[3]+3250441966&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(L^A&(x^L))+P[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=L+(x^I&(A^x))+P[5]+1200080426&4294967295,L=I+(S<<12&4294967295|S>>>20),S=x+(A^L&(I^A))+P[6]+2821735955&4294967295,x=L+(S<<17&4294967295|S>>>15),S=A+(I^x&(L^I))+P[7]+4249261313&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(L^A&(x^L))+P[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=L+(x^I&(A^x))+P[9]+2336552879&4294967295,L=I+(S<<12&4294967295|S>>>20),S=x+(A^L&(I^A))+P[10]+4294925233&4294967295,x=L+(S<<17&4294967295|S>>>15),S=A+(I^x&(L^I))+P[11]+2304563134&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(L^A&(x^L))+P[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=L+(x^I&(A^x))+P[13]+4254626195&4294967295,L=I+(S<<12&4294967295|S>>>20),S=x+(A^L&(I^A))+P[14]+2792965006&4294967295,x=L+(S<<17&4294967295|S>>>15),S=A+(I^x&(L^I))+P[15]+1236535329&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(x^L&(A^x))+P[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=L+(A^x&(I^A))+P[6]+3225465664&4294967295,L=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(L^I))+P[11]+643717713&4294967295,x=L+(S<<14&4294967295|S>>>18),S=A+(L^I&(x^L))+P[0]+3921069994&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(x^L&(A^x))+P[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=L+(A^x&(I^A))+P[10]+38016083&4294967295,L=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(L^I))+P[15]+3634488961&4294967295,x=L+(S<<14&4294967295|S>>>18),S=A+(L^I&(x^L))+P[4]+3889429448&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(x^L&(A^x))+P[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=L+(A^x&(I^A))+P[14]+3275163606&4294967295,L=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(L^I))+P[3]+4107603335&4294967295,x=L+(S<<14&4294967295|S>>>18),S=A+(L^I&(x^L))+P[8]+1163531501&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(x^L&(A^x))+P[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=L+(A^x&(I^A))+P[2]+4243563512&4294967295,L=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(L^I))+P[7]+1735328473&4294967295,x=L+(S<<14&4294967295|S>>>18),S=A+(L^I&(x^L))+P[12]+2368359562&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(A^x^L)+P[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=L+(I^A^x)+P[8]+2272392833&4294967295,L=I+(S<<11&4294967295|S>>>21),S=x+(L^I^A)+P[11]+1839030562&4294967295,x=L+(S<<16&4294967295|S>>>16),S=A+(x^L^I)+P[14]+4259657740&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(A^x^L)+P[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=L+(I^A^x)+P[4]+1272893353&4294967295,L=I+(S<<11&4294967295|S>>>21),S=x+(L^I^A)+P[7]+4139469664&4294967295,x=L+(S<<16&4294967295|S>>>16),S=A+(x^L^I)+P[10]+3200236656&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(A^x^L)+P[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=L+(I^A^x)+P[0]+3936430074&4294967295,L=I+(S<<11&4294967295|S>>>21),S=x+(L^I^A)+P[3]+3572445317&4294967295,x=L+(S<<16&4294967295|S>>>16),S=A+(x^L^I)+P[6]+76029189&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(A^x^L)+P[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=L+(I^A^x)+P[12]+3873151461&4294967295,L=I+(S<<11&4294967295|S>>>21),S=x+(L^I^A)+P[15]+530742520&4294967295,x=L+(S<<16&4294967295|S>>>16),S=A+(x^L^I)+P[2]+3299628645&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(x^(A|~L))+P[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=L+(A^(I|~x))+P[7]+1126891415&4294967295,L=I+(S<<10&4294967295|S>>>22),S=x+(I^(L|~A))+P[14]+2878612391&4294967295,x=L+(S<<15&4294967295|S>>>17),S=A+(L^(x|~I))+P[5]+4237533241&4294967295,A=x+(S<<21&4294967295|S>>>11),S=I+(x^(A|~L))+P[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=L+(A^(I|~x))+P[3]+2399980690&4294967295,L=I+(S<<10&4294967295|S>>>22),S=x+(I^(L|~A))+P[10]+4293915773&4294967295,x=L+(S<<15&4294967295|S>>>17),S=A+(L^(x|~I))+P[1]+2240044497&4294967295,A=x+(S<<21&4294967295|S>>>11),S=I+(x^(A|~L))+P[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=L+(A^(I|~x))+P[15]+4264355552&4294967295,L=I+(S<<10&4294967295|S>>>22),S=x+(I^(L|~A))+P[6]+2734768916&4294967295,x=L+(S<<15&4294967295|S>>>17),S=A+(L^(x|~I))+P[13]+1309151649&4294967295,A=x+(S<<21&4294967295|S>>>11),S=I+(x^(A|~L))+P[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=L+(A^(I|~x))+P[11]+3174756917&4294967295,L=I+(S<<10&4294967295|S>>>22),S=x+(I^(L|~A))+P[2]+718787259&4294967295,x=L+(S<<15&4294967295|S>>>17),S=A+(L^(x|~I))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,D.g[2]=D.g[2]+x&4294967295,D.g[3]=D.g[3]+L&4294967295}s.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var A=I-this.blockSize,P=this.B,x=this.h,L=0;L<I;){if(x==0)for(;L<=A;)o(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<I;)if(P[x++]=D.charCodeAt(L++),x==this.blockSize){o(this,P),x=0;break}}else for(;L<I;)if(P[x++]=D[L++],x==this.blockSize){o(this,P),x=0;break}}this.h=x,this.o+=I},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var A=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=A&255,A/=256;for(this.u(D),D=Array(16),I=A=0;4>I;++I)for(var P=0;32>P;P+=8)D[A++]=this.g[I]>>>P&255;return D};function u(D,I){var A=m;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=I(D)}function h(D,I){this.h=I;for(var A=[],P=!0,x=D.length-1;0<=x;x--){var L=D[x]|0;P&&L==I||(A[x]=L,P=!1)}this.g=A}var m={};function g(D){return-128<=D&&128>D?u(D,function(I){return new h([I|0],0>I?-1:0)}):new h([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return C;if(0>D)return W(_(-D));for(var I=[],A=1,P=0;D>=A;P++)I[P]=D/A|0,A*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return W(w(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(I,8)),P=C,x=0;x<D.length;x+=8){var L=Math.min(8,D.length-x),S=parseInt(D.substring(x,x+L),I);8>L?(L=_(Math.pow(I,L)),P=P.j(L).add(_(S))):(P=P.j(A),P=P.add(_(S)))}return P}var C=g(0),k=g(1),B=g(16777216);i=h.prototype,i.m=function(){if(X(this))return-W(this).m();for(var D=0,I=1,A=0;A<this.g.length;A++){var P=this.i(A);D+=(0<=P?P:4294967296+P)*I,I*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(G(this))return"0";if(X(this))return"-"+W(this).toString(D);for(var I=_(Math.pow(D,6)),A=this,P="";;){var x=_e(A,I).g;A=Ie(A,x.j(I));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=x,G(A))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function G(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function X(D){return D.h==-1}i.l=function(D){return D=Ie(this,D),X(D)?-1:G(D)?0:1};function W(D){for(var I=D.g.length,A=[],P=0;P<I;P++)A[P]=~D.g[P];return new h(A,~D.h).add(k)}i.abs=function(){return X(this)?W(this):this},i.add=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],P=0,x=0;x<=I;x++){var L=P+(this.i(x)&65535)+(D.i(x)&65535),S=(L>>>16)+(this.i(x)>>>16)+(D.i(x)>>>16);P=S>>>16,L&=65535,S&=65535,A[x]=S<<16|L}return new h(A,A[A.length-1]&-2147483648?-1:0)};function Ie(D,I){return D.add(W(I))}i.j=function(D){if(G(this)||G(D))return C;if(X(this))return X(D)?W(this).j(W(D)):W(W(this).j(D));if(X(D))return W(this.j(W(D)));if(0>this.l(B)&&0>D.l(B))return _(this.m()*D.m());for(var I=this.g.length+D.g.length,A=[],P=0;P<2*I;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var x=0;x<D.g.length;x++){var L=this.i(P)>>>16,S=this.i(P)&65535,Ke=D.i(x)>>>16,dt=D.i(x)&65535;A[2*P+2*x]+=S*dt,ve(A,2*P+2*x),A[2*P+2*x+1]+=L*dt,ve(A,2*P+2*x+1),A[2*P+2*x+1]+=S*Ke,ve(A,2*P+2*x+1),A[2*P+2*x+2]+=L*Ke,ve(A,2*P+2*x+2)}for(P=0;P<I;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=I;P<2*I;P++)A[P]=0;return new h(A,0)};function ve(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function me(D,I){this.g=D,this.h=I}function _e(D,I){if(G(I))throw Error("division by zero");if(G(D))return new me(C,C);if(X(D))return I=_e(W(D),I),new me(W(I.g),W(I.h));if(X(I))return I=_e(D,W(I)),new me(W(I.g),I.h);if(30<D.g.length){if(X(D)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var A=k,P=I;0>=P.l(D);)A=je(A),P=je(P);var x=Se(A,1),L=Se(P,1);for(P=Se(P,2),A=Se(A,2);!G(P);){var S=L.add(P);0>=S.l(D)&&(x=x.add(A),L=S),P=Se(P,1),A=Se(A,1)}return I=Ie(D,x.j(I)),new me(x,I)}for(x=C;0<=D.l(I);){for(A=Math.max(1,Math.floor(D.m()/I.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=_(A),S=L.j(I);X(S)||0<S.l(D);)A-=P,L=_(A),S=L.j(I);G(L)&&(L=k),x=x.add(L),D=Ie(D,S)}return new me(x,D)}i.A=function(D){return _e(this,D).h},i.and=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)&D.i(P);return new h(A,this.h&D.h)},i.or=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)|D.i(P);return new h(A,this.h|D.h)},i.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)^D.i(P);return new h(A,this.h^D.h)};function je(D){for(var I=D.g.length+1,A=[],P=0;P<I;P++)A[P]=D.i(P)<<1|D.i(P-1)>>>31;return new h(A,D.h)}function Se(D,I){var A=I>>5;I%=32;for(var P=D.g.length-A,x=[],L=0;L<P;L++)x[L]=0<I?D.i(L+A)>>>I|D.i(L+A+1)<<32-I:D.i(L+A);return new h(x,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,xv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,di=h}).apply(typeof Pg<"u"?Pg:typeof self<"u"?self:typeof window<"u"?window:{});var wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ov,Na,Vv,Ou,Sd,Lv,Mv,bv;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof wu=="object"&&wu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,M={next:function(){if(!E&&y<l.length){var j=y++;return{value:f(j,l[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function C(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function k(l,f,y){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:C,k.apply(null,arguments)}function B(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function G(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,M,j){for(var ee=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ee[Ue-2]=arguments[Ue];return f.prototype[M].apply(E,ee)}}function X(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function W(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const M=l.length||0,j=E.length||0;l.length=M+j;for(let ee=0;ee<j;ee++)l[M+ee]=E[ee]}else l.push(E)}}class Ie{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ve(l){return/^[\s\xa0]*$/.test(l)}function me(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function _e(l){return _e[" "](l),l}_e[" "]=function(){};var je=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function Se(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function D(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let j=0;j<A.length;j++)y=A[j],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function x(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function L(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ue;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ke{constructor(){this.h=this.g=null}add(f,y){const E=dt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var dt=new Ie(()=>new Z,l=>l.reset());class Z{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let le,Q=!1,ue=new Ke,te=()=>{const l=m.Promise.resolve(void 0);le=()=>{l.then(O)}};var O=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){L(y)}var f=dt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Q=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ne(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var ge=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function Ae(l,f){if(ne.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(je){e:{try{_e(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ae.aa.h.call(this)}}G(Ae,ne);var Ne={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function Be(l,f,y,E,M){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=M,this.key=++Fe,this.da=this.fa=!1}function Et(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function lr(l){this.src=l,this.g={},this.h=0}lr.prototype.add=function(l,f,y,E,M){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var ee=Dr(l,f,E,M);return-1<ee?(f=l[ee],y||(f.fa=!1)):(f=new Be(f,this.src,j,!!E,M),f.fa=y,l.push(f)),f};function cs(l,f){var y=f.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,f,void 0),j;(j=0<=M)&&Array.prototype.splice.call(E,M,1),j&&(Et(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Dr(l,f,y,E){for(var M=0;M<l.length;++M){var j=l[M];if(!j.da&&j.listener==f&&j.capture==!!y&&j.ha==E)return M}return-1}var Ii="closure_lm_"+(1e6*Math.random()|0),hs={};function xo(l,f,y,E,M){if(Array.isArray(f)){for(var j=0;j<f.length;j++)xo(l,f[j],y,E,M);return null}return y=Lo(y),l&&l[be]?l.K(f,y,_(E)?!!E.capture:!1,M):Oo(l,f,y,!1,E,M)}function Oo(l,f,y,E,M,j){if(!f)throw Error("Invalid event type");var ee=_(M)?!!M.capture:!!M,Ue=fs(l);if(Ue||(l[Ii]=Ue=new lr(l)),y=Ue.add(f,y,E,ee,j),y.proxy)return y;if(E=il(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)ge||(M=ee),M===void 0&&(M=!1),l.addEventListener(f.toString(),E,M);else if(l.attachEvent)l.attachEvent(cr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function il(){function l(y){return f.call(l.src,l.listener,y)}const f=Vo;return l}function ds(l,f,y,E,M){if(Array.isArray(f))for(var j=0;j<f.length;j++)ds(l,f[j],y,E,M);else E=_(E)?!!E.capture:!!E,y=Lo(y),l&&l[be]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],y=Dr(j,y,E,M),-1<y&&(Et(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=fs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Dr(f,y,E,M)),(y=-1<l?f[l]:null)&&ur(y))}function ur(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[be])cs(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(cr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=fs(f))?(cs(y,l),y.h==0&&(y.src=null,f[Ii]=null)):Et(l)}}}function cr(l){return l in hs?hs[l]:hs[l]="on"+l}function Vo(l,f){if(l.da)l=!0;else{f=new Ae(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&ur(l),l=y.call(E,f)}return l}function fs(l){return l=l[Ii],l instanceof lr?l:null}var ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lo(l){return typeof l=="function"?l:(l[ps]||(l[ps]=function(f){return l.handleEvent(f)}),l[ps])}function ft(){z.call(this),this.i=new lr(this),this.M=this,this.F=null}G(ft,z),ft.prototype[be]=!0,ft.prototype.removeEventListener=function(l,f,y,E){ds(this,l,f,y,E)};function pt(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ne(f,l);else if(f instanceof ne)f.target=f.target||l;else{var M=f;f=new ne(E,l),P(f,M)}if(M=!0,y)for(var j=y.length-1;0<=j;j--){var ee=f.g=y[j];M=hr(ee,E,!0,f)&&M}if(ee=f.g=l,M=hr(ee,E,!0,f)&&M,M=hr(ee,E,!1,f)&&M,y)for(j=0;j<y.length;j++)ee=f.g=y[j],M=hr(ee,E,!1,f)&&M}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)Et(y[E]);delete l.g[f],l.h--}}this.F=null},ft.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},ft.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function hr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,j=0;j<f.length;++j){var ee=f[j];if(ee&&!ee.da&&ee.capture==y){var Ue=ee.listener,mt=ee.ha||ee.src;ee.fa&&cs(l.i,ee),M=Ue.call(mt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Mo(l,f,y){if(typeof l=="function")y&&(l=k(l,y));else if(l&&typeof l.handleEvent=="function")l=k(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function xr(l){l.g=Mo(()=>{l.g=null,l.i&&(l.i=!1,xr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Si extends z{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(l){z.call(this),this.h=l,this.g={}}G(Ai,z);var bo=[];function Fo(l){Se(l.g,function(f,y){this.g.hasOwnProperty(y)&&ur(f)},l),l.g={}}Ai.prototype.N=function(){Ai.aa.N.call(this),Fo(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Uo=m.JSON.stringify,jo=m.JSON.parse,zo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ci(){}Ci.prototype.h=null;function ms(l){return l.h||(l.h=l.i())}function gs(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){ne.call(this,"d")}G(jn,ne);function ys(){ne.call(this,"c")}G(ys,ne);var zn={},Bo=null;function Ri(){return Bo=Bo||new ft}zn.La="serverreachability";function $o(l){ne.call(this,zn.La,l)}G($o,ne);function dr(l){const f=Ri();pt(f,new $o(f))}zn.STAT_EVENT="statevent";function qo(l,f){ne.call(this,zn.STAT_EVENT,l),this.stat=f}G(qo,ne);function rt(l){const f=Ri();pt(f,new qo(f,l))}zn.Ma="timingevent";function vs(l,f){ne.call(this,zn.Ma,l),this.size=f}G(vs,ne);function Tn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function ki(){this.g=!0}ki.prototype.xa=function(){this.g=!1};function Pi(l,f,y,E,M,j){l.info(function(){if(l.g)if(j)for(var ee="",Ue=j.split("&"),mt=0;mt<Ue.length;mt++){var De=Ue[mt].split("=");if(1<De.length){var wt=De[0];De=De[1];var at=wt.split("_");ee=2<=at.length&&at[1]=="type"?ee+(wt+"="+De+"&"):ee+(wt+"=redacted&")}}else ee=null;else ee=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+f+`
`+y+`
`+ee})}function _s(l,f,y,E,M,j,ee){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+f+`
`+y+`
`+j+" "+ee})}function In(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Sc(l,y)+(E?" "+E:"")})}function Ho(l,f){l.info(function(){return"TIMEOUT: "+f})}ki.prototype.info=function(){};function Sc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var j=M[0];if(j!="noop"&&j!="stop"&&j!="close")for(var ee=1;ee<M.length;ee++)M[ee]=""}}}}return Uo(y)}catch{return f}}var Es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Ni(){}G(Ni,Ci),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Sn=new Ni;function An(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Ai(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ol}function ol(){this.i=null,this.g="",this.h=!1}var Wo={},ws={};function Ts(l,f,y){l.L=1,l.v=br(rn(f)),l.m=y,l.P=!0,Go(l,null)}function Go(l,f){l.F=Date.now(),$e(l),l.A=rn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Ur(y.i,"t",E),l.C=0,y=l.j.J,l.h=new ol,l.g=Sl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Si(k(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(bo[0]=M.toString()),M=bo);for(var j=0;j<M.length;j++){var ee=xo(y,M[j],E||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),dr(),Pi(l.i,l.u,l.A,l.l,l.R,l.m)}An.prototype.ca=function(l){l=l.target;const f=this.M;f&&Gt(l)==3?f.j():this.Y(l)},An.prototype.Y=function(l){try{if(l==this.g)e:{const at=Gt(this.g);var f=this.g.Ba();const fn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||Zo(this.g)))){this.J||at!=4||f==7||(f==8||0>=fn?dr(3):dr(2)),Di(this);var y=this.g.Z();this.X=y;t:if(al(this)){var E=Zo(this.g);l="";var M=E.length,j=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Or(this);var ee="";break t}this.h.i=new m.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(j&&f==M-1)});E.length=0,this.h.g+=l,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,_s(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,mt=this.g;if((Ue=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ve(Ue)){var De=Ue;break t}}De=null}if(y=De)In(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ko(this,y);else{this.o=!1,this.s=3,rt(12),hn(this),Or(this);break e}}if(this.P){y=!0;let on;for(;!this.J&&this.C<ee.length;)if(on=Ac(this,ee),on==ws){at==4&&(this.s=4,rt(14),y=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Wo){this.s=4,rt(15),In(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else In(this.i,this.l,on,null),Ko(this,on);if(al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||ee.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)In(this.i,this.l,ee,"[Invalid Chunked Response]"),hn(this),Or(this);else if(0<ee.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ta(wt),wt.M=!0,rt(11))}}else In(this.i,this.l,ee,null),Ko(this,ee);at==4&&hn(this),this.o&&!this.J&&(at==4?Os(this.j,this):(this.o=!1,$e(this)))}else ks(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),hn(this),Or(this)}}}catch{}finally{}};function al(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Ac(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?ws:(y=Number(f.substring(y,E)),isNaN(y)?Wo:(E+=1,E+y>f.length?ws:(f=f.slice(E,E+y),l.C=E+y,f)))}An.prototype.cancel=function(){this.J=!0,hn(this)};function $e(l){l.S=Date.now()+l.I,ll(l,l.I)}function ll(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Tn(k(l.ba,l),f)}function Di(l){l.B&&(m.clearTimeout(l.B),l.B=null)}An.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Ho(this.i,this.A),this.L!=2&&(dr(),rt(17)),hn(this),this.s=2,Or(this)):ll(this,this.S-l)};function Or(l){l.j.G==0||l.J||Os(l.j,l)}function hn(l){Di(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Fo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ko(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Bt(y.h,l))){if(!l.K&&Bt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)xs(y),Nn(y);else break e;Ds(y),rt(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=Tn(k(y.Za,y),6e3));if(1>=cl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else yr(y,11)}else if((l.K||y.g==l)&&xs(y),!ve(f))for(M=y.Da.g.parse(f),f=0;f<M.length;f++){let De=M[f];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const wt=De[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const at=De[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const fn=De[5];fn!=null&&typeof fn=="number"&&0<fn&&(E=1.5*fn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const on=l.g;if(on){const Fi=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var j=E.h;j.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Qo(j,j.h),j.h=null))}if(E.D){const Ls=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Ls&&(E.ya=Ls,ze(E.I,E.D,Ls))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var ee=l;if(E.qa=Il(E,E.J?E.ia:null,E.W),ee.K){hl(E.h,ee);var Ue=ee,mt=E.L;mt&&(Ue.I=mt),Ue.B&&(Di(Ue),$e(Ue)),E.g=ee}else bi(E);0<y.i.length&&Hn(y)}else De[0]!="stop"&&De[0]!="close"||yr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?yr(y,7):kt(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}dr(4)}catch{}}var ul=class{constructor(l,f){this.g=l,this.map=f}};function xi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function cl(l){return l.h?1:l.g?l.g.size:0}function Bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Qo(l,f){l.g?l.g.add(f):l.h=f}function hl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}xi.prototype.cancel=function(){if(this.i=dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function dl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return X(l.i)}function Is(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Ss(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Vr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Ss(l),E=Is(l),M=E.length,j=0;j<M;j++)f.call(void 0,E[j],y&&y[j],l)}var Oi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),M=null;if(0<=E){var j=l[y].substring(0,E);M=l[y].substring(E+1)}else j=l[y];f(j,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function fr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fr){this.h=l.h,Vi(this,l.j),this.o=l.o,this.g=l.g,Lr(this,l.s),this.l=l.l;var f=l.i,y=new Bn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Mr(this,y),this.m=l.m}else l&&(f=String(l).match(Oi))?(this.h=!1,Vi(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Lr(this,f[4]),this.l=Pe(f[5]||"",!0),Mr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}fr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Fr(f,As,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Fr(f,As,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Fr(y,y.charAt(0)=="/"?ml:pl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Fr(y,Yo)),l.join("")};function rn(l){return new fr(l)}function Vi(l,f,y){l.j=y?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Lr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Mr(l,f,y){f instanceof Bn?(l.i=f,$n(l.i,l.h)):(y||(f=Fr(f,gl)),l.i=new Bn(f,l.h))}function ze(l,f,y){l.i.set(f,y)}function br(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,fl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function fl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var As=/[#\/\?@]/g,pl=/[#\?:]/g,ml=/[#\?]/g,gl=/[#\?@]/g,Yo=/#/g;function Bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Rt(l){l.g||(l.g=new Map,l.h=0,l.i&&Cc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Bn.prototype,i.add=function(l,f){Rt(this),this.i=null,l=dn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Cn(l,f){Rt(l),f=dn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Rn(l,f){return Rt(l),f=dn(l,f),l.g.has(f)}i.forEach=function(l,f){Rt(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(f,M,E,this)},this)},this)},i.na=function(){Rt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const M=l[E];for(let j=0;j<M.length;j++)y.push(f[E])}return y},i.V=function(l){Rt(this);let f=[];if(typeof l=="string")Rn(this,l)&&(f=f.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return Rt(this),this.i=null,l=dn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Ur(l,f,y){Cn(l,f),0<y.length&&(l.i=null,l.g.set(dn(l,f),X(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const j=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var M=j;ee[E]!==""&&(M+="="+encodeURIComponent(String(ee[E]))),l.push(M)}}return this.i=l.join("&")};function dn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function $n(l,f){f&&!l.j&&(Rt(l),l.i=null,l.g.forEach(function(y,E){var M=E.toLowerCase();E!=M&&(Cn(this,E),Ur(this,M,y))},l)),l.j=f}function Rc(l,f){const y=new ki;if(m.Image){const E=new Image;E.onload=B(Wt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=B(Wt,y,"TestLoadImage: error",!1,f,E),E.onabort=B(Wt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=B(Wt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function yl(l,f){const y=new ki,E=new AbortController,M=setTimeout(()=>{E.abort(),Wt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?Wt(y,"TestPingServer: ok",!0,f):Wt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Wt(y,"TestPingServer: error",!1,f)})}function Wt(l,f,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function kc(){this.g=new zo}function vl(l,f,y){const E=y||"";try{Vr(l,function(M,j){let ee=M;_(M)&&(ee=Uo(M)),f.push(E+j+"="+encodeURIComponent(ee))})}catch(M){throw f.push(E+"type="+encodeURIComponent("_badmap")),M}}function pr(l){this.l=l.Ub||null,this.j=l.eb||!1}G(pr,Ci),pr.prototype.g=function(){return new Li(this.l,this.j)},pr.prototype.i=(function(l){return function(){return l}})({});function Li(l,f){ft.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(Li,ft),i=Li.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_l(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function _l(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?kn(this):Pn(this),this.readyState==3&&_l(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,kn(this))},i.Qa=function(l){this.g&&(this.response=l,kn(this))},i.ga=function(){this.g&&kn(this)};function kn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function mr(l){let f="";return Se(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function jr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=mr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):ze(l,f,y))}function Qe(l){ft.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Qe,ft);var Pc=/^https?$/i,Jo=["POST","PUT"];i=Qe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?ms(this.o):ms(Sn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){Mi(this,j);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),M=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Jo,f,void 0))||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ee]of y)this.g.setRequestHeader(j,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rs(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Mi(this,j)}};function Mi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Cs(l),sn(l)}function Cs(l){l.A||(l.A=!0,pt(l,"complete"),pt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pt(this,"complete"),pt(this,"abort"),sn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Xo(this):this.bb())},i.bb=function(){Xo(this)};function Xo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Gt(l)!=4||l.Z()!=2)){if(l.u&&Gt(l)==4)Mo(l.Ea,0,l);else if(pt(l,"readystatechange"),Gt(l)==4){l.h=!1;try{const ee=l.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=ee===0){var M=String(l.D).match(Oi)[1]||null;!M&&m.self&&m.self.location&&(M=m.self.location.protocol.slice(0,-1)),E=!Pc.test(M?M.toLowerCase():"")}y=E}if(y)pt(l,"complete"),pt(l,"success");else{l.m=6;try{var j=2<Gt(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",Cs(l)}}finally{sn(l)}}}}function sn(l,f){if(l.g){Rs(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||pt(l,"ready");try{y.onreadystatechange=E}catch{}}}function Rs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Gt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),jo(f)}};function Zo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ks(l){const f={};l=(l.g&&2<=Gt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ve(l[E]))continue;var y=x(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=f[M]||[];f[M]=j,j.push(y)}D(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function ea(l){this.Aa=0,this.i=[],this.j=new ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,l),this.cb=qn("retryDelaySeedMs",1e4,l),this.Wa=qn("forwardChannelMaxRetries",2,l),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new xi(l&&l.concurrentRequestLimit),this.Da=new kc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=ea.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){rt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Il(this,null,this.W),Hn(this)};function kt(l){if(Ps(l),l.G==3){var f=l.U++,y=rn(l.I);if(ze(y,"SID",l.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),gr(l,y),f=new An(l,l.j,f),f.L=2,f.v=br(rn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Sl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}Tl(l)}function Nn(l){l.g&&(ta(l),l.g.cancel(),l.g=null)}function Ps(l){Nn(l),l.u&&(m.clearTimeout(l.u),l.u=null),xs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Hn(l){if(!nn(l.h)&&!l.s){l.s=!0;var f=l.Ga;le||te(),Q||(le(),Q=!0),ue.add(f,l),l.B=0}}function Nc(l,f){return cl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Tn(k(l.Ga,l,f),wl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new An(this,this.j,l);let j=this.o;if(this.S&&(j?(j=I(j),P(j,this.S)):j=this.S),this.m!==null||this.O||(M.H=j,j=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=zr(this,M,f),y=rn(this.I),ze(y,"RID",l),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),gr(this,y),j&&(this.O?f="headers="+encodeURIComponent(String(mr(j)))+"&"+f:this.m&&jr(y,this.m,j)),Qo(this.h,M),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),M.T=!0,Ts(M,y,null)):Ts(M,y,f),this.G=2}}else this.G==3&&(l?Ns(this,l):this.i.length==0||nn(this.h)||Ns(this))};function Ns(l,f){var y;f?y=f.l:y=l.U++;const E=rn(l.I);ze(E,"SID",l.K),ze(E,"RID",y),ze(E,"AID",l.T),gr(l,E),l.m&&l.o&&jr(E,l.m,l.o),y=new An(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=zr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Qo(l.h,y),Ts(y,E,f)}function gr(l,f){l.H&&Se(l.H,function(y,E){ze(f,E,y)}),l.l&&Vr({},function(y,E){ze(f,E,y)})}function zr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?k(l.l.Na,l.l,l):null;e:{var M=l.i;let j=-1;for(;;){const ee=["count="+y];j==-1?0<y?(j=M[0].g,ee.push("ofs="+j)):j=0:ee.push("ofs="+j);let Ue=!0;for(let mt=0;mt<y;mt++){let De=M[mt].g;const wt=M[mt].map;if(De-=j,0>De)j=Math.max(0,M[mt].g-100),Ue=!1;else try{vl(wt,ee,"req"+De+"_")}catch{E&&E(wt)}}if(Ue){E=ee.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function bi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;le||te(),Q||(le(),Q=!0),ue.add(f,l),l.v=0}}function Ds(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Tn(k(l.Fa,l),wl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,El(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Tn(k(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Nn(this),El(this))};function ta(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function El(l){l.g=new An(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=rn(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),gr(l,f),l.m&&l.o&&jr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=br(rn(f)),y.m=null,y.P=!0,Go(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Nn(this),Ds(this),rt(19))};function xs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Os(l,f){var y=null;if(l.g==f){xs(l),ta(l),l.g=null;var E=2}else if(Bt(l.h,f))y=f.D,hl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;E=Ri(),pt(E,new vs(E,y)),Hn(l)}else bi(l);else if(M=f.s,M==3||M==0&&0<f.X||!(E==1&&Nc(l,f)||E==2&&Ds(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),M){case 1:yr(l,5);break;case 4:yr(l,10);break;case 3:yr(l,6);break;default:yr(l,2)}}}function wl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function yr(l,f){if(l.j.info("Error code "+f),f==2){var y=k(l.fb,l),E=l.Xa;const M=!E;E=new fr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Vi(E,"https"),br(E),M?Rc(E.toString(),y):yl(E.toString(),y)}else rt(2);l.G=0,l.l&&l.l.sa(f),Tl(l),Ps(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Tl(l){if(l.G=0,l.ka=[],l.l){const f=dl(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function Il(l,f,y){var E=y instanceof fr?rn(y):new fr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Lr(E,E.s);else{var M=m.location;E=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var j=new fr(null);E&&Vi(j,E),f&&(j.g=f),M&&Lr(j,M),y&&(j.l=y),E=j}return y=l.D,f=l.ya,y&&f&&ze(E,y,f),ze(E,"VER",l.la),gr(l,E),E}function Sl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Qe(new pr({eb:y})):new Qe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function na(){}i=na.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Vs(){}Vs.prototype.g=function(l,f){return new $t(l,f)};function $t(l,f){ft.call(this),this.g=new ea(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ve(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ve(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Wn(this)}G($t,ft),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){kt(this.g)},$t.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Uo(l),l=y);f.i.push(new ul(f.Ya++,l)),f.G==3&&Hn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,$t.aa.N.call(this)};function Al(l){jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}G(Al,jn);function Cl(){ys.call(this),this.status=1}G(Cl,ys);function Wn(l){this.g=l}G(Wn,na),Wn.prototype.ua=function(){pt(this.g,"a")},Wn.prototype.ta=function(l){pt(this.g,new Al(l))},Wn.prototype.sa=function(l){pt(this.g,new Cl)},Wn.prototype.ra=function(){pt(this.g,"b")},Vs.prototype.createWebChannel=Vs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,bv=function(){return new Vs},Mv=function(){return Ri()},Lv=zn,Sd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Es.NO_ERROR=0,Es.TIMEOUT=8,Es.HTTP_ERROR=6,Ou=Es,sl.COMPLETE="complete",Vv=sl,gs.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Na=gs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Ov=Qe}).apply(typeof wu<"u"?wu:typeof self<"u"?self:typeof window<"u"?window:{});const Ng="@firebase/firestore",Dg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Kd("@firebase/firestore");function ro(){return ss.logLevel}function ie(i,...e){if(ss.logLevel<=ke.DEBUG){const t=e.map(af);ss.debug(`Firestore (${Ro}): ${i}`,...t)}}function Nr(i,...e){if(ss.logLevel<=ke.ERROR){const t=e.map(af);ss.error(`Firestore (${Ro}): ${i}`,...t)}}function mi(i,...e){if(ss.logLevel<=ke.WARN){const t=e.map(af);ss.warn(`Firestore (${Ro}): ${i}`,...t)}}function af(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Fv(i,s,t)}function Fv(i,e,t){let s=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Nr(s),new Error(s)}function tt(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||Fv(e,o,s)}function Oe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends or{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class h1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class d1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class f1{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){tt(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new ho;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ho,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ho)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(tt(typeof s.accessToken=="string",31837,{l:s}),new Uv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class p1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class m1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new p1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,En(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){tt(this.o===void 0,3512);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(tt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=y1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Re(i,e){return i<e?-1:i>e?1:0}function Ad(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Re(s,o);{const u=jv(),h=v1(u.encode(Og(i,t)),u.encode(Og(e,t)));return h!==0?h:Re(s,o)}}t+=s>65535?2:1}return Re(i.length,e.length)}function Og(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function v1(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Re(i[t],e[t]);return Re(i.length,e.length)}function yo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="__name__";class Jn{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Jn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Re(e.length,t.length)}static compareSegments(e,t){const s=Jn.isNumericId(e),o=Jn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Jn.extractNumericId(e).compare(Jn.extractNumericId(t)):Ad(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return di.fromString(e.substring(4,e.length-2))}}class He extends Jn{construct(e,t,s){return new He(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const _1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends Jn{construct(e,t,s){return new jt(e,t,s)}static isValidIdentifier(e){return _1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vg}static keyField(){return new jt([Vg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new se(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new se(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(t)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(He.fromString(e))}static fromName(e){return new de(He.fromString(e).popFirst(5))}static empty(){return new de(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(i,e,t){if(!t)throw new se(Y.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function E1(i,e,t,s){if(e===!0&&s===!0)throw new se(Y.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Lg(i){if(!de.isDocumentKey(i))throw new se(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Mg(i){if(de.isDocumentKey(i))throw new se(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Bv(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function uc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te(12329,{type:typeof i})}function Vu(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new se(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uc(i);throw new se(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(i,e){const t={typeString:i};return e&&(t.value=e),t}function el(i,e){if(!Bv(i))throw new se(Y.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new se(Y.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=-62135596800,Fg=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Fg);return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bg)throw new se(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fg}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(el(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:ht("string",Xe._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Xe(0,0))}static max(){return new we(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=-1;function w1(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new gi(o,de.empty(),e)}function T1(i){return new gi(i.readTime,i.key,qa)}class gi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new gi(we.min(),de.empty(),qa)}static max(){return new gi(we.max(),de.empty(),qa)}}function I1(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Re(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(i){if(i.code!==Y.FAILED_PRECONDITION||i.message!==S1)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function C1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}hc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=-1;function dc(i){return i==null}function Gu(i){return i===0&&1/i==-1/0}function k1(i){return typeof i=="number"&&Number.isInteger(i)&&!Gu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="";function P1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Ug(e)),e=N1(i.get(t),e);return Ug(e)}function N1(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case $v:t+="";break;default:t+=u}}return t}function Ug(i){return i+$v+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Po(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function qv(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=o??Dt.EMPTY,this.right=u??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Dt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zg(this.data.getIterator())}getIteratorFrom(e){return new zg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class zg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new ai([])}unionWith(e){let t=new _t(jt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ai(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Hv("Invalid base64 string: "+u):u}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const D1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(i){if(tt(!!i,39018),typeof i=="string"){let e=0;const t=D1.exec(i);if(tt(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(i.seconds),nanos:st(i.nanos)}}function st(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function vi(i){return typeof i=="string"?xt.fromBase64String(i):xt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="server_timestamp",Gv="__type__",Kv="__previous_value__",Qv="__local_write_time__";function uf(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gv])===null||t===void 0?void 0:t.stringValue)===Wv}function fc(i){const e=i.mapValue.fields[Kv];return uf(e)?fc(e):e}function Ha(i){const e=yi(i.mapValue.fields[Qv].timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t,s,o,u,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Ku="(default)";class Wa{constructor(e,t){this.projectId=e,this.database=t||Ku}static empty(){return new Wa("","")}get isDefaultDatabase(){return this.database===Ku}isEqual(e){return e instanceof Wa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="__type__",O1="__max__",Iu={mapValue:{}},Jv="__vector__",Qu="value";function _i(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?uf(i)?4:L1(i)?9007199254740991:V1(i)?10:11:Te(28295,{value:i})}function sr(i,e){if(i===e)return!0;const t=_i(i);if(t!==_i(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ha(i).isEqual(Ha(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=yi(o.timestampValue),m=yi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return vi(o.bytesValue).isEqual(vi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return st(o.geoPointValue.latitude)===st(u.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return st(o.integerValue)===st(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=st(o.doubleValue),m=st(u.doubleValue);return h===m?Gu(h)===Gu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return yo(i.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(jg(h)!==jg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!sr(h[g],m[g])))return!1;return!0})(i,e);default:return Te(52216,{left:i})}}function Ga(i,e){return(i.values||[]).find((t=>sr(t,e)))!==void 0}function vo(i,e){if(i===e)return 0;const t=_i(i),s=_i(e);if(t!==s)return Re(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=st(u.integerValue||u.doubleValue),g=st(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return Bg(i.timestampValue,e.timestampValue);case 4:return Bg(Ha(i),Ha(e));case 5:return Ad(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=vi(u),g=vi(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Re(m[_],g[_]);if(w!==0)return w}return Re(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Re(st(u.latitude),st(h.latitude));return m!==0?m:Re(st(u.longitude),st(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return $g(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,_,w;const C=u.fields||{},k=h.fields||{},B=(m=C[Qu])===null||m===void 0?void 0:m.arrayValue,G=(g=k[Qu])===null||g===void 0?void 0:g.arrayValue,X=Re(((_=B==null?void 0:B.values)===null||_===void 0?void 0:_.length)||0,((w=G==null?void 0:G.values)===null||w===void 0?void 0:w.length)||0);return X!==0?X:$g(B,G)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Iu.mapValue&&h===Iu.mapValue)return 0;if(u===Iu.mapValue)return 1;if(h===Iu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let C=0;C<g.length&&C<w.length;++C){const k=Ad(g[C],w[C]);if(k!==0)return k;const B=vo(m[g[C]],_[w[C]]);if(B!==0)return B}return Re(g.length,w.length)})(i.mapValue,e.mapValue);default:throw Te(23264,{le:t})}}function Bg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Re(i,e);const t=yi(i),s=yi(e),o=Re(t.seconds,s.seconds);return o!==0?o:Re(t.nanos,s.nanos)}function $g(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=vo(t[o],s[o]);if(u)return u}return Re(t.length,s.length)}function _o(i){return Cd(i)}function Cd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=yi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return vi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return de.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Cd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Cd(t.fields[h])}`;return o+"}"})(i.mapValue):Te(61005,{value:i})}function Lu(i){switch(_i(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fc(i);return e?16+Lu(e):16;case 5:return 2*i.stringValue.length;case 6:return vi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Lu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Po(s.fields,((u,h)=>{o+=u.length+Lu(h)})),o})(i.mapValue);default:throw Te(13486,{value:i})}}function qg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Rd(i){return!!i&&"integerValue"in i}function cf(i){return!!i&&"arrayValue"in i}function Hg(i){return!!i&&"nullValue"in i}function Wg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ud(i){return!!i&&"mapValue"in i}function V1(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yv])===null||t===void 0?void 0:t.stringValue)===Jv}function ba(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Po(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ba(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ba(i.arrayValue.values[t]);return e}return Object.assign({},i)}function L1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===O1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.value=e}static empty(){return new Xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ud(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ba(t)}setAll(e){let t=jt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=ba(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());ud(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];ud(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Po(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Xn(ba(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,we.min(),we.min(),we.min(),Xn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,we.min(),we.min(),Xn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,we.min(),we.min(),Xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.position=e,this.inclusive=t}}function Gg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=vo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!sr(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t="asc"){this.field=e,this.dir=t}}function M1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{}class ct extends Xv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new F1(e,t,s):t==="array-contains"?new z1(e,s):t==="in"?new B1(e,s):t==="not-in"?new $1(e,s):t==="array-contains-any"?new q1(e,s):new ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new U1(e,s):new j1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vo(t,this.value)):t!==null&&_i(this.value)===_i(t)&&this.matchesComparison(vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Un extends Xv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Un(e,t)}matches(e){return Zv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Zv(i){return i.op==="and"}function e_(i){return b1(i)&&Zv(i)}function b1(i){for(const e of i.filters)if(e instanceof Un)return!1;return!0}function kd(i){if(i instanceof ct)return i.field.canonicalString()+i.op.toString()+_o(i.value);if(e_(i))return i.filters.map((e=>kd(e))).join(",");{const e=i.filters.map((t=>kd(t))).join(",");return`${i.op}(${e})`}}function t_(i,e){return i instanceof ct?(function(s,o){return o instanceof ct&&s.op===o.op&&s.field.isEqual(o.field)&&sr(s.value,o.value)})(i,e):i instanceof Un?(function(s,o){return o instanceof Un&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&t_(h,o.filters[m])),!0):!1})(i,e):void Te(19439)}function n_(i){return i instanceof ct?(function(t){return`${t.field.canonicalString()} ${t.op} ${_o(t.value)}`})(i):i instanceof Un?(function(t){return t.op.toString()+" {"+t.getFilters().map(n_).join(" ,")+"}"})(i):"Filter"}class F1 extends ct{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class U1 extends ct{constructor(e,t){super(e,"in",t),this.keys=r_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class j1 extends ct{constructor(e,t){super(e,"not-in",t),this.keys=r_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function r_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>de.fromName(s.referenceValue)))}class z1 extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cf(t)&&Ga(t.arrayValue,this.value)}}class B1 extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ga(this.value.arrayValue,t)}}class $1 extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ga(this.value.arrayValue,t)}}class q1 extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ga(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function Qg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new H1(i,e,t,s,o,u,h)}function hf(i){const e=Oe(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>kd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),dc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>_o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>_o(s))).join(",")),e.Pe=t}return e.Pe}function df(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!M1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!t_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Kg(i.startAt,e.startAt)&&Kg(i.endAt,e.endAt)}function Pd(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function W1(i,e,t,s,o,u,h,m){return new No(i,e,t,s,o,u,h,m)}function ff(i){return new No(i)}function Yg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function i_(i){return i.collectionGroup!==null}function Fa(i){const e=Oe(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new _t(jt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Ka(u,s))})),t.has(jt.keyField().canonicalString())||e.Te.push(new Ka(jt.keyField(),s))}return e.Te}function nr(i){const e=Oe(i);return e.Ie||(e.Ie=G1(e,Fa(i))),e.Ie}function G1(i,e){if(i.limitType==="F")return Qg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ka(o.field,u)}));const t=i.endAt?new Yu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Yu(i.startAt.position,i.startAt.inclusive):null;return Qg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Nd(i,e){const t=i.filters.concat([e]);return new No(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Dd(i,e,t){return new No(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function pc(i,e){return df(nr(i),nr(e))&&i.limitType===e.limitType}function s_(i){return`${hf(nr(i))}|lt:${i.limitType}`}function io(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>n_(o))).join(", ")}]`),dc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>_o(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>_o(o))).join(",")),`Target(${s})`})(nr(i))}; limitType=${i.limitType})`}function mc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Fa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Gg(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Fa(s),o)||s.endAt&&!(function(h,m,g){const _=Gg(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Fa(s),o))})(i,e)}function K1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function o_(i){return(e,t)=>{let s=!1;for(const o of Fa(i)){const u=Q1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function Q1(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?vo(g,_):Te(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Po(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return qv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=new ot(de.comparator);function Ei(){return Y1}const a_=new ot(de.comparator);function Da(...i){let e=a_;for(const t of i)e=e.insert(t.key,t);return e}function J1(i){let e=a_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Zi(){return Ua()}function l_(){return Ua()}function Ua(){return new ls((i=>i.toString()),((i,e)=>i.isEqual(e)))}const X1=new _t(de.comparator);function Le(...i){let e=X1;for(const t of i)e=e.add(t);return e}const Z1=new _t(Re);function eS(){return Z1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gu(e)?"-0":e}}function u_(i){return{integerValue:""+i}}function tS(i,e){return k1(e)?u_(e):pf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this._=void 0}}function nS(i,e,t){return i instanceof xd?(function(o,u){const h={fields:{[Gv]:{stringValue:Wv},[Qv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&uf(u)&&(u=fc(u)),u&&(h.fields[Kv]=u),{mapValue:h}})(t,e):i instanceof Ju?c_(i,e):i instanceof Xu?h_(i,e):(function(o,u){const h=iS(o,u),m=Jg(h)+Jg(o.Ee);return Rd(h)&&Rd(o.Ee)?u_(m):pf(o.serializer,m)})(i,e)}function rS(i,e,t){return i instanceof Ju?c_(i,e):i instanceof Xu?h_(i,e):t}function iS(i,e){return i instanceof Od?(function(s){return Rd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class xd extends gc{}class Ju extends gc{constructor(e){super(),this.elements=e}}function c_(i,e){const t=d_(e);for(const s of i.elements)t.some((o=>sr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Xu extends gc{constructor(e){super(),this.elements=e}}function h_(i,e){let t=d_(e);for(const s of i.elements)t=t.filter((o=>!sr(o,s)));return{arrayValue:{values:t}}}class Od extends gc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Jg(i){return st(i.integerValue||i.doubleValue)}function d_(i){return cf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function sS(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ju&&o instanceof Ju||s instanceof Xu&&o instanceof Xu?yo(s.elements,o.elements,sr):s instanceof Od&&o instanceof Od?sr(s.Ee,o.Ee):s instanceof xd&&o instanceof xd})(i.transform,e.transform)}class es{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new es}static exists(e){return new es(void 0,e)}static updateTime(e){return new es(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class mf{}function f_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new aS(i.key,es.none()):new gf(i.key,i.data,es.none());{const t=i.data,s=Xn.empty();let o=new _t(jt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new yc(i.key,s,new ai(o.toArray()),es.none())}}function oS(i,e,t){i instanceof gf?(function(o,u,h){const m=o.value.clone(),g=Zg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof yc?(function(o,u,h){if(!Mu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Zg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(p_(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ja(i,e,t,s){return i instanceof gf?(function(u,h,m,g){if(!Mu(u.precondition,h))return m;const _=u.value.clone(),w=ey(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof yc?(function(u,h,m,g){if(!Mu(u.precondition,h))return m;const _=ey(u.fieldTransforms,g,h),w=h.data;return w.setAll(p_(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((C=>C.field)))})(i,e,t,s):(function(u,h,m){return Mu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function Xg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&yo(s,o,((u,h)=>sS(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class gf extends mf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class yc extends mf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function p_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Zg(i,e,t){const s=new Map;tt(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,rS(h,m,t[o]))}return s}function ey(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,nS(u,h,e))}return s}class aS extends mf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&oS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ja(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ja(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=l_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=f_(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Le())}isEqual(e){return this.batchId===e.batchId&&yo(this.mutations,e.mutations,((t,s)=>Xg(t,s)))&&yo(this.baseMutations,e.baseMutations,((t,s)=>Xg(t,s)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,xe;function m_(i){if(i===void 0)return Nr("GRPC error has no .code"),Y.UNKNOWN;switch(i){case ut.OK:return Y.OK;case ut.CANCELLED:return Y.CANCELLED;case ut.UNKNOWN:return Y.UNKNOWN;case ut.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ut.INTERNAL:return Y.INTERNAL;case ut.UNAVAILABLE:return Y.UNAVAILABLE;case ut.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ut.NOT_FOUND:return Y.NOT_FOUND;case ut.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ut.ABORTED:return Y.ABORTED;case ut.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ut.DATA_LOSS:return Y.DATA_LOSS;default:return Te(39323,{code:i})}}(xe=ut||(ut={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=new di([4294967295,4294967295],0);function ty(i){const e=jv().encode(i),t=new xv;return t.update(e),new Uint8Array(t.digest())}function ny(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new di([t,s],0),new di([o,u],0)]}class yf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new xa(`Invalid padding: ${t}`);if(s<0)throw new xa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new xa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=di.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(di.fromNumber(s)));return o.compare(hS)===1&&(o=new di([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ty(e),[s,o]=ny(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new yf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=ty(e),[s,o]=ny(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new vc(we.min(),o,new ot(Re),Ei(),Le())}}class tl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new tl(s,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class g_{constructor(e,t){this.targetId=e,this.De=t}}class y_{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ry{constructor(){this.ve=0,this.Ce=iy(),this.Fe=xt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),t=Le(),s=Le();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Te(38017,{changeType:u})}})),new tl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=iy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,tt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class dS{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ei(),this.je=Su(),this.Je=Su(),this.He=new ot(Re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Pd(u))if(s===0){const h=new de(u.path);this.Xe(t,h,Ut.newNoDocument(h,we.min()))}else tt(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=vi(s).toUint8Array()}catch(g){if(g instanceof Hv)return mi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new yf(h,o,u)}catch(g){return mi(g instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&Pd(m.target)){const g=new de(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Ut.newNoDocument(g,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=Le();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new vc(e,t,this.He,this.ze,s);return this.ze=Ei(),this.je=Su(),this.Je=Su(),this.He=new ot(Re),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ry,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new _t(Re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new _t(Re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ry),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Su(){return new ot(de.comparator)}function iy(){return new ot(de.comparator)}const fS={asc:"ASCENDING",desc:"DESCENDING"},pS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mS={and:"AND",or:"OR"};class gS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vd(i,e){return i.useProto3Json||dc(e)?e:{value:e}}function Ld(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function fo(i){return tt(!!i,49232),we.fromTimestamp((function(t){const s=yi(t);return new Xe(s.seconds,s.nanos)})(i))}function __(i,e){return Md(i,e).canonicalString()}function Md(i,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function E_(i){const e=He.fromString(i);return tt(A_(e),10190,{key:e.toString()}),e}function cd(i,e){const t=E_(e);if(t.get(1)!==i.databaseId.projectId)throw new se(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new se(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(T_(t))}function w_(i,e){return __(i.databaseId,e)}function yS(i){const e=E_(i);return e.length===4?He.emptyPath():T_(e)}function sy(i){return new He(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function T_(i){return tt(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function vS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Te(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(tt(w===void 0||typeof w=="string",58123),xt.fromBase64String(w||"")):(tt(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),xt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?Y.UNKNOWN:m_(_.code);return new se(w,_.message||"")})(h);t=new y_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=cd(i,s.document.name),u=fo(s.document.updateTime),h=s.document.createTime?fo(s.document.createTime):we.min(),m=new Xn({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new bu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=cd(i,s.document),u=s.readTime?fo(s.readTime):we.min(),h=Ut.newNoDocument(o,u),m=s.removedTargetIds||[];t=new bu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=cd(i,s.document),u=s.removedTargetIds||[];t=new bu([],u,o,null)}else{if(!("filter"in e))return Te(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new cS(o,u),m=s.targetId;t=new g_(m,h)}}return t}function _S(i,e){return{documents:[w_(i,e.path)]}}function ES(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=w_(i,o);const u=(function(_){if(_.length!==0)return S_(Un.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(k){return{field:so(k.field),direction:IS(k.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Vd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function wS(i){let e=yS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){tt(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(C){const k=I_(C);return k instanceof Un&&e_(k)?k.getFilters():[k]})(t.where));let h=[];t.orderBy&&(h=(function(C){return C.map((k=>(function(G){return new Ka(oo(G.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(G.direction))})(k)))})(t.orderBy));let m=null;t.limit&&(m=(function(C){let k;return k=typeof C=="object"?C.value:C,dc(k)?null:k})(t.limit));let g=null;t.startAt&&(g=(function(C){const k=!!C.before,B=C.values||[];return new Yu(B,k)})(t.startAt));let _=null;return t.endAt&&(_=(function(C){const k=!C.before,B=C.values||[];return new Yu(B,k)})(t.endAt)),W1(e,o,h,u,m,"F",g,_)}function TS(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function I_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=oo(t.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=oo(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=oo(t.unaryFilter.field);return ct.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=oo(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ct.create(oo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Un.create(t.compositeFilter.filters.map((s=>I_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(i):Te(30097,{filter:i})}function IS(i){return fS[i]}function SS(i){return pS[i]}function AS(i){return mS[i]}function so(i){return{fieldPath:i.canonicalString()}}function oo(i){return jt.fromServerFormat(i.fieldPath)}function S_(i){return i instanceof ct?(function(t){if(t.op==="=="){if(Wg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NAN"}};if(Hg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NOT_NAN"}};if(Hg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:so(t.field),op:SS(t.op),value:t.value}}})(i):i instanceof Un?(function(t){const s=t.getFilters().map((o=>S_(o)));return s.length===1?s[0]:{compositeFilter:{op:AS(t.op),filters:s}}})(i):Te(54877,{filter:i})}function A_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,s,o,u=we.min(),h=we.min(),m=xt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.gt=e}}function RS(i){const e=wS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Dd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(){this.Dn=new PS}addToCollectionParentIndex(e,t){return this.Dn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(gi.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(gi.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class PS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new _t(He.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new _t(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},C_=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(C_,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Eo(0)}static ur(){return new Eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="LruGarbageCollector",NS=1048576;function ly([i,e],[t,s]){const o=Re(i,t);return o===0?Re(e,s):o}class DS{constructor(e){this.Tr=e,this.buffer=new _t(ly),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ly(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(ay,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?ie(ay,"Ignoring IndexedDB error during garbage collection: ",t):await cc(t)}await this.Rr(3e5)}))}}class OS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(hc.ue);const s=new DS(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(oy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((C=>(C>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,h=Date.now(),this.nthSequenceNumber(e,o)))).next((C=>(s=C,m=Date.now(),this.removeTargets(e,s,t)))).next((C=>(u=C,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((C=>(_=Date.now(),ro()<=ke.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${C} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C}))))}}function VS(i,e){return new OS(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.changes=new ls((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&ja(s.mutation,o,ai.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Le()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Le()){const o=Zi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Da();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Zi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Le())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Ei();const h=Ua(),m=(function(){return Ua()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof yc)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),ja(w.mutation,_,w.mutation.getFieldMask(),Xe.now())):h.set(_.key,ai.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var C;return m.set(_,new MS(w,(C=h.get(_))!==null&&C!==void 0?C:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Ua();let o=new ot(((h,m)=>h-m)),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||ai.empty();w=m.applyToLocalView(_,w),s.set(g,w);const C=(o.get(m.batchId)||Le()).add(g);o=o.insert(m.batchId,C)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,C=l_();w.forEach((k=>{if(!u.has(k)){const B=f_(t.get(k),s.get(k));B!==null&&C.set(k,B),u=u.add(k)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,C))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):i_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(Zi());let m=qa,g=u;return h.next((_=>$.forEach(_,((w,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((k=>{g=g.insert(w,k)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Le()))).next((w=>({batchId:m,changes:J1(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=Da();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Da();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(g=>{const _=(function(C,k){return new No(k,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((C,k)=>{h=h.insert(C,k)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))}));let m=Da();return h.forEach(((g,_)=>{const w=u.get(g);w!==void 0&&ja(w.mutation,_,ai.empty(),Xe.now()),mc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return $.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:fo(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:RS(o.bundledQuery),readTime:fo(o.readTime)}})(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.overlays=new ot(de.comparator),this.kr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Zi();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=Zi(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ot(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=Zi(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=Zi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return $.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new uS(t,s));let u=this.kr.get(t);u===void 0&&(u=Le(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.qr=new _t(At.Qr),this.$r=new _t(At.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new At(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new At(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new de(new He([])),s=new At(t,e),o=new At(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new de(new He([])),s=new At(t,e),o=new At(t,e+1);let u=Le();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new At(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return de.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new _t(At.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new lS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new At(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?R1:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _t(Re);return t.forEach((o=>{const u=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),$.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new At(new de(u),0);let m=new _t(Re);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)}),h),$.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){tt(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return $.forEach(t.mutations,(o=>{const u=new At(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new At(t,0),o=this.Yr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.ni=e,this.docs=(function(){return new ot(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Ei();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ei();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||I1(T1(w),s)<=0||(o.has(w.key)||mc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Te(9500)}ri(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new $S(this)}getSize(e){return $.resolve(this.size)}}class $S extends LS{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.persistence=e,this.ii=new ls((t=>hf(t)),df),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new vf,this.targetCount=0,this._i=Eo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),$.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Eo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.hr(t),$.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t){this.ai={},this.overlays={},this.ui=new hc(0),this.ci=!1,this.ci=!0,this.li=new jS,this.referenceDelegate=e(this),this.hi=new qS(this),this.indexManager=new kS,this.remoteDocumentCache=(function(o){return new BS(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new CS(t),this.Ti=new FS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new US,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new zS(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new HS(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return $.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class HS extends A1{constructor(e){super(),this.currentSequenceNumber=e}}class _f{constructor(e){this.persistence=e,this.Ai=new vf,this.Ri=null}static Vi(e){return new _f(e)}get mi(){if(this.Ri)return this.Ri;throw Te(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(s=>{const o=de.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,we.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return $.or([()=>$.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Zu{constructor(e,t){this.persistence=e,this.gi=new ls((s=>P1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=VS(this,t)}static Vi(e,t){return new Zu(e,t)}Ii(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return $.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,we.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Lu(e.data.value)),t}Sr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ef(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Vw()?8:C1(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new WS;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(ro()<=ke.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(ro()<=ke.DEBUG&&ie("QueryEngine","Query:",io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(ro()<=ke.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):$.resolve())}ps(e,t){if(Yg(t))return $.resolve(null);let s=nr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Dd(t,null,"F"),s=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Le(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,m);return this.Ds(t,_,h,g.readTime)?this.ps(e,Dd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return Yg(t)||o.isEqual(we.min())?$.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?$.resolve(null):(ro()<=ke.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),io(t)),this.vs(e,h,t,w1(o,qa)).next((m=>m)))}))}bs(e,t){let s=new _t(o_(e));return t.forEach(((o,u)=>{mc(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return ro()<=ke.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",io(t)),this.gs.getDocumentsMatchingQuery(e,t,gi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="LocalStore",KS=3e8;class QS{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new ot(Re),this.Ms=new ls((u=>hf(u)),df),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bS(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function YS(i,e,t,s){return new QS(i,e,t,s)}async function k_(i,e){const t=Oe(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Le();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function P_(i){const e=Oe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function JS(i,e){const t=Oe(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((w,C)=>{const k=o.get(C);if(!k)return;m.push(t.hi.removeMatchingKeys(u,w.removedDocuments,C).next((()=>t.hi.addMatchingKeys(u,w.addedDocuments,C))));let B=k.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?B=B.withResumeToken(xt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,s)),o=o.insert(C,B),(function(X,W,Ie){return X.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=KS?!0:Ie.addedDocuments.size+Ie.modifiedDocuments.size+Ie.removedDocuments.size>0})(k,B,w)&&m.push(t.hi.updateTargetData(u,B))}));let g=Ei(),_=Le();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(XS(u,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!s.isEqual(we.min())){const w=t.hi.getLastRemoteSnapshotVersion(u).next((C=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.Fs=o,u)))}function XS(i,e,t){let s=Le(),o=Le();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Ei();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ie(wf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function ZS(i,e){const t=Oe(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new li(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function bd(i,e,t){const s=Oe(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ko(h))throw h;ie(wf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function uy(i,e,t){const s=Oe(i);let o=we.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const C=Oe(g),k=C.Ms.get(w);return k!==void 0?$.resolve(C.Fs.get(k)):C.hi.getTargetData(_,w)})(s,h,nr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:Le()))).next((m=>(eA(s,K1(e),m),{documents:m,qs:u})))))}function eA(i,e,t){let s=i.xs.get(e)||we.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.xs.set(e,s)}class cy{constructor(){this.activeTargetIds=eS()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tA{constructor(){this.Fo=new cy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new cy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="ConnectivityMonitor";class dy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(hy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(hy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au=null;function Fd(){return Au===null?Au=(function(){return 268435456+Math.round(2147483648*Math.random())})():Au++,"0x"+Au.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="RestConnection",rA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Ku?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Fd(),m=this.Go(e,t.toUriEncodedString());ie(hd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:_}=new URL(m),w=os(_);return this.jo(e,m,g,s,w).then((C=>(ie(hd,`Received RPC '${e}' ${h}: `,C),C)),(C=>{throw mi(hd,`RPC '${e}' ${h} failed with error: `,C,"url: ",m,"request:",s),C}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ro})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=rA[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class oA extends iA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=Fd();return new Promise(((m,g)=>{const _=new Ov;_.setWithCredentials(!0),_.listenOnce(Vv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Ou.NO_ERROR:const C=_.getResponseJson();ie(bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(C)),m(C);break;case Ou.TIMEOUT:ie(bt,`RPC '${e}' ${h} timed out`),g(new se(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const k=_.getStatus();if(ie(bt,`RPC '${e}' ${h} failed with status:`,k,"response text:",_.getResponseText()),k>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const G=B==null?void 0:B.error;if(G&&G.status&&G.message){const X=(function(Ie){const ve=Ie.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(ve)>=0?ve:Y.UNKNOWN})(G.status);g(new se(X,G.message))}else g(new se(Y.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new se(Y.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ie(bt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ie(bt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=Fd(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=bv(),m=Mv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");ie(bt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const C=h.createWebChannel(w,g);this.T_(C);let k=!1,B=!1;const G=new sA({Ho:W=>{B?ie(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(k||(ie(bt,`Opening RPC '${e}' stream ${o} transport.`),C.open(),k=!0),ie(bt,`RPC '${e}' stream ${o} sending:`,W),C.send(W))},Yo:()=>C.close()}),X=(W,Ie,ve)=>{W.listen(Ie,(me=>{try{ve(me)}catch(_e){setTimeout((()=>{throw _e}),0)}}))};return X(C,Na.EventType.OPEN,(()=>{B||(ie(bt,`RPC '${e}' stream ${o} transport opened.`),G.s_())})),X(C,Na.EventType.CLOSE,(()=>{B||(B=!0,ie(bt,`RPC '${e}' stream ${o} transport closed`),G.__(),this.I_(C))})),X(C,Na.EventType.ERROR,(W=>{B||(B=!0,mi(bt,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),G.__(new se(Y.UNAVAILABLE,"The operation could not be completed")))})),X(C,Na.EventType.MESSAGE,(W=>{var Ie;if(!B){const ve=W.data[0];tt(!!ve,16349);const me=ve,_e=(me==null?void 0:me.error)||((Ie=me[0])===null||Ie===void 0?void 0:Ie.error);if(_e){ie(bt,`RPC '${e}' stream ${o} received error:`,_e);const je=_e.status;let Se=(function(A){const P=ut[A];if(P!==void 0)return m_(P)})(je),D=_e.message;Se===void 0&&(Se=Y.INTERNAL,D="Unknown error status: "+je+" with message "+_e.message),B=!0,G.__(new se(Se,D)),C.close()}else ie(bt,`RPC '${e}' stream ${o} received:`,ve),G.a_(ve)}})),X(m,Lv.STAT_EVENT,(W=>{W.stat===Sd.PROXY?ie(bt,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===Sd.NOPROXY&&ie(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{G.o_()}),0),G}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function dd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(i){return new gS(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="PersistentStream";class aA{constructor(e,t,s,o,u,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new N_(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Nr(t.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new se(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ie(fy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ie(fy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lA extends aA{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=vS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?fo(h.readTime):we.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=sy(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Pd(g)?{documents:_S(u,g)}:{query:ES(u,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=v_(u,h.resumeToken);const _=Vd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=Ld(u,h.snapshotVersion.toTimestamp());const _=Vd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=TS(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=sy(this.serializer),t.removeTarget=e,this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{}class cA extends uA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new se(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Md(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(Y.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Md(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se(Y.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class hA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Nr(t),this._a=!1):ie("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="RemoteStore";class dA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{rl(this)&&(ie(wo,"Restarting streams for network reachability change."),await(async function(g){const _=Oe(g);_.Ia.add(4),await nl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Ec(_)})(this))}))})),this.Aa=new hA(s,o)}}async function Ec(i){if(rl(i))for(const e of i.da)await e(!0)}async function nl(i){for(const e of i.da)await e(!1)}function D_(i,e){const t=Oe(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Af(t)?Sf(t):Do(t).x_()&&If(t,e))}function Tf(i,e){const t=Oe(i),s=Do(t);t.Ta.delete(e),s.x_()&&x_(t,e),t.Ta.size===0&&(s.x_()?s.B_():rl(t)&&t.Aa.set("Unknown"))}function If(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Do(i).H_(e)}function x_(i,e){i.Ra.$e(e),Do(i).Y_(e)}function Sf(i){i.Ra=new dS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Do(i).start(),i.Aa.aa()}function Af(i){return rl(i)&&!Do(i).M_()&&i.Ta.size>0}function rl(i){return Oe(i).Ia.size===0}function O_(i){i.Ra=void 0}async function fA(i){i.Aa.set("Online")}async function pA(i){i.Ta.forEach(((e,t)=>{If(i,e)}))}async function mA(i,e){O_(i),Af(i)?(i.Aa.la(e),Sf(i)):i.Aa.set("Unknown")}async function gA(i,e,t){if(i.Aa.set("Online"),e instanceof y_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(i,e)}catch(s){ie(wo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await py(i,s)}else if(e instanceof bu?i.Ra.Ye(e):e instanceof g_?i.Ra.it(e):i.Ra.et(e),!t.isEqual(we.min()))try{const s=await P_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ta.get(_);w&&u.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const w=u.Ta.get(g);if(!w)return;u.Ta.set(g,w.withResumeToken(xt.EMPTY_BYTE_STRING,w.snapshotVersion)),x_(u,g);const C=new li(w.target,g,_,w.sequenceNumber);If(u,C)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ie(wo,"Failed to raise snapshot:",s),await py(i,s)}}async function py(i,e,t){if(!ko(e))throw e;i.Ia.add(1),await nl(i),i.Aa.set("Offline"),t||(t=()=>P_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ie(wo,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await Ec(i)}))}async function my(i,e){const t=Oe(i);t.asyncQueue.verifyOperationInProgress(),ie(wo,"RemoteStore received new credentials");const s=rl(t);t.Ia.add(3),await nl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ec(t)}async function yA(i,e){const t=Oe(i);e?(t.Ia.delete(2),await Ec(t)):e||(t.Ia.add(2),await nl(t),t.Aa.set("Unknown"))}function Do(i){return i.Va||(i.Va=(function(t,s,o){const u=Oe(t);return u.ia(),new lA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:fA.bind(null,i),e_:pA.bind(null,i),n_:mA.bind(null,i),J_:gA.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),Af(i)?Sf(i):i.Aa.set("Unknown")):(await i.Va.stop(),O_(i))}))),i.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ho,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Cf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function V_(i,e){if(Nr("AsyncQueue",`${e}: ${i}`),ko(i))return new se(Y.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Da(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.fa=new ot(de.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Te(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class To{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new To(e,t,po.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class _A{constructor(){this.queries=yy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Oe(t),u=o.queries;o.queries=yy(),u.forEach(((h,m)=>{for(const g of m.wa)g.onError(s)}))})(this,new se(Y.ABORTED,"Firestore shutting down"))}}function yy(){return new ls((i=>s_(i)),pc)}async function EA(i,e){const t=Oe(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new vA,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=V_(h,`Initialization of query '${io(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&Rf(t)}async function wA(i,e){const t=Oe(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function TA(i,e){const t=Oe(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Rf(t)}function IA(i,e,t){const s=Oe(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function Rf(i){i.Da.forEach((e=>{e.next()}))}var Ud,vy;(vy=Ud||(Ud={})).Fa="default",vy.Cache="cache";class SA{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new To(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ud.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.key=e}}class M_{constructor(e){this.key=e}}class AA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=o_(e),this.eu=new po(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new gy,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,C)=>{const k=o.get(w),B=mc(this.query,C)?C:null,G=!!k&&this.mutatedKeys.has(k.key),X=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let W=!1;k&&B?k.data.isEqual(B.data)?G!==X&&(s.track({type:3,doc:B}),W=!0):this.iu(k,B)||(s.track({type:2,doc:B}),W=!0,(g&&this.Xa(B,g)>0||_&&this.Xa(B,_)<0)&&(m=!0)):!k&&B?(s.track({type:0,doc:B}),W=!0):k&&!B&&(s.track({type:1,doc:k}),W=!0,(g||_)&&(m=!0)),W&&(B?(h=h.add(B),u=X?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,C)=>(function(B,G){const X=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{At:W})}};return X(B)-X(G)})(w.type,C.type)||this.Xa(w.doc,C.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new To(this.query,e.eu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new gy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new M_(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new L_(s))})),t}uu(e){this.Ha=e.qs,this.Za=Le();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return To.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const kf="SyncEngine";class CA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class RA{constructor(e){this.key=e,this.lu=!1}}class kA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ls((m=>s_(m)),pc),this.Tu=new Map,this.Iu=new Set,this.du=new ot(de.comparator),this.Eu=new Map,this.Au=new vf,this.Ru={},this.Vu=new Map,this.mu=Eo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function PA(i,e,t=!0){const s=z_(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await b_(s,e,t,!0),o}async function NA(i,e){const t=z_(i);await b_(t,e,!0,!1)}async function b_(i,e,t,s){const o=await ZS(i.localStore,nr(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await DA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&D_(i.remoteStore,o),m}async function DA(i,e,t,s,o){i.gu=(C,k,B)=>(async function(X,W,Ie,ve){let me=W.view.nu(Ie);me.Ds&&(me=await uy(X.localStore,W.query,!1).then((({documents:D})=>W.view.nu(D,me))));const _e=ve&&ve.targetChanges.get(W.targetId),je=ve&&ve.targetMismatches.get(W.targetId)!=null,Se=W.view.applyChanges(me,X.isPrimaryClient,_e,je);return Ey(X,W.targetId,Se._u),Se.snapshot})(i,C,k,B);const u=await uy(i.localStore,e,!0),h=new AA(e,u.qs),m=h.nu(u.documents),g=tl.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,g);Ey(i,t,_._u);const w=new CA(e,t,h);return i.Pu.set(e,w),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),_.snapshot}async function xA(i,e,t){const s=Oe(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!pc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await bd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Tf(s.remoteStore,o.targetId),jd(s,o.targetId)})).catch(cc)):(jd(s,o.targetId),await bd(s.localStore,o.targetId,!0))}async function OA(i,e){const t=Oe(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Tf(t.remoteStore,s.targetId))}async function F_(i,e){const t=Oe(i);try{const s=await JS(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(tt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?tt(h.lu,14607):o.removedDocuments.size>0&&(tt(h.lu,42227),h.lu=!1))})),await j_(t,s,e)}catch(s){await cc(s)}}function _y(i,e,t){const s=Oe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Oe(h);g.onlineState=m;let _=!1;g.queries.forEach(((w,C)=>{for(const k of C.wa)k.va(m)&&(_=!0)})),_&&Rf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function VA(i,e,t){const s=Oe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new ot(de.comparator);h=h.insert(u,Ut.newNoDocument(u,we.min()));const m=Le().add(u),g=new vc(we.min(),new Map,new ot(Re),h,m);await F_(s,g),s.du=s.du.remove(u),s.Eu.delete(e),Pf(s)}else await bd(s.localStore,e,!1).then((()=>jd(s,e,t))).catch(cc)}function jd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||U_(i,s)}))}function U_(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Tf(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),Pf(i))}function Ey(i,e,t){for(const s of t)s instanceof L_?(i.Au.addReference(s.key,e),LA(i,s)):s instanceof M_?(ie(kf,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||U_(i,s.key)):Te(19791,{yu:s})}function LA(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(ie(kf,"New document in limbo: "+t),i.Iu.add(s),Pf(i))}function Pf(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new de(He.fromString(e)),s=i.mu.next();i.Eu.set(s,new RA(t)),i.du=i.du.insert(t,s),D_(i.remoteStore,new li(nr(ff(t.path)),s,"TargetPurposeLimboResolution",hc.ue))}}async function j_(i,e,t){const s=Oe(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,g)=>{h.push(s.gu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const C=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,C?"current":"not-current")}if(_){o.push(_);const C=Ef.Es(g.targetId,_);u.push(C)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const w=Oe(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(C=>$.forEach(_,(k=>$.forEach(k.Is,(B=>w.persistence.referenceDelegate.addReference(C,k.targetId,B))).next((()=>$.forEach(k.ds,(B=>w.persistence.referenceDelegate.removeReference(C,k.targetId,B)))))))))}catch(C){if(!ko(C))throw C;ie(wf,"Failed to update sequence numbers: "+C)}for(const C of _){const k=C.targetId;if(!C.fromCache){const B=w.Fs.get(k),G=B.snapshotVersion,X=B.withLastLimboFreeSnapshotVersion(G);w.Fs=w.Fs.insert(k,X)}}})(s.localStore,u))}async function MA(i,e){const t=Oe(i);if(!t.currentUser.isEqual(e)){ie(kf,"User change. New user:",e.toKey());const s=await k_(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((g=>{g.reject(new se(Y.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await j_(t,s.Bs)}}function bA(i,e){const t=Oe(i),s=t.Eu.get(e);if(s&&s.lu)return Le().add(s.key);{let o=Le();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function z_(i){const e=Oe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=F_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VA.bind(null,e),e.hu.J_=TA.bind(null,e.eventManager),e.hu.pu=IA.bind(null,e.eventManager),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return YS(this.persistence,new GS,e.initialUser,this.serializer)}Du(e){return new R_(_f.Vi,this.serializer)}bu(e){return new tA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class FA extends ec{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){tt(this.persistence.referenceDelegate instanceof Zu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new xS(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new R_((s=>Zu.Vi(s,t)),this.serializer)}}class zd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_y(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=MA.bind(null,this.syncEngine),await yA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new _A})()}createDatastore(e){const t=_c(e.databaseInfo.databaseId),s=(function(u){return new oA(u)})(e.databaseInfo);return(function(u,h,m,g){return new cA(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new dA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>_y(this.syncEngine,t,0)),(function(){return dy.C()?new dy:new nA})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,w){const C=new kA(o,u,h,m,g,_);return w&&(C.fu=!0),C})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Oe(o);ie(wo,"RemoteStore shutting down."),u.Ia.add(5),await nl(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zd.provider={build:()=>new zd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="FirestoreClient";class jA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ie(wi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ie(wi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ho;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=V_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function fd(i,e){i.asyncQueue.verifyOperationInProgress(),ie(wi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await k_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{mi("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{mi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),i._offlineComponents=e}async function wy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await zA(i);ie(wi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>my(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>my(e.remoteStore,o))),i._onlineComponents=e}async function zA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(wi,"Using user provided OfflineComponentProvider");try{await fd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;mi("Error using user provided cache. Falling back to memory cache: "+t),await fd(i,new ec)}}else ie(wi,"Using default OfflineComponentProvider"),await fd(i,new FA(void 0));return i._offlineComponents}async function BA(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(wi,"Using user provided OnlineComponentProvider"),await wy(i,i._uninitializedComponentsProvider._online)):(ie(wi,"Using default OnlineComponentProvider"),await wy(i,new zd))),i._onlineComponents}async function Ty(i){const e=await BA(i),t=e.eventManager;return t.onListen=PA.bind(null,e.syncEngine),t.onUnlisten=xA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=NA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OA.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="firestore.googleapis.com",Sy=!0;class Ay{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new se(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$_,this.ssl=Sy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Sy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=C_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NS)throw new se(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}E1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new se(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new se(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new se(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ay({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ay(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new h1;switch(s.type){case"firstParty":return new m1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Iy.get(t);s&&(ie("ComponentProvider","Removing Datastore"),Iy.delete(t),s.terminate())})(this),Promise.resolve()}}function $A(i,e,t,s={}){var o;i=Vu(i,wc);const u=os(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${t}`;u&&(Wd(`https://${g}`),Gd("Firestore",!0)),h.host!==$_&&h.host!==g&&mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!ns(_,m)&&(i._setSettings(_),s.mockUserToken)){let w,C;if(typeof s.mockUserToken=="string")w=s.mockUserToken,C=Ft.MOCK_USER;else{w=Aw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const k=s.mockUserToken.sub||s.mockUserToken.user_id;if(!k)throw new se(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new Ft(k)}i._authCredentials=new d1(new Uv(w,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class vt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(el(t,vt._jsonSchema))return new vt(e,s||null,new de(He.fromString(t.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:ht("string",vt._jsonSchemaVersion),referencePath:ht("string")};class fi extends us{constructor(e,t,s){super(e,t,ff(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new de(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function no(i,e,...t){if(i=Ct(i),zv("collection","path",e),i instanceof wc){const s=He.fromString(e,...t);return Mg(s),new fi(i,null,s)}{if(!(i instanceof vt||i instanceof fi))throw new se(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(He.fromString(e,...t));return Mg(s),new fi(i.firestore,null,s)}}function qA(i,e,...t){if(i=Ct(i),arguments.length===1&&(e=lf.newId()),zv("doc","path",e),i instanceof wc){const s=He.fromString(e,...t);return Lg(s),new vt(i,null,new de(s))}{if(!(i instanceof vt||i instanceof fi))throw new se(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(He.fromString(e,...t));return Lg(s),new vt(i.firestore,i instanceof fi?i.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="AsyncQueue";class Ry{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new N_(this,"async_queue_retry"),this.oc=()=>{const s=dd();s&&ie(Cy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=dd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=dd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ho;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ko(e))throw e;ie(Cy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Nr("INTERNAL UNHANDLED ERROR: ",ky(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Cf.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&Te(47125,{hc:ky(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ky(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class Bd extends wc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Ry,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ry(e),this._firestoreClient=void 0,await e}}}function HA(i,e){const t=typeof i=="object"?i:Yd(),s=typeof i=="string"?i:Ku,o=ic(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Hy("firestore");u&&$A(o,...u)}return o}function WA(i){if(i._terminated)throw new se(Y.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||GA(i),i._firestoreClient}function GA(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,g,_,w){return new x1(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,B_(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new jA(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(xt.fromBase64String(e))}catch(t){throw new se(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(el(e,wn._jsonSchema))return wn.fromBase64String(e.bytes)}}wn._jsonSchemaVersion="firestore/bytes/1.0",wn._jsonSchema={type:ht("string",wn._jsonSchemaVersion),bytes:ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(el(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:ht("string",rr._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(el(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ir(e.vectorValues);throw new se(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:ht("string",ir._jsonSchemaVersion),vectorValues:ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=/^__.*__$/;function W_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ec:i})}}class Nf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return $d(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(W_(this.Ec)&&KA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class QA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||_c(e)}Dc(e,t,s,o=!1){return new Nf({Ec:e,methodName:t,bc:s,path:jt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function YA(i){const e=i._freezeSettings(),t=_c(i._databaseId);return new QA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function JA(i,e,t,s=!1){return Df(t,i.Dc(s?4:3,e))}function Df(i,e){if(G_(i=Ct(i)))return ZA("Unsupported field value:",e,i),XA(i,e);if(i instanceof H_)return(function(s,o){if(!W_(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=Df(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return tS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Xe.fromDate(s);return{timestampValue:Ld(o.serializer,u)}}if(s instanceof Xe){const u=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ld(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wn)return{bytesValue:v_(o.serializer,s._byteString)};if(s instanceof vt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:__(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ir)return(function(h,m){return{mapValue:{fields:{[Yv]:{stringValue:Jv},[Qu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return pf(m.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${uc(s)}`)})(i,e)}function XA(i,e){const t={};return qv(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Po(i,((s,o)=>{const u=Df(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function G_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Xe||i instanceof rr||i instanceof wn||i instanceof vt||i instanceof H_||i instanceof ir)}function ZA(i,e,t){if(!G_(t)||!Bv(t)){const s=uc(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}const eC=new RegExp("[~\\*/\\[\\]]");function tC(i,e,t){if(e.search(eC)>=0)throw $d(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new q_(...e.split("."))._internalPath}catch{throw $d(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function $d(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new se(Y.INVALID_ARGUMENT,m+i+g)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nC extends K_{data(){return super.data()}}function Tc(i,e){return typeof e=="string"?tC(i,e):e instanceof q_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new se(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xf{}class Q_ extends xf{}function Ra(i,e,...t){let s=[];e instanceof xf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((g=>g instanceof Of)).length,m=u.filter((g=>g instanceof Ic)).length;if(h>1||h>0&&m>0)throw new se(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Ic extends Q_{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ic(e,t,s)}_apply(e){const t=this._parse(e);return Y_(e._query,t),new us(e.firestore,e.converter,Nd(e._query,t))}_parse(e){const t=YA(e.firestore);return(function(u,h,m,g,_,w,C){let k;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new se(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Dy(C,w);const G=[];for(const X of C)G.push(Ny(g,u,X));k={arrayValue:{values:G}}}else k=Ny(g,u,C)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Dy(C,w),k=JA(m,h,C,w==="in"||w==="not-in");return ct.create(_,w,k)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pd(i,e,t){const s=e,o=Tc("where",i);return Ic._create(o,s,t)}class Of extends xf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Of(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Un.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)Y_(h,g),h=Nd(h,g)})(e._query,t),new us(e.firestore,e.converter,Nd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vf extends Q_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Vf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new se(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ka(u,h)})(e._query,this._field,this._direction);return new us(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new No(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Cu(i,e="asc"){const t=e,s=Tc("orderBy",i);return Vf._create(s,t)}function Ny(i,e,t){if(typeof(t=Ct(t))=="string"){if(t==="")throw new se(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!i_(e)&&t.indexOf("/")!==-1)throw new se(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(He.fromString(t));if(!de.isDocumentKey(s))throw new se(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return qg(i,new de(s))}if(t instanceof vt)return qg(i,t._key);throw new se(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(t)}.`)}function Dy(i,e){if(!Array.isArray(i)||i.length===0)throw new se(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Y_(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class iC{convertValue(e,t="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Po(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Qu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>st(h.doubleValue)));return new ir(u)}convertGeoPoint(e){return new rr(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=fc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const t=yi(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=He.fromString(e);tt(A_(s),9688,{name:e});const o=new Wa(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Nr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}class Oa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ts extends K_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Tc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ts._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",ts._jsonSchema={type:ht("string",ts._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class Fu extends ts{data(e={}){return super.data(e)}}class mo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Oa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Fu(this._firestore,this._userDataWriter,s.key,s,new Oa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Fu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Oa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Fu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Oa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:sC(m.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sC(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:i})}}mo._jsonSchemaVersion="firestore/querySnapshot/1.0",mo._jsonSchema={type:ht("string",mo._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class J_ extends iC{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function Ru(i,...e){var t,s,o;i=Ct(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Py(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Py(e[h])){const C=e[h];e[h]=(t=C.next)===null||t===void 0?void 0:t.bind(C),e[h+1]=(s=C.error)===null||s===void 0?void 0:s.bind(C),e[h+2]=(o=C.complete)===null||o===void 0?void 0:o.bind(C)}let g,_,w;if(i instanceof vt)_=Vu(i.firestore,Bd),w=ff(i._key.path),g={next:C=>{e[h]&&e[h](oC(_,i,C))},error:e[h+1],complete:e[h+2]};else{const C=Vu(i,us);_=Vu(C.firestore,Bd),w=C._query;const k=new J_(_);g={next:B=>{e[h]&&e[h](new mo(_,k,C,B))},error:e[h+1],complete:e[h+2]},rC(i._query)}return(function(k,B,G,X){const W=new UA(X),Ie=new SA(B,W,G);return k.asyncQueue.enqueueAndForget((async()=>EA(await Ty(k),Ie))),()=>{W.Ou(),k.asyncQueue.enqueueAndForget((async()=>wA(await Ty(k),Ie)))}})(WA(_),w,m,g)}function oC(i,e,t){const s=t.docs.get(e._key),o=new J_(i);return new ts(i,o,e._key,s,new Oa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Ro=o})(So),rs(new pi("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Bd(new f1(s.getProvider("auth-internal")),new g1(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new se(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(_.options.projectId,w)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Zn(Ng,Dg,e),Zn(Ng,Dg,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="type.googleapis.com/google.protobuf.Int64Value",lC="type.googleapis.com/google.protobuf.UInt64Value";function X_(i,e){const t={};for(const s in i)i.hasOwnProperty(s)&&(t[s]=e(i[s]));return t}function tc(i){if(i==null)return null;if(i instanceof Number&&(i=i.valueOf()),typeof i=="number"&&isFinite(i)||i===!0||i===!1||Object.prototype.toString.call(i)==="[object String]")return i;if(i instanceof Date)return i.toISOString();if(Array.isArray(i))return i.map(e=>tc(e));if(typeof i=="function"||typeof i=="object")return X_(i,e=>tc(e));throw new Error("Data cannot be encoded in JSON: "+i)}function Io(i){if(i==null)return i;if(i["@type"])switch(i["@type"]){case aC:case lC:{const e=Number(i.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+i);return e}default:throw new Error("Data cannot be decoded from JSON: "+i)}return Array.isArray(i)?i.map(e=>Io(e)):typeof i=="function"||typeof i=="object"?X_(i,e=>Io(e)):i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tn extends or{constructor(e,t,s){super(`${Lf}/${e}`,t||""),this.details=s,Object.setPrototypeOf(this,tn.prototype)}}function uC(i){if(i>=200&&i<300)return"ok";switch(i){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function nc(i,e){let t=uC(i),s=t,o;try{const u=e&&e.error;if(u){const h=u.status;if(typeof h=="string"){if(!xy[h])return new tn("internal","internal");t=xy[h],s=h}const m=u.message;typeof m=="string"&&(s=m),o=u.details,o!==void 0&&(o=Io(o))}}catch{}return t==="ok"?null:new tn(t,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,t,s,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,En(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||t.get().then(u=>this.auth=u,()=>{}),this.messaging||s.get().then(u=>this.messaging=u,()=>{}),this.appCheck||o==null||o.get().then(u=>this.appCheck=u,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:s,appCheckToken:o}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="us-central1",hC=/^data: (.*?)(?:\n|$)/;function dC(i){let e=null;return{promise:new Promise((t,s)=>{e=setTimeout(()=>{s(new tn("deadline-exceeded","deadline-exceeded"))},i)}),cancel:()=>{e&&clearTimeout(e)}}}class fC{constructor(e,t,s,o,u=qd,h=(...m)=>fetch(...m)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new cC(e,t,s,o),this.cancelAllRequests=new Promise(m=>{this.deleteService=()=>Promise.resolve(m())});try{const m=new URL(u);this.customDomain=m.origin+(m.pathname==="/"?"":m.pathname),this.region=qd}catch{this.customDomain=null,this.region=u}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function pC(i,e,t){const s=os(e);i.emulatorOrigin=`http${s?"s":""}://${e}:${t}`,s&&(Wd(i.emulatorOrigin),Gd("Functions",!0))}function mC(i,e,t){const s=o=>yC(i,e,o,{});return s.stream=(o,u)=>_C(i,e,o,u),s}async function gC(i,e,t,s){t["Content-Type"]="application/json";let o;try{o=await s(i,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let u=null;try{u=await o.json()}catch{}return{status:o.status,json:u}}async function Z_(i,e){const t={},s=await i.contextProvider.getContext(e.limitedUseAppCheckTokens);return s.authToken&&(t.Authorization="Bearer "+s.authToken),s.messagingToken&&(t["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=s.appCheckToken),t}function yC(i,e,t,s){const o=i._url(e);return vC(i,o,t,s)}async function vC(i,e,t,s){t=tc(t);const o={data:t},u=await Z_(i,s),h=s.timeout||7e4,m=dC(h),g=await Promise.race([gC(e,o,u,i.fetchImpl),m.promise,i.cancelAllRequests]);if(m.cancel(),!g)throw new tn("cancelled","Firebase Functions instance was deleted.");const _=nc(g.status,g.json);if(_)throw _;if(!g.json)throw new tn("internal","Response is not valid JSON object.");let w=g.json.data;if(typeof w>"u"&&(w=g.json.result),typeof w>"u")throw new tn("internal","Response is missing data field.");return{data:Io(w)}}function _C(i,e,t,s){const o=i._url(e);return EC(i,o,t,s||{})}async function EC(i,e,t,s){var o;t=tc(t);const u={data:t},h=await Z_(i,s);h["Content-Type"]="application/json",h.Accept="text/event-stream";let m;try{m=await i.fetchImpl(e,{method:"POST",body:JSON.stringify(u),headers:h,signal:s==null?void 0:s.signal})}catch(B){if(B instanceof Error&&B.name==="AbortError"){const X=new tn("cancelled","Request was cancelled.");return{data:Promise.reject(X),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(X)}}}}}}const G=nc(0,null);return{data:Promise.reject(G),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(G)}}}}}}let g,_;const w=new Promise((B,G)=>{g=B,_=G});(o=s==null?void 0:s.signal)===null||o===void 0||o.addEventListener("abort",()=>{const B=new tn("cancelled","Request was cancelled.");_(B)});const C=m.body.getReader(),k=wC(C,g,_,s==null?void 0:s.signal);return{stream:{[Symbol.asyncIterator](){const B=k.getReader();return{async next(){const{value:G,done:X}=await B.read();return{value:G,done:X}},async return(){return await B.cancel(),{done:!0,value:void 0}}}}},data:w}}function wC(i,e,t,s){const o=(h,m)=>{const g=h.match(hC);if(!g)return;const _=g[1];try{const w=JSON.parse(_);if("result"in w){e(Io(w.result));return}if("message"in w){m.enqueue(Io(w.message));return}if("error"in w){const C=nc(0,w);m.error(C),t(C);return}}catch(w){if(w instanceof tn){m.error(w),t(w);return}}},u=new TextDecoder;return new ReadableStream({start(h){let m="";return g();async function g(){if(s!=null&&s.aborted){const _=new tn("cancelled","Request was cancelled");return h.error(_),t(_),Promise.resolve()}try{const{value:_,done:w}=await i.read();if(w){m.trim()&&o(m.trim(),h),h.close();return}if(s!=null&&s.aborted){const k=new tn("cancelled","Request was cancelled");h.error(k),t(k),await i.cancel();return}m+=u.decode(_,{stream:!0});const C=m.split(`
`);m=C.pop()||"";for(const k of C)k.trim()&&o(k.trim(),h);return g()}catch(_){const w=_ instanceof tn?_:nc(0,null);h.error(w),t(w)}}},cancel(){return i.cancel()}})}const Oy="@firebase/functions",Vy="0.12.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="auth-internal",IC="app-check-internal",SC="messaging-internal";function AC(i){const e=(t,{instanceIdentifier:s})=>{const o=t.getProvider("app").getImmediate(),u=t.getProvider(TC),h=t.getProvider(SC),m=t.getProvider(IC);return new fC(o,u,h,m,s)};rs(new pi(Lf,e,"PUBLIC").setMultipleInstances(!0)),Zn(Oy,Vy,i),Zn(Oy,Vy,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(i=Yd(),e=qd){const s=ic(Ct(i),Lf).getImmediate({identifier:e}),o=Hy("functions");return o&&RC(s,...o),s}function RC(i,e,t){pC(Ct(i),e,t)}function kC(i,e,t){return mC(Ct(i),e)}AC();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),eE=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=Je.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>Je.createElement("svg",{ref:g,...NC,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:eE("lucide",o),...m},[...h.map(([_,w])=>Je.createElement(_,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=(i,e)=>{const t=Je.forwardRef(({className:s,...o},u)=>Je.createElement(DC,{ref:u,iconNode:e,className:eE(`lucide-${PC(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=ar("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=ar("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=ar("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=ar("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=ar("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=ar("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=ar("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=ar("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=ar("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=ar("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var bC="firebase",FC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(bC,FC,"app");const UC={apiKey:"AIzaSyB9SL1RB7jZchEpyuVm4Mx4QBsw3hxhIVY",authDomain:"toolfab-8ded9.firebaseapp.com",projectId:"toolfab-8ded9",messagingSenderId:"532457632455",appId:"1:532457632455:web:d488f322537fe05ee004e2"},Mf=Yy(UC),Va=u1(Mf),Ji=HA(Mf),jC=CC(Mf,"asia-south1"),Fy=i=>i?new Date(`${i}T00:00:00`).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):"—";function zC(){const[i,e]=Je.useState(""),[t,s]=Je.useState(""),[o,u]=Je.useState(""),[h,m]=Je.useState(!1);return V.jsx("div",{className:"login-wrap",children:V.jsxs("div",{className:"login-card",children:[V.jsx("div",{className:"brand-mark",children:"T"}),V.jsx("p",{className:"eyebrow",children:"TOOLFAB ENGINEERING INDUSTRIES"}),V.jsx("h1",{children:"Workforce Portal"}),V.jsx("p",{className:"muted",children:"Secure access for HR and department heads"}),V.jsxs("form",{onSubmit:async g=>{g.preventDefault(),m(!0),u("");try{await QT(Va,i,t)}catch(_){u(_.message||"Unable to sign in")}finally{m(!1)}},children:[V.jsx("label",{children:"Work email"}),V.jsx("input",{type:"email",value:i,onChange:g=>e(g.target.value),placeholder:"name@company.com",required:!0}),V.jsx("label",{children:"Password"}),V.jsx("input",{type:"password",value:t,onChange:g=>s(g.target.value),placeholder:"Enter password",required:!0}),V.jsx("button",{className:"primary full",disabled:h,children:h?"Signing in…":"Sign in securely"}),o&&V.jsx("p",{className:"error",children:o})]}),V.jsx("small",{children:"Access is assigned by the system administrator."})]})})}function BC(){var x,L,S,Ke,dt;const[i,e]=Je.useState(null),[t,s]=Je.useState(null),[o,u]=Je.useState(""),[h,m]=Je.useState([]),[g,_]=Je.useState([]),[w,C]=Je.useState([]),[k,B]=Je.useState("overview"),[G,X]=Je.useState("pending"),[W,Ie]=Je.useState(""),[ve,me]=Je.useState("");Je.useEffect(()=>XT(Va,Z=>e(Z)),[]),Je.useEffect(()=>{if(s(null),!!i)return Ru(qA(Ji,"users",i.uid),Z=>{Z.exists()?(s(Z.data()),u("")):u("Your account is not provisioned. Ask the Toolfab system administrator to assign your role.")},Z=>u(Z.message))},[i]),Je.useEffect(()=>{if(!t)return;const Z=t.role==="department_head"?t.department:null,le=Z?Ra(no(Ji,"leaveRequests"),pd("department","==",Z),Cu("createdAt","desc")):Ra(no(Ji,"leaveRequests"),Cu("createdAt","desc")),Q=Z?Ra(no(Ji,"otRequests"),pd("department","==",Z),Cu("createdAt","desc")):Ra(no(Ji,"otRequests"),Cu("createdAt","desc")),ue=Ru(le,ne=>m(ne.docs.map(ge=>({id:ge.id,...ge.data()}))),ne=>me(ne.message)),te=Ru(Q,ne=>_(ne.docs.map(ge=>({id:ge.id,...ge.data()}))),ne=>me(ne.message)),O=t.role==="hr"?no(Ji,"users"):Ra(no(Ji,"users"),pd("department","==",t.department)),z=Ru(O,ne=>C(ne.docs.map(ge=>ge.data()).filter(ge=>ge.role==="employee"&&ge.active!==!1)));return()=>{ue(),te(),z()}},[t]);const _e=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date),je=Je.useMemo(()=>h.filter(Z=>Z.status==="approved"&&Z.startDate<=_e&&Z.endDate>=_e),[h,_e]),Se=[...h.filter(Z=>Z.status==="pending").map(Z=>({...Z,type:"Leave"})),...g.filter(Z=>Z.status==="pending").map(Z=>({...Z,type:"Overtime"}))],D=h.filter(Z=>Z.status==="approved").reduce((Z,le)=>Z+(le.days||0),0),I=g.filter(Z=>Z.status==="approved").reduce((Z,le)=>Z+(le.hours||0),0);async function A(Z,le,Q){const ue=window.prompt(`${Q==="approved"?"Approval":"Rejection"} remarks (optional):`,"");if(ue!==null)try{await kC(jC,"reviewRequest")({type:Z,requestId:le,decision:Q,remarks:ue}),me(`Request ${Q}.`)}catch(te){me(te.message||"Unable to update request")}}if(!i)return V.jsx(zC,{});if(t&&t.role==="employee")return V.jsxs("div",{className:"setup",children:[V.jsx("h1",{children:"TOOLFAB"}),V.jsx("h2",{children:"Employee account"}),V.jsx("p",{children:"Employees must use the Toolfab Workforce mobile app."}),V.jsx("button",{className:"secondary",onClick:()=>ad(Va),children:"Sign out"})]});if(!t)return V.jsxs("div",{className:"setup",children:[V.jsx("div",{className:"brand-mark",children:"T"}),V.jsx("h2",{children:o||"Loading your secure profile…"}),V.jsx("button",{className:"secondary",onClick:()=>ad(Va),children:"Sign out"})]});const P=Z=>Z.filter(le=>(G==="all"||le.status===G)&&`${le.employeeName} ${le.department} ${le.reason}`.toLowerCase().includes(W.toLowerCase()));return V.jsxs("div",{className:"app-shell",children:[V.jsxs("aside",{className:"sidebar",children:[V.jsxs("div",{className:"brand",children:[V.jsx("div",{className:"brand-mark",children:"T"}),V.jsxs("div",{children:[V.jsx("b",{children:"TOOLFAB"}),V.jsx("small",{children:"WORKFORCE"})]})]}),V.jsx("div",{className:"side-label",children:"WORKSPACE"}),[["overview","Overview",Ly],["leave","Leave requests",md],["overtime","Overtime requests",My],["employees","Employees",MC]].map(([Z,le,Q])=>V.jsxs("button",{className:`nav-item ${k===Z?"active":""}`,onClick:()=>B(Z),children:[V.jsx(Q,{size:18}),le]},Z)),V.jsxs("div",{className:"side-bottom",children:[V.jsxs("div",{className:"profile-chip",children:[V.jsx("div",{className:"avatar",children:((L=(x=t.displayName)==null?void 0:x[0])==null?void 0:L.toUpperCase())||"U"}),V.jsxs("div",{children:[V.jsx("b",{children:t.displayName}),V.jsx("small",{children:t.role==="hr"?"Human Resources":`Department Head · ${t.department}`})]})]}),V.jsxs("button",{className:"nav-item",onClick:()=>ad(Va),children:[V.jsx(OC,{size:18}),"Sign out"]})]})]}),V.jsxs("main",{className:"main",children:[V.jsxs("header",{className:"topbar",children:[V.jsxs("div",{children:[V.jsxs("p",{className:"eyebrow",children:["TOOLFAB / ",t.role==="hr"?"HUMAN RESOURCES":t.department.toUpperCase()]}),V.jsx("h1",{children:k==="overview"?"Workforce overview":k==="leave"?"Leave requests":k==="overtime"?"Overtime requests":"Employees"})]}),V.jsxs("div",{className:"top-right",children:[V.jsx("span",{className:"live-dot",children:"Live data"}),V.jsx("div",{className:"avatar",children:(Ke=(S=t.displayName)==null?void 0:S[0])==null?void 0:Ke.toUpperCase()})]})]}),ve&&V.jsxs("div",{className:"toast",onClick:()=>me(""),children:[ve," ",V.jsx(tE,{size:14})]}),k==="overview"&&V.jsxs(V.Fragment,{children:[V.jsxs("section",{className:"welcome",children:[V.jsxs("div",{children:[V.jsx("p",{className:"eyebrow",children:new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}),V.jsxs("h2",{children:["Good day, ",(dt=t.displayName)==null?void 0:dt.split(" ")[0],"."]}),V.jsx("p",{children:"Here is the latest leave and overtime activity."})]}),V.jsx("div",{className:"welcome-icon",children:V.jsx(LC,{size:32})})]}),V.jsxs("section",{className:"stats",children:[V.jsx(ku,{label:"Pending approvals",value:Se.length,note:"Requires your review",icon:V.jsx(My,{})}),V.jsx(ku,{label:"On approved leave today",value:je.length,note:"Based on approved leave",icon:V.jsx(md,{})}),V.jsx(ku,{label:"Leave days approved",value:D,note:"All visible records",icon:V.jsx(md,{})}),V.jsx(ku,{label:"Approved OT hours",value:I,note:"All visible records",icon:V.jsx(Ly,{})})]}),V.jsxs("div",{className:"section-head",children:[V.jsxs("div",{children:[V.jsx("h3",{children:"Requests needing attention"}),V.jsx("p",{children:"Review requests submitted by employees"})]}),V.jsx("button",{className:"text-btn",onClick:()=>B("leave"),children:"View all requests →"})]}),V.jsx(Uy,{rows:Se.slice(0,6),onDecision:A}),V.jsx("div",{className:"section-head",children:V.jsxs("div",{children:[V.jsx("h3",{children:"Today's leave availability"}),V.jsx("p",{children:"Approved leave status only — this system does not verify physical attendance."})]})}),V.jsxs("div",{className:"panel",children:[V.jsxs("div",{className:"availability",children:[V.jsxs("div",{children:[V.jsxs("b",{children:[je.length," employees"]}),V.jsx("small",{children:"Currently on approved leave"})]}),V.jsx("div",{className:"pill green",children:"Leave status only"})]}),w.map(Z=>{var Q;const le=je.find(ue=>ue.employeeId===Z.uid);return V.jsxs("div",{className:"person-row",children:[V.jsx("div",{className:"avatar",children:(Q=Z.displayName)==null?void 0:Q[0]}),V.jsxs("div",{children:[V.jsx("b",{children:Z.displayName}),V.jsx("small",{children:Z.department})]}),V.jsx("span",{className:`status ${le?"approved":"pending"}`,children:le?"On leave":"No approved leave"})]},Z.uid)}),!w.length&&V.jsx("p",{className:"empty",children:"No employee profiles found."})]})]}),(k==="leave"||k==="overtime")&&V.jsxs(V.Fragment,{children:[V.jsxs("div",{className:"toolbar",children:[V.jsxs("div",{className:"searchbox",children:[V.jsx(by,{size:17}),V.jsx("input",{value:W,onChange:Z=>Ie(Z.target.value),placeholder:"Search employee, department or reason"})]}),V.jsxs("select",{value:G,onChange:Z=>X(Z.target.value),children:[V.jsx("option",{value:"pending",children:"Pending"}),V.jsx("option",{value:"approved",children:"Approved"}),V.jsx("option",{value:"rejected",children:"Rejected"}),V.jsx("option",{value:"all",children:"All statuses"})]}),V.jsx("button",{className:"icon-btn",onClick:()=>window.location.reload(),title:"Refresh",children:V.jsx(VC,{size:17})})]}),V.jsx(Uy,{rows:P(k==="leave"?h:g).map(Z=>({...Z,type:k==="leave"?"Leave":"Overtime"})),onDecision:A})]}),k==="employees"&&V.jsxs("div",{className:"panel",children:[V.jsxs("div",{className:"toolbar",children:[V.jsxs("div",{className:"searchbox",children:[V.jsx(by,{size:17}),V.jsx("input",{value:W,onChange:Z=>Ie(Z.target.value),placeholder:"Search employees"})]}),V.jsx("button",{className:"secondary",onClick:()=>{const Z=["Employee","Email","Department","Approved leave days","Approved OT hours","Leave status"],le=w.map(O=>[O.displayName,O.email,O.department,h.filter(z=>z.employeeId===O.uid&&z.status==="approved").reduce((z,ne)=>z+(ne.days||0),0),g.filter(z=>z.employeeId===O.uid&&z.status==="approved").reduce((z,ne)=>z+(ne.hours||0),0),h.some(z=>z.employeeId===O.uid&&z.status==="approved"&&z.startDate<=_e&&z.endDate>=_e)?"On leave":"No approved leave"]),Q=[Z,...le].map(O=>O.map(z=>'"'+String(z??"").replace(/"/g,'""')+'"').join(",")).join(`
`),ue=URL.createObjectURL(new Blob([Q],{type:"text/csv;charset=utf-8"})),te=document.createElement("a");te.href=ue,te.download="toolfab-employee-report.csv",te.click(),URL.revokeObjectURL(ue)},children:"Export CSV"})]}),V.jsx("div",{className:"table-wrap",children:V.jsxs("table",{children:[V.jsx("thead",{children:V.jsxs("tr",{children:[V.jsx("th",{children:"EMPLOYEE"}),V.jsx("th",{children:"DEPARTMENT"}),V.jsx("th",{children:"LEAVE DAYS"}),V.jsx("th",{children:"OT HOURS"}),V.jsx("th",{children:"TODAY"})]})}),V.jsx("tbody",{children:w.filter(Z=>(Z.displayName+" "+Z.department).toLowerCase().includes(W.toLowerCase())).map(Z=>V.jsxs("tr",{children:[V.jsxs("td",{children:[V.jsx("b",{children:Z.displayName}),V.jsx("small",{children:Z.email})]}),V.jsx("td",{children:Z.department}),V.jsx("td",{children:h.filter(le=>le.employeeId===Z.uid&&le.status==="approved").reduce((le,Q)=>le+(Q.days||0),0)}),V.jsx("td",{children:g.filter(le=>le.employeeId===Z.uid&&le.status==="approved").reduce((le,Q)=>le+(Q.hours||0),0)}),V.jsx("td",{children:h.some(le=>le.employeeId===Z.uid&&le.status==="approved"&&le.startDate<=_e&&le.endDate>=_e)?V.jsx("span",{className:"status approved",children:"On leave"}):V.jsx("span",{className:"status pending",children:"No approved leave"})})]},Z.uid))})]})})]}),V.jsxs("footer",{children:["TOOLFAB WORKFORCE ",V.jsx("span",{children:"Leave & Overtime Management · No attendance tracking"})]})]})]})}function ku({label:i,value:e,note:t,icon:s}){return V.jsxs("div",{className:"stat-card",children:[V.jsxs("div",{className:"stat-top",children:[V.jsx("span",{children:i}),V.jsx("i",{children:s})]}),V.jsx("strong",{children:e}),V.jsx("small",{children:t})]})}function Uy({rows:i,onDecision:e}){return V.jsxs("div",{className:"panel table-panel",children:[V.jsx("div",{className:"table-wrap",children:V.jsxs("table",{children:[V.jsx("thead",{children:V.jsxs("tr",{children:[V.jsx("th",{children:"EMPLOYEE"}),V.jsx("th",{children:"REQUEST"}),V.jsx("th",{children:"DATES / HOURS"}),V.jsx("th",{children:"REASON"}),V.jsx("th",{children:"STATUS"}),V.jsx("th",{children:"ACTION"})]})}),V.jsx("tbody",{children:i.map(t=>V.jsxs("tr",{children:[V.jsxs("td",{children:[V.jsx("b",{children:t.employeeName}),V.jsx("small",{children:t.department})]}),V.jsx("td",{children:t.type||"Leave"}),V.jsx("td",{children:t.type==="Overtime"?`${t.date} · ${t.hours} hrs`:`${Fy(t.startDate)} – ${Fy(t.endDate)} · ${t.days} days`}),V.jsx("td",{className:"reason",children:t.reason}),V.jsx("td",{children:V.jsx("span",{className:`status ${t.status}`,children:t.status})}),V.jsx("td",{children:t.status==="pending"?V.jsxs("div",{className:"actions",children:[V.jsx("button",{className:"approve-btn",onClick:()=>e(t.type==="Overtime"?"ot":"leave",t.id,"approved"),title:"Approve",children:V.jsx(xC,{size:16})}),V.jsx("button",{className:"reject-btn",onClick:()=>e(t.type==="Overtime"?"ot":"leave",t.id,"rejected"),title:"Reject",children:V.jsx(tE,{size:16})})]}):"—"})]},t.id))})]})}),!i.length&&V.jsx("div",{className:"empty",children:"No requests found for this filter."})]})}mw.createRoot(document.getElementById("root")).render(V.jsx(lw.StrictMode,{children:V.jsx(BC,{})}));
