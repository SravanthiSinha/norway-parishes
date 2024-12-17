import{a9 as l,x as c,s as y,j as u,m as w,k as g}from"./index-BB6xpuj5.js";import{r as I,n as f}from"./imageUtils-CgD5z6V9.js";import{j as S,y as T}from"./LayerView-C9uOes3C.js";import{h as V,p as x,r as v}from"./Tile-CSO7o2Lx.js";import{e as d}from"./TileKey-bsr5k5kR.js";import{i as M}from"./RefreshableLayerView-CRbdvOE2.js";import{g as q}from"./Scheduler-CoC6AtxP.js";import"./MapView-BB5zyy98.js";import"./CollectionFlattener-vw9PCdEV.js";import"./TileInfo-DckZPgmV.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-zVWkHYEv.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DP1x1Bsi.js";import"./signal-JD86_R7M.js";import"./ColorBackground-5boBVQCV.js";import"./basemapUtils-DT7CgBiu.js";import"./utils-Dmn_mtNQ.js";import"./TablesMixin-rUkw-8tc.js";import"./Layer-5zl9d9z3.js";import"./GraphicsCollection-BlSm0Gtj.js";import"./HeightModelInfo-Cn8WVYm1.js";import"./ReactiveMap-C5xyLUPa.js";import"./a11yUtils-XrMtlS1N.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-DJqSU6w-.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./vec32-Dn1yeTzb.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BzN5lHkh.js";import"./imageUtils-DlrOtbVu.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-D95E-zHd.js";import"./GoTo-CVPsm2b2.js";import"./ZoomViewModel-CECqLXXU.js";import"./Bitmap-_yYvhRdM.js";import"./Container-CzB7Zj09.js";import"./EffectView-ByR8_5fn.js";import"./parser-Bf0eM-Za.js";import"./WGLContainer-DtgvS25h.js";import"./LabelMetric-C8LidgNF.js";import"./Program-0OZM0gHS.js";import"./BufferObject-C7inN83X.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./VertexArrayObject-C34nLg7v.js";import"./ProgramTemplate-BeeJCxBw.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-Bx5E0gVl.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-L6p5wBVT.js";import"./TileContainer-BXFytAM8.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-CcnERjia.js";import"./QueueProcessor-DuXSk4nk.js";import"./quickselect-QQC62dOK.js";const R=[0,0];let s=class extends M(I(S(T))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){var r;const{activeLayer:t}=this.layer,{tileMatrixSet:e}=t;if(e&&l((r=e.tileInfo)==null?void 0:r.spatialReference,this.view.spatialReference))return e;const i=this._getTileMatrixSetBySpatialReference(t);return i&&i.id!==t.tileMatrixSetId?(t.tileMatrixSetId=i.id,i):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){var e;const t=(e=this.tileMatrixSet)==null?void 0:e.tileInfo;t&&(this._tileInfoView=new V(t),this._fetchQueue=new x({tileInfoView:this._tileInfoView,concurrency:16,process:(i,r)=>this.fetchTile(i,r),scheduler:this.scheduler,priority:q.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new v({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,r;return[(r=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:r.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var t,e;super.detach(),(t=this._tileStrategy)==null||t.destroy(),(e=this._fetchQueue)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return((e=this.layer.activeLayer.tileMatrixSets)==null?void 0:e.some(i=>{var r;return l((r=i.tileInfo)==null?void 0:r.spatialReference,t)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:h=0}=e;if(!i)return this._fetchImage(t,r);const a=new d(0,0,0,0);let p;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:r}),p=await this._fetchImage(a,r)}catch(o){if(c(o))throw o;if(h<3){const n=this._tileInfoView.getTileParentId(t.id);if(n){const m=new d(n),_=await this.fetchTile(m,{...e,resamplingLevel:h+1});return f(this._tileInfoView,_,m,t)}}throw o}return f(this._tileInfoView,p,a,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){c(e)||y.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_getTileMatrixSetBySpatialReference(t){var e;return(e=t.tileMatrixSets)==null?void 0:e.find(i=>{var r;return l((r=i.tileInfo)==null?void 0:r.spatialReference,this.view.spatialReference)})}};u([w({readOnly:!0})],s.prototype,"tileMatrixSet",null),s=u([g("esri.views.2d.layers.WMTSLayerView2D")],s);const Pt=s;export{Pt as default};