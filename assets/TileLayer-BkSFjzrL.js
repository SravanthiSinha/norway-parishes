import{z as _,ag as v,aT as S,U as u,f0 as T,eT as b,I as h,q as w,X as $,cR as O,aI as R,j as a,m as o,o as U,u as W,bb as j,k as I}from"./index-DhfeYpQB.js";import{S as P}from"./MultiOriginJSONSupport-BQIO3hW2.js";import{f as L}from"./Layer-BS17sfSP.js";import{i as A}from"./APIKeyMixin-ByxCUWVM.js";import{p as B}from"./ArcGISCachedService-TukJdBeC.js";import{m as M,f as N,t as k}from"./SublayersOwner-CdI3wg_G.js";import{l as C}from"./ArcGISService-xFcXI3er.js";import{l as D}from"./BlendLayer-8ILuHHxa.js";import{e as J}from"./CustomParametersMixin-Wc4OSDrJ.js";import{b as q}from"./OperationalLayer-DsG_35oZ.js";import{j as G}from"./PortalLayer-BUIfIK69.js";import{f as V}from"./RefreshableLayer-CMG66MdJ.js";import{t as E}from"./ScaleRangeLayer-Ca0oKn-n.js";import{y as x}from"./commonProperties-GP1ewpRE.js";import{o as y}from"./imageBitmapUtils-Bs7UDygi.js";import"./TileInfo-CcSBnkQt.js";import"./TileKey-DZd6gJy7.js";import"./TileInfoTilemapCache-BU63kYAw.js";import"./TilemapCache-D1BLFUV5.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./portalItemUtils-Cdx2zb1g.js";import"./CollectionFlattener-CNrooAWP.js";import"./QueryTask-C0nGjdNY.js";import"./infoFor3D-CxdEiWhp.js";import"./executeForIds-DTgegIXZ.js";import"./featureConversionUtils-CRUUPyLl.js";import"./featureLayerUtils-C3i71cPz.js";import"./uuid-Cl5lrJ4c.js";import"./FeatureType-CXLgTMgL.js";import"./FeatureTemplate-DdxRTMtJ.js";import"./labelingInfo-CgrpOWXn.js";import"./labelUtils-D9j8SqUC.js";import"./LayerFloorInfo-HNNgWdgu.js";import"./Relationship-CHPHBG4s.js";import"./serviceCapabilitiesUtils-CzZRrVPI.js";import"./popupUtils-KMlXJ9rA.js";import"./sublayerUtils-wTtyRHJF.js";import"./jsonUtils-BIE9HkYy.js";import"./parser-7K1TO6Ko.js";import"./utils-BZRJVqKV.js";import"./ElevationInfo-foQPpRIG.js";var m;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=m=class extends D(E(M(B(N(q(G(C(P(V(A(J(L)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){var t;return(e=e||((t=r.tileInfo)==null?void 0:t.spatialReference))&&v.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),n=[],c={writeSublayerStructure:!1,...s};p.forEach(l=>{const d=l.write({},c);n.push(d)}),n.some(l=>Object.keys(l).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>S(r).path):null}fetchTile(e,r,t,s={}){const{signal:p}=s,n=this.getTileUrl(e,r,t),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return u(n,c).then(l=>l.data)}async fetchImageBitmapTile(e,r,t,s={}){const{signal:p}=s;if(this.fetchTile!==m.prototype.fetchTile){const d=await this.fetchTile(e,r,t,s);return y(d,e,r,t,p)}const n=this.getTileUrl(e,r,t),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:l}=await u(n,c);return y(l,e,r,t,p)}getTileUrl(e,r,t){var c,l;const s=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=T({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return b(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new h("tile-layer:undefined-url","layer's url is not defined");const s=w(this.parsedUrl.path);if(s!=null&&s.serverType==="ImageServer")throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");u(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!$(t))return this._fetchServerVersion(t,e).then(s=>{this.read({currentVersion:s})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!O(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return u(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(s=>{if(s.data&&s.data.currentVersion)return s.data.currentVersion;throw new h("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,s=f.length;t<s;t++)if(r=f[t],r.toLowerCase().includes(e))return R("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};a([o({readOnly:!0})],i.prototype,"attributionDataUrl",null),a([o({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),a([o({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),a([o({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),a([o({type:Boolean})],i.prototype,"resampling",void 0),a([o()],i.prototype,"sourceJSON",void 0),a([o({type:v})],i.prototype,"spatialReference",void 0),a([U("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),a([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),a([o({readOnly:!0})],i.prototype,"sublayers",void 0),a([W("sublayers",{layers:{type:[k]}})],i.prototype,"writeSublayers",null),a([o({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),a([o()],i.prototype,"tileServers",null),a([j("tileServers")],i.prototype,"castTileServers",null),a([o({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),a([o(x)],i.prototype,"url",void 0),i=m=a([I("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const Ae=i;export{Ae as default};
//# sourceMappingURL=TileLayer-BkSFjzrL.js.map
