import{O as p,P as m,Q as l,j as s,m as i,o as d,u,k as c}from"./index-Vdm0PCas.js";import{p as y}from"./FeatureTemplate-CrKJ3X8q.js";let t=class extends p(m){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const e of Object.keys(o))r[e]=l(o[e]);return r}writeDomains(o,r){var a;const e={};for(const n of Object.keys(o))o[n]&&(e[n]=(a=o[n])==null?void 0:a.toJSON());r.domains=e}};s([i({json:{write:!0}})],t.prototype,"id",void 0),s([i({json:{write:!0}})],t.prototype,"name",void 0),s([i({json:{write:!0}})],t.prototype,"domains",void 0),s([d("domains")],t.prototype,"readDomains",null),s([u("domains")],t.prototype,"writeDomains",null),s([i({type:[y],json:{write:!0}})],t.prototype,"templates",void 0),t=s([c("esri.layers.support.FeatureType")],t);const w=t;export{w as n};
//# sourceMappingURL=FeatureType-Dr0DsKCX.js.map
