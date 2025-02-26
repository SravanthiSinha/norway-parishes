import{v as a,d6 as m,ae as g,c4 as l,aq as o,j as s,m as c,k as n}from"./index-U3f91iFJ.js";import{j as d,y as u}from"./LayerView-B5d11Twy.js";import{t as w}from"./GraphicContainer-C52-AExR.js";import{F as y}from"./GraphicsView2D-Bx00Fqal.js";import{e as V}from"./HighlightCounter-Czi-fdpx.js";import"./utils-BQBvadb7.js";import"./Container-BeZDp-Rt.js";import"./MapView-DQWuKwnT.js";import"./CollectionFlattener-CVoNSM-L.js";import"./TileInfo-3OQjBf7k.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-C_4hU5hg.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BJgDIXK8.js";import"./signal-Dw7NEpD8.js";import"./ColorBackground-CspFrTkX.js";import"./basemapUtils-B_8lQVYY.js";import"./TablesMixin-Bsms9_l9.js";import"./HeightModelInfo-Cifv_-P-.js";import"./ReactiveMap-_opesGhy.js";import"./a11yUtils-B3Wgba-D.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-DH4oy_om.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-BY19n29i.js";import"./Tile-CTZ4tiNT.js";import"./TileKey-Ba9bDaBb.js";import"./QueueProcessor-DwE30Ge_.js";import"./quickselect-QQC62dOK.js";import"./vec32-Cd65lPdo.js";import"./definitions-DyYHcW4a.js";import"./enums-Dk3osxpS.js";import"./Texture-CwrSGZHg.js";import"./imageUtils-HV0dvcA3.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-CIHkk8mL.js";import"./GoTo-CGvg3ho0.js";import"./ZoomViewModel-DFbndT4O.js";import"./EffectView-BFYOfUZN.js";import"./layerViewUtils-RL8RaXsO.js";import"./AGraphicContainer-gPeNtUFT.js";import"./TechniqueInstance-kx90rikE.js";import"./UpdateTracking2D-BLVeKMX5.js";import"./BindType-BmZEZMMh.js";import"./Util--ILVAQ9Y.js";import"./Program-DfLTPLIs.js";import"./BufferObject-BLV8EuRM.js";import"./LabelMetric-BQ2Z8EcL.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-BSKIl-xI.js";import"./WGLContainer-AjYAf8ES.js";import"./VertexArrayObject-DfruWi57.js";import"./ProgramTemplate-8wmpVIMI.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CgUprnbR.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-B3uX_x-_.js";import"./FeatureCommandQueue-cQS9CPmr.js";import"./CIMSymbolHelper-C4EqTnK0.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-BeP2gAEY.js";import"./GeometryUtils-DDlzr1Pn.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-CVCCex4Y.js";import"./TimeOnly-Db3oTXfb.js";import"./timeSupport-BfwWgrYo.js";import"./labelUtils-CN6gVbmf.js";import"./normalizeUtilsSync-Bmde3_tC.js";let h=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=a(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let r;typeof i=="number"?r=[i]:i instanceof m?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):g.isCollection(i)&&i.length>0&&(r=i.map(e=>e&&e.uid).toArray());const p=r==null?void 0:r.filter(l);return p!=null&&p.length?(this._addHighlight(p,t),o(()=>this._removeHighlight(p,t))):o()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){var t;const i=[];for(const r of this._highlightCounter.ids()){const p=this._highlightCounter.getHighlightGroups(r),e=this._getHighlightBits(p);i.push({objectId:r,highlightFlags:e})}(t=this.graphicsView)==null||t.setHighlight(i)}};s([c()],h.prototype,"graphicsView",void 0),h=s([n("esri.views.2d.layers.GraphicsLayerView2D")],h);const Li=h;export{Li as default};
//# sourceMappingURL=GraphicsLayerView2D-BZaMAhy0.js.map
