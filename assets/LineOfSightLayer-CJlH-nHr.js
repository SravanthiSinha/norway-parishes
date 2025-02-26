import{ex as w,M as _,an as P,hT as y,j as t,m as i,by as O,gP as $,k as h,hS as H,ao as j,gH as L,ae as c,dG as R,il as C,f0 as F,im as M,io as N,dH as V,eB as k}from"./index-U3f91iFJ.js";import{c as B}from"./Analysis-DCAlVtzV.js";import{c as E,b as I}from"./featureReferenceUtils-B7IgYeHr.js";import{j as f}from"./persistable-CI7wex09.js";import{i as G}from"./elevationInfoUtils-DAB3KFpN.js";import{S as D}from"./MultiOriginJSONSupport-BnxMaCt1.js";import{b as J}from"./OperationalLayer-DKdcF5P4.js";import"./vec32-Cd65lPdo.js";import"./sphere-B2CYvzBG.js";import"./mat3-DH4oy_om.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-DeGlxiOQ.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./boundedPlane-BHd_zGjj.js";import"./lineSegment-BvLzp2MD.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./uuid-Cl5lrJ4c.js";import"./resourceExtension-Cv6tN5pp.js";import"./commonProperties-CwULv9TP.js";let a=class extends w(_(P)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&E(this.feature,e.feature)}};t([i({type:O,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),t([i({type:$}),f()],a.prototype,"elevationInfo",void 0),t([i(I)],a.prototype,"feature",void 0),a=t([h("esri.analysis.LineOfSightAnalysisObserver")],a);const S=a;let l=class extends w(H){constructor(s){super(s),this.position=null,this.elevationInfo=null,this.feature=null}equals(s){return y(this.position,s.position)&&y(this.elevationInfo,s.elevationInfo)&&E(this.feature,s.feature)}};t([i({type:O}),f()],l.prototype,"position",void 0),t([i({type:$}),f()],l.prototype,"elevationInfo",void 0),t([i(I)],l.prototype,"feature",void 0),l=t([h("esri.analysis.LineOfSightAnalysisTarget")],l);const z=l,g=c.ofType(z);let o=class extends B{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(j(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},L))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",R(e,this.targets,g))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var b;const e=this.spatialReference;if(((b=this.observer)==null?void 0:b.position)==null||e==null)return null;const m=p=>G(p.position,p.elevationInfo)==="absolute-height",n=this.observer.position,v=C(n.x,n.y,n.z,n.x,n.y,n.z);for(const p of this.targets)if(p.position!=null){const u=F(p.position,e);if(u.pending!=null)return{pending:u.pending,extent:null};if(u.geometry!=null){const{x:q,y:A,z:T}=u.geometry;M(v,[q,A,T])}}const d=N(v,e);return m(this.observer)&&this.targets.every(m)||(d.zmin=void 0,d.zmax=void 0),{pending:null,extent:d}}clear(){this.observer=null,this.targets.removeAll()}};t([i({type:["line-of-sight"]})],o.prototype,"type",void 0),t([i({type:S,json:{read:!0,write:!0}})],o.prototype,"observer",void 0),t([i({cast:V,type:g,nonNullable:!0,json:{read:!0,write:!0}})],o.prototype,"targets",null),t([i({value:null,readOnly:!0})],o.prototype,"extent",void 0),t([i({readOnly:!0})],o.prototype,"spatialReference",null),t([i({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",null),o=t([h("esri.analysis.LineOfSightAnalysis")],o);const x=o,K=c.ofType(z);let r=class extends J(D(k)){constructor(s){super(s),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new x,this.opacity=1}initialize(){this.addHandles(j(()=>this.analysis,(s,e)=>{e!=null&&e.parent===this&&(e.parent=null),s!=null&&(s.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var s;return(s=this.analysis)==null?void 0:s.observer}set observer(s){const{analysis:e}=this;e&&(e.observer=s)}get targets(){return this.analysis!=null?this.analysis.targets:new c}set targets(s){var e;R(s,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(s){this.analysis===s&&(this.analysis=new x)}};t([i({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t([i({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),t([i({type:S,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null),t([i({type:K,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"targets",null),t([i({nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),t([i({readOnly:!0})],r.prototype,"fullExtent",null),t([i({readOnly:!0})],r.prototype,"spatialReference",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),t([i({type:["show","hide"]})],r.prototype,"listMode",void 0),r=t([h("esri.layers.LineOfSightLayer")],r);const ve=r;export{ve as default};
//# sourceMappingURL=LineOfSightLayer-CJlH-nHr.js.map
