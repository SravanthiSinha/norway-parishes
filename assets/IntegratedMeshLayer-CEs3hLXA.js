import{j as i,m as a,c0 as _,u as O,k as u,P as x,bT as L,Y as b,hD as N,b5 as R,ew as M,ae as j,aQ as A,U as J,ez as V,aq as $,eT as D,z as P,I as m,s as S,o as U,al as E,eF as K}from"./index-CyZqSx7I.js";import{S as z}from"./MultiOriginJSONSupport-Dkp6reEM.js";import{j as h}from"./persistable-7-iEkLBf.js";import{i as k}from"./APIKeyMixin-BGHR1LfF.js";import{l as q}from"./ArcGISService-BzMaLKW_.js";import{e as C}from"./CustomParametersMixin-DAS2X7v4.js";import{b as F}from"./OperationalLayer-CN-9hwyk.js";import{j as G}from"./PortalLayer-CsB9XJVP.js";import{R as H,V as w}from"./SceneService-BPAxB5GI.js";import{c as Q}from"./commonProperties-D3jRdA_I.js";import{p as Y,a as Z,y as B,m as W}from"./I3SLayerDefinitions-CrUnDzm_.js";import{$ as T,Z as X,w as ee}from"./elevationInfoUtils-B9dX1Ovm.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./uuid-Cl5lrJ4c.js";import"./resourceExtension-mRmLpgob.js";import"./portalItemUtils-DZL-jnzT.js";import"./originUtils-D69mHv66.js";import"./HeightModelInfo-DpB4FpSN.js";import"./jsonContext-Ca2Ygd9z.js";import"./resourceUtils-Cd-JNqmi.js";import"./resourceUtils-CUNap3CF.js";import"./saveUtils-C4NOxxR5.js";var f;let n=f=class extends x{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var l;if((l=r.layer)!=null&&l.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!L(e.spatialReference,r.layer.spatialReference))return void((r==null?void 0:r.messages)&&r.messages.push(new b("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const y=new _;N(e,y,r.layer.spatialReference),t[o]=y.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new f({geometry:R(this.geometry),type:this.type})}};i([a({type:_}),h()],n.prototype,"geometry",void 0),i([O(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([a({type:["clip","mask","replace"],nonNullable:!0}),h()],n.prototype,"type",void 0),n=f=i([u("esri.layers.support.SceneModification")],n);const c=n;var p;let d=p=class extends M(j.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const o=new p;for(const r of e)o.add(c.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:A(e),origin:"service"},l=await J(e,{responseType:"json",signal:o==null?void 0:o.signal}),y=t.toJSON(),g=[];for(const v of l.data)g.push(c.fromJSON({...v,geometry:{...v.geometry,spatialReference:y}},r));return new p({url:e,items:g})}};i([a({type:String})],d.prototype,"url",void 0),d=p=i([u("esri.layers.support.SceneModifications")],d);const I=d;let s=class extends H(q(F(G(V(z(C(k(K)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles($(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,E))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:D(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){P(o)}if(await this._fetchService(t),this._modificationsSource!=null){const o=await I.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(w.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new m("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new m("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new m("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";T(S.getLogger(this),X(t,"absolute-height",e)),T(S.getLogger(this),ee(t,e))}};i([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),i([a({type:["show","hide"]})],s.prototype,"listMode",void 0),i([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([a({type:Y,readOnly:!0})],s.prototype,"nodePages",void 0),i([a({type:[Z],readOnly:!0})],s.prototype,"materialDefinitions",void 0),i([a({type:[B],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),i([a({type:[W],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),i([a({type:I}),h({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),i([U(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),i([a(Q)],s.prototype,"elevationInfo",null),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=i([u("esri.layers.IntegratedMeshLayer")],s);const Oe=s;export{Oe as default};
//# sourceMappingURL=IntegratedMeshLayer-CEs3hLXA.js.map
