import{v as m,d4 as a,ae as g,c1 as l,av as h,j as s,m as c,k as n}from"./index-Bs-G_wsu.js";import{j as d,y as u}from"./LayerView-L9WOE_tC.js";import{t as w}from"./GraphicContainer-CjnOdnGh.js";import{F as y}from"./GraphicsView2D-Beg0HwAp.js";import{e as V}from"./HighlightCounter-Czi-fdpx.js";import"./utils-BQBvadb7.js";import"./Container-BRPA9zGb.js";import"./MapView-7hqc2w8m.js";import"./CollectionFlattener-CTw_eXOA.js";import"./TileInfo-X-DVPDNH.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-C0q8jVKr.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BZI7TPX6.js";import"./signal-C7Z0zfYm.js";import"./ColorBackground-CCzJQZw-.js";import"./basemapUtils-RODjC3R-.js";import"./utils-DzB8n6BG.js";import"./TablesMixin-D5Abru63.js";import"./Layer-BD5fEEcE.js";import"./GraphicsCollection-BPX1FENo.js";import"./HeightModelInfo-DY5GmORu.js";import"./ReactiveMap-Btmvxhy1.js";import"./a11yUtils-DR3mHIY3.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-CCtmvIux.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-Y5S3bHF4.js";import"./Tile-Bke8hHhA.js";import"./TileKey-nDEHDDFT.js";import"./QueueProcessor-DEWsxSyU.js";import"./quickselect-QQC62dOK.js";import"./vec32-DrHtz8AR.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DjetOvUR.js";import"./imageUtils-DdVwTzau.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-ZJ2HMe1D.js";import"./GoTo-BgN2O0Pt.js";import"./ZoomViewModel-CCupbAtb.js";import"./EffectView-WSxrhc-p.js";import"./parser-DP7rDSW3.js";import"./layerViewUtils-CfF_Y5oJ.js";import"./AGraphicContainer-CZfPtEk_.js";import"./TechniqueInstance-BT935Iy0.js";import"./UpdateTracking2D-Dono4bHa.js";import"./BindType-BmZEZMMh.js";import"./Util-CdewOAs0.js";import"./Program-BVV7sx1C.js";import"./BufferObject-Dq_tCz8c.js";import"./LabelMetric-DtACvfoK.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-DUjlVwwY.js";import"./WGLContainer-CeFzL7xd.js";import"./VertexArrayObject-DJ5ZGaSa.js";import"./ProgramTemplate-BFR1xPkh.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CM7tWv0g.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-ei0M_jjf.js";import"./FeatureCommandQueue-Cuv4oQHG.js";import"./CIMSymbolHelper-799C16L1.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-B-QRqpgF.js";import"./GeometryUtils-JLgpq-p8.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-BotSb6t6.js";import"./TimeOnly-57yuO3Wy.js";import"./timeSupport-BJfDK5BJ.js";import"./labelUtils-BPgYl1Yw.js";import"./normalizeUtilsSync-C73N-dkh.js";let o=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=m(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let r;typeof i=="number"?r=[i]:i instanceof a?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):g.isCollection(i)&&i.length>0&&(r=i.map(e=>e&&e.uid).toArray());const p=r==null?void 0:r.filter(l);return p!=null&&p.length?(this._addHighlight(p,t),h(()=>this._removeHighlight(p,t))):h()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){var t;const i=[];for(const r of this._highlightCounter.ids()){const p=this._highlightCounter.getHighlightGroups(r),e=this._getHighlightBits(p);i.push({objectId:r,highlightFlags:e})}(t=this.graphicsView)==null||t.setHighlight(i)}};s([c()],o.prototype,"graphicsView",void 0),o=s([n("esri.views.2d.layers.GraphicsLayerView2D")],o);const Ki=o;export{Ki as default};
