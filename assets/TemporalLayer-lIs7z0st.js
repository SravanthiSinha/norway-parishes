import{j as t,m as i,p as f,o as a,k as u,n as d}from"./index-j6yFHuRy.js";import{a as y}from"./commonProperties-B1Shr_B6.js";import{l as m,d as O,e as c}from"./TimeInfo-3bdrlnRg.js";const w={type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation",layerContainerTypes:y}}},h=l=>{let e=class extends l{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(o,p){const r=p.timeInfo.exportOptions;if(!r)return null;const n=r.timeOffset,s=c.fromJSON(r.timeOffsetUnits);return n&&s?new m({value:n,unit:s}):null}set timeInfo(o){d(o,this.fieldsIndex),this._set("timeInfo",o)}};return t([i({type:f,json:{write:!1}})],e.prototype,"timeExtent",void 0),t([i({type:m})],e.prototype,"timeOffset",void 0),t([a("service","timeOffset",["timeInfo.exportOptions"])],e.prototype,"readOffset",null),t([i({value:null,type:O,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],e.prototype,"timeInfo",null),t([i(w)],e.prototype,"useViewTime",void 0),e=t([u("esri.layers.mixins.TemporalLayer")],e),e};export{w as f,h as l};
//# sourceMappingURL=TemporalLayer-lIs7z0st.js.map
