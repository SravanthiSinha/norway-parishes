import{j as t,m as l,k as w,ar as E,gc as d,eY as J,bZ as M,gd as c,aQ as O}from"./index-Bs-G_wsu.js";import{p as Q}from"./normalizeUtilsSync-C73N-dkh.js";import{u as g,i as y,c as h,r as i}from"./mat3-CCtmvIux.js";import{e as p}from"./mat3f64-q3fE-ZOt.js";import{o as x,N as z}from"./vec32-DrHtz8AR.js";let s=class extends E{constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:d(o.extent)}get coords(){var e;const o=(e=this.element.georeference)==null?void 0:e.coords;return J(o,this.spatialReference).geometry}get normalizedCoords(){return M.fromJSON(Q(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([w("esri.layers.support.MediaElementView")],s);const r=O(),u=p(),a=p(),m=p();function A(o,e,n){return x(r,e[0],e[1],1),z(r,r,g(u,n)),r[2]===0?c(o,r[0],r[1]):c(o,r[0]/r[2],r[1]/r[2])}function D(o,e,n){return f(a,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),f(m,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),y(o,h(a,a),m),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function f(o,e,n,b,v,C,j,B,N){i(o,e,b,C,n,v,j,1,1,1),x(r,B,N,1),h(u,o);const[R,V,k]=z(r,r,g(u,u));return i(u,R,0,0,0,V,0,0,0,k),y(o,u,o)}export{D as j,s as m,A as p};
