import{aQ as c,d6 as f,fa as y,U as S,bA as l,eX as o,cm as m,a9 as R,gO as g,db as p,dx as d}from"./index-oLM2nnvm.js";function O(a){const t=a.geometry,n=a.toJSON(),e=n;let s,r,i;return t!=null&&(r=t.spatialReference,i=o(r),e.geometryType=m(t),e.geometry=JSON.stringify(t),e.inSR=i),n.outSR?(e.outSR=o(n.outSR),s=a.outSpatialReference):t&&(e.outSR=e.inSR,s=r),e.bin&&(e.bin=JSON.stringify(e.bin)),e.quantizationParameters&&(e.quantizationParameters=JSON.stringify(e.quantizationParameters)),e.outStatistics&&(e.outStatistics=JSON.stringify(e.outStatistics)),e.outTimeReference&&(e.outTimeReference=JSON.stringify(e.outTimeReference)),a.defaultSpatialReference&&R(r,s)&&(e.defaultSR=e.inSR,delete e.inSR,delete e.outSR),e}async function J(a,t,n){return N(a,t,n)}async function N(a,t,n={}){const e=typeof a=="string"?c(a):a,s=t.geometry?[t.geometry]:[],r=await f(s,null,{signal:n.signal}),i=r==null?void 0:r[0];i!=null&&((t=t.clone()).geometry=i);const u=y({...e.query,f:"json",...O(t)});return S(l(e.path,"queryBins"),{...n,query:{...u,...n.query}})}async function b(a,t,n){const{data:e}=await J(p(a),g.from(t),n);return d.fromJSON(e)}export{b as executeBinsQuery};
//# sourceMappingURL=executeBinsQuery-yRMypVKC.js.map
