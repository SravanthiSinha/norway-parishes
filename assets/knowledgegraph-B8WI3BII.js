const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/knowledgeGraphService-BqqaalZS.js","assets/index-D2fbPmv2.js","assets/index-Jib82o7I.css","assets/Relationship-2iXrSB1L.js"])))=>i.map(i=>d[i]);
import{G as I,_ as G,A as J,cE as Q,cF as V,ai as j,ag as P,S as K,f6 as T,af as M,f7 as B}from"./index-D2fbPmv2.js";import{t as C,N as W}from"./arcadeUtils-Dm32ZCon.js";import{i as b,a as u,r as f,d as E,P as y,$ as L,Y as O,E as _,B as z,z as A,k,t as U,g as Y,T as Z,Z as F,_ as H}from"./languageUtils-DmVBKIpU.js";import{l as X}from"./portalUtils-tAXoMvGt.js";import{p as $,n as tt}from"./project-CM04MxmI.js";import{s as nt,m as et,t as rt,p as at,c as it}from"./Relationship-2iXrSB1L.js";import"./TimeOnly-Ca_HiHQQ.js";import"./ImmutableArray-BPVd6ESQ.js";import"./featureConversionUtils-DXTxrSKl.js";import"./number-B79N98Ca.js";import"./shared-BehsCxQw.js";import"./uuid-Cl5lrJ4c.js";let c=null;async function ot(t){const n=J.geometryServiceUrl??"";if(!n){Q()||await V();for(const e of t)e.container[e.indexer]=j(e.container[e.indexer],P.WGS84);return}const r=t.map(e=>e.container[e.indexer]),i=new $({geometries:r,outSpatialReference:P.WGS84}),s=await tt(n,i);for(let e=0;e<s.length;e++){const a=t[e];a.container[a.indexer]=s[e]}}async function D(t,n){const r=new K({portal:t,id:n});return await r.load(),c===null&&(c=await G(()=>import("./knowledgeGraphService-BqqaalZS.js").then(i=>i.k),__vite__mapDeps([0,1,2,3]))),await c.fetchKnowledgeGraph(r.url)}function v(t,n,r,i,s){if(t===null)return null;if(y(t)||A(t))return t;if(k(t)||k(t))return t.toJSDate();if(U(t))return t.toStorageFormat();if(Y(t))return t.toStorageString();if(Z(t)){const e={};for(const a of t.keys())e[a]=v(t.field(a),n,r,i,s),e[a]instanceof T&&s.push({container:e,indexer:a});return e}if(_(t)){const e=t.map(a=>v(a,n,r,i,s));for(let a=0;a<e.length;a++)e[a]instanceof T&&s.push({container:e,indexer:a});return e}return F(t)?t.spatialReference.isWGS84?t:t.spatialReference.isWebMercator&&n?M(t):t:void 0}function st(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return B(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new u(n,f.WrongSpatialReference,null)}function R(t,n){if(!t)return null;const r={};for(const i in t)r[i]=g(t[i],n);return r}function g(t,n){return t===null?null:_(t)?t.map(r=>g(r,n)):t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:R(t.properties,n)}:t instanceof rt?{graphType:"object",properties:R(t.properties,n)}:t instanceof at?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:R(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(r=>g(r,n)):null}:F(t)?st(t,n):y(t)||A(t)||H(t)?t:null}function Rt(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,r){return t.standardFunctionAsync(n,r,(i,s,e)=>{var m,d;if(b(e,2,2,n,r),e[0]===null)throw new u(n,f.PortalRequired,r);if(e[0]instanceof C){const p=E(e[1]);let h;return h=(m=n.services)!=null&&m.portal?n.services.portal:I.getDefault(),D(X(e[0],h),p)}if(y(e[0])===!1)throw new u(n,f.InvalidParameter,r);const a=E(e[0]);return D(((d=n.services)==null?void 0:d.portal)??I.getDefault(),a)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,r){return t.standardFunctionAsync(n,r,async(i,s,e)=>{var x;b(e,2,4,n,r);const a=e[0];if(!L(a))throw new u(n,f.InvalidParameter,r);const m=e[1];if(!y(m))throw new u(n,f.InvalidParameter,r);c===null&&(c=await G(()=>import("./knowledgeGraphService-BqqaalZS.js").then(o=>o.k),__vite__mapDeps([0,1,2,3])));let d=null;const p=O(e[2],null);if(!(p instanceof W||p===null))throw new u(n,f.InvalidParameter,r);if(p){let o=[];d=v(p,!0,!1,n,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await ot(o)}const h=new nt({openCypherQuery:m,bindParameters:d});(((x=a==null?void 0:a.serviceDefinition)==null?void 0:x.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=n.spatialReference);const q=(await c.executeQueryStreaming(a,h)).resultRowsStream.getReader(),S=[];try{for(;;){const{done:o,value:l}=await q.read();if(o)break;if(_(l))for(const w of l)S.push(g(w,n));else{const w=[];for(const N of l)w.push(g(l[N],n));S.push(w)}}}catch(o){throw o}return W.convertJsonToArcade(S,z(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{Rt as registerFunctions};
//# sourceMappingURL=knowledgegraph-B8WI3BII.js.map
