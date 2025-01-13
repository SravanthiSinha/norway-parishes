import{r as v,c,h as l,H as w,g as I}from"./index-DDxdo46s.js";import{u as x,I as A}from"./interactive-1a42577a-DbjPRuLu.js";import{s as L,a as y,c as S}from"./loadable-13e9ffb2-Ctmw2N_A.js";import{c as E,d as F}from"./locale-60f8ca58-DdY28IjN.js";import{c as H}from"./observers-9c166451-C1vDC5xh.js";import{u as D,c as O,s as R,d as P}from"./t9n-75defee3-BiaG5015.js";import{m as z,d as V,a as T,s as B,h as U,b as M,g as _,k as j,c as N,i as $,e as m,f as q,j as u,l as K,r as G,n as W,o as Y,p as J,q as Q,L as X,I as Z,C as p,t as ee,S as g}from"./resources-9fe05a64-C_tSQ27t.js";import{d as te,c as ie}from"./sortableComponent-d3c6a806-Ct4hlH-1.js";import{b as ae,t as se,d as b}from"./dom-b6dedd88-BDpqgTl5.js";import{l as C}from"./logger-d56ad214-CcBi7IiT.js";import{c as le,d as ne}from"./conditionalSlot-167e1146-D1YXIk00.js";import{g as oe}from"./guid-9c230b6a-BxSjQh8J.js";import"./debounce-6e4946fd-CA9eFM3j.js";import"./key-3ee05994-D63ExP77.js";import"./array-2c4e379e-BMcQdnYi.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const ce={container:"container",handle:"handle"},re={grip:"grip"};function r(e,t,a){const{items:i,messages:s}=a,o=i.length,d=ee(a,e)+1,n=t==="idle"?s.dragHandleIdle:t==="active"?s.dragHandleActive:t==="change"?s.dragHandleChange:s.dragHandleCommit;return de(n,e.label,d,o)}function f(e){const t=e.composedPath().find(i=>{var s;return((s=i.dataset)==null?void 0:s.jsHandle)!==void 0}),a=e.composedPath().find(i=>{var s;return((s=i.tagName)==null?void 0:s.toLowerCase())==="calcite-value-list-item"});return{handle:t,item:a}}function de(e,t,a,i){return e.replace("{position}",a.toString()).replace("{itemLabel}",t).replace("{total}",i.toString())}const he=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-color-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:center;justify-content:flex-end;background-color:var(--calcite-color-foreground-1);--tw-shadow:0 1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-z-index-sticky)}calcite-filter{margin-block-end:1px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}",me=he;C.deprecated("component",{name:"value-list",removalVersion:3,suggested:"list"});const ue=class{constructor(e){v(this,e),this.calciteListChange=c(this,"calciteListChange",6),this.calciteListOrderChange=c(this,"calciteListOrderChange",6),this.calciteListFilter=c(this,"calciteListFilter",6),this.lastSelectedItem=null,this.mutationObserver=H("mutation",z.bind(this)),this.handleSelector=`.${ce.handle}`,this.dragSelector="calcite-value-list-item",this.setFilterEl=t=>{this.filterEl=t},this.setFilteredItems=t=>{this.filteredItems=t},this.deselectRemovedItems=V.bind(this),this.deselectSiblingItems=T.bind(this),this.selectSiblings=B.bind(this),this.handleFilter=U.bind(this),this.handleFilterEvent=M.bind(this),this.getItemData=_.bind(this),this.keyDownHandler=t=>{if(t.defaultPrevented)return;const{handle:a,item:i}=f(t);if(a&&!i.handleActivated&&t.key===" "&&this.updateScreenReaderText(r(i,"commit",this)),!a||!i.handleActivated){j.call(this,t);return}t.preventDefault();const{items:s}=this;if(t.key===" "&&this.updateScreenReaderText(r(i,"active",this)),t.key!=="ArrowUp"&&t.key!=="ArrowDown"||s.length<=1)return;const{el:o}=this,d=N(this,i,t.key==="ArrowUp"?"up":"down");if(d===s.length-1)o.appendChild(i);else{const n=o.children[d],k=n===i.nextElementSibling?n.nextElementSibling:n;o.insertBefore(i,k)}this.items=this.getItems(),this.calciteListOrderChange.emit(this.items.map(({value:n})=>n)),requestAnimationFrame(()=>ae(a)),i.handleActivated=!0,this.updateHandleAriaLabel(a,r(i,"change",this))},this.storeAssistiveEl=t=>{this.assistiveTextEl=t},this.handleFocusIn=t=>{const{handle:a,item:i}=f(t);!(i!=null&&i.handleActivated)&&i&&a&&this.updateHandleAriaLabel(a,r(i,"idle",this))},this.disabled=!1,this.canPull=void 0,this.canPut=void 0,this.dragEnabled=!1,this.filteredItems=[],this.filteredData=[],this.filterEnabled=!1,this.filterPlaceholder=void 0,this.filterText=void 0,this.group=void 0,this.loading=!1,this.multiple=!1,this.selectionFollowsFocus=!1,this.messageOverrides=void 0,this.messages=void 0,this.dataForFilter=[],this.defaultMessages=void 0,this.effectiveLocale="",this.selectedValues=new Map}onMessagesChange(){}effectiveLocaleChange(){D(this,this.effectiveLocale)}connectedCallback(){E(this),O(this),$.call(this),m.call(this),this.setUpSorting()}async componentWillLoad(){L(this),await R(this)}componentDidLoad(){y(this),q.call(this)}componentDidRender(){x(this)}disconnectedCallback(){te(this),F(this),P(this),u.call(this)}calciteListFocusOutHandler(e){K.call(this,e)}calciteListItemRemoveHandler(e){G.call(this,e)}calciteListItemChangeHandler(e){W.call(this,e)}calciteInternalListItemPropsChangeHandler(e){e.stopPropagation(),this.setUpFilter()}calciteInternalListItemValueChangeHandler(e){Y.call(this,e),e.stopPropagation()}onGlobalDragStart(){u.call(this)}onGlobalDragEnd(){m.call(this)}onDragEnd(){}onDragStart(){}onDragSort(){this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const e=this.items.map(t=>t.value);this.calciteListOrderChange.emit(e)}getItems(){return Array.from(this.el.querySelectorAll("calcite-value-list-item"))}setUpItems(){J.call(this,"calcite-value-list-item"),this.setUpSorting()}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpSorting(){const{dragEnabled:e}=this;e&&ie(this)}handleBlur(){this.dragEnabled&&this.updateScreenReaderText("")}async getSelectedItems(){return this.selectedValues}async setFocus(e){return await S(this),Q.call(this,e)}getIconType(){let e=null;return this.dragEnabled&&(e=re.grip),e}updateScreenReaderText(e){this.assistiveTextEl.textContent=e}updateHandleAriaLabel(e,t){e.ariaLabel=t}handleValueListItemBlur(e){const{item:t,handle:a}=e.detail;!(t!=null&&t.handleActivated)&&t&&this.updateHandleAriaLabel(a,r(t,"idle",this)),e.stopPropagation()}render(){return l(w,{key:"b9e38d57ffd1d2b686264d87f809e712c33c5cc5","aria-busy":se(this.loading),onBlur:this.handleBlur,onFocusin:this.handleFocusIn,onKeyDown:this.keyDownHandler,role:"menu"},l(X,{key:"18d18babe0959692bebdb17ec427b53fc4697b08",props:this}))}static get assetsDirs(){return["assets"]}get el(){return I(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};ue.style=me;const pe={drag:"drag"},h={actionsEnd:"actions-end",actionsStart:"actions-start"},ge=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin-block-end:1px;box-sizing:border-box;display:flex;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-color-text-2);--tw-shadow:0 1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}:host *{box-sizing:border-box}calcite-pick-list-item{position:relative;margin:0px;flex-grow:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([active]),:host([selected]){--tw-shadow:0 0 0 1px var(--calcite-color-brand);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.handle{display:flex;cursor:move;align-items:center;justify-content:center;border-style:none;background-color:transparent;padding-block:0px;padding-inline:0.25rem;color:var(--calcite-color-border-input);outline-color:transparent}.handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.handle--activated{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}.handle calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,be=ge;C.deprecated("component",{name:"value-list-item",removalVersion:3,suggested:"list-item"});const fe=class{constructor(e){v(this,e),this.calciteListItemChange=c(this,"calciteListItemChange",6),this.calciteListItemRemove=c(this,"calciteListItemRemove",7),this.calciteValueListItemDragHandleBlur=c(this,"calciteValueListItemDragHandleBlur",6),this.pickListItem=null,this.guid=`calcite-value-list-item-${oe()}`,this.getPickListRef=t=>this.pickListItem=t,this.handleKeyDown=t=>{t.key===" "&&(this.handleActivated=!this.handleActivated)},this.handleBlur=()=>{this.handleActivated=!1,this.calciteValueListItemDragHandleBlur.emit({item:this.el,handle:this.handleEl})},this.handleSelectChange=t=>{this.selected=t.detail.selected},this.description=void 0,this.disabled=!1,this.deselectDisabled=!1,this.nonInteractive=!1,this.handleActivated=!1,this.icon=null,this.iconFlipRtl=!1,this.label=void 0,this.metadata=void 0,this.removable=!1,this.selected=!1,this.value=void 0}connectedCallback(){le(this)}disconnectedCallback(){ne(this)}componentWillLoad(){L(this)}componentDidLoad(){y(this)}componentDidRender(){x(this)}async toggleSelected(e){this.pickListItem.toggleSelected(e)}async setFocus(){var e;return await S(this),(e=this.pickListItem)==null?void 0:e.setFocus()}calciteListItemChangeHandler(e){e.detail.item=this.el}renderActionsEnd(){const{el:e}=this;return b(e,h.actionsEnd)?l("slot",{name:h.actionsEnd,slot:g.actionsEnd}):null}renderActionsStart(){const{el:e}=this;return b(e,h.actionsStart)?l("slot",{name:h.actionsStart,slot:g.actionsStart}):null}renderHandle(){const{icon:e,iconFlipRtl:t}=this;if(e===Z.grip)return l("span",{class:{[p.handle]:!0,[p.handleActivated]:this.handleActivated},"data-js-handle":!0,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:a=>this.handleEl=a,role:"button",tabindex:"0"},l("calcite-icon",{flipRtl:t,icon:pe.drag,scale:"s"}))}render(){return l(w,{key:"2fc2a1a70b75c2a812f14391915c06c852db8906",id:this.el.id||this.guid},l(A,{key:"7bcc26a8f85923865a318dbdf31954a62035b853",disabled:this.disabled},this.renderHandle(),l("calcite-pick-list-item",{key:"abdbbafe6d426da62e39584e85111811beae719b",description:this.description,deselectDisabled:this.deselectDisabled,disabled:this.disabled,label:this.label,metadata:this.metadata,nonInteractive:this.nonInteractive,onCalciteListItemChange:this.handleSelectChange,ref:this.getPickListRef,removable:this.removable,selected:this.selected,value:this.value},this.renderActionsStart(),this.renderActionsEnd())))}get el(){return I(this)}};fe.style=be;export{ue as calcite_value_list,fe as calcite_value_list_item};
//# sourceMappingURL=calcite-value-list_2.entry-DEqwwhl4.js.map