import{r as i,h as t,H as c}from"./index-BlakZCKi.js";import{a as s}from"./dom-b6dedd88-B7panKZl.js";import{S as o,C as a}from"./resources-712f69f4-6IkRkr2k.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const l=":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}",d=l,r=class{constructor(n){i(this,n),this.handleActionsStartSlotChange=e=>{this.hasActionsStart=s(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=s(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=s(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=s(e)},this.disabled=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasContentStart=!1,this.hasContentEnd=!1}renderActionsStart(){const{hasActionsStart:n}=this;return t("div",{class:a.actionsStart,hidden:!n,key:"actions-start-container"},t("slot",{name:o.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{hasActionsEnd:n}=this;return t("div",{class:a.actionsEnd,hidden:!n,key:"actions-end-container"},t("slot",{name:o.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}))}renderContentStart(){const{hasContentStart:n}=this;return t("div",{class:a.contentStart,hidden:!n},t("slot",{name:o.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderDefaultContent(){return t("div",{class:a.content},t("slot",null))}renderContentEnd(){const{hasContentEnd:n}=this;return t("div",{class:a.contentEnd,hidden:!n},t("slot",{name:o.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}render(){return t(c,{key:"97f052828720d715fd3b11a4b0e77fa085127796"},t("div",{key:"5351cc20a8a437763894fef35ecc7a7240cb7c46",class:a.container},this.renderActionsStart(),this.renderContentStart(),this.renderDefaultContent(),this.renderContentEnd(),this.renderActionsEnd()))}};r.style=d;export{r as calcite_stack};
//# sourceMappingURL=calcite-stack.entry-uQUckvut.js.map
