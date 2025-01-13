import{I as T,aE as O,cC as ee,U as x,cf as ne,Z as J,ci as te,ag as $,cD as U,ce as ie,aQ as L,s as ae,bt as se}from"./index-CRM8otC0.js";import{l as re,r as oe,o as le}from"./featureConversionUtils-Cs6pOiJO.js";import{E as ce,I as ue,N as de}from"./geojson-BIYLUbYZ.js";import{u as fe}from"./clientSideDefaults-j_kj_95r.js";import{p as me}from"./sourceUtils-B87qMFGo.js";const G=()=>ae.getLogger("esri.layers.ogc.ogcFeatureUtils"),_="startindex",ge=new Set([_,"offset"]),z="http://www.opengis.net/def/crs/",Se=`${z}OGC/1.3/CRS84`;var l;async function ve(e,n,t={},i=5){const{links:a}=e,o=g(a,"items",l.geojson)||g(a,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(o==null)throw new T("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:d,customParameters:c,signal:p}=t,f=O(o.href,e.landingPage.url),y={limit:i,...c,token:d},k=ee(f,y),D={accept:l.geojson},{data:S}=await x(k,{signal:p,headers:D}),v=Fe(k,i,S.links)??_;ce(S);const m=ue(S,{geometryType:n.geometryType}),I=n.fields||m.fields||[],W=n.hasZ!=null?n.hasZ:m.hasZ,w=m.geometryType,b=n.objectIdField||m.objectIdFieldName||"OBJECTID";let r=n.timeInfo;const N=I.find(({name:s})=>s===b);if(N)N.editable=!1,N.nullable=!1;else{if(!m.objectIdFieldType)throw new T("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");I.unshift({name:b,alias:b,type:m.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(b!==m.objectIdFieldName){const s=I.find(({name:u})=>u===m.objectIdFieldName);s&&(s.type="esriFieldTypeInteger")}I===m.fields&&m.unknownFields.length>0&&G().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:m.unknownFields}});for(const s of I){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"&&(s.editable=s.editable==null||!!s.editable,s.nullable=s.nullable==null||!!s.nullable),!s.name)throw new T("ogc-feature-layer:invalid-field-name","field name is missing",{field:s});if(!ne.jsonValues.includes(s.type))throw new T("ogc-feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s})}if(r){const s=new J(I);if(r.startTimeField){const u=s.get(r.startTimeField);u?(r.startTimeField=u.name,u.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const u=s.get(r.endTimeField);u?(r.endTimeField=u.name,u.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const u=s.get(r.trackIdField);u?r.trackIdField=u.name:(r.trackIdField=null,G().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.timeReference||(r.timeReference={timeZoneIANA:te}),r.startTimeField||r.endTimeField||(G().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=void 0)}return{drawingInfo:w?fe(w):null,extent:Ie(e),geometryType:w,fields:I,hasZ:!!W,objectIdField:b,paginationParameter:v,timeInfo:r}}async function Ne(e,n={}){const{links:t,url:i}=e,a=g(t,"data",l.json)||g(t,"http://www.opengis.net/def/rel/ogc/1.0/data",l.json);if(a==null)throw new T("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:d,signal:c}=n,p=O(a.href,i),{data:f}=await x(p,{signal:c,headers:{accept:l.json},query:{...d,token:o}});for(const y of f.collections)y.landingPage=e;return f}async function Pe(e,n={}){const{links:t,url:i}=e,a=g(t,"conformance",l.json)||g(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance",l.json);if(a==null)throw new T("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:d,signal:c}=n,p=O(a.href,i),{data:f}=await x(p,{signal:c,headers:{accept:l.json},query:{...d,token:o}});return f}async function Ce(e,n={}){const{apiKey:t,customParameters:i,signal:a}=n,{data:o}=await x(e,{signal:a,headers:{accept:l.json},query:{...i,token:t}});return o.url=e,o}async function Oe(e,n={}){const{links:t,url:i}=e,a=g(t,"service-desc",l.openapi);if(a==null)return G().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:d,signal:c}=n,p=O(a.href,i),{data:f}=await x(p,{signal:c,headers:{accept:l.openapi},query:{...d,token:o}});return f}function qe(e){const n=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),t=n==null?void 0:n.groups;if(!t)return null;const{authority:i,code:a}=t;switch(i.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return $.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return $.WGS84.wkid;default:return null}case"esri":case"epsg":{const o=Number.parseInt(a,10);return Number.isNaN(o)?null:o}default:return null}}async function Ge(e,n,t){const i=await pe(e,n,t);return re(i)}async function pe(e,n,t){const{collection:{links:i,landingPage:{url:a}},layerDefinition:o,maxRecordCount:d,queryParameters:{apiKey:c,customParameters:p},spatialReference:f,supportedCrs:y}=e,k=g(i,"items",l.geojson)||g(i,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(k==null)throw new T("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:D,num:S,start:v,timeExtent:m,where:I}=n;if(n.objectIds)throw new T("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const W=$.fromJSON(f),w=n.outSpatialReference??W,b=w.isWGS84?null:Q(w,y),r=he(D,y),N=we(m),s=be(I),u=S??(v==null?d:10),B=v===0?void 0:v,{fields:K,geometryType:q,hasZ:Z,objectIdField:P,paginationParameter:V}=o,H=O(k.href,a),{data:A}=await x(H,{...t,query:{...p,...r,crs:b,datetime:N,query:s,limit:u,[V]:B,token:c},headers:{accept:l.geojson}}),C=de(A,{geometryType:q,hasZ:Z,objectIdField:P}),X=C.length===u&&!!g(A.links??[],"next",l.geojson),E=new J(K);for(const h of C){const j={};me(E,j,h.attributes,!0);for(const M of E.fields)M.nullable&&!(M.name in j)&&(j[M.name]=null);j[P]=h.attributes[P],h.attributes=j}if(!b&&w.isWebMercator){for(const h of C)if(h.geometry!=null&&q!=null){const j=oe(h.geometry,q,Z,!1);j.spatialReference=$.WGS84,h.geometry=le(U(j,w))}}for(const h of C)h.objectId=h.attributes[P];const Y=b||!b&&w.isWebMercator?w.toJSON():ie,F=new se;return F.exceededTransferLimit=X,F.features=C,F.fields=K,F.geometryType=q,F.hasZ=Z,F.objectIdFieldName=P,F.spatialReference=Y,F}function ye(e){return e!=null&&e.type==="extent"}function Q(e,n){const{isWebMercator:t,wkid:i}=e;if(!i)return null;const a=t?n[3857]??n[102100]??n[102113]??n[900913]:n[e.wkid];return a?`${z}${a}`:null}function R(e){if(e==null)return"";const{xmin:n,ymin:t,xmax:i,ymax:a}=e;return`${n},${t},${i},${a}`}function we(e){if(e==null)return null;const{start:n,end:t}=e;return`${n!=null?n.toISOString():".."}/${t!=null?t.toISOString():".."}`}function be(e){return e!=null&&e&&e!=="1=1"?e:null}function he(e,n){if(!ye(e))return null;const{spatialReference:t}=e;if(!t||t.isWGS84)return{bbox:R(e)};const i=Q(t,n);return i!=null?{bbox:R(e),"bbox-crs":i}:t.isWebMercator?{bbox:R(U(e,$.WGS84))}:null}function Ie(e){var c;const n=(c=e.extent)==null?void 0:c.spatial;if(!n)return null;const t=n.bbox[0],i=t.length===4,[a,o]=t,d=i?void 0:t[2];return{xmin:a,ymin:o,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:d,zmax:i?void 0:t[5],spatialReference:$.WGS84.toJSON()}}function g(e,n,t){return e.find(({rel:i,type:a})=>i===n&&a===t)??e.find(({rel:i,type:a})=>i===n&&!a)}function Fe(e,n,t){var f;if(!t)return;const i=g(t,"next",l.geojson),a=(f=L(i==null?void 0:i.href))==null?void 0:f.query;if(!a)return;const o=L(e).query,d=Object.keys(o??{}),c=Object.entries(a).filter(([y])=>!d.includes(y)).find(([y,k])=>ge.has(y.toLowerCase())&&Number.parseInt(k,10)===n);return c==null?void 0:c[0]}(function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0"})(l||(l={}));export{pe as $,qe as C,Ne as N,Pe as O,Ce as P,Ge as R,z as k,Oe as q,ve as v,Se as x};
//# sourceMappingURL=ogcFeatureUtils-D6sgQBhc.js.map
