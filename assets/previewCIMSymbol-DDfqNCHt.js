import{gw as D,gx as E,fv as F,er as G}from"./index-oLM2nnvm.js";import{e as I,s as k,$ as q}from"./CIMSymbolHelper-Ck0_SDOO.js";import{i as A}from"./CIMResourceManager-CFAmAJAf.js";import{t as L,l as T}from"./utils-Dgir--JM.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-Bf3ScRm2.js";import"./GeometryUtils-C0YfZTUo.js";import"./definitions-C0Jy3zs7.js";import"./mat2df32-orApM5a3.js";import"./vec2f32-BbH2jxlN.js";import"./Rect-CUzevAry.js";import"./BoundingBox-CnpCxTZE.js";import"./imageUtils-Db8kUexz.js";import"./utils-Cs22IO5I.js";import"./cimSymbolUtils-BV2Xfixo.js";import"./jsxFactory-DFbEMHlO.js";import"./uuid-Cl5lrJ4c.js";import"./webStyleSymbolUtils-CMLE6gI2.js";const U=96/72;let W=class{constructor(i){this._spatialReference=i,this._imageDataCanvas=null,this._cimResourceManager=new A}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(i,h,r,l,n,t,s,y,v){if(!i)return null;const{data:g}=i;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g;t||(t=D(C));const c=await E.resolveSymbolOverrides(g,h,this._spatialReference,n,t,s,y),d=this._cimResourceManager,p=[];I.fetchResources(c,d,p),I.fetchFonts(c,d,p),p.length>0&&await Promise.all(p);const{width:a,height:o}=r,M=$(t,a,o,l),e=I.getEnvelope(c,M,d);if(!e)return null;e.x===1/0&&(e.x=a+2),e.y===1/0&&(e.y=-o/2),e.width===-1/0&&(e.width=a),e.height===-1/0&&(e.height=o);let m=1,S=0,R=0;switch(C.type){case"CIMPointSymbol":case"CIMTextSymbol":{let w=1;e.width>a&&(w=a/e.width);let b=1;e.height>o&&(b=o/e.height),l==="preview"&&(e.width<a&&(w=a/e.width),e.height<o&&(b=o/e.height)),m=Math.min(w,b),S=e.x+e.width/2,R=e.y+e.height/2}break;case"CIMLineSymbol":{(v||e.height>o)&&(m=o/e.height),R=e.y+e.height/2;const w=e.x*m+a/2,b=(e.x+e.width)*m+a/2,{paths:x}=M;x[0][0][0]-=w/m,x[0][2][0]-=(b-a)/m}break;case"CIMPolygonSymbol":{S=e.x+e.width/2,R=e.y+e.height/2;const w=e.x*m+a/2,b=(e.x+e.width)*m+a/2,x=e.y*m+o/2,z=(e.y+e.height)*m+o/2,{rings:f}=M;w<0&&(f[0][0][0]-=w,f[0][3][0]-=w,f[0][4][0]-=w),x<0&&(f[0][0][1]+=x,f[0][1][1]+=x,f[0][4][1]+=x),b>a&&(f[0][1][0]-=b-a,f[0][2][0]-=b-a),z>o&&(f[0][2][1]+=z-o,f[0][3][1]+=z-o)}}const V={type:"cim",data:{type:"CIMSymbolReference",symbol:c}};return this.rasterize(V,a,o,S,R,m,t,1,M)}rasterize(i,h,r,l,n,t,s,y=0,v=null){const{data:g}=i;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:C}=g,c=this._canvas,d=(window.devicePixelRatio||1)*U;c.width=h*d,c.height=r*d,s||(s=D(C)),v||(v=$(s,h,r,"legend")),c.width+=2*y,c.height+=2*y;const p=c.getContext("2d",{willReadFrequently:!0}),a=q.createIdentity();return a.translate(-l,-n),a.scale(t*d,-t*d),a.translate(h*d/2+y,r*d/2+y),p.clearRect(0,0,c.width,c.height),new k(p,this._cimResourceManager,a,!0).drawSymbol(C,v),p.getImageData(0,0,c.width,c.height)}};function $(u,i,h,r){const n=-i/2+1,t=i/2-1,s=h/2-1,y=-h/2+1;switch(u){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[n,0],[0,0],[t,0]]]};default:return r==="legend"?{rings:[[[n,s],[t,0],[t,y],[n,y],[n,s]]]}:{rings:[[[n,s],[t,s],[t,y],[n,y],[n,s]]]}}}const _=new W(null),P=F(L.size),O=F(L.maxSize),j=F(L.lineWidth),B=1;async function H(u,i,h){const r=i==null?void 0:i.size;let l=r!=null&&typeof r=="object"&&"width"in r?r.width:r,n=r!=null&&typeof r=="object"&&"height"in r?r.height:r;if(l==null||n==null)if(h==="esriGeometryPolygon")l=P,n=P;else{const t=await J(u,i,h);t&&(l=t.width,n=t.height),h==="esriGeometryPolyline"&&(l=j),l=l!=null&&isFinite(l)?Math.min(l,O):P,n=n!=null&&isFinite(n)?Math.max(Math.min(n,O),B):P}return i.style==="legend"&&h==="esriGeometryPolyline"&&(l=j),{width:l,height:n}}async function J(u,i,h){const{feature:r,fieldMap:l,viewParams:n}=i.cimOptions||i,t=await E.resolveSymbolOverrides(u.data,r,null,l,h,null,n);if(!t)return null;(u=u.clone()).data={type:"CIMSymbolReference",symbol:t},u.data.primitiveOverrides=void 0;const s=[];return I.fetchResources(t,_.resourceManager,s),I.fetchFonts(t,_.resourceManager,s),s.length>0&&await Promise.all(s),I.getEnvelope(t,null,_.resourceManager)}async function ye(u,i={}){var S;const{node:h,opacity:r,symbolConfig:l}=i,n=l!=null&&typeof l=="object"&&"isSquareFill"in l&&l.isSquareFill,t=i.cimOptions||i,s=t.geometryType||D((S=u==null?void 0:u.data)==null?void 0:S.symbol),y=await H(u,i,s),{feature:v,fieldMap:g}=t,C=n||s!=="esriGeometryPolygon"?"preview":"legend",c=await _.rasterizeCIMSymbolAsync(u,v,y,C,g,s,null,t.viewParams,t.allowScalingUp);if(!c)return null;const{width:d,height:p}=c,a=document.createElement("canvas");a.width=d,a.height=p,a.getContext("2d").putImageData(c,0,0);const o=G(y.width),M=G(y.height),e=new Image(o,M);e.src=a.toDataURL(),e.ariaLabel=i.ariaLabel??null,e.alt=i.ariaLabel??"",r!=null&&(e.style.opacity=`${r}`);let m=e;if(i.effectView!=null){const R={shape:{type:"image",x:0,y:0,width:o,height:M,src:e.src},fill:null,stroke:null,offset:[0,0]};m=T([[R]],[o,M],{effectView:i.effectView,ariaLabel:i.ariaLabel})}return h&&m&&h.appendChild(m),m}export{ye as previewCIMSymbol};
//# sourceMappingURL=previewCIMSymbol-DDfqNCHt.js.map
