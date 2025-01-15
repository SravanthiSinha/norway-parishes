import{r as C,c as v,h as r,H as P,i as _,g as M,F as T}from"./index-UqHiE_Ae.js";import{j as A,b as m,c as b,g as I,e as d,f as K,s as N,k as h,i as W,l as j,n as U,p as V,m as B,o as G}from"./utils-f1cd2770-CKJofKMR.js";import{c as H,s as O,a as L}from"./loadable-13e9ffb2-D4A0Qvlc.js";import{c as $,d as X,n as y,e as q}from"./locale-60f8ca58-Bynj9zbm.js";import{c as J,d as Q,s as Z,u as ee}from"./t9n-75defee3-tjks3Jvf.js";import{n as Y,t as te}from"./dom-b6dedd88-DbdM_9lX.js";import{I as ae,u as ie}from"./interactive-1a42577a-DpDf_7D-.js";import{i as S}from"./key-3ee05994-D63ExP77.js";import{H as se}from"./Heading-4aed0b02-BQ1KXGXI.js";import{g as E}from"./component-5f0a8be8-6CIDVndn.js";import"./observers-9c166451-BOVuqTo3.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const ne=2,re={dateStyle:"full"},oe=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:inline-block;inline-size:auto;overflow:visible;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1);vertical-align:top}:host([scale=s]){inline-size:234px;min-inline-size:216px;max-inline-size:380px}:host([scale=m]){inline-size:304px;min-inline-size:272px;max-inline-size:480px}:host([scale=l]){inline-size:370px;min-inline-size:320px;max-inline-size:600px}:host([hidden]){display:none}[hidden]{display:none}",ce=oe,he=class{constructor(t){C(this,t),this.calciteDatePickerChange=v(this,"calciteDatePickerChange",6),this.calciteDatePickerRangeChange=v(this,"calciteDatePickerRangeChange",6),this.keyDownHandler=e=>{e.key==="Escape"&&this.resetActiveDates()},this.monthHeaderSelectChange=e=>{const a=new Date(e.detail);this.range?(this.activeRange==="end"?this.activeEndDate=a:this.activeStartDate=a,this.mostRecentRangeValue=a):this.activeDate=a},this.monthActiveDateChange=e=>{const a=new Date(e.detail);this.range?(this.activeRange==="end"?this.activeEndDate=a:this.activeStartDate=a,this.mostRecentRangeValue=a):this.activeDate=a},this.monthHoverChange=e=>{if(!this.range){this.hoverRange=void 0;return}const{valueAsDate:a}=this,i=Array.isArray(a)&&a[0],s=Array.isArray(a)&&a[1],n=new Date(e.detail);if(this.hoverRange={focused:this.activeRange||"start",start:i,end:s},this.proximitySelectionDisabled)s&&i||!s&&n>=i?(this.hoverRange.focused="end",this.hoverRange.end=n):!s&&n<i?this.hoverRange={focused:"start",start:n,end:i}:this.hoverRange=void 0;else if(i&&s){const o=A(n,i),c=A(n,s);c>0?(this.hoverRange.end=n,this.hoverRange.focused="end"):o<0?(this.hoverRange.start=n,this.hoverRange.focused="start"):o>c?(this.hoverRange.start=n,this.hoverRange.focused="start"):(this.hoverRange.end=n,this.hoverRange.focused="end")}else i&&(n<i?this.hoverRange={focused:"start",start:n,end:i}:(this.hoverRange.end=n,this.hoverRange.focused="end"));e.stopPropagation()},this.monthMouseOutChange=()=>{this.hoverRange&&(this.hoverRange=void 0)},this.resetActiveDates=()=>{const{valueAsDate:e}=this;!Array.isArray(e)&&e&&e!==this.activeDate&&(this.activeDate=new Date(e)),Array.isArray(e)&&(e[0]&&e[0]!==this.activeStartDate&&(this.activeStartDate=new Date(e[0])),e[1]&&e[1]!==this.activeEndDate&&(this.activeEndDate=new Date(e[1])))},this.monthDateChange=e=>{const a=new Date(e.detail),i=m(a);if(!this.range&&i===m(this.valueAsDate))return;if(!this.range){this.value=i||"",this.valueAsDate=a||null,this.activeDate=a||null,this.calciteDatePickerChange.emit();return}const s=this.getStartDate(),n=this.getEndDate();if(!s||!n&&a<s)s&&this.setEndDate(new Date(s)),this.activeRange=="end"?this.setEndDate(a):this.setStartDate(a);else if(!n)this.setEndDate(a);else if(this.proximitySelectionDisabled)this.setStartDate(a),this.setEndDate(null);else if(this.activeRange)this.activeRange=="end"?this.setEndDate(a):this.setStartDate(a);else{const o=A(a,s),c=A(a,n);c===0||o<0?this.setStartDate(a):o===0||c<0?this.setEndDate(a):o<c?this.setStartDate(a):this.setEndDate(a)}this.calciteDatePickerChange.emit()},this.activeDate=void 0,this.activeRange=void 0,this.value=void 0,this.headingLevel=void 0,this.valueAsDate=void 0,this.minAsDate=void 0,this.maxAsDate=void 0,this.min=void 0,this.max=void 0,this.numberingSystem=void 0,this.scale="m",this.range=!1,this.proximitySelectionDisabled=!1,this.messageOverrides=void 0,this.messages=void 0,this.activeEndDate=void 0,this.activeStartDate=void 0,this.dateTimeFormat=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.endAsDate=void 0,this.hoverRange=void 0,this.localeData=void 0,this.mostRecentRangeValue=void 0,this.startAsDate=void 0}activeDateWatcher(t){this.activeRange==="end"&&(this.activeEndDate=t)}valueAsDateWatcher(t){if(this.range&&Array.isArray(t)){const{activeStartDate:e,activeEndDate:a}=this,i=t[0],s=t[1];this.activeStartDate=e!==i&&i,this.activeEndDate=a!==s&&s}else t&&t!==this.activeDate&&(this.activeDate=t)}onMinChanged(t){this.minAsDate=b(t)}onMaxChanged(t){this.maxAsDate=b(t)}onMessagesChange(){}async setFocus(){await H(this),this.el.focus()}async reset(){this.resetActiveDates(),this.mostRecentRangeValue=void 0}connectedCallback(){$(this),J(this),Array.isArray(this.value)?this.valueAsDate=I(this.value):this.value&&(this.valueAsDate=b(this.value)),this.min&&(this.minAsDate=b(this.min)),this.max&&(this.maxAsDate=b(this.max))}disconnectedCallback(){X(this),Q(this)}async componentWillLoad(){O(this),await this.loadLocaleData(),this.onMinChanged(this.min),this.onMaxChanged(this.max),await Z(this)}componentDidLoad(){L(this)}render(){var o;const t=d(this.range&&Array.isArray(this.valueAsDate)?this.valueAsDate[0]:this.valueAsDate,this.minAsDate,this.maxAsDate);let e=this.getActiveDate(t,this.minAsDate,this.maxAsDate);const a=this.range&&Array.isArray(this.valueAsDate)?d(this.valueAsDate[1],this.minAsDate,this.maxAsDate):null,i=this.getActiveEndDate(a,this.minAsDate,this.maxAsDate);(this.activeRange==="end"||((o=this.hoverRange)==null?void 0:o.focused)==="end"&&(!this.proximitySelectionDisabled||a))&&i&&(e=i),this.range&&this.mostRecentRangeValue&&(e=this.mostRecentRangeValue);const s=this.range&&this.activeRange?this.activeRange==="start"?this.minAsDate:t||this.minAsDate:this.minAsDate,n=this.range&&this.activeRange?this.activeRange==="start"?a||this.maxAsDate:this.maxAsDate:this.maxAsDate;return r(P,{key:"32213cf1e0848af340d9a7cdaf0838f88d04e0cb",onBlur:this.resetActiveDates,onKeyDown:this.keyDownHandler},this.renderCalendar(e,n,s,t,a))}effectiveLocaleChange(){ee(this,this.effectiveLocale)}valueHandler(t){Array.isArray(t)?this.valueAsDate=I(t):t&&(this.valueAsDate=b(t))}async loadLocaleData(){_()&&(y.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:!1},this.localeData=await K(this.effectiveLocale),this.dateTimeFormat=q(this.effectiveLocale,re))}renderCalendar(t,e,a,i,s){return this.localeData&&[r("calcite-date-picker-month-header",{activeDate:t,headingLevel:this.headingLevel||ne,localeData:this.localeData,max:e,messages:this.messages,min:a,onCalciteInternalDatePickerSelect:this.monthHeaderSelectChange,scale:this.scale,selectedDate:this.activeRange==="end"?s:i||new Date}),r("calcite-date-picker-month",{activeDate:t,dateTimeFormat:this.dateTimeFormat,endDate:this.range?s:void 0,hoverRange:this.hoverRange,localeData:this.localeData,max:e,min:a,onCalciteInternalDatePickerActiveDateChange:this.monthActiveDateChange,onCalciteInternalDatePickerHover:this.monthHoverChange,onCalciteInternalDatePickerMouseOut:this.monthMouseOutChange,onCalciteInternalDatePickerSelect:this.monthDateChange,scale:this.scale,selectedDate:this.activeRange==="end"?s:i,startDate:this.range?i:void 0})]}getEndDate(){return Array.isArray(this.valueAsDate)&&this.valueAsDate[1]||void 0}setEndDate(t){const e=this.getStartDate(),a=t&&N(t);this.value=[m(e),m(t)],this.valueAsDate=[e,t],this.mostRecentRangeValue=a,this.calciteDatePickerRangeChange.emit(),this.activeEndDate=t||null}getStartDate(){return Array.isArray(this.valueAsDate)&&this.valueAsDate[0]}setStartDate(t){const e=this.getEndDate();this.value=[m(t),m(e)],this.valueAsDate=[t,e],this.mostRecentRangeValue=t,this.calciteDatePickerRangeChange.emit(),this.activeStartDate=t||null}getActiveDate(t,e,a){return d(this.activeDate,e,a)||t||d(new Date,e,a)}getActiveEndDate(t,e,a){return d(this.activeEndDate,e,a)||t||d(new Date,e,a)}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return M(this)}static get watchers(){return{activeDate:["activeDateWatcher"],valueAsDate:["valueAsDateWatcher"],min:["onMinChanged"],max:["onMaxChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange","loadLocaleData"],value:["valueHandler"]}}};he.style=ce;const le=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;cursor:pointer;color:var(--calcite-color-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.day-v-wrapper{flex:1 1 auto}.day-wrapper{position:relative;display:flex;flex-direction:column;align-items:center}:host([range]) .day-wrapper::before,:host([range]) .day-wrapper::after,:host([range-hover]) .day-wrapper::before,:host([range-hover]) .day-wrapper::after{pointer-events:none;position:absolute;inset-block:0;content:"";block-size:var(--calcite-internal-day-size);inline-size:var(--calcite-internal-day-size)}.day{z-index:var(--calcite-z-index);display:flex;align-items:center;justify-content:center;border-radius:9999px;font-size:var(--calcite-font-size--2);line-height:1rem;line-height:1;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background:none;box-shadow:0 0 0 2px transparent;block-size:var(--calcite-internal-day-size);inline-size:var(--calcite-internal-day-size)}.text{margin-block:1px 0px;margin-inline-start:0px}:host([scale=s]){--calcite-internal-day-size:27px}:host([scale=s]) .day-v-wrapper{padding-block:0.125rem}:host([scale=s]) .day-wrapper{padding:0px}:host([scale=s]) .day{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-day-size:33px}:host([scale=m]) .day-v-wrapper{padding-block:0.25rem}:host([scale=m]) .day-wrapper{padding:0px}:host([scale=m]) .day{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-day-size:43px}:host([scale=l]) .day-v-wrapper{padding-block:0.25rem}:host([scale=l]) .day-wrapper{padding-inline:0.25rem}:host([scale=l]) .day{font-size:var(--calcite-font-size-0)}:host(:not([current-month])) .day{opacity:var(--calcite-opacity-disabled)}:host(:hover:not([disabled]):not([selected])) .day,:host([active]:not([range]):not([selected])) .day{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:focus),:host([active]){outline:2px solid transparent;outline-offset:2px}:host(:focus:not([disabled])) .day{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([selected]) .day{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-color-brand);color:var(--calcite-color-foreground-1)}:host(:focus:not([disabled])) .day,:host([start-of-range]:not(:focus)) .day,:host([end-of-range]:not(:focus)) .day{box-shadow:0 0 0 2px var(--calcite-color-foreground-1)}:host([range-hover]:not([selected])) .day-wrapper::before,:host([highlighted]:not([selected])) .day-wrapper::before{inset-inline-end:50%;border-radius:0}:host([range-hover]:not([selected])) .day-wrapper::after,:host([highlighted]:not([selected])) .day-wrapper::after{inset-inline-start:50%;border-radius:0}:host([range-hover]:not([selected])) .day,:host([highlighted]:not([selected])) .day{color:var(--calcite-color-text-1)}:host([highlighted]) .day-wrapper::before,:host([highlighted]) .day-wrapper::after,:host([selected]:not(.hover--outside-range)) .day-wrapper::before,:host([selected]:not(.hover--outside-range)) .day-wrapper::after{background-color:var(--calcite-color-foreground-current)}:host([range-hover]:not([selected])) .day-wrapper::before,:host([range-hover]:not([selected])) .day-wrapper::after{background-color:var(--calcite-color-foreground-2)}:host(:hover[range-hover]:not([selected]).focused--end) .day-wrapper::before,:host([highlighted][end-of-range]) .day-wrapper::before,:host([highlighted][range-edge=end]) .day-wrapper::before,:host([range-hover][range-edge=end]) .day-wrapper::before,:host(:hover[range-hover].focused--end.hover--outside-range) .day-wrapper::before{inset-inline-end:50%}:host(:hover[range-hover]:not([selected]).focused--end) .day-wrapper::after,:host([highlighted][end-of-range]) .day-wrapper::after,:host([highlighted][range-edge=end]) .day-wrapper::after,:host([range-hover][range-edge=end]) .day-wrapper::after,:host(:hover[range-hover].focused--end.hover--outside-range) .day-wrapper::after{inset-inline-start:50%;border-start-end-radius:var(--calcite-internal-day-size);border-end-end-radius:var(--calcite-internal-day-size);inline-size:calc(var(--calcite-internal-day-size) / 2)}:host([highlighted][start-of-range]) .day-wrapper::before,:host([highlighted][range-edge=start]) .day-wrapper::before,:host([range-hover][range-edge=start]) .day-wrapper::before,:host(:hover[range-hover]:not([selected]).focused--start) .day-wrapper::before,:host([start-of-range].hover--inside-range) .day-wrapper::before,:host(:hover[range-hover].focused--start.hover--outside-range) .day-wrapper::before{inset-inline-end:50%;border-start-start-radius:var(--calcite-internal-day-size);border-end-start-radius:var(--calcite-internal-day-size);inline-size:calc(var(--calcite-internal-day-size) / 2)}:host([highlighted][start-of-range]) .day-wrapper::after,:host([highlighted][range-edge=start]) .day-wrapper::after,:host([range-hover][range-edge=start]) .day-wrapper::after,:host(:hover[range-hover]:not([selected]).focused--start) .day-wrapper::after,:host([start-of-range].hover--inside-range) .day-wrapper::after,:host(:hover[range-hover].focused--start.hover--outside-range) .day-wrapper::after{inset-inline-start:50%}:host([range-hover][start-of-range][range-edge=end]) .day-wrapper::after,:host([range-hover][start-of-range][range-edge=end]) .day-wrapper::before,:host([range-hover][end-of-range][range-edge=start]) .day-wrapper::after,:host([range-hover][end-of-range][range-edge=start]) .day-wrapper::before,:host([start-of-range][range-edge=end].hover--inside-range) .day-wrapper::after,:host([start-of-range][range-edge=end].hover--inside-range) .day-wrapper::before,:host([end-of-range]) .day-wrapper::after,:host([end-of-range]) .day-wrapper::before{content:unset}:host(:hover[range-hover]:not([selected]).focused--start) .day,:host(:hover[range-hover]:not([selected]).focused--end) .day,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .day,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .day{box-shadow:0 0 0 2px var(--calcite-color-foreground-1)}@media (forced-colors: active){.day{border-radius:0px}:host([selected]){outline:2px solid canvasText}:host(:hover:not([selected])) .day{border-radius:50%}:host([range][selected]) .day-wrapper::before,:host([range][selected]) .day-wrapper::after,:host([highlighted]) .day-wrapper::before,:host([highlighted]) .day-wrapper::after,:host([range-hover]:not([selected])) .day-wrapper::before,:host([range-hover]:not([selected])) .day-wrapper::after{background-color:highlight}:host([range-hover]) .day-wrapper::before,:host([range-hover]) .day-wrapper::after,:host([range][selected][start-of-range]) .day-wrapper::before,:host([range][selected][start-of-range]) .day-wrapper::after,:host([range][selected][end-of-range]) .day-wrapper::before,:host([range][selected][end-of-range]) .day-wrapper::after{background-color:canvas}}:host([hidden]){display:none}[hidden]{display:none}`,de=le,ge=class{constructor(t){C(this,t),this.calciteDaySelect=v(this,"calciteDaySelect",6),this.calciteInternalDayHover=v(this,"calciteInternalDayHover",6),this.onClick=()=>{this.disabled||this.calciteDaySelect.emit()},this.keyDownHandler=e=>{S(e.key)&&(!this.disabled&&this.calciteDaySelect.emit(),e.preventDefault())},this.day=void 0,this.dateTimeFormat=void 0,this.disabled=!1,this.currentMonth=!1,this.selected=!1,this.highlighted=!1,this.range=!1,this.rangeEdge=void 0,this.startOfRange=!1,this.endOfRange=!1,this.rangeHover=!1,this.active=!1,this.scale=void 0,this.value=void 0}pointerOverHandler(){this.disabled||this.calciteInternalDayHover.emit()}async componentWillLoad(){O(this),this.parentDatePickerEl=Y(this.el,"calcite-date-picker")}componentDidLoad(){L(this)}async setFocus(){await H(this),this.el.focus()}render(){const t=m(this.value).replaceAll("-","");if(this.parentDatePickerEl){const{numberingSystem:i,lang:s}=this.parentDatePickerEl;y.numberFormatOptions={useGrouping:!1,...i&&{numberingSystem:i},...s&&{locale:s}}}const e=y.localize(String(this.day)),a=this.dateTimeFormat.format(this.value);return r(P,{key:"99367dbc5f33128ec7e60922a7ccb68f54362f78","aria-label":a,"aria-selected":te(this.active),id:t,onClick:this.onClick,onKeyDown:this.keyDownHandler,role:"button",tabIndex:this.active&&!this.disabled?0:-1},r(ae,{key:"50e5172f11d617e5e52aade2bb9fbdd7c46ccc60",disabled:this.disabled},r("div",{key:"cfb5af0dcdb9283e00d3220e3658c253fc8fdc05","aria-hidden":"true",class:{"day-v-wrapper":!0}},r("div",{key:"f1a85d642b0abdf35676fea5873c2ac4c92d451c",class:"day-wrapper"},r("span",{key:"79daaedf22745c9d633b4461c5a28b828b6803ae",class:"day"},r("span",{key:"14152896fce841cbe975eeabd5171024ae5133d3",class:"text"},e))))))}componentDidRender(){ie(this)}get el(){return M(this)}};ge.style=de;const fe=":host([hidden]){display:none}[hidden]{display:none}.calendar{margin-block-end:0.25rem}.week-headers{display:flex;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding-block:0px;padding-inline:0.25rem}.week-header{text-align:center;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-3);inline-size:14.2857142857%}.day{display:flex;min-inline-size:0px;justify-content:center;inline-size:100%}.day calcite-date-picker-day{inline-size:100%}:host([scale=s]) .week-header{padding-inline:0px;padding-block:0.5rem 0.75rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .week-header{padding-inline:0px;padding-block:0.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]) .week-header{padding-inline:0px;padding-block:1rem 1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}.week-days{display:grid;grid-template-columns:repeat(7, 1fr);grid-auto-rows:1fr;padding-block:0;padding-inline:6px}.week-days:focus{outline:2px solid transparent;outline-offset:2px}",ue=fe,x=7,z=6,ve=class{constructor(t){C(this,t),this.calciteInternalDatePickerSelect=v(this,"calciteInternalDatePickerSelect",6),this.calciteInternalDatePickerHover=v(this,"calciteInternalDatePickerHover",6),this.calciteInternalDatePickerActiveDateChange=v(this,"calciteInternalDatePickerActiveDateChange",6),this.calciteInternalDatePickerMouseOut=v(this,"calciteInternalDatePickerMouseOut",6),this.keyDownHandler=e=>{if(e.defaultPrevented)return;const a=this.el.dir==="rtl";switch(e.key){case"ArrowUp":e.preventDefault(),this.addDays(-7);break;case"ArrowRight":e.preventDefault(),this.addDays(a?-1:1);break;case"ArrowDown":e.preventDefault(),this.addDays(7);break;case"ArrowLeft":e.preventDefault(),this.addDays(a?1:-1);break;case"PageUp":e.preventDefault(),this.addMonths(-1);break;case"PageDown":e.preventDefault(),this.addMonths(1);break;case"Home":e.preventDefault(),this.activeDate.setDate(1),this.addDays();break;case"End":e.preventDefault(),this.activeDate.setDate(new Date(this.activeDate.getFullYear(),this.activeDate.getMonth()+1,0).getDate()),this.addDays();break;case"Enter":case" ":e.preventDefault();break;case"Tab":this.activeFocus=!1}},this.disableActiveFocus=()=>{this.activeFocus=!1},this.dayHover=e=>{const a=e.target;a.disabled?this.calciteInternalDatePickerMouseOut.emit():this.calciteInternalDatePickerHover.emit(a.value),e.stopPropagation()},this.daySelect=e=>{const a=e.target;this.calciteInternalDatePickerSelect.emit(a.value)},this.dateTimeFormat=void 0,this.selectedDate=void 0,this.activeDate=new Date,this.startDate=void 0,this.endDate=void 0,this.min=void 0,this.max=void 0,this.scale=void 0,this.localeData=void 0,this.hoverRange=void 0}pointerOutHandler(){this.calciteInternalDatePickerMouseOut.emit()}render(){const t=this.activeDate.getMonth(),e=this.activeDate.getFullYear(),a=this.localeData.weekStart%7,{abbreviated:i,short:s,narrow:n}=this.localeData.days,o=this.scale==="s"?n||s||i:s||i||n,c=[...o.slice(a,7),...o.slice(0,a)],g=this.getCurrentMonthDays(t,e),f=this.getPreviousMonthDays(t,e,a),u=this.getNextMonthDays(t,e,a);let k=0;const D=()=>k++%7,w=[...f.map(l=>({active:!1,day:l,dayInWeek:D(),date:new Date(e,t-1,l)})),...g.map(l=>{const R=new Date(e,t,l);return{active:h(R,this.activeDate),currentMonth:!0,day:l,dayInWeek:D(),date:R,ref:!0}}),...u.map(l=>({active:!1,day:l,dayInWeek:D(),date:new Date(e,t+1,l)}))];return r(P,{onFocusout:this.disableActiveFocus,onKeyDown:this.keyDownHandler},r("div",{class:"calendar",role:"grid"},r("div",{class:"week-headers",role:"row"},c.map(l=>r("span",{class:"week-header",role:"columnheader"},l))),r("div",{class:"week-days",role:"row"},w.map((l,R)=>this.renderDateDay(l,R)))))}addMonths(t){const e=new Date(this.activeDate);e.setMonth(this.activeDate.getMonth()+t),this.calciteInternalDatePickerActiveDateChange.emit(d(e,this.min,this.max)),this.activeFocus=!0}addDays(t=0){const e=new Date(this.activeDate);e.setDate(this.activeDate.getDate()+t),this.calciteInternalDatePickerActiveDateChange.emit(d(e,this.min,this.max)),this.activeFocus=!0}getPreviousMonthDays(t,e,a){const i=new Date(e,t,0),s=i.getDate(),n=i.getDay(),o=[];if(n===(a+z)%x)return o;if(n===a)return[s];for(let c=(x+n-a)%x;c>=0;c--)o.push(s-c);return o}getCurrentMonthDays(t,e){const a=new Date(e,t+1,0).getDate(),i=[];for(let s=0;s<a;s++)i.push(s+1);return i}getNextMonthDays(t,e,a){const i=new Date(e,t+1,0).getDay(),s=[];if(i===(a+z)%x)return s;for(let n=0;n<(z-(i-a))%x;n++)s.push(n+1);return s}betweenSelectedRange(t){return!!(this.startDate&&this.endDate&&t>this.startDate&&t<this.endDate&&!this.isRangeHover(t))}isSelected(t){return!!(h(t,this.selectedDate)||this.startDate&&h(t,this.startDate)||this.endDate&&h(t,this.endDate))}isStartOfRange(t){return!!(this.startDate&&!h(this.startDate,this.endDate)&&h(this.startDate,t)&&!this.isEndOfRange(t))}isEndOfRange(t){return!!(this.endDate&&!h(this.startDate,this.endDate)&&h(this.endDate,t)||!this.endDate&&this.hoverRange&&h(this.startDate,this.hoverRange.end)&&h(t,this.hoverRange.end))}renderDateDay({active:t,currentMonth:e,date:a,day:i,dayInWeek:s,ref:n},o){var f;const c=this.isFocusedOnStart(),g=this.isHoverInRange()||!this.endDate&&this.hoverRange&&h((f=this.hoverRange)==null?void 0:f.end,this.startDate);return r("div",{class:"day",key:o,role:"gridcell"},r("calcite-date-picker-day",{active:t,class:{"hover--inside-range":this.startDate&&g,"hover--outside-range":this.startDate&&!g,"focused--start":c,"focused--end":!c},currentMonth:e,dateTimeFormat:this.dateTimeFormat,day:i,disabled:!W(a,this.min,this.max),endOfRange:this.isEndOfRange(a),highlighted:this.betweenSelectedRange(a),onCalciteDaySelect:this.daySelect,onCalciteInternalDayHover:this.dayHover,range:!!this.startDate&&!!this.endDate&&!h(this.startDate,this.endDate),rangeEdge:s===0?"start":s===6?"end":void 0,rangeHover:this.isRangeHover(a),ref:u=>{n&&t&&this.activeFocus&&(u==null||u.setFocus())},scale:this.scale,selected:this.isSelected(a),startOfRange:this.isStartOfRange(a),value:a}))}isFocusedOnStart(){var t;return((t=this.hoverRange)==null?void 0:t.focused)==="start"}isHoverInRange(){if(!this.hoverRange)return!1;const{start:t,end:e}=this.hoverRange;return!!(!this.isFocusedOnStart()&&this.startDate&&(!this.endDate||e<this.endDate)||this.isFocusedOnStart()&&this.startDate&&t>this.startDate)}isRangeHover(t){if(!this.hoverRange)return!1;const{start:e,end:a}=this.hoverRange,i=this.isFocusedOnStart(),s=this.isHoverInRange(),n=s&&(!i&&t>this.startDate&&(t<a||h(t,a))||i&&t<this.endDate&&(t>e||h(t,e))),o=!s&&(!i&&t>=this.endDate&&(t<a||h(t,a))||i&&(this.startDate&&t<this.startDate||this.endDate&&h(t,this.startDate))&&(e&&t>e||h(t,e)));return n||o}get el(){return M(this)}};ve.style=ue;const p={header:"header",month:"month",chevron:"chevron",suffix:"suffix",yearSuffix:"year--suffix",yearWrap:"year-wrap",textReverse:"text--reverse"},F={chevronLeft:"chevron-left",chevronRight:"chevron-right"},De=`:host{display:block}.header{display:flex;justify-content:space-between;padding-block:0px;padding-inline:0.25rem}:host([scale=s]) .text{margin-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .chevron{block-size:2.25rem}:host([scale=m]) .text{margin-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .chevron{block-size:3rem}:host([scale=l]) .text{margin-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .chevron{block-size:3.5rem}.chevron{margin-inline:-0.25rem;box-sizing:content-box;display:flex;flex-grow:0;cursor:pointer;align-items:center;justify-content:center;border-style:none;background-color:var(--calcite-color-foreground-1);padding-inline:0.25rem;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inline-size:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.chevron:hover,.chevron:focus{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}.chevron:active{background-color:var(--calcite-color-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{margin-block:auto;display:flex;inline-size:100%;flex:1 1 auto;align-items:center;justify-content:center;text-align:center;line-height:1}.text--reverse{flex-direction:row-reverse}.month,.year,.suffix{margin-inline:0.25rem;margin-block:auto;display:inline-block;background-color:var(--calcite-color-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-1);font-size:inherit}.year{position:relative;inline-size:2.5rem;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-color:transparent}.year:hover{transition-duration:100ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:outline-color;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.year--suffix{text-align:start}.year-wrap{position:relative}.suffix{inset-block-start:0px;white-space:nowrap;text-align:start;inset-inline-start:0}:host([hidden]){display:none}[hidden]{display:none}`,pe=De,ye=class{constructor(t){C(this,t),this.calciteInternalDatePickerSelect=v(this,"calciteInternalDatePickerSelect",6),this.onYearKey=e=>{const a=this.parseCalendarYear(e.target.value);switch(e.key){case"ArrowDown":e.preventDefault(),this.setYear({localizedYear:a,offset:-1});break;case"ArrowUp":e.preventDefault(),this.setYear({localizedYear:a,offset:1});break}},this.onYearChange=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value)})},this.onYearInput=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value),commit:!1})},this.prevMonthClick=e=>{this.handleArrowClick(e,this.prevMonthDate)},this.prevMonthKeydown=e=>{S(e.key)&&this.prevMonthClick(e)},this.nextMonthClick=e=>{this.handleArrowClick(e,this.nextMonthDate)},this.nextMonthKeydown=e=>{S(e.key)&&this.nextMonthClick(e)},this.handleArrowClick=(e,a)=>{e.preventDefault(),this.calciteInternalDatePickerSelect.emit(a)},this.selectedDate=void 0,this.activeDate=void 0,this.headingLevel=void 0,this.min=void 0,this.max=void 0,this.scale=void 0,this.localeData=void 0,this.messages=void 0,this.nextMonthDate=void 0,this.prevMonthDate=void 0}componentWillLoad(){this.parentDatePickerEl=Y(this.el,"calcite-date-picker")}connectedCallback(){this.setNextPrevMonthDates()}render(){return r("div",{key:"4943ff396e6db2ee2ba30f4994a75fb2d5afeda1",class:p.header},this.renderContent())}renderContent(){var k;const{messages:t,localeData:e,activeDate:a}=this;if(!a||!e)return null;if(this.parentDatePickerEl){const{numberingSystem:D,lang:w}=this.parentDatePickerEl;y.numberFormatOptions={useGrouping:!1,...D&&{numberingSystem:D},...w&&{locale:w}}}const i=a.getMonth(),{months:s,unitOrder:n}=e,o=(s.wide||s.narrow||s.abbreviated)[i],c=this.formatCalendarYear(a.getFullYear()),g=j(n),f=g.indexOf("y")<g.indexOf("m"),u=(k=e.year)==null?void 0:k.suffix;return r(T,null,r("a",{"aria-disabled":`${this.prevMonthDate.getMonth()===i}`,"aria-label":t.prevMonth,class:p.chevron,href:"#",onClick:this.prevMonthClick,onKeyDown:this.prevMonthKeydown,role:"button",tabindex:this.prevMonthDate.getMonth()===i?-1:0},r("calcite-icon",{"flip-rtl":!0,icon:F.chevronLeft,scale:E(this.scale)})),r("div",{class:{text:!0,[p.textReverse]:f}},r(se,{class:p.month,level:this.headingLevel},o),r("span",{class:p.yearWrap},r("input",{"aria-label":t.year,class:{year:!0,[p.yearSuffix]:!!u},inputmode:"numeric",maxlength:"4",minlength:"1",onChange:this.onYearChange,onInput:this.onYearInput,onKeyDown:this.onYearKey,pattern:"\\d*",ref:D=>this.yearInput=D,type:"text",value:c}),u&&r("span",{class:p.suffix},u))),r("a",{"aria-disabled":`${this.nextMonthDate.getMonth()===i}`,"aria-label":t.nextMonth,class:p.chevron,href:"#",onClick:this.nextMonthClick,onKeyDown:this.nextMonthKeydown,role:"button",tabindex:this.nextMonthDate.getMonth()===i?-1:0},r("calcite-icon",{"flip-rtl":!0,icon:F.chevronRight,scale:E(this.scale)})))}setNextPrevMonthDates(){this.activeDate&&(this.nextMonthDate=d(U(this.activeDate),this.min,this.max),this.prevMonthDate=d(V(this.activeDate),this.min,this.max))}formatCalendarYear(t){return y.localize(`${B(t,this.localeData)}`)}parseCalendarYear(t){return y.localize(`${G(Number(y.delocalize(t)),this.localeData)}`)}getInRangeDate({localizedYear:t,offset:e=0}){const{min:a,max:i,activeDate:s}=this,n=Number(y.delocalize(t)),o=n.toString().length,c=isNaN(n)?!1:n+e,g=c&&(!a||a.getFullYear()<=c)&&(!i||i.getFullYear()>=c);if(c&&g&&o===t.length){const f=new Date(s);return f.setFullYear(c),d(f,a,i)}}setYear({localizedYear:t,commit:e=!0,offset:a=0}){const{yearInput:i,activeDate:s}=this,n=this.getInRangeDate({localizedYear:t,offset:a});n&&this.calciteInternalDatePickerSelect.emit(n),e&&(i.value=this.formatCalendarYear((n||s).getFullYear()))}get el(){return M(this)}static get watchers(){return{min:["setNextPrevMonthDates"],max:["setNextPrevMonthDates"],activeDate:["setNextPrevMonthDates"]}}};ye.style=pe;export{he as calcite_date_picker,ge as calcite_date_picker_day,ve as calcite_date_picker_month,ye as calcite_date_picker_month_header};
//# sourceMappingURL=calcite-date-picker_4.entry-Vhkx_6Gx.js.map
