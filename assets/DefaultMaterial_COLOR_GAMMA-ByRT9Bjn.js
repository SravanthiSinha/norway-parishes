import{j9 as m,w as _,ja as b,U as B,J as g,z as S,I as h,bN as j,jb as $,jc as w,jd as I,cv as A}from"./index-Bs-G_wsu.js";import{l as R,i as T}from"./Indices-QaLCrMzU.js";import{E as l}from"./enums-Dk3osxpS.js";let V=class{constructor(t){this._streamDataRequester=t}async loadJSON(t,f){return this._load("json",t,f)}async loadBinary(t,f){return m(t)?(_(f),b(t)):this._load("binary",t,f)}async loadImage(t,f){return this._load("image",t,f)}async _load(t,f,o){if(this._streamDataRequester==null)return(await B(f,{responseType:O[t]})).data;const n=await g(this._streamDataRequester.request(f,t,o));if(n.ok===!0)return n.value;throw S(n.error),new h("glt-loader-request-error",`Request for resource failed: ${n.error}`)}};const O={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function q(e,t){d(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function d(e,t,f=3,o=f){const n=t.length/o;let r=0,u=0;for(let a=0;a<n;++a)e[r]=t[u],e[r+1]=t[u+1],e[r+2]=t[u+2],r+=f,u+=o}function v(e,t,f,o,n){const r=e.typedBuffer,u=e.typedBufferStride,a=(n==null?void 0:n.count)??e.count;let s=((n==null?void 0:n.dstIndex)??0)*u;for(let i=0;i<a;++i)r[s]=t,r[s+1]=f,r[s+2]=o,s+=u}Object.freeze(Object.defineProperty({__proto__:null,copy:d,copyView:q,fill:v},Symbol.toStringTag,{value:"Module"}));function x(e,t){y(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function y(e,t,f=2,o=f){const n=t.length/2;let r=0,u=0;if(j(t)||$(t)){for(let s=0;s<n;++s)e[r]=t[u],e[r+1]=t[u+1],r+=f,u+=o;return}const a=w(t);if(I(t))for(let s=0;s<n;++s)e[r]=Math.max(t[u]/a,-1),e[r+1]=Math.max(t[u+1]/a,-1),r+=f,u+=o;else for(let s=0;s<n;++s)e[r]=t[u]/a,e[r+1]=t[u+1]/a,r+=f,u+=o}function z(e,t,f,o){const n=e.typedBuffer,r=e.typedBufferStride,u=(o==null?void 0:o.count)??e.count;let a=((o==null?void 0:o.dstIndex)??0)*r;for(let s=0;s<u;++s)n[a]=t,n[a+1]=f,a+=r}Object.freeze(Object.defineProperty({__proto__:null,fill:z,normalizeIntegerBuffer:y,normalizeIntegerBufferView:x},Symbol.toStringTag,{value:"Module"}));function N(e,t){p(e.typedBuffer,t,e.typedBufferStride)}function p(e,t,f=4){const o=t.typedBuffer,n=t.typedBufferStride,r=t.count;let u=0,a=0;for(let s=0;s<r;++s)e[u]=o[a],e[u+1]=o[a+1],e[u+2]=o[a+2],e[u+3]=o[a+3],u+=f,a+=n}function U(e,t,f,o,n,r){const u=e.typedBuffer,a=e.typedBufferStride,s=(r==null?void 0:r.count)??e.count;let i=((r==null?void 0:r.dstIndex)??0)*a;for(let c=0;c<s;++c)u[i]=t,u[i+1]=f,u[i+2]=o,u[i+3]=n,i+=a}Object.freeze(Object.defineProperty({__proto__:null,copy:p,copyView:N,fill:U},Symbol.toStringTag,{value:"Module"}));function k(e,t){switch(t){case l.TRIANGLES:return M(e);case l.TRIANGLE_STRIP:return E(e);case l.TRIANGLE_FAN:return P(e)}}function M(e){return typeof e=="number"?R(e):A(e)?new Uint16Array(e):e}function E(e){const t=typeof e=="number"?e:e.length;if(t<3)return[];const f=t-2,o=T(3*f);if(typeof e=="number"){let n=0;for(let r=0;r<f;r+=1)r%2==0?(o[n++]=r,o[n++]=r+1,o[n++]=r+2):(o[n++]=r+1,o[n++]=r,o[n++]=r+2)}else{let n=0;for(let r=0;r<f;r+=1)r%2==0?(o[n++]=e[r],o[n++]=e[r+1],o[n++]=e[r+2]):(o[n++]=e[r+1],o[n++]=e[r],o[n++]=e[r+2])}return o}function P(e){const t=typeof e=="number"?e:e.length;if(t<3)return new Uint16Array(0);const f=t-2,o=f<=65536?new Uint16Array(3*f):new Uint32Array(3*f);if(typeof e=="number"){let a=0;for(let s=0;s<f;++s)o[a++]=0,o[a++]=s+1,o[a++]=s+2;return o}const n=e[0];let r=e[1],u=0;for(let a=0;a<f;++a){const s=e[a+2];o[u++]=n,o[u++]=r,o[u++]=s,r=s}return o}const F=2.1;export{U as a,x as b,q as c,F as d,N as e,v as f,y as g,d as h,z as l,V as n,k as o,p as t};
