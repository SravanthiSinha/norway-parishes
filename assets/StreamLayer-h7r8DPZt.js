const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/streamLayerUtils-DEuJu8hn.js","assets/utils-ByKdNOfe.js","assets/index-Cj37dcSI.js","assets/index-YFCIJM0w.css","assets/originUtils-D69mHv66.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/jsonContext-BjVda_2q.js","assets/portalItemUtils-DnmzdikO.js","assets/saveUtils-L2Q3cwau.js","assets/createConnection-C7--BvvF.js"])))=>i.map(i=>d[i]);
import{j as t,m as r,k as I,P,O as F,ag as x,f6 as A,I as d,z as E,gq as f,gA as O,s as k,_ as g,cQ as h,g7 as D,ff as U,U as C,R as N,n as V,a_ as L,eV as v,$ as z,gr as G,gs as J,o as w,b8 as M}from"./index-Cj37dcSI.js";import{S as q}from"./MultiOriginJSONSupport-BNoLIkV0.js";import{f as W}from"./Layer-l4keiRdm.js";import{l as Q}from"./ArcGISService-BGskH1Nr.js";import{l as Y}from"./BlendLayer-lNg5lQp1.js";import{e as Z}from"./CustomParametersMixin-yNDH4qbd.js";import{c as B}from"./FeatureEffectLayer-BWwksBm5.js";import{c as H}from"./FeatureReductionLayer-BBkB24_s.js";import{b as K}from"./OperationalLayer-osV1-0vs.js";import{j as X}from"./PortalLayer-CVzfRWOB.js";import{f as ee}from"./RefreshableLayer-CaNfY9nD.js";import{t as te}from"./ScaleRangeLayer-DURziDnJ.js";import{l as ie}from"./TemporalLayer-irvsAb22.js";import{p as re,d as oe,v as se,j as ne,l as ae,s as pe,y as le}from"./commonProperties-Eq_gWgNE.js";import{z as de}from"./featureLayerUtils-CUUv1YZ4.js";import{s as me}from"./fieldProperties-Cxk3co2N.js";import{C as ce,n as ue}from"./labelingInfo-BD-9SYTm.js";import{t as he}from"./styleUtils-CLGtKHVY.js";import{p as ye}from"./popupUtils-DPC_CFAG.js";import{h as fe}from"./ElevationInfo-BuRwLjVB.js";import{A as c}from"./interfaces-CL2NbQte.js";import"./jsonUtils-rZaWLITc.js";import"./parser-vcRqrJ90.js";import"./utils-DYmthu9k.js";import"./FeatureEffect-3ltnGeNO.js";import"./FeatureReductionSelection-DSlMsLTE.js";import"./MD5-C9MwAd2G.js";import"./portalItemUtils-DnmzdikO.js";import"./TimeInfo-CpoQ0m8x.js";import"./uuid-Cl5lrJ4c.js";import"./labelUtils-B_u6kgCj.js";var y;let l=y=class extends P{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([r({type:Number,json:{write:!0}})],l.prototype,"age",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=y=t([I("esri.layers.support.PurgeOptions")],l);const j=l,b=me();function S(e,o){return new d("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${o}`,{layer:e})}let i=class extends H(B(Y(ie(te(ee(Q(K(X(q(Z(F(W)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new j,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=x.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=A(async(o,s,a)=>{const{save:n,saveAs:p}=await g(()=>import("./streamLayerUtils-DEuJu8hn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));switch(o){case c.SAVE:return n(this,s);case c.SAVE_AS:return p(this,a,s)}})}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const o=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(E).then(()=>this._fetchService(o))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const o=this._normalizeFeatureReduction(e);this._set("featureReduction",o)}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,o,s){var n;o=o.layerDefinition||o;const a=(n=o.drawingInfo)==null?void 0:n.renderer;if(a){const p=O(a,o,s)||void 0;return p||k.getLogger(this).error("Failed to create renderer",{rendererDefinition:o.drawingInfo.renderer,layer:this,context:s}),p}return de(o,s)}async connect(e){const[{createConnection:o}]=await Promise.all([g(()=>import("./createConnection-C7--BvvF.js"),__vite__mapDeps([9,2,3])),this.load()]),s=this.geometryType?h.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:p=null,maxReconnectionAttempts:R=0,maxReconnectionInterval:$=20,spatialReference:_=this.spatialReference}=e||this.createConnectionParameters(),m=o(this.parsedUrl,this.spatialReference,_,s,n,p,R,$,a??void 0),T=D([this.on("send-message-to-socket",u=>m.sendMessageToSocket(u)),this.on("send-message-to-client",u=>m.sendMessageToClient(u))]);return m.once("destroy",T.remove),m}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return ye(this,e)}createQuery(){const e=new U;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,o){if(!this.fields)return null;let s=null;return this.fields.some(a=>(a.name===e&&(s=a.domain),!!s)),s}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(c.SAVE,e)}async saveAs(e,o){return this._debouncedSaveOperations(c.SAVE_AS,o,e)}write(e,o){const s=o==null?void 0:o.messages;return this.webSocketUrl?(s==null||s.push(S(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,o):(s==null||s.push(S(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var o,s,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await C(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((o=this.timeInfo)!=null&&o.trackIdField))throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(s=this.fields.find(p=>p.type==="oid"))==null?void 0:s.name;if(!n)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new N({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),V(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),he(this,{origin:"service"})}};t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r({type:fe})],i.prototype,"elevationInfo",void 0),t([r({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([r(b.fields)],i.prototype,"fields",void 0),t([r(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:L,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([r({type:h.apiValues,json:{read:{reader:h.read}}})],i.prototype,"geometryType",void 0),t([r(re)],i.prototype,"labelsVisible",void 0),t([r({type:[ce],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}})],i.prototype,"labelingInfo",void 0),t([r(oe)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],i.prototype,"listMode",void 0),t([r({type:v})],i.prototype,"maxReconnectionAttempts",void 0),t([r({type:v})],i.prototype,"maxReconnectionInterval",void 0),t([r(se)],i.prototype,"maxScale",void 0),t([r(ne)],i.prototype,"minScale",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],i.prototype,"outFields",void 0),t([r(ae)],i.prototype,"popupEnabled",void 0),t([r({type:z,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([r({type:j})],i.prototype,"purgeOptions",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([r({types:G,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:J,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([w("service","renderer",["drawingInfo.renderer","defaultSymbol"]),w("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([r((()=>{const e=M(pe);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r()],i.prototype,"sourceJSON",void 0),t([r({type:x,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([r({json:{read:!1}})],i.prototype,"type",void 0),t([r(le)],i.prototype,"url",void 0),t([r({type:Number})],i.prototype,"updateInterval",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([r({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const Ye=i;export{Ye as default};
//# sourceMappingURL=StreamLayer-h7r8DPZt.js.map
