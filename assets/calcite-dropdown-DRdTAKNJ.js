import{dR as v,dS as E,ef as a,dT as p,e6 as y,gs as I,gP as h,ea as C,eq as x,e7 as O,e8 as k,e9 as H,d$ as o,ec as P,ed as f,ee as S,gQ as r}from"./index-CRM8otC0.js";import{f as T,c as l,e as F,a as z,F as m,r as A}from"./floating-ui-CnWy3us7.js";import{o as u}from"./openCloseComponent-WcZ1G53c.js";import"./debounce-BOqmhDXu.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const L={dropdownTrigger:"trigger"},B=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{left:5px}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;block-size:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width-scale=s]){--calcite-dropdown-width:12rem}:host([width-scale=m]){--calcite-dropdown-width:14rem}:host([width-scale=l]){--calcite-dropdown-width:16rem}:host([hidden]){display:none}[hidden]{display:none}",$=B,w=v(class extends E{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDropdownSelect=a(this,"calciteDropdownSelect",6),this.calciteDropdownBeforeClose=a(this,"calciteDropdownBeforeClose",6),this.calciteDropdownClose=a(this,"calciteDropdownClose",6),this.calciteDropdownBeforeOpen=a(this,"calciteDropdownBeforeOpen",6),this.calciteDropdownOpen=a(this,"calciteDropdownOpen",6),this.items=[],this.groups=[],this.mutationObserver=p("mutation",()=>this.updateItems()),this.resizeObserver=p("resize",e=>this.resizeObserverCallback(e)),this.openTransitionProp="opacity",this.guid=`calcite-dropdown-${y()}`,this.focusLastDropdownItem=!1,this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?T(t,e):null},this.updateTriggers=e=>{this.triggers=e.target.assignedElements({flatten:!0}),this.reposition(!0)},this.updateItems=()=>{this.items=this.groups.map(e=>Array.from(e==null?void 0:e.querySelectorAll("calcite-dropdown-item"))).reduce((e,t)=>[...e,...t],[]),this.updateSelectedItems(),this.reposition(!0),this.items.forEach(e=>e.scale=this.scale)},this.updateGroups=e=>{const t=e.target.assignedElements({flatten:!0}).filter(i=>i==null?void 0:i.matches("calcite-dropdown-group"));this.groups=t,this.updateItems(),this.updateGroupScale()},this.resizeObserverCallback=e=>{e.forEach(t=>{const{target:i}=t;i===this.referenceEl?this.setDropdownWidth():i===this.scrollerEl&&this.setMaxScrollerHeight()})},this.setDropdownWidth=()=>{const{referenceEl:e,scrollerEl:t}=this,i=e==null?void 0:e.clientWidth;!i||!t||(t.style.minWidth=`${i}px`)},this.setMaxScrollerHeight=()=>{const{scrollerEl:e}=this;if(!e)return;this.reposition(!0);const t=this.getMaxScrollerHeight();e.style.maxHeight=t>0?`${t}px`:"",this.reposition(!0)},this.setScrollerAndTransitionEl=e=>{this.resizeObserver.observe(e),this.scrollerEl=e,this.transitionEl=e},this.setReferenceEl=e=>{this.referenceEl=e,l(this,this.referenceEl,this.floatingEl),this.resizeObserver.observe(e)},this.setFloatingEl=e=>{this.floatingEl=e,l(this,this.referenceEl,this.floatingEl)},this.keyDownHandler=e=>{if(!e.composedPath().includes(this.referenceEl))return;const{defaultPrevented:t,key:i}=e;if(!t){if(i==="Escape"){this.closeCalciteDropdown(),e.preventDefault();return}if(this.open&&e.shiftKey&&i==="Tab"){this.closeCalciteDropdown(),e.preventDefault();return}I(i)?(this.toggleDropdown(),e.preventDefault()):(i==="ArrowDown"||i==="ArrowUp")&&(this.focusLastDropdownItem=i==="ArrowUp",this.open=!0,this.el.addEventListener("calciteDropdownOpen",this.onOpenEnd))}},this.focusOnFirstActiveOrDefaultItem=()=>{const t=this.getTraversableItems().find(i=>i.selected)||(this.focusLastDropdownItem?this.items[this.items.length-1]:this.items[0]);this.focusLastDropdownItem=!1,t&&h(t)},this.onOpenEnd=()=>{this.focusOnFirstActiveOrDefaultItem(),this.el.removeEventListener("calciteDropdownOpen",this.onOpenEnd)},this.toggleDropdown=()=>{this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.onOpenEnd)},this.open=!1,this.closeOnSelectDisabled=!1,this.disabled=!1,this.flipPlacements=void 0,this.maxItems=0,this.overlayPositioning="absolute",this.placement=F,this.selectedItems=[],this.type="click",this.widthScale=void 0,this.scale="m"}openHandler(){if(u(this),this.disabled){this.open=!1;return}this.reposition(!0)}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems(),this.updateGroupScale()}async setFocus(){await C(this),x(this.referenceEl)}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.open&&(this.openHandler(),u(this)),this.updateItems(),l(this,this.referenceEl,this.floatingEl)}componentWillLoad(){O(this)}componentDidLoad(){k(this),l(this,this.referenceEl,this.floatingEl)}componentDidRender(){H(this)}disconnectedCallback(){var e,t;(e=this.mutationObserver)==null||e.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),z(this,this.referenceEl,this.floatingEl)}render(){const{open:e,guid:t}=this;return o(S,{key:"377c3d9687bc025f004b4efe58bfa5f0893d86d0"},o(P,{key:"9e2f48be045fc6db10cc7203a8b998ec2b6abafd",disabled:this.disabled},o("div",{key:"8607de2d53a4f8c4b29206ee56aa23ad4c2cbe3d",class:"calcite-trigger-container",id:`${t}-menubutton`,onClick:this.toggleDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},o("slot",{key:"07de8df34055ddc39301654a5ca312ddf293e6a9","aria-controls":`${t}-menu`,"aria-expanded":f(e),"aria-haspopup":"menu",name:L.dropdownTrigger,onSlotchange:this.updateTriggers})),o("div",{key:"c1469efb62eb704b021ce6479ad55deda59582d4","aria-hidden":f(!e),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},o("div",{key:"f875166d486a53cd393f17d9295974aa449d449f","aria-labelledby":`${t}-menubutton`,class:{"calcite-dropdown-content":!0,[m.animation]:!0,[m.animationActive]:e},id:`${t}-menu`,ref:this.setScrollerAndTransitionEl,role:"menu"},o("slot",{key:"bc6e61383aaf85b3d6242a86c50da68bc8b31e27",onSlotchange:this.updateGroups})))))}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:s,overlayPositioning:n,filteredFlipPlacements:c}=this;return A(this,{floatingEl:t,referenceEl:i,overlayPositioning:n,placement:s,flipPlacements:c,type:"menu"},e)}closeCalciteDropdownOnClick(e){this.disabled||!this.open||e.composedPath().includes(this.el)||this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||this.type!=="hover"||this.toggleDropdown()}pointerLeaveHandler(){this.disabled||this.type!=="hover"||this.closeCalciteDropdown()}getTraversableItems(){return this.items.filter(e=>!e.disabled&&!e.hidden)}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,i=t.target,s=this.getTraversableItems();switch(t.key){case"Tab":this.open=!1,this.updateTabIndexOfItems(i);break;case"ArrowDown":r(s,i,"next");break;case"ArrowUp":r(s,i,"previous");break;case"Home":r(s,i,"first");break;case"End":r(s,i,"last");break}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),(!this.closeOnSelectDisabled||e.detail.requestedDropdownGroup.selectionMode==="none")&&this.closeCalciteDropdown(),e.stopPropagation()}updateGroupScale(){var e;(e=this.groups)==null||e.forEach(t=>t.scale=this.scale)}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter(e=>e.selected)}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;let i=0,s=0,n;return this.groups.forEach(c=>{e>0&&i<e&&Array.from(c.children).forEach((d,D)=>{D===0&&(isNaN(n)&&(n=d.offsetTop),s+=n),i<e&&(s+=d.offsetHeight,i+=1)})}),t.length>e?s:0}closeCalciteDropdown(e=!0){this.open=!1,e&&h(this.triggers[0])}updateTabIndexOfItems(e){this.items.forEach(t=>{t.tabIndex=e!==t?-1:0})}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}}static get style(){return $}},[17,"calcite-dropdown",{open:[1540],closeOnSelectDisabled:[516,"close-on-select-disabled"],disabled:[516],flipPlacements:[16],maxItems:[514,"max-items"],overlayPositioning:[513,"overlay-positioning"],placement:[513],selectedItems:[1040],type:[513],widthScale:[513,"width-scale"],scale:[513],setFocus:[64],reposition:[64]},[[8,"click","closeCalciteDropdownOnClick"],[0,"calciteInternalDropdownCloseRequest","closeCalciteDropdownOnEvent"],[8,"calciteDropdownOpen","closeCalciteDropdownOnOpenEvent"],[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"],[0,"calciteInternalDropdownItemKeyEvent","calciteInternalDropdownItemKeyEvent"],[0,"calciteInternalDropdownItemSelect","handleItemSelect"]],{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}]);function g(){if(typeof customElements>"u")return;["calcite-dropdown"].forEach(e=>{switch(e){case"calcite-dropdown":customElements.get(e)||customElements.define(e,w);break}})}g();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const R=w,q=g;export{R as CalciteDropdown,q as defineCustomElement};
//# sourceMappingURL=calcite-dropdown-DRdTAKNJ.js.map
