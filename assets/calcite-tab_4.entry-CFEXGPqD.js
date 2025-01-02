import{r as p,h as c,H as x,g,c as d,b as y,C as P,i as R,F as D}from"./index-Vdm0PCas.js";import{C,s as S,h as N,g as m,D as k,t as M,H as $}from"./dom-b6dedd88-Dfv97P2g.js";import{g as z}from"./guid-9c230b6a-BxSjQh8J.js";import{a as _,b as j,d as q}from"./core-1f5dba8b-Cpfj44ZG.js";import{c as f}from"./observers-9c166451-BH-lH8Vq.js";import{c as E,d as O}from"./locale-60f8ca58-C1W0SjSl.js";import{c as B,s as A,d as F,u as L}from"./t9n-75defee3-BhA3tAgw.js";import{I as V,u as G}from"./interactive-1a42577a-B230YtAx.js";import{g as v}from"./component-5f0a8be8-6CIDVndn.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const w={container:"container",content:"content"},U=`:host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.content{box-sizing:border-box;padding-block:var(--calcite-internal-tab-content-block-padding)}.scale-s{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.25rem);font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.5rem);font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.625rem);font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}.container{outline-color:transparent}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([hidden]){display:none}[hidden]{display:none}`,X=U,J=class{constructor(t){p(this,t),this.guid=`calcite-tab-title-${z()}`,this.tab=void 0,this.selected=!1,this.scale="m",this.labeledBy=void 0}render(){const t=this.el.id||this.guid;return c(x,{key:"5b445405fc60d4af5d48e2b4b42880a47a85a1ed","aria-labelledby":this.labeledBy,id:t},c("div",{key:"724b67e8c277d00f6408aa55f781ad8e91a34a5e",class:{[w.container]:!0,[`scale-${this.scale}`]:!0},role:"tabpanel",tabIndex:this.selected?0:-1},c("section",{key:"9a395308243994365184c0f91d8a16de357c9146",class:w.content},c("slot",{key:"0cddbc27b9d793c83fa580b9aa9c9f915675ec72"}))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var t;(t=document.body)==null||t.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(t){t.composedPath().find(a=>a.tagName==="CALCITE-TABS")===this.parentTabsEl&&(this.tab?this.selected=this.tab===t.detail.tab:this.getTabIndex().then(a=>{this.selected=a===t.detail.tab}),t.stopPropagation())}async getTabIndex(){return Array.prototype.indexOf.call(C(this.el.parentElement.children).filter(t=>t.matches("calcite-tab")),this.el)}async updateAriaInfo(t=[],e=[]){this.labeledBy=e[t.indexOf(this.el.id)]||null}get el(){return g(this)}};J.style=X;const I={chevronRight:"chevron-right",chevronLeft:"chevron-left"},u={container:"tab-nav",containerHasEndTabTitleOverflow:"tab-nav--end-overflow",containerHasStartTabTitleOverflow:"tab-nav--start-overflow",scrollButton:"scroll-button",scrollButtonContainer:"scroll-button-container",scrollBackwardContainerButton:"scroll-button-container--backward",scrollForwardContainerButton:"scroll-button-container--forward",tabTitleSlotWrapper:"tab-titles-slot-wrapper"},Y=':host{--calcite-internal-tab-nav-gradient-start-side:left;--calcite-internal-tab-nav-gradient-end-side:right;position:relative;display:flex}.scale-s{--calcite-internal-tab-nav-scroller-button-width:24px;min-block-size:1.5rem}.scale-m{--calcite-internal-tab-nav-scroller-button-width:32px;min-block-size:2rem}.scale-l{--calcite-internal-tab-nav-scroller-button-width:44px;min-block-size:2.75rem}.calcite--rtl{--calcite-internal-tab-nav-gradient-start-side:right;--calcite-internal-tab-nav-gradient-end-side:left}.tab-nav--start-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%)}.tab-nav--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%)}.tab-nav--start-overflow.tab-nav--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%, transparent 51%), linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%, transparent 51%)}.tab-nav::-webkit-scrollbar{display:none;-ms-overflow-style:none;scrollbar-width:none}:host([layout=center]) ::slotted(calcite-tab-title){display:flex;flex-grow:1;flex-shrink:0;min-inline-size:auto;white-space:nowrap}:host([layout=center]) ::slotted(calcite-tab-title[selected]){overflow:unset}:host(:not([bordered])) .scale-l{--calcite-internal-tab-nav-gap:var(--calcite-size-xxl)}:host(:not([bordered])) .scale-m{--calcite-internal-tab-nav-gap:var(--calcite-size-xl)}:host(:not([bordered])) .scale-s{--calcite-internal-tab-nav-gap:var(--calcite-size-lg)}:host(:not([bordered])) .tab-titles-slot-wrapper{gap:var(--calcite-internal-tab-nav-gap)}:host([layout=center]:not([bordered])) .tab-titles-slot-wrapper{padding-inline:var(--calcite-spacing-xxl)}.tab-nav,.tab-titles-slot-wrapper{display:flex;inline-size:100%;justify-content:flex-start;overflow:hidden;white-space:nowrap}.scroll-button-container{position:absolute;inset-block:0px}.scroll-button-container calcite-button{--calcite-offset-invert-focus:1;--calcite-color-text-1:var(--calcite-color-text-3);block-size:100%}.scroll-button-container calcite-button:hover{--calcite-color-text-1:unset;--calcite-color-foreground-1:var(--calcite-color-transparent-hover);--calcite-color-foreground-3:var(--calcite-color-transparent)}.scroll-button-container--forward{inset-inline-end:0;z-index:var(--calcite-z-index)}.scroll-button-container--backward{inset-inline-start:0;z-index:var(--calcite-z-index)}:host(:not([bordered])) .scroll-button-container--backward::before,:host(:not([bordered])) .scroll-button-container--forward::before{background-color:var(--calcite-color-border-3);content:"";inline-size:var(--calcite-border-width-sm);inset-block-start:var(--calcite-border-width-md);inset-block-end:var(--calcite-border-width-md);position:absolute}:host(:not([bordered])) .scroll-button-container--backward::before{inset-inline-end:0}:host(:not([bordered])) .scroll-button-container--forward::before{inset-inline-start:0}:host([hidden]){display:none}[hidden]{display:none}',K=Y,Q=class{constructor(t){p(this,t),this.calciteTabChange=d(this,"calciteTabChange",6),this.calciteInternalTabNavSlotChange=d(this,"calciteInternalTabNavSlotChange",7),this.calciteInternalTabChange=d(this,"calciteInternalTabChange",6),this.effectiveDir="ltr",this.lastScrollWheelAxis="x",this.resizeObserver=f("resize",()=>{this.updateScrollingState()}),this.onTabTitleWheel=e=>{e.preventDefault();const{deltaX:a,deltaY:i}=e,n=Math.abs(a),o=Math.abs(i);let l;n===o?l=this.lastScrollWheelAxis==="x"?a:i:n>o?(l=a,this.lastScrollWheelAxis="x"):(l=i,this.lastScrollWheelAxis="y");const s=(this.effectiveDir==="rtl"?-1:1)*l;e.currentTarget.scrollBy(s,0)},this.onSlotChange=e=>{var i;(i=this.intersectionObserver)==null||i.disconnect();const a=S(e,"calcite-tab-title");a.forEach(n=>{var o;(o=this.intersectionObserver)==null||o.observe(n)}),this.calciteInternalTabNavSlotChange.emit(a)},this.storeTabTitleWrapperRef=e=>{this.tabTitleContainerEl=e,this.intersectionObserver=f("intersection",()=>this.updateScrollingState(),{root:e,threshold:[0,.5,1]})},this.scrollToTabTitles=e=>{y(()=>{const a=this.tabTitleContainerEl,i=a.getBoundingClientRect(),n=Array.from(this.el.querySelectorAll("calcite-tab-title")),{effectiveDir:o}=this;e==="forward"&&n.reverse();let l=null;if(n.forEach(s=>{const b=s.getBoundingClientRect(),h=i.x+i.width,T=b.x+b.width;e==="forward"&&o==="ltr"||e==="backward"&&o==="rtl"?(b.x>h||T>h&&b.x>i.x)&&(l=s):(T<i.x||T<h&&b.x<i.x)&&(l=s)}),l){const{scrollerButtonWidth:s}=this,b=e==="forward"&&o==="ltr"||e==="backward"&&o==="rtl"?-s:l.offsetWidth-a.clientWidth+s,h=l.offsetLeft+b;a.scrollTo({left:h,behavior:"smooth"})}})},this.scrollToNextTabTitles=()=>this.scrollToTabTitles("forward"),this.scrollToPreviousTabTitles=()=>this.scrollToTabTitles("backward"),this.handleTabFocus=(e,a,i)=>{const n=N(this.enabledTabTitles,a,i);this.scrollTabTitleIntoView(n,"instant"),e.stopPropagation()},this.onTabTitleScroll=()=>{this.updateScrollingState()},this.renderScrollButton=e=>{const{bordered:a,messages:i,hasOverflowingStartTabTitle:n,hasOverflowingEndTabTitle:o,scale:l}=this,s=e==="end";return c("div",{class:{[u.scrollButtonContainer]:!0,[u.scrollBackwardContainerButton]:!s,[u.scrollForwardContainerButton]:s},hidden:s&&!o||!s&&!n,key:e},c("calcite-button",{appearance:a?"outline-fill":"transparent","aria-label":s?i.nextTabTitles:i.previousTabTitles,class:{[u.scrollButton]:!0},iconFlipRtl:"both",iconStart:s?I.chevronRight:I.chevronLeft,kind:"neutral",onClick:s?this.scrollToNextTabTitles:this.scrollToPreviousTabTitles,scale:l,tabIndex:-1}))},this.storageId=void 0,this.syncId=void 0,this.selectedTitle=null,this.scale="m",this.layout="inline",this.position="bottom",this.bordered=!1,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasOverflowingStartTabTitle=!1,this.hasOverflowingEndTabTitle=!1,this.selectedTabId=void 0}selectedTitleChanged(){this.calciteInternalTabChange.emit({tab:this.selectedTabId})}onMessagesChange(){}connectedCallback(){var t;this.parentTabsEl=this.el.closest("calcite-tabs"),(t=this.resizeObserver)==null||t.observe(this.el),E(this),B(this)}async componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;if(localStorage&&this.storageId&&localStorage.getItem(t)){const e=JSON.parse(localStorage.getItem(t));this.selectedTabId=e}await A(this)}componentDidLoad(){this.scrollTabTitleIntoView(this.selectedTitle,"instant")}componentWillRender(){const{parentTabsEl:t}=this;this.layout=t==null?void 0:t.layout,this.bordered=t==null?void 0:t.bordered,this.effectiveDir=m(this.el)}componentDidRender(){this.tabTitles.length&&this.tabTitles.every(t=>!t.selected)&&!this.selectedTabId&&this.tabTitles[0].getTabIdentifier().then(t=>{this.calciteInternalTabChange.emit({tab:t})})}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.disconnect(),O(this),F(this)}render(){return c(x,{key:"9d1138405f2423bddcd9d1bb49dc756e582f8375",role:"tablist"},c("div",{key:"f8759781080b2a093f062d0b6172de6d3ea9355d",class:{[u.container]:!0,[u.containerHasStartTabTitleOverflow]:!!this.hasOverflowingStartTabTitle,[u.containerHasEndTabTitleOverflow]:!!this.hasOverflowingEndTabTitle,[`scale-${this.scale}`]:!0,[`position-${this.position}`]:!0,[P.rtl]:this.effectiveDir==="rtl"}},this.renderScrollButton("start"),c("div",{key:"eda664514cb5c89136184c6e8f29e50ce7c9b56b",class:{[u.tabTitleSlotWrapper]:!0},onScroll:this.onTabTitleScroll,onWheel:this.onTabTitleWheel,ref:this.storeTabTitleWrapperRef},c("slot",{key:"0c5a40eac082662a2c2b032d977900b91f122214",onSlotchange:this.onSlotChange})),this.renderScrollButton("end")))}focusPreviousTabHandler(t){this.handleTabFocus(t,t.target,"previous")}focusNextTabHandler(t){this.handleTabFocus(t,t.target,"next")}focusFirstTabHandler(t){this.handleTabFocus(t,t.target,"first")}focusLastTabHandler(t){this.handleTabFocus(t,t.target,"last")}internalActivateTabHandler(t){const e=t.target;this.selectedTabId=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(e),t.stopPropagation(),this.selectedTitle=e,this.scrollTabTitleIntoView(e)}scrollTabTitleIntoView(t,e="smooth"){t&&y(()=>{const a=this.effectiveDir==="ltr",i=this.tabTitleContainerEl,n=i.getBoundingClientRect(),o=t.getBoundingClientRect(),l=i.scrollLeft,s=a?this.hasOverflowingStartTabTitle:this.hasOverflowingEndTabTitle,b=a?this.hasOverflowingEndTabTitle:this.hasOverflowingStartTabTitle;if(o.left<n.left+(s?this.scrollerButtonWidth:0)){const h=l+(o.left-n.left)-this.scrollerButtonWidth;i.scrollTo({left:h,behavior:e})}else if(o.right>n.right-(b?this.scrollerButtonWidth:0)){const h=l+(o.right-n.right)+this.scrollerButtonWidth;i.scrollTo({left:h,behavior:e})}})}activateTabHandler(t){this.calciteTabChange.emit(),t.stopPropagation()}internalCloseTabHandler(t){const e=t.target;this.handleTabTitleClose(e),t.stopPropagation()}async updateTabTitles(t){t.target.selected&&(this.selectedTabId=t.detail,this.selectedTitle=await this.getTabTitleById(this.selectedTabId))}globalInternalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTabId!==t.detail.tab&&(this.selectedTabId=t.detail.tab),t.stopPropagation()}effectiveLocaleChange(){L(this,this.effectiveLocale)}async selectedTabIdChanged(){localStorage&&this.storageId&&this.selectedTabId!==void 0&&this.selectedTabId!==null&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTabId)),this.calciteInternalTabChange.emit({tab:this.selectedTabId})}get scrollerButtonWidth(){const{scale:t}=this;return parseInt(t==="s"?_:t==="m"?j:q)}updateScrollingState(){const t=this.tabTitleContainerEl;if(!t)return;let e,a;const i=t.scrollLeft,n=t.clientWidth,o=t.scrollWidth;this.effectiveDir==="ltr"?(e=i>0,a=i+n<o):(e=i<0,a=i!==-(o-n)),this.hasOverflowingStartTabTitle=e,this.hasOverflowingEndTabTitle=a}getIndexOfTabTitle(t,e=this.tabTitles){return e.indexOf(t)}async getTabTitleById(t){return Promise.all(this.tabTitles.map(e=>e.getTabIdentifier())).then(e=>this.tabTitles[e.indexOf(t)])}get tabTitles(){return k(this.el,"calcite-tab-title")}get enabledTabTitles(){return k(this.el,"calcite-tab-title:not([disabled])").filter(t=>!t.closed)}handleTabTitleClose(t){const{tabTitles:e}=this,a=t.selected,i=e.reduce((o,l,s)=>l.closed?o:[...o,s],[]),n=i.length;if(n===1&&e[i[0]].closable)e[i[0]].closable=!1,this.selectedTabId=i[0],a&&e[i[0]].activateTab();else if(n>1){const o=e.findIndex(s=>s===t),l=i.find(s=>s>o);this.selectedTabId===o&&(this.selectedTabId=l||n-1,e[this.selectedTabId].activateTab())}requestAnimationFrame(()=>{e[this.selectedTabId].focus()})}static get assetsDirs(){return["assets"]}get el(){return g(this)}static get watchers(){return{selectedTitle:["selectedTitleChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],selectedTabId:["selectedTabIdChanged"]}}};Q.style=K;const r={closeButton:"close-button",container:"container",containerBottom:"container--bottom",content:"content",contentHasText:"content--has-text",iconEnd:"icon-end",iconPresent:"icon-present",iconStart:"icon-start",titleIcon:"calcite-tab-title--icon",scale:t=>`scale-${t}`,selectedIndicator:"selected-indicator"},Z={close:"x"},tt=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px}:host([layout=inline]){flex:0 1 auto}:host([layout=center]){flex:1 1 auto}.content{position:relative;margin-block-end:0.125rem;box-sizing:border-box;display:flex;block-size:100%;align-items:center;justify-content:center}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-s .close-button{inline-size:1.25rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-m .close-button{inline-size:1.75rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.scale-l .close-button{inline-size:2rem}:host([closable]) .content{border-block-end-color:transparent}:host([layout=inline]) .content,:host([layout=center]) .content{padding-inline:0.25rem}:host([layout=center]) .scale-s,:host([layout=center]) .scale-m,:host([layout=center]) .scale-l{margin-block:0px;justify-content:center;text-align:center}:host([layout=center]) .scale-s .content,:host([layout=center]) .scale-m .content,:host([layout=center]) .scale-l .content{flex:1 1 auto;flex-grow:1}.container{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-content:center;justify-content:space-between;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.selected-indicator{position:absolute;display:block;block-size:0.125rem;inline-size:100%;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%}.container--bottom .selected-indicator{inset-block-end:unset;inset-block-start:0}:host([bordered]) .selected-indicator{inset-block-start:0;inset-block-end:unset;inset-inline-start:-1px;inset-inline-end:0;inline-size:calc(100% + var(--calcite-spacing-base))}:host([bordered]) .container:not(.container--bottom){border-block-end:1px solid transparent}:host([bordered]:not([selected]):hover) .container:not(.container--bottom){border-block-end:1px solid var(--calcite-color-border-1)}:host([bordered]:not([selected]):hover:not(:focus)) .selected-indicator{background-color:var(--calcite-color-foreground-2)}:host([bordered]:not([selected]):hover:not(:focus)) .container:not(.container--bottom) .selected-indicator{box-shadow:inset 0 1px var(--calcite-color-border-1)}:host([bordered]:not([selected]):hover:not(:focus)) .container.container--bottom .selected-indicator{box-shadow:inset 0 -1px var(--calcite-color-border-1)}:host([bordered][selected]) .container::after{position:absolute;display:block;block-size:0.125rem;inline-size:100%;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inset-block-end:-1px;inset-inline-start:0;inset-inline-end:0;inline-size:100%;background:var(--calcite-color-foreground-1);content:""}:host([bordered][selected]) .container.container--bottom::after{inset-block-start:-1px}:host([bordered][selected]:hover) .container::after{background:var(--calcite-color-foreground-2)}:host([bordered][selected]:focus) .container::after{background:transparent}:host([bordered]) .container--bottom .selected-indicator{inset-block-start:unset;inset-block-end:0}:host([selected]) .selected-indicator,:host([selected]:hover) .selected-indicator{background-color:var(--calcite-color-brand)}:host(:hover) .selected-indicator{background-color:var(--calcite-color-border-3)}:host(:focus) .selected-indicator,:host(:active) .selected-indicator{background-color:var(--calcite-color-brand)}@media (forced-colors: active){.selected-indicator{background-color:highlight}}:host([closed]){display:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-color-text-1)}:host(:focus) .container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:focus) .container:focus-within{outline-color:transparent}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-color-border-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.content--has-text{padding:0.25rem}.content--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:var(--calcite-spacing-sm)}.content--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:var(--calcite-spacing-sm)}.close-button{display:flex;block-size:100%;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-start:var(--calcite-spacing-sm);margin-inline-end:var(--calcite-spacing-px);block-size:calc(100% - var(--calcite-spacing-xxs))}.close-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand))}.close-button:focus,.close-button:hover{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.close-button:active{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.close-button calcite-icon{color:inherit}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:var(--calcite-spacing-sm)}:host([bordered]) .container:not(.container--bottom) .close-button{block-size:calc(100% - var(--calcite-spacing-px));margin-block-start:-1px}:host([bordered]) .container .close-button calcite-icon{margin-block-start:var(--calcite-spacing-px)}:host([bordered]) .container .close-button:focus,:host([bordered]) .container .close-button:hover,:host([bordered]) .container .close-button:active{box-shadow:0 2px 0 0 var(--calcite-color-foreground-3)}:host([bordered]) .container.container--bottom .close-button{box-shadow:0 -2px 0 0 transparent}:host([bordered]) .container.container--bottom .close-button calcite-icon{margin-block-end:var(--calcite-spacing-px)}:host([bordered]) .container.container--bottom .close-button:focus,:host([bordered]) .container.container--bottom .close-button:hover,:host([bordered]) .container.container--bottom .close-button:active{box-shadow:0 -2px 0 0 var(--calcite-color-foreground-3)}:host([bordered][selected]){box-shadow:inset 0 -1px var(--calcite-color-foreground-1)}:host([bordered]:not([selected])) .container .close-button{box-shadow:0 2px 0 0 transparent}:host([bordered]:hover) .container{background-color:var(--calcite-color-foreground-2)}:host([bordered]) .container{border-inline:var(--calcite-spacing-px) solid transparent}:host([selected][bordered]) .container{border-inline-color:var(--calcite-color-border-1)}:host([layout=inline][bordered]) .scale-m .content,:host([layout=center][bordered]) .scale-m .content{padding-inline:0.75rem}:host([layout=inline][bordered]) .scale-s .content,:host([layout=center][bordered]) .scale-s .content{padding-inline:0.5rem}:host([layout=inline][bordered]) .scale-l .content,:host([layout=center][bordered]) .scale-l .content{padding-inline:1rem}:host([layout=inline][closable]) .scale-s .content,:host([layout=inline][closable]) .scale-m .content,:host([layout=inline][closable]) .scale-l .content{padding-inline-end:0}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered]) .container--bottom{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][selected]) .container--bottom{border-block-start-style:none}.close-button{z-index:var(--calcite-z-index)}}:host([hidden]){display:none}[hidden]{display:none}`,et=tt,it=class{constructor(t){p(this,t),this.calciteTabsActivate=d(this,"calciteTabsActivate",6),this.calciteInternalTabsActivate=d(this,"calciteInternalTabsActivate",6),this.calciteTabsClose=d(this,"calciteTabsClose",6),this.calciteInternalTabsClose=d(this,"calciteInternalTabsClose",6),this.calciteInternalTabsFocusNext=d(this,"calciteInternalTabsFocusNext",6),this.calciteInternalTabsFocusPrevious=d(this,"calciteInternalTabsFocusPrevious",6),this.calciteInternalTabsFocusFirst=d(this,"calciteInternalTabsFocusFirst",6),this.calciteInternalTabsFocusLast=d(this,"calciteInternalTabsFocusLast",6),this.calciteInternalTabTitleRegister=d(this,"calciteInternalTabTitleRegister",6),this.calciteInternalTabIconChanged=d(this,"calciteInternalTabIconChanged",6),this.closeClickHandler=()=>{this.closeTabTitleAndNotify()},this.mutationObserver=f("mutation",()=>this.updateHasText()),this.resizeObserver=f("resize",()=>{this.calciteInternalTabIconChanged.emit()}),this.guid=`calcite-tab-title-${z()}`,this.selected=!1,this.closable=!1,this.closed=!1,this.disabled=!1,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.layout=void 0,this.position="top",this.scale="m",this.bordered=!1,this.tab=void 0,this.messages=void 0,this.messageOverrides=void 0,this.controls=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasText=!1}selectedHandler(){this.selected&&this.activateTab(!1)}onMessagesChange(){}connectedCallback(){E(this),B(this),this.setupTextContentObserver(),this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var t,e,a;(t=this.mutationObserver)==null||t.disconnect(),(e=document.body)==null||e.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el})),(a=this.resizeObserver)==null||a.disconnect(),O(this),F(this)}async componentWillLoad(){await A(this),R()&&this.updateHasText(),this.tab&&this.selected&&this.activateTab(!1)}componentWillRender(){this.parentTabsEl&&(this.layout=this.parentTabsEl.layout,this.bordered=this.parentTabsEl.bordered)}render(){const{el:t,closed:e}=this,a=t.id||this.guid,i=c("calcite-icon",{key:"367d0a3590f1b47a36fcef27a4c361b2b738769a",class:{[r.titleIcon]:!0,[r.iconStart]:!0},flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:v(this.scale)}),n=c("calcite-icon",{key:"d41dab345260f907ad3b00538117c576856672fd",class:{[r.titleIcon]:!0,[r.iconEnd]:!0},flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:v(this.scale)});return c(x,{key:"f5f5339ebcead5f63154d4b8f562782d20e30b06","aria-controls":this.controls,"aria-selected":M(this.selected),id:a,role:"tab",tabIndex:this.selected&&!this.disabled?0:-1},c(V,{key:"0115c7e0367be91f3a9014243fb99cecd48d5f79",disabled:this.disabled},c("div",{key:"7303b10302cfc93c03386036d98aa46a6b74afa7",class:{[r.container]:!0,[r.containerBottom]:this.position==="bottom",[r.iconPresent]:!!this.iconStart||!!this.iconEnd,[r.scale(this.scale)]:!0},hidden:e,ref:o=>{var l;return(l=this.resizeObserver)==null?void 0:l.observe(o)}},c("div",{key:"af603e50b1a853f3e4ca35357ae7778ca9bdaafb",class:{[r.content]:!0,[r.contentHasText]:this.hasText}},this.iconStart?i:null,c("slot",{key:"a650492336b0f78f11c0d534351b0ab570dd1db8"}),this.iconEnd?n:null),this.renderCloseButton(),c("div",{key:"8d8a0438c867cdf0c2642b9a9bc7ce697aabb871",class:r.selectedIndicator}))))}renderCloseButton(){const{closable:t,messages:e}=this;return t?c("button",{"aria-label":e.close,class:r.closeButton,disabled:!1,key:r.closeButton,onClick:this.closeClickHandler,ref:a=>this.closeButtonEl=a,title:e.close,type:"button"},c("calcite-icon",{icon:Z.close,scale:v(this.scale)})):null}async componentDidLoad(){this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier())}componentDidRender(){G(this)}internalTabChangeHandler(t){t.composedPath().find(a=>a.tagName==="CALCITE-TABS")===this.parentTabsEl&&(this.tab?this.selected=this.tab===t.detail.tab:this.getTabIndex().then(a=>{this.selected=a===t.detail.tab}),t.stopPropagation())}onClick(){this.activateTab()}keyDownHandler(t){switch(t.key){case" ":case"Enter":t.composedPath().includes(this.closeButtonEl)||(this.activateTab(),t.preventDefault());break;case"ArrowRight":t.preventDefault(),m(this.el)==="ltr"?this.calciteInternalTabsFocusNext.emit():this.calciteInternalTabsFocusPrevious.emit();break;case"ArrowLeft":t.preventDefault(),m(this.el)==="ltr"?this.calciteInternalTabsFocusPrevious.emit():this.calciteInternalTabsFocusNext.emit();break;case"Home":t.preventDefault(),this.calciteInternalTabsFocusFirst.emit();break;case"End":t.preventDefault(),this.calciteInternalTabsFocusLast.emit();break}}async getTabIndex(){return Array.prototype.indexOf.call(C(this.el.parentElement.children).filter(t=>t.matches("calcite-tab-title")),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(t=[],e=[]){this.controls=t[e.indexOf(this.el.id)]||null}async activateTab(t=!0){if(this.disabled||this.closed)return;const e={tab:this.tab};this.calciteInternalTabsActivate.emit(e),t&&requestAnimationFrame(()=>this.calciteTabsActivate.emit())}effectiveLocaleChange(){L(this,this.effectiveLocale)}updateHasText(){this.hasText=this.el.textContent.trim().length>0}setupTextContentObserver(){var t;(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0})}closeTabTitleAndNotify(){this.closed=!0,this.calciteInternalTabsClose.emit({tab:this.tab}),this.calciteTabsClose.emit()}static get assetsDirs(){return["assets"]}get el(){return g(this)}static get watchers(){return{selected:["selectedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};it.style=et;const at={titleGroup:"title-group"},ot=":host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1);background-color:var(--calcite-color-foreground-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1)}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1), inset 0 -1px 0 var(--calcite-color-border-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-color-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-color-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}",nt=ot,st=class{constructor(t){p(this,t),this.defaultSlotChangeHandler=e=>{this.tabs=S(e,"calcite-tab")},this.setDefaultSlotRef=e=>this.slotEl=e,this.layout="inline",this.position="top",this.scale="m",this.bordered=!1,this.titles=[],this.tabs=[]}handleInheritableProps(){this.updateItems()}calciteInternalTabNavSlotChangeHandler(t){t.stopPropagation(),t.detail.length!==this.titles.length&&(this.titles=t.detail)}titlesWatcher(){this.updateAriaSettings(),this.updateItems()}tabsWatcher(){this.updateAriaSettings(),this.updateItems()}async updateAriaSettings(){let t,e;const a=$(this.slotEl,"calcite-tab");if(a.some(i=>i.tab)||this.titles.some(i=>i.tab))t=a.sort((i,n)=>i.tab.localeCompare(n.tab)).map(i=>i.id),e=this.titles.sort((i,n)=>i.tab.localeCompare(n.tab)).map(i=>i.id);else{const i=await Promise.all(a.map(o=>o.getTabIndex())),n=await Promise.all(this.titles.map(o=>o.getTabIndex()));t=i.reduce((o,l,s)=>(o[l]=a[s].id,o),[]),e=n.reduce((o,l,s)=>(o[l]=this.titles[s].id,o),[])}a.forEach(i=>i.updateAriaInfo(t,e)),this.titles.forEach(i=>i.updateAriaInfo(t,e))}updateItems(){const{position:t,scale:e}=this,a=this.el.querySelector("calcite-tab-nav");a&&(a.position=t,a.scale=e),Array.from(this.el.querySelectorAll("calcite-tab")).forEach(i=>{i.parentElement===this.el&&(i.scale=e)}),Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach(i=>{i.position=t,i.scale=e})}connectedCallback(){this.updateItems()}async componentWillLoad(){this.updateItems()}disconnectedCallback(){}render(){return c(D,{key:"d06e888984e54b6b91b3345b42c217d322b46a64"},c("slot",{key:"d42da82a176cc1ad492cf1c548b96fc0ca53bc73",name:at.titleGroup}),c("section",{key:"21e944ce899b9bb2507fc9d9be81d8faa4a1a610"},c("slot",{key:"25d4cd299d8529392f6b01deefd3356f8cd6050b",onSlotchange:this.defaultSlotChangeHandler,ref:this.setDefaultSlotRef})))}get el(){return g(this)}static get watchers(){return{position:["handleInheritableProps"],scale:["handleInheritableProps"],titles:["titlesWatcher"],tabs:["tabsWatcher"]}}};st.style=nt;export{J as calcite_tab,Q as calcite_tab_nav,it as calcite_tab_title,st as calcite_tabs};
//# sourceMappingURL=calcite-tab_4.entry-CFEXGPqD.js.map
