const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FeatureLayer-DS_8gZka.js","assets/index-DbNmBX4d.js","assets/index-DQ5T3qjA.css","assets/MultiOriginJSONSupport-B-yfrvsf.js","assets/commonProperties-CGuThAML.js","assets/FeatureLayerBase-_2ky0iJK.js","assets/HeightModelInfo-C0ub-TTd.js","assets/featureLayerUtils-Bi22yTwR.js","assets/uuid-Cl5lrJ4c.js","assets/LayerFloorInfo-CaDhQ13a.js","assets/Relationship-BbHEzW7a.js","assets/serviceCapabilitiesUtils-zIMP847t.js","assets/editsZScale-DZUJrfn7.js","assets/APIKeyMixin-CXlWrzlh.js","assets/ArcGISService-CSV0jb9-.js","assets/CustomParametersMixin-CTrVGLLT.js","assets/EditBusLayer-Z9Kr3cmv.js","assets/FeatureEffectLayer-WpwFKfa7.js","assets/FeatureEffect-DmRrP0eE.js","assets/FeatureReductionLayer-C5VCIS3_.js","assets/FeatureReductionSelection-CLrQGUM9.js","assets/labelingInfo-FimPvlW3.js","assets/labelUtils-D4Z-URWW.js","assets/MD5-C9MwAd2G.js","assets/OperationalLayer-BqKvdtee.js","assets/OrderedLayer-BxwxFK4a.js","assets/OrderByInfo-B2POnA3F.js","assets/PortalLayer-hGfufuVG.js","assets/portalItemUtils-BqSNPU_4.js","assets/RefreshableLayer-CGuxfevt.js","assets/TemporalLayer-BFUu-J79.js","assets/TimeInfo-BWNqizDz.js","assets/FeatureTemplate-h1_gjiLZ.js","assets/FeatureType-mmVVrelu.js","assets/fieldProperties-BisedSGo.js","assets/versionUtils-03-p73ku.js","assets/styleUtils-YtuMlLaM.js","assets/popupUtils-Cj-AZhjO.js","assets/AlphaCutoff-UcccL64p.js","assets/interfaces-CL2NbQte.js"])))=>i.map(i=>d[i]);
import{j as a,m as n,o as S,aX as X,ag as z,k as N,hF as te,w as Q,bc as y,bk as B,U as R,q as J,eV as re,ey as ie,I as f,dc as se,Z as ae,hG as oe,V as le,gE as ne,fq as ue,s as E,hH as M,aE as pe,ae as k,f5 as ye,gJ as P,fl as de,_ as ce,b7 as T,bb as he,cV as $,g9 as fe,R as be,eZ as q,u as v,$ as me,gF as ge,gG as Se,hI as W,df as G,bd as Ie,eM as L,ao as H,al as K,eT as we}from"./index-DbNmBX4d.js";import{u as ve,l as Ee}from"./commonProperties-CGuThAML.js";import{c as Z}from"./portalItemUtils-BqSNPU_4.js";import{n as Le}from"./CollectionFlattener-f8QjlotR.js";import{S as xe}from"./MultiOriginJSONSupport-B-yfrvsf.js";import{j as Fe}from"./QueryTask-csymLRCN.js";import{W as Oe,c as Te}from"./featureLayerUtils-Bi22yTwR.js";import{n as _e}from"./FeatureType-mmVVrelu.js";import{a as De,C as Pe}from"./labelingInfo-FimPvlW3.js";import{p as Ae}from"./LayerFloorInfo-CaDhQ13a.js";import{p as qe}from"./Relationship-BbHEzW7a.js";import{i as Ce}from"./serviceCapabilitiesUtils-zIMP847t.js";import{p as je}from"./popupUtils-Cj-AZhjO.js";import{o as Ve}from"./sublayerUtils-DqnMXqw-.js";const et=t=>{let e=class extends t{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(r,i){const s=i.capabilities&&i.capabilities.split(",").map(ee=>ee.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const l=this.type,p=l!=="tile"&&!!i.supportsDynamicLayers,u=s.includes("query"),d=s.includes("map"),h=!!i.exportTilesAllowed,m=s.includes("tilemap"),I=s.includes("data"),w=l!=="tile"&&(!i.tileInfo||p),x=l!=="tile"&&(!i.tileInfo||p),c=l!=="tile",b=i.cimVersion?te.parse(i.cimVersion):null,F=(b==null?void 0:b.greaterEqual(1,4))??!1,O=(b==null?void 0:b.greaterEqual(2,0))??!1;return{operations:{supportsExportMap:d,supportsExportTiles:h,supportsIdentify:u,supportsQuery:I,supportsTileMap:m},exportMap:d?{supportsArcadeExpressionForLabeling:F,supportsSublayersChanges:c,supportsDynamicLayers:p,supportsSublayerVisibility:w,supportsSublayerDefinitionExpression:x,supportsCIMSymbols:O}:null,exportTiles:h?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(r,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchRelatedService(r){const i=this.portalItem;if(!i||!Z(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},r).then(l=>l.find(p=>p.type==="Feature Service")??null,()=>null));const s=await this._relatedFeatureServicePromise;return Q(r),s?{itemId:s.id,url:s.url}:null}async fetchSublayerInfo(r,i){var u;const{source:s}=r;if(this!=null&&this.portalItem&&this.type==="tile"&&(s==null?void 0:s.type)==="map-layer"&&Z(this.portalItem)&&r.originIdOf("url")<y.SERVICE){const d=await this.fetchRelatedService(i);d&&(r.url=B(d.url,s.mapLayerId.toString()),r.layerItemId=d.itemId)}const{url:l}=r;let p;if(s.type==="data-layer")p=(await R(l,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...i})).data;else if(l&&r.originIdOf("url")>y.SERVICE)try{const d=await this._fetchAllLayersAndTablesFromService(l),h=((u=J(l))==null?void 0:u.sublayer)??s.mapLayerId;p=d.get(h)}catch{}else{let d=r.id;(s==null?void 0:s.type)==="map-layer"&&(d=s.mapLayerId);try{p=(await this.fetchAllLayersAndTables(i)).get(d)}catch{}}return p}async fetchAllLayersAndTables(r){var i;return this._fetchAllLayersAndTablesFromService((i=this.parsedUrl)==null?void 0:i.path,r)}async _fetchAllLayersAndTablesFromService(r,i){await this.load(i),this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map);const s=J(r),l=re(this._allLayersAndTablesMap,s==null?void 0:s.url.path,()=>R(B(s==null?void 0:s.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(u=>{const d=new Map,{layers:h,tables:m}=u.data,I=[...h??[],...m??[]];for(const w of I)d.set(w.id,w);return{result:d}},u=>({error:u}))),p=await l;if(Q(i),"result"in p)return p.result;throw p.error}};return a([n({readOnly:!0})],e.prototype,"capabilities",void 0),a([S("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],e.prototype,"readCapabilities",null),a([n({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),a([n({type:X})],e.prototype,"fullExtent",void 0),a([n(ve)],e.prototype,"id",void 0),a([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],e.prototype,"legendEnabled",void 0),a([n(Ee)],e.prototype,"popupEnabled",void 0),a([n({type:z})],e.prototype,"spatialReference",void 0),a([n({readOnly:!0})],e.prototype,"version",void 0),a([S("service","version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],e.prototype,"readVersion",null),e=a([N("esri.layers.mixins.ArcGISMapService")],e),e};var A;function C(t){return(t==null?void 0:t.type)==="esriSMS"}function j(t,e,r){var s;const i=this.originIdOf(e)>=L(r.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&((s=r.layer)==null?void 0:s.type)==="map-image"&&(r.writeSublayerStructure||i)}}function V(t,e,r){var i;return{enabled:!!r&&((i=r.layer)==null?void 0:i.type)==="tile"&&(r.origin&&this.originIdOf(e)>=L(r.origin)||this._isOverridden(e))}}function g(t,e,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function _(t,e,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(e)>=L(r.origin))}}let Re=0;const Me=new Set(["layer","parent","loaded","loadStatus","loadError","loadWarnings"]);let o=A=class extends xe(ie(fe)){constructor(t){super(t),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.isTable=!1,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.relationships=null,this.sourceJSON=null,this.spatialReference=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(t){return this.addResolvingPromise((async()=>{const{layer:e,url:r}=this;if(!e&&!r)throw new f("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=e?await e.fetchSublayerInfo(this,t):(await R(r,{responseType:"json",query:{f:"json"},...t})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service",layer:e,url:se(r)}))})()),this}readCapabilities(t,e){e=e.layerDefinition||e;const{operations:{supportsQuery:r,supportsQueryAttachments:i},query:{supportsFormatPBF:s,supportsOrderBy:l,supportsPagination:p},data:{supportsAttachment:u},queryRelated:d}=Ce(e,this.url);return{exportMap:{supportsModification:!!e.canModifyLayer},operations:{supportsQuery:r,supportsQueryAttachments:i},data:{supportsAttachment:u},query:{supportsFormatPBF:s,supportsOrderBy:l,supportsPagination:p},queryRelated:d}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(t){this._setAndNotifyLayer("definitionExpression",t)}get effectiveScaleRange(){const{minScale:t,maxScale:e}=this;return{minScale:t,maxScale:e}}readMaxScaleRange(t,e){return{minScale:(e=e.layerDefinition||e).minScale??0,maxScale:e.maxScale??0}}get fieldsIndex(){return new ae(this.fields||[])}set floorInfo(t){this._setAndNotifyLayer("floorInfo",t)}readGlobalIdFieldFromService(t,e){if((e=e.layerDefinition||e).globalIdField)return e.globalIdField;if(e.fields){for(const r of e.fields)if(r.type==="esriFieldTypeGlobalID")return r.name}}get id(){return this._get("id")??Re++}set id(t){var e,r,i;this._get("id")!==t&&(((i=(r=(e=this.layer)==null?void 0:e.capabilities)==null?void 0:r.exportMap)==null?void 0:i.supportsDynamicLayers)!==!1?this._set("id",t):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}readIsTable(t,e){return e.type==="Table"}set labelingInfo(t){this._setAndNotifyLayer("labelingInfo",t)}writeLabelingInfo(t,e,r,i){t&&t.length&&(e.layerDefinition={drawingInfo:{labelingInfo:t.map(s=>s.write({},i))}})}set labelsVisible(t){this._setAndNotifyLayer("labelsVisible",t)}set layer(t){var e;this._set("layer",t),(e=this.sublayers)==null||e.forEach(r=>r.layer=t)}set listMode(t){this._set("listMode",t)}set minScale(t){this._setAndNotifyLayer("minScale",t)}readMinScale(t,e){var r;return e.minScale||((r=e.layerDefinition)==null?void 0:r.minScale)||0}set maxScale(t){this._setAndNotifyLayer("maxScale",t)}readMaxScale(t,e){var r;return e.maxScale||((r=e.layerDefinition)==null?void 0:r.maxScale)||0}readObjectIdFieldFromService(t,e){var i;if((e=e.layerDefinition||e).objectIdField)return e.objectIdField;const r=(i=e.fields)==null?void 0:i.find(s=>s.type==="esriFieldTypeOID");return r==null?void 0:r.name}set opacity(t){this._setAndNotifyLayer("opacity",t)}readOpacity(t,e){var i;const{layerDefinition:r}=e;return 1-.01*((r==null?void 0:r.transparency)??((i=r==null?void 0:r.drawingInfo)==null?void 0:i.transparency)??0)}writeOpacity(t,e,r,i){e.layerDefinition={drawingInfo:{transparency:100-100*t}}}writeParent(t,e){this.parent&&this.parent!==this.layer?e.parentLayerId=oe(this.parent.id):e.parentLayerId=-1}get queryTask(){var u;if(!this.layer)return null;const{capabilities:t,fieldsIndex:e,layer:r,url:i}=this,{spatialReference:s}=r,l="gdbVersion"in r?r.gdbVersion:void 0,p=le("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF);return new Fe({fieldsIndex:e,gdbVersion:l,pbfSupported:p,queryAttachmentsSupported:((u=t==null?void 0:t.operations)==null?void 0:u.supportsQueryAttachments)??!1,sourceSpatialReference:s,url:i})}set renderer(t){if(ne(t,this.fieldsIndex),t){for(const e of t.getSymbols())if(ue(e)){E.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",t)}get source(){return this._get("source")||new M({mapLayerId:this.id})}set source(t){this._setAndNotifyLayer("source",t)}set sublayers(t){this._handleSublayersChange(t,this._get("sublayers")),this._set("sublayers",t)}castSublayers(t){return pe(k.ofType(A),t)}writeSublayers(t,e,r){var i;(i=this.sublayers)!=null&&i.length&&(e[r]=this.sublayers.map(s=>s.id).toArray().reverse())}readTitle(t,e){var r;return((r=e.layerDefinition)==null?void 0:r.name)??e.name}readTypeIdField(t,e){let r=(e=e.layerDefinition||e).typeIdField;if(r&&e.fields){r=r.toLowerCase();const i=e.fields.find(s=>s.name.toLowerCase()===r);i&&(r=i.name)}return r}get url(){var i;const t=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,e=this.source;if(!t)return null;if(this._lastParsedUrl=t,(e==null?void 0:e.type)==="map-layer")return`${t.path}/${e.mapLayerId}`;const r={layer:JSON.stringify({source:this.source})};return`${t.path}/dynamicLayer?${ye(r)}`}set url(t){this._overrideIfSome("url",t)}set visible(t){this._setAndNotifyLayer("visible",t)}writeVisible(t,e,r,i){e[r]=this.getAtOrigin("defaultVisibility","service")||t}clone(){const{store:t}=P(this),e=new A;return P(e).store=t.clone(Me),this.commitProperty("url"),e._lastParsedUrl=this._lastParsedUrl,e}createPopupTemplate(t){return je(this,t)}createQuery(){return new de({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var s;if(this.hasOwnProperty("sublayers"))return null;const t=(await ce(async()=>{const{default:l}=await import("./FeatureLayer-DS_8gZka.js");return{default:l}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]))).default,{layer:e,url:r}=this;let i;if(r&&this.originIdOf("url")>y.SERVICE)i=new t({url:r});else{if(!(e!=null&&e.parsedUrl))throw new f("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const l=e.parsedUrl;i=new t({url:l.path}),l&&this.source&&(this.source.type==="map-layer"?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source)}}return(e==null?void 0:e.refreshInterval)!=null&&(i.refreshInterval=e.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=T(this.floorInfo)),this.originIdOf("labelingInfo")>y.SERVICE&&(i.labelingInfo=T(this.labelingInfo)),this.originIdOf("labelsVisible")>y.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>y.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>y.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>y.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>y.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>y.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>y.DEFAULTS&&(i.popupTemplate=T(this.popupTemplate)),this.originIdOf("renderer")>y.SERVICE&&(i.renderer=T(this.renderer)),((s=this.source)==null?void 0:s.type)==="data-layer"&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>y.DEFAULTS&&(i.title=this.title),(e==null?void 0:e.type)==="map-image"&&e.originIdOf("customParameters")>y.DEFAULTS&&(i.customParameters=e.customParameters),(e==null?void 0:e.type)==="tile"&&e.originIdOf("customParameters")>y.DEFAULTS&&(i.customParameters=e.customParameters),i}getField(t){return this.fieldsIndex.get(t)}getFeatureType(t){return Oe(this.types,this.typeIdField,t)}getFieldDomain(t,e){const r=e==null?void 0:e.feature,i=this.getFeatureType(r);if(i){const s=i.domains&&i.domains[t];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(t)}async queryAttachments(t,e){var m,I;await this.load(),t=Te.from(t);const r=this.capabilities;if(!((m=r==null?void 0:r.data)!=null&&m.supportsAttachment))throw new f("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:l,num:p,size:u,start:d,where:h}=t;if(!((I=r==null?void 0:r.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(l==null?void 0:l.length)>0||(u==null?void 0:u.length)>0||p||d||h))throw new f("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(s!=null&&s.length||l!=null&&l.length||h))throw new f("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);return this.queryTask.executeAttachmentQuery(t,e)}async queryFeatureCount(t=this.createQuery(),e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryFeatureCount:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryFeatureCount:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeForCount(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}async queryFeatures(t=this.createQuery(),e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryFeatures:not-supported","this layer has no url.");const r=await this.queryTask.execute(t,{...e,query:{...(i=this.layer)==null?void 0:i.customParameters,token:(s=this.layer)==null?void 0:s.apiKey}});if(r!=null&&r.features)for(const l of r.features)l.sourceLayer=this;return r}async queryObjectIds(t=this.createQuery(),e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryObjectIds:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryObjectIds:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeForIds(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}async queryRelatedFeatures(t,e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryRelatedFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryRelatedFeatures:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeRelationshipQuery(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}async queryRelatedFeaturesCount(t,e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryRelatedFeaturesCount:not-supported","this layer doesn't support queries.");if(!this.capabilities.queryRelated.supportsCount)throw new f("queryRelatedFeaturesCount:not-supported","this layer doesn't support query related counts.");if(!this.url)throw new f("queryRelatedFeaturesCount:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeRelationshipQueryForCount(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}toExportImageJSON(t){var l,p;const e={id:this.id,source:((l=this.source)==null?void 0:l.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},r=he(t,this.definitionExpression);r!=null&&(e.definitionExpression=r);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((u,d)=>(u[d]=this.originIdOf(d),u),{});if(Object.keys(i).some(u=>i[u]>y.SERVICE)){const u=e.drawingInfo={};if(i.renderer>y.SERVICE&&(u.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>y.SERVICE&&(u.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>y.SERVICE)if(this.labelingInfo){!this.loaded&&((p=this.labelingInfo)!=null&&p.some(h=>!h.labelPlacement))&&E.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let d=this.labelingInfo;this.geometryType!=null&&(d=De(this.labelingInfo,$.toJSON(this.geometryType))),u.showLabels=!0,u.labelingInfo=d.filter(h=>h.labelPlacement).map(h=>h.toJSON({origin:"service",layer:this.layer}))}else u.showLabels=!1;i.opacity>y.SERVICE&&(u.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(u.renderer)}return e}_assignDefaultSymbolColors(t){this._forEachSimpleMarkerSymbols(t,e=>{var r;e.color||e.style!=="esriSMSX"&&e.style!=="esriSMSCross"||((r=e.outline)!=null&&r.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(t,e){if(t){const r=("uniqueValueInfos"in t?t.uniqueValueInfos:"classBreakInfos"in t?t.classBreakInfos:null)??[];for(const i of r)C(i.symbol)&&e(i.symbol);"symbol"in t&&C(t.symbol)&&e(t.symbol),"defaultSymbol"in t&&C(t.defaultSymbol)&&e(t.defaultSymbol)}}_setAndNotifyLayer(t,e){var u,d,h,m;const r=this.layer,i=this._get(t);let s,l;switch(t){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",l="supportsModification"}const p=P(this).getDefaultOrigin();if(p!=="service"){if(s&&((h=(d=(u=this.layer)==null?void 0:u.capabilities)==null?void 0:d.exportMap)==null?void 0:h[s])===!1)return void this._logLockedError(t,`capability not available 'layer.capabilities.exportMap.${s}'`);if(l&&((m=this.capabilities)==null?void 0:m.exportMap[l])===!1)return void this._logLockedError(t,`capability not available 'capabilities.exportMap.${l}'`)}t!=="source"||this.loadStatus==="not-loaded"?(this._set(t,e),p!=="service"&&i!==e&&r&&r.emit&&r.emit("sublayer-update",{propertyName:t,target:this})):this._logLockedError(t,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(t,e){e&&(e.forEach(r=>{r.parent=null,r.layer=null}),this.removeAllHandles()),t&&(t.forEach(r=>{r.parent=this,r.layer=this.layer}),this.addHandles([t.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),t.on("after-remove",({item:r})=>{r.parent=null,r.layer=null}),t.on("before-changes",r=>{var i,s,l;(((l=(s=(i=this.layer)==null?void 0:i.capabilities)==null?void 0:s.exportMap)==null?void 0:l.supportsSublayersChanges)??1)||(E.getLogger(this).error(new f("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),r.preventDefault())})]))}_logLockedError(t,e){const{layer:r,declaredClass:i}=this;E.getLogger(i).error(new f("sublayer:locked",`Property '${String(t)}' can't be changed on Sublayer from the layer '${r==null?void 0:r.id}'`,{reason:e,sublayer:this,layer:r}))}_getLayerDomain(t){var e;return((e=this.fieldsIndex.get(t))==null?void 0:e.domain)??null}};o.test={isMapImageLayerOverridePolicy:t=>t===g||t===j,isTileImageLayerOverridePolicy:t=>t===V},a([n({readOnly:!0})],o.prototype,"capabilities",void 0),a([S("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),a([n()],o.prototype,"defaultPopupTemplate",null),a([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:j}}})],o.prototype,"definitionExpression",null),a([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),a([S("service","maxScaleRange",["minScale","maxScale"])],o.prototype,"readMaxScaleRange",null),a([n({type:[be],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),a([n({readOnly:!0})],o.prototype,"fieldsIndex",null),a([n({type:Ae,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:j},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),a([n({type:X,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([n({type:$.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:$.read}}}}})],o.prototype,"geometryType",void 0),a([n({type:String})],o.prototype,"globalIdField",void 0),a([S("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),a([n({type:q,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),a([n({readOnly:!0})],o.prototype,"isTable",void 0),a([S("service","isTable",["type"])],o.prototype,"readIsTable",null),a([n({value:null,type:[Pe],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:g}}})],o.prototype,"labelingInfo",null),a([v("labelingInfo")],o.prototype,"writeLabelingInfo",null),a([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:g}}})],o.prototype,"labelsVisible",null),a([n({value:null})],o.prototype,"layer",null),a([n({type:String,json:{write:{overridePolicy:V}}})],o.prototype,"layerItemId",void 0),a([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:_}}})],o.prototype,"legendEnabled",void 0),a([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),a([n({type:Number,value:0,json:{write:{overridePolicy:g}}})],o.prototype,"minScale",null),a([S("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),a([n({type:Number,value:0,json:{write:{overridePolicy:g}}})],o.prototype,"maxScale",null),a([S("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),a([n()],o.prototype,"objectIdField",void 0),a([S("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),a([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:g}}})],o.prototype,"opacity",null),a([S("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),a([v("opacity")],o.prototype,"writeOpacity",null),a([n({json:{type:q,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:g}}})],o.prototype,"parent",void 0),a([v("parent")],o.prototype,"writeParent",null),a([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(t,e)=>!e.disablePopup},write:{target:"disablePopup",overridePolicy:_,writer(t,e,r){e[r]=!t}}}})],o.prototype,"popupEnabled",void 0),a([n({type:me,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:_}}})],o.prototype,"popupTemplate",void 0),a([n({readOnly:!0})],o.prototype,"queryTask",null),a([n({type:[qe],readOnly:!0,json:{origins:{service:{read:{source:"layerDefinition.relationships"}}}}})],o.prototype,"relationships",void 0),a([n({types:Se,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:g},origins:{"web-scene":{types:ge,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:g}}}}})],o.prototype,"renderer",null),a([n({types:{key:"type",base:null,typeMap:{"data-layer":W,"map-layer":M}},cast(t){if(t){if("mapLayerId"in t)return G(M,t);if("dataSource"in t)return G(W,t)}return t},json:{name:"layerDefinition.source",write:{overridePolicy:g}}})],o.prototype,"source",null),a([n()],o.prototype,"sourceJSON",void 0),a([n({type:z,json:{origins:{service:{read:{source:"layerDefinition.extent.spatialReference"}}}}})],o.prototype,"spatialReference",void 0),a([n({value:null,json:{type:[q],write:{target:"subLayerIds",allowNull:!0,overridePolicy:g}}})],o.prototype,"sublayers",null),a([Ie("sublayers")],o.prototype,"castSublayers",null),a([v("sublayers")],o.prototype,"writeSublayers",null),a([n({type:String,json:{name:"name",write:{overridePolicy:_}}})],o.prototype,"title",void 0),a([S("service","title",["name","layerDefinition.name"])],o.prototype,"readTitle",null),a([n({type:String})],o.prototype,"typeIdField",void 0),a([n({json:{read:!1},readOnly:!0,value:"sublayer"})],o.prototype,"type",void 0),a([S("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([n({type:[_e],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),a([n({type:String,json:{name:"layerUrl",write:{overridePolicy:V}}})],o.prototype,"url",null),a([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:g}}})],o.prototype,"visible",null),a([v("visible")],o.prototype,"writeVisible",null),o=A=a([N("esri.layers.support.Sublayer")],o);const U=o;function $e(t,e){const r=[],i={};return t&&t.forEach(s=>{const l=new U;if(l.read(s,e),i[l.id]=l,s.parentLayerId!=null&&s.parentLayerId!==-1){const p=i[s.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(l)}else r.unshift(l)}),r}const D=k.ofType(U);function Y(t,e){t&&t.forEach(r=>{e(r),r.sublayers&&r.sublayers.length&&Y(r.sublayers,e)})}const tt=t=>{let e=class extends t{constructor(...r){super(...r),this.allSublayers=new Le({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[y.SERVICE]:{},[y.PORTAL_ITEM]:{},[y.WEB_SCENE]:{},[y.WEB_MAP]:{}},this.subtables=null,this.addHandles([H(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),K),H(()=>this.subtables,(i,s)=>this._handleSublayersChange(i,s),K)])}destroy(){this.allSublayers.destroy()}readSublayers(r,i){if(!i||!r)return;const{sublayersSourceJSON:s}=this,l=L(i.origin);if(l<y.SERVICE||(s[l]={context:i,visibleLayers:r.visibleLayers||s[l].visibleLayers,layers:r.layers||s[l].layers},l>y.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:u}=this.createSublayersForOrigin("web-document"),d=P(this);d.setDefaultOrigin(u),this._set("sublayers",new D(p)),d.setDefaultOrigin("user")}findSublayerById(r){return this.allSublayers.find(i=>i.id===r)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(r){const i=L(r==="web-document"?"web-map":r);let s=y.SERVICE,l=this.sublayersSourceJSON[y.SERVICE].layers,p=this.sublayersSourceJSON[y.SERVICE].context,u=null;const d=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(c=>c<=i);for(const c of d){const b=this.sublayersSourceJSON[c];Ve(b.layers)&&(s=c,l=b.layers,p=b.context,b.visibleLayers&&(u={visibleLayers:b.visibleLayers,context:b.context}))}const h=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(c=>c>s&&c<=i);let m=null;for(const c of h){const{layers:b,visibleLayers:F,context:O}=this.sublayersSourceJSON[c];b&&(m={layers:b,context:O}),F&&(u={visibleLayers:F,context:O})}const I=$e(l,p),w=new Map,x=new Set;if(m)for(const c of m.layers)w.set(c.id,c);if(u!=null&&u.visibleLayers)for(const c of u.visibleLayers)x.add(c);return Y(I,c=>{m&&c.read(w.get(c.id),m.context),u&&c.read({defaultVisibility:x.has(c.id)},u.context)}),{origin:we(s),sublayers:new D({items:I})}}read(r,i){super.read(r,i),this.readSublayers(r,i)}_handleSublayersChange(r,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.removeHandles("sublayers-owner")),r&&(r.forEach(s=>{s.parent=this,s.layer=this}),this.addHandles([r.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),r.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.addHandles(r.on("before-changes",s=>{E.getLogger("esri.layers.TileLayer").error(new f("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([n({readOnly:!0})],e.prototype,"allSublayers",void 0),a([n({readOnly:!0,type:k.ofType(U)})],e.prototype,"serviceSublayers",void 0),a([n({value:null,type:D,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],e.prototype,"sublayers",void 0),a([n({readOnly:!0})],e.prototype,"sublayersSourceJSON",void 0),a([n({type:D,json:{read:{source:"tables"}}})],e.prototype,"subtables",void 0),e=a([N("esri.layers.mixins.SublayersOwner")],e),e};export{et as f,tt as m,U as t};
//# sourceMappingURL=SublayersOwner-CMMnJbsA.js.map
