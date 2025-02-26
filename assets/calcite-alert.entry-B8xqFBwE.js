import{r as v,c as l,h as i,H as k,g as C}from"./index-DbNmBX4d.js";import{a as y,c as x,t as w,d as z}from"./dom-b6dedd88-4kSC7sXI.js";import{g as m}from"./component-5f0a8be8-6CIDVndn.js";import{s as A,a as T,c as E}from"./loadable-13e9ffb2-DqTcHdgq.js";import{N as F,c as B,d as S}from"./locale-60f8ca58-DiWCpcfr.js";import{o as g}from"./openCloseComponent-4d1d6536-XMSFxUKu.js";import{c as O,s as q,d as I,u as L}from"./t9n-75defee3-jNjmzve6.js";import{K as D}from"./resources-4b812945-DjkgwdyM.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";import"./observers-9c166451-DNuCbXPr.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c={slow:14e3,medium:1e4,fast:6e3},r={actionsEnd:"actions-end",title:"title",message:"message",link:"link"},o={actionsEnd:"actions-end",close:"close",container:"container",containerActive:"container--active",dismissProgress:"dismiss-progress",icon:"icon",containerEmbedded:"container--embedded",queueCount:"queue-count",queueCountActive:"queue-count--active",textContainer:"text-container",focused:"focused"},H=300;class M{constructor(){this.registeredElements=[],this.queueTimeoutId=null}registerElement(e){const{registeredElements:s}=this;if(!s.includes(e)){switch(e.queue){case"immediate":s.unshift(e);break;case"next":s.splice(1,0,e);break;case"last":s.push(e);break}this.updateAlerts()}}unregisterElement(e){const{registeredElements:s}=this,a=s.indexOf(e);a!==-1&&s.splice(a,1),e.active=!1,this.updateAlerts()}updateAlerts(){window.clearTimeout(this.queueTimeoutId),this.queueTimeoutId=null,this.registeredElements.forEach((e,s)=>{e.openAlertCount=this.registeredElements.length,s===0?this.queueTimeoutId=window.setTimeout(()=>e.active=!0,H):e.active=!1})}}const P=`:host{--calcite-internal-alert-edge-distance:2rem;display:block;inline-size:var(--calcite-alert-width)}.container{pointer-events:none;position:fixed;z-index:var(--calcite-z-index-toast);margin-inline:auto;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:min-content;align-items:center;justify-content:center;text-align:start;opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--calcite-alert-shadow, var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow));background-color:var(--calcite-alert-background-color, var(--calcite-color-foreground-1));border-radius:var(--calcite-alert-corner-radius, var(--calcite-border-radius));border-block-start:0 solid transparent;border-inline:1px solid var(--calcite-color-border-3);border-block-end:1px solid var(--calcite-color-border-3);max-inline-size:calc(100% - var(--calcite-internal-alert-edge-distance) * 2);transition:opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.container--bottom,.container--top{inset-inline-end:0;inset-inline-start:0}.container[class*=bottom]{transform:translate3d(0, var(--calcite-internal-alert-edge-distance), 0);inset-block-end:var(--calcite-internal-alert-edge-distance)}.container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-internal-alert-edge-distance)), 0);inset-block-start:var(--calcite-internal-alert-edge-distance)}.container[class*=start]{inset-inline-start:var(--calcite-internal-alert-edge-distance);inset-inline-end:auto}.container[class*=end]{inset-inline-end:var(--calcite-internal-alert-edge-distance);inset-inline-start:auto}.icon{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0px;margin-block:auto;margin-inline-end:auto}.close{display:flex;cursor:pointer;align-items:center;justify-content:flex-end;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-appearance:none;border-start-end-radius:var(--calcite-alert-corner-radius, var(--calcite-border-radius));border-end-end-radius:var(--calcite-alert-corner-radius, var(--calcite-border-radius));outline-color:transparent}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.close:hover,.close:focus{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-2)}.close:active{background-color:var(--calcite-color-foreground-3)}.queue-count{visibility:hidden;display:flex;min-inline-size:min-content;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2);opacity:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0 solid transparent;border-start-end-radius:0}.queue-count--active{visibility:visible;opacity:1}.dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.dismiss-progress::after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:"";background-color:var(--calcite-color-transparent-tint);inset-inline-end:0}.actions-end{display:flex;align-self:stretch}.text-container{box-sizing:border-box;display:flex;min-inline-size:0px;flex:1 1 auto;flex-direction:column;overflow-wrap:break-word}.footer{position:relative;display:flex;inline-size:auto;justify-content:flex-end;align-self:stretch;padding-block-start:1px;block-size:inherit}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-internal-alert-min-height:3.5rem;inline-size:var(--calcite-alert-width, 40em)}:host([scale=s]) .close{padding:0.75rem}:host([scale=s]) .icon{padding-inline-start:0.75rem}:host([scale=s]) .text-container{padding-block:0.5rem;padding-inline:0.75rem 0.5rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-internal-alert-min-height:4.1875rem;inline-size:var(--calcite-alert-width, 50em)}:host([scale=m]) .close{padding:1rem}:host([scale=m]) .icon{padding-inline-start:1rem}:host([scale=m]) .text-container{padding-block:0.75rem;padding-inline:1rem 0.75rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-internal-alert-min-height:5.625rem;inline-size:var(--calcite-alert-width, 60em)}:host([scale=l]) .close{padding:1.25rem}:host([scale=l]) .icon{padding-inline-start:1.25rem}:host([scale=l]) .text-container{padding-block:1rem;padding-inline:1.25rem 1rem}:host([open]) .container--active{border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container--active[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-internal-alert-edge-distance)), inherit)}:host([open]) .container--active[class*=top]{transform:translate3d(0, var(--calcite-internal-alert-edge-distance), inherit)}:host([auto-close])>.queue-count{border-inline-end:0 solid transparent}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);margin-inline-end:0.5rem;color:var(--calcite-color-text-2)}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-color-text-link)}:host([kind=brand]) .container{border-block-start-color:var(--calcite-color-brand)}:host([kind=brand]) .container .icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-block-start-color:var(--calcite-color-status-info)}:host([kind=info]) .container .icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-block-start-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-block-start-color:var(--calcite-color-status-success)}:host([kind=success]) .container .icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-block-start-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .icon{color:var(--calcite-color-status-warning)}:host([auto-close-duration=fast]) .dismiss-progress:after{animation:dismissProgress 6000ms ease-out}:host(:hover[auto-close-duration=fast]) .dismiss-progress:after,:host(:focus[auto-close-duration=fast]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=medium]) .dismiss-progress:after{animation:dismissProgress 10000ms ease-out}:host(:hover[auto-close-duration=medium]) .dismiss-progress:after,:host(:focus[auto-close-duration=medium]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=slow]) .dismiss-progress:after{animation:dismissProgress 14000ms ease-out}:host(:hover[auto-close-duration=slow]) .dismiss-progress:after,:host(:focus[auto-close-duration=slow]) .dismiss-progress:after{animation-play-state:paused}.container.focused .dismiss-progress::after{animation-play-state:paused}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}.container--embedded{position:absolute}:host([hidden]){display:none}[hidden]{display:none}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}`,K=P,n=new M,Q=class{constructor(t){v(this,t),this.calciteAlertBeforeClose=l(this,"calciteAlertBeforeClose",6),this.calciteAlertClose=l(this,"calciteAlertClose",6),this.calciteAlertBeforeOpen=l(this,"calciteAlertBeforeOpen",6),this.calciteAlertOpen=l(this,"calciteAlertOpen",6),this.handleKeyBoardFocus=()=>{this.isFocused=!0,this.handleFocus()},this.handleKeyBoardBlur=()=>{this.isFocused=!1,this.isHovered||this.handleBlur()},this.autoCloseTimeoutId=null,this.totalOpenTime=0,this.totalHoverTime=0,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.closeAlert=()=>{this.open=!1,this.clearAutoCloseTimeout()},this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=y(e)},this.handleMouseOver=()=>{this.isHovered=!0,this.handleFocus()},this.handleMouseLeave=()=>{this.isHovered=!1,this.isFocused||this.handleBlur()},this.handleFocus=()=>{this.clearAutoCloseTimeout(),this.totalOpenTime=Date.now()-this.initialOpenTime,this.lastMouseOverBegin=Date.now()},this.handleBlur=()=>{const e=Date.now()-this.lastMouseOverBegin,s=c[this.autoCloseDuration]-this.totalOpenTime+this.totalHoverTime;this.totalHoverTime=this.totalHoverTime?e+this.totalHoverTime:e,this.autoCloseTimeoutId=window.setTimeout(()=>this.closeAlert(),s)},this.active=!1,this.openAlertCount=0,this.open=!1,this.autoClose=!1,this.autoCloseDuration="medium",this.embedded=!1,this.kind="brand",this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.numberingSystem=void 0,this.placement="bottom",this.scale="m",this.messages=void 0,this.messageOverrides=void 0,this.queue="last",this.defaultMessages=void 0,this.effectiveLocale="",this.numberStringFormatter=new F,this.hasEndActions=!1,this.isFocused=!1}handleActiveChange(){this.clearAutoCloseTimeout(),this.active&&this.autoClose&&!this.autoCloseTimeoutId&&(this.initialOpenTime=Date.now(),this.autoCloseTimeoutId=window.setTimeout(()=>this.closeAlert(),c[this.autoCloseDuration]))}openHandler(){g(this),this.open?n.registerElement(this.el):n.unregisterElement(this.el)}updateDuration(){this.autoClose&&this.autoCloseTimeoutId&&(this.clearAutoCloseTimeout(),this.autoCloseTimeoutId=window.setTimeout(()=>this.closeAlert(),c[this.autoCloseDuration]))}onMessagesChange(){}handleQueueChange(){this.open&&(n.unregisterElement(this.el),n.registerElement(this.el))}connectedCallback(){B(this),O(this),this.open&&n.registerElement(this.el),this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}async componentWillLoad(){A(this),await q(this),this.open&&g(this)}componentDidLoad(){T(this)}disconnectedCallback(){n.unregisterElement(this.el),this.clearAutoCloseTimeout(),S(this),I(this),this.embedded=!1}render(){const{open:t,autoClose:e,label:s,placement:a,active:d,openAlertCount:f}=this,p=e?"alert":"alertdialog",u=!t,h=x(D,this.icon,this.kind),b=f>1;return i(k,{key:"cecedeaa678e4f6e22fd2aabc4d29bc8589430f6","aria-hidden":w(u),"aria-label":s,"calcite-hydrated-hidden":u,role:p},i("div",{key:"ca85d5f5ec313f3a305e01dcc8cbbad9647dd516",class:{[o.container]:!0,[o.containerActive]:d,[`${o.container}--${a}`]:!0,[o.containerEmbedded]:this.embedded,[o.focused]:this.isFocused},onPointerEnter:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseOver:null,onPointerLeave:this.autoClose?this.handleMouseLeave:null,ref:this.setTransitionEl},h&&this.renderIcon(h),i("div",{key:"1f72f255c3e0630eed63bb62d3d50f4a2ba6a528",class:o.textContainer,onFocusin:this.autoClose&&this.autoCloseTimeoutId?this.handleKeyBoardFocus:null,onFocusout:this.autoClose?this.handleKeyBoardBlur:null},i("slot",{key:"aade607960adea0a10f5eac85b119444085c9cf9",name:r.title}),i("slot",{key:"1f47158cfbf8c0626cd49246142fb750311b1d4a",name:r.message}),i("slot",{key:"5ba06e024b517f23168311828cc8ce41c21926a6",name:r.link})),this.renderActionsEnd(),b?this.renderQueueCount():null,this.renderCloseButton(),t&&d&&e?i("div",{class:o.dismissProgress}):null))}renderCloseButton(){return i("button",{"aria-label":this.messages.close,class:o.close,key:"close",onClick:this.closeAlert,onFocusin:this.autoClose?this.handleKeyBoardFocus:null,onFocusout:this.autoClose?this.handleKeyBoardBlur:null,ref:t=>this.closeButton=t,type:"button"},i("calcite-icon",{icon:"x",scale:m(this.scale)}))}renderQueueCount(){const{openAlertCount:t}=this,e=t>2?t-1:1,s=this.numberStringFormatter.numberFormatter.format(e);return i("div",{class:{[o.queueCount]:!0,[o.queueCountActive]:t>1},key:"queue-count"},i("calcite-chip",{scale:this.scale,value:s},s))}renderActionsEnd(){return i("div",{class:o.actionsEnd},i("slot",{name:r.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler}))}renderIcon(t){return i("div",{class:o.icon},i("calcite-icon",{flipRtl:this.iconFlipRtl,icon:t,scale:m(this.scale)}))}async setFocus(){await E(this);const t=z(this.el,{selector:"calcite-link"});if(!(!this.closeButton&&!t)){if(t)return t.setFocus();this.closeButton&&this.closeButton.focus()}}effectiveLocaleChange(){L(this,this.effectiveLocale),this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}numberingSystemChange(){this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}clearAutoCloseTimeout(){window.clearTimeout(this.autoCloseTimeoutId),this.autoCloseTimeoutId=null}onBeforeOpen(){this.calciteAlertBeforeOpen.emit()}onOpen(){this.calciteAlertOpen.emit()}onBeforeClose(){this.calciteAlertBeforeClose.emit()}onClose(){this.calciteAlertClose.emit()}static get assetsDirs(){return["assets"]}get el(){return C(this)}static get watchers(){return{active:["handleActiveChange"],open:["openHandler"],autoCloseDuration:["updateDuration"],messageOverrides:["onMessagesChange"],queue:["handleQueueChange"],effectiveLocale:["effectiveLocaleChange"],numberingSystem:["numberingSystemChange"]}}};Q.style=K;export{Q as calcite_alert};
//# sourceMappingURL=calcite-alert.entry-B8xqFBwE.js.map
