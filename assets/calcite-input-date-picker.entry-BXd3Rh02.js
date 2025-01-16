import{r as z,c as f,h as r,H as T,i as S,g as R}from"./index-BfLS464G.js";import{d as L,a as A,i as M,b as h,g as I,c as d,e as y,f as W,h as O}from"./utils-f1cd2770-bqc4B9Ku.js";import{f as H,t as g}from"./dom-b6dedd88-O1nYpK45.js";import{f as B,c as b,d as N,r as Y,a as $,F as C}from"./floating-ui-382f6e89-CcZ-jZfq.js";import{s as q,c as U,d as _,H as G}from"./form-8ec29459-aQd8Q9uv.js";import{u as j,I as K}from"./interactive-1a42577a-OxwVDwEx.js";import{n as F}from"./key-3ee05994-D63ExP77.js";import{c as J,d as Q}from"./label-043ae25a-DCDcmPxP.js";import{c as X,s as Z,a as ee}from"./loadable-13e9ffb2-CM3Lz6Am.js";import{n as v,c as te,d as ae,g as ie,b as ne}from"./locale-60f8ca58-B2mSqvc8.js";import{o as P}from"./openCloseComponent-4d1d6536-DWDmxEu9.js";import{c as se,s as re,d as oe,u as le}from"./t9n-75defee3-jzBwsnOI.js";import{c as ce,d as D,a as E}from"./focusTrapComponent-7cfd1d69-DdHYI-5a.js";import{g as V}from"./guid-9c230b6a-BxSjQh8J.js";import{g as x}from"./component-5f0a8be8-6CIDVndn.js";import{V as de}from"./Validation-c59cb4eb-CDxeCURq.js";import{s as he}from"./input-871f5b21-j1u1wOBY.js";import"./debounce-6e4946fd-CA9eFM3j.js";import"./observers-9c166451-pUI1lsXs.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function ue(t){if(!t)return!1;const{year:e}=O(t);return Number(e)<100}function pe(t){const e=new Date().getFullYear();return Math.floor(e/100)*100+t}const l={assistiveText:"assistive-text",calendarWrapper:"calendar-wrapper",calendarWrapperEnd:"calendar-wrapper--end",horizontalArrowContainer:"horizontal-arrow-container",inputBorderTopColorOne:"border-top-color-one",inputContainer:"input-container",inputNoBottomBorder:"no-bottom-border",inputWrapper:"input-wrapper",input:"input",menu:"menu-container",menuActive:"menu-container--active",toggleIcon:"toggle-icon",verticalArrowContainer:"vertical-arrow-container",chevronIcon:"chevron-icon"},w={validationMessage:"inputDatePickerValidationMessage"},me=":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;vertical-align:top;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host .menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host .menu-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}:host .menu-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}:host .menu-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}:host .menu-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}:host .menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([scale=s]){--calcite-toggle-spacing:0.5rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1rem)}:host([scale=m]){--calcite-toggle-spacing:0.75rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1.5rem)}:host([scale=l]){--calcite-toggle-spacing:1rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 2rem)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calendar-wrapper{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}.input-wrapper .chevron-icon{color:var(--calcite-color-text-3)}.input-wrapper:focus-within .chevron-icon,.input-wrapper:active .chevron-icon,.input-wrapper:hover .chevron-icon{color:var(--calcite-color-text-1)}.toggle-icon{position:absolute;display:flex;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([range]) .input-container{display:flex}:host([range]) .input-wrapper{flex:1 1 auto}:host([range]) .horizontal-arrow-container{display:flex;align-items:center;border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);padding-block:0px;padding-inline:0.25rem}:host([range][layout=vertical]) .input-wrapper{inline-size:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:flex-start}:host([range][layout=vertical]) .calendar-wrapper--end{transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{inset-block-start:1.5rem;position:absolute;z-index:var(--calcite-z-index);margin-inline:1px;background-color:var(--calcite-color-foreground-1);padding-inline:0.625rem;inset-inline-start:0}.menu-container{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.menu-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.menu-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.menu-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.menu-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([open]) .menu-container{visibility:visible}.menu-container--active{visibility:visible}.input .calcite-input__wrapper{margin-block-start:0px}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{inset-block-start:1.5rem;padding-inline-start:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{block-size:0.75rem;inline-size:0.75rem;min-inline-size:0px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{inset-block-start:2.25rem;padding-inline:0.875rem}:host([range][layout=vertical][open]) .vertical-arrow-container{display:none}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}",fe=me,ge=class{constructor(t){z(this,t),this.calciteInputDatePickerChange=f(this,"calciteInputDatePickerChange",6),this.calciteInputDatePickerBeforeClose=f(this,"calciteInputDatePickerBeforeClose",6),this.calciteInputDatePickerClose=f(this,"calciteInputDatePickerClose",6),this.calciteInputDatePickerBeforeOpen=f(this,"calciteInputDatePickerBeforeOpen",6),this.calciteInputDatePickerOpen=f(this,"calciteInputDatePickerOpen",6),this.calciteInternalInputInputHandler=e=>{const a=e.target,i=a.value,n=this.parseNumerals(i),s=this.formatNumerals(n);a.value=s;const{year:o}=L(i,this.localeData);if(o&&o.length<4)return;const c=A(i,this.localeData);M(c,this.min,this.max)&&(this.datePickerActiveDate=c)},this.calciteInternalInputBlurHandler=()=>{this.commitValue()},this.dialogId=`date-picker-dialog--${V()}`,this.focusOnOpen=!1,this.userChangedValue=!1,this.openTransitionProp="opacity",this.valueAsDateChangedExternally=!1,this.placeholderTextId=`calcite-input-date-picker-placeholder-${V()}`,this.onInputWrapperPointerDown=()=>{this.currentOpenInput=this.focusedInput},this.onInputWrapperClick=e=>{const{range:a,endInput:i,startInput:n,currentOpenInput:s}=this,c=e.currentTarget.getAttribute("data-position");e.composedPath().find(m=>{var k;return(k=m.classList)==null?void 0:k.contains(l.toggleIcon)})&&(c==="start"?n:i).setFocus(),(!a||!this.open||s===c)&&(this.open=!this.open)},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:a}=this;this.filteredFlipPlacements=a?B(a,e):null},this.setTransitionEl=e=>{this.transitionEl=e},this.setStartInput=e=>{this.startInput=e},this.setEndInput=e=>{this.endInput=e},this.blurHandler=()=>{this.open=!1},this.keyDownHandler=e=>{var n,s;const{defaultPrevented:a,key:i}=e;a||(i==="Enter"?(e.preventDefault(),this.commitValue(),this.shouldFocusRangeEnd()?(n=this.endInput)==null||n.setFocus():this.shouldFocusRangeStart()&&((s=this.startInput)==null||s.setFocus()),q(this)&&this.restoreInputFocus()):i==="ArrowDown"?(this.open=!0,this.focusOnOpen=!0,e.preventDefault()):i==="Escape"&&(this.open=!1,e.preventDefault(),this.restoreInputFocus()))},this.startInputFocus=()=>{this.focusedInput="start"},this.endInputFocus=()=>{this.focusedInput="end"},this.setFloatingEl=e=>{this.floatingEl=e,b(this,this.referenceEl,this.floatingEl)},this.setStartWrapper=e=>{this.startWrapper=e,this.setReferenceEl()},this.setEndWrapper=e=>{this.endWrapper=e,this.setReferenceEl()},this.setDatePickerRef=e=>{this.datePickerEl=e,ce(this,{focusTrapEl:e,focusTrapOptions:{initialFocus:!1,setReturnFocus:!1}})},this.handleDateChange=e=>{this.range||(e.stopPropagation(),this.setValue(e.target.valueAsDate),this.localizeInputValues(),this.restoreInputFocus())},this.handleDateRangeChange=e=>{if(!this.range)return;e.stopPropagation();const a=e.target.valueAsDate;this.setRangeValue(a),this.localizeInputValues(),this.restoreInputFocus()},this.setInputValue=(e,a="start")=>{const i=this[`${a}Input`];i&&(i.value=e)},this.setRangeValue=e=>{if(!this.range)return;const{value:a}=this,i=Array.isArray(a),n=Array.isArray(e),s=n?e[0]:null;let o=n?h(s):"";o&&(o=this.getNormalizedDate(o));const c=n?e[1]:null;let u=n?h(c):"";u&&(u=this.getNormalizedDate(u));const p=o||u?[o,u]:"";if(p===a)return;this.userChangedValue=!0,this.value=p,this.valueAsDate=p?I(p):void 0;const m=this.calciteInputDatePickerChange.emit();m&&m.defaultPrevented&&(this.value=a,i?(this.setInputValue(a[0],"start"),this.setInputValue(a[1],"end")):(this.value=a,this.setInputValue(a)))},this.setValue=e=>{if(this.range)return;const a=this.value;let i=h(e);if(i=this.getNormalizedDate(i),i===a)return;this.userChangedValue=!0,this.valueAsDate=i?d(i):void 0,this.value=i||"",this.calciteInputDatePickerChange.emit().defaultPrevented&&(this.value=a,this.setInputValue(a))},this.commonDateSeparators=[".","-","/"],this.formatNumerals=e=>e?e.split("").map(a=>{var i,n,s,o,c;return(i=this.commonDateSeparators)!=null&&i.includes(a)?(n=this.localeData)==null?void 0:n.separator:(s=F)!=null&&s.includes(a)?(c=(o=v)==null?void 0:o.numberFormatter)==null?void 0:c.format(Number(a)):a}).join(""):"",this.parseNumerals=e=>e?e.split("").map(a=>F.includes(a)?v.delocalize(a):a).join(""):"",this.disabled=!1,this.focusTrapDisabled=!1,this.form=void 0,this.readOnly=!1,this.value="",this.flipPlacements=void 0,this.headingLevel=void 0,this.valueAsDate=void 0,this.messageOverrides=void 0,this.messages=void 0,this.minAsDate=void 0,this.maxAsDate=void 0,this.min=void 0,this.max=void 0,this.open=!1,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.numberingSystem=void 0,this.scale="m",this.status="idle",this.placement=N,this.range=!1,this.required=!1,this.overlayPositioning="absolute",this.proximitySelectionDisabled=!1,this.layout="horizontal",this.datePickerActiveDate=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.focusedInput="start",this.localeData=void 0}handleFocusTrapDisabled(t){this.open&&(t?D(this):E(this))}handleDisabledAndReadOnlyChange(t){t||(this.open=!1)}valueWatcher(t){if(!this.userChangedValue){let e;Array.isArray(t)?e=I(t):t?e=d(t):e=void 0,!this.valueAsDateChangedExternally&&e!==this.valueAsDate&&(this.valueAsDate=e),this.localizeInputValues()}this.userChangedValue=!1}valueAsDateWatcher(t){this.datePickerActiveDate=t;const e=this.range&&Array.isArray(t)?[h(t[0]),h(t[1])]:h(t);this.value!==e&&(this.valueAsDateChangedExternally=!0,this.value=e,this.valueAsDateChangedExternally=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}onMinChanged(t){this.minAsDate=d(t)}onMaxChanged(t){this.maxAsDate=d(t)}openHandler(){if(P(this),this.disabled||this.readOnly){this.open=!1;return}this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}calciteDaySelectHandler(){this.shouldFocusRangeStart()||this.shouldFocusRangeEnd()||(this.open=!1)}async setFocus(){await X(this),H(this.el)}async reposition(t=!1){const{floatingEl:e,referenceEl:a,placement:i,overlayPositioning:n,filteredFlipPlacements:s}=this;return Y(this,{floatingEl:e,referenceEl:a,overlayPositioning:n,placement:i,flipPlacements:s,type:"menu"},t)}connectedCallback(){te(this),this.handleDateTimeFormatChange();const{open:t}=this;if(t&&this.openHandler(),this.min&&(this.minAsDate=d(this.min)),this.max&&(this.maxAsDate=d(this.max)),Array.isArray(this.value))this.valueAsDate=I(this.value);else if(this.value)try{const e=d(this.value),a=y(e,this.minAsDate,this.maxAsDate);this.valueAsDate=a}catch{this.warnAboutInvalidValue(this.value),this.value=""}else this.valueAsDate&&(this.range&&Array.isArray(this.valueAsDate)?this.value=[h(this.valueAsDate[0]),h(this.valueAsDate[1])]:!this.range&&!Array.isArray(this.valueAsDate)&&(this.value=h(this.valueAsDate)));J(this),U(this),se(this),this.setFilteredPlacements(),v.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:!1},this.open&&P(this),b(this,this.referenceEl,this.floatingEl)}async componentWillLoad(){Z(this),await Promise.all([this.loadLocaleData(),re(this)]),this.onMinChanged(this.min),this.onMaxChanged(this.max)}componentDidLoad(){ee(this),this.localizeInputValues(),b(this,this.referenceEl,this.floatingEl)}disconnectedCallback(){D(this),Q(this),_(this),$(this,this.referenceEl,this.floatingEl),ae(this),oe(this)}componentDidRender(){j(this)}render(){var s,o,c;const{disabled:t,effectiveLocale:e,messages:a,numberingSystem:i,readOnly:n}=this;return v.numberFormatOptions={numberingSystem:i,locale:e,useGrouping:!1},r(T,{key:"b31ae837415083aa63451c5f32b78253b1d6af1e",onBlur:this.blurHandler,onKeyDown:this.keyDownHandler},r(K,{key:"7315a0e5773a1ef96c00b48b138c8afd50aca28a",disabled:this.disabled},this.localeData&&r("div",{key:"022f86001938e2994ab523b30a2e3cb379a550b4",class:l.inputContainer},r("div",{key:"4a3add7824ea7ec41b75ddd5e9b847afa1ca0708",class:l.inputWrapper,"data-position":"start",onClick:this.onInputWrapperClick,onPointerDown:this.onInputWrapperPointerDown,ref:this.setStartWrapper},r("calcite-input-text",{key:"d415c8d890333f76793fc5f804111c0a72f4d3c8","aria-autocomplete":"none","aria-controls":this.dialogId,"aria-describedby":this.placeholderTextId,"aria-errormessage":w.validationMessage,"aria-expanded":g(this.open),"aria-haspopup":"dialog","aria-invalid":g(this.status==="invalid"),class:{[l.input]:!0,[l.inputNoBottomBorder]:this.layout==="vertical"&&this.range},disabled:t,icon:"calendar",onCalciteInputTextInput:this.calciteInternalInputInputHandler,onCalciteInternalInputTextBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputTextFocus:this.startInputFocus,placeholder:(s=this.localeData)==null?void 0:s.placeholder,readOnly:n,ref:this.setStartInput,role:"combobox",scale:this.scale,status:this.status}),!this.readOnly&&this.renderToggleIcon(this.open&&this.focusedInput==="start"),r("span",{key:"7d5b86f35bde88b757f9a46485ce37bf8317ac88","aria-hidden":"true",class:l.assistiveText,id:this.placeholderTextId},"Date Format: ",(o=this.localeData)==null?void 0:o.placeholder)),r("div",{key:"8d38fc155dcc3851865e699645f64e3278519f02","aria-hidden":g(!this.open),"aria-label":a.chooseDate,"aria-live":"polite","aria-modal":"true",class:{[l.menu]:!0,[l.menuActive]:this.open},id:this.dialogId,ref:this.setFloatingEl,role:"dialog"},r("div",{key:"92b37e521a0d2e0e8fb30ca129a53e75d26e9dd6",class:{[l.calendarWrapper]:!0,[l.calendarWrapperEnd]:this.focusedInput==="end",[C.animation]:!0,[C.animationActive]:this.open},ref:this.setTransitionEl},r("calcite-date-picker",{key:"35aa39e5552eff762bb58368b4cbe1069692ee38",activeDate:this.datePickerActiveDate,activeRange:this.focusedInput,headingLevel:this.headingLevel,max:this.max,maxAsDate:this.maxAsDate,messageOverrides:this.messageOverrides,min:this.min,minAsDate:this.minAsDate,numberingSystem:i,onCalciteDatePickerChange:this.handleDateChange,onCalciteDatePickerRangeChange:this.handleDateRangeChange,proximitySelectionDisabled:this.proximitySelectionDisabled,range:this.range,ref:this.setDatePickerRef,scale:this.scale,tabIndex:this.open?void 0:-1,valueAsDate:this.valueAsDate}))),this.range&&this.layout==="horizontal"&&r("div",{key:"386b0a687fc16a4f96ef9cc199aca653ab90071b",class:l.horizontalArrowContainer},r("calcite-icon",{key:"65b1d5b9e7b77f524ef40cd1f0efda3776db33e1",flipRtl:!0,icon:"arrow-right",scale:x(this.scale)})),this.range&&this.layout==="vertical"&&this.scale!=="s"&&r("div",{key:"50b0b98f4d51c5866557ab5691692a42704d08f2",class:l.verticalArrowContainer},r("calcite-icon",{key:"48758a61b800c61109b492d77ca468519ad65227",icon:"arrow-down",scale:x(this.scale)})),this.range&&r("div",{key:"af12058d6a8d299fd988ae4ac7fc0422d05342c6",class:l.inputWrapper,"data-position":"end",onClick:this.onInputWrapperClick,onPointerDown:this.onInputWrapperPointerDown,ref:this.setEndWrapper},r("calcite-input-text",{key:"38c68e0df3d516ea5b840a1a937d1af6d1c971b0","aria-autocomplete":"none","aria-controls":this.dialogId,"aria-errormessage":w.validationMessage,"aria-expanded":g(this.open),"aria-haspopup":"dialog","aria-invalid":g(this.status==="invalid"),class:{[l.input]:!0,[l.inputBorderTopColorOne]:this.layout==="vertical"&&this.range},disabled:t,icon:"calendar",onCalciteInputTextInput:this.calciteInternalInputInputHandler,onCalciteInternalInputTextBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputTextFocus:this.endInputFocus,placeholder:(c=this.localeData)==null?void 0:c.placeholder,readOnly:n,ref:this.setEndInput,role:"combobox",scale:this.scale,status:this.status}),!this.readOnly&&this.renderToggleIcon(this.open&&this.focusedInput==="end"))),r(G,{key:"65e98114397e07a95ccf82217412360be3a36d96",component:this}),this.validationMessage&&this.status==="invalid"?r(de,{icon:this.validationIcon,id:w.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}renderToggleIcon(t){return r("span",{class:l.toggleIcon,tabIndex:-1},r("calcite-icon",{class:l.chevronIcon,icon:t?"chevron-up":"chevron-down",scale:x(this.scale)}))}effectiveLocaleChange(){le(this,this.effectiveLocale),this.loadLocaleData()}handleDateTimeFormatChange(){const t={numberingSystem:ie(this.numberingSystem)};this.dateTimeFormat=new Intl.DateTimeFormat(ne(this.effectiveLocale),t)}setReferenceEl(){const{focusedInput:t,layout:e,endWrapper:a,startWrapper:i}=this;this.referenceEl=t==="end"||e==="vertical"?a||i:i||a,requestAnimationFrame(()=>b(this,this.referenceEl,this.floatingEl))}onLabelClick(){this.setFocus()}onBeforeOpen(){this.calciteInputDatePickerBeforeOpen.emit()}onOpen(){E(this,{onActivate:()=>{this.focusOnOpen&&(this.datePickerEl.setFocus(),this.focusOnOpen=!1)}}),this.calciteInputDatePickerOpen.emit()}onBeforeClose(){this.calciteInputDatePickerBeforeClose.emit()}onClose(){this.calciteInputDatePickerClose.emit(),D(this),this.restoreInputFocus(),this.focusOnOpen=!1,this.datePickerEl.reset()}syncHiddenFormInput(t){he("date",this,t)}commitValue(){const{focusedInput:t,value:e}=this,a=`${t}Input`,i=this[a].value,n=A(i,this.localeData),s=h(n),o=Array.isArray(e);if(this.range){const c=t==="start"?0:1;if(o){if(s===e[c])return;n?(this.setRangeValue([t==="start"?n:d(e[0]),t==="end"?n:d(e[1])]),this.localizeInputValues()):this.setRangeValue([t==="end"&&d(e[0]),t==="start"&&d(e[1])])}else n&&(this.setRangeValue([t==="start"?n:d(e[0]),t==="end"?n:d(e[1])]),this.localizeInputValues())}else{if(s===e)return;this.setValue(n),this.localizeInputValues()}}async loadLocaleData(){S()&&(v.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:!1},this.localeData=await W(this.effectiveLocale),this.localizeInputValues())}shouldFocusRangeStart(){const t=this.value[0];return!!(this.value[1]&&!t&&this.focusedInput==="end"&&this.startInput)}shouldFocusRangeEnd(){const t=this.value[0],e=this.value[1];return!!(t&&!e&&this.focusedInput==="start"&&this.endInput)}restoreInputFocus(){if(!this.range){this.startInput.setFocus();return}(this.focusedInput==="start"?this.startInput:this.endInput).setFocus()}localizeInputValues(){const t=y(this.range?Array.isArray(this.valueAsDate)&&this.valueAsDate[0]||void 0:this.valueAsDate,this.minAsDate,this.maxAsDate),e=this.range?y(Array.isArray(this.valueAsDate)&&this.valueAsDate[1]||void 0,this.minAsDate,this.maxAsDate):null;this.setInputValue((t&&this.dateTimeFormat.format(t))??"","start"),this.setInputValue((this.range&&e&&this.dateTimeFormat.format(e))??"","end")}warnAboutInvalidValue(t){console.warn(`The specified value "${t}" does not conform to the required format, "YYYY-MM-DD".`)}getNormalizedDate(t){if(!t)return"";if(!ue(t))return t;const{day:e,month:a,year:i}=O(t);return`${pe(Number(i))}-${a}-${e}`}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return R(this)}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],disabled:["handleDisabledAndReadOnlyChange"],readOnly:["handleDisabledAndReadOnlyChange"],value:["valueWatcher"],valueAsDate:["valueAsDateWatcher"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],min:["onMinChanged"],max:["onMaxChanged"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],effectiveLocale:["effectiveLocaleChange","handleDateTimeFormatChange"],numberingSystem:["handleDateTimeFormatChange"],layout:["setReferenceEl"],focusedInput:["setReferenceEl"]}}};ge.style=fe;export{ge as calcite_input_date_picker};
//# sourceMappingURL=calcite-input-date-picker.entry-BXd3Rh02.js.map
