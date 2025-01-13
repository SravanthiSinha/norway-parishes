const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/symbolLayerUtils-KhTDN_v2.js","assets/index-vxzybAz5.js","assets/index-Jib82o7I.css"])))=>i.map(i=>d[i]);
import{el as v,aY as f,er as u,fo as z,U as S,fp as p,fq as m,fr as _,fs as E,ft as C,_ as R,fu as O,fv as A}from"./index-vxzybAz5.js";import{C as w}from"./cimSymbolUtils-D5eeIrwR.js";const g="picture-fill",k="simple-fill",I="simple-line",$="simple-marker",M="text",U="cim",b=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),d=new v(1e3);function tt(t){const n=t.style;let o=null;if(t)switch(t.type){case $:n!=="cross"&&n!=="x"&&(o=t.color);break;case k:n&&n!=="solid"?n!=="none"&&(o={type:"pattern",x:0,y:0,src:z(`esri/symbols/patterns/${n}.png`),width:5,height:5}):o=t.color;break;case g:o={type:"pattern",src:t.url,width:u(t.width)*t.xscale,height:u(t.height)*t.yscale,x:u(t.xoffset),y:u(t.yoffset)};break;case M:o=t.color;break;case U:o=w(t)}return o}function nt(t,n){const o=t+"-"+n;return d.get(o)!==void 0?Promise.resolve(d.get(o)):S(t,{responseType:"image"}).then(e=>{const r=e.data,l=r.naturalWidth,s=r.naturalHeight,a=document.createElement("canvas");a.width=l,a.height=s;const i=a.getContext("2d");i.fillStyle=n,i.fillRect(0,0,l,s),i.globalCompositeOperation="destination-in",i.drawImage(r,0,0);const c=a.toDataURL();return d.put(o,c),c})}function x(t){if(!t)return null;let n=null;switch(t.type){case k:case g:case $:n=x(t.outline);break;case I:{const o=u(t.width);t.style!=null&&t.style!=="none"&&o!==0&&(n={color:t.color,style:N(t.style),width:o,cap:t.cap,join:t.join==="miter"?u(t.miterLimit):t.join},n.dashArray=D(n).join(",")||"none");break}default:n=null}return n}function D(t){if(!(t!=null&&t.style))return[];const{dashArray:n,style:o,width:e}=t;if(typeof n=="string"&&n!=="none")return n.split(",").map(s=>Number(s));const r=e??0,l=b.has(o)?b.get(o).map(s=>s*r):[];if(t.cap!=="butt")for(const[s,a]of l.entries())l[s]=s%2==1?a+r:Math.max(a-r,1);return l}const N=(()=>{const t={};return n=>{if(t[n])return t[n];const o=n.replaceAll("-","");return t[n]=o,o}})(),ot=new f([128,128,128]),P=new f("white");function T(t){var o,e;const n=(o=t.symbolLayers)==null?void 0:o.at(-1);if(n&&"outline"in n)return(e=n==null?void 0:n.outline)==null?void 0:e.size}function et(t){var n;if(!t)return 0;if(p(t)){const o=T(t);return o??0}return A((n=x(t))==null?void 0:n.width)}function rt(t){if(t==null||!("symbolLayers"in t)||t.symbolLayers==null)return!1;switch(t.type){case"point-3d":return t.symbolLayers.some(n=>n.type==="object");case"line-3d":return t.symbolLayers.some(n=>n.type==="path");case"polygon-3d":return t.symbolLayers.some(n=>n.type==="object"||n.type==="extrude");default:return!1}}function lt(t){var n;return((n=t.resource)==null?void 0:n.href)??""}function st(t,n){if(!t)return null;let o=null;return p(t)?o=q(t):m(t)&&(o=t.type==="cim"?w(t):t.color?new f(t.color):null),o?y(o,n):null}function q(t){const n=t.symbolLayers;if(!n)return null;let o=null;return n.forEach(e=>{var r;e.type==="object"&&((r=e.resource)!=null&&r.href)||(o=e.type==="water"?e.color:e.material?e.material.color:null)}),o?new f(o):null}function y(t,n){if(n==null||t==null)return t;const o=t.toRgba();return o[3]=o[3]*n,new f(o)}function H(t,n,o){const e=t.symbolLayers;if(!e)return;const r=l=>y(n=n??l??(o!=null?P:null),o);e.forEach(l=>{var s,a;if(l.type!=="object"||!((s=l.resource)!=null&&s.href)||n)if(l.type==="water")l.color=r(l.color);else{const i=l.material!=null?l.material.color:null,c=r(i);l.material==null?l.material=new _({color:c}):l.material.color=c,o!=null&&"outline"in l&&((a=l.outline)==null?void 0:a.color)!=null&&(l.outline.color=y(l.outline.color,o))}})}function J(t,n,o){var e;(n=n??t.color)&&(t.color=y(n,o)),o!=null&&"outline"in t&&((e=t.outline)!=null&&e.color)&&(t.outline.color=y(t.outline.color,o))}function it(t,n,o){t&&(n||o!=null)&&(n&&(n=new f(n)),p(t)?H(t,n,o):m(t)&&J(t,n,o))}async function V(t,n){const o=t.symbolLayers;o&&await E(o,async e=>W(e,n))}async function W(t,n){switch(t.type){case"extrude":B(t,n);break;case"icon":case"line":case"text":Y(t,n);break;case"path":G(t,n);break;case"object":await F(t,n)}}function Y(t,n){const o=L(n);o!=null&&(t.size=o)}function L(t){for(const n of t)if(typeof n=="number")return n;return null}function B(t,n){t.size=typeof n[2]=="number"?n[2]:0}async function F(t,n){const{resourceSize:o,symbolSize:e}=await K(t),r=j(n,o,e);t.width=h(n[0],e[0],o[0],r),t.depth=h(n[1],e[1],o[1],r),t.height=h(n[2],e[2],o[2],r)}function G(t,n){const o=j(n,C,[t.width,void 0,t.height]);t.width=h(n[0],t.width,1,o),t.height=h(n[2],t.height,1,o)}function j(t,n,o){for(let e=0;e<3;e++){const r=t[e];switch(r){case"symbol-value":{const l=o[e];return l!=null?l/n[e]:1}case"proportional":break;default:if(r&&n[e])return r/n[e]}}return 1}async function K(t){const{computeObjectLayerResourceSize:n}=await R(()=>import("./symbolLayerUtils-KhTDN_v2.js"),__vite__mapDeps([0,1,2])),o=await n(t,10),{width:e,height:r,depth:l}=t,s=[e,l,r];let a=1;for(let i=0;i<3;i++){const c=s[i];if(c!=null){a=c/o[i];break}}for(let i=0;i<3;i++)s[i]==null&&(s[i]=o[i]*a);return{resourceSize:o,symbolSize:s}}function h(t,n,o,e){switch(t){case"proportional":return o*e;case"symbol-value":return n??o;default:return t}}function Q(t,n){const o=L(n);if(o!=null)switch(t.type){case"simple-marker":t.size=o;break;case"picture-marker":{const e=t.width/t.height;e>1?(t.width=o,t.height=o*e):(t.width=o*e,t.height=o);break}case"simple-line":t.width=o;break;case"text":t.font.size=o}}async function at(t,n){if(t&&n)return p(t)?V(t,n):void(m(t)&&Q(t,n))}function ct(t,n,o){if(t&&n!=null)if(p(t)){const e=t.symbolLayers;e&&e.forEach(r=>{if(r.type==="object")switch(o){case"tilt":r.tilt=(r.tilt??0)+n;break;case"roll":r.roll=(r.roll??0)+n;break;default:r.heading=(r.heading??0)+n}r.type==="icon"&&(r.angle+=n)})}else m(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle+=n))}function ut(t){if(!t)return null;const n=t.effects.filter(o=>o.type!=="bloom").map(o=>o.toJSON());return O(n)}async function ft(t,n){return await t.fetchSymbol(n)||t.fetchCIMSymbol(n)}export{ct as D,ut as I,ft as N,at as R,it as a,ot as b,rt as c,nt as f,D as g,st as h,et as m,lt as p,tt as u,N as w,x as y};
//# sourceMappingURL=utils-Bluenh4r.js.map
