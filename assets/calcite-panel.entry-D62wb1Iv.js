import{r as H,c as u,h as t,H as k,g as z}from"./index-UqHiE_Ae.js";import{a as l,s as v,f as w,t as x}from"./dom-b6dedd88-DbdM_9lX.js";import{u as F,I as E}from"./interactive-1a42577a-DpDf_7D-.js";import{s as P,a as B,c as T}from"./loadable-13e9ffb2-D4A0Qvlc.js";import{c as M}from"./observers-9c166451-BOVuqTo3.js";import{S as L}from"./resources-fa285c14-Ka4DNstb.js";import{H as I}from"./Heading-4aed0b02-BQ1KXGXI.js";import{c as N,d as D}from"./locale-60f8ca58-Bynj9zbm.js";import{c as O,s as j,d as U,u as R}from"./t9n-75defee3-tjks3Jvf.js";import{b as K}from"./floating-ui-382f6e89-CxolzGzl.js";import{S as s,C as i,I as S,a as f}from"./resources-f4a93932-wtID6CGE.js";import"./debounce-6e4946fd-CA9eFM3j.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const W=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]){--calcite-internal-panel-default-padding:var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding:10px}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-panel-default-padding:var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-lg)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-panel-default-padding:var(--calcite-spacing-xl);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-xxl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0);line-height:1.25rem}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;outline-color:transparent;padding:var(--calcite-panel-content-space, 0);background:var(--calcite-panel-background-color, var(--calcite-color-background))}.content-wrapper:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.content-top,.content-bottom{padding:var(--calcite-internal-panel-default-padding)}.header-content{flex:1 1 auto;padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-padding)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-padding))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-padding)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-padding)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}`,_=W,q=class{constructor(o){H(this,o),this.calcitePanelClose=u(this,"calcitePanelClose",6),this.calcitePanelToggle=u(this,"calcitePanelToggle",6),this.calcitePanelScroll=u(this,"calcitePanelScroll",6),this.resizeObserver=M("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;if(!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number")return;e.scrollHeight>e.offsetHeight?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.handleUserClose(),e.preventDefault())},this.handleUserClose=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.open=()=>{this.isClosed=!1},this.close=async()=>{const e=this.beforeClose??(()=>Promise.resolve());try{await e()}catch{requestAnimationFrame(()=>{this.closed=!1});return}this.isClosed=!0},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=l(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=l(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=l(e)},this.handleActionBarSlotChange=e=>{const n=v(e).filter(a=>a==null?void 0:a.matches("calcite-action-bar"));n.forEach(a=>a.layout="horizontal"),this.hasActionBar=!!n.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=l(e)},this.handleFabSlotChange=e=>{this.hasFab=l(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=l(e)},this.handleFooterEndSlotChange=e=>{this.hasFooterEndContent=l(e)},this.handleFooterStartSlotChange=e=>{this.hasFooterStartContent=l(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=l(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=l(e)},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=l(e)},this.setPanelScrollEl=e=>{var n,a;this.panelScrollEl=e,(n=this.resizeObserver)==null||n.disconnect(),e&&((a=this.resizeObserver)==null||a.observe(e),this.resizeHandler())},this.handleAlertsSlotChange=e=>{var n;(n=v(e))==null||n.map(a=>{a.nodeName==="CALCITE-ALERT"&&(a.embedded=!0)})},this.beforeClose=void 0,this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuFlipPlacements=void 0,this.menuOpen=!1,this.menuPlacement=K,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.isClosed=!1,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFab=!1,this.hasFooterActions=!1,this.hasFooterContent=!1,this.hasFooterEndContent=!1,this.hasFooterStartContent=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}toggleDialog(o){o?this.close():this.open()}onMessagesChange(){}connectedCallback(){N(this),O(this)}async componentWillLoad(){P(this),this.isClosed=this.closed,await j(this)}componentDidLoad(){B(this)}componentDidRender(){F(this)}disconnectedCallback(){var o;D(this),U(this),(o=this.resizeObserver)==null||o.disconnect()}effectiveLocaleChange(){R(this,this.effectiveLocale)}async setFocus(){await T(this),w(this.containerEl)}async scrollContentTo(o){var e;(e=this.panelScrollEl)==null||e.scrollTo(o)}renderHeaderContent(){const{heading:o,headingLevel:e,description:n,hasHeaderContent:a}=this,r=o?t(I,{class:i.heading,level:e},o):null,c=n?t("span",{class:i.description},n):null;return!a&&(r||c)?t("div",{class:i.headerContent,key:"header-content"},r,c):null}renderActionBar(){return t("div",{class:i.actionBarContainer,hidden:!this.hasActionBar},t("slot",{name:s.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return t("div",{class:i.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},t("slot",{name:s.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:o}=this;return t("div",{class:{[i.headerActionsStart]:!0,[i.headerActions]:!0},hidden:!o,key:"header-actions-start"},t("slot",{name:s.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:o,messages:e,closable:n,collapsed:a,collapseDirection:r,collapsible:c,hasMenuItems:p}=this,{collapse:d,expand:h,close:g}=e,m=[f.expand,f.collapse];r==="up"&&m.reverse();const b=c?t("calcite-action",{"aria-expanded":x(!a),"aria-label":d,icon:a?m[0]:m[1],id:S.collapse,onClick:this.collapse,scale:this.scale,text:d,title:a?h:d}):null,C=n?t("calcite-action",{"aria-label":g,icon:f.close,id:S.close,onClick:this.handleUserClose,scale:this.scale,text:g,title:g}):null,y=t("slot",{name:s.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),A=o||b||C||p;return t("div",{class:{[i.headerActionsEnd]:!0,[i.headerActions]:!0},hidden:!A,key:"header-actions-end"},y,this.renderMenu(),b,C)}renderMenu(){const{hasMenuItems:o,messages:e,menuOpen:n,menuFlipPlacements:a,menuPlacement:r}=this;return t("calcite-action-menu",{flipPlacements:a??["top","bottom"],hidden:!o,key:"menu",label:e.options,open:n,overlayPositioning:this.overlayPositioning,placement:r},t("calcite-action",{icon:f.menu,scale:this.scale,slot:L.trigger,text:e.options}),t("slot",{name:s.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:o,hasStartActions:e,hasEndActions:n,closable:a,collapsible:r,hasMenuItems:c,hasActionBar:p}=this,d=this.renderHeaderContent(),h=o||!!d||e||n||r||a||c;return this.showHeaderContent=h,t("header",{class:i.header,hidden:!(h||p)},t("div",{class:{[i.headerContainer]:!0,[i.headerContainerBorderEnd]:p},hidden:!h},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),d,this.renderHeaderActionsEnd()),this.renderActionBar(),this.renderContentTop())}renderFooterNode(){const{hasFooterEndContent:o,hasFooterStartContent:e,hasFooterContent:n,hasFooterActions:a}=this,r=e||o||n||a;return t("footer",{class:i.footer,hidden:!r},t("div",{class:i.footerContent,hidden:!n},t("slot",{name:s.footer,onSlotchange:this.handleFooterSlotChange})),t("div",{class:i.footerStart,hidden:n||!e},t("slot",{name:s.footerStart,onSlotchange:this.handleFooterStartSlotChange})),t("div",{class:i.footerEnd,hidden:n||!o},t("slot",{name:s.footerEnd,onSlotchange:this.handleFooterEndSlotChange})),t("div",{class:i.footerActions,hidden:n||!a},t("slot",{key:"footer-actions-slot",name:s.footerActions,onSlotchange:this.handleFooterActionsSlotChange})))}renderContent(){return t("div",{class:i.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},t("slot",null),this.renderFab())}renderContentBottom(){return t("div",{class:i.contentBottom,hidden:!this.hasContentBottom},t("slot",{name:s.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderContentTop(){return t("div",{class:i.contentTop,hidden:!this.hasContentTop},t("slot",{name:s.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderFab(){return t("div",{class:i.fabContainer,hidden:!this.hasFab},t("slot",{name:s.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:o,loading:e,isClosed:n}=this,a=t("article",{key:"0f439dffdca536eb6973ac386b0566091249aee3","aria-busy":x(e),class:i.container,hidden:n,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderContentBottom(),this.renderFooterNode(),t("slot",{key:"alerts",name:s.alerts,onSlotchange:this.handleAlertsSlotChange}));return t(k,{key:"6e5baec07ecb356871dea038ebc2d5ee2d8ed54f",onKeyDown:this.panelKeyDownHandler},t(E,{key:"924cda1799b359f1bb3fb119cebfff5a7349b72d",disabled:o},e?t("calcite-scrim",{loading:e}):null,a))}static get assetsDirs(){return["assets"]}get el(){return z(this)}static get watchers(){return{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};q.style=_;export{q as calcite_panel};
//# sourceMappingURL=calcite-panel.entry-D62wb1Iv.js.map
