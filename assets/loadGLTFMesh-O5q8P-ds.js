import{I as P,U as L,eW as I,aY as B,fN as C,hr as D,bP as U,eI as z}from"./index-oLM2nnvm.js";import{j as G,n as N}from"./mat3-CLwqfO5w.js";import{e as S}from"./mat3f64-q3fE-ZOt.js";import{w as q,m as K,f as Q,c as V}from"./SceneLayer-B5wXFK12.js";import{p as W}from"./MeshVertexAttributes-K9lu64Nw.js";import{s as E}from"./meshVertexSpaceUtils-D2vEcKoR.js";import{c as O,x as F,L as Y,O as R,i as j,E as k,T as H,u as J}from"./BufferView-Dyy6SCyJ.js";import{t as X,r as Z,u as tt,n as A}from"./vec3-BN_JGfxC.js";import{f as et,o as rt,u as M}from"./vec4-DI74MIM5.js";import{e as ot}from"./types-D0PSWh4d.js";import{loadGLTF as nt}from"./loader-CT2gilod.js";import{n as it,o as st,f as at,a as h,b as lt,l as mt,e as ut,c as pt,d as ct}from"./DefaultMaterial_COLOR_GAMMA-XavVtURj.js";import{B as ft}from"./vertexSpaceConversion-Bg6HiDuI.js";import{r as dt}from"./resourceUtils-BQPYR1fY.js";import{D as w}from"./enums-Dk3osxpS.js";import"./MultiOriginJSONSupport-B5O_NPAI.js";import"./MeshTransform-CSr3h3hN.js";import"./mat4f64-CSKppSlJ.js";import"./quat-BrHQ5eIm.js";import"./quatf64-aQ5IuZRd.js";import"./vec32-CPxrCE8J.js";import"./imageUtils-Db8kUexz.js";import"./MeshLocalVertexSpace-DGGyeSkp.js";import"./earcut-Lltz9D9k.js";import"./Indices-D51TlGav.js";import"./plane-CqWLH6L8.js";import"./deduplicate-DDwpdcjs.js";import"./projectPointToVector-D2dp1OBD.js";import"./spatialReferenceEllipsoidUtils-DNQs3HQm.js";import"./computeTranslationToOriginAndRotation-C9iXoqjE.js";import"./External-B9Ly2b4x.js";import"./infoFor3D-CxdEiWhp.js";import"./meshSpatialReferenceScaleUtils-CA1SQZKK.js";import"./APIKeyMixin-CmWCsb42.js";import"./ArcGISService-Bf4BaP2A.js";import"./CustomParametersMixin-DniFnX77.js";import"./EditBusLayer-CSuQ8iPk.js";import"./uuid-Cl5lrJ4c.js";import"./OperationalLayer-BgXIKL7k.js";import"./commonProperties-BtQS_lnB.js";import"./PortalLayer-Cc5Wpw6A.js";import"./portalItemUtils-o0HMA_HX.js";import"./SceneService-DhmEmIEO.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./HeightModelInfo-Do10YdaJ.js";import"./jsonContext-J92Yj9vD.js";import"./resourceUtils-CDxWINPh.js";import"./resourceUtils-760uQ7he.js";import"./saveUtils-9nxlRNVU.js";import"./TemporalLayer-7usoT4ud.js";import"./TimeInfo-BSn-QZmJ.js";import"./associatedFeatureServiceUtils-xRmC6HxT.js";import"./capabilities-Y9lFlGVh.js";import"./featureLayerUtils-BjuaFVy1.js";import"./FeatureReductionSelection-uE9Vvv5Y.js";import"./fieldProperties-aPU0vr3T.js";import"./I3SLayerDefinitions-DRjmXLFH.js";import"./labelingInfo-Z5Xviby6.js";import"./labelUtils-CUcaCcjV.js";import"./LayerFloorInfo-DdL3RdGd.js";import"./fetchService-kSC23RZz.js";import"./persistable-BSjc4DYa.js";import"./MD5-C9MwAd2G.js";import"./resourceExtension-C8kN0o8u.js";import"./styleUtils-Bnn-Jqi0.js";import"./elevationInfoUtils-iXm64Wn7.js";import"./popupUtils-D8yjXEad.js";import"./I3SUtil-GW478hXj.js";import"./projectVectorToVector-DDEdQ9yW.js";import"./sphere-C1aYxAGu.js";import"./I3SBinaryReader-BFHECVIL.js";import"./VertexAttribute-BdZWZuT1.js";import"./floatRGBA-BZy0H0Uv.js";import"./NormalAttribute.glsl-DK9zx60b.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-BrVqCfwr.js";import"./ViewingMode-dBUh39ak.js";import"./popupUtils-Dm8oVuij.js";import"./basicInterfaces-CZwQPxTp.js";function xt(t,r,e){const m=t.typedBuffer,n=t.typedBufferStride,s=r.typedBuffer,u=r.typedBufferStride,l=e?e.count:r.count;let i=((e==null?void 0:e.dstIndex)??0)*n,c=((e==null?void 0:e.srcIndex)??0)*u;for(let a=0;a<l;++a){for(let o=0;o<9;++o)m[i+o]=s[c+o];i+=n,c+=u}}Object.freeze(Object.defineProperty({__proto__:null,copy:xt},Symbol.toStringTag,{value:"Module"}));function gt(t,r,e){const m=t.typedBuffer,n=t.typedBufferStride,s=r.typedBuffer,u=r.typedBufferStride,l=e?e.count:r.count;let i=((e==null?void 0:e.dstIndex)??0)*n,c=((e==null?void 0:e.srcIndex)??0)*u;for(let a=0;a<l;++a){for(let o=0;o<16;++o)m[i+o]=s[c+o];i+=n,c+=u}}Object.freeze(Object.defineProperty({__proto__:null,copy:gt},Symbol.toStringTag,{value:"Module"}));function y(t,r){return new t(new ArrayBuffer(r*t.ElementCount*ot(t.ElementType)))}async function er(t,r,e){const m=new it(yt(e)),n=(await nt(m,r,e,!0)).model,s=n.lods.shift(),u=new Map,l=new Map;n.textures.forEach((g,T)=>u.set(T,ht(g))),n.materials.forEach((g,T)=>l.set(T,wt(g,u)));const i=Tt(s);for(const g of i.parts)bt(i,g,l);const{position:c,normal:a,tangent:o,color:p,texCoord0:f}=i.vertexAttributes,d=E(t,e),b=t.spatialReference.isGeographic?E(t):d,v=ft({vertexAttributes:{position:c.typedBuffer,normal:a==null?void 0:a.typedBuffer,tangent:o==null?void 0:o.typedBuffer},vertexSpace:b,spatialReference:t.spatialReference},d,{allowBufferReuse:!0,sourceUnit:e!=null&&e.unitConversionDisabled?void 0:"meters"});if(!v)throw new P("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${b.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new W({...v,color:p==null?void 0:p.typedBuffer,uv:f==null?void 0:f.typedBuffer})}}function yt(t){const r=t==null?void 0:t.resolveFile;return r?{busy:!1,request:async(e,m,n)=>{const s=(r==null?void 0:r(e))??e;return(await L(s,{responseType:m==="image"?"image":m==="binary"||m==="image+type"?"array-buffer":"json",signal:n==null?void 0:n.signal,timeout:0})).data}}:null}function $(t,r){if(t==null)return"-";const e=t.typedBuffer;return`${I(r,e.buffer,()=>r.size)}/${e.byteOffset}/${e.byteLength}`}function $t(t){return t!=null?t.toString():"-"}function Tt(t){let r=0;const e={color:!1,tangent:!1,normal:!1,texCoord0:!1},m=new Map,n=new Map,s=[];for(const u of t.parts){const{attributes:{position:l,normal:i,color:c,tangent:a,texCoord0:o}}=u,p=`
      ${$(l,m)}/
      ${$(i,m)}/
      ${$(c,m)}/
      ${$(a,m)}/
      ${$(o,m)}/
      ${$t(u.transform)}
    `;let f=!1;const d=I(n,p,()=>(f=!0,{start:r,length:l.count}));f&&(r+=l.count),i&&(e.normal=!0),c&&(e.color=!0),a&&(e.tangent=!0),o&&(e.texCoord0=!0),s.push({gltf:u,writeVertices:f,region:d})}return{vertexAttributes:{position:y(H,r),normal:e.normal?y(j,r):null,tangent:e.tangent?y(O,r):null,color:e.color?y(F,r):null,texCoord0:e.texCoord0?y(J,r):null},parts:s,components:[]}}function ht(t){return new q({data:(dt(t.data),t.data),wrap:Ct(t.parameters.wrap)})}function wt(t,r){const e=new B(St(t.color,t.opacity)),m=t.emissiveFactor?new B(Et(t.emissiveFactor)):null,n=s=>s?new V({scale:s.scale?[s.scale[0],s.scale[1]]:[1,1],rotation:z(s.rotation??0),offset:s.offset?[s.offset[0],s.offset[1]]:[0,0]}):null;return new K({color:e,colorTexture:r.get(t.textureColor),normalTexture:r.get(t.textureNormal),emissiveColor:m,emissiveTexture:r.get(t.textureEmissive),occlusionTexture:r.get(t.textureOcclusion),alphaMode:Bt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r.get(t.textureMetallicRoughness),colorTextureTransform:n(t.colorTextureTransform),normalTextureTransform:n(t.normalTextureTransform),occlusionTextureTransform:n(t.occlusionTextureTransform),emissiveTextureTransform:n(t.emissiveTextureTransform),metallicRoughnessTextureTransform:n(t.metallicRoughnessTextureTransform)})}function bt(t,r,e){r.writeVertices&&vt(t,r);const{indices:m,attributes:n,primitiveType:s,material:u}=r.gltf;let l=st(m||n.position.count,s);const i=r.region.start;if(i){const c=new Uint32Array(l);for(let a=0;a<l.length;a++)c[a]+=i;l=c}t.components.push(new Q({name:r.gltf.name,faces:l,material:e.get(u),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function vt(t,r){const{position:e,normal:m,tangent:n,color:s,texCoord0:u}=t.vertexAttributes,l=r.region.start,{attributes:i,transform:c}=r.gltf,a=i.position.count;if(X(e.slice(l,a),i.position,c),i.normal!=null&&m!=null){const o=G(S(),c),p=m.slice(l,a);Z(p,i.normal,o),C(o)&&tt(p,p)}else m!=null&&at(m,0,0,1,{dstIndex:l,count:a});if(i.tangent!=null&&n!=null){const o=N(S(),c),p=n.slice(l,a);et(p,i.tangent,o),C(o)&&rt(p,p)}else n!=null&&h(n,0,0,1,1,{dstIndex:l,count:a});if(i.texCoord0!=null&&u!=null?lt(u.slice(l,a),i.texCoord0):u!=null&&mt(u,0,0,{dstIndex:l,count:a}),i.color!=null&&s!=null){const o=i.color,p=s.slice(l,a);if(o.elementCount===4)o instanceof O?M(p,o,255):o instanceof F?ut(p,o):o instanceof Y&&M(p,o,1/256);else{h(p,255,255,255,255);const f=R.fromTypedArray(p.typedBuffer,p.typedBufferStride);o instanceof j?A(f,o,255):o instanceof R?pt(f,o):o instanceof k&&A(f,o,1/256)}}else s!=null&&h(s.slice(l,a),255,255,255,255)}function Bt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:_(t.s),vertical:_(t.t)}}function _(t){switch(t){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function x(t){return t**(1/ct)*255}function St(t,r){return D(x(t[0]),x(t[1]),x(t[2]),r)}function Et(t){return U(x(t[0]),x(t[1]),x(t[2]))}export{er as loadGLTFMesh};
//# sourceMappingURL=loadGLTFMesh-O5q8P-ds.js.map
