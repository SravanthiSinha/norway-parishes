import{ae as p,dF as a,j as e,m as o,dG as s,k as m}from"./index-CJT1kG3U.js";import{j as n,y as l}from"./LayerView-Bnvey-au.js";import"./utils-BQBvadb7.js";import"./Container-BtHn5WY3.js";import"./MapView-BQ6Mt_4y.js";import"./CollectionFlattener-BsnC7bWF.js";import"./TileInfo-D2mG8glk.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-CJ-uN1XA.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-Ri2iA_se.js";import"./signal-BwvSX_89.js";import"./ColorBackground-DccT2d7M.js";import"./basemapUtils-629Q36Sj.js";import"./TablesMixin-C-3U0nTN.js";import"./HeightModelInfo-BsdLH3Iz.js";import"./ReactiveMap-D0q2XblF.js";import"./a11yUtils-C4X8x9bL.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-C5rmyjBz.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CcTJk8um.js";import"./Tile-BjB8ZBu2.js";import"./TileKey-DlQpmfZ8.js";import"./QueueProcessor-uFbLp18G.js";import"./quickselect-QQC62dOK.js";import"./vec32-BEXyJ64g.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DoHlZBFN.js";import"./imageUtils-CdiIafnh.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-C2_zXrKD.js";import"./GoTo-GibMKxSC.js";import"./ZoomViewModel-BjXxVwA6.js";import"./EffectView-CRjhcBV6.js";import"./layerViewUtils-CguN3FHe.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",a(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};e([o({cast:s})],r.prototype,"layerViews",null),e([o({readOnly:!0})],r.prototype,"updatingProgress",null),r=e([m("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const Y=r;export{Y as default};
//# sourceMappingURL=KnowledgeGraphLayerView2D-D1tlWmUm.js.map
