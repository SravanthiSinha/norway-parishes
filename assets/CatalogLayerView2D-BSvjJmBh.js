import{j as r,m as o,k as s,ae as m}from"./index-CJT1kG3U.js";import{j as n,y as l}from"./LayerView-Bnvey-au.js";import"./utils-BQBvadb7.js";import"./Container-BtHn5WY3.js";import"./MapView-BQ6Mt_4y.js";import"./CollectionFlattener-BsnC7bWF.js";import"./TileInfo-D2mG8glk.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-CJ-uN1XA.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-Ri2iA_se.js";import"./signal-BwvSX_89.js";import"./ColorBackground-DccT2d7M.js";import"./basemapUtils-629Q36Sj.js";import"./TablesMixin-C-3U0nTN.js";import"./HeightModelInfo-BsdLH3Iz.js";import"./ReactiveMap-D0q2XblF.js";import"./a11yUtils-C4X8x9bL.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-C5rmyjBz.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CcTJk8um.js";import"./Tile-BjB8ZBu2.js";import"./TileKey-DlQpmfZ8.js";import"./QueueProcessor-uFbLp18G.js";import"./quickselect-QQC62dOK.js";import"./vec32-BEXyJ64g.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DoHlZBFN.js";import"./imageUtils-CdiIafnh.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-C2_zXrKD.js";import"./GoTo-GibMKxSC.js";import"./ZoomViewModel-BjXxVwA6.js";import"./EffectView-CRjhcBV6.js";import"./layerViewUtils-CguN3FHe.js";const y=a=>{let t=class extends a{constructor(...i){super(...i),this.layerViews=new m}get dynamicGroupLayerView(){return this.layerViews.find(i=>{var e;return i.layer===((e=this.layer)==null?void 0:e.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(i=>{var e;return i.layer===((e=this.layer)==null?void 0:e.footprintLayer)})}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return r([o()],t.prototype,"layer",void 0),r([o()],t.prototype,"layerViews",void 0),r([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),r([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=r([s("esri.views.layers.CatalogLayerView")],t),t};let p=class extends y(n(l)){constructor(){super(...arguments),this.layerViews=new m}update(a){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((a,t)=>this.container.addChildAt(a.container,t))}};r([o()],p.prototype,"layerViews",void 0),p=r([s("esri.views.2d.layers.CatalogLayerView2D")],p);const Z=p;export{Z as default};
//# sourceMappingURL=CatalogLayerView2D-BSvjJmBh.js.map
