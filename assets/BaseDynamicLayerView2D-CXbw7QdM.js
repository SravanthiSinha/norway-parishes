import{x as e,s as a,j as o,m as p,k as s}from"./index-CJT1kG3U.js";import{a as n}from"./BitmapContainer-PnkbFtTk.js";import{j as h,y as d}from"./LayerView-Bnvey-au.js";import{_ as y}from"./ExportStrategy-CR2D50lo.js";import{i as c}from"./RefreshableLayerView-BBshOAj0.js";import"./WGLContainer-DfRlmO_-.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-BNr-tKu5.js";import"./Texture-DoHlZBFN.js";import"./enums-Dk3osxpS.js";import"./Program-DkHxVm6t.js";import"./BufferObject-Dn3fCcHO.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-C0hHeYSh.js";import"./ProgramTemplate-DoXRjSEE.js";import"./mat2df32-orApM5a3.js";import"./mat3-C5rmyjBz.js";import"./MapView-BQ6Mt_4y.js";import"./CollectionFlattener-BsnC7bWF.js";import"./TileInfo-D2mG8glk.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-CJ-uN1XA.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-Ri2iA_se.js";import"./signal-BwvSX_89.js";import"./ColorBackground-DccT2d7M.js";import"./basemapUtils-629Q36Sj.js";import"./TablesMixin-C-3U0nTN.js";import"./HeightModelInfo-BsdLH3Iz.js";import"./ReactiveMap-D0q2XblF.js";import"./a11yUtils-C4X8x9bL.js";import"./ViewingMode-dBUh39ak.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CcTJk8um.js";import"./Tile-BjB8ZBu2.js";import"./TileKey-DlQpmfZ8.js";import"./QueueProcessor-uFbLp18G.js";import"./quickselect-QQC62dOK.js";import"./vec32-BEXyJ64g.js";import"./imageUtils-CdiIafnh.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-C2_zXrKD.js";import"./GoTo-GibMKxSC.js";import"./ZoomViewModel-BjXxVwA6.js";import"./vec3f32-nZdmKIgz.js";import"./Container-BtHn5WY3.js";import"./EffectView-CRjhcBV6.js";import"./StyleDefinition-BuzOBm48.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-Div36Cal.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-CguN3FHe.js";import"./Bitmap-D55y_rwP.js";let t=class extends c(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new y({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const _t=t;export{_t as default};
//# sourceMappingURL=BaseDynamicLayerView2D-CXbw7QdM.js.map
