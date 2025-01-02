import{j as i,m as a,bZ as _,u as O,k as u,P as x,bQ as b,Y as L,hz as N,b8 as R,ew as M,ae as j,aT as A,U as J,au as V,eQ as $,z as P,I as d,s as S,o as U,ap as D}from"./index-Vdm0PCas.js";import{S as E}from"./MultiOriginJSONSupport-DR0AlfNW.js";import{j as f}from"./persistable-CjQBR0IR.js";import{f as K}from"./Layer-vfI2MkUG.js";import{i as z}from"./APIKeyMixin-CKuco-22.js";import{l as k}from"./ArcGISService-BRYEuJoa.js";import{e as C}from"./CustomParametersMixin-B4Ie892C.js";import{b as G}from"./OperationalLayer-D7ZoxskL.js";import{j as Q}from"./PortalLayer-BYDxwIVB.js";import{t as Z}from"./ScaleRangeLayer-D6kYzICO.js";import{R as q,V as w}from"./SceneService-C8_XZVq0.js";import{c as F}from"./commonProperties-DKi4uAHT.js";import{p as H,a as Y,y as B,m as W}from"./I3SLayerDefinitions-Brpis7LP.js";import{$ as T,Z as X,w as ee}from"./elevationInfoUtils-B6QuXQVI.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./uuid-Cl5lrJ4c.js";import"./resourceExtension-ofponi7v.js";import"./portalItemUtils-bWZxvl2b.js";import"./originUtils-D69mHv66.js";import"./HeightModelInfo-BVQNgGlV.js";import"./jsonContext-C_AKfRlO.js";import"./resourceUtils-DV45LUs2.js";import"./resourceUtils-BrYHwhme.js";import"./saveUtils-CtRs9Mpd.js";import"./ElevationInfo-8bL8CsLE.js";var h;let n=h=class extends x{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var l;if((l=r.layer)!=null&&l.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!b(e.spatialReference,r.layer.spatialReference))return void((r==null?void 0:r.messages)&&r.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const y=new _;N(e,y,r.layer.spatialReference),t[o]=y.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new h({geometry:R(this.geometry),type:this.type})}};i([a({type:_}),f()],n.prototype,"geometry",void 0),i([O(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([a({type:["clip","mask","replace"],nonNullable:!0}),f()],n.prototype,"type",void 0),n=h=i([u("esri.layers.support.SceneModification")],n);const c=n;var p;let m=p=class extends M(j.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const o=new p;for(const r of e)o.add(c.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:A(e),origin:"service"},l=await J(e,{responseType:"json",signal:o==null?void 0:o.signal}),y=t.toJSON(),g=[];for(const v of l.data)g.push(c.fromJSON({...v,geometry:{...v.geometry,spatialReference:y}},r));return new p({url:e,items:g})}};i([a({type:String})],m.prototype,"url",void 0),m=p=i([u("esri.layers.support.SceneModifications")],m);const I=m;let s=class extends q(k(G(Q(Z(E(C(z(K)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles(V(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,D))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:$(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){P(o)}if(await this._fetchService(t),this._modificationsSource!=null){const o=await I.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(w.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";T(S.getLogger(this),X(t,"absolute-height",e)),T(S.getLogger(this),ee(t,e))}};i([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),i([a({type:["show","hide"]})],s.prototype,"listMode",void 0),i([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([a({type:H,readOnly:!0})],s.prototype,"nodePages",void 0),i([a({type:[Y],readOnly:!0})],s.prototype,"materialDefinitions",void 0),i([a({type:[B],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),i([a({type:[W],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),i([a({type:I}),f({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),i([U(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),i([a(F)],s.prototype,"elevationInfo",null),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=i([u("esri.layers.IntegratedMeshLayer")],s);const Le=s;export{Le as default};
//# sourceMappingURL=IntegratedMeshLayer-Gheh0oFf.js.map
