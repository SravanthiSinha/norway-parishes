import"./vec32-BSCBtxXw.js";import"./index-UqHiE_Ae.js";import{b as n}from"./sphere-iTe_0FTJ.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./boundedPlane-BbegZmSX.js";function I(t,r){return e(t)===e(r)}function e(t){if(t==null)return null;const r=t.layer!=null?t.layer.id:"";let l=null;return l=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,l==null?null:`o-${r}-${l}`}const y={json:{write:{writer:u,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:i}}}};function u(t,r){var l;((l=t==null?void 0:t.layer)==null?void 0:l.objectIdField)!=null&&t.attributes!=null&&(r.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function i(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}n();export{y as b,I as c};
//# sourceMappingURL=featureReferenceUtils-CUzzHCZf.js.map
