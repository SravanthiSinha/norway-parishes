import{r as i,c as o,h as a,H as n,g as l}from"./index-U3f91iFJ.js";import{c as r}from"./observers-9c166451-CPOshbR9.js";import{t as c}from"./dom-b6dedd88-DVv4NIlW.js";import{s as d,a as h,c as u}from"./loadable-13e9ffb2-DDS8ZEua.js";import{V as p}from"./Validation-c59cb4eb-DKYFvlew.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const m={itemWrapper:"item-wrapper"},s={validationMessage:"radioButtonGroupValidationMessage"},g=":host{display:flex;flex-direction:column}:host>.item-wrapper{display:flex;max-inline-size:100vw}:host([layout=horizontal])>.item-wrapper{flex-direction:row;flex-wrap:wrap}:host([layout=horizontal][scale=s])>.item-wrapper{column-gap:1rem}:host([layout=horizontal][scale=m])>.item-wrapper{column-gap:1.25rem}:host([layout=horizontal][scale=l])>.item-wrapper{column-gap:1.5rem}:host([layout=vertical])>.item-wrapper{flex-direction:column;inline-size:-moz-fit-content;inline-size:fit-content}:host([scale=s]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-xxs) * -1)}:host([scale=m]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-sm) * -1)}:host([scale=l]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-md) * -1)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}:host([hidden]){display:none}[hidden]{display:none}",f=g,b=class{constructor(t){i(this,t),this.calciteRadioButtonGroupChange=o(this,"calciteRadioButtonGroupChange",6),this.mutationObserver=r("mutation",()=>this.passPropsToRadioButtons()),this.passPropsToRadioButtons=()=>{this.radioButtons=Array.from(this.el.querySelectorAll("calcite-radio-button")),this.selectedItem=Array.from(this.radioButtons).find(e=>e.checked)||null,this.radioButtons.length>0&&this.radioButtons.forEach(e=>{e.disabled=this.disabled||e.disabled,e.hidden=this.el.hidden,e.name=this.name,e.required=this.required,e.scale=this.scale})},this.disabled=!1,this.layout="horizontal",this.name=void 0,this.required=!1,this.selectedItem=null,this.scale="m",this.status="idle",this.validationMessage=void 0,this.validationIcon=void 0,this.radioButtons=[]}handleHiddenChange(){this.passPropsToRadioButtons()}onDisabledChange(){this.passPropsToRadioButtons()}onLayoutChange(){this.passPropsToRadioButtons()}onScaleChange(){this.passPropsToRadioButtons()}connectedCallback(){var t;this.passPropsToRadioButtons(),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){d(this)}componentDidLoad(){h(this)}disconnectedCallback(){var t;(t=this.mutationObserver)==null||t.disconnect()}getFocusableRadioButton(){return this.radioButtons.find(t=>!t.disabled)??null}async setFocus(){var t;if(await u(this),this.selectedItem&&!this.selectedItem.disabled)return this.selectedItem.setFocus();if(this.radioButtons.length>0)return(t=this.getFocusableRadioButton())==null?void 0:t.setFocus()}radioButtonChangeHandler(t){this.selectedItem=t.target,this.calciteRadioButtonGroupChange.emit()}render(){return a(n,{key:"487c8e698a30bffc79b233b81faad9bab7ea17e5",role:"radiogroup"},a("div",{key:"63cf9169798fefa62551fa0a975735ed2afd5a66","aria-errormessage":s.validationMessage,"aria-invalid":c(this.status==="invalid"),class:m.itemWrapper},a("slot",{key:"a7274291fc93583ebdee167c3c1e2f71f7fa255c"})),this.validationMessage&&this.status==="invalid"?a(p,{icon:this.validationIcon,id:s.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null)}get el(){return l(this)}static get watchers(){return{hidden:["handleHiddenChange"],disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}}};b.style=f;export{b as calcite_radio_button_group};
//# sourceMappingURL=calcite-radio-button-group.entry-DgGdUNMx.js.map
