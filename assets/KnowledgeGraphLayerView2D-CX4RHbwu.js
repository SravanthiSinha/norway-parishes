import{ae as p,dE as a,j as e,m as o,dF as s,k as m}from"./index-DhfeYpQB.js";import{j as n,y as l}from"./LayerView-SJqB1eY6.js";import"./utils-BQBvadb7.js";import"./Container-xbnz2bF9.js";import"./MapView-DpQyWeFK.js";import"./CollectionFlattener-CNrooAWP.js";import"./TileInfo-CcSBnkQt.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-B8Fhn2DS.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-7erAF0dq.js";import"./signal-BRyrlvNI.js";import"./ColorBackground-DDZX8Nvy.js";import"./basemapUtils-DKobckXJ.js";import"./utils-BZRJVqKV.js";import"./TablesMixin-DdCxEWRX.js";import"./Layer-BS17sfSP.js";import"./GraphicsCollection-DTZxYO_a.js";import"./HeightModelInfo-CUpZh5m7.js";import"./ReactiveMap-DMInG6PM.js";import"./a11yUtils-Bw_fS-ku.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-HKyrMW62.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-Ck47BaAR.js";import"./Tile-_B1Rk8AJ.js";import"./TileKey-ClviopW7.js";import"./QueueProcessor-CI4RP6bp.js";import"./quickselect-QQC62dOK.js";import"./vec32-hvHczjfo.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-CTIBD2BW.js";import"./imageUtils-A3tys6Qs.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-BfLRLzUK.js";import"./GoTo-CwTCVdMj.js";import"./ZoomViewModel-DrqXBnfE.js";import"./EffectView-Cl0KoTlK.js";import"./parser-7K1TO6Ko.js";import"./layerViewUtils-C58ykilv.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",a(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};e([o({cast:s})],r.prototype,"layerViews",null),e([o({readOnly:!0})],r.prototype,"updatingProgress",null),r=e([m("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const it=r;export{it as default};
//# sourceMappingURL=KnowledgeGraphLayerView2D-CX4RHbwu.js.map
