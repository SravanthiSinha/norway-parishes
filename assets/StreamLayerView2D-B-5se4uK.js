import{j as s,m as n,k as l,as as m,I as c,g7 as _,av as g,dw as d}from"./index-Bs-G_wsu.js";import{n as f,r as v}from"./FeatureLayerView2D-BFCD3vcb.js";import{d as S}from"./FeatureEffect-27mWUEtN.js";import"./EffectView-WSxrhc-p.js";import"./parser-DP7rDSW3.js";import"./utils-DzB8n6BG.js";import"./featureConversionUtils-ei0M_jjf.js";import"./timeSupport-Bab_d8jn.js";import"./ColorBackground-CCzJQZw-.js";import"./CollectionFlattener-CTw_eXOA.js";import"./basemapUtils-RODjC3R-.js";import"./TablesMixin-D5Abru63.js";import"./Layer-BD5fEEcE.js";import"./LayerView-L9WOE_tC.js";import"./utils-BQBvadb7.js";import"./Container-BRPA9zGb.js";import"./MapView-7hqc2w8m.js";import"./TileInfo-X-DVPDNH.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-C0q8jVKr.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BZI7TPX6.js";import"./signal-C7Z0zfYm.js";import"./GraphicsCollection-BPX1FENo.js";import"./HeightModelInfo-DY5GmORu.js";import"./ReactiveMap-Btmvxhy1.js";import"./a11yUtils-DR3mHIY3.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-CCtmvIux.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-Y5S3bHF4.js";import"./Tile-Bke8hHhA.js";import"./TileKey-nDEHDDFT.js";import"./QueueProcessor-DEWsxSyU.js";import"./quickselect-QQC62dOK.js";import"./vec32-DrHtz8AR.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DjetOvUR.js";import"./imageUtils-DdVwTzau.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-ZJ2HMe1D.js";import"./GoTo-BgN2O0Pt.js";import"./ZoomViewModel-CCupbAtb.js";import"./layerViewUtils-CfF_Y5oJ.js";import"./TechniqueInstance-BT935Iy0.js";import"./UpdateTracking2D-Dono4bHa.js";import"./BindType-BmZEZMMh.js";import"./Util-CdewOAs0.js";import"./Program-BVV7sx1C.js";import"./BufferObject-Dq_tCz8c.js";import"./LabelMetric-DtACvfoK.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-DUjlVwwY.js";import"./WGLContainer-CeFzL7xd.js";import"./VertexArrayObject-DJ5ZGaSa.js";import"./ProgramTemplate-BFR1xPkh.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CM7tWv0g.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-Cuv4oQHG.js";import"./CIMSymbolHelper-799C16L1.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-B-QRqpgF.js";import"./GeometryUtils-JLgpq-p8.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./featureReductionUtils-Caulfaw_.js";import"./OrderByInfo-Dttd1GVs.js";import"./labelingInfo-Qff1pGsE.js";import"./labelUtils-BPgYl1Yw.js";import"./SDFHelper-BVR1Hdqi.js";import"./floatRGBA-BQ3o4Bkr.js";import"./HighlightCounter-Czi-fdpx.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-DJPVxUS3.js";import"./RefreshableLayerView-BZPn9ILD.js";import"./jsonUtils-qHdUfL9L.js";const C=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([n()],t.prototype,"_isUserPaused",void 0),s([n({readOnly:!0})],t.prototype,"connectionStatus",null),s([n({type:S})],t.prototype,"filter",void 0),t=s([l("esri.views.layers.StreamLayerView")],t),t};let o=class extends C(v){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([m(()=>this.layer.customParameters,async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e)}),this.layer.on("send-message-to-socket",async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e)}),this.layer.on("send-message-to-client",async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),m(()=>this.layer.purgeOptions,()=>this._update()),m(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new c("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return _(e.map(i=>this.on(i,t)));const r=["data-received","message-received"].includes(e);r&&this.getWorker().then(i=>i.streamMessenger.enableEvent(e,!0));const p=super.on(e,t),a=this;return g(()=>{p.remove(),r&&(a._workerProxy.closed||a.hasEventListener(e)||a.getWorker().then(i=>i.streamMessenger.enableEvent(e,!1)))})}async queryLatestObservations(e,t){var p,a,i;if(!((p=this.layer.timeInfo)!=null&&p.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new c("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const r=await this.getWorker();return f(r.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(y=>{const h=d.fromJSON(y);return h.features.forEach(u=>{u.layer=this.layer,u.sourceLayer=this.layer}),h}),new d({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(e=>e.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(e=>e.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(e=>e.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};s([n()],o.prototype,"pipelineConnectionStatus",void 0),s([n()],o.prototype,"pipelineErrorString",void 0),s([n({readOnly:!0})],o.prototype,"connectionError",null),s([n({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=s([l("esri.views.2d.layers.StreamLayerView2D")],o);const $e=o;export{$e as default};
