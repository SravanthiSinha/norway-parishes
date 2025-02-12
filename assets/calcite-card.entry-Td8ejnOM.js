import{r as h,c as s,h as t,H as p,g as b}from"./index-BvuY3ppR.js";import{a as c,t as l}from"./dom-b6dedd88-SWkUsYhR.js";import{c as f,d as g}from"./locale-60f8ca58-CgRqPoDz.js";import{c as u,d as m,s as v,u as x}from"./t9n-75defee3-o7BPJQew.js";import{c as k,a as w,s as S}from"./loadable-13e9ffb2-vyCmMp9r.js";import{u as C,I as y}from"./interactive-1a42577a-CyFxETUd.js";import{i as D}from"./key-3ee05994-D63ExP77.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./observers-9c166451-Dv68UhiS.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o={container:"container",contentWrapper:"content-wrapper",header:"header",footer:"footer",checkboxWrapper:"checkbox-wrapper",checkboxWrapperDeprecated:"checkbox-wrapper-deprecated",thumbnailWrapper:"thumbnail-wrapper",headerTextContainer:"header-text-container",cardContent:"card-content",hasSlottedContent:"has-slotted-content"},n={thumbnail:"thumbnail",heading:"heading",description:"description",footerStart:"footer-start",footerEnd:"footer-end",title:"title",subtitle:"subtitle"},r={selected:"check-square-f",unselected:"square",selectedSingle:"circle-f",unselectedSingle:"circle"},z=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;max-inline-size:100%}.content-wrapper{position:relative;display:flex;block-size:100%;flex-direction:column;justify-content:space-between;overflow:hidden;border:var(--calcite-border-width-sm) solid var(--calcite-card-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-card-corner-radius, var(--calcite-corner-radius-sharp));background-color:var(--calcite-card-background-color, var(--calcite-color-foreground-1));box-shadow:var(--calcite-card-shadow, var(--calcite-shadow-none));pointer-events:none}::slotted(*){pointer-events:auto}:host(:not([selectable])) .content-wrapper:not(.non-interactive){outline-color:transparent}:host(:not([selectable])) .content-wrapper:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.container{position:relative;display:flex;flex:1 1 auto;flex-direction:column}:host([loading]) .content-wrapper *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;inset:0px;display:flex;align-items:center}.header{display:flex;flex-direction:row;align-items:flex-start}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:var(--calcite-spacing-md);padding-block-start:var(--calcite-spacing-xxs);padding-block-end:var(--calcite-spacing-md)}.header-text-container{display:flex;inline-size:100%;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem}.header-text-container:not(:only-child){padding-inline-end:0.125rem}.footer{margin-block-start:auto;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:0.75rem;padding-block:0.25rem 0.75rem}.card-content{block-size:auto;font-size:var(--calcite-font-size--2);line-height:1.375}.has-slotted-content{padding:0.75rem}:host([selected]) .content-wrapper{box-shadow:inset 0 -4px 0 0 var(--calcite-card-accent-color-selected, var(--calcite-color-brand))}:host([selectable]) .header{padding-inline-end:var(--calcite-spacing-xxxl)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;margin-block-start:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}slot[name=heading]::slotted(*),*::slotted([slot=heading]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}slot[name=description]::slotted(*),*::slotted([slot=description]){margin:0px;margin-block-start:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-inline-size:100%;max-inline-size:100%}slot[name=footer-start]::slotted(*),*::slotted([slot=footer-start]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;margin-inline-end:auto}slot[name=footer-end]::slotted(*),*::slotted([slot=footer-end]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.checkbox-wrapper-deprecated{pointer-events:auto;position:absolute;inset-block-start:var(--calcite-spacing-sm);inset-inline-end:var(--calcite-spacing-sm);margin:0;padding:0;color:var(--calcite-card-selection-color, var(--calcite-color-text-3))}.checkbox-wrapper-deprecated:hover{background-color:var(--calcite-card-selection-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-card-selection-color-hover, var(--calcite-card-selection-icon-color-hover, var(--calcite-color-text-2)))}.checkbox-wrapper-deprecated:active{background-color:var(--calcite-card-selection-background-color-press, var(--calcite-color-transparent-press))}.checkbox-wrapper{pointer-events:auto;margin:0.5rem;cursor:pointer;padding:0.5rem;outline-color:transparent;display:flex;align-items:center;justify-items:center;color:var(--calcite-card-selection-color, var(--calcite-color-text-3))}.checkbox-wrapper:hover{background-color:var(--calcite-card-selection-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-card-selection-color-hover, var(--calcite-card-selection-icon-color-hover, var(--calcite-color-text-2)))}.checkbox-wrapper:active{background-color:var(--calcite-card-selection-background-color-press, var(--calcite-color-transparent-press))}.checkbox-wrapper calcite-icon{pointer-events:none}:host([selected]) .checkbox-wrapper-deprecated,:host([selected]) .checkbox-wrapper{color:var(--calcite-card-accent-color-selected, var(--calcite-card-selection-icon-color-selected, var(--calcite-color-brand)))}:host(:not([selectable])) .content-wrapper:not(.non-interactive):focus .checkbox-wrapper-deprecated,:host(:not([selectable])) .content-wrapper:not(.non-interactive):focus .checkbox-wrapper{background-color:var(--calcite-card-selection-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-card-selection-color-hover, var(--calcite-card-selection-icon-color-hover, var(--calcite-color-text-2)))}:host([selected]:not([selectable])) .content-wrapper:not(.non-interactive):focus .checkbox-wrapper-deprecated,:host([selected]:not([selectable])) .content-wrapper:not(.non-interactive):focus .checkbox-wrapper{background-color:var(--calcite-card-selection-background-color-press, var(--calcite-color-transparent-press));color:var(--calcite-card-accent-color-selected, var(--calcite-card-selection-icon-color-selected, var(--calcite-color-brand)))}.thumbnail-wrapper{display:flex}.content-wrapper.inline{flex-direction:row}.content-wrapper.inline>.container{inline-size:60%}.content-wrapper.inline>.thumbnail-wrapper{inline-size:40%;align-items:flex-start}.content-wrapper.inline slot[name=thumbnail]::slotted(img),.content-wrapper.inline img::slotted([slot=thumbnail]){inline-size:100%}slot[name=footer-start]::slotted(*),slot[name=footer-end]::slotted(*){display:flex;gap:0.25rem}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,E=z,H=class{constructor(a){h(this,a),this.calciteCardSelect=s(this,"calciteCardSelect",6),this.calciteInternalCardKeyEvent=s(this,"calciteInternalCardKeyEvent",6),this.handleThumbnailSlotChange=e=>{this.hasThumbnail=c(e)},this.handleHeadingSlotChange=e=>{this.hasHeading=c(e)},this.handleDescriptionSlotChange=e=>{this.hasDescription=c(e)},this.handleTitleSlotChange=e=>{this.hasTitle=c(e)},this.handleSubtitleSlotChange=e=>{this.hasSubtitle=c(e)},this.handleFooterStartSlotChange=e=>{this.hasFooterStart=c(e)},this.handleFooterEndSlotChange=e=>{this.hasFooterEnd=c(e)},this.handleDefaultSlotChange=e=>{this.hasContent=c(e)},this.keyDownHandler=e=>{if(e.target===this.containerEl&&!this.selectable&&!this.disabled)if(D(e.key)&&this.selectionMode!=="none")this.calciteCardSelect.emit(),e.preventDefault();else switch(e.key){case"ArrowRight":case"ArrowLeft":case"Home":case"End":this.calciteInternalCardKeyEvent.emit(e),e.preventDefault();break}},this.cardBodyClickHandler=e=>{e.target===this.containerEl&&!this.selectable&&!this.disabled&&this.selectionMode!=="none"&&this.calciteCardSelect.emit()},this.cardSelectKeyDownDeprecated=e=>{switch(e.key){case" ":case"Enter":this.selectCardDeprecated(),e.preventDefault();break}},this.selectCardDeprecated=()=>{this.selected=!this.selected,this.calciteCardSelect.emit()},this.cardSelectClick=e=>{this.disabled||(e.preventDefault(),this.calciteCardSelect.emit(),this.setFocus())},this.loading=!1,this.thumbnailPosition="block-start",this.disabled=!1,this.label=void 0,this.selectable=!1,this.selected=!1,this.messages=void 0,this.selectionMode="none",this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasThumbnail=!1,this.hasHeading=!1,this.hasDescription=!1,this.hasSubtitle=!1,this.hasTitle=!1,this.hasFooterStart=!1,this.hasFooterEnd=!1,this.defaultMessages=void 0,this.hasContent=!1}onMessagesChange(){}async setFocus(){var a;await k(this),this.disabled||(a=this.containerEl)==null||a.focus()}connectedCallback(){f(this),u(this)}componentDidLoad(){w(this)}componentDidRender(){C(this)}disconnectedCallback(){g(this),m(this)}async componentWillLoad(){S(this),await v(this)}effectiveLocaleChange(){x(this,this.effectiveLocale)}renderCheckboxDeprecated(){return t("calcite-label",{class:o.checkboxWrapperDeprecated},t("calcite-checkbox",{checked:this.selected,label:this.messages.select,onClick:this.selectCardDeprecated,onKeyDown:this.cardSelectKeyDownDeprecated}))}renderThumbnail(){return t("section",{class:o.thumbnailWrapper,hidden:!this.hasThumbnail},t("slot",{name:n.thumbnail,onSlotchange:this.handleThumbnailSlotChange}))}renderSelectionIcon(){const a=this.selectionMode==="multiple"&&this.selected?r.selected:this.selectionMode==="multiple"?r.unselected:this.selected?r.selectedSingle:r.unselectedSingle;return t("div",{class:o.checkboxWrapper,onPointerDown:this.cardSelectClick,tabIndex:-1},t("calcite-icon",{icon:a,scale:"s"}))}renderHeader(){const a=this.hasHeading||this.hasDescription,e=this.hasSubtitle||this.hasTitle,i=a||e;return t("header",{class:o.header,hidden:!i},this.selectable?this.renderCheckboxDeprecated():null,t("div",{class:o.headerTextContainer},t("slot",{name:n.heading,onSlotchange:this.handleHeadingSlotChange}),t("slot",{name:n.description,onSlotchange:this.handleDescriptionSlotChange}),t("slot",{name:n.title,onSlotchange:this.handleTitleSlotChange}),t("slot",{name:n.subtitle,onSlotchange:this.handleSubtitleSlotChange})),this.selectionMode!=="none"&&this.renderSelectionIcon())}renderFooter(){const a=this.hasFooterStart||this.hasFooterEnd;return t("footer",{class:o.footer,hidden:!a},t("slot",{name:n.footerStart,onSlotchange:this.handleFooterStartSlotChange}),t("slot",{name:n.footerEnd,onSlotchange:this.handleFooterEndSlotChange}))}render(){const a=this.thumbnailPosition.startsWith("inline"),e=this.thumbnailPosition.endsWith("start"),i=this.selectionMode==="multiple"?"checkbox":this.selectionMode!=="none"?"radio":void 0;return t(p,{key:"dbb99f5c06440d5f7100f89bfef1febbd8d01f3e"},t(y,{key:"6fef7f69921c33bab4c66d34c0691821c837cc82",disabled:this.disabled},t("div",{key:"bcd3a1fecbfc39a15102099db8e6943b0e2207c5","aria-checked":this.selectionMode!=="none"?l(this.selected):void 0,"aria-label":this.label,class:{[o.contentWrapper]:!0,inline:a},onClick:this.cardBodyClickHandler,onKeyDown:this.keyDownHandler,ref:d=>this.containerEl=d,role:i,tabIndex:!this.selectable||this.disabled?0:-1},this.loading?t("div",{"aria-live":"polite",class:"calcite-card-loader-container"},t("calcite-loader",{label:this.messages.loading})):null,e&&this.renderThumbnail(),t("section",{key:"81c5383f8b09ce6372fd94a0e3c9e91c502a18bc","aria-busy":l(this.loading),class:{[o.container]:!0}},this.renderHeader(),t("div",{key:"12d9564007bc07a3e0643ec0b097cab856968e02",class:{[o.cardContent]:!0,[o.hasSlottedContent]:this.hasContent}},t("slot",{key:"1c500b0005123c768bfb77eecb62a0166c5e178f",onSlotchange:this.handleDefaultSlotChange})),this.renderFooter()),!e&&this.renderThumbnail())))}static get assetsDirs(){return["assets"]}get el(){return b(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};H.style=E;export{H as calcite_card};
//# sourceMappingURL=calcite-card.entry-Td8ejnOM.js.map
