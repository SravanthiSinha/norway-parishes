import{r as F,c as p,h as s,g as D,H as z,i as Z}from"./index-oLM2nnvm.js";import{a as b,t as k,G as P,g as ee}from"./dom-b6dedd88-BfFKwqPw.js";import{u as A,I as w}from"./interactive-1a42577a-DoGXgS68.js";import{c as te}from"./observers-9c166451-RY0zwU7I.js";import{d as ne,c as ie}from"./sortableComponent-d3c6a806-Ct4hlH-1.js";import{S as O}from"./resources-712f69f4-6IkRkr2k.js";import{s as R,a as B,c as N}from"./loadable-13e9ffb2-DpqGnmfk.js";import{c as G,s as U,d as _,u as K}from"./t9n-75defee3-DsjGKp2X.js";import{c as $,d as q,n as T}from"./locale-60f8ca58-CL_pVefT.js";import{d as se}from"./debounce-6e4946fd-CA9eFM3j.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const h={wrapper:"wrapper",wrapperBordered:"wrapper--bordered",container:"container",containerHover:"container--hover",containerBorder:"container--border",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerUnavailable:"content-container--unavailable",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerOpen:"nested-container--open",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",contentBottom:"content-bottom",actionsEnd:"actions-end",selectionContainer:"selection-container",selectionContainerSingle:"selection-container--single",openContainer:"open-container",dragContainer:"drag-container",close:"close"},S={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentBottom:"content-bottom",contentEnd:"content-end",actionsEnd:"actions-end"},j=0,C={selectedMultiple:"check-square-f",selectedSingle:"bullet-point-large",unselectedMultiple:"square",unselectedSingle:"bullet-point-large",closedLTR:"chevron-right",closedRTL:"chevron-left",open:"chevron-down",blank:"blank",close:"x"},M="data-test-active",W="calcite-list",ae="calcite-list-item-group",y="calcite-list-item";function le(t){return Array.from(t.assignedElements({flatten:!0}).filter(e=>e.matches(W)))}function X(t){const e=t.assignedElements({flatten:!0}),n=e.filter(a=>a==null?void 0:a.matches(ae)).map(a=>Array.from(a.querySelectorAll(y))).reduce((a,l)=>[...a,...l],[]),i=e.filter(a=>a==null?void 0:a.matches(y));return[...e.filter(a=>a==null?void 0:a.matches(W)).map(a=>Array.from(a.querySelectorAll(y))).reduce((a,l)=>[...a,...l],[]),...n,...i]}function Y(t){t.forEach(e=>{e.setPosition=t.indexOf(e)+1,e.setSize=t.length})}function oe(t,e=!1){if(!Z())return 0;const n=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(n,t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}const I={container:"container",table:"table",scrim:"scrim",stack:"stack",tableContainer:"table-container",sticky:"sticky-pos",assistiveText:"assistive-text"},ce=0,E={filterNoResults:"filter-no-results",filterActionsStart:"filter-actions-start",filterActionsEnd:"filter-actions-end"},re=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{position:relative}.table-container{box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%;border-collapse:collapse}.stack{--calcite-stack-padding-inline:0;--calcite-stack-padding-block:0}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-z-index-sticky);background-color:var(--calcite-color-foreground-1)}.sticky-pos th{padding:0px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}",de=re,v="calcite-list-item",he="calcite-list-item-group, calcite-list-item",fe=class{constructor(t){F(this,t),this.calciteListChange=p(this,"calciteListChange",6),this.calciteListDragEnd=p(this,"calciteListDragEnd",6),this.calciteListDragStart=p(this,"calciteListDragStart",6),this.calciteListFilter=p(this,"calciteListFilter",6),this.calciteListOrderChange=p(this,"calciteListOrderChange",6),this.calciteInternalListDefaultSlotChange=p(this,"calciteInternalListDefaultSlotChange",6),this.dragSelector=v,this.focusableItems=[],this.handleSelector="calcite-handle",this.listItems=[],this.mutationObserver=te("mutation",()=>this.updateListItems({performFilter:!0})),this.visibleItems=[],this.handleDefaultSlotChange=e=>{Y(X(e.target)),this.parentListEl&&this.calciteInternalListDefaultSlotChange.emit()},this.handleFilterActionsStartSlotChange=e=>{this.hasFilterActionsStart=b(e)},this.handleFilterActionsEndSlotChange=e=>{this.hasFilterActionsEnd=b(e)},this.handleFilterNoResultsSlotChange=e=>{this.hasFilterNoResults=b(e)},this.setActiveListItem=()=>{const{focusableItems:e}=this;e.some(n=>n.active)||e[0]&&(e[0].active=!0)},this.updateSelectedItems=(e=!1)=>{this.selectedItems=this.visibleItems.filter(n=>n.selected),e&&this.calciteListChange.emit()},this.borderItems=()=>{const e=this.visibleItems.filter(n=>!n.filterHidden&&this.allParentListItemsOpen(n));e.forEach(n=>n.bordered=n!==e[e.length-1])},this.updateFilteredItems=(e=!1)=>{const{visibleItems:n,filteredData:i,filterText:o}=this,a=i.map(c=>c.value),l=n==null?void 0:n.filter(c=>n.every(f=>f===c||!c.contains(f))),r=n.filter(c=>!o||a.includes(c.value))||[],u=new WeakSet;l.forEach(c=>this.filterElements({el:c,filteredItems:r,visibleParents:u})),this.filteredItems=r,e&&this.calciteListFilter.emit()},this.setFilterEl=e=>{this.filterEl=e,this.performFilter()},this.handleFilterChange=e=>{e.stopPropagation();const{value:n}=e.currentTarget;this.filterText=n,this.updateFilteredData(!0)},this.getItemData=()=>this.listItems.map(e=>({label:e.label,description:e.description,metadata:e.metadata,value:e.value})),this.updateListItems=se(e=>{const n=(e==null?void 0:e.emitFilterChange)??!1,i=(e==null?void 0:e.performFilter)??!1,{selectionAppearance:o,selectionMode:a,dragEnabled:l,el:r,filterEl:u,filterEnabled:c}=this,f=Array.from(this.el.querySelectorAll(v));if(f.forEach(d=>{d.selectionAppearance=o,d.selectionMode=a,d.closest("calcite-list")===r&&(d.dragHandle=l)}),this.parentListEl){this.setUpSorting();return}this.listItems=f,c&&i&&(this.dataForFilter=this.getItemData(),u&&(u.items=this.dataForFilter,this.filterAndUpdateData())),this.visibleItems=this.listItems.filter(d=>!d.closed&&!d.hidden),this.updateFilteredItems(n),this.borderItems(),this.focusableItems=this.filteredItems.filter(d=>!d.disabled),this.setActiveListItem(),this.updateSelectedItems(),this.setUpSorting()},ce),this.focusRow=e=>{const{focusableItems:n}=this;e&&(n.forEach(i=>i.active=i===e),e.setFocus())},this.isNavigable=e=>{var i;const n=(i=e.parentElement)==null?void 0:i.closest(v);return n?n.open&&this.isNavigable(n):!0},this.handleListKeydown=e=>{var a;if(e.defaultPrevented||this.parentListEl)return;const{key:n}=e,i=this.focusableItems.filter(l=>this.isNavigable(l)),o=i.findIndex(l=>l.active);if(n==="ArrowDown"){e.preventDefault();const l=e.target===this.filterEl?0:o+1;i[l]&&this.focusRow(i[l])}else if(n==="ArrowUp"){if(e.preventDefault(),o===0&&this.filterEnabled){(a=this.filterEl)==null||a.setFocus();return}const l=o-1;i[l]&&this.focusRow(i[l])}else if(n==="Home"){e.preventDefault();const l=i[0];l&&this.focusRow(l)}else if(n==="End"){e.preventDefault();const l=i[i.length-1];l&&this.focusRow(l)}},this.disabled=!1,this.canPull=void 0,this.canPut=void 0,this.dragEnabled=!1,this.group=void 0,this.filterEnabled=!1,this.filteredItems=[],this.filteredData=[],this.filterPlaceholder=void 0,this.filterText=void 0,this.label=void 0,this.loading=!1,this.filterProps=void 0,this.messageOverrides=void 0,this.messages=void 0,this.numberingSystem=void 0,this.openable=!1,this.selectedItems=[],this.selectionMode="none",this.selectionAppearance="icon",this.effectiveLocale="",this.defaultMessages=void 0,this.assistiveText=void 0,this.dataForFilter=[],this.hasFilterActionsEnd=!1,this.hasFilterActionsStart=!1,this.hasFilterNoResults=!1}async handleFilterTextChange(){this.performFilter()}async handleFilterPropsChange(){this.performFilter()}onMessagesChange(){}handleListItemChange(){this.updateListItems({performFilter:!0})}handleCalciteListItemToggle(t){this.parentListEl||(t.stopPropagation(),this.borderItems())}handleCalciteInternalFocusPreviousItem(t){if(this.parentListEl)return;t.stopPropagation();const{focusableItems:e}=this,i=e.findIndex(o=>o.active)-1;e[i]&&this.focusRow(e[i])}handleCalciteInternalListItemActive(t){if(this.parentListEl)return;t.stopPropagation();const e=t.target,{listItems:n}=this;n.forEach(i=>{i.active=i===e})}handleCalciteListItemSelect(){this.parentListEl||this.updateSelectedItems(!0)}handleCalciteInternalAssistiveTextChange(t){this.assistiveText=t.detail.message,t.stopPropagation()}handleCalciteHandleNudge(t){this.parentListEl||this.handleNudgeEvent(t)}handleCalciteInternalListItemSelect(t){if(this.parentListEl)return;t.stopPropagation();const e=t.target,{listItems:n,selectionMode:i}=this;e.selected&&(i==="single"||i==="single-persist")&&n.forEach(o=>o.selected=o===e),this.updateSelectedItems()}handleCalciteInternalListItemSelectMultiple(t){if(this.parentListEl)return;t.stopPropagation();const{target:e,detail:n}=t,{focusableItems:i,lastSelectedInfo:o}=this,a=e;if(n.selectMultiple&&o){const l=i.indexOf(a),r=i.indexOf(o.selectedItem),u=Math.min(r,l),c=Math.max(r,l);i.slice(u,c+1).forEach(f=>f.selected=o.selected)}else this.lastSelectedInfo={selectedItem:a,selected:a.selected}}handleCalciteInternalListItemChange(t){this.parentListEl||(t.stopPropagation(),this.updateListItems())}handleCalciteInternalListItemGroupDefaultSlotChange(t){t.stopPropagation()}connectedCallback(){$(this),G(this),this.connectObserver(),this.updateListItems({performFilter:!0}),this.setUpSorting(),this.setParentList()}async componentWillLoad(){R(this),await U(this)}componentDidRender(){A(this)}componentDidLoad(){B(this)}disconnectedCallback(){this.disconnectObserver(),ne(this),q(this),_(this)}effectiveLocaleChange(){K(this,this.effectiveLocale)}async setFocus(){var t,e;return await N(this),this.filterEnabled?(t=this.filterEl)==null?void 0:t.setFocus():(e=this.focusableItems.find(n=>n.active))==null?void 0:e.setFocus()}render(){const{loading:t,label:e,disabled:n,dataForFilter:i,filterEnabled:o,filterPlaceholder:a,filterText:l,filteredItems:r,hasFilterActionsStart:u,hasFilterActionsEnd:c,hasFilterNoResults:f,filterProps:d}=this;return s(w,{key:"c3139afe4fe7c7462578a51a4578971c97473167",disabled:this.disabled},s("div",{key:"5e99dc8b479c35609c5f0318723b3da84ec23ef4",class:I.container},this.dragEnabled?s("span",{"aria-live":"assertive",class:I.assistiveText},this.assistiveText):null,this.renderItemAriaLive(),t?s("calcite-scrim",{class:I.scrim,loading:t}):null,s("table",{key:"a31ba050d3141351e491141365e8244ed3ca5303","aria-busy":k(t),"aria-label":e||"",class:I.table,onKeyDown:this.handleListKeydown,role:"treegrid"},o||u||c?s("thead",{class:I.sticky},s("tr",null,s("th",{colSpan:j},s("calcite-stack",{class:I.stack},s("slot",{name:E.filterActionsStart,onSlotchange:this.handleFilterActionsStartSlotChange,slot:O.actionsStart}),s("calcite-filter",{"aria-label":a,disabled:n,filterProps:d,items:i,onCalciteFilterChange:this.handleFilterChange,placeholder:a,ref:this.setFilterEl,value:l}),s("slot",{name:E.filterActionsEnd,onSlotchange:this.handleFilterActionsEndSlotChange,slot:O.actionsEnd}))))):null,s("tbody",{key:"3ed1b8d9a4387c3ea0f4ff38e5388be35b32d89b",class:I.tableContainer},s("slot",{key:"712562533b4609749cbff0968bd0a9e77d99758e",onSlotchange:this.handleDefaultSlotChange}))),s("div",{key:"3ff977013e0ca0d58229e1305dca702000d91a99","aria-live":"polite","data-test-id":"no-results-container",hidden:!(f&&o&&l&&!r.length)},s("slot",{key:"7c2bf6389c8b5f4b6f617950e4068baf6b1dc358",name:E.filterNoResults,onSlotchange:this.handleFilterNoResultsSlotChange}))))}renderItemAriaLive(){const{messages:t,filteredItems:e,parentListEl:n,effectiveLocale:i,numberingSystem:o,filterEnabled:a,filterText:l,filteredData:r}=this;return T.numberFormatOptions={locale:i,numberingSystem:o},n?null:s("div",{"aria-live":"polite",class:I.assistiveText},a&&l&&(r!=null&&r.length)?s("div",{key:"aria-filter-enabled"},t.filterEnabled):null,s("div",{key:"aria-item-count"},t.total.replace("{count}",T.localize(e.length.toString()))),e.length?s("ol",{key:"aria-item-list"},e.map(u=>s("li",null,u.label))):null)}connectObserver(){var t;(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0})}disconnectObserver(){var t;(t=this.mutationObserver)==null||t.disconnect()}setUpSorting(){const{dragEnabled:t}=this;t&&ie(this)}onGlobalDragStart(){this.disconnectObserver()}onGlobalDragEnd(){this.connectObserver()}onDragEnd(t){this.calciteListDragEnd.emit(t)}onDragStart(t){this.calciteListDragStart.emit(t)}onDragSort(t){this.setParentList(),this.updateListItems(),this.calciteListOrderChange.emit(t)}setParentList(){var t;this.parentListEl=(t=this.el.parentElement)==null?void 0:t.closest("calcite-list")}filterElements({el:t,filteredItems:e,visibleParents:n}){const i=!n.has(t)&&!e.includes(t);t.filterHidden=i;const o=t.parentElement.closest(he);o&&(i||n.add(o),this.filterElements({el:o,filteredItems:e,visibleParents:n}))}allParentListItemsOpen(t){var n;const e=(n=t.parentElement)==null?void 0:n.closest(v);if(e){if(!e.open)return!1}else return!0;return this.allParentListItemsOpen(e)}updateFilteredData(t=!1){const{filterEl:e}=this;e&&(e.filteredItems&&(this.filteredData=e.filteredItems),this.updateListItems({emitFilterChange:t}))}async filterAndUpdateData(){var t;await((t=this.filterEl)==null?void 0:t.filter(this.filterText)),this.updateFilteredData()}performFilter(){const{filterEl:t,filterText:e,filterProps:n}=this;t&&(t.value=e,t.filterProps=n,this.filterAndUpdateData())}handleNudgeEvent(t){const{handleSelector:e,dragSelector:n}=this,{direction:i}=t.detail,o=t.composedPath(),a=o.find(g=>(g==null?void 0:g.tagName)&&g.matches(e)),l=o.find(g=>(g==null?void 0:g.tagName)&&g.matches(n)),r=l==null?void 0:l.parentElement;if(!r)return;const{filteredItems:u}=this,c=u.filter(g=>g.parentElement===r),f=c.length-1,d=c.indexOf(l);let m;i==="up"?m=d===0?f:d-1:m=d===f?0:d+1,this.disconnectObserver(),a.blurUnselectDisabled=!0;const L=i==="up"&&m!==f||i==="down"&&m===0?c[m]:c[m].nextSibling;r.insertBefore(l,L),this.updateListItems(),this.connectObserver(),this.calciteListOrderChange.emit({dragEl:l,fromEl:r,toEl:r,newIndex:m,oldIndex:d}),a.setFocus().then(()=>a.blurUnselectDisabled=!1)}static get assetsDirs(){return["assets"]}get el(){return D(this)}static get watchers(){return{filterText:["handleFilterTextChange"],filterProps:["handleFilterPropsChange"],messageOverrides:["onMessagesChange"],filterEnabled:["handleListItemChange"],group:["handleListItemChange"],dragEnabled:["handleListItemChange"],selectionMode:["handleListItemChange"],selectionAppearance:["handleListItemChange"],effectiveLocale:["effectiveLocaleChange"]}}};fe.style=de;const ue=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-icon-color:var(--calcite-color-brand)}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-color-border-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;overflow:hidden;background-color:var(--calcite-color-foreground-1)}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:none;flex-direction:column;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);margin-inline-start:var(--calcite-list-item-spacing-indent, 1.5rem)}.nested-container--open{display:flex}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content-container--unavailable{opacity:var(--calcite-opacity-disabled)}tr,td{outline-color:transparent}tr{position:relative}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-block:0px;color:var(--calcite-color-border-input);padding-inline:var(--calcite-spacing-md) var(--calcite-spacing-xxs)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-handle,.actions-end calcite-action,.actions-end calcite-handle,.content-start calcite-action,.content-start calcite-handle,.content-end calcite-action,.content-end calcite-handle,.selection-container calcite-action,.selection-container calcite-handle,.drag-container calcite-action,.drag-container calcite-handle,.open-container calcite-action,.open-container calcite-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{position:relative;padding:0px}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}tr:focus .actions-start,tr:focus .actions-end{inset-block:0.125rem}tr:focus .actions-start .close,tr:focus .actions-start ::slotted(calcite-action),tr:focus .actions-start ::slotted(calcite-action-menu),tr:focus .actions-start ::slotted(calcite-handle),tr:focus .actions-start ::slotted(calcite-dropdown),tr:focus .actions-end .close,tr:focus .actions-end ::slotted(calcite-action),tr:focus .actions-end ::slotted(calcite-action-menu),tr:focus .actions-end ::slotted(calcite-handle),tr:focus .actions-end ::slotted(calcite-dropdown){block-size:calc(100% - 0.25rem)}tr:focus::after,tr:focus::before{position:absolute;content:"";inline-size:0.125rem;z-index:var(--calcite-z-index-header);background-color:var(--calcite-color-brand);inset-block:0}tr:focus::before{inset-inline-start:0}tr:focus::after{inset-inline-end:0}.container--border:focus::before{display:none}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}`,pe=ue,x=new Map,ge="calcite-list",me=class{constructor(t){F(this,t),this.calciteListItemSelect=p(this,"calciteListItemSelect",6),this.calciteListItemClose=p(this,"calciteListItemClose",6),this.calciteListItemDragHandleChange=p(this,"calciteListItemDragHandleChange",6),this.calciteListItemToggle=p(this,"calciteListItemToggle",6),this.calciteInternalListItemSelect=p(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemSelectMultiple=p(this,"calciteInternalListItemSelectMultiple",6),this.calciteInternalListItemActive=p(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=p(this,"calciteInternalFocusPreviousItem",6),this.calciteInternalListItemChange=p(this,"calciteInternalListItemChange",6),this.calciteInternalListItemToggle=p(this,"calciteInternalListItemToggle",6),this.dragHandleSelectedChangeHandler=e=>{this.dragSelected=e.target.selected,this.calciteListItemDragHandleChange.emit(),e.stopPropagation()},this.emitInternalListItemActive=()=>{this.calciteInternalListItemActive.emit()},this.focusCellHandle=()=>{this.handleCellFocusIn(this.handleGridEl)},this.focusCellActionsStart=()=>{this.handleCellFocusIn(this.actionsStartEl)},this.focusCellContent=()=>{this.handleCellFocusIn(this.contentEl)},this.focusCellActionsEnd=()=>{this.handleCellFocusIn(this.actionsEndEl)},this.handleCloseClick=()=>{this.closed=!0,this.calciteListItemClose.emit()},this.handleContentSlotChange=e=>{this.hasCustomContent=b(e)},this.handleActionsStartSlotChange=e=>{this.hasActionsStart=b(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=b(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=b(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=b(e)},this.handleContentBottomSlotChange=e=>{this.hasContentBottom=b(e)},this.handleDefaultSlotChange=e=>{this.handleOpenableChange(e.target)},this.handleToggleClick=()=>{this.toggle()},this.toggle=(e=!this.open)=>{this.open=e,this.calciteListItemToggle.emit()},this.handleItemClick=e=>{e.defaultPrevented||this.toggleSelected(e.shiftKey)},this.toggleSelected=e=>{const{selectionMode:n,selected:i}=this;this.disabled||(n==="multiple"||n==="single"?this.selected=!i:n==="single-persist"&&(this.selected=!0),this.calciteInternalListItemSelectMultiple.emit({selectMultiple:e&&n==="multiple"}),this.calciteListItemSelect.emit())},this.handleItemKeyDown=e=>{if(e.defaultPrevented)return;const{key:n}=e,i=e.composedPath(),{containerEl:o,actionsStartEl:a,actionsEndEl:l,open:r,openable:u}=this,c=this.getGridCells(),f=c.findIndex(d=>i.includes(d));if(n==="Enter"&&!i.includes(a)&&!i.includes(l))e.preventDefault(),this.toggleSelected(e.shiftKey);else if(n==="ArrowRight"){e.preventDefault();const d=f+1;f===-1?!r&&u?(this.toggle(!0),this.focusCell(null)):c[0]&&this.focusCell(c[0]):c[f]&&c[d]&&this.focusCell(c[d])}else if(n==="ArrowLeft"){e.preventDefault();const d=f-1;f===-1?(this.focusCell(null),r&&u?this.toggle(!1):this.calciteInternalFocusPreviousItem.emit()):f===0?(this.focusCell(null),o.focus()):c[f]&&c[d]&&this.focusCell(c[d])}},this.focusCellNull=()=>{this.focusCell(null)},this.handleCellFocusIn=e=>{this.setFocusCell(e,P(e),!0)},this.setFocusCell=(e,n,i)=>{const{parentListEl:o}=this;i&&x.set(o,null);const a=this.getGridCells();a.forEach(l=>{l.tabIndex=-1,l.removeAttribute(M)}),e&&(e.tabIndex=e===n?0:-1,e.setAttribute(M,""),i&&x.set(o,a.indexOf(e)))},this.focusCell=(e,n=!0)=>{const i=P(e);this.setFocusCell(e,i,n),i==null||i.focus()},this.active=!1,this.bordered=!1,this.closable=!1,this.closed=!1,this.description=void 0,this.disabled=!1,this.dragDisabled=!1,this.dragHandle=!1,this.dragSelected=!1,this.filterHidden=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.unavailable=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.messageOverrides=void 0,this.messages=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.level=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1,this.hasContentBottom=!1}activeHandler(t){t||this.focusCell(null,!1)}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleOpenChange(){this.emitCalciteInternalListItemToggle()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(t){t.stopPropagation(),this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){K(this,this.effectiveLocale)}connectedCallback(){$(this),G(this);const{el:t}=this;this.parentListEl=t.closest(ge),this.level=oe(t)+1,this.setSelectionDefaults()}async componentWillLoad(){R(this),await U(this)}componentDidLoad(){B(this)}componentDidRender(){A(this)}disconnectedCallback(){q(this),_(this)}async setFocus(){await N(this);const{containerEl:t,parentListEl:e}=this,n=x.get(e);if(typeof n=="number"){const i=this.getGridCells();i[n]?this.focusCell(i[n]):t==null||t.focus();return}t==null||t.focus()}renderSelected(){const{selected:t,selectionMode:e,selectionAppearance:n}=this;return e==="none"||n==="border"?null:s("td",{class:{[h.selectionContainer]:!0,[h.selectionContainerSingle]:e==="single"||e==="single-persist"},key:"selection-container",onClick:this.handleItemClick},s("calcite-icon",{icon:t?e==="multiple"?C.selectedMultiple:C.selectedSingle:e==="multiple"?C.unselectedMultiple:C.unselectedSingle,scale:"s"}))}renderDragHandle(){const{label:t,dragHandle:e,dragSelected:n,dragDisabled:i,setPosition:o,setSize:a}=this;return e?s("td",{"aria-label":t,class:h.dragContainer,key:"drag-handle-container",onFocusin:this.focusCellHandle,ref:l=>this.handleGridEl=l,role:"gridcell"},s("calcite-handle",{disabled:i,label:t,onCalciteHandleChange:this.dragHandleSelectedChangeHandler,selected:n,setPosition:o,setSize:a})):null}renderOpen(){const{el:t,open:e,openable:n,messages:i}=this,o=ee(t),a=e?C.open:o==="rtl"?C.closedRTL:C.closedLTR,l=e?i.collapse:i.expand;return n?s("td",{class:h.openContainer,key:"open-container",onClick:this.handleToggleClick,title:l},s("calcite-icon",{icon:a,key:a,scale:"s"})):null}renderActionsStart(){const{label:t,hasActionsStart:e}=this;return s("td",{"aria-label":t,class:h.actionsStart,hidden:!e,key:"actions-start-container",onFocusin:this.focusCellActionsStart,ref:n=>this.actionsStartEl=n,role:"gridcell"},s("slot",{name:S.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:t,hasActionsEnd:e,closable:n,messages:i}=this;return s("td",{"aria-label":t,class:h.actionsEnd,hidden:!(e||n),key:"actions-end-container",onFocusin:this.focusCellActionsEnd,ref:o=>this.actionsEndEl=o,role:"gridcell"},s("slot",{name:S.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),n?s("calcite-action",{appearance:"transparent",class:h.close,icon:C.close,key:"close-action",label:i.close,onClick:this.handleCloseClick,text:i.close}):null)}renderContentStart(){const{hasContentStart:t}=this;return s("div",{class:h.contentStart,hidden:!t},s("slot",{name:S.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:t}=this;return s("div",{class:h.customContent,hidden:!t},s("slot",{name:S.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:t}=this;return s("div",{class:h.contentEnd,hidden:!t},s("slot",{name:S.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){const{hasContentBottom:t}=this;return s("div",{class:h.contentBottom,hidden:!t},s("slot",{name:S.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return s("div",{class:{[h.nestedContainer]:!0,[h.nestedContainerOpen]:this.openable&&this.open}},s("slot",{onSlotchange:this.handleDefaultSlotChange,ref:t=>this.defaultSlotEl=t}))}renderContentProperties(){const{label:t,description:e,hasCustomContent:n}=this;return!n&&(t||e)?s("div",{class:h.content,key:"content"},t?s("div",{class:h.label,key:"label"},t):null,e?s("div",{class:h.description,key:"description"},e):null):null}renderContentContainer(){const{description:t,label:e,selectionMode:n,hasCustomContent:i,unavailable:o}=this,a=i||!!e||!!t,l=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return s("td",{"aria-label":e,class:{[h.contentContainer]:!0,[h.contentContainerUnavailable]:o,[h.contentContainerSelectable]:n!=="none",[h.contentContainerHasCenterContent]:a},key:"content-container",onClick:this.handleItemClick,onFocusin:this.focusCellContent,ref:r=>this.contentEl=r,role:"gridcell"},l)}render(){const{openable:t,open:e,level:n,setPosition:i,setSize:o,active:a,label:l,selected:r,selectionAppearance:u,selectionMode:c,closed:f,filterHidden:d,bordered:m,disabled:L}=this,g=c!=="none"&&u==="border",J=g&&r,Q=g&&!r;return s(z,{key:"a610ab740c82b6088400839884d58d4d867829db"},s(w,{key:"f05bf10e82fab03ddfdaf3ab2e100dcbd6d69c63",disabled:L},s("div",{key:"4bf63ed08d2a4a049e060d26d3699656558d495e",class:{[h.wrapper]:!0,[h.wrapperBordered]:m}},s("tr",{key:"d231a113c3bd8ee7f67c2ffb0cf804c142a95fb9","aria-expanded":t?k(e):null,"aria-label":l,"aria-level":n,"aria-posinset":i,"aria-selected":k(r),"aria-setsize":o,class:{[h.container]:!0,[h.containerHover]:!0,[h.containerBorder]:g,[h.containerBorderSelected]:J,[h.containerBorderUnselected]:Q},hidden:f||d,onFocus:this.focusCellNull,onFocusin:this.emitInternalListItemActive,onKeyDown:this.handleItemKeyDown,ref:V=>this.containerEl=V,role:"row",tabIndex:a?0:-1},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom()),this.renderDefaultContainer()))}emitCalciteInternalListItemToggle(){this.calciteInternalListItemToggle.emit()}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){const{parentListEl:t,selectionMode:e,selectionAppearance:n}=this;t&&(e||(this.selectionMode=t.selectionMode),n||(this.selectionAppearance=t.selectionAppearance))}handleOpenableChange(t){if(!t)return;const e=X(t),n=le(t);Y(e),this.openable=!!e.length||!!n.length}getGridCells(){return[this.handleGridEl,this.actionsStartEl,this.contentEl,this.actionsEndEl].filter(t=>t&&!t.hidden)}static get assetsDirs(){return["assets"]}get el(){return D(this)}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],open:["handleOpenChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};me.style=pe;const H={container:"container",heading:"heading"},be=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}",Ce=be,Ie=class{constructor(t){F(this,t),this.calciteInternalListItemGroupDefaultSlotChange=p(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0}componentDidRender(){A(this)}render(){const{disabled:t,heading:e}=this;return s(z,{key:"e1e0304c3d4fe02909fd0075de2e4f5ef806be39"},s(w,{key:"5fb0861fb58de90808e98b7061d3c906c822203c",disabled:t},s("tr",{key:"c77af78f937c3135601df2c4574b858662d5fcdb",class:H.container},s("td",{key:"f1ae6b9e09e78f87b814287f8eaeb0a105575c7a",class:H.heading,colSpan:j},e)),s("slot",{key:"7346d5d774173403910eddd35bf700ccd1437c4f",onSlotchange:this.handleDefaultSlotChange})))}get el(){return D(this)}};Ie.style=Ce;export{fe as calcite_list,me as calcite_list_item,Ie as calcite_list_item_group};
//# sourceMappingURL=calcite-list_3.entry-USkfEmka.js.map
