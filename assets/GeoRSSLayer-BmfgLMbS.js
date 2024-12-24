import{d9 as p,z as y,U as u,ck as m,A as d,j as o,m as i,o as h,a_ as c,k as f,ey as n,ez as S,eA as g,eB as v,eC as b}from"./index-DhfeYpQB.js";import{S as C}from"./MultiOriginJSONSupport-BQIO3hW2.js";import{f as G}from"./Layer-BS17sfSP.js";import{l as _}from"./BlendLayer-8ILuHHxa.js";import{b as k}from"./OperationalLayer-DsG_35oZ.js";import{j as w}from"./PortalLayer-BUIfIK69.js";import{f as P}from"./RefreshableLayer-CMG66MdJ.js";import{t as x}from"./ScaleRangeLayer-Ca0oKn-n.js";import{u as R,d as $,y as j}from"./commonProperties-GP1ewpRE.js";import"./jsonUtils-BIE9HkYy.js";import"./parser-7K1TO6Ko.js";import"./utils-BZRJVqKV.js";import"./portalItemUtils-Cdx2zb1g.js";import"./ElevationInfo-foQPpRIG.js";const F=["atom","xml"],E={base:n,key:"type",typeMap:{"simple-line":S},errorContext:"symbol"},M={base:n,key:"type",typeMap:{"picture-marker":g,"simple-marker":v},errorContext:"symbol"},A={base:n,key:"type",typeMap:{"simple-fill":b},errorContext:"symbol"};let t=class extends _(P(k(w(x(C(G)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(s=>{var a;const l=s.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&((a=l.outline)!=null&&a.style.includes("esriSFS"))&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?p(this.url,F)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(y).then(()=>this._fetchService(r)).then(s=>{this.read(s,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:s}=await u(d.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:m(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return s}_hasGeometry(e){var r;return((r=this.featureCollections)==null?void 0:r.some(s=>{var l,a;return((l=s.featureSet)==null?void 0:l.geometryType)===e&&((a=s.featureSet.features)==null?void 0:a.length)>0}))??!1}};o([i()],t.prototype,"description",void 0),o([i()],t.prototype,"featureCollections",void 0),o([h("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([i({type:c,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([i(R)],t.prototype,"id",void 0),o([i($)],t.prototype,"legendEnabled",void 0),o([i({types:E,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([i({type:["show","hide"]})],t.prototype,"listMode",void 0),o([i({types:M,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([i({types:A,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([i({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([i(j)],t.prototype,"url",void 0),o([i({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([f("esri.layers.GeoRSSLayer")],t);const V=t;export{V as default};
//# sourceMappingURL=GeoRSSLayer-BmfgLMbS.js.map
