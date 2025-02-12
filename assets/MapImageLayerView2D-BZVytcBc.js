import{j as r,m as o,k as h,dv as g,x as l,s as d,ao as u}from"./index-BlakZCKi.js";import{a as c}from"./BitmapContainer-CwSfhhmH.js";import{j as y,y as f}from"./LayerView-ByunL6y1.js";import{F as x}from"./GraphicsView2D-DK9UW4Jb.js";import{h as w}from"./HighlightGraphicContainer-CzRTXFMJ.js";import{_}from"./ExportStrategy-BnSBUYXF.js";import{y as v}from"./ExportImageParameters-BWXtHHHD.js";import{i as H}from"./timeSupport-B8BCo_tv.js";import{i as I}from"./RefreshableLayerView-Dq0oi9Ru.js";import{R as $}from"./MapServiceLayerViewHelper-BZ1jv82O.js";import{r as E}from"./drapedUtils-DXTyxjKV.js";import"./WGLContainer-ywGG4HKy.js";import"./definitions-DyYHcW4a.js";import"./LabelMetric-nn2HBY1g.js";import"./Texture-D6vJ20xR.js";import"./enums-Dk3osxpS.js";import"./Program-CSIhTcu6.js";import"./BufferObject-NNtlKSQ-.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-CnpCxTZE.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-CBNdzZ90.js";import"./ProgramTemplate-rL4TVITw.js";import"./mat2df32-orApM5a3.js";import"./mat3-BC7N_t3a.js";import"./MapView-BMmB7URs.js";import"./CollectionFlattener-nugv4EKT.js";import"./TileInfo-75pndWEG.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-Cw4Gs3N2.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-qb2IBMAj.js";import"./signal-CD2sECoA.js";import"./ColorBackground-C7QrWvcW.js";import"./basemapUtils-Dtq4Jl7n.js";import"./TablesMixin-B9u2pYWE.js";import"./HeightModelInfo-CX4NXl5N.js";import"./ReactiveMap-BS_XCm-Z.js";import"./a11yUtils-CJyWSAiE.js";import"./ViewingMode-dBUh39ak.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-R-nUZmC3.js";import"./Tile-DBrdErv5.js";import"./TileKey-BguNnRzZ.js";import"./QueueProcessor-Dsokk-Uj.js";import"./quickselect-QQC62dOK.js";import"./vec32-zVyU2qww.js";import"./imageUtils-C6Wv9Has.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-D8o0tMUT.js";import"./GoTo-Gzus1v6k.js";import"./ZoomViewModel-C1QNUJxm.js";import"./vec3f32-nZdmKIgz.js";import"./Container-Bs5-INQk.js";import"./EffectView-PJqZ3H63.js";import"./StyleDefinition-5f2bOwPp.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-Cmv-Q_mn.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-Bj4nGbQ0.js";import"./CIMSymbolHelper-Bw8BOJVr.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-8AMBcY-K.js";import"./GeometryUtils-BZiPhb8s.js";import"./Rect-CUzevAry.js";import"./AttributeStore-CNOWteqi.js";import"./TimeOnly-BEL7DyhU.js";import"./timeSupport-CgVljth9.js";import"./UpdateTracking2D-Cghie6v8.js";import"./BindType-BmZEZMMh.js";import"./Util-DQVt3_NB.js";import"./labelUtils-C0HBd1KF.js";import"./FeatureCommandQueue-RPS8jLqr.js";import"./constants-F8oTIn7N.js";import"./normalizeUtilsSync-RL6e3iOX.js";import"./AGraphicContainer-B1TVaSHB.js";import"./TechniqueInstance-D-xBfjCQ.js";import"./TileContainer-BcUhdSpu.js";import"./Bitmap-0v2eXtuz.js";import"./scaleUtils-CbMHtRuV.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-DUXVhiy1.js";import"./languageUtils-YpmkHucm.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-CU3yTiHd.js";import"./number-C99u4Lx8.js";import"./popupUtils-rFC7qTS_.js";const V=t=>{let e=class extends t{initialize(){this.exportImageParameters=new v({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var i;return H(this.layer,(i=this.view)==null?void 0:i.timeExtent,this._get("timeExtent"))}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o({readOnly:!0})],e.prototype,"timeExtent",null),e=r([h("esri.views.layers.MapImageLayerView")],e),e};let a=class extends V(I(y(f))){constructor(){super(...arguments),this._highlightGraphics=new g,this._updateHash=""}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{l(i)||d.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,p=i>=10.3,n=i>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer),this._highlightView=new x({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new w(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new $({createFetchPopupFeaturesQueryGeometry:(s,m)=>E(s,m,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(s,m)=>{this._highlightView.graphicUpdateHandler({graphic:s,property:m})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:p,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(u(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,p){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...p})}fetchImageBitmap(t,e,i,p){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...p})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],a.prototype,"strategy",void 0),r([o()],a.prototype,"updating",void 0),a=r([h("esri.views.2d.layers.MapImageLayerView2D")],a);const hi=a;export{hi as default};
//# sourceMappingURL=MapImageLayerView2D-BZVytcBc.js.map
