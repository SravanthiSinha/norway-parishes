import{$ as u,a0 as f,a1 as m,a2 as p,a3 as b,a4 as g,a5 as F,a6 as d,a7 as y}from"./index-BLU2cKnj.js";function B({displayField:e,editFieldsInfo:i,fields:t,objectIdField:a,title:s},l){if(!t)return null;const r=L({editFieldsInfo:i,fields:t,objectIdField:a},l);if(!r.length)return null;const o=S({titleBase:s,fields:t,displayField:e}),n=N();return new u({title:o,content:n,fieldInfos:r})}function D(e){var n;const{title:i,graphic:t}=e??{},{attributes:a,sourceLayer:s}=t??{},l=s&&"displayField"in s?s.displayField:null,r=l?a==null?void 0:a[l]:null,o=(n=t==null?void 0:t.getObjectId())==null?void 0:n.toString();return i||r||o||""}const w=(e,i)=>i.visibleFieldNames?i.visibleFieldNames.has(e.name):m(e,i);function v({fields:e,ignoreFieldTypes:i,sortDisabled:t}){const a=e;return i&&(e=e.filter(s=>!i.includes(s.type))),e===a&&(e=e.slice()),t!==!0&&e.sort(I),e}function I(e,i){return e.type==="oid"?-1:i.type==="oid"?1:c(e)?-1:c(i)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((i.alias||i.name).toLocaleLowerCase())}function L(e,i){const t=i==null?void 0:i.visibleFieldNames;return v({fields:e.fields??[],ignoreFieldTypes:(i==null?void 0:i.ignoreFieldTypes)||h,sortDisabled:i==null?void 0:i.sortDisabled}).map(a=>new f({fieldName:a.name,isEditable:p(a,e),label:a.alias,format:C(a),visible:w(a,{...e,visibleFieldNames:t})}))}function C(e){switch(e.type){case"small-integer":case"integer":case"single":return new d({digitSeparator:!0,places:0});case"double":return new d({digitSeparator:!0,places:2});case"string":return y(e.name)?new d({digitSeparator:!0,places:0}):void 0;default:return}}function N(){return[new g,new F]}function S(e){const i=b(e),{titleBase:t}=e;return i?`${t}: {${i.trim()}}`:t??""}function c(e){var t;return(e.name&&e.name.toLowerCase())==="name"?!0:((t=e.alias)==null?void 0:t.toLowerCase())==="name"}const h=["geometry","blob","raster","guid","xml"];export{D as c,B as p};
//# sourceMappingURL=popupUtils-w3qsOQ3p.js.map
