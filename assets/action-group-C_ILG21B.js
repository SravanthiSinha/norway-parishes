import{dR as p,dS as h,eo as g,dV as f,ea as b,dW as v,dX as x,dZ as C,d_ as y,e7 as M,dY as E,e8 as S,d$ as t,dQ as L,dK as O}from"./index-CRM8otC0.js";import{c as k,d as A}from"./conditionalSlot-C7ZH2JCx.js";import{S as a,d as P,a as z}from"./action-menu-AZ8CgdE1.js";import{d as w}from"./action-_SfT3sih.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const i={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},F={menu:"ellipsis"},$={container:"container"},H=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns:1}:host([columns="2"]){--calcite-internal-action-group-columns:2}:host([columns="3"]){--calcite-internal-action-group-columns:3}:host([columns="4"]){--calcite-internal-action-group-columns:4}:host([columns="5"]){--calcite-internal-action-group-columns:5}:host([columns="6"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}',_=H,G=p(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.setMenuOpen=e=>{this.menuOpen=!!e.target.open},this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=g(e)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.menuFlipPlacements=void 0,this.menuPlacement=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){f(this,this.effectiveLocale)}async setFocus(){await b(this),this.el.focus()}connectedCallback(){v(this),x(this),k(this)}disconnectedCallback(){C(this),y(this),A(this)}async componentWillLoad(){M(this),await E(this)}componentDidLoad(){S(this)}renderMenu(){const{expanded:e,menuOpen:l,scale:n,layout:o,messages:s,overlayPositioning:r,hasMenuActions:d,menuFlipPlacements:u,menuPlacement:m}=this;return t("calcite-action-menu",{expanded:e,flipPlacements:u??(o==="horizontal"?["top","bottom"]:["left","right"]),hidden:!d,label:s.more,onCalciteActionMenuOpen:this.setMenuOpen,open:l,overlayPositioning:r,placement:m??(o==="horizontal"?"bottom-start":"leading-start"),scale:n},t("calcite-action",{icon:F.menu,scale:n,slot:a.trigger,text:s.more,textEnabled:e}),t("slot",{name:i.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),t("slot",{name:i.menuTooltip,slot:a.tooltip}))}render(){return t("div",{key:"8143606c5745053f15140f34ff5ea375a683325f","aria-label":this.label,class:$.container,role:"group"},t("slot",{key:"e8c2821b9ce2e9d0293478989fc31d24f043f9c3"}),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return _}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],menuFlipPlacements:[16],menuPlacement:[513,"menu-placement"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function T(){if(typeof customElements>"u")return;["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-group":customElements.get(e)||customElements.define(e,G);break;case"calcite-action":customElements.get(e)||w();break;case"calcite-action-menu":customElements.get(e)||z();break;case"calcite-icon":customElements.get(e)||O();break;case"calcite-loader":customElements.get(e)||L();break;case"calcite-popover":customElements.get(e)||P();break}})}T();export{G as A,i as S,T as d};
//# sourceMappingURL=action-group-C_ILG21B.js.map
