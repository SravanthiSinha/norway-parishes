import{A as s,I as l,G as c}from"./index-5zHX_dwk.js";import{p as g,n as m}from"./project-Bt62Nk0Y.js";async function u(e=null,o){var n,i;if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!e)throw new l("internal:geometry-service-url-not-configured");let r;r="portal"in e?e.portal||c.getDefault():e,await r.load({signal:o});const t=(i=(n=r.helperServices)==null?void 0:n.geometry)==null?void 0:i.url;if(!t)throw new l("internal:geometry-service-url-not-configured");return t}async function p(e,o,r=null,t){const n=await u(r,t),i=new g({geometries:[e],outSpatialReference:o}),a=await m(n,i,{signal:t});if(a&&Array.isArray(a)&&a.length===1)return a[0];throw new l("internal:geometry-service-projection-failed")}export{u as getGeometryServiceURL,p as projectGeometry};
//# sourceMappingURL=geometryServiceUtils-BHtVh6zA.js.map
