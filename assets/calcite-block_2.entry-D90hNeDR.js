import{r as y,c as g,h as e,H as C,g as S}from"./index-U3f91iFJ.js";import{c as N,d as j}from"./conditionalSlot-167e1146-yJWL9h-9.js";import{a as x,f as w,d as m,t as p}from"./dom-b6dedd88-DVv4NIlW.js";import{u as q,I as $}from"./interactive-1a42577a-UW5nSXx7.js";import{c as I,d as B}from"./locale-60f8ca58-JSRNgc9i.js";import{u as E,c as L,d as z,s as H}from"./t9n-75defee3-DHFcr_dh.js";import{H as U}from"./Heading-4aed0b02-Df4oVTGR.js";import{c as O,s as T,a as M}from"./loadable-13e9ffb2-DDS8ZEua.js";import{o as k}from"./openCloseComponent-4d1d6536-BSiOdJ_T.js";import{b as W}from"./floating-ui-382f6e89-CsKAHhmm.js";import{i as V}from"./key-3ee05994-D63ExP77.js";import"./debounce-6e4946fd-4Zc0Qe3n.js";import"./observers-9c166451-CPOshbR9.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const r={content:"content",toggle:"toggle",header:"header"},o={actionsEnd:"actions-end",container:"container",content:"content",contentStart:"content-start",controlContainer:"control-container",description:"description",header:"header",headerContainer:"header-container",headerHasText:"header--has-text",heading:"heading",icon:"icon",iconStart:"icon--start",iconEnd:"icon--end",iconEndContainer:"icon-end-container",invalid:"invalid",statusIcon:"status-icon",title:"title",toggle:"toggle",toggleIcon:"toggle-icon",valid:"valid"},l={actionsEnd:"actions-end",contentStart:"content-start",control:"control",headerMenuActions:"header-menu-actions",icon:"icon"},v={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},G=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto;transition-duration:var(--calcite-animation-timing)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start}.header--has-text{padding:var(--calcite-spacing-md)}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu actions-end";grid-column:header-start/actions-end;grid-row:1/2}.content-start,.icon,.icon--start,.icon--end{margin-inline-end:var(--calcite-spacing-md)}.icon calcite-loader{margin-inline-end:var(--calcite-spacing-xxxs)}.icon--start,.icon--end{color:var(--calcite-color-text-3)}.actions-end{grid-area:actions-end}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:var(--calcite-font-family);outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-color-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-color-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.icon-end-container{display:flex;align-items:center;margin-inline-start:auto}.toggle-icon{align-self:center;justify-self:end;color:var(--calcite-color-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-spacing-md)}.toggle:hover .toggle-icon{color:var(--calcite-color-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, var(--calcite-spacing-sm));padding-inline:var(--calcite-block-padding, var(--calcite-spacing-md))}.content-start{display:flex;align-items:center;color:var(--calcite-color-text-3)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}.actions-end{display:flex;align-items:stretch}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}`,J=G,Q=class{constructor(n){y(this,n),this.calciteBlockBeforeClose=g(this,"calciteBlockBeforeClose",6),this.calciteBlockBeforeOpen=g(this,"calciteBlockBeforeOpen",6),this.calciteBlockClose=g(this,"calciteBlockClose",6),this.calciteBlockOpen=g(this,"calciteBlockOpen",6),this.calciteBlockToggle=g(this,"calciteBlockToggle",6),this.openTransitionProp="margin-top",this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()},this.actionsEndSlotChangeHandler=t=>{this.hasEndActions=x(t)},this.handleContentStartSlotChange=t=>{this.hasContentStart=x(t)},this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.heading=void 0,this.headingLevel=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.loading=!1,this.menuFlipPlacements=void 0,this.menuPlacement=W,this.open=!1,this.status=void 0,this.description=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasContentStart=!1,this.hasEndActions=!1}openHandler(){k(this)}onMessagesChange(){}async setFocus(){await O(this),w(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){E(this,this.effectiveLocale)}connectedCallback(){N(this),I(this),L(this),this.transitionEl=this.el}disconnectedCallback(){B(this),z(this),j(this)}async componentWillLoad(){await H(this),T(this),this.open&&k(this)}componentDidLoad(){M(this)}componentDidRender(){q(this)}renderScrim(){const{loading:n}=this,t=e("slot",null);return[n?e("calcite-scrim",{loading:n}):null,t]}renderLoaderStatusIcon(){const{loading:n,messages:t,status:i}=this,a=!!m(this.el,l.icon);return n?e("div",{class:o.icon,key:"loader"},e("calcite-loader",{inline:!0,label:t.loading})):i?e("div",{class:o.icon,key:"status-icon"},e("calcite-icon",{class:{[o.statusIcon]:!0,[o.valid]:i=="valid",[o.invalid]:i=="invalid"},icon:v[i],scale:"s"})):a?e("div",{class:o.icon,key:"icon-slot"},e("slot",{key:"icon-slot",name:l.icon})):null}renderActionsEnd(){return e("div",{class:o.actionsEnd},e("slot",{name:l.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler}))}renderContentStart(){const{hasContentStart:n}=this;return e("div",{class:o.contentStart,hidden:!n},e("slot",{name:l.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderTitle(){const{heading:n,headingLevel:t,description:i}=this;return n||i?e("div",{class:o.title},e(U,{class:o.heading,level:t},n),i?e("div",{class:o.description},i):null):null}renderIcon(n){const{iconFlipRtl:t}=this,i=t==="both"||n==="start"?t==="start":t==="end",a=n==="start"?this.iconStart:this.iconEnd,s=n==="start"?o.iconStart:o.iconEnd;if(a)return e("calcite-icon",{class:s,flipRtl:i,icon:a,key:a,scale:"s"})}render(){const{collapsible:n,el:t,loading:i,open:a,heading:s,messages:d,description:u,menuFlipPlacements:D,menuPlacement:_}=this,A=a?d.collapse:d.expand,f=e("header",{key:"439d2866f9c5f13cfd8020812203a6cdf86c964f",class:{[o.header]:!0,[o.headerHasText]:!!(s||u)},id:r.header},this.renderIcon("start"),this.renderContentStart(),this.renderLoaderStatusIcon(),this.renderTitle()),P=!!m(t,l.control),F=!!m(t,l.headerMenuActions),R=a?v.opened:v.closed,K=e("div",{key:"a9721a9e145db53a215262190d2f7e46472edec6",class:o.headerContainer},this.dragHandle?e("calcite-handle",{label:s}):null,n?e("button",{"aria-controls":r.content,"aria-describedby":r.header,"aria-expanded":n?p(a):null,class:o.toggle,id:r.toggle,onClick:this.onHeaderClick,title:A},f,e("div",{class:o.iconEndContainer},this.renderIcon("end"),e("calcite-icon",{class:o.toggleIcon,icon:R,scale:"s"}))):this.iconEnd?e("div",null,f,e("div",{class:o.iconEndContainer},this.renderIcon("end"))):f,P?e("div",{"aria-labelledby":r.header,class:o.controlContainer},e("slot",{name:l.control})):null,F?e("calcite-action-menu",{flipPlacements:D??["top","bottom"],label:d.options,overlayPositioning:this.overlayPositioning,placement:_},e("slot",{name:l.headerMenuActions})):null,this.renderActionsEnd());return e(C,{key:"cdf7c69cc630466cfd4fb0078735f1e685fde512"},e($,{key:"ae5b2a044fb337bb2c5c12bee2c9ed4b10e5c373",disabled:this.disabled},e("article",{key:"01c5c5499d62361cfe26d8b6a878034f0805787b","aria-busy":p(i),class:{[o.container]:!0}},K,e("section",{key:"e72271e369055329e4447d15c2deec25599332ec","aria-labelledby":r.toggle,class:o.content,hidden:!a,id:r.content},this.renderScrim()))))}static get assetsDirs(){return["assets"]}get el(){return S(this)}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};Q.style=J;const h={content:"content",toggle:"toggle"},c={chevronIcon:"chevron-icon",content:"content",iconStart:"icon--start",iconEnd:"icon--end",invalid:"invalid",sectionHeader:"section-header",sectionHeaderText:"section-header__text",statusIcon:"status-icon",switch:"switch",toggle:"toggle",toggleSwitch:"toggle--switch",toggleContainer:"toggle-container",toggleSwitchContent:"toggle--switch__content",toggleSwitchText:"toggle--switch__text",valid:"valid"},b={menuOpen:"chevron-up",menuClosed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},X=`:host{box-sizing:border-box;display:block;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-color-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-color-border-3)}:host([open]) .toggle{color:var(--calcite-color-text-1)}:host([open]) .toggle:hover{color:var(--calcite-color-text-1)}:host([open]) .chevron-icon{color:var(--calcite-color-text-3)}:host([open]) .chevron-icon:hover{color:var(--calcite-color-text-1)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-font-family);gap:var(--calcite-spacing-md);color:var(--calcite-color-text-2);font-weight:var(--calcite-font-weight-normal)}.toggle:hover{color:var(--calcite-color-text-1)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.toggle--switch:hover,.section-header:hover{color:var(--calcite-color-text-1)}.section-header__text{margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle-container{position:relative;display:flex;align-items:center;background-color:transparent;word-break:break-word}.toggle-container .toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.toggle-container .icon--end,.toggle-container .icon--start,.toggle-container .chevron-icon{display:flex;align-items:center;color:var(--calcite-color-text-3)}.toggle-container .icon--end:hover,.toggle-container .icon--start:hover,.toggle-container .chevron-icon:hover{color:var(--calcite-color-text-1)}.status-icon{display:flex;align-items:center}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}:host([hidden]){display:none}[hidden]{display:none}`,Y=X,Z=class{constructor(n){y(this,n),this.calciteBlockSectionToggle=g(this,"calciteBlockSectionToggle",6),this.handleHeaderKeyDown=t=>{V(t.key)&&(this.toggleSection(),t.preventDefault(),t.stopPropagation())},this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()},this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.open=!1,this.status=void 0,this.text=void 0,this.toggleDisplay="button",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}async setFocus(){await O(this),w(this.el)}effectiveLocaleChange(){E(this,this.effectiveLocale)}connectedCallback(){I(this),L(this)}async componentWillLoad(){await H(this),T(this)}componentDidLoad(){M(this)}disconnectedCallback(){B(this),z(this)}renderStatusIcon(){const{status:n}=this,t=b[n]??!1,i={[c.statusIcon]:!0,[c.valid]:n=="valid",[c.invalid]:n=="invalid"};return t?e("calcite-icon",{class:i,icon:t,scale:"s"}):null}renderIcon(n){const{iconFlipRtl:t}=this;if(n===void 0)return null;const i=t==="both"||t==="start",a=t==="both"||t==="end",s=n===this.iconStart;return e("calcite-icon",{class:s?c.iconStart:c.iconEnd,flipRtl:s?i:a,icon:s?this.iconStart:this.iconEnd,key:s?this.iconStart:this.iconEnd,scale:"s"})}render(){const{messages:n,open:t,text:i,toggleDisplay:a}=this,s=t?b.menuOpen:b.menuClosed,d=t?n.collapse:n.expand,u=a==="switch"?e("div",{class:{[c.toggleContainer]:!0}},e("div",{"aria-controls":h.content,"aria-expanded":p(t),class:{[c.toggle]:!0,[c.toggleSwitch]:!0},id:h.toggle,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,role:"button",tabIndex:0,title:d},this.renderIcon(this.iconStart),e("div",{class:c.toggleSwitchContent},e("span",{class:c.toggleSwitchText},i)),this.renderIcon(this.iconEnd),this.renderStatusIcon(),e("calcite-switch",{checked:t,class:c.switch,inert:!0,label:d,scale:"s"}))):e("div",{class:{[c.toggleContainer]:!0}},e("button",{"aria-controls":h.content,"aria-expanded":p(t),class:{[c.sectionHeader]:!0,[c.toggle]:!0},id:h.toggle,onClick:this.toggleSection},this.renderIcon(this.iconStart),e("span",{class:c.sectionHeaderText},i),this.renderIcon(this.iconEnd),this.renderStatusIcon(),e("calcite-icon",{class:c.chevronIcon,icon:s,scale:"s"})));return e(C,{key:"8e61bf71e65fc045a1e088fb60e1bbe70ae02d75"},u,e("section",{key:"5cdacc4b9f504c512bcd10ebab26e8c32936ef04","aria-labelledby":h.toggle,class:c.content,hidden:!t,id:h.content},e("slot",{key:"fd84a50474173a49b32f7e94346481dade6d431f"})))}static get assetsDirs(){return["assets"]}get el(){return S(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};Z.style=Y;export{Q as calcite_block,Z as calcite_block_section};
//# sourceMappingURL=calcite-block_2.entry-D90hNeDR.js.map
