import{U as a,eq as s}from"./index-Bs-G_wsu.js";import{t as l}from"./utils-DNeoUrM2.js";import{N as u}from"./utils-QoxeSIg4.js";import"./jsxFactory-C0q8jVKr.js";import"./uuid-Cl5lrJ4c.js";import"./mat2df32-orApM5a3.js";import"./webStyleSymbolUtils--WJMcGji.js";import"./jsonUtils-qHdUfL9L.js";import"./parser-DP7rDSW3.js";import"./utils-DzB8n6BG.js";import"./cimSymbolUtils-BEawzYi7.js";function U(i,e,t){var p;const h=(p=i.thumbnail)==null?void 0:p.url;return h?a(h,{responseType:"image"}).then(m=>{const o=d(m.data,t);return t!=null&&t.node?(t.node.appendChild(o),t.node):o}):u(i).then(m=>m?e(m,t):null)}function d(i,e){const t=!/\\.svg$/i.test(i.src)&&(e==null?void 0:e.disableUpsampling),h=Math.max(i.width,i.height);let p=(e==null?void 0:e.maxSize)!=null?s(e.maxSize):l.maxSize;t&&(p=Math.min(h,p));const m=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,o=Math.min(p,m!=null?s(m):h);if(o!==h){const r=i.width!==0&&i.height!==0?i.width/i.height:1;r>=1?(i.width=o,i.height=o/r):(i.width=o*r,i.height=o)}return i}export{U as previewWebStyleSymbol};
