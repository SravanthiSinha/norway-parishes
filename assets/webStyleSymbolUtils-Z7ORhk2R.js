import{I as $,fo as M,G as v,aT as f,eQ as h,fp as N,fq as j,fr as U,fs as x,fi as R,ft as d,fu as w,fv as A,fw as E}from"./index-Vdm0PCas.js";function G(t){return t=t||globalThis.location.hostname,Q.some(e=>(t==null?void 0:t.match(e))!=null)}function S(t,e){return t?(e=e||globalThis.location.hostname)?e.match(D)!=null||e.match(P)!=null?t.replace("static.arcgis.com","staticdev.arcgis.com"):e.match(O)!=null||e.match(T)!=null?t.replace("static.arcgis.com","staticqa.arcgis.com"):t:t:null}const D=/^devext\.arcgis\.com$/,O=/^qaext\.arcgis\.com$/,P=/^[\w-]*\.mapsdevext\.arcgis\.com$/,T=/^[\w-]*\.mapsqa\.arcgis\.com$/,Q=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,D,O,/^jsapps\.esri\.com$/,P,T];function W(t,e,l,a){const n=t.name;return n==null?Promise.reject(new $("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName==="Esri2DPointSymbolsStyle"?k(n,e,a):M(t,e,a).then(o=>_(o,n,e,l,E,a))}function q(t,e){return e.items.find(l=>l.name===t)}function _(t,e,l,a,n,o){var b,g;const r=(l==null?void 0:l.portal)!=null?l.portal:v.getDefault(),p={portal:r,url:f(t.baseUrl),origin:"portal-item"},i=q(e,t.data);if(!i){const u=`The symbol name '${e}' could not be found`;return Promise.reject(new $("symbolstyleutils:symbol-name-not-found",u,{symbolName:e}))}let m=h(n(i,a),p),c=((b=i.thumbnail)==null?void 0:b.href)??null;const y=(g=i.thumbnail)==null?void 0:g.imageData;G()&&(m=S(m)??"",c=S(c));const I={portal:r,url:f(N(m)),origin:"portal-item"};return j(m,o).then(u=>{const z=a==="cimRef"?U(u.data):u.data,s=x(z,I);if(s&&R(s)){if(c){const F=h(c,p);s.thumbnail=new d({url:F})}else y&&(s.thumbnail=new d({url:`data:image/png;base64,${y}`}));t.styleUrl?s.styleOrigin=new w({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(s.styleOrigin=new w({portal:l.portal,styleName:t.styleName,name:e}))}return s})}function k(t,e,l){const a=A.replaceAll(/\{SymbolName\}/gi,t),n=e.portal!=null?e.portal:v.getDefault();return j(a,l).then(o=>{const r=U(o.data);return x(r,{portal:n,url:f(N(a)),origin:"portal-item"})})}const C=Object.freeze(Object.defineProperty({__proto__:null,fetchSymbolFromStyle:_,getStyleItemFromStyle:q,resolveWebStyleSymbol:W},Symbol.toStringTag,{value:"Module"}));export{S as a,W as g,C as w};
//# sourceMappingURL=webStyleSymbolUtils-Z7ORhk2R.js.map
