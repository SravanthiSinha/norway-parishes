import{x as e,s as a,j as o,m as p,k as s}from"./index-Dqo4rVFT.js";import{a as n}from"./BitmapContainer-BSKXMUgl.js";import{j as h,y as d}from"./LayerView-d04Ljfgr.js";import{_ as y}from"./ExportStrategy-Bnoy8Lru.js";import{i as c}from"./RefreshableLayerView-DlePI9jL.js";import"./WGLContainer-BT5uB29f.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-BtsnsCWn.js";import"./Texture-DM5s9Z7h.js";import"./enums-Dk3osxpS.js";import"./Program-CfTis0-R.js";import"./BufferObject-_6I8GtHe.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-BOQQcrsv.js";import"./ProgramTemplate-vy0ejg8H.js";import"./mat2df32-orApM5a3.js";import"./mat3-BPo7zqPd.js";import"./MapView-PMUr_KlW.js";import"./CollectionFlattener-CLmJgeo8.js";import"./TileInfo-CTNDTilf.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-CTdYtfv3.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DwxXKo3O.js";import"./signal-DPzZjOXm.js";import"./ColorBackground-Nzyu0fAJ.js";import"./basemapUtils-Dk28Ezgn.js";import"./TablesMixin-C4OWsqfi.js";import"./HeightModelInfo-CA7Yxqkf.js";import"./ReactiveMap-Dfez83y5.js";import"./a11yUtils-CKKjReE_.js";import"./ViewingMode-dBUh39ak.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CWGmb18Z.js";import"./Tile-BG925xcF.js";import"./TileKey-BvuiRUOc.js";import"./QueueProcessor-BmOU92IN.js";import"./quickselect-QQC62dOK.js";import"./vec32-C-ocfarP.js";import"./imageUtils-yYI5FqXE.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-Q5uIkflD.js";import"./GoTo-BfE0bPa_.js";import"./ZoomViewModel-BDSbY6t-.js";import"./vec3f32-nZdmKIgz.js";import"./Container-C5oTxL7-.js";import"./EffectView-Ct9Vxdl7.js";import"./StyleDefinition-BaSqD2Wd.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-DmTMDCzt.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-DW2BdKJl.js";import"./Bitmap-fJxm10hz.js";let t=class extends c(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new y({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const _t=t;export{_t as default};
//# sourceMappingURL=BaseDynamicLayerView2D-B3s3GI_L.js.map
