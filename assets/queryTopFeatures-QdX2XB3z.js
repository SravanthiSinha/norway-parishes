import{fb as p,aQ as m,d6 as F,fa as f,U as E,bi as x,cm as j,eV as a}from"./index-CyZqSx7I.js";const c="Layer does not support extent calculation.";function O(o,e){var l,y;const r=o.geometry,t=o.toJSON(),n=t;if(r!=null&&(n.geometry=JSON.stringify(r),n.geometryType=j(r),n.inSR=a(r.spatialReference)),(l=t.topFilter)!=null&&l.groupByFields&&(n.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(y=t.topFilter)!=null&&y.orderByFields&&(n.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(n.topFilter=JSON.stringify(n.topFilter)),t.objectIds&&(n.objectIds=t.objectIds.join(",")),t.orderByFields&&(n.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?n.outFields="*":n.outFields=t.outFields.join(","):delete n.outFields,t.outSR?n.outSR=a(t.outSR):r&&t.returnGeometry&&(n.outSR=n.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const u=t.timeExtent,{start:s,end:i}=u;s==null&&i==null||(n.time=s===i?s:`${s??"null"},${i??"null"}`),delete t.timeExtent}return n}async function B(o,e,r,t){const n=await d(o,e,"json",t);return p(e,r,n.data),n}async function S(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",r,{returnIdsOnly:!0})}async function I(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(c);if(n.hasOwnProperty("count"))throw new Error(c);return t})}function R(o,e,r){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,r,t={},n={}){const l=typeof o=="string"?m(o):o,y=e.geometry?[e.geometry]:[];return t.responseType="json",F(y,null,t).then(u=>{const s=u==null?void 0:u[0];s!=null&&((e=e.clone()).geometry=s);const i=f({...l.query,f:r,...n,...O(e,n)});return E(x(l.path,"queryTopFeatures"),{...t,query:{...i,...t.query}})})}export{R as c,I as d,S as m,B as p};
//# sourceMappingURL=queryTopFeatures-QdX2XB3z.js.map
