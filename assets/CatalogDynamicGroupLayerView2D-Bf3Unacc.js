import{j as o,m as d,k as $,ae as S,f6 as U,g7 as _,av as x,fd as H,s as I,b9 as g}from"./index-Vdm0PCas.js";import{j as O,y as T}from"./LayerView-rH1aICbH.js";import"./utils-BQBvadb7.js";import"./Container-DpeAyksg.js";import"./MapView-DBfxPkGc.js";import"./CollectionFlattener-CN8cPTqs.js";import"./TileInfo-B0ECqtpO.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-BG_Rv2Eu.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-CDbdLeJh.js";import"./signal-BTu-QbFH.js";import"./ColorBackground-DMAAIVKo.js";import"./basemapUtils-DzQHv-cI.js";import"./utils-HNoWO9hO.js";import"./TablesMixin-D_NV5QH5.js";import"./Layer-vfI2MkUG.js";import"./GraphicsCollection-BXU5Eiom.js";import"./HeightModelInfo-BVQNgGlV.js";import"./ReactiveMap-BdK6iG0v.js";import"./a11yUtils-Dw3atQfw.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-DkohSmiU.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-KfiMsALR.js";import"./Tile-BPJG7cul.js";import"./TileKey-DUXnLguF.js";import"./QueueProcessor-D3HeJkxX.js";import"./quickselect-QQC62dOK.js";import"./vec32-Dj0jkd2Q.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-pMYmJLfO.js";import"./imageUtils-CUZMAWZl.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-Cff6eeXD.js";import"./GoTo-BUDnuNGC.js";import"./ZoomViewModel-BXSTD6Tl.js";import"./EffectView-DlaTNt6o.js";import"./parser-D2R35t-Z.js";import"./layerViewUtils-Dat-KgBL.js";const y=Symbol(),A=m=>{let r=class extends m{constructor(){super(...arguments),this.layerViews=new S,this._debouncedUpdate=U(async()=>{const{layer:e,parent:t}=this,a=t==null?void 0:t.footprintLayerView;let s=[];const p=this._createQuery();if(p&&a){const{features:u}=await a.queryFeatures(p);this.suspended||(s=u.map(h=>e.acquireLayer(h)))}this.removeHandles(y),this.addHandles(s,y)})}get creatingLayerViews(){var e;return((e=this.view)==null?void 0:e.layerViewManager.isCreatingLayerViewsForLayer(this.layer))??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(e=>e.updating)}enableLayerUpdates(){return _([this._updatingHandles.addWhen(()=>{var e,t;return((t=(e=this.parent)==null?void 0:e.footprintLayerView)==null?void 0:t.dataUpdating)===!1},()=>this.updateLayers()),this._updatingHandles.add(()=>{var e,t,a,s,p;return[this.layer.maximumVisibleSublayers,(e=this.layer.parent)==null?void 0:e.orderBy,(a=(t=this.parent)==null?void 0:t.footprintLayerView)==null?void 0:a.filter,(p=(s=this.parent)==null?void 0:s.footprintLayerView)==null?void 0:p.timeExtent,this.suspended]},()=>this.updateLayers()),x(()=>this.removeHandles(y))])}updateLayers(){this.suspended?this.removeHandles(y):this._updatingHandles.addPromise(H(this._debouncedUpdate()).catch(e=>{I.getLogger(this).error(e)}))}_createQuery(){var V,v;const e=(V=this.parent)==null?void 0:V.footprintLayerView,t=(v=this.layer)==null?void 0:v.parent;if(!e||!t||t.destroyed)return null;const{layer:{maximumVisibleSublayers:a},view:{scale:s}}=this;if(!a)return null;const{itemTypeField:p,itemSourceField:u,itemNameField:h,minScaleField:c,maxScaleField:f,objectIdField:b,orderBy:w}=t,C=g(`${c} IS NULL OR ${s} <= ${c} OR ${c} = 0`,`${f} IS NULL OR ${s} >= ${f}`),n=w==null?void 0:w.find(l=>l.field&&!l.valueExpression),i=e.createQuery();if(i.returnGeometry=!1,i.num=a,i.outFields=[b,u,h],i.where=g(i.where,C),this.unsupportedItemTypes!=null){const l=`${p} NOT IN (${this.unsupportedItemTypes.map(F=>`'${F}'`)})`;i.where=g(i.where,l)}return n!=null&&n.field&&(i.orderByFields=[`${n.field} ${n.order==="descending"?"DESC":"ASC"}`],i.outFields.push(n.field)),i}};return o([d({readOnly:!0})],r.prototype,"creatingLayerViews",null),o([d()],r.prototype,"layer",void 0),o([d()],r.prototype,"layerViews",void 0),o([d({readOnly:!0})],r.prototype,"unsupportedItemTypes",void 0),o([d()],r.prototype,"parent",void 0),o([d({readOnly:!0})],r.prototype,"isUpdating",null),r=o([$("esri.views.layers.CatalogDynamicGroupLayerView")],r),r};let L=class extends A(O(T)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new S}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(m){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((m,r)=>this.container.addChildAt(m.container,r))}};L=o([$("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],L);const Fe=L;export{Fe as default};
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-Bf3Unacc.js.map