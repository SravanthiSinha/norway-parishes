import{aw as i,j as s,m as n,k as p,I as l}from"./index-DhfeYpQB.js";import{S as y}from"./MultiOriginJSONSupport-BQIO3hW2.js";import{f as u}from"./Layer-BS17sfSP.js";import{j as d}from"./PortalLayer-BUIfIK69.js";import"./portalItemUtils-Cdx2zb1g.js";let e=class extends d(y(u)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{i(()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";t&&(a+=" "+t),o(new l("layer:unknown-layer-type",a,{layerType:t}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};s([n({readOnly:!0})],e.prototype,"resourceInfo",void 0),s([n({type:["show","hide"]})],e.prototype,"listMode",void 0),s([n({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=s([p("esri.layers.UnknownLayer")],e);const I=e;export{I as default};
//# sourceMappingURL=UnknownLayer-BCmrI0VJ.js.map
