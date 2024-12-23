import{h as p,f as T}from"./index-XUmwAfbD.js";import{g as L}from"./dom-b6dedd88-CKzhY-8O.js";import{S as a}from"./resources-c6ed25f3-BhfbaUuh.js";import{S as q}from"./resources-fa285c14-Ka4DNstb.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const I=2,m=e=>e.reduce((t,o)=>t+o,0)/e.length,D=e=>{const t=e.filter(n=>n.slot!==a.menuActions),o=t==null?void 0:t.length;return{actionWidth:o?m(t.map(n=>n.clientWidth||0)):0,actionHeight:o?m(t.map(n=>n.clientHeight||0)):0}},O=({width:e,actionWidth:t,layout:o,height:n,actionHeight:i,groupCount:r})=>{const c=o==="horizontal"?e:n,s=o==="horizontal"?t:i;return Math.floor((c-r*I)/s)},H=({layout:e,actionCount:t,actionWidth:o,width:n,actionHeight:i,height:r,groupCount:c})=>Math.max(t-O({width:n,actionWidth:o,layout:e,height:r,actionHeight:i,groupCount:c}),0),A=e=>Array.from(e.querySelectorAll("calcite-action")).filter(t=>t.closest("calcite-action-menu")?t.slot===q.trigger:!0),N=({actionGroups:e,expanded:t,overflowCount:o})=>{let n=o;e.reverse().forEach(i=>{let r=0;const c=A(i).reverse();c.forEach(s=>{s.slot===a.menuActions&&(s.removeAttribute("slot"),s.textEnabled=t)}),n>0&&c.some(s=>(c.filter(f=>!f.slot).length>1&&c.length>2&&!s.closest("calcite-action-menu")&&(s.textEnabled=!0,s.setAttribute("slot",a.menuActions),r++,r>1&&n--),n<1)),T(i)})},v={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function P(e,t){var o;return e||((o=t.closest("calcite-shell-panel"))==null?void 0:o.position)||"start"}function k({el:e,expanded:t}){A(e).filter(o=>o.slot!==a.menuActions).forEach(o=>o.textEnabled=t),e.querySelectorAll("calcite-action-group, calcite-action-menu").forEach(o=>o.expanded=t)}const y=({tooltip:e,referenceElement:t,expanded:o,ref:n})=>(e&&(e.referenceElement=!o&&t?t:null),n&&n(t),t),B=({expanded:e,expandText:t,collapseText:o,expandLabel:n,collapseLabel:i,toggle:r,el:c,position:s,tooltip:u,ref:f,scale:x})=>{const d=L(c)==="rtl",h=e?o:t,C=e?i:n,l=[v.chevronsLeft,v.chevronsRight];d&&l.reverse();const g=P(s,c)==="end",E=g?l[1]:l[0],S=g?l[0]:l[1];return p("calcite-action",{icon:e?E:S,id:"expand-toggle",label:C,onClick:r,ref:b=>y({tooltip:u,referenceElement:b,expanded:e,ref:f}),scale:x,text:h,textEnabled:e,title:!e&&!u?h:null})};export{B as E,H as a,D as g,N as o,A as q,k as t};
//# sourceMappingURL=ExpandToggle-623527ca-DRBwHrEr.js.map
