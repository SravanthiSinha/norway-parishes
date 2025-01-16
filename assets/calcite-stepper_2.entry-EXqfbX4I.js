import{r as m,c as n,h as s,H as u,b as k,g as b}from"./index-D2fbPmv2.js";import{s as C,h as p}from"./dom-b6dedd88-Dk1sfn4T.js";import{c as w}from"./observers-9c166451-PYokh1sc.js";import{g as A}from"./guid-9c230b6a-BxSjQh8J.js";import{c as g,d as f,n as h}from"./locale-60f8ca58-CVKTHQMt.js";import{c as y,s as v,d as I,u as z}from"./t9n-75defee3-mhlcIuV_.js";import{u as P,I as E}from"./interactive-1a42577a-q2XeVP2J.js";import{s as L,a as D,c as M}from"./loadable-13e9ffb2-FT_pyice.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const d={actionIcon:"action-icon",actionIconStart:"action-icon--start",actionIconEnd:"action-icon--end",actionContainer:"action-container",stepBarContainer:"step-bar-container",singleView:"single-view"},l={stepBar:"step-bar",stepBarActive:"step-bar--active",stepBarComplete:"step-bar--complete",stepBarDisabled:"step-bar--disabled",stepBarError:"step-bar--error",stepBarInActive:"step-bar--inactive"},R=({disabled:e,active:t,complete:i,error:o,key:r})=>s("svg",{class:{[l.stepBar]:!0},key:r},s("rect",{class:{[l.stepBarActive]:t,[l.stepBarComplete]:i,[l.stepBarDisabled]:e,[l.stepBarError]:o,[l.stepBarInActive]:!0},width:"100%",x:"0",y:"0"})),H=':host([scale=s]){--calcite-internal-stepper-item-spacing-unit-s:0.25rem;--calcite-internal-stepper-action-block-size:2.75rem;--calcite-internal-stepper-action-inline-size:2rem;--calcite-internal-step-bar-gap:0.25rem}:host([scale=m]){--calcite-internal-stepper-item-spacing-unit-s:0.5rem;--calcite-internal-stepper-action-block-size:3.25rem;--calcite-internal-stepper-action-inline-size:2.5rem}:host([scale=l]){--calcite-internal-stepper-item-spacing-unit-s:0.75rem;--calcite-internal-stepper-action-block-size:4rem;--calcite-internal-stepper-action-inline-size:3rem;--calcite-internal-step-bar-gap:0.75rem}:host{display:flex}.container{position:relative;display:flex;inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content;flex-direction:row;flex-wrap:wrap;align-items:stretch;justify-content:space-between}:host([layout=vertical]) .container{flex:1 1 auto;flex-direction:column}:host([layout=horizontal]) .container,:host([layout=horizontal-single]) .container{display:grid;grid-template-areas:"items" "content";gap:0.5rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal][scale=s]) .container,:host([layout=horizontal-single][scale=s]) .container{gap:0.25rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal][scale=l]) .container,:host([layout=horizontal-single][scale=l]) .container{gap:0.75rem var(--calcite-internal-stepper-item-spacing-unit-s)}:host([layout=horizontal]) .container.single-view{display:flex;grid-template-columns:none}.action-icon{position:relative;display:flex;flex-grow:0;block-size:var(--calcite-internal-stepper-action-block-size);inline-size:var(--calcite-internal-stepper-action-inline-size)}.action-container{position:absolute;display:flex;justify-content:space-between;padding-block:0.25rem;inline-size:100%}.step-bar{display:flex;block-size:100%;inline-size:100%}.step-bar-container{position:absolute;display:flex;align-items:flex-start;justify-content:space-between;block-size:0.125rem;inline-size:100%;gap:var(--calcite-internal-step-bar-gap, 0.5rem)}.step-bar--inactive{fill:var(--calcite-color-border-3, #dfdfdf);fill-opacity:1;block-size:100%}.step-bar--active{fill:var(--calcite-color-brand)}.step-bar--complete{fill:var(--calcite-color-brand);fill-opacity:0.5}.step-bar--error{fill:var(--calcite-color-status-danger)}.step-bar--disabled{opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}',B=H,F=class{constructor(e){m(this,e),this.calciteStepperChange=n(this,"calciteStepperChange",6),this.calciteStepperItemChange=n(this,"calciteStepperItemChange",6),this.calciteInternalStepperItemChange=n(this,"calciteInternalStepperItemChange",6),this.enabledItems=[],this.itemMap=new Map,this.items=[],this.mutationObserver=w("mutation",()=>this.updateItems()),this.multipleViewMode=!1,this.guid=`calcite-stepper-action-${A()}`,this.handleActionClick=t=>{const i=this.currentActivePosition;t.target.getAttribute("data-position")==="start"?this.prevStep():this.nextStep(),typeof this.currentActivePosition=="number"&&i!==this.currentActivePosition&&!this.items[this.currentActivePosition].disabled&&this.emitItemSelect()},this.setContainerEl=t=>{this.containerEl=t},this.handleDefaultSlotChange=t=>{const i=C(t).filter(r=>(r==null?void 0:r.tagName)==="CALCITE-STEPPER-ITEM");this.items=i;const o=Array(i.length).fill("1fr").join(" ");this.containerEl.style.gridTemplateAreas=o,this.containerEl.style.gridTemplateColumns=o,this.setStepperItemNumberingSystem()},this.icon=!1,this.layout="horizontal",this.numbered=!1,this.scale="m",this.messages=void 0,this.numberingSystem=void 0,this.selectedItem=null,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.currentActivePosition=void 0}handleItemPropChange(){this.updateItems(),this.determineActiveStepper()}numberingSystemChange(){this.setStepperItemNumberingSystem()}onMessagesChange(){}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.updateItems(),y(this),g(this)}async componentWillLoad(){await v(this)}componentDidLoad(){if(typeof this.currentActivePosition!="number"){const e=this.getFirstEnabledStepperPosition();e===0&&(this.currentActivePosition=e),this.calciteInternalStepperItemChange.emit({position:e})}}disconnectedCallback(){var e;I(this),f(this),(e=this.mutationObserver)==null||e.disconnect()}render(){return s(u,{key:"cf7174442aa44f3a2bd72893900a60bcbf7e1d5e","aria-label":this.messages.label,role:"region"},s("div",{key:"1036b66baff637f74ca2296c725f8ec091955c55",class:{container:!0,[d.singleView]:this.layout==="horizontal-single"},ref:this.setContainerEl},this.layout==="horizontal-single"&&s("div",{key:"2ebc80f63ea8938538630181ac165712ce645b69",class:{[d.stepBarContainer]:!0}},this.items.map((e,t)=>s(R,{active:t===this.currentActivePosition,complete:e.complete&&t!==this.currentActivePosition&&!e.error,disabled:e.disabled&&t!==this.currentActivePosition,error:e.error&&t!==this.currentActivePosition,key:t}))),this.layout==="horizontal-single"&&s("div",{key:"c471f0b44071da745850a7a5910894f27eccce02",class:{[d.actionContainer]:!0}},this.renderAction("start"),this.renderAction("end")),s("slot",{key:"d7f6599abe59d4ed86e0deefe991a3556fe3e270",onSlotchange:this.handleDefaultSlotChange})))}calciteInternalStepperItemKeyEvent(e){const t=e.detail.item,i=e.target;switch(t.key){case"ArrowDown":case"ArrowRight":p(this.enabledItems,i,"next");break;case"ArrowUp":case"ArrowLeft":p(this.enabledItems,i,"previous");break;case"Home":p(this.enabledItems,i,"first");break;case"End":p(this.enabledItems,i,"last");break}e.stopPropagation()}registerItem(e){const t=e.target,{content:i,position:o}=e.detail;this.itemMap.set(t,{position:o,content:i}),this.enabledItems=this.filterItems(),e.stopPropagation()}updateItem(e){const{position:t}=e.detail;typeof t=="number"&&(this.currentActivePosition=t,this.selectedItem=e.target),this.calciteInternalStepperItemChange.emit({position:t})}handleItemSelect(){this.emitItemSelect()}async nextStep(){const e=this.getEnabledStepIndex(this.currentActivePosition+1,"next");typeof e=="number"&&this.updateStep(e)}async prevStep(){const e=this.getEnabledStepIndex(this.currentActivePosition-1,"previous");typeof e=="number"&&this.updateStep(e)}async goToStep(e){const t=e-1;this.currentActivePosition!==t&&this.updateStep(t)}async startStep(){const e=this.getEnabledStepIndex(0,"next");typeof e=="number"&&this.updateStep(e)}async endStep(){const e=this.getEnabledStepIndex(this.items.length-1,"previous");typeof e=="number"&&this.updateStep(e)}effectiveLocaleChange(){z(this,this.effectiveLocale)}handlePositionChange(){k(()=>{this.determineActiveStepper()})}emitItemSelect(){this.calciteStepperItemChange.emit(),this.calciteStepperChange.emit()}updateItems(){this.el.querySelectorAll("calcite-stepper-item").forEach(e=>{e.icon=this.icon,e.numbered=this.numbered,e.layout=this.layout,e.scale=this.scale})}determineActiveStepper(){const{items:e}=this;if(e.length<2)return;const{currentActivePosition:t,layout:i}=this;this.multipleViewMode=i!=="horizontal-single",e.forEach((o,r)=>{o.hidden=i==="horizontal-single"&&r!==(t||0)})}getEnabledStepIndex(e,t="next"){var c;const{items:i,currentActivePosition:o}=this;let r=e;for(;(c=i[r])!=null&&c.disabled&&this.layout!=="horizontal-single";)r=r+(t==="previous"?-1:1);return r!==o&&r<i.length&&r>=0?r:null}updateStep(e){this.currentActivePosition=e,this.calciteInternalStepperItemChange.emit({position:e})}filterItems(){return this.items.filter(e=>!e.disabled)}setStepperItemNumberingSystem(){this.items.forEach(e=>{e.numberingSystem=this.numberingSystem})}renderAction(e){const t=e==="start",i=t?"chevron-left":"chevron-right",{currentActivePosition:o,multipleViewMode:r,layout:c}=this,S=this.items.length,x=`${this.guid}-${t?"start":"end"}`;return c==="horizontal-single"&&!r?s("calcite-action",{alignment:"center",appearance:"transparent",class:{[d.actionIcon]:!0},compact:!0,"data-position":e,disabled:o===0&&t||o===S-1&&!t,icon:i,iconFlipRtl:!0,id:x,onClick:this.handleActionClick,scale:this.scale,text:t?this.messages.previousStep:this.messages.nextStep}):null}getFirstEnabledStepperPosition(){const e=this.items.findIndex(t=>!t.disabled);return e>-1?e:0}static get assetsDirs(){return["assets"]}get el(){return b(this)}static get watchers(){return{icon:["handleItemPropChange"],layout:["handleItemPropChange"],numbered:["handleItemPropChange"],scale:["handleItemPropChange"],numberingSystem:["numberingSystemChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],currentActivePosition:["handlePositionChange"]}}};F.style=B;const a={container:"container",stepperItemContent:"stepper-item-content",stepperItemDescription:"stepper-item-description",stepperItemHeader:"stepper-item-header",stepperItemHeading:"stepper-item-heading",stepperItemHeaderText:"stepper-item-header-text",stepperItemNumber:"stepper-item-number",visuallyHidden:"visually-hidden"},O=`:host([layout=horizontal][disabled]) .stepper-item-header,:host([layout=horizontal-single][disabled]) .stepper-item-header,:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([layout=horizontal][disabled]) .stepper-item-header *,:host([layout=horizontal-single][disabled]) .stepper-item-header *,:host([disabled]) *,:host([layout=horizontal][disabled]) .stepper-item-header ::slotted(*),:host([layout=horizontal-single][disabled]) .stepper-item-header ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1rem;--calcite-internal-stepper-action-inline-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-inline-end:0.25rem}:host([scale=s]) .stepper-item-description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.5rem;--calcite-stepper-item-spacing-unit-m:1rem;--calcite-stepper-item-spacing-unit-l:1.25rem;--calcite-internal-stepper-action-inline-size:2.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-inline-end:0.5rem}:host([scale=m]) .stepper-item-description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.75rem;--calcite-stepper-item-spacing-unit-m:1.25rem;--calcite-stepper-item-spacing-unit-l:1.5rem;--calcite-internal-stepper-action-inline-size:3rem;font-size:var(--calcite-font-size-1);line-height:1.5rem;margin-inline-end:0.75rem}:host([scale=l]) .stepper-item-description{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:flex;flex-grow:1;flex-direction:column;align-self:flex-start;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host .container{position:relative;display:flex;flex-grow:1;cursor:pointer;flex-direction:column;border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-color-border-3);color:var(--calcite-color-text-3);text-decoration-line:none;outline:2px solid transparent;outline-offset:2px}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host .stepper-item-header{display:flex;cursor:pointer;align-items:flex-start}:host .stepper-item-content,:host .stepper-item-header{padding-block:var(--calcite-stepper-item-spacing-unit-l);padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host .stepper-item-header *{display:inline-flex;align-items:center}:host .stepper-item-content{display:none;inline-size:100%;flex-direction:column;font-size:var(--calcite-font-size--2);line-height:1.375}:host .stepper-item-icon{margin-inline-end:var(--calcite-stepper-item-spacing-unit-m);margin-block-start:1px;display:inline-flex;block-size:0.75rem;flex-shrink:0;align-self:flex-start;color:var(--calcite-color-text-3);opacity:var(--calcite-opacity-disabled)}:host .stepper-item-header-text{flex-direction:column;text-align:initial;margin-inline-end:auto}:host .stepper-item-heading,:host .stepper-item-description{display:flex;inline-size:100%}:host .stepper-item-heading{margin-block-end:0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}:host .stepper-item-description{color:var(--calcite-color-text-3)}:host .stepper-item-number{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-3);margin-inline-end:var(--calcite-stepper-item-spacing-unit-m)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([complete]) .container .stepper-item-icon{color:var(--calcite-color-brand)}:host([error]) .container{border-block-start-color:var(--calcite-color-status-danger)}:host([error]) .container .stepper-item-number{color:var(--calcite-color-status-danger)}:host([error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-color-status-danger)}:host(:hover:not([disabled]):not([selected])) .container,:host(:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-color-brand)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-heading,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-heading{color:var(--calcite-color-text-1)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-description,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-description{color:var(--calcite-color-text-2)}:host([error]:hover:not([disabled]):not([selected])) .container,:host([error]:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-color-status-danger-hover)}:host([selected]) .container{border-block-start-color:var(--calcite-color-brand)}:host([selected]) .container .stepper-item-heading{color:var(--calcite-color-text-1)}:host([selected]) .container .stepper-item-description{color:var(--calcite-color-text-2)}:host([selected]) .container .stepper-item-number{color:var(--calcite-color-brand)}:host([selected]) .container .stepper-item-icon{color:var(--calcite-color-brand);opacity:1}:host([selected]) .container .stepper-item-content{display:flex}:host([layout=vertical]){inline-size:100%}:host([layout=vertical]) .container{margin-inline:0px;margin-block-start:0px;flex:1 1 auto;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);padding-block:0px;border-inline-start-width:2px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .container .stepper-item-icon{order:3;margin-block:1px 0px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-s);margin-inline-start:auto}:host([layout=vertical]) .container .stepper-item-header{padding-inline-end:0px}:host([layout=vertical]) .container .stepper-item-content{padding:0px}:host([layout=vertical][complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][complete]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][complete]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-color-brand)}:host([layout=vertical][error]) .container{border-color:var(--calcite-color-status-danger)}:host([layout=vertical][selected]) .container{border-color:var(--calcite-color-brand)}:host([layout=vertical][selected]) .container .stepper-item-content:not(:empty){margin-block-end:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical]:focus:not([disabled]):not([selected])) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][error]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-color-status-danger-hover)}:host([layout=horizontal]),:host([layout=horizontal-single]){display:contents}:host([layout=horizontal]) .container,:host([layout=horizontal-single]) .container{display:contents}:host([layout=horizontal]) .stepper-item-header,:host([layout=horizontal-single]) .stepper-item-header{border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-color-border-3);outline-color:transparent;grid-row:items}:host([layout=horizontal]) .stepper-item-header:focus,:host([layout=horizontal-single]) .stepper-item-header:focus{transition-duration:0s;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([layout=horizontal]) .stepper-item-content,:host([layout=horizontal-single]) .stepper-item-content{cursor:auto;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:0;padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host([layout=horizontal-single]) .stepper-item-header{grid-area:1/1/1/-1}:host([layout=horizontal]) .stepper-item-content,:host([layout=horizontal-single]) .stepper-item-content{grid-area:2/1/2/-1}:host([layout=horizontal][complete]) .stepper-item-header,:host([layout=horizontal-single][complete]) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][complete]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][complete]:focus:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][complete]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][complete]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-color-brand)}:host([layout=horizontal][error]) .stepper-item-header,:host([layout=horizontal-single][error]) .stepper-item-header{border-color:var(--calcite-color-status-danger)}:host([layout=horizontal][selected]) .stepper-item-header,:host([layout=horizontal-single][selected]) .stepper-item-header{border-color:var(--calcite-color-brand)}:host([layout=horizontal]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal]:focus:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][error]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][error]:focus:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][error]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal-single][error]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-color-status-danger-hover)}@media (forced-colors: active){:host .container{outline-width:0;outline-offset:0}:host(:focus),:host(:focus-visible){outline-color:canvasText}:host([selected]) .container{border-block-start-color:highlight}:host([selected]) .container .stepper-item-number{color:highlight}:host([selected]) .container .stepper-item-icon{color:highlight}:host([layout=vertical][selected]) .container{border-color:highlight}}:host([layout=horizontal-single]) .stepper-item-header{margin-inline-end:0px;box-sizing:border-box;border-style:none;inline-size:100%;padding-inline:calc(var(--calcite-internal-stepper-action-inline-size) + 0.5rem)}:host([layout=horizontal-single][error]) .container .stepper-item-number{color:var(--calcite-color-status-danger)}:host([layout=horizontal-single][error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-color-status-danger)}:host([layout=horizontal-single][error][selected]),:host([layout=horizontal-single][complete][selected]) .container{color:var(--calcite-color-text-3)}:host([layout=horizontal-single][error][selected]) .stepper-item-heading,:host([layout=horizontal-single][complete][selected]) .container .stepper-item-heading{color:var(--calcite-color-text-2)}:host([layout=horizontal-single][complete][selected]) .container .stepper-item-icon{opacity:var(--calcite-opacity-disabled)}:host([layout=horizontal-single][complete][selected]) .container .stepper-item-number{color:var(--calcite-color-text-3)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`,T=O,q=class{constructor(e){m(this,e),this.calciteInternalStepperItemKeyEvent=n(this,"calciteInternalStepperItemKeyEvent",6),this.calciteInternalStepperItemSelect=n(this,"calciteInternalStepperItemSelect",6),this.calciteInternalStepperItemRegister=n(this,"calciteInternalStepperItemRegister",6),this.calciteStepperItemSelect=n(this,"calciteStepperItemSelect",6),this.keyDownHandler=t=>{if(!this.disabled&&t.target===this.el)switch(t.key){case" ":case"Enter":this.emitUserRequestedItem(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"Home":case"End":this.calciteInternalStepperItemKeyEvent.emit({item:t}),t.preventDefault();break}},this.handleItemClick=t=>{this.disabled||this.layout==="horizontal"&&t.composedPath().some(i=>{var o;return(o=i.classList)==null?void 0:o.contains("stepper-item-content")})||this.emitUserRequestedItem()},this.emitUserRequestedItem=()=>{this.emitRequestedItem(),this.disabled||this.calciteStepperItemSelect.emit()},this.emitRequestedItem=()=>{if(!this.disabled){const t=this.itemPosition;this.calciteInternalStepperItemSelect.emit({position:t})}},this.selected=!1,this.complete=!1,this.error=!1,this.disabled=!1,this.heading=void 0,this.description=void 0,this.iconFlipRtl=!1,this.numberingSystem=void 0,this.icon=!1,this.layout=void 0,this.messages=void 0,this.numbered=!1,this.scale="m",this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}selectedHandler(){this.selected&&this.emitRequestedItem()}disabledWatcher(){this.registerStepperItem()}onMessagesChange(){}effectiveLocaleWatcher(e){h.numberFormatOptions={locale:e,numberingSystem:this.numberingSystem,useGrouping:!1},z(this,this.effectiveLocale)}connectedCallback(){g(this),y(this)}async componentWillLoad(){L(this),this.parentStepperEl=this.el.parentElement,this.itemPosition=this.getItemPosition(),this.registerStepperItem(),this.selected&&this.emitRequestedItem(),await v(this)}componentDidLoad(){D(this)}componentDidRender(){P(this)}disconnectedCallback(){f(this),I(this)}render(){return s(u,{key:"21ead444066e7670e2884bf44eb33b1d6e16278e","aria-current":this.selected?"step":"false",onClick:this.handleItemClick,onKeyDown:this.keyDownHandler,tabIndex:this.disabled?-1:0},s(E,{key:"5d687fcf0ca63a518df6ac408bce87adb8cf4141",disabled:this.disabled},s("div",{key:"a8eb28baf17f7d302cd8acc06c87432c2a5b59da",class:a.container},this.complete&&s("span",{key:"dd645ac0548cfb09daa4cb36d4ca08f7f3df67bf","aria-live":"polite",class:a.visuallyHidden},this.messages.complete),s("div",{key:"6c14bec4509a8b48e08f3d140e852ce6441a7418",class:a.stepperItemHeader,ref:e=>this.headerEl=e,tabIndex:this.layout==="horizontal"&&!this.disabled?0:null},this.icon?this.renderIcon():null,this.numbered?s("div",{class:a.stepperItemNumber},this.renderNumbers(),"."):null,s("div",{key:"49ebae3bd3affcdf6d68581e89d8a7c65b8606a6",class:a.stepperItemHeaderText},s("span",{key:"523fbb51267df84902a47ccd4b2c047b52e7df07",class:a.stepperItemHeading},this.heading),s("span",{key:"f6c4f69b00a5e5d9f52089156ec77adecc1bdffc",class:a.stepperItemDescription},this.description))),s("div",{key:"086f0f9320d3098de87d1e9f3728164a83caf35d",class:a.stepperItemContent},s("slot",{key:"8e049fb74154fbce4d685d4d00ebca9b3ff57f63"})))))}updateActiveItemOnChange(e){(e.target===this.parentStepperEl||e.composedPath().includes(this.parentStepperEl))&&(this.selectedPosition=e.detail.position,this.determineSelectedItem())}async setFocus(){var e;await M(this),(e=this.layout==="vertical"?this.el:this.headerEl)==null||e.focus()}renderIcon(){let e="circle";return this.selected&&(this.layout!=="horizontal-single"||!this.error&&!this.complete)?e="circleF":this.error?e="exclamationMarkCircleF":this.complete&&(e="checkCircleF"),s("calcite-icon",{class:"stepper-item-icon",flipRtl:this.iconFlipRtl,icon:e,scale:"s"})}determineSelectedItem(){this.selected=!this.disabled&&this.itemPosition===this.selectedPosition}registerStepperItem(){this.calciteInternalStepperItemRegister.emit({position:this.itemPosition})}getItemPosition(){var e;return Array.from((e=this.parentStepperEl)==null?void 0:e.querySelectorAll("calcite-stepper-item")).indexOf(this.el)}renderNumbers(){return h.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:!1},h.numberFormatter.format(this.itemPosition+1)}static get assetsDirs(){return["assets"]}get el(){return b(this)}static get watchers(){return{selected:["selectedHandler"],disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleWatcher"]}}};q.style=T;export{F as calcite_stepper,q as calcite_stepper_item};
//# sourceMappingURL=calcite-stepper_2.entry-EXqfbX4I.js.map
