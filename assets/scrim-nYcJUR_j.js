import{dP as l,dQ as o,dR as r,dS as d,dT as h,dU as f,dV as m,dW as g,dX as u,dY as v,dZ as b,d_ as t}from"./index-Vdm0PCas.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const i={scrim:"scrim",content:"content"},a={s:72,l:480},p=":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}",C=p,S=o(class extends r{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=d("resize",()=>this.handleResize()),this.handleDefaultSlotChange=e=>{this.hasContent=h(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){f(this,this.effectiveLocale)}connectedCallback(){var e;m(this),g(this),(e=this.resizeObserver)==null||e.observe(this.el)}async componentWillLoad(){await u(this)}disconnectedCallback(){var e;v(this),b(this),(e=this.resizeObserver)==null||e.disconnect()}render(){const{hasContent:e,loading:s,messages:c}=this;return t("div",{key:"286b03bb4a18b45f1b6914684a5178e952a44127",class:i.scrim},s?t("calcite-loader",{label:c.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,t("div",{key:"0f8cd111720239b204d0d201610c4145d5616753",class:i.content,hidden:!e},t("slot",{key:"fe7bbced9871c9179971da0ef7ca07ea1c9ac33e",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<a.s?"s":e>=a.l?"l":"m"}handleResize(){const{loaderEl:e,el:s}=this;e&&(this.loaderScale=this.getScale(Math.min(s.clientHeight,s.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return C}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function y(){if(typeof customElements>"u")return;["calcite-scrim","calcite-loader"].forEach(e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,S);break;case"calcite-loader":customElements.get(e)||l();break}})}y();export{S,y as d};
//# sourceMappingURL=scrim-nYcJUR_j.js.map