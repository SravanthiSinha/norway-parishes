import{e6 as a}from"./index-U3f91iFJ.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o="calcite-list",l="calcite-list-item-group",n="calcite-list-item";function f(s){return Array.from(s.assignedElements({flatten:!0}).filter(e=>e.matches(o)))}function h(s){const e=s.assignedElements({flatten:!0}),r=e.filter(t=>t==null?void 0:t.matches(l)).map(t=>Array.from(t.querySelectorAll(n))).reduce((t,i)=>[...t,...i],[]),c=e.filter(t=>t==null?void 0:t.matches(n));return[...e.filter(t=>t==null?void 0:t.matches(o)).map(t=>Array.from(t.querySelectorAll(n))).reduce((t,i)=>[...t,...i],[]),...r,...c]}function d(s){s.forEach(e=>{e.setPosition=s.indexOf(e)+1,e.setSize=s.length})}function p(s,e=!1){if(!a())return 0;const r=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(r,s,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{h as a,f as b,p as g,d as u};
//# sourceMappingURL=utils3-Iitg-nmQ.js.map
