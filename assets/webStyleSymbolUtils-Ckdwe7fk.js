import{I as $,fw as E,G as N,aQ as f,eV as h,fx as j,fy as v,fz as x,fA as D,fp as F,fB as d,fC as w,fD as M,fE as R}from"./index-Dqo4rVFT.js";function B(t){return t=t||globalThis.location.hostname,C.some(e=>(t==null?void 0:t.match(e))!=null)}function S(t,e){return t?(e=e||globalThis.location.hostname)?e.match(U)!=null||e.match(P)!=null?t.replace("static.arcgis.com","staticdev.arcgis.com"):e.match(O)!=null||e.match(T)!=null?t.replace("static.arcgis.com","staticqa.arcgis.com"):t:t:null}const U=/^devext\.arcgis\.com$/,O=/^qaext\.arcgis\.com$/,P=/^[\w-]*\.mapsdevext\.arcgis\.com$/,T=/^[\w-]*\.mapsqa\.arcgis\.com$/,C=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,U,O,/^jsapps\.esri\.com$/,P,T];function G(t,e,l,a){const n=t.name;return n==null?Promise.reject(new $("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName==="Esri2DPointSymbolsStyle"?Q(n,e,a):E(t,e,a).then(o=>q(o,n,e,l,R,a))}function _(t,e){return e.items.find(l=>l.name===t)}function q(t,e,l,a,n,o){var b,g;const r=(l==null?void 0:l.portal)!=null?l.portal:N.getDefault(),y={portal:r,url:f(t.baseUrl),origin:"portal-item"},i=_(e,t.data);if(!i){const u=`The symbol name '${e}' could not be found`;return Promise.reject(new $("symbolstyleutils:symbol-name-not-found",u,{symbolName:e}))}let m=h(n(i,a),y),c=((b=i.thumbnail)==null?void 0:b.href)??null;const p=(g=i.thumbnail)==null?void 0:g.imageData;B()&&(m=S(m)??"",c=S(c));const z={portal:r,url:f(j(m)),origin:"portal-item"};return v(m,o).then(u=>{const I=a==="cimRef"?x(u.data):u.data,s=D(I,z);if(s&&F(s)){if(c){const A=h(c,y);s.thumbnail=new d({url:A})}else p&&(s.thumbnail=new d({url:`data:image/png;base64,${p}`}));t.styleUrl?s.styleOrigin=new w({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(s.styleOrigin=new w({portal:l.portal,styleName:t.styleName,name:e}))}return s})}function Q(t,e,l){const a=M.replaceAll(/\{SymbolName\}/gi,t),n=e.portal!=null?e.portal:N.getDefault();return v(a,l).then(o=>{const r=x(o.data);return D(r,{portal:n,url:f(j(a)),origin:"portal-item"})})}const W=Object.freeze(Object.defineProperty({__proto__:null,fetchSymbolFromStyle:q,getStyleItemFromStyle:_,resolveWebStyleSymbol:G},Symbol.toStringTag,{value:"Module"}));export{S as a,G as g,W as w};
//# sourceMappingURL=webStyleSymbolUtils-Ckdwe7fk.js.map
