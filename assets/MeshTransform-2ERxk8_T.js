import{fx as w,eD as N,fy as B,fz as D,fA as k,fB as q,j as s,m as i,k as z,P as C,aQ as I,fC as P,bM as E,cK as l,fD as F,cV as G,fE as H}from"./index-XUmwAfbD.js";import{e as y}from"./mat4f64-CSKppSlJ.js";import{v as d,b as p,x as K}from"./quat-B9gc8IYp.js";import{e as m}from"./quatf64-aQ5IuZRd.js";import{s as Q}from"./vec32-BE12nxNw.js";function a(t=j){return[t[0],t[1],t[2],t[3]]}function c(t,o,n=a()){return Q(n,t),n[3]=o,n}function R(t,o=a()){const n=w(e,t);return v(o,N(d(o,n))),o}function A(t,o,n=a()){return p(e,t,f(t)),p($,o,f(o)),K(e,$,e),v(n,N(d(n,e)))}function S(t,o,n,x=a()){return c(B,t,u),c(D,o,b),c(k,n,g),A(u,b,u),A(u,g,x),x}function W(t){return t}function T(t){return t[3]}function f(t){return q(t[3])}function v(t,o){return t[3]=o,t}const j=[0,0,1,0],e=m(),$=m();a();const u=a(),b=a(),g=a();var h;let r=h=class extends C{constructor(t){super(t),this.translation=I(),this.rotationAxis=P(j),this.rotationAngle=0,this.scale=E(1,1,1)}get rotation(){return c(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=l(t),this.rotationAngle=T(t)}get localMatrix(){const t=y();return p(M,this.rotation,f(this.rotation)),F(t,M,this.translation,this.scale),t}get localMatrixInverse(){return G(y(),this.localMatrix)}equals(t){return this===t||t!=null&&H(this.localMatrix,t.localMatrix)}clone(){const t={translation:l(this.translation),rotationAxis:l(this.rotationAxis),rotationAngle:this.rotationAngle,scale:l(this.scale)};return new h(t)}};s([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"translation",void 0),s([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAxis",void 0),s([i({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAngle",void 0),s([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"scale",void 0),s([i()],r.prototype,"rotation",null),s([i()],r.prototype,"localMatrix",null),s([i()],r.prototype,"localMatrixInverse",null),r=h=s([z("esri.geometry.support.MeshTransform")],r);const M=m(),X=r;export{X as N,S as d,a as j,R as k,W as w,f as z};
//# sourceMappingURL=MeshTransform-2ERxk8_T.js.map
