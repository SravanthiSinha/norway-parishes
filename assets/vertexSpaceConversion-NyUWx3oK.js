import{bU as H,fN as J,fO as sn,fP as cn,fQ as fn,fR as pn,aN as V,cY as h,fM as mn,fS as An,fT as U,fU as K,fV as gn,fW as Tn,dg as yn,s as Rn,fX as En}from"./index-Du44_A8J.js";import{j as L,n as Z}from"./mat3-BM-4VqQo.js";import{e as nn}from"./mat3f64-q3fE-ZOt.js";import{e as v,o as rn}from"./mat4f64-CSKppSlJ.js";import{N as q,A as Fn,y as tn,c as Nn,E as dn}from"./vec32-DeRCSSXC.js";import{a as en,w as On}from"./spatialReferenceEllipsoidUtils-DTu3db9D.js";import{C as $}from"./computeTranslationToOriginAndRotation-F6558tPf.js";import{c as I}from"./projectPointToVector-BlI5xnHp.js";import{a as $n,m as _n}from"./meshVertexSpaceUtils-DzATY2hy.js";import{f as b,l as on,i as P,e as B}from"./vec3-7_bHGPzF.js";import{i as N,T as d}from"./BufferView-OGCHU-EJ.js";import{n as wn}from"./vec4-CXEzkzp6.js";const or="Projection may be possible after calling projection.load().";function y(n,r,t,e){n.error(`Failed to project from (wkid:${r.wkid}) to (wkid:${t.wkid}).${e?" ":""}${e}`)}function Pn(n,r,t,e,o,l){return M(F.TO_PCPF,N.fromTypedArray(n),E.NORMAL,d.fromTypedArray(r),t,d.fromTypedArray(e),o,N.fromTypedArray(l))?l:null}function Cn(n,r,t,e,o,l){return M(F.FROM_PCPF,N.fromTypedArray(n),E.NORMAL,d.fromTypedArray(r),t,d.fromTypedArray(e),o,N.fromTypedArray(l))?l:null}function Sn(n,r,t,e){return H(n,r,0,t,e,0)?t:null}function xn(n,r,t,e){return H(n,r,0,t,e,0)?t:null}function an(n,r,t){return L(p,t),b(r,n,p),J(p)&&on(r,r),r}function ln(n,r,t){return Z(p,t),wn(r,n,p),J(p)&&on(r,r,4),r}function hn(n,r,t,e,o,l){if(!M(F.TO_PCPF,N.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),E.TANGENT,d.fromTypedArray(r),t,d.fromTypedArray(e),o,N.fromTypedArray(l,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}function vn(n,r,t,e,o,l){if(!M(F.FROM_PCPF,N.fromTypedArray(n,16),E.TANGENT,d.fromTypedArray(r),t,d.fromTypedArray(e),o,N.fromTypedArray(l,16)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}var E,F;function Q(n,r,t,e,o){switch($(e,t,_,e),n===F.FROM_PCPF&&h(_,_),r){case E.NORMAL:return L(o,_);case E.TANGENT:return Z(o,_)}}function M(n,r,t,e,o,l,a,i){if(!r)return;const c=e.count;if(Mn(o))for(let u=0;u<c;u++)l.getVec(u,x),r.getVec(u,T),q(T,T,Q(n,t,x,a,p)),i.setVec(u,T);else for(let u=0;u<c;u++){l.getVec(u,x),r.getVec(u,T);const f=sn(e.get(u,1));let s=Math.cos(f);t===E.TANGENT!=(n===F.TO_PCPF)&&(s=1/s),Q(n,t,x,a,p),n===F.TO_PCPF?(p[0]*=s,p[1]*=s,p[2]*=s,p[3]*=s,p[4]*=s,p[5]*=s):(p[0]*=s,p[3]*=s,p[6]*=s,p[1]*=s,p[4]*=s,p[7]*=s),q(T,T,p),Fn(T,T),i.setVec(u,T)}return i}function Mn(n){return n.isWGS84||cn(n)||fn(n)||pn(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(E||(E={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(F||(F={}));const x=V(),T=V(),_=v(),p=nn(),A=()=>Rn.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function ar(n,r,{vertexSpace:t,spatialReference:e}){if(t.type==="georeferenced"){const u=n;if(!I(r,u,e))return!1;const{origin:f}=t;return Nn(n,u,f),!0}const o=en(e),l=n;if(!I(r,l,o))return!1;const{origin:a}=t,i=z;if(!$(e,a,i,o))return!1;const c=h(z,i);return c!=null&&(dn(n,l,c),!0)}function lr(n,r,t){const{vertexSpace:e,transform:o,vertexAttributes:l}=n,a=$n(e)?o:null,i=G(n.spatialReference,t,R.SOURCE_AND_TARGET);if(_n(e,r)&&(!a||mn(a.localMatrix,rn))&&C(i)){const{position:c,normal:u,tangent:f}=l,s=t==null?void 0:t.allowBufferReuse;return{position:s?c:c.slice(),normal:s?u:u==null?void 0:u.slice(),tangent:s?f:f==null?void 0:f.slice()}}switch(n.vertexSpace.type){case"local":return r.type==="local"?bn(n,n.vertexSpace,r.origin,t):Un(n,n.vertexSpace,r.origin,t);case"georeferenced":return r.type==="local"?Vn(n,n.vertexSpace,r.origin,t):Gn(n,n.vertexSpace,r.origin,t)}}function Gn({vertexAttributes:n,transform:r,spatialReference:t},{origin:e},o,l){const a=G(t,l,R.SOURCE_AND_TARGET),i=e||!C(a)?An(m,(r==null?void 0:r.localMatrix)??rn):null;i&&Y(i,t,l,R.SOURCE_AND_TARGET);const{position:c,normal:u,tangent:f}=i?k(n,i):n,s=l==null?void 0:l.allowBufferReuse,O=s?c:new Float64Array(c.length);let g=c;if(e&&(g=P(O,g,e)),o){const S=tn(un,o);g=P(O,g,S)}return{position:g!==n.position||s?g:g.slice(),normal:u!==n.normal||s?u:u==null?void 0:u.slice(),tangent:f!==n.tangent||s?f:f==null?void 0:f.slice()}}function D(n,r){return r!=null&&r.useEllipsoid&&En(n)?On:en(n)}function Un({spatialReference:n,vertexAttributes:r,transform:t},{origin:e},o,l){const a=D(n,l);if(!$(n,e,m,a))return y(A(),n,a),null;t&&U(m,m,t.localMatrix),Y(m,n,l,R.SOURCE);const i=new Float64Array(r.position.length),c=Bn(r.position,m,n,i,a);if(!c)return null;const u=Dn(c,n,i,a,r.normal,m);if(r.normal&&!u)return null;const f=kn(c,n,i,a,r.tangent,m);if(r.tangent&&!f)return null;if(o){const s=tn(un,o);P(c,c,s)}return{position:c,normal:u,tangent:f}}function Vn({vertexAttributes:n,spatialReference:r,transform:t},{origin:e},o,l){const a=D(r,l);if(!$(r,o,m,a))return y(A(),r,a),null;const i=1/G(r,l,R.TARGET);K(m,m,[i,i,i]);const c=h(w,m),{position:u,normal:f,tangent:s}=Ln(n,e,t),O=new Float64Array(u.length),g=Yn(u,r,c,O,a);if(!g)return null;const S=L(qn,c),j=jn(f,u,r,O,a,S,f!==n.normal?f:void 0);if(!j&&f)return null;const W=Wn(s,u,r,O,a,S,s!==n.tangent?s:void 0);return!W&&s?null:{position:g,normal:j,tangent:W}}function Ln(n,r,t){if(!r)return n;if(!t){const{position:o,normal:l,tangent:a}=n;return{position:P(new Float64Array(o.length),o,r),tangent:a,normal:l}}const e=k(n,t.localMatrix);return P(e.position,e.position,r),e}function bn({vertexAttributes:n,spatialReference:r,transform:t},{origin:e},o,l){const a=D(r,l);if(!$(r,e,m,a))return y(A(),r,a),null;if(t&&U(m,m,t.localMatrix),!$(r,o,w,a))return y(A(),a,r),null;h(w,w);const i=U(m,w,m);return Y(i,r,l,R.SOURCE_AND_TARGET),k(n,i)}function k(n,r){const t=new Float64Array(n.position.length);B(t,n.position,r);const e=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&an(n.normal,e,r),o&&n.tangent&&ln(n.tangent,o,r),{position:t,normal:e,tangent:o}}function Bn(n,r,t,e,o){B(e,n,r);const l=new Float64Array(n.length);return xn(e,o,l,t)?l:(y(A(),o,t),null)}function Dn(n,r,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return an(o,a,l),Cn(a,n,r,t,e,a)?a:(y(A(),e,r),null)}function kn(n,r,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return ln(o,a,l),vn(a,n,r,t,e,a)?a:(y(A(),e,r),null)}function Y(n,r,t,e){const o=G(r,t,e);C(o)||K(n,n,[o,o,o])}function G(n,r,t){const e=!!(t&R.SOURCE),o=!!(t&R.TARGET),l=r==null?void 0:r.sourceUnit,a=r==null?void 0:r.targetUnit;if(!l&&!a)return 1;let i=X(l,n);e||!l||C(i)||(A().warn("source unit conversion not supported"),i=1);let c=1/X(a,n);return o||!a||C(c)||(A().warn("target unit conversion not supported"),c=1),i*c}function C(n){return gn(n,1)}function Yn(n,r,t,e,o){const l=Sn(n,r,e,o);if(!l)return y(A(),r,o),null;const a=new Float64Array(l.length);return B(a,l,t),a}function jn(n,r,t,e,o,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Pn(n,r,t,e,o,i)?(b(i,i,l),i):(y(A(),t,o),null)}function Wn(n,r,t,e,o,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return hn(n,r,t,e,o,i)?(b(i,i,l,4),i):(y(A(),t,o),null)}function X(n,r){if(n==null)return 1;const t=Tn(r);return 1/yn(t,"meters",n)}const m=v(),w=v(),qn=nn(),un=V(),z=v();var R;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(R||(R={}));export{lr as B,Pn as E,y as F,vn as G,or as O,Cn as R,Sn as g,xn as h,ar as k,X as n,hn as w};
//# sourceMappingURL=vertexSpaceConversion-NyUWx3oK.js.map
