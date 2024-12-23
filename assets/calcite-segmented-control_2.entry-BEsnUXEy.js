import{r as m,c as f,h as l,H as u,i as v,g}from"./index-Cj37dcSI.js";import{s as C,t as p,g as k,z as y}from"./dom-b6dedd88-Ct1pnVCc.js";import{a as I,c as S,d as x,H as w}from"./form-8ec29459-OpVog65o.js";import{u as z,I as A}from"./interactive-1a42577a-CuiQZhZs.js";import{c as D,d as L}from"./label-043ae25a-BOLPP533.js";import{s as E,a as M,c as F}from"./loadable-13e9ffb2-BVmhcbxh.js";import{V as H}from"./Validation-c59cb4eb-DQSswiS1.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./component-5f0a8be8-6CIDVndn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const R={itemWrapper:"item-wrapper"},h={validationMessage:"segmentedControlValidationMessage"},O=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}.item-wrapper{display:flex;background-color:var(--calcite-color-foreground-1);inline-size:-moz-fit-content;inline-size:fit-content;outline:1px solid var(--calcite-color-border-input);outline-offset:-1px}:host([appearance=outline])>.item-wrapper{background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([layout=vertical])>.item-wrapper{flex-direction:column;align-items:flex-start;align-self:flex-start}:host([width=full])>.item-wrapper{inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content}:host([width=full])>.item-wrapper ::slotted(calcite-segmented-control-item){flex:1 1 auto}:host([width=full][layout=vertical])>.item-wrapper ::slotted(calcite-segmented-control-item){justify-content:flex-start}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}",P=O,_=class{constructor(e){m(this,e),this.calciteSegmentedControlChange=f(this,"calciteSegmentedControlChange",6),this.handleClick=t=>{this.disabled||t.target.localName==="calcite-segmented-control-item"&&this.selectItem(t.target,!0)},this.items=[],this.handleDefaultSlotChange=t=>{const a=C(t).filter(n=>n.matches("calcite-segmented-control-item"));this.items=a,this.handleSelectedItem(),this.handleItemPropChange()},this.appearance="solid",this.disabled=!1,this.form=void 0,this.required=!1,this.name=void 0,this.layout="horizontal",this.scale="m",this.value=null,this.selectedItem=void 0,this.status="idle",this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.width="auto"}handlePropsChange(){this.handleItemPropChange()}valueHandler(e){const{items:t}=this;t.forEach(a=>a.checked=a.value===e)}handleSelectedItemChange(e,t){if(this.value=e==null?void 0:e.value,e===t)return;const{items:a}=this,n=a.filter(i=>i===e).pop();n?this.selectItem(n):a[0]&&(a[0].tabIndex=0)}componentWillLoad(){E(this)}componentDidLoad(){I(this,this.value),M(this)}connectedCallback(){D(this),S(this)}disconnectedCallback(){L(this),x(this)}componentDidRender(){z(this)}render(){return l(u,{key:"ac313987378a112da88c90e368d19efc06ce79f3",onClick:this.handleClick,role:"radiogroup"},l("div",{key:"bef3d657abe624bb76e57561b5a035f374c38faf","aria-errormessage":h.validationMessage,"aria-invalid":p(this.status==="invalid"),class:R.itemWrapper},l(A,{key:"a6e66f9d51e2aa5eabdc3cda5a551c16b9493563",disabled:this.disabled},l("slot",{key:"e7b4be362a356570aa639b3c32074ed686391d86",onSlotchange:this.handleDefaultSlotChange}),l(w,{key:"22afaeb8f4250514b981079875183561b5432393",component:this}))),this.validationMessage&&this.status==="invalid"?l(H,{icon:this.validationIcon,id:h.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null)}handleSelected(e){e.preventDefault();const t=e.target;t.checked&&this.selectItem(t),e.stopPropagation()}handleKeyDown(e){const t=["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "],{key:a}=e,{el:n,selectedItem:i}=this;if(t.indexOf(a)===-1)return;let o=a;k(n)==="rtl"&&(a==="ArrowRight"&&(o="ArrowLeft"),a==="ArrowLeft"&&(o="ArrowRight"));const{items:s}=this;let r=-1;switch(s.forEach((d,b)=>{d===i&&(r=b)}),o){case"ArrowLeft":case"ArrowUp":{e.preventDefault();const d=r<1?s[s.length-1]:s[r-1];this.selectItem(d,!0);return}case"ArrowRight":case"ArrowDown":{e.preventDefault();const d=r===-1?s[1]:s[r+1]||s[0];this.selectItem(d,!0);return}case" ":e.preventDefault(),this.selectItem(e.target,!0);return;default:return}}async setFocus(){var e;await F(this),(e=this.selectedItem||this.items[0])==null||e.focus()}handleItemPropChange(){const{items:e}=this;e.forEach(t=>{t.appearance=this.appearance,t.layout=this.layout,t.scale=this.scale})}handleSelectedItem(){const{items:e}=this,t=e.filter(a=>a.checked).pop();t?this.selectItem(t):e[0]&&(e[0].tabIndex=0)}onLabelClick(){this.setFocus()}selectItem(e,t=!1){if(e===this.selectedItem)return;const{items:a}=this;let n=null;a.forEach(i=>{const o=i===e;(o&&!i.checked||!o&&i.checked)&&(i.checked=o),i.tabIndex=o?0:-1,o&&(n=i,t&&this.calciteSegmentedControlChange.emit())}),this.selectedItem=n,v()&&n&&n.focus()}get el(){return g(this)}static get watchers(){return{appearance:["handlePropsChange"],layout:["handlePropsChange"],scale:["handlePropsChange"],value:["valueHandler"],selectedItem:["handleSelectedItemChange"]}}};_.style=P;const U={input:"input"},c={label:"label",labelScale:e=>`label--scale-${e}`,labelHorizontal:"label--horizontal",labelOutline:"label--outline",labelOutlineFill:"label--outline-fill",icon:"icon",iconSolo:"icon--solo"},V=`:host{display:flex;cursor:pointer;align-self:stretch;font-weight:var(--calcite-font-weight-normal);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-animation-timing) ease-in-out}:host label{pointer-events:none;margin:0.125rem;box-sizing:border-box;display:flex;flex:1 1 0%;align-items:center;color:var(--calcite-color-text-3);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-internal-animation-timing-fast) ease-in-out, color var(--calcite-internal-animation-timing-fast) ease-in-out}.label--horizontal{justify-content:center}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          );outline-offset:-1px}.label--scale-s{padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-block:0.125rem}.label--scale-m{padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-block:0.375rem}.label--scale-l{padding-inline:1rem;padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host(:hover) label{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:active) label{background-color:var(--calcite-color-foreground-3)}:host([checked]) label{cursor:default;border-color:var(--calcite-color-brand);background-color:var(--calcite-color-brand);color:var(--calcite-color-text-inverse)}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{border-color:var(--calcite-color-brand);background-color:var(--calcite-color-foreground-1);box-shadow:inset 0 0 0 1px var(--calcite-color-brand);color:var(--calcite-color-brand)}:host([checked]) .label--outline{background-color:transparent}::slotted(input){display:none}@media (forced-colors: active){:host([checked]) label{background-color:highlight}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{outline:2px solid transparent;outline-offset:2px}:host([checked]) label:not([class~=label--outline]) .icon{color:highlightText}}.icon{position:relative;margin:0px;display:inline-flex;line-height:inherit;margin-inline-start:var(--calcite-internal-segmented-control-icon-margin-start);margin-inline-end:var(--calcite-internal-segmented-control-icon-margin-end)}:host([icon-start]) .label--scale-s{--calcite-internal-segmented-control-icon-margin-end:0.5rem}:host([icon-end]) .label--scale-s{--calcite-internal-segmented-control-icon-margin-start:0.5rem}:host([icon-start]) .label--scale-m{--calcite-internal-segmented-control-icon-margin-end:0.75rem}:host([icon-end]) .label--scale-m{--calcite-internal-segmented-control-icon-margin-start:0.75rem}:host([icon-start]) .label--scale-l{--calcite-internal-segmented-control-icon-margin-end:1rem}:host([icon-end]) .label--scale-l{--calcite-internal-segmented-control-icon-margin-start:1rem}.label .icon--solo{--calcite-internal-segmented-control-icon-margin-start:0;--calcite-internal-segmented-control-icon-margin-end:0}:host([hidden]){display:none}[hidden]{display:none}`,j=V,W=class{constructor(e){m(this,e),this.calciteInternalSegmentedControlItemChange=f(this,"calciteInternalSegmentedControlItemChange",6),this.handleSlotChange=t=>{this.hasSlottedContent=y(t)},this.checked=!1,this.iconFlipRtl=!1,this.iconStart=void 0,this.iconEnd=void 0,this.value=void 0,this.appearance="solid",this.layout="horizontal",this.scale="m",this.hasSlottedContent=!1}handleCheckedChange(){this.calciteInternalSegmentedControlItemChange.emit()}renderIcon(e,t=!1){return e?l("calcite-icon",{class:{[c.icon]:!0,[c.iconSolo]:t},flipRtl:this.iconFlipRtl,icon:e,scale:"s"}):null}render(){const{appearance:e,checked:t,layout:a,scale:n,value:i}=this;return l(u,{key:"f4aa9eaa2e02dae97e647f25b764e1a283f2ad66","aria-checked":p(t),"aria-label":i,role:"radio"},l("label",{key:"9e3460a279d8c3b876897ea58a004ddd1a43cfc8",class:{[c.label]:!0,[c.labelScale(n)]:!0,[c.labelHorizontal]:a==="horizontal",[c.labelOutline]:e==="outline",[c.labelOutlineFill]:e==="outline-fill"}},this.renderContent()))}renderContent(){const{hasSlottedContent:e,iconEnd:t,iconStart:a}=this,n=a||t;return!e&&n?[this.renderIcon(n,!0),l("slot",{onSlotchange:this.handleSlotChange})]:[this.renderIcon(a),l("slot",{onSlotchange:this.handleSlotChange}),l("slot",{name:U.input}),this.renderIcon(t)]}get el(){return g(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};W.style=j;export{_ as calcite_segmented_control,W as calcite_segmented_control_item};
//# sourceMappingURL=calcite-segmented-control_2.entry-BEsnUXEy.js.map
