const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ElevationQuery-CgsIptKG.js","assets/index-BlakZCKi.js","assets/index-Jib82o7I.css","assets/TileKey-DZd6gJy7.js","assets/layersCreator-DJDoBT1L.js","assets/portalLayers-2eTCUi7b.js","assets/associatedFeatureServiceUtils-Dt-94EA9.js","assets/fetchService-LE_sEeD-.js","assets/portalItemUtils-ClM50EPF.js","assets/styleUtils-DX_wCIJs.js"])))=>i.map(i=>d[i]);
import{j as a,be as B,k as g,O as j,ex as D,g9 as P,ae as G,x as N,s as b,v as w,dG as k,ka as M,I as R,eX as V,_ as v,w as f,b7 as $,m as o,u as W,k4 as q,eZ as T,h_ as H,aY as C,ao as J,aq as z,gH as Q,d8 as U,d7 as X,aE as Y,b5 as Z,an as K,aD as ee,bd as S,hF as te}from"./index-BlakZCKi.js";import{n as A}from"./CollectionFlattener-nugv4EKT.js";import{y as re,m as ae,b as se}from"./basemapUtils-Dtq4Jl7n.js";import{n as oe,l as ne,t as ie}from"./TablesMixin-B9u2pYWE.js";var _;let u=_=class extends j{constructor(e){super(e),this.type="none"}clone(){return new _({type:this.type})}};a([B({none:"none",stayAbove:"stay-above"})],u.prototype,"type",void 0),u=_=a([g("esri.ground.NavigationConstraint")],u);var L;let l=L=class extends D(P){constructor(e){super(e),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new G;const t=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,r.type!=="elevation"&&r.type!=="base-elevation"&&b.getLogger(this).error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)},s=r=>{r.parent=null};this.addHandles([this.layers.on("after-add",r=>t(r.item)),this.layers.on("after-remove",r=>s(r.item))])}initialize(){this.when().catch(e=>{N(e)||b.getLogger(this).error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll();for(const t of e)w(t);this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set layers(e){this._set("layers",k(e,this._get("layers")))}writeLayers(e,t,s,r){const i=[];e&&(r={...r,layerContainerType:"ground"},e.forEach(d=>{if("write"in d){const y={};M(d)().write(y,r)&&i.push(y)}else r!=null&&r.messages&&r.messages.push(new R("layer:unsupported",`Layers (${d.title}, ${d.id}) of type '${d.declaredClass}' cannot be persisted in the ground`,{layer:d}))})),t.layers=i}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return V(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:t==null?void 0:t.signal});const{ElevationQuery:s}=await v(()=>import("./ElevationQuery-CgsIptKG.js"),__vite__mapDeps([0,1,2,3]));f(t);const r=new s,i=this.layers.filter(O).toArray();return r.queryAll(i,e,t)}async createElevationSampler(e,t){await this.load({signal:t==null?void 0:t.signal});const{ElevationQuery:s}=await v(()=>import("./ElevationQuery-CgsIptKG.js"),__vite__mapDeps([0,1,2,3]));f(t);const r=new s,i=this.layers.filter(O).toArray();return r.createSamplerAll(i,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:$(this.surfaceColor),navigationConstraint:$(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new L({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo;return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve()}async _loadLayersFromJSON(e,t,s){const r=(t==null?void 0:t.origin)||"web-scene",i=(t==null?void 0:t.portal)||null,d=(t==null?void 0:t.url)||null,{populateOperationalLayers:y}=await v(async()=>{const{populateOperationalLayers:m}=await import("./layersCreator-DJDoBT1L.js");return{populateOperationalLayers:m}},__vite__mapDeps([4,1,2,5,6,7,8,9]));f(s);const E=[];if(e.layers&&Array.isArray(e.layers)){const m={context:{origin:r,url:d,portal:i,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};E.push(y(this.layers,e.layers,m))}await Promise.allSettled(E)}};function le(e){return e&&"createElevationSampler"in e}function O(e){return e.type==="elevation"||le(e)}a([o({json:{read:!1}})],l.prototype,"layers",null),a([W("layers")],l.prototype,"writeLayers",null),a([o({readOnly:!0})],l.prototype,"resourceInfo",void 0),a([o({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:T,read:{reader:q,source:"transparency"},write:{writer:(e,t)=>{t.transparency=H(e)},target:"transparency"}}})],l.prototype,"opacity",void 0),a([o({type:C,json:{type:[T],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],l.prototype,"surfaceColor",void 0),a([o({type:u,json:{write:!0}})],l.prototype,"navigationConstraint",void 0),l=L=a([g("esri.Ground")],l);const h=l,p=new WeakMap;function F(e){return!e.destroyed&&(p.has(e)||e.addHandles([J(()=>{const t=e.parent;return!(!t||!("type"in t))&&(t.type==="catalog-dynamic-group"||F(t))},t=>p.set(e,t),Q),z(()=>p.delete(e))]),p.get(e))}function de(e){return typeof e=="object"&&e!=null&&"loaded"in e&&e.loaded===!0&&"type"in e}function ye(e){var t,s;return!(!de(e)||!((s=(t=U(e))==null?void 0:t.operations)!=null&&s.supportsEditing)||"editingEnabled"in e&&!X(e)||F(e))}const x={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function pe(e){let t=null;if(typeof e=="string")if(e in x){const s=x[e];t=new h({resourceInfo:{data:{layers:[s]}}})}else b.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`);else t=Y(h,e);return t}let n=class extends oe(ne(Z.EventedMixin(K))){constructor(e){super(e),this.allLayers=new A({getCollections:()=>{var t,s,r;return[(t=this.basemap)==null?void 0:t.baseLayers,(s=this.ground)==null?void 0:s.layers,this.layers,(r=this.basemap)==null?void 0:r.referenceLayers]},getChildrenFunction:t=>"layers"in t?t.layers:null}),this.allTables=ie(this),this.basemap=null,this.editableLayers=new A({getCollections:()=>[this.allLayers],itemFilterFunction:ye}),this.ground=new h,this._basemapCache=re()}destroy(){ae(this._basemapCache),this._basemapCache=null,this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),this.basemap=w(this.basemap),w(this.ground),this._set("ground",null)}castBasemap(e){return se(e,this._basemapCache)}castGround(e){return pe(e)??this._get("ground")}findLayerById(e){return this.allLayers.find(t=>t.id===e)}findTableById(e){return this.allTables.find(t=>t.id===e)}};a([o({readOnly:!0,dependsOn:[]})],n.prototype,"allLayers",void 0),a([o({readOnly:!0})],n.prototype,"allTables",void 0),a([o({type:ee,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],n.prototype,"basemap",void 0),a([S("basemap")],n.prototype,"castBasemap",null),a([o({readOnly:!0})],n.prototype,"editableLayers",void 0),a([o({type:h,nonNullable:!0})],n.prototype,"ground",void 0),a([S("ground")],n.prototype,"castGround",null),a([o()],n.prototype,"undoRedo",void 0),n=a([g("esri.Map")],n);const ve=n;class ue extends te{constructor(t,s){super(t,s,"webmap")}}function fe(e){return e!=null&&typeof e=="object"&&"declaredClass"in e&&e.declaredClass==="esri.WebMap"}const be=new ue(2,32);var I;let c=I=class extends j{constructor(e){super(e),this.color=new C([0,0,0,1])}clone(){return new I($({color:this.color}))}};a([o({type:C,json:{write:!0}})],c.prototype,"color",void 0),c=I=a([g("esri.webmap.background.ColorBackground")],c);const we=c;export{ve as L,we as m,be as n,fe as r,ue as s};
//# sourceMappingURL=ColorBackground-C7QrWvcW.js.map
