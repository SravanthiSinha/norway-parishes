import{r as d,h as f,g as h}from"./index-Cj37dcSI.js";import{c as u}from"./observers-9c166451-B4McKwXe.js";import{c as g,s as p,a as b}from"./loadable-13e9ffb2-BVmhcbxh.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c={frame:"frame",frameAdvancing:"frame--advancing",frameRetreating:"frame--retreating"},v=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}",w=v,y=class{constructor(e){d(this,e),this.itemMutationObserver=u("mutation",()=>this.updateFlowProps()),this.getFlowDirection=(t,i)=>{const r=t>1;return!(t&&i>1)&&!r?null:i<t?"retreating":"advancing"},this.updateFlowProps=()=>{const{customItemSelectors:t,el:i,items:r}=this,n=Array.from(i.querySelectorAll(`calcite-flow-item${t?`,${t}`:""}`)).filter(a=>a.closest("calcite-flow")===i),l=r.length,o=n.length,s=n[o-1],m=n[o-2];if(o&&s&&n.forEach(a=>{a.showBackButton=a===s&&o>1,a.hidden=a!==s}),m&&(m.menuOpen=!1),this.items=n,l!==o){const a=this.getFlowDirection(l,o);this.itemCount=o,this.flowDirection=a}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:e}=this,t=e[e.length-1];if(!t)return;const i=t.beforeBack?t.beforeBack:()=>Promise.resolve();try{await i.call(t)}catch{return}return t.remove(),t}async setFocus(){await g(this);const{items:e}=this,t=e[e.length-1];return t==null?void 0:t.setFocus()}connectedCallback(){var e;(e=this.itemMutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){p(this)}componentDidLoad(){b(this)}disconnectedCallback(){var e;(e=this.itemMutationObserver)==null||e.disconnect()}async handleItemBackClick(e){if(!e.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:e}=this,t={[c.frame]:!0,[c.frameAdvancing]:e==="advancing",[c.frameRetreating]:e==="retreating"};return f("div",{key:"01fbee965d48cb54fa5bd1b53a3435538df84332",class:t},f("slot",{key:"495880eceeb04387dd1352aa00337f037ab0636c"}))}get el(){return h(this)}};y.style=w;export{y as calcite_flow};
//# sourceMappingURL=calcite-flow.entry-BJeNY-iI.js.map
