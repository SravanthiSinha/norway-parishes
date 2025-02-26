import{a9 as l,x as c,s as y,j as u,m as w,k as g}from"./index-5zHX_dwk.js";import{r as I,n as f}from"./imageUtils-BzN3F6QX.js";import{j as S,y as T}from"./LayerView-rCg6KIRY.js";import{h as V,p as x,r as v}from"./Tile-CvwsKAxd.js";import{e as d}from"./TileKey-CF3FRUAs.js";import{i as M}from"./RefreshableLayerView-DTilYB-0.js";import{g as q}from"./Scheduler-DXpyYTwW.js";import"./MapView-BOoKPXYW.js";import"./CollectionFlattener-vRDeO2uo.js";import"./TileInfo-CmdPm9xa.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-B8kjgVSB.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DJVDJ-kM.js";import"./signal-hJKBWjtw.js";import"./ColorBackground-CU0b6UMv.js";import"./basemapUtils-DQX65VyX.js";import"./TablesMixin-W2GD88Gv.js";import"./HeightModelInfo-gBdUFXlb.js";import"./ReactiveMap-zYIgtjn4.js";import"./a11yUtils-DuNzW9U_.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-BWDp4RJW.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./vec32-DhGnS-cJ.js";import"./definitions-DyYHcW4a.js";import"./enums-Dk3osxpS.js";import"./Texture-CO44Htzn.js";import"./imageUtils-Cv7JqKrf.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-DcYMHgQ4.js";import"./GoTo-wfZu7VG1.js";import"./ZoomViewModel-CBFtqPpu.js";import"./Bitmap-BBq94RN3.js";import"./Container-iKQzn13j.js";import"./EffectView-Bq8r2Xfq.js";import"./WGLContainer-C5bsGb41.js";import"./LabelMetric-DaS7kmiA.js";import"./Program-CojENRj7.js";import"./BufferObject-DIaLetwY.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-CnpCxTZE.js";import"./VertexArrayObject-BXv2nLdP.js";import"./ProgramTemplate-DrxKVvHG.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CXoZPLIL.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-DR3ktfcm.js";import"./TileContainer-B-nQmUub.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-Wc0MbT4V.js";import"./QueueProcessor-DhV4ni5l.js";import"./quickselect-QQC62dOK.js";const R=[0,0];let s=class extends M(I(S(T))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){var r;const{activeLayer:t}=this.layer,{tileMatrixSet:e}=t;if(e&&l((r=e.tileInfo)==null?void 0:r.spatialReference,this.view.spatialReference))return e;const i=this._getTileMatrixSetBySpatialReference(t);return i&&i.id!==t.tileMatrixSetId?(t.tileMatrixSetId=i.id,i):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){var e;const t=(e=this.tileMatrixSet)==null?void 0:e.tileInfo;t&&(this._tileInfoView=new V(t),this._fetchQueue=new x({tileInfoView:this._tileInfoView,concurrency:16,process:(i,r)=>this.fetchTile(i,r),scheduler:this.scheduler,priority:q.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new v({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,r;return[(r=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:r.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var t,e;super.detach(),(t=this._tileStrategy)==null||t.destroy(),(e=this._fetchQueue)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return((e=this.layer.activeLayer.tileMatrixSets)==null?void 0:e.some(i=>{var r;return l((r=i.tileInfo)==null?void 0:r.spatialReference,t)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:h=0}=e;if(!i)return this._fetchImage(t,r);const a=new d(0,0,0,0);let p;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:r}),p=await this._fetchImage(a,r)}catch(o){if(c(o))throw o;if(h<3){const n=this._tileInfoView.getTileParentId(t.id);if(n){const m=new d(n),_=await this.fetchTile(m,{...e,resamplingLevel:h+1});return f(this._tileInfoView,_,m,t)}}throw o}return f(this._tileInfoView,p,a,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){c(e)||y.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_getTileMatrixSetBySpatialReference(t){var e;return(e=t.tileMatrixSets)==null?void 0:e.find(i=>{var r;return l((r=i.tileInfo)==null?void 0:r.spatialReference,this.view.spatialReference)})}};u([w({readOnly:!0})],s.prototype,"tileMatrixSet",null),s=u([g("esri.views.2d.layers.WMTSLayerView2D")],s);const Ct=s;export{Ct as default};
//# sourceMappingURL=WMTSLayerView2D-Cai5krdw.js.map
