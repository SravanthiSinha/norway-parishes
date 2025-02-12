import{j as s,m as l,dH as n,k as p,ae as d,ao as o,al as y,dG as V}from"./index-j6yFHuRy.js";import{y as m,j as w}from"./LayerView-gXKgPWfs.js";import"./utils-BQBvadb7.js";import"./Container-CuVTLXGN.js";import"./MapView-D26Pdc6M.js";import"./CollectionFlattener-dpPPBihN.js";import"./TileInfo-Dcu7p8vG.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-U4MX3YEt.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DutTPnmU.js";import"./signal-C6JO_0DC.js";import"./ColorBackground-IcvmrVJq.js";import"./basemapUtils-CnDMVnyg.js";import"./TablesMixin-DM7RGmGt.js";import"./HeightModelInfo-qFT9GYXQ.js";import"./ReactiveMap-0PxNCZ9S.js";import"./a11yUtils-DIvYeI-i.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-DSYHFVyP.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-D8Qfp1e9.js";import"./Tile-D2YEZ1xh.js";import"./TileKey-Cynuab6g.js";import"./QueueProcessor-BN6OzUm6.js";import"./quickselect-QQC62dOK.js";import"./vec32-CLDLXykA.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-Ck7lu_n2.js";import"./imageUtils-BBTenp-B.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-X1CWPLkv.js";import"./GoTo-upjDML16.js";import"./ZoomViewModel-BbIlT9BJ.js";import"./EffectView-CuFi3f9q.js";import"./layerViewUtils-CSswahRV.js";let t=class extends m{constructor(i){super(i),this.type="group",this.layerViews=new d}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),o(()=>{var i;return(i=this.layer)==null?void 0:i.visibilityMode},()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},y),o(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},y)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){var i,e;return((e=(i=this.view)==null?void 0:i.layerViewManager)==null?void 0:e.isCreatingLayerViewsForLayer(this.layer))??!1}set layerViews(i){this._set("layerViews",V(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{const r=this._findLayerViewForLayer(e);return!!(r!=null&&r.visible)});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(r=>o(()=>r.visible,a=>this._applyVisibility(()=>{a!==this.visible&&(r.visible=this.visible)},()=>this._applyExclusiveVisibility(a?r:null)),y)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var r,a;this._hasLayerViewVisibleOverrides()&&(((r=this.layer)==null?void 0:r.visibilityMode)==="inherited"?i():((a=this.layer)==null?void 0:a.visibilityMode)==="exclusive"&&e())}};s([l({readOnly:!0})],t.prototype,"creatingLayerViews",null),s([l({cast:n})],t.prototype,"layerViews",null),s([l({readOnly:!0})],t.prototype,"updatingProgress",null),s([l()],t.prototype,"view",void 0),t=s([p("esri.views.layers.GroupLayerView")],t);const v=t;let h=class extends w(v){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};h=s([p("esri.views.2d.layers.GroupLayerView2D")],h);const si=h;export{si as default};
//# sourceMappingURL=GroupLayerView2D-B1C32Zsz.js.map
