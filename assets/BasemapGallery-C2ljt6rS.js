const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-scrim-JZ9mqYq3.js","assets/scrim-B5XD8m9m.js","assets/index-j6yFHuRy.js","assets/index-Jib82o7I.css","assets/calcite-chip-ClUfcB7P.js"])))=>i.map(i=>d[i]);
import{kX as O,by as H,ag as ie,c7 as N,da as Se,kY as se,fP as ae,fK as W,aX as $e,b4 as Q,kZ as xe,I as u,b2 as Re,cx as Te,k_ as Me,fR as Be,fS as Ie,co as Ee,fQ as ke,k$ as Ce,l0 as Le,gm as Oe,aN as V,l1 as Ae,ae as L,w as q,l2 as Ge,c5 as ze,l3 as We,l4 as Fe,ey as Pe,an as ue,ao as I,dM as He,x as me,j as l,m as p,k as z,aB as J,g9 as X,hY as qe,G as de,dx as Ue,s as je,bd as De,aq as Ne,ap as fe,a9 as ne,bV as Ve,cF as Qe,cG as Ke,_ as re,fp as Xe}from"./index-j6yFHuRy.js";import{j as Ye,R as Je,O as Ze,d as et,L as tt}from"./basemapUtils-CnDMVnyg.js";import{e as it,B as st,p as at,r as nt,n as d}from"./jsxFactory-U4MX3YEt.js";import{e as rt}from"./utils-BQBvadb7.js";import{l as D,a as le}from"./ViewingMode-dBUh39ak.js";import{s as lt,c as K,P as oe,u as ot,g as ct}from"./vec32-CLDLXykA.js";import{z as U,p as j}from"./TileInfo-Dcu7p8vG.js";import{e as k}from"./globalCss-CZa70j6i.js";import{e as ce}from"./Heading-UKLQAq3c.js";import{t as pt}from"./accessibleHandler-X1CWPLkv.js";import"./uuid-Cl5lrJ4c.js";import"./TileKey-DZd6gJy7.js";function ht(e,t){return e!=null&&(t==null||(t===D.Local?!e.isGeographic||e.isWGS84||e.wkid===O.CGCS2000:e.isWebMercator||e.isWGS84||e.wkid===O.CGCS2000||e.wkid===O.GCSMARS2000||e.wkid===O.GCSMARS2000_SPHERE||e.wkid===O.GCSMOON2000))}const ut=12;let M=class g{constructor(t){const i=g.checkUnsupported(t);if(i!=null)throw i;const s=t;this.spatialReference=s.spatialReference,this._isWebMercator=this.spatialReference.isWebMercator,this._isGCS=Se(this.spatialReference),this.origin=[s.origin.x,s.origin.y],this.pixelSize=s.size[0],this.dpi=s.dpi;const a=s.lods.reduce((c,m)=>(m.level<c.minLod.level&&(c.minLod=m),c.max=Math.max(c.max,m.level),c),{minLod:s.lods[0],max:-1/0}),n=a.minLod,r=2**n.level;let o=n.resolution*r,h=n.scale*r;this.levels=new Array(a.max+1);for(let c=0;c<this.levels.length;c++)this.levels[c]={resolution:o,scale:h,tileSize:[o*s.size[0],o*s.size[1]]},o/=2,h/=2}clone(){return new g(this.toTileInfo())}toTileInfo(){return new U({dpi:this.dpi,origin:new H({x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference}),size:[this.pixelSize,this.pixelSize],spatialReference:this.spatialReference,lods:this.levels.map((t,i)=>new j({level:i,scale:t.scale,resolution:t.resolution}))})}getExtent(t,i,s,a){const n=this.levels[t],r=n.tileSize[0],o=n.tileSize[1];a[0]=this.origin[0]+s*r,a[2]=this.origin[0]+(s+1)*r,a[3]=this.origin[1]-i*o,a[1]=this.origin[1]-(i+1)*o}convertExtentToRadians(t,i){this._isWebMercator?(i[0]=se(t[0]),i[1]=ae(t[1]),i[2]=se(t[2]),i[3]=ae(t[3])):this._isGCS&&(i[0]=W(t[0]),i[1]=W(t[1]),i[2]=W(t[2]),i[3]=W(t[3]))}getExtentGeometry(t,i,s,a=new $e){return this.getExtent(t,i,s,_),a.spatialReference=this.spatialReference,a.xmin=_[0],a.ymin=_[1],a.xmax=_[2],a.ymax=_[3],a.zmin=void 0,a.zmax=void 0,a}ensureMaxLod(t){if(t==null)return!1;let i=!1;for(;this.levels.length<=t;){const{resolution:s,scale:a}=this.levels[this.levels.length-1],n=s/2*this.pixelSize;this.levels.push({resolution:s/2,scale:a/2,tileSize:[n,n]}),i=!0}return i}capMaxLod(t){this.levels.length>t+1&&(this.levels.length=t+1)}getMaxLod(){return this.levels.length-1}scaleAtLevel(t){return this.levels[0].scale/2**t}levelAtScale(t){const i=this.levels[0].scale;return t>=i?0:Math.log(i/t)*Math.LOG2E}resolutionAtLevel(t){return this.levels[0].resolution/2**t}compatibleWith(t,i=1/0){if(g.checkUnsupported(t))return!1;const s=new g(t);if(!s.spatialReference.equals(this.spatialReference)||s.pixelSize!==this.pixelSize)return!1;const a=Math.min(this.levels.length-1,s.levels.length-1,i),n=this.levels[a].resolution;let r=.5*n;return!Q(s.origin[0],this.origin[0],r)||!Q(s.origin[1],this.origin[1],r)?!1:(r=.5*n/2**a/this.pixelSize*ut,Q(n,s.levels[a].resolution,r))}rootTilesInExtent(t,i=null,s=1/0){const a=new Array,n=this.levels[0].tileSize;if(t==null||n[0]===0||n[1]===0)return a;g.computeRowColExtent(t,n,this.origin,_);let r=_[1],o=_[3],h=_[0],c=_[2];const m=c-h,B=o-r;if(m*B>s){const w=Math.floor(Math.sqrt(s));B>w&&(r=r+Math.floor(.5*B)-Math.floor(.5*w),o=r+w),m>w&&(h=h+Math.floor(.5*m)-Math.floor(.5*w),c=h+w)}for(let w=r;w<o;w++)for(let E=h;E<c;E++)a.push([0,w,E]);return i!=null&&(i[0]=this.origin[0]+h*n[0],i[1]=this.origin[1]-o*n[1],i[2]=this.origin[0]+c*n[0],i[3]=this.origin[1]-r*n[1]),a}static computeRowColExtent(t,i,s,a){const n=.001*(t[2]-t[0]+(t[3]-t[1]));a[0]=Math.max(0,Math.floor((t[0]+n-s[0])/i[0])),a[2]=Math.max(0,Math.ceil((t[2]-n-s[0])/i[0])),a[1]=Math.max(0,Math.floor((s[1]-t[3]+n)/i[1])),a[3]=Math.max(0,Math.ceil((s[1]-t[1]-n)/i[1]))}static isPowerOfTwo(t){const i=t.lods,s=i[0].resolution*2**i[0].level;return!i.some(a=>!xe(a.resolution,s/2**a.level))}static hasGapInLevels(t){const i=t.lods.map(s=>s.level);i.sort((s,a)=>s-a);for(let s=1;s<i.length;s++)if(i[s]!==i[0]+s)return!0;return!1}static tileSizeSupported(t){const i=t.size[1];return i===t.size[0]&&!(i&i-1)&&i>=128&&i<=512}static hasOriginPerLODs(t){const i=t.origin;return t.lods.some(s=>s.origin!=null&&(s.origin[0]!==i.x||s.origin[1]!==i.y))}static getMissingTileInfoError(){return new u("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")}static checkUnsupported(t){return t==null?Z():t.lods.length<1?new u("tilingscheme:generic","Tiling scheme must have at least one level"):g.isPowerOfTwo(t)?g.hasGapInLevels(t)?new u("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):g.tileSizeSupported(t)?g.hasOriginPerLODs(t)?new u("tilingscheme:multiple-origin","Tiling scheme levels must not have their own origin"):null:new u("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]"):new u("tilingscheme:power-of-two","Tiling scheme must be power of two")}static fromExtent(t,i){const s=t[2]-t[0],a=t[3]-t[1],n=Re(i),r=1.2*Math.max(s,a),o=256,h=r/o,c=h*n*(96/.0254),m=new g(new U({size:[o,o],origin:new H({x:t[0]-.5*(r-s),y:t[3]+.5*(r-a)}),lods:[new j({level:0,resolution:h,scale:c})],spatialReference:i}));return m.ensureMaxLod(20),m}static makeWebMercatorAuxiliarySphere(t){const i=new g(g.WebMercatorAuxiliarySphereTileInfo);return i.ensureMaxLod(t),i}static makeGCSWithTileSize(t,i=256,s=16){const a=256/i,n=new g(new U({size:[i,i],origin:new H({x:-180,y:90,spatialReference:t}),spatialReference:t,lods:[new j({level:0,resolution:.703125*a,scale:295497598570834e-6*a})]}));return n.ensureMaxLod(s),n}get test(){}};function Z(){return new u("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")}M.WebMercatorAuxiliarySphereTileInfo=new U({size:[256,256],origin:new H({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:ie.WebMercator}),spatialReference:ie.WebMercator,lods:[new j({level:0,resolution:156543.03392800014,scale:591657527591555e-6})]}),M.WebMercatorAuxiliarySphere=M.makeWebMercatorAuxiliarySphere(19);const _=N(),pe=64;Te(Me/10);const mt=N();M.WebMercatorAuxiliarySphere.getExtent(0,0,0,mt);N([-180,-90,180,90]);var x;(function(e){e[e.NORTH=0]="NORTH",e[e.NORTH_EAST=1]="NORTH_EAST",e[e.EAST=2]="EAST",e[e.SOUTH_EAST=3]="SOUTH_EAST",e[e.SOUTH=4]="SOUTH",e[e.SOUTH_WEST=5]="SOUTH_WEST",e[e.WEST=6]="WEST",e[e.NORTH_WEST=7]="NORTH_WEST"})(x||(x={}));function dt(e){return ge(e)||Be(e)||Ie(e)}function ge(e){return Ee(e)||ke(e)}const C=V(),ft=V(),R=V(),T=V();function gt(e,t,i=0){const s=e.extent;if(s==null)return!1;if(i===0)return Ce(s,t);const a=Math.min(s[2]-s[0],s[3]-s[1]);return Le(s,t,i*a)}function F(e,t,i,s){lt(C,i),C[s]=t[s];const a=K(C,C,t),n=K(ft,e,t),r=oe(n,a),o=oe(a,a);let h;h=r<=0?t:o<=r?i:ot(C,t,ct(a,a,r/o));const c=K(C,e,h);return Math.PI/2-Math.atan(c[2]/Math.sqrt(c[0]*c[0]+c[1]*c[1]))}function yt(e,t,i){const s=e.extent;if(s==null)return 0;R[0]=s[0],R[1]=s[1],R[2]=i,T[0]=s[2],T[1]=s[3],T[2]=i;let a=1/0,n=1/0;return t[0]<R[0]?a=F(t,R,T,0):t[0]>T[0]&&(a=F(t,T,R,0)),t[1]<R[1]?n=F(t,R,T,1):t[1]>T[1]&&(n=F(t,T,R,1)),Math.min(a,n)}function bt(e,t,i,s){if(e==null)return Z();const a=e.spatialReference;if(a.isGeographic&&!ge(a))return new u("tilingscheme:local-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in local scenes");const n=M.checkUnsupported(e);return n??(i==null?new u("tilingscheme:extent-not-exist","The layer does not provide a layer extent."):wt(e,i)||(t==null||a.equals(t)||t.isWGS84&&a.isWebMercator?null:new u("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene")))}function wt(e,t){const i=e.lods,s=i[0].resolution*2**i[0].level,a=[s*e.size[0],s*e.size[1]],n=[e.origin.x,e.origin.y],r=Oe(t),o=N();M.computeRowColExtent(r,a,n,o);const h=(o[2]-o[0])*(o[3]-o[1]);if(h>pe){const c=i[0].scale*2**i[0].level;let m=Math.max((r[3]-r[1])/e.size[1],(r[2]-r[0])/e.size[0])*c/s;const B=Math.floor(Math.log(m)/Math.log(10));return m=Math.ceil(m/10**B)*10**B,new u("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(c).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+m.toLocaleString()+".",{level0Scale:c,suggestedLevel0Scale:m,requiredNumRootTiles:h,allowedNumRootTiles:pe})}return null}const vt=Object.freeze(Object.defineProperty({__proto__:null,checkIfTileInfoSupportedForViewSR:bt,isInsideExtent:gt,tiltToExtentEdge:yt},Symbol.toStringTag,{value:"Module"}));function _t(){return!0}function St(){return 0}function $t(e,t,i,s){if(e==null)return Z();const a=(e==null?void 0:e.lods.length)-1,n=e.spatialReference;if(n.isWebMercator){if(!M.makeWebMercatorAuxiliarySphere(a).compatibleWith(e,s))return new u("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!dt(n))return new u("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!M.makeGCSWithTileSize(e.spatialReference,e.size[0],a).compatibleWith(e,s))return e.spatialReference.isWGS84?new u("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new u("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}return t==null||e.spatialReference.equals(t)?null:new u("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}const xt=Object.freeze(Object.defineProperty({__proto__:null,checkIfTileInfoSupportedForViewSR:$t,isInsideExtent:_t,tiltToExtentEdge:St},Symbol.toStringTag,{value:"Module"})),Rt={[D.Global]:xt,[D.Local]:vt};function Y(e,t,i,s,a){return Rt[s].checkIfTileInfoSupportedForViewSR(e,i,t,a)}function Tt(e,t,i){const s=Ae(e);if(s!=null){if(!L.isCollection(s))return{tileInfo:s.tileInfo,fullExtent:s.fullExtent};{const a=s.find(n=>Y(n.tileInfo,n.fullExtent,t,i)==null);if(a)return{tileInfo:a.tileInfo,fullExtent:a.fullExtent}}}return{tileInfo:null,fullExtent:null}}x.NORTH,x.EAST,x.SOUTH,x.WEST;x.NORTH_EAST,x.SOUTH_EAST,x.SOUTH_WEST,x.NORTH_WEST;async function Mt(e,t={}){const{basemap:i,view:s}=e;await i.load(t),It(i),await kt(i,s,t),q(t)}async function Bt(e,t={}){var o,h;const{basemap:i,view:s}=e;q(t);const a=(o=i.baseLayers.find(c=>c.type==="unknown"))==null?void 0:o.loadError;if(a!=null)throw a;if(!s||"spatialReferenceLocked"in s&&!s.spatialReferenceLocked||(await i.load(t),q(t),i.baseLayers.length===0))return;const n=i.baseLayers.at(0);if(!Ge(n))return;if(i.spatialReference){if(s.spatialReference.equals(i.spatialReference))return;he()}await n.load(t),q(t);const r=(("supportedSpatialReferences"in n?n.supportedSpatialReferences:null)||["tileInfo"in n?(h=n.tileInfo)==null?void 0:h.spatialReference:null]).filter(ze);r.length!==0&&r.every(c=>!s.spatialReference.equals(c))&&he()}function he(){throw new u("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}function It(e){if(e.baseLayers.length===0&&e.referenceLayers.length===0)return;const t=e.baseLayers.concat(e.referenceLayers).toArray().filter(i=>!We(i)).map(i=>Et(i));if(t.length)throw t[0]}function Et(e){return new u("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})}async function kt(e,t,i){if(e.baseLayers.length===0)return;const s=e.baseLayers.at(0);if(Fe(s)){try{await s.load(i)}catch(a){const n="basemap-compatibility:unknown-error",r="Unknown basemap compatibility error",{name:o=n,message:h=r,details:c}=a;throw new u(o,h,c)}Ct(s,t)}}function Ct(e,t){var o;const i=t.state.viewingMode;if(!i)return;let s,a;if((e==null?void 0:e.type)==="wmts"){const h=Tt(e,t.spatialReference,i);if(h.tileInfo==null)throw new u("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");s=h.tileInfo,a=h.fullExtent}else s=e.tileInfo,a=e.fullExtent;if(s==null)return;if(!ht(s.spatialReference,i))throw new u(`basemapgalleryitem:spatial-reference-unsupported-${le(i)}`,`Basemap spatial reference is unsupported in ${le(i)} mode`);const n=(e==null?void 0:e.type)==="vector-tile"?s.getCompatibleForVTL(256):null;if(i===D.Global){let h=Y(s,a,null,i);if(h&&(e==null?void 0:e.type)==="vector-tile"&&a!=null&&n&&!Y(n,a,null,i)&&(h=null),h){const c=s.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new u(`basemapgalleryitem:tiling-scheme-unsupported-${c}-global`,"Basemap tiling scheme is unsupported in global mode",{error:h})}}else if(M.checkUnsupported(s))throw new u("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");const r=(o=t.basemapTerrain)==null?void 0:o.tilingScheme;if(r&&!r.compatibleWith(s)&&((e==null?void 0:e.type)!=="vector-tile"||!n||!r.compatibleWith(n)))throw new u("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}let S=class extends Pe(ue){constructor(e){super(e),this.compatibilityFunction=null,this.error=null,this.state="loading",this.view=null}initialize(){const e=()=>this.refresh();this.addHandles([I(()=>{var t;return(t=this.basemap)==null?void 0:t.loadStatus},e),I(()=>this.compatibilityFunction,e),I(()=>{var t;return this.view&&"basemapTerrain"in this.view&&((t=this.view.basemapTerrain)==null?void 0:t.tilingScheme)},e),I(()=>{var t;return(t=this.view)==null?void 0:t.ready},e),I(()=>{var t;return(t=this.view)==null?void 0:t.spatialReference},e)]),this.refresh()}destroy(){this._cancelRefresh(),this.basemap=null,this.compatibilityFunction=null,this.view=null}get _spatialReferenceTask(){return Ye(this.view,this.basemap)}set basemap(e){e&&e.load().catch(()=>{}),this._set("basemap",e)}get spatialReference(){return this._spatialReferenceTask.spatialReference}refresh(){var s;this._cancelRefresh(),this._set("state","loading");const e=(s=this.basemap)==null?void 0:s.loadStatus;if(e!=="loaded"&&e!=="failed")return;if(!this.compatibilityFunction)return void(e==="loaded"?(this._set("state","ready"),this._set("error",null)):(this._set("state","error"),this._set("error",this.basemap.loadError)));const t=new AbortController,{signal:i}=t;this.compatibilityFunction(this,{signal:i}).then(()=>He(()=>!this._spatialReferenceTask.updating,i)).then(()=>{this._set("state","ready"),this._set("error",null)}).catch(a=>{me(a)||(this._set("state","error"),this._set("error",a))}),this._refreshController=t}_cancelRefresh(){this._refreshController&&(this._refreshController.abort(),this._refreshController=null)}};l([p({readOnly:!0})],S.prototype,"_spatialReferenceTask",null),l([p()],S.prototype,"basemap",null),l([p()],S.prototype,"compatibilityFunction",void 0),l([p({readOnly:!0})],S.prototype,"error",void 0),l([p({readOnly:!0})],S.prototype,"spatialReference",null),l([p({readOnly:!0})],S.prototype,"state",void 0),l([p()],S.prototype,"view",void 0),S=l([z("esri.widgets.BasemapGallery.support.BasemapGalleryItem")],S);const ye=S,be=L.ofType(J);let A=class extends ue{constructor(e){super(e),this.basemaps=new be}destroy(){this.basemaps.forEach(e=>e.destroy())}get state(){return"ready"}refresh(){}};l([p({type:be})],A.prototype,"basemaps",void 0),l([p({readOnly:!0})],A.prototype,"state",null),A=l([z("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],A);const we=A,ve=L.ofType(J);let $=class extends X.LoadableMixin(qe(we)){constructor(e){super(e),this._lastPortalBasemapFetchController=null,this.basemaps=new ve,this.filterFunction=null,this.portal=de.getDefault(),this.query=null,this.updateBasemapsCallback=null,this.viewType=null}initialize(){this.addHandles(I(()=>{var e,t,i;return[this.filterFunction,this.loadStatus,(e=this.portal)==null?void 0:e.basemapGalleryGroupQuery,(t=this.portal)==null?void 0:t.basemapGalleryGroupQuery3D,(i=this.portal)==null?void 0:i.user,this.query,this.updateBasemapsCallback]},()=>this.refresh(),Ue))}destroy(){this.filterFunction=null,this.portal=null,this.basemaps.forEach(e=>e.destroy())}get state(){return this.loadStatus==="not-loaded"?"not-loaded":this.loadStatus==="loading"||this._lastPortalBasemapFetchController?"loading":"ready"}load(e){return this.addResolvingPromise(this.portal.load(e)),Promise.resolve(this)}async refresh(){if(this.loadStatus!=="loaded")return;this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);const e=this.portal,t=new AbortController;this._lastPortalBasemapFetchController=t,this.notifyChange("state");try{const i=await e.fetchBasemaps(this._toQueryString(this.query),{signal:t.signal,include3d:this.viewType==="3d"||void 0});await this._updateBasemaps(i)}catch(i){if(me(i))throw i;je.getLogger(this).warn(new u("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:i})),await this._updateBasemaps()}this._lastPortalBasemapFetchController=null,this.notifyChange("state")}_toQueryString(e){return e&&typeof e!="string"?Object.keys(e).map(t=>`${t}:${e[t]}`).join(" AND "):e}async _updateBasemaps(e=[]){let t=await this._filterBasemaps(e);t=this.updateBasemapsCallback?await this.updateBasemapsCallback(t):t,this.basemaps.removeAll(),this.basemaps.addMany(t)}async _filterBasemaps(e){if(!this.filterFunction)return e;const t=e.map(this.filterFunction),i=await Promise.all(t);return e.filter((s,a)=>i[a])}};l([p({readOnly:!0,type:ve})],$.prototype,"basemaps",void 0),l([p()],$.prototype,"filterFunction",void 0),l([p({type:de})],$.prototype,"portal",void 0),l([p()],$.prototype,"query",void 0),l([p({readOnly:!0})],$.prototype,"state",null),l([p()],$.prototype,"updateBasemapsCallback",void 0),l([p()],$.prototype,"viewType",void 0),$=l([z("esri.widgets.BasemapGallery.support.PortalBasemapsSource")],$);const G=$,_e=L.ofType(ye);function Lt(e){return e&&e.declaredClass==="esri.portal.Portal"}function Ot(e){return e&&!(e instanceof G)&&(!!e.portal||!!e.query)}function At(e){return e&&"basemaps"in e&&"state"in e&&"refresh"in e}let v=class extends X{constructor(e){super(e),this._loadingProjectionEngine=!1,this.items=new _e,this.source=new G,this.view=null}initialize(){const e=()=>this._recreateItems();this.addHandles([I(()=>this.state==="ready"?this.compatibilityFunction:null,()=>this._updateItems()),Ne(()=>{var t;return(t=this.source)==null?void 0:t.basemaps},"change",e,{onListenerAdd:e}),fe(()=>this.view,()=>{var t;this.source instanceof G&&(this.source.viewType=(t=this.view)==null?void 0:t.type)},{once:!0})])}destroy(){var t;const e=this.source.basemaps.find(i=>i===this.activeBasemap);e&&this.source.basemaps.remove(e),(t=this.source)==null||t.destroy()}get activeBasemap(){var e,t;return((t=(e=this.view)==null?void 0:e.map)==null?void 0:t.basemap)??null}set activeBasemap(e){var a,n;const t=this.view;if(!(t!=null&&t.map))return;const i=typeof e=="string"?J.fromId(e):e;if(!i||!t.ready)return t.map.basemap=i,void this._clearOverride("activeBasemap");const s=i.spatialReference||((n=(a=this.items)==null?void 0:a.find(r=>this.basemapEquals(i,r.basemap)))==null?void 0:n.spatialReference);if(s&&"spatialReferenceLocked"in t&&!t.spatialReferenceLocked){const r=t.spatialReference;if(s!=null&&!ne(r,s)&&!Ve(t.spatialReference,s)&&!Qe())return this._override("activeBasemap",i),this._loadingProjectionEngine=!0,void Ke().then(()=>{this._get("activeBasemap")===e&&(t.map.basemap=e,t.spatialReference=s,this._clearOverride("activeBasemap"))},()=>{}).then(()=>{this._loadingProjectionEngine=!1});t.map.basemap=i,this._clearOverride("activeBasemap"),s==null||ne(t.spatialReference,s)||(t.spatialReference=s)}else t.map.basemap=i,this._clearOverride("activeBasemap")}get activeBasemapIndex(){const{state:e,activeBasemap:t}=this;return e!=="ready"?-1:this._findBasemapIndex(t)}get compatibilityFunction(){var e;return((e=this.view)==null?void 0:e.type)==="3d"?Mt:Bt}set compatibilityFunction(e){this._overrideIfSome("compatibilityFunction",e)}castSource(e){return Array.isArray(e)||L.isCollection(e)?new we({basemaps:Array.isArray(e)?new L(e):e}):Lt(e)?new G({portal:e}):Ot(e)?new G(e):At(e)?e:null}get state(){var e;return(e=this.view)!=null&&e.ready&&this.source?rt(this.view)&&!this.view.inGeographicLayout?"unsupported":this._loadingProjectionEngine?"loading":"ready":"disabled"}basemapEquals(e,t){return Je(e,t)}refresh(){this._recreateItems()}load(){return this.loadSource()}loadSource(e){return this.addResolvingPromise(X.isLoadable(this.source)?this.source.load(e):null),Promise.resolve(this)}_findBasemapIndex(e){const{items:t}=this,i=t.findIndex(s=>s.basemap===e);return i===-1?t.findIndex(s=>this.basemapEquals(s.basemap,e)):i}_recreateItems(){var n;const e=((n=this.source)==null?void 0:n.basemaps)??[],{view:t,compatibilityFunction:i}=this,s=new Map(this.items.map(r=>[r.basemap,r])),a=e.map(r=>{const o=s.get(r);return o?(s.delete(r),o):new ye({basemap:r,compatibilityFunction:i,view:t})});this.items.removeAll(),this.items.addMany(a),s.forEach(r=>r.destroy())}_updateItems(){for(const e of this.items)e.compatibilityFunction=this.compatibilityFunction,e.view=this.view}};l([p()],v.prototype,"_loadingProjectionEngine",void 0),l([p()],v.prototype,"activeBasemap",null),l([p({readOnly:!0})],v.prototype,"activeBasemapIndex",null),l([p()],v.prototype,"compatibilityFunction",null),l([p({readOnly:!0,type:_e})],v.prototype,"items",void 0),l([p()],v.prototype,"source",void 0),l([De("source")],v.prototype,"castSource",null),l([p({readOnly:!0})],v.prototype,"state",null),l([p()],v.prototype,"view",void 0),v=l([z("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],v);const Gt=v,y="esri-basemap-gallery",b={base:y,sourceLoading:`${y}--source-loading`,layoutGrid:`${y}--grid`,narrowItems:`${y}--narrow-items`,loader:`${y}__loader`,item:`${y}__item`,itemContainer:`${y}__item-container`,itemContent:`${y}__item-content`,itemTitle:`${y}__item-title`,itemTagsContainer:`${y}__item-tags-container`,itemThumbnail:`${y}__item-thumbnail`,selectedItem:`${y}__item--selected`,itemError:`${y}__item--error`},P={small:200,default:280,wide:420};let f=class extends st{constructor(e,t){super(e,t),this.disabled=!1,this.headingLevel=2,this.messages=null,this.viewModel=new Gt,this._focusBasemapItemEnabled=!1,this._container=null,this._width=0,this._onContainerCreated=i=>{this._container=i}}initialize(){this.addHandles([at(()=>this._container,({contentRect:e})=>{this._width=e.width}),fe(()=>this.source,()=>this.viewModel.loadSource(),{sync:!0,initial:!0})])}loadDependencies(){return nt({scrim:()=>re(()=>import("./calcite-scrim-JZ9mqYq3.js"),__vite__mapDeps([0,1,2,3])),chip:()=>re(()=>import("./calcite-chip-ClUfcB7P.js"),__vite__mapDeps([4,2,3]))})}get activeBasemap(){return this.viewModel.activeBasemap}set activeBasemap(e){this.viewModel.activeBasemap=e}get icon(){return"basemap"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get source(){return this.viewModel.source}set source(e){this.viewModel.source=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}render(){const e=this.source.state==="loading",t=this.disabled||this.viewModel.state==="disabled",i={[b.sourceLoading]:e,[k.disabled]:t},s=this._width;s<=P.small||s>=P.wide?i[b.layoutGrid]=!0:s<P.default&&(i[b.narrowItems]=!0);const a=this._getContext();return d("div",{afterCreate:this._onContainerCreated,class:this.classes(b.base,k.widget,k.panel,i),key:"container",styles:{"--esri-basemap-gallery-small":`${P.small}px`}},this._width===0?null:a)}_getContext(){if(this.viewModel.state==="unsupported")return d("div",{class:k.empty,key:"empty-message"},d(ce,{level:this.headingLevel},this.messages.unsupported));if(this.source.state==="loading")return d("div",{class:b.loader,key:"loader"});const e=this.viewModel.items;return e.length>0?d("ul",{"aria-disabled":this.disabled,"aria-label":this.label,bind:this,class:b.itemContainer,key:"item-container",onkeydown:this._handleKeyDown,role:"radiogroup"},e.map((t,i)=>this._renderBasemapGalleryItem(t,i)).toArray()):d("div",{class:k.empty,key:"empty-message"},d(ce,{level:this.headingLevel},this.messages.noBasemaps))}_getRoundRobinIndex(e,t){return(e+t)%t}_handleKeyDown(e){const{key:t}=e;if(!["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t))return;e.preventDefault();const{items:i,activeBasemapIndex:s}=this.viewModel,a=t==="ArrowUp"||t==="ArrowLeft"?this._getRoundRobinIndex(Math.max(s-1,-1),i.length):this._getRoundRobinIndex(s+1,i.length),n=i.at(a);(n==null?void 0:n.state)==="ready"&&(this.viewModel.activeBasemap=n.basemap),this._focusBasemapItemEnabled=!0}_focusBasemapItem(e){this._focusBasemapItemEnabled&&e.tabIndex===0&&(e.focus(),this._focusBasemapItemEnabled=!1)}_handleClick(e){const t=e.currentTarget["data-item"];t.state==="ready"&&(this.viewModel.activeBasemap=t.basemap)}_renderBasemapGalleryItem(e,t){var ee,te;const i=Ze(e.basemap)||Xe("esri/themes/base/images/basemap-toggle-64.svg"),s=e.basemap.title,a=(ee=e.basemap.portalItem)==null?void 0:ee.snippet,n=((te=e.error)==null?void 0:te.message)||a||s,{viewModel:{state:r,activeBasemapIndex:o}}=this,h=this.disabled||r==="disabled",c=o===t,m=c||o===-1&&t===0?0:-1,B=r==="loading",w={[b.selectedItem]:c,[b.itemError]:e.state==="error"},E=`basemapgallery-item-${e.uid}`;return d("li",{afterUpdate:this._focusBasemapItem,"aria-checked":c.toString(),"aria-disabled":h.toString(),"aria-labelledby":E,bind:this,class:this.classes(b.item,w),"data-item":e,key:e.uid,onclick:this._handleClick,onkeydown:this._handleClick,role:"radio",tabIndex:m,title:n},d("img",{alt:"",class:b.itemThumbnail,src:i}),d("div",{class:b.itemContent,key:"content"},d("div",{class:b.itemTitle,key:"title"},d("span",{id:E},s)),et(e.basemap)?this._renderTags(e.basemap):null),e.state==="loading"||c&&B?d("calcite-scrim",null,d("span",{"aria-hidden":"true",class:k.loaderAnimation,key:"loader",role:"presentation"})):null)}_renderTags(e){return d("div",{class:b.itemTagsContainer,key:"tag"},this._render3DTag(),tt(e)?this._renderBetaTag():null)}_render3DTag(){const{messages:e}=this;return d("calcite-chip",{key:"tag-3d",scale:"s",value:e.tag3D},this.messages.tag3D)}_renderBetaTag(){const{messages:e}=this;return d("calcite-chip",{appearance:"outline-fill",key:"tag-beta",scale:"s",value:e.tagBeta},this.messages.tagBeta)}};l([p()],f.prototype,"activeBasemap",null),l([p()],f.prototype,"disabled",void 0),l([p()],f.prototype,"headingLevel",void 0),l([p()],f.prototype,"icon",null),l([p()],f.prototype,"label",null),l([p(),it("esri/widgets/BasemapGallery/t9n/BasemapGallery")],f.prototype,"messages",void 0),l([p()],f.prototype,"source",null),l([p()],f.prototype,"view",null),l([p()],f.prototype,"viewModel",void 0),l([p()],f.prototype,"_focusBasemapItemEnabled",void 0),l([p()],f.prototype,"_container",void 0),l([p()],f.prototype,"_width",void 0),l([pt()],f.prototype,"_handleClick",null),f=l([z("esri.widgets.BasemapGallery")],f);const Kt=f;export{Kt as default};
//# sourceMappingURL=BasemapGallery-C2ljt6rS.js.map
