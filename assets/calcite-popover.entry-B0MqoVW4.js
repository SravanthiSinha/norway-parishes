import{r as k,c,f as w,h as s,H as P,g as C}from"./index-XUmwAfbD.js";import{f as x,c as L,e as H,a as A,r as R,F as p}from"./floating-ui-382f6e89-CgKfNkr5.js";import{d as f,a as u,c as F,u as D}from"./focusTrapComponent-7cfd1d69-CFqGN2Tf.js";import{t as m,f as z,q as O,l as B}from"./dom-b6dedd88-CKzhY-8O.js";import{g as T}from"./guid-9c230b6a-BxSjQh8J.js";import{o as g}from"./openCloseComponent-4d1d6536-CPLElRtt.js";import{H as S}from"./Heading-4aed0b02-E7-S5_ii.js";import{c as I,d as M}from"./locale-60f8ca58-DZJRMofs.js";import{u as U,c as _,s as q,d as N}from"./t9n-75defee3-B9an6gZF.js";import{s as $,a as K,c as j}from"./loadable-13e9ffb2-DQlh4R1S.js";import{c as V}from"./observers-9c166451-ByOVWZOm.js";import{F as W}from"./FloatingArrow-1af31f3f-BAd00WwV.js";import{g as X}from"./component-5f0a8be8-6CIDVndn.js";import{i as G}from"./key-3ee05994-D63ExP77.js";import"./debounce-6e4946fd-CA9eFM3j.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */class J{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:t}=this,o=e.find(r=>t.has(r));return t.get(o)},this.togglePopovers=e=>{const t=e.composedPath(),o=this.queryPopover(t);o&&!o.triggerDisabled&&(o.open=!o.open),Array.from(this.registeredElements.values()).filter(r=>r!==o&&r.autoClose&&r.open&&!t.includes(r)).forEach(r=>r.open=!1)},this.keyDownHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():G(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{B(e)||this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}const n={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContainer:"headerContainer",headerContent:"header-content",heading:"heading"},Q="auto",v="aria-controls",b="aria-expanded",Y=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",Z=Y,E=new J,ee=class{constructor(i){k(this,i),this.calcitePopoverBeforeClose=c(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=c(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=c(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=c(this,"calcitePopoverOpen",6),this.mutationObserver=V("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${T()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=e=>{this.transitionEl=e},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?x(t,e):null},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),L(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:o,effectiveReferenceElement:r}=this;e&&o&&!r&&console.warn(`${t.tagName}: reference-element id "${o}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(b,m(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(v,t),E.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(v),e.removeAttribute(b)),E.unregisterElement(e))},this.hide=()=>{this.open=!1},this.storeArrowEl=e=>{this.arrowEl=e,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=H,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=Q,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(i){this.open&&(i?f(this):u(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){g(this),this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){U(this,this.effectiveLocale)}connectedCallback(){var i;(i=this.mutationObserver)==null||i.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),I(this),_(this),F(this),requestAnimationFrame(()=>this.setUpReferenceElement(this.hasLoaded))}async componentWillLoad(){await q(this),$(this)}componentDidLoad(){K(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.open&&g(this),this.hasLoaded=!0}disconnectedCallback(){var i;(i=this.mutationObserver)==null||i.disconnect(),this.removeReferences(),M(this),N(this),A(this,this.effectiveReferenceElement,this.el),f(this)}async reposition(i=!1){const{el:e,effectiveReferenceElement:t,placement:o,overlayPositioning:r,flipDisabled:d,filteredFlipPlacements:a,offsetDistance:l,offsetSkidding:h,arrowEl:y}=this;return R(this,{floatingEl:e,referenceEl:t,overlayPositioning:r,placement:o,flipDisabled:d,flipPlacements:a,offsetDistance:l,offsetSkidding:h,arrowEl:y,type:"popover"},i)}async setFocus(){await j(this),w(this.el),z(this.el)}async updateFocusTrapElements(){D(this)}getReferenceElement(){const{referenceElement:i,el:e}=this;return(typeof i=="string"?O(e,{id:i}):i)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),u(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),f(this)}renderCloseButton(){const{messages:i,closable:e}=this;return e?s("div",{class:n.closeButtonContainer,key:n.closeButtonContainer},s("calcite-action",{appearance:"transparent",class:n.closeButton,onClick:this.hide,ref:t=>this.closeButtonEl=t,scale:this.scale,text:i.close},s("calcite-icon",{icon:"x",scale:X(this.scale)}))):null}renderHeader(){const{heading:i,headingLevel:e}=this,t=i?s(S,{class:n.heading,level:e},i):null;return t?s("div",{class:n.header,key:n.header},t,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:i,heading:e,label:t,open:o,pointerDisabled:r,floatingLayout:d}=this,a=i&&o,l=!a,h=r?null:s(W,{floatingLayout:d,key:"floating-arrow",ref:this.storeArrowEl});return s(P,{key:"a563d48090d6e6c0c138023e169667834f657c4c","aria-hidden":m(l),"aria-label":t,"aria-live":"polite","calcite-hydrated-hidden":l,id:this.getId(),role:"dialog"},s("div",{key:"73053dbdce2cfc68fcd42667089d611e81010955",class:{[n.container]:!0,[p.animation]:!0,[p.animationActive]:a},ref:this.setTransitionEl},h,s("div",{key:"1fbcd45ee42b10a67881ced74db2db051231c94d",class:{[n.hasHeader]:!!e,[n.headerContainer]:!0}},this.renderHeader(),s("div",{key:"522abe801b98787863aac14d990b948d2d286156",class:n.content},s("slot",{key:"022a8f690288acdbac4ec1b3eccf807ffe382d5d"})),e?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return C(this)}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}};ee.style=Z;export{ee as calcite_popover};
//# sourceMappingURL=calcite-popover.entry-B0MqoVW4.js.map
