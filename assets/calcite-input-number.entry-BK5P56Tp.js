import{r as z,c as g,f as N,h as n,C as V,H as E,g as H}from"./index-Du44_A8J.js";import{i as x,c as k,d as S,g as D,t as B}from"./dom-b6dedd88-CVzP8t2l.js";import{s as C,c as O,i as I,d as L,H as F}from"./form-8ec29459-C0tKB1vE.js";import{u as P,I as A}from"./interactive-1a42577a-B0IHmTIQ.js";import{n as M}from"./key-3ee05994-D63ExP77.js";import{c as T,d as j,g as W}from"./label-043ae25a-C-hl96Wn.js";import{a as U,s as K,c as R}from"./loadable-13e9ffb2-6uD-5dy5.js";import{n as u,i as m,p as q,s as G,a as $,c as _,d as Y,B as Z}from"./locale-60f8ca58-a8IYr5Tn.js";import{c as J}from"./observers-9c166451-BZVTGCzt.js";import{u as Q,c as X,d as ee,s as te}from"./t9n-75defee3-BLs-BxOl.js";import{g as v}from"./component-5f0a8be8-6CIDVndn.js";import{V as ie}from"./Validation-c59cb4eb-CI3wLoh1.js";import{s as ne}from"./input-871f5b21-j1u1wOBY.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper",numberButtonItem:"number-button-item"},w={validationMessage:"inputNumberValidationMessage"},ae={action:"action"},oe=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,re=oe,se=class{constructor(t){z(this,t),this.calciteInternalInputNumberFocus=g(this,"calciteInternalInputNumberFocus",6),this.calciteInternalInputNumberBlur=g(this,"calciteInternalInputNumberBlur",6),this.calciteInputNumberInput=g(this,"calciteInputNumberInput",7),this.calciteInputNumberChange=g(this,"calciteInputNumberChange",6),this.previousValueOrigin="initial",this.mutationObserver=J("mutation",()=>this.setDisabledAction()),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||e.defaultPrevented||(this.isClearable&&e.key==="Escape"&&(this.clearInputValue(e),e.preventDefault()),e.key==="Enter"&&C(this)&&e.preventDefault())},this.clearInputValue=e=>{this.setNumberValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{this.previousValueOrigin==="user"&&this.value!==this.previousEmittedNumberValue&&(this.calciteInputNumberChange.emit(),this.setPreviousEmittedNumberValue(this.value))},this.inputNumberBlurHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId),this.calciteInternalInputNumberBlur.emit(),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const i=e.composedPath();!i.includes(this.inputWrapperEl)||i.includes(this.actionWrapperEl)||this.setFocus()},this.inputNumberFocusHandler=()=>{this.calciteInternalInputNumberFocus.emit()},this.inputNumberInputHandler=e=>{if(this.disabled||this.readOnly||this.value==="Infinity"||this.value==="-Infinity")return;const i=e.target.value;u.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const a=u.delocalize(i);e.inputType==="insertFromPaste"?((!m(a)||this.integer&&(a.includes("e")||a.includes(".")))&&e.preventDefault(),this.setNumberValue({nativeEvent:e,origin:"user",value:q(a)}),this.childNumberEl.value=this.displayedValue):this.setNumberValue({nativeEvent:e,origin:"user",value:a})},this.inputNumberKeyDownHandler=e=>{if(this.disabled||this.readOnly)return;if(this.value==="Infinity"||this.value==="-Infinity"){e.preventDefault(),(e.key==="Backspace"||e.key==="Delete")&&this.clearInputValue(e);return}if(e.key==="ArrowUp"){e.preventDefault(),this.nudgeNumberValue("up",e);return}if(e.key==="ArrowDown"){this.nudgeNumberValue("down",e);return}const i=[...M,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(e.altKey||e.ctrlKey||e.metaKey)return;const a=e.shiftKey&&e.key==="Tab";if(i.includes(e.key)||a){e.key==="Enter"&&this.emitChangeIfUserModified();return}u.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},!(e.key===u.decimal&&!this.integer&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.indexOf(u.decimal)===-1))&&(/[eE]/.test(e.key)&&!this.integer&&(!this.value&&!this.childNumberEl.value||this.value&&!/[eE]/.test(this.childNumberEl.value))||e.key==="-"&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.split("-").length<=2)||e.preventDefault())},this.nudgeNumberValue=(e,i)=>{if(i instanceof KeyboardEvent&&i.repeat)return;const a=this.maxString?parseFloat(this.maxString):null,r=this.minString?parseFloat(this.minString):null,s=150;this.incrementOrDecrementNumberValue(e,a,r,i),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let c=!0;this.nudgeNumberValueIntervalId=window.setInterval(()=>{if(c){c=!1;return}this.incrementOrDecrementNumberValue(e,a,r,i)},s)},this.nudgeButtonPointerUpHandler=e=>{x(e)&&window.clearInterval(this.nudgeNumberValueIntervalId)},this.nudgeButtonPointerOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.nudgeButtonPointerDownHandler=e=>{if(!x(e))return;e.preventDefault();const i=e.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(i,e)},this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setNumberValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.setChildNumberElRef=e=>{this.childNumberEl=e},this.setInputNumberValue=e=>{this.childNumberEl&&(this.childNumberEl.value=e)},this.setPreviousEmittedNumberValue=e=>{this.previousEmittedNumberValue=this.normalizeValue(e)},this.setPreviousNumberValue=e=>{this.previousValue=this.normalizeValue(e)},this.setNumberValue=({committing:e=!1,nativeEvent:i,origin:a,previousValue:r,value:s})=>{var f,y;u.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const c=((f=this.previousValue)==null?void 0:f.length)>s.length||((y=this.value)==null?void 0:y.length)>s.length,h=this.integer?s.replace(/[e.]/g,""):s,p=h.charAt(h.length-1)===".",b=p&&c?h:G(h),d=s&&!b?m(this.previousValue)?this.previousValue:"":b;let l=u.localize(d);a!=="connected"&&!p&&(l=$(l,d,u)),this.displayedValue=p&&c?`${l}${u.decimal}`:l,this.setPreviousNumberValue(r??this.value),this.previousValueOrigin=a,this.userChangedValue=a==="user"&&this.value!==d,this.value=["-","."].includes(d)?"":d,a==="direct"&&(this.setInputNumberValue(l),this.setPreviousEmittedNumberValue(l)),i&&(this.calciteInputNumberInput.emit().defaultPrevented?(this.value=this.previousValue,this.displayedValue=u.localize(this.previousValue)):e&&this.emitChangeIfUserModified())},this.inputNumberKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.alignment="start",this.autofocus=void 0,this.clearable=!1,this.disabled=!1,this.enterKeyHint=void 0,this.form=void 0,this.groupSeparator=!1,this.icon=void 0,this.iconFlipRtl=!1,this.inputMode=void 0,this.integer=!1,this.label=void 0,this.loading=!1,this.numberingSystem=void 0,this.localeFormat=!1,this.max=void 0,this.min=void 0,this.maxLength=void 0,this.minLength=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.numberButtonType="vertical",this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.step=void 0,this.autocomplete=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.displayedValue=void 0,this.slottedActionElDisabledInternally=!1}handleGlobalAttributesChanged(){N(this)}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var t;this.maxString=((t=this.max)==null?void 0:t.toString())||null}minWatcher(){var t;this.minString=((t=this.min)==null?void 0:t.toString())||null}onMessagesChange(){}valueWatcher(t,e){if(!this.userChangedValue){if(t==="Infinity"||t==="-Infinity"){this.displayedValue=t,this.previousEmittedNumberValue=t;return}this.setNumberValue({origin:"direct",previousValue:e,value:t==null||t==""?"":m(t)?t:this.previousValue||""}),this.warnAboutInvalidNumberValue(t)}this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=k({},this.icon,"number")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleWatcher(t){Q(this,this.effectiveLocale),u.numberFormatOptions={locale:t,numberingSystem:this.numberingSystem,useGrouping:!1}}connectedCallback(){var t;_(this),X(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),T(this),O(this),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener(I,this.onHiddenFormInputInput)}componentDidLoad(){U(this)}disconnectedCallback(){var t;j(this),L(this),Y(this),ee(this),(t=this.mutationObserver)==null||t.disconnect(),this.el.removeEventListener(I,this.onHiddenFormInputInput)}async componentWillLoad(){var t,e;K(this),this.maxString=(t=this.max)==null?void 0:t.toString(),this.minString=(e=this.min)==null?void 0:e.toString(),this.requestedIcon=k({},this.icon,"number"),await te(this),this.setPreviousEmittedNumberValue(this.value),this.setPreviousNumberValue(this.value),this.warnAboutInvalidNumberValue(this.value),this.value==="Infinity"||this.value==="-Infinity"?(this.displayedValue=this.value,this.previousEmittedNumberValue=this.value):this.setNumberValue({origin:"connected",value:m(this.value)?this.value:""})}componentShouldUpdate(t,e,i){return i==="value"&&t&&!m(t)?(this.setNumberValue({origin:"reset",value:e}),!1):!0}componentDidRender(){P(this)}async setFocus(){var t;await R(this),(t=this.childNumberEl)==null||t.focus()}async selectText(){var t;(t=this.childNumberEl)==null||t.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(t,e,i,a){const{value:r}=this;if(r==="Infinity"||r==="-Infinity")return;const s=t==="up"?1:-1,c=this.integer&&this.step!=="any"?Math.round(this.step):this.step,h=c==="any"?1:Math.abs(c||1),b=new Z(r!==""?r:"0").add(`${h*s}`),d=()=>typeof i=="number"&&!isNaN(i)&&b.subtract(`${i}`).isNegative,l=()=>typeof e=="number"&&!isNaN(e)&&!b.subtract(`${e}`).isNegative,f=d()?`${i}`:l()?`${e}`:b.toString();this.setNumberValue({committing:!0,nativeEvent:a,origin:"user",value:f})}syncHiddenFormInput(t){ne("number",this,t)}setDisabledAction(){const t=S(this.el,"action");t&&(this.disabled?(t.getAttribute("disabled")==null&&(this.slottedActionElDisabledInternally=!0),t.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(t.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}normalizeValue(t){return m(t)?t:""}warnAboutInvalidNumberValue(t){t&&!m(t)&&console.warn(`The specified value "${t}" cannot be parsed, or is out of range.`)}render(){const t=D(this.el),e=n("div",{key:"cc2f276e80dee457d8a8f38e06d18967647e4591",class:o.loader},n("calcite-progress",{key:"2764fc118ec3063a7e76e0738050fa7b3872018a",label:this.messages.loading,type:"indeterminate"})),i=n("button",{key:"6bb6db58c8c20594f88c60f2d717ad9b4dfb9fe0","aria-label":this.messages.clear,class:o.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},n("calcite-icon",{key:"1746fe8d0a79b4516beb7574ba6b74b6a5070d81",icon:"x",scale:v(this.scale)})),a=n("calcite-icon",{key:"4d57c3fedac7bedd8f9397c4b276866ee5b7237f",class:o.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:v(this.scale)}),r=this.numberButtonType==="horizontal",s=n("button",{key:"c0e52d338c61d3d6f6349975751f6af707325db3","aria-hidden":"true",class:{[o.numberButtonItem]:!0,[o.buttonItemHorizontal]:r},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerOutHandler,onPointerUp:this.nudgeButtonPointerUpHandler,tabIndex:-1,type:"button"},n("calcite-icon",{key:"28697a2ed4b3581c5d190c86ef3d7ab1d70823f8",icon:"chevron-up",scale:v(this.scale)})),c=n("button",{key:"11f9db5af2916069d412089875d53fdea0b453c0","aria-hidden":"true",class:{[o.numberButtonItem]:!0,[o.buttonItemHorizontal]:r},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerOutHandler,onPointerUp:this.nudgeButtonPointerUpHandler,tabIndex:-1,type:"button"},n("calcite-icon",{key:"1614213fecd0d957cda096df5ddf220bacc49dca",icon:"chevron-down",scale:v(this.scale)})),h=n("div",{key:"e8822b7270ea89e13ebf3703b6f271be512c6a9b",class:o.numberButtonWrapper},s,c),p=n("div",{key:"333318e5c2f5fbd0d307255c7a0a4eebde29b5c8",class:o.prefix},this.prefixText),b=n("div",{key:"4812a571237e8016e9d173036e663e91ef7df638",class:o.suffix},this.suffixText),d=n("input",{"aria-errormessage":w.validationMessage,"aria-invalid":B(this.status==="invalid"),"aria-label":W(this),autocomplete:this.autocomplete,autofocus:this.el.autofocus?!0:null,defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:this.el.enterKeyHint||this.el.getAttribute("enterkeyhint"),inputMode:this.el.inputMode||this.el.getAttribute("inputmode")||"decimal",key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:void 0,onBlur:this.inputNumberBlurHandler,onFocus:this.inputNumberFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputNumberKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,type:"text",value:this.displayedValue});return n(E,{key:"a765b9d4616c91517c512bf08511e7dd979ba8cc",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},n(A,{key:"b9ea4743c23e8dc2773cfb600b0e345797c3558d",disabled:this.disabled},n("div",{key:"17dfcce5d569e546184d908cc595914d5aefe132",class:{[o.inputWrapper]:!0,[V.rtl]:t==="rtl"},ref:l=>this.inputWrapperEl=l},this.numberButtonType==="horizontal"&&!this.readOnly?c:null,this.prefixText?p:null,n("div",{key:"db2a55ec06a2418761f7a64c06b88680156870c3",class:o.wrapper},d,this.isClearable?i:null,this.requestedIcon?a:null,this.loading?e:null),n("div",{key:"26fa02f076266dd8e4e9441d17b708994bac580d",class:o.actionWrapper,ref:l=>this.actionWrapperEl=l},n("slot",{key:"cf216669a1ef119c5512515f014be59ee6c8121e",name:ae.action})),this.numberButtonType==="vertical"&&!this.readOnly?h:null,this.suffixText?b:null,this.numberButtonType==="horizontal"&&!this.readOnly?s:null,n(F,{key:"efc80f0a385d1d56971473fde6862738cb06b446",component:this})),this.validationMessage&&this.status==="invalid"?n(ie,{icon:this.validationIcon,id:w.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return H(this)}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleWatcher"]}}};se.style=re;export{se as calcite_input_number};
//# sourceMappingURL=calcite-input-number.entry-BK5P56Tp.js.map
