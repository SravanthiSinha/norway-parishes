import{ag as a,bY as k,bZ as l,b_ as r,b$ as u,c0 as b,c1 as $}from"./index-BlakZCKi.js";const g=new a($),n=new a(u),e=new a(b),d=new a(k);function x(t){const w=f.get(t);if(w)return w;let s=g;if(t)if(t===n)s=n;else if(t===e)s=e;else{const o=t.wkid,p=t.latestWkid;if(o!=null||p!=null)l(o)||l(p)?s=n:(r(o)||r(p))&&(s=e);else{const c=t.wkt2??t.wkt;if(c){const i=c.toUpperCase();i===m?s=n:i===C&&(s=e)}}}return f.set(t,s),s}const f=new Map,m=n.wkt.toUpperCase(),C=e.wkt.toUpperCase();export{x as a,d as w};
//# sourceMappingURL=spatialReferenceEllipsoidUtils-C9F7FEe0.js.map
