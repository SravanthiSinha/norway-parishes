import{r as h,c as i,h as l,g as u}from"./index-D2fbPmv2.js";import{t as d}from"./dom-b6dedd88-Dk1sfn4T.js";import{s as g,a as f,c as b}from"./loadable-13e9ffb2-FT_pyice.js";import{c as p,d as m}from"./locale-60f8ca58-CVKTHQMt.js";import{c as v,s as C,d as y,u as x}from"./t9n-75defee3-mhlcIuV_.js";import{u as k,I as H}from"./interactive-1a42577a-q2XeVP2J.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";import"./observers-9c166451-PYokh1sc.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const r={handle:"handle",handleSelected:"handle--selected"},L={drag:"drag"},s={itemLabel:"{itemLabel}",position:"{position}",total:"{total}"},T=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;outline-color:transparent;color:var(--calcite-handle-icon-color, var(--calcite-color-border-input));background-color:var(--calcite-handle-background-color, transparent);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{color:var(--calcite-handle-icon-color-hover, var(--calcite-color-text-1));background-color:var(--calcite-handle-background-color-hover, var(--calcite-color-foreground-2))}:host(:not([disabled])) .handle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          );color:var(--calcite-handle-icon-color-hover, var(--calcite-color-text-1))}:host(:not([disabled])) .handle--selected{color:var(--calcite-handle-icon-color-selected, var(--calcite-color-text-1));background-color:var(--calcite-handle-background-color-selected, var(--calcite-color-foreground-3))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,A=T,S=class{constructor(e){h(this,e),this.calciteHandleChange=i(this,"calciteHandleChange",6),this.calciteHandleNudge=i(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=i(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=t=>{if(!this.disabled)switch(t.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),t.preventDefault();break;case"ArrowUp":if(!this.selected)return;t.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;t.preventDefault(),this.calciteHandleNudge.emit({direction:"down"});break}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){v(this),p(this)}async componentWillLoad(){g(this),await C(this)}componentDidLoad(){f(this)}componentDidRender(){k(this)}disconnectedCallback(){y(this),m(this)}effectiveLocaleChange(){x(this,this.effectiveLocale)}async setFocus(){var e;await b(this),(e=this.handleButton)==null||e.focus()}getTooltip(){const{label:e,messages:t}=this;return t?e?t.dragHandle.replace(s.itemLabel,e):t.dragHandleUntitled:""}getAriaText(e){const{setPosition:t,setSize:n,label:c,messages:a,selected:o}=this;return!a||!c||typeof n!="number"||typeof t!="number"?null:(e==="label"?o?a.dragHandleChange:a.dragHandleIdle:o?a.dragHandleActive:a.dragHandleCommit).replace(s.position,t.toString()).replace(s.itemLabel,c).replace(s.total,n.toString())}render(){return l(H,{key:"1a694de393421691c83e7265850275c217ef7ffe",disabled:this.disabled},l("span",{key:"82ff692c15c2d9294ceb814b3f7f06bb4d8ff0e0","aria-checked":this.disabled?null:d(this.selected),"aria-disabled":this.disabled?d(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),class:{[r.handle]:!0,[r.handleSelected]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:e=>{this.handleButton=e},role:"radio",tabIndex:this.disabled?null:0,title:this.getTooltip()},l("calcite-icon",{key:"25862a953826aea2d594507157aaffc21d07001c",icon:L.drag,scale:"s"})))}static get assetsDirs(){return["assets"]}get el(){return u(this)}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};S.style=A;export{S as calcite_handle};
//# sourceMappingURL=calcite-handle.entry-BF-LLU5D.js.map
