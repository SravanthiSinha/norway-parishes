import{m as F,n as T,a as g}from"./TimeOnly-D5fo4Gru.js";import{R as G,aZ as S,a_ as O}from"./index-DhfeYpQB.js";var d,m;function D(e){return G.fromJSON(e.toJSON())}function N(e){return e.toJSON?e.toJSON():e}function P(e){return e instanceof Date}function w(e){return e instanceof S}function x(e){return e instanceof F}function k(e){return e instanceof T}function J(e){return e instanceof g}function E(e){if(e==null)return null;if(typeof e=="number")return e;switch(e.toLowerCase()){case"meters":case"meter":return 109404;case"miles":case"mile":return 109439;case"kilometers":case"kilometer":case"km":return 109414}return null}function B(e){if(e==null)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new O({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function L(e){if(e==null)return null;if(typeof e=="number"||typeof e=="number")return e;switch(e.toLowerCase()){case"meters":case"meter":return 9001;case"miles":case"mile":return 9093;case"kilometers":case"kilometer":case"km":return 9036}return null}(function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated"})(d||(d={})),function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(m||(m={}));const h=1e3,M={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},R={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},j={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate","date-only":"esriFieldTypeDateOnly","time-only":"esriFieldTypeTimeOnly","timestamp-offset":"esriFieldTypeTimestampOffset",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"esriFieldTypeXML","big-integer":"esriFieldTypeBigInteger",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeDateOnly:"esriFieldTypeDateOnly",esriFieldTypeTimeOnly:"esriFieldTypeTimeOnly",esriFieldTypeTimestampOffset:"esriFieldTypeTimestampOffset",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"esriFieldTypeXML",esriFieldTypeBigInteger:"esriFieldTypeBigInteger"};function U(e){return e===void 0?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function _(e,n){n||(n={}),typeof n=="function"&&(n={cmp:n});const f=typeof n.cycles=="boolean"&&n.cycles,o=n.cmp&&(p=n.cmp,function(l){return function(i,t){const r={key:i,value:l[i]},y={key:t,value:l[t]};return p(r,y)}});var p;const s=[];return function l(i){if(i!=null&&i.toJSON&&typeof i.toJSON=="function"&&(i=i.toJSON()),i===void 0)return;if(typeof i=="number")return isFinite(i)?""+i:"null";if(typeof i!="object")return JSON.stringify(i);let t,r;if(Array.isArray(i)){for(r="[",t=0;t<i.length;t++)t&&(r+=","),r+=l(i[t])||"null";return r+"]"}if(i===null)return"null";if(s.includes(i)){if(f)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const y=s.push(i)-1,a=Object.keys(i).sort(o==null?void 0:o(i));for(r="",t=0;t<a.length;t++){const u=a[t],c=l(i[u]);c&&(r&&(r+=","),r+=JSON.stringify(u)+":"+c)}return s.splice(y,1),"{"+r+"}"}(e)}function v(e){switch(e.type){case"catalog":case"csv":case"feature":case"geojson":case"oriented-imagery":case"subtype-group":case"wfs":return!0;default:return!1}}function $(e){switch(e.type){case"catalog-footprint":case"subtype-sublayer":return!0;default:return v(e)}}export{h as D,j as E,J as F,_ as J,v as M,M as N,E as O,k as T,L as b,w as d,P as f,x as g,$ as j,U as k,d as l,m as s,N as u,B as v,R as w,D as y};
//# sourceMappingURL=shared-Do6adK9s.js.map
