import{r as y,c as i,h as t,H as C,g as w}from"./index-U3f91iFJ.js";import{g as B}from"./dom-b6dedd88-DVv4NIlW.js";import{u as I,I as v}from"./interactive-1a42577a-UW5nSXx7.js";import{s as S,a as F,c as L}from"./loadable-13e9ffb2-DDS8ZEua.js";import{c as E,d as P}from"./locale-60f8ca58-JSRNgc9i.js";import{c as T,s as A,d as x,u as M}from"./t9n-75defee3-DHFcr_dh.js";import{S as o}from"./resources-f4a93932-apN9qwCS.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";import"./observers-9c166451-CPOshbR9.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const O={backButton:"back-button"},f={backLeft:"chevron-left",backRight:"chevron-right"},a={actionBar:"action-bar",alerts:"alerts",contentTop:"content-top",contentBottom:"content-bottom",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions",footerEnd:"footer-end",footerStart:"footer-start"},z=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}",D=z,R=class{constructor(s){y(this,s),this.calciteFlowItemBack=i(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=i(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=i(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=i(this,"calciteFlowItemToggle",6),this.handleInternalPanelScroll=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.calciteFlowItemScroll.emit())},this.handleInternalPanelClose=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.closed=!0,this.calciteFlowItemClose.emit())},this.handleInternalPanelToggle=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit())},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.beforeClose=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){E(this),T(this)}async componentWillLoad(){await A(this),S(this)}componentDidRender(){I(this)}disconnectedCallback(){P(this),x(this)}componentDidLoad(){F(this)}effectiveLocaleChange(){M(this,this.effectiveLocale)}async setFocus(){await L(this);const{backButtonEl:s,containerEl:e}=this;if(s)return s.setFocus();if(e)return e.setFocus()}async scrollContentTo(s){var e;await((e=this.containerEl)==null?void 0:e.scrollContentTo(s))}renderBackButton(){const{el:s}=this,e=B(s)==="rtl",{showBackButton:l,backButtonClick:r,messages:d}=this,n=d.back,c=e?f.backRight:f.backLeft;return l?t("calcite-action",{"aria-label":n,class:O.backButton,icon:c,key:"flow-back-button",onClick:r,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:n,title:n}):null}render(){const{collapsed:s,collapseDirection:e,collapsible:l,closable:r,closed:d,description:n,disabled:c,heading:h,headingLevel:b,loading:m,menuOpen:g,messages:p,overlayPositioning:u,beforeClose:k}=this;return t(C,{key:"2e7872bb2687db0b67ddbf375f8ec0beaabbda36"},t(v,{key:"a9418954405a2cec2092bae3be5d77f02306e3c9",disabled:c},t("calcite-panel",{key:"d563c751421bf2d66c03286deaa613e09f585546",beforeClose:k,closable:r,closed:d,collapseDirection:e,collapsed:s,collapsible:l,description:n,disabled:c,heading:h,headingLevel:b,loading:m,menuOpen:g,messageOverrides:p,onCalcitePanelClose:this.handleInternalPanelClose,onCalcitePanelScroll:this.handleInternalPanelScroll,onCalcitePanelToggle:this.handleInternalPanelToggle,overlayPositioning:u,ref:this.setContainerRef,scale:this.scale},this.renderBackButton(),t("slot",{key:"c506ec8bb4debbd6a9da6c7941878de49776f614",name:a.actionBar,slot:o.actionBar}),t("slot",{key:"e76e55e654ff878acff734bdf387402a9e262159",name:a.alerts,slot:o.alerts}),t("slot",{key:"f7ab8839d7b101e31087130ebf3e36af1ec7da24",name:a.headerActionsStart,slot:o.headerActionsStart}),t("slot",{key:"2932c4c15b168732356b8e55fcc3064f5b3f4cf5",name:a.headerActionsEnd,slot:o.headerActionsEnd}),t("slot",{key:"1ef8a9050683022733695445092f8c626487d87b",name:a.headerContent,slot:o.headerContent}),t("slot",{key:"24c0ab570a601a6c0edfb0c820e580fd24b158ce",name:a.headerMenuActions,slot:o.headerMenuActions}),t("slot",{key:"ec55bbe7ba939a6efb35225850c37a1aadb97275",name:a.fab,slot:o.fab}),t("slot",{key:"aa0bfec47656ef9f7f575cd933897a7909e5badc",name:a.contentTop,slot:o.contentTop}),t("slot",{key:"e23532d080e2df529c2aeb6af043c6efe7a0ab6d",name:a.contentBottom,slot:o.contentBottom}),t("slot",{key:"db6ffc0d9300c77067a4c88ab277de685c7713af",name:a.footerStart,slot:o.footerStart}),t("slot",{key:"5f249356da9292f34c4036d0d0741f048fe999e9",name:a.footer,slot:o.footer}),t("slot",{key:"7476137bacc0f3be5c97682c5027f74d73254765",name:a.footerEnd,slot:o.footerEnd}),t("slot",{key:"58f60a46c42a05abe9b100a57d478d991e4f25bc",name:a.footerActions,slot:o.footerActions}),t("slot",{key:"926a8d94b76b6fcdef6dfd219ba8180c44f81c35"}))))}static get assetsDirs(){return["assets"]}get el(){return w(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};R.style=D;export{R as calcite_flow_item};
//# sourceMappingURL=calcite-flow-item.entry-BDMfIS74.js.map
