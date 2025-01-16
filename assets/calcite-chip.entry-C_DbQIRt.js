import{r,c as a,i as h,h as i,H as d,g as p}from"./index-BfLS464G.js";import{a as m,t as u}from"./dom-b6dedd88-O1nYpK45.js";import{a as g,s as b,c as v}from"./loadable-13e9ffb2-CM3Lz6Am.js";import{u as f,c as x,d as k,s as y}from"./t9n-75defee3-jzBwsnOI.js";import{u as C,I as z}from"./interactive-1a42577a-OxwVDwEx.js";import{c as I,d as S}from"./locale-60f8ca58-B2mSqvc8.js";import{i as M}from"./key-3ee05994-D63ExP77.js";import{g as l}from"./component-5f0a8be8-6CIDVndn.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./observers-9c166451-pUI1lsXs.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const t={title:"title",close:"close",imageContainer:"image-container",chipIcon:"chip-icon",textSlotted:"text--slotted",container:"container",imageSlotted:"image--slotted",closable:"closable",multiple:"multiple",single:"single",selectable:"selectable",selectIcon:"select-icon",selectIconActive:"select-icon--active",nonInteractive:"non-interactive",isCircle:"is-circle",selected:"selected"},w={image:"image"},n={close:"x",checkedSingle:"circle-f",uncheckedMultiple:"square",checkedMultiple:"check-square-f"},E=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;cursor:default;border-radius:var(--calcite-chip-corner-radius, 9999px)}:host([closed]){display:none}:host([appearance=outline]) .container,:host([appearance=outline-fill]) .container{--calcite-internal-chip-close-icon-color:var(--calcite-color-text-3);color:var(--calcite-chip-text-color, var(--calcite-color-text-1))}:host([appearance=outline]):host([kind=brand]) .container,:host([appearance=outline-fill]):host([kind=brand]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-brand))}:host([appearance=outline]):host([kind=inverse]) .container,:host([appearance=outline-fill]):host([kind=inverse]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-border-inverse))}:host([appearance=outline]):host([kind=neutral]) .container,:host([appearance=outline-fill]):host([kind=neutral]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-border-1))}:host([appearance=outline]) .container{background-color:transparent}:host([appearance=outline-fill]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-foreground-1))}:host([appearance=solid]) .container{border-color:transparent}:host([appearance=solid]):host([kind=brand]) .container,:host([appearance=solid]):host([kind=inverse]) .container{color:var(--calcite-chip-text-color, var(--calcite-color-text-inverse))}:host([appearance=solid]):host([kind=brand]) .close,:host([appearance=solid]):host([kind=inverse]) .close{outline-color:var(--calcite-color-text-inverse)}:host([appearance=solid]):host([kind=brand]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-brand))}:host([appearance=solid]):host([kind=inverse]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-inverse))}:host([appearance=solid]):host([kind=neutral]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-foreground-2))}:host([kind=neutral]) .container{--calcite-internal-chip-close-icon-color:var(--calcite-color-text-3);color:var(--calcite-chip-text-color, var(--calcite-color-text-1))}:host([selected]) .select-icon{opacity:1}:host([scale=s]) .container{--calcite-internal-chip-block-size:1.5rem ;--calcite-internal-chip-container-space-x-end:0.25rem ;--calcite-internal-chip-container-space-x-start:0.25rem ;--calcite-internal-chip-font-size:var(--calcite-font-size--2);--calcite-internal-chip-icon-size:1rem ;--calcite-internal-chip-icon-space:0.25rem ;--calcite-internal-chip-image-size:1.25rem ;--calcite-internal-chip-title-space:0.25rem ;--calcite-internal-close-size:1rem }:host([scale=s]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px);--calcite-internal-chip-container-space-x-end:var(--calcite-spacing-px)}:host([scale=s]) .container.image--slotted:has(.chip-icon),:host([scale=s]) .container.image--slotted.text--slotted,:host([scale=s]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.25rem }:host([scale=s]) .container.image--slotted:not(.text--slotted,:has(.chip-icon)),:host([scale=s]) .container.image--slotted:not(.selectable){--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:0.375rem ;--calcite-internal-chip-select-space-x-start:0}:host([scale=s]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.125rem }:host([scale=s]) .container.multiple:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.25rem ;--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=s]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.375rem ;--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.multiple:not(.is-circle).image--slotted:not(.text--slotted){--calcite-internal-chip-select-space-x-start:0.375rem }:host([scale=m]) .container{--calcite-internal-chip-block-size:2rem ;--calcite-internal-chip-container-space-x-end:0.375rem ;--calcite-internal-chip-container-space-x-start:0.375rem ;--calcite-internal-chip-font-size:var(--calcite-font-size--1);--calcite-internal-chip-icon-size:1.5rem ;--calcite-internal-chip-icon-space:0.375rem ;--calcite-internal-chip-image-size:1.5rem ;--calcite-internal-chip-title-space:0.375rem ;--calcite-internal-close-size:1.5rem }:host([scale=m]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-end:var(--calcite-spacing-px);--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=m]) .container.image--slotted:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=m]) .container.image--slotted:has(.chip-icon),:host([scale=m]) .container.image--slotted.text--slotted,:host([scale=m]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.375rem }:host([scale=m]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=m]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:var(--calcite-spacing-px);--calcite-internal-chip-select-space-x-start:0}:host([scale=m]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.375rem }:host([scale=m]) .container.multiple:not(.is-circle){--calcite-internal-chip-select-space-x-end:0.125rem ;--calcite-internal-chip-select-space-x-start:0.125rem }:host([scale=m]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=m]) .container.closable:not(.is-circle){--calcite-internal-chip-container-space-x-end:0.25rem }:host([scale=l]) .container{--calcite-internal-chip-block-size:2.75rem ;--calcite-internal-chip-container-space-x-end:0.5rem ;--calcite-internal-chip-container-space-x-start:0.5rem ;--calcite-internal-chip-font-size:var(--calcite-font-size-0);--calcite-internal-chip-icon-size:2rem ;--calcite-internal-chip-icon-space:0.5rem ;--calcite-internal-chip-image-size:2rem ;--calcite-internal-chip-title-space:0.5rem ;--calcite-internal-close-size:2rem }:host([scale=l]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-end:0.25rem ;--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=l]) .container.image--slotted:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.375rem }:host([scale=l]) .container.image--slotted:has(.chip-icon),:host([scale=l]) .container.image--slotted.text--slotted,:host([scale=l]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.5rem }:host([scale=l]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:0.375rem }:host([scale=l]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0}:host([scale=l]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.375rem ;--calcite-internal-chip-select-space-x-start:0.5rem }:host([scale=l]) .container.multiple:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.5rem ;--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=l]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.75rem }:host([scale=l]) .container.closable:not(.is-circle){--calcite-internal-chip-container-space-x-end:0.375rem }.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;border-radius:var(--calcite-chip-corner-radius, 9999px);border-width:var(--calcite-border-width-sm);border-style:solid;font-size:var(--calcite-internal-chip-font-size, var(--calcite-font-size));padding-inline-start:var(--calcite-internal-chip-container-space-x-start);padding-inline-end:var(--calcite-internal-chip-container-space-x-end);block-size:var(--calcite-internal-chip-block-size, auto);inline-size:var(--calcite-internal-chip-inline-size, auto);min-inline-size:var(--calcite-internal-chip-block-size, auto)}.container:hover .select-icon--active{opacity:1}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container:not(.text--slotted) .title,.container:not(.image--slotted) .image-container{display:none}.container.is-circle .chip-icon,.container.is-circle .image-container{padding:0}.title{padding-inline:var(--calcite-internal-chip-title-space)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none;block-size:var(--calcite-internal-chip-image-size, 1.5rem);inline-size:var(--calcite-internal-chip-image-size, 1.5rem);padding-inline-start:0;padding-inline-end:var(--calcite-internal-chip-image-space-x-end, 0)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-chip-icon-color, var(--calcite-chip-text-color, var(--calcite-icon-color, currentColor)));padding-inline:var(--calcite-internal-chip-icon-space, 0.375rem)}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:absolute;visibility:hidden;inline-size:auto;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out;color:var(--calcite-chip-select-icon-color, currentColor)}.select-icon.select-icon--active{position:relative;visibility:visible;opacity:0.5;color:var(--calcite-chip-select-icon-color-pressed, var(--calcite-chip-select-icon-color, currentColor))}.multiple .select-icon{display:flex;align-items:center;justify-content:center}.multiple .select-icon,.single .select-icon--active{padding-inline-start:var(--calcite-internal-chip-select-space-x-start);padding-inline-end:var(--calcite-internal-chip-select-space-x-end);block-size:var(--calcite-internal-chip-icon-size, 1.5rem);inline-size:var(--calcite-internal-chip-icon-size, 1.5rem)}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.close{margin:0px;cursor:pointer;align-items:center;border-radius:50%;border-style:none;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-close-background-color, var(--calcite-color-transparent));-webkit-appearance:none;display:flex;align-content:center;justify-content:center;color:var(--calcite-chip-close-icon-color, var(--calcite-close-icon-color, var(--calcite-internal-chip-close-icon-color, var(--calcite-color-text-1))));block-size:var(--calcite-internal-close-size, 1.5rem);inline-size:var(--calcite-internal-close-size, 1.5rem);padding:0}.close:hover,.close:focus{background-color:var(--calcite-close-background-color-hover, var(--calcite-color-transparent-hover))}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.close:active{background-color:var(--calcite-close-background-color-press, var(--calcite-color-transparent-press))}.close calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,L=E,D=class{constructor(e){r(this,e),this.calciteChipClose=a(this,"calciteChipClose",6),this.calciteChipSelect=a(this,"calciteChipSelect",6),this.calciteInternalChipKeyEvent=a(this,"calciteInternalChipKeyEvent",6),this.calciteInternalChipSelect=a(this,"calciteInternalChipSelect",6),this.calciteInternalSyncSelectedChips=a(this,"calciteInternalSyncSelectedChips",6),this.handleDefaultSlotChange=()=>{this.updateHasText()},this.close=()=>{this.calciteChipClose.emit(),this.selected=!1,this.closed=!0},this.closeButtonKeyDownHandler=c=>{M(c.key)&&(c.preventDefault(),this.close())},this.handleSlotImageChange=c=>{this.hasImage=m(c)},this.handleEmittingEvent=()=>{this.interactive&&this.calciteChipSelect.emit()},this.disabled=!1,this.appearance="solid",this.kind="neutral",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.label=void 0,this.value=void 0,this.closed=!1,this.selectionMode="none",this.selected=!1,this.messageOverrides=void 0,this.messages=void 0,this.interactive=!1,this.parentChipGroup=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasText=!1,this.hasImage=!1}watchSelected(e){this.selectionMode!=="none"&&this.handleSelectionPropertyChange(e)}onMessagesChange(){}effectiveLocaleChange(){f(this,this.effectiveLocale)}connectedCallback(){I(this),x(this)}componentDidLoad(){g(this),this.selectionMode!=="none"&&this.interactive&&this.selected&&this.handleSelectionPropertyChange(this.selected)}componentDidRender(){C(this)}disconnectedCallback(){S(this),k(this)}async componentWillLoad(){b(this),h()&&(await y(this),this.updateHasText())}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleEmittingEvent(),e.preventDefault();break;case"ArrowRight":case"ArrowLeft":case"Home":case"End":this.calciteInternalChipKeyEvent.emit(e),e.preventDefault();break}}clickHandler(){!this.interactive&&this.closable&&this.closeButtonEl.focus()}async setFocus(){var e,c;await v(this),!this.disabled&&this.interactive?(e=this.containerEl)==null||e.focus():!this.disabled&&this.closable&&((c=this.closeButtonEl)==null||c.focus())}updateHasText(){this.hasText=this.el.textContent.trim().length>0}handleSelectionPropertyChange(e){this.selectionMode==="single"&&this.calciteInternalSyncSelectedChips.emit(),!this.parentChipGroup.selectedItems.includes(this.el)&&e&&this.selectionMode!=="multiple"&&this.calciteInternalChipSelect.emit(),this.selectionMode!=="single"&&this.calciteInternalSyncSelectedChips.emit()}renderChipImage(){return i("div",{class:t.imageContainer},i("slot",{name:w.image,onSlotchange:this.handleSlotImageChange}))}renderSelectionIcon(){const e=this.selectionMode==="multiple"?this.selected?n.checkedMultiple:n.uncheckedMultiple:this.selected?n.checkedSingle:void 0;return i("div",{class:{[t.selectIcon]:!0,[t.selectIconActive]:this.selectionMode==="multiple"||this.selected}},e?i("calcite-icon",{icon:e,scale:l(this.scale)}):null)}renderCloseButton(){return i("button",{"aria-label":this.messages.dismissLabel,class:t.close,onClick:this.close,onKeyDown:this.closeButtonKeyDownHandler,ref:e=>this.closeButtonEl=e,tabIndex:this.disabled?-1:0},i("calcite-icon",{icon:n.close,scale:l(this.scale)}))}renderIcon(){return i("calcite-icon",{class:t.chipIcon,flipRtl:this.iconFlipRtl,icon:this.icon,scale:l(this.scale)})}render(){const{disabled:e}=this,c=e||!e&&!this.interactive,s=this.selectionMode==="multiple"&&this.interactive?"checkbox":this.selectionMode!=="none"&&this.interactive?"radio":this.interactive?"button":void 0;return i(d,{key:"7feca8bad37627baabfc4abd25cf135e1e9f196b"},i(z,{key:"af2360b4b768ae8c643d52f4bdb9f5d282504114",disabled:e},i("div",{key:"8d905c4ab20d271a211282b95ebcb2d305d76cb7","aria-checked":this.selectionMode!=="none"&&this.interactive?u(this.selected):void 0,"aria-label":this.label,class:{[t.container]:!0,[t.textSlotted]:this.hasText,[t.imageSlotted]:this.hasImage,[t.selectable]:this.selectionMode!=="none",[t.multiple]:this.selectionMode==="multiple",[t.single]:this.selectionMode==="single"||this.selectionMode==="single-persist",[t.selected]:this.selected,[t.closable]:this.closable,[t.nonInteractive]:!this.interactive,[t.isCircle]:!this.closable&&!this.hasText&&(!this.icon||!this.hasImage)&&(this.selectionMode==="none"||!!this.selectionMode&&this.selectionMode!=="multiple"&&!this.selected)},onClick:this.handleEmittingEvent,ref:o=>this.containerEl=o,role:s,tabIndex:c?-1:0},this.selectionMode!=="none"&&this.renderSelectionIcon(),this.renderChipImage(),this.icon&&this.renderIcon(),i("span",{key:"dab6eae3f8330b85ffac4c7fe1b2fcbb53327196",class:t.title},i("slot",{key:"72ba5bd0c7a97c30f766da119f419261aab24acb",onSlotchange:this.handleDefaultSlotChange})),this.closable&&this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return p(this)}static get watchers(){return{selected:["watchSelected"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};D.style=L;export{D as calcite_chip};
//# sourceMappingURL=calcite-chip.entry-C_DbQIRt.js.map
