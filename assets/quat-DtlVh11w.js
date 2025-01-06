import{e as Y}from"./mat3f64-q3fE-ZOt.js";import{e as I}from"./quatf64-aQ5IuZRd.js";import{aM as _,bE as v,bF as z,bG as N,bH as S,bI as T,bJ as F,bK as G,bL as H,bM as J,bN as K,bO as W,aN as X,bP as y,aO as Z}from"./index-Du44_A8J.js";import{P as k,_ as P,Y as w,A as B}from"./vec32-DeRCSSXC.js";function C(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function x(a,o,s){s*=.5;const r=Math.sin(s);return a[0]=r*o[0],a[1]=r*o[1],a[2]=r*o[2],a[3]=Math.cos(s),a}function D(a,o){const s=2*Math.acos(o[3]),r=Math.sin(s/2);return r>_()?(a[0]=o[0]/r,a[1]=o[1]/r,a[2]=o[2]/r):(a[0]=1,a[1]=0,a[2]=0),s}function j(a,o,s){const r=o[0],e=o[1],c=o[2],t=o[3],i=s[0],u=s[1],n=s[2],h=s[3];return a[0]=r*h+t*i+e*n-c*u,a[1]=e*h+t*u+c*i-r*n,a[2]=c*h+t*n+r*u-e*i,a[3]=t*h-r*i-e*u-c*n,a}function Q(a,o,s){s*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],i=Math.sin(s),u=Math.cos(s);return a[0]=r*u+t*i,a[1]=e*u+c*i,a[2]=c*u-e*i,a[3]=t*u-r*i,a}function R(a,o,s){s*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],i=Math.sin(s),u=Math.cos(s);return a[0]=r*u-c*i,a[1]=e*u+t*i,a[2]=c*u+r*i,a[3]=t*u-e*i,a}function U(a,o,s){s*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],i=Math.sin(s),u=Math.cos(s);return a[0]=r*u+e*i,a[1]=e*u-r*i,a[2]=c*u+t*i,a[3]=t*u-c*i,a}function V(a,o){const s=o[0],r=o[1],e=o[2];return a[0]=s,a[1]=r,a[2]=e,a[3]=Math.sqrt(Math.abs(1-s*s-r*r-e*e)),a}function q(a,o,s,r){const e=o[0],c=o[1],t=o[2],i=o[3];let u,n,h,f,l,b=s[0],m=s[1],$=s[2],p=s[3];return n=e*b+c*m+t*$+i*p,n<0&&(n=-n,b=-b,m=-m,$=-$,p=-p),1-n>_()?(u=Math.acos(n),h=Math.sin(u),f=Math.sin((1-r)*u)/h,l=Math.sin(r*u)/h):(f=1-r,l=r),a[0]=f*e+l*b,a[1]=f*c+l*m,a[2]=f*t+l*$,a[3]=f*i+l*p,a}function aa(a){const o=Z,s=o(),r=o(),e=o(),c=Math.sqrt(1-s),t=Math.sqrt(s);return a[0]=c*Math.sin(2*Math.PI*r),a[1]=c*Math.cos(2*Math.PI*r),a[2]=t*Math.sin(2*Math.PI*e),a[3]=t*Math.cos(2*Math.PI*e),a}function oa(a,o){const s=o[0],r=o[1],e=o[2],c=o[3],t=s*s+r*r+e*e+c*c,i=t?1/t:0;return a[0]=-s*i,a[1]=-r*i,a[2]=-e*i,a[3]=c*i,a}function ra(a,o){return a[0]=-o[0],a[1]=-o[1],a[2]=-o[2],a[3]=o[3],a}function E(a,o){const s=o[0]+o[4]+o[8];let r;if(s>0)r=Math.sqrt(s+1),a[3]=.5*r,r=.5/r,a[0]=(o[5]-o[7])*r,a[1]=(o[6]-o[2])*r,a[2]=(o[1]-o[3])*r;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const c=(e+1)%3,t=(e+2)%3;r=Math.sqrt(o[3*e+e]-o[3*c+c]-o[3*t+t]+1),a[e]=.5*r,r=.5/r,a[3]=(o[3*c+t]-o[3*t+c])*r,a[c]=(o[3*c+e]+o[3*e+c])*r,a[t]=(o[3*t+e]+o[3*e+t])*r}return a}function ea(a,o,s,r){const e=.5*Math.PI/180;o*=e,s*=e,r*=e;const c=Math.sin(o),t=Math.cos(o),i=Math.sin(s),u=Math.cos(s),n=Math.sin(r),h=Math.cos(r);return a[0]=c*u*h-t*i*n,a[1]=t*i*h+c*u*n,a[2]=t*u*n-c*i*h,a[3]=t*u*h+c*i*n,a}function sa(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}const ca=v,ta=z,ia=N,ua=j,na=S,ha=T,Ma=F,L=G,fa=L,O=H,la=O,d=J,ba=K,ma=W;function $a(a,o,s){const r=k(o,s);return r<-.999999?(P(M,pa,o),w(M)<1e-6&&P(M,qa,o),B(M,M),x(a,M,Math.PI),a):r>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(P(M,o,s),a[0]=M[0],a[1]=M[1],a[2]=M[2],a[3]=1+r,d(a,a))}const M=X(),pa=y(1,0,0),qa=y(0,1,0);function Pa(a,o,s,r,e,c){return q(g,o,e,c),q(A,s,r,c),q(a,g,A,2*c*(1-c)),a}const g=I(),A=I();function da(a,o,s,r){const e=ga;return e[0]=s[0],e[3]=s[1],e[6]=s[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],d(a,E(a,e))}const ga=Y();Object.freeze(Object.defineProperty({__proto__:null,add:ia,calculateW:V,conjugate:ra,copy:ca,dot:ha,equals:ma,exactEquals:ba,fromEuler:ea,fromMat3:E,getAxisAngle:D,identity:C,invert:oa,len:fa,length:L,lerp:Ma,mul:ua,multiply:j,normalize:d,random:aa,rotateX:Q,rotateY:R,rotateZ:U,rotationTo:$a,scale:na,set:ta,setAxes:da,setAxisAngle:x,slerp:q,sqlerp:Pa,sqrLen:la,squaredLength:O,str:sa},Symbol.toStringTag,{value:"Module"}));export{oa as L,ba as N,ra as O,$a as R,ea as T,ta as X,x as b,D as v,j as x};
//# sourceMappingURL=quat-DtlVh11w.js.map
