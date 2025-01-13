import{bk as on,bl as en,bm as tn,bn as sn,I as x,s as un,bo as T,bp as ln,bq as cn,br as an,bs as F,aP as fn,bt as hn}from"./index-DDxdo46s.js";function p(n,r){return n?r?4:3:r?3:2}const v=()=>un.getLogger("esri.layers.graphics.featureConversionUtils"),D={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},dn=(n,r,o,e,s,t)=>{n[o]=s,n[o+1]=t},A=(n,r,o,e,s,t)=>{n[o]=s,n[o+1]=t,n[o+2]=r[e+2]},mn=(n,r,o,e,s,t)=>{n[o]=s,n[o+1]=t,n[o+2]=r[e+3]},gn=(n,r,o,e,s,t)=>{n[o]=s,n[o+1]=t,n[o+2]=r[e+2],n[o+3]=r[e+3]};function L(n,r,o,e){if(n){if(o)return r&&e?gn:A;if(r&&e)return mn}else if(r&&e)return A;return dn}function $({scale:n,translate:r},o){return Math.round((o-r[0])/n[0])}function z({scale:n,translate:r},o){return Math.round((r[1]-o)/n[1])}function E({scale:n,translate:r},o,e){return o*n[e]+r[e]}function qn(n,r,o){return n?r?o?S(n):U(n):o?R(n):j(n):null}function j(n){const r=n.coords;return{x:r[0],y:r[1]}}function B(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n}function U(n){const r=n.coords;return{x:r[0],y:r[1],z:r[2]}}function yn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.z,n}function R(n){const r=n.coords;return{x:r[0],y:r[1],m:r[2]}}function pn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.m,n}function S(n){const r=n.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function bn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.z,n.coords[3]=r.m,n}function wn(n,r,o,e){let s=j;o&&e?s=S:o?s=U:e&&(s=R);for(const t of r){const{geometry:u,attributes:l}=t,i=u!=null?s(u):null;n.push({attributes:l,geometry:i})}return n}function V(n,r){return n&&r?bn:n?yn:r?pn:B}function In(n,r,o,e,s){const t=V(o,e);for(const{geometry:u,attributes:l}of r){const i=u!=null?t(new T,u):null;n.push(new F(i,l,null,s?l[s]:void 0))}return n}function Mn(n,r,o=V(r.z!=null,r.m!=null)){return o(n,r)}function Gn(n,r,o,e){for(const{geometry:s,attributes:t}of r)n.push({attributes:t,geometry:s!=null?H(s,o,e):null});return n}function H(n,r,o){if(n==null)return null;const e=p(r,o),s=[];for(let t=0;t<n.coords.length;t+=e){const u=[];for(let l=0;l<e;l++)u.push(n.coords[t+l]);s.push(u)}return r?o?{points:s,hasZ:r,hasM:o}:{points:s,hasZ:r}:o?{points:s,hasM:o}:{points:s}}function Nn(n,r,o,e,s){const t=p(o,e);for(const{geometry:u,attributes:l}of r){const i=u!=null?J(new T,u,t):null;n.push(new F(i,l,null,s?l[s]:void 0))}return n}function J(n,r,o=p(r.hasZ,r.hasM)){n.lengths[0]=r.points.length;const e=n.coords;let s=0;for(const t of r.points)for(let u=0;u<o;u++)e[s++]=t[u];return n}function Tn(n,r,o,e){for(const{geometry:s,attributes:t}of r)n.push({attributes:t,geometry:s!=null?K(s,o,e):null});return n}function K(n,r,o){if(!n)return null;const e=p(r,o),{coords:s,lengths:t}=n,u=[];let l=0;for(const i of t){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<e;h++)f.push(s[l++]);c.push(f)}u.push(c)}return r?o?{paths:u,hasZ:r,hasM:o}:{paths:u,hasZ:r}:o?{paths:u,hasM:o}:{paths:u}}function Pn(n,r,o,e,s){const t=p(o,e);for(const{geometry:u,attributes:l,centroid:i}of r){const c=u!=null?Q(new T,u,t):null,a=i!=null?Mn(new T,i):null;n.push(new F(c,l,a,s?l[s]:void 0))}return n}function Q(n,r,o=p(r.hasZ,r.hasM)){const{lengths:e,coords:s}=n;let t=0;for(const u of r.paths){for(const l of u)for(let i=0;i<o;i++)s[t++]=l[i];e.push(u.length)}return n}function Fn(n,r,o,e){for(const{geometry:s,attributes:t,centroid:u}of r){const l=s!=null?W(s,o,e):null;if(u!=null){const i=j(u);n.push({attributes:t,centroid:i,geometry:l})}else n.push({attributes:t,geometry:l})}return n}function W(n,r,o){if(!n)return null;const e=p(r,o),{coords:s,lengths:t}=n,u=[];let l=0;for(const i of t){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<e;h++)f.push(s[l++]);c.push(f)}u.push(c)}return r?o?{rings:u,hasZ:r,hasM:o}:{rings:u,hasZ:r}:o?{rings:u,hasM:o}:{rings:u}}function Zn(n,r,o,e,s){for(const{geometry:t,centroid:u,attributes:l}of r){const i=t!=null?X(new T,t,o,e):null,c=s?l[s]:void 0;u!=null?n.push(new F(i,l,B(new T,u),c)):n.push(new F(i,l,null,c))}return n}function X(n,r,o=r.hasZ,e=r.hasM){return xn(n,r.rings,o,e)}function xn(n,r,o,e){const s=p(o,e),{lengths:t,coords:u}=n;let l=0;N(n);for(const i of r){for(const c of i)for(let a=0;a<s;a++)u[l++]=c[a];t.push(i.length)}return n}const P=[],Z=[];function Ln(n,r,o,e,s){P[0]=n;const[t]=nn(Z,P,r,o,e,s);return G(P),G(Z),t}function nn(n,r,o,e,s,t){if(G(n),!o){for(const u of r){const l=t?u.attributes[t]:void 0;n.push(new F(null,u.attributes,null,l))}return n}switch(o){case"esriGeometryPoint":return In(n,r,e,s,t);case"esriGeometryMultipoint":return Nn(n,r,e,s,t);case"esriGeometryPolyline":return Pn(n,r,e,s,t);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return Zn(n,r,e,s,t);default:v().error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${o}'`)),G(n)}return n}function Un(n,r,o,e){Z[0]=n,rn(P,Z,r,o,e);const s=P[0];return G(P),G(Z),s}function Rn(n,r,o){if(n==null)return null;const e=new T;return"hasZ"in n&&r==null&&(r=n.hasZ),"hasM"in n&&o==null&&(o=n.hasM),on(n)?V(r??n.z!=null,o??n.m!=null)(e,n):en(n)?X(e,n,r,o):tn(n)?Q(e,n,p(r,o)):sn(n)?J(e,n,p(r,o)):void v().error("convertFromGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${n}'`))}function vn(n,r,o,e){const s=n&&("coords"in n?n:n.geometry);if(s==null)return null;switch(r){case"esriGeometryPoint":{let t=j;return o&&e?t=S:o?t=U:e&&(t=R),t(s)}case"esriGeometryMultipoint":return H(s,o,e);case"esriGeometryPolyline":return K(s,o,e);case"esriGeometryPolygon":return W(s,o,e);default:return v().error("convertToGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${r}'`)),null}}function kn(n,r){for(const o of r)n.push({attributes:o.attributes});return n}function rn(n,r,o,e,s){if(G(n),o==null)return kn(n,r);switch(o){case"esriGeometryPoint":return wn(n,r,e,s);case"esriGeometryMultipoint":return Gn(n,r,e,s);case"esriGeometryPolyline":return Tn(n,r,e,s);case"esriGeometryPolygon":return Fn(n,r,e,s);default:v().error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${o}'`))}return n}function Sn(n){const{objectIdFieldName:r,spatialReference:o,transform:e,fields:s,hasM:t,hasZ:u,features:l,geometryType:i,exceededTransferLimit:c,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=n,d={features:rn([],l,i,u,t),fields:s,geometryType:i,objectIdFieldName:r,spatialReference:o,uniqueIdField:a,queryGeometry:vn(f,h,!1,!1)};return e&&(d.transform=e),c&&(d.exceededTransferLimit=c),t&&(d.hasM=t),u&&(d.hasZ=u),d}function Vn(n,r){const o=new hn,{hasM:e,hasZ:s,features:t,objectIdFieldName:u,spatialReference:l,geometryType:i,exceededTransferLimit:c,transform:a,fields:f}=n;return f&&(o.fields=f),o.geometryType=i??null,o.objectIdFieldName=u??r??null,o.spatialReference=l??null,o.objectIdFieldName?(t&&nn(o.features,t,i,s,e,o.objectIdFieldName),c&&(o.exceededTransferLimit=c),e&&(o.hasM=e),s&&(o.hasZ=s),a&&(o.transform=a),o):(v().error(new x("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function Yn(n){const{transform:r,features:o,hasM:e,hasZ:s}=n;if(!r)return n;for(const t of o)t.geometry!=null&&O(t.geometry,t.geometry,e,s,r),t.centroid!=null&&O(t.centroid,t.centroid,e,s,r);return n.transform=null,n}function _n(n,r){const{geometryType:o,features:e,hasM:s,hasZ:t}=r;if(!n)return r;for(let u=0;u<e.length;u++){const l=e[u],i=l.weakClone();i.geometry=new T,C(i.geometry,l.geometry,s,t,o,n),l.centroid&&(i.centroid=new T,C(i.centroid,l.centroid,s,t,"esriGeometryPoint",n)),e[u]=i}return r.transform=n,r}function C(n,r,o,e,s,t,u=o,l=e){if(N(n),!(r!=null&&r.coords.length))return null;const i=D[s],{coords:c,lengths:a}=r,f=p(o,e),h=p(o&&u,e&&l),d=L(o,e,u,l);if(!a.length)return d(n.coords,c,0,0,$(t,c[0]),z(t,c[1])),N(n,f,0),n;let m,y,w,I,b=0,g=0,M=g;for(const Y of a){if(Y<i)continue;let k=0;g=M,w=m=$(t,c[b]),I=y=z(t,c[b+1]),d(n.coords,c,g,b,w,I),k++,b+=f,g+=h;for(let _=1;_<Y;_++,b+=f)w=$(t,c[b]),I=z(t,c[b+1]),w===m&&I===y||(d(n.coords,c,g,b,w-m,I-y),g+=h,k++,m=w,y=I);k>=i&&(n.lengths.push(k),M=g)}return G(n.coords,M),n.coords.length?n:null}function An(n,r,o,e,s,t,u=o,l=e){if(N(n),!(r!=null&&r.coords.length))return null;const i=D[s],{coords:c,lengths:a}=r,f=p(o,e),h=p(o&&u,e&&l),d=L(o,e,u,l);if(!a.length)return d(n.coords,c,0,0,c[0],c[1]),N(n,f,0),n;let m=0;const y=t*t;for(const w of a){if(w<i){m+=w*f;continue}const I=n.coords.length/h,b=m,g=m+(w-1)*f;d(n.coords,c,n.coords.length,b,c[b],c[b+1]),q(n.coords,c,f,y,d,b,g),d(n.coords,c,n.coords.length,g,c[g],c[g+1]);const M=n.coords.length/h-I;M>=i?n.lengths.push(M):G(n.coords,I*h),m+=w*f}return n.coords.length?n:null}function jn(n,r,o,e){const s=n[r],t=n[r+1],u=n[o],l=n[o+1],i=n[e],c=n[e+1];let a=u,f=l,h=i-a,d=c-f;if(h!==0||d!==0){const m=((s-a)*h+(t-f)*d)/(h*h+d*d);m>1?(a=i,f=c):m>0&&(a+=h*m,f+=d*m)}return h=s-a,d=t-f,h*h+d*d}function q(n,r,o,e,s,t,u){let l,i=e,c=0;for(let a=t+o;a<u;a+=o)l=jn(r,a,t,u),l>i&&(c=a,i=l);i>e&&(c-t>o&&q(n,r,o,e,s,t,c),s(n,r,n.length,c,r[c],r[c+1]),u-c>o&&q(n,r,o,e,s,c,u))}function Cn(n,r,o,e){var c;if(!((c=r==null?void 0:r.coords)!=null&&c.length))return null;const s=p(o,e);let t=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(r&&r.coords){const a=r.coords;for(let f=0;f<a.length;f+=s){const h=a[f],d=a[f+1];t=Math.min(t,h),l=Math.max(l,h),u=Math.min(u,d),i=Math.max(i,d)}}return ln(n)?cn(n,t,u,l,i):an(t,u,l,i,n),n}function O(n,r,o,e,s){const{coords:t,lengths:u}=r,l=p(o,e);if(!t.length)return n!==r&&N(n),n;fn(s);const{originPosition:i,scale:c,translate:a}=s,f=zn;f.originPosition=i;const h=f.scale;h[0]=c[0]??1,h[1]=-(c[1]??1),h[2]=c[2]??1,h[3]=c[3]??1;const d=f.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!u.length){for(let y=0;y<l;++y)n.coords[y]=E(f,t[y],y);return n!==r&&N(n,l,0),n}let m=0;for(let y=0;y<u.length;y++){const w=u[y];n.lengths[y]=w;for(let g=0;g<l;++g)n.coords[m+g]=E(f,t[m+g],g);let I=n.coords[m],b=n.coords[m+1];m+=l;for(let g=1;g<w;g++,m+=l){I+=t[m]*h[0],b+=t[m+1]*h[1],n.coords[m]=I,n.coords[m+1]=b;for(let M=2;M<l;++M)n.coords[m+M]=E(f,t[m+M],M)}}return n!==r&&N(n,t.length,u.length),n}function On(n,r,o,e,s,t){if(N(n),n.lengths.push(...r.lengths),o===s&&e===t)for(let u=0;u<r.coords.length;u++)n.coords.push(r.coords[u]);else{const u=p(o,e),l=L(o,e,s,t),i=r.coords;for(let c=0;c<i.length;c+=u)l(n.coords,i,n.coords.length,c,i[c],i[c+1])}return n}function $n(n,r,o,e){let s=0,t=n[e*r],u=n[e*(r+1)];for(let l=1;l<o;l++){const i=t+n[e*(r+l)],c=u+n[e*(r+l)+1],a=(i-t)*(c+u);t=i,u=c,s+=a}return .5*s}function Dn(n,r){const{coords:o,lengths:e}=n;let s=0,t=0;for(let u=0;u<e.length;u++){const l=e[u];t+=$n(o,s,l,r),s+=l}return Math.abs(t)}function N(n,r=0,o=0){G(n.lengths,o),G(n.coords,r)}function G(n,r=0){n.length!==r&&(n.length=r)}const zn={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{K as $,W as H,On as I,X as K,$ as N,Mn as O,qn as P,xn as Q,H as U,C as a,Dn as b,Vn as c,nn as e,_n as f,Cn as g,An as h,Yn as i,Sn as l,Un as n,Rn as o,O as p,vn as r,Ln as t,z as w};
//# sourceMappingURL=featureConversionUtils-CmZ7DdSb.js.map
