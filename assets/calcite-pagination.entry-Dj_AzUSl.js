import{r as z,c as y,h as a,g as P}from"./index-DhfeYpQB.js";import{s as L,a as M,c as X}from"./loadable-13e9ffb2-BMLjrKdi.js";import{n as f,c as w,d as E}from"./locale-60f8ca58-WtY-v6nt.js";import{u as F,c as O,s as T,d as U}from"./t9n-75defee3-DMaJGW6H.js";import{c as R}from"./observers-9c166451-B8IGrN6i.js";import{b as m}from"./responsive-5b4f3a40-3Qk2XNng.js";import{g as p}from"./component-5f0a8be8-6CIDVndn.js";import"./dom-b6dedd88-C9uZSTO_.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const i={list:"list",listItem:"list-item",page:"page",selected:"selected",chevron:"chevron",disabled:"disabled",ellipsis:"ellipsis"},u={next:"chevron-right",previous:"chevron-left",first:"chevron-start",last:"chevron-end"},B=`:host{display:flex;writing-mode:horizontal-tb}.list{margin:0px;display:flex;list-style-type:none;padding:0px}.list-item{margin:0px;display:flex;padding:0px}:host([scale=s]) .chevron,:host([scale=s]) .page,:host([scale=s]) .ellipsis{block-size:1.5rem;padding-inline:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;min-inline-size:1.5rem}:host([scale=m]) .chevron,:host([scale=m]) .page,:host([scale=m]) .ellipsis{block-size:2rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;min-inline-size:2rem}:host([scale=l]) .chevron,:host([scale=l]) .page,:host([scale=l]) .ellipsis{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-inline-size:2.75rem}:host([scale=l]) .chevron{padding-inline:0.625rem}:host([scale=l]) .page,:host([scale=l]) .ellipsis{padding-inline:0.75rem}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.chevron,.page,.ellipsis{margin:0px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-style:none;--tw-border-opacity:0;background-color:transparent;padding:0px;vertical-align:baseline;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-color-text-3)}.chevron,.page{cursor:pointer;border-block:2px solid transparent}.chevron:hover,.page:hover{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-color-border-2)}.page.selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);border-block-end-color:var(--calcite-color-brand)}.chevron:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-brand)}.chevron:active{background-color:var(--calcite-color-foreground-3)}.chevron.disabled{pointer-events:none;background-color:transparent}.chevron.disabled>calcite-icon{opacity:var(--calcite-opacity-disabled)}:host([hidden]){display:none}[hidden]{display:none}`,N=B,b=2,S=2,h={large:11,medium:9,small:7,xsmall:5,xxsmall:1},D=class{constructor(e){z(this,e),this.calcitePaginationChange=y(this,"calcitePaginationChange",6),this.resizeObserver=R("resize",t=>t.forEach(this.resizeHandler)),this.resizeHandler=({contentRect:{width:t}})=>this.setMaxItemsToBreakpoint(t),this.firstClicked=()=>{this.startItem=1,this.emitUpdate()},this.lastClicked=()=>{this.startItem=this.lastStartItem,this.emitUpdate()},this.previousClicked=async()=>{await this.previousPage(),this.emitUpdate()},this.nextClicked=async()=>{await this.nextPage(),this.emitUpdate()},this.handlePageClick=t=>{const s=t.target;this.startItem=parseInt(s.value,10),this.emitUpdate()},this.groupSeparator=!1,this.messages=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.pageSize=20,this.scale="m",this.startItem=1,this.totalItems=0,this.defaultMessages=void 0,this.effectiveLocale="",this.maxItems=h.xxsmall,this.totalPages=void 0,this.lastStartItem=void 0,this.isXXSmall=void 0}onMessagesChange(){}handleTotalPages(){this.pageSize<1&&(this.pageSize=1),this.totalPages=this.totalItems/this.pageSize}effectiveLocaleChange(){F(this,this.effectiveLocale),f.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator}}handleLastStartItemChange(){const{totalItems:e,pageSize:t,totalPages:s}=this;this.lastStartItem=(e%t===0?e-t:Math.floor(s)*t)+1}handleIsXXSmall(){this.isXXSmall=this.maxItems===h.xxsmall}connectedCallback(){var e;w(this),O(this),(e=this.resizeObserver)==null||e.observe(this.el)}async componentWillLoad(){await T(this),L(this),this.handleTotalPages(),this.handleLastStartItemChange(),this.handleIsXXSmall()}componentDidLoad(){M(this),this.setMaxItemsToBreakpoint(this.el.clientWidth)}disconnectedCallback(){var e;E(this),U(this),(e=this.resizeObserver)==null||e.disconnect()}async setFocus(){await X(this),this.el.focus()}async nextPage(){this.startItem=Math.min(this.lastStartItem,this.startItem+this.pageSize)}async previousPage(){this.startItem=Math.max(1,this.startItem-this.pageSize)}async goTo(e){switch(e){case"start":this.startItem=1;break;case"end":this.startItem=this.lastStartItem;break;default:e>=Math.ceil(this.totalPages)?this.startItem=this.lastStartItem:e<=0?this.startItem=1:this.startItem=(e-1)*this.pageSize+1}}setMaxItemsToBreakpoint(e){if(!(!m||!e)){if(e>=m.width.medium){this.maxItems=h.large;return}if(e>=m.width.small){this.maxItems=h.medium;return}if(e>=m.width.xsmall){this.maxItems=h.small;return}if(e>=m.width.xxsmall){this.maxItems=h.xsmall;return}this.maxItems=h.xxsmall}}showStartEllipsis(){return this.totalPages>this.maxItems&&Math.floor(this.startItem/this.pageSize)>this.maxItems-b-S}showEndEllipsis(){return this.totalPages>this.maxItems&&(this.totalItems-this.startItem)/this.pageSize>this.maxItems-b-(S-1)}emitUpdate(){this.calcitePaginationChange.emit()}renderEllipsis(e){return a("span",{class:i.ellipsis,"data-test-ellipsis":e,key:e},"…")}renderItems(){const{totalItems:e,pageSize:t,startItem:s,maxItems:l,totalPages:r,lastStartItem:g,isXXSmall:k}=this,n=[];if(k)return n.push(this.renderPage(s)),n;const C=e>t,v=this.showStartEllipsis(),I=this.showEndEllipsis();C&&n.push(this.renderPage(1)),v&&n.push(this.renderEllipsis("start"));const o=l-b-(I?1:0)-(v?1:0);let d,c;r-1<=o?(c=1+t,d=g-t):s/t<o?(c=1+t,d=1+o*t):s+o*t>=e?(c=g-o*t,d=g-t):(c=s-t*((o-1)/2),d=s+t*((o-1)/2));for(let x=0;x<o&&c<=d;x++)n.push(this.renderPage(c)),c=c+t;return I&&n.push(this.renderEllipsis("end")),n.push(this.renderPage(g)),n}renderPage(e){const{pageSize:t}=this,s=Math.floor(e/t)+(t===1?0:1);f.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const l=f.localize(s.toString()),r=e===this.startItem;return a("li",{class:i.listItem},a("button",{"aria-current":r?"page":"false",class:{[i.page]:!0,[i.selected]:r},onClick:this.handlePageClick,value:e},l))}renderPreviousChevron(){const{pageSize:e,startItem:t,messages:s}=this,l=e===1?t<=e:t<e;return a("button",{"aria-label":s.previous,class:{[i.chevron]:!0,[i.disabled]:l},"data-test-chevron":"previous",disabled:l,key:"previous",onClick:this.previousClicked},a("calcite-icon",{flipRtl:!0,icon:u.previous,scale:p(this.scale)}))}renderNextChevron(){const{totalItems:e,pageSize:t,startItem:s,messages:l}=this,r=s+t>e;return a("button",{"aria-label":l.next,class:{[i.chevron]:!0,[i.disabled]:r},"data-test-chevron":"next",disabled:r,key:"next-button",onClick:this.nextClicked},a("calcite-icon",{flipRtl:!0,icon:u.next,scale:p(this.scale)}))}renderFirstChevron(){const{messages:e,startItem:t,isXXSmall:s}=this,l=t===1;return s?a("button",{"aria-label":e.first,class:{[i.chevron]:!0,[i.disabled]:l},disabled:l,key:"first-button",onClick:this.firstClicked},a("calcite-icon",{flipRtl:!0,icon:u.first,scale:p(this.scale)})):null}renderLastChevron(){const{messages:e,startItem:t,isXXSmall:s,lastStartItem:l}=this,r=t===l;return s?a("button",{"aria-label":e.last,class:{[i.chevron]:!0,[i.disabled]:r},disabled:r,key:"last-button",onClick:this.lastClicked},a("calcite-icon",{flipRtl:!0,icon:u.last,scale:p(this.scale)})):null}render(){return a("ul",{key:"bdbae7054c4304e91f36809a1131a72551a49679",class:i.list},a("li",{key:"14844fcc6ece08896432cfa31c85f84a9de8d992",class:i.listItem},this.renderFirstChevron()),a("li",{key:"3146daaad99dd8e05637788ea6bfe0cc89b32ac7",class:i.listItem},this.renderPreviousChevron()),this.renderItems(),a("li",{key:"6adbec5c7e7e11aec1937a4d188066f1c999d20c",class:i.listItem},this.renderNextChevron()),a("li",{key:"3574dbf73b6cbbc9048c18a93d2990a649040a41",class:i.listItem},this.renderLastChevron()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return P(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],totalItems:["handleTotalPages","handleLastStartItemChange"],pageSize:["handleTotalPages","handleLastStartItemChange"],effectiveLocale:["effectiveLocaleChange"],totalPages:["handleLastStartItemChange"],maxItems:["handleIsXXSmall"]}}};D.style=N;export{D as calcite_pagination};
//# sourceMappingURL=calcite-pagination.entry-Dj_AzUSl.js.map
