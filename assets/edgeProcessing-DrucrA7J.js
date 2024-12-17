import{e as It}from"./deduplicate-BxDTMzIg.js";import{H as C}from"./InterleavedLayout-CE2f-hIo.js";import{e as c}from"./VertexAttribute-BdZWZuT1.js";import{t as Z}from"./glUtil-CFv2RXTA.js";import{aU as Ot,aQ as w,c8 as tt,cU as St,fB as pt,io as At}from"./index-Bs-G_wsu.js";import{p as Et,o as k,s as ot,P as H,K as wt,_ as ht,c as rt,A as dt,u as Tt}from"./vec32-DrHtz8AR.js";function j(t,n,s,o,a,l=2){const h=1/(Math.abs(s)+Math.abs(o)+Math.abs(a)),g=s*h,m=o*h,i=a<=0?(g>=0?1:-1)*(1-Math.abs(m)):g,p=a<=0?(m>=0?1:-1)*(1-Math.abs(g)):m,N=n*l;t[N]=at(i),t[N+1]=at(p)}function at(t){return Ot(Math.round(32767*t),-32767,32767)}const Mt=C().vec3f(c.POSITION).u16(c.COMPONENTINDEX).freeze(),vt=C().vec2u8(c.SIDENESS).freeze();Z(vt);const Q=C().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze(),G=C().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).vec2i16(c.NORMAL2COMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze();c.POSITION0,c.POSITION1,c.COMPONENTINDEX,c.VARIANTOFFSET,c.VARIANTSTROKE,c.VARIANTEXTENSION,c.NORMALCOMPRESSED,c.NORMAL2COMPRESSED,c.SIDENESS;class yt{constructor(){this.position0=w(),this.position1=w(),this.faceNormal0=w(),this.faceNormal1=w(),this.componentIndex=0,this.cosAngle=0}}const W=-1;function Pt(t,n,s){const o=t.vertices.position,a=t.vertices.componentIndex,l=O.position0,h=O.position1,g=O.faceNormal0,m=O.faceNormal1,{edges:i,normals:p}=xt(t),N=i.length/4,A=n.allocate(N);let $=0;const F=N,T=s==null?void 0:s.allocate(F);let B=0,e=0,r=0;z.length=0;for(let d=0;d<N;++d){const v=4*d;o.getVec(i.data[v],l),o.getVec(i.data[v+1],h);const x=z.pushNew();x.index=4*d,x.length=Et(l,h)}z.sort((d,v)=>v.length-d.length);const f=new Array,u=new Array;z.forAll(({length:d,index:v})=>{const x=i.data[v],mt=i.data[v+1],et=i.data[v+2],nt=i.data[v+3],st=nt===W;if(o.getVec(x,l),o.getVec(mt,h),st){const E=3*et;k(g,p.data[E],p.data[E+1],p.data[E+2]),ot(m,g),O.componentIndex=a.get(x),O.cosAngle=H(g,m)}else{let E=3*et;if(k(g,p.data[E],p.data[E+1],p.data[E+2]),E=3*nt,k(m,p.data[E],p.data[E+1],p.data[E+2]),O.componentIndex=a.get(x),O.cosAngle=H(g,m),$t(O,Lt))return;O.cosAngle<-.9999&&ot(m,g)}e+=d,r++,st||Rt(O,Ft)?(n.write(A,$++,O),f.push(d)):Vt(O,gt)&&(T&&s&&s.write(T,B++,O),u.push(d))});const S=new Float32Array(f.reverse()),M=new Float32Array(u.reverse()),y=T&&s?{instancesData:T.slice(0,B),lodInfo:{lengths:M}}:void 0;return{regular:{instancesData:A.slice(0,$),lodInfo:{lengths:S}},silhouette:y,averageEdgeLength:e/r}}function Rt(t,n){return t.cosAngle<n}function $t(t,n){return t.cosAngle>n}function Vt(t,n){const s=St(t.cosAngle);return wt(it,t.position1,t.position0),s*(H(ht(bt,t.faceNormal0,t.faceNormal1),it)>0?-1:1)>n}function xt(t){const n=t.faces.length/3,s=t.faces,o=t.neighbors,a=t.vertices.position;I.length=K.length=0;for(let l=0;l<n;l++){const h=3*l,g=o[h],m=o[h+1],i=o[h+2],p=s[h],N=s[h+1],A=s[h+2];a.getVec(p,V),a.getVec(N,U),a.getVec(A,_),rt(U,U,V),rt(_,_,V),ht(V,U,_),dt(V,V),K.pushArray(V),(g===W||p<N)&&(I.push(p),I.push(N),I.push(l),I.push(g)),(m===W||N<A)&&(I.push(N),I.push(A),I.push(l),I.push(m)),(i===W||A<p)&&(I.push(A),I.push(p),I.push(l),I.push(i))}return{edges:I,normals:K}}class Dt{constructor(){this.index=0,this.length=0}}const z=new tt({allocator:t=>t||new Dt,deallocator:null}),I=new tt({deallocator:null}),K=new tt({deallocator:null}),O=new yt,bt=w(),it=w(),V=w(),U=w(),_=w(),gt=pt(4),Lt=Math.cos(gt),Ct=pt(35),Ft=Math.cos(Ct);function ct(t,n,s){const o=n/3,a=new Uint32Array(s+1),l=new Uint32Array(s+1),h=(e,r)=>{e<r?a[e+1]++:l[r+1]++};for(let e=0;e<o;e++){const r=t[3*e],f=t[3*e+1],u=t[3*e+2];h(r,f),h(f,u),h(u,r)}let g=0,m=0;for(let e=0;e<s;e++){const r=a[e+1],f=l[e+1];a[e+1]=g,l[e+1]=m,g+=r,m+=f}const i=new Uint32Array(6*o),p=a[s],N=(e,r,f)=>{if(e<r){const u=a[e+1]++;i[2*u]=r,i[2*u+1]=f}else{const u=l[r+1]++;i[2*p+2*u]=e,i[2*p+2*u+1]=f}};for(let e=0;e<o;e++){const r=t[3*e],f=t[3*e+1],u=t[3*e+2];N(r,f,e),N(f,u,e),N(u,r,e)}const A=(e,r)=>{const f=2*e,u=r-e;for(let S=1;S<u;S++){const M=i[f+2*S],y=i[f+2*S+1];let d=S-1;for(;d>=0&&i[f+2*d]>M;d--)i[f+2*d+2]=i[f+2*d],i[f+2*d+3]=i[f+2*d+1];i[f+2*d+2]=M,i[f+2*d+3]=y}};for(let e=0;e<s;e++)A(a[e],a[e+1]),A(p+l[e],p+l[e+1]);const $=new Int32Array(3*o),F=(e,r)=>e===t[3*r]?0:e===t[3*r+1]?1:e===t[3*r+2]?2:-1,T=(e,r)=>{const f=F(e,r);$[3*r+f]=-1},B=(e,r,f,u)=>{const S=F(e,r);$[3*r+S]=u;const M=F(f,u);$[3*u+M]=r};for(let e=0;e<s;e++){let r=a[e];const f=a[e+1];let u=l[e];const S=l[e+1];for(;r<f&&u<S;){const M=i[2*r],y=i[2*p+2*u];M===y?(B(e,i[2*r+1],y,i[2*p+2*u+1]),r++,u++):M<y?(T(e,i[2*r+1]),r++):(T(y,i[2*p+2*u+1]),u++)}for(;r<f;)T(e,i[2*r+1]),r++;for(;u<S;)T(i[2*p+2*u],i[2*p+2*u+1]),u++}return $}const q=.7;let Nt=class{updateSettings(n){this.settings=n,this._edgeHashFunction=n.reducedPrecision?zt:Bt}write(n,s,o){X.seed=this._edgeHashFunction(o);const a=X.getIntRange(0,255),l=X.getIntRange(0,this.settings.variants-1),h=X.getFloat(),g=255*(.5*Ut(-(1-Math.min(h/q,1))+Math.max(0,h-q)/(1-q),1.2)+.5);n.position0.setVec(s,o.position0),n.position1.setVec(s,o.position1),n.componentIndex.set(s,o.componentIndex),n.variantOffset.set(s,a),n.variantStroke.set(s,l),n.variantExtension.set(s,g)}};const P=new Float32Array(6),R=new Uint32Array(P.buffer),L=new Uint32Array(1);function Bt(t){return P[0]=t.position0[0],P[1]=t.position0[1],P[2]=t.position0[2],P[3]=t.position1[0],P[4]=t.position1[1],P[5]=t.position1[2],L[0]=31*(31*(31*(31*(31*(166811+R[0])+R[1])+R[2])+R[3])+R[4])+R[5],L[0]}function zt(t){const n=P;n[0]=D(t.position0[0]),n[1]=D(t.position0[1]),n[2]=D(t.position0[2]),n[3]=D(t.position1[0]),n[4]=D(t.position1[1]),n[5]=D(t.position1[2]),L[0]=5381;for(let s=0;s<R.length;s++)L[0]=31*L[0]+R[s];return L[0]}const lt=1e4;function D(t){return Math.round(t*lt)/lt}function Ut(t,n){return Math.abs(t)**n*Math.sign(t)}class J{constructor(){this._commonWriter=new Nt}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return Q.createBuffer(n)}write(n,s,o){this._commonWriter.write(n,s,o),Tt(b,o.faceNormal0,o.faceNormal1),dt(b,b);const{typedBuffer:a,typedBufferStride:l}=n.normalCompressed;j(a,s,b[0],b[1],b[2],l)}}J.Layout=Q,J.glLayout=Z(Q,1);class Y{constructor(){this._commonWriter=new Nt}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return G.createBuffer(n)}write(n,s,o){this._commonWriter.write(n,s,o);{const{typedBuffer:a,typedBufferStride:l}=n.normalCompressed;j(a,s,o.faceNormal0[0],o.faceNormal0[1],o.faceNormal0[2],l)}{const{typedBuffer:a,typedBufferStride:l}=n.normal2Compressed;j(a,s,o.faceNormal1[0],o.faceNormal1[1],o.faceNormal1[2],l)}}}Y.Layout=G,Y.glLayout=Z(G,1);const b=w(),X=new At;function Gt(t){const n=_t(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return ut.updateSettings(t.writerSettings),ft.updateSettings(t.writerSettings),Pt(n,ut,ft)}function _t(t,n,s,o){if(n){const h=ct(s,o,t.count);return new Xt(s,o,h,t)}const a=It(t.buffer,t.stride/4,{originalIndices:s,originalIndicesLength:o}),l=ct(a.indices,o,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,neighbors:l,vertices:Mt.createView(a.buffer)}}class Xt{constructor(n,s,o,a){this.faces=n,this.facesLength=s,this.neighbors=o,this.vertices=a}}const ut=new J,ft=new Y,Jt=C().vec3f(c.POSITION0).vec3f(c.POSITION1),Yt=C().vec3f(c.POSITION0).vec3f(c.POSITION1).u16(c.COMPONENTINDEX);export{Mt as E,Jt as d,Gt as f,Yt as m,Pt as p,_t as u};
