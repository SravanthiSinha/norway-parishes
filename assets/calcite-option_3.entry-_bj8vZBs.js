import{r as o,c,h as n,g as h,F as u,H as m}from"./index-BMHxxDIj.js";import{c as p}from"./observers-9c166451-B1eE7w7i.js";import{b as f,t as b}from"./dom-b6dedd88-DEs0su4c.js";import{c as v,d as g,a as C,H as y}from"./form-8ec29459-rgn4Gq80.js";import{u as E,I as x}from"./interactive-1a42577a-v3AQ27C4.js";import{c as w,d as I,g as S}from"./label-043ae25a-B6VETYma.js";import{s as k,a as N,c as O}from"./loadable-13e9ffb2-BgdRts-S.js";import{g as T}from"./component-5f0a8be8-6CIDVndn.js";import{V as z}from"./Validation-c59cb4eb-Bygsr9sG.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const P=":host{display:block}:host([hidden]){display:none}[hidden]{display:none}",L=P,F=class{constructor(e){o(this,e),this.calciteInternalOptionChange=c(this,"calciteInternalOptionChange",6),this.mutationObserver=p("mutation",()=>{this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()}),this.disabled=!1,this.label=void 0,this.selected=void 0,this.value=void 0}handlePropChange(e,t,a){(a==="label"||a==="value")&&this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()}ensureTextContentDependentProps(){const{el:{textContent:e},internallySetLabel:t,internallySetValue:a,label:i,value:r}=this;(!i||i===t)&&(this.label=e,this.internallySetLabel=e),(r==null||r===a)&&(this.value=e,this.internallySetValue=e)}connectedCallback(){var e;this.ensureTextContentDependentProps(),(e=this.mutationObserver)==null||e.observe(this.el,{attributeFilter:["label","value"],characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect()}render(){return n("slot",{key:"e5df72ac4455ee2e14c0e48a40739a9a271c9c57"},this.label)}get el(){return h(this)}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}}};F.style=L;const A=":host{display:block}:host([hidden]){display:none}[hidden]{display:none}",M=A,V=class{constructor(e){o(this,e),this.calciteInternalOptionGroupChange=c(this,"calciteInternalOptionGroupChange",6),this.disabled=!1,this.label=void 0}handlePropChange(){this.calciteInternalOptionGroupChange.emit()}render(){return n(u,{key:"174fcf908d37aba0972b1f408938a6ce909e45ff"},n("div",{key:"49ac7e0b58d14a8d07322c7c68670d9c5863c291"},this.label),n("slot",{key:"07d24a3a1edf192733bcb3fcdf279f121df482ed"}))}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"]}}};V.style=M;const s={icon:"icon",iconContainer:"icon-container",select:"select",wrapper:"wrapper"},d={validationMessage:"selectValidationMessage"},D=`:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}.wrapper{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}.wrapper:focus-within .icon,.wrapper:active .icon,.wrapper:hover .icon{color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .wrapper{block-size:1.5rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .wrapper{block-size:2rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .wrapper{block-size:44px}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);font-family:inherit;color:var(--calcite-color-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}select:disabled{border-color:var(--calcite-color-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:transparent;color:var(--calcite-color-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.icon-container .icon{color:var(--calcite-color-text-3)}:host([status=invalid]) select,:host([status=invalid]) .icon-container{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) select:focus,:host([status=invalid]) .icon-container:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.select:focus~.icon-container{border-color:transparent}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,H=D;function l(e){return e.tagName==="CALCITE-OPTION"}function q(e){return e.tagName==="CALCITE-OPTION-GROUP"}const _=class{constructor(e){o(this,e),this.calciteSelectChange=c(this,"calciteSelectChange",6),this.componentToNativeEl=new Map,this.mutationObserver=p("mutation",()=>this.populateInternalSelect()),this.handleInternalSelectChange=()=>{const t=this.selectEl.selectedOptions[0];this.selectFromNativeOption(t),requestAnimationFrame(()=>this.emitChangeEvent())},this.populateInternalSelect=()=>{const t=Array.from(this.el.children).filter(a=>a.tagName==="CALCITE-OPTION"||a.tagName==="CALCITE-OPTION-GROUP");this.clearInternalSelect(),t.forEach(a=>{var i;return(i=this.selectEl)==null?void 0:i.append(this.toNativeElement(a))})},this.storeSelectRef=t=>{this.selectEl=t,this.populateInternalSelect();const a=this.selectEl.selectedOptions[0];this.selectFromNativeOption(a)},this.emitChangeEvent=()=>{this.calciteSelectChange.emit()},this.disabled=!1,this.form=void 0,this.label=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.required=!1,this.scale="m",this.status="idle",this.value=null,this.selectedOption=void 0,this.width="auto"}valueHandler(e){this.updateItemsFromValue(e)}selectedOptionHandler(e){this.value=e==null?void 0:e.value}connectedCallback(){var t;const{el:e}=this;(t=this.mutationObserver)==null||t.observe(e,{subtree:!0,childList:!0}),w(this),v(this)}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect(),I(this),g(this)}componentWillLoad(){k(this),typeof this.value=="string"&&this.updateItemsFromValue(this.value)}componentDidLoad(){var e;N(this),C(this,((e=this.selectedOption)==null?void 0:e.value)??"")}componentDidRender(){E(this)}async setFocus(){await O(this),f(this.selectEl)}handleOptionOrGroupChange(e){e.stopPropagation();const t=e.target,a=this.componentToNativeEl.get(t);a&&(this.updateNativeElement(t,a),l(t)&&t.selected&&(this.deselectAllExcept(t),this.selectedOption=t))}onLabelClick(){this.setFocus()}updateItemsFromValue(e){this.el.querySelectorAll("calcite-option").forEach(t=>t.selected=t.value===e)}updateNativeElement(e,t){if(t.disabled=e.disabled,t.label=e.label,l(e)){const a=t;a.selected=e.selected,a.value=e.value,a.innerText=e.label}}clearInternalSelect(){this.componentToNativeEl.forEach(e=>e.remove()),this.componentToNativeEl.clear()}selectFromNativeOption(e){if(!e)return;let t;this.componentToNativeEl.forEach((a,i)=>{l(i)&&a===e&&(i.selected=!0,t=i,this.deselectAllExcept(i))}),t&&(this.selectedOption=t)}toNativeElement(e){if(l(e)){const t=document.createElement("option");return this.updateNativeElement(e,t),this.componentToNativeEl.set(e,t),t}if(q(e)){const t=document.createElement("optgroup");return this.updateNativeElement(e,t),Array.from(e.children).forEach(a=>{const i=this.toNativeElement(a);t.append(i),this.componentToNativeEl.set(e,i)}),this.componentToNativeEl.set(e,t),t}throw new Error("unsupported element child provided")}deselectAllExcept(e){this.el.querySelectorAll("calcite-option").forEach(t=>{t!==e&&(t.selected=!1)})}renderChevron(){return n("div",{class:s.iconContainer},n("calcite-icon",{class:s.icon,icon:"chevron-down",scale:T(this.scale)}))}render(){const{disabled:e}=this;return n(m,{key:"d2e0ad4197079513f4e9e0070fb397c4f8331597"},n(x,{key:"5eee0d42742248209469fb7a5e3541cdbe373d30",disabled:e},n("div",{key:"e12c66d415dfe7c24e63731f2a83a081687fba8a",class:s.wrapper},n("select",{key:"22685962db75d2527740d288f016665ec5e6053e","aria-errormessage":d.validationMessage,"aria-invalid":b(this.status==="invalid"),"aria-label":S(this),class:s.select,disabled:e,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},n("slot",{key:"1b105206faa1f0765add18140b0f99f3d273c11f"})),this.renderChevron(),n(y,{key:"5767128465128a9fb5f69c9241bef0da56b9432e",component:this})),this.validationMessage&&this.status==="invalid"?n(z,{icon:this.validationIcon,id:d.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}get el(){return h(this)}static get watchers(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}}};_.style=H;export{F as calcite_option,V as calcite_option_group,_ as calcite_select};
//# sourceMappingURL=calcite-option_3.entry-_bj8vZBs.js.map
