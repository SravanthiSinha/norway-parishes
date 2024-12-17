import{r as w,c as u,h as s,H as p,g as f}from"./index-Bs-G_wsu.js";import{h,t as C}from"./dom-b6dedd88-CWSCYV61.js";import{i as m}from"./key-3ee05994-D63ExP77.js";import{u as R,I as g}from"./interactive-1a42577a-DrcFfM44.js";import{g as y}from"./component-5f0a8be8-6CIDVndn.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const k={lastVisibleRow:"last-visible-row"},T=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background:var(--calcite-table-row-background, var(--calcite-color-foreground-1));--calcite-internal-table-row-border-color:var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}tr.last-visible-row{border-block-end:0}",A=T,S=class{constructor(o){w(this,o),this.calciteTableRowSelect=u(this,"calciteTableRowSelect",6),this.calciteInternalTableRowFocusRequest=u(this,"calciteInternalTableRowFocusRequest",6),this.rowCells=[],this.keyDownHandler=e=>{var c;if(this.interactionMode!=="interactive")return;const t=e.target,a=e.key,l=e.ctrlKey,n=this.rowCells;if(t.matches("calcite-table-cell")||t.matches("calcite-table-header"))switch(a){case"ArrowUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"previous"),e.preventDefault();break;case"ArrowDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"next"),e.preventDefault();break;case"PageUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"first"),e.preventDefault();break;case"PageDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"last"),e.preventDefault();break;case"ArrowLeft":h(n,t,"previous",!1),e.preventDefault();break;case"ArrowRight":h(n,t,"next",!1),e.preventDefault();break;case"Home":l?(this.emitTableRowFocusRequest(1,this.positionAll,"first"),e.preventDefault()):(h(n,t,"first",!1),e.preventDefault());break;case"End":l?(this.emitTableRowFocusRequest((c=this.rowCells)==null?void 0:c.length,this.positionAll,"last",!0),e.preventDefault()):(h(n,t,"last",!1),e.preventDefault());break}},this.emitTableRowFocusRequest=(e,t,a,l)=>{this.calciteInternalTableRowFocusRequest.emit({cellPosition:e,rowPosition:t,destination:a,lastCell:l})},this.updateCells=()=>{var n,c,r,d;const e=this.alignment?this.alignment:this.rowType!=="head"?"center":"start",t=(c=(n=this.tableRowSlotEl)==null?void 0:n.assignedElements({flatten:!0}))==null?void 0:c.filter(i=>i.matches("calcite-table-cell")||i.matches("calcite-table-header")),a=(d=Array.from((r=this.tableRowEl)==null?void 0:r.querySelectorAll("calcite-table-header, calcite-table-cell")))==null?void 0:d.filter(i=>i.numberCell||i.selectionCell),l=a?a.concat(t):t;l.length>0&&(l==null||l.forEach((i,b)=>{i.interactionMode=this.interactionMode,i.lastCell=b===l.length-1,i.parentRowAlignment=e,i.parentRowIsSelected=this.selected,i.parentRowType=this.rowType,i.positionInRow=b+1,i.scale=this.scale,i.nodeName==="CALCITE-TABLE-CELL"&&(i.readCellContentsToAT=this.readCellContentsToAT,i.disabled=this.disabled)})),this.rowCells=l||[],this.cellCount=l==null?void 0:l.length},this.handleSelectionOfRow=()=>{this.calciteTableRowSelect.emit()},this.handleKeyboardSelection=e=>{m(e.key)&&(e.key===" "&&e.preventDefault(),this.handleSelectionOfRow())},this.alignment=void 0,this.disabled=!1,this.selected=!1,this.cellCount=void 0,this.interactionMode="interactive",this.lastVisibleRow=void 0,this.rowType=void 0,this.numbered=!1,this.positionSection=void 0,this.positionSectionLocalized=void 0,this.positionAll=void 0,this.readCellContentsToAT=void 0,this.scale=void 0,this.selectionMode="none",this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.bodyRowCount=void 0,this.effectiveLocale=""}handleCellChanges(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}handleDelayedCellChanges(){this.tableRowEl&&this.rowCells.length>0&&requestAnimationFrame(()=>this.updateCells())}componentDidLoad(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}componentDidRender(){R(this)}calciteInternalTableRowFocusChangeHandler(o){var e;if(o.target.contains(this.el)){const t=o.detail.cellPosition,a=o.detail.rowPosition,l=o.detail.destination,n=o.detail.lastCell;if(a===this.positionAll){if(this.disabled){const r=l==="last"?"previous":l==="first"?"next":l;this.emitTableRowFocusRequest(t,this.positionAll,r);return}const c=n?this.rowCells[this.rowCells.length-1]:(e=this.rowCells)==null?void 0:e.find((r,d)=>d+1===t);c&&c.setFocus()}}}renderSelectionIcon(){const o=this.selectionMode==="multiple"&&this.selected?"check-square-f":this.selectionMode==="multiple"?"square":this.selected?"circle-f":"circle";return s("calcite-icon",{icon:o,scale:y(this.scale)})}renderSelectableCell(){return this.rowType==="head"?s("calcite-table-header",{alignment:"center",bodyRowCount:this.bodyRowCount,key:"selection-head",onClick:this.selectionMode==="multiple"&&this.handleSelectionOfRow,onKeyDown:this.selectionMode==="multiple"&&this.handleKeyboardSelection,parentRowAlignment:this.alignment,selectedRowCount:this.selectedRowCount,selectedRowCountLocalized:this.selectedRowCountLocalized,selectionCell:!0,selectionMode:this.selectionMode}):this.rowType==="body"?s("calcite-table-cell",{alignment:"center",key:"selection-body",onClick:this.handleSelectionOfRow,onKeyDown:this.handleKeyboardSelection,parentRowAlignment:this.alignment,parentRowIsSelected:this.selected,parentRowPositionLocalized:this.positionSectionLocalized,selectionCell:!0},this.renderSelectionIcon()):s("calcite-table-cell",{alignment:"center",key:"selection-foot",parentRowAlignment:this.alignment,selectionCell:!0})}renderNumberedCell(){return this.rowType==="head"?s("calcite-table-header",{alignment:"center",key:"numbered-head",numberCell:!0,parentRowAlignment:this.alignment}):this.rowType==="body"?s("calcite-table-cell",{alignment:"center",key:"numbered-body",numberCell:!0,parentRowAlignment:this.alignment},this.positionSectionLocalized):s("calcite-table-cell",{alignment:"center",key:"numbered-foot",numberCell:!0,parentRowAlignment:this.alignment})}render(){return s(p,{key:"fa3f14c832e7ed178ea338b01baebbe9a578689d"},s(g,{key:"c82f005db0a6247e45476c86d2eaefe698df2dd1",disabled:this.disabled},s("tr",{key:"452064805aa9685b75f3715bd45c42ce41f88368","aria-rowindex":this.positionAll+1,"aria-selected":C(this.selected),class:{[k.lastVisibleRow]:this.lastVisibleRow},onKeyDown:this.keyDownHandler,ref:o=>this.tableRowEl=o},this.numbered&&this.renderNumberedCell(),this.selectionMode!=="none"&&this.renderSelectableCell(),s("slot",{key:"bddf927a3129b20012ade6aa5415afcdeb8064a1",onSlotchange:this.updateCells,ref:o=>this.tableRowSlotEl=o}))))}get el(){return f(this)}static get watchers(){return{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],interactionMode:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}}};S.style=A;export{S as calcite_table_row};
