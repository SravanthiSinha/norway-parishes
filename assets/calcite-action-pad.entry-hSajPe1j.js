import{r as f,c as m,h as n,H as x,g as b}from"./index-5zHX_dwk.js";import{c as y,d as v}from"./conditionalSlot-167e1146-X1mM1Cbo.js";import{s as c}from"./dom-b6dedd88-CjM0FhoI.js";import{s as w,a as L,c as C}from"./loadable-13e9ffb2-BI75l_jZ.js";import{c as A,d as S}from"./locale-60f8ca58-CFp0CNJB.js";import{u as T,c as k,d as E,s as G}from"./t9n-75defee3-C-za1nk1.js";import{t as r,E as O}from"./ExpandToggle-623527ca-Djc2ESdD.js";import{c as P}from"./observers-9c166451-DBztx5Yi.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";import"./resources-c6ed25f3-BhfbaUuh.js";import"./resources-fa285c14-Ka4DNstb.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const l={actionGroupEnd:"action-group--end",container:"container"},z={expandTooltip:"expand-tooltip"},M=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:var(--calcite-action-pad-corner-radius, 0.125rem);background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width, auto)}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:1px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);gap:var(--calcite-action-pad-items-space, 0);border-radius:calc(var(--calcite-action-pad-corner-radius, 0.125rem) * 2);background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:1px}:host([hidden]){display:none}[hidden]{display:none}",H=M,D=class{constructor(e){f(this,e),this.calciteActionPadToggle=m(this,"calciteActionPadToggle",6),this.mutationObserver=P("mutation",()=>this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))),this.actionMenuOpenHandler=t=>{if(t.target.menuOpen){const a=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(o=>{a.includes(o)||(o.menuOpen=!1)})}},this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionPadToggle.emit()},this.handleDefaultSlotChange=t=>{const a=c(t).filter(o=>o==null?void 0:o.matches("calcite-action-group"));this.setGroupLayout(a)},this.handleTooltipSlotChange=t=>{const a=c(t).filter(o=>o==null?void 0:o.matches("calcite-tooltip"));this.expandTooltip=a[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.expandTooltip=void 0,this.effectiveLocale="",this.defaultMessages=void 0}expandedHandler(e){r({el:this.el,expanded:e})}layoutHandler(){this.updateGroups()}onMessagesChange(){}effectiveLocaleChange(){T(this,this.effectiveLocale)}connectedCallback(){var e;y(this),A(this),k(this),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0})}disconnectedCallback(){var e;S(this),E(this),v(this),(e=this.mutationObserver)==null||e.disconnect()}async componentWillLoad(){w(this);const{el:e,expanded:t}=this;r({el:e,expanded:t}),await G(this)}componentDidLoad(){L(this)}async setFocus(){var e;await C(this),(e=this.el)==null||e.focus()}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(t=>t.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,messages:a,el:o,position:d,toggleExpand:p,scale:i,layout:h,actionsEndGroupLabel:u,overlayPositioning:g}=this,s=t?null:n(O,{collapseLabel:a.collapseLabel,collapseText:a.collapse,el:o,expandLabel:a.expandLabel,expandText:a.expand,expanded:e,position:d,scale:i,toggle:p,tooltip:this.expandTooltip});return s?n("calcite-action-group",{class:l.actionGroupEnd,label:u,layout:h,overlayPositioning:g,scale:i},n("slot",{name:z.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),s):null}render(){return n(x,{key:"ca50c5f475d78b92b5347ab912727587420ceea5",onCalciteActionMenuOpen:this.actionMenuOpenHandler},n("div",{key:"81b26e9b6bd0a04357fe00ef55111c6bb609f4e7",class:l.container},n("slot",{key:"e346dc6cfab0e26cfc694b43063715d7b845ae32",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return b(this)}static get watchers(){return{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};D.style=H;export{D as calcite_action_pad};
//# sourceMappingURL=calcite-action-pad.entry-hSajPe1j.js.map
