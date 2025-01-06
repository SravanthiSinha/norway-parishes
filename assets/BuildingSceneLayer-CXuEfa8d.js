import{ex as ce,j as t,m as i,o as O,eY as he,k as p,g8 as ee,hX as te,Z as me,s as F,U as re,fk as ge,l4 as fe,I,d7 as ve,aX as be,ag as ie,gK as Se,gB as we,$ as $e,bc as se,M as xe,ae as b,Y as Fe,l5 as Ie,P as g,b5 as d,l6 as Oe,ez as je,bi as Le,z as Te,eW as Be,eF as Ee}from"./index-Du44_A8J.js";import{n as Ae}from"./CollectionFlattener-C_SkK2OR.js";import{m as Pe,S as _e}from"./MultiOriginJSONSupport-9C55E1A7.js";import oe from"./FeatureLayer-Cmbe5QUd.js";import{m as _,l as qe,g as Re,d as Ne,c as Me}from"./commonProperties-BK1AfWBs.js";import{t as ke}from"./capabilities-Y9lFlGVh.js";import{s as Ve}from"./fieldProperties-Cm-I8Wya.js";import{r as Qe,R as Ue,V as Z}from"./SceneService-CJiImdXb.js";import{p as Ke,a as De,y as Ce,m as Ze}from"./I3SLayerDefinitions-Ciy9RvUA.js";import{p as He}from"./popupUtils-DagVpAP6.js";import{V as Je}from"./I3SUtil-BBzStV_u.js";import{n as Xe,p as ze}from"./popupUtils-B8B8LhWL.js";import{i as Ge}from"./APIKeyMixin-DkioXOJh.js";import{l as We}from"./ArcGISService-B0vN2MGD.js";import{e as Ye}from"./CustomParametersMixin-MXEEEQ7u.js";import{b as et}from"./OperationalLayer-DzWDKpRJ.js";import{j as tt}from"./PortalLayer-D0ThxHis.js";import{s as rt}from"./associatedFeatureServiceUtils-DKoeq8sb.js";import{n as it}from"./uuid-Cl5lrJ4c.js";import{$ as H,Z as st,w as ot}from"./elevationInfoUtils-BY0Y81Vc.js";import"./FeatureLayerBase-Lwh763a1.js";import"./HeightModelInfo-B1CAuLNS.js";import"./featureLayerUtils-31c3e_wZ.js";import"./LayerFloorInfo-RaJcB56g.js";import"./Relationship-BXPxcFQW.js";import"./serviceCapabilitiesUtils-m9_-oJzc.js";import"./editsZScale-BTyrCXaU.js";import"./EditBusLayer-B4jg0q7p.js";import"./FeatureEffectLayer-BzcW7R1Q.js";import"./FeatureEffect-CnClIzlo.js";import"./FeatureReductionLayer-dnX54yRr.js";import"./FeatureReductionSelection-DpYTGJoh.js";import"./labelingInfo-DdMTUeRH.js";import"./labelUtils-CqoQ4tTv.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-BZsNZEvc.js";import"./OrderByInfo-BaznYmtR.js";import"./RefreshableLayer-WGNO3V1X.js";import"./TemporalLayer-CxDKIA9q.js";import"./TimeInfo-CUE_bnyo.js";import"./FeatureTemplate-CPKD3Kwx.js";import"./FeatureType-CT9wGYTt.js";import"./versionUtils-D5ibMXOg.js";import"./styleUtils-C_RlL1q0.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./portalItemUtils-BEbjr1pu.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-BZ8M6Jns.js";import"./resourceUtils-BMPcZ2DB.js";import"./resourceUtils-C9UEwx56.js";import"./saveUtils-DI2D2yhF.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-DeRCSSXC.js";import"./projectVectorToVector-Drf7pV52.js";import"./projectPointToVector-BlI5xnHp.js";import"./sphere-DF4hN4iF.js";import"./mat3-BM-4VqQo.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-DU5lC3C7.js";import"./quatf64-aQ5IuZRd.js";import"./I3SBinaryReader-BJGQI0zM.js";import"./VertexAttribute-BdZWZuT1.js";import"./floatRGBA-BdBVZx5e.js";import"./NormalAttribute.glsl-BGzZCxE_.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-B_gsjNrC.js";import"./quat-DtlVh11w.js";import"./spatialReferenceEllipsoidUtils-DTu3db9D.js";import"./computeTranslationToOriginAndRotation-F6558tPf.js";import"./ViewingMode-dBUh39ak.js";let y=class extends ce(Pe){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(r,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([i({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([O("service","title",["alias","name"])],y.prototype,"readTitle",null),t([i()],y.prototype,"layer",void 0),t([i({type:he,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([O("service","id")],y.prototype,"readIdOnlyOnce",null),t([i(_(String))],y.prototype,"modelName",void 0),t([i(_(Boolean))],y.prototype,"isEmpty",void 0),t([i({type:Boolean,nonNullable:!0})],y.prototype,"legendEnabled",void 0),t([i({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([i({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const ae=y,J=Ve();let o=class extends ee.LoadableMixin(te(ae)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new me(this.fields)}readAssociatedLayer(e,r){const s=this.layer.associatedFeatureServiceItem,a=r.associatedLayerID;return s!=null&&typeof a=="number"?new oe({portalItem:s,customParameters:this.customParameters,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,s=this._fetchService(r).then(()=>{this.indexInfo=Qe(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,F.getLogger(this),r)});return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){return He(this,e)}async _fetchService(e){const r=(await re(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var a,n,c;const s=(n=(a=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:a.domains)==null?void 0:n[e];return s&&s.type!=="inherited"?s:((c=this.getField(e))==null?void 0:c.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:ke,{query:r,data:{supportsZ:s,supportsM:a,isVersioned:n}}=e;return{query:r,data:{supportsZ:s,supportsM:a,isVersioned:n}}}createQuery(){const e=new ge;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),r)).then(s=>{if(s!=null&&s.features)for(const a of s.features)a.layer=this.layer,a.sourceLayer=this;return s})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const s=fe(this.fieldsIndex,await Xe(this,ze(this)));return Je(this.parsedUrl.path,this.attributeStorageInfo,e,r,s,this.apiKey,this.customParameters)}async queryCachedFeature(e,r){const s=await this.queryCachedAttributes(e,[r]);if(!s||s.length===0)throw new I("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new ve({attributes:s[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new I("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new I("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([i({readOnly:!0})],o.prototype,"parsedUrl",null),t([i({type:Ke,readOnly:!0})],o.prototype,"nodePages",void 0),t([i({type:[De],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([i({type:[Ce],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([i({type:[Ze],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([i({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([i({readOnly:!0})],o.prototype,"store",void 0),t([i({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([i({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([i(J.fields)],o.prototype,"fields",void 0),t([i({readOnly:!0})],o.prototype,"fieldsIndex",null),t([i({readOnly:!0,type:oe})],o.prototype,"associatedLayer",void 0),t([O("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([i(J.outFields)],o.prototype,"outFields",void 0),t([i({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([i({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([i({readOnly:!0,type:String})],o.prototype,"apiKey",null),t([i({readOnly:!0,type:String})],o.prototype,"customParameters",null),t([i({readOnly:!0,type:be})],o.prototype,"fullExtent",null),t([i({readOnly:!0,type:ie})],o.prototype,"spatialReference",null),t([i({readOnly:!0})],o.prototype,"version",null),t([i({readOnly:!0,type:Se})],o.prototype,"elevationInfo",null),t([i({readOnly:!0,type:Number})],o.prototype,"minScale",null),t([i({readOnly:!0,type:Number})],o.prototype,"maxScale",null),t([i({readOnly:!0,type:Number})],o.prototype,"effectiveScaleRange",null),t([i({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([i({types:we,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([i(qe)],o.prototype,"popupEnabled",void 0),t([i({type:$e,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([i({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([i({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([i()],o.prototype,"types",null),t([i()],o.prototype,"typeIdField",null),t([i({json:{write:!1}}),se(new xe({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([i()],o.prototype,"geometryType",null),t([i()],o.prototype,"profile",null),t([i({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),t([i({readOnly:!0})],o.prototype,"statisticsInfo",void 0),o=t([p("esri.layers.buildingSublayers.BuildingComponentSublayer")],o);const q=o;var R;const X={type:b,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ne}}},read:!1}};function ne(e,r,s){if(e&&Array.isArray(e))return new b(e.map(a=>{const n=at(a);if(n){const c=new n;return c.read(a,s),c}return s!=null&&s.messages&&a&&s.messages.push(new Fe("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:s})),null}))}let m=R=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Ie(this,e=>R.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function at(e){return e.layerType==="group"?m:q}t([i({type:["hide","show","hide-children"],json:{write:!0}})],m.prototype,"listMode",void 0),t([i(X)],m.prototype,"sublayers",void 0),m=R=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],m),function(e){function r(s,a){s.forEach(n=>{a(n),n.type==="building-group"&&r(n.sublayers,a)})}e.sublayersProperty=X,e.readSublayers=ne,e.forEachSublayer=r}(m||(m={}));const v=m;let j=class extends g{constructor(){super(...arguments),this.type=null}};t([i({type:String,readOnly:!0,json:{write:!0}})],j.prototype,"type",void 0),j=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],j);const le=j;var N;let S=N=class extends g{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new N({filterType:this.filterType,filterValues:d(this.filterValues)})}};t([i({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([i({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=N=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const nt=S;var M;const lt=b.ofType(nt);let L=M=class extends g{clone(){return new M({filterTypes:d(this.filterTypes)})}};t([i({type:lt,json:{write:!0}})],L.prototype,"filterTypes",void 0),L=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],L);const pt=L;var k;const yt=b.ofType(pt);let w=k=class extends le{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:d(this.filterBlocks)})}};t([i({type:["checkbox"]})],w.prototype,"type",void 0),t([i({type:yt,json:{write:!0}})],w.prototype,"filterBlocks",void 0),w=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],w);const z=w;let T=class extends g{};t([i({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=t([p("esri.layers.support.BuildingFilterMode")],T);const A=T;var V;let B=V=class extends A{constructor(){super(...arguments),this.type="solid"}clone(){return new V}};t([i({type:["solid"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=V=t([p("esri.layers.support.BuildingFilterModeSolid")],B);const Q=B;var U;let $=U=class extends A{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new U({edges:d(this.edges)})}};t([se({wireFrame:"wire-frame"})],$.prototype,"type",void 0),t([i(Oe)],$.prototype,"edges",void 0),$=U=t([p("esri.layers.support.BuildingFilterModeWireFrame")],$);const G=$;var K;let E=K=class extends A{constructor(){super(...arguments),this.type="x-ray"}clone(){return new K}};t([i({type:["x-ray"],readOnly:!0,json:{write:!0}})],E.prototype,"type",void 0),E=K=t([p("esri.layers.support.BuildingFilterModeXRay")],E);const W=E;var D;const ut={nonNullable:!0,types:{key:"type",base:A,typeMap:{solid:Q,"wire-frame":G,"x-ray":W}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return Q.fromJSON(e);case"wireFrame":return G.fromJSON(e);case"x-ray":return W.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let f=D=class extends g{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Q,this.title=""}clone(){return new D({filterExpression:this.filterExpression,filterMode:d(this.filterMode),title:this.title})}};t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"filterExpression",void 0),t([i(ut)],f.prototype,"filterMode",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"title",void 0),f=D=t([p("esri.layers.support.BuildingFilterBlock")],f);const dt=f;var C;const ct=b.ofType(dt);let h=C=class extends g{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=it(),this.name=null}clone(){return new C({description:this.description,filterBlocks:d(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:d(this.filterAuthoringInfo)})}};t([i({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([i({type:ct,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([i({types:{key:"type",base:le,typeMap:{checkbox:z}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?z.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=C=t([p("esri.layers.support.BuildingFilter")],h);const ht=h;let u=class extends g{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([i({type:String})],u.prototype,"fieldName",void 0),t([i({type:String})],u.prototype,"modelName",void 0),t([i({type:String})],u.prototype,"label",void 0),t([i({type:Number})],u.prototype,"min",void 0),t([i({type:Number})],u.prototype,"max",void 0),t([i({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([i({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([p("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],u);let x=class extends ee.LoadableMixin(te(g)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(F.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await re(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([i({constructOnly:!0,type:String})],x.prototype,"url",void 0),t([i({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],x.prototype,"fields",null),x=t([p("esri.layers.support.BuildingSummaryStatistics")],x);const pe=x,ye=b.ofType(ht),ue=d(v.sublayersProperty);var Y;const P=(Y=ue.json)==null?void 0:Y.origins;P&&(P["web-scene"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},P["portal-item"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let l=class extends Ue(We(et(tt(je(_e(Ye(Ge(Ee)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Ae({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new ye,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,s){const a=v.readSublayers(e,r,s);return v.forEachSublayer(a,n=>n.layer=this),this._allSublayerOverrides&&(mt(a,this._allSublayerOverrides),this._allSublayerOverrides=null),a}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?ft(this.sublayers,e,r):this._allSublayerOverrides&&vt(this._allSublayerOverrides,e,r)),e}read(e,r){if(super.read(e,r),((r==null?void 0:r.origin)==="web-scene"||(r==null?void 0:r.origin)==="portal-item")&&Array.isArray(e==null?void 0:e.sublayers)){const s=gt(e.sublayers,r);this.sublayers?de(this.sublayers,s):(this._allSublayerOverrides??(this._allSublayerOverrides=new Map),this._allSublayerOverrides.set(r.origin,s))}}readSummaryStatistics(e,r){var s;if(typeof r.statisticsHRef=="string"){const a=Le((s=this.parsedUrl)==null?void 0:s.path,r.statisticsHRef);return new pe({url:a})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Te).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return Be(this,e=>{v.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(Z.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(Z.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new I("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await rt(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){F.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";H(F.getLogger(this),st(r,"absolute-height",e)),H(F.getLogger(this),ot(r,e))}};function mt(e,r){r.forEach(s=>de(e,s))}function de(e,r){const{overrides:s,context:a}=r;v.forEachSublayer(e,n=>n.read(s.get(n.id),a))}function gt(e,r){var a;const s=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?s.set(n.id,n):(a=r.messages)==null||a.push(new I("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:s,context:r}}function ft(e,r,s){const a=[];v.forEachSublayer(e,n=>{const c=n.write({},s);Object.keys(c).length>1&&a.push(c)}),a.length>0&&(r.sublayers=a)}function vt(e,r,s){const a=(s==null?void 0:s.origin)&&e.get(s.origin);a&&(r.sublayers=[],a.overrides.forEach(n=>{r.sublayers.push(d(n))}))}t([i({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],l.prototype,"allSublayers",void 0),t([i(ue)],l.prototype,"sublayers",void 0),t([O("service","sublayers")],l.prototype,"readSublayers",null),t([i({type:ye,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([i({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([i({readOnly:!0,type:pe})],l.prototype,"summaryStatistics",void 0),t([O("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([i({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([i(Re)],l.prototype,"fullExtent",void 0),t([i(Ne)],l.prototype,"legendEnabled",void 0),t([i({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([i(_(ie))],l.prototype,"spatialReference",void 0),t([i(Me)],l.prototype,"elevationInfo",null),t([i({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([i()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([p("esri.layers.BuildingSceneLayer")],l);const Vr=l;export{Vr as default};
//# sourceMappingURL=BuildingSceneLayer-CXuEfa8d.js.map
