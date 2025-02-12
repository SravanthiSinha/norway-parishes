import{r as l,c as p,h as e,F as v,H as c,g as d}from"./index-BlakZCKi.js";import{a as o}from"./dom-b6dedd88-B7panKZl.js";import{c as h,s as m,a as f}from"./loadable-13e9ffb2-BTDSpYZb.js";import{H as y}from"./Heading-4aed0b02-DNxA9VG3.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const s={container:"container",containerContent:"container-content",hasProgress:"progress-bar",hide:"hide",primary:"primary",secondary:"secondary",tertiary:"tertiary"},a={logo:"logo",user:"user",progress:"progress",navigationAction:"navigation-action",contentStart:"content-start",contentEnd:"content-end",contentCenter:"content-center",navSecondary:"navigation-secondary",navTertiary:"navigation-tertiary"},S={hamburger:"hamburger"},C=":host([hidden]){display:none}[hidden]{display:none}.container{margin-inline:auto;display:flex;inline-size:100%;flex-direction:column;margin-block:0;margin-inline:auto;background-color:var(--calcite-navigation-background, var(--calcite-color-foreground-1))}.container.primary,.container.secondary,.container.tertiary{border-block-end:1px solid;border-block-end-color:var(--calcite-navigation-border-color, var(--calcite-color-border-3))}.user,.logo{display:flex}.hide{display:none}.primary{block-size:4rem}.secondary{block-size:3rem}.tertiary{block-size:3rem}.container-content{margin-inline:auto;display:flex;block-size:100%;inline-size:100%;margin-block:0;inline-size:var(--calcite-navigation-width, 100%);max-inline-size:100%}.container-content.progress-bar{margin-block-start:0.125rem}slot[name]{display:flex;flex-direction:row}slot[name=navigation-secondary]::slotted(calcite-navigation),slot[name=navigation-tertiary]::slotted(calcite-navigation){inline-size:100%}slot[name=content-start]::slotted(*),slot[name=content-center]::slotted(*),slot[name=content-end]::slotted(*){display:flex;flex-direction:row;align-items:center}slot[name=progress],slot[name=progress] calcite-progress{inset-block-start:0;inset-inline:0}slot[name=content-end]{margin-inline-start:auto}slot[name=content-start]{margin-inline-end:auto}slot[name=content-end],slot[name=logo]~slot[name=user],slot[name=user]:only-child{margin-inline-start:auto}slot[name=content-center]{margin-inline-start:auto;margin-inline-end:auto}slot[name=content-start]~slot[name=content-center]{margin-inline-start:0px}slot[name=content-start]~slot[name=content-end],slot[name=content-center]~slot[name=content-end],slot[name=content-center]~slot[name=user],slot[name=content-end]~slot[name=user]{margin:0px}",x=C,k=class{constructor(n){l(this,n),this.calciteNavigationActionSelect=p(this,"calciteNavigationActionSelect",6),this.actionClickHandler=()=>{this.calciteNavigationActionSelect.emit()},this.handleUserSlotChange=t=>{this.isPrimaryLevel()&&(this.userSlotHasElements=o(t))},this.handleLogoSlotChange=t=>{this.isPrimaryLevel()&&(this.logoSlotHasElements=o(t))},this.handleContentStartSlotChange=t=>{this.isPrimaryLevel()&&(this.primaryContentStartSlotHasElements=o(t))},this.handleContentEndSlotChange=t=>{this.isPrimaryLevel()&&(this.primaryContentEndSlotHasElements=o(t))},this.handleContentCenterSlotChange=t=>{this.isPrimaryLevel()&&(this.primaryContentCenterSlotHasElements=o(t))},this.handleSecondarySlotChange=t=>{this.secondarySlotHasElements=o(t)},this.handleTertiarySlotChange=t=>{this.tertiarySlotHasElements=o(t)},this.handleMenuActionSlotChange=t=>{this.isPrimaryLevel()&&(this.navigationActionSlotHasElements=o(t),this.navigationActionSlotHasElements&&(this.navigationAction=!1))},this.handleProgressSlotChange=t=>{this.isPrimaryLevel()&&(this.progressSlotHasElement=o(t))},this.label=void 0,this.navigationAction=!1,this.logoSlotHasElements=void 0,this.navigationActionSlotHasElements=void 0,this.primaryContentCenterSlotHasElements=void 0,this.primaryContentEndSlotHasElements=void 0,this.primaryContentStartSlotHasElements=void 0,this.progressSlotHasElement=void 0,this.secondarySlotHasElements=void 0,this.tertiarySlotHasElements=void 0,this.userSlotHasElements=void 0}async setFocus(){var n;return await h(this),(n=this.navigationActionEl)==null?void 0:n.setFocus()}componentWillLoad(){m(this)}componentDidLoad(){f(this)}isPrimaryLevel(){return this.el.slot!==a.navSecondary&&this.el.slot!==a.navTertiary}renderMenuAction(){return e("slot",{name:a.navigationAction,onSlotchange:this.handleMenuActionSlotChange},this.navigationAction&&e("calcite-action",{icon:S.hamburger,onClick:this.actionClickHandler,ref:n=>this.navigationActionEl=n,text:this.label}))}render(){const n=this.logoSlotHasElements||this.userSlotHasElements||this.navigationActionSlotHasElements||this.primaryContentCenterSlotHasElements||this.primaryContentEndSlotHasElements||this.primaryContentStartSlotHasElements||this.navigationAction,t=this.el.slot;return e(c,{key:"bf64aa6c6c41bfad6413b58f7897527bb62e1d96"},e("div",{key:"8c30501a94d5c41e60291c1f0d1cb2856afa5d62",class:{[s.container]:!0,[s.secondary]:t===a.navSecondary,[s.tertiary]:t===a.navTertiary,[s.primary]:n}},e("div",{key:"ef4c088fc24566ca24da9abe6a30903fedcad4d9",class:{[s.hide]:!this.progressSlotHasElement,[a.progress]:!0}},e("slot",{key:"0abc91e366b542e11ee76f13f099ee8b64a55ee0",name:a.progress,onSlotchange:this.handleProgressSlotChange})),e("div",{key:"689dc16c2ab71944a78f3bfc16c1c16c9159f073",class:{[s.containerContent]:!0,[s.hasProgress]:this.progressSlotHasElement}},this.renderMenuAction(),e("div",{key:"122f9d2d278a0a87dc1774f4933a4bb120410e48",class:{[s.hide]:!this.logoSlotHasElements,[a.logo]:!0}},e("slot",{key:"38f2a0106cb2b3a844b60406c629c0cff4c1b64e",name:a.logo,onSlotchange:this.handleLogoSlotChange})),e("slot",{key:"af8aa2c6ed65c95c51ebe31314cd1e684beef657",name:a.contentStart,onSlotchange:this.handleContentStartSlotChange}),e("slot",{key:"989ba0f344ce973ea32b07ee02b04d62068cefb8",name:a.contentCenter,onSlotchange:this.handleContentCenterSlotChange}),e("slot",{key:"e0fd2d40efb52e8735ca426c1374a3da4882a77d",name:a.contentEnd,onSlotchange:this.handleContentEndSlotChange}),e("div",{key:"56e905fef7a76fd14be7085f367d6abf8b44a80b",class:{[s.hide]:!this.userSlotHasElements,[a.user]:!0}},e("slot",{key:"e038f1510da60abbb05c1fd8541563334f86f6d5",name:a.user,onSlotchange:this.handleUserSlotChange})))),e(v,{key:"3a65439c3774cfb42fa6bc5f12c234a66f8bb314"},e("slot",{key:"52e0b810e42911da6dc1ea448026f5756df0206f",name:a.navSecondary,onSlotchange:this.handleSecondarySlotChange}),e("slot",{key:"97c2666bcd896fa763cb84d6b53285e2e26b51d1",name:a.navTertiary,onSlotchange:this.handleTertiarySlotChange})))}get el(){return d(this)}};k.style=x;const i={container:"container",heading:"heading",description:"description",anchor:"anchor",image:"image",standalone:"standalone",icon:"icon"},E=`:host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}.anchor{margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-size:var(--calcite-font-size-0);line-height:1.25rem;text-decoration-line:none;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:inherit;border-block-end:2px solid transparent}.anchor:hover,.anchor:focus{background-color:var(--calcite-color-foreground-2)}.anchor:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.anchor:active{background-color:var(--calcite-color-foreground-3)}.image,.icon{margin:0px;display:flex;block-size:1.75rem;padding-inline:1rem}.image~.icon{padding-inline-start:0px}.image~.container,.icon~.container{padding-inline-start:0px}:host(:active) .anchor{color:var(--calcite-color-text-1)}:host([active]) .anchor{color:var(--calcite-color-text-1);border-color:var(--calcite-color-brand);--calcite-icon-color:var(--calcite-color-brand)}.container{margin-block-start:0.125rem;display:flex;flex-direction:column;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:1rem;text-align:start}.heading{margin-inline-start:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.standalone{font-size:var(--calcite-font-size-1)}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host([hidden]){display:none}[hidden]{display:none}`,H=E,z=class{constructor(n){l(this,n),this.active=void 0,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.rel=void 0,this.description=void 0,this.target=void 0,this.heading=void 0,this.thumbnail=void 0,this.headingLevel=void 0}async setFocus(){await h(this),this.href&&this.el.focus()}componentWillLoad(){m(this)}componentDidLoad(){f(this)}renderIcon(){return e("calcite-icon",{class:i.icon,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"l"})}renderHeaderContent(){const{heading:n,headingLevel:t,description:g}=this,u=n?e(y,{class:{[i.heading]:!0,[i.standalone]:!this.description},key:i.heading,level:t},n):null,b=g?e("span",{class:i.description,key:i.description},g):null;return u||b?e("div",{class:i.container,key:i.container},u,b):null}render(){const{thumbnail:n}=this;return e(c,{key:"40dcb76c1c7919fd1a8b6929616d1d507c1e3301"},e("a",{key:"7b457d99add3c3d4edbd4478711f9b9c9fb12caf",class:i.anchor,href:this.href,rel:this.rel,target:this.target},n&&e("img",{key:"592aa3cfc2dfa47f9aa603f7edce4521dbaa27ae",alt:this.label||"",class:i.image,src:n}),this.icon&&this.renderIcon(),this.renderHeaderContent()))}static get delegatesFocus(){return!0}get el(){return d(this)}};z.style=H;const r={textContainer:"text-container",fullName:"full-name",username:"username",button:"button"},L=`:host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}:host .button{background-color:transparent;border:none;margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-family:var(--calcite-font-family);font-size:var(--calcite-font-size-0);line-height:1.25rem;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end:2px solid transparent}:host(:hover) .button,:host(:focus) .button{background-color:var(--calcite-color-foreground-2)}:host(:focus) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:active) .button{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([active]) .button{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1);--calcite-icon-color:var(--calcite-color-brand)}.text-container{margin-block-start:0.125rem;display:flex;flex-direction:column;padding-inline:1rem;text-align:start}calcite-avatar{padding-inline:1rem}calcite-avatar~.text-container{padding-inline-start:0px}.full-name{margin-inline-start:0px;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.username{color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host([hidden]){display:none}[hidden]{display:none}`,w=L,N=class{constructor(n){l(this,n),this.active=void 0,this.fullName=void 0,this.label=void 0,this.textDisabled=!1,this.thumbnail=void 0,this.userId=void 0,this.username=void 0}async setFocus(){await h(this),this.el.focus()}componentWillLoad(){m(this)}componentDidLoad(){f(this)}render(){return e(c,{key:"d848f4b0ee430fdbf74ce63be874afc055b1a48a"},e("button",{key:"d8187d1795407a9d12e4f2c6c3d75dba47cdf028","aria-label":this.label,class:r.button},e("calcite-avatar",{key:"3a8526feb870ed33d7eae888c71f9489d90df26f","full-name":this.fullName,label:this.label,thumbnail:this.thumbnail,"user-id":this.userId,username:this.username}),(this.fullName||this.username)&&!this.textDisabled&&e("div",{key:"111bc54b8e187a95849ed325aca22880c00d1191",class:r.textContainer},this.fullName&&e("span",{class:r.fullName,key:r.fullName},this.fullName),this.username&&e("span",{class:r.username,key:r.username},this.username))))}static get delegatesFocus(){return!0}get el(){return d(this)}};N.style=w;export{k as calcite_navigation,z as calcite_navigation_logo,N as calcite_navigation_user};
//# sourceMappingURL=calcite-navigation_3.entry-FpRO09Jf.js.map
