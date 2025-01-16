import{ey as y,ez as p,bA as u,z as d,U as h,cn as c,A as m,j as o,m as s,o as S,aX as f,k as g,eA as n,eB as v,eC as b,eD as C,eE as G,eF as w}from"./index-CyZqSx7I.js";import{S as P}from"./MultiOriginJSONSupport-Dkp6reEM.js";import{b as _}from"./OperationalLayer-CN-9hwyk.js";import{j as k}from"./PortalLayer-CsB9XJVP.js";import{f as x}from"./RefreshableLayer-BHvEEOWn.js";import{u as R,d as $,y as j}from"./commonProperties-D3jRdA_I.js";import"./portalItemUtils-DZL-jnzT.js";const F=["atom","xml"],E={base:n,key:"type",typeMap:{"simple-line":v},errorContext:"symbol"},A={base:n,key:"type",typeMap:{"picture-marker":b,"simple-marker":C},errorContext:"symbol"},M={base:n,key:"type",typeMap:{"simple-fill":G},errorContext:"symbol"};let t=class extends y(x(_(k(p(P(w)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{var a;const l=i.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&((a=l.outline)!=null&&a.style.includes("esriSFS"))&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?u(this.url,F)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(d).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await h(m.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:c(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){var r;return((r=this.featureCollections)==null?void 0:r.some(i=>{var l,a;return((l=i.featureSet)==null?void 0:l.geometryType)===e&&((a=i.featureSet.features)==null?void 0:a.length)>0}))??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([S("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:f,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(R)],t.prototype,"id",void 0),o([s($)],t.prototype,"legendEnabled",void 0),o([s({types:E,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:A,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:M,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(j)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([g("esri.layers.GeoRSSLayer")],t);const B=t;export{B as default};
//# sourceMappingURL=GeoRSSLayer-CleTGoaj.js.map
