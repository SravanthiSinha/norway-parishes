import{I as c,db as f,dc as u,dd as p,U as m}from"./index-oLM2nnvm.js";async function $(i,s,o,e){if(!s)throw new c("post:missing-guid","guid for version is missing");const t=f(i),r=o.toJSON(),a=u(t.query,{query:p({...r,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:n}=await m(d,a);return n}export{$ as deleteForwardEdits};
//# sourceMappingURL=deleteForwardEdits-DVDY01BG.js.map
