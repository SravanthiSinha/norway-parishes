import{s as P}from"./index-Du44_A8J.js";const T=()=>P.getLogger("esri.views.3d.support.buffer.math");function k(t,n,e){if(t.count!==n.count)return;const o=t.count,c=e[0],i=e[1],l=e[2],u=e[3],f=e[4],r=e[5],a=e[6],p=e[7],y=e[8],v=e[9],B=e[10],h=e[11],m=e[12],z=e[13],w=e[14],_=e[15],d=t.typedBuffer,O=t.typedBufferStride,s=n.typedBuffer,j=n.typedBufferStride;for(let V=0;V<o;V++){const g=V*O,S=V*j,M=s[S],b=s[S+1],$=s[S+2],q=s[S+3];d[g]=c*M+f*b+y*$+m*q,d[g+1]=i*M+r*b+v*$+z*q,d[g+2]=l*M+a*b+B*$+w*q,d[g+3]=u*M+p*b+h*$+_*q}}function A(t,n,e,o=4,c=o){if(t.length/o!=n.length/c)return void T().error("source and destination buffers need to have the same number of elements");const i=t.length/o,l=e[0],u=e[1],f=e[2],r=e[3],a=e[4],p=e[5],y=e[6],v=e[7],B=e[8],h=e[9],m=e[10],z=e[11],w=e[12],_=e[13],d=e[14],O=e[15];let s=0,j=0;for(let V=0;V<i;V++){const g=n[s],S=n[s+1],M=n[s+2],b=n[s+3];t[j]=l*g+a*S+B*M+w*b,t[j+1]=u*g+p*S+h*M+_*b,t[j+2]=f*g+y*S+m*M+d*b,t[j+3]=r*g+v*S+z*M+O*b,s+=c,j+=o}}function C(t,n,e){x(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function x(t,n,e,o=4,c=o){if(t.length/o!=n.length/c)return;const i=t.length/o,l=e[0],u=e[1],f=e[2],r=e[3],a=e[4],p=e[5],y=e[6],v=e[7],B=e[8];let h=0,m=0;for(let z=0;z<i;z++){const w=n[h],_=n[h+1],d=n[h+2],O=n[h+3];t[m]=l*w+r*_+y*d,t[m+1]=u*w+a*_+v*d,t[m+2]=f*w+p*_+B*d,t[m+3]=O,h+=c,m+=o}}function D(t,n){const e=Math.min(t.count,n.count),o=t.typedBuffer,c=t.typedBufferStride,i=n.typedBuffer,l=n.typedBufferStride;for(let u=0;u<e;u++){const f=u*c,r=u*l,a=i[r],p=i[r+1],y=i[r+2],v=a*a+p*p+y*y;if(v>0){const B=1/Math.sqrt(v);o[f]=B*a,o[f+1]=B*p,o[f+2]=B*y}}}function E(t,n,e){L(t.typedBuffer,n,e,t.typedBufferStride)}function L(t,n,e,o=4){const c=Math.min(t.length/o,n.count),i=n.typedBuffer,l=n.typedBufferStride;let u=0,f=0;for(let r=0;r<c;r++)t[f]=e*i[u],t[f+1]=e*i[u+1],t[f+2]=e*i[u+2],t[f+3]=e*i[u+3],u+=l,f+=o}Object.freeze(Object.defineProperty({__proto__:null,normalize:D,scale:L,scaleView:E,transformMat3:x,transformMat3View:C,transformMat4:A,transformMat4View:k},Symbol.toStringTag,{value:"Module"}));export{C as f,x as n,D as o,L as s,E as u};
//# sourceMappingURL=vec4-CXEzkzp6.js.map
