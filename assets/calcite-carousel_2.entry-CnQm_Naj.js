import{r as S,c as p,h as s,H as P,g as T}from"./index-Bs-G_wsu.js";import{s as F,h as g,t as M,g as W,B}from"./dom-b6dedd88-CWSCYV61.js";import{c as K,d as N}from"./locale-60f8ca58-DFv1YoEZ.js";import{g as z}from"./guid-9c230b6a-BxSjQh8J.js";import{u as $,I as j}from"./interactive-1a42577a-DrcFfM44.js";import{a as q,s as U,c as _}from"./loadable-13e9ffb2-DnQ9Ci4i.js";import{c as G,d as V,s as Y,u as J}from"./t9n-75defee3-BOAd0CHG.js";import{c as Q}from"./observers-9c166451-2HBXHR0E.js";import{b as v}from"./responsive-5b4f3a40-3Qk2XNng.js";import{g as D}from"./array-2c4e379e-BMcQdnYi.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const X=6e3,n={container:"container",containerOverlaid:"container--overlaid",containerEdged:"container--edged",itemContainer:"item-container",itemContainerForward:"item-container--forward",itemContainerBackward:"item-container--backward",pagination:"pagination",paginationItems:"pagination-items",paginationItem:"pagination-item",paginationItemIndividual:"pagination-item--individual",paginationItemVisible:"pagination-item--visible",paginationItemOutOfRange:"pagination-item--out-of-range",paginationItemSelected:"pagination-item--selected",paginationItemRangeEdge:"pagination-item--range-edge",pageNext:"page-next",pagePrevious:"page-previous",autoplayControl:"autoplay-control",autoplayProgress:"autoplay-progress"},u={chevronLeft:"chevron-left",chevronRight:"chevron-right",inactive:"bullet-point",active:"bullet-point-large",pause:"pause-f",play:"play-f"},m={medium:7,small:5,xsmall:3,xxsmall:1},Z=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%;--calcite-internal-internal-carousel-item-space:1.5rem;--calcite-internal-internal-carousel-item-space-wide:3.5rem;--calcite-internal-internal-carousel-item-background-color:var(
    --calcite-internal-carousel-item-background-color,
    var(--calcite-color-foreground-1)
  );--calcite-internal-internal-carousel-item-background-color-hover:var(
    --calcite-internal-carousel-item-background-color-hover,
    var(--calcite-color-foreground-2)
  );--calcite-internal-internal-carousel-item-background-color-active:var(
    --calcite-internal-carousel-item-background-color-active,
    var(--calcite-color-foreground-2)
  );--calcite-internal-internal-carousel-item-background-color-selected:var(
    --calcite-internal-carousel-item-background-color-selected,
    var(--calcite-color-foreground-1)
  );--calcite-internal-internal-carousel-item-icon-color-hover:var(
    --calcite-internal-carousel-item-icon-color-hover,
    var(--calcite-action-color-transparent-hover)
  );--calcite-internal-internal-carousel-item-icon-color:var(
    --calcite-internal-carousel-item-icon-color,
    var(--calcite-color-border-3)
  );--calcite-internal-internal-carousel-item-icon-color-selected:var(
    --calcite-internal-carousel-item-icon-color-selected,
    var(--calcite-color-brand)
  );--calcite-internal-internal-carousel-control-color-hover:var(
    --calcite-internal-carousel-control-color-hover,
    var(--calcite-internal-carousel-item-icon-color-hover)
  );--calcite-internal-internal-carousel-control-color:var(
    --calcite-internal-carousel-item-icon-color,
    var(--calcite-color-border-input)
  );--calcite-internal-internal-carousel-autoplay-progress-background-color:var(
    --calcite-internal-carousel-autoplay-progress-background-color,
    var(--calcite-color-border-3)
  );--calcite-internal-internal-carousel-autoplay-progress-fill-color:var(
    --calcite-internal-carousel-autoplay-progress-fill-color,
    var(--calcite-color-brand)
  )}.container{position:relative;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2);outline-color:transparent}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.container--edged:not(.container--overlaid){padding-inline:var(--calcite-internal-internal-carousel-item-space-wide);inline-size:calc(100% - var(--calcite-internal-internal-carousel-item-space-wide) * 2)}.item-container{display:flex;flex:1 1 auto;align-items:flex-start;justify-content:center;overflow:auto;padding:0.25rem;animation-name:none;animation-duration:var(--calcite-animation-timing)}.container--overlaid .item-container{padding:0px}.item-container--forward{animation-name:item-forward}.item-container--backward{animation-name:item-backward}calcite-carousel-item:not([selected]){opacity:0}.pagination{margin:0.75rem;display:flex;flex-direction:row;align-items:center;justify-content:center;inline-size:auto}.pagination-items{display:flex;flex-direction:row;align-items:center}.container--overlaid .pagination{position:absolute}.pagination-item.page-next,.pagination-item.page-previous{color:var(--calcite-internal-internal-carousel-control-color)}.pagination-item.page-next:hover,.pagination-item.page-previous:hover{color:var(--calcite-internal-internal-carousel-control-color-hover)}.container--edged .page-next,.container--edged .page-previous{block-size:3rem;inline-size:3rem;position:absolute;inset-block-start:50%;transform:translateY(-50%)}.container--edged .page-next{inset-inline-end:0}.container--edged .page-previous{inset-inline-start:0}.container--overlaid .pagination{inset-block-start:unset;inset-block-end:0;inset-inline:0}.pagination-item.autoplay-control{position:relative;color:var(--calcite-internal-internal-carousel-control-color);--calcite-color-brand:var(--calcite-internal-internal-carousel-autoplay-progress-fill-color);--calcite-color-border-3:var(--calcite-internal-internal-carousel-autoplay-progress-background-color)}.autoplay-control:focus .autoplay-progress{inset-block-end:4px;inset-inline:2px;inline-size:calc(100% - 4px)}.autoplay-progress{position:absolute;inset-block-end:2px;inset-inline:0;inline-size:100%}.pagination-item{margin:0px;block-size:2rem;inline-size:2rem;cursor:pointer;align-items:center;border-style:none;background-color:transparent;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;align-content:center;justify-content:center;--calcite-color-foreground-1:var(--calcite-internal-internal-carousel-item-background-color);color:var(--calcite-internal-internal-carousel-item-icon-color)}.pagination-item:hover{background-color:var(--calcite-internal-internal-carousel-item-background-color-hover);color:var(--calcite-internal-internal-carousel-item-icon-color-hover)}.pagination-item:focus{background-color:var(--calcite-internal-internal-carousel-item-background-color-active);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.pagination-item:active{background-color:var(--calcite-internal-internal-carousel-item-background-color-active);color:var(--calcite-internal-internal-carousel-item-icon-color-hover)}.pagination-item calcite-icon{color:inherit;pointer-events:none}.pagination-item.pagination-item--selected{--calcite-color-foreground-1:var(--calcite-internal-internal-carousel-item-background-color-selected);--calcite-color-foreground-3:var(--calcite-internal-internal-carousel-item-background-color-selected);color:var(--calcite-internal-internal-carousel-item-icon-color-selected)}.pagination-item--individual{pointer-events:none;inline-size:0px;padding:0px;opacity:0;visibility:hidden;transition:var(--calcite-animation-timing) ease-in-out inline-size, var(--calcite-animation-timing) ease-in-out padding, var(--calcite-animation-timing) ease-in-out opacity}.pagination-item--individual.pagination-item--visible{pointer-events:auto;inline-size:2rem;opacity:1;visibility:visible}.pagination-item--range-edge calcite-icon{scale:0.75;transition:var(--calcite-animation-timing) ease-in-out scale}.container--overlaid .pagination-item{background-color:var(--calcite-internal-internal-carousel-item-background-color)}.container--overlaid .pagination-item:hover{background-color:var(--calcite-internal-internal-carousel-item-background-color-hover)}.container--overlaid .pagination-item:focus{background-color:var(--calcite-internal-internal-carousel-item-background-color-active)}.container--overlaid .pagination-item:active{background-color:var(--calcite-internal-internal-carousel-item-background-color-active)}@keyframes item-forward{0%{transform:translate3d(100px, 0, 0)}100%{transform:translate3d(0, 0, 0)}}@keyframes item-backward{0%{transform:translate3d(-100px, 0, 0)}100%{transform:translate3d(0, 0, 0)}}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,ee=Z,te=class{constructor(i){S(this,i),this.calciteCarouselChange=p(this,"calciteCarouselChange",6),this.calciteCarouselPlay=p(this,"calciteCarouselPlay",6),this.calciteCarouselStop=p(this,"calciteCarouselStop",6),this.calciteCarouselPause=p(this,"calciteCarouselPause",6),this.calciteCarouselResume=p(this,"calciteCarouselResume",6),this.containerId=`calcite-carousel-container-${z()}`,this.slideDurationInterval=null,this.slideInterval=null,this.resizeObserver=Q("resize",e=>e.forEach(this.resizeHandler)),this.resizeHandler=({contentRect:{width:e}})=>{this.setMaxItemsToBreakpoint(e)},this.autoplayHandler=()=>{this.clearIntervals(),this.slideDurationInterval=setInterval(this.timer,this.autoplayDuration/100)},this.timer=()=>{let e=this.slideDurationRemaining;(!this.suspendedDueToFocus&&!this.suspendedDueToHover||this.userPreventsSuspend)&&(e<=.01?(e=1,this.nextItem(!1)):e=e-.01),e>0&&(this.slideDurationRemaining=e)},this.handleSlotChange=e=>{const t=F(e);if(t.length<1)return;const a=t.findIndex(l=>l.selected),r=a>-1?a:0;this.items=t,this.setSelectedItem(r,!1)},this.setSelectedItem=(e,t)=>{const a=this.selectedIndex;this.items.forEach((r,l)=>{const c=e===l;r.selected=c,c&&(this.selectedItem=r,this.selectedIndex=l)}),t&&(this.playing=!1,a!==this.selectedIndex&&this.calciteCarouselChange.emit())},this.handleArrowClick=e=>{const t=e.target.dataset.direction;t==="next"?(this.direction="forward",this.nextItem(!0)):t==="previous"&&(this.direction="backward",this.previousItem())},this.handleItemSelection=e=>{const t=e.target,a=parseInt(t.dataset.index);a!==this.selectedIndex&&(this.playing&&this.handlePause(!0),this.direction=a>this.selectedIndex?"forward":"backward",this.setSelectedItem(a,!0))},this.toggleRotation=()=>{this.userPreventsSuspend=!0,this.playing?this.handlePause(!0):this.handlePlay(!0)},this.handleFocusIn=()=>{const e=this.playing;e&&(this.suspendedDueToFocus=!0),(!this.suspendedDueToFocus||!this.suspendedDueToHover)&&e&&this.calciteCarouselPause.emit()},this.handleMouseIn=()=>{const e=this.playing;e&&(this.suspendedDueToHover=!0),(!this.suspendedDueToFocus||!this.suspendedDueToHover)&&e&&this.calciteCarouselPause.emit()},this.handleMouseOut=e=>{const t=!this.el.contains(e.relatedTarget),a=this.playing;t&&a&&(this.suspendedDueToHover=!1),t&&a&&!this.suspendedDueToFocus&&(this.userPreventsSuspend=!1,this.calciteCarouselResume.emit())},this.handleFocusOut=e=>{const t=!e.composedPath().includes(e.relatedTarget),a=this.playing;t&&a&&(this.suspendedDueToFocus=!1),t&&a&&!this.suspendedDueToHover&&(this.userPreventsSuspend=!1,this.calciteCarouselResume.emit())},this.containerKeyDownHandler=e=>{if(e.target!==this.container)return;const t=this.items.length-1;switch(e.key){case" ":case"Enter":e.preventDefault(),(this.autoplay===""||this.autoplay||this.autoplay==="paused")&&this.toggleRotation();break;case"ArrowRight":e.preventDefault(),this.direction="forward",this.nextItem(!0);break;case"ArrowLeft":e.preventDefault(),this.direction="backward",this.previousItem();break;case"Home":if(e.preventDefault(),this.selectedIndex===0)return;this.direction="backward",this.setSelectedItem(0,!0);break;case"End":if(e.preventDefault(),this.selectedIndex===t)return;this.direction="forward",this.setSelectedItem(t,!0);break}},this.tabListKeyDownHandler=e=>{const t=Array(...this.tabList.querySelectorAll(`button:not(.${n.paginationItemOutOfRange})`)),a=e.target;switch(e.key){case"ArrowRight":g(t,a,"next");break;case"ArrowLeft":g(t,a,"previous");break;case"Home":e.preventDefault(),g(t,a,"first");break;case"End":e.preventDefault(),g(t,a,"last");break}},this.storeTabListRef=e=>{this.tabList=e},this.storeContainerRef=e=>{this.container=e},this.storeItemContainerRef=e=>{this.itemContainer=e},this.renderRotationControl=()=>{const e=this.playing?this.messages.pause:this.messages.play;return s("button",{"aria-label":e,class:{[n.paginationItem]:!0,[n.autoplayControl]:!0},onClick:this.toggleRotation,title:e},s("calcite-icon",{icon:this.playing?u.pause:u.play,scale:"s"}),this.playing&&s("calcite-progress",{class:n.autoplayProgress,label:this.messages.carouselItemProgress,value:this.slideDurationRemaining}))},this.renderPaginationArea=()=>s("div",{class:{[n.pagination]:!0,[n.containerOverlaid]:this.controlOverlay},onKeyDown:this.tabListKeyDownHandler,ref:this.storeTabListRef},(this.playing||this.autoplay===""||this.autoplay||this.autoplay==="paused")&&this.renderRotationControl(),this.arrowType==="inline"&&this.renderArrow("previous"),this.renderPaginationItems(),this.arrowType==="inline"&&this.renderArrow("next")),this.renderPaginationItems=()=>{const{selectedIndex:e,maxItems:t,items:a,label:r,handleItemSelection:l}=this;return s("div",{"aria-label":r,class:n.paginationItems,role:"tablist"},a.map((c,o)=>{const h=a.length,d=o===e,O=o===0,H=o===h-1,b=h-t-1,f=e<t,y=e>=b,I=f?0:e-Math.floor(t/2),E=y?h:I+t,k=f?0:y?b:I,x=f?t+1:E,L=!O&&!H&&!d&&(o===k-1||o===x),w=d||o<=x&&o>=k-1,C=h-1<=t,A=d?u.active:u.inactive;return s("button",{"aria-controls":d?void 0:c.id,"aria-selected":M(d),class:{[n.paginationItem]:!0,[n.paginationItemIndividual]:!0,[n.paginationItemSelected]:d,[n.paginationItemRangeEdge]:h-1>t&&L,[n.paginationItemOutOfRange]:!(C||w),[n.paginationItemVisible]:C||w},"data-index":o,key:c.id,onClick:l,role:"tab",title:c.label},s("calcite-icon",{icon:A,scale:"l"}))}))},this.renderArrow=e=>{const t=e==="previous",a=W(this.el),r=this.arrowType==="edge"?"m":"s",l=t?n.pagePrevious:n.pageNext,c=t?this.messages.previous:this.messages.next,o=t?u.chevronLeft:u.chevronRight;return s("button",{"aria-controls":this.containerId,class:{[n.paginationItem]:!0,[l]:!0},"data-direction":e,onClick:this.handleArrowClick,title:c},s("calcite-icon",{flipRtl:a==="rtl",icon:o,scale:r}))},this.autoplay=!1,this.arrowType="inline",this.autoplayDuration=X,this.controlOverlay=!1,this.disabled=!1,this.label=void 0,this.messages=void 0,this.messageOverrides=void 0,this.paused=void 0,this.selectedItem=void 0,this.selectedIndex=void 0,this.items=[],this.direction="standby",this.defaultMessages=void 0,this.playing=!1,this.suspendedDueToFocus=!1,this.suspendedDueToHover=!1,this.userPreventsSuspend=!1,this.effectiveLocale="",this.suspendedSlideDurationRemaining=1,this.slideDurationRemaining=1,this.maxItems=m.xxsmall}autoplayWatcher(i){i||this.handlePause(!1)}onMessagesChange(){}connectedCallback(){var i;K(this),G(this),(i=this.resizeObserver)==null||i.observe(this.el)}componentDidLoad(){q(this)}componentDidRender(){$(this)}disconnectedCallback(){var i;N(this),V(this),this.clearIntervals(),(i=this.resizeObserver)==null||i.disconnect()}async componentWillLoad(){(this.autoplay===""||this.autoplay)&&this.autoplay!=="paused"?this.handlePlay(!1):this.autoplay==="paused"&&(this.paused=!0),U(this),await Y(this)}async setFocus(){var i;await _(this),(i=this.container)==null||i.focus()}async play(){this.playing||this.autoplay!==""&&!this.autoplay&&this.autoplay!=="paused"||this.handlePlay(!0)}async stop(){this.playing&&this.handlePause(!0)}async directionWatcher(i){i!=="standby"&&(await B(this.itemContainer,i==="forward"?"item-forward":"item-backward"),this.direction="standby")}playingWatcher(){this.paused=!this.playing}suspendWatcher(){!this.suspendedDueToFocus&&!this.suspendedDueToHover?this.suspendEnd():this.suspendStart()}async effectiveLocaleChange(){await J(this,this.effectiveLocale)}setMaxItemsToBreakpoint(i){if(i){if(i>=v.width.small){this.maxItems=m.medium;return}if(i>=v.width.xsmall){this.maxItems=m.small;return}if(i>=v.width.xxsmall){this.maxItems=m.xsmall;return}this.maxItems=m.xxsmall}}clearIntervals(){clearInterval(this.slideDurationInterval),clearInterval(this.slideInterval)}nextItem(i){this.playing&&i&&(this.playing=!1);const e=D(this.selectedIndex+1,this.items.length);this.setSelectedItem(e,i)}previousItem(){this.playing=!1;const i=D(Math.max(this.selectedIndex-1,-1),this.items.length);this.setSelectedItem(i,!0)}handlePlay(i){this.playing=!0,this.autoplayHandler(),this.slideInterval=setInterval(this.autoplayHandler,this.autoplayDuration),i&&this.calciteCarouselPlay.emit()}handlePause(i){this.playing=!1,this.clearIntervals(),this.slideDurationRemaining=1,this.suspendedSlideDurationRemaining=1,i&&this.calciteCarouselStop.emit()}suspendStart(){this.suspendedSlideDurationRemaining=this.slideDurationRemaining}suspendEnd(){this.slideDurationRemaining=this.suspendedSlideDurationRemaining}render(){const{direction:i}=this;return s(P,{key:"c41171a3b16c6aad1b37f4631a2d123acaca752d"},s(j,{key:"03c90c14f2b3f948c0e349bede237d29ed292c7f",disabled:this.disabled},s("div",{key:"df9af99e67d3b9c61dd6ccac74e82237e8eb17c4","aria-label":this.label,"aria-live":this.playing?"off":"polite","aria-roledescription":this.messages.carousel,class:{[n.container]:!0,[n.containerOverlaid]:this.controlOverlay,[n.containerEdged]:this.arrowType==="edge"},onFocusin:this.handleFocusIn,onFocusout:this.handleFocusOut,onKeyDown:this.containerKeyDownHandler,onMouseEnter:this.handleMouseIn,onMouseLeave:this.handleMouseOut,ref:this.storeContainerRef,role:"group",tabIndex:0},s("section",{key:"7c274a35b9186ba9bb04fd8124be6893eee46e5f",class:{[n.itemContainer]:!0,[n.itemContainerForward]:i==="forward",[n.itemContainerBackward]:i==="backward"},id:this.containerId,ref:this.storeItemContainerRef},s("slot",{key:"0f2497545f4cf4a311ab871bcaf5ff16fe677c77",onSlotchange:this.handleSlotChange})),this.items.length>1&&this.renderPaginationArea(),this.arrowType==="edge"&&this.renderArrow("previous"),this.arrowType==="edge"&&this.renderArrow("next"))))}static get assetsDirs(){return["assets"]}get el(){return T(this)}static get watchers(){return{autoplay:["autoplayWatcher"],messageOverrides:["onMessagesChange"],direction:["directionWatcher"],playing:["playingWatcher"],suspendedDueToFocus:["suspendWatcher"],suspendedDueToHover:["suspendWatcher"],effectiveLocale:["effectiveLocaleChange"]}}};te.style=ee;const R={container:"container",selected:"selected"},ie=":host{display:flex}.container{display:none;inline-size:var(--calcite-container-size-content-fluid)}:host([selected]) .container{display:block}:host([hidden]){display:none}[hidden]{display:none}",ae=ie,ne=class{constructor(i){S(this,i),this.guid=`calcite-carousel-item-${z()}`,this.label=void 0,this.selected=!1}render(){const i=this.el.id||this.guid;return s(P,{key:"5606df99edd6007701f391f095c88270eed4ccf1",id:i},s("div",{key:"7147a10dbb3fa9292da09207709bfa5e7e857bf9","aria-label":this.label,class:{[R.container]:!0,[R.selected]:this.selected},role:"tabpanel"},s("slot",{key:"8b6876c8fc55afd1cac458b97063f66dff2cd9e2"})))}get el(){return T(this)}};ne.style=ae;export{te as calcite_carousel,ne as calcite_carousel_item};
