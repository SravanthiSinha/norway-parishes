import{x as e,s as a,j as o,m as p,k as s}from"./index-DhfeYpQB.js";import{a as n}from"./BitmapContainer-DYSj4Uky.js";import{j as h,y as d}from"./LayerView-SJqB1eY6.js";import{_ as y}from"./ExportStrategy-CJl49YSR.js";import{i as c}from"./RefreshableLayerView-Pl40OHUS.js";import"./WGLContainer-CNUzU3FT.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-DDRX3Ob4.js";import"./Texture-CTIBD2BW.js";import"./enums-Dk3osxpS.js";import"./Program-C0AnKlIL.js";import"./BufferObject-J4mT5ElO.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-CGtqX0LR.js";import"./ProgramTemplate-BtEuvP3d.js";import"./mat2df32-orApM5a3.js";import"./mat3-HKyrMW62.js";import"./MapView-DpQyWeFK.js";import"./CollectionFlattener-CNrooAWP.js";import"./TileInfo-CcSBnkQt.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-B8Fhn2DS.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-7erAF0dq.js";import"./signal-BRyrlvNI.js";import"./ColorBackground-DDZX8Nvy.js";import"./basemapUtils-DKobckXJ.js";import"./utils-BZRJVqKV.js";import"./TablesMixin-DdCxEWRX.js";import"./Layer-BS17sfSP.js";import"./GraphicsCollection-DTZxYO_a.js";import"./HeightModelInfo-CUpZh5m7.js";import"./ReactiveMap-DMInG6PM.js";import"./a11yUtils-Bw_fS-ku.js";import"./ViewingMode-dBUh39ak.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-Ck47BaAR.js";import"./Tile-_B1Rk8AJ.js";import"./TileKey-ClviopW7.js";import"./QueueProcessor-CI4RP6bp.js";import"./quickselect-QQC62dOK.js";import"./vec32-hvHczjfo.js";import"./imageUtils-A3tys6Qs.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-BfLRLzUK.js";import"./GoTo-CwTCVdMj.js";import"./ZoomViewModel-DrqXBnfE.js";import"./vec3f32-nZdmKIgz.js";import"./Container-xbnz2bF9.js";import"./EffectView-Cl0KoTlK.js";import"./parser-7K1TO6Ko.js";import"./StyleDefinition-BqwDhHAT.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-CRUUPyLl.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-C58ykilv.js";import"./Bitmap-BtRfFBeY.js";let t=class extends c(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new y({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const $t=t;export{$t as default};
//# sourceMappingURL=BaseDynamicLayerView2D-C0gnatG5.js.map
