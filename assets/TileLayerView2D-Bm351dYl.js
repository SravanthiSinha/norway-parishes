import{av as w,a9 as y,x as l,s as I,j as m,m as g,k as V}from"./index-BB6xpuj5.js";import{c as H}from"./GraphicsCollection-BlSm0Gtj.js";import"./floatRGBA-DhSBilR8.js";import"./definitions-C0Jy3zs7.js";import"./UpdateTracking2D-eAHQ9B1z.js";import"./GeometryUtils-CoU-W_YD.js";import"./CIMSymbolHelper-41U55g81.js";import"./vec2f32-BbH2jxlN.js";import"./EffectView-ByR8_5fn.js";import"./Container-CzB7Zj09.js";import"./MapView-BB5zyy98.js";import"./WGLContainer-DtgvS25h.js";import"./Texture-BzN5lHkh.js";import"./enums-Dk3osxpS.js";import"./Program-0OZM0gHS.js";import"./LabelMetric-C8LidgNF.js";import"./StyleDefinition-Bx5E0gVl.js";import"./enums-BRzLM11V.js";import"./GridShader-X_NXheC2.js";import"./FeatureCommandQueue-9w2UUk_3.js";import"./PieChartMeshWriter-CaZ5yCif.js";import"./renderState-BqKKaxGi.js";import"./interfaces-DDtDqZYj.js";import"./testSVGPremultipliedAlpha-B8_QppNa.js";import{F as v}from"./GraphicsView2D-FXKEKrJx.js";import"./earcut-Lltz9D9k.js";import"./vec3f32-nZdmKIgz.js";import"./UpdatingHandles-DP1x1Bsi.js";import{r as T,o as n,n as f}from"./imageUtils-CgD5z6V9.js";import{j as q,y as U}from"./LayerView-C9uOes3C.js";import{h as C}from"./HighlightGraphicContainer-Cxs5_Ao3.js";import{h as b,p as Q,r as S}from"./Tile-CSO7o2Lx.js";import{e as d}from"./TileKey-bsr5k5kR.js";import{i as $}from"./RefreshableLayerView-CRbdvOE2.js";import{_ as F,R as P}from"./MapServiceLayerViewHelper-IkX0ovuV.js";import{r as k}from"./drapedUtils-CeMCyOR9.js";import{g as L}from"./Scheduler-CoC6AtxP.js";import"./BindType-BmZEZMMh.js";import"./Util-CB3Gd6Qy.js";import"./ReactiveMap-C5xyLUPa.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-3KqT7etV.js";import"./mat2df32-orApM5a3.js";import"./Rect-CUzevAry.js";import"./BoundingBox-CnpCxTZE.js";import"./parser-Bf0eM-Za.js";import"./utils-Dmn_mtNQ.js";import"./CollectionFlattener-vw9PCdEV.js";import"./TileInfo-DckZPgmV.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-zVWkHYEv.js";import"./uuid-Cl5lrJ4c.js";import"./signal-JD86_R7M.js";import"./ColorBackground-5boBVQCV.js";import"./basemapUtils-DT7CgBiu.js";import"./TablesMixin-rUkw-8tc.js";import"./Layer-5zl9d9z3.js";import"./HeightModelInfo-Cn8WVYm1.js";import"./a11yUtils-XrMtlS1N.js";import"./ViewingMode-dBUh39ak.js";import"./mat3-DJqSU6w-.js";import"./unitBezier-BX6NeAEr.js";import"./vec32-Dn1yeTzb.js";import"./imageUtils-DlrOtbVu.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-D95E-zHd.js";import"./GoTo-CVPsm2b2.js";import"./ZoomViewModel-CECqLXXU.js";import"./BufferObject-C7inN83X.js";import"./VertexArrayObject-C34nLg7v.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-BeeJCxBw.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-L6p5wBVT.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-KxhCcAOR.js";import"./TimeOnly-DIyoNsbt.js";import"./timeSupport-DrDUNSUJ.js";import"./labelUtils-CfVEjBe_.js";import"./constants-F8oTIn7N.js";import"./QueueProcessor-DuXSk4nk.js";import"./TurboLine-HQYU6oKw.js";import"./basicInterfaces-CZwQPxTp.js";import"./normalizeUtilsSync-CvBZNtZ1.js";import"./Bitmap-_yYvhRdM.js";import"./TileContainer-BXFytAM8.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-CcnERjia.js";import"./AGraphicContainer-W19VHD7K.js";import"./TechniqueInstance-C_8TZDcA.js";import"./quickselect-QQC62dOK.js";import"./languageUtils-BJoJtOFr.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-D8BD57CC.js";import"./number-cDrsXZwg.js";import"./scaleUtils-CXS8w2T5.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-DS_XOj90.js";import"./popupUtils-CrX-1EJ0.js";const E=[0,0];let p=class extends $(T(q(U))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new H,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var i;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(i=this._highlightView)==null||i.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,i=this.tilemapCache;if(this._tileInfoView=new b(this.layer.tileInfo,this.layer.fullExtent,i==null?void 0:i.effectiveMinLOD,i==null?void 0:i.effectiveMaxLOD),this._fetchQueue=new Q({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(e,r)=>this.fetchTile(e,r),scheduler:this.scheduler,priority:L.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new S({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),F(this,this.layer)){const e=this._highlightView=new v({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(r,h)=>k(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{e.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,i;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(i=this._highlightView)==null||i.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):w()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var i;return y((i=this.layer.tileInfo)==null?void 0:i.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const i=this._bitmapView.createTile(t),e=i.bitmap;return[e.x,e.y]=this._tileInfoView.getTileCoords(E,i.key),e.resolution=this._tileInfoView.getTileResolution(i.key),[e.width,e.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(i)),this._bitmapView.addChild(i),this.requestUpdate(),i}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,i={}){const e=this.tilemapCache,{signal:r,resamplingLevel:h=0}=i;if(!e)try{return await this._fetchImage(t,r)}catch(s){if(!l(s)&&!this.resampling)return n(this._tileInfoView.tileInfo.size);if(h<3){const c=this._tileInfoView.getTileParentId(t.id);if(c){const u=new d(c),_=await this.fetchTile(u,{...i,resamplingLevel:h+1});return f(this._tileInfoView,_,u,t)}}throw s}const o=new d(0,0,0,0);let a;try{if(await e.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:r}),!this.resampling&&o.level!==t.level)return n(this._tileInfoView.tileInfo.size);a=await this._fetchImage(o,r)}catch(s){if(l(s))throw s;return n(this._tileInfoView.tileInfo.size)}return this.resampling?f(this._tileInfoView,a,o,t):a}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const i=await this._fetchQueue.push(t.key);t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(i){l(i)||I.getLogger(this).error(i)}this.requestUpdate()}}async _fetchImage(t,i){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i})}};m([g()],p.prototype,"resampling",null),m([g()],p.prototype,"tilemapCache",null),p=m([V("esri.views.2d.layers.TileLayerView2D")],p);const Si=p;export{Si as default};