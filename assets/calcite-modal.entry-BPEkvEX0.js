import{r as b,c as n,h as i,H as u,g as f}from"./index-j6yFHuRy.js";import{c as g,d as v}from"./conditionalSlot-167e1146-DN_WRgy1.js";import{d as s,a as c,f as x,k as d}from"./dom-b6dedd88-Cu1e-rKq.js";import{d as l,a as h,c as k,u as y}from"./focusTrapComponent-7cfd1d69-CS-MM3Do.js";import{s as z,a as w,c as C}from"./loadable-13e9ffb2-P8mYP7ok.js";import{c as m}from"./observers-9c166451-BmkzuYBc.js";import{o as O}from"./openCloseComponent-4d1d6536-CXKAc8zl.js";import{c as M,d as T}from"./locale-60f8ca58-CupuDOSB.js";import{s as E,c as F,d as S,u as B}from"./t9n-75defee3-BwpgkMxH.js";import{g as L,c as D}from"./component-5f0a8be8-6CIDVndn.js";import{l as $}from"./logger-d56ad214-DQtjrocv.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const e={modal:"modal",title:"title",header:"header",footer:"footer",scrim:"scrim",back:"back",close:"close",secondary:"secondary",primary:"primary",container:"container",containerOpen:"container--open",containerEmbedded:"container--embedded",content:"content",contentNoFooter:"content--no-footer",contentBottom:"content-bottom",contentTop:"content-top",openingIdle:"modal--opening-idle",openingActive:"modal--opening-active",closingIdle:"modal--closing-idle",closingActive:"modal--closing-active"},H={close:"x"},a={content:"content",contentBottom:"content-bottom",contentTop:"content-top",header:"header",back:"back",secondary:"secondary",primary:"primary"},I=`:host{--calcite-modal-scrim-background:rgba(0, 0, 0, 0.85);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-color-transparent-scrim));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-color-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-color-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width-scale=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width-scale=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=s][docked]) .container{align-items:flex-end}}:host([width-scale=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width-scale=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=m][docked]) .container{align-items:flex-end}}:host([width-scale=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width-scale=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-color-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .modal{border-color:var(--calcite-color-status-info)}:host([kind=success]) .modal{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .modal{border-color:var(--calcite-color-status-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container--embedded{position:absolute;pointer-events:auto}.container--embedded calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}`,V=I;let r=0,p="";$.deprecated("component",{name:"modal",removalVersion:4,suggested:"dialog"});const W=class{constructor(t){b(this,t),this.calciteModalBeforeClose=n(this,"calciteModalBeforeClose",6),this.calciteModalClose=n(this,"calciteModalClose",6),this.calciteModalBeforeOpen=n(this,"calciteModalBeforeOpen",6),this.calciteModalOpen=n(this,"calciteModalOpen",6),this.ignoreOpenChange=!1,this.mutationObserver=m("mutation",()=>this.handleMutationObserver()),this.cssVarObserver=m("mutation",()=>{this.updateSizeCssVars()}),this.openTransitionProp="opacity",this.setTransitionEl=o=>{this.transitionEl=o},this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteModalOpen",this.openEnd)},this.handleCloseClick=()=>{this.open=!1},this.handleOutsideClose=()=>{this.outsideCloseDisabled||(this.open=!1)},this.closeModal=async()=>{if(this.beforeClose)try{await this.beforeClose(this.el)}catch{requestAnimationFrame(()=>{this.ignoreOpenChange=!0,this.open=!0,this.ignoreOpenChange=!1});return}r--,this.opened=!1,this.removeOverflowHiddenClass()},this.handleMutationObserver=()=>{this.updateFooterVisibility(),this.updateFocusTrapElements()},this.updateFooterVisibility=()=>{this.hasFooter=!!s(this.el,[a.back,a.primary,a.secondary])},this.updateSizeCssVars=()=>{this.cssWidth=getComputedStyle(this.el).getPropertyValue("--calcite-modal-width"),this.cssHeight=getComputedStyle(this.el).getPropertyValue("--calcite-modal-height")},this.contentTopSlotChangeHandler=o=>{this.hasContentTop=c(o)},this.contentBottomSlotChangeHandler=o=>{this.hasContentBottom=c(o)},this.open=!1,this.opened=!1,this.beforeClose=void 0,this.closeButtonDisabled=!1,this.focusTrapDisabled=!1,this.outsideCloseDisabled=!1,this.docked=void 0,this.embedded=!1,this.escapeDisabled=!1,this.scale="m",this.widthScale="m",this.fullscreen=void 0,this.kind=void 0,this.messages=void 0,this.messageOverrides=void 0,this.cssWidth=void 0,this.cssHeight=void 0,this.hasFooter=!0,this.hasContentTop=!1,this.hasContentBottom=!1,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(t){this.open&&(t?l(this):h(this))}onMessagesChange(){}async componentWillLoad(){await E(this),z(this),this.open&&this.openModal()}componentDidLoad(){w(this)}connectedCallback(){var t,o;(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0}),(o=this.cssVarObserver)==null||o.observe(this.el,{attributeFilter:["style"]}),this.updateSizeCssVars(),this.updateFooterVisibility(),g(this),M(this),F(this),k(this)}disconnectedCallback(){var t,o;this.removeOverflowHiddenClass(),(t=this.mutationObserver)==null||t.disconnect(),(o=this.cssVarObserver)==null||o.disconnect(),v(this),l(this),T(this),S(this),this.embedded=!1}render(){return i(u,{key:"f92cd77f4a5ad4a245ca50fe2b2bfcf9966d4ca8","aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},i("div",{key:"a9d348a67842162f1bc17ec8422c07963aed412d",class:{[e.container]:!0,[e.containerOpen]:this.opened,[e.containerEmbedded]:this.embedded}},i("calcite-scrim",{key:"7dc3bc9220fc375522a6d390b633f9573bfa6c67",class:e.scrim,onClick:this.handleOutsideClose}),this.renderStyle(),i("div",{key:"40782ba2b6d3f086c884ace3529110e873009504",class:{[e.modal]:!0},ref:this.setTransitionEl},i("div",{key:"ea3a72ab0a0e5abae6e766d0b7b2cfce54667e86",class:e.header},this.renderCloseButton(),i("header",{key:"abe5c28d11fc6241cd6ac40adef4d94529eb9d5c",class:e.title},i("slot",{key:"3d1d6ed6c0249472a00fba4128a861e6a6eae4dd",name:e.header}))),this.renderContentTop(),i("div",{key:"0e65dfbd175e490586518d1a4c34b9eb1dde1f01",class:{[e.content]:!0,[e.contentNoFooter]:!this.hasFooter},ref:t=>this.modalContent=t},i("slot",{key:"d5f3b08e61e8e47f64fd13bc6eb7f7ed6a07b7c8",name:a.content})),this.renderContentBottom(),this.renderFooter())))}renderFooter(){return this.hasFooter?i("div",{class:e.footer,key:"footer"},i("span",{class:e.back},i("slot",{name:a.back})),i("span",{class:e.secondary},i("slot",{name:a.secondary})),i("span",{class:e.primary},i("slot",{name:a.primary}))):null}renderContentTop(){return i("div",{class:e.contentTop,hidden:!this.hasContentTop},i("slot",{name:a.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderContentBottom(){return i("div",{class:e.contentBottom,hidden:!this.hasContentBottom},i("slot",{name:a.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderCloseButton(){return this.closeButtonDisabled?null:i("button",{"aria-label":this.messages.close,class:e.close,key:"button",onClick:this.handleCloseClick,ref:t=>this.closeButtonEl=t,title:this.messages.close},i("calcite-icon",{icon:H.close,scale:L(this.scale)}))}renderStyle(){if(!this.fullscreen&&(this.cssWidth||this.cssHeight))return i("style",null,`.${e.container} {
              ${this.docked&&this.cssWidth?"align-items: center !important;":""}
            }
            .${e.modal} {
              block-size: ${this.cssHeight?this.cssHeight:"auto"} !important;
              ${this.cssWidth?`inline-size: ${this.cssWidth} !important;`:""}
              ${this.cssWidth?`max-inline-size: ${this.cssWidth} !important;`:""}
              ${this.docked?"border-radius: var(--calcite-border-radius) !important;":""}
            }
            @media screen and (max-width: ${this.cssWidth}) {
              .${e.container} {
                ${this.docked?"align-items: flex-end !important;":""}
              }
              .${e.modal} {
                max-block-size: 100% !important;
                inline-size: 100% !important;
                max-inline-size: 100% !important;
                min-inline-size: 100% !important;
                margin: 0 !important;
                ${this.docked?"":"block-size: 100% !important;"}
                ${this.docked?"":"border-radius: 0 !important;"}
                ${this.docked?"border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;":""}
              }
            }
          `)}effectiveLocaleChange(){B(this,this.effectiveLocale)}handleEscape(t){this.open&&!this.escapeDisabled&&t.key==="Escape"&&!t.defaultPrevented&&(this.open=!1,t.preventDefault())}async setFocus(){await C(this),x(this.el)}async updateFocusTrapElements(){y(this)}async scrollContent(t=0,o=0){this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:t,left:o,behavior:"smooth"}):(this.modalContent.scrollTop=t,this.modalContent.scrollLeft=o))}onBeforeOpen(){this.transitionEl.classList.add(e.openingActive),this.calciteModalBeforeOpen.emit()}onOpen(){this.transitionEl.classList.remove(e.openingIdle,e.openingActive),this.calciteModalOpen.emit(),h(this)}onBeforeClose(){this.transitionEl.classList.add(e.closingActive),this.calciteModalBeforeClose.emit()}onClose(){this.transitionEl.classList.remove(e.closingIdle,e.closingActive),this.calciteModalClose.emit(),l(this)}toggleModal(t){this.ignoreOpenChange||(t?this.openModal():this.closeModal())}handleOpenedChange(t){const o=t?e.openingIdle:e.closingIdle;this.transitionEl.classList.add(o),O(this)}async openModal(){await D(this.el),this.el.addEventListener("calciteModalOpen",this.openEnd),this.opened=!0;const t=s(this.el,a.header),o=s(this.el,a.content);this.titleId=d(t),this.contentId=d(o),this.embedded||(r===0&&(p=document.documentElement.style.overflow),r++,document.documentElement.style.setProperty("overflow","hidden"))}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",p)}static get assetsDirs(){return["assets"]}get el(){return f(this)}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"],opened:["handleOpenedChange"]}}};W.style=V;export{W as calcite_modal};
//# sourceMappingURL=calcite-modal.entry-BPEkvEX0.js.map
