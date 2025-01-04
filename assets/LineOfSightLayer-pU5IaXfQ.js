import{ew as w,O as _,an as F,hR as y,j as e,m as s,bw as O,gK as $,k as h,hT as P,ae as c,dG as k,ao as j,gE as L,dF as R,ik as C,e$ as H,il as N,im as V,eF as G}from"./index-CJT1kG3U.js";import{c as K}from"./Analysis-B4E-DWat.js";import{c as E,b as I}from"./featureReferenceUtils-DSySuxBD.js";import{j as f}from"./persistable-CDXwhxUX.js";import{i as M}from"./elevationInfoUtils-D5wiLTcH.js";import{S as B}from"./MultiOriginJSONSupport-CLxlAl4j.js";import{b as D}from"./OperationalLayer-DbosLJBg.js";import"./vec32-BEXyJ64g.js";import"./sphere-D0Z6N_aD.js";import"./mat3-C5rmyjBz.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-BpDDhas-.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./boundedPlane-DarFXPcB.js";import"./lineSegment-CnXvUKe8.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./uuid-Cl5lrJ4c.js";import"./resourceExtension-C2gZ4KGt.js";import"./commonProperties-CoeojjbU.js";let a=class extends w(_(F)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return y(this.position,t.position)&&y(this.elevationInfo,t.elevationInfo)&&E(this.feature,t.feature)}};e([s({type:O,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),e([s({type:$}),f()],a.prototype,"elevationInfo",void 0),e([s(I)],a.prototype,"feature",void 0),a=e([h("esri.analysis.LineOfSightAnalysisObserver")],a);const S=a;let l=class extends w(P){constructor(i){super(i),this.position=null,this.elevationInfo=null,this.feature=null}equals(i){return y(this.position,i.position)&&y(this.elevationInfo,i.elevationInfo)&&E(this.feature,i.feature)}};e([s({type:O}),f()],l.prototype,"position",void 0),e([s({type:$}),f()],l.prototype,"elevationInfo",void 0),e([s(I)],l.prototype,"feature",void 0),l=e([h("esri.analysis.LineOfSightAnalysisTarget")],l);const z=l,g=c.ofType(z);let o=class extends K{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(j(()=>this._computeExtent(),t=>{(t==null?void 0:t.pending)==null&&this._set("extent",t!=null?t.extent:null)},L))}get targets(){return this._get("targets")||new g}set targets(t){this._set("targets",R(t,this.targets,g))}get spatialReference(){var t;return((t=this.observer)==null?void 0:t.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var t;return[(t=this.observer)==null?void 0:t.position]}async waitComputeExtent(){const t=this._computeExtent();return t!=null?t.pending:Promise.resolve()}_computeExtent(){var b;const t=this.spatialReference;if(((b=this.observer)==null?void 0:b.position)==null||t==null)return null;const m=p=>M(p.position,p.elevationInfo)==="absolute-height",n=this.observer.position,v=C(n.x,n.y,n.z,n.x,n.y,n.z);for(const p of this.targets)if(p.position!=null){const u=H(p.position,t);if(u.pending!=null)return{pending:u.pending,extent:null};if(u.geometry!=null){const{x:q,y:A,z:T}=u.geometry;N(v,[q,A,T])}}const d=V(v,t);return m(this.observer)&&this.targets.every(m)||(d.zmin=void 0,d.zmax=void 0),{pending:null,extent:d}}clear(){this.observer=null,this.targets.removeAll()}};e([s({type:["line-of-sight"]})],o.prototype,"type",void 0),e([s({type:S,json:{read:!0,write:!0}})],o.prototype,"observer",void 0),e([s({cast:k,type:g,nonNullable:!0,json:{read:!0,write:!0}})],o.prototype,"targets",null),e([s({value:null,readOnly:!0})],o.prototype,"extent",void 0),e([s({readOnly:!0})],o.prototype,"spatialReference",null),e([s({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",null),o=e([h("esri.analysis.LineOfSightAnalysis")],o);const x=o,J=c.ofType(z);let r=class extends D(B(G)){constructor(i){super(i),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new x,this.opacity=1}initialize(){this.addHandles(j(()=>this.analysis,(i,t)=>{t!=null&&t.parent===this&&(t.parent=null),i!=null&&(i.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var i;return(i=this.analysis)==null?void 0:i.observer}set observer(i){const{analysis:t}=this;t&&(t.observer=i)}get targets(){return this.analysis!=null?this.analysis.targets:new c}set targets(i){var t;R(i,(t=this.analysis)==null?void 0:t.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(i){this.analysis===i&&(this.analysis=new x)}};e([s({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),e([s({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),e([s({type:S,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null),e([s({type:J,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"targets",null),e([s({nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),e([s({readOnly:!0})],r.prototype,"fullExtent",null),e([s({readOnly:!0})],r.prototype,"spatialReference",null),e([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),e([s({type:["show","hide"]})],r.prototype,"listMode",void 0),r=e([h("esri.layers.LineOfSightLayer")],r);const vt=r;export{vt as default};
//# sourceMappingURL=LineOfSightLayer-pU5IaXfQ.js.map
