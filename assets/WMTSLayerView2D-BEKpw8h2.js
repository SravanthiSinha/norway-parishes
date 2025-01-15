import{a9 as l,x as c,s as y,j as u,m as w,k as g}from"./index-UqHiE_Ae.js";import{r as I,n as f}from"./imageUtils-CGhdBHqU.js";import{j as S,y as T}from"./LayerView-BF0AKQdu.js";import{h as V,p as x,r as v}from"./Tile-CES3BSDT.js";import{e as d}from"./TileKey-DyhjBuuS.js";import{i as M}from"./RefreshableLayerView-CuPP61_T.js";import{g as q}from"./Scheduler-DUHbsyAq.js";import"./MapView-CwL5r88G.js";import"./CollectionFlattener-DL2lHpIM.js";import"./TileInfo-DJQM_9go.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-CdNgn7Aa.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DRH__O1p.js";import"./signal-DKSRHCVR.js";import"./ColorBackground-Bi33awfy.js";import"./basemapUtils-DZ-47i8I.js";import"./TablesMixin-CfmLPAKk.js";import"./HeightModelInfo-DL8_Qm8B.js";import"./ReactiveMap-luRGCbFK.js";import"./a11yUtils-DHAPBTzw.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-DBYGNwdL.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./vec32-BSCBtxXw.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-CKCAhLxt.js";import"./imageUtils-BBrhX1kr.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-ERNWwYjd.js";import"./GoTo-l5OvWKwa.js";import"./ZoomViewModel-DuMcI0Te.js";import"./Bitmap-D6xqe2FY.js";import"./Container-DqI72AGN.js";import"./EffectView-EIRhYJDE.js";import"./WGLContainer-C_4o6jBk.js";import"./LabelMetric-DxedKzAe.js";import"./Program-DKr0o_Sl.js";import"./BufferObject-DljigCQy.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./VertexArrayObject-18NsSeMi.js";import"./ProgramTemplate-Dv9yxBXu.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-Ce6IgndN.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-72ZUbeHo.js";import"./TileContainer-B3YDMBiJ.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-DbIqbenM.js";import"./QueueProcessor-C7Nw1mRf.js";import"./quickselect-QQC62dOK.js";const R=[0,0];let s=class extends M(I(S(T))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){var r;const{activeLayer:t}=this.layer,{tileMatrixSet:e}=t;if(e&&l((r=e.tileInfo)==null?void 0:r.spatialReference,this.view.spatialReference))return e;const i=this._getTileMatrixSetBySpatialReference(t);return i&&i.id!==t.tileMatrixSetId?(t.tileMatrixSetId=i.id,i):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){var e;const t=(e=this.tileMatrixSet)==null?void 0:e.tileInfo;t&&(this._tileInfoView=new V(t),this._fetchQueue=new x({tileInfoView:this._tileInfoView,concurrency:16,process:(i,r)=>this.fetchTile(i,r),scheduler:this.scheduler,priority:q.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new v({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,r;return[(r=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:r.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var t,e;super.detach(),(t=this._tileStrategy)==null||t.destroy(),(e=this._fetchQueue)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return((e=this.layer.activeLayer.tileMatrixSets)==null?void 0:e.some(i=>{var r;return l((r=i.tileInfo)==null?void 0:r.spatialReference,t)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:h=0}=e;if(!i)return this._fetchImage(t,r);const a=new d(0,0,0,0);let p;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:r}),p=await this._fetchImage(a,r)}catch(o){if(c(o))throw o;if(h<3){const n=this._tileInfoView.getTileParentId(t.id);if(n){const m=new d(n),_=await this.fetchTile(m,{...e,resamplingLevel:h+1});return f(this._tileInfoView,_,m,t)}}throw o}return f(this._tileInfoView,p,a,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){c(e)||y.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_getTileMatrixSetBySpatialReference(t){var e;return(e=t.tileMatrixSets)==null?void 0:e.find(i=>{var r;return l((r=i.tileInfo)==null?void 0:r.spatialReference,this.view.spatialReference)})}};u([w({readOnly:!0})],s.prototype,"tileMatrixSet",null),s=u([g("esri.views.2d.layers.WMTSLayerView2D")],s);const Ct=s;export{Ct as default};
//# sourceMappingURL=WMTSLayerView2D-BEKpw8h2.js.map
