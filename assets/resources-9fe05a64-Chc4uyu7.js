import{g}from"./array-2c4e379e-BMcQdnYi.js";import{d as I,b as p}from"./dom-b6dedd88-CE23o9Fg.js";import{d as v}from"./debounce-6e4946fd-4Zc0Qe3n.js";import{h as u}from"./index-BlI3-bLW.js";import{I as b}from"./interactive-1a42577a-DrDcU3Ux.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const D={heading:"heading",container:"container",indented:"container--indented"},S={parentItem:"parent-item"};function U(){this.setUpItems(),this.setUpFilter(),this.deselectRemovedItems()}const C=["ArrowUp","ArrowDown"];function P(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=v(L.bind(this),0),this.emitCalciteListFilter=v(F.bind(this),0)}function R(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0})}function M(){var e;(e=this.mutationObserver)==null||e.disconnect()}function q(e){const{selectedValues:t}=this,{item:s,value:i,selected:n,shiftPressed:l}=e.detail;n?(this.multiple&&l&&this.selectSiblings(s),this.multiple||this.deselectSiblingItems(s),t.set(i,s)):(t.delete(i),this.multiple&&l&&this.selectSiblings(s,!0)),this.multiple||(f(s,n),n&&p(s)),this.lastSelectedItem=s,this.emitCalciteListChange()}function H(e){const t=e.detail.oldValue,s=this.selectedValues;if(s.has(t)){const i=s.get(t);s.delete(t),s.set(e.detail.newValue,i)}e.stopPropagation()}function E(e){return!!C.find(t=>t===e)}function N(e){const{el:t,items:s,multiple:i,selectedValues:n}=this;i||t.contains(e.relatedTarget)||m(s).forEach(c=>{f(c,n.size===0?c.contains(e.target)||e.target===c:c.selected)})}function $(e){const{key:t,target:s}=e;if(!E(t))return;const{items:i,multiple:n,selectionFollowsFocus:l}=this,{length:c}=i,a=i.indexOf(s);if(!c||a===-1)return;e.preventDefault();const r=x(this,s,t==="ArrowUp"?"up":"down"),o=i[r];i.forEach(d=>f(d,d===o)),!n&&l&&(o.selected=!0),p(o)}function x(e,t,s){const{items:i}=e,{length:n}=i,l=i.indexOf(t),c=s==="up"?-1:1;let a=1,r=g(l+c*a++,n);const o=r;for(;i[r].disabled&&(r=g(l+c*a++,n),r!==o););return r}function z(e,t){const{items:s}=e;return s.indexOf(t)}function m(e){return e.filter(t=>!t.disabled)}function F(){this.calciteListFilter.emit()}function L(){this.calciteListChange.emit(this.selectedValues)}function K(e){if(e.defaultPrevented)return;const t=e.target,s=this.selectedValues;t.parentElement.tagName==="CALCITE-PICK-LIST-GROUP"&&t.slot===S.parentItem?(t.parentElement.remove(),Array.from(t.parentElement.children).forEach(i=>s.delete(i.value))):(t.remove(),s.delete(t.value)),this.emitCalciteListChange()}function f(e,t){e.disabled||(t?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1"))}async function _(e){var c;if(this.filterEnabled&&e==="filter"){await p(this.filterEl);return}const{items:t,multiple:s,selectionFollowsFocus:i}=this;if(t.length===0)return;if(s)return(c=m(t)[0])==null?void 0:c.setFocus();const n=m(t),l=n.find(a=>a.selected)||n[0];return i&&l&&(l.selected=!0),l.setFocus()}function Y(e){this.items=Array.from(this.el.querySelectorAll(e));let t=!1;const{items:s}=this;s.forEach(n=>{n.icon=this.getIconType(),this.multiple||(n.deselectDisabled=!0,f(n,!1)),n.selected&&(t=!0,f(n,!0),this.selectedValues.set(n.value,n))});const[i]=s;!t&&i&&!i.disabled&&f(i,!0)}function j(){const e=this.selectedValues,t=this.items.map(({value:s})=>s);e.forEach(s=>{t.includes(s.value)||this.selectedValues.delete(s.value)})}function G(e){this.items.forEach(t=>{t.value!==e.value&&(t.toggleSelected(!1),this.selectedValues.has(t.value)&&this.selectedValues.delete(t.value))})}function W(e,t=!1){if(!this.lastSelectedItem)return;const{items:s}=this,i=s.findIndex(l=>l.value===this.lastSelectedItem.value),n=s.findIndex(l=>l.value===e.value);s.slice(Math.min(i,n),Math.max(i,n)).forEach(l=>{l.toggleSelected(!t),t?this.selectedValues.delete(l.value):this.selectedValues.set(l.value,l)})}let h;function B(e=!1){var c;const{filteredData:t,filterText:s}=this,i=t.map(a=>a.value);let n=!1;h||(h=new Set);const l=((c=this.items)==null?void 0:c.filter(a=>{const r=a.parentElement;r.matches("calcite-pick-list-group")&&h.add(r);const d=s?i.includes(a.value):!0;return a.hidden=!d,n||(n=d&&a.selected),d}))||[];h.forEach(a=>{const r=l.some(d=>a.contains(d));if(a.hidden=!r,!r)return;const o=I(a,"parent-item");o&&(o.hidden=!1,l.includes(o)&&Array.from(a.children).forEach(d=>d.hidden=!1))}),h.clear(),l.length>0&&!n&&!this.multiple&&f(l[0],!0),this.setFilteredItems(l),e&&this.emitCalciteListFilter()}function J(){var t;const e=(t=this.filterEl)==null?void 0:t.filteredItems;e&&(this.filteredData=e),this.handleFilter()}function Q(e){e.stopPropagation();const{filteredItems:t,value:s}=e.currentTarget;this.filterText=s,this.filteredData=t,this.handleFilter(!0)}function X(){return this.items.map(e=>({label:e.label,description:e.description,metadata:e.metadata,value:e.value}))}const V={sticky:"sticky-pos"},Z={circle:"circle",square:"square",grip:"grip"},O={menuActions:"menu-actions"},ee=({props:{disabled:e,loading:t,filterEnabled:s,dataForFilter:i,handleFilterEvent:n,filterPlaceholder:l,filterText:c,setFilterEl:a,dragEnabled:r,storeAssistiveEl:o}})=>{const d=u("slot",null);return u(b,{disabled:e},u("section",null,r?u("span",{"aria-live":"assertive",class:"assistive-text",ref:o}):null,u("header",{class:{[V.sticky]:!0}},s?u("calcite-filter",{"aria-label":l,disabled:e,items:i,onCalciteFilterChange:n,placeholder:l,ref:a,value:c}):null,u("slot",{name:O.menuActions})),t?u("calcite-scrim",{loading:t}):null,d))},te={actions:"actions",actionsEnd:"actions--end",actionsStart:"actions--start",description:"description",handle:"handle",handleActivated:"handle--activated",icon:"icon",iconDot:"icon-dot",label:"label",remove:"remove",title:"title",textContainer:"text-container"},se={checked:"check",remove:"x"},ie={actionsEnd:"actions-end",actionsStart:"actions-start"};export{te as C,Z as I,ee as L,ie as S,G as a,Q as b,x as c,j as d,R as e,J as f,X as g,B as h,P as i,M as j,$ as k,N as l,U as m,q as n,H as o,Y as p,_ as q,K as r,W as s,z as t,S as u,D as v,se as w};
//# sourceMappingURL=resources-9fe05a64-Chc4uyu7.js.map
