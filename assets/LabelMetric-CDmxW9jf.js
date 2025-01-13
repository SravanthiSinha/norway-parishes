import{I as T,s as U,cx as b}from"./index-vxzybAz5.js";import{p as x,m as L,s as B}from"./Texture-DiNolP8s.js";import{U as l,C as c}from"./enums-Dk3osxpS.js";import"./Program-D2qfBy7Q.js";import{t as Y}from"./VertexElementDescriptor-BOD-G50G.js";import{i as P}from"./BoundingBox-CnpCxTZE.js";let d=class p{constructor(t,e,n,s,i,a,o){this.instanceId=t,this.textureKey=e,this.indexStart=n,this.indexCount=s,this.vertexStart=i,this.vertexCount=a,this.overlaps=o}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new p(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,n,s,i,a,o,u){t.push(e),t.push(n),t.push(s),t.push(i),t.push(a),t.push(o),t.push(u)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const e=t.readInt32(),n=t.readInt32(),s=t.readInt32(),i=t.readInt32(),a=t.readInt32(),o=t.readInt32(),u=t.readInt32();return new p(e,n,s,i,a,o,u)}};d.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function I(r,t){if(t!==null){r.push(t.length);for(const e of t)e.serialize(r);return r}r.push(0)}function S(r,t,e){const n=r.readInt32(),s=new Array(n);for(let i=0;i<s.length;i++)s[i]=t.deserialize(r,e);return s}let R=class _{constructor(t,e){this.id=t,this.sortKey=e,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),I(t,this.records),t}static deserialize(t){const e=t.readInt32(),n=t.readF32(),s=new _(e,n);return s.records=S(t,d)??[],s}};R.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+d.byteSizeHint;const F=()=>U.getLogger("esri.views.2d.engine.webgl.Utils");function W(r){switch(r){case l.UNSIGNED_BYTE:return 1;case l.UNSIGNED_SHORT_4_4_4_4:return 2;case l.FLOAT:return 4;default:return void F().error(new T("webgl-utils",`Unable to handle type ${r}`))}}function J(r){switch(r){case l.UNSIGNED_BYTE:return Uint8Array;case l.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case l.FLOAT:return Float32Array;default:return void F().error(new T("webgl-utils",`Unable to handle type ${r}`))}}function k(r){const t=new Map;for(const e in r){const n=r[e];let s=0;t.set(e,n.map(i=>{const a=new Y(i.name,i.count,i.type,s,0,i.normalized||!1);return s+=i.count*B(i.type),a})),t.get(e).forEach(i=>i.stride=s)}return t}const C=r=>{const t=new Map;for(const e in r)for(const n of r[e])t.set(n.name,n.location);return t},v=r=>{const t={};return r.forEach((e,n)=>t[n]=e!=null&&e.length?e[0].stride:0),t},E=new Map,Q=(r,t)=>{if(!E.has(r)){const e=k(t),n={strides:v(e),bufferLayouts:e,attributes:C(t)};E.set(r,n)}return E.get(r)},Z=r=>r.includes("data:image/svg+xml");function $(r){const t=[];for(let e=0;e<r.length;e++)t.push(r.charCodeAt(e));return t}function tt(r,t,e){const n=new x(t.width,t.height);return n.dataType=t.dataType,t.depth&&(n.depth=t.depth),t.flipped&&(n.flipped=t.flipped),t.hasMipmap&&(n.hasMipmap=t.hasMipmap),n.internalFormat=t.internalFormat,t.isImmutable&&(n.isImmutable=t.isImmutable),t.isOpaque&&(n.isOpaque=t.isOpaque),t.maxAnisotropy&&(n.maxAnisotropy=t.maxAnisotropy),n.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(n.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(n.samplingMode=t.samplingMode),t.target&&(n.target=t.target),n.uniform=t.uniform,t.unpackAlignment&&(n.unpackAlignment=t.unpackAlignment),t.wrapMode&&(n.wrapMode=t.wrapMode),new L(r,n,e)}function et(r){return"url"in r&&"urlHash"in r?{...r,url:""}:r}const M=new Float32Array(1),O=new Uint32Array(M.buffer);function z(r){return M[0]=r,O[0]}function rt(r,t){return 65535&r|t<<16}function y(r){const t=z(r),e=t>>>31;let n=t>>>23&255,s=8388607&t;return n-=127,n>15?e<<15|31744:n<-25?0:(n<-14&&(s+=8388608,s/=2**(-14-n),n=-15),n+=15,s/=8192,s=H(s,1023),e<<15|n<<10|s)}function H(r,t){const e=Math.floor(r),n=r-e;return e<t&&(n>.5||n===.5&&e%2==1)?e+1:e}function m(r){let t=r>>>15,e=r>>10&31,n=1023&r;return t=t?-1:1,e-=15,n/=1024,e>-15?n+=1:e=-14,t*2**e*n}function nt(r){const t=r.map(({name:e,count:n,type:s})=>`${e}.${n}.${s}`).join(",");return b(t)}function f(r,t,e,n,s,i,a){if(r.primitiveName===t){let o=n==null?void 0:n.readWithDefault(s,i,r[e]&&a);return r.type==="text"&&(o=o.toString()),void(r[e]=o)}if("type"in r&&r.type!=null){if(r.effects)for(const o of r.effects)f(o,t,e,n,s,i,a);switch(r.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(r.symbolLayers)for(const o of r.symbolLayers)f(o,t,e,n,s,i,a);break;case"CIMTextSymbol":r.symbol&&f(r.symbol,t,e,n,s,i,a);break;case"CIMHatchFill":r.lineSymbol&&f(r.lineSymbol,t,e,n,s,i,a);break;case"CIMPictureMarker":case"CIMCharacterMarker":case"CIMVectorMarker":if(r.markerPlacement&&f(r.markerPlacement,t,e,n,s,i,a),r.type==="CIMVectorMarker"&&r.markerGraphics)for(const o of r.markerGraphics)f(o,t,e,n,s,i,a),f(o.symbol,t,e,n,s,i,a)}}}const G=400;function st(r){const t=r.width;return r.effects!=null?G:Math.max(1.25*t,8)}function it(r,t,e,n){const s=e.packPrecisionFactor??1;switch(e.type){case c.BYTE:if(e.count===1)r.setInt8(n+e.offset,t*s);else for(let i=0;i<e.count;i++){const a=i*Int8Array.BYTES_PER_ELEMENT;r.setInt8(n+e.offset+a,t[i]*s)}break;case c.UNSIGNED_BYTE:if(e.count===1)r.setUint8(n+e.offset,t*s);else for(let i=0;i<e.count;i++){const a=i*Uint8Array.BYTES_PER_ELEMENT;r.setUint8(n+e.offset+a,t[i]*s)}break;case c.SHORT:if(e.count===1)r.setInt16(n+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Int16Array.BYTES_PER_ELEMENT;r.setInt16(n+e.offset+a,t[i]*s,!0)}break;case c.UNSIGNED_SHORT:if(e.count===1)r.setUint16(n+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Uint16Array.BYTES_PER_ELEMENT;r.setUint16(n+e.offset+a,t[i]*s,!0)}break;case c.INT:if(e.count===1)r.setInt32(n+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Int32Array.BYTES_PER_ELEMENT;r.setInt32(n+e.offset+a,t[i]*s,!0)}break;case c.UNSIGNED_INT:if(e.count===1)r.setUint32(n+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Uint32Array.BYTES_PER_ELEMENT;r.setUint32(n+e.offset+a,t[i]*s,!0)}break;case c.FLOAT:if(e.count===1)r.setFloat32(n+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Float32Array.BYTES_PER_ELEMENT;r.setFloat32(n+e.offset+a,t[i]*s,!0)}break;case c.HALF_FLOAT:if(e.count===1)r.setUint16(n+e.offset,y(t*s),!0);else for(let i=0;i<e.count;i++){const a=i*Uint16Array.BYTES_PER_ELEMENT;r.setUint16(n+e.offset+a,y(t[i]*s),!0)}}}function at(r,t,e){switch(t.type){case c.BYTE:{if(t.count===1)return r.getInt8(e+t.offset);const n=[];for(let s=0;s<t.count;s++){const i=s*Int8Array.BYTES_PER_ELEMENT;n.push(r.getInt8(e+t.offset+i))}return n}case c.UNSIGNED_BYTE:{if(t.count===1)return r.getUint8(e+t.offset);const n=[];for(let s=0;s<t.count;s++){const i=s*Uint8Array.BYTES_PER_ELEMENT;n.push(r.getUint8(e+t.offset+i))}return n}case c.SHORT:{if(t.count===1)return r.getInt16(e+t.offset,!0);const n=[];for(let s=0;s<t.count;s++){const i=s*Int16Array.BYTES_PER_ELEMENT;n.push(r.getInt16(e+t.offset+i,!0))}return n}case c.UNSIGNED_SHORT:{if(t.count===1)return r.getUint16(e+t.offset,!0);const n=[];for(let s=0;s<t.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;n.push(r.getUint16(e+t.offset+i,!0))}return n}case c.INT:{if(t.count===1)return r.getInt32(e+t.offset,!0);const n=[];for(let s=0;s<t.count;s++){const i=s*Int32Array.BYTES_PER_ELEMENT;n.push(r.getInt32(e+t.offset+i,!0))}return n}case c.UNSIGNED_INT:{if(t.count===1)return r.getUint32(e+t.offset,!0);const n=[];for(let s=0;s<t.count;s++){const i=s*Uint32Array.BYTES_PER_ELEMENT;n.push(r.getUint32(e+t.offset+i,!0))}return n}case c.FLOAT:{if(t.count===1)return r.getFloat32(e+t.offset,!0);const n=[];for(let s=0;s<t.count;s++){const i=s*Float32Array.BYTES_PER_ELEMENT;n.push(r.getFloat32(e+t.offset+i,!0))}return n}case c.HALF_FLOAT:{if(t.count===1)return m(r.getUint16(e+t.offset,!0));const n=[];for(let s=0;s<t.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;n.push(m(r.getUint16(e+t.offset+i,!0)))}return n}}}class g{constructor(t,e,n,s,i,a,o,u,h=[]){this.entityTexel=t,this.anchorX=e,this.anchorY=n,this.directionX=s,this.directionY=i,this.maxScale=a,this.minScale=o,this.referenceBounds=u,this.bounds=h}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),I(t,this.bounds)}static deserialize(t){const e=t.readInt32(),n=t.readF32(),s=t.readF32(),i=t.readF32(),a=t.readF32(),o=t.readF32(),u=t.readF32(),h=t.readF32(),A=t.readF32(),w=t.readF32(),N=S(t,P)??[];return new g(e,n,s,i,a,o,u,{size:h,offsetX:A,offsetY:w},N)}}export{$ as A,tt as T,d as a,Q as b,W as c,J as d,nt as e,rt as f,st as g,at as h,et as j,S as n,it as o,g as r,R as s,f as t,Z as y};
//# sourceMappingURL=LabelMetric-CDmxW9jf.js.map
