import{r as p,h as e,g as h}from"./index-CJT1kG3U.js";import{c as m,d as g}from"./conditionalSlot-167e1146-CA84WR1R.js";import{c as f,s as b,a as x}from"./loadable-13e9ffb2-BGmtNLc8.js";import{c as y,d as v}from"./locale-60f8ca58--3M74IpZ.js";import{u as C,c as M,d as S,s as L}from"./t9n-75defee3-CwG55ZZb.js";import{S as i}from"./resources-fa285c14-Ka4DNstb.js";import{a as O}from"./dom-b6dedd88-9CMuDstV.js";import{S as c,I as z,C as A}from"./resources-c6ed25f3-BhfbaUuh.js";import"./observers-9c166451-BLVGRbsu.js";import"./key-3ee05994-D63ExP77.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const k=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns:1}:host([columns="2"]){--calcite-internal-action-group-columns:2}:host([columns="3"]){--calcite-internal-action-group-columns:3}:host([columns="4"]){--calcite-internal-action-group-columns:4}:host([columns="5"]){--calcite-internal-action-group-columns:5}:host([columns="6"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}',P=k,w=class{constructor(o){p(this,o),this.setMenuOpen=t=>{this.menuOpen=!!t.target.open},this.handleMenuActionsSlotChange=t=>{this.hasMenuActions=O(t)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.menuFlipPlacements=void 0,this.menuPlacement=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){C(this,this.effectiveLocale)}async setFocus(){await f(this),this.el.focus()}connectedCallback(){y(this),M(this),m(this)}disconnectedCallback(){v(this),S(this),g(this)}async componentWillLoad(){b(this),await L(this)}componentDidLoad(){x(this)}renderMenu(){const{expanded:o,menuOpen:t,scale:n,layout:s,messages:a,overlayPositioning:l,hasMenuActions:r,menuFlipPlacements:d,menuPlacement:u}=this;return e("calcite-action-menu",{expanded:o,flipPlacements:d??(s==="horizontal"?["top","bottom"]:["left","right"]),hidden:!r,label:a.more,onCalciteActionMenuOpen:this.setMenuOpen,open:t,overlayPositioning:l,placement:u??(s==="horizontal"?"bottom-start":"leading-start"),scale:n},e("calcite-action",{icon:z.menu,scale:n,slot:i.trigger,text:a.more,textEnabled:o}),e("slot",{name:c.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),e("slot",{name:c.menuTooltip,slot:i.tooltip}))}render(){return e("div",{key:"8143606c5745053f15140f34ff5ea375a683325f","aria-label":this.label,class:A.container,role:"group"},e("slot",{key:"e8c2821b9ce2e9d0293478989fc31d24f043f9c3"}),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return h(this)}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};w.style=P;export{w as calcite_action_group};
//# sourceMappingURL=calcite-action-group.entry-B8wWhd7Y.js.map