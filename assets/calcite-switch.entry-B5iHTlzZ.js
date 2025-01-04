import{r as a,c as n,h as e,H as c,g as s}from"./index-CJT1kG3U.js";import{b as r,t as l}from"./dom-b6dedd88-9CMuDstV.js";import{c as d,d as h,H as b}from"./form-8ec29459-Ii5vHZUm.js";import{u as p,I as m}from"./interactive-1a42577a-D7sAePlR.js";import{i as k}from"./key-3ee05994-D63ExP77.js";import{c as u,d as f,g as v}from"./label-043ae25a-zlqHbqJV.js";import{c as g,s as y,a as w}from"./loadable-13e9ffb2-BGmtNLc8.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./component-5f0a8be8-6CIDVndn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const i={container:"container",track:"track",handle:"handle"},x=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-2);vertical-align:top;outline-color:transparent}.container:focus .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}.container:hover .handle,.container:focus .handle{border-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([checked]) .track{border-color:var(--calcite-color-brand-hover);background-color:var(--calcite-color-brand)}:host([checked]) .handle{border-color:var(--calcite-color-brand);inset-inline:auto -1px}:host([checked]) .container:hover .handle{border-color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,z=x,C=class{constructor(o){a(this,o),this.calciteSwitchChange=n(this,"calciteSwitchChange",6),this.keyDownHandler=t=>{!this.disabled&&k(t.key)&&(this.toggle(),t.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.setSwitchEl=t=>{this.switchEl=t},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.scale="m",this.checked=!1,this.value=void 0}async setFocus(){await g(this),r(this.switchEl)}syncHiddenFormInput(o){o.type="checkbox"}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit()}connectedCallback(){u(this),d(this)}componentWillLoad(){y(this)}componentDidLoad(){w(this)}disconnectedCallback(){f(this),h(this)}componentDidRender(){p(this)}render(){return e(c,{key:"7731df888262acc136e2099fe599c6290967fea7",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},e(m,{key:"6bc3781eb46221cbe022c6e6b3e7bad267e4d2c6",disabled:this.disabled},e("div",{key:"1670db00b1cdb4ad8f013ff0dae914683db2004c","aria-checked":l(this.checked),"aria-label":v(this),class:i.container,ref:this.setSwitchEl,role:"switch",tabIndex:0},e("div",{key:"3c6e6d5abc6df9d745e361a65d06f4e7c1a3da16",class:i.track},e("div",{key:"0973b399396b9bd44ac9d2c17b374e2fbfe77b5e",class:i.handle})),e(b,{key:"7776a1881b7b6d43c543e4f388ae6cb4301b4181",component:this}))))}get el(){return s(this)}};C.style=z;export{C as calcite_switch};
//# sourceMappingURL=calcite-switch.entry-B5iHTlzZ.js.map