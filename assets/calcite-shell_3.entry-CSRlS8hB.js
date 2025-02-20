import{r as B,h as a,F as O,g as A,c as N,C as z,f as V}from"./index-BLU2cKnj.js";import{c as D,d as E}from"./conditionalSlot-167e1146-BdBBehEJ.js";import{a as g,s as k,d as U,g as P,i as W}from"./dom-b6dedd88-BkDbx1ko.js";import{l as F}from"./logger-d56ad214-D0p4xvyq.js";import{c as j,d as Y}from"./locale-60f8ca58-DkFUywIU.js";import{c as L}from"./math-682795d0-CPc4dlb6.js";import{c as $,s as X,d as G,u as q}from"./t9n-75defee3-SZLB-vot.js";import"./observers-9c166451-R27wf6vn.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const m={main:"main",content:"content",contentBehind:"content--behind",contentBottom:"content-bottom",contentNonInteractive:"content--non-interactive",footer:"footer",positionedSlotWrapper:"positioned-slot-wrapper",contentBehindCenterContent:"center-content"},p={centerRow:"center-row",panelStart:"panel-start",panelEnd:"panel-end",panelTop:"panel-top",panelBottom:"panel-bottom",header:"header",footer:"footer",alerts:"alerts",sheets:"sheets",modals:"modals",dialogs:"dialogs"},J=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:absolute;inset:0px;display:flex;block-size:100%;inline-size:100%;flex-direction:column;overflow:hidden;--calcite-shell-tip-spacing:26vw}.main{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;flex-direction:row;justify-content:space-between;overflow:hidden}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;overflow:auto;justify-content:space-between}.content ::slotted(calcite-shell-center-row),.content ::slotted(calcite-panel),.content ::slotted(calcite-flow){flex:1 1 auto;align-self:stretch;max-block-size:unset}.content--behind{position:absolute;inset:0px;border-width:0px;z-index:calc(var(--calcite-z-index) - 1);display:initial}.content--non-interactive{pointer-events:none;display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap}::slotted(calcite-shell-center-row){inline-size:unset}::slotted(.header .heading){font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal)}slot[name=panel-start]::slotted(calcite-shell-panel),slot[name=panel-end]::slotted(calcite-shell-panel){position:relative;z-index:calc(var(--calcite-z-index) + 1)}slot[name=panel-end]::slotted(calcite-shell-panel){margin-inline-start:auto}::slotted(calcite-panel),::slotted(calcite-flow){border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-color-border-3)}slot[name=center-row]::slotted(calcite-shell-center-row:not([detached])),slot[name=panel-top]::slotted(calcite-shell-center-row:not([detached])),slot[name=panel-bottom]::slotted(calcite-shell-center-row:not([detached])){border-inline-start-width:1px;border-inline-end-width:1px;border-color:var(--calcite-color-border-3)}.center-content{display:flex;flex-direction:column;justify-content:space-between;block-size:100%;inline-size:100%;min-inline-size:0}.content-bottom{justify-content:flex-end}::slotted(calcite-shell-center-row){flex:none;align-self:stretch}::slotted(calcite-tip-manager){position:absolute;z-index:var(--calcite-z-index-toast);box-sizing:border-box}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}::slotted(calcite-tip-manager){animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.25rem;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);inset-block-end:0.5rem;inset-inline:var(--calcite-shell-tip-spacing)}slot[name=center-row]::slotted(calcite-shell-center-row),slot[name=panel-bottom]::slotted(calcite-shell-center-row){margin-block-start:auto}slot[name=panel-top]::slotted(calcite-shell-center-row){margin-block-end:auto}.position-wrapper{position:absolute;pointer-events:none;inset:0}:host([hidden]){display:none}[hidden]{display:none}",Q=J,Z=class{constructor(o){B(this,o),this.handleHeaderSlotChange=t=>{this.hasHeader=!!g(t)},this.handleFooterSlotChange=t=>{this.hasFooter=!!g(t)},this.handleAlertsSlotChange=t=>{var e;this.hasAlerts=!!g(t),(e=k(t))==null||e.map(n=>{n.tagName==="CALCITE-ALERT"&&(n.embedded=!0)})},this.handleSheetsSlotChange=t=>{var e;this.hasSheets=!!g(t),(e=k(t))==null||e.map(n=>{n.tagName==="CALCITE-SHEET"&&(n.embedded=!0)})},this.handleModalsSlotChange=t=>{var e;this.hasModals=!!g(t),(e=k(t))==null||e.map(n=>{n.tagName==="CALCITE-MODAL"&&(n.embedded=!0)})},this.handlePanelTopChange=t=>{this.hasPanelTop=g(t)},this.handlePanelBottomChange=t=>{this.hasPanelBottom=g(t)},this.handleDialogsSlotChange=t=>{var e;this.hasDialogs=!!g(t),(e=k(t))==null||e.map(n=>{n.tagName==="CALCITE-DIALOG"&&(n.embedded=!0)})},this.contentBehind=!1,this.hasHeader=!1,this.hasFooter=!1,this.hasAlerts=!1,this.hasModals=!1,this.hasDialogs=!1,this.hasSheets=!1,this.hasPanelTop=!1,this.hasPanelBottom=!1,this.hasOnlyPanelBottom=!1,this.panelIsResizing=!1}handleCalciteInternalShellPanelResizeStart(o){this.panelIsResizing=!0,o.stopPropagation()}handleCalciteInternalShellPanelResizeEnd(o){this.panelIsResizing=!1,o.stopPropagation()}updateHasOnlyPanelBottom(){this.hasOnlyPanelBottom=!this.hasPanelTop&&this.hasPanelBottom}connectedCallback(){D(this)}disconnectedCallback(){E(this)}renderHeader(){return a("div",{hidden:!this.hasHeader},a("slot",{key:"header",name:p.header,onSlotchange:this.handleHeaderSlotChange}))}renderFooter(){return a("div",{class:m.footer,hidden:!this.hasFooter,key:"footer"},a("slot",{name:p.footer,onSlotchange:this.handleFooterSlotChange}))}renderAlerts(){return a("div",{hidden:!this.hasAlerts},a("slot",{key:"alerts",name:p.alerts,onSlotchange:this.handleAlertsSlotChange}))}renderSheets(){return a("div",{hidden:!this.hasSheets},a("slot",{key:"sheets",name:p.sheets,onSlotchange:this.handleSheetsSlotChange}))}renderModals(){return a("div",{hidden:!this.hasModals},a("slot",{key:"modals",name:p.modals,onSlotchange:this.handleModalsSlotChange}))}renderDialogs(){return a("div",{hidden:!this.hasDialogs},a("slot",{key:"dialogs",name:p.dialogs,onSlotchange:this.handleDialogsSlotChange}))}renderContent(){const{panelIsResizing:o}=this,t=a("slot",{key:"default-slot"}),e=o?a("div",{class:m.contentNonInteractive},t):t,n=a("slot",{key:"center-row-slot",name:p.centerRow}),l=a("slot",{key:"panel-bottom-slot",name:p.panelBottom,onSlotchange:this.handlePanelBottomChange}),x=a("slot",{key:"panel-top-slot",name:p.panelTop,onSlotchange:this.handlePanelTopChange}),i="content-container";return this.contentBehind?[a("div",{class:{[m.content]:!0,[m.contentBehind]:!0},key:i},e),a("div",{class:{[m.contentBehindCenterContent]:!0,[m.contentBottom]:this.hasOnlyPanelBottom}},x,l,n)]:[a("div",{class:{[m.content]:!0,[m.contentBottom]:this.hasOnlyPanelBottom},key:i},x,e,l,n)]}renderMain(){return a("div",{class:m.main},a("slot",{name:p.panelStart}),this.renderContent(),a("slot",{name:p.panelEnd}))}renderPositionedSlots(){return a("div",{class:m.positionedSlotWrapper},this.renderAlerts(),this.renderModals(),this.renderDialogs(),this.renderSheets())}render(){return a(O,{key:"6864b8b95b6edd871ad622b0d49a3f4a42a0a8a8"},this.renderHeader(),this.renderMain(),this.renderFooter(),this.renderPositionedSlots())}get el(){return A(this)}static get watchers(){return{hasPanelTop:["updateHasOnlyPanelBottom"],hasPanelBottom:["updateHasOnlyPanelBottom"]}}};Z.style=Q;const R={actionBarContainer:"action-bar-container",content:"content"},T={actionBar:"action-bar"},tt=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{z-index:var(--calcite-z-index);display:flex;flex:1 1 auto;overflow:hidden;background-color:transparent}.content{margin:0px;display:flex;block-size:100%;inline-size:100%;overflow:hidden;flex:1 0 0}.action-bar-container{display:flex}:host([detached]){margin-inline:0.5rem;margin-block:0.5rem 1.5rem}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}:host([detached]){animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.25rem;border-width:0px;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([position=end]){align-self:flex-end}:host([position=start]){align-self:flex-start}:host([height-scale=s]){block-size:33.333333%}:host([height-scale=m]){block-size:70%}:host([height-scale=l]){block-size:100%}:host([height-scale=l][detached]){block-size:calc(100% - 2rem)}::slotted(calcite-panel){block-size:100%;inline-size:100%}::slotted(calcite-action-bar),::slotted(calcite-action-bar[position=end]){border-inline-end:1px solid;border-color:var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}",et=tt,nt=class{constructor(o){B(this,o),this.detached=!1,this.heightScale="s",this.position="end"}connectedCallback(){D(this)}disconnectedCallback(){E(this)}componentWillLoad(){F.deprecated("component",{name:"shell-center-row",removalVersion:4,suggested:"shell-panel"})}render(){const{el:o}=this,t=a("div",{key:"8e0d7519d5bc01805337748d7b96d7f32f5be5fb",class:R.content},a("slot",{key:"a8c07dc2518cca396b43de1372d188643dd8174b"})),e=U(o,T.actionBar),l=[e?a("div",{class:R.actionBarContainer,key:"action-bar"},a("slot",{name:T.actionBar})):null,t];return(e==null?void 0:e.position)==="end"&&l.reverse(),a(O,{key:"b09007c50d4dcc62fb8b43402fa023918d82fe2c"},l)}get el(){return A(this)}};nt.style=et;const y={container:"container",content:"content",contentHeader:"content__header",contentBody:"content__body",floatContent:"float--content",contentOverlay:"content--overlay",separator:"separator",floatAll:"float-all"},K={actionBar:"action-bar",header:"header"},ot=`:host{pointer-events:none;position:relative;display:flex;flex:0 1 auto;align-items:stretch;z-index:var(--calcite-shell-panel-z-index, var(--calcite-z-index));--calcite-shell-panel-detached-max-height:unset;--calcite-shell-panel-max-height:unset;--calcite-internal-shell-panel-shadow-block-start:0 4px 8px -1px rgba(0, 0, 0, 0.08),
    0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-internal-shell-panel-shadow-block-end:0 -4px 8px -1px rgba(0, 0, 0, 0.08),
    0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-internal-shell-panel-shadow-inline-start:4px 0 8px -1px rgba(0, 0, 0, 0.08),
    2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-internal-shell-panel-shadow-inline-end:-4px 0 8px -1px rgba(0, 0, 0, 0.08),
    -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl.content--overlay{--calcite-internal-shell-panel-shadow-inline-start:-4px 0 8px -1px rgba(0, 0, 0, 0.08),
    -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-internal-shell-panel-shadow-inline-end:4px 0 8px -1px rgba(0, 0, 0, 0.08),
    2px 0 4px -1px rgba(0, 0, 0, 0.04)}:host([layout=vertical]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-z-index) + 1))}:host([layout=vertical][display-mode=overlay]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-z-index-header) + 1))}:host([layout=vertical][display-mode=float-all]) .content{flex:2}:host([layout=vertical][width-scale=s]:not([display-mode=float-all])) .content{--calcite-internal-shell-panel-width:var(--calcite-shell-panel-width, 12vw);--calcite-internal-shell-panel-max-width:var(--calcite-shell-panel-max-width, 300px);--calcite-internal-shell-panel-min-width:var(--calcite-shell-panel-min-width, 150px)}:host([layout=vertical][width-scale=s][display-mode=float-all]) .content{--calcite-internal-shell-panel-width:var(--calcite-shell-panel-width, 12vw);--calcite-internal-shell-panel-min-width:var(--calcite-shell-panel-min-width, 150px)}:host([layout=vertical][width-scale=m]:not([display-mode=float-all])) .content{--calcite-internal-shell-panel-width:var(--calcite-shell-panel-width, 20vw);--calcite-internal-shell-panel-max-width:var(--calcite-shell-panel-max-width, 420px);--calcite-internal-shell-panel-min-width:var(--calcite-shell-panel-min-width, 240px)}:host([layout=vertical][width-scale=m][display-mode=float-all]) .content{--calcite-internal-shell-panel-width:var(--calcite-shell-panel-width, 20vw);--calcite-internal-shell-panel-min-width:var(--calcite-shell-panel-min-width, 240px)}:host([layout=vertical][width-scale=l]:not([display-mode=float-all])) .content{--calcite-internal-shell-panel-width:var(--calcite-shell-panel-width, 45vw);--calcite-internal-shell-panel-max-width:var(--calcite-shell-panel-max-width, 680px);--calcite-internal-shell-panel-min-width:var(--calcite-shell-panel-min-width, 340px)}:host([layout=vertical][width-scale=l][display-mode=float-all]) .content{--calcite-internal-shell-panel-width:var(--calcite-shell-panel-width, 45vw);--calcite-internal-shell-panel-min-width:var(--calcite-shell-panel-min-width, 340px)}:host([layout=horizontal][height-scale=s]) .content{--calcite-internal-shell-panel-max-height:var(
    --calcite-shell-panel-max-height,
    var(--calcite-shell-panel-detached-max-height, 20vh)
  )}:host([layout=horizontal]) .content{--calcite-internal-shell-panel-min-height:var(--calcite-shell-panel-min-height, 5vh);--calcite-internal-shell-panel-max-height:var(
    --calcite-shell-panel-max-height,
    var(--calcite-shell-panel-detached-max-height, 30vh)
  )}:host([layout=horizontal][height-scale=l]) .content{--calcite-internal-shell-panel-max-height:var(
    --calcite-shell-panel-max-height,
    var(--calcite-shell-panel-detached-max-height, 40vh)
  )}.container{pointer-events:none;box-sizing:border-box;display:flex;block-size:100%;flex:1 1 auto;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-color-text-2)}.container *{box-sizing:border-box}.container.float-all{margin-block:0.5rem;margin-inline:0.5rem}:host([layout=horizontal]) .container{block-size:auto;inline-size:100%;flex-direction:column}:host(:hover) .separator:not(:hover):not(:focus),:host(:focus-within) .separator:not(:hover):not(:focus){opacity:1;background-color:var(--calcite-color-border-3)}.separator{pointer-events:auto;position:absolute;display:flex;background-color:transparent;opacity:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;cursor:col-resize;outline:none}.separator:hover{opacity:1;background-color:var(--calcite-color-border-2)}.separator:focus{background-color:var(--calcite-color-brand);opacity:1}:host([layout=vertical]) .separator{inset-block:0px;block-size:100%;inline-size:0.125rem;cursor:col-resize}:host([layout=horizontal][position=start]) .separator{inset-block-end:0px}:host([layout=horizontal][position=end]) .separator{inset-block-start:0px}:host([layout=horizontal]) .separator{inset-inline-end:0px;block-size:0.125rem;inline-size:100%;cursor:row-resize}:host([layout=vertical][position=start]) .separator{inset-inline-end:-2px}:host([layout=horizontal][position=start]) .separator{inset-block-end:-2px}:host([layout=vertical][position=end]) .separator{inset-inline-start:-2px}:host([layout=horizontal][position=end]) .separator{inset-block-start:-2px}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%;inline-size:100%;flex:1 1 auto;max-block-size:unset;max-inline-size:unset}::slotted(.calcite-match-height){display:flex;flex:1 1 auto;overflow:hidden}.content{pointer-events:auto;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:stretch;align-self:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), max-inline-size var(--calcite-animation-timing)}:host([layout=vertical]:not([display-mode=float-all])) .content{inline-size:var(--calcite-internal-shell-panel-width);max-inline-size:var(--calcite-internal-shell-panel-max-width);min-inline-size:var(--calcite-internal-shell-panel-min-width)}:host([layout=vertical][display-mode=float-all]) .content{inline-size:var(--calcite-internal-shell-panel-width);min-inline-size:var(--calcite-internal-shell-panel-min-width)}:host([layout=horizontal]) .content{block-size:var(--calcite-internal-shell-panel-height);max-block-size:var(--calcite-internal-shell-panel-max-height);min-block-size:var(--calcite-internal-shell-panel-min-height)}.content__header{display:flex;flex:0 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch}.content__body{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden}.content--overlay{position:absolute;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([layout=vertical]) .content--overlay{inset-block-start:0px;block-size:100%}:host([layout=horizontal]) .content--overlay{inset-inline-start:0px;inline-size:100%}:host([layout=vertical][position=start]) .content--overlay{inset-inline-start:100%;box-shadow:var(--calcite-internal-shell-panel-shadow-inline-start)}:host([layout=vertical][position=end]) .content--overlay{inset-inline-end:100%;box-shadow:var(--calcite-internal-shell-panel-shadow-inline-end)}:host([layout=horizontal][position=start]) .content--overlay{inset-block-start:100%;box-shadow:var(--calcite-internal-shell-panel-shadow-block-start)}:host([layout=horizontal][position=end]) .content--overlay{inset-block-end:100%;box-shadow:var(--calcite-internal-shell-panel-shadow-block-end)}.float--content{margin-inline:0.5rem;margin-block:0.5rem auto;block-size:auto;overflow:hidden;border-radius:0.25rem;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);max-block-size:var(--calcite-internal-shell-panel-max-height, calc(100% - 1rem))}.float--content ::slotted(calcite-panel),.float--content ::slotted(calcite-flow){max-block-size:unset}:host([layout=horizontal]) .float--content{margin-block:0.5rem}:host([position=start]) .float--content ::slotted(calcite-panel),:host([position=start]) .float--content ::slotted(calcite-flow),:host([position=end]) .float--content ::slotted(calcite-panel),:host([position=end]) .float--content ::slotted(calcite-flow){border-style:none}.content[hidden]{display:none}slot[name=action-bar]::slotted(calcite-action-bar),.content ::slotted(calcite-flow),.content ::slotted(calcite-panel:not([closed])){border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3)}:host([position=start]:not([slot=panel-end]):not([display-mode=float-all])) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=start]:not([slot=panel-end]):not([display-mode=float-all])) .content ::slotted(calcite-flow),:host([position=start]:not([slot=panel-end]):not([display-mode=float-all])) .content ::slotted(calcite-panel),:host([position=end][slot=panel-start]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=end][slot=panel-start]) .content ::slotted(calcite-flow),:host([position=end][slot=panel-start]) .content ::slotted(calcite-panel){border-inline-start:none}:host([position=end]:not([slot=panel-start])) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=end]:not([slot=panel-start])) .content ::slotted(calcite-flow),:host([position=end]:not([slot=panel-start])) .content ::slotted(calcite-panel),:host([position=start][slot=panel-end]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=start][slot=panel-end]) .content ::slotted(calcite-flow),:host([position=start][slot=panel-end]) .content ::slotted(calcite-panel){border-inline-end:none}:host([layout=horizontal]:not([display-mode=float-all])) slot[name=action-bar]::slotted(calcite-action-bar){border-inline:0}:host([layout=horizontal][position=start]:not([display-mode=float-all])) .content ::slotted(calcite-flow),:host([layout=horizontal][position=start]:not([display-mode=float-all])) .content ::slotted(calcite-panel){border-inline:0;border-block-start:0}:host([layout=horizontal][position=end]) .content ::slotted(calcite-flow),:host([layout=horizontal][position=end]) .content ::slotted(calcite-panel){border-inline:0;border-block-end:0}:host([hidden]){display:none}[hidden]{display:none}`,at=ot,it=class{constructor(o){B(this,o),this.calciteInternalShellPanelResizeStart=N(this,"calciteInternalShellPanelResizeStart",6),this.calciteInternalShellPanelResizeEnd=N(this,"calciteInternalShellPanelResizeEnd",6),this.initialContentWidth=null,this.initialContentHeight=null,this.initialClientX=null,this.initialClientY=null,this.contentWidthMax=null,this.contentWidthMin=null,this.contentHeightMax=null,this.contentHeightMin=null,this.step=1,this.stepMultiplier=10,this.actionBars=[],this.storeContentEl=t=>{this.contentEl=t},this.getKeyAdjustedSize=t=>{const{key:e}=t,{el:n,step:l,stepMultiplier:x,layout:i,contentWidthMin:f,contentWidthMax:v,initialContentWidth:r,initialContentHeight:c,contentHeightMin:s,contentHeightMax:h,position:w}=this,u=l*x;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"].indexOf(e)>-1&&t.preventDefault();const H=P(n),d=["ArrowLeft","ArrowRight"],b=["ArrowDown","ArrowUp"],C=H==="rtl"&&d.includes(e)?-1:1;if(i==="horizontal"?w==="end"?e===b[1]||e===d[0]:e===b[0]||e===d[1]:e===b[1]||(w==="end"?e===d[0]:e===d[1])){const S=t.shiftKey?u:l;return i==="horizontal"?c+C*S:r+C*S}if(i==="horizontal"?w==="end"?e===b[0]||e===d[0]:e===b[1]||e===d[1]:e===b[0]||(w==="end"?e===d[1]:e===d[0])){const S=t.shiftKey?u:l;return i==="horizontal"?c-C*S:r-C*S}return e==="Home"&&i==="horizontal"&&typeof s=="number"?s:e==="Home"&&i==="vertical"&&typeof f=="number"?f:e==="End"&&i==="horizontal"&&typeof h=="number"?h:e==="End"&&i==="vertical"&&typeof v=="number"?v:e==="PageDown"?i==="horizontal"?c-u:r-u:e==="PageUp"?i==="horizontal"?c+u:r+u:null},this.initialKeydownWidth=t=>{this.setInitialContentWidth();const e=this.getKeyAdjustedSize(t);typeof e=="number"&&this.setContentWidth(e)},this.initialKeydownHeight=t=>{this.setInitialContentHeight();const e=this.getKeyAdjustedSize(t);typeof e=="number"&&this.setContentHeight(e)},this.separatorKeyDown=t=>{this.layout==="horizontal"?this.initialKeydownHeight(t):this.initialKeydownWidth(t)},this.separatorPointerMove=t=>{t.preventDefault();const{el:e,layout:n,initialContentWidth:l,initialContentHeight:x,position:i,initialClientX:f,initialClientY:v}=this,r=n==="horizontal"?t.clientY-v:t.clientX-f,c=n==="vertical"&&P(e)==="rtl"?-1:1,s=i==="end"?-c*r:c*r;n==="horizontal"?this.setContentHeight(x+s):this.setContentWidth(l+s)},this.separatorPointerUp=t=>{W(t)&&(this.calciteInternalShellPanelResizeEnd.emit(),t.preventDefault(),window.removeEventListener("pointerup",this.separatorPointerUp),window.removeEventListener("pointermove",this.separatorPointerMove))},this.setInitialContentHeight=()=>{var t;this.initialContentHeight=(t=this.contentEl)==null?void 0:t.getBoundingClientRect().height},this.setInitialContentWidth=()=>{var t;this.initialContentWidth=(t=this.contentEl)==null?void 0:t.getBoundingClientRect().width},this.separatorPointerDown=t=>{if(!W(t))return;this.calciteInternalShellPanelResizeStart.emit(),t.preventDefault();const{separatorEl:e}=this;e&&document.activeElement!==e&&e.focus(),this.layout==="horizontal"?(this.setInitialContentHeight(),this.initialClientY=t.clientY):(this.setInitialContentWidth(),this.initialClientX=t.clientX),window.addEventListener("pointerup",this.separatorPointerUp),window.addEventListener("pointermove",this.separatorPointerMove)},this.connectSeparator=t=>{this.disconnectSeparator(),this.separatorEl=t,t==null||t.addEventListener("pointerdown",this.separatorPointerDown)},this.disconnectSeparator=()=>{var t;(t=this.separatorEl)==null||t.removeEventListener("pointerdown",this.separatorPointerDown)},this.setActionBarsLayout=t=>{t.forEach(e=>e.layout=this.layout)},this.handleActionBarSlotChange=t=>{const e=k(t).filter(n=>n==null?void 0:n.matches("calcite-action-bar"));this.actionBars=e,this.setActionBarsLayout(e)},this.handleHeaderSlotChange=t=>{this.hasHeader=g(t)},this.collapsed=!1,this.detached=!1,this.displayMode="dock",this.detachedHeightScale=void 0,this.heightScale=void 0,this.widthScale="m",this.layout="vertical",this.position="start",this.resizable=!1,this.messages=void 0,this.messageOverrides=void 0,this.contentWidth=null,this.contentHeight=null,this.defaultMessages=void 0,this.effectiveLocale="",this.hasHeader=!1}handleDetached(o){o?this.displayMode="float-content":(this.displayMode==="float-content"||this.displayMode==="float")&&(this.displayMode="dock")}handleDisplayMode(o){this.detached=o==="float-content"||o==="float"}handleDetachedHeightScale(o){this.heightScale=o}handleHeightScale(o){this.detachedHeightScale=o}layoutHandler(){this.setActionBarsLayout(this.actionBars)}onMessagesChange(){}connectedCallback(){D(this),j(this),$(this)}async componentWillLoad(){await X(this)}disconnectedCallback(){E(this),this.disconnectSeparator(),Y(this),G(this)}componentDidLoad(){this.updateAriaValues()}effectiveLocaleChange(){q(this,this.effectiveLocale)}renderHeader(){return a("div",{class:y.contentHeader,hidden:!this.hasHeader,key:"header"},a("slot",{name:K.header,onSlotchange:this.handleHeaderSlotChange}))}render(){const{collapsed:o,position:t,initialContentWidth:e,initialContentHeight:n,contentWidth:l,contentWidthMax:x,contentWidthMin:i,contentHeight:f,contentHeightMax:v,contentHeightMin:r,resizable:c,layout:s,displayMode:h}=this,w=P(this.el),u=h!=="float-content"&&h!=="float"&&c,I=u?s==="horizontal"?f?{height:`${f}px`}:null:l?{width:`${l}px`}:null:null,H=!o&&u?a("div",{"aria-label":this.messages.resize,"aria-orientation":s==="horizontal"?"vertical":"horizontal","aria-valuemax":s=="horizontal"?v:x,"aria-valuemin":s=="horizontal"?r:i,"aria-valuenow":s=="horizontal"?f??n:l??e,class:y.separator,key:"separator",onKeyDown:this.separatorKeyDown,ref:this.connectSeparator,role:"separator",tabIndex:0,"touch-action":"none"}):null,d=()=>s==="horizontal"?t==="start"?z.calciteAnimateInDown:z.calciteAnimateInUp:w==="ltr"&&t==="end"||w==="rtl"&&t==="start"?z.calciteAnimateInLeft:z.calciteAnimateInRight,b=a("div",{class:{[z.rtl]:w==="rtl",[y.content]:!0,[y.contentOverlay]:h==="overlay",[y.floatContent]:h==="float-content"||h==="float",[z.calciteAnimate]:h==="overlay",[d()]:h==="overlay"},hidden:o,key:"content",ref:this.storeContentEl,style:I},this.renderHeader(),a("div",{class:y.contentBody},a("slot",null)),H),M=[a("slot",{key:"action-bar",name:K.actionBar,onSlotchange:this.handleActionBarSlotChange}),b];return t==="end"&&M.reverse(),a("div",{class:{[y.container]:!0,[y.floatAll]:h==="float-all"}},M)}setContentWidth(o){const{contentWidthMax:t,contentWidthMin:e}=this,n=Math.round(o);this.contentWidth=typeof t=="number"&&typeof e=="number"?L(n,e,t):n}updateAriaValues(){const{contentEl:o}=this,t=o&&getComputedStyle(o);t&&(this.layout==="horizontal"?this.updateHeights(t):this.updateWidths(t),V(this))}setContentHeight(o){const{contentHeightMax:t,contentHeightMin:e}=this,n=Math.round(o);this.contentHeight=typeof t=="number"&&typeof e=="number"?L(n,e,t):n}updateWidths(o){const t=parseInt(o.getPropertyValue("max-width"),10),e=parseInt(o.getPropertyValue("min-width"),10),n=parseInt(o.getPropertyValue("width"),10);typeof n=="number"&&!isNaN(n)&&(this.initialContentWidth=n),typeof t=="number"&&!isNaN(t)&&(this.contentWidthMax=t),typeof e=="number"&&!isNaN(e)&&(this.contentWidthMin=e)}updateHeights(o){const t=parseInt(o.getPropertyValue("max-height"),10),e=parseInt(o.getPropertyValue("min-height"),10),n=parseInt(o.getPropertyValue("height"),10);typeof n=="number"&&!isNaN(n)&&(this.initialContentHeight=n),typeof t=="number"&&!isNaN(t)&&(this.contentHeightMax=t),typeof e=="number"&&!isNaN(e)&&(this.contentHeightMin=e)}static get assetsDirs(){return["assets"]}get el(){return A(this)}static get watchers(){return{detached:["handleDetached"],displayMode:["handleDisplayMode"],detachedHeightScale:["handleDetachedHeightScale"],heightScale:["handleHeightScale"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};it.style=at;export{Z as calcite_shell,nt as calcite_shell_center_row,it as calcite_shell_panel};
//# sourceMappingURL=calcite-shell_3.entry-CSRlS8hB.js.map
