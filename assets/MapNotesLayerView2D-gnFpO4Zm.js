import{d7 as u,ae as f,c4 as w,ar as m,ao as a,dw as h,aq as y,j as _,k as V}from"./index-Dqo4rVFT.js";import{j as v,y as C}from"./LayerView-d04Ljfgr.js";import{t as c}from"./GraphicContainer-DxGlF2FQ.js";import{F as g}from"./GraphicsView2D-NKcuIujI.js";import"./utils-BQBvadb7.js";import"./Container-C5oTxL7-.js";import"./MapView-PMUr_KlW.js";import"./CollectionFlattener-CLmJgeo8.js";import"./TileInfo-CTNDTilf.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-CTdYtfv3.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DwxXKo3O.js";import"./signal-DPzZjOXm.js";import"./ColorBackground-Nzyu0fAJ.js";import"./basemapUtils-Dk28Ezgn.js";import"./TablesMixin-C4OWsqfi.js";import"./HeightModelInfo-CA7Yxqkf.js";import"./ReactiveMap-Dfez83y5.js";import"./a11yUtils-CKKjReE_.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-BPo7zqPd.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CWGmb18Z.js";import"./Tile-BG925xcF.js";import"./TileKey-BvuiRUOc.js";import"./QueueProcessor-BmOU92IN.js";import"./quickselect-QQC62dOK.js";import"./vec32-C-ocfarP.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DM5s9Z7h.js";import"./imageUtils-yYI5FqXE.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-Q5uIkflD.js";import"./GoTo-BfE0bPa_.js";import"./ZoomViewModel-BDSbY6t-.js";import"./EffectView-Ct9Vxdl7.js";import"./layerViewUtils-DW2BdKJl.js";import"./AGraphicContainer-DbTCi85d.js";import"./TechniqueInstance-Dqp8gCqy.js";import"./UpdateTracking2D-2hQ07DmQ.js";import"./BindType-BmZEZMMh.js";import"./Util-wHyytk6N.js";import"./Program-CfTis0-R.js";import"./BufferObject-_6I8GtHe.js";import"./LabelMetric-BtsnsCWn.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-Dcqi7g5f.js";import"./WGLContainer-BT5uB29f.js";import"./VertexArrayObject-BOQQcrsv.js";import"./ProgramTemplate-vy0ejg8H.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BaSqD2Wd.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-DmTMDCzt.js";import"./FeatureCommandQueue-S5iCQ_dI.js";import"./CIMSymbolHelper-Btm8I6sB.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-RN0qh67n.js";import"./GeometryUtils-0m__OBiv.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-DjRsfVX6.js";import"./TimeOnly-XafyDaqK.js";import"./timeSupport-CJJ8HBWh.js";import"./labelUtils-fgvL7nsO.js";import"./normalizeUtilsSync-C018keVb.js";const d="sublayers",l="layerView",H=new Set(["default"]);let n=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const o=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&o.popupTemplate&&(r.popupTemplate=o.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),m(()=>this._removeHighlight(e))):m()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const o=new c(this.view.featuresTilingScheme),r=new g({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:o});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([a(()=>s.visible,p=>r.container.visible=p,h),a(()=>r.updating,()=>this.notifyChange("updating"),h)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.removeHandles(d)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const o=new c(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const r=new g({view:t,graphics:s.graphics,requestUpdateCallback:e,container:o});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),a(()=>s.visible,p=>r.container.visible=p,h),a(()=>r.updating,()=>this.notifyChange("updating"),h)],l),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=this._getHighlightBits(H);for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};n=_([V("esri.views.2d.layers.MapNotesLayerView2D")],n);const Ri=n;export{Ri as default};
//# sourceMappingURL=MapNotesLayerView2D-gnFpO4Zm.js.map
