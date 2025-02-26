import{g as W}from"./guid-9c230b6a-BxSjQh8J.js";import{C as R}from"./index-U3f91iFJ.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 *//*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var O=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],S=O.join(","),L=typeof Element>"u",d=L?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,T=!L&&Element.prototype.getRootNode?function(r){var t;return r==null||(t=r.getRootNode)===null||t===void 0?void 0:t.call(r)}:function(r){return r==null?void 0:r.ownerDocument},w=function r(t,e){var n;e===void 0&&(e=!0);var a=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"inert"),i=a===""||a==="true",u=i||e&&t&&r(t.parentNode);return u},H=function(t){var e,n=t==null||(e=t.getAttribute)===null||e===void 0?void 0:e.call(t,"contenteditable");return n===""||n==="true"},k=function(t,e,n){if(w(t))return[];var a=Array.prototype.slice.apply(t.querySelectorAll(S));return e&&d.call(t,S)&&a.unshift(t),a=a.filter(n),a},q=function r(t,e,n){for(var a=[],i=Array.from(t);i.length;){var u=i.shift();if(!w(u,!1))if(u.tagName==="SLOT"){var s=u.assignedElements(),o=s.length?s:u.children,l=r(o,!0,n);n.flatten?a.push.apply(a,l):a.push({scopeParent:u,candidates:l})}else{var f=d.call(u,S);f&&n.filter(u)&&(e||!t.includes(u))&&a.push(u);var c=u.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(u),y=!w(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(u));if(c&&y){var v=r(c===!0?u.children:c.children,!0,n);n.flatten?a.push.apply(a,v):a.push({scopeParent:u,candidates:v})}else i.unshift.apply(i,u.children)}}return a},B=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},P=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||H(t))&&!B(t)?0:t.tabIndex},X=function(t,e){var n=P(t);return n<0&&e&&!B(t)?0:n},Y=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},M=function(t){return t.tagName==="INPUT"},Z=function(t){return M(t)&&t.type==="hidden"},K=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(n){return n.tagName==="SUMMARY"});return e},J=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]},Q=function(t){if(!t.name)return!0;var e=t.form||T(t),n=function(s){return e.querySelectorAll('input[type="radio"][name="'+s+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=n(window.CSS.escape(t.name));else try{a=n(t.name)}catch(u){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",u.message),!1}var i=J(a,t.form);return!i||i===t},V=function(t){return M(t)&&t.type==="radio"},_=function(t){return V(t)&&!Q(t)},tt=function(t){var e,n=t&&T(t),a=(e=n)===null||e===void 0?void 0:e.host,i=!1;if(n&&n!==t){var u,s,o;for(i=!!((u=a)!==null&&u!==void 0&&(s=u.ownerDocument)!==null&&s!==void 0&&s.contains(a)||t!=null&&(o=t.ownerDocument)!==null&&o!==void 0&&o.contains(t));!i&&a;){var l,f,c;n=T(a),a=(l=n)===null||l===void 0?void 0:l.host,i=!!((f=a)!==null&&f!==void 0&&(c=f.ownerDocument)!==null&&c!==void 0&&c.contains(a))}}return i},F=function(t){var e=t.getBoundingClientRect(),n=e.width,a=e.height;return n===0&&a===0},rt=function(t,e){var n=e.displayCheck,a=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=d.call(t,"details>summary:first-of-type"),u=i?t.parentElement:t;if(d.call(u,"details:not([open]) *"))return!0;if(!n||n==="full"||n==="legacy-full"){if(typeof a=="function"){for(var s=t;t;){var o=t.parentElement,l=T(t);if(o&&!o.shadowRoot&&a(o)===!0)return F(t);t.assignedSlot?t=t.assignedSlot:!o&&l!==t.ownerDocument?t=l.host:t=o}t=s}if(tt(t))return!t.getClientRects().length;if(n!=="legacy-full")return!0}else if(n==="non-zero-area")return F(t);return!1},et=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var n=0;n<e.children.length;n++){var a=e.children.item(n);if(a.tagName==="LEGEND")return d.call(e,"fieldset[disabled] *")?!0:!a.contains(t)}return!0}e=e.parentElement}return!1},A=function(t,e){return!(e.disabled||w(e)||Z(e)||rt(e,t)||K(e)||et(e))},E=function(t,e){return!(_(e)||P(e)<0||!A(t,e))},nt=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},at=function r(t){var e=[],n=[];return t.forEach(function(a,i){var u=!!a.scopeParent,s=u?a.scopeParent:a,o=X(s,u),l=u?r(a.candidates):s;o===0?u?e.push.apply(e,l):e.push(s):n.push({documentOrder:i,tabIndex:o,item:a,isScope:u,content:l})}),n.sort(Y).reduce(function(a,i){return i.isScope?a.push.apply(a,i.content):a.push(i.content),a},[]).concat(e)},it=function(t,e){e=e||{};var n;return e.getShadowRoot?n=q([t],e.includeContainer,{filter:E.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:nt}):n=k(t,e.includeContainer,E.bind(null,e)),at(n)},It=function(t,e){e=e||{};var n;return e.getShadowRoot?n=q([t],e.includeContainer,{filter:A.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):n=k(t,e.includeContainer,A.bind(null,e)),n},Et=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return d.call(t,S)===!1?!1:E(e,t)},ut=O.concat("iframe").join(","),xt=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return d.call(t,ut)===!1?!1:A(e,t)};const st={getShadowRoot:!0};function Nt(r){return r?r.id=r.id||`${r.tagName.toLowerCase()}-${W()}`:""}function Rt(r){return Array.isArray(r)?r:Array.from(r)}function Ft(r){const t=N(r,`.${R.darkMode}, .${R.lightMode}`);return t!=null&&t.classList.contains("calcite-mode-dark")?"dark":"light"}function Dt(r){const t="dir",e=`[${t}]`,n=N(r,e);return n?n.getAttribute(t):"ltr"}function Ot(r){return r?parseFloat(getComputedStyle(r).inlineSize):0}function x(r){return r.getRootNode()}function Lt(r){const t=x(r);return"host"in t?t:null}function kt(r,t){if(!r)return 0;const n=document.createElement("canvas").getContext("2d");return n.font=t,n.measureText(r).width}function $(r){return r.host||null}function ot(r,{selector:t,id:e}){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);const n=x(r);return(e?"getElementById"in n?n.getElementById(e):null:t?n.querySelector(t):null)||ot($(n),{selector:t,id:e})}function N(r,t){return r?r.closest(t)||N($(x(r)),t):null}function lt(r,t){return G(r,t)}function G(r,t){if(!r)return;const e=t(r);if(e!==void 0)return e;const{parentNode:n}=r;return G(n instanceof ShadowRoot?n.host:n,t)}function qt(r,t){return!!lt(t,e=>e===r?!0:void 0)}function ct(r){return typeof(r==null?void 0:r.setFocus)=="function"}async function ft(r){if(r)return ct(r)?r.setFocus():r.focus()}function dt(r){if(r)return it(r,st)[0]??r}function Bt(r){var t;(t=dt(r))==null||t.focus()}const g=":not([slot])";function Pt(r,t,e){t&&!Array.isArray(t)&&typeof t!="string"&&(e=t,t=null);const n=t?Array.isArray(t)?t.map(a=>`[slot="${a}"]`).join(","):`[slot="${t}"]`:g;return e!=null&&e.all?vt(r,n,e):ht(r,n,e)}function U(r,t){return r?Array.from(r.children||[]).filter(e=>e==null?void 0:e.matches(t)):[]}function vt(r,t,e){let n=t===g?U(r,g):Array.from(r.querySelectorAll(t));n=e&&e.direct===!1?n:n.filter(i=>i.parentElement===r),n=e!=null&&e.matches?n.filter(i=>i==null?void 0:i.matches(e.matches)):n;const a=e==null?void 0:e.selector;return a?n.map(i=>Array.from(i.querySelectorAll(a))).reduce((i,u)=>[...i,...u],[]).filter(i=>!!i):n}function ht(r,t,e){let n=t===g?U(r,g)[0]||null:r.querySelector(t);n=e&&e.direct===!1||(n==null?void 0:n.parentElement)===r?n:null,n=e!=null&&e.matches?n!=null&&n.matches(e.matches)?n:null:n;const a=e==null?void 0:e.selector;return a?n==null?void 0:n.querySelector(a):n}function Mt(r,t){return Array.from(r.children).filter(e=>e.matches(t))}function bt(r,t){return r.filter(e=>e.matches(t))}function $t(r,t,e){if(typeof t=="string"&&t!=="")return t;if(t==="")return r[e]}function Gt(r,t){return!(t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top)}function Ut(r){return(!!r).toString()}function jt(r){return St(r)||yt(r)}function gt(r){return mt(r).filter(t=>t.nodeType===Node.TEXT_NODE).map(t=>t.textContent).join("").trim()}function yt(r){return!!gt(r)}function mt(r){return r.currentTarget.assignedNodes({flatten:!0})}function St(r){return!!Tt(r).length}function Tt(r,t){return wt(r.target,t)}function wt(r,t){const e=r.assignedElements({flatten:!0});return t?bt(e,t):e}function zt(r){return!!(r.isPrimary&&r.button===0)}function Wt(r){return r.detail===0}const Ht=(r,t,e,n=!0)=>{const a=r.indexOf(t),i=a===0,u=a===r.length-1;n&&(e=e==="previous"&&i?"last":e==="next"&&u?"first":e);let s;return e==="previous"?s=r[a-1]||r[n?r.length-1:a]:e==="next"?s=r[a+1]||r[n?0:a]:e==="last"?s=r[r.length-1]:s=r[0],ft(s),s};function Xt(r,t){if(r.parentNode!==t.parentNode)return!1;const e=Array.from(r.parentNode.children);return e.indexOf(r)<e.indexOf(t)}async function Yt(r,t,e,n){return j(r,t,"animation",e,n)}async function Zt(r,t,e,n){return j(r,t,"transition",e,n)}async function j(r,t,e,n,a){const i=window.getComputedStyle(r),u=e==="transition"?i.transitionDuration:i.animationDuration,s=e==="transition"?i.transitionProperty:i.animationName,o=u.split(","),f=s.split(",").map(m=>m.trim()).indexOf(t),c=o[f]??o[0];function y(){requestAnimationFrame(()=>{n==null||n(),requestAnimationFrame(()=>a==null?void 0:a())})}if(c==="0s"){y();return}const v=e==="transition"?"transitionstart":"animationstart",C=e==="transition"?"transitionend":"animationend",p=e==="transition"?"transitioncancel":"animationcancel";return new Promise(m=>{const z=window.setTimeout(()=>{r.removeEventListener(v,I),r.removeEventListener(C,h),r.removeEventListener(p,h),y(),m()},parseFloat(c)*1e3);r.addEventListener(v,I),r.addEventListener(C,h),r.addEventListener(p,h);function I(b){b.target===r&&D(b)===t&&(window.clearTimeout(z),r.removeEventListener(v,I),n==null||n())}function h(b){b.target===r&&D(b)===t&&(r.removeEventListener(C,h),r.removeEventListener(p,h),a==null||a(),m())}})}function At(r){return"propertyName"in r}function D(r){return At(r)?r.propertyName:r.animationName}export{Lt as A,Yt as B,Rt as C,Mt as D,Ot as E,kt as F,dt as G,wt as H,St as a,ft as b,$t as c,Pt as d,Ft as e,Bt as f,Dt as g,Ht as h,zt as i,Gt as j,Nt as k,Wt as l,qt as m,N as n,Xt as o,xt as p,ot as q,it as r,Tt as s,Ut as t,It as u,Et as v,Zt as w,P as x,st as y,jt as z};
//# sourceMappingURL=dom-b6dedd88-DVv4NIlW.js.map
