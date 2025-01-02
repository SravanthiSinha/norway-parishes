import{c0 as L,ew as _,au as v,as as y,ap as u,dK as m,a_ as d,aG as O,ae as b,j as r,m as l,gw as j,o as h,k as g,f9 as F,ag as S,d9 as M,z as C,u as I}from"./index-Vdm0PCas.js";import{n as K}from"./CollectionFlattener-CN8cPTqs.js";import{S as N}from"./MultiOriginJSONSupport-DR0AlfNW.js";import{f as P}from"./Layer-vfI2MkUG.js";import{l as R}from"./BlendLayer-BlWZsEiI.js";import{b as T}from"./OperationalLayer-D7ZoxskL.js";import{j as z}from"./PortalLayer-BYDxwIVB.js";import{f as J}from"./RefreshableLayer-D3dX97bd.js";import{t as A}from"./ScaleRangeLayer-D6kYzICO.js";import{y as V}from"./commonProperties-DKi4uAHT.js";import{j as W,S as w,g as x,d as k}from"./kmlUtils-CgPMD7Qm.js";import"./jsonUtils-Cw0uK1Oy.js";import"./parser-D2R35t-Z.js";import"./utils-HNoWO9hO.js";import"./portalItemUtils-bWZxvl2b.js";import"./ElevationInfo-8bL8CsLE.js";var p;let a=p=class extends L.EventedMixin(_(F)){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},u),v(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},u),y(()=>this.sublayers,(t,s)=>{if(s)for(const i of s)i.layer=i.parent=null;if(t)for(const i of t)i.parent=this,i.layer=this.layer},u),y(()=>this.layer,t=>{if(this.sublayers)for(const s of this.sublayers)s.layer=t},u)])}initialize(){m(()=>this.networkLink).then(()=>m(()=>this.visible===!0)).then(()=>this.load())}load(e){var i;if(!this.networkLink||this.networkLink.viewFormat)return;const t=e!=null?e.signal:null,s=this._fetchService(((i=this._get("networkLink"))==null?void 0:i.href)??"",t).then(n=>{var c;const $=W(n.sublayers);this.fullExtent=d.fromJSON($),this.sourceJSON=n;const f=O(b.ofType(p),w(p,n));this.sublayers?this.sublayers.addMany(f):this.sublayers=f,(c=this.layer)==null||c.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return x(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(s=>k(s.data))}};r([l()],a.prototype,"description",void 0),r([l({type:d})],a.prototype,"fullExtent",void 0),r([l()],a.prototype,"id",void 0),r([l({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),r([l({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),r([l({type:b.ofType(a),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),r([l({value:null,json:{read:{source:"name",reader:e=>j(e)}}})],a.prototype,"title",void 0),r([l({value:!0})],a.prototype,"visible",null),r([h("visible",["visibility"])],a.prototype,"readVisible",null),r([l()],a.prototype,"sourceJSON",void 0),r([l()],a.prototype,"layer",void 0),a=p=r([g("esri.layers.support.KMLSublayer")],a);const E=a,G=["kml","xml"];let o=class extends R(J(A(T(z(N(P)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new K({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=S.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([y(()=>this.sublayers,(e,t)=>{t&&t.forEach(s=>{s.parent=null,s.layer=null}),e&&e.forEach(s=>{s.parent=this,s.layer=this})},u),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,s){return w(E,t,s,this._visibleFolders)}writeSublayers(e,t){const s=[],i=e.toArray();for(;i.length;){const n=i[0];n.networkLink||(n.visible&&s.push(n.id),n.sublayers&&i.push(...n.sublayers.toArray())),i.shift()}t.visibleFolders=s}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?M(this.url,G)||"KML":e}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],s=i=>{i.visible&&(t.push(i),i.sublayers&&i.sublayers.forEach(s))};return e&&e.forEach(s),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(C).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,e)),s=k(t.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent!=null&&(e=this.extent.clone());const t=s=>{if(s.sublayers)for(const i of s.sublayers.items)t(i),i.visible&&i.fullExtent&&(e!=null?e.union(i.fullExtent):e=i.fullExtent.clone())};return t(this),e}};r([l({readOnly:!0})],o.prototype,"allSublayers",void 0),r([l({type:S})],o.prototype,"outSpatialReference",void 0),r([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([l({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),r([l({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),r([l({type:["KML"]})],o.prototype,"operationalLayerType",void 0),r([l({})],o.prototype,"resourceInfo",void 0),r([l({type:b.ofType(E),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),r([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),r([h("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),r([I("sublayers")],o.prototype,"writeSublayers",null),r([l({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),r([l(V)],o.prototype,"url",void 0),r([l({readOnly:!0})],o.prototype,"visibleSublayers",null),r([l({type:d})],o.prototype,"extent",void 0),r([l()],o.prototype,"fullExtent",null),o=r([g("esri.layers.KMLLayer")],o);const ae=o;export{ae as default};
//# sourceMappingURL=KMLLayer-Bz2_-FHQ.js.map