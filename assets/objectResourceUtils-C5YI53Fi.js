const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loader-CRDUo40C.js","assets/index-DbNmBX4d.js","assets/index-DQ5T3qjA.css","assets/mat4f64-CSKppSlJ.js","assets/enums-Dk3osxpS.js","assets/quat-B9LfODWx.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/vec32-CK6Gx5ur.js","assets/BufferView-D9lUU5RA.js","assets/resourceUtils-kyK2dhiJ.js","assets/basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{aN as G,hm as Me,jo as Oe,hF as pe,fL as ie,J as ge,U as Re,z as xe,s as Be,jp as be,im as J,I as Ce,_ as Ee,cY as Pe,jq as Se,fP as oe}from"./index-DbNmBX4d.js";import{a as Le}from"./webStyleSymbolUtils-D18yLVU-.js";import{i as ae,j as Ne,n as Fe}from"./mat3-Do75vOmA.js";import{t as ee,e as ye}from"./mat3f64-q3fE-ZOt.js";import{o as ue,r as Ge,e as je}from"./mat4f64-CSKppSlJ.js";import{o as S,u as C,g as L,W as Ue,E as re,c as ke,i as le,r as qe,A as De,I as He}from"./vec32-CK6Gx5ur.js";import{r as Ve,e as V,o as ze,a as We,C as $e,B as K,n as Je,b as Ke,t as z,s as Qe,c as Ye}from"./Texture-duTRNSka.js";import{i as we,x as ve,c as Xe,L as Ze,O as et,E as tt}from"./BufferView-D9lUU5RA.js";import{e as rt,f as st,l as ce,o as fe}from"./vec3-DU78_sWb.js";import{n as nt,s as he}from"./vec4-C0iK3SKL.js";import{n as it,d as j,o as ot,g as at,t as ut,h as lt}from"./DefaultMaterial_COLOR_GAMMA-C4ub1oyb.js";import{r as te}from"./resourceUtils-kyK2dhiJ.js";import{i as ct,f as ft}from"./vec2f32-BbH2jxlN.js";import{t as ht}from"./NestedMap-GuqgquCN.js";import{t as mt,l as Te}from"./Indices-CzqtGVyd.js";import{t as dt}from"./requestImageUtils-CGqTI7Sw.js";import{t as k}from"./orientedBoundingBox-B1jfbqLQ.js";import{t as pt,e as se,i as M,n as gt}from"./basicInterfaces-CZwQPxTp.js";import{S as xt}from"./triangle-C_b5hrQq.js";import{s as bt}from"./Util-DLpG53TB.js";import{e as I}from"./VertexAttribute-BdZWZuT1.js";import{D as me}from"./enums-Dk3osxpS.js";import{a as de}from"./NormalAttribute.glsl-DEvlnzru.js";import"./ViewingMode-dBUh39ak.js";import"./InterleavedLayout-DB0g11Kc.js";import"./types-D0PSWh4d.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./AlphaCutoff-UcccL64p.js";import"./boundedPlane-Cnjl4k1x.js";import"./sphere-GCL_VWTv.js";import"./plane-BVp_UThB.js";import"./quatf64-aQ5IuZRd.js";import"./lineSegment-Kq2O-C67.js";import"./renderState-Dxjj3HoI.js";import"./Texture-DY8FdKut.js";import"./doublePrecisionUtils-B0owpBza.js";import"./quat-B9LfODWx.js";import"./spatialReferenceEllipsoidUtils-DyHaMVyv.js";import"./computeTranslationToOriginAndRotation-CXiGNcZq.js";function yt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;S(e,0,0,0),S(T,0,0,0);let u=0,i=0;for(let o=0;o<l.length-2;o+=3){const c=l[o]*t,s=l[o+1]*t,a=l[o+2]*t;S(g,r[c],r[c+1],r[c+2]),S(E,r[s],r[s+1],r[s+2]),S(W,r[a],r[a+1],r[a+2]);const f=xt(g,E,W);f?(C(g,g,E),C(g,g,W),L(g,g,1/3*f),C(e,e,g),u+=f):(C(T,T,g),C(T,T,E),C(T,T,W),i+=3)}return(i!==0||u!==0)&&(u!==0?(L(e,e,1/u),!0):i!==0&&(L(e,T,1/i),!0))}function $t(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;S(e,0,0,0);let u=-1,i=0;for(let o=0;o<l.length;o++){const c=l[o]*t;u!==c&&(e[0]+=r[c],e[1]+=r[c+1],e[2]+=r[c+2],i++),u=c}return i>1&&L(e,e,1/i),i>0}function wt(n,e,t){if(!n)return!1;S(t,0,0,0),S(T,0,0,0);let r=0,l=0;const{size:u,data:i,indices:o}=n,c=o.length-1,s=c+(e?2:0);for(let a=0;a<s;a+=2){const f=a<c?a+1:0,h=o[a<c?a:c]*u,m=o[f]*u;g[0]=i[h],g[1]=i[h+1],g[2]=i[h+2],E[0]=i[m],E[1]=i[m+1],E[2]=i[m+2],L(g,C(g,g,E),.5);const d=Ue(g,E);d>0?(C(t,t,L(g,g,d)),r+=d):r===0&&(C(T,T,g),l++)}return r!==0?(L(t,t,1/r),!0):l!==0&&(L(t,T,1/l),!0)}const g=G(),E=G(),W=G(),T=G();class vt{constructor(){this.uid=Me()}}class Tt extends vt{constructor(e){super(),this.highlightGroupName=e,this.channel=pt.Highlight}}class Q extends Ve{constructor(e,t,r=null,l=V.Mesh,u=null,i=-1){super(),this.material=e,this.mapPositions=r,this.type=l,this.objectAndLayerIdColor=u,this.edgeIndicesLength=i,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[o,c]of t)this._attributes.set(o,{...c,indices:mt(c.indices)}),o===I.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(o).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new Q(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((r,l)=>{r.exclusive=!1,t._attributes.set(l,r)}),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:ze(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return(e==null?void 0:e.length)??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===V.Mesh?this._computeAttachmentOriginTriangles(e):this.type===V.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&re(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.attributes.get(I.POSITION);return yt(t,e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(I.POSITION);return wt(t,It(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){const t=this.attributes.get(I.POSITION);return $t(t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(I.POSITION);if(!e||e.indices.length===0)return null;const t=this.type===V.Mesh?3:1;bt(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=Te(e.indices.length/t);return new We(r,t,e)}get transformation(){return this._transformation??ue}set transformation(e){this._transformation=e&&e!==ue?Ge(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach((t,r)=>e(r))}allocateIdAndHighlight(e){const t=new Tt(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}function It(n,e){return!(!("isClosed"in n)||!n.isClosed)&&e.indices.length>2}const B=()=>Be.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function At(n,e){const t=await _t(n,e),r=await Ct(t.textureDefinitions??{},e);let l=0;for(const u in r)if(r.hasOwnProperty(u)){const i=r[u];l+=i!=null&&i.image?i.image.width*i.image.height*4:0}return{resource:t,textures:r,size:l+Oe(t)}}async function _t(n,e){const t=e==null?void 0:e.streamDataRequester;if(t)return Mt(n,t,e);const r=await ge(Re(n,e));if(r.ok===!0)return r.value.data;xe(r.error),Ie(r.error)}async function Mt(n,e,t){const r=await ge(e.request(n,"json",t));if(r.ok===!0)return r.value;xe(r.error),Ie(r.error.details.url)}function Ie(n){throw new Ce("",`Request for object resource failed: ${n}`)}function Ot(n){const e=n.params,t=e.topology;let r=!0;switch(e.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const u=e.faces;if(u){if(e.vertexAttributes)for(const i in e.vertexAttributes){const o=u[i];o!=null&&o.values?(o.valueType!=null&&o.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${o.valueType}', only UInt32 is currently supported`),r=!1),o.valuesPerElement!=null&&o.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${o.valuesPerElement}', only 1 is currently supported`),r=!1)):(B().warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else B().warn("Indexed geometries must specify faces"),r=!1;break}default:B().warn(`Unsupported topology '${t}'`),r=!1}n.params.material||(B().warn("Geometry requires material"),r=!1);const l=n.params.vertexAttributes;for(const u in l)l[u].values||(B().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Rt(n,e){var d,$;const t=new Array,r=new Array,l=new Array,u=new ht,i=n.resource,o=pe.parse(i.version||"1.0","wosr");Pt.validate(o);const c=i.model.name,s=i.model.geometries,a=i.materialDefinitions??{},f=n.textures;let h=0;const m=new Map;for(let p=0;p<s.length;p++){const x=s[p];if(!Ot(x))continue;const A=Et(x),w=x.params.vertexAttributes,q=[],Y=b=>{if(x.params.topology==="PerAttributeArray")return null;const _=x.params.faces;for(const R in _)if(R===b)return _[R].values;return null},N=w[I.POSITION],H=N.values.length/N.valuesPerElement;for(const b in w){const _=w[b],R=_.values,Z=Y(b)??Te(H);q.push([b,new k(R,Z,_.valuesPerElement,!0)])}const O=A.texture,y=f&&f[O];if(y&&!m.has(O)){const{image:b,parameters:_}=y,R=new $e(b,_);r.push(R),m.set(O,R)}const F=m.get(O),X=F?F.id:void 0,P=A.material;let v=u.get(P,O);if(v==null){const b=a[P.slice(P.lastIndexOf("/")+1)].params;b.transparency===1&&(b.transparency=0);const _=y&&y.alphaChannelUsage,R=b.transparency>0||_==="transparency"||_==="maskAndTransparency",Z=y?Ae(y.alphaChannelUsage):void 0,ne={ambient:ie(b.diffuse),diffuse:ie(b.diffuse),opacity:1-(b.transparency||0),transparent:R,textureAlphaMode:Z,textureAlphaCutoff:.33,textureId:X,initTextureTransparent:!0,doubleSided:!0,cullFace:se.None,colorMixMode:b.externalColorMixMode||"tint",textureAlphaPremultiplied:(y==null?void 0:y.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(ne,e.materialParameters),v=new K(ne,e),u.set(P,O,v)}l.push(v);const _e=new Q(v,q);h+=(($=(d=q.find(b=>b[0]===I.POSITION))==null?void 0:d[1])==null?void 0:$.indices.length)??0,t.push(_e)}return{engineResources:[{name:c,stageResources:{textures:r,materials:l,geometries:t},pivotOffset:i.model.pivotOffset,numberOfVertices:h,lodThreshold:null}],referenceBoundingBox:Bt(t)}}function Bt(n){const e=be();return n.forEach(t=>{const r=t.boundingInfo;r!=null&&(J(e,r.bbMin),J(e,r.bbMax))}),e}async function Ct(n,e){const t=new Array;for(const u in n){const i=n[u],o=i.images[0].data;if(!o){B().warn("Externally referenced texture data is not yet supported");continue}const c=i.encoding+";base64,"+o,s="/textureDefinitions/"+u,a=i.channels==="rgba"?i.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:me.REPEAT,t:me.REPEAT},preMultiplyAlpha:Ae(a)!==M.Opaque},h=e!=null&&e.disableTextures?Promise.resolve(null):dt(c,e);t.push(h.then(m=>({refId:s,image:m,parameters:f,alphaChannelUsage:a})))}const r=await Promise.all(t),l={};for(const u of r)l[u.refId]=u;return l}function Ae(n){switch(n){case"mask":return M.Mask;case"maskAndTransparency":return M.MaskBlend;case"none":return M.Opaque;default:return M.Blend}}function Et(n){const e=n.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Pt=new pe(1,2,"wosr");function D(n){if(n==null)return null;const e=n.offset!=null?n.offset:ct,t=n.rotation!=null?n.rotation:0,r=n.scale!=null?n.scale:ft,l=ee(1,0,0,0,1,0,e[0],e[1],1),u=ee(Math.cos(t),-Math.sin(t),0,Math.sin(t),Math.cos(t),0,0,0,1),i=ee(r[0],0,0,0,r[1],0,0,0,1),o=ye();return ae(o,u,i),ae(o,l,o),o}class St{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Lt{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new St,this.numberOfVertices=0}}async function Or(n,e){var f;const t=Nt(Le(n));if(t.fileType==="wosr"){const h=await(e.cache?e.cache.loadWOSR(t.url,e):At(t.url,e)),{engineResources:m,referenceBoundingBox:d}=Rt(h,e);return{lods:m,referenceBoundingBox:d,isEsriSymbolResource:!1,isWosr:!0}}let r;if(e.cache)r=await e.cache.loadGLTF(t.url,e,!!e.usePBR);else{const{loadGLTF:h}=await Ee(()=>import("./loader-CRDUo40C.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));r=await h(new it(e.streamDataRequester),t.url,e,e.usePBR)}const l=(f=r.model.meta)==null?void 0:f.ESRI_proxyEllipsoid,u=r.meta.isEsriSymbolResource&&l!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";u&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,kt(r,l));const i=!!e.usePBR,o=r.meta.isEsriSymbolResource?{usePBR:i,isSchematic:!1,treeRendering:u,mrrFactors:Qe}:{usePBR:i,isSchematic:!1,treeRendering:!1,mrrFactors:Ye},c={...e.materialParameters,treeRendering:u},{engineResources:s,referenceBoundingBox:a}=Ft(r,o,c,e,t.specifiedLodIndex);return{lods:s,referenceBoundingBox:a,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Nt(n){const e=n.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:n.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:n,specifiedLodIndex:null}:{fileType:"unknown",url:n,specifiedLodIndex:null}}function Ft(n,e,t,r,l){const u=n.model,i=new Array,o=new Map,c=new Map,s=u.lods.length,a=be();return u.lods.forEach((f,h)=>{const m=r.skipHighLods===!0&&(s>1&&h===0||s>3&&h===1)||r.skipHighLods===!1&&l!=null&&h!==l;if(m&&h!==0)return;const d=new Lt(f.name,f.lodThreshold,[0,0,0]);f.parts.forEach($=>{const p=m?new K({},r):Gt(u,$,d,e,t,o,c,r),{geometry:x,vertexCount:A}=jt($,p??new K({},r)),w=x.boundingInfo;w!=null&&h===0&&(J(a,w.bbMin),J(a,w.bbMax)),p!=null&&(d.stageResources.geometries.push(x),d.numberOfVertices+=A)}),m||i.push(d)}),{engineResources:i,referenceBoundingBox:a}}function Gt(n,e,t,r,l,u,i,o){var d,$;const c=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=n.materials.get(e.material),a=e.attributes.texCoord0!=null,f=e.attributes.normal!=null;if(s==null)return null;const h=Ut(s.alphaMode);if(!u.has(c)){if(a){const y=(F,X=!1)=>{if(F!=null&&!i.has(F)){const P=n.textures.get(F);if(P!=null){const v=P.data;i.set(F,new $e(te(v)?v.data:v,{...P.parameters,preMultiplyAlpha:!te(v)&&X,encoding:te(v)&&v.encoding!=null?v.encoding:void 0}))}}};y(s.textureColor,h!==M.Opaque),y(s.textureNormal),y(s.textureOcclusion),y(s.textureEmissive),y(s.textureMetallicRoughness)}const p=s.color[0]**(1/j),x=s.color[1]**(1/j),A=s.color[2]**(1/j),w=s.emissiveFactor[0]**(1/j),q=s.emissiveFactor[1]**(1/j),Y=s.emissiveFactor[2]**(1/j),N=s.textureColor!=null&&a?i.get(s.textureColor):null,H=Je({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),O=((d=s.normalTextureTransform)==null?void 0:d.scale)!=null?($=s.normalTextureTransform)==null?void 0:$.scale:Se;u.set(c,new K({...r,transparent:h===M.Blend,customDepthTest:gt.Lequal,textureAlphaMode:h,textureAlphaCutoff:s.alphaCutoff,diffuse:[p,x,A],ambient:[p,x,A],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?se.None:se.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:f?de.Attribute:de.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:N!=null?N.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&a?i.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:N!=null&&!!N.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&a?i.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&a?i.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&a?i.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[w,q,Y],mrrFactors:H?Ke:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:H,colorTextureTransformMatrix:D(s.colorTextureTransform),normalTextureTransformMatrix:D(s.normalTextureTransform),scale:[O[0],O[1]],occlusionTextureTransformMatrix:D(s.occlusionTextureTransform),emissiveTextureTransformMatrix:D(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:D(s.metallicRoughnessTextureTransform),...l},o))}const m=u.get(c);if(t.stageResources.materials.push(m),a){const p=x=>{x!=null&&t.stageResources.textures.push(i.get(x))};p(s.textureColor),p(s.textureNormal),p(s.textureOcclusion),p(s.textureEmissive),p(s.textureMetallicRoughness)}return m}function jt(n,e){const t=n.attributes.position.count,r=ot(n.indices||t,n.primitiveType),l=z(3*t),{typedBuffer:u,typedBufferStride:i}=n.attributes.position;rt(l,u,n.transform,3,i);const o=[[I.POSITION,new k(l,r,3,!0)]];if(n.attributes.normal!=null){const s=z(3*t),{typedBuffer:a,typedBufferStride:f}=n.attributes.normal;Ne(U,n.transform),st(s,a,U,3,f),oe(U)&&ce(s,s),o.push([I.NORMAL,new k(s,r,3,!0)])}if(n.attributes.tangent!=null){const s=z(4*t),{typedBuffer:a,typedBufferStride:f}=n.attributes.tangent;Fe(U,n.transform),nt(s,a,U,4,f),oe(U)&&ce(s,s,4),o.push([I.TANGENT,new k(s,r,4,!0)])}if(n.attributes.texCoord0!=null){const s=z(2*t),{typedBuffer:a,typedBufferStride:f}=n.attributes.texCoord0;at(s,a,2,f),o.push([I.UV0,new k(s,r,2,!0)])}const c=n.attributes.color;if(c!=null){const s=new Uint8Array(4*t);c.elementCount===4?c instanceof Xe?he(s,c,255):c instanceof ve?ut(s,c):c instanceof Ze&&he(s,c,1/256):(s.fill(255),c instanceof we?fe(s,c.typedBuffer,255,4,c.typedBufferStride):n.attributes.color instanceof et?lt(s,c.typedBuffer,4,n.attributes.color.typedBufferStride):n.attributes.color instanceof tt&&fe(s,c.typedBuffer,1/256,4,c.typedBufferStride)),o.push([I.COLOR,new k(s,r,4,!0)])}return{geometry:new Q(e,o),vertexCount:t}}const U=ye();function Ut(n){switch(n){case"BLEND":return M.Blend;case"MASK":return M.Mask;case"OPAQUE":case null:case void 0:return M.Opaque}}function kt(n,e){for(let t=0;t<n.model.lods.length;++t){const r=n.model.lods[t];for(const l of r.parts){const u=l.attributes.normal;if(u==null)return;const i=l.attributes.position,o=i.count,c=G(),s=G(),a=G(),f=new Uint8Array(4*o),h=new Float64Array(3*o),m=Pe(je(),l.transform);let d=0,$=0;for(let p=0;p<o;p++){i.getVec(p,s),u.getVec(p,c),re(s,s,l.transform),ke(a,s,e.center),le(a,a,e.radius);const x=a[2],A=qe(a),w=Math.min(.45+.55*A*A,1);le(a,a,e.radius),m!==null&&re(a,a,m),De(a,a),t+1!==n.model.lods.length&&n.model.lods.length>1&&He(a,a,c,x>-1?.2:Math.min(-4*x-3.8,1)),h[d]=a[0],h[d+1]=a[1],h[d+2]=a[2],d+=3,f[$]=255*w,f[$+1]=255*w,f[$+2]=255*w,f[$+3]=255,$+=4}l.attributes.normal=new we(h),l.attributes.color=new ve(f)}}}export{Or as fetch,Nt as parseUrl};
//# sourceMappingURL=objectResourceUtils-C5YI53Fi.js.map
