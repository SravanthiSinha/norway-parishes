import{I as c,dc as f,dd as u,de as p,U as m}from"./index-BlakZCKi.js";async function $(i,s,e,o){if(!s)throw new c("post:missing-guid","guid for version is missing");const t=f(i),r=e.toJSON(),a=u(t.query,{query:p({...r,f:"json"}),...o,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:n}=await m(d,a);return n}export{$ as deleteForwardEdits};
//# sourceMappingURL=deleteForwardEdits-CMB4BEB-.js.map
