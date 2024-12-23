import{r as y,c as g,h as n,g as w}from"./index-Cj37dcSI.js";import{u as k,I as S}from"./interactive-1a42577a-CuiQZhZs.js";import{a as E,t as v}from"./dom-b6dedd88-Ct1pnVCc.js";import{c as T,a as I,s as A}from"./loadable-13e9ffb2-BVmhcbxh.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const t={container:"container",contentContainer:"content-container",contentContainerHasContent:"content-container--has-content",contentContainerHasOnlyContentTopAndBottom:"content-container--has-only-content-top-and-bottom",textContentContainer:"text-content-container",description:"description",heading:"heading",icon:"icon",interactive:"interactive",largeVisualDeprecated:"large-visual-deprecated",row:"row",selected:"selected",selectionIcon:"selection-icon",textContent:"text-content"},s={selectedMultiple:"check-square-f",selectedSingle:"circle-f",unselectedMultiple:"square",unselectedSingle:"circle"},r={contentBottom:"content-bottom",contentEnd:"content-end",contentStart:"content-start",contentTop:"content-top"},B=':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-tile-background-color:var(--calcite-color-foreground-1);--calcite-tile-border-color:var(--calcite-color-border-2);--calcite-tile-description-text-color:var(--calcite-color-text-3);--calcite-tile-heading-text-color:var(--calcite-color-text-2);--calcite-icon-color:var(--calcite-color-text-3);box-sizing:border-box;display:inline-block}.container{background-color:var(--calcite-tile-background-color);block-size:var(--calcite-container-size-content-fluid);box-sizing:border-box;inline-size:var(--calcite-container-size-content-fluid);outline:var(--calcite-border-width-sm, 1px) solid var(--calcite-tile-border-color);-webkit-user-select:none;user-select:none}.container.interactive{cursor:pointer}.container.interactive:hover,.container.interactive:focus,.container.interactive.selected{outline-color:var(--calcite-color-brand);position:relative}.container.interactive:hover .selection-icon,.container.interactive:focus .selection-icon,.container.interactive.selected .selection-icon{--calcite-icon-color:var(--calcite-color-brand)}.container.interactive.selected{z-index:var(--calcite-z-index)}.container.interactive:focus{box-shadow:inset 0 0 0 1px var(--calcite-color-brand);z-index:var(--calcite-z-index-sticky)}.content-container,.row{align-items:flex-start;display:flex}.content-container{flex-direction:column}.text-content-container{inline-size:100%;outline-color:transparent;padding:0}.text-content{display:flex;flex-direction:column}.heading{color:var(--calcite-tile-heading-text-color);font-weight:var(--calcite-font-weight-medium);line-height:1.20313rem;overflow-wrap:break-word}.large-visual-deprecated{align-items:center;justify-content:center;min-block-size:12rem;text-align:center}.large-visual-deprecated calcite-icon{align-self:center;block-size:64px;inline-size:64px}.large-visual-deprecated .text-content-container{justify-content:center}.description{color:var(--calcite-tile-description-text-color);font-weight:var(--calcite-font-weight-regular);overflow-wrap:break-word}:host([alignment=center]) .icon{align-self:center}:host([alignment=center]) .text-content-container{justify-content:center}:host([alignment=center]) .text-content{text-align:center}:host([alignment=center]) slot[name=content-start]::slotted(*),:host([alignment=center]) slot[name=content-end]::slotted(*),:host([alignment=center]) slot[name=content-top]::slotted(*),:host([alignment=center]) slot[name=content-bottom]::slotted(*){align-self:center}:host([scale=s]){max-inline-size:400px;min-inline-size:100px}:host([scale=s]) .container{padding:var(--calcite-spacing-sm)}:host([scale=s]) .content-container--has-content,:host([scale=s]) .row{gap:var(--calcite-spacing-sm)}:host([scale=s]) .heading{font-size:var(--calcite-font-size--2);line-height:1.03125rem}:host([scale=s]) .description{font-size:var(--calcite-font-size--3);line-height:0.85938rem}:host([scale=s]) .content-container--has-only-content-top-and-bottom slot[name=content-top]::slotted(*){margin-block-end:var(--calcite-spacing-sm)}:host([scale=m]){max-inline-size:460px;min-inline-size:140px}:host([scale=m]) .container{padding:var(--calcite-spacing-md)}:host([scale=m]) .content-container--has-content,:host([scale=m]) .row{gap:var(--calcite-spacing-md)}:host([scale=m]) .heading{font-size:var(--calcite-font-size--1);line-height:1.20313rem}:host([scale=m]) .description{font-size:var(--calcite-font-size--2);line-height:1.03125rem}:host([scale=m]) .content-container--has-only-content-top-and-bottom slot[name=content-top]::slotted(*){margin-block-end:var(--calcite-spacing-md)}:host([scale=l]){max-inline-size:520px;min-inline-size:160px}:host([scale=l]) .container{padding:var(--calcite-spacing-xl)}:host([scale=l]) .content-container--has-content,:host([scale=l]) .row{gap:var(--calcite-spacing-xl)}:host([scale=l]) .heading{font-size:var(--calcite-font-size-0);line-height:1.375rem}:host([scale=l]) .description{font-size:var(--calcite-font-size--1);line-height:1.20313rem}:host([scale=l]) .content-container--has-only-content-top-and-bottom slot[name=content-top]::slotted(*){margin-block-end:var(--calcite-spacing-xl)}:host([selection-appearance=border][layout=horizontal]) .container.selected:focus::before,:host([selection-appearance=border][layout=vertical]) .container.selected:focus::before{block-size:100%;box-shadow:inset 0 0 0 1px var(--calcite-color-brand);content:"";display:block;inline-size:100%;inset-block-start:0;inset-inline-start:0;position:absolute}:host([selection-appearance=border][layout=horizontal]) .container.selected{box-shadow:inset 0 -4px 0 0 var(--calcite-color-brand)}:host([selection-appearance=border][layout=vertical]) .container.selected{box-shadow:inset 4px 0 0 0 var(--calcite-color-brand)}:host([href]:focus:not([disabled])),:host([href]:hover:not([disabled])){--calcite-tile-border-color:var(--calcite-color-text-link);--calcite-tile-heading-text-color:var(--calcite-color-text-link);--calcite-icon-color:var(--calcite-color-text-link)}:host([href]:focus:not([disabled])) .container,:host([href]:hover:not([disabled])) .container{position:relative;z-index:var(--calcite-z-index)}:host([href]:active:not([disabled])) .container{box-shadow:0 0 0 3px var(--calcite-tile-border-color)}:host([embed]) .container{box-shadow:none;padding:0}:host([selection-mode=none]) .container{outline-color:var(--calcite-tile-border-color)}:host([selection-mode=none]) .container:focus{outline-color:var(--calcite-color-brand);position:relative}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host(:hover:not([disabled])),:host([active]:not([disabled])){--calcite-tile-description-text-color:var(--calcite-color-text-2);--calcite-tile-heading-text-color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}::slotted(*){max-inline-size:100%}',H=B,D=class{constructor(e){y(this,e),this.calciteInternalTileKeyEvent=g(this,"calciteInternalTileKeyEvent",6),this.calciteTileSelect=g(this,"calciteTileSelect",7),this.clickHandler=()=>{this.interactive&&(this.setFocus(),this.handleSelectEvent())},this.handleSelectEvent=()=>{this.disabled||!this.interactive||this.selectionMode==="single-persist"&&this.selected===!0||this.calciteTileSelect.emit()},this.handleSlotChange=o=>{const i=o.target.dataset.name;this[`has${i}`]=E(o)},this.setContainerEl=o=>{this.containerEl=o},this.active=!1,this.alignment="start",this.description=void 0,this.disabled=!1,this.embed=!1,this.heading=void 0,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.interactive=!1,this.label=void 0,this.layout="horizontal",this.scale="m",this.selected=!1,this.selectionAppearance="icon",this.selectionMode="none",this.hasContentBottom=!1,this.hasContentEnd=!1,this.hasContentStart=!1,this.hasContentTop=!1}async setFocus(){var e;await T(this),!this.disabled&&this.interactive&&((e=this.containerEl)==null||e.focus())}componentDidLoad(){I(this)}componentDidRender(){k(this)}async componentWillLoad(){A(this)}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleSelectEvent(),e.preventDefault();break;case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"Home":case"End":this.calciteInternalTileKeyEvent.emit(e),e.preventDefault();break}}renderSelectionIcon(){const{selected:e,selectionAppearance:o,selectionMode:i}=this;if(o==="icon"&&i!=="none")return n("calcite-icon",{class:t.selectionIcon,icon:e?i==="multiple"?s.selectedMultiple:s.selectedSingle:i==="multiple"?s.unselectedMultiple:s.unselectedSingle,scale:"s"})}renderTile(){const{description:e,disabled:o,hasContentBottom:i,hasContentEnd:b,hasContentStart:f,hasContentTop:u,heading:a,icon:l,iconFlipRtl:x,interactive:c,selectionMode:d}=this,C=a&&l&&!e,h=!!this.href||!c,p=d==="multiple"&&c?"checkbox":d!=="none"&&c?"radio":c?"button":void 0,m=!!(e||b||f||a||l),z=!m&&u&&i;return n("div",{"aria-checked":d!=="none"&&c?v(this.selected):void 0,"aria-disabled":h?v(o):void 0,"aria-label":p&&this.label,class:{[t.container]:!0,[t.interactive]:c,[t.largeVisualDeprecated]:C,[t.row]:!0,[t.selected]:this.selected},onClick:this.clickHandler,ref:this.setContainerEl,role:p,tabIndex:h?void 0:0},this.renderSelectionIcon(),n("div",{class:{[t.contentContainer]:!0,[t.contentContainerHasContent]:m,[t.contentContainerHasOnlyContentTopAndBottom]:z}},n("slot",{"data-name":"ContentTop",name:r.contentTop,onSlotchange:this.handleSlotChange}),l&&n("calcite-icon",{class:t.icon,flipRtl:x,icon:l,scale:"l"}),n("div",{class:{[t.textContentContainer]:!0,[t.row]:!0}},n("slot",{"data-name":"ContentStart",name:r.contentStart,onSlotchange:this.handleSlotChange}),n("div",{class:t.textContent},a&&n("div",{class:t.heading},a),e&&n("div",{class:t.description},e)),n("slot",{"data-name":"ContentEnd",name:r.contentEnd,onSlotchange:this.handleSlotChange})),n("slot",{"data-name":"ContentBottom",name:r.contentBottom,onSlotchange:this.handleSlotChange})))}render(){const{disabled:e}=this;return n(S,{key:"1d62f354d4a18837e56dd446efc63dde66f977bf",disabled:e},this.href?n("calcite-link",{disabled:e,href:this.href},this.renderTile()):this.renderTile())}get el(){return w(this)}};D.style=H;export{D as calcite_tile};
//# sourceMappingURL=calcite-tile.entry-C2jmo89N.js.map
