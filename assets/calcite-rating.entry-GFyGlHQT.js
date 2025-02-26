import{r as b,c as p,h as s,H as g,g as f}from"./index-DbNmBX4d.js";import{c as m,d as v,H as y}from"./form-8ec29459-Byf1Ohxn.js";import{g as k}from"./guid-9c230b6a-BxSjQh8J.js";import{u as w,I as L}from"./interactive-1a42577a-FDLrHQg3.js";import{c as x,d as V}from"./label-043ae25a-cxXEG0Lo.js";import{s as C,a as F,c as I}from"./loadable-13e9ffb2-DqTcHdgq.js";import{c as R,d as z}from"./locale-60f8ca58-DiWCpcfr.js";import{u as D,c as O,s as P,d as E}from"./t9n-75defee3-jNjmzve6.js";import{f as K}from"./dom-b6dedd88-4kSC7sXI.js";import"./component-5f0a8be8-6CIDVndn.js";import"./key-3ee05994-D63ExP77.js";import"./observers-9c166451-DNuCbXPr.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const u=({full:i,scale:e,partial:t})=>s("calcite-icon",{class:t?void 0:"icon",icon:i?"star-f":"star",scale:e}),M=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([read-only]) *,:host([disabled]) *,:host([read-only]) ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-color-border-input)}.star:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.average,.fraction{color:var(--calcite-color-status-warning)}.hovered,.selected{color:var(--calcite-color-brand)}.fraction{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-color-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,H=M,N=class{constructor(i){b(this,i),this.calciteRatingChange=p(this,"calciteRatingChange",6),this.handleRatingPointerOver=()=>{this.isKeyboardInteraction=!1},this.handleRatingPointerOut=()=>{this.isKeyboardInteraction=!0,this.hoverValue=null},this.handleHostKeyDown=()=>{this.isKeyboardInteraction=!0},this.handleLabelKeyDown=e=>{const t=this.getValueFromLabelEvent(e),a=e.key,n=a==" "?void 0:Number(a);if(this.emit=!0,isNaN(n))switch(a){case"Enter":case" ":this.value=!this.required&&this.value===t?0:t;break;case"ArrowLeft":this.value=this.getPreviousRatingValue(t),this.updateFocus(),e.preventDefault();break;case"ArrowRight":this.value=this.getNextRatingValue(t),this.updateFocus(),e.preventDefault();break;case"Tab":this.hoverValue=null;break}else!this.required&&n>=0&&n<=this.max?this.value=n:this.required&&n>0&&n<=this.max&&(this.value=n),this.updateFocus()},this.handleInputChange=e=>{if(this.isKeyboardInteraction===!0){const t=Number(e.target.value);this.hoverValue=t,this.value=t}},this.handleLabelPointerOver=e=>{this.hoverValue=this.getValueFromLabelEvent(e)},this.handleLabelPointerDown=e=>{const t=e.currentTarget,a=this.getValueFromLabelEvent(e);this.hoverValue=a,this.emit=!0,this.value=!this.required&&this.value===a?0:a,t.focus()},this.handleLabelClick=e=>{e.preventDefault()},this.handleLabelFocus=e=>{const t=this.getValueFromLabelEvent(e);this.hoverValue=t},this.setLabelEl=e=>{this.labelElements.push(e)},this.emit=!1,this.guid=`calcite-ratings-${k()}`,this.isKeyboardInteraction=!0,this.labelElements=[],this.max=5,this.average=void 0,this.count=void 0,this.disabled=!1,this.form=void 0,this.messages=void 0,this.messageOverrides=void 0,this.name=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.showChip=!1,this.value=0,this.effectiveLocale="",this.defaultMessages=void 0,this.hoverValue=void 0}onMessagesChange(){}handleValueUpdate(i){this.hoverValue=i,this.emit&&this.calciteRatingChange.emit(),this.emit=!1}effectiveLocaleChange(){D(this,this.effectiveLocale)}connectedCallback(){R(this),O(this),x(this),m(this)}async componentWillLoad(){await P(this),C(this)}componentWillRender(){this.starsMap=Array.from({length:this.max},(i,e)=>{const t=e+1,a=!this.hoverValue&&this.average&&!this.value&&t<=this.average,n=t===this.value,o=this.average&&this.average+1-t,l=t<=this.hoverValue,c=`${this.guid}-${t}`,h=!this.hoverValue&&!this.value&&!l&&o>0&&o<1,r=this.value>=t,d=this.getTabIndex(t);return{average:a,checked:n,fraction:o,hovered:l,id:c,partial:h,selected:r,value:t,tabIndex:d}})}componentDidLoad(){F(this)}disconnectedCallback(){z(this),E(this),V(this),v(this)}componentDidRender(){w(this)}render(){var i,e;return s(g,{key:"0e3159f00247860bc8c33e0913f9dd1e9248d887",onKeyDown:this.handleHostKeyDown,onPointerOut:this.handleRatingPointerOut,onPointerOver:this.handleRatingPointerOver},s(L,{key:"04013c4189a6c47e8c4ca61ee51b4b8491108964",disabled:this.disabled},s("span",{key:"0fca81bc548e56b36cbf1695076517ba8204bef1",class:"wrapper"},s("fieldset",{key:"30578fd314ff0e26c7963d5a9ad5bf787c4a6af0",class:"fieldset",disabled:this.disabled},s("legend",{key:"18147ef049b4602781c7b7a2c102af81be7149d7",class:"visually-hidden"},this.messages.rating),this.starsMap.map(({average:t,checked:a,fraction:n,hovered:o,id:l,partial:c,selected:h,value:r,tabIndex:d})=>s("label",{class:{star:!0,selected:h,hovered:o,average:t,partial:c},"data-value":r,htmlFor:l,onClick:this.handleLabelClick,onFocus:this.handleLabelFocus,onKeyDown:this.handleLabelKeyDown,onPointerDown:this.handleLabelPointerDown,onPointerOver:this.handleLabelPointerOver,ref:this.setLabelEl,tabIndex:d},s("input",{checked:a,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:l,name:this.guid,onChange:this.handleInputChange,tabIndex:-1,type:"radio",value:r}),s(u,{full:h||t,scale:this.scale}),c&&s("div",{class:"fraction",style:{width:`${n*100}%`}},s(u,{full:!0,partial:!0,scale:this.scale})),s("span",{class:"visually-hidden"},this.messages.stars.replace("{num}",`${r}`)))),(this.count||this.average)&&this.showChip?s("calcite-chip",{scale:this.scale,value:(i=this.count)==null?void 0:i.toString()},!!this.average&&s("span",{class:"number--average"},this.average.toString()),!!this.count&&s("span",{class:"number--count"},"(",(e=this.count)==null?void 0:e.toString(),")")):null),s(y,{key:"2aabd4db649ddc70a0b70d9f406f34e632676796",component:this}))))}onLabelClick(){this.setFocus()}updateFocus(){this.hoverValue=this.value,this.labelElements[this.value-1].focus()}getTabIndex(i){return this.readOnly||this.value!==i&&(this.value||i!==1)?-1:0}getValueFromLabelEvent(i){const e=i.currentTarget;return Number(e.getAttribute("data-value"))}getNextRatingValue(i){return i===5?1:i+1}getPreviousRatingValue(i){return i===1?5:i-1}async setFocus(){await I(this),K(this.el)}static get assetsDirs(){return["assets"]}get el(){return f(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],value:["handleValueUpdate"],effectiveLocale:["effectiveLocaleChange"]}}};N.style=H;export{N as calcite_rating};
//# sourceMappingURL=calcite-rating.entry-GFyGlHQT.js.map
