import{r as c,h as t,g as r}from"./index-CRM8otC0.js";import{c as o,d as l}from"./locale-60f8ca58-J7UJV__P.js";import{u as d,c as h,s as m,d as f}from"./t9n-75defee3-wHliqQLL.js";import{c as g}from"./observers-9c166451-DTg7F2VA.js";import{z as u}from"./dom-b6dedd88-DTUdK4-i.js";import"./key-3ee05994-D63ExP77.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const i={scrim:"scrim",content:"content"},a={s:72,l:480},p=":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}",b=p,v=class{constructor(e){c(this,e),this.resizeObserver=g("resize",()=>this.handleResize()),this.handleDefaultSlotChange=s=>{this.hasContent=u(s)},this.storeLoaderEl=s=>{this.loaderEl=s,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){d(this,this.effectiveLocale)}connectedCallback(){var e;o(this),h(this),(e=this.resizeObserver)==null||e.observe(this.el)}async componentWillLoad(){await m(this)}disconnectedCallback(){var e;l(this),f(this),(e=this.resizeObserver)==null||e.disconnect()}render(){const{hasContent:e,loading:s,messages:n}=this;return t("div",{key:"286b03bb4a18b45f1b6914684a5178e952a44127",class:i.scrim},s?t("calcite-loader",{label:n.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,t("div",{key:"0f8cd111720239b204d0d201610c4145d5616753",class:i.content,hidden:!e},t("slot",{key:"fe7bbced9871c9179971da0ef7ca07ea1c9ac33e",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<a.s?"s":e>=a.l?"l":"m"}handleResize(){const{loaderEl:e,el:s}=this;e&&(this.loaderScale=this.getScale(Math.min(s.clientHeight,s.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return r(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};v.style=b;export{v as calcite_scrim};
//# sourceMappingURL=calcite-scrim.entry-B61aTU8e.js.map
