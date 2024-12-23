import{bM as E,cK as S,bo as en,cU as an,cV as cn,cW as un,cX as gn,cY as V,aQ as P,s as bn}from"./index-Cj37dcSI.js";import{s as F,w as fn}from"./sphere-7Fz3moRm.js";import{e as W}from"./mat4f64-CSKppSlJ.js";import{s as u,g as l,u as p,o as M,p as ln,r as h,K as pn,P as $,c as H,H as _,E as m,A as U,j as B}from"./vec32-ClhtQEtD.js";import{v as dn,A as D,M as mn}from"./lineSegment-MYmPY_qq.js";import{M as A,D as $n,h as hn,P as Y,c as e,U as In,x as Pn,q as Mn,w as wn,z as X,H as Nn,f as w,O as N,y as vn}from"./plane-KpyQKK2v.js";const O=()=>bn.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class An{constructor(){this.plane=A(),this.origin=P(),this.basis1=P(),this.basis2=P()}}const Tn=An;function I(n=sn){return{plane:A(n.plane),origin:S(n.origin),basis1:S(n.basis1),basis2:S(n.basis2)}}function yn(n,t,i){const o=Bn.get();return o.origin=n,o.basis1=t,o.basis2=i,o.plane=$n(0,0,0,0),y(o),o}function T(n,t=I()){return G(n.origin,n.basis1,n.basis2,t)}function xn(n,t){u(t.origin,n.origin),u(t.basis1,n.basis1),u(t.basis2,n.basis2),hn(t.plane,n.plane)}function G(n,t,i,o=I()){return u(o.origin,n),u(o.basis1,t),u(o.basis2,i),y(o),Kn(o,"fromValues()"),o}function y(n){Y(n.basis2,n.basis1,n.origin,n.plane)}function L(n,t,i){n!==i&&T(n,i);const o=l(e.get(),f(n),t);return p(i.origin,i.origin,o),i.plane[3]-=t,i}function En(n,t,i){return Q(t,i),L(i,z(n,n.origin),i),i}function Sn(n,t){const i=n.basis1[0],o=n.basis2[1],[r,s]=n.origin;return en(r-i,s-o,r+i,s+o,t)}function Q(n,t=I()){const i=(n[2]-n[0])/2,o=(n[3]-n[1])/2;return M(t.origin,n[0]+i,n[1]+o,0),M(t.basis1,i,0,0),M(t.basis2,0,o,0),In(0,0,1,0,t.plane),t}function k(n,t,i){return!!Pn(n.plane,t,i)&&on(n,i)}function Vn(n,t,i){if(k(n,t,i))return i;const o=Z(n,t,e.get());return p(i,t.origin,l(e.get(),t.direction,ln(t.origin,o)/h(t.direction))),i}function Z(n,t,i){const o=v.get();rn(n,t,o,v.get());let r=Number.POSITIVE_INFINITY;for(const s of K){const a=C(n,s,x.get()),g=e.get();if(Mn(o,a,g)){const c=pn(e.get(),t.origin,g),b=Math.abs(an($(t.direction,c)));b<r&&(r=b,u(i,g))}}return r===Number.POSITIVE_INFINITY?J(n,t,i):i}function _n(n,t){return(t-n)/t}function J(n,t,i){if(k(n,t,i))return i;const o=v.get(),r=v.get();rn(n,t,o,r);let s=Number.POSITIVE_INFINITY;for(const a of K){const g=C(n,a,x.get()),c=e.get();if(wn(o,g,c)){const b=fn(t,c);if(!X(r,c))continue;b<s&&(s=b,u(i,c))}}return q(n,t.origin)<s&&nn(n,t.origin,i),i}function nn(n,t,i){const o=Nn(n.plane,t,e.get()),r=D(R(n,n.basis1),o,-1,1,e.get()),s=D(R(n,n.basis2),o,-1,1,e.get());return H(i,p(e.get(),r,s),n.origin),i}function tn(n,t,i){const{origin:o,basis1:r,basis2:s}=n,a=H(e.get(),t,o),g=w(r,a),c=w(s,a),b=w(f(n),a);return M(i,g,c,b)}function q(n,t){const i=tn(n,t,e.get()),{basis1:o,basis2:r}=n,s=h(o),a=h(r),g=Math.max(Math.abs(i[0])-s,0),c=Math.max(Math.abs(i[1])-a,0),b=i[2];return g*g+c*c+b*b}function On(n,t){return Math.sqrt(q(n,t))}function jn(n,t){let i=Number.NEGATIVE_INFINITY;for(const o of K){const r=C(n,o,x.get()),s=mn(r,t);s>i&&(i=s)}return Math.sqrt(i)}function Yn(n,t){return X(n.plane,t)&&on(n,t)}function Fn(n,t,i,o){return Cn(n,i,o)}function z(n,t){const i=-n.plane[3];return w(f(n),t)-i}function Hn(n,t,i,o){const r=z(n,t),s=l(Un,f(n),i-r);return p(o,t,s),o}function kn(n,t){return _(n.basis1,t.basis1)&&_(n.basis2,t.basis2)&&_(n.origin,t.origin)}function qn(n,t,i){return n!==i&&T(n,i),cn(d,t),un(d,d),m(i.basis1,n.basis1,d),m(i.basis2,n.basis2,d),m(N(i.plane),N(n.plane),d),m(i.origin,n.origin,t),vn(i.plane,i.plane,i.origin),i}function zn(n,t,i,o){return n!==o&&T(n,o),gn(j,t,i),m(o.basis1,n.basis1,j),m(o.basis2,n.basis2,j),y(o),o}function f(n){return N(n.plane)}function Cn(n,t,i){switch(t){case V.X:u(i,n.basis1),U(i,i);break;case V.Y:u(i,n.basis2),U(i,i);break;case V.Z:u(i,f(n))}return i}function on(n,t){const i=H(e.get(),t,n.origin),o=B(n.basis1),r=B(n.basis2),s=$(n.basis1,i),a=$(n.basis2,i);return-s-o<0&&s-o<0&&-a-r<0&&a-r<0}function R(n,t){const i=x.get();return u(i.origin,n.origin),u(i.vector,t),i}function C(n,t,i){const{basis1:o,basis2:r,origin:s}=n,a=l(e.get(),o,t.origin[0]),g=l(e.get(),r,t.origin[1]);p(i.origin,a,g),p(i.origin,i.origin,s);const c=l(e.get(),o,t.direction[0]),b=l(e.get(),r,t.direction[1]);return l(i.vector,p(c,c,b),2),i}function Kn(n,t){Math.abs($(n.basis1,n.basis2)/(h(n.basis1)*h(n.basis2)))>1e-6&&O().warn(t,"Provided basis vectors are not perpendicular"),Math.abs($(n.basis1,f(n)))>1e-6&&O().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-$(f(n),n.origin)-n.plane[3])>1e-6&&O().warn(t,"Plane offset is not consistent with plane origin")}function rn(n,t,i,o){const r=f(n);Y(r,t.direction,t.origin,i),Y(N(i),r,t.origin,o)}const sn={plane:A(),origin:E(0,0,0),basis1:E(1,0,0),basis2:E(0,1,0)},v=new F(A),x=new F(dn),Un=P(),Bn=new F(()=>I()),K=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],d=W(),j=W(),Qn=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:Tn,altitudeAt:z,axisAt:Fn,cameraFrustumCoverage:_n,closestPoint:J,closestPointOnSilhouette:Z,copy:T,copyWithoutVerify:xn,create:I,distance:On,distance2:q,distanceToSilhouette:jn,elevate:L,equals:kn,extrusionContainsPoint:Yn,fromAABoundingRect:Q,fromValues:G,getExtent:Sn,intersectRay:k,intersectRayClosestSilhouette:Vn,normal:f,projectPoint:nn,projectPointLocal:tn,rotate:zn,setAltitudeAt:Hn,setExtent:En,transform:qn,up:sn,updateUnboundedPlane:y,wrap:yn},Symbol.toStringTag,{value:"Module"}));export{G as J,y as K,I as W,T as Z,Qn as k};
//# sourceMappingURL=boundedPlane-DiVwQgNB.js.map
