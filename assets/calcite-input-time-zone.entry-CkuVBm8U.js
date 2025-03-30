const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/time-zones-2baacc2d-ymzAOVTt.js","assets/index-p4VH55K1-b928be86-CGe-ptQF.js","assets/index-caa4a8e0-C9Rihsl5.js","assets/index-24ae0bc4-Dnm3teax.js","assets/region-ffaa69eb-4ZC4bVZm.js","assets/index-50eeb4c2-CIKg-tFz.js"])))=>i.map(i=>d[i]);
import{r as M,c as T,h as f,H as R,g as z,_ as g}from"./index-BMHxxDIj.js";import{c as V,d as k}from"./label-043ae25a-B6VETYma.js";import{u as N,I as U}from"./interactive-1a42577a-v3AQ27C4.js";import{c as A,d as H,e as W}from"./locale-60f8ca58-DT4qVxFx.js";import{u as G,c as $,d as j,s as q}from"./t9n-75defee3-Dv7VzJ6p.js";import{c as K,s as J,a as Q}from"./loadable-13e9ffb2-BgdRts-S.js";import{c as X,d as Y,a as ee,H as te}from"./form-8ec29459-rgn4Gq80.js";import"./dom-b6dedd88-DEs0su4c.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./component-5f0a8be8-6CIDVndn.js";import"./key-3ee05994-D63ExP77.js";import"./observers-9c166451-B1eE7w7i.js";const oe={offset:"offset"},se=60;function L(e){return e.replace(":15",".25").replace(":30",".5").replace(":45",".75").replace("−","-")}function ne(e,t){const o=_(e,"en-US",t).replace("GMT","");return o===""?0:Number(L(o))*se}function ie(){return new Date().getTimezoneOffset()*-1}function ae(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}async function le(e){if(e==="offset")return o=>o;const{normalize:t}=await g(async()=>{const{normalize:o}=await import("./time-zones-2baacc2d-ymzAOVTt.js");return{normalize:o}},__vite__mapDeps([0,1]));return t}async function re(e,t,o,l,i){if(o==="name"){const{groupByName:n}=await g(async()=>{const{groupByName:s}=await import("./index-caa4a8e0-C9Rihsl5.js");return{groupByName:s}},__vite__mapDeps([2,0,1]));return(await n()).map(({label:s})=>({label:v(s),value:s,metadata:{filterValue:s}})).filter(s=>!!s).sort()}const r=i==="user"?e:i==="utc"?"fr":"en-GB",p=l.getTime();if(o==="region"){const[{groupByRegion:n},{getCountry:c,global:s}]=await Promise.all([g(()=>import("./index-24ae0bc4-Dnm3teax.js"),__vite__mapDeps([3,0,1,4])),g(()=>import("./region-ffaa69eb-4ZC4bVZm.js"),__vite__mapDeps([4,1]))]);return(await n()).map(({label:m,tzs:u})=>(u.sort((d,h)=>{const Z=C(d,t),y=C(h,t),b="Etc/GMT";if(d.startsWith(b)&&h.startsWith(b)){const I=d.substring(b.length),w=h.substring(b.length),B=I===""?0:parseInt(I);return(w===""?0:parseInt(w))-B}return Z.localeCompare(y)}),{label:O(t,m),items:u.map(d=>{const h=L(_(d,r,p)),Z=C(d,t),y=m===s?`${C(s,t)} Etc`:v(d),b=c(d),I=O(t,b);return{label:Z,value:d,metadata:{country:I===Z?void 0:I,filterValue:y,offset:h}}})})).sort((m,u)=>m.label===s?-1:u.label===s?1:m.label.localeCompare(u.label))}const[{groupByOffset:E},{DateEngine:S}]=await Promise.all([g(()=>import("./index-50eeb4c2-CIKg-tFz.js"),__vite__mapDeps([5,0,1,4])),g(()=>import("./index-1a7f19ef-C0Fc86X9.js"),[])]),x=await E({dateEngine:new S,groupDateRange:1,startDate:new Date(p).toISOString()}),F=new Intl.ListFormat(e,{style:"long",type:"conjunction"}),D=["Factory","Etc/UTC"];return x.forEach(n=>{const c=[];let s=0;n.tzs.forEach((a,m)=>{D.includes(a)&&s++,c[m]=s}),n.tzs=n.tzs.filter(a=>!D.includes(a)),n.labelTzIdx=n.labelTzIdx.map(a=>a-c[a]).filter(a=>a>=0&&a<n.tzs.length)}),x.map(({labelTzIdx:n,tzs:c})=>{const s=c[0],a=L(_(s,r,p)),m=ne(s,p),u=n.map(h=>C(c[h],t));return{label:de(t,a,F.format(u)),value:m,metadata:{filterValue:c.map(h=>v(h))}}}).filter(n=>!!n).sort((n,c)=>n.value-c.value)}function C(e,t){return t[e]||me(e)}function ce(e,t,o){return o.timeZoneRegionLabel.replace("{city}",e).replace("{country}",O(o,t))}function O(e,t){return e[t]||t}function me(e){return e.split("/").pop()}function v(e){return e.replace(/_/g," ")}function de(e,t,o){return e.timeZoneLabel.replace("{offset}",t).replace("{cities}",o)}function _(e,t,o=Date.now()){return W(t,{timeZone:e,timeZoneName:"shortOffset"}).formatToParts(o).find(({type:r})=>r==="timeZoneName").value}function he(e){return e.items!==void 0}function fe(e){return he(e[0])?e.flatMap(t=>t.items):e}function P(e,t,o){return o==null?null:fe(e).find(l=>l[t]==o)}const ue=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}.offset{white-space:nowrap}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}",pe=ue,be=class{constructor(e){M(this,e),this.calciteInputTimeZoneBeforeClose=T(this,"calciteInputTimeZoneBeforeClose",6),this.calciteInputTimeZoneBeforeOpen=T(this,"calciteInputTimeZoneBeforeOpen",6),this.calciteInputTimeZoneChange=T(this,"calciteInputTimeZoneChange",6),this.calciteInputTimeZoneClose=T(this,"calciteInputTimeZoneClose",6),this.calciteInputTimeZoneOpen=T(this,"calciteInputTimeZoneOpen",6),this.setComboboxRef=t=>{this.comboboxEl=t},this.onComboboxBeforeClose=t=>{t.stopPropagation(),this.overrideSelectedLabelForRegion(!1),this.calciteInputTimeZoneBeforeClose.emit()},this.onComboboxBeforeOpen=t=>{t.stopPropagation(),this.overrideSelectedLabelForRegion(!0),this.calciteInputTimeZoneBeforeOpen.emit()},this.onComboboxChange=t=>{t.stopPropagation();const l=t.target.selectedItems[0];if(!l){this.value=null,this.selectedTimeZoneItem=null,this.calciteInputTimeZoneChange.emit();return}const i=this.findTimeZoneItemByLabel(l.getAttribute("data-label")),r=`${i.value}`;this.value===r&&i.label===this.selectedTimeZoneItem.label||(this.value=r,this.selectedTimeZoneItem=i,this.calciteInputTimeZoneChange.emit())},this.onComboboxClose=t=>{t.stopPropagation(),this.open=!1,this.calciteInputTimeZoneClose.emit()},this.onComboboxOpen=t=>{this.open=!0,t.stopPropagation(),this.calciteInputTimeZoneOpen.emit()},this.clearable=!1,this.disabled=!1,this.form=void 0,this.maxItems=0,this.messages=void 0,this.messageOverrides=void 0,this.mode="offset",this.offsetStyle="user",this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.open=!1,this.overlayPositioning="absolute",this.referenceDate=void 0,this.required=!1,this.scale="m",this.status="idle",this.value=void 0,this.readOnly=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}handleTimeZoneItemPropsChange(){this.timeZoneItems&&(this.updateTimeZoneItems(),this.updateTimeZoneSelection())}openChanged(){this.comboboxEl.open=this.open}handleValueChange(e,t){if(e=this.normalizeValue(e),!e){if(this.clearable){this.value=e,this.selectedTimeZoneItem=null;return}this.value=t,this.selectedTimeZoneItem=this.findTimeZoneItem(t);return}const o=this.findTimeZoneItem(e);if(!o){this.value=t;return}this.selectedTimeZoneItem=o}async setFocus(){await K(this),await this.comboboxEl.setFocus()}effectiveLocaleWatcher(){G(this,this.effectiveLocale)}onLabelClick(){this.setFocus()}overrideSelectedLabelForRegion(e){if(this.mode!=="region"||!this.selectedTimeZoneItem)return;const{label:t,metadata:o}=this.selectedTimeZoneItem;this.comboboxEl.selectedItems[0].textLabel=!o.country||e?t:ce(t,o.country,this.messages)}findTimeZoneItem(e){return P(this.timeZoneItems,"value",e)}findTimeZoneItemByLabel(e){return P(this.timeZoneItems,"label",e)}async updateTimeZoneItems(){this.timeZoneItems=await this.createTimeZoneItems()}async updateTimeZoneSelection(){if(this.value===""&&this.clearable){this.selectedTimeZoneItem=null;return}const e=this.mode==="offset"?ie():ae(),t=this.value??e;this.selectedTimeZoneItem=this.findTimeZoneItem(t)||this.findTimeZoneItem(e)}async createTimeZoneItems(){return!this.effectiveLocale||!this.messages?[]:re(this.effectiveLocale,this.messages,this.mode,this.referenceDate instanceof Date?this.referenceDate:new Date(this.referenceDate??Date.now()),this.offsetStyle)}connectedCallback(){X(this),V(this),A(this),$(this)}disconnectedCallback(){Y(this),k(this),H(this),j(this)}normalizeValue(e){return e=e===null?"":e,e&&this.normalizer(e)}async componentWillLoad(){J(this);const[,e]=await Promise.all([q(this),le(this.mode)]);this.normalizer=e,await this.updateTimeZoneItems(),this.value=this.normalizeValue(this.value),await this.updateTimeZoneSelection();const t=this.selectedTimeZoneItem?`${this.selectedTimeZoneItem.value}`:null;ee(this,t),this.value=t}componentDidLoad(){Q(this),this.openChanged()}componentDidRender(){N(this),this.overrideSelectedLabelForRegion(this.open)}render(){return f(R,{key:"b94fb2d93cdcaf0c44bbd2a0c7deaf59701078bf"},f(U,{key:"45246bbab441e9daf0e372832e74d7660039c770",disabled:this.disabled},f("calcite-combobox",{key:"294e44d8ab01079651c417f7808348e584f135b7",clearDisabled:!this.clearable,disabled:this.disabled,label:this.messages.chooseTimeZone,lang:this.effectiveLocale,maxItems:this.maxItems,onCalciteComboboxBeforeClose:this.onComboboxBeforeClose,onCalciteComboboxBeforeOpen:this.onComboboxBeforeOpen,onCalciteComboboxChange:this.onComboboxChange,onCalciteComboboxClose:this.onComboboxClose,onCalciteComboboxOpen:this.onComboboxOpen,overlayPositioning:this.overlayPositioning,placeholder:this.mode==="name"?this.messages.namePlaceholder:this.mode==="offset"?this.messages.offsetPlaceholder:this.messages.regionPlaceholder,placeholderIcon:"search",readOnly:this.readOnly,ref:this.setComboboxRef,scale:this.scale,selectionMode:this.clearable?"single":"single-persist",status:this.status,"validation-icon":this.validationIcon,"validation-message":this.validationMessage},this.renderItems()),f(te,{key:"0b7a0694166f1d5b36b780d3436dad15d466bc3c",component:this})))}renderItems(){return this.mode==="region"?this.renderRegionItems():this.timeZoneItems.map(e=>{const t=this.selectedTimeZoneItem===e,{label:o,metadata:l,value:i}=e;return f("calcite-combobox-item",{"data-label":o,key:o,metadata:l,selected:t,textLabel:o,value:i})})}renderRegionItems(){return this.timeZoneItems.flatMap(({label:e,items:t})=>f("calcite-combobox-item-group",{key:e,label:e},t.map(o=>{const l=this.selectedTimeZoneItem===o,{label:i,metadata:r,value:p}=o;return f("calcite-combobox-item",{"data-label":i,description:r.country,key:i,metadata:r,selected:l,textLabel:i,value:p},f("span",{class:oe.offset,slot:"content-end"},r.offset))})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return z(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],messages:["handleTimeZoneItemPropsChange"],mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],open:["openChanged"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleWatcher"]}}};be.style=pe;export{be as calcite_input_time_zone};
//# sourceMappingURL=calcite-input-time-zone.entry-CkuVBm8U.js.map
