import{j as r,m as s,k as j,g8 as L,dx as N,bv as b,ag as C,gG as z,I as F,ey as k,ez as H,gz as I,fk as $,n as J,R as U,aX as V,cT as O,$ as Z,gA as W,gB as K,eF as X}from"./index-Du44_A8J.js";import{S as Y}from"./MultiOriginJSONSupport-9C55E1A7.js";import{R as ee,x as T,C as D,P as te,O as re,N as oe,q as se,v as ie,k as pe}from"./ogcFeatureUtils-Dhh8ifLZ.js";import{s as ne}from"./capabilities-Y9lFlGVh.js";import{i as ae}from"./APIKeyMixin-DkioXOJh.js";import{e as le}from"./CustomParametersMixin-MXEEEQ7u.js";import{c as ue}from"./FeatureEffectLayer-BzcW7R1Q.js";import{c as de}from"./FeatureReductionLayer-dnX54yRr.js";import{b as ce}from"./OperationalLayer-DzWDKpRJ.js";import{p as ye}from"./OrderedLayer-BZsNZEvc.js";import{j as me}from"./PortalLayer-D0ThxHis.js";import{f as fe}from"./RefreshableLayer-WGNO3V1X.js";import{l as he}from"./TemporalLayer-CxDKIA9q.js";import{c as ge,p as ve,d as Se,l as Ce,s as we,y as xe}from"./commonProperties-BK1AfWBs.js";import{n as Re}from"./FeatureType-CT9wGYTt.js";import{s as be}from"./fieldProperties-Cm-I8Wya.js";import{C as Fe,n as Ie}from"./labelingInfo-DdMTUeRH.js";import{p as $e}from"./popupUtils-DagVpAP6.js";import"./featureConversionUtils-DZlLcsaX.js";import"./geojson-B1SitaVy.js";import"./date-DLgTylpo.js";import"./clientSideDefaults-DVieS1Yh.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./sourceUtils-DPxDsKLB.js";import"./FeatureEffect-CnClIzlo.js";import"./FeatureReductionSelection-DpYTGJoh.js";import"./featureLayerUtils-31c3e_wZ.js";import"./uuid-Cl5lrJ4c.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-BaznYmtR.js";import"./portalItemUtils-BEbjr1pu.js";import"./TimeInfo-CUE_bnyo.js";import"./FeatureTemplate-CPKD3Kwx.js";import"./labelUtils-CqoQ4tTv.js";let d=class extends L{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:i,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:i,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(i=>N.fromJSON(i))}queryFeaturesJSON(e,t={}){const i=this.getSource();return this.load(t).then(()=>ee(i,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const i=new RegExp(`^${b(t)}$`,"i");return e.conformsTo.some(p=>i.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:ne,editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var i,p,n,l,a;const t=(i=e==null?void 0:e.components)==null?void 0:i.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??T,i=D(t);return i==null?C.WGS84:new C({wkid:i})}_getSupportedSpatialReferences(e,t){const i="#/crs",p=e.crs??[T],n=p.includes(i)?p.filter(a=>a!==i).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const i=t!=null?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:m,hasZ:f,objectIdField:P,timeInfo:h,url:q}=e,_={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:z.toJSON(m),hasZ:f??!1,objectIdField:P,timeInfo:h==null?void 0:h.toJSON()},c={apiKey:p,customParameters:l,signal:i},g=await te(q,c),[w,x]=await Promise.all([re(g,c),oe(g,c)]);if(!this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new F("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=x.collections.find(({id:u})=>u===n);if(!y)throw new F("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const E=this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await se(g,c):null,R=await ie(y,_,c),B=this._getMaxRecordCount(E),A=this._getCapabilities(R.hasZ,B),G=this._getStorageSpatialReference(y).toJSON(),Q=this._getSupportedSpatialReferences(y,x),M=new RegExp(`^${b(pe)}`,"i"),v={};for(const u of Q){const S=D(u);S!=null&&(v[S]||(v[S]=u.replace(M,"")))}this.featureDefinition={capabilities:A,collection:y,layerDefinition:R,spatialReference:G,supportedCrs:v}}};r([s()],d.prototype,"featureDefinition",void 0),r([s({constructOnly:!0})],d.prototype,"layer",void 0),r([s()],d.prototype,"type",void 0),d=r([j("esri.layers.graphics.sources.OGCFeatureSource")],d);const Oe=be();let o=class extends ae(le(de(ue(k(ye(he(H(ce(me(fe(Y(X)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return $e(this,e)}createQuery(){return new $}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let i,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(m=>{var f;return m.id==l&&(i=(f=m.domains)==null?void 0:f[e],(i==null?void 0:i.type)==="inherited"&&(i=this._getLayerDomain(e)),!0)})),p||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures($.from(e)||this.createQuery(),t)).then(i=>{var p;return(p=i==null?void 0:i.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),i})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),I(this.renderer,this.fieldsIndex),J(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([s({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([s({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([s({type:String})],o.prototype,"copyright",void 0),r([s({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([s({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([s({type:String})],o.prototype,"displayField",void 0),r([s({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([s(ge)],o.prototype,"elevationInfo",void 0),r([s({type:[U],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([s(Oe.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([s({readOnly:!0,type:V,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([s({type:O.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:O.read}}}}})],o.prototype,"geometryType",void 0),r([s({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([s({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([s({type:[Fe],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([s(ve)],o.prototype,"labelsVisible",void 0),r([s(Se)],o.prototype,"legendEnabled",void 0),r([s({type:Number})],o.prototype,"maxRecordCount",void 0),r([s({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([s({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([s(Ce)],o.prototype,"popupEnabled",void 0),r([s({type:Z,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([s({types:W,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:K,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([s(we)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([s({readOnly:!0})],o.prototype,"source",void 0),r([s({readOnly:!0,type:C,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([s({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([s({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([s({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([s({type:[Re]})],o.prototype,"types",void 0),r([s(xe)],o.prototype,"url",void 0),o=r([j("esri.layers.OGCFeatureLayer")],o);const lt=o;export{lt as default};
//# sourceMappingURL=OGCFeatureLayer-BDyGqv7B.js.map
