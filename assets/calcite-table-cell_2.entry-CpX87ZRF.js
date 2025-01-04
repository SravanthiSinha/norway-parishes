import{r as b,h as n,C as T,H as f,g}from"./index-CJT1kG3U.js";import{s as m,a as C,c as v}from"./loadable-13e9ffb2-BGmtNLc8.js";import{u as w,s as x,c as S,d as R}from"./t9n-75defee3-CwG55ZZb.js";import{u as L,I as z}from"./interactive-1a42577a-D7sAePlR.js";import{c as y,d as k}from"./locale-60f8ca58--3M74IpZ.js";import{g as I}from"./dom-b6dedd88-9CMuDstV.js";import{g as $}from"./component-5f0a8be8-6CIDVndn.js";import"./key-3ee05994-D63ExP77.js";import"./observers-9c166451-BLVGRbsu.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c={contentCell:"content-cell",numberCell:"number-cell",footerCell:"footer-cell",selectionCell:"selection-cell",selectedCell:"selected-cell",assistiveText:"assistive-text",lastCell:"last-cell",staticCell:"static-cell"},M=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-cell-background:var(--calcite-table-cell-background, transparent);display:contents}:host([alignment=center]) td:not(.selection-cell):not(.number-cell){text-align:center}:host([alignment=end]) td:not(.selection-cell):not(.number-cell){text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}td{white-space:normal;text-align:start;vertical-align:middle;color:var(--calcite-color-text-1);background:var(--calcite-internal-table-cell-background);font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-color-border-3);padding:var(--calcite-internal-table-cell-padding)}td:not(.static-cell){outline-color:transparent}td:not(.static-cell):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}td.start.content-cell{vertical-align:top}td.end.content-cell{vertical-align:bottom}td.last-cell{border-inline-end:0}.number-cell{background-color:var(--calcite-color-foreground-2)}.footer-cell{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);border-block-start:1px solid var(--calcite-color-border-3)}.number-cell,.selection-cell{text-align:center;border-inline-end:1px solid var(--calcite-color-border-3);inline-size:2rem;min-inline-size:2rem}.selection-cell{color:var(--calcite-color-text-3);inset-inline-start:2rem}.selection-cell:not(.footer-cell){cursor:pointer}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-internal-table-cell-background:var(--calcite-color-foreground-current)}.selection-cell.selected-cell{box-shadow:inset 0.25rem 0 0 0 var(--calcite-color-brand);color:var(--calcite-color-brand)}.selection-cell.selected-cell calcite-icon{color:var(--calcite-color-brand)}.calcite--rtl.selection-cell.selected-cell{box-shadow:inset -0.25rem 0 0 0 var(--calcite-color-brand)}.selection-cell{vertical-align:middle}.selection-cell ::slotted(calcite-icon){pointer-events:none;margin-block-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,A=M,F=class{constructor(e){b(this,e),this.updateScreenReaderContentsText=()=>{this.contentsText=this.el.textContent},this.onContainerBlur=()=>{this.focused=!1},this.onContainerFocus=()=>{this.focused=!0},this.alignment="start",this.colSpan=void 0,this.rowSpan=void 0,this.disabled=void 0,this.interactionMode="interactive",this.lastCell=void 0,this.numberCell=void 0,this.parentRowIsSelected=void 0,this.parentRowAlignment="start",this.parentRowPositionLocalized=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.readCellContentsToAT=void 0,this.scale="m",this.selectionCell=void 0,this.messages=void 0,this.messageOverrides=void 0,this.contentsText="",this.defaultMessages=void 0,this.focused=!1,this.selectionText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderSelectionText()}onMessagesChange(){}effectiveLocaleChange(){w(this,this.effectiveLocale)}async componentWillLoad(){m(this),await x(this),this.updateScreenReaderContentsText(),this.updateScreenReaderSelectionText()}componentDidLoad(){C(this)}connectedCallback(){y(this),S(this)}componentDidRender(){L(this)}disconnectedCallback(){k(this),R(this)}async setFocus(){await v(this),this.containerEl.focus()}updateScreenReaderSelectionText(){var i,o,s,a,r,d;const e=`${(i=this.messages)==null?void 0:i.row} ${this.parentRowPositionLocalized} ${(o=this.messages)==null?void 0:o.selected} ${(s=this.messages)==null?void 0:s.keyboardDeselect}`,l=`${(a=this.messages)==null?void 0:a.row} ${this.parentRowPositionLocalized} ${(r=this.messages)==null?void 0:r.unselected} ${(d=this.messages)==null?void 0:d.keyboardSelect}`;this.selectionText=this.parentRowIsSelected?e:l}render(){const e=I(this.el),l=this.disabled||this.interactionMode==="static"&&(!this.selectionCell||this.selectionCell&&this.parentRowType==="foot");return n(f,{key:"810b40e485c0c6e0eee906d2429f90b2849f6596"},n(z,{key:"58e00494bada929bc60f2e70469a5728373514ff",disabled:this.disabled},n("td",{key:"3c42de8c89375021694b762b438eee08ac7b95e1",class:{[c.footerCell]:this.parentRowType==="foot",[c.contentCell]:!this.numberCell&&!this.selectionCell,[c.numberCell]:this.numberCell,[c.selectionCell]:this.selectionCell,[c.selectedCell]:this.parentRowIsSelected,[c.lastCell]:this.lastCell&&(!this.rowSpan||this.colSpan&&!!this.rowSpan),[T.rtl]:e==="rtl",[c.staticCell]:l,[this.parentRowAlignment]:this.parentRowAlignment==="start"||this.parentRowAlignment==="end"},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,ref:i=>this.containerEl=i,role:this.interactionMode==="interactive"?"gridcell":"cell",rowSpan:this.rowSpan,tabIndex:l?-1:0},(this.selectionCell||this.readCellContentsToAT)&&n("span",{key:"74f8a783a482e2cebf7f8b1c49a9678a2de05d0a","aria-live":this.focused?"polite":"off",class:c.assistiveText},this.selectionCell&&this.selectionText,this.readCellContentsToAT&&!this.selectionCell&&this.contentsText),n("slot",{key:"e0fd9db04473dd100c008f17aa648e3337d55419",onSlotchange:this.updateScreenReaderContentsText}))))}static get assetsDirs(){return["assets"]}get el(){return g(this)}static get watchers(){return{parentRowIsSelected:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};F.style=A;const t={contentCell:"content-cell",numberCell:"number-cell",selectionCell:"selection-cell",bodyRow:"body-row",footerRow:"footer-row",heading:"heading",description:"description",multipleSelectionCell:"cell--multiple-selection",assistiveText:"assistive-text",active:"active",selectedCell:"selected-cell",lastCell:"last-cell",staticCell:"static-cell"},h={checked:"check-square-f",indeterminate:"minus-square-f",unchecked:"square"},D=`:host{--calcite-internal-table-header-background:var(--calcite-table-header-background, var(--calcite-color-foreground-2));--calcite-internal-table-header-border-color:var(--calcite-table-border-color, var(--calcite-color-border-3));display:contents}:host([alignment=center]) th{text-align:center}:host([alignment=end]) th{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}th{white-space:normal;text-align:start;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-internal-table-header-border-color);border-block-end:1px solid var(--calcite-internal-table-header-border-color);padding-block:calc(var(--calcite-internal-table-cell-padding) * 1.5);padding-inline:var(--calcite-internal-table-cell-padding);background-color:var(--calcite-internal-table-header-background)}th:not(.static-cell){outline-color:transparent}th:not(.static-cell):not(.static-cell):focus-within{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}th:not(.center):not(.end).content-cell{vertical-align:top}th.center{vertical-align:middle}th.end.content-cell{vertical-align:bottom}th.body-row,th.footer-row{padding-block:var(--calcite-internal-table-cell-padding);border-block-end:0}th.footer-row{border-block-start:1px solid var(--calcite-internal-table-header-border-color)}th.last-cell{border-inline-end:0}.cell--multiple-selection{cursor:pointer;vertical-align:middle;color:var(--calcite-color-text-3)}.cell--multiple-selection:not(.end){vertical-align:middle}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-internal-table-header-background:var(--calcite-color-foreground-current)}.number-cell,.selection-cell{color:var(--calcite-color-text-2);inline-size:2rem;min-inline-size:2rem}.selection-cell calcite-icon.active{color:var(--calcite-color-brand)}.number-cell calcite-icon,.selection-cell calcite-icon{margin-inline-start:auto;margin-inline-end:auto;vertical-align:middle}.heading{color:var(--calcite-color-text-1)}.description{color:var(--calcite-color-text-3);font-size:var(--calcite-internal-table-cell-font-size-secondary)}`,B=D,E=class{constructor(e){b(this,e),this.onContainerBlur=()=>{this.focused=!1},this.onContainerFocus=()=>{this.focused=!0},this.alignment="start",this.colSpan=void 0,this.description=void 0,this.heading=void 0,this.rowSpan=void 0,this.interactionMode="interactive",this.lastCell=void 0,this.numberCell=!1,this.parentRowAlignment="start",this.parentRowIsSelected=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.scale=void 0,this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.selectionCell=!1,this.selectionMode=void 0,this.bodyRowCount=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.focused=!1,this.screenReaderText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderText()}onMessagesChange(){}async componentWillLoad(){m(this),await x(this),this.updateScreenReaderText()}componentDidLoad(){C(this)}connectedCallback(){y(this),S(this)}disconnectedCallback(){k(this),R(this)}effectiveLocaleChange(){w(this,this.effectiveLocale)}async setFocus(){await v(this),this.containerEl.focus()}updateScreenReaderText(){var i,o,s,a,r,d,u,p;let e="";const l=`${this.selectedRowCountLocalized} ${(i=this.messages)==null?void 0:i.selected}`;this.numberCell?e=(o=this.messages)==null?void 0:o.rowNumber:this.selectionMode==="single"?e=`${(s=this.messages)==null?void 0:s.selectionColumn}. ${l}`:this.bodyRowCount===this.selectedRowCount?e=`${(a=this.messages)==null?void 0:a.selectionColumn}. ${(r=this.messages)==null?void 0:r.all} ${l} ${(d=this.messages)==null?void 0:d.keyboardDeselectAll}`:e=`${(u=this.messages)==null?void 0:u.selectionColumn}. ${l} ${(p=this.messages)==null?void 0:p.keyboardSelectAll}`,this.screenReaderText=e}render(){const e=this.rowSpan?"rowgroup":this.colSpan?"colgroup":this.parentRowType==="body"?"row":"col",l=this.selectedRowCount===this.bodyRowCount,i=this.selectedRowCount>0,o=l?h.checked:i?h.indeterminate:h.unchecked,s=this.interactionMode==="static"&&!this.selectionCell;return n(f,{key:"447a58f1a2aa774bbe128ddd6f5d5c0a03bf7bc7"},n("th",{key:"ee6cf5d248ed63e8212ffc5614d9c72cd4854bda","aria-colindex":this.parentRowType==="head"?this.positionInRow:void 0,class:{[t.bodyRow]:this.parentRowType==="body",[t.footerRow]:this.parentRowType==="foot",[t.contentCell]:!this.numberCell&&!this.selectionCell,[t.numberCell]:this.numberCell,[t.selectionCell]:this.selectionCell,[t.selectedCell]:this.parentRowIsSelected,[t.multipleSelectionCell]:this.selectionMode==="multiple",[t.staticCell]:s,[t.lastCell]:this.lastCell&&(!this.rowSpan||this.colSpan&&!!this.rowSpan),[this.parentRowAlignment]:this.parentRowAlignment==="center"||this.parentRowAlignment==="end"},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,ref:a=>this.containerEl=a,role:this.parentRowType==="head"?"columnheader":"rowheader",rowSpan:this.rowSpan,scope:e,tabIndex:this.selectionCell?0:s?-1:0},this.heading&&n("div",{key:"549f6ea3faaa3fe66565de1d67567bfaa38cad50",class:t.heading},this.heading),this.description&&n("div",{key:"27f7b8de72e154917efd88d9d7f9653df65b0459",class:t.description},this.description),this.selectionCell&&this.selectionMode==="multiple"&&n("calcite-icon",{key:"41fb8e9cdc09f24c326d8edd70d600fee4920bc3",class:{[t.active]:i||l},icon:o,scale:$(this.scale)}),(this.selectionCell||this.numberCell)&&n("span",{key:"119b6c72bd3cc17a19863841e02b04c2312e7984","aria-live":this.focused?"polite":"off",class:t.assistiveText},this.screenReaderText)))}static get assetsDirs(){return["assets"]}get el(){return g(this)}static get watchers(){return{selectedRowCount:["onSelectedChange"],selectedRowCountLocalized:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};E.style=B;export{F as calcite_table_cell,E as calcite_table_header};
//# sourceMappingURL=calcite-table-cell_2.entry-CpX87ZRF.js.map
