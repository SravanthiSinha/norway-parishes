import{G as $,aQ as f,I as N,eU as h,fx as U,fy as j,fz as v,fA as x,fq as A,fB as d,fC as S,fD as E,fE as M,fF as R}from"./index-5zHX_dwk.js";function B(t){return t=t||globalThis.location.hostname,C.some(e=>(t==null?void 0:t.match(e))!=null)}function w(t,e){return t?(e=e||globalThis.location.hostname)?e.match(D)!=null||e.match(P)!=null?t.replace("static.arcgis.com","staticdev.arcgis.com"):e.match(O)!=null||e.match(q)!=null?t.replace("static.arcgis.com","staticqa.arcgis.com"):t:t:null}const D=/^devext\.arcgis\.com$/,O=/^qaext\.arcgis\.com$/,P=/^[\w-]*\.mapsdevext\.arcgis\.com$/,q=/^[\w-]*\.mapsqa\.arcgis\.com$/,C=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,D,O,/^jsapps\.esri\.com$/,P,q];function G(t,e,l,a){const n=t.name;return n==null?Promise.reject(new N("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName==="Esri2DPointSymbolsStyle"?Q(n,e,a):E(t,e,a).then(o=>_(o,n,e,l,M,a))}function T(t,e){return e.items.find(l=>l.name===t)}function _(t,e,l,a,n,o){var b,g;const r=(l==null?void 0:l.portal)!=null?l.portal:$.getDefault(),y={portal:r,url:f(t.baseUrl)},i=T(e,t.data);if(!i){const u=`The symbol name '${e}' could not be found`;return Promise.reject(new N("symbolstyleutils:symbol-name-not-found",u,{symbolName:e}))}let m=h(n(i,a),y),c=((b=i.thumbnail)==null?void 0:b.href)??null;const p=(g=i.thumbnail)==null?void 0:g.imageData;B()&&(m=w(m)??"",c=w(c));const z={portal:r,url:f(U(m)),origin:"portal-item"};return j(m,o).then(u=>{const F=a==="cimRef"?v(u.data):u.data,s=x(F,z);if(s&&A(s)){if(c){const I=h(c,y);s.thumbnail=new d({url:I})}else p&&(s.thumbnail=new d({url:`data:image/png;base64,${p}`}));t.styleUrl?s.styleOrigin=new S({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(s.styleOrigin=new S({portal:l.portal,styleName:t.styleName,name:e}))}return s})}function Q(t,e,l){const a=R.replaceAll(/\{SymbolName\}/gi,t),n=e.portal!=null?e.portal:$.getDefault();return j(a,l).then(o=>{const r=v(o.data);return x(r,{portal:n,url:f(U(a)),origin:"portal-item"})})}const k=Object.freeze(Object.defineProperty({__proto__:null,fetchSymbolFromStyle:_,getStyleItemFromStyle:T,resolveWebStyleSymbol:G},Symbol.toStringTag,{value:"Module"}));export{w as a,G as g,k as w};
//# sourceMappingURL=webStyleSymbolUtils-BBMb2hWh.js.map
