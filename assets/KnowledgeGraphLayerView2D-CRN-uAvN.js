import{ae as p,dG as a,j as e,m as o,dH as s,k as m}from"./index-j6yFHuRy.js";import{j as n,y as l}from"./LayerView-gXKgPWfs.js";import"./utils-BQBvadb7.js";import"./Container-CuVTLXGN.js";import"./MapView-D26Pdc6M.js";import"./CollectionFlattener-dpPPBihN.js";import"./TileInfo-Dcu7p8vG.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-U4MX3YEt.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DutTPnmU.js";import"./signal-C6JO_0DC.js";import"./ColorBackground-IcvmrVJq.js";import"./basemapUtils-CnDMVnyg.js";import"./TablesMixin-DM7RGmGt.js";import"./HeightModelInfo-qFT9GYXQ.js";import"./ReactiveMap-0PxNCZ9S.js";import"./a11yUtils-DIvYeI-i.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-DSYHFVyP.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-D8Qfp1e9.js";import"./Tile-D2YEZ1xh.js";import"./TileKey-Cynuab6g.js";import"./QueueProcessor-BN6OzUm6.js";import"./quickselect-QQC62dOK.js";import"./vec32-CLDLXykA.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-Ck7lu_n2.js";import"./imageUtils-BBTenp-B.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-X1CWPLkv.js";import"./GoTo-upjDML16.js";import"./ZoomViewModel-BbIlT9BJ.js";import"./EffectView-CuFi3f9q.js";import"./layerViewUtils-CSswahRV.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",a(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};e([o({cast:s})],r.prototype,"layerViews",null),e([o({readOnly:!0})],r.prototype,"updatingProgress",null),r=e([m("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const Y=r;export{Y as default};
//# sourceMappingURL=KnowledgeGraphLayerView2D-CRN-uAvN.js.map
