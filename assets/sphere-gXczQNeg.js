import{i9 as G,aN as g,cO as O,ia as H,bP as w,hq as I,hw as N,bN as T,d0 as d,aM as J,c_ as K,c$ as Q}from"./index-BvuY3ppR.js";import{s as S,c as f,P as k,u as p,g as _,_ as x,A as L,r as l,o as y,v as U,p as Z,I as W,j as tt,E as nt,q as it}from"./vec32-DyxqxkTQ.js";import"./mat3-CRSfGftC.js";import"./mat3f64-q3fE-ZOt.js";import{c as a,a as et,b as rt}from"./plane-CvSgrFmE.js";class ot{constructor(i){this._allocator=i,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&G(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const i=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*R);this._items.length=Math.min(i,this._items.length),this._itemsPtr=0}_grow(){for(let i=0;i<Math.max(8,Math.min(this._items.length,R));i++)this._items.push(this._allocator())}}const R=1024;function P(t){return t?C(O(t.origin),O(t.direction)):C(g(),g())}function C(t,i){return{origin:t,direction:i}}function Lt(t,i){const n=at.get();return n.origin=t,n.direction=i,n}function Zt(t,i=P()){return ct(t.origin,t.direction,i)}function st(t,i,n=P()){return S(n.origin,t),f(n.direction,i,t),n}function ct(t,i,n=P()){return S(n.origin,t),S(n.direction,i),n}function zt(t,i){const n=x(a.get(),L(a.get(),t.direction),f(a.get(),i,t.origin));return k(n,n)}function ut(t,i,n){const e=k(t.direction,f(n,i,t.origin));return p(n,t.origin,_(n,t.direction,e)),n}const at=new ot(()=>P());function j(t,i){const n=l(t),e=H(t[2]/n),r=Math.atan2(t[1]/n,t[0]/n);return y(i,n,e,r),i}const ft=A();function A(){return I()}const ht=T,gt=T;function z(t,i){return w(i,t)}function lt(t,i){return N(t[0],t[1],t[2],i)}function mt(t){return t}function _t(t){t[0]=t[1]=t[2]=t[3]=0}function Mt(t,i){return t[0]=t[1]=t[2]=0,t[3]=i,t}function M(t){return t[3]}function dt(t){return t}function $t(t,i,n,e){return N(t,i,n,e)}function pt(t,i,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+i,n}function Pt(t,i,n){return t!==n&&z(t,n),n}function bt(t,i){return i}function b(t,i,n){if(i==null||!F(t,i,$))return!1;let{t0:e,t1:r}=$;if((e<0||r<e&&r>0)&&(e=r),e<0)return!1;if(n){const{origin:o,direction:s}=i;n[0]=o[0]+s[0]*e,n[1]=o[1]+s[1]*e,n[2]=o[2]+s[2]*e}return!0}function qt(t,i,n){const e=st(i,n);if(!F(t,e,$))return[];const{origin:r,direction:o}=e,{t0:s,t1:c}=$,u=h=>{const m=g();return it(m,r,o,h),E(t,m,m)};return Math.abs(s-c)<J()?[u(s)]:[u(s),u(c)]}const $={t0:0,t1:0};function F(t,i,n){const{origin:e,direction:r}=i,o=wt;o[0]=e[0]-t[0],o[1]=e[1]-t[1],o[2]=e[2]-t[2];const s=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(s===0)return!1;const c=2*(r[0]*o[0]+r[1]*o[1]+r[2]*o[2]),u=c*c-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(u<0)return!1;const h=Math.sqrt(u);return n.t0=(-c-h)/(2*s),n.t1=(-c+h)/(2*s),!0}const wt=g();function St(t,i){return b(t,i,null)}function xt(t,i,n){if(b(t,i,n))return n;const e=V(t,i,a.get());return p(n,i.origin,_(a.get(),i.direction,Z(i.origin,e)/l(i.direction))),n}function V(t,i,n){const e=a.get(),r=et.get();x(e,i.origin,i.direction);const o=M(t);x(n,e,i.origin),_(n,n,1/l(n)*o);const s=X(t,i.origin),c=rt(i.origin,n);return K(r,c+s,e),nt(n,n,r),n}function yt(t,i,n,e){const r=M(t),o=r*r,s=i+.5*Math.PI,c=n*n+o-2*Math.cos(s)*n*r,u=Math.sqrt(c),h=c-o;if(h<=0)return .5;const m=Math.sqrt(h),D=Math.acos(m/u)-Math.asin(r/(u/Math.sin(s)));return Math.min(1,(D+.5*e)/e)}function vt(t,i,n){return b(t,i,n)?n:(ut(i,t,n),E(t,n,n))}function E(t,i,n){const e=f(a.get(),i,t),r=_(a.get(),e,t[3]/l(e));return p(n,r,t)}function At(t,i){const n=f(a.get(),i,t),e=tt(n),r=t[3]*t[3];return Math.sqrt(Math.abs(e-r))}function X(t,i){const n=f(a.get(),i,t),e=l(n),r=M(t),o=r+Math.abs(r-e);return Q(r/o)}const q=g();function Y(t,i,n,e){const r=f(q,i,t);switch(n){case d.X:{const o=j(r,q)[2];return y(e,-Math.sin(o),Math.cos(o),0)}case d.Y:{const o=j(r,q),s=o[1],c=o[2],u=Math.sin(s);return y(e,-u*Math.cos(c),-u*Math.sin(c),Math.cos(s))}case d.Z:return L(e,r);default:return}}function B(t,i){const n=f(v,i,t);return l(n)-t[3]}function Et(t,i,n,e){const r=B(t,i),o=Y(t,i,d.Z,v),s=_(v,o,n-r);return p(e,i,s)}function Ot(t,i){const n=U(t,i),e=M(t);return n<=e*e}function Rt(t,i,n=I()){const e=Z(t,i),r=t[3],o=i[3];return e+o<r?(w(n,t),n):e+r<o?(w(n,i),n):(W(n,t,i,(e+o-r)/(2*e)),n[3]=(e+r+o)/2,n)}const v=g(),Ct=A(),Ft=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ft,altitudeAt:B,angleToSilhouette:X,axisAt:Y,cameraFrustumCoverage:yt,clear:_t,closestPoint:vt,closestPointOnSilhouette:V,containsPoint:Ot,copy:z,create:A,distanceToSilhouette:At,elevate:pt,equals:gt,exactEquals:ht,fromCenterAndRadius:lt,fromRadius:Mt,fromValues:$t,getCenter:dt,getExtent:bt,getRadius:M,intersectLine:qt,intersectRay:b,intersectRayClosestSilhouette:xt,intersectsRay:St,projectPoint:E,setAltitudeAt:Et,setExtent:Pt,tmpSphere:Ct,union:Rt,wrap:mt},Symbol.toStringTag,{value:"Module"}));export{E as $,A as E,St as H,qt as I,M as N,lt as O,mt as T,dt as U,$t as V,ht as _,z as a,P as b,Ft as f,Ot as i,Lt as k,ot as s,Zt as v,zt as w};
//# sourceMappingURL=sphere-gXczQNeg.js.map
