import{bR as x,cO as E,s as en,cY as an,cZ as cn,aN as M,c_ as un,bt as gn,c$ as bn,d0 as O}from"./index-BvuY3ppR.js";import{s as F,w as fn}from"./sphere-gXczQNeg.js";import{e as Z}from"./mat4f64-CSKppSlJ.js";import{s as u,P as h,r as I,E as m,g as l,u as p,c as H,o as N,p as ln,H as S,K as pn,j as B,A as D}from"./vec32-DyxqxkTQ.js";import{A as K,M as dn,v as mn}from"./lineSegment-BTOPbMf5.js";import{M as A,P as Y,D as hn,O as $,y as In,c as e,f as w,H as Pn,x as Mn,U as Nn,z as G,h as wn,q as $n,w as vn}from"./plane-CvSgrFmE.js";const V=()=>en.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class An{constructor(){this.plane=A(),this.origin=M(),this.basis1=M(),this.basis2=M()}}const Tn=An;function P(n=sn){return{plane:A(n.plane),origin:E(n.origin),basis1:E(n.basis1),basis2:E(n.basis2)}}function yn(n,t,i){const o=Dn.get();return o.origin=n,o.basis1=t,o.basis2=i,o.plane=hn(0,0,0,0),y(o),o}function T(n,t=P()){return L(n.origin,n.basis1,n.basis2,t)}function _n(n,t){u(t.origin,n.origin),u(t.basis1,n.basis1),u(t.basis2,n.basis2),wn(t.plane,n.plane)}function L(n,t,i,o=P()){return u(o.origin,n),u(o.basis1,t),u(o.basis2,i),y(o),Rn(o,"fromValues()"),o}function y(n){Y(n.basis2,n.basis1,n.origin,n.plane)}function W(n,t,i){n!==i&&T(n,i);const o=l(e.get(),f(n),t);return p(i.origin,i.origin,o),i.plane[3]-=t,i}function xn(n,t,i){return X(t,i),W(i,z(n,n.origin),i),i}function En(n,t){const i=n.basis1[0],o=n.basis2[1],[r,s]=n.origin;return gn(r-i,s-o,r+i,s+o,t)}function X(n,t=P()){const i=(n[2]-n[0])/2,o=(n[3]-n[1])/2;return N(t.origin,n[0]+i,n[1]+o,0),N(t.basis1,i,0,0),N(t.basis2,0,o,0),Nn(0,0,1,0,t.plane),t}function k(n,t,i){return!!Mn(n.plane,t,i)&&on(n,i)}function On(n,t,i){if(k(n,t,i))return i;const o=J(n,t,e.get());return p(i,t.origin,l(e.get(),t.direction,ln(t.origin,o)/I(t.direction))),i}function J(n,t,i){const o=v.get();rn(n,t,o,v.get());let r=Number.POSITIVE_INFINITY;for(const s of R){const a=C(n,s,_.get()),g=e.get();if($n(o,a,g)){const c=pn(e.get(),t.origin,g),b=Math.abs(bn(h(t.direction,c)));b<r&&(r=b,u(i,g))}}return r===Number.POSITIVE_INFINITY?Q(n,t,i):i}function Sn(n,t){return(t-n)/t}function Q(n,t,i){if(k(n,t,i))return i;const o=v.get(),r=v.get();rn(n,t,o,r);let s=Number.POSITIVE_INFINITY;for(const a of R){const g=C(n,a,_.get()),c=e.get();if(vn(o,g,c)){const b=fn(t,c);if(!G(r,c))continue;b<s&&(s=b,u(i,c))}}return q(n,t.origin)<s&&nn(n,t.origin,i),i}function nn(n,t,i){const o=Pn(n.plane,t,e.get()),r=K(U(n,n.basis1),o,-1,1,e.get()),s=K(U(n,n.basis2),o,-1,1,e.get());return H(i,p(e.get(),r,s),n.origin),i}function tn(n,t,i){const{origin:o,basis1:r,basis2:s}=n,a=H(e.get(),t,o),g=w(r,a),c=w(s,a),b=w(f(n),a);return N(i,g,c,b)}function q(n,t){const i=tn(n,t,e.get()),{basis1:o,basis2:r}=n,s=I(o),a=I(r),g=Math.max(Math.abs(i[0])-s,0),c=Math.max(Math.abs(i[1])-a,0),b=i[2];return g*g+c*c+b*b}function Vn(n,t){return Math.sqrt(q(n,t))}function jn(n,t){let i=Number.NEGATIVE_INFINITY;for(const o of R){const r=C(n,o,_.get()),s=dn(r,t);s>i&&(i=s)}return Math.sqrt(i)}function Yn(n,t){return G(n.plane,t)&&on(n,t)}function Fn(n,t,i,o){return Cn(n,i,o)}function z(n,t){const i=-n.plane[3];return w(f(n),t)-i}function Hn(n,t,i,o){const r=z(n,t),s=l(Bn,f(n),i-r);return p(o,t,s),o}function kn(n,t){return S(n.basis1,t.basis1)&&S(n.basis2,t.basis2)&&S(n.origin,t.origin)}function qn(n,t,i){return n!==i&&T(n,i),an(d,t),cn(d,d),m(i.basis1,n.basis1,d),m(i.basis2,n.basis2,d),m($(i.plane),$(n.plane),d),m(i.origin,n.origin,t),In(i.plane,i.plane,i.origin),i}function zn(n,t,i,o){return n!==o&&T(n,o),un(j,t,i),m(o.basis1,n.basis1,j),m(o.basis2,n.basis2,j),y(o),o}function f(n){return $(n.plane)}function Cn(n,t,i){switch(t){case O.X:u(i,n.basis1),D(i,i);break;case O.Y:u(i,n.basis2),D(i,i);break;case O.Z:u(i,f(n))}return i}function on(n,t){const i=H(e.get(),t,n.origin),o=B(n.basis1),r=B(n.basis2),s=h(n.basis1,i),a=h(n.basis2,i);return-s-o<0&&s-o<0&&-a-r<0&&a-r<0}function U(n,t){const i=_.get();return u(i.origin,n.origin),u(i.vector,t),i}function C(n,t,i){const{basis1:o,basis2:r,origin:s}=n,a=l(e.get(),o,t.origin[0]),g=l(e.get(),r,t.origin[1]);p(i.origin,a,g),p(i.origin,i.origin,s);const c=l(e.get(),o,t.direction[0]),b=l(e.get(),r,t.direction[1]);return l(i.vector,p(c,c,b),2),i}function Rn(n,t){Math.abs(h(n.basis1,n.basis2)/(I(n.basis1)*I(n.basis2)))>1e-6&&V().warn(t,"Provided basis vectors are not perpendicular"),Math.abs(h(n.basis1,f(n)))>1e-6&&V().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-h(f(n),n.origin)-n.plane[3])>1e-6&&V().warn(t,"Plane offset is not consistent with plane origin")}function rn(n,t,i,o){const r=f(n);Y(r,t.direction,t.origin,i),Y($(i),r,t.origin,o)}const sn={plane:A(),origin:x(0,0,0),basis1:x(1,0,0),basis2:x(0,1,0)},v=new F(A),_=new F(mn),Bn=M(),Dn=new F(()=>P()),R=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],d=Z(),j=Z(),Xn=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:Tn,altitudeAt:z,axisAt:Fn,cameraFrustumCoverage:Sn,closestPoint:Q,closestPointOnSilhouette:J,copy:T,copyWithoutVerify:_n,create:P,distance:Vn,distance2:q,distanceToSilhouette:jn,elevate:W,equals:kn,extrusionContainsPoint:Yn,fromAABoundingRect:X,fromValues:L,getExtent:En,intersectRay:k,intersectRayClosestSilhouette:On,normal:f,projectPoint:nn,projectPointLocal:tn,rotate:zn,setAltitudeAt:Hn,setExtent:xn,transform:qn,up:sn,updateUnboundedPlane:y,wrap:yn},Symbol.toStringTag,{value:"Module"}));export{L as J,y as K,P as W,T as Z,Xn as k};
//# sourceMappingURL=boundedPlane-D2XYzlYp.js.map
