import{r,c as o,h as s,g as l,D as c}from"./index-CyZqSx7I.js";import{f as a}from"./filter-ec7b1a9c-pqDxot8P.js";import{u as d,I as h}from"./interactive-1a42577a-B5mJYQkX.js";import{s as u,a as f,c as p}from"./loadable-13e9ffb2-CNielhY5.js";import{c as m,d as b}from"./locale-60f8ca58-BZb7UF3k.js";import{u as g,s as v,c as y,d as x}from"./t9n-75defee3-DCHx0k8-.js";import{d as C}from"./debounce-6e4946fd-CA9eFM3j.js";import"./dom-b6dedd88-lXcN1LJK.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";import"./observers-9c166451-DjNhmij5.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const D={container:"container",searchIcon:"search-icon"},I={search:"search",close:"x"},k=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-color-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-color-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-color-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}",w=k,z=class{constructor(t){r(this,t),this.calciteFilterChange=o(this,"calciteFilterChange",6),this.filterDebounced=C((e,i=!1,n)=>this.updateFiltered(a(this.items??[],e,this.filterProps),i,n),c.filter),this.inputHandler=e=>{const i=e.target;this.value=i.value,this.filterDebounced(i.value,!0)},this.keyDownHandler=e=>{e.defaultPrevented||(e.key==="Escape"&&(this.clear(),e.preventDefault()),e.key==="Enter"&&e.preventDefault())},this.clear=()=>{this.value="",this.filterDebounced("",!0),this.setFocus()},this.items=[],this.disabled=!1,this.filteredItems=[],this.filterProps=void 0,this.placeholder=void 0,this.scale="m",this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}watchItemsHandler(){this.filterDebounced(this.value)}filterPropsHandler(){this.filterDebounced(this.value)}onMessagesChange(){}valueHandler(t){this.filterDebounced(t)}effectiveLocaleChange(){g(this,this.effectiveLocale)}async componentWillLoad(){u(this),this.updateFiltered(a(this.items??[],this.value,this.filterProps)),await v(this)}connectedCallback(){m(this),y(this)}componentDidRender(){d(this)}disconnectedCallback(){b(this),x(this),this.filterDebounced.cancel()}componentDidLoad(){f(this)}async filter(t=this.value){return new Promise(e=>{this.value=t,this.filterDebounced(t,!1,e)})}async setFocus(){var t;return await p(this),(t=this.textInput)==null?void 0:t.setFocus()}updateFiltered(t,e=!1,i){this.filteredItems=t,e&&this.calciteFilterChange.emit(),i==null||i()}render(){const{disabled:t,scale:e}=this;return s(h,{key:"c4a624e52409ed90839b506f5d99ab623767260e",disabled:t},s("div",{key:"1f2ef99156489719dd2f938bc5ce8a05185866bf",class:D.container},s("label",{key:"6fe8c6cf73f554908be38299263d23380a4ed089"},s("calcite-input",{key:"6765e00d208d6898221540769865d84aa1c64974",clearable:!0,disabled:t,icon:I.search,label:this.messages.label,messageOverrides:{clear:this.messages.clear},onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:i=>{this.textInput=i},scale:e,type:"text",value:this.value}))))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return l(this)}static get watchers(){return{items:["watchItemsHandler"],filterProps:["filterPropsHandler"],messageOverrides:["onMessagesChange"],value:["valueHandler"],effectiveLocale:["effectiveLocaleChange"]}}};z.style=w;export{z as calcite_filter};
//# sourceMappingURL=calcite-filter.entry-BWAaVr4h.js.map
