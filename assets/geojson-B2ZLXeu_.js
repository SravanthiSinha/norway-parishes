import{t as I}from"./date-DLgTylpo.js";import{I as m,ck as O,cl as F,cm as $,bp as N,bl as C}from"./index-Bs-G_wsu.js";const E={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function w(t){return E[t]}function*k(t){switch(t.type){case"Feature":yield t;break;case"FeatureCollection":for(const n of t.features)n&&(yield n)}}function*x(t){if(t)switch(t.type){case"Point":yield t.coordinates;break;case"LineString":case"MultiPoint":yield*t.coordinates;break;case"MultiLineString":case"Polygon":for(const n of t.coordinates)yield*n;break;case"MultiPolygon":for(const n of t.coordinates)for(const o of n)yield*o}}function*D(t,n={}){const{geometryType:o,objectIdField:e}=n;for(const r of t){const{geometry:c,properties:p,id:i}=r;if(c&&w(c.type)!==o)continue;const f=p||{};let u;e&&(u=f[e],i==null||u||(f[e]=u=i)),yield new N(c?A(new C,c,n):null,f,null,u??void 0)}}function J(t){for(const n of t)if(n.length>2)return!0;return!1}function R(t){return!j(t)}function v(t){return j(t)}function j(t){let n=0;for(let o=0;o<t.length;o++){const e=t[o],r=t[(o+1)%t.length];n+=e[0]*r[1]-r[0]*e[1]}return n<=0}function G(t){const n=t[0],o=t[t.length-1];return n[0]===o[0]&&n[1]===o[1]&&n[2]===o[2]||t.push(n),t}function A(t,n,o){switch(n.type){case"LineString":return Z(t,n,o);case"MultiLineString":return H(t,n,o);case"MultiPoint":return q(t,n,o);case"MultiPolygon":return z(t,n,o);case"Point":return B(t,n,o);case"Polygon":return K(t,n,o)}}function Z(t,n,o){return d(t,n.coordinates,o),t}function H(t,n,o){for(const e of n.coordinates)d(t,e,o);return t}function q(t,n,o){return d(t,n.coordinates,o),t}function z(t,n,o){for(const e of n.coordinates){M(t,e[0],o);for(let r=1;r<e.length;r++)T(t,e[r],o)}return t}function B(t,n,o){return P(t,n.coordinates,o),t}function K(t,n,o){const e=n.coordinates;M(t,e[0],o);for(let r=1;r<e.length;r++)T(t,e[r],o);return t}function M(t,n,o){const e=G(n);R(e)?L(t,e,o):d(t,e,o)}function T(t,n,o){const e=G(n);v(e)?L(t,e,o):d(t,e,o)}function d(t,n,o){for(const e of n)P(t,e,o);t.lengths.push(n.length)}function L(t,n,o){for(let e=n.length-1;e>=0;e--)P(t,n[e],o);t.lengths.push(n.length)}function P(t,n,o){const[e,r,c]=n;t.coords.push(e,r),o.hasZ&&t.coords.push(c||0)}function Q(t){switch(typeof t){case"string":return I(t)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function W(t,n=4326){if(!t)throw new m("geojson-layer:empty","GeoJSON data is empty");if(t.type!=="Feature"&&t.type!=="FeatureCollection")throw new m("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:o}=t;if(!o)return;const e=typeof o=="string"?o:o.type==="name"?o.properties.name:o.type==="EPSG"?o.properties.code:null,r=O({wkid:n})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${n})$`,"i");if(!e||!r.test(e))throw new m("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:o})}function X(t,n={}){const o=[],e=new Set,r=new Set;let c,p=!1,i=null,f=!1,{geometryType:u=null}=n;for(const y of k(t)){const{geometry:h,properties:l,id:a}=y;if((!h||(u||(u=w(h.type)),w(h.type)===u))&&(p||(p=J(x(h))),f||(f=a!=null,f&&(c=typeof a,l&&(i=Object.keys(l).filter(s=>l[s]===a)))),l&&i&&f&&a!=null&&(i.length>1?i=i.filter(s=>l[s]===a):i.length===1&&(i=l[i[0]]===a?i:[])),l))for(const s in l){if(e.has(s))continue;const b=Q(l[s]);if(b==="unknown"){r.add(s);continue}r.delete(s),e.add(s);const S=F(s);S&&o.push({name:S,alias:s,type:b})}}const g=F((i==null?void 0:i.length)===1&&i[0]||null)??void 0;if(g){for(const y of o)if(y.name===g&&$(y)){y.type="esriFieldTypeOID";break}}return{fields:o,geometryType:u,hasZ:p,objectIdFieldName:g,objectIdFieldType:c,unknownFields:Array.from(r)}}function Y(t,n){return Array.from(D(k(t),n))}export{W as E,X as I,Y as N,w as u};
