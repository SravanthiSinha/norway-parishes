import{j as e,m as i,aX as w,ag as y,u as v,k as c,P as k,de as S}from"./index-UqHiE_Ae.js";import{a as r}from"./NetworkElement-DC5_OOOJ.js";var a;let t=a=class extends k{static from(o){return S(a,o)}constructor(o){super(o),this.gdbVersion=null,this.sessionID=null,this.validationType=null,this.validateArea=null,this.validationSet=null,this.outSpatialReference=null}writeOutSR(o,s,l){if(o!=null){const{wkid:n,latestWkid:p,wkt:d,wkt2:u}=o;s[l]=JSON.stringify({wkid:n??void 0,latestWkid:p??void 0,wkt:d??void 0,wkt2:u??void 0})}}};e([i({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),e([i({type:String,json:{write:!0}})],t.prototype,"sessionID",void 0),e([i({type:r.apiValues,json:{type:r.jsonValues,read:r.read,write:r.write}})],t.prototype,"validationType",void 0),e([i({type:w,json:{write:!0}})],t.prototype,"validateArea",void 0),e([i({type:[Object],json:{write:!0}})],t.prototype,"validationSet",void 0),e([i({type:y,json:{write:{allowNull:!0,target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),e([v("outSpatialReference")],t.prototype,"writeOutSR",null),t=a=e([c("esri.rest.networks.support.ValidateNetworkTopologyParameters")],t);const j=t;export{j as default};
//# sourceMappingURL=ValidateNetworkTopologyParameters-BNeJ82Y2.js.map
