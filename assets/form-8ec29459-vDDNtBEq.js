import{h as M}from"./index-XUmwAfbD.js";import{q as S,n as h}from"./dom-b6dedd88-CKzhY-8O.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const V=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"];function L(e){return`${e.split("-").map((a,n)=>n===0?a:`${a[0].toUpperCase()}${a.slice(1)}`).join("")}${V.includes(e)?"Input":"Change"}`}const v="hidden-form-input";function E(e){return"checked"in e}const m=new WeakMap,g=new WeakSet;function R(e,t){if(h(t.parentElement,"[form]"))return!0;const a="calciteInternalFormComponentRegister";let n=!1;return e.addEventListener(a,r=>{n=r.composedPath().some(l=>g.has(l)),r.stopPropagation()},{once:!0}),t.dispatchEvent(new CustomEvent(a,{bubbles:!0,composed:!0})),n}function A(e,{status:t,message:i,icon:a}){"status"in e&&(e.status=t),"validationIcon"in e&&typeof e.validationIcon!="string"&&(e.validationIcon=a),"validationMessage"in e&&!e.validationMessage&&(e.validationMessage=i)}function b(e){return e.nodeName==="CALCITE-RADIO-BUTTON"?h(e,"calcite-radio-button-group"):e}const H=new CustomEvent("calciteInvalid",{bubbles:!0,composed:!0});function C(e){var c;const t=e==null?void 0:e.target,i=t==null?void 0:t.validationMessage,a=b(t==null?void 0:t.parentElement);if(!a)return;const n=(c=a==null?void 0:a.nodeName)==null?void 0:c.toLowerCase(),r=n==null?void 0:n.split("-");if(r.length<2||r[0]!=="calcite")return;e==null||e.preventDefault(),"validity"in a&&(a.validity=t==null?void 0:t.validity),a.dispatchEvent(H),A(a,{message:i,icon:!0,status:"invalid"});const l=L(n);a.addEventListener(l,()=>{"status"in a&&(a.status="idle"),"validationIcon"in a&&!a.validationIcon&&(a.validationIcon=!1),"validationMessage"in a&&a.validationMessage===i&&(a.validationMessage=""),"validity"in a&&(a.validity=t==null?void 0:t.validity)},{once:!0})}function D(e){const{formEl:t}=e;return t?(t.addEventListener("invalid",C,!0),t.requestSubmit(),t.removeEventListener("invalid",C,!0),requestAnimationFrame(()=>{const i=t.querySelectorAll("[status=invalid]");for(const a of i)if(a!=null&&a.validationMessage){a==null||a.setFocus();break}}),!0):!1}function W(e){var t;(t=e.formEl)==null||t.reset()}function $(e){const{el:t,value:i}=e,a=w(e);if(!a||R(a,t))return;e.formEl=a,e.defaultValue=i,E(e)&&(e.defaultChecked=e.checked);const n=(e.onFormReset||q).bind(e);a.addEventListener("reset",n),m.set(e.el,n),g.add(t)}function w(e){const{el:t,form:i}=e;return i?S(t,{id:i}):h(t,"form")}function q(){if("status"in this&&(this.status="idle"),"validationIcon"in this&&(this.validationIcon=!1),"validationMessage"in this&&(this.validationMessage=""),E(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function O(e){const{el:t,formEl:i}=e;if(!i)return;const a=m.get(t);i.removeEventListener("reset",a),m.delete(t),e.formEl=null,g.delete(t)}function T(e,t){e.defaultValue=t}const P="calciteInternalHiddenInputInput",y=e=>{e.target.dispatchEvent(new CustomEvent(P,{bubbles:!0}))},F=e=>e.removeEventListener("input",y);function p(e){const{el:t,formEl:i,name:a,value:n}=e,{ownerDocument:r}=t,l=t.querySelectorAll(`input[slot="${v}"]`);if(!i||!a){l.forEach(s=>{F(s),s.remove()});return}const c=Array.isArray(n)?n:[n],u=[],f=new Set;l.forEach(s=>{const o=c.find(k=>k==s.value);o!=null?(f.add(o),I(e,s,o)):u.push(s)});let d;c.forEach(s=>{if(f.has(s))return;let o=u.pop();o||(o=r.createElement("input"),o.slot=v),d||(d=r.createDocumentFragment()),d.append(o),o.addEventListener("input",y),I(e,o,s)}),d&&t.append(d),u.forEach(s=>{F(s),s.remove()})}function I(e,t,i){var f;const{defaultValue:a,disabled:n,form:r,name:l,required:c}=e;t.defaultValue=a,t.disabled=n,t.name=l,t.required=c,t.tabIndex=-1,r?t.setAttribute("form",r):t.removeAttribute("form"),E(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",(f=e.syncHiddenFormInput)==null||f.call(e,t);const u=b(e.el);if(u&&"validity"in u)for(const d in{...t==null?void 0:t.validity})u.validity[d]=t.validity[d]}const B=({component:e})=>(p(e),M("slot",{name:v}));export{B as H,T as a,$ as c,O as d,w as f,P as i,W as r,D as s};
//# sourceMappingURL=form-8ec29459-vDDNtBEq.js.map
