import{gn as D,go as q,fn as F,eq as G}from"./index-Bs-G_wsu.js";import{e as I,s as V,$ as k}from"./CIMSymbolHelper-799C16L1.js";import{i as A}from"./CIMResourceManager-DP1-czn_.js";import{t as L,l as T}from"./utils-DNeoUrM2.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-B-QRqpgF.js";import"./GeometryUtils-JLgpq-p8.js";import"./definitions-C0Jy3zs7.js";import"./mat2df32-orApM5a3.js";import"./vec2f32-BbH2jxlN.js";import"./Rect-CUzevAry.js";import"./BoundingBox-CnpCxTZE.js";import"./imageUtils-DdVwTzau.js";import"./utils-QoxeSIg4.js";import"./jsonUtils-qHdUfL9L.js";import"./parser-DP7rDSW3.js";import"./utils-DzB8n6BG.js";import"./cimSymbolUtils-BEawzYi7.js";import"./jsxFactory-C0q8jVKr.js";import"./uuid-Cl5lrJ4c.js";import"./webStyleSymbolUtils--WJMcGji.js";const U=96/72;let W=class{constructor(i){this._spatialReference=i,this._imageDataCanvas=null,this._cimResourceManager=new A}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(i,h,r,o,n,t,l,y,v){if(!i)return null;const{data:g}=i;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g;t||(t=D(C));const c=await q.resolveSymbolOverrides(g,h,this._spatialReference,n,t,l,y),p=this._cimResourceManager,d=[];I.fetchResources(c,p,d),I.fetchFonts(c,p,d),d.length>0&&await Promise.all(d);const{width:a,height:s}=r,M=$(t,a,s,o),e=I.getEnvelope(c,M,p);if(!e)return null;e.x===1/0&&(e.x=a+2),e.y===1/0&&(e.y=-s/2),e.width===-1/0&&(e.width=a),e.height===-1/0&&(e.height=s);let m=1,x=0,R=0;switch(C.type){case"CIMPointSymbol":case"CIMTextSymbol":{let w=1;e.width>a&&(w=a/e.width);let b=1;e.height>s&&(b=s/e.height),o==="preview"&&(e.width<a&&(w=a/e.width),e.height<s&&(b=s/e.height)),m=Math.min(w,b),x=e.x+e.width/2,R=e.y+e.height/2}break;case"CIMLineSymbol":{(v||e.height>s)&&(m=s/e.height),R=e.y+e.height/2;const w=e.x*m+a/2,b=(e.x+e.width)*m+a/2,{paths:S}=M;S[0][0][0]-=w/m,S[0][2][0]-=(b-a)/m}break;case"CIMPolygonSymbol":{x=e.x+e.width/2,R=e.y+e.height/2;const w=e.x*m+a/2,b=(e.x+e.width)*m+a/2,S=e.y*m+s/2,z=(e.y+e.height)*m+s/2,{rings:f}=M;w<0&&(f[0][0][0]-=w,f[0][3][0]-=w,f[0][4][0]-=w),S<0&&(f[0][0][1]+=S,f[0][1][1]+=S,f[0][4][1]+=S),b>a&&(f[0][1][0]-=b-a,f[0][2][0]-=b-a),z>s&&(f[0][2][1]+=z-s,f[0][3][1]+=z-s)}}const E={type:"cim",data:{type:"CIMSymbolReference",symbol:c}};return this.rasterize(E,a,s,x,R,m,t,1,M)}rasterize(i,h,r,o,n,t,l,y=0,v=null){const{data:g}=i;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g,c=this._canvas,p=(window.devicePixelRatio||1)*U;c.width=h*p,c.height=r*p,l||(l=D(C)),v||(v=$(l,h,r,"legend")),c.width+=2*y,c.height+=2*y;const d=c.getContext("2d",{willReadFrequently:!0}),a=k.createIdentity();return a.translate(-o,-n),a.scale(t*p,-t*p),a.translate(h*p/2+y,r*p/2+y),d.clearRect(0,0,c.width,c.height),new V(d,this._cimResourceManager,a,!0).drawSymbol(C,v),d.getImageData(0,0,c.width,c.height)}};function $(u,i,h,r){const n=-i/2+1,t=i/2-1,l=h/2-1,y=-h/2+1;switch(u){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[n,0],[0,0],[t,0]]]};default:return r==="legend"?{rings:[[[n,l],[t,0],[t,y],[n,y],[n,l]]]}:{rings:[[[n,l],[t,l],[t,y],[n,y],[n,l]]]}}}const _=new W(null),P=F(L.size),O=F(L.maxSize),j=F(L.lineWidth),B=1;async function H(u,i,h){const r=i==null?void 0:i.size;let o=r!=null&&typeof r=="object"&&"width"in r?r.width:r,n=r!=null&&typeof r=="object"&&"height"in r?r.height:r;if(o==null||n==null)if(h==="esriGeometryPolygon")o=P,n=P;else{const t=await J(u,i,h);t&&(o=t.width,n=t.height),h==="esriGeometryPolyline"&&(o=j),o=o!=null&&isFinite(o)?Math.min(o,O):P,n=n!=null&&isFinite(n)?Math.max(Math.min(n,O),B):P}return i.style==="legend"&&h==="esriGeometryPolyline"&&(o=j),{width:o,height:n}}async function J(u,i,h){const{feature:r,fieldMap:o,viewParams:n}=i.cimOptions||i,t=await q.resolveSymbolOverrides(u.data,r,null,o,h,null,n);if(!t)return null;(u=u.clone()).data={type:"CIMSymbolReference",symbol:t},u.data.primitiveOverrides=void 0;const l=[];return I.fetchResources(t,_.resourceManager,l),I.fetchFonts(t,_.resourceManager,l),l.length>0&&await Promise.all(l),I.getEnvelope(t,null,_.resourceManager)}async function de(u,i={}){var x;const{node:h,opacity:r,symbolConfig:o}=i,n=o!=null&&typeof o=="object"&&"isSquareFill"in o&&o.isSquareFill,t=i.cimOptions||i,l=t.geometryType||D((x=u==null?void 0:u.data)==null?void 0:x.symbol),y=await H(u,i,l),{feature:v,fieldMap:g}=t,C=n||l!=="esriGeometryPolygon"?"preview":"legend",c=await _.rasterizeCIMSymbolAsync(u,v,y,C,g,l,null,t.viewParams,t.allowScalingUp);if(!c)return null;const{width:p,height:d}=c,a=document.createElement("canvas");a.width=p,a.height=d,a.getContext("2d").putImageData(c,0,0);const s=G(y.width),M=G(y.height),e=new Image(s,M);e.src=a.toDataURL(),e.ariaLabel=i.ariaLabel??null,e.alt=i.ariaLabel??"",r!=null&&(e.style.opacity=`${r}`);let m=e;if(i.effectView!=null){const R={shape:{type:"image",x:0,y:0,width:s,height:M,src:e.src},fill:null,stroke:null,offset:[0,0]};m=T([[R]],[s,M],{effectView:i.effectView,ariaLabel:i.ariaLabel})}return h&&m&&h.appendChild(m),m}export{de as previewCIMSymbol};
