import{j as r,m as o,k as m,ae as s}from"./index-Bs-G_wsu.js";import{j as n,y as l}from"./LayerView-L9WOE_tC.js";import"./utils-BQBvadb7.js";import"./Container-BRPA9zGb.js";import"./MapView-7hqc2w8m.js";import"./CollectionFlattener-CTw_eXOA.js";import"./TileInfo-X-DVPDNH.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-C0q8jVKr.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BZI7TPX6.js";import"./signal-C7Z0zfYm.js";import"./ColorBackground-CCzJQZw-.js";import"./basemapUtils-RODjC3R-.js";import"./utils-DzB8n6BG.js";import"./TablesMixin-D5Abru63.js";import"./Layer-BD5fEEcE.js";import"./GraphicsCollection-BPX1FENo.js";import"./HeightModelInfo-DY5GmORu.js";import"./ReactiveMap-Btmvxhy1.js";import"./a11yUtils-DR3mHIY3.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-CCtmvIux.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-Y5S3bHF4.js";import"./Tile-Bke8hHhA.js";import"./TileKey-nDEHDDFT.js";import"./QueueProcessor-DEWsxSyU.js";import"./quickselect-QQC62dOK.js";import"./vec32-DrHtz8AR.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DjetOvUR.js";import"./imageUtils-DdVwTzau.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-ZJ2HMe1D.js";import"./GoTo-BgN2O0Pt.js";import"./ZoomViewModel-CCupbAtb.js";import"./EffectView-WSxrhc-p.js";import"./parser-DP7rDSW3.js";import"./layerViewUtils-CfF_Y5oJ.js";const y=a=>{let t=class extends a{constructor(...i){super(...i),this.layerViews=new s}get dynamicGroupLayerView(){return this.layerViews.find(i=>{var e;return i.layer===((e=this.layer)==null?void 0:e.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(i=>{var e;return i.layer===((e=this.layer)==null?void 0:e.footprintLayer)})}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return r([o()],t.prototype,"layer",void 0),r([o()],t.prototype,"layerViews",void 0),r([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),r([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=r([m("esri.views.layers.CatalogLayerView")],t),t};let p=class extends y(n(l)){constructor(){super(...arguments),this.layerViews=new s}update(a){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((a,t)=>this.container.addChildAt(a.container,t))}};r([o()],p.prototype,"layerViews",void 0),p=r([m("esri.views.2d.layers.CatalogLayerView2D")],p);const et=p;export{et as default};