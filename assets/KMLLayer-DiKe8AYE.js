import{c3 as $,ew as F,aq as v,ao as p,al as u,dL as m,aX as d,aC as O,ae as b,j as s,m as l,gF as _,o as h,k as g,g8 as j,ey as M,ez as C,ag as S,bA as I,z as K,u as N,eF as P}from"./index-DDxdo46s.js";import{n as R}from"./CollectionFlattener-DBQodO_s.js";import{S as T}from"./MultiOriginJSONSupport-DH-_1jFb.js";import{b as z}from"./OperationalLayer-Be8C9wCF.js";import{j as A}from"./PortalLayer-DwMFmz11.js";import{f as J}from"./RefreshableLayer-DI2uYJsN.js";import{y as V}from"./commonProperties-CLGtlLEy.js";import{j as W,S as w,g as x,d as k}from"./kmlUtils-13VdXg4F.js";import"./portalItemUtils-DGed7QpK.js";var y;let a=y=class extends $.EventedMixin(F(j)){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},u),v(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},u),p(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=i.parent=null;if(t)for(const i of t)i.parent=this,i.layer=this.layer},u),p(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},u)])}initialize(){m(()=>this.networkLink).then(()=>m(()=>this.visible===!0)).then(()=>this.load())}load(e){var i;if(!this.networkLink||this.networkLink.viewFormat)return;const t=e!=null?e.signal:null,r=this._fetchService(((i=this._get("networkLink"))==null?void 0:i.href)??"",t).then(n=>{var c;const L=W(n.sublayers);this.fullExtent=d.fromJSON(L),this.sourceJSON=n;const f=O(b.ofType(y),w(y,n));this.sublayers?this.sublayers.addMany(f):this.sublayers=f,(c=this.layer)==null||c.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return x(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(r=>k(r.data))}};s([l()],a.prototype,"description",void 0),s([l({type:d})],a.prototype,"fullExtent",void 0),s([l()],a.prototype,"id",void 0),s([l({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),s([l({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),s([l({type:b.ofType(a),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),s([l({value:null,json:{read:{source:"name",reader:e=>_(e)}}})],a.prototype,"title",void 0),s([l({value:!0})],a.prototype,"visible",null),s([h("visible",["visibility"])],a.prototype,"readVisible",null),s([l()],a.prototype,"sourceJSON",void 0),s([l()],a.prototype,"layer",void 0),a=y=s([g("esri.layers.support.KMLSublayer")],a);const E=a,q=["kml","xml"];let o=class extends M(J(C(z(A(T(P)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new R({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=S.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([p(()=>this.sublayers,(e,t)=>{t&&t.forEach(r=>{r.parent=null,r.layer=null}),e&&e.forEach(r=>{r.parent=this,r.layer=this})},u),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return w(E,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],i=e.toArray();for(;i.length;){const n=i[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&i.push(...n.sublayers.toArray())),i.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?I(this.url,q)||"KML":e}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=i=>{i.visible&&(t.push(i),i.sublayers&&i.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(K).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,e)),r=k(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent!=null&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const i of r.sublayers.items)t(i),i.visible&&i.fullExtent&&(e!=null?e.union(i.fullExtent):e=i.fullExtent.clone())};return t(this),e}};s([l({readOnly:!0})],o.prototype,"allSublayers",void 0),s([l({type:S})],o.prototype,"outSpatialReference",void 0),s([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),s([l({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),s([l({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),s([l({type:["KML"]})],o.prototype,"operationalLayerType",void 0),s([l({})],o.prototype,"resourceInfo",void 0),s([l({type:b.ofType(E),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),s([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),s([h("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),s([N("sublayers")],o.prototype,"writeSublayers",null),s([l({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),s([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),s([l(V)],o.prototype,"url",void 0),s([l({readOnly:!0})],o.prototype,"visibleSublayers",null),s([l({type:d})],o.prototype,"extent",void 0),s([l()],o.prototype,"fullExtent",null),o=s([g("esri.layers.KMLLayer")],o);const ee=o;export{ee as default};
//# sourceMappingURL=KMLLayer-DiKe8AYE.js.map
