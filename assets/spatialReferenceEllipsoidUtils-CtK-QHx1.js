import{ag as a,bW as k,bX as b,bY as u,bZ as $,b_ as r,b$ as f}from"./index-BfLS464G.js";const g=new a(k),n=new a(b),e=new a(u),d=new a($);function W(t){const w=c.get(t);if(w)return w;let s=g;if(t)if(t===n)s=n;else if(t===e)s=e;else{const o=t.wkid,p=t.latestWkid;if(o!=null||p!=null)r(o)||r(p)?s=n:(f(o)||f(p))&&(s=e);else{const i=t.wkt2??t.wkt;if(i){const l=i.toUpperCase();l===m?s=n:l===C&&(s=e)}}}return c.set(t,s),s}const c=new Map,m=n.wkt.toUpperCase(),C=e.wkt.toUpperCase();export{W as a,d as w};
//# sourceMappingURL=spatialReferenceEllipsoidUtils-CtK-QHx1.js.map
