import{cD as I,E as w,A as k,U as E,b7 as d,c7 as P,dC as h,dD as g,dE as S,ag as x,dF as v,dy as F,dz as M,$ as O}from"./index-BLU2cKnj.js";const $={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function z(s){var u;const o=s.folders||[],e=o.slice(),r=new Map,i=new Map,f=new Map,a=new Map,c=new Map,l={esriGeometryPoint:i,esriGeometryPolyline:f,esriGeometryPolygon:a};(((u=s.featureCollection)==null?void 0:u.layers)||[]).forEach(t=>{const m=d(t);m.featureSet.features=[];const y=t.featureSet.geometryType;r.set(y,m);const p=t.layerDefinition.objectIdField;y==="esriGeometryPoint"?G(i,p,t.featureSet.features):y==="esriGeometryPolyline"?G(f,p,t.featureSet.features):y==="esriGeometryPolygon"&&G(a,p,t.featureSet.features)}),s.groundOverlays&&s.groundOverlays.forEach(t=>{c.set(t.id,t)}),o.forEach(t=>{t.networkLinkIds.forEach(m=>{const y=D(m,t.id,s.networkLinks);y&&e.push(y)})}),e.forEach(t=>{var m;if(t.featureInfos){t.points=d(r.get("esriGeometryPoint")),t.polylines=d(r.get("esriGeometryPolyline")),t.polygons=d(r.get("esriGeometryPolygon")),t.mapImages=[];for(const y of t.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const p=l[y.type].get(y.id);p&&((m=t[$[y.type]])==null||m.featureSet.features.push(p));break}case"GroundOverlay":{const p=c.get(y.id);p&&t.mapImages.push(p);break}}t.fullExtent=b([t])}});const n=b(e);return{folders:o,sublayers:e,extent:n}}function J(s,o,e,r){var a;const i=(a=w)==null?void 0:a.findCredential(s);s=I(s,{token:i==null?void 0:i.token});const f=k.kmlServiceUrl;return E(f,{query:{url:s,model:"simple",folders:"",refresh:e!==0||void 0,outSR:JSON.stringify(o)},responseType:"json",signal:r})}function L(s,o,e=null,r=[]){const i=[],f={},a=o.sublayers,c=new Set(o.folders.map(l=>l.id));return a.forEach(l=>{var u;const n=new s;if(e?n.read(l,e):n.read(l),r.length&&c.has(n.id)&&(n.visible=r.includes(n.id)),f[l.id]=n,l.parentFolderId!=null&&l.parentFolderId!==-1){const t=f[l.parentFolderId];t.sublayers||(t.sublayers=[]),(u=t.sublayers)==null||u.unshift(n)}else i.unshift(n)}),i}function G(s,o,e){e.forEach(r=>{s.set(r.attributes[o],r)})}function C(s,o){let e;return o.some(r=>r.id===s&&(e=r,!0)),e}function D(s,o,e){const r=C(s,e);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function N(s){const o=F.fromJSON(s.featureSet).features,e=s.layerDefinition,r=M(e.drawingInfo.renderer),i=O.fromJSON(s.popupInfo),f=[];for(const a of o){const c=await r.getSymbolAsync(a);a.symbol=c,a.popupTemplate=i,a.visible=!0,f.push(a)}return f}function b(s){var r,i,f,a,c,l;const o=P(h),e=P(h);for(const n of s){if((i=(r=n.polygons)==null?void 0:r.featureSet)!=null&&i.features)for(const u of n.polygons.featureSet.features)g(o,u.geometry),S(e,o);if((a=(f=n.polylines)==null?void 0:f.featureSet)!=null&&a.features)for(const u of n.polylines.featureSet.features)g(o,u.geometry),S(e,o);if((l=(c=n.points)==null?void 0:c.featureSet)!=null&&l.features)for(const u of n.points.featureSet.features)g(o,u.geometry),S(e,o);if(n.mapImages)for(const u of n.mapImages)g(o,u.extent),S(e,o)}return v(e,h)?void 0:{xmin:e[0],ymin:e[1],zmin:e[2],xmax:e[3],ymax:e[4],zmax:e[5],spatialReference:x.WGS84}}export{L as S,N as b,z as d,J as g,b as j};
//# sourceMappingURL=kmlUtils-CclMWrlZ.js.map
