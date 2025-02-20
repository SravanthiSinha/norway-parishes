import{ez as y,eA as p,bC as u,z as d,U as h,co as c,A as m,eB as S,j as o,m as s,o as f,aX as g,eC as v,eD as n,eE as b,eF as C,eG as G,k as w}from"./index-BLU2cKnj.js";import{S as P}from"./MultiOriginJSONSupport-B22y0seo.js";import{b as _}from"./OperationalLayer-Dim73_Xu.js";import{j as k}from"./PortalLayer-COUJoiul.js";import{f as x}from"./RefreshableLayer-CAMgn8FC.js";import{u as R,d as $,y as j}from"./commonProperties-KlFzDeB4.js";import"./portalItemUtils-DqkYNLL5.js";const F=["atom","xml"],E={base:n,key:"type",typeMap:{"simple-line":v},errorContext:"symbol"},M={base:n,key:"type",typeMap:{"picture-marker":C,"simple-marker":b},errorContext:"symbol"},A={base:n,key:"type",typeMap:{"simple-fill":G},errorContext:"symbol"};let t=class extends y(x(_(k(p(P(S)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{var a;const l=i.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&((a=l.outline)!=null&&a.style.includes("esriSFS"))&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?u(this.url,F)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(d).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await h(m.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:c(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){var r;return((r=this.featureCollections)==null?void 0:r.some(i=>{var l,a;return((l=i.featureSet)==null?void 0:l.geometryType)===e&&((a=i.featureSet.features)==null?void 0:a.length)>0}))??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([f("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:g,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(R)],t.prototype,"id",void 0),o([s($)],t.prototype,"legendEnabled",void 0),o([s({types:E,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:M,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:A,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(j)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([w("esri.layers.GeoRSSLayer")],t);const B=t;export{B as default};
//# sourceMappingURL=GeoRSSLayer-BS23nfBm.js.map
