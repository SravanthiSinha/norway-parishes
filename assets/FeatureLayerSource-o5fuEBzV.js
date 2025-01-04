const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/uploadAssets-yV4wMqle.js","assets/index-CJT1kG3U.js","assets/index-Jib82o7I.css","assets/uuid-Cl5lrJ4c.js","assets/External-B0bpprbZ.js","assets/infoFor3D-CxdEiWhp.js","assets/meshSpatialReferenceScaleUtils-v8qr5E1a.js","assets/MeshTransform-DL4ZNwOZ.js","assets/mat4f64-CSKppSlJ.js","assets/quat-C44AwpEd.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/vec32-BEXyJ64g.js","assets/convertMeshVertexSpace-zKEwLf5u.js","assets/MeshVertexAttributes-Dn_R_ni2.js","assets/vertexSpaceConversion-Dq5aGwPA.js","assets/mat3-C5rmyjBz.js","assets/spatialReferenceEllipsoidUtils-B61m2-OU.js","assets/computeTranslationToOriginAndRotation-Ck8WymfX.js","assets/projectPointToVector-CND_z55g.js","assets/meshVertexSpaceUtils-CFb8uanA.js","assets/MeshLocalVertexSpace-X9mqHhj2.js","assets/vec3-Bed7wTZ_.js","assets/BufferView-Ce-ToCbK.js","assets/vec4-BfpkaCPt.js"])))=>i.map(i=>d[i]);
import{a9 as P,g5 as Q,bT as V,g6 as G,fW as J,g7 as H,s as T,I as R,d7 as B,bx as X,M as j,j as O,m as F,k as z,g8 as W,fc as Y,ao as Z,T as D,U as g,c4 as M,aX as K,p as $,X as ee,bi as N,_ as k,A as C,g9 as te,ga as se,t as ae,z as re,ag as ie,fk as ne,gb as oe}from"./index-CJT1kG3U.js";import{r as ue}from"./uuid-Cl5lrJ4c.js";import{b as le}from"./MeshLocalVertexSpace-X9mqHhj2.js";import{a as de}from"./meshVertexSpaceUtils-CFb8uanA.js";import{A as ce}from"./External-B0bpprbZ.js";import{N as pe}from"./MeshTransform-DL4ZNwOZ.js";import{isFeatureIdentifierArrayWithGlobalId as he,isFeatureIdentifierArrayWithObjectId as ye}from"./editingSupport-C9r4yiuT.js";import{u as me}from"./clientSideDefaults-BwweAHF-.js";import{j as ge}from"./QueryTask-CCcuZOyC.js";import{J as x}from"./featureLayerUtils-BpxtsyUl.js";import{M as fe}from"./infoFor3D-CxdEiWhp.js";import{i as we}from"./editsZScale-DSwHD_r_.js";import{i as be,a as Ie,o as qe,t as Re}from"./EditBusLayer-BGosulfD.js";import"./vec32-BEXyJ64g.js";import"./mat4f64-CSKppSlJ.js";import"./quat-C44AwpEd.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";import"./executeForIds-CEFniybu.js";import"./featureConversionUtils-Div36Cal.js";async function L(t,e,s){const{geometry:a}=e,r={...e.attributes};if(s!=null&&(a==null?void 0:a.type)==="mesh"){const{transformFieldRoles:i}=s,{origin:o,spatialReference:n,vertexSpace:u}=a,l=a.transform??new pe,d=u.type==="local",c=t.spatialReference,b=c.isGeographic,I=P(c,n),h=Q(n,c)&&V(n,c);if(!(d&&b&&h||!d&&!b&&I))return null;const p=G(o,n,c);if(p==null)return null;if(r[i.originX]=p.x,r[i.originY]=p.y,r[i.originZ]=p.z??0,l!=null){const{translation:q,scale:y,rotation:f}=l,m=d?1:J(n)/J(c);r[i.translationX]=q[0]*m,r[i.translationY]=q[2]*m,r[i.translationZ]=-q[1]*m,r[i.scaleX]=y[0],r[i.scaleY]=y[2],r[i.scaleZ]=y[1],r[i.rotationX]=f[0],r[i.rotationY]=f[2],r[i.rotationZ]=-f[1],r[i.rotationDeg]=f[3]}return{attributes:r}}return a==null?{attributes:r}:a.type==="mesh"||a.type==="extent"?null:{geometry:a.toJSON(),attributes:r}}async function Se(t,e){const s=await Promise.all((e.addAttachments??[]).map(i=>U(t,i))),a=await Promise.all((e.updateAttachments??[]).map(i=>U(t,i))),r=e.deleteAttachments??[];return s.length||a.length||r.length?{adds:s,updates:a,deletes:[...r]}:null}async function U(t,e){var d;const{feature:s,attachment:a}=e,{globalId:r,name:i,contentType:o,data:n,uploadId:u}=a,l={globalId:r};if(s&&("attributes"in s?l.parentGlobalId=(d=s.attributes)==null?void 0:d[t.globalIdField]:s.globalId&&(l.parentGlobalId=s.globalId)),u)l.uploadId=u;else if(n){const c=await H(n);c&&(l.contentType=c.mediaType,l.data=c.data),n instanceof File&&(l.name=n.name)}return i&&(l.name=i),o&&(l.contentType=o),l}function _e(t,e,s){if(!e||e.length===0)return[];if(s&&he(e))return e.map(r=>r.globalId);if(ye(e))return e.map(r=>r.objectId);const a=s?t.globalIdField:t.objectIdField;return a?e.map(r=>r.getAttribute(a)):[]}function Ee(t){var r,i,o;const e=t==null?void 0:t.assetMaps;if(e){for(const n of e.addResults)n.success||T.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${n.globalId}.`);for(const n of e.updateResults)n.success||T.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${n.globalId}.`)}const s=t==null?void 0:t.attachments,a={addFeatureResults:((r=t==null?void 0:t.addResults)==null?void 0:r.map(w))??[],updateFeatureResults:((i=t==null?void 0:t.updateResults)==null?void 0:i.map(w))??[],deleteFeatureResults:((o=t==null?void 0:t.deleteResults)==null?void 0:o.map(w))??[],addAttachmentResults:s!=null&&s.addResults?s.addResults.map(w):[],updateAttachmentResults:s!=null&&s.updateResults?s.updateResults.map(w):[],deleteAttachmentResults:s!=null&&s.deleteResults?s.deleteResults.map(w):[]};return t!=null&&t.editMoment&&(a.editMoment=t.editMoment),a}function w(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new R("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}function v(t,e){return new B({attributes:t.attributes,geometry:X({...t.geometry,spatialReference:e})})}function Oe(t,e){var s,a,r;return{adds:((s=t==null?void 0:t.adds)==null?void 0:s.map(i=>v(i,e)))||[],updates:((a=t==null?void 0:t.updates)==null?void 0:a.map(i=>({original:v(i[0],e),current:v(i[1],e)})))||[],deletes:((r=t==null?void 0:t.deletes)==null?void 0:r.map(i=>v(i,e)))||[],spatialReference:e}}function Ae(t){const e=t.details.raw,s=+e.code,a=+e.extendedCode;return s===500&&(a===-2147217144||a===-2147467261)}const Fe=new j({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),xe=new j({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let S=class extends W{constructor(t){super(t),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=Y(async()=>{var a,r;await this.load();const e=(a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate;if(e==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const s=e!==((r=this.sourceJSON.editingInfo)==null?void 0:r.lastEditDate);return{dataChanged:s,updates:s?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,s=this._fetchService(e,{...t}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t)).then(()=>this._ensureLatestMetadata(t));return this.addResolvingPromise(s),Promise.resolve(this)}initialize(){this.addHandles([Z(()=>{const t=this.layer;return t&&"lastEditsEventDate"in t?t.lastEditsEventDate:null},t=>this._handleLastEditsEventChange(t))])}destroy(){this._removeEditInterceptor()}get queryTask(){var l;const{capabilities:t,parsedUrl:e,gdbVersion:s,spatialReference:a,fieldsIndex:r}=this.layer,i="infoFor3D"in this.layer?this.layer.infoFor3D:null,o="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,n=D("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF)&&i==null,u=((l=t==null?void 0:t.operations)==null?void 0:l.supportsQueryAttachments)??!1;return new ge({url:e.path,pbfSupported:n,fieldsIndex:r,infoFor3D:i,dynamicDataSource:o,gdbVersion:s,sourceSpatialReference:a,queryAttachmentsSupported:u})}async addAttachment(t,e){await this.load();const{layer:s}=this;await x(s,"editing");const a=t.attributes[s.objectIdField],r=s.parsedUrl.path+"/"+a+"/addAttachment",i=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(e,i.query);try{const n=await g(r,{body:o});return w(n.data.addAttachmentResult)}catch(n){throw this._createAttachmentErrorResult(a,n)}}async updateAttachment(t,e,s){await this.load();const{layer:a}=this;await x(a,"editing");const r=t.attributes[a.objectIdField],i=a.parsedUrl.path+"/"+r+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:e}}),n=this._getFormDataForAttachment(s,o.query);try{const u=await g(i,{body:n});return w(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(t,e){var _,A;await this.load();const{layer:s}=this;await x(s,"editing");const a="infoFor3D"in s?s.infoFor3D:null,r=a!=null,i=r||((e==null?void 0:e.globalIdUsed)??!1),o=r?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,n=((_=t.addFeatures)==null?void 0:_.map(E=>L(this.layer,E,a)))??[],u=(await Promise.all(n)).filter(M),l=((A=t.updateFeatures)==null?void 0:A.map(E=>L(this.layer,E,a)))??[],d=(await Promise.all(l)).filter(M),c=_e(this.layer,t.deleteFeatures,i);we(u,d,s.spatialReference);const b=await Se(this.layer,t),I=s.capabilities.editing.supportsAsyncApplyEdits&&r,h=(e==null?void 0:e.gdbVersion)||s.gdbVersion,p={gdbVersion:h,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:i,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,async:I};await be(this.layer.url,h,!0);const q=Ie(this.layer.url,h||null);if(await qe(s.url,h,s.historicMoment))throw new R("feature-layer-source:historic-version","Editing a historic version is not allowed");e!=null&&e.returnServiceEditsOption?(p.edits=JSON.stringify([{id:s.layerId,adds:u.length?u:null,updates:d.length?d:null,deletes:c.length?c:null,attachments:b,assetMaps:o}]),p.returnServiceEditsOption=Fe.toJSON(e==null?void 0:e.returnServiceEditsOption),p.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(p.adds=u.length?JSON.stringify(u):null,p.updates=d.length?JSON.stringify(d):null,p.deletes=c.length?i?JSON.stringify(c):c.join(","):null,p.attachments=b&&JSON.stringify(b),p.assetMaps=o!=null?JSON.stringify(o):void 0);const y=this._getLayerRequestOptions({method:"post",query:p});q&&(y.authMode="immediate",y.query.returnEditMoment=!0,y.query.sessionId=Re);const f=e!=null&&e.returnServiceEditsOption?s.url:s.parsedUrl.path;let m;try{m=I?await this._asyncApplyEdits(f+"/applyEdits",y):await g(f+"/applyEdits",y)}catch(E){if(!Ae(E))throw E;y.authMode="immediate",m=I?await this._asyncApplyEdits(f+"/applyEdits",y):await g(f+"/applyEdits",y)}return this._createEditsResult(m)}async deleteAttachments(t,e){await this.load();const{layer:s}=this;await x(s,"editing");const a=t.attributes[s.objectIdField],r=s.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await g(r,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(w)}catch(i){throw this._createAttachmentErrorResult(a,i)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const s=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:a,url:r}=this.layer,{data:i}=await g(`${r}/${a}`,s),{id:o,extent:n,fullExtent:u,timeExtent:l}=i,d=n||u;return{id:o,fullExtent:d&&K.fromJSON(d),timeExtent:l&&$.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(t,e={}){await this.load();const s=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,s)}async queryFeatures(t,e){var a;await this.load();const s=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return(a=t.outStatistics)!=null&&a.length&&s.features.length&&s.features.forEach(r=>{var o;const i=r.attributes;(o=t.outStatistics)==null||o.forEach(({outStatisticFieldName:n})=>{if(n){const u=n.toLowerCase();u&&u in i&&n!==u&&(i[n]=i[u],delete i[u])}})}),s}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryBins(t,e){return await this.load(),this.queryTask.executeBinsQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!ee(this.layer.url))return"unavailable";const t=N(this.layer.url,"status"),e=await g(t,{query:{f:"json"}});return xe.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:s}=await k(()=>import("./uploadAssets-yV4wMqle.js").then(a=>a.u),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));return s(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}_handleLastEditsEventChange(t){var a,r,i,o;const e=this.layer;if(t==null||!("capabilities"in e)||!("effectiveCapabilities"in e)||!(!((r=(a=e.capabilities)==null?void 0:a.operations)!=null&&r.supportsEditing)&&((o=(i=e.effectiveCapabilities)==null?void 0:i.operations)!=null&&o.supportsEditing)))return;const s=e.url;s!=null&&("layerId"in e&&N(s,e.layerId.toString()),this._getOrCreateEditInterceptor(s).before=n=>{const u=n.requestOptions.method??"auto";if(u==="auto"||u==="head"){const l=n.requestOptions.query??{};l._ts=t.getTime(),n.requestOptions.query=l}})}_getOrCreateEditInterceptor(t){return this._editInterceptor==null&&(this._editInterceptor={urls:t},C.request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){this._editInterceptor!=null&&(te(C.request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}async _asyncApplyEdits(t,e){const s=(await g(t,e)).data.statusUrl;for(;;){const a=(await g(s,{query:{f:"json"},responseType:"json"})).data;switch(a.status){case"Completed":return g(a.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new R("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new R("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await se(ve)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const a={};D("featurelayer-advanced-symbols")&&(a.returnAdvancedSymbols=!0),e!=null&&e.cacheBust&&(a._ts=Date.now());const{data:r}=await g(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:a,signal:e==null?void 0:e.signal}));t=r}this.sourceJSON=await this._patchServiceJSON(t,e==null?void 0:e.signal);const s=t.type;if(!this.supportedSourceTypes.has(s))throw new R("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}async _patchServiceJSON(t,e){var s;if(t.type!=="Table"&&t.geometryType&&!((s=t==null?void 0:t.drawingInfo)!=null&&s.renderer)&&!t.defaultSymbol){const a=me(t.geometryType).renderer;ae("drawingInfo.renderer",a,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{const{data:a}=await g(this.layer.url,this._getLayerRequestOptions({signal:e}));a.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:a.spatialReference})}catch(a){re(a)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!(e!=null&&e.length)||await this._areAllAssetsAlreadyMapped(e))return null;const s=t.addFeatures.filter(i=>i.geometry);if(e.length!==s.length+t.updateFeatures.length)throw new R("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const a=new Array,r=new Map;for(const i of e){const{geometry:o}=i,{vertexSpace:n}=o;if(de(n))a.push(o);else{const u=o.origin,{convertMeshVertexSpace:l}=await k(async()=>{const{convertMeshVertexSpace:c}=await import("./convertMeshVertexSpace-zKEwLf5u.js");return{convertMeshVertexSpace:c}},__vite__mapDeps([13,1,2,14,15,16,10,8,12,17,18,19,20,21,22,23,24])),d=await l(o,new le({origin:[u.x,u.y,u.z??0]}));r.set(d,o),i.geometry=d,a.push(d)}}await this.uploadAssets(a);for(const[i,o]of r)o.addExternalSources(i.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(e),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,s=this.layer.globalIdField,a=this.layer.parsedUrl;for(const r of t){const i=r.geometry,{metadata:o}=i,n=o.getExternalSourcesOnService(a),u=r.getAttribute(s);if(n.length===0){T.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:l}=n.find(ce)??n[0];for(const d of l)d.parts.length===1?e.push({globalId:ue(),parentGlobalId:u,assetName:d.assetName,assetHash:d.parts[0].partHash,flags:[]}):T.getLogger(this).error(`Skipping asset ${d.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:s}=this.layer,a=[];let r=null;if(Array.isArray(e))for(const o of e)a.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===s&&(r={addResults:o.addResults??[],updateResults:o.updateResults??[],deleteResults:o.deleteResults??[],attachments:o.attachments,editMoment:o.editMoment});else r=e;const i=Ee(r);if(a.length>0){i.editedFeatureResults=[];for(const o of a){const{editedFeatures:n}=o,u=n!=null&&n.spatialReference?new ie(n.spatialReference):null;i.editedFeatureResults.push({layerId:o.id,editedFeatures:Oe(n,u)})}}return i}_createAttachmentErrorResult(t,e){var r;const s=((r=e.details.messages)==null?void 0:r[0])||e.message,a=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new R("feature-layer-source:attachment-failure",s,{code:a})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const a in e){const r=e[a];r!=null&&(s.set?s.set(a,r):s.append(a,r))}return s}_getLayerRequestOptions(t={}){const{layer:e,layer:{parsedUrl:s,gdbVersion:a}}=this;return{...t,query:{gdbVersion:a,layer:"dynamicDataSource"in e&&e.dynamicDataSource?JSON.stringify({source:e.dynamicDataSource}):void 0,...s.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _areAllAssetsAlreadyMapped(t){const{layer:e}=this,{globalIdField:s,parsedUrl:a}=e,r="infoFor3D"in e?e.infoFor3D:null;if(r==null||s==null)return!1;const i=fe(r);if(i==null)return!1;const o=N(a.path,`../${i.id}`),n=new Array;for(const h of t){if(!(h.geometry.metadata.getExternalSourcesOnService(a).length>0))return!1;n.push(h)}const u=n.map(h=>h.getAttribute(s)).filter(M);if(u.length===0)return!1;const{assetMapFieldRoles:{parentGlobalId:l,assetHash:d}}=r,c=new ne({where:`${l} IN (${u.map(h=>`'${h}'`)})`,outFields:[d,l],returnGeometry:!1}),b=await oe(o,c),{features:I}=b;return I.length!==0&&!n.some(h=>{const p=h.getAttribute(s);if(!p)return!0;const{metadata:q}=h.geometry,y=I.filter(m=>m.getAttribute(l)===p);if(y.length===0)return!0;const f=y.map(m=>m.getAttribute(d));return q.getExternalSourcesOnService(a).flatMap(({source:m})=>m.flatMap(_=>_.parts.map(A=>A.partHash))).some(m=>f.every(_=>m!==_))})}};O([F()],S.prototype,"type",void 0),O([F({constructOnly:!0})],S.prototype,"layer",void 0),O([F({constructOnly:!0})],S.prototype,"supportedSourceTypes",void 0),O([F({readOnly:!0})],S.prototype,"queryTask",null),S=O([z("esri.layers.graphics.sources.FeatureLayerSource")],S);const ve=1e3,$e=S;export{$e as default};
//# sourceMappingURL=FeatureLayerSource-o5fuEBzV.js.map
