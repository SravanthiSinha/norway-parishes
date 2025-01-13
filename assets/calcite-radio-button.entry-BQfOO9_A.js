import{r as b,c,f as p,h as s,H as m,g as k}from"./index-CRM8otC0.js";import{g as u}from"./array-2c4e379e-BMcQdnYi.js";import{g,b as B,t as v}from"./dom-b6dedd88-DTUdK4-i.js";import{c as x,d as y,H as C}from"./form-8ec29459-PMt6OMJp.js";import{g as I}from"./guid-9c230b6a-BxSjQh8J.js";import{u as R,I as w}from"./interactive-1a42577a-BMgWvxEM.js";import{c as F,d as z,g as A}from"./label-043ae25a-23pfYHyq.js";import{c as L,s as O,a as E}from"./loadable-13e9ffb2-C8FjXa-N.js";import"./component-5f0a8be8-6CIDVndn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const H={container:"container"},q=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-color-foreground-1);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-color-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-color-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-color-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-color-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-color-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,D=q,G=class{constructor(o){b(this,o),this.calciteInternalRadioButtonBlur=c(this,"calciteInternalRadioButtonBlur",6),this.calciteRadioButtonChange=c(this,"calciteRadioButtonChange",6),this.calciteInternalRadioButtonCheckedChange=c(this,"calciteInternalRadioButtonCheckedChange",6),this.calciteInternalRadioButtonFocus=c(this,"calciteInternalRadioButtonFocus",6),this.selectItem=(e,t)=>{e[t].click()},this.queryButtons=()=>Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter(e=>e.name===this.name),this.isFocusable=()=>{const e=this.queryButtons(),t=e.find(a=>!a.disabled),i=e.find(a=>a.checked);return t===this.el&&!i},this.check=()=>{this.disabled||(this.focused=!0,this.setFocus(),!this.checked&&(this.uncheckAllRadioButtonsInGroup(),this.checked=!0,this.calciteRadioButtonChange.emit()))},this.clickHandler=()=>{this.disabled||this.check()},this.setContainerEl=e=>{this.containerEl=e},this.handleKeyDown=e=>{const t=["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "],{key:i}=e,{el:a}=this;if(t.indexOf(i)===-1)return;if(i===" "){this.check(),e.preventDefault();return}let r=i;g(a)==="rtl"&&(i==="ArrowRight"&&(r="ArrowLeft"),i==="ArrowLeft"&&(r="ArrowRight"));const n=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter(l=>l.name===this.name);let d=0;const h=n.length;switch(n.some((l,f)=>{if(l.checked)return d=f,!0}),r){case"ArrowLeft":case"ArrowUp":e.preventDefault(),this.selectItem(n,u(Math.max(d-1,-1),h));return;case"ArrowRight":case"ArrowDown":e.preventDefault(),this.selectItem(n,u(d+1,h));return;default:return}},this.onContainerBlur=()=>{this.focused=!1,this.calciteInternalRadioButtonBlur.emit()},this.onContainerFocus=()=>{this.disabled||(this.focused=!0,this.calciteInternalRadioButtonFocus.emit())},this.checked=!1,this.disabled=!1,this.focused=!1,this.form=void 0,this.guid=void 0,this.hovered=!1,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=void 0}handleHiddenChange(){this.updateTabIndexOfOtherRadioButtonsInGroup()}checkedChanged(o){o&&this.uncheckOtherRadioButtonsInGroup(),this.calciteInternalRadioButtonCheckedChange.emit()}disabledChanged(){this.updateTabIndexOfOtherRadioButtonsInGroup()}nameChanged(){this.checkLastRadioButton()}async setFocus(){await L(this),this.disabled||B(this.containerEl)}syncHiddenFormInput(o){o.type="radio"}onLabelClick(o){if(this.disabled||this.el.hidden)return;const e=o.currentTarget,t=e.for?this.rootNode.querySelector(`calcite-radio-button[id="${e.for}"]`):e.querySelector(`calcite-radio-button[name="${this.name}"]`);t&&(t.focused=!0,this.setFocus(),!t.checked&&(this.uncheckOtherRadioButtonsInGroup(),t.checked=!0,this.calciteRadioButtonChange.emit()))}checkLastRadioButton(){const e=this.queryButtons().filter(t=>t.checked);if((e==null?void 0:e.length)>1){const t=e[e.length-1];e.filter(i=>i!==t).forEach(i=>{i.checked=!1,i.emitCheckedChange()})}}async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){this.queryButtons().forEach(e=>{e.checked&&(e.checked=!1,e.focused=!1)})}uncheckOtherRadioButtonsInGroup(){this.queryButtons().filter(t=>t.guid!==this.guid).forEach(t=>{t.checked&&(t.checked=!1,t.focused=!1)})}updateTabIndexOfOtherRadioButtonsInGroup(){this.queryButtons().filter(t=>t.guid!==this.guid&&!t.disabled).forEach(t=>{p(t)})}getTabIndex(){if(!this.disabled)return this.checked||this.isFocusable()?0:-1}pointerEnterHandler(){this.disabled||(this.hovered=!0)}pointerLeaveHandler(){this.disabled||(this.hovered=!1)}connectedCallback(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||`calcite-radio-button-${I()}`,this.name&&this.checkLastRadioButton(),F(this),x(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}componentWillLoad(){O(this)}componentDidLoad(){E(this),this.focused&&!this.disabled&&this.setFocus()}disconnectedCallback(){z(this),y(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}componentDidRender(){R(this)}render(){const o=this.getTabIndex();return s(m,{key:"45fcb686faaafd7fa14c61ae37c7e56394a2f75d",onClick:this.clickHandler,onKeyDown:this.handleKeyDown},s(w,{key:"3172c8e34562872615f7ff91f3cef82042b14c32",disabled:this.disabled},s("div",{key:"c33c5c4c5bdd1a8fdd821491bf9bf179e19eeef5","aria-checked":v(this.checked),"aria-label":A(this),class:H.container,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,ref:this.setContainerEl,role:"radio",tabIndex:o},s("div",{key:"88bc96d9b946384bf96aefa2dcdf5f6ca39ae7a2",class:"radio"})),s(C,{key:"0851a97b89e6f09ae9634c6417a9950ea3ba1ef6",component:this})))}get el(){return k(this)}static get watchers(){return{hidden:["handleHiddenChange"],checked:["checkedChanged"],disabled:["disabledChanged"],name:["nameChanged"]}}};G.style=D;export{G as calcite_radio_button};
//# sourceMappingURL=calcite-radio-button.entry-BQfOO9_A.js.map
