import{eq as v,I,a$ as E,er as D,es as L}from"./index-Cj37dcSI.js";import{c as U}from"./fontUtils-6U0vpjhT.js";import{u as T,y as q,g as V,f as W}from"./utils-l9fnRnEn.js";import{t as S,e as G,d as F,l as H}from"./utils-8MHANkUx.js";import"./jsonUtils-rZaWLITc.js";import"./parser-vcRqrJ90.js";import"./utils-DYmthu9k.js";import"./cimSymbolUtils-D_87uRJE.js";import"./jsxFactory-DFcGs_5w.js";import"./uuid-Cl5lrJ4c.js";import"./mat2df32-orApM5a3.js";import"./webStyleSymbolUtils-wZjd50YE.js";const O="picture-fill",$="picture-marker",J="simple-fill",K="simple-line",N="simple-marker",Q="text",X="Aa",Y=S.size,C=S.maxSize,_=S.maxOutlineSize,Z=S.lineWidth,A=225,ee=document.createElement("canvas");function R(a,e){const i=ee.getContext("2d"),n=[];e&&(e.weight&&n.push(e.weight),e.size&&n.push(e.size+"px"),e.family&&n.push(e.family)),i.font=n.join(" ");const{width:c,actualBoundingBoxLeft:h,actualBoundingBoxRight:p,actualBoundingBoxAscent:s,actualBoundingBoxDescent:u}=i.measureText(a);return{width:Math.ceil(Math.max(c,h+p)),height:Math.ceil(s+u),x:Math.floor(h),y:Math.floor((s-u)/2)}}function x(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?v(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?v(e.height):null}}async function ae(a,e){const i=e.fill,n=a.color;if((i==null?void 0:i.type)==="pattern"&&n&&a.type!==O){const c=await W(i.src,n.toCss(!0));i.src=c,e.fill=i}}async function ne(a,e,i,n){var p,s,u;if(!("font"in a)||!a.font||e.shape.type!=="text")return;try{await U(a.font)}catch{}const{width:c,height:h}=x(n);if(!/[\uE600-\uE6FF]/.test(e.shape.text)){const{width:d,height:f,x:l,y:o}=R(e.shape.text,{weight:(p=e.font)==null?void 0:p.weight,size:(s=e.font)==null?void 0:s.size,family:(u=e.font)==null?void 0:u.family});i[0]=c??d,i[1]=h??f,e.shape.x=l,e.shape.y=o;let w="angle"in a?a.angle:null;if((n==null?void 0:n.rotation)!=null&&(w=(w??0)+n.rotation),w){const M=w*(Math.PI/180),r=Math.abs(Math.sin(M)),m=Math.abs(Math.cos(M));i[1]=i[0]*r+i[1]*m}}}function ie(a,e,i,n,c){var h;if(a.haloColor!=null&&a.haloSize!=null){c.masking??(c.masking=i.map(()=>[]));const p=v(a.haloSize);n[0]+=p,n[1]+=p,i.unshift([{...e,fill:null,stroke:{color:a.haloColor,width:2*p,join:"round",cap:"round"}}]),c.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*L,height:n[1]+2*L},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}a.backgroundColor==null&&a.borderLineColor==null||(n[0]+=2*L,n[1]+=2*L,i.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,width:v(a.borderLineSize)}}]),(h=c.masking)==null||h.unshift([]))}function P(a,e){return a>e?"dark":"light"}function le(a,e){var M;const i=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,n=i!=null?v(i):null,c=(e==null?void 0:e.maxSize)!=null?v(e.maxSize):null;let h="angle"in a?a.angle:null;(e==null?void 0:e.rotation)!=null&&(h=(h??0)+e.rotation);const p=T(a);let s=q(a);oe(a,245)!=="dark"||e!=null&&e.ignoreWhiteSymbols||(s={width:.75,...s,color:"#bdc3c7"});const u={shape:null,fill:p,stroke:s,offset:[0,0]};s!=null&&s.width&&(s.width=Math.min(s.width,_));const d=(s==null?void 0:s.width)||0;let f=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),l=0,o=0,w=!1;switch(a.type){case N:{const r=a.style,{width:m,height:t}=x(e),b=m===t&&m!=null?m:n??Math.min(v(a.size),c||C);switch(l=b,o=b,r){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*b},f||(l+=d,o+=d);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[l,.5*o]},{command:"M",values:[.5*l,0]},{command:"L",values:[.5*l,o]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[.5*l,0]},{command:"L",values:[l,.5*o]},{command:"L",values:[.5*l,o]},{command:"Z",values:[]}]},f||(l+=d,o+=d);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},f||(l+=d,o+=d),h&&(w=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*l,0]},{command:"L",values:[l,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},f||(l+=d,o+=d),h&&(w=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,o]},{command:"M",values:[l,0]},{command:"L",values:[0,o]}]},h&&(w=!0);break;case"path":u.shape={type:"path",path:a.path||""},f||(l+=d,o+=d),h&&(w=!0),f=!0}break}case K:{const{width:r,height:m}=x(e),t=V(s).reduce((B,k)=>B+k,0),b=t&&Math.ceil(Z/t),y=m??n??d,g=r??(t*b||Z);s&&(s.width=y),l=g,o=y,f=!0,u.shape={type:"path",path:[{command:"M",values:[y/2,o/2]},{command:"L",values:[l-y/2,o/2]}]};break}case O:case J:{const r=typeof(e==null?void 0:e.symbolConfig)=="object"&&!!((M=e==null?void 0:e.symbolConfig)!=null&&M.isSquareFill),{width:m,height:t}=x(e);l=!r&&m!==t||m==null?n??Y:m,o=!r&&m!==t||t==null?l:t,f||(l+=d,o+=d),f=!0,u.shape=r?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,o]},{command:"L",values:[0,o]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:G.fill[0];break}case $:{const r=Math.min(v(a.width),c||C),m=Math.min(v(a.height),c||C),{width:t,height:b}=x(e),y=t===b&&t!=null?t:n??Math.max(r,m),g=r/m;l=g<=1?Math.ceil(y*g):y,o=g<=1?y:Math.ceil(y/g),u.shape={type:"image",x:-Math.round(l/2),y:-Math.round(o/2),width:l,height:o,src:a.url||""},h&&(w=!0);break}case Q:{const r=a,m=(e==null?void 0:e.overrideText)||r.text||X,t=r.font,{width:b,height:y}=x(e),g=y??n??Math.min(v(t.size),c||C),{width:B,height:k}=R(m,{weight:t.weight,size:g,family:t.family}),z=/[\uE600-\uE6FF]/.test(m);l=b??(z?g:B),o=z?g:k;let j=.5*(z?g:k);z&&(j+=5),u.shape={type:"text",text:m,x:r.xoffset||0,y:r.yoffset||j,align:"middle",alignBaseline:r.verticalAlignment,decoration:t&&t.decoration,rotated:r.rotated,kerning:r.kerning},u.font=t&&{size:g,style:t.style,decoration:t.decoration,weight:t.weight,family:t.family};break}}return{shapeDescriptor:u,size:[l,o],renderOptions:{node:e==null?void 0:e.node,scale:f,opacity:e==null?void 0:e.opacity,rotations:[h],useRotationSize:w,effectView:e==null?void 0:e.effectView,ariaLabel:e==null?void 0:e.ariaLabel}}}async function we(a,e){var p;const{shapeDescriptor:i,size:n,renderOptions:c}=le(a,e);if(!i.shape)throw new I("symbolPreview: renderPreviewHTML2D","symbol not supported.");await ae(a,i),await ne(a,i,n,e);const h=[[i]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&((p=e==null?void 0:e.symbolConfig)!=null&&p.applyColorModulation)){const s=.6*n[0];h.unshift([{...i,offset:[-s,0],fill:F(i.fill,-.3)}]),h.push([{...i,offset:[s,0],fill:F(i.fill,.3)}]),n[0]+=2*s,c.scale=!1}return a.type==="text"&&ie(a,i,h,n,c),H(h,n,c)}function oe(a,e=A){const i=T(a),n=q(a),c=!i||"type"in i?null:new E(i),h=n!=null&&n.color?new E(n==null?void 0:n.color):null,p=c?P(D(c),e):null,s=h?P(D(h),e):null;return s?p?p===s?p:e>=A?"light":"dark":s:p}export{oe as getContrastingBackgroundTheme,le as getRenderSymbolParameters,we as previewSymbol2D};
//# sourceMappingURL=previewSymbol2D-MGGjh1Wr.js.map
