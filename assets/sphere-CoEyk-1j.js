import{i8 as G,cN as O,aN as g,i9 as H,hn as I,bO as N,bE as w,hr as T,aM as J,c_ as K,cX as Q,c$ as d}from"./index-DDxdo46s.js";import{s as S,c as f,_ as x,A as k,P as L,u as p,g as _,r as l,o as y,p as X,E as U,j as W,v as tt,I as nt,q as it}from"./vec32-CLt-8tHl.js";import"./mat3-UjmFUe2z.js";import"./mat3f64-q3fE-ZOt.js";import{c as a,a as rt,b as et}from"./plane-DrigPmS_.js";class ot{constructor(i){this._allocator=i,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&G(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const i=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*R);this._items.length=Math.min(i,this._items.length),this._itemsPtr=0}_grow(){for(let i=0;i<Math.max(8,Math.min(this._items.length,R));i++)this._items.push(this._allocator())}}const R=1024;function P(t){return t?C(O(t.origin),O(t.direction)):C(g(),g())}function C(t,i){return{origin:t,direction:i}}function Lt(t,i){const n=at.get();return n.origin=t,n.direction=i,n}function Xt(t,i=P()){return ct(t.origin,t.direction,i)}function st(t,i,n=P()){return S(n.origin,t),f(n.direction,i,t),n}function ct(t,i,n=P()){return S(n.origin,t),S(n.direction,i),n}function Zt(t,i){const n=x(a.get(),k(a.get(),t.direction),f(a.get(),i,t.origin));return L(n,n)}function ut(t,i,n){const r=L(t.direction,f(n,i,t.origin));return p(n,t.origin,_(n,t.direction,r)),n}const at=new ot(()=>P());function j(t,i){const n=l(t),r=H(t[2]/n),e=Math.atan2(t[1]/n,t[0]/n);return y(i,n,r,e),i}const ft=v();function v(){return I()}const ht=N,gt=N;function Z(t,i){return w(i,t)}function lt(t,i){return T(t[0],t[1],t[2],i)}function mt(t){return t}function _t(t){t[0]=t[1]=t[2]=t[3]=0}function Mt(t,i){return t[0]=t[1]=t[2]=0,t[3]=i,t}function M(t){return t[3]}function dt(t){return t}function $t(t,i,n,r){return T(t,i,n,r)}function pt(t,i,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+i,n}function Pt(t,i,n){return t!==n&&Z(t,n),n}function bt(t,i){return i}function b(t,i,n){if(i==null||!z(t,i,$))return!1;let{t0:r,t1:e}=$;if((r<0||e<r&&e>0)&&(r=e),r<0)return!1;if(n){const{origin:o,direction:s}=i;n[0]=o[0]+s[0]*r,n[1]=o[1]+s[1]*r,n[2]=o[2]+s[2]*r}return!0}function qt(t,i,n){const r=st(i,n);if(!z(t,r,$))return[];const{origin:e,direction:o}=r,{t0:s,t1:c}=$,u=h=>{const m=g();return it(m,e,o,h),A(t,m,m)};return Math.abs(s-c)<J()?[u(s)]:[u(s),u(c)]}const $={t0:0,t1:0};function z(t,i,n){const{origin:r,direction:e}=i,o=wt;o[0]=r[0]-t[0],o[1]=r[1]-t[1],o[2]=r[2]-t[2];const s=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];if(s===0)return!1;const c=2*(e[0]*o[0]+e[1]*o[1]+e[2]*o[2]),u=c*c-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(u<0)return!1;const h=Math.sqrt(u);return n.t0=(-c-h)/(2*s),n.t1=(-c+h)/(2*s),!0}const wt=g();function St(t,i){return b(t,i,null)}function xt(t,i,n){if(b(t,i,n))return n;const r=F(t,i,a.get());return p(n,i.origin,_(a.get(),i.direction,X(i.origin,r)/l(i.direction))),n}function F(t,i,n){const r=a.get(),e=rt.get();x(r,i.origin,i.direction);const o=M(t);x(n,r,i.origin),_(n,n,1/l(n)*o);const s=V(t,i.origin),c=et(i.origin,n);return K(e,c+s,r),U(n,n,e),n}function yt(t,i,n,r){const e=M(t),o=e*e,s=i+.5*Math.PI,c=n*n+o-2*Math.cos(s)*n*e,u=Math.sqrt(c),h=c-o;if(h<=0)return .5;const m=Math.sqrt(h),D=Math.acos(m/u)-Math.asin(e/(u/Math.sin(s)));return Math.min(1,(D+.5*r)/r)}function Et(t,i,n){return b(t,i,n)?n:(ut(i,t,n),A(t,n,n))}function A(t,i,n){const r=f(a.get(),i,t),e=_(a.get(),r,t[3]/l(r));return p(n,e,t)}function vt(t,i){const n=f(a.get(),i,t),r=W(n),e=t[3]*t[3];return Math.sqrt(Math.abs(r-e))}function V(t,i){const n=f(a.get(),i,t),r=l(n),e=M(t),o=e+Math.abs(e-r);return Q(e/o)}const q=g();function Y(t,i,n,r){const e=f(q,i,t);switch(n){case d.X:{const o=j(e,q)[2];return y(r,-Math.sin(o),Math.cos(o),0)}case d.Y:{const o=j(e,q),s=o[1],c=o[2],u=Math.sin(s);return y(r,-u*Math.cos(c),-u*Math.sin(c),Math.cos(s))}case d.Z:return k(r,e);default:return}}function B(t,i){const n=f(E,i,t);return l(n)-t[3]}function At(t,i,n,r){const e=B(t,i),o=Y(t,i,d.Z,E),s=_(E,o,n-e);return p(r,i,s)}function Ot(t,i){const n=tt(t,i),r=M(t);return n<=r*r}function Rt(t,i,n=I()){const r=X(t,i),e=t[3],o=i[3];return r+o<e?(w(n,t),n):r+e<o?(w(n,i),n):(nt(n,t,i,(r+o-e)/(2*r)),n[3]=(r+e+o)/2,n)}const E=g(),Ct=v(),zt=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ft,altitudeAt:B,angleToSilhouette:V,axisAt:Y,cameraFrustumCoverage:yt,clear:_t,closestPoint:Et,closestPointOnSilhouette:F,containsPoint:Ot,copy:Z,create:v,distanceToSilhouette:vt,elevate:pt,equals:gt,exactEquals:ht,fromCenterAndRadius:lt,fromRadius:Mt,fromValues:$t,getCenter:dt,getExtent:bt,getRadius:M,intersectLine:qt,intersectRay:b,intersectRayClosestSilhouette:xt,intersectsRay:St,projectPoint:A,setAltitudeAt:At,setExtent:Pt,tmpSphere:Ct,union:Rt,wrap:mt},Symbol.toStringTag,{value:"Module"}));export{A as $,v as E,St as H,qt as I,M as N,lt as O,mt as T,dt as U,$t as V,ht as _,Z as a,P as b,zt as f,Ot as i,Lt as k,ot as s,Xt as v,Zt as w};
//# sourceMappingURL=sphere-CoEyk-1j.js.map
