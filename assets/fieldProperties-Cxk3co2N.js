import{R as n,T as l,s as r,Z as o,V as d}from"./index-Cj37dcSI.js";function u(){return{fields:{type:[n],value:null,set:function(e){if(e&&l("big-integer-warning-enabled")){const i=e.filter(t=>t.type==="big-integer"||t.type==="oid"&&(t.length||0)>=8);if(i.length){const t=i.map(s=>`'${s.name}'`).join(", ");r.getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${t}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",e)}},fieldsIndex:{readOnly:!0,get(){return o.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var i;const e=this._userOutFields;if(!(e!=null&&e.length))return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e)((i=this.fieldsIndex)==null?void 0:i.has(t))||r.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e});return d(this.fieldsIndex,e)}}}}export{u as s};
//# sourceMappingURL=fieldProperties-Cxk3co2N.js.map
