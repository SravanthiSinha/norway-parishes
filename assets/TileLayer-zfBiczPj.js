import{z as _,ag as v,aT as S,U as u,f0 as T,eT as b,I as h,q as w,X as $,cR as O,aI as R,j as a,m as o,o as U,u as W,bb as j,k as I}from"./index-Bs-G_wsu.js";import{S as P}from"./MultiOriginJSONSupport-BBxe_F7T.js";import{f as L}from"./Layer-BD5fEEcE.js";import{i as A}from"./APIKeyMixin-DWFWR-Vn.js";import{p as B}from"./ArcGISCachedService-ByRzTESu.js";import{m as M,f as N,t as k}from"./SublayersOwner-DsVyVCRt.js";import{l as C}from"./ArcGISService-Dhi-DofJ.js";import{l as D}from"./BlendLayer-BeHYTX5Y.js";import{e as J}from"./CustomParametersMixin-Y8anAD7D.js";import{b as q}from"./OperationalLayer-okMj1Nle.js";import{j as G}from"./PortalLayer-DHH3dWZi.js";import{f as V}from"./RefreshableLayer-BAKri3Ps.js";import{t as E}from"./ScaleRangeLayer-DoKtR3vt.js";import{y as x}from"./commonProperties-D2JZeGzF.js";import{o as y}from"./imageBitmapUtils-DxLD_KZY.js";import"./TileInfo-X-DVPDNH.js";import"./TileKey-DZd6gJy7.js";import"./TileInfoTilemapCache-CU2AmpNX.js";import"./TilemapCache-DwB5MRiB.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./portalItemUtils-DwiXoV8_.js";import"./CollectionFlattener-CTw_eXOA.js";import"./QueryTask-DCif9N50.js";import"./infoFor3D-CxdEiWhp.js";import"./executeForIds-BuH_Sjni.js";import"./featureConversionUtils-ei0M_jjf.js";import"./featureLayerUtils-B9lP5GlN.js";import"./uuid-Cl5lrJ4c.js";import"./FeatureType-rnXSbOXM.js";import"./FeatureTemplate-BJHAfJZ2.js";import"./labelingInfo-Qff1pGsE.js";import"./labelUtils-BPgYl1Yw.js";import"./LayerFloorInfo-D23a2fZQ.js";import"./Relationship-C-cZFGat.js";import"./serviceCapabilitiesUtils-GEj5uSHc.js";import"./popupUtils-Cu6PoQ9J.js";import"./sublayerUtils-Be1dTR5A.js";import"./jsonUtils-qHdUfL9L.js";import"./parser-DP7rDSW3.js";import"./utils-DzB8n6BG.js";import"./ElevationInfo-Ogo5JfE3.js";var m;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=m=class extends D(E(M(B(N(q(G(C(P(V(A(J(L)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){var t;return(e=e||((t=r.tileInfo)==null?void 0:t.spatialReference))&&v.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),n=[],c={writeSublayerStructure:!1,...s};p.forEach(l=>{const d=l.write({},c);n.push(d)}),n.some(l=>Object.keys(l).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>S(r).path):null}fetchTile(e,r,t,s={}){const{signal:p}=s,n=this.getTileUrl(e,r,t),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return u(n,c).then(l=>l.data)}async fetchImageBitmapTile(e,r,t,s={}){const{signal:p}=s;if(this.fetchTile!==m.prototype.fetchTile){const d=await this.fetchTile(e,r,t,s);return y(d,e,r,t,p)}const n=this.getTileUrl(e,r,t),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:l}=await u(n,c);return y(l,e,r,t,p)}getTileUrl(e,r,t){var c,l;const s=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=T({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return b(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new h("tile-layer:undefined-url","layer's url is not defined");const s=w(this.parsedUrl.path);if(s!=null&&s.serverType==="ImageServer")throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");u(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!$(t))return this._fetchServerVersion(t,e).then(s=>{this.read({currentVersion:s})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!O(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return u(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(s=>{if(s.data&&s.data.currentVersion)return s.data.currentVersion;throw new h("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,s=f.length;t<s;t++)if(r=f[t],r.toLowerCase().includes(e))return R("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};a([o({readOnly:!0})],i.prototype,"attributionDataUrl",null),a([o({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),a([o({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),a([o({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),a([o({type:Boolean})],i.prototype,"resampling",void 0),a([o()],i.prototype,"sourceJSON",void 0),a([o({type:v})],i.prototype,"spatialReference",void 0),a([U("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),a([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),a([o({readOnly:!0})],i.prototype,"sublayers",void 0),a([W("sublayers",{layers:{type:[k]}})],i.prototype,"writeSublayers",null),a([o({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),a([o()],i.prototype,"tileServers",null),a([j("tileServers")],i.prototype,"castTileServers",null),a([o({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),a([o(x)],i.prototype,"url",void 0),i=m=a([I("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const Ae=i;export{Ae as default};
