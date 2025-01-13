import{du as w,ar as y,a9 as I,x as l,s as V,j as m,m as g,k as H}from"./index-CRM8otC0.js";import"./floatRGBA-m9Mj4GRh.js";import"./definitions-C0Jy3zs7.js";import"./UpdateTracking2D-C1tMbBD2.js";import"./GeometryUtils-DGGhSpML.js";import"./CIMSymbolHelper-BAlNPPnp.js";import"./vec2f32-BbH2jxlN.js";import"./EffectView-DPFjI2Pk.js";import"./Container-A84FSTmQ.js";import"./MapView-BI6jY6ja.js";import"./WGLContainer-CPyTOpXj.js";import"./Texture-ByNBwYCf.js";import"./enums-Dk3osxpS.js";import"./Program-DoFM1Qk1.js";import"./LabelMetric-BRjPT0Tq.js";import"./StyleDefinition-yTtzgoJt.js";import"./enums-BRzLM11V.js";import"./GridShader-BzWKOl7L.js";import"./FeatureCommandQueue-tlYB6aBC.js";import"./PieChartMeshWriter-BIZY_t1t.js";import"./renderState-BqKKaxGi.js";import"./interfaces-DDtDqZYj.js";import"./testSVGPremultipliedAlpha-CyS6PXvf.js";import{F as v}from"./GraphicsView2D-C48Ja80s.js";import"./earcut-Lltz9D9k.js";import"./vec3f32-nZdmKIgz.js";import"./UpdatingHandles-BwJZEp3Q.js";import{r as T,o as n,n as f}from"./imageUtils-CkyVAGpX.js";import{j as q,y as U}from"./LayerView-Dx5aaZLj.js";import{h as C}from"./HighlightGraphicContainer-MR2_wPOc.js";import{h as b,p as Q,r as S}from"./Tile-Dt9us2ys.js";import{e as d}from"./TileKey-CGlHhlfX.js";import{i as $}from"./RefreshableLayerView-BHPcvw49.js";import{_ as F,R as P}from"./MapServiceLayerViewHelper-RXSdS5Fl.js";import{r as k}from"./drapedUtils-C-FnYbOa.js";import{g as L}from"./Scheduler-BwwMSyZq.js";import"./BindType-BmZEZMMh.js";import"./Util-DcZSoBAg.js";import"./ReactiveMap-KqFN-1SA.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-CBWuuj1R.js";import"./mat2df32-orApM5a3.js";import"./Rect-CUzevAry.js";import"./BoundingBox-CnpCxTZE.js";import"./CollectionFlattener-Smnlsg-w.js";import"./TileInfo-BaaIVUiP.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-BDeEz4Cu.js";import"./uuid-Cl5lrJ4c.js";import"./signal-B5brgr9U.js";import"./ColorBackground-QnGkf2MC.js";import"./basemapUtils-DIGbo40K.js";import"./TablesMixin-2MmYYsfl.js";import"./HeightModelInfo-Cqv1ovWQ.js";import"./a11yUtils-Ca_3r4ne.js";import"./ViewingMode-dBUh39ak.js";import"./mat3-B77SXXrK.js";import"./unitBezier-BX6NeAEr.js";import"./vec32-rRhbC1zp.js";import"./imageUtils-C0VlcWxB.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-gByKcOgw.js";import"./GoTo-1PJFxELf.js";import"./ZoomViewModel-DrFUYDpC.js";import"./BufferObject--p5FGAc0.js";import"./VertexArrayObject-CcBcd6Vp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-eorszMQW.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-Cs6pOiJO.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-wCQiVQhn.js";import"./TimeOnly-CTeFhScs.js";import"./timeSupport-DnNevIdH.js";import"./labelUtils-BQXJfBAl.js";import"./constants-F8oTIn7N.js";import"./QueueProcessor-DEhVKg8A.js";import"./TurboLine-COigpsbj.js";import"./basicInterfaces-CZwQPxTp.js";import"./normalizeUtilsSync-DsIPGooV.js";import"./Bitmap-CLV7YK0w.js";import"./TileContainer-C4PXM-06.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-DNS7b98P.js";import"./AGraphicContainer-CD4PpAwh.js";import"./TechniqueInstance-D0Jf67dB.js";import"./quickselect-QQC62dOK.js";import"./languageUtils-DQch6an-.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-CZjWQaWF.js";import"./number-ByxhONgY.js";import"./scaleUtils-Cp_2dke1.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-DnB3SmUt.js";import"./popupUtils-B0q7WQ6C.js";const E=[0,0];let p=class extends $(T(q(U))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var i;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(i=this._highlightView)==null||i.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,i=this.tilemapCache;if(this._tileInfoView=new b(this.layer.tileInfo,this.layer.fullExtent,i==null?void 0:i.effectiveMinLOD,i==null?void 0:i.effectiveMaxLOD),this._fetchQueue=new Q({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(e,r)=>this.fetchTile(e,r),scheduler:this.scheduler,priority:L.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new S({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),F(this,this.layer)){const e=this._highlightView=new v({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(r,h)=>k(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{e.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,i;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(i=this._highlightView)==null||i.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):y()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var i;return I((i=this.layer.tileInfo)==null?void 0:i.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const i=this._bitmapView.createTile(t),e=i.bitmap;return[e.x,e.y]=this._tileInfoView.getTileCoords(E,i.key),e.resolution=this._tileInfoView.getTileResolution(i.key),[e.width,e.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(i)),this._bitmapView.addChild(i),this.requestUpdate(),i}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,i={}){const e=this.tilemapCache,{signal:r,resamplingLevel:h=0}=i;if(!e)try{return await this._fetchImage(t,r)}catch(s){if(!l(s)&&!this.resampling)return n(this._tileInfoView.tileInfo.size);if(h<3){const u=this._tileInfoView.getTileParentId(t.id);if(u){const c=new d(u),_=await this.fetchTile(c,{...i,resamplingLevel:h+1});return f(this._tileInfoView,_,c,t)}}throw s}const o=new d(0,0,0,0);let a;try{if(await e.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:r}),!this.resampling&&o.level!==t.level)return n(this._tileInfoView.tileInfo.size);a=await this._fetchImage(o,r)}catch(s){if(l(s))throw s;return n(this._tileInfoView.tileInfo.size)}return this.resampling?f(this._tileInfoView,a,o,t):a}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const i=await this._fetchQueue.push(t.key);t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(i){l(i)||V.getLogger(this).error(i)}this.requestUpdate()}}async _fetchImage(t,i){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i})}};m([g()],p.prototype,"resampling",null),m([g()],p.prototype,"tilemapCache",null),p=m([H("esri.views.2d.layers.TileLayerView2D")],p);const Ui=p;export{Ui as default};
//# sourceMappingURL=TileLayerView2D-CHtKF9JI.js.map
