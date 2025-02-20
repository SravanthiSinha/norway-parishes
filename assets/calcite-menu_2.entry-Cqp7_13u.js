import{r as f,f as E,h as o,H as p,g as b,c as h,C as S,F as z}from"./index-BLU2cKnj.js";import{s as v,h as l,b as D,g as A,t as m}from"./dom-b6dedd88-BkDbx1ko.js";import{s as g,a as y,c as I}from"./loadable-13e9ffb2-ByyDlQ0Z.js";import{c as w,d as k}from"./locale-60f8ca58-DkFUywIU.js";import{u as x,c as L,s as M,d as C}from"./t9n-75defee3-SZLB-vot.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";import"./observers-9c166451-R27wf6vn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const F=":host{display:flex}ul{margin:0px;display:inline-flex;block-size:100%;align-items:center;padding:0px}:host([layout=vertical]) ul{display:flex;inline-size:100%;flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}",H=F,O=class{constructor(e){f(this,e),this.menuItems=[],this.handleMenuSlotChange=t=>{this.menuItems=v(t),this.setMenuItemLayout(this.menuItems,this.layout)},this.label=void 0,this.layout="horizontal",this.messageOverrides=void 0,this.messages=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}handleGlobalAttributesChanged(){E(this),this.setMenuItemLayout(this.menuItems,this.layout)}handleLayoutChange(e){this.setMenuItemLayout(this.menuItems,e)}onMessagesChange(){}effectiveLocaleChange(){x(this,this.effectiveLocale)}connectedCallback(){w(this),L(this)}async componentWillLoad(){g(this),await M(this)}componentDidLoad(){y(this)}disconnectedCallback(){k(this),C(this)}async setFocus(){await I(this),this.el.focus()}calciteInternalNavMenuItemKeyEvent(e){const t=e.target,i=e.detail.children,s=e.detail.event.key;e.stopPropagation(),s==="ArrowDown"?t.layout==="vertical"?l(this.menuItems,t,"next",!1):e.detail.isSubmenuOpen&&i[0].setFocus():s==="ArrowUp"?this.layout==="vertical"?l(this.menuItems,t,"previous",!1):e.detail.isSubmenuOpen&&i[i.length-1].setFocus():s==="ArrowRight"?this.layout==="horizontal"?l(this.menuItems,t,"next",!1):e.detail.isSubmenuOpen&&i[0].setFocus():s==="ArrowLeft"?this.layout==="horizontal"?l(this.menuItems,t,"previous",!1):e.detail.isSubmenuOpen&&this.focusParentElement(e.target):s==="Escape"&&this.focusParentElement(e.target),e.preventDefault()}focusParentElement(e){const t=e.parentElement;t&&(D(t),t.open=!1)}setMenuItemLayout(e,t){e.forEach(i=>{i.layout=t,this.getEffectiveRole()==="menubar"&&(i.isTopLevelItem=!0,i.topLevelMenuLayout=this.layout)})}getEffectiveRole(){return this.el.role||"menubar"}render(){return o(p,{key:"75308ac4419f7116f73975ad9ff88d25817d0522"},o("ul",{key:"ed22f7ab681c6e583b0b5aa720823898759687cb","aria-label":this.label,role:this.getEffectiveRole()},o("slot",{key:"4296d48a1a8921802458776d02e119feeaf12b3e",onSlotchange:this.handleMenuSlotChange})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return b(this)}static get watchers(){return{role:["handleGlobalAttributesChanged"],layout:["handleLayoutChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};O.style=H;const n={container:"container",content:"content",dropdownVertical:"dropdown--vertical",dropdownMenuItems:"dropdown-menu-items",dropdownAction:"dropdown-action",layoutVertical:"layout--vertical",hoverHrefIcon:"hover-href-icon",icon:"icon",iconBreadcrumb:"icon--breadcrumb",iconDropdown:"icon--dropdown",iconEnd:"icon--end",iconStart:"icon--start",isParentVertical:"parent--vertical",itemContent:"item-content",open:"open",nested:"nested",textContainer:"text-container"},R=`:host{position:relative;box-sizing:border-box;display:flex;align-items:center;flex-shrink:0}:host .container,:host .item-content,:host .content{min-block-size:3rem}:host([layout=vertical]){inline-size:100%}:host(:not([layout=vertical])){block-size:100%}.container,.item-content{display:flex;block-size:100%;inline-size:100%;flex-direction:row;align-items:stretch}.content{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);padding-inline:1rem;font-size:var(--calcite-font-size-0);color:var(--calcite-color-text-2);outline:2px solid transparent;outline-offset:2px;text-decoration:none;border-block-end:0.125rem solid transparent;padding-block-start:0.125rem}.content:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-2)}.content:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-2);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.content:active{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}.content span{display:inline-flex}.content.layout--vertical{display:flex;inline-size:100%;justify-content:flex-start;padding-block:1rem;border-block-end:0;border-inline-end:0.25rem solid transparent}:host([active]) .content{color:var(--calcite-color-text-1);border-color:var(--calcite-color-brand)}:host([active]) .content .icon{--calcite-icon-color:var(--calcite-color-brand)}:host([layout=vertical]) .content{padding-inline:0.75rem}.icon--start{margin-inline-end:0.75rem}.icon--end{margin-inline-start:0.75rem}:host([layout=vertical]) .icon--end{margin-inline-start:auto;padding-inline-start:0.75rem}.icon--dropdown{position:relative;margin-inline-start:auto;margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-icon-color:var(--calcite-color-text-3)}:host([layout=vertical]) .icon--end~.icon--dropdown{margin-inline-start:0.75rem}:host([layout=vertical]) .hover-href-icon{padding-inline-start:0.5rem}:host([layout=vertical]) .hover-href-icon~.icon--end{margin-inline-start:0.5rem}:host([layout=vertical]) .hover-href-icon~.icon--breadcrumb{margin-inline-start:0.75rem}.icon--breadcrumb{margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-icon-color:var(--calcite-color-text-3)}:host([layout=vertical]) .icon--breadcrumb{margin-inline-start:auto}:host([layout=vertical]) .icon--breadcrumb~.icon--dropdown{margin-inline-start:0.5rem}:host([layout=vertical]) .icon--end~.icon--breadcrumb{margin-inline-start:0.5rem}:host([breadcrumb]) .content{padding-inline-end:0.75rem}calcite-action{position:relative;block-size:auto;border-inline-start:1px solid var(--calcite-color-foreground-1)}calcite-action::after{position:absolute;inset-inline-start:-1px;display:block;inline-size:1px;content:"";inset-block:0.75rem;background-color:var(--calcite-color-border-3)}calcite-action:hover::after{block-size:100%;inset-block:0}.content:focus~calcite-action,.content:hover~calcite-action{color:var(--calcite-color-text-1);border-inline-start:1px solid var(--calcite-color-border-3)}.container:hover .dropdown-action{background-color:var(--calcite-color-foreground-2)}.dropdown-menu-items{position:absolute;display:none;block-size:auto;min-inline-size:100%;flex-direction:column;overflow:visible;border:1px solid var(--calcite-color-border-3);background:var(--calcite-color-foreground-1);inset-block-start:100%;z-index:var(--calcite-z-index-dropdown)}.dropdown-menu-items.open{display:block}.dropdown-menu-items.nested{position:absolute;inset-block-start:-1px;transform:translateX(calc(100% - 2px))}.parent--vertical{flex-direction:column}.dropdown--vertical.dropdown-menu-items{position:relative;border-radius:0px;box-shadow:none;inset-block-start:0;transform:none}.dropdown--vertical.dropdown-menu-items:last-of-type{border-inline:0}:host([layout=vertical]:last-of-type) .dropdown-menu-items{border-block-end:0}:host([slot=submenu-item]) .parent--vertical{padding-inline-start:1.5rem}.dropdown-menu-items.nested.calcite--rtl{transform:translateX(calc(-100% + 2px))}.dropdown--vertical.dropdown-menu-items.nested.calcite--rtl{transform:none}.hover-href-icon{position:relative;inset-inline-end:0.25rem;margin-inline-start:auto;opacity:0;transition:all var(--calcite-internal-animation-timing-medium) ease-in-out}.content:focus .hover-href-icon,.content:hover .hover-href-icon{inset-inline-end:-0.25rem;opacity:1}:host([hidden]){display:none}[hidden]{display:none}`,T=R,K=class{constructor(e){f(this,e),this.calciteInternalMenuItemKeyEvent=h(this,"calciteInternalMenuItemKeyEvent",7),this.calciteMenuItemSelect=h(this,"calciteMenuItemSelect",7),this.clickHandler=t=>{(this.href&&t.target===this.dropdownActionEl||!this.href&&this.hasSubmenu)&&(this.open=!this.open),this.selectMenuItem(t)},this.handleMenuItemSlotChange=t=>{this.submenuItems=v(t),this.submenuItems.forEach(i=>{i.topLevelMenuLayout||(i.topLevelMenuLayout=this.topLevelMenuLayout)}),this.hasSubmenu=this.submenuItems.length>0},this.keyDownHandler=async t=>{const{hasSubmenu:i,href:s,layout:u,open:a,submenuItems:d}=this,r=t.key,c=t.target===this.dropdownActionEl;if(!t.defaultPrevented){if(r===" "||r==="Enter")i&&(!s||s&&c)&&(this.open=!a),!(s&&c)&&r!=="Enter"&&this.selectMenuItem(t),(r===" "||s&&c)&&t.preventDefault();else if(r==="Escape"){if(a){this.open=!1;return}this.calciteInternalMenuItemKeyEvent.emit({event:t}),t.preventDefault()}else if(r==="ArrowDown"||r==="ArrowUp"){if(t.preventDefault(),(c||!s)&&i&&!a&&u==="horizontal"){this.open=!0;return}this.calciteInternalMenuItemKeyEvent.emit({event:t,children:d,isSubmenuOpen:a&&i})}else if(r==="ArrowLeft")t.preventDefault(),this.calciteInternalMenuItemKeyEvent.emit({event:t,children:d,isSubmenuOpen:!0});else if(r==="ArrowRight"){if(t.preventDefault(),(c||!s)&&i&&!a&&u==="vertical"){this.open=!0;return}this.calciteInternalMenuItemKeyEvent.emit({event:t,children:d,isSubmenuOpen:a&&i})}}},this.active=void 0,this.breadcrumb=void 0,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.isTopLevelItem=!1,this.label=void 0,this.layout=void 0,this.messageOverrides=void 0,this.messages=void 0,this.open=!1,this.rel=void 0,this.target=void 0,this.text=void 0,this.topLevelMenuLayout=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasSubmenu=!1,this.submenuItems=void 0}onMessagesChange(){}effectiveLocaleChange(){x(this,this.effectiveLocale)}async setFocus(){await I(this),this.anchorEl.focus()}handleClickOut(e){this.topLevelMenuLayout!=="vertical"&&this.hasSubmenu&&this.open&&!e.composedPath().includes(this.el)&&(this.open=!1)}handleFocusOut(e){this.topLevelMenuLayout!=="vertical"&&!this.el.contains(e.relatedTarget)&&(this.open=!1)}connectedCallback(){w(this),L(this)}async componentWillLoad(){g(this),await M(this)}componentDidLoad(){y(this)}disconnectedCallback(){k(this),C(this)}blurHandler(){this.isFocused=!1}focusHandler(e){const t=e.target;this.isFocused=!0,t.open&&!this.open&&(t.open=!1)}selectMenuItem(e){e.target!==this.dropdownActionEl&&this.calciteMenuItemSelect.emit()}renderIconStart(){return o("calcite-icon",{class:`${n.icon} ${n.iconStart}`,flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,key:n.iconStart,scale:"s"})}renderIconEnd(){return o("calcite-icon",{class:`${n.icon} ${n.iconEnd}`,flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,key:n.iconEnd,scale:"s"})}renderBreadcrumbIcon(e){return o("calcite-icon",{class:`${n.icon} ${n.iconBreadcrumb}`,icon:e==="rtl"?"chevron-left":"chevron-right",key:n.iconBreadcrumb,scale:"s"})}renderDropdownIcon(e){const t=e==="rtl"?"chevron-left":"chevron-right";return o("calcite-icon",{class:`${n.icon} ${n.iconDropdown}`,icon:this.topLevelMenuLayout==="vertical"||this.isTopLevelItem?this.open?"chevron-up":"chevron-down":t,key:n.iconDropdown,scale:"s"})}renderDropdownAction(e){const t=e==="rtl"?"chevron-left":"chevron-right";return o("calcite-action",{class:n.dropdownAction,icon:this.topLevelMenuLayout==="vertical"||this.isTopLevelItem?this.open?"chevron-up":"chevron-down":t,key:n.dropdownAction,onClick:this.clickHandler,onKeyDown:this.keyDownHandler,ref:i=>this.dropdownActionEl=i,text:this.messages.open})}renderSubmenuItems(e){return o("calcite-menu",{class:{[n.dropdownMenuItems]:!0,[n.open]:this.open,[n.nested]:!this.isTopLevelItem,[S.rtl]:e==="rtl",[n.dropdownVertical]:this.topLevelMenuLayout==="vertical"},label:this.messages.submenu,layout:"vertical",role:"menu"},o("slot",{name:"submenu-item",onSlotchange:this.handleMenuItemSlotChange}))}renderHrefIcon(e){return o("calcite-icon",{class:n.hoverHrefIcon,icon:e==="rtl"?"arrow-left":"arrow-right",key:n.hoverHrefIcon,scale:"s"})}renderItemContent(e){const t=this.href&&(this.topLevelMenuLayout==="vertical"||!this.isTopLevelItem);return o(z,null,this.iconStart&&this.renderIconStart(),o("div",{class:n.textContainer},o("span",null,this.text)),t&&this.renderHrefIcon(e),this.iconEnd&&this.renderIconEnd(),this.breadcrumb?this.renderBreadcrumbIcon(e):null,!this.href&&this.hasSubmenu?this.renderDropdownIcon(e):null)}render(){const e=A(this.el);return o(p,{key:"e57c6579d3287593d663a8586cfd25c90246b1a4",onBlur:this.blurHandler,onFocus:this.focusHandler},o("li",{key:"954549390e447ec43ccf681949095d1393d9068a",class:{[n.container]:!0,[n.isParentVertical]:this.topLevelMenuLayout==="vertical"},role:"none"},o("div",{key:"6130156128f303bb225007e337fae78385614cf5",class:n.itemContent},o("a",{key:"9103ba8f3683feb1eb2301f05412b434c39ec3d3","aria-current":this.isFocused?"page":!1,"aria-expanded":m(this.open),"aria-haspopup":m(this.hasSubmenu),"aria-label":this.label,class:{[n.layoutVertical]:this.layout==="vertical",[n.content]:!0},href:this.href,onClick:this.clickHandler,onKeyDown:this.keyDownHandler,ref:t=>this.anchorEl=t,rel:this.rel,role:"menuitem",tabIndex:this.isTopLevelItem?0:-1,target:this.target},this.renderItemContent(e)),this.href&&this.hasSubmenu?this.renderDropdownAction(e):null),this.renderSubmenuItems(e)))}static get assetsDirs(){return["assets"]}get el(){return b(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};K.style=T;export{O as calcite_menu,K as calcite_menu_item};
//# sourceMappingURL=calcite-menu_2.entry-Cqp7_13u.js.map
