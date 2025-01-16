import{fa as j,U as m,eV as p,db as l,dx as R}from"./index-D2fbPmv2.js";import{d as f}from"./featureLayerUtils-BtbQaBiM.js";import"./uuid-Cl5lrJ4c.js";function b(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t!=null&&t.returnCountOnly)?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSR&&(e.outSR=p(e.outSR)),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function F(r,t,e){const a=await y(r,t,e),o=a.data,s=o.geometryType,n=o.spatialReference,c={};for(const d of o.relatedRecordGroups){const u={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:n,hasZ:!!o.hasZ,hasM:!!o.hasM,features:d.relatedRecords};if(d.objectId!=null)c[d.objectId]=u;else for(const i of Object.keys(d))i!=="relatedRecords"&&(c[d[i]]=u)}return{...a,data:c}}async function h(r,t,e){const a=await y(r,t,e,{returnCountOnly:!0}),o=a.data,s={};for(const n of o.relatedRecordGroups)n.objectId!=null&&(s[n.objectId]=n.count);return{...a,data:s}}async function y(r,t,e={},a){const o=j({...r.query,f:"json",...a,...b(t,a)});return m(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function q(r,t,e){t=f.from(t);const a=l(r);return F(a,t,e).then(o=>{const s=o.data,n={};return Object.keys(s).forEach(c=>n[c]=R.fromJSON(s[c])),n})}async function x(r,t,e){t=f.from(t);const a=l(r);return h(a,t,{...e}).then(o=>o.data)}export{q as executeRelationshipQuery,x as executeRelationshipQueryForCount};
//# sourceMappingURL=executeRelationshipQuery-LlM-p8bR.js.map
