import{r as i,c as l,h as e,H as s,g as o}from"./index-CJT1kG3U.js";import{a as c,l as r,b as d}from"./label-043ae25a-zlqHbqJV.js";import"./dom-b6dedd88-9CMuDstV.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./component-5f0a8be8-6CIDVndn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const h={container:"container"},b=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",m=b,g=class{constructor(a){i(this,a),this.calciteInternalLabelClick=l(this,"calciteInternalLabelClick",2),this.labelClickHandler=n=>{var t;((t=window.getSelection())==null?void 0:t.type)!=="Range"&&this.calciteInternalLabelClick.emit({sourceEvent:n})},this.alignment="start",this.for=void 0,this.scale="m",this.layout="default"}handleForChange(){c(this.el)}connectedCallback(){document.dispatchEvent(new CustomEvent(r))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(d))}render(){return e(s,{key:"c3eff09792519c9e5a76ee28e3754db83b536f99",onClick:this.labelClickHandler},e("div",{key:"387902edd9b59be290f95ad6c2721584037d7256",class:h.container},e("slot",{key:"b54d782522e95323333040e40e1a6dd06b52a575"})))}get el(){return o(this)}static get watchers(){return{for:["handleForChange"]}}};g.style=m;export{g as calcite_label};
//# sourceMappingURL=calcite-label.entry-Cl2iVMEU.js.map