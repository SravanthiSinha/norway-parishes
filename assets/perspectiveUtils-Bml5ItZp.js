import{j as t,m as l,k,an as w,gl as d,e$ as E,c0 as J,gm as c,aN as M}from"./index-CyZqSx7I.js";import{p as O}from"./normalizeUtilsSync-DK_8hqL0.js";import{u as g,i as y,c as h,r as i}from"./mat3-Doicj2BK.js";import{e as p}from"./mat3f64-q3fE-ZOt.js";import{o as x,N as z}from"./vec32-Tb7lCH7n.js";let s=class extends w{constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:d(o.extent)}get coords(){var e;const o=(e=this.element.georeference)==null?void 0:e.coords;return E(o,this.spatialReference).geometry}get normalizedCoords(){return J.fromJSON(O(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([k("esri.layers.support.MediaElementView")],s);const r=M(),u=p(),a=p(),m=p();function G(o,e,n){return x(r,e[0],e[1],1),z(r,r,g(u,n)),r[2]===0?c(o,r[0],r[1]):c(o,r[0]/r[2],r[1]/r[2])}function H(o,e,n){return f(a,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),f(m,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),y(o,h(a,a),m),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function f(o,e,n,v,C,b,N,j,B){i(o,e,v,b,n,C,N,1,1,1),x(r,j,B,1),h(u,o);const[R,V,$]=z(r,r,g(u,u));return i(u,R,0,0,0,V,0,0,0,$),y(o,u,o)}export{H as j,s as m,G as p};
//# sourceMappingURL=perspectiveUtils-Bml5ItZp.js.map
