import{r as N,c as y,f as C,h as n,C as D,H as S,g as O}from"./index-U3f91iFJ.js";import{i as B,c as k,d as L,g as A,t as I}from"./dom-b6dedd88-DVv4NIlW.js";import{s as T,c as F,i as w,d as P,H as M}from"./form-8ec29459-BIksQXs0.js";import{u as U,I as K}from"./interactive-1a42577a-UW5nSXx7.js";import{n as j}from"./key-3ee05994-D63ExP77.js";import{c as W,d as R,g as z}from"./label-043ae25a-DEIon9zh.js";import{s as q,a as $,c as G}from"./loadable-13e9ffb2-DDS8ZEua.js";import{n as u,i as m,p as _,s as Y,a as Z,c as J,d as Q,B as X}from"./locale-60f8ca58-JSRNgc9i.js";import{c as ee}from"./observers-9c166451-CPOshbR9.js";import{u as te,c as ie,d as ne,s as ae}from"./t9n-75defee3-DHFcr_dh.js";import{g}from"./component-5f0a8be8-6CIDVndn.js";import{V as se}from"./Validation-c59cb4eb-DKYFvlew.js";import{s as oe}from"./input-871f5b21-j1u1wOBY.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper",numberButtonItem:"number-button-item"},x={validationMessage:"inputValidationMessage"},V={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"},re={action:"action"},le=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,ce=le,ue=class{constructor(t){N(this,t),this.calciteInternalInputFocus=y(this,"calciteInternalInputFocus",6),this.calciteInternalInputBlur=y(this,"calciteInternalInputBlur",6),this.calciteInputInput=y(this,"calciteInputInput",7),this.calciteInputChange=y(this,"calciteInputChange",6),this.childElType="input",this.previousValueOrigin="initial",this.mutationObserver=ee("mutation",()=>this.setDisabledAction()),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||e.defaultPrevented||(this.isClearable&&e.key==="Escape"&&(this.clearInputValue(e),e.preventDefault()),e.key==="Enter"&&T(this)&&e.preventDefault())},this.clearInputValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue&&(this.calciteInputChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputBlurHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId),this.calciteInternalInputBlur.emit(),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const i=e.composedPath();!i.includes(this.inputWrapperEl)||i.includes(this.actionWrapperEl)||this.setFocus()},this.inputFocusHandler=()=>{this.calciteInternalInputFocus.emit()},this.inputChangeHandler=()=>{this.type==="file"&&(this.files=this.childEl.files)},this.inputInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputKeyDownHandler=e=>{this.disabled||this.readOnly||e.key==="Enter"&&this.emitChangeIfUserModified()},this.inputNumberInputHandler=e=>{if(this.disabled||this.readOnly||this.value==="Infinity"||this.value==="-Infinity")return;const i=e.target.value;u.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const a=u.delocalize(i);e.inputType==="insertFromPaste"?(m(a)||e.preventDefault(),this.setValue({nativeEvent:e,origin:"user",value:_(a)}),this.childNumberEl.value=this.displayedValue):this.setValue({nativeEvent:e,origin:"user",value:a})},this.inputNumberKeyDownHandler=e=>{if(this.type!=="number"||this.disabled||this.readOnly)return;if(this.value==="Infinity"||this.value==="-Infinity"){e.preventDefault(),(e.key==="Backspace"||e.key==="Delete")&&this.clearInputValue(e);return}if(e.key==="ArrowUp"){e.preventDefault(),this.nudgeNumberValue("up",e);return}if(e.key==="ArrowDown"){this.nudgeNumberValue("down",e);return}const i=[...j,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(e.altKey||e.ctrlKey||e.metaKey)return;const a=e.shiftKey&&e.key==="Tab";if(i.includes(e.key)||a){e.key==="Enter"&&this.emitChangeIfUserModified();return}u.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},!(e.key===u.decimal&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.indexOf(u.decimal)===-1))&&(/[eE]/.test(e.key)&&(!this.value&&!this.childNumberEl.value||this.value&&!/[eE]/.test(this.childNumberEl.value))||e.key==="-"&&(!this.value&&!this.childNumberEl.value||this.value&&this.childNumberEl.value.split("-").length<=2)||e.preventDefault())},this.nudgeNumberValue=(e,i)=>{if(i instanceof KeyboardEvent&&i.repeat||this.type!=="number")return;const a=this.maxString?parseFloat(this.maxString):null,r=this.minString?parseFloat(this.minString):null,s=150;this.incrementOrDecrementNumberValue(e,a,r,i),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let l=!0;this.nudgeNumberValueIntervalId=window.setInterval(()=>{if(l){l=!1;return}this.incrementOrDecrementNumberValue(e,a,r,i)},s)},this.numberButtonPointerUpAndOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.numberButtonPointerDownHandler=e=>{if(!B(e))return;e.preventDefault();const i=e.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(i,e)},this.onHiddenFormInputInput=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),this.setFocus(),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setChildNumberElRef=e=>{this.childNumberEl=e},this.setInputValue=e=>{this.type==="text"&&!this.childEl||this.type==="number"&&!this.childNumberEl||(this[`child${this.type==="number"?"Number":""}El`].value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=this.normalizeValue(e)},this.setPreviousValue=e=>{this.previousValue=this.normalizeValue(e)},this.setValue=({committing:e=!1,nativeEvent:i,origin:a,previousValue:r,value:s})=>{var l,f;if(this.setPreviousValue(r??this.value),this.previousValueOrigin=a,this.type==="number"){u.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator,signDisplay:"never"};const d=((l=this.previousValue)==null?void 0:l.length)>s.length||((f=this.value)==null?void 0:f.length)>s.length,h=s.charAt(s.length-1)===".",p=h&&d?s:Y(s),c=s&&!p?m(this.previousValue)?this.previousValue:"":p;let b=u.localize(c);a!=="connected"&&!h&&(b=Z(b,c,u)),this.displayedValue=h&&d?`${b}${u.decimal}`:b,this.userChangedValue=a==="user"&&this.value!==c,this.value=["-","."].includes(c)?"":c}else this.userChangedValue=a==="user"&&this.value!==s,this.value=s;a==="direct"&&(this.setInputValue(s),this.previousEmittedValue=s),i&&(this.calciteInputInput.emit().defaultPrevented?(this.value=this.previousValue,this.displayedValue=this.type==="number"?u.localize(this.previousValue):this.previousValue):e&&this.emitChangeIfUserModified())},this.inputKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.alignment="start",this.autofocus=void 0,this.clearable=!1,this.disabled=!1,this.enterKeyHint=void 0,this.form=void 0,this.groupSeparator=!1,this.icon=void 0,this.iconFlipRtl=!1,this.inputMode=void 0,this.label=void 0,this.loading=!1,this.numberingSystem=void 0,this.localeFormat=!1,this.max=void 0,this.min=void 0,this.maxLength=void 0,this.minLength=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.numberButtonType="vertical",this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.step=void 0,this.autocomplete=void 0,this.pattern=void 0,this.accept=void 0,this.multiple=!1,this.suffixText=void 0,this.editingEnabled=!1,this.type="text",this.value="",this.files=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.displayedValue=void 0,this.slottedActionElDisabledInternally=!1}handleGlobalAttributesChanged(){C(this)}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var t;this.maxString=((t=this.max)==null?void 0:t.toString())||null}minWatcher(){var t;this.minString=((t=this.min)==null?void 0:t.toString())||null}onMessagesChange(){}valueWatcher(t,e){if(!this.userChangedValue){if(this.type==="number"&&(t==="Infinity"||t==="-Infinity")){this.displayedValue=t,this.previousEmittedValue=t;return}this.setValue({origin:"direct",previousValue:e,value:t==null||t==""?"":this.type==="number"?m(t)?t:this.previousValue||"":t}),this.warnAboutInvalidNumberValue(t)}this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=k(V,this.icon,this.type)}get isClearable(){var t;return!this.isTextarea&&(this.clearable||this.type==="search")&&((t=this.value)==null?void 0:t.length)>0}get isTextarea(){return this.childElType==="textarea"}effectiveLocaleChange(){te(this,this.effectiveLocale)}connectedCallback(){var t;J(this),ie(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),W(this),F(this),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener(w,this.onHiddenFormInputInput)}disconnectedCallback(){var t;R(this),P(this),Q(this),ne(this),(t=this.mutationObserver)==null||t.disconnect(),this.el.removeEventListener(w,this.onHiddenFormInputInput)}async componentWillLoad(){var t,e;q(this),this.childElType=this.type==="textarea"?"textarea":"input",this.maxString=(t=this.max)==null?void 0:t.toString(),this.minString=(e=this.min)==null?void 0:e.toString(),this.requestedIcon=k(V,this.icon,this.type),await ae(this),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value),this.type==="number"&&(this.value==="Infinity"||this.value==="-Infinity"?(this.displayedValue=this.value,this.previousEmittedValue=this.value):(this.warnAboutInvalidNumberValue(this.value),this.setValue({origin:"connected",value:m(this.value)?this.value:""})))}componentDidLoad(){$(this)}componentShouldUpdate(t,e,i){return this.type==="number"&&i==="value"&&t&&!m(t)?(this.setValue({origin:"reset",value:e}),!1):!0}componentDidRender(){U(this)}async setFocus(){var t,e;await G(this),this.type==="number"?(t=this.childNumberEl)==null||t.focus():(e=this.childEl)==null||e.focus()}async selectText(){var t,e;this.type==="number"?(t=this.childNumberEl)==null||t.select():(e=this.childEl)==null||e.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(t,e,i,a){const{value:r}=this;if(r==="Infinity"||r==="-Infinity")return;const s=t==="up"?1:-1,l=this.step==="any"?1:Math.abs(this.step||1),d=new X(r!==""?r:"0").add(`${l*s}`),h=()=>typeof i=="number"&&!isNaN(i)&&d.subtract(`${i}`).isNegative,p=()=>typeof e=="number"&&!isNaN(e)&&!d.subtract(`${e}`).isNegative,c=h()?`${i}`:p()?`${e}`:d.toString();this.setValue({committing:!0,nativeEvent:a,origin:"user",value:c})}syncHiddenFormInput(t){oe(this.type,this,t)}setDisabledAction(){const t=L(this.el,"action");t&&(this.disabled?(t.getAttribute("disabled")==null&&(this.slottedActionElDisabledInternally=!0),t.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(t.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}normalizeValue(t){return this.type==="number"?m(t)?t:"":t}warnAboutInvalidNumberValue(t){this.type==="number"&&t&&!m(t)&&console.warn(`The specified value "${t}" cannot be parsed, or is out of range.`)}render(){const t=A(this.el),e=n("div",{key:"ed9acea9dbc18f4cfc5e7095c1e2de0b1adfdf35",class:o.loader},n("calcite-progress",{key:"58321a27c25dd848a648d2e3d5ca6dfc3f5fd649",label:this.messages.loading,type:"indeterminate"})),i=n("button",{key:"348d8dee0c032afe986b1e253c9d667256f3d9f0","aria-label":this.messages.clear,class:o.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},n("calcite-icon",{key:"334b68a283b767c0e9bea09ccfd83d09c8c17711",icon:"x",scale:g(this.scale)})),a=n("calcite-icon",{key:"4ab83aa9268277a38449ebe4a6e3db4dc9badcae",class:o.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:g(this.scale)}),r=this.numberButtonType==="horizontal",s=n("button",{key:"2dd700034d38581aaea39c019e626ffa1a2c1c16","aria-hidden":"true",class:{[o.numberButtonItem]:!0,[o.buttonItemHorizontal]:r},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},n("calcite-icon",{key:"6ca9a7c93aa14520292ad8c800c4e099bd46f30d",icon:"chevron-up",scale:g(this.scale)})),l=n("button",{key:"cdbd88ddd308bd82b6d239a83f365a2c5e226cfc","aria-hidden":"true",class:{[o.numberButtonItem]:!0,[o.buttonItemHorizontal]:r},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},n("calcite-icon",{key:"f1b9cf329da9add564d690c517ddcc414c4fbfa3",icon:"chevron-down",scale:g(this.scale)})),f=n("div",{key:"247efdce33568f219b1bf3bf252b8b19a74d03ea",class:o.numberButtonWrapper},s,l),d=n("div",{key:"01819a850399fb20a29471861e011695bf80af97",class:o.prefix},this.prefixText),h=n("div",{key:"dcc073305f3824a0eb72ef230bd217dabdb72104",class:o.suffix},this.suffixText),p=this.el.autofocus||this.el.hasAttribute("autofocus")?!0:null,c=this.el.enterKeyHint||this.el.getAttribute("enterkeyhint"),b=this.el.inputMode||this.el.getAttribute("inputmode"),E=this.type==="number"?n("input",{accept:this.accept,"aria-errormessage":x.validationMessage,"aria-invalid":I(this.status==="invalid"),"aria-label":z(this),autocomplete:this.autocomplete,autofocus:p,defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:c,inputMode:b,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,multiple:this.multiple,name:void 0,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,type:"text",value:this.displayedValue}):null,H=this.type!=="number"?[n(this.childElType,{accept:this.accept,"aria-errormessage":x.validationMessage,"aria-invalid":I(this.status==="invalid"),"aria-label":z(this),autocomplete:this.autocomplete,autofocus:p,class:{[o.editingEnabled]:this.editingEnabled,[o.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?!0:null,enterKeyHint:c,inputMode:b,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,multiple:this.multiple,name:this.name,onBlur:this.inputBlurHandler,onChange:this.inputChangeHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:this.required?!0:null,step:this.step,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:this.type,value:this.value}),this.isTextarea?n("div",{class:o.resizeIconWrapper},n("calcite-icon",{icon:"chevron-down",scale:g(this.scale)})):null]:null;return n(S,{key:"23d6092960315f172a56105b9af75ddc6497874c",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},n(K,{key:"1bb063f39c14a829a376465fa8c2bbc288046ac7",disabled:this.disabled},n("div",{key:"7f3644f002b7cb75d93d9c0218508b502ddcfd0b",class:{[o.inputWrapper]:!0,[D.rtl]:t==="rtl"},ref:v=>this.inputWrapperEl=v},this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?l:null,this.prefixText?d:null,n("div",{key:"0d01898e4949a60e0853c1a72669f5c9d6c91ba5",class:o.wrapper},E,H,this.isClearable?i:null,this.requestedIcon?a:null,this.loading?e:null),n("div",{key:"42e7adec440e417128feb9845c36d0444e6c1ae4",class:o.actionWrapper,ref:v=>this.actionWrapperEl=v},n("slot",{key:"f391b035ad9fc108d1f99c4cedf539425c20a36d",name:re.action})),this.type==="number"&&this.numberButtonType==="vertical"&&!this.readOnly?f:null,this.suffixText?h:null,this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?s:null,n(M,{key:"df415df551b4a9a16565c8f554454d01aa89327e",component:this})),this.validationMessage&&this.status==="invalid"?n(se,{icon:this.validationIcon,id:x.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return O(this)}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};ue.style=ce;export{ue as calcite_input};
//# sourceMappingURL=calcite-input.entry-Dt-X80Vs.js.map
