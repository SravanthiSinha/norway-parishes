import{du as w,ar as y,a9 as I,x as l,s as V,j as m,m as g,k as H}from"./index-Du44_A8J.js";import"./floatRGBA-BdBVZx5e.js";import"./definitions-C0Jy3zs7.js";import"./UpdateTracking2D-GqEwK6PT.js";import"./GeometryUtils-CUq0NnLt.js";import"./CIMSymbolHelper-CwJQy7eR.js";import"./vec2f32-BbH2jxlN.js";import"./EffectView-DXXzMERB.js";import"./Container-CnOd77AE.js";import"./MapView-DR3O-qOW.js";import"./WGLContainer-EZCJB-kq.js";import"./Texture-BJZ-kAGU.js";import"./enums-Dk3osxpS.js";import"./Program-D4HZRkCI.js";import"./LabelMetric-B4kV8hHg.js";import"./StyleDefinition-Cvso3C8D.js";import"./enums-BRzLM11V.js";import"./GridShader-D8q06yOG.js";import"./FeatureCommandQueue-C_1gd7_a.js";import"./PieChartMeshWriter-DDmQhw7O.js";import"./renderState-BqKKaxGi.js";import"./interfaces-DDtDqZYj.js";import"./testSVGPremultipliedAlpha-D9rXS1W7.js";import{F as v}from"./GraphicsView2D-DS9sT3t_.js";import"./earcut-Lltz9D9k.js";import"./vec3f32-nZdmKIgz.js";import"./UpdatingHandles-CYheTOv1.js";import{r as T,o as n,n as f}from"./imageUtils-CS_Wk-tQ.js";import{j as q,y as U}from"./LayerView-CNlVovrm.js";import{h as C}from"./HighlightGraphicContainer-CuBvgPEF.js";import{h as b,p as Q,r as S}from"./Tile-W8CKRdxd.js";import{e as d}from"./TileKey-DmBr4jDz.js";import{i as $}from"./RefreshableLayerView-DaxT4KpQ.js";import{_ as F,R as P}from"./MapServiceLayerViewHelper-D86_RiuO.js";import{r as k}from"./drapedUtils-Cp81M0Qg.js";import{g as L}from"./Scheduler-BziHCHAa.js";import"./BindType-BmZEZMMh.js";import"./Util-CdE8RakK.js";import"./ReactiveMap-QWJ3IpsZ.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-DbKpR8n2.js";import"./mat2df32-orApM5a3.js";import"./Rect-CUzevAry.js";import"./BoundingBox-CnpCxTZE.js";import"./CollectionFlattener-C_SkK2OR.js";import"./TileInfo-DuhHTNTj.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-DJu6XiYc.js";import"./uuid-Cl5lrJ4c.js";import"./signal-Ba7p4w-w.js";import"./ColorBackground-DLR35STU.js";import"./basemapUtils-DhbQ_DRF.js";import"./TablesMixin-Q8kcPu97.js";import"./HeightModelInfo-B1CAuLNS.js";import"./a11yUtils-CZikqPOJ.js";import"./ViewingMode-dBUh39ak.js";import"./mat3-BM-4VqQo.js";import"./unitBezier-BX6NeAEr.js";import"./vec32-DeRCSSXC.js";import"./imageUtils-B008ONnG.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-DwTVUpbg.js";import"./GoTo-Dh2arNEz.js";import"./ZoomViewModel-CHK95vLh.js";import"./BufferObject-1_rpUNo5.js";import"./VertexArrayObject-C1QoPdgd.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-B4Cd01GW.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-DZlLcsaX.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-ByO5jLCG.js";import"./TimeOnly-C__v8x9z.js";import"./timeSupport-Cx4dFFyF.js";import"./labelUtils-CqoQ4tTv.js";import"./constants-F8oTIn7N.js";import"./QueueProcessor-ChFdpN1N.js";import"./TurboLine-CgNboEe4.js";import"./basicInterfaces-CZwQPxTp.js";import"./normalizeUtilsSync-DW8ZTBGU.js";import"./Bitmap-BBURaKex.js";import"./TileContainer-BXIIvHtG.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-CZO2-ibw.js";import"./AGraphicContainer-I4Vszzjy.js";import"./TechniqueInstance-DQBqsPMI.js";import"./quickselect-QQC62dOK.js";import"./languageUtils-H9EQ6rwl.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-zOs8GhvC.js";import"./number-C2LMEK4A.js";import"./scaleUtils-DosC-pxb.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-Bm3L2K6Y.js";import"./popupUtils-B8B8LhWL.js";const E=[0,0];let p=class extends $(T(q(U))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var i;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(i=this._highlightView)==null||i.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,i=this.tilemapCache;if(this._tileInfoView=new b(this.layer.tileInfo,this.layer.fullExtent,i==null?void 0:i.effectiveMinLOD,i==null?void 0:i.effectiveMaxLOD),this._fetchQueue=new Q({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(e,r)=>this.fetchTile(e,r),scheduler:this.scheduler,priority:L.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new S({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),F(this,this.layer)){const e=this._highlightView=new v({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(r,h)=>k(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{e.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,i;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(i=this._highlightView)==null||i.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):y()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var i;return I((i=this.layer.tileInfo)==null?void 0:i.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const i=this._bitmapView.createTile(t),e=i.bitmap;return[e.x,e.y]=this._tileInfoView.getTileCoords(E,i.key),e.resolution=this._tileInfoView.getTileResolution(i.key),[e.width,e.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(i)),this._bitmapView.addChild(i),this.requestUpdate(),i}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,i={}){const e=this.tilemapCache,{signal:r,resamplingLevel:h=0}=i;if(!e)try{return await this._fetchImage(t,r)}catch(s){if(!l(s)&&!this.resampling)return n(this._tileInfoView.tileInfo.size);if(h<3){const u=this._tileInfoView.getTileParentId(t.id);if(u){const c=new d(u),_=await this.fetchTile(c,{...i,resamplingLevel:h+1});return f(this._tileInfoView,_,c,t)}}throw s}const o=new d(0,0,0,0);let a;try{if(await e.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:r}),!this.resampling&&o.level!==t.level)return n(this._tileInfoView.tileInfo.size);a=await this._fetchImage(o,r)}catch(s){if(l(s))throw s;return n(this._tileInfoView.tileInfo.size)}return this.resampling?f(this._tileInfoView,a,o,t):a}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const i=await this._fetchQueue.push(t.key);t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(i){l(i)||V.getLogger(this).error(i)}this.requestUpdate()}}async _fetchImage(t,i){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i})}};m([g()],p.prototype,"resampling",null),m([g()],p.prototype,"tilemapCache",null),p=m([H("esri.views.2d.layers.TileLayerView2D")],p);const Ui=p;export{Ui as default};
//# sourceMappingURL=TileLayerView2D-LzJ0U6-e.js.map