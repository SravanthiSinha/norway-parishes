import{U as r,es as p}from"./index-BMHxxDIj.js";import{t as l}from"./utils-Cg2U-TE0.js";import{N as u}from"./utils-BIDAGErU.js";import"./jsxFactory-BGTHxzk1.js";import"./uuid-Cl5lrJ4c.js";import"./mat2df32-orApM5a3.js";import"./webStyleSymbolUtils-BUcMChJW.js";import"./cimSymbolUtils-BCA-ZY4s.js";function S(e,i,t){var s;const m=(s=e.thumbnail)==null?void 0:s.url;return m?r(m,{responseType:"image"}).then(h=>{const o=d(h.data,t);return t!=null&&t.node?(t.node.appendChild(o),t.node):o}):u(e).then(h=>h?i(h,t):null)}function d(e,i){const t=!/\\.svg$/i.test(e.src)&&(i==null?void 0:i.disableUpsampling),m=Math.max(e.width,e.height);let s=(i==null?void 0:i.maxSize)!=null?p(i.maxSize):l.maxSize;t&&(s=Math.min(m,s));const h=typeof(i==null?void 0:i.size)=="number"?i==null?void 0:i.size:null,o=Math.min(s,h!=null?p(h):m);if(o!==m){const a=e.width!==0&&e.height!==0?e.width/e.height:1;a>=1?(e.width=o,e.height=o/a):(e.width=o*a,e.height=o)}return e}export{S as previewWebStyleSymbol};
//# sourceMappingURL=previewWebStyleSymbol-BIJrsuqU.js.map
