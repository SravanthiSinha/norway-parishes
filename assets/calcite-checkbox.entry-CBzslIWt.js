import{r as c,c as i,h as t,C as a,H as n,g as l}from"./index-BMHxxDIj.js";import{g as r,t as d}from"./dom-b6dedd88-DEs0su4c.js";import{c as h,d as b,H as g}from"./form-8ec29459-rgn4Gq80.js";import{g as f}from"./guid-9c230b6a-BxSjQh8J.js";import{u as k,I as u}from"./interactive-1a42577a-v3AQ27C4.js";import{i as m}from"./key-3ee05994-D63ExP77.js";import{c as p,d as v,g as x}from"./label-043ae25a-B6VETYma.js";import{c as y,s as C,a as z}from"./loadable-13e9ffb2-BgdRts-S.js";import"./component-5f0a8be8-6CIDVndn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const s={toggle:"toggle",check:"check-svg"},w=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .check-svg,:host([scale=s]) .toggle{inline-size:var(--calcite-checkbox-size, 0.75rem);block-size:var(--calcite-checkbox-size, 0.75rem)}:host([scale=m]) .check-svg,:host([scale=m]) .toggle{inline-size:var(--calcite-checkbox-size, var(--calcite-font-size--1));block-size:var(--calcite-checkbox-size, var(--calcite-font-size--1))}:host([scale=l]) .check-svg,:host([scale=l]) .toggle{inline-size:var(--calcite-checkbox-size, 1rem);block-size:var(--calcite-checkbox-size, 1rem)}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-color-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-checkbox-border-color, var(--calcite-color-border-input));color:var(--calcite-checkbox-icon-color, var(--calcite-color-background))}:host([status=invalid]:not([checked])) .check-svg{box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger)}:host([status=invalid]:not([checked])) .toggle:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-checkbox-border-color-hover, var(--calcite-color-brand))}.toggle{position:relative;outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.toggle::after,.toggle::before{inset-block-start:50%;inset-inline-start:50%;min-block-size:1.5rem;min-inline-size:1.5rem;position:absolute}.toggle:not(.calcite--rtl)::after{content:"";transform:translateX(-50%) translateY(-50%)}.toggle.calcite--rtl::before{content:"";transform:translateX(50%) translateY(-50%)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,I=w,F=class{constructor(e){c(this,e),this.calciteInternalCheckboxBlur=i(this,"calciteInternalCheckboxBlur",6),this.calciteCheckboxChange=i(this,"calciteCheckboxChange",6),this.calciteInternalCheckboxFocus=i(this,"calciteInternalCheckboxFocus",6),this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",this.indeterminatePath="M13 8v1H3V8z",this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"",this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.setFocus(),this.indeterminate=!1,this.calciteCheckboxChange.emit())},this.keyDownHandler=o=>{m(o.key)&&(this.toggle(),o.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.onToggleBlur=()=>{this.calciteInternalCheckboxBlur.emit(!1)},this.onToggleFocus=()=>{this.calciteInternalCheckboxFocus.emit(!0)},this.onLabelClick=()=>{this.toggle()},this.checked=!1,this.disabled=!1,this.form=void 0,this.guid=void 0,this.hovered=!1,this.indeterminate=!1,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.status="idle",this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.value=void 0}async setFocus(){var e;await y(this),(e=this.toggleEl)==null||e.focus()}syncHiddenFormInput(e){e.type="checkbox"}connectedCallback(){this.guid=this.el.id||`calcite-checkbox-${f()}`,p(this),h(this)}disconnectedCallback(){v(this),b(this)}componentWillLoad(){C(this)}componentDidLoad(){z(this)}componentDidRender(){k(this)}render(){const e=r(this.el)==="rtl";return t(n,{key:"146f32544b1a2d6d3c0292462edb979699e4b75a",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},t(u,{key:"d5897a38a203d29967ec1f1e618a7b37d60d9b95",disabled:this.disabled},t("div",{key:"17739f11d7e6368788941434ff8ef6f5d6291cd9","aria-checked":d(this.checked),"aria-label":x(this),class:{[s.toggle]:!0,[a.rtl]:e},onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,ref:o=>this.toggleEl=o,role:"checkbox",tabIndex:this.disabled?void 0:0},t("svg",{key:"99df5e78e296d086a6782983a929bd149c3c4e39","aria-hidden":"true",class:s.check,viewBox:"0 0 16 16"},t("path",{key:"57458a12cf5feeada4c57dfc51c5b62f1e73d49b",d:this.getPath()})),t("slot",{key:"ad29699957eb1d3f041549d7057b4842d3396b3c"})),t(g,{key:"1b2a325739b08d7f21d4abee49fe27f632f78183",component:this})))}get el(){return l(this)}};F.style=I;export{F as calcite_checkbox};
//# sourceMappingURL=calcite-checkbox.entry-CBzslIWt.js.map
