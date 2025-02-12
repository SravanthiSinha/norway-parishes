import{p as Nt,f as Kt}from"./mat3-DSYHFVyP.js";import{t as Lt,e as Ut}from"./mat3f64-q3fE-ZOt.js";import{e as ta}from"./mat4f64-CSKppSlJ.js";import{X as aa,O as U,x as sa}from"./quat-Com0Jwzo.js";import{r as Ht,e as jt}from"./quatf64-aQ5IuZRd.js";import{g as it,u as lt,o as D,Q as w,f as mt,X as At,Z as ea,N as ia,R as Xt,d as na,l as oa,r as Ct,q as gt,m as ra,e as ha}from"./vec32-CLDLXykA.js";import{aN as d,gp as ca,bR as St,hk as ua,hl as da,hm as Qt,bW as xt,hn as Wt,ho as fa,hp as la,hq as ma,fJ as Ft}from"./index-j6yFHuRy.js";import{a as _t}from"./spatialReferenceEllipsoidUtils-DvkhqtJM.js";import{C as _a}from"./computeTranslationToOriginAndRotation-4nTPOwOX.js";import{c as vt,o as ga,O as zt}from"./plane-D_hNRzaa.js";import{l as ba}from"./ViewingMode-dBUh39ak.js";class yt{constructor(t,a,s=a){this.data=t,this.size=a,this.stride=s}}class La extends yt{constructor(t,a,s,n=!1,o=s){super(t,s,o),this.indices=a,this.exclusive=n}}const nt=1e-6,ot=d(),bt=d();function $a(e,t){const{data:a,size:s}=e,n=a.length/s;if(n<=0)return;const o=new Ia(e);It(ot,o.minProj,o.maxProj),dt(ot,ot,.5),y(bt,o.maxProj,o.minProj);const r=qt(bt),c=new wa;c.quality=r,n<14&&(e=new yt(new Float64Array(o.buffer,112,42),3));const i=d(),h=d(),b=d(),m=d(),S=d(),A=d(),$=d();switch(Ma(o,e,$,i,h,b,m,S,A,c)){case 1:return void Rt(ot,bt,t);case 2:return void Na(e,m,t)}Pa(e,$,i,h,b,m,S,A,c),Zt(e,c.b0,c.b1,c.b2,at,st);const E=d();y(E,st,at),c.quality=qt(E),c.quality<r?Bt(c.b0,c.b1,c.b2,at,st,E,t):Rt(ot,bt,t)}function Ma(e,t,a,s,n,o,r,c,i,h){return ja(e,s,n),wt(s,n)<nt?1:(y(r,s,n),g(r,r),xa(t,s,r,o)<nt?2:(y(c,n,o),g(c,c),y(i,o,s),g(i,i),V(a,c,r),g(a,a),B(t,a,r,c,i,h),0))}const rt=d(),ht=d(),z=d(),N=d(),q=d(),G=d(),H=d(),X=d();function Pa(e,t,a,s,n,o,r,c,i){pa(e,t,a,rt,ht),rt[0]!==void 0&&(y(z,rt,a),g(z,z),y(N,rt,s),g(N,N),y(q,rt,n),g(q,q),V(G,N,o),g(G,G),V(H,q,r),g(H,H),V(X,z,c),g(X,X),B(e,G,o,N,z,i),B(e,H,r,q,N,i),B(e,X,c,z,q,i)),ht[0]!==void 0&&(y(z,ht,a),g(z,z),y(N,ht,s),g(N,N),y(q,ht,n),g(q,q),V(G,N,o),g(G,G),V(H,q,r),g(H,H),V(X,z,c),g(X,X),B(e,G,o,N,z,i),B(e,H,r,q,N,i),B(e,X,c,z,q,i))}function ja(e,t,a){let s=wt(e.maxVert[0],e.minVert[0]),n=0;for(let o=1;o<7;++o){const r=wt(e.maxVert[o],e.minVert[o]);r>s&&(s=r,n=o)}p(t,e.minVert[n]),p(a,e.maxVert[n])}const I=[0,0,0];function xa(e,t,a,s){const{data:n,size:o}=e;let r=Number.NEGATIVE_INFINITY,c=0;for(let i=0;i<n.length;i+=o){I[0]=n[i]-t[0],I[1]=n[i+1]-t[1],I[2]=n[i+2]-t[2];const h=a[0]*I[0]+a[1]*I[1]+a[2]*I[2],b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],m=I[0]*I[0]+I[1]*I[1]+I[2]*I[2]-h*h/b;m>r&&(r=m,c=i)}return p(s,n,c),r}const _=ca();function pa(e,t,a,s,n){za(e,t,_,n,s);const o=Jt(a,t);_[1]-nt<=o&&(s[0]=void 0),_[0]+nt>=o&&(n[0]=void 0)}const Tt=d(),Et=d(),Ot=d(),J=d(),k=d(),$t=d();function B(e,t,a,s,n,o){if(Dt(t)<nt)return;V(Tt,a,t),V(Et,s,t),V(Ot,n,t),tt(e,t,_),k[1]=_[0],J[1]=_[1],$t[1]=J[1]-k[1];const r=[a,s,n],c=[Tt,Et,Ot];for(let i=0;i<3;++i){tt(e,r[i],_),k[0]=_[0],J[0]=_[1],tt(e,c[i],_),k[2]=_[0],J[2]=_[1],$t[0]=J[0]-k[0],$t[2]=J[2]-k[2];const h=qt($t);h<o.quality&&(p(o.b0,r[i]),p(o.b1,t),p(o.b2,c[i]),o.quality=h)}}const Sa=d();function tt(e,t,a){const{data:s,size:n}=e;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let o=0;o<s.length;o+=n){const r=s[o]*t[0]+s[o+1]*t[1]+s[o+2]*t[2];a[0]=Math.min(a[0],r),a[1]=Math.max(a[1],r)}}function za(e,t,a,s,n){const{data:o,size:r}=e;p(s,o),p(n,s),a[0]=Jt(Sa,t),a[1]=a[0];for(let c=r;c<o.length;c+=r){const i=o[c]*t[0]+o[c+1]*t[1]+o[c+2]*t[2];i<a[0]&&(a[0]=i,p(s,o,c)),i>a[1]&&(a[1]=i,p(n,o,c))}}function Rt(e,t,a){a.center=e,a.halfSize=it(t,t,.5),a.quaternion=Ht}const O=d(),K=d(),ct=d(),at=d(),st=d(),Yt=d();function Na(e,t,a){p(O,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?O[0]=0:Math.abs(t[1])>Math.abs(t[2])?O[1]=0:O[2]=0,Dt(O)<nt&&(O[0]=O[1]=O[2]=1),V(K,t,O),g(K,K),V(ct,t,K),g(ct,ct),Zt(e,t,K,ct,at,st),y(Yt,st,at),Bt(t,K,ct,at,st,Yt,a)}function Zt(e,t,a,s,n,o){tt(e,t,_),n[0]=_[0],o[0]=_[1],tt(e,a,_),n[1]=_[0],o[1]=_[1],tt(e,s,_),n[2]=_[0],o[2]=_[1]}const W=d(),ut=d(),Mt=d(),v=Lt(1,0,0,0,1,0,0,0,1),qa=jt();function Bt(e,t,a,s,n,o,r){v[0]=e[0],v[1]=e[1],v[2]=e[2],v[3]=t[0],v[4]=t[1],v[5]=t[2],v[6]=a[0],v[7]=a[1],v[8]=a[2],r.quaternion=ya(qa,v),It(W,s,n),dt(W,W,.5),dt(ut,e,W[0]),dt(Mt,t,W[1]),It(ut,ut,Mt),dt(Mt,a,W[2]),r.center=lt(ut,ut,Mt),r.halfSize=it(W,o,.5)}const P=7;let Ia=class{constructor(t){this.minVert=new Array(P),this.maxVert=new Array(P);const a=64*P;this.buffer=new ArrayBuffer(a);let s=0;this.minProj=new Float64Array(this.buffer,s,P),s+=8*P,this.maxProj=new Float64Array(this.buffer,s,P),s+=8*P;for(let i=0;i<P;++i)this.minVert[i]=new Float64Array(this.buffer,s,3),s+=24;for(let i=0;i<P;++i)this.maxVert[i]=new Float64Array(this.buffer,s,3),s+=24;for(let i=0;i<P;++i)this.minProj[i]=Number.POSITIVE_INFINITY,this.maxProj[i]=Number.NEGATIVE_INFINITY;const n=new Array(P),o=new Array(P),{data:r,size:c}=t;for(let i=0;i<r.length;i+=c){let h=r[i];h<this.minProj[0]&&(this.minProj[0]=h,n[0]=i),h>this.maxProj[0]&&(this.maxProj[0]=h,o[0]=i),h=r[i+1],h<this.minProj[1]&&(this.minProj[1]=h,n[1]=i),h>this.maxProj[1]&&(this.maxProj[1]=h,o[1]=i),h=r[i+2],h<this.minProj[2]&&(this.minProj[2]=h,n[2]=i),h>this.maxProj[2]&&(this.maxProj[2]=h,o[2]=i),h=r[i]+r[i+1]+r[i+2],h<this.minProj[3]&&(this.minProj[3]=h,n[3]=i),h>this.maxProj[3]&&(this.maxProj[3]=h,o[3]=i),h=r[i]+r[i+1]-r[i+2],h<this.minProj[4]&&(this.minProj[4]=h,n[4]=i),h>this.maxProj[4]&&(this.maxProj[4]=h,o[4]=i),h=r[i]-r[i+1]+r[i+2],h<this.minProj[5]&&(this.minProj[5]=h,n[5]=i),h>this.maxProj[5]&&(this.maxProj[5]=h,o[5]=i),h=r[i]-r[i+1]-r[i+2],h<this.minProj[6]&&(this.minProj[6]=h,n[6]=i),h>this.maxProj[6]&&(this.maxProj[6]=h,o[6]=i)}for(let i=0;i<P;++i){let h=n[i];p(this.minVert[i],r,h),h=o[i],p(this.maxVert[i],r,h)}}},wa=class{constructor(){this.b0=St(1,0,0),this.b1=St(0,1,0),this.b2=St(0,0,1),this.quality=0}};function qt(e){return e[0]*e[1]+e[0]*e[2]+e[1]*e[2]}function It(e,t,a){e[0]=t[0]+a[0],e[1]=t[1]+a[1],e[2]=t[2]+a[2]}function y(e,t,a){e[0]=t[0]-a[0],e[1]=t[1]-a[1],e[2]=t[2]-a[2]}function dt(e,t,a){e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a}function p(e,t,a=0){e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2]}function V(e,t,a){const s=t[0],n=t[1],o=t[2],r=a[0],c=a[1],i=a[2];e[0]=n*i-o*c,e[1]=o*r-s*i,e[2]=s*c-n*r}function g(e,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s}}function Dt(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]}function wt(e,t){const a=t[0]-e[0],s=t[1]-e[1],n=t[2]-e[2];return a*a+s*s+n*n}function Jt(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ya(e,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);e[3]=.5*s,s=.5/s,e[0]=(t[5]-t[7])*s,e[1]=(t[6]-t[2])*s,e[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const n=(s+1)%3,o=(s+2)%3;let r=Math.sqrt(t[3*s+s]-t[3*n+n]-t[3*o+o]+1);e[s]=.5*r,r=.5/r,e[3]=(t[3*n+o]-t[3*o+n])*r,e[n]=(t[3*n+s]+t[3*s+n])*r,e[o]=(t[3*o+s]+t[3*s+o])*r}return e}class ft{constructor(t=ua,a=Ra,s=Ht){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new ft;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new ft;return a._data=t.slice(),a}static fromJSON(t){return new ft(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return D(vt.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return D(vt.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return aa(ga.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=l,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let n=0;n<8;++n){const o=t[n];o[0]=(1&n?-1:1)*s[3],o[1]=(2&n?-1:1)*s[4],o[2]=(4&n?-1:1)*s[5],w(o,o,a),o[0]+=s[0],o[1]+=s[1],o[2]+=s[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){u[0]=this._data[0]-t[0],u[1]=this._data[1]-t[1],u[2]=this._data[2]-t[2];const a=this.getQuaternion(Y);return U(l,a),w(u,u,l),mt(u,u),R[0]=Math.min(u[0],this._data[3]),R[1]=Math.min(u[1],this._data[4]),R[2]=Math.min(u[2],this._data[5]),At(R,u)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;u[0]=s[0]-t[0],u[1]=s[1]-t[1],u[2]=s[2]-t[2];const n=t[3],o=n+a;return!(ea(u)>o*o)&&(l[0]=-s[6],l[1]=-s[7],l[2]=-s[8],l[3]=s[9],w(u,u,l),mt(u,u),R[0]=Math.min(u[0],s[3]),R[1]=Math.min(u[1],s[4]),R[2]=Math.min(u[2],s[5]),At(R,u)<n*n)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(zt(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const n=this._data,o=l;o[0]=-n[6],o[1]=-n[7],o[2]=-n[8],o[3]=n[9],u[0]=t[0]-n[0],u[1]=t[1]-n[1],u[2]=t[2]-n[2];const r=w(u,u,l),c=w(R,a,l);let i=-1/0,h=1/0;const b=this.getHalfSize(et);for(let m=0;m<3;m++){const S=r[m],A=c[m],$=b[m]+s;if(Math.abs(A)>1e-6){const E=($-S)/A,M=(-$-S)/A;i=Math.max(i,Math.min(E,M)),h=Math.min(h,Math.max(E,M))}else if(S>$||S<-$)return!1}return i<=h}projectedArea(t,a,s,n){const o=this.getQuaternion(Y);U(l,o),u[0]=t[0]-this._data[0],u[1]=t[1]-this._data[1],u[2]=t[2]-this._data[2],w(u,u,l);const r=this.getHalfSize(et),c=u[0]<-r[0]?-1:u[0]>r[0]?1:0,i=u[1]<-r[1]?-1:u[1]>r[1]?1:0,h=u[2]<-r[2]?-1:u[2]>r[2]?1:0,b=Math.abs(c)+Math.abs(i)+Math.abs(h);if(b===0)return 1/0;const m=b===1?4:6,S=6*(c+3*i+9*h+13);Nt(L,o),Kt(L,L,r);const A=this.getCenter(F);for(let M=0;M<m;M++){const pt=Ca[S+M];D(u,((1&pt)<<1)-1,(2&pt)-1,((4&pt)>>1)-1),ia(u,u,L),lt(Z,A,u),Z[3]=1,da(Z,Z,a);const Vt=1/Math.max(1e-6,Z[3]);C[2*M]=Z[0]*Vt,C[2*M+1]=Z[1]*Vt}const $=2*m-2;let E=C[0]*(C[3]-C[$+1])+C[$]*(C[1]-C[$-1]);for(let M=2;M<$;M+=2)E+=C[M]*(C[M+3]-C[M-1]);return Math.abs(E)*s*n*.125}projectedRadius(t){const a=this.getQuaternion(Y);return U(l,a),w(u,t,l),Math.abs(u[0]*this._data[3])+Math.abs(u[1]*this._data[4])+Math.abs(u[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(zt(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(zt(t))}toAaBoundingBox(t){const a=this.getQuaternion(Y),s=Nt(L,a),n=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),o=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),r=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-n,t[1]=this._data[1]-o,t[2]=this._data[2]-r,t[3]=this._data[0]+n,t[4]=this._data[1]+o,t[5]=this._data[2]+r}transform(t,a,s,n=0,o=_t(s),r=_t(a),c=Wt(a,r)){if(s===o)a.isGeographic?Ta(this,t,a,n,r):va(this,t,a,n,r,c);else if(a.isWGS84&&(s.isWebMercator||Qt(s)))Qa(a,this,s,t,n);else if(a.isWebMercator&&Qt(s))Fa(a,this,s,t,n);else{const i=this.getCenter(F);i[2]+=n,xt(i,a,0,i,s,0),t.center=i,this!==t&&(t.quaternion=this.getQuaternion(Y),t.halfSize=this.getHalfSize(et))}}}const l=jt(),Y=jt(),Va=jt(),u=d(),R=d(),Z=fa();function Aa(e,t=new ft){return $a(e,t),t}const C=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Ca=(()=>{const e=new Int8Array(162);let t=0;const a=s=>{for(let n=0;n<s.length;n++)e[t+n]=s[n];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),e})();function as(e,t,a,s,n){const o=e.getQuaternion(Y);n.quaternion=o,U(l,o);const r=e.getCenter(F),c=e.getHalfSize(et);if(s===ba.Global){w(f,r,l),mt(Q,f),oa(x,Q,c),Xt(x,Q,x);const i=Ct(x);lt(x,Q,c);const h=Ct(x);if(i<a)n.center=r,D(f,a,a,a),n.halfSize=lt(f,c,f);else{const b=h>0?1+t/h:1,m=i>0?1+a/i:1,S=(m+b)/2,A=(m-b)/2;it(x,Q,A),n.halfSize=gt(x,x,c,S),it(x,Q,S),gt(x,x,c,A),ra(f,f),ha(f,x,f);const $=e.getQuaternion(Va);n.center=w(f,f,$)}}else{n.center=gt(f,r,Ft,(a+t)/2);const i=w(f,Ft,l);mt(i,i),n.halfSize=gt(Q,c,i,(a-t)/2)}return n}function Qa(e,t,a,s,n){t.getCenter(F),F[2]+=n;const o=_t(a);xt(F,e,0,F,o,0),kt(o,t,F,a,s)}function Fa(e,t,a,s,n){t.getCenter(F),F[2]+=n,kt(e,t,F,a,s)}function kt(e,t,a,s,n){const o=t.getQuaternion(Y),r=Nt(L,o),c=t.getHalfSize(et);for(let i=0;i<8;++i){for(let h=0;h<3;++h)T[h]=c[h]*(i&1<<h?-1:1);for(let h=0;h<3;++h){let b=a[h];for(let m=0;m<3;++m)b+=T[m]*r[3*m+h];Pt[3*i+h]=b}}xt(Pt,e,0,Pt,s,0,8),Aa(Ea,n)}function va(e,t,a,s,n=_t(a),o=Wt(a,n)){e.getCorners(Gt),e.getCenter(T),T[2]+=s,_a(a,T,j,n),t.setCenter(j[12],j[13],j[14]);const r=2*Math.sqrt(1+j[0]+j[5]+j[10]);l[0]=(j[6]-j[9])/r,l[1]=(j[8]-j[2])/r,l[2]=(j[1]-j[4])/r,l[3]=.25*r;const c=e.getQuaternion(Y);t.quaternion=sa(l,l,c),U(l,l),D(Q,0,0,0);const i=t.getCenter(Oa);for(const h of Gt)h[2]+=s,o(h,0,h,0),Xt(f,h,i),w(f,f,l),mt(f,f),na(Q,Q,f);t.halfSize=Q}function Ta(e,t,a,s,n=_t(a)){const o=la(a),r=1+Math.max(0,s)/(o.radius+e.centerZ);e.getCenter(T),T[2]+=s,xt(T,a,0,T,n,0),t.center=T;const c=e.getQuaternion(Y);t.quaternion=c,U(l,c),D(f,0,0,1),w(f,f,l);const i=e.getHalfSize(et);D(f,i[0]*Math.abs(f[0]),i[1]*Math.abs(f[1]),i[2]*Math.abs(f[2])),it(f,f,o.inverseFlattening),lt(f,i,f),t.halfSize=it(f,f,r)}const Pt=new Array(24),Ea=new yt(Pt,3),T=d(),F=d(),Oa=d(),et=d(),L=Ut(),j=ta(),Gt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],f=d(),Q=d(),x=d(),Ra=ma(-1,-1,-1);export{ft as I,as as L,La as t};
//# sourceMappingURL=orientedBoundingBox-Djcx1UQ5.js.map
