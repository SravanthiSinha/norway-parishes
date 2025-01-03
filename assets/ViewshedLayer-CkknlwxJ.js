import{ey as J,hR as C,j as t,m as s,bt as G,bb as U,h2 as b,hS as X,k as j,hT as k,ae as A,dG as B,ao as L,gE as P,dF as I,hU as K,aX as Q,fJ as E,aR as q,u as W,eH as Y}from"./index-Dqo4rVFT.js";import{c as Z,b as ee}from"./featureReferenceUtils-CK9iDZHb.js";import{c as te}from"./Analysis-5pb_huXD.js";import{S as ie}from"./MultiOriginJSONSupport-BhZrGEJo.js";import{b as se}from"./OperationalLayer-BV_RJk-k.js";import"./vec32-C-ocfarP.js";import"./sphere-D1d02WJR.js";import"./mat3-BPo7zqPd.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-CEUBlVNR.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./boundedPlane-DXxWvPNe.js";import"./lineSegment-D7JizrsD.js";import"./commonProperties-CIQ9XbBG.js";let a=class extends J(k){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return C(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&Z(this.feature,e.feature)}};t([s({type:G,json:{write:!0}})],a.prototype,"observer",void 0),t([s({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],a.prototype,"farDistance",void 0),t([s({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),U(i=>b.normalize(X(i),void 0,!0))],a.prototype,"heading",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"tilt",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],a.prototype,"horizontalFieldOfView",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"verticalFieldOfView",void 0),t([s(ee)],a.prototype,"feature",void 0),t([s({json:{read:!1}})],a.prototype,"isValid",null),a=t([j("esri.analysis.Viewshed")],a);const S=a,F=A.ofType(S);let p=class extends te{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(L(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},P))}get viewsheds(){return this._get("viewsheds")||new F}set viewsheds(e){this._set("viewsheds",I(e,this.viewsheds,F))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const u=this.viewsheds.filter(r=>r.observer!=null),y=u.map(r=>r.observer).toArray(),o=K(y,e);return o.pending!=null?{pending:o.pending,extent:null}:{pending:null,extent:o.geometries.map((r,d)=>{const V=u.at(d);return r!=null&&V!=null?this._computeViewshedExtent(this.viewsheds.at(d),r):null}).filter(r=>r!=null).reduce((r,d)=>re(r,d),null)}}_computeViewshedExtent(e,u){const{farDistance:y,heading:o,tilt:r,horizontalFieldOfView:d,verticalFieldOfView:V}=e,{spatialReference:v}=u,O=d/2,$=V/2,R=y/v.metersPerUnit,T=[b.normalize(o-O),o,b.normalize(o+O)],h=Q.fromPoint(u),g=f=>{const c=T.map(l=>b.normalize(l-f));if(c[0]>c[2]||d===360)return R;const m=c.map(l=>Math.abs(l>180?360-l:l)).reduce((l,x)=>l>x?x:l);return m>90?0:R*Math.cos(E(m))};h.xmax+=g(90),h.xmin-=g(-90),h.ymax+=g(0),h.ymin-=g(180);const w=u.z;if(w!=null){let f=w,c=w;const m=r-90,l=q(m+$,-90,90),x=q(m-$,-90,90),z=v!=null&&v.isGeographic?y:R;f+=z*N(l),c+=z*N(x);const H=M($)*z,_=N(m)*H*(1-M(O));r<90&&(f-=_),r>90&&(c-=_),h.zmax=Math.max(f,w),h.zmin=Math.min(c,w)}return h}clear(){this.viewsheds.removeAll()}};function re(i,e){return i==null?e:e==null?i:i.union(e)}function M(i){return Math.cos(E(i))}function N(i){return Math.sin(E(i))}t([s({type:["viewshed"]})],p.prototype,"type",void 0),t([s({cast:B,type:F,nonNullable:!0})],p.prototype,"viewsheds",null),t([s({readOnly:!0})],p.prototype,"spatialReference",null),t([s()],p.prototype,"_extent",void 0),t([s({readOnly:!0})],p.prototype,"extent",null),t([s({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([j("esri.analysis.ViewshedAnalysis")],p);const D=p;let n=class extends se(ie(Y)){constructor(i){super(i),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new D,this.opacity=1}initialize(){this.addHandles(L(()=>this.source,(i,e)=>{e!=null&&e.parent===this&&(e.parent=null),i!=null&&(i.parent=this)},P))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(i){this.source===i&&(this.source=new D)}get analysis(){return this.source}set analysis(i){this.source=i}get viewsheds(){return this.source.viewsheds}set viewsheds(i){this.source.viewsheds=i}writeViewsheds(i,e,u,y){e.viewsheds=i.filter(o=>o.isValid()).map(o=>o.toJSON(y)).toJSON()}};t([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([s({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),t([s({nonNullable:!0})],n.prototype,"source",void 0),t([s({readOnly:!0})],n.prototype,"spatialReference",null),t([s({readOnly:!0})],n.prototype,"fullExtent",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([s({type:["show","hide"]})],n.prototype,"listMode",void 0),t([s({type:A.ofType(S),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),t([W("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=t([j("esri.layers.ViewshedLayer")],n);const Oe=n;export{Oe as default};
//# sourceMappingURL=ViewshedLayer-CkknlwxJ.js.map
