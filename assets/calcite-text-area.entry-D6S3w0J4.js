import{r as u,c as d,h as a,f as x,H as b,g as p}from"./index-Cj37dcSI.js";import{c as v,d as y,H as z}from"./form-8ec29459-OpVog65o.js";import{c as L,d as C,g as k}from"./label-043ae25a-BOLPP533.js";import{t as w,a as h}from"./dom-b6dedd88-Ct1pnVCc.js";import{c as A,d as E,n as l}from"./locale-60f8ca58-Dec3Eeay.js";import{c as H}from"./observers-9c166451-B4McKwXe.js";import{s as S,a as O,c as I,b as f}from"./loadable-13e9ffb2-BVmhcbxh.js";import{c as M,s as T,d as W,u as F}from"./t9n-75defee3-DTMBjP1X.js";import{u as j,I as D}from"./interactive-1a42577a-CuiQZhZs.js";import{g as V}from"./guid-9c230b6a-BxSjQh8J.js";import{V as R}from"./Validation-c59cb4eb-DQSswiS1.js";import{s as U}from"./input-871f5b21-j1u1wOBY.js";import{t as B}from"./throttle-1a76fbfb-D_vt46yg.js";import"./debounce-6e4946fd-CA9eFM3j.js";import"./component-5f0a8be8-6CIDVndn.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const i={assistiveText:"assistive-text",characterLimit:"character-limit",content:"content",container:"container",footer:"footer",resizeDisabled:"resize--disabled",resizeDisabledX:"resize--disabled-x",resizeDisabledY:"resize--disabled-y",characterOverLimit:"character--over-limit",readOnly:"readonly",textAreaInvalid:"text-area--invalid",footerSlotted:"footer--slotted",hide:"hide",footerEndSlotOnly:"footer--end-only",textArea:"text-area",textAreaOnly:"text-area--only"},m={validationMessage:"textAreaValidationMessage"},g={footerStart:"footer-start",footerEnd:"footer-end"},q=100,G=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%;--calcite-internal-text-area-border-color:var(--calcite-text-area-border-color, var(--calcite-color-border-input));--calcite-internal-text-area-footer-border-color:var(
    --calcite-text-area-footer-border-color,
    var(--calcite-internal-text-area-border-color)
  )}.text-area,.footer{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--1));background-color:var(--calcite-text-area-background-color, var(--calcite-color-foreground-1));padding-block:var(--calcite-spacing-sm);padding-inline:var(--calcite-spacing-md)}.text-area{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;font-family:var(--calcite-font-family);--calcite-internal-text-area-border-block-end-color:var(--calcite-internal-text-area-border-color);border:var(--calcite-border-width-sm) solid var(--calcite-internal-text-area-border-color);border-block-end-color:var(--calcite-internal-text-area-border-block-end-color);color:var(--calcite-text-area-text-color, var(--calcite-color-text-1));font-family:var(--calcite-sans-family);max-block-size:var(--calcite-text-area-max-height);min-block-size:var(--calcite-text-area-min-height);max-inline-size:var(--calcite-text-area-max-width);min-inline-size:var(--calcite-text-area-min-width, 12rem)}.text-area::placeholder{font-weight:var(--calcite-font-weight-normal)}@media screen and (max-width: 480px){.text-area{resize:none}}.text-area:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.text-area.text-area--invalid{--calcite-internal-text-area-border-color:var(--calcite-color-status-danger)}.text-area.text-area--invalid:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.text-area.footer--slotted{min-inline-size:18rem}.text-area:not(.text-area--only,.text-area--invalid){--calcite-internal-text-area-border-block-end-color:var(
    --calcite-text-area-divider-color,
    var(--calcite-color-border-3)
  )}.footer{box-sizing:border-box;display:flex;align-items:center;border:var(--calcite-border-width-sm) solid var(--calcite-internal-text-area-footer-border-color);border-block-start:var(--calcite-border-width-none);min-block-size:2.25rem}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--1));font-weight:var(--calcite-font-weight-regular);color:var(--calcite-text-area-character-limit-text-color, var(--calcite-color-text-2));padding-inline-start:var(--calcite-spacing-md)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-status-danger)}.readonly{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.text-area.text-area--only{block-size:100%}:host([resize=none]) .text-area{resize:none}:host([resize=horizontal]) .text-area{resize:horizontal}:host([resize=vertical]) .text-area{resize:vertical}:host([scale=s]) .text-area,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--2))}:host([scale=s]) .footer{min-block-size:1.75rem}:host([scale=s]) .text-area{padding-block:0.25rem;padding-inline:0.5rem}:host([scale=m]) .text-area{padding-block:0.5rem;padding-inline:0.75rem}:host([scale=m]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale=l]) .text-area,:host([scale=l]) .footer{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size-0));padding-block:var(--calcite-spacing-md);padding-inline:var(--calcite-spacing-xl)}:host([scale=l]) .footer{min-block-size:2.75rem}:host([scale=l]) .text-area,:host([scale=l]) .footer,:host([scale=l]) .character-limit{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size-0));padding-inline-start:var(--calcite-spacing-xl)}:host([status=invalid]){--calcite-internal-text-area-border-color:var(--calcite-color-status-danger)}:host([status=invalid]) .text-area:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([disabled]) .text-area,:host([disabled]) .footer{opacity:var(--calcite-opacity-half)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,P=G,_=class{constructor(e){u(this,e),this.calciteTextAreaInput=d(this,"calciteTextAreaInput",7),this.calciteTextAreaChange=d(this,"calciteTextAreaChange",7),this.guid=V(),this.handleInput=t=>{this.value=t.target.value,this.calciteTextAreaInput.emit()},this.handleChange=()=>{this.calciteTextAreaChange.emit()},this.contentSlotChangeHandler=()=>{this.value||this.el.childNodes.forEach(s=>{s.nodeName==="#text"&&(this.value=s.nodeValue.trim())})},this.renderCharacterLimit=()=>this.maxLength?(this.localizedCharacterLengthObj=this.getLocalizedCharacterLength(),a("span",{class:i.characterLimit},a("span",{class:{[i.characterOverLimit]:this.isCharacterLimitExceeded()}},this.localizedCharacterLengthObj.currentLength),"/",this.localizedCharacterLengthObj.maxLength)):null,this.resizeObserver=H("resize",async()=>{await f(this);const{textAreaHeight:t,textAreaWidth:s,elHeight:r,elWidth:n,footerHeight:o,footerWidth:c}=this.getHeightAndWidthOfElements();c>0&&c!==s&&(this.footerEl.style.width=`${s}px`),(n!==s||r!==t+(o||0))&&this.setHeightAndWidthToAuto()}),this.setTextAreaEl=t=>{this.textAreaEl=t,this.resizeObserver.observe(t)},this.setHeightAndWidthToAuto=B(()=>{(this.resize==="vertical"||this.resize==="both")&&(this.el.style.height="auto"),(this.resize==="horizontal"||this.resize==="both")&&(this.el.style.width="auto")},q,{leading:!1}),this.columns=void 0,this.disabled=!1,this.form=void 0,this.groupSeparator=!1,this.label=void 0,this.minLength=void 0,this.maxLength=void 0,this.messages=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.numberingSystem=void 0,this.placeholder=void 0,this.readOnly=!1,this.required=!1,this.resize="both",this.rows=void 0,this.scale="m",this.status="idle",this.value="",this.wrap="soft",this.messageOverrides=void 0,this.defaultMessages=void 0,this.endSlotHasElements=void 0,this.startSlotHasElements=void 0,this.effectiveLocale=""}handleGlobalAttributesChanged(){x(this)}onMessagesChange(){}connectedCallback(){L(this),v(this),A(this),M(this)}async componentWillLoad(){S(this),await T(this)}componentDidLoad(){O(this)}componentDidRender(){j(this),this.setTextAreaHeight()}disconnectedCallback(){var e;C(this),y(this),E(this),W(this),(e=this.resizeObserver)==null||e.disconnect()}render(){const e=this.startSlotHasElements||this.endSlotHasElements||!!this.maxLength;return a(b,{key:"87f925e13e3a1bef5b85af59a4e61433c3262929"},a(D,{key:"3431b47034859c62b0d0116b5ff47189cd46ea0b",disabled:this.disabled},a("textarea",{key:"78e60318dc05f03f0ec0f0738384b33a7e4ed546","aria-describedby":this.guid,"aria-errormessage":m.validationMessage,"aria-invalid":w(this.status==="invalid"||this.isCharacterLimitExceeded()),"aria-label":k(this),autofocus:this.el.autofocus,class:{[i.textArea]:!0,[i.readOnly]:this.readOnly,[i.textAreaInvalid]:this.isCharacterLimitExceeded(),[i.footerSlotted]:this.endSlotHasElements&&this.startSlotHasElements,[i.textAreaOnly]:!e},cols:this.columns,disabled:this.disabled,name:this.name,onChange:this.handleChange,onInput:this.handleInput,placeholder:this.placeholder,readOnly:this.readOnly,ref:this.setTextAreaEl,required:this.required,rows:this.rows,value:this.value,wrap:this.wrap}),a("span",{key:"54d603509f65611918b788280124499ecf2161cf",class:{[i.content]:!0}},a("slot",{key:"e1ffe00ed1eeb26899f372ea9d011da20bcddfeb",onSlotchange:this.contentSlotChangeHandler})),a("footer",{key:"bb52300f3ba3568e0e325c7e620cb6f5c53cba37",class:{[i.footer]:!0,[i.readOnly]:this.readOnly,[i.hide]:!e},ref:t=>this.footerEl=t},a("div",{key:"a5c5c250493dab203789dd27ce187c817006c5be",class:{[i.container]:!0,[i.footerEndSlotOnly]:!this.startSlotHasElements&&this.endSlotHasElements}},a("slot",{key:"a54c7b6ca529475fa59cf1849213cd0ec7bf8f9c",name:g.footerStart,onSlotchange:t=>this.startSlotHasElements=h(t)}),a("slot",{key:"e14af1362fd85e7461c42dd10dfd188d10f59ab0",name:g.footerEnd,onSlotchange:t=>this.endSlotHasElements=h(t)})),this.renderCharacterLimit()),a(z,{key:"b64b6dc288df7eadcf3eef9e17aa931732f4ad09",component:this}),this.isCharacterLimitExceeded()&&a("span",{key:"fb2017a6f21f4590934d9a1118e5dc5ee29e1dd5","aria-live":"polite",class:i.assistiveText,id:this.guid},this.replacePlaceHoldersInMessages()),this.validationMessage&&this.status==="invalid"?a(R,{icon:this.validationIcon,id:m.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}async setFocus(){await I(this),this.textAreaEl.focus()}async selectText(){await f(this),this.textAreaEl.select()}effectiveLocaleChange(){F(this,this.effectiveLocale)}onLabelClick(){this.setFocus()}getLocalizedCharacterLength(){const e=this.value?this.value.length.toString():"0",t=this.maxLength.toString();return this.numberingSystem==="latn"?{currentLength:e,maxLength:t}:(l.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"never",useGrouping:this.groupSeparator},{currentLength:l.localize(e),maxLength:l.localize(t)})}syncHiddenFormInput(e){e.setCustomValidity(""),this.isCharacterLimitExceeded()&&e.setCustomValidity(this.replacePlaceHoldersInMessages()),U("textarea",this,e)}setTextAreaHeight(){const{textAreaHeight:e,elHeight:t,footerHeight:s}=this.getHeightAndWidthOfElements();s>0&&e+s!=t&&(this.textAreaEl.style.height=`${t-s}px`)}getHeightAndWidthOfElements(){const{height:e,width:t}=this.textAreaEl.getBoundingClientRect(),{height:s,width:r}=this.el.getBoundingClientRect(),{height:n,width:o}=this.footerEl.getBoundingClientRect();return{textAreaHeight:e,textAreaWidth:t,elHeight:s,elWidth:r,footerHeight:n,footerWidth:o}}replacePlaceHoldersInMessages(){return this.messages.tooLong.replace("{maxLength}",this.localizedCharacterLengthObj.maxLength).replace("{currentLength}",this.localizedCharacterLengthObj.currentLength)}isCharacterLimitExceeded(){var e;return((e=this.value)==null?void 0:e.length)>this.maxLength}static get assetsDirs(){return["assets"]}get el(){return p(this)}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};_.style=P;export{_ as calcite_text_area};
//# sourceMappingURL=calcite-text-area.entry-D6S3w0J4.js.map
