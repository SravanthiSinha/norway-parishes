import{ae as p,dF as a,j as e,m as o,dG as s,k as m}from"./index-D2fbPmv2.js";import{j as n,y as l}from"./LayerView-DldpZlXk.js";import"./utils-BQBvadb7.js";import"./Container-roUUAKGV.js";import"./MapView-CsYtnhyS.js";import"./CollectionFlattener-CqhMwHE_.js";import"./TileInfo-b1BHpKqb.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-CNEIzw3I.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DtwuLIN4.js";import"./signal-DPvHhoiI.js";import"./ColorBackground-Cik_pyky.js";import"./basemapUtils-DjbuSOSo.js";import"./TablesMixin-BcLnbFXT.js";import"./HeightModelInfo-CjsnL3DZ.js";import"./ReactiveMap-D0Ai_sLK.js";import"./a11yUtils-BVrZwHpI.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-CrHuGM2_.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-2o2bt4uL.js";import"./Tile-XgEW8l5M.js";import"./TileKey-Cx9ntQ8r.js";import"./QueueProcessor-C8F9LQNl.js";import"./quickselect-QQC62dOK.js";import"./vec32-wKfHB3TO.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-CajnDYcB.js";import"./imageUtils-ywQwDfd6.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-CFpkQH0R.js";import"./GoTo-Dpj-g8zR.js";import"./ZoomViewModel-D5ih0iIl.js";import"./EffectView-DwVnaB6x.js";import"./layerViewUtils-NjuDU5Zt.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",a(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};e([o({cast:s})],r.prototype,"layerViews",null),e([o({readOnly:!0})],r.prototype,"updatingProgress",null),r=e([m("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const Y=r;export{Y as default};
//# sourceMappingURL=KnowledgeGraphLayerView2D-DbxbF71p.js.map
