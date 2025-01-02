import{r as d,c as l,h as i,H as r,g as n}from"./index-Vdm0PCas.js";import{h as c,b as h}from"./dom-b6dedd88-Dfv97P2g.js";import{u as p,I as m}from"./interactive-1a42577a-B230YtAx.js";import{a as u,s as f,b}from"./loadable-13e9ffb2-Dn03AihA.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const g=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}.container{display:flex;flex-wrap:wrap;gap:var(--calcite-card-group-space, var(--calcite-card-group-gap, var(--calcite-size-md)))}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}",I=g,S=class{constructor(e){d(this,e),this.calciteCardGroupSelect=l(this,"calciteCardGroupSelect",6),this.items=[],this.udpateItemsOnSelectionModeChange=()=>{this.updateSlottedItems(this.slotRefEl),this.updateSelectedItems()},this.updateItemsOnSlotChange=t=>{this.updateSlottedItems(t.target),this.updateSelectedItems()},this.updateSlottedItems=t=>{this.items=t.assignedElements({flatten:!0}).filter(s=>s==null?void 0:s.matches("calcite-card"))},this.updateSelectedItems=()=>{this.items.forEach(t=>{t.selectionMode=this.selectionMode}),this.setSelectedItems(!1)},this.setSelectedItems=(t,s)=>{s&&this.items.forEach(a=>{const o=s===a;switch(this.selectionMode){case"multiple":o&&(a.selected=!a.selected);break;case"single":a.selected=o?!a.selected:!1;break;case"single-persist":a.selected=!!o;break}}),this.selectedItems=this.items.filter(a=>a.selected),t&&this.selectionMode!=="none"&&!this.disabled&&this.calciteCardGroupSelect.emit()},this.disabled=!1,this.label=void 0,this.selectionMode="none",this.selectedItems=[]}onSelectionModeChange(){this.udpateItemsOnSelectionModeChange()}componentDidRender(){p(this)}componentDidLoad(){u(this)}async componentWillLoad(){f(this)}calciteInternalCardKeyEventListener(e){if(e.composedPath().includes(this.el)){const t=this.items.filter(s=>!s.disabled);switch(e.detail.key){case"ArrowRight":c(t,e.target,"next");break;case"ArrowLeft":c(t,e.target,"previous");break;case"Home":c(t,e.target,"first");break;case"End":c(t,e.target,"last");break}}}calciteCardSelectListener(e){e.composedPath().includes(this.el)&&!e.target.selectable&&this.setSelectedItems(!0,e.target)}async setFocus(){await b(this),this.disabled||h(this.items[0])}render(){const e=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup";return i(r,{key:"2aa2152806418f305065d23ec9779668086f10c9"},i(m,{key:"64717db7b05788f5448b898ab9bfc2a553ed6ac9",disabled:this.disabled},i("div",{key:"f6725d6c8942a0c69aed287bee24d79fd42c7e89","aria-label":this.label,class:"container",role:e},i("slot",{key:"a88d6f133fdceafba10ceb9517428b3c7ee8cffb",onSlotchange:this.updateItemsOnSlotChange,ref:t=>this.slotRefEl=t}))))}get el(){return n(this)}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}};S.style=I;export{S as calcite_card_group};
//# sourceMappingURL=calcite-card-group.entry-DJiTFo7R.js.map
