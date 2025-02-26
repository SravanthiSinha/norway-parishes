import{j as s,m as n,k as d,ao as m,I as c,gh as _,aq as g,dy as l}from"./index-U3f91iFJ.js";import{n as f,r as v}from"./FeatureLayerView2D-DMyaltcT.js";import{d as S}from"./FeatureEffect-CgJAlCDp.js";import"./EffectView-BFYOfUZN.js";import"./featureConversionUtils-B3uX_x-_.js";import"./timeSupport-DESKbKPa.js";import"./ColorBackground-CspFrTkX.js";import"./CollectionFlattener-CVoNSM-L.js";import"./basemapUtils-B_8lQVYY.js";import"./TablesMixin-Bsms9_l9.js";import"./LayerView-B5d11Twy.js";import"./utils-BQBvadb7.js";import"./Container-BeZDp-Rt.js";import"./MapView-DQWuKwnT.js";import"./TileInfo-3OQjBf7k.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-C_4hU5hg.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BJgDIXK8.js";import"./signal-Dw7NEpD8.js";import"./HeightModelInfo-Cifv_-P-.js";import"./ReactiveMap-_opesGhy.js";import"./a11yUtils-B3Wgba-D.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-DH4oy_om.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-BY19n29i.js";import"./Tile-CTZ4tiNT.js";import"./TileKey-Ba9bDaBb.js";import"./QueueProcessor-DwE30Ge_.js";import"./quickselect-QQC62dOK.js";import"./vec32-Cd65lPdo.js";import"./definitions-DyYHcW4a.js";import"./enums-Dk3osxpS.js";import"./Texture-CwrSGZHg.js";import"./imageUtils-HV0dvcA3.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-CIHkk8mL.js";import"./GoTo-CGvg3ho0.js";import"./ZoomViewModel-DFbndT4O.js";import"./layerViewUtils-RL8RaXsO.js";import"./TechniqueInstance-kx90rikE.js";import"./UpdateTracking2D-BLVeKMX5.js";import"./BindType-BmZEZMMh.js";import"./Util--ILVAQ9Y.js";import"./Program-DfLTPLIs.js";import"./BufferObject-BLV8EuRM.js";import"./LabelMetric-BQ2Z8EcL.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-BSKIl-xI.js";import"./WGLContainer-AjYAf8ES.js";import"./VertexArrayObject-DfruWi57.js";import"./ProgramTemplate-8wmpVIMI.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CgUprnbR.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./FeatureCommandQueue-cQS9CPmr.js";import"./CIMSymbolHelper-C4EqTnK0.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-BeP2gAEY.js";import"./GeometryUtils-DDlzr1Pn.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./featureReductionUtils-Caulfaw_.js";import"./OrderByInfo-cgZrrpeQ.js";import"./labelingInfo-CqSOJnwT.js";import"./labelUtils-CN6gVbmf.js";import"./SDFHelper-DIWm9pLB.js";import"./floatRGBA-DRTio4JI.js";import"./HighlightCounter-Czi-fdpx.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-lS-TZd_a.js";import"./RefreshableLayerView-DpPe1cHu.js";const C=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([n()],t.prototype,"_isUserPaused",void 0),s([n({readOnly:!0})],t.prototype,"connectionStatus",null),s([n({type:S})],t.prototype,"filter",void 0),t=s([d("esri.views.layers.StreamLayerView")],t),t};let o=class extends C(v){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([m(()=>this.layer.customParameters,async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e)}),this.layer.on("send-message-to-socket",async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e)}),this.layer.on("send-message-to-client",async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),m(()=>this.layer.purgeOptions,()=>this._update()),m(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new c("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return _(e.map(i=>this.on(i,t)));const r=["data-received","message-received"].includes(e);r&&this.getWorker().then(i=>i.streamMessenger.enableEvent(e,!0));const p=super.on(e,t),a=this;return g(()=>{p.remove(),r&&(a._workerProxy.closed||a.hasEventListener(e)||a.getWorker().then(i=>i.streamMessenger.enableEvent(e,!1)))})}async queryLatestObservations(e,t){var p,a,i;if(!((p=this.layer.timeInfo)!=null&&p.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new c("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const r=await this.getWorker();return f(r.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(y=>{const u=l.fromJSON(y);return u.features.forEach(h=>{h.layer=this.layer,h.sourceLayer=this.layer}),u}),new l({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(e=>e.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(e=>e.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(e=>e.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};s([n()],o.prototype,"pipelineConnectionStatus",void 0),s([n()],o.prototype,"pipelineErrorString",void 0),s([n({readOnly:!0})],o.prototype,"connectionError",null),s([n({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=s([d("esri.views.2d.layers.StreamLayerView2D")],o);const Ge=o;export{Ge as default};
//# sourceMappingURL=StreamLayerView2D-DXEwLUcF.js.map
