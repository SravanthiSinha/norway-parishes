import{x as e,s as a,j as o,m as p,k as s}from"./index-D2fbPmv2.js";import{a as n}from"./BitmapContainer-n0LeRaaf.js";import{j as h,y as d}from"./LayerView-DldpZlXk.js";import{_ as y}from"./ExportStrategy-CKBNVgMC.js";import{i as c}from"./RefreshableLayerView-hGxAEGej.js";import"./WGLContainer-BRh4EoLr.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-B-gkjBsf.js";import"./Texture-CajnDYcB.js";import"./enums-Dk3osxpS.js";import"./Program-oC_p2-iu.js";import"./BufferObject-4tW9v_Cc.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-D6ACJvZl.js";import"./ProgramTemplate-BVu2BToj.js";import"./mat2df32-orApM5a3.js";import"./mat3-CrHuGM2_.js";import"./MapView-CsYtnhyS.js";import"./CollectionFlattener-CqhMwHE_.js";import"./TileInfo-b1BHpKqb.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-CNEIzw3I.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DtwuLIN4.js";import"./signal-DPvHhoiI.js";import"./ColorBackground-Cik_pyky.js";import"./basemapUtils-DjbuSOSo.js";import"./TablesMixin-BcLnbFXT.js";import"./HeightModelInfo-CjsnL3DZ.js";import"./ReactiveMap-D0Ai_sLK.js";import"./a11yUtils-BVrZwHpI.js";import"./ViewingMode-dBUh39ak.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-2o2bt4uL.js";import"./Tile-XgEW8l5M.js";import"./TileKey-Cx9ntQ8r.js";import"./QueueProcessor-C8F9LQNl.js";import"./quickselect-QQC62dOK.js";import"./vec32-wKfHB3TO.js";import"./imageUtils-ywQwDfd6.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-CFpkQH0R.js";import"./GoTo-Dpj-g8zR.js";import"./ZoomViewModel-D5ih0iIl.js";import"./vec3f32-nZdmKIgz.js";import"./Container-roUUAKGV.js";import"./EffectView-DwVnaB6x.js";import"./StyleDefinition-DLF2cd0L.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-DXTxrSKl.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-NjuDU5Zt.js";import"./Bitmap-BTw2de_4.js";let t=class extends c(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new y({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const _t=t;export{_t as default};
//# sourceMappingURL=BaseDynamicLayerView2D-CNDlPGv-.js.map