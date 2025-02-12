import{ey as ce,j as t,m as s,o as x,eZ as he,k as p,g9 as ee,hY as te,Z as me,s as I,U as re,fl as fe,l5 as ge,I as O,d6 as ve,aX as be,ag as se,gP as Se,gF as we,$ as $e,be as ie,P as Fe,l6 as Ie,ae as b,Y as Oe,O as f,b7 as d,l7 as xe,eA as je,bk as Le,z as Te,eX as Be,eB as Ae}from"./index-BlakZCKi.js";import{n as Ee}from"./CollectionFlattener-nugv4EKT.js";import{m as Pe,S as _e}from"./MultiOriginJSONSupport-Biu21mVb.js";import oe from"./FeatureLayer-BWvHl3-3.js";import{m as _,l as qe,g as Re,d as Ne,c as ke}from"./commonProperties-BR-qOI1C.js";import{t as Me}from"./capabilities-D6exRNM4.js";import{s as Ve}from"./fieldProperties-B_6eOQTg.js";import{r as Qe,R as Ue,V as Z}from"./SceneService-DZ9jhPWX.js";import{p as Ke,a as De,y as Ce,m as Ze}from"./I3SLayerDefinitions-2J0bCOPp.js";import{p as He}from"./popupUtils-umqxIrF7.js";import{V as Je}from"./I3SUtil-BDgTtzBb.js";import{n as Xe,p as Ge}from"./popupUtils-rFC7qTS_.js";import{i as ze}from"./APIKeyMixin-DE2kp1H3.js";import{l as Ye}from"./ArcGISService-DVWJ5Dcs.js";import{e as We}from"./CustomParametersMixin-B-S9eJPK.js";import{b as et}from"./OperationalLayer-BOkqCWUa.js";import{j as tt}from"./PortalLayer-CJSsiAPi.js";import{s as rt}from"./associatedFeatureServiceUtils-Dt-94EA9.js";import{n as st}from"./uuid-Cl5lrJ4c.js";import{$ as H,Z as it,w as ot}from"./elevationInfoUtils-Dqcigvl7.js";import"./FeatureLayerBase-DjHIgrIg.js";import"./HeightModelInfo-CX4NXl5N.js";import"./featureLayerUtils-CMPkEx0v.js";import"./LayerFloorInfo-Fu2yFAuk.js";import"./Relationship-DOS7x3sz.js";import"./serviceCapabilitiesUtils-BCRoCq2y.js";import"./editsZScale-BH4dZQwV.js";import"./EditBusLayer-DD2f8G0U.js";import"./FeatureEffectLayer-D6bKwPY6.js";import"./FeatureEffect-lt3g2-iR.js";import"./FeatureReductionLayer-BWx0KXvI.js";import"./FeatureReductionSelection-iYBDhXMT.js";import"./labelingInfo-0SxHbHGB.js";import"./labelUtils-C0HBd1KF.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-DP7gBNYc.js";import"./OrderByInfo-DBa8o2Xm.js";import"./RefreshableLayer-6N49EI-i.js";import"./TemporalLayer-kka6caPM.js";import"./TimeInfo-gyyxRcL6.js";import"./FeatureTemplate-CGgYEx9K.js";import"./FeatureType-Cma_XgtO.js";import"./versionUtils-CRCQ7KXh.js";import"./styleUtils-DX_wCIJs.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./portalItemUtils-ClM50EPF.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-Dxcx9Cch.js";import"./resourceUtils-bIHpDeNo.js";import"./resourceUtils-CSP_-fyA.js";import"./saveUtils-DycqpmdU.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-zVyU2qww.js";import"./projectVectorToVector-D_dbqknU.js";import"./projectPointToVector-DxBUY200.js";import"./sphere-BCbQb5JS.js";import"./mat3-BC7N_t3a.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-BY0Af-fP.js";import"./quatf64-aQ5IuZRd.js";import"./I3SBinaryReader-DeuvrM6p.js";import"./VertexAttribute-BdZWZuT1.js";import"./floatRGBA-CmhcWOy-.js";import"./NormalAttribute.glsl-DkXe6EAq.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-DGr3jB5Q.js";import"./quat-DIfYtO2y.js";import"./spatialReferenceEllipsoidUtils-C9F7FEe0.js";import"./computeTranslationToOriginAndRotation-BO73dyTd.js";import"./ViewingMode-dBUh39ak.js";let u=class extends ce(Pe){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(r,i){return typeof i.alias=="string"?i.alias:typeof i.name=="string"?i.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],u.prototype,"title",void 0),t([x("service","title",["alias","name"])],u.prototype,"readTitle",null),t([s()],u.prototype,"layer",void 0),t([s({type:he,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],u.prototype,"id",void 0),t([x("service","id")],u.prototype,"readIdOnlyOnce",null),t([s(_(String))],u.prototype,"modelName",void 0),t([s(_(Boolean))],u.prototype,"isEmpty",void 0),t([s({type:Boolean,nonNullable:!0})],u.prototype,"legendEnabled",void 0),t([s({type:Boolean,json:{name:"visibility",write:!0}})],u.prototype,"visible",void 0),t([s({type:Number,json:{write:!0}})],u.prototype,"opacity",void 0),u=t([p("esri.layers.buildingSublayers.BuildingSublayer")],u);const ae=u,J=Ve();let o=class extends ee.LoadableMixin(te(ae)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new me(this.fields)}readAssociatedLayer(e,r){const i=this.layer.associatedFeatureServiceItem,a=r.associatedLayerID;return i!=null&&typeof a=="number"?new oe({portalItem:i,customParameters:this.customParameters,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,i=this._fetchService(r).then(()=>{this.indexInfo=Qe(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,I.getLogger(this),r)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return He(this,e)}async _fetchService(e){const r=(await re(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var a,l,c;const i=(l=(a=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:a.domains)==null?void 0:l[e];return i&&i.type!=="inherited"?i:((c=this.getField(e))==null?void 0:c.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Me,{query:r,data:{supportsZ:i,supportsM:a,isVersioned:l}}=e;return{query:r,data:{supportsZ:i,supportsM:a,isVersioned:l}}}createQuery(){const e=new fe;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),r)).then(i=>{if(i!=null&&i.features)for(const a of i.features)a.layer=this.layer,a.sourceLayer=this;return i})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const i=ge(this.fieldsIndex,await Xe(this,Ge(this)));return Je(this.parsedUrl.path,this.attributeStorageInfo,e,r,i,this.apiKey,this.customParameters)}async queryCachedFeature(e,r){const i=await this.queryCachedAttributes(e,[r]);if(!i||i.length===0)throw new O("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new ve({attributes:i[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new O("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new O("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([s({readOnly:!0})],o.prototype,"parsedUrl",null),t([s({type:Ke,readOnly:!0})],o.prototype,"nodePages",void 0),t([s({type:[De],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([s({type:[Ce],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([s({type:[Ze],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([s({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([s({readOnly:!0})],o.prototype,"store",void 0),t([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([s({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([s(J.fields)],o.prototype,"fields",void 0),t([s({readOnly:!0})],o.prototype,"fieldsIndex",null),t([s({readOnly:!0,type:oe})],o.prototype,"associatedLayer",void 0),t([x("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([s(J.outFields)],o.prototype,"outFields",void 0),t([s({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([s({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([s({readOnly:!0,type:String})],o.prototype,"apiKey",null),t([s({readOnly:!0,type:String})],o.prototype,"customParameters",null),t([s({readOnly:!0,type:be})],o.prototype,"fullExtent",null),t([s({readOnly:!0,type:se})],o.prototype,"spatialReference",null),t([s({readOnly:!0})],o.prototype,"version",null),t([s({readOnly:!0,type:Se})],o.prototype,"elevationInfo",null),t([s({readOnly:!0,type:Number})],o.prototype,"minScale",null),t([s({readOnly:!0,type:Number})],o.prototype,"maxScale",null),t([s({readOnly:!0,type:Number})],o.prototype,"effectiveScaleRange",null),t([s({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([s({types:we,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([s(qe)],o.prototype,"popupEnabled",void 0),t([s({type:$e,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([s({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([s()],o.prototype,"types",null),t([s()],o.prototype,"typeIdField",null),t([s({json:{write:!1}}),ie(new Fe({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([s()],o.prototype,"geometryType",null),t([s()],o.prototype,"profile",null),t([s({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),t([s({readOnly:!0})],o.prototype,"statisticsInfo",void 0),o=t([p("esri.layers.buildingSublayers.BuildingComponentSublayer")],o);const q=o;var R;const X={type:b,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:le}}},read:!1}};function le(e,r,i){if(e&&Array.isArray(e))return new b(e.map(a=>{const l=at(a);if(l){const c=new l;return c.read(a,i),c}return i!=null&&i.messages&&a&&i.messages.push(new Oe("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:i})),null}))}let m=R=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Ie(this,e=>R.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function at(e){return e.layerType==="group"?m:q}t([s({type:["hide","show","hide-children"],json:{write:!0}})],m.prototype,"listMode",void 0),t([s(X)],m.prototype,"sublayers",void 0),m=R=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],m),function(e){function r(i,a){i.forEach(l=>{a(l),l.type==="building-group"&&r(l.sublayers,a)})}e.sublayersProperty=X,e.readSublayers=le,e.forEachSublayer=r}(m||(m={}));const v=m;let j=class extends f{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],j.prototype,"type",void 0),j=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],j);const ne=j;var N;let S=N=class extends f{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new N({filterType:this.filterType,filterValues:d(this.filterValues)})}};t([s({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=N=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const lt=S;var k;const nt=b.ofType(lt);let L=k=class extends f{clone(){return new k({filterTypes:d(this.filterTypes)})}};t([s({type:nt,json:{write:!0}})],L.prototype,"filterTypes",void 0),L=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],L);const pt=L;var M;const ut=b.ofType(pt);let w=M=class extends ne{constructor(){super(...arguments),this.type="checkbox"}clone(){return new M({filterBlocks:d(this.filterBlocks)})}};t([s({type:["checkbox"]})],w.prototype,"type",void 0),t([s({type:ut,json:{write:!0}})],w.prototype,"filterBlocks",void 0),w=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],w);const G=w;let T=class extends f{};t([s({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=t([p("esri.layers.support.BuildingFilterMode")],T);const E=T;var V;let B=V=class extends E{constructor(){super(...arguments),this.type="solid"}clone(){return new V}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=V=t([p("esri.layers.support.BuildingFilterModeSolid")],B);const Q=B;var U;let $=U=class extends E{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new U({edges:d(this.edges)})}};t([ie({wireFrame:"wire-frame"})],$.prototype,"type",void 0),t([s(xe)],$.prototype,"edges",void 0),$=U=t([p("esri.layers.support.BuildingFilterModeWireFrame")],$);const z=$;var K;let A=K=class extends E{constructor(){super(...arguments),this.type="x-ray"}clone(){return new K}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),A=K=t([p("esri.layers.support.BuildingFilterModeXRay")],A);const Y=A;var D;const yt={nonNullable:!0,types:{key:"type",base:E,typeMap:{solid:Q,"wire-frame":z,"x-ray":Y}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return Q.fromJSON(e);case"wireFrame":return z.fromJSON(e);case"x-ray":return Y.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let g=D=class extends f{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Q,this.title=""}clone(){return new D({filterExpression:this.filterExpression,filterMode:d(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterExpression",void 0),t([s(yt)],g.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"title",void 0),g=D=t([p("esri.layers.support.BuildingFilterBlock")],g);const dt=g;var C;const ct=b.ofType(dt);let h=C=class extends f{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=st(),this.name=null}clone(){return new C({description:this.description,filterBlocks:d(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:d(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([s({type:ct,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:ne,typeMap:{checkbox:G}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?G.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=C=t([p("esri.layers.support.BuildingFilter")],h);const ht=h;let y=class extends f{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],y.prototype,"fieldName",void 0),t([s({type:String})],y.prototype,"modelName",void 0),t([s({type:String})],y.prototype,"label",void 0),t([s({type:Number})],y.prototype,"min",void 0),t([s({type:Number})],y.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],y.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],y.prototype,"subLayerIds",void 0),y=t([p("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],y);let F=class extends ee.LoadableMixin(te(f)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(I.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await re(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],F.prototype,"url",void 0),t([s({readOnly:!0,type:[y],json:{read:{source:"summary"}}})],F.prototype,"fields",null),F=t([p("esri.layers.support.BuildingSummaryStatistics")],F);const pe=F,ue=b.ofType(ht),ye=d(v.sublayersProperty);var W;const P=(W=ye.json)==null?void 0:W.origins;P&&(P["web-scene"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},P["portal-item"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let n=class extends Ue(Ye(et(tt(je(_e(We(ze(Ae)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Ee({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new ue,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const a=v.readSublayers(e,r,i);return v.forEachSublayer(a,l=>l.layer=this),this._allSublayerOverrides&&(mt(a,this._allSublayerOverrides),this._allSublayerOverrides=null),a}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?gt(this.sublayers,e,r):this._allSublayerOverrides&&vt(this._allSublayerOverrides,e,r)),e}read(e,r){if(super.read(e,r),((r==null?void 0:r.origin)==="web-scene"||(r==null?void 0:r.origin)==="portal-item")&&Array.isArray(e==null?void 0:e.sublayers)){const i=ft(e.sublayers,r);this.sublayers?de(this.sublayers,i):(this._allSublayerOverrides??(this._allSublayerOverrides=new Map),this._allSublayerOverrides.set(r.origin,i))}}readSummaryStatistics(e,r){var i;if(typeof r.statisticsHRef=="string"){const a=Le((i=this.parsedUrl)==null?void 0:i.path,r.statisticsHRef);return new pe({url:a})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Te).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return Be(this,e=>{v.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(Z.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(Z.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new O("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await rt(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){I.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";H(I.getLogger(this),it(r,"absolute-height",e)),H(I.getLogger(this),ot(r,e))}};function mt(e,r){r.forEach(i=>de(e,i))}function de(e,r){const{overrides:i,context:a}=r;v.forEachSublayer(e,l=>l.read(i.get(l.id),a))}function ft(e,r){var a;const i=new Map;for(const l of e)l!=null&&typeof l=="object"&&typeof l.id=="number"?i.set(l.id,l):(a=r.messages)==null||a.push(new O("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:l}));return{overrides:i,context:r}}function gt(e,r,i){const a=[];v.forEachSublayer(e,l=>{const c=l.write({},i);Object.keys(c).length>1&&a.push(c)}),a.length>0&&(r.sublayers=a)}function vt(e,r,i){const a=(i==null?void 0:i.origin)&&e.get(i.origin);a&&(r.sublayers=[],a.overrides.forEach(l=>{r.sublayers.push(d(l))}))}t([s({type:["BuildingSceneLayer"]})],n.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],n.prototype,"allSublayers",void 0),t([s(ye)],n.prototype,"sublayers",void 0),t([x("service","sublayers")],n.prototype,"readSublayers",null),t([s({type:ue,nonNullable:!0,json:{write:!0}})],n.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],n.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:pe})],n.prototype,"summaryStatistics",void 0),t([x("summaryStatistics",["statisticsHRef"])],n.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],n.prototype,"outFields",void 0),t([s(Re)],n.prototype,"fullExtent",void 0),t([s(Ne)],n.prototype,"legendEnabled",void 0),t([s({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),t([s(_(se))],n.prototype,"spatialReference",void 0),t([s(ke)],n.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([s()],n.prototype,"associatedFeatureServiceItem",void 0),n=t([p("esri.layers.BuildingSceneLayer")],n);const Vr=n;export{Vr as default};
//# sourceMappingURL=BuildingSceneLayer-XAG2IhOs.js.map
