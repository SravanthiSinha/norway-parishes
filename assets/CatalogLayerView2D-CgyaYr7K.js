import{j as r,m as o,k as s,ae as m}from"./index-5zHX_dwk.js";import{j as n,y as l}from"./LayerView-rCg6KIRY.js";import"./utils-BQBvadb7.js";import"./Container-iKQzn13j.js";import"./MapView-BOoKPXYW.js";import"./CollectionFlattener-vRDeO2uo.js";import"./TileInfo-CmdPm9xa.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-B8kjgVSB.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DJVDJ-kM.js";import"./signal-hJKBWjtw.js";import"./ColorBackground-CU0b6UMv.js";import"./basemapUtils-DQX65VyX.js";import"./TablesMixin-W2GD88Gv.js";import"./HeightModelInfo-gBdUFXlb.js";import"./ReactiveMap-zYIgtjn4.js";import"./a11yUtils-DuNzW9U_.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-BWDp4RJW.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DXpyYTwW.js";import"./Tile-CvwsKAxd.js";import"./TileKey-CF3FRUAs.js";import"./QueueProcessor-DhV4ni5l.js";import"./quickselect-QQC62dOK.js";import"./vec32-DhGnS-cJ.js";import"./definitions-DyYHcW4a.js";import"./enums-Dk3osxpS.js";import"./Texture-CO44Htzn.js";import"./imageUtils-Cv7JqKrf.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-DcYMHgQ4.js";import"./GoTo-wfZu7VG1.js";import"./ZoomViewModel-CBFtqPpu.js";import"./EffectView-Bq8r2Xfq.js";import"./layerViewUtils-Wc0MbT4V.js";const y=a=>{let t=class extends a{constructor(...i){super(...i),this.layerViews=new m}get dynamicGroupLayerView(){return this.layerViews.find(i=>{var e;return i.layer===((e=this.layer)==null?void 0:e.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(i=>{var e;return i.layer===((e=this.layer)==null?void 0:e.footprintLayer)})}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return r([o()],t.prototype,"layer",void 0),r([o()],t.prototype,"layerViews",void 0),r([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),r([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=r([s("esri.views.layers.CatalogLayerView")],t),t};let p=class extends y(n(l)){constructor(){super(...arguments),this.layerViews=new m}update(a){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((a,t)=>this.container.addChildAt(a.container,t))}};r([o()],p.prototype,"layerViews",void 0),p=r([s("esri.views.2d.layers.CatalogLayerView2D")],p);const Z=p;export{Z as default};
//# sourceMappingURL=CatalogLayerView2D-CgyaYr7K.js.map
