import{r as d,c as a,h as i,H as z,g as h,F as D}from"./index-CJT1kG3U.js";import{u as v,I as P}from"./interactive-1a42577a-D7sAePlR.js";import{s as k,a as y,c as x}from"./loadable-13e9ffb2-BGmtNLc8.js";import{c as E}from"./observers-9c166451-BLVGRbsu.js";import{l as m}from"./logger-d56ad214-DCrpS_oe.js";import{t as I,d as r}from"./dom-b6dedd88-9CMuDstV.js";import{m as O,d as R,a as W,s as A,h as M,b as V,g as _,k as T,i as U,e as K,j,f as q,r as G,n as N,o as $,l as B,p as Y,q as J,I as c,L as Q,u as b,v as o,w as u,C as s,S as n}from"./resources-9fe05a64-BQCIrop_.js";import{c as L,d as w}from"./conditionalSlot-167e1146-CA84WR1R.js";import{H as X,c as Z}from"./Heading-4aed0b02-Chuj8OvG.js";import{c as ee,d as te}from"./locale-60f8ca58--3M74IpZ.js";import{u as ie,c as se,s as ae,d as ne}from"./t9n-75defee3-CwG55ZZb.js";import"./debounce-6e4946fd-CA9eFM3j.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./array-2c4e379e-BMcQdnYi.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const le=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:1;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:stretch;justify-content:flex-end;background-color:var(--calcite-color-foreground-1);--tw-shadow:0 1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-z-index)}calcite-filter{margin-block-end:0px}:host([loading][disabled]){min-block-size:2rem}:host([hidden]){display:none}[hidden]{display:none}",ce=le;m.deprecated("component",{name:"pick-list",removalVersion:3,suggested:"list"});const oe=class{constructor(e){d(this,e),this.calciteListChange=a(this,"calciteListChange",6),this.calciteListFilter=a(this,"calciteListFilter",6),this.lastSelectedItem=null,this.mutationObserver=E("mutation",O.bind(this)),this.setFilterEl=t=>{this.filterEl=t},this.setFilteredItems=t=>{this.filteredItems=t},this.deselectRemovedItems=R.bind(this),this.deselectSiblingItems=W.bind(this),this.selectSiblings=A.bind(this),this.handleFilter=M.bind(this),this.handleFilterEvent=V.bind(this),this.getItemData=_.bind(this),this.keyDownHandler=T.bind(this),this.disabled=!1,this.filteredItems=[],this.filteredData=[],this.filterEnabled=!1,this.filterPlaceholder=void 0,this.filterText=void 0,this.headingLevel=void 0,this.loading=!1,this.multiple=!1,this.selectionFollowsFocus=!1,this.selectedValues=new Map,this.dataForFilter=[]}connectedCallback(){U.call(this),K.call(this)}disconnectedCallback(){j.call(this)}componentWillLoad(){k(this)}componentDidLoad(){y(this),q.call(this)}componentDidRender(){v(this)}calciteListItemRemoveHandler(e){G.call(this,e)}calciteListItemChangeHandler(e){N.call(this,e)}calciteInternalListItemPropsChangeHandler(e){e.stopPropagation(),this.setUpFilter()}calciteInternalListItemValueChangeHandler(e){$.call(this,e),e.stopPropagation()}calciteListFocusOutHandler(e){B.call(this,e)}setUpItems(){Y.call(this,"calcite-pick-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}async getSelectedItems(){return this.selectedValues}async setFocus(e){return await x(this),J.call(this,e)}getIconType(){return this.multiple?c.square:c.circle}render(){return i(z,{key:"3ee6797e112491804c876fcd4a4604a1251a5340","aria-busy":I(this.loading),onKeyDown:this.keyDownHandler,role:"menu"},i(Q,{key:"7051d4428ef065516d29ac2e84f7736216af45a5",props:this}))}get el(){return h(this)}};oe.style=ce;const re=":host{margin-block-end:0.25rem;box-sizing:border-box;display:block;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-color-text-2)}:host *{box-sizing:border-box}:host(:last-child){margin-block-end:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.heading{margin-block:0.5rem;margin-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-size:var(--calcite-font-size--1);line-height:1.375;color:var(--calcite-color-text-3)}.container--indented{margin-inline-start:1.5rem}:host([hidden]){display:none}[hidden]{display:none}",de=re;m.deprecated("component",{name:"pick-list-group",removalVersion:3,suggested:"list-item-group"});const he=class{constructor(e){d(this,e),this.groupTitle=void 0,this.headingLevel=void 0}connectedCallback(){L(this)}disconnectedCallback(){w(this)}render(){var g;const{el:e,groupTitle:t,headingLevel:l}=this,C=r(e,b.parentItem)!==null,H={[o.container]:!0,[o.indented]:C},p=t,f=(g=e.closest("calcite-pick-list"))==null?void 0:g.headingLevel,S=f?Z(f+1):null,F=l||S;return i(D,{key:"95786626f6bee19eee9695f8bf3c63f0e192a6fe"},p?i(X,{class:o.heading,level:F},p):null,i("slot",{key:"d1ebf753d725ab812875fb5f8a9718774b4d9cc7",name:b.parentItem}),i("section",{key:"3a850b36674c77bd7dc7a05278fd684b06024fb3",class:H},i("slot",{key:"919ef46af0ab6c7f7e8f0dff0a1cda8e01ecdf75"})))}get el(){return h(this)}};he.style=de;const me=`@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin:0px;margin-block-end:1px;box-sizing:border-box;display:flex;align-items:stretch;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-1);--tw-shadow:0 1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing);animation:calcite-fade-in var(--calcite-animation-timing)}:host *{box-sizing:border-box}.label{display:flex;flex:1 1 auto;cursor:pointer;align-items:center;background-color:transparent;outline-color:transparent}.label:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.label:hover{background-color:var(--calcite-color-foreground-2)}:host([non-interactive]:hover){background-color:var(--calcite-color-foreground-1)}:host([non-interactive]) .label,:host([non-interactive]) .icon{pointer-events:none}.icon{margin-block:0px;display:flex;cursor:pointer;align-items:center;padding:0.25rem;color:var(--calcite-color-brand);flex:0 0 auto;line-height:0}.icon:hover{background-color:var(--calcite-color-foreground-2)}.icon-dot{display:flex;inline-size:1.5rem;align-items:center;padding:0.5rem}.icon-dot::before{opacity:0;content:"•"}.icon calcite-icon{opacity:0}:host([selected]) .icon-dot::before,:host([selected]) .icon calcite-icon{transition:opacity var(--calcite-animation-timing);opacity:1}.text-container{pointer-events:none;display:flex;flex-direction:column;flex-wrap:nowrap;overflow:hidden;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word}.title{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}.description{margin-block-start:0.125rem;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}.actions{margin:0px;display:flex;flex:0 1 auto;align-items:stretch;justify-content:flex-end}.actions--start~.label{padding-inline-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,pe=me;m.deprecated("component",{name:"pick-list-item",removalVersion:3,suggested:"list-item"});const fe=class{constructor(e){d(this,e),this.calciteListItemChange=a(this,"calciteListItemChange",6),this.calciteListItemRemove=a(this,"calciteListItemRemove",7),this.calciteInternalListItemPropsChange=a(this,"calciteInternalListItemPropsChange",6),this.calciteInternalListItemValueChange=a(this,"calciteInternalListItemValueChange",6),this.pickListClickHandler=t=>{this.disabled||this.deselectDisabled&&this.selected||this.nonInteractive||(this.shiftPressed=t.shiftKey,this.selected=!this.selected)},this.pickListKeyDownHandler=t=>{if(t.key===" "){if(t.preventDefault(),this.deselectDisabled&&this.selected||this.nonInteractive)return;this.selected=!this.selected}},this.removeClickHandler=()=>{this.calciteListItemRemove.emit()},this.description=void 0,this.disabled=!1,this.deselectDisabled=!1,this.nonInteractive=!1,this.icon=null,this.iconFlipRtl=!1,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.metadata=void 0,this.removable=!1,this.selected=!1,this.value=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}descriptionWatchHandler(){this.calciteInternalListItemPropsChange.emit()}labelWatchHandler(){this.calciteInternalListItemPropsChange.emit()}onMessagesChange(){}metadataWatchHandler(){this.calciteInternalListItemPropsChange.emit()}selectedWatchHandler(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed}),this.shiftPressed=!1}valueWatchHandler(e,t){this.calciteInternalListItemValueChange.emit({oldValue:t,newValue:e})}effectiveLocaleChange(){ie(this,this.effectiveLocale)}connectedCallback(){ee(this),se(this),L(this)}async componentWillLoad(){await ae(this),k(this)}componentDidLoad(){y(this)}disconnectedCallback(){te(this),ne(this),w(this)}componentDidRender(){v(this)}async toggleSelected(e){this.selected=typeof e=="boolean"?e:!this.selected}async setFocus(){var e;await x(this),(e=this.focusEl)==null||e.focus()}renderIcon(){const{icon:e,iconFlipRtl:t}=this;return e?i("span",{class:{[s.icon]:!0,[s.iconDot]:e===c.circle},onClick:this.pickListClickHandler},e===c.square?i("calcite-icon",{flipRtl:t,icon:u.checked,scale:"s"}):null):null}renderRemoveAction(){return this.removable?i("calcite-action",{class:s.remove,icon:u.remove,onClick:this.removeClickHandler,slot:n.actionsEnd,text:this.messages.remove}):null}renderActionsStart(){const{el:e}=this;return r(e,n.actionsStart)?i("div",{class:{[s.actions]:!0,[s.actionsStart]:!0}},i("slot",{name:n.actionsStart})):null}renderActionsEnd(){const{el:e,removable:t}=this;return r(e,n.actionsEnd)||t?i("div",{class:{[s.actions]:!0,[s.actionsEnd]:!0}},i("slot",{name:n.actionsEnd}),this.renderRemoveAction()):null}render(){const{description:e,label:t}=this;return i(P,{key:"34b2a65973c42d095c5ea0ca712afedaa58c5b63",disabled:this.disabled},this.renderIcon(),this.renderActionsStart(),i("label",{key:"25476cd75bc12bebcbb7d52dc7fb19c268cf48bf","aria-label":t,class:s.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,ref:l=>this.focusEl=l,tabIndex:0},i("div",{key:"2d619c384030ea848bea3f7d1b9d49afcad597ee","aria-checked":I(this.selected),class:s.textContainer,role:"menuitemcheckbox"},i("span",{key:"667ae09cd87763d99a76bfaddc715192cd8f72c4",class:s.title},t),e?i("span",{class:s.description},e):null)),this.renderActionsEnd())}static get assetsDirs(){return["assets"]}get el(){return h(this)}static get watchers(){return{description:["descriptionWatchHandler"],label:["labelWatchHandler"],defaultMessages:["onMessagesChange"],messageOverrides:["onMessagesChange"],metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],value:["valueWatchHandler"],effectiveLocale:["effectiveLocaleChange"]}}};fe.style=pe;export{oe as calcite_pick_list,he as calcite_pick_list_group,fe as calcite_pick_list_item};
//# sourceMappingURL=calcite-pick-list_3.entry-DgjcxHAu.js.map
