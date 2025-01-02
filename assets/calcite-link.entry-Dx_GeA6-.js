import{r as d,h as n,C as h,H as p,g as u}from"./index-Vdm0PCas.js";import{g as b,b as f}from"./dom-b6dedd88-Dfv97P2g.js";import{u as k,I as m}from"./interactive-1a42577a-B230YtAx.js";import{s as g,a as y,c as v}from"./loadable-13e9ffb2-Dn03AihA.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const x=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-block-start:-0.25em}:host .calcite-link--icon.icon-start{margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-color-text-link);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-color-brand-underline), var(--calcite-color-brand-underline));background-position-x:0%, 100%;background-position-y:min(1.5em, 100%);background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,E=x,z=class{constructor(t){d(this,t),this.childElClickHandler=e=>{e.isTrusted||e.stopPropagation()},this.storeTagRef=e=>{this.childEl=e},this.disabled=!1,this.download=!1,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.rel=void 0,this.target=void 0}componentWillLoad(){g(this)}componentDidLoad(){y(this)}componentDidRender(){k(this)}render(){const{download:t,el:e}=this,o=b(e),i=this.href?"a":"span",s=n("calcite-icon",{key:"c9844033e9bd5da35333b485aad27ddb2df6b039",class:"calcite-link--icon icon-start",flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:"s"}),a=n("calcite-icon",{key:"f1de10682fee566552253cf2ae3cb6725f5e5f11",class:"calcite-link--icon icon-end",flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:"s"}),c=i,l=i==="span"?"link":null,r=i==="span"?0:null;return n(p,{key:"5ad440468fcccb6fe7c146ec57462e7593f96109",role:"presentation"},n(m,{key:"916c68cd97c31fa1ec69f408d25d3023749698e1",disabled:this.disabled},n(c,{key:"e00cebc0c56b95c02192872ac84df996a74a5fa4",class:{[h.rtl]:o==="rtl"},download:i==="a"?t===!0||t===""?"":t||null:null,href:i==="a"&&this.href,onClick:this.childElClickHandler,ref:this.storeTagRef,rel:i==="a"&&this.rel,role:l,tabIndex:r,target:i==="a"&&this.target},this.iconStart?s:null,n("slot",{key:"57b25ff3b8f7f3d048796a559c2911178d6b8ddf"}),this.iconEnd?a:null)))}clickHandler(t){this.disabled||t.isTrusted||this.childEl.click()}async setFocus(){await v(this),f(this.childEl)}get el(){return u(this)}};z.style=E;export{z as calcite_link};
//# sourceMappingURL=calcite-link.entry-Dx_GeA6-.js.map
