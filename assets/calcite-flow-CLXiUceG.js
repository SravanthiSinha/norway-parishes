import{dR as u,dS as g,dT as p,ea as b,e7 as w,e8 as v,d$ as m}from"./index-vxzybAz5.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c={frame:"frame",frameAdvancing:"frame--advancing",frameRetreating:"frame--retreating"},y=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}",k=y,f=u(class extends g{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=p("mutation",()=>this.updateFlowProps()),this.getFlowDirection=(t,e)=>{const s=t>1;return!(t&&e>1)&&!s?null:e<t?"retreating":"advancing"},this.updateFlowProps=()=>{const{customItemSelectors:t,el:e,items:s}=this,i=Array.from(e.querySelectorAll(`calcite-flow-item${t?`,${t}`:""}`)).filter(o=>o.closest("calcite-flow")===e),r=s.length,a=i.length,n=i[a-1],l=i[a-2];if(a&&n&&i.forEach(o=>{o.showBackButton=o===n&&a>1,o.hidden=o!==n}),l&&(l.menuOpen=!1),this.items=i,r!==a){const o=this.getFlowDirection(r,a);this.itemCount=a,this.flowDirection=o}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const s=e.beforeBack?e.beforeBack:()=>Promise.resolve();try{await s.call(e)}catch{return}return e.remove(),e}async setFocus(){await b(this);const{items:t}=this,e=t[t.length-1];return e==null?void 0:e.setFocus()}connectedCallback(){var t;(t=this.itemMutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){w(this)}componentDidLoad(){v(this)}disconnectedCallback(){var t;(t=this.itemMutationObserver)==null||t.disconnect()}async handleItemBackClick(t){if(!t.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this,e={[c.frame]:!0,[c.frameAdvancing]:t==="advancing",[c.frameRetreating]:t==="retreating"};return m("div",{key:"01fbee965d48cb54fa5bd1b53a3435538df84332",class:e},m("slot",{key:"495880eceeb04387dd1352aa00337f037ab0636c"}))}get el(){return this}static get style(){return k}},[1,"calcite-flow",{customItemSelectors:[1,"custom-item-selectors"],flowDirection:[32],itemCount:[32],items:[32],back:[64],setFocus:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function d(){if(typeof customElements>"u")return;["calcite-flow"].forEach(t=>{switch(t){case"calcite-flow":customElements.get(t)||customElements.define(t,f);break}})}d();const D=f,F=d;export{D as CalciteFlow,F as defineCustomElement};
//# sourceMappingURL=calcite-flow-CLXiUceG.js.map
