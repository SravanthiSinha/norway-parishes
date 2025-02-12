const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingSupport-9WyBNUiH.js","assets/index-BvuY3ppR.js","assets/index-Jib82o7I.css","assets/uuid-Cl5lrJ4c.js","assets/EditBusLayer-DzLN5ELJ.js","assets/infoFor3D-CxdEiWhp.js"])))=>i.map(i=>d[i]);
import{fl as g,O as P,b7 as R,j as i,m as a,u as b,k as q,aE as E,hI as D,ag as N,P as G,I as c,_ as $,h$ as C,i0 as L,i1 as V,hL as H,dA as B,hJ as k,i2 as Q,cv as Z,i3 as J,i4 as z,E as v,B as U}from"./index-BvuY3ppR.js";import{e as W}from"./uuid-Cl5lrJ4c.js";async function X(t,e,n){e=e.clone(),t.capabilities.query.supportsMaxRecordCountFactor&&(e.maxRecordCountFactor=T(t));const r=K(t),o=t.capabilities.query.supportsPagination;e.start=0,e.num=r;let s=null;for(;;){const u=await t.source.queryFeaturesJSON(e,n);if(s==null?s=u:s.features=s.features.concat(u.features),s.exceededTransferLimit=u.exceededTransferLimit,!o||!u.exceededTransferLimit)break;e.start+=r}return s}function K(t){return T(t)*Y(t)}function Y(t){return t.capabilities.query.maxRecordCount||2e3}function T(t){return t.capabilities.query.supportsMaxRecordCountFactor?g.MAX_MAX_RECORD_COUNT_FACTOR:1}var j;let p=j=class extends P{constructor(t){super(t),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new j(R({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};i([a({type:[String],json:{write:!0}})],p.prototype,"attachmentTypes",void 0),i([a({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],p.prototype,"attachmentsWhere",void 0),i([a({type:Boolean,json:{write:!0}})],p.prototype,"cacheHint",void 0),i([a({type:[String],json:{write:!0}})],p.prototype,"keywords",void 0),i([a({type:[String],json:{write:!0}})],p.prototype,"globalIds",void 0),i([a({json:{write:!0}})],p.prototype,"name",void 0),i([a({type:Number,json:{read:{source:"resultRecordCount"}}})],p.prototype,"num",void 0),i([a({type:[Number],json:{write:!0}})],p.prototype,"objectIds",void 0),i([a({type:Boolean,json:{default:!1,write:!0}})],p.prototype,"returnMetadata",void 0),i([a({type:[Number],json:{write:!0}})],p.prototype,"size",void 0),i([a({type:Number,json:{read:{source:"resultOffset"}}})],p.prototype,"start",void 0),i([b("start"),b("num")],p.prototype,"writeStart",null),i([a({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],p.prototype,"where",void 0),p=j=i([q("esri.rest.support.AttachmentQuery")],p),p.from=E(p);const tt=p;var x;let l=x=class extends P{constructor(t){super(t),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,this.start>0&&this.where==null&&(e.definitionExpression="1=1")}clone(){return new x(R({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};i([a({type:Boolean,json:{write:!0}})],l.prototype,"cacheHint",void 0),i([a({type:D,json:{write:!0}})],l.prototype,"dynamicDataSource",void 0),i([a({type:String,json:{write:!0}})],l.prototype,"gdbVersion",void 0),i([a({type:Number,json:{write:!0}})],l.prototype,"geometryPrecision",void 0),i([a({type:Date})],l.prototype,"historicMoment",void 0),i([b("historicMoment")],l.prototype,"_writeHistoricMoment",null),i([a({type:Number,json:{write:!0}})],l.prototype,"maxAllowableOffset",void 0),i([a({json:{write:!0}})],l.prototype,"objectIds",void 0),i([a({type:[String],json:{write:!0}})],l.prototype,"orderByFields",void 0),i([a({type:[String],json:{write:!0}})],l.prototype,"outFields",void 0),i([a({type:N,json:{read:{source:"outSR"},write:{target:"outSR"}}})],l.prototype,"outSpatialReference",void 0),i([a({json:{write:!0}})],l.prototype,"relationshipId",void 0),i([a({type:Number,json:{read:{source:"resultOffset"}}})],l.prototype,"start",void 0),i([b("start"),b("num")],l.prototype,"writeStart",null),i([a({type:Number,json:{read:{source:"resultRecordCount"}}})],l.prototype,"num",void 0),i([a({json:{write:!0}})],l.prototype,"returnGeometry",void 0),i([a({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],l.prototype,"returnM",void 0),i([a({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],l.prototype,"returnZ",void 0),i([a({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],l.prototype,"where",void 0),l=x=i([q("esri.rest.support.RelationshipQuery")],l),l.from=E(l);const F=l,at=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),ut=new G({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function lt(t,e,n,r){const o=await w(t);if(await S(t,e,r),!o.addAttachment)throw new c(r,"Layer source does not support addAttachment capability");return o.addAttachment(e,n)}function S(t,e,n){var s,u;const{attributes:r}=e,{objectIdField:o}=t;return(u=(s=t.capabilities)==null?void 0:s.data)!=null&&u.supportsAttachment?e?r?o&&r[o]?Promise.resolve():Promise.reject(new c(n,`feature is missing the identifying attribute ${o}`)):Promise.reject(new c(n,"'attributes' are required on a feature to query attachments")):Promise.reject(new c(n,"A feature is required to add/delete/update attachments")):Promise.reject(new c(n,"this layer doesn't support attachments"))}async function ct(t,e,n,r,o){const s=await w(t);if(await S(t,e,o),!s.updateAttachment)throw new c(o,"Layer source does not support updateAttachment capability");return s.updateAttachment(e,n,r)}async function pt(t,e,n){const{applyEdits:r}=await $(()=>import("./editingSupport-9WyBNUiH.js"),__vite__mapDeps([0,1,2,3,4,5])),o=await t.load();let s=n;return o.type==="feature"&&o.infoFor3D&&e.deleteFeatures!=null&&o.globalIdField!=null&&(s={...s,globalIdToObjectId:await rt(o,e.deleteFeatures,o.globalIdField)}),r(o,o.source,e,n)}async function dt(t,e,n){const{uploadAssets:r}=await $(()=>import("./editingSupport-9WyBNUiH.js"),__vite__mapDeps([0,1,2,3,4,5])),o=await t.load();return r(o,o.source,e,n)}async function yt(t,e,n,r){const o=await w(t);if(await S(t,e,r),!o.deleteAttachments)throw new c(r,"Layer source does not support deleteAttachments capability");return o.deleteAttachments(e,n)}async function ht(t,e,n){const r=(await t.load({signal:e==null?void 0:e.signal})).source;if(!r.fetchRecomputedExtents)throw new c(n,"Layer source does not support fetchUpdates capability");return r.fetchRecomputedExtents(e)}async function ft(t,e,n,r){var A,M;e=tt.from(e),await t.load();const o=t.source,s=t.capabilities;if(!((A=s==null?void 0:s.data)!=null&&A.supportsAttachment))throw new c(r,"this layer doesn't support attachments");const{attachmentTypes:u,objectIds:d,globalIds:y,num:h,size:f,start:m,where:O}=e;if(!((M=s==null?void 0:s.operations)!=null&&M.supportsQueryAttachments)&&((u==null?void 0:u.length)>0||(y==null?void 0:y.length)>0||(f==null?void 0:f.length)>0||h||m||O))throw new c(r,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(d!=null&&d.length||y!=null&&y.length||O))throw new c(r,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);if(!o.queryAttachments)throw new c(r,"Layer source does not support queryAttachments capability",e);return o.queryAttachments(e)}async function mt(t,e,n,r){const o=await w(t);if(!o.queryObjectIds)throw new c(r,"Layer source does not support queryObjectIds capability");return o.queryObjectIds(g.from(e)??t.createQuery(),n)}async function wt(t,e,n,r){const o=await w(t);if(!o.queryFeatureCount)throw new c(r,"Layer source does not support queryFeatureCount capability");return o.queryFeatureCount(g.from(e)??t.createQuery(),n)}async function bt(t,e,n,r){const o=await w(t);if(!o.queryExtent)throw new c(r,"Layer source does not support queryExtent capability");return o.queryExtent(g.from(e)??t.createQuery(),n)}async function gt(t,e,n,r){const o=await w(t);if(!o.queryRelatedFeatures)throw new c(r,"Layer source does not support queryRelatedFeatures capability");return o.queryRelatedFeatures(F.from(e),n)}async function vt(t,e,n,r){const o=await w(t);if(!o.queryRelatedFeaturesCount)throw new c(r,"Layer source does not support queryRelatedFeaturesCount capability");return o.queryRelatedFeaturesCount(F.from(e),n)}async function It(t){const e=t.source;if(e!=null&&e.refresh)try{const{dataChanged:n,updates:r}=await e.refresh();if(r!=null&&(t.sourceJSON={...t.sourceJSON,...r},t.read(r,{origin:"service",url:t.parsedUrl})),n)return!0}catch{}if(t.definitionExpression)try{return(await V(t.definitionExpression,t.fieldsIndex)).hasDateFunctions}catch{}return!1}function jt(t){var u,d;const e=new g,n=(u=t.capabilities)==null?void 0:u.data,r=(d=t.capabilities)==null?void 0:d.query;e.historicMoment=t.historicMoment,e.gdbVersion=t.gdbVersion,e.returnGeometry=!0,r&&(e.compactGeometryEnabled=r.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),n&&(n.supportsZ&&t.returnZ!=null&&(e.returnZ=t.returnZ),n.supportsM&&t.returnM!=null&&(e.returnM=t.returnM)),e.outFields=["*"];const{timeOffset:o,timeExtent:s}=t;return e.timeExtent=o!=null&&s!=null?s.offset(-o.value,o.unit):s||null,e.multipatchOption=t.geometryType==="multipatch"?"xyFootprint":null,e}function xt(t){const{globalIdField:e,fields:n}=t;if(e)return e;if(n){for(const r of n)if(r.type==="esriFieldTypeGlobalID")return r.name}}function Ft(t){const{objectIdField:e,fields:n}=t;if(e)return e;if(n){for(const r of n)if(r.type==="esriFieldTypeOID")return r.name}}function St(t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3}function Ot(t,e){const{subtypes:n,subtypeField:r}=t;if(!(e!=null&&e.attributes)||!(n!=null&&n.length)||!r)return null;const o=e.attributes[r];return o==null?null:n.find(s=>s.code===o)}function At(t,e){var u,d;const{fieldsIndex:n,subtypeField:r}=t,{name:o,type:s}=n.get(e)??{};if(!o)return null;if((r&&((u=n.get(r))==null?void 0:u.name))===o&&((d=t.subtypes)!=null&&d.length)){const y=t.subtypes.map(h=>new C({code:_(h.code,s),name:h.name}));if(y!=null&&y.length)return new L({codedValues:y})}return null}function Mt(t,e){var s,u;const{fieldsIndex:n}=t,{name:r,type:o}=n.get(e)??{};if(!r)return null;if(("typeIdField"in t?(s=n.get(t.typeIdField))==null?void 0:s.name:null)===r&&"types"in t&&((u=t.types)!=null&&u.length)){const d=t.types.map(y=>new C({code:_(y.id,o),name:y.name}));return new L({codedValues:d})}return null}function _(t,e){return e?Z({type:e})&&typeof t=="number"?`${t}`:J({type:e})&&typeof t=="string"?Number.parseInt(t,10):t:t}async function w(t){return(await t.load()).source}async function et(t,e){if(!v||v.findCredential(t))return;let n;try{const r=await U(t,e);r&&(n=await v.checkSignInStatus(`${r}/sharing`))}catch{}if(n)try{const r=e!=null?e.signal:null;await v.getCredential(t,{signal:r})}catch{}}async function Pt(t,e,n){var o;const r=(o=t.parsedUrl)==null?void 0:o.path;r&&t.authenticationTriggerEvent===e&&await et(r,n)}function Rt(t){return!nt(t)&&(t.userHasUpdateItemPrivileges||t.editingEnabled)}const I=k({types:z});function qt(t,e){var n;if(t.defaultSymbol)return(n=t.types)!=null&&n.length?new H({defaultSymbol:I(t.defaultSymbol,t,e),field:t.typeIdField,uniqueValueInfos:t.types.map(r=>({id:r.id,symbol:I(r.symbol,r,e)}))}):new B({symbol:I(t.defaultSymbol,t,e)})}function Et(t){var r,o,s;let e=(r=t.sourceJSON)==null?void 0:r.cacheMaxAge;if(!e)return!1;const n=(s=(o=t.editingInfo)==null?void 0:o.lastEditDate)==null?void 0:s.getTime();return n==null||(e*=1e3,Date.now()-n<e)}async function rt(t,e,n){if(e==null)return null;const r=[],{objectIdField:o}=t;if(e.forEach(h=>{let f=null;if("attributes"in h){const{attributes:m}=h;f={globalId:m[n],objectId:m[o]!=null&&m[o]!==-1?m[o]:null}}else f={globalId:h.globalId,objectId:h.objectId!=null&&h.objectId!==-1?h.objectId:null};f.globalId!=null&&(f.objectId!=null&&f.objectId!==-1||r.push(f.globalId))}),r.length===0)return null;const s=t.createQuery();s.where=r.map(h=>`${n}='${h}'`).join(" OR "),s.returnGeometry=!1,s.outFields=[o,n],s.cacheHint=!1;const u=await Q(X(t,s));if(!u.ok)return null;const d=new Map,y=u.value.features;for(const h of y){const f=h.attributes[n],m=h.attributes[o];f!=null&&m!=null&&m!==-1&&d.set(W(f),m)}return d}function $t(t,e,n){if(!e||!n||!t)return null;const r=n.getAttribute(e);return r==null?null:t.find(o=>{const{id:s}=o;return s!=null&&s.toString()===r.toString()})??null}function nt(t){var e;return((e=t.sourceJSON)==null?void 0:e.isMultiServicesView)||ot(t)}function ot(t){var e,n;return!!((n=(e=t.sourceJSON)==null?void 0:e.capabilities)!=null&&n.toLowerCase().split(",").map(r=>r.trim()).includes("map"))}function Ct(t,e,n){const r=e==null?void 0:e.queryBins;if(!r)throw new c(n,"Layer source does not support binning");switch(t.binParameters.type){case"auto-interval":if(!r.supportsAutoInterval)throw new c(n,"Layer source does not support auto-interval binning");break;case"date":if(!r.supportsDate)throw new c(n,"Layer source does not support date binning");break;case"fixed-boundaries":if(!r.supportsFixedBoundaries)throw new c(n,"Layer source does not support fixed-boundaries binning");break;case"fixed-interval":if(!r.supportsFixedInterval)throw new c(n,"Layer source does not support fixed-interval binning")}const o=r==null?void 0:r.supportedStatistics;if(t.outStatistics&&o){const s=new Map([["count","count"],["sum","sum"],["min","min"],["max","max"],["avg","avg"],["stddev","stddev"],["var","var"],["percentile-continuous","percentileContinuous"],["percentile-discrete","percentileDiscrete"],["centroid-aggregate","centroid"],["convex-hull-aggregate","convexHull"],["envelope-aggregate","envelope"]]);for(const{statisticType:u}of t.outStatistics){const d=s.get(u);if(d&&!o[d])throw new c(n,`Layer source does not support ${u} statistic type`)}}}export{yt as A,Et as B,vt as C,Ft as D,bt as E,ct as F,St as G,lt as I,Pt as J,rt as K,gt as L,jt as M,mt as O,wt as P,Ot as Q,It as R,ft as S,At as T,Mt as U,xt as V,$t as W,nt as X,Rt as Z,Ct as _,at as a,tt as c,F as d,ut as g,pt as q,X as r,ht as v,dt as x,qt as z};
//# sourceMappingURL=featureLayerUtils-CKSU1ldu.js.map
