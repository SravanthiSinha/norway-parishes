import{bU as O}from"./index-BMHxxDIj.js";import{i as R,t as L}from"./Indices-CpfZSEwS.js";function F(f,n,e){const l=Array.isArray(f),r=l?f.length/n:f.byteLength/(4*n),A=l?f:new Uint32Array(f,0,r*n),u=(e==null?void 0:e.minReduction)??0,y=(e==null?void 0:e.originalIndices)||null,q=y?y.length:0,c=(e==null?void 0:e.componentOffsets)||null;let U=0;if(c)for(let t=0;t<c.length-1;t++){const a=c[t+1]-c[t];a>U&&(U=a)}else U=r;const m=Math.floor(1.1*U)+1;(h==null||h.length<2*m)&&(h=new Uint32Array(O(2*m)));for(let t=0;t<2*m;t++)h[t]=0;let i=0;const w=!!c&&!!y,b=w?q:r;let s=R(r);const p=new Uint32Array(q),k=1.96;let I=u!==0?Math.ceil(4*k*k/(u*u)*u*(1-u)):b,d=1,$=c?c[1]:b;for(let t=0;t<b;t++){if(t===I){const o=1-i/t;if(o+k*Math.sqrt(o*(1-o)/t)<u)return null;I*=2}if(t===$){for(let o=0;o<2*m;o++)h[o]=0;if(y)for(let o=c[d-1];o<c[d];o++)p[o]=s[y[o]];$=c[++d]}const a=w?y[t]:t,j=a*n,x=B(A,j,n);let g=x%m,C=i;for(;h[2*g+1]!==0;){if(h[2*g]===x){const o=h[2*g+1]-1;if(v(A,j,o*n,n)){C=s[o];break}}g++,g>=m&&(g-=m)}C===i&&(h[2*g]=x,h[2*g+1]=a+1,i++),s[a]=C}if(u!==0&&1-i/r<u)return null;if(w){for(let t=c[d-1];t<p.length;t++)p[t]=s[y[t]];s=L(p)}const M=l?new Array(i):new Uint32Array(i*n);i=0;for(let t=0;t<b;t++)s[t]===i&&(z(A,(w?y[t]:t)*n,M,i*n,n),i++);if(y&&!w){const t=new Uint32Array(q);for(let a=0;a<t.length;a++)t[a]=s[y[a]];s=L(t)}return{buffer:Array.isArray(M)?M:M.buffer,indices:s,uniqueCount:i}}function v(f,n,e,l){for(let r=0;r<l;r++)if(f[n+r]!==f[e+r])return!1;return!0}function z(f,n,e,l,r){for(let A=0;A<r;A++)e[l+A]=f[n+A]}function B(f,n,e){let l=0;for(let r=0;r<e;r++)l=f[n+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let h=null;export{F as e};
//# sourceMappingURL=deduplicate-D7TiHZ_A.js.map
