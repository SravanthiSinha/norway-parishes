import{fF as w,eG as M,fG as G,fH as I,fI as P,fJ as k,j as s,m as i,k as q,P as B,aN as F,fK as H,bP as z,cN as l,fL as C,cY as D,fM as J}from"./index-DDxdo46s.js";import{e as y}from"./mat4f64-CSKppSlJ.js";import{v as d,b as p,x as K}from"./quat-FupHd5Fh.js";import{e as m}from"./quatf64-aQ5IuZRd.js";import{s as L}from"./vec32-CLt-8tHl.js";function a(t=j){return[t[0],t[1],t[2],t[3]]}function c(t,o,n=a()){return L(n,t),n[3]=o,n}function R(t,o=a()){const n=w(e,t);return v(o,M(d(o,n))),o}function A(t,o,n=a()){return p(e,t,f(t)),p($,o,f(o)),K(e,$,e),v(n,M(d(n,e)))}function S(t,o,n,x=a()){return c(G,t,u),c(I,o,N),c(P,n,b),A(u,N,u),A(u,b,x),x}function V(t){return t}function T(t){return t[3]}function f(t){return k(t[3])}function v(t,o){return t[3]=o,t}const j=[0,0,1,0],e=m(),$=m();a();const u=a(),N=a(),b=a();var h;let r=h=class extends B{constructor(t){super(t),this.translation=F(),this.rotationAxis=H(j),this.rotationAngle=0,this.scale=z(1,1,1)}get rotation(){return c(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=l(t),this.rotationAngle=T(t)}get localMatrix(){const t=y();return p(g,this.rotation,f(this.rotation)),C(t,g,this.translation,this.scale),t}get localMatrixInverse(){return D(y(),this.localMatrix)}equals(t){return this===t||t!=null&&J(this.localMatrix,t.localMatrix)}clone(){const t={translation:l(this.translation),rotationAxis:l(this.rotationAxis),rotationAngle:this.rotationAngle,scale:l(this.scale)};return new h(t)}};s([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"translation",void 0),s([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAxis",void 0),s([i({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAngle",void 0),s([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"scale",void 0),s([i()],r.prototype,"rotation",null),s([i()],r.prototype,"localMatrix",null),s([i()],r.prototype,"localMatrixInverse",null),r=h=s([q("esri.geometry.support.MeshTransform")],r);const g=m(),W=r;export{W as N,S as d,a as j,R as k,V as w,f as z};
//# sourceMappingURL=MeshTransform-ChO1WCVr.js.map
