import{ey as _,ez as S,z as T,ag as v,aQ as b,U as u,f4 as w,eW as $,I as h,q as O,X as U,cU as R,aE as W,j as a,m as o,o as j,u as P,bb as I,k as L,eF as A}from"./index-Du44_A8J.js";import{S as B}from"./MultiOriginJSONSupport-9C55E1A7.js";import{i as M}from"./APIKeyMixin-DkioXOJh.js";import{p as N}from"./ArcGISCachedService-C70JeEMP.js";import{m as k,f as C,t as D}from"./SublayersOwner-DfTjOHFk.js";import{l as J}from"./ArcGISService-B0vN2MGD.js";import{e as q}from"./CustomParametersMixin-MXEEEQ7u.js";import{b as G}from"./OperationalLayer-DzWDKpRJ.js";import{j as E}from"./PortalLayer-D0ThxHis.js";import{f as V}from"./RefreshableLayer-WGNO3V1X.js";import{y as z}from"./commonProperties-BK1AfWBs.js";import{o as y}from"./imageBitmapUtils-ZB3ncjAg.js";import"./TileInfo-DuhHTNTj.js";import"./TileKey-DZd6gJy7.js";import"./TileInfoTilemapCache-D90dKcyN.js";import"./TilemapCache-FBxEtSV3.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./portalItemUtils-BEbjr1pu.js";import"./CollectionFlattener-C_SkK2OR.js";import"./QueryTask-D147tU9J.js";import"./infoFor3D-CxdEiWhp.js";import"./executeForIds-CHK6CluD.js";import"./featureConversionUtils-DZlLcsaX.js";import"./featureLayerUtils-31c3e_wZ.js";import"./uuid-Cl5lrJ4c.js";import"./FeatureType-CT9wGYTt.js";import"./FeatureTemplate-CPKD3Kwx.js";import"./labelingInfo-DdMTUeRH.js";import"./labelUtils-CqoQ4tTv.js";import"./LayerFloorInfo-RaJcB56g.js";import"./Relationship-BXPxcFQW.js";import"./serviceCapabilitiesUtils-m9_-oJzc.js";import"./popupUtils-DagVpAP6.js";import"./sublayerUtils-Bm3L2K6Y.js";var m;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=m=class extends _(S(k(N(C(G(E(J(B(V(M(q(A)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(T).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){var t;return(e=e||((t=r.tileInfo)==null?void 0:t.spatialReference))&&v.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),n=[],c={writeSublayerStructure:!1,...s};p.forEach(l=>{const d=l.write({},c);n.push(d)}),n.some(l=>Object.keys(l).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>b(r).path):null}fetchTile(e,r,t,s={}){const{signal:p}=s,n=this.getTileUrl(e,r,t),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return u(n,c).then(l=>l.data)}async fetchImageBitmapTile(e,r,t,s={}){const{signal:p}=s;if(this.fetchTile!==m.prototype.fetchTile){const d=await this.fetchTile(e,r,t,s);return y(d,e,r,t,p)}const n=this.getTileUrl(e,r,t),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:l}=await u(n,c);return y(l,e,r,t,p)}getTileUrl(e,r,t){var c,l;const s=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=w({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return $(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new h("tile-layer:undefined-url","layer's url is not defined");const s=O(this.parsedUrl.path);if(s!=null&&s.serverType==="ImageServer")throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");u(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!U(t))return this._fetchServerVersion(t,e).then(s=>{this.read({currentVersion:s})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!R(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return u(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(s=>{if(s.data&&s.data.currentVersion)return s.data.currentVersion;throw new h("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,s=f.length;t<s;t++)if(r=f[t],r.toLowerCase().includes(e))return W("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};a([o({readOnly:!0})],i.prototype,"attributionDataUrl",null),a([o({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),a([o({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),a([o({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),a([o({type:Boolean})],i.prototype,"resampling",void 0),a([o()],i.prototype,"sourceJSON",void 0),a([o({type:v})],i.prototype,"spatialReference",void 0),a([j("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),a([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),a([o({readOnly:!0})],i.prototype,"sublayers",void 0),a([P("sublayers",{layers:{type:[D]}})],i.prototype,"writeSublayers",null),a([o({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),a([o()],i.prototype,"tileServers",null),a([I("tileServers")],i.prototype,"castTileServers",null),a([o({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),a([o(z)],i.prototype,"url",void 0),i=m=a([L("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const Ue=i;export{Ue as default};
//# sourceMappingURL=TileLayer-BtgzhTyO.js.map
