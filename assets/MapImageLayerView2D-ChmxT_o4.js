import{j as r,m as o,k as h,du as g,x as l,s as d,ao as u}from"./index-BfLS464G.js";import{a as c}from"./BitmapContainer-THSULQLK.js";import{j as y,y as f}from"./LayerView-CYEyZb3W.js";import{F as x}from"./GraphicsView2D-C6oMuDeF.js";import{h as w}from"./HighlightGraphicContainer-DhctGa9z.js";import{_}from"./ExportStrategy-Cb5mm1Gi.js";import{y as H}from"./ExportImageParameters-yMh-JeU_.js";import{i as v}from"./timeSupport-AjaUBYtA.js";import{i as I}from"./RefreshableLayerView-Bs-oGpxh.js";import{R as $}from"./MapServiceLayerViewHelper-Dhd8p3H9.js";import{r as E}from"./drapedUtils-BTu-tx4O.js";import"./WGLContainer-BzZmJFyx.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-BRJwH1IL.js";import"./Texture-CIfuobtw.js";import"./enums-Dk3osxpS.js";import"./Program-Ct-nfNCN.js";import"./BufferObject-DjjOol8e.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-EWeeHbao.js";import"./ProgramTemplate-DLE7FgSm.js";import"./mat2df32-orApM5a3.js";import"./mat3-Vwsw9JHV.js";import"./MapView-Bv5a0vk2.js";import"./CollectionFlattener-X0S8zgtM.js";import"./TileInfo-DWDAl8uD.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-BlS5-8-g.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DIwa6ChI.js";import"./signal-WiWIjfEr.js";import"./ColorBackground-B-aHDRbY.js";import"./basemapUtils-CATGu2F4.js";import"./TablesMixin-CFytb7-C.js";import"./HeightModelInfo-DzK0H4Qy.js";import"./ReactiveMap-BSB6_01E.js";import"./a11yUtils-C2FLl1jQ.js";import"./ViewingMode-dBUh39ak.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CrSwoFuz.js";import"./Tile-Buu0dPvS.js";import"./TileKey-B-9BfHYt.js";import"./QueueProcessor-qL0ybgsp.js";import"./quickselect-QQC62dOK.js";import"./vec32-CEaafPjr.js";import"./imageUtils-D8_Uuzpg.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-DDooyttB.js";import"./GoTo-KPBAc1MP.js";import"./ZoomViewModel-BVGsy9Mg.js";import"./vec3f32-nZdmKIgz.js";import"./Container-CFNShixe.js";import"./EffectView-NI39mQJy.js";import"./StyleDefinition-CfokGb7w.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-BtnbM9Bl.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-CBnF1ACp.js";import"./CIMSymbolHelper-CHz6TtxM.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-BZ_AsW6u.js";import"./GeometryUtils-DWsmuQNO.js";import"./Rect-CUzevAry.js";import"./AttributeStore-BNkfUBe1.js";import"./TimeOnly-DtSHZFOC.js";import"./timeSupport-CrJg8qIA.js";import"./UpdateTracking2D-CCrO4wMz.js";import"./BindType-BmZEZMMh.js";import"./Util-BDVyjLKi.js";import"./labelUtils-BlsYivSn.js";import"./FeatureCommandQueue-DVQm5wPt.js";import"./constants-F8oTIn7N.js";import"./normalizeUtilsSync-BW7uccCx.js";import"./AGraphicContainer-xJxMW2_c.js";import"./TechniqueInstance--hJSnEMu.js";import"./TileContainer-D1DkHEtK.js";import"./Bitmap-CmATu9Wi.js";import"./scaleUtils-5zOO5ijJ.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-CTolWf_F.js";import"./languageUtils-B5emut0U.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-DsAHo65Q.js";import"./number-bEXm3dJZ.js";import"./popupUtils-CGOo19ph.js";const V=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var i;return v(this.layer,(i=this.view)==null?void 0:i.timeExtent,this._get("timeExtent"))}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o({readOnly:!0})],e.prototype,"timeExtent",null),e=r([h("esri.views.layers.MapImageLayerView")],e),e};let a=class extends V(I(y(f))){constructor(){super(...arguments),this._highlightGraphics=new g,this._updateHash=""}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{l(i)||d.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,p=i>=10.3,n=i>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer),this._highlightView=new x({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new w(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new $({createFetchPopupFeaturesQueryGeometry:(s,m)=>E(s,m,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(s,m)=>{this._highlightView.graphicUpdateHandler({graphic:s,property:m})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:p,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(u(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,p){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...p})}fetchImageBitmap(t,e,i,p){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...p})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],a.prototype,"strategy",void 0),r([o()],a.prototype,"updating",void 0),a=r([h("esri.views.2d.layers.MapImageLayerView2D")],a);const hi=a;export{hi as default};
//# sourceMappingURL=MapImageLayerView2D-ChmxT_o4.js.map
