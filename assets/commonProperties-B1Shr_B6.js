import{j as n,m as i,k as u,P as D,k3 as F,bd as O,o as C,u as G,b7 as B,k4 as T,gz as J,gL as P,aX as E,ag as L}from"./index-j6yFHuRy.js";const o=(e=>e)(["operational-layers","basemap","ground"]);let y=class extends D{constructor(t){super(t),this.description=null,this.label=null,this.type=null}};n([i({type:String,json:{write:!0}})],y.prototype,"description",void 0),n([i({type:String,json:{write:!0}})],y.prototype,"label",void 0),n([i()],y.prototype,"type",void 0),y=n([u("esri.tables.elements.AttributeTableElement")],y);const d=y;var f;let c=f=class extends d{constructor(e){super(e),this.displayType="auto",this.type="attachment"}clone(){return new f({description:this.description,displayType:this.displayType,label:this.label})}};n([i({type:["auto"],json:{write:!0}})],c.prototype,"displayType",void 0),n([i({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=f=n([u("esri.tables.elements.AttributeTableAttachmentElement")],c);const I=c;var g;let m=g=class extends d{constructor(e){super(e),this.fieldName=null,this.type="field"}clone(){return new g({description:this.description,fieldName:this.fieldName,label:this.label})}};n([i({type:String,json:{write:!0}})],m.prototype,"fieldName",void 0),n([i({type:String,json:{read:!1,write:!0}})],m.prototype,"type",void 0),m=g=n([u("esri.tables.elements.AttributeTableFieldElement")],m);const N=m;var v;let b=v=class extends d{constructor(e){super(e),this.relationshipId=null,this.type="relationship"}clone(){return new v({description:this.description,label:this.label,relationshipId:this.relationshipId})}};n([i({type:Number,json:{write:!0}})],b.prototype,"relationshipId",void 0),n([i({type:["relationship"],json:{read:!1,write:!0}})],b.prototype,"type",void 0),b=v=n([u("esri.tables.elements.AttributeTableRelationshipElement")],b);const S=b;function W(e){return{typesWithGroup:{base:d,key:"type",typeMap:{attachment:I,field:N,group:e,relationship:S}},typesWithoutGroup:{base:d,key:"type",typeMap:{attachment:I,field:N,relationship:S}}}}function A(e,t,r=!0){if(!e)return null;const s=r?t.typesWithGroup.typeMap:t.typesWithoutGroup.typeMap;return e.filter(l=>s[l.type]).map(l=>s[l.type].fromJSON(l))}function R(e,t,r=!0){if(!e)return null;const s=r?t.typesWithGroup.typeMap:t.typesWithoutGroup.typeMap;return e.filter(l=>s[l.type]).map(l=>l.toJSON())}function M(e,t,r=!0){return e?e.map(s=>F(r?t.typesWithGroup:t.typesWithoutGroup,s)):null}var j;let a=j=class extends d{constructor(e){super(e),this.elements=null,this.type="group"}castElements(e){return M(e,w,!1)}readElements(e,t){return A(t.attributeTableElements,w,!1)}writeElements(e,t){t.attributeTableElements=R(e,w,!1)}clone(){return new j({description:this.description,elements:B(this.elements),label:this.label})}};n([i({json:{write:!0}})],a.prototype,"elements",void 0),n([O("elements")],a.prototype,"castElements",null),n([C("elements",["attributeTableElements"])],a.prototype,"readElements",null),n([G("elements")],a.prototype,"writeElements",null),n([i({type:String,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=j=n([u("esri.tables.elements.AttributeTableGroupElement")],a);const w=W(a),z=a;var $;const h=W(z);let p=$=class extends D{constructor(e){super(e),this.elements=null,this.orderByFields=null}castElements(e){return M(e,h)}readElements(e,t){return A(t.attributeTableElements,h)}writeElements(e,t){t.attributeTableElements=R(e,h)}clone(){return new $({elements:B(this.elements),orderByFields:this.orderByFields})}};n([i({json:{write:!0}})],p.prototype,"elements",void 0),n([O("elements")],p.prototype,"castElements",null),n([C("elements",["attributeTableElements"])],p.prototype,"readElements",null),n([G("elements")],p.prototype,"writeElements",null),n([i({type:[Object],json:{write:!0}})],p.prototype,"orderByFields",void 0),p=$=n([u("esri.tables.AttributeTableTemplate")],p);const q=p,K={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:o}}},Q={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},U={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:o}}},V={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:J}}},Y={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:o}}},Z={value:null,type:P,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:o}}};function _(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const k={write:{enabled:!0,layerContainerTypes:o},read:!0},x={type:Number,json:{origins:{"web-document":k,"portal-item":{write:!0}}}},ee={...x,json:{...x.json,origins:{"web-document":{...k,write:{enabled:!0,layerContainerTypes:o,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>{var s;return r&&r.origin!=="service"||!t.drawingInfo||t.drawingInfo.transparency===void 0?(s=t.layerDefinition)!=null&&s.drawingInfo&&t.layerDefinition.drawingInfo.transparency!==void 0?T(t.layerDefinition.drawingInfo.transparency):void 0:T(t.drawingInfo.transparency)}}}},te={type:E,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=E.fromJSON(e);return t.spatialReference!=null&&typeof t.spatialReference=="object"&&(r.spatialReference=L.fromJSON(t.spatialReference)),r}}}},read:!1}},ne={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},re={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:o}}},name:"layerDefinition.minScale",write:!0}},ie={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:o}}},name:"layerDefinition.maxScale",write:!0}},se={json:{write:{ignoreOrigin:!0,layerContainerTypes:o},origins:{"web-map":{read:!1,write:!1}}}},ae={type:q,json:{name:"attributeTableInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}};export{se as I,ae as T,o as a,ee as b,Z as c,Y as d,q as e,x as f,te as g,re as j,Q as l,_ as m,U as p,K as s,ne as u,ie as v,V as y};
//# sourceMappingURL=commonProperties-B1Shr_B6.js.map
