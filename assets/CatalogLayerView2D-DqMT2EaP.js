import{j as r,m as o,k as s,ae as m}from"./index-Du44_A8J.js";import{j as n,y as l}from"./LayerView-CNlVovrm.js";import"./utils-BQBvadb7.js";import"./Container-CnOd77AE.js";import"./MapView-DR3O-qOW.js";import"./CollectionFlattener-C_SkK2OR.js";import"./TileInfo-DuhHTNTj.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-DJu6XiYc.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-CYheTOv1.js";import"./signal-Ba7p4w-w.js";import"./ColorBackground-DLR35STU.js";import"./basemapUtils-DhbQ_DRF.js";import"./TablesMixin-Q8kcPu97.js";import"./HeightModelInfo-B1CAuLNS.js";import"./ReactiveMap-QWJ3IpsZ.js";import"./a11yUtils-CZikqPOJ.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-BM-4VqQo.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-BziHCHAa.js";import"./Tile-W8CKRdxd.js";import"./TileKey-DmBr4jDz.js";import"./QueueProcessor-ChFdpN1N.js";import"./quickselect-QQC62dOK.js";import"./vec32-DeRCSSXC.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BJZ-kAGU.js";import"./imageUtils-B008ONnG.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-DwTVUpbg.js";import"./GoTo-Dh2arNEz.js";import"./ZoomViewModel-CHK95vLh.js";import"./EffectView-DXXzMERB.js";import"./layerViewUtils-CZO2-ibw.js";const y=a=>{let t=class extends a{constructor(...i){super(...i),this.layerViews=new m}get dynamicGroupLayerView(){return this.layerViews.find(i=>{var e;return i.layer===((e=this.layer)==null?void 0:e.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(i=>{var e;return i.layer===((e=this.layer)==null?void 0:e.footprintLayer)})}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return r([o()],t.prototype,"layer",void 0),r([o()],t.prototype,"layerViews",void 0),r([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),r([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=r([s("esri.views.layers.CatalogLayerView")],t),t};let p=class extends y(n(l)){constructor(){super(...arguments),this.layerViews=new m}update(a){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((a,t)=>this.container.addChildAt(a.container,t))}};r([o()],p.prototype,"layerViews",void 0),p=r([s("esri.views.2d.layers.CatalogLayerView2D")],p);const Z=p;export{Z as default};
//# sourceMappingURL=CatalogLayerView2D-DqMT2EaP.js.map
