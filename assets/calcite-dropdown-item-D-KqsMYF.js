import{dQ as k,dR as I,ee as s,e9 as D,e6 as y,e7 as E,e8 as x,d_ as t,ea as a,ec as C,eb as S,ed as q,dJ as R}from"./index-Cj37dcSI.js";import{C as o}from"./resources3-Qm0M2nV8.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const z=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.container a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}:host([scale=s]) .container{padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:0.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-xl)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-xl)}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-color-brand)}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,A=z,m=k(class extends I{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDropdownItemSelect=s(this,"calciteDropdownItemSelect",6),this.calciteInternalDropdownItemSelect=s(this,"calciteInternalDropdownItemSelect",6),this.calciteInternalDropdownItemKeyEvent=s(this,"calciteInternalDropdownItemKeyEvent",6),this.calciteInternalDropdownCloseRequest=s(this,"calciteInternalDropdownCloseRequest",6),this.disabled=!1,this.href=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.label=void 0,this.rel=void 0,this.selected=!1,this.target=void 0,this.selectionMode="single",this.scale="m"}async setFocus(){var e;await D(this),(e=this.el)==null||e.focus()}componentWillLoad(){y(this),this.initialize()}componentDidLoad(){E(this)}connectedCallback(){this.initialize()}componentDidRender(){x(this)}render(){const{href:e,selectionMode:n,label:l,iconFlipRtl:i}=this,r=t("calcite-icon",{key:"1ec1c941651dda8f39fa15427592141f04180f3e",class:o.iconStart,flipRtl:i==="start"||i==="both",icon:this.iconStart,scale:a(this.scale)}),c=t("span",{key:"3ab167ed4054ca34b4e13e72b752af6cf25522ae",class:o.itemContent},t("slot",{key:"88cf44809fb48450c66cc8f105bbda008a78157d"})),d=t("calcite-icon",{key:"32fb27182943a032c0037f1f878a95c194d2dff1",class:o.iconEnd,flipRtl:i==="end"||i==="both",icon:this.iconEnd,scale:a(this.scale)}),p=this.iconStart&&this.iconEnd?[r,c,d]:this.iconStart?[r,c]:this.iconEnd?[c,d]:c,b=e?t("a",{"aria-label":l,class:o.link,href:e,ref:v=>this.childLink=v,rel:this.rel,tabIndex:-1,target:this.target},p):p,w=e?null:n==="single"?"menuitemradio":n==="multiple"?"menuitemcheckbox":"menuitem",g=n!=="none"?C(this.selected):null,{disabled:h}=this;return t(q,{key:"beec8e51bf18bdcab1928181828b372cc70bb7ee","aria-checked":g,"aria-label":e?"":l,role:w,tabIndex:h?-1:0},t(S,{key:"5cbbd1074d6c571f4cac3a99e4a2c09bf113db55",disabled:h},t("div",{key:"bff025aeb280c9d0d829e5cf4d94e9392604e607",class:{[o.container]:!0,[o.containerNone]:n==="none"}},n!=="none"?t("calcite-icon",{class:o.icon,icon:n==="multiple"?"check":"bullet-point",scale:a(this.scale)}):null,b)))}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click(),e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break}}updateActiveItemOnChange(e){e.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.determineActiveItem()),e.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),this.selectionMode==="none"&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1;break}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return this}static get style(){return A}},[1,"calcite-dropdown-item",{disabled:[516],href:[513],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],label:[1],rel:[513],selected:[1540],target:[513],selectionMode:[1,"selection-mode"],scale:[513],setFocus:[64]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"],[16,"calciteInternalDropdownItemChange","updateActiveItemOnChange"]]]);function u(){if(typeof customElements>"u")return;["calcite-dropdown-item","calcite-icon"].forEach(e=>{switch(e){case"calcite-dropdown-item":customElements.get(e)||customElements.define(e,m);break;case"calcite-icon":customElements.get(e)||R();break}})}u();const L=m,M=u;export{L as CalciteDropdownItem,M as defineCustomElement};
//# sourceMappingURL=calcite-dropdown-item-D-KqsMYF.js.map
