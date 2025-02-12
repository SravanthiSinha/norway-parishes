import{r as S,c as v,h as a,H as E,g as M,C as y}from"./index-BvuY3ppR.js";import{t as x,b as w,C as g,d as z,a as D,g as q,D as P}from"./dom-b6dedd88-SWkUsYhR.js";import{c as R,d as H}from"./conditionalSlot-167e1146-KKh3O03c.js";import{u as F,I as L}from"./interactive-1a42577a-CyFxETUd.js";import{g as I}from"./component-5f0a8be8-6CIDVndn.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./observers-9c166451-Dv68UhiS.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function T(t){return(t==null?void 0:t.tagName)==="CALCITE-TREE-ITEM"}function O(t){return Array.from(t.querySelectorAll("calcite-tree-item:not([disabled])")).filter(e=>{let o=e;for(;o!==t&&o!==void 0;){const i=o.parentElement;if(!(!T(i)||!i.hasChildren||i.expanded))return!1;o=o.parentElement}return!0})}const N=":host{display:block}:host(:focus){outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}",W=N,V=class{constructor(t){S(this,t),this.calciteTreeSelect=v(this,"calciteTreeSelect",6),this.keyDownHandler=e=>{if(this.child)return;const o=this.el,i=e.target,r=["ArrowRight","ArrowDown","ArrowLeft","ArrowUp","Home","End","Tab"];if(!(T(i)&&this.el.contains(i))||!r.includes(e.key))return;const s=O(o);if(e.key==="Tab"){s.forEach(c=>c.tabIndex=-1);return}if(e.key==="ArrowDown"){const c=s.indexOf(i),l=s[c+1];l==null||l.focus(),e.preventDefault();return}if(e.key==="ArrowUp"){const c=s.indexOf(i),l=s[c-1];l==null||l.focus(),e.preventDefault();return}if(e.key==="ArrowLeft"){if(i.hasChildren&&i.expanded){i.expanded=!1,e.preventDefault();return}const l=s.slice(0,s.indexOf(i)).reverse().find(d=>d.depth===i.depth-1);l==null||l.focus(),e.preventDefault();return}if(e.key==="ArrowRight"){if(!i.disabled&&i.hasChildren)if(!i.expanded)i.expanded=!0,e.preventDefault();else{const c=s.indexOf(i),l=s[c+1];l==null||l.focus(),e.preventDefault()}return}if(e.key==="Home"){const c=s.shift();c&&(c.focus(),e.preventDefault());return}if(e.key==="End"){const c=s.pop();c&&(c.focus(),e.preventDefault());return}},this.lines=!1,this.child=void 0,this.scale="m",this.selectionMode="single",this.selectedItems=[]}componentWillRender(){var e;const t=(e=this.el.parentElement)==null?void 0:e.closest("calcite-tree");this.lines=t?t.lines:this.lines,this.scale=t?t.scale:this.scale,this.selectionMode=t?t.selectionMode:this.selectionMode,this.child=!!t}render(){return a(E,{key:"5b08de1c59622b78985de9019bf4ba11d605a07f","aria-multiselectable":this.child?void 0:x(this.selectionMode==="multiple"||this.selectionMode==="multichildren"),onKeyDown:this.keyDownHandler,role:this.child?void 0:"tree",tabIndex:this.getRootTabIndex()},a("slot",{key:"00a037cf92cb5facadc4b2961a9369b6ae0631f5"}))}onFocus(){if(!this.child){const t=this.el.querySelector("calcite-tree-item[selected]:not([disabled])")||this.el.querySelector("calcite-tree-item:not([disabled])");w(t)}}onFocusIn(t){(t.relatedTarget===this.el||!this.el.contains(t.relatedTarget))&&this.el.removeAttribute("tabindex")}onFocusOut(t){!this.el.contains(t.relatedTarget)&&(this.el.tabIndex=this.getRootTabIndex())}onInternalTreeItemSelect(t){if(this.child)return;const e=t.target,o=g(e.querySelectorAll("calcite-tree-item"));if(t.preventDefault(),t.stopPropagation(),this.selectionMode==="ancestors"){this.updateAncestorTree(t);return}const i=this.selectionMode==="none",r=this.selectionMode!==null&&(!e.hasChildren||e.hasChildren&&(this.selectionMode==="children"||this.selectionMode==="multichildren")),s=this.selectionMode==="multichildren"&&e.hasChildren,c=!i&&t.detail.modifyCurrentSelection&&(this.selectionMode==="multiple"||this.selectionMode==="multichildren"),l=!c&&((this.selectionMode==="single"||this.selectionMode==="multiple")&&o.length<=0||this.selectionMode==="children"||this.selectionMode==="multichildren"||this.selectionMode==="single-persist"&&!e.hasChildren),d=["multiple","none","single","single-persist"].includes(this.selectionMode)&&e.hasChildren,f=[];r&&f.push(e),l&&g(this.el.querySelectorAll("calcite-tree-item[selected]")).forEach(h=>{f.includes(h)||(h.selected=!1)}),d&&["multiple","none","single","single-persist"].includes(this.selectionMode)&&(e.expanded=!e.expanded),s&&o.forEach(n=>{n.selected=!1,n.hasChildren&&(n.expanded=!1)}),c&&window.getSelection().removeAllRanges(),c&&e.selected?f.forEach(n=>{n.disabled||(n.selected=!1)}):i||f.forEach(n=>{n.disabled||(n.selected=this.selectionMode!=="single"||!n.selected)}),this.selectedItems=i?[]:g(this.el.querySelectorAll("calcite-tree-item")).filter(n=>n.selected),this.calciteTreeSelect.emit(),t.stopPropagation()}updateAncestorTree(t){const e=t.target,o=t.detail.updateItem;if(e.disabled||e.indeterminate&&!o)return;const i=[];let r=e.parentElement.closest("calcite-tree-item");for(;r;)i.push(r),r=r.parentElement.closest("calcite-tree-item");const s=Array.from(e.querySelectorAll("calcite-tree-item:not([disabled])")),c=s.filter(n=>!n.hasChildren),l=s.filter(n=>n.hasChildren);let d;o?d=e.hasChildren?!(e.selected||e.indeterminate):!e.selected:d=e.selected,c.forEach(n=>{n.selected=d,n.indeterminate=!1});function f(n,h){const p=n.filter(b=>b.selected),k=n.filter(b=>!b.selected);h.selected=p.length===n.length,h.indeterminate=p.length>0&&k.length>0}l.reverse().forEach(n=>{const h=Array.from(n.querySelectorAll(":scope > calcite-tree > calcite-tree-item"));f(h,n)}),o&&(e.hasChildren?f(s,e):(e.selected=d,e.indeterminate=!1)),i.forEach(n=>{const h=g(n.querySelectorAll("calcite-tree-item")),p=h.filter(b=>b.selected);if(p.length===0){n.selected=!1,n.indeterminate=!1;return}const k=p.length<h.length;n.indeterminate=k,n.selected=!k}),this.selectedItems=g(this.el.querySelectorAll("calcite-tree-item")).filter(n=>n.selected),o&&this.calciteTreeSelect.emit()}getRootTabIndex(){return this.child?-1:0}get el(){return M(this)}};V.style=W;const u={actionsEnd:"actions-end",bulletPointIcon:"bullet-point",checkbox:"checkbox",checkboxContainer:"checkbox-container",checkboxLabel:"checkbox-label",checkmarkIcon:"checkmark",chevron:"chevron",childrenContainer:"children-container",iconStart:"icon-start",itemExpanded:"item--expanded",nodeAndActionsContainer:"node-actions-container",nodeContainer:"node-container"},C={actionsEnd:"actions-end",children:"children"},m={blank:"blank",bulletPoint:"bullet-point",checkmark:"check",checkSquareF:"check-square-f",chevronRight:"chevron-right",minusSquareF:"minus-square-f",square:"square"},_=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;max-inline-size:100%;cursor:pointer;color:var(--calcite-color-text-3)}.node-actions-container{display:flex}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-actions-container{min-block-size:1.5rem}:host([scale=s]) .node-actions-container .node-container .checkbox,:host([scale=s]) .node-actions-container .node-container .checkmark,:host([scale=s]) .node-actions-container .node-container .bullet-point{margin-inline:0.25rem}:host([scale=s]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=s]) .node-actions-container .node-container .chevron{padding:0.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-actions-container{min-block-size:2rem}:host([scale=m]) .node-actions-container .node-container .checkbox,:host([scale=m]) .node-actions-container .node-container .checkmark,:host([scale=m]) .node-actions-container .node-container .bullet-point{margin-inline:0.5rem}:host([scale=m]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=m]) .node-actions-container .node-container .chevron{padding:0.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-actions-container{min-block-size:2.75rem}:host([scale=l]) .node-actions-container .node-container .checkbox,:host([scale=l]) .node-actions-container .node-container .checkmark,:host([scale=l]) .node-actions-container .node-container .bullet-point{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .chevron{padding-inline:var(--calcite-size-md);padding-block:var(--calcite-size-sm-plus)}:host([lines]) .children-container::after{position:absolute;inset-block-start:0px;z-index:var(--calcite-z-index);inline-size:1px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:96%;content:"";background-color:var(--calcite-color-border-2)}:host(:not([lines])) .node-container::after{display:none}::slotted(*){min-inline-size:0px;max-inline-size:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){inline-size:100%;text-decoration-line:none}:host{outline:2px solid transparent;outline-offset:2px}:host .node-container{outline-color:transparent}:host:focus .node-container,:host:active .node-container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:focus:not([disabled])) .node-container{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:focus:not([disabled])) .checkbox{outline:2px solid transparent;outline-offset:2px}.actions-end{display:flex;flex-direction:row;align-items:center;align-self:stretch}.checkbox-container{display:flex;align-items:center}.checkbox{line-height:0;color:var(--calcite-color-border-input)}.checkbox-label{pointer-events:none;display:flex;align-items:center}.children-container{position:relative;block-size:0px;transform-origin:top;overflow:hidden;opacity:0;margin-inline-start:1.25rem;transform:scaleY(0);transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.item--expanded>.children-container{overflow:visible;opacity:1;transform:none;block-size:auto}.node-container{position:relative;display:flex;min-inline-size:0px;flex-grow:1;align-items:center}.node-container .checkmark,.node-container .bullet-point{opacity:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-color-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus:not([disabled])) .node-container .checkmark,:host(:focus:not([disabled])) .node-container .bullet-point{opacity:1}:host([selected]) .node-container,:host([selected]) .node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .node-container .bullet-point,:host([selected]) .node-container .checkmark,:host([selected]) .node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark{opacity:1;color:var(--calcite-color-brand)}:host([selection-mode=none]:not([has-children])):host([scale=s]) .node-container{padding-inline-start:0.5rem}:host([selection-mode=none]:not([has-children])):host([scale=m]) .node-container{padding-inline-start:1rem}:host([selection-mode=none]:not([has-children])):host([scale=l]) .node-container{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=s]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children]) .node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children]) .node-container .bullet-point,:host([has-children]) .node-container .checkmark{display:none}.chevron{position:relative;align-self:center;color:var(--calcite-color-text-3);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}.item--expanded .node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-color-brand)}:host([selected]) .checkbox{color:var(--calcite-color-brand)}:host([has-children][indeterminate]) .checkbox{color:var(--calcite-color-brand)}:host([hidden]){display:none}[hidden]{display:none}`,U=_,B=class{constructor(t){S(this,t),this.calciteInternalTreeItemSelect=v(this,"calciteInternalTreeItemSelect",6),this.iconClickHandler=e=>{e.stopPropagation(),this.expanded=!this.expanded},this.childrenClickHandler=e=>e.stopPropagation(),this.userChangedValue=!1,this.updateParentIsExpanded=(e,o)=>{z(e,C.children,{all:!0,selector:"calcite-tree-item"}).forEach(r=>r.parentExpanded=o)},this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=D(e)},this.disabled=!1,this.label=void 0,this.expanded=!1,this.iconFlipRtl=void 0,this.iconStart=void 0,this.selected=!1,this.parentExpanded=!1,this.depth=-1,this.hasChildren=null,this.lines=void 0,this.scale=void 0,this.indeterminate=!1,this.selectionMode=void 0,this.hasEndActions=!1,this.updateAfterInitialRender=!1}expandedHandler(t){this.updateParentIsExpanded(this.el,t)}handleSelectedChange(t){this.selectionMode==="ancestors"&&!this.userChangedValue&&(t&&(this.indeterminate=!1),this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:!0,updateItem:!1}))}getSelectionMode(){this.isSelectionMultiLike=this.selectionMode==="multiple"||this.selectionMode==="multichildren"}connectedCallback(){var t;if(this.parentTreeItem=(t=this.el.parentElement)==null?void 0:t.closest("calcite-tree-item"),this.parentTreeItem){const{expanded:e}=this.parentTreeItem;this.updateParentIsExpanded(this.parentTreeItem,e)}R(this)}disconnectedCallback(){H(this)}componentWillRender(){var o;this.hasChildren=!!this.el.querySelector("calcite-tree"),this.depth=0;let t=this.el.closest("calcite-tree");if(!t)return;this.selectionMode=t.selectionMode,this.scale=t.scale||"m",this.lines=t.lines;let e;for(;t&&(e=(o=t.parentElement)==null?void 0:o.closest("calcite-tree"),e!==t);)t=e,this.depth=this.depth+1}componentWillLoad(){requestAnimationFrame(()=>this.updateAfterInitialRender=!0)}componentDidLoad(){this.updateAncestorTree()}componentDidRender(){F(this)}render(){const t=q(this.el)==="rtl",e=this.selectionMode==="single"||this.selectionMode==="children"||this.selectionMode==="single-persist",o=this.selectionMode==="multiple"||this.selectionMode==="multichildren",i=this.selectionMode==="none"&&!this.hasChildren,r=this.hasChildren&&this.indeterminate,s=this.hasChildren?a("calcite-icon",{class:{[u.chevron]:!0,[y.rtl]:t},"data-test-id":"icon",icon:m.chevronRight,onClick:this.iconClickHandler,scale:I(this.scale)}):null,c=a("slot",{key:"default-slot"}),l=this.selectionMode==="ancestors"?a("div",{class:u.checkboxContainer},a("calcite-icon",{class:u.checkbox,icon:this.selected?m.checkSquareF:r?m.minusSquareF:m.square,scale:I(this.scale)}),a("label",{class:u.checkboxLabel},c)):null,d=e?m.bulletPoint:o?m.checkmark:i?m.blank:null,f=d?a("calcite-icon",{class:{[u.bulletPointIcon]:d===m.bulletPoint,[u.checkmarkIcon]:d===m.checkmark,[y.rtl]:t},icon:d,scale:I(this.scale)}):null,n=!(this.parentExpanded||this.depth===1),h=this.updateAfterInitialRender&&this.expanded,{hasEndActions:p}=this,k=a("slot",{key:"actionsEndSlot",name:C.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler}),b=a("calcite-icon",{key:"251fd8b4ef328e3575268a914b823282d5810b3b",class:u.iconStart,flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:I(this.scale)});return a(E,{key:"9ca6542ef823f536919ef45e249a51acc560e5cd","aria-checked":this.selectionMode==="multiple"||this.selectionMode==="multichildren"||this.selectionMode==="ancestors"?x(this.selected):void 0,"aria-expanded":this.hasChildren?x(h):void 0,"aria-hidden":x(n),"aria-live":"polite","aria-selected":this.selectionMode==="single"||this.selectionMode==="children"||this.selectionMode==="single-persist"?x(this.selected):void 0,"calcite-hydrated-hidden":n,role:"treeitem",tabIndex:this.disabled?-1:0},a(L,{key:"b87535cef45f25a3d962f2ee7a2fe23030c09626",disabled:this.disabled},a("div",{key:"2a4f1e4a647c80ef1d027b795814a03dd933db37",class:{[u.itemExpanded]:h}},a("div",{key:"716fc1eac97264fe3186a0beee9e173415f93b83",class:u.nodeAndActionsContainer},a("div",{key:"286db32250f9978cab481314b2ea3e790248c7f2",class:{[u.nodeContainer]:!0,[y.rtl]:t},"data-selection-mode":this.selectionMode},s,f,this.iconStart?b:null,l||c),a("div",{key:"2e1eeefae879f7197b5292ecda3b1f831f673efb",class:u.actionsEnd,hidden:!p,ref:A=>this.actionSlotWrapper=A},k)),a("div",{key:"1cb705ab7da1422b2a956ea90e29b489909840f3",class:{[u.childrenContainer]:!0,[y.rtl]:t},"data-test-id":"calcite-tree-children",onClick:this.childrenClickHandler,role:this.hasChildren?"group":void 0},a("slot",{key:"e3c968c15f50af07cafd3c3a67746455472e6b6f",name:C.children})))))}onClick(t){if(this.disabled||this.isActionEndEvent(t))return;const[e]=P(this.el,"a");if(e&&t.composedPath()[0].tagName.toLowerCase()!=="a"){const o=e.target===""?"_self":e.target;window.open(e.href,o)}this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.selectionMode==="ancestors"||this.isSelectionMultiLike,updateItem:!0}),this.userChangedValue=!0}keyDownHandler(t){if(!(this.isActionEndEvent(t)||t.defaultPrevented))switch(t.key){case" ":this.userChangedValue=!0,this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,updateItem:!0}),t.preventDefault();break;case"Enter":{const e=Array.from(this.el.children).find(o=>o.matches("a"));this.userChangedValue=!0,e?(e.click(),this.selected=!0):this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,updateItem:!0}),t.preventDefault()}}}isActionEndEvent(t){return t.composedPath().includes(this.actionSlotWrapper)}updateAncestorTree(){const t=this.parentTreeItem;if(!(this.selectionMode!=="ancestors"||!t)){if(this.selected){const e=this.el.parentElement,o=Array.from(e==null?void 0:e.children),i=o.filter(s=>s.selected);o.length===i.length?(t.selected=!0,t.indeterminate=!1):i.length>0&&(t.indeterminate=!0),Array.from(this.el.querySelectorAll("calcite-tree-item:not([disabled])")).forEach(s=>{s.selected=!0,s.indeterminate=!1})}else if(this.indeterminate){const e=this.parentTreeItem;e.indeterminate=!0}}}get el(){return M(this)}static get watchers(){return{expanded:["expandedHandler"],selected:["handleSelectedChange"],selectionMode:["getSelectionMode"]}}};B.style=U;export{V as calcite_tree,B as calcite_tree_item};
//# sourceMappingURL=calcite-tree_2.entry-CNmveVCP.js.map
