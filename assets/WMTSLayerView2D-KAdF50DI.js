import{a9 as l,x as c,s as y,j as u,m as w,k as g}from"./index-Bs-G_wsu.js";import{r as I,n as f}from"./imageUtils-DqU0tzsk.js";import{j as S,y as T}from"./LayerView-L9WOE_tC.js";import{h as V,p as x,r as v}from"./Tile-Bke8hHhA.js";import{e as d}from"./TileKey-nDEHDDFT.js";import{i as M}from"./RefreshableLayerView-BZPn9ILD.js";import{g as q}from"./Scheduler-Y5S3bHF4.js";import"./MapView-7hqc2w8m.js";import"./CollectionFlattener-CTw_eXOA.js";import"./TileInfo-X-DVPDNH.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-C0q8jVKr.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BZI7TPX6.js";import"./signal-C7Z0zfYm.js";import"./ColorBackground-CCzJQZw-.js";import"./basemapUtils-RODjC3R-.js";import"./utils-DzB8n6BG.js";import"./TablesMixin-D5Abru63.js";import"./Layer-BD5fEEcE.js";import"./GraphicsCollection-BPX1FENo.js";import"./HeightModelInfo-DY5GmORu.js";import"./ReactiveMap-Btmvxhy1.js";import"./a11yUtils-DR3mHIY3.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-CCtmvIux.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./vec32-DrHtz8AR.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DjetOvUR.js";import"./imageUtils-DdVwTzau.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-ZJ2HMe1D.js";import"./GoTo-BgN2O0Pt.js";import"./ZoomViewModel-CCupbAtb.js";import"./Bitmap-D9elm1DD.js";import"./Container-BRPA9zGb.js";import"./EffectView-WSxrhc-p.js";import"./parser-DP7rDSW3.js";import"./WGLContainer-CeFzL7xd.js";import"./LabelMetric-DtACvfoK.js";import"./Program-BVV7sx1C.js";import"./BufferObject-Dq_tCz8c.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./VertexArrayObject-DJ5ZGaSa.js";import"./ProgramTemplate-BFR1xPkh.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CM7tWv0g.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-ei0M_jjf.js";import"./TileContainer-DUjlVwwY.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-CfF_Y5oJ.js";import"./QueueProcessor-DEWsxSyU.js";import"./quickselect-QQC62dOK.js";const R=[0,0];let s=class extends M(I(S(T))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){var r;const{activeLayer:t}=this.layer,{tileMatrixSet:e}=t;if(e&&l((r=e.tileInfo)==null?void 0:r.spatialReference,this.view.spatialReference))return e;const i=this._getTileMatrixSetBySpatialReference(t);return i&&i.id!==t.tileMatrixSetId?(t.tileMatrixSetId=i.id,i):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){var e;const t=(e=this.tileMatrixSet)==null?void 0:e.tileInfo;t&&(this._tileInfoView=new V(t),this._fetchQueue=new x({tileInfoView:this._tileInfoView,concurrency:16,process:(i,r)=>this.fetchTile(i,r),scheduler:this.scheduler,priority:q.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new v({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,r;return[(r=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:r.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var t,e;super.detach(),(t=this._tileStrategy)==null||t.destroy(),(e=this._fetchQueue)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return((e=this.layer.activeLayer.tileMatrixSets)==null?void 0:e.some(i=>{var r;return l((r=i.tileInfo)==null?void 0:r.spatialReference,t)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:h=0}=e;if(!i)return this._fetchImage(t,r);const a=new d(0,0,0,0);let p;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:r}),p=await this._fetchImage(a,r)}catch(o){if(c(o))throw o;if(h<3){const n=this._tileInfoView.getTileParentId(t.id);if(n){const m=new d(n),_=await this.fetchTile(m,{...e,resamplingLevel:h+1});return f(this._tileInfoView,_,m,t)}}throw o}return f(this._tileInfoView,p,a,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){c(e)||y.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_getTileMatrixSetBySpatialReference(t){var e;return(e=t.tileMatrixSets)==null?void 0:e.find(i=>{var r;return l((r=i.tileInfo)==null?void 0:r.spatialReference,this.view.spatialReference)})}};u([w({readOnly:!0})],s.prototype,"tileMatrixSet",null),s=u([g("esri.views.2d.layers.WMTSLayerView2D")],s);const Pt=s;export{Pt as default};