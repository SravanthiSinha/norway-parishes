import{cZ as S,fY as e,fZ as M,f_ as P,f$ as t,a9 as R,g0 as T,g1 as l,g2 as C,fJ as W,aN as N}from"./index-CRM8otC0.js";function O(u,a,s){const c=Math.sin(u),r=Math.cos(u),o=Math.sin(a),f=Math.cos(a),n=s;return n[0]=-c,n[4]=-o*r,n[8]=f*r,n[12]=0,n[1]=r,n[5]=-o*c,n[9]=f*c,n[13]=0,n[2]=0,n[6]=f,n[10]=o,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function F(u,a,s){return O(u,a,s),S(s,s),s}function h(u,a,s,c){if(u==null||c==null)return!1;const r=e(u,M),o=e(c,P);if(r===o&&!i(o)&&(r!==t.UNKNOWN||R(u,c)))return T(s,a),!0;if(i(o)){const n=l[r][t.LON_LAT],L=l[t.LON_LAT][o];return n!=null&&L!=null&&(n(a,0,E,0),L(E,0,_,0),O(A*E[0],A*E[1],s),s[12]=_[0],s[13]=_[1],s[14]=_[2],!0)}const f=i(r);if((o===t.WEB_MERCATOR||o===t.PLATE_CARREE||o===t.WGS84||o===t.CGCS2000)&&(r===t.WGS84||f||r===t.WEB_MERCATOR||r===t.CGCS2000)){const n=l[r][t.LON_LAT],L=l[t.LON_LAT][o];return n!=null&&L!=null&&(n(a,0,E,0),L(E,0,_,0),f?F(A*E[0],A*E[1],s):C(s),s[12]=_[0],s[13]=_[1],s[14]=_[2],!0)}return!1}function i(u){return u===t.SPHERICAL_ECEF||u===t.SPHERICAL_MARS_PCPF||u===t.SPHERICAL_MOON_PCPF||u===t.WGS84_ECEF}const A=W(1),E=N(),_=N();export{h as C};
//# sourceMappingURL=computeTranslationToOriginAndRotation-Dxo2OeS6.js.map
