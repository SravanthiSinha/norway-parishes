const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/featureLayerUtils-CTCF2iSv.js","assets/index-CJT1kG3U.js","assets/index-Jib82o7I.css","assets/originUtils-D69mHv66.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/utils-DAKSoYIm.js","assets/jsonContext-CDuY_d8j.js","assets/portalItemUtils-Dqn5_s7X.js","assets/saveUtils-CBLYx8V2.js","assets/fetchService-BIR7WXi3.js","assets/FeatureLayerSource-o5fuEBzV.js","assets/uuid-Cl5lrJ4c.js","assets/MeshLocalVertexSpace-X9mqHhj2.js","assets/meshVertexSpaceUtils-CFb8uanA.js","assets/vec32-BEXyJ64g.js","assets/External-B0bpprbZ.js","assets/infoFor3D-CxdEiWhp.js","assets/MeshTransform-DL4ZNwOZ.js","assets/mat4f64-CSKppSlJ.js","assets/quat-C44AwpEd.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/editingSupport-C9r4yiuT.js","assets/EditBusLayer-BGosulfD.js","assets/clientSideDefaults-BwweAHF-.js","assets/QueryEngineCapabilities-DjYb9CEb.js","assets/capabilities-Y9lFlGVh.js","assets/QueryTask-CCcuZOyC.js","assets/executeForIds-CEFniybu.js","assets/featureConversionUtils-Div36Cal.js","assets/featureLayerUtils-BpxtsyUl.js","assets/editsZScale-DSwHD_r_.js","assets/TopFeaturesQuery-BAHRfzMN.js"])))=>i.map(i=>d[i]);
import{g8 as z,hX as W,ae as C,fb as M,dx as N,I as f,aX as Z,c0 as B,by as H,T as U,s as I,gG as R,j as s,bf as K,d7 as P,aC as X,m as l,k as E,an as Y,ey as ee,ez as te,O as re,eF as ie,ag as se,fc as ae,_ as w,z as oe,Y as ne,t as S,aQ as le,bi as x,gz as G,gJ as ue,hw as pe,q as de,hx as ye,hQ as ce,b9 as he,fk as me,U as fe,n as ge,o as c,hY as be,hH as we,u as $,b5 as D,hZ as _e,$ as ve,gA as Te,gB as Fe,bb as Ie}from"./index-CJT1kG3U.js";import{S as Se}from"./MultiOriginJSONSupport-CLxlAl4j.js";import{T as Ee,u as $e,p as De,a as A,b as Oe,d as Le,I as qe,l as Ce,s as je}from"./commonProperties-CoeojjbU.js";import{B as Me,V as Re}from"./FeatureLayerBase-BweyFNxn.js";import{i as Pe}from"./editsZScale-DSwHD_r_.js";import{i as xe}from"./APIKeyMixin-Be_wvRKP.js";import{l as Ge}from"./ArcGISService-BuSNxctw.js";import{e as Ae}from"./CustomParametersMixin-ipnGiKFn.js";import{F as Ve}from"./EditBusLayer-BGosulfD.js";import{c as Je}from"./FeatureEffectLayer-f5Og7P5n.js";import{c as Ne}from"./FeatureReductionLayer-8JxG8U1g.js";import{b as ke}from"./OperationalLayer-DbosLJBg.js";import{p as Qe}from"./OrderedLayer-fiEYbuDt.js";import{j as ze}from"./PortalLayer-89wvzU0_.js";import{f as We}from"./RefreshableLayer-DA9s4-NR.js";import{l as Ze}from"./TemporalLayer-rebXAIuB.js";import{J as Be,Z as He,V as Ue,D as Ke,z as Xe,I as Ye,F as et,q as tt,x as rt,M as it,A as st,v as at,W as ot,T as nt,Q as lt,U as ut,S as pt,O as dt,P as yt,E as ct,L as ht,C as mt,_ as ft,R as gt,g as V}from"./featureLayerUtils-BpxtsyUl.js";import{p as k}from"./FeatureTemplate-CFNWtGeT.js";import{n as Q}from"./FeatureType-DI51YxmD.js";import{s as bt}from"./fieldProperties-CptXn_89.js";import{C as wt,n as O}from"./labelingInfo-Bthc2OpT.js";import{i as _t}from"./serviceCapabilitiesUtils-JL9sqXYv.js";import{d as vt}from"./TimeInfo-ClChzcul.js";import{t as Tt}from"./versionUtils-D0cZVFIz.js";import{t as Ft}from"./styleUtils-Cs3WnKzJ.js";import{p as It}from"./popupUtils-Sk7uakZS.js";import{o as St}from"./AlphaCutoff-UcccL64p.js";import{A as T}from"./interfaces-CL2NbQte.js";import"./HeightModelInfo-BsdLH3Iz.js";import"./LayerFloorInfo-DiG0jczO.js";import"./Relationship-Dqo9YihB.js";import"./uuid-Cl5lrJ4c.js";import"./FeatureEffect-Aug1VK_I.js";import"./FeatureReductionSelection-DrasqWKY.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-BfIwxxWp.js";import"./portalItemUtils-Dqn5_s7X.js";import"./labelUtils-DWCTGugX.js";let Et=0,g=class extends z.LoadableMixin(W(C)){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}get _workerGeometryType(){var t;const e=(t=this.layer)==null?void 0:t.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);M(e,this.layer.spatialReference,r);const i=N.fromJSON(r);if(!this._requiresClientGraphicMapping())return i;const a=this.layer.objectIdField;for(const n of i.features){const p=n.attributes[a],d=this._idToClientGraphic.get(p);d&&(n.geometry=d.geometry)}return i.geometryType=this.layer.geometryType,i}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new f("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return M(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:Z.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async _applyEdits(e){if(!this._connection)throw new f("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],a=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const n=u=>"objectId"in u&&u.objectId!=null?u.objectId:"attributes"in u&&u.attributes[t]!=null?u.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const u of e.deleteFeatures){const m=n(u);m!=null&&i.push(m)}const p=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures){for(const u of e.updateFeatures)if(a.push(this._serializeFeature(u)),p){const m=n(u);m!=null&&p.set(m,u)}}Pe(r?r.features:null,a,this.layer.spatialReference);const{fullExtent:d,featureEditResults:y}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:a,deletes:i});return this.fullExtent=d,r&&r.finish(y.uidToObjectId),this._updateClientGraphicIds(p,y),this._createEditsResult(y)}async _prepareClientMapping(e,t){if(this._layerOrSourceGeometryType!=="mesh"||e==null)return;const r=[];for(const{geometry:i}of e)i==null||i.type!=="mesh"||i.hasExtent||i.loaded||r.push(i.load({signal:t}));r.length&&await Promise.all(r)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const i=e.get(r.objectId);i!=null&&this._addIdToClientGraphic(i)}for(const r of t.deleteResults)r.success&&this._idToClientGraphic.delete(r.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let i=null;for(let n=0;n<e.length;n++){const p=e[n],d=this._serializeFeature(p);i||p.geometry==null||(i=p.geometry.type),r[n]=d,t.set(`${d.uid}`,p)}const a=this;return{features:r,inferredGeometryType:i,finish(n){const p=a.sourceJSON.objectIdField;for(const d in n){const y=n[d],u=t.get(d);u&&(u.attributes||(u.attributes={}),y===-1?delete u.attributes[p]:u.attributes[p]=y,a._addIdToClientGraphic(u))}}}}_addIdToClientGraphic(e){var i;if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=(i=e.attributes)==null?void 0:i[t];r!=null&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){var e,t;return((e=this.layer)==null?void 0:e.geometryType)??((t=this.sourceJSON)==null?void 0:t.geometryType)}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return e==="mesh"||e==="multipatch"||e==="extent"}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),i=(Et++).toString();return r?{uid:i,geometry:r.toJSON(),attributes:t}:{uid:i,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?B.fromExtent(t.extent):null:t}async _startWorker(e){this._connection=await H("MemorySourceWorker",{strategy:U("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,objectIdField:i,hasM:a,hasZ:n,timeInfo:p,dateFieldsTimeZone:d}=this.layer,y=this.layer.originOf("spatialReference")==="defaults";await this._prepareClientMapping(this.items,e);const u=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",_=>{I.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),_.preventDefault()}));const m={features:u.features,fields:t==null?void 0:t.map(_=>_.toJSON()),geometryType:R.toJSON(this._workerGeometryType),hasM:this._layerOrSourceGeometryType!=="mesh"&&a,hasZ:this._layerOrSourceGeometryType==="mesh"||n,objectIdField:i,spatialReference:y?null:r&&r.toJSON(),timeInfo:(p==null?void 0:p.toJSON())??null,dateFieldsTimeZone:d},b=await this._connection.invoke("load",m,{signal:e});for(const _ of b.warnings)I.getLogger(this.layer).warn("#load()",`${_.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:_});b.featureErrors.length&&I.getLogger(this.layer).warn("#load()",`Encountered ${b.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:b.featureErrors});const j=b.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(u.inferredGeometryType)&&(j.geometryType=R.toJSON(u.inferredGeometryType)),this.sourceJSON=j,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),u.finish(b.assignedObjectIds)}};s([K({Type:P,ensureType:X(P)})],g.prototype,"itemType",void 0),s([l()],g.prototype,"type",void 0),s([l({constructOnly:!0})],g.prototype,"layer",void 0),s([l({readOnly:!0})],g.prototype,"_workerGeometryType",null),s([l()],g.prototype,"sourceJSON",void 0),g=s([E("esri.layers.graphics.sources.MemorySource")],g);let v=class extends Y{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};s([l()],v.prototype,"updating",void 0),s([l()],v.prototype,"status",void 0),v=s([E("esri.layers.support.PublishingInfo")],v);const $t=v,Dt=Symbol(),Ot=e=>{var t;let r=class extends e{constructor(){super(...arguments),this[t]=!0}get publishingInfo(){if(this.destroyed)return null;const i=this._get("publishingInfo");if(i)return i;const a=new $t;return this._checkPublishingStatus(a),a}_checkPublishingStatus(i){let p=0;const d=async u=>{let m;i.updating=!0;try{m=await this.fetchPublishingStatus()}catch{m="unavailable"}m!=="published"&&m!=="unavailable"||(i.status==="publishing"&&this.refresh(),y.remove()),i.status=m,i.updating=!1,y.removed||(p=setTimeout(d,u,u+125))},y={removed:!1,remove(){this.removed=!0,clearTimeout(p)}};this.when().catch(()=>y.remove()),d(250),this.addHandles(y)}};return t=Dt,s([l({readOnly:!0,clonable:!1})],r.prototype,"publishingInfo",null),r=s([E("esri.layers.mixins.PublishableLayer")],r),r},h="FeatureLayer";function F(e,t){return new f("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function J(e){return e&&e instanceof C}const L=bt();function q(e,t,r){const i=!!(r!=null&&r.writeLayerSchema);return{enabled:i,ignoreOrigin:i}}let o=class extends Me(Ne(Je(Ot(Ve(ee(Qe(Ze(te(We(Ge(ke(ze(Se(Ae(xe(re(ie))))))))))))))))){constructor(...e){super(...e),this.attributeTableTemplate=null,this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=se.WGS84,this.subtypeCode=null,this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=ae(async(t,r,i)=>{const{save:a,saveAs:n}=await w(()=>import("./featureLayerUtils-CTCF2iSv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));switch(t){case T.SAVE:return a(this,r);case T.SAVE_AS:return n(this,i,r)}})}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){var i;const t=e!=null?e.signal:null;if((i=this.portalItem)!=null&&i.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then(a=>this.initLayerProperties(a))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(oe).then(async()=>{if(this.url&&this.layerId==null&&/FeatureServer|MapServer\/*$/i.test(this.url)){const a=await this._fetchFirstValidLayerId(t);a!=null&&(this.layerId=a)}if(!this.url&&!this._hasMemorySource())throw new f("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Be(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}warnInvisibleDrapedSymbols(){var e,t,r;((e=this.elevationInfo)==null?void 0:e.mode)==="on-the-ground"&&((t=this.renderer)==null?void 0:t.type)==="simple"&&((r=this.renderer.symbol)==null?void 0:r.type)==="polygon-3d"&&this.renderer.symbol.symbolLayers.some(i=>i.type==="fill"&&i.material!=null&&(!i.material.color||i.material.color.a*this.opacity<St)&&(this.loadWarnings.push(new ne("feature-layer:invisible-draped-symbols","FeatureLayer has fully transparent symbols which will no longer render or highlight",{layer:this})),!0))}readCapabilities(e,t){return t=t.layerDefinition||t,_t(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){var e;return!(this.loaded&&!((e=this.capabilities)!=null&&e.operations.supportsEditing))&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}get effectiveEditingEnabled(){return He(this)}readIsTable(e,t){return(t=(t==null?void 0:t.layerDefinition)??t).type==="Table"||!t.geometryType}writeIsTable(e,t,r,i){i!=null&&i.writeLayerSchema&&S(r,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return Ue(t.layerDefinition||t)}readObjectIdField(e,t){return Ke(t.layerDefinition||t)}get parsedUrl(){const e=le(this.url);return e!=null&&(this.dynamicDataSource!=null?e.path=x(e.path,"dynamicLayer"):this.layerId!=null&&(e.path=x(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){G(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){var a;t=t.layerDefinition||t;const i=(a=t.drawingInfo)==null?void 0:a.renderer;if(i){const n=ue(i,t,r)??void 0;return n||I.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),n}return Xe(t,r)}set source(e){const t=this._get("source");t!==e&&(J(t)&&this._resetMemorySource(t),J(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof C?new g({layer:this,items:e}):e:null}readSource(e,t){const r=N.fromJSON(t.featureSet);return new g({layer:this,items:(r==null?void 0:r.features)??[]})}readTemplates(e,t){const r=t.editFieldsInfo,i=r==null?void 0:r.creatorField,a=r==null?void 0:r.editorField;return e=e==null?void 0:e.map(n=>k.fromJSON(n)),this._fixTemplates(e,i),this._fixTemplates(e,a),e}readTitle(e,t){var a,n,p;const r=((a=t.layerDefinition)==null?void 0:a.name)??t.name,i=t.title||((n=t.layerDefinition)==null?void 0:n.title);if(r){const d=(p=this.portalItem)==null?void 0:p.title;if(this.sublayerTitleMode==="item-title")return this.url?pe(this.url,r):r;let y=r;if(!y&&this.url){const u=de(this.url);u!=null&&(y=u.title)}return y?(this.sublayerTitleMode==="item-title-and-service-name"&&d&&d!==y&&(y=d+" - "+y),ye(y)):void 0}if(this.sublayerTitleMode==="item-title"&&i)return i}readTitleFromWebMap(e,t){var r;return t.title||((r=t.layerDefinition)==null?void 0:r.name)}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(a=>a.name.toLowerCase()===r);i&&(r=i.name)}return r}readTypes(e,t){e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,i=r==null?void 0:r.creatorField,a=r==null?void 0:r.editorField;return e==null?void 0:e.map(n=>(n=Q.fromJSON(n),this._fixTemplates(n.templates,i),this._fixTemplates(n.templates,a),n))}readVisible(e,t){var r;return((r=t.layerDefinition)==null?void 0:r.defaultVisibility)!=null?!!t.layerDefinition.defaultVisibility:t.visibility!=null?!!t.visibility:void 0}async addAttachment(e,t){const r=await Ye(this,e,t,h);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const i=await et(this,e,t,r,h);return this.lastEditsEventDate=new Date,i}async applyEdits(e,t){return tt(this,e,t)}async uploadAssets(e,t){return rt(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return It(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await ce(w(()=>import("./FeatureLayerSource-o5fuEBzV.js"),__vite__mapDeps([10,1,2,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=it(this);e.dynamicDataSource=this.dynamicDataSource;const t=this.subtypeCode!=null?`${this.subtypeField} = ${this.subtypeCode}`:null,r=he(this.definitionExpression,t);return e.where=r||"1=1",e}async deleteAttachments(e,t){const r=await st(this,e,t,h);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return at(this,e,h)}getFeatureType(e){return ot(this.types,this.typeIdField,e)}getFieldDomain(e,t){var d,y;const r=t==null?void 0:t.feature,i=!!((d=this.subtypes)!=null&&d.length);if(i&&!(t!=null&&t.excludeImpliedDomains)){const u=nt(this,e);if(u)return u}const a=i&&lt(this,r);if(a){const u=(y=a==null?void 0:a.domains)==null?void 0:y[e];return(u==null?void 0:u.type)==="inherited"?this._getLayerDomain(e):u}const n=this.getFeatureType(r),p=this._getLayerDomain(e);if(n){const u=n.domains&&n.domains[e];if(u&&(u==null?void 0:u.type)!=="inherited")return u}if(p)return p;if(!(t!=null&&t.excludeImpliedDomains)){const u=ut(this,e);if(u)return u}return null}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return pt(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(me.from(e)??r.createQuery(),t);if(i!=null&&i.features)for(const a of i.features)a.layer=a.sourceLayer=r;return i}async queryObjectIds(e,t){return dt(this,e,t,h)}async queryFeatureCount(e,t){return yt(this,e,t,h)}async queryExtent(e,t){return ct(this,e,t,h)}async queryRelatedFeatures(e,t){return ht(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return mt(this,e,t,h)}async queryTopFeatures(e,t){var p;const{source:r,capabilities:i}=await this.load();if(!r.queryTopFeatures||!((p=i==null?void 0:i.query)!=null&&p.supportsTopFeaturesQuery))throw new f(h,"Layer source does not support queryTopFeatures capability");const a=await w(()=>import("./TopFeaturesQuery-BAHRfzMN.js"),__vite__mapDeps([32,1,2])),n=await r.queryTopFeatures(a.default.from(e),t);if(n!=null&&n.features)for(const d of n.features)d.layer=d.sourceLayer=this;return n}async queryBins(e,t){var p;const{source:r,capabilities:i}=await this.load();if(!r.queryBins||!((p=i==null?void 0:i.operations)!=null&&p.supportsQueryBins))throw new f(h,"Layer source does not support queryBins capability");ft(e,i,h);const a=await w(()=>import("./index-CJT1kG3U.js").then(d=>d.pp),__vite__mapDeps([1,2])),n=await r.queryBins(a.default.from(e),t);if(n.features)for(const d of n.features)d.layer=d.sourceLayer=this;return n}async queryTopObjectIds(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopObjectIds||!(i!=null&&i.query.supportsTopFeaturesQuery))throw new f(h,"Layer source does not support queryTopObjectIds capability");const a=await w(()=>import("./TopFeaturesQuery-BAHRfzMN.js"),__vite__mapDeps([32,1,2]));return r.queryTopObjectIds(a.default.from(e),t)}async queryTopFeaturesExtent(e,t){var n;const{source:r,capabilities:i}=await this.load();if(!r.queryTopExtents||!((n=i==null?void 0:i.query)!=null&&n.supportsTopFeaturesQuery))throw new f(h,"Layer source does not support queryTopExtents capability");const a=await w(()=>import("./TopFeaturesQuery-BAHRfzMN.js"),__vite__mapDeps([32,1,2]));return r.queryTopExtents(a.default.from(e),t)}async queryTopFeatureCount(e,t){var n;const{source:r,capabilities:i}=await this.load();if(!r.queryTopCount||!((n=i==null?void 0:i.query)!=null&&n.supportsTopFeaturesQuery))throw new f(h,"Layer source does not support queryFeatureCount capability");const a=await w(()=>import("./TopFeaturesQuery-BAHRfzMN.js"),__vite__mapDeps([32,1,2]));return r.queryTopCount(a.default.from(e),t)}read(e,t){const r=e.featureCollection;if((r||e.type==="Feature Collection")&&(this.resourceInfo=e),r){const i=r.layers;i&&i.length===1&&(super.read(i[0],t),r.showLegend!=null&&super.read({showLegend:r.showLegend},t))}super.read(e,t),t&&t.origin==="service"&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:(t==null?void 0:t.origin)??void 0,writeLayerSchema:(t==null?void 0:t.writeLayerSchema)??this._hasMemorySource()};const{origin:r,layerContainerType:i,messages:a}=t;if(this.dynamicDataSource)return a==null||a.push(F(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if((r==="web-map"||r==="web-scene")&&i!=="tables")return a==null||a.push(F(this,`a table source can only be written to tables, not ${i}`)),null;if(this._hasMemorySource())return a==null||a.push(F(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&(r==="web-map"||r==="web-scene")&&i==="tables")return a==null||a.push(F(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new f(h,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){var t;return!!this.loaded&&(((t=this.source)==null?void 0:t.type)==="memory"||Tt(this,e))}async save(e){return this._debouncedSaveOperations(T.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(T.SAVE_AS,t,e)}_readEditingEnabled(e,t,r){var a;let i=(a=e.layerDefinition)==null?void 0:a.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,t&&(r==null?void 0:r.origin)==="web-map"&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map(t=>t.trim()).includes("editing")}_writeEditingEnabled(e,t,r,i){var a,n;if(!e){const p=(n=(a=this.capabilities)==null?void 0:a.operations)!=null&&n.supportsSync?"Query,Sync":"Query";S("layerDefinition.capabilities",p,t),r&&!(i!=null&&i.writeLayerSchema)&&(t.capabilities=p)}}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_fetchFirstValidLayerId(e){return fe(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t=>{const r=t.data;if(r)return this.findFirstValidLayerId(r)})}async initLayerProperties(e){var t;return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(t=this.portalItem)==null?void 0:t.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),G(this.renderer,this.fieldsIndex),ge(this.timeInfo,this.fieldsIndex),Ft(this,{origin:"service"})}async hasDataChanged(){return gt(this)}async fetchPublishingStatus(){const e=this.source;return e!=null&&e.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(i=>i.type==="geometry")||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach(r=>{var a;const i=(a=r.prototype)==null?void 0:a.attributes;i&&t&&delete i[t]})}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new f("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new f("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach(t=>{t.layer=this,t.sourceLayer=this}),this.addHandles([e.on("after-add",t=>{t.item.layer=this,t.item.sourceLayer=this}),e.on("after-remove",t=>{t.item.layer=null,t.item.sourceLayer=null})],"fl-source")}_resetMemorySource(e){e.forEach(t=>{t.layer=null,t.sourceLayer=null}),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};s([l(Ee)],o.prototype,"attributeTableTemplate",void 0),s([c("service","capabilities")],o.prototype,"readCapabilities",null),s([l({json:{origins:{"web-scene":{write:!1}},write:!0}})],o.prototype,"charts",void 0),s([l({readOnly:!0})],o.prototype,"createQueryVersion",null),s([l({json:{read:{source:"layerDefinition.copyrightText"}}})],o.prototype,"copyright",void 0),s([l({json:{read:{source:"layerDefinition.displayField"}}})],o.prototype,"displayField",void 0),s([l({types:be,readOnly:!0})],o.prototype,"defaultSymbol",void 0),s([l({type:we})],o.prototype,"dynamicDataSource",void 0),s([l({type:Boolean})],o.prototype,"editingEnabled",null),s([c(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],o.prototype,"readEditingEnabled",null),s([c("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],o.prototype,"readEditingEnabledFromWebMap",null),s([$(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],o.prototype,"writeEditingEnabled",null),s([$("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],o.prototype,"writeEditingEnabledToWebMap",null),s([l({readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),s([l({...L.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:q}}}}})],o.prototype,"fields",void 0),s([l(L.fieldsIndex)],o.prototype,"fieldsIndex",void 0),s([l({type:Re,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"formTemplate",void 0),s([l({json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),s([l({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:q,writer(e,t,r){const i=e?V.toJSON(e):null;i&&S(r,i,t)}}}},read:{source:"layerDefinition.geometryType",reader:V.read}}})],o.prototype,"geometryType",void 0),s([l({json:{read:{source:"layerDefinition.hasM"}}})],o.prototype,"hasM",void 0),s([l({json:{read:{source:"layerDefinition.hasZ"}}})],o.prototype,"hasZ",void 0),s([l($e)],o.prototype,"id",void 0),s([l({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],o.prototype,"infoFor3D",void 0),s([l({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],o.prototype,"isTable",void 0),s([c("service","isTable",["type","geometryType"]),c("isTable",["layerDefinition.type","layerDefinition.geometryType"])],o.prototype,"readIsTable",null),s([$("web-map","isTable")],o.prototype,"writeIsTable",null),s([l(De)],o.prototype,"labelsVisible",void 0),s([l({type:[wt],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:O,write:!1},"web-scene":{name:"layerDefinition.drawingInfo.labelingInfo",read:O,write:{enabled:!0,layerContainerTypes:A}}},name:"layerDefinition.drawingInfo.labelingInfo",read:O,write:!0}})],o.prototype,"labelingInfo",void 0),s([l((()=>{const e=D(Oe);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(t,r,i){S(i,_e(t),r)}}},e})())],o.prototype,"opacity",void 0),s([l(Le)],o.prototype,"legendEnabled",void 0),s([l({type:["show","hide"],json:(()=>{const e=D(qe.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],o.prototype,"listMode",void 0),s([c("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdField",null),s([l({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:q}}}}})],o.prototype,"objectIdField",void 0),s([c("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdField",null),s([l({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),s([l(L.outFields)],o.prototype,"outFields",void 0),s([l({readOnly:!0})],o.prototype,"parsedUrl",null),s([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),s([l(Ce)],o.prototype,"popupEnabled",void 0),s([l({type:ve,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),s([l({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),s([l({types:Te,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:Fe,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:A,overridePolicy:(e,t,r)=>({ignoreOrigin:r==null?void 0:r.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:r==null?void 0:r.writeLayerSchema})}}})],o.prototype,"renderer",null),s([c("service","renderer",["drawingInfo.renderer","defaultSymbol"]),c("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],o.prototype,"readRenderer",null),s([l()],o.prototype,"resourceInfo",void 0),s([l((()=>{const e=D(je);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],o.prototype,"screenSizePerspectiveEnabled",void 0),s([l({clonable:!1})],o.prototype,"source",null),s([Ie("source")],o.prototype,"castSource",null),s([c("portal-item","source",["featureSet"]),c("web-map","source",["featureSet"])],o.prototype,"readSource",null),s([l({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],o.prototype,"spatialReference",void 0),s([l({type:Number})],o.prototype,"subtypeCode",void 0),s([l({type:[k]})],o.prototype,"templates",void 0),s([c("templates",["editFieldsInfo","creatorField","editorField","templates"])],o.prototype,"readTemplates",null),s([l({type:vt})],o.prototype,"timeInfo",void 0),s([l()],o.prototype,"title",void 0),s([c("service","title",["name"]),c("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],o.prototype,"readTitle",null),s([c("web-map","title",["layerDefinition.name","title"])],o.prototype,"readTitleFromWebMap",null),s([l({type:String})],o.prototype,"sublayerTitleMode",void 0),s([l({json:{read:!1}})],o.prototype,"type",void 0),s([l({type:String})],o.prototype,"typeIdField",void 0),s([c("service","typeIdField"),c("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),s([l({type:[Q]})],o.prototype,"types",void 0),s([c("service","types",["types"]),c("types",["layerDefinition.types"])],o.prototype,"readTypes",null),s([l({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],o.prototype,"visible",void 0),s([c("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],o.prototype,"readVisible",null),o=s([E("esri.layers.FeatureLayer")],o);const hr=o;export{hr as default};
//# sourceMappingURL=FeatureLayer-5j_8y2oR.js.map