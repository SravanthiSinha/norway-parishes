import{r as b,h as o,g as w}from"./index-Vdm0PCas.js";import{b as u}from"./dom-b6dedd88-Dfv97P2g.js";import{u as x,I as f}from"./interactive-1a42577a-B230YtAx.js";import{s as m,a as v,c as g}from"./loadable-13e9ffb2-Dn03AihA.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const y={button:"button"},k={plus:"plus"},C=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}calcite-button{--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:hover{--tw-shadow:var(--calcite-shadow-md);--tw-shadow-colored:var(--calcite-shadow-md);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:active{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([hidden]){display:none}[hidden]{display:none}",E=C,F=class{constructor(t){b(this,t),this.appearance="solid",this.kind="brand",this.disabled=!1,this.icon=k.plus,this.iconFlipRtl=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1}componentWillLoad(){m(this)}componentDidLoad(){v(this)}componentDidRender(){x(this)}async setFocus(){await g(this),u(this.buttonEl)}render(){const{appearance:t,kind:s,disabled:a,loading:d,scale:i,textEnabled:n,icon:l,label:e,text:r,iconFlipRtl:c}=this,p=n?null:e||r||null;return o(f,{key:"7953bd06defeddfed5530500901609524f7b58fd",disabled:a},o("calcite-button",{key:"c2bbe2be5e2ac375abab75024005f1eb5afed51c",appearance:t==="solid"?"solid":"outline-fill",class:y.button,disabled:a,iconFlipRtl:c?"start":null,iconStart:l,kind:s,label:e,loading:d,ref:h=>{this.buttonEl=h},round:!0,scale:i,title:p,type:"button",width:"auto"},this.textEnabled?this.text:null))}get el(){return w(this)}};F.style=E;export{F as calcite_fab};
//# sourceMappingURL=calcite-fab.entry-D7d3p0fe.js.map
