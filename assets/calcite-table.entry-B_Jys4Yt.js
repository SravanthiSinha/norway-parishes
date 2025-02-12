import{r as N,c as u,e as M,h as o,H,g as O}from"./index-j6yFHuRy.js";import{s as B,a as $}from"./loadable-13e9ffb2-P8mYP7ok.js";import{u as D,s as V,c as j,d as U}from"./t9n-75defee3-BwpgkMxH.js";import{n as A,c as q,d as G}from"./locale-60f8ca58-CupuDOSB.js";import"./dom-b6dedd88-Cu1e-rKq.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";import"./observers-9c166451-BmkzuYBc.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const r={bordered:"bordered",striped:"striped",selectionArea:"selection-area",paginationArea:"pagination-area",container:"container",tableContainer:"table-container",tableFixed:"table--fixed",assistiveText:"assistive-text",selectionActions:"selection-actions"},f={selectionActions:"selection-actions",tableHeader:"table-header",tableFooter:"table-footer"},W=":host([scale=s]){--calcite-internal-table-cell-padding:0.25rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding:0.5rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding:1rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--1)}:host{display:flex}.container{display:flex;block-size:100%;inline-size:100%;flex-direction:column}.table-container{overflow:auto;white-space:nowrap;border:1px solid var(--calcite-color-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color:var(--calcite-color-border-3)}.striped ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background:var(--calcite-color-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:0.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:0.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}calcite-pagination{flex:1;justify-content:center}:host([hidden]){display:none}[hidden]{display:none}",_=W,J=class{constructor(a){N(this,a),this.calciteTableSelect=u(this,"calciteTableSelect",6),this.calciteTablePageChange=u(this,"calciteTablePageChange",6),this.calciteInternalTableRowFocusChange=u(this,"calciteInternalTableRowFocusChange",6),this.getSlottedRows=t=>{var e;return(e=t==null?void 0:t.assignedElements({flatten:!0}))==null?void 0:e.filter(i=>i==null?void 0:i.matches("calcite-table-row"))},this.updateRows=()=>{var d,h,b;const t=this.getSlottedRows(this.tableHeadSlotEl)||[],e=this.getSlottedRows(this.tableBodySlotEl)||[],i=this.getSlottedRows(this.tableFootSlotEl)||[],n=[...t,...e,...i];t==null||t.forEach(s=>{const c=t==null?void 0:t.indexOf(s);s.rowType="head",s.positionSection=c,s.positionSectionLocalized=this.localizeNumber((c+1).toString())}),e==null||e.forEach(s=>{const c=e==null?void 0:e.indexOf(s);s.rowType="body",s.positionSection=c,s.positionSectionLocalized=this.localizeNumber((c+1).toString())}),i==null||i.forEach(s=>{const c=i==null?void 0:i.indexOf(s);s.rowType="foot",s.positionSection=c,s.positionSectionLocalized=this.localizeNumber((c+1).toString())}),n==null||n.forEach(s=>{s.interactionMode=this.interactionMode,s.selectionMode=this.selectionMode,s.bodyRowCount=e==null?void 0:e.length,s.positionAll=n==null?void 0:n.indexOf(s),s.numbered=this.numbered,s.scale=this.scale,s.readCellContentsToAT=this.readCellContentsToAT,s.lastVisibleRow=(n==null?void 0:n.indexOf(s))===n.length-1});const l=((d=t[0])==null?void 0:d.cellCount)||((b=(h=t[0])==null?void 0:h.querySelectorAll("calcite-table-header"))==null?void 0:b.length);this.colCount=l,this.headRows=t,this.bodyRows=e,this.footRows=i,this.allRows=n,this.updateSelectedItems(),this.paginateRows()},this.handlePaginationChange=()=>{var e;const t=(e=this.paginationEl)==null?void 0:e.startItem;this.pageStartRow=t||1,this.calciteTablePageChange.emit(),this.updateRows()},this.paginateRows=()=>{var t;(t=this.bodyRows)==null||t.forEach(e=>{const i=e.positionSection+1,n=i>=this.pageStartRow&&i<this.pageStartRow+this.pageSize;e.hidden=this.pageSize>0&&!n&&!this.footRows.includes(e),e.lastVisibleRow=i===this.pageStartRow+this.pageSize-1||i===this.bodyRows.length})},this.updateSelectedItems=t=>{var i,n;const e=(i=this.bodyRows)==null?void 0:i.filter(l=>l.selected);this.selectedItems=e,this.selectedCount=e==null?void 0:e.length,(n=this.allRows)==null||n.forEach(l=>{l.selectedRowCount=this.selectedCount,l.selectedRowCountLocalized=this.localizeNumber(this.selectedCount)}),t&&this.calciteTableSelect.emit()},this.handleDeselectAllRows=()=>{var t;(t=this.bodyRows)==null||t.forEach(e=>{e.selected=!1}),this.updateSelectedItems(!0)},this.setSelectedItems=t=>{var e;(e=this.bodyRows)==null||e.forEach(i=>{var n;(t==null?void 0:t.rowType)==="head"?i.selected=this.selectedCount!==((n=this.bodyRows)==null?void 0:n.length):i.selected=t===i?!i.selected:this.selectionMode==="multiple"?i.selected:!1}),this.updateSelectedItems(!0)},this.localizeNumber=t=>(A.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},A.localize(t.toString())),this.bordered=!1,this.caption=void 0,this.groupSeparator=!1,this.interactionMode="interactive",this.layout="auto",this.numbered=!1,this.numberingSystem=void 0,this.pageSize=0,this.scale="m",this.selectionMode="none",this.selectionDisplay="top",this.zebra=!1,this.striped=!1,this.selectedItems=[],this.messages=void 0,this.messageOverrides=void 0,this.colCount=0,this.pageStartRow=1,this.selectedCount=0,this.readCellContentsToAT=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}handleNumberedChange(){this.updateRows()}onMessagesChange(){}effectiveLocaleChange(){D(this,this.effectiveLocale)}async componentWillLoad(){B(this),await V(this),this.readCellContentsToAT=/safari/i.test(M()),this.updateRows()}componentDidLoad(){$(this)}connectedCallback(){q(this),j(this)}disconnectedCallback(){G(this),U(this)}calciteChipSelectListener(a){a.composedPath().includes(this.el)&&this.setSelectedItems(a.target)}calciteInternalTableRowFocusEvent(a){var S,C,y,w,z,v,R,x,T;const t=a.detail.cellPosition,e=a.detail.rowPosition,i=a.detail.destination,n=a.detail.lastCell,l=(S=this.bodyRows)==null?void 0:S.filter(p=>!p.hidden),d=(C=this.allRows)==null?void 0:C.filter(p=>!p.hidden),h=(y=this.headRows[this.headRows.length-1])==null?void 0:y.positionAll,b=(w=l[0])==null?void 0:w.positionAll,s=(z=l[l.length-1])==null?void 0:z.positionAll,c=(v=this.footRows[0])==null?void 0:v.positionAll,E=(R=d[d.length-1])==null?void 0:R.positionAll,k=i==="next"&&e===h,L=i==="previous"&&e===c,F=i==="previous"&&e===b,I=i==="next"&&e===s;let g;switch(i){case"first":g=0;break;case"last":g=E;break;case"next":g=k?b:I?c:e+1;break;case"previous":g=L?s:F?h:e-1;break}const m=(T=(x=this.allRows)==null?void 0:x.find(p=>p.positionAll===g))==null?void 0:T.cellCount,P=t>m?m:t;g!==void 0&&this.calciteInternalTableRowFocusChange.emit({cellPosition:P,rowPosition:g,destination:i,lastCell:n})}renderSelectionArea(){var l,d,h;const a=(d=(l=this.selectedItems)==null?void 0:l.filter(b=>b.hidden))==null?void 0:d.length,t=this.localizeNumber(a==null?void 0:a.toString()),i=`${this.localizeNumber((h=this.selectedCount)==null?void 0:h.toString())} ${this.messages.selected}`,n=`${t} ${this.messages.hiddenSelected}`;return o("div",{class:r.selectionArea},o("calcite-chip",{kind:this.selectedCount>0?"brand":"neutral",scale:this.scale,value:i},i),a>0&&o("calcite-chip",{icon:"hide-empty",scale:this.scale,title:n,value:n},t),this.selectedCount>0&&o("calcite-button",{"icon-start":"x",kind:"neutral",onClick:this.handleDeselectAllRows,round:!0,scale:this.scale,title:`${this.messages.clear} ${i} ${this.messages.row}`},this.messages.clear),o("div",{class:r.selectionActions},o("slot",{name:f.selectionActions})))}renderPaginationArea(){var a;return o("div",{class:r.paginationArea},o("calcite-pagination",{groupSeparator:this.groupSeparator,numberingSystem:this.numberingSystem,onCalcitePaginationChange:this.handlePaginationChange,pageSize:this.pageSize,ref:t=>this.paginationEl=t,scale:this.scale,startItem:1,totalItems:(a=this.bodyRows)==null?void 0:a.length}))}renderTHead(){return o("thead",null,o("slot",{name:f.tableHeader,onSlotchange:this.updateRows,ref:a=>this.tableHeadSlotEl=a}))}renderTBody(){return o("tbody",null,o("slot",{onSlotchange:this.updateRows,ref:a=>this.tableBodySlotEl=a}))}renderTFoot(){return o("tfoot",null,o("slot",{name:f.tableFooter,onSlotchange:this.updateRows,ref:a=>this.tableFootSlotEl=a}))}render(){var a;return o(H,{key:"8e6d0b48e0ffa640e5d0e052092bccf1b4b7fafe"},o("div",{key:"ce5932eda4dbec9b60ee5a7aad523e5d47178888",class:r.container},this.selectionMode!=="none"&&this.selectionDisplay!=="none"&&this.renderSelectionArea(),o("div",{key:"37fb918ba3079352db0ca83c253f648c327cc3d8",class:{[r.bordered]:this.bordered,[r.striped]:this.striped||this.zebra,[r.tableContainer]:!0}},o("table",{key:"908c1e7ce7768c1c9f3146b83546ae639a86bac8","aria-colcount":this.colCount,"aria-multiselectable":this.selectionMode==="multiple","aria-rowcount":(a=this.allRows)==null?void 0:a.length,class:{[r.tableFixed]:this.layout==="fixed"},role:this.interactionMode==="interactive"?"grid":"table"},o("caption",{key:"9ab15b8e9badee9b38925e563e5c607a13ccf664",class:r.assistiveText},this.caption),this.renderTHead(),this.renderTBody(),this.renderTFoot())),this.pageSize>0&&this.renderPaginationArea()))}static get assetsDirs(){return["assets"]}get el(){return O(this)}static get watchers(){return{groupSeparator:["handleNumberedChange"],interactionMode:["handleNumberedChange"],numbered:["handleNumberedChange"],numberingSystem:["handleNumberedChange"],pageSize:["handleNumberedChange"],scale:["handleNumberedChange"],selectionMode:["handleNumberedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};J.style=_;export{J as calcite_table};
//# sourceMappingURL=calcite-table.entry-B_Jys4Yt.js.map
