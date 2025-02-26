import{v as a,d6 as m,ae as g,c4 as l,aq as o,j as s,m as c,k as n}from"./index-5zHX_dwk.js";import{j as d,y as u}from"./LayerView-rCg6KIRY.js";import{t as w}from"./GraphicContainer-CfU4LKNq.js";import{F as y}from"./GraphicsView2D-BL7Ycl6x.js";import{e as V}from"./HighlightCounter-Czi-fdpx.js";import"./utils-BQBvadb7.js";import"./Container-iKQzn13j.js";import"./MapView-BOoKPXYW.js";import"./CollectionFlattener-vRDeO2uo.js";import"./TileInfo-CmdPm9xa.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-B8kjgVSB.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DJVDJ-kM.js";import"./signal-hJKBWjtw.js";import"./ColorBackground-CU0b6UMv.js";import"./basemapUtils-DQX65VyX.js";import"./TablesMixin-W2GD88Gv.js";import"./HeightModelInfo-gBdUFXlb.js";import"./ReactiveMap-zYIgtjn4.js";import"./a11yUtils-DuNzW9U_.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-BWDp4RJW.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DXpyYTwW.js";import"./Tile-CvwsKAxd.js";import"./TileKey-CF3FRUAs.js";import"./QueueProcessor-DhV4ni5l.js";import"./quickselect-QQC62dOK.js";import"./vec32-DhGnS-cJ.js";import"./definitions-DyYHcW4a.js";import"./enums-Dk3osxpS.js";import"./Texture-CO44Htzn.js";import"./imageUtils-Cv7JqKrf.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-DcYMHgQ4.js";import"./GoTo-wfZu7VG1.js";import"./ZoomViewModel-CBFtqPpu.js";import"./EffectView-Bq8r2Xfq.js";import"./layerViewUtils-Wc0MbT4V.js";import"./AGraphicContainer-BJTKrc32.js";import"./TechniqueInstance-CUmRU_CK.js";import"./UpdateTracking2D-aUbtauFS.js";import"./BindType-BmZEZMMh.js";import"./Util-CYnvt9Uf.js";import"./Program-CojENRj7.js";import"./BufferObject-DIaLetwY.js";import"./LabelMetric-DaS7kmiA.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-B-nQmUub.js";import"./WGLContainer-C5bsGb41.js";import"./VertexArrayObject-BXv2nLdP.js";import"./ProgramTemplate-DrxKVvHG.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CXoZPLIL.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-DR3ktfcm.js";import"./FeatureCommandQueue-BU1RnNWe.js";import"./CIMSymbolHelper-DZNSPPDI.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-515rl8ry.js";import"./GeometryUtils-Bg2cicNw.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-LPTP7O4L.js";import"./TimeOnly-CvT826Cu.js";import"./timeSupport-5muYy_Fi.js";import"./labelUtils-BWSlYVO_.js";import"./normalizeUtilsSync-D1-tjuhE.js";let h=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=a(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let r;typeof i=="number"?r=[i]:i instanceof m?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):g.isCollection(i)&&i.length>0&&(r=i.map(e=>e&&e.uid).toArray());const p=r==null?void 0:r.filter(l);return p!=null&&p.length?(this._addHighlight(p,t),o(()=>this._removeHighlight(p,t))):o()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){var t;const i=[];for(const r of this._highlightCounter.ids()){const p=this._highlightCounter.getHighlightGroups(r),e=this._getHighlightBits(p);i.push({objectId:r,highlightFlags:e})}(t=this.graphicsView)==null||t.setHighlight(i)}};s([c()],h.prototype,"graphicsView",void 0),h=s([n("esri.views.2d.layers.GraphicsLayerView2D")],h);const Li=h;export{Li as default};
//# sourceMappingURL=GraphicsLayerView2D-WMpj-FV6.js.map
