const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngineJSON-jXV8q20E.js","assets/geometryEngineBase-yFIvKOkM.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/index-BfLS464G.js","assets/index-Jib82o7I.css"])))=>i.map(i=>d[i]);
import{bo as G,j2 as D,j3 as Z,bl as _,df as $,j4 as J,j5 as W,_ as H,I as b,cv as O,cj as K,cm as L}from"./index-BfLS464G.js";import{I as k,P as F,$ as z,H as B,U as Q,a as M,h as X,K as q}from"./featureConversionUtils-BtnbM9Bl.js";const j=new G,ee=new G,w=new G,R={esriGeometryPoint:F,esriGeometryPolyline:z,esriGeometryPolygon:B,esriGeometryMultipoint:Q};function Te(e,t,n,s=e.hasZ,i=e.hasM){if(t==null)return null;const r=e.hasZ&&s,l=e.hasM&&i;if(n){const u=M(w,t,e.hasZ,e.hasM,"esriGeometryPoint",n,s,i);return F(u,r,l)}return F(t,r,l)}function E(e,t,n,s,i,r,l=t,u=n){var c,p,I;const o=t&&l,a=n&&u,f=s!=null?"coords"in s?s:s.geometry:null;if(f==null)return null;if(i){let m=X(ee,f,t,n,e,i,l,u);return r&&(m=M(w,m,o,a,e,r)),((c=R[e])==null?void 0:c.call(R,m,o,a))??null}if(r){const m=M(w,f,t,n,e,r,l,u);return((p=R[e])==null?void 0:p.call(R,m,o,a))??null}return k(j,f,t,n,l,u),((I=R[e])==null?void 0:I.call(R,j,o,a))??null}function Ge(e){return e&&C in e?JSON.parse(JSON.stringify(e,te)):e}const C="_geVersion",te=(e,t)=>e!==C?t:void 0;function A(e,t){return e?t?4:3:t?3:2}function Pe(e,t,n,s){if(!(t!=null&&t.lengths.length))return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const i=e.coords,r=[],l=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:u,coords:o}=t,a=A(n,s);let f=0;for(const c of u){const p=re(l,o,f,c,n,s);p&&r.push(p),f+=c*a}if(r.sort((c,p)=>{let I=c[2]-p[2];return I===0&&n&&(I=c[4]-p[4]),I}),r.length){let c=6*r[0][2];i[0]=r[0][0]/c,i[1]=r[0][1]/c,n&&(c=6*r[0][4],i[2]=c!==0?r[0][3]/c:0),(i[0]<l[0]||i[0]>l[1]||i[1]<l[2]||i[1]>l[3]||n&&(i[2]<l[4]||i[2]>l[5]))&&(i.length=0)}if(!i.length){const c=t.lengths[0]?ne(o,0,u[0],n,s):null;if(!c)return null;i[0]=c[0],i[1]=c[1],n&&c.length>2&&(i[2]=c[2])}return e}function re(e,t,n,s,i,r){const l=A(i,r);let u=n,o=n+l,a=0,f=0,c=0,p=0,I=0;for(let S=0,P=s-1;S<P;S++,u+=l,o+=l){const h=t[u],N=t[u+1],g=t[u+2],y=t[o],d=t[o+1],Y=t[o+2];let T=h*d-y*N;p+=T,a+=(h+y)*T,f+=(N+d)*T,i&&(T=h*Y-y*g,c+=(g+Y)*T,I+=T),h<e[0]&&(e[0]=h),h>e[1]&&(e[1]=h),N<e[2]&&(e[2]=N),N>e[3]&&(e[3]=N),i&&(g<e[4]&&(e[4]=g),g>e[5]&&(e[5]=g))}if(p>0&&(p*=-1),I>0&&(I*=-1),!p)return null;const m=[a,f,.5*p];return i&&(m[3]=c,m[4]=.5*I),m}function ne(e,t,n,s,i){const r=A(s,i);let l=t,u=t+r,o=0,a=0,f=0,c=0;for(let p=0,I=n-1;p<I;p++,l+=r,u+=r){const m=e[l],S=e[l+1],P=e[l+2],h=e[u],N=e[u+1],g=e[u+2],y=s?se(m,S,P,h,N,g):ie(m,S,h,N);if(y)if(o+=y,s){const d=oe(m,S,P,h,N,g);a+=y*d[0],f+=y*d[1],c+=y*d[2]}else{const d=le(m,S,h,N);a+=y*d[0],f+=y*d[1]}}return o>0?s?[a/o,f/o,c/o]:[a/o,f/o]:n>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function ie(e,t,n,s){const i=n-e,r=s-t;return Math.sqrt(i*i+r*r)}function se(e,t,n,s,i,r){const l=s-e,u=i-t,o=r-n;return Math.sqrt(l*l+u*u+o*o)}function le(e,t,n,s){return[e+.5*(n-e),t+.5*(s-t)]}function oe(e,t,n,s,i,r){return[e+.5*(s-e),t+.5*(i-t),n+.5*(r-n)]}function ue(e){return e==="mesh"?D:Z(e)}function x(e,t){return e?t?4:3:t?3:2}function ae(e,t,n,s){return U(e,t,n,s.coords[0],s.coords[1])}function ce(e,t,n,s,i,r){const l=x(i,r),{coords:u,lengths:o}=s;if(!o)return!1;for(let a=0,f=0;a<o.length;a++,f+=l)if(!U(e,t,n,u[f],u[f+1]))return!1;return!0}function U(e,t,n,s,i){if(!e)return!1;const r=x(t,n),{coords:l,lengths:u}=e;let o=!1,a=0;for(const f of u)o=fe(o,l,r,a,f,s,i),a+=f*r;return o}function fe(e,t,n,s,i,r,l){let u=e,o=s;for(let a=s,f=s+i*n;a<f;a+=n){o=a+n,o===f&&(o=s);const c=t[a],p=t[a+1],I=t[o],m=t[o+1];(p<l&&m>=l||m<l&&p>=l)&&c+(l-p)/(m-p)*(I-c)<r&&(u=!u)}return u}const v="unsupported-query",pe={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},V={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function me(e){return e!=null&&V.spatialRelationship[e]===!0}function Ie(e){return e!=null&&V.queryGeometry[L(e)]===!0}function he(e){return e!=null&&V.layerGeometry[e]===!0}function Ne(){return H(()=>import("./geometryEngineJSON-jXV8q20E.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4]))}function Ee(e,t,n,s,i){if(_(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const r=q(new G,t,!1,!1);return Promise.resolve(l=>ae(r,!1,!1,l))}if(_(t)&&n==="esriGeometryMultipoint"){const r=q(new G,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>ce(r,!1,!1,l,s,i))}if($(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(r=>J(t,E(n,s,i,r)));if($(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(r=>W(t,E(n,s,i,r)));if($(t)&&e==="esriSpatialRelIntersects"){const r=ue(n);return Promise.resolve(l=>r(t,E(n,s,i,l)))}return Ne().then(r=>{const l=r[pe[e]].bind(null,t.spatialReference,t);return u=>l(E(n,s,i,u))})}async function $e(e,t,n){var r;const{spatialRel:s,geometry:i}=e;if(i){if(!me(s))throw new b(v,"Unsupported query spatial relationship",{query:e});if(O(i.spatialReference)&&O(n)){if(!Ie(i))throw new b(v,"Unsupported query geometry type",{query:e});if(!he(t))throw new b(v,"Unsupported layer geometry type",{query:e});if(e.outSR)return K((r=e.geometry)==null?void 0:r.spatialReference,e.outSR)}}}function be(e){if($(e))return!0;if(_(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function ve(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:s,endTimeField:i}=e;let r=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(s&&i)await t.forEach(u=>{const o=n.getAttribute(u,s),a=n.getAttribute(u,i);o==null||isNaN(o)||(r=Math.min(r,o)),a==null||isNaN(a)||(l=Math.max(l,a))});else{const u=s||i;await t.forEach(o=>{const a=n.getAttribute(o,u);a==null||isNaN(a)||(r=Math.min(r,a),l=Math.max(l,a))})}return{start:r,end:l}}function _e(e,t,n){var o;if(!t||!e)return null;const{startTimeField:s,endTimeField:i}=e;if(!s&&!i)return null;const{start:r,end:l}=t;if(r===null&&l===null)return null;if(r===void 0&&l===void 0)return de();const u=((o=n.getAttributeAsTimestamp)==null?void 0:o.bind(n))??n.getAttribute.bind(n);return s&&i?ye(u,s,i,r,l):ge(u,s||i,r,l)}function ye(e,t,n,s,i){return s!=null&&i!=null?r=>{const l=e(r,t),u=e(r,n);return(l==null||l<=i)&&(u==null||u>=s)}:s!=null?r=>{const l=e(r,n);return l==null||l>=s}:i!=null?r=>{const l=e(r,t);return l==null||l<=i}:void 0}function ge(e,t,n,s){return n!=null&&s!=null&&n===s?i=>e(i,t)===n:n!=null&&s!=null?i=>{const r=e(i,t);return r!=null&&r>=n&&r<=s}:n!=null?i=>{const r=e(i,t);return r!=null&&r>=n}:s!=null?i=>{const r=e(i,t);return r!=null&&r<=s}:void 0}function de(){return()=>!1}export{be as I,Ee as P,E as a,ve as b,Ge as h,Pe as n,_e as t,$e as v,Te as y};
//# sourceMappingURL=timeSupport-CrJg8qIA.js.map
