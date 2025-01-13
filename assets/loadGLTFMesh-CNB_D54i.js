import{I as P,U as L,eU as O,aY as B,fN as C,hr as U,bP as D,eG as G}from"./index-DDxdo46s.js";import{j as z,n as N}from"./mat3-UjmFUe2z.js";import{e as S}from"./mat3f64-q3fE-ZOt.js";import{w as q,m as K,f as Q,c as V}from"./SceneLayer-BNJqfteA.js";import{p as Y}from"./MeshVertexAttributes-Ci_-RCbZ.js";import{s as E}from"./meshVertexSpaceUtils-DCSsYElt.js";import{c as F,x as I,L as k,O as R,i as j,E as H,T as J,u as W}from"./BufferView-DezvbrZV.js";import{t as X,r as Z,u as tt,n as A}from"./vec3-M3wEN-78.js";import{f as et,o as rt,u as M}from"./vec4-D8uJtbsd.js";import{e as ot}from"./types-D0PSWh4d.js";import{loadGLTF as nt}from"./loader-CDye96Wm.js";import{n as it,o as st,f as at,a as h,b as lt,l as mt,e as ut,c as pt,d as ct}from"./DefaultMaterial_COLOR_GAMMA-DuQicMh7.js";import{B as ft}from"./vertexSpaceConversion-D6ZcR4vi.js";import{r as dt}from"./resourceUtils-dVouyZ_8.js";import{D as w}from"./enums-Dk3osxpS.js";import"./MultiOriginJSONSupport-DH-_1jFb.js";import"./MeshTransform-ChO1WCVr.js";import"./mat4f64-CSKppSlJ.js";import"./quat-FupHd5Fh.js";import"./quatf64-aQ5IuZRd.js";import"./vec32-CLt-8tHl.js";import"./imageUtils-qN7gqVrP.js";import"./MeshLocalVertexSpace-sMmIqpJ3.js";import"./earcut-Lltz9D9k.js";import"./Indices-DgsMFFO6.js";import"./plane-DrigPmS_.js";import"./deduplicate-0RawrlWA.js";import"./projectPointToVector-bp0ZwsD1.js";import"./spatialReferenceEllipsoidUtils-DxfFHgI_.js";import"./computeTranslationToOriginAndRotation-DoWm2a9d.js";import"./External-DKSy4e_E.js";import"./infoFor3D-CxdEiWhp.js";import"./meshSpatialReferenceScaleUtils-BU2NucXZ.js";import"./APIKeyMixin-CVeo6Rgf.js";import"./ArcGISService-4tr88Gpe.js";import"./CustomParametersMixin-6UloDod9.js";import"./EditBusLayer-DTadrHS8.js";import"./uuid-Cl5lrJ4c.js";import"./OperationalLayer-Be8C9wCF.js";import"./commonProperties-CLGtlLEy.js";import"./PortalLayer-DwMFmz11.js";import"./portalItemUtils-DGed7QpK.js";import"./SceneService-hJP0jT0u.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./HeightModelInfo-CmLu2eDN.js";import"./jsonContext-CCTN9Exf.js";import"./resourceUtils-B_J1C0n0.js";import"./resourceUtils-DsqGCqfY.js";import"./saveUtils-CP20ABld.js";import"./TemporalLayer-CxsPhY6P.js";import"./TimeInfo-BkOk1ohF.js";import"./associatedFeatureServiceUtils-BEucfl5G.js";import"./capabilities-Y9lFlGVh.js";import"./featureLayerUtils-C8f3q5cQ.js";import"./FeatureReductionSelection-BaXXdk0q.js";import"./fieldProperties-DYI8D0XO.js";import"./I3SLayerDefinitions-CvIG1ei0.js";import"./labelingInfo-hoKMMytf.js";import"./labelUtils-Cjr1nLDe.js";import"./LayerFloorInfo-CRJajHsp.js";import"./fetchService-BM63ZC0L.js";import"./persistable-CTehbXtB.js";import"./MD5-C9MwAd2G.js";import"./resourceExtension-vpK7xohk.js";import"./styleUtils-DsvInlGd.js";import"./elevationInfoUtils-BYq5jZws.js";import"./popupUtils-CrU7mRLo.js";import"./I3SUtil-20dM1S1q.js";import"./projectVectorToVector-SVhNTJPb.js";import"./sphere-CoEyk-1j.js";import"./I3SBinaryReader-BR5xgMYl.js";import"./VertexAttribute-BdZWZuT1.js";import"./floatRGBA-DQ5_Eq1r.js";import"./NormalAttribute.glsl-Cv29n3nx.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-BtYU5JNd.js";import"./ViewingMode-dBUh39ak.js";import"./popupUtils-DLN9Crsq.js";import"./basicInterfaces-CZwQPxTp.js";function xt(t,r,e){const m=t.typedBuffer,n=t.typedBufferStride,s=r.typedBuffer,u=r.typedBufferStride,l=e?e.count:r.count;let i=((e==null?void 0:e.dstIndex)??0)*n,c=((e==null?void 0:e.srcIndex)??0)*u;for(let a=0;a<l;++a){for(let o=0;o<9;++o)m[i+o]=s[c+o];i+=n,c+=u}}Object.freeze(Object.defineProperty({__proto__:null,copy:xt},Symbol.toStringTag,{value:"Module"}));function gt(t,r,e){const m=t.typedBuffer,n=t.typedBufferStride,s=r.typedBuffer,u=r.typedBufferStride,l=e?e.count:r.count;let i=((e==null?void 0:e.dstIndex)??0)*n,c=((e==null?void 0:e.srcIndex)??0)*u;for(let a=0;a<l;++a){for(let o=0;o<16;++o)m[i+o]=s[c+o];i+=n,c+=u}}Object.freeze(Object.defineProperty({__proto__:null,copy:gt},Symbol.toStringTag,{value:"Module"}));function y(t,r){return new t(new ArrayBuffer(r*t.ElementCount*ot(t.ElementType)))}async function er(t,r,e){const m=new it(yt(e)),n=(await nt(m,r,e,!0)).model,s=n.lods.shift(),u=new Map,l=new Map;n.textures.forEach((g,T)=>u.set(T,ht(g))),n.materials.forEach((g,T)=>l.set(T,wt(g,u)));const i=Tt(s);for(const g of i.parts)bt(i,g,l);const{position:c,normal:a,tangent:o,color:p,texCoord0:f}=i.vertexAttributes,d=E(t,e),b=t.spatialReference.isGeographic?E(t):d,v=ft({vertexAttributes:{position:c.typedBuffer,normal:a==null?void 0:a.typedBuffer,tangent:o==null?void 0:o.typedBuffer},vertexSpace:b,spatialReference:t.spatialReference},d,{allowBufferReuse:!0,sourceUnit:e!=null&&e.unitConversionDisabled?void 0:"meters"});if(!v)throw new P("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${b.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new Y({...v,color:p==null?void 0:p.typedBuffer,uv:f==null?void 0:f.typedBuffer})}}function yt(t){const r=t==null?void 0:t.resolveFile;return r?{busy:!1,request:async(e,m,n)=>{const s=(r==null?void 0:r(e))??e;return(await L(s,{responseType:m==="image"?"image":m==="binary"||m==="image+type"?"array-buffer":"json",signal:n==null?void 0:n.signal,timeout:0})).data}}:null}function $(t,r){if(t==null)return"-";const e=t.typedBuffer;return`${O(r,e.buffer,()=>r.size)}/${e.byteOffset}/${e.byteLength}`}function $t(t){return t!=null?t.toString():"-"}function Tt(t){let r=0;const e={color:!1,tangent:!1,normal:!1,texCoord0:!1},m=new Map,n=new Map,s=[];for(const u of t.parts){const{attributes:{position:l,normal:i,color:c,tangent:a,texCoord0:o}}=u,p=`
      ${$(l,m)}/
      ${$(i,m)}/
      ${$(c,m)}/
      ${$(a,m)}/
      ${$(o,m)}/
      ${$t(u.transform)}
    `;let f=!1;const d=O(n,p,()=>(f=!0,{start:r,length:l.count}));f&&(r+=l.count),i&&(e.normal=!0),c&&(e.color=!0),a&&(e.tangent=!0),o&&(e.texCoord0=!0),s.push({gltf:u,writeVertices:f,region:d})}return{vertexAttributes:{position:y(J,r),normal:e.normal?y(j,r):null,tangent:e.tangent?y(F,r):null,color:e.color?y(I,r):null,texCoord0:e.texCoord0?y(W,r):null},parts:s,components:[]}}function ht(t){return new q({data:(dt(t.data),t.data),wrap:Ct(t.parameters.wrap)})}function wt(t,r){const e=new B(St(t.color,t.opacity)),m=t.emissiveFactor?new B(Et(t.emissiveFactor)):null,n=s=>s?new V({scale:s.scale?[s.scale[0],s.scale[1]]:[1,1],rotation:G(s.rotation??0),offset:s.offset?[s.offset[0],s.offset[1]]:[0,0]}):null;return new K({color:e,colorTexture:r.get(t.textureColor),normalTexture:r.get(t.textureNormal),emissiveColor:m,emissiveTexture:r.get(t.textureEmissive),occlusionTexture:r.get(t.textureOcclusion),alphaMode:Bt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r.get(t.textureMetallicRoughness),colorTextureTransform:n(t.colorTextureTransform),normalTextureTransform:n(t.normalTextureTransform),occlusionTextureTransform:n(t.occlusionTextureTransform),emissiveTextureTransform:n(t.emissiveTextureTransform),metallicRoughnessTextureTransform:n(t.metallicRoughnessTextureTransform)})}function bt(t,r,e){r.writeVertices&&vt(t,r);const{indices:m,attributes:n,primitiveType:s,material:u}=r.gltf;let l=st(m||n.position.count,s);const i=r.region.start;if(i){const c=new Uint32Array(l);for(let a=0;a<l.length;a++)c[a]+=i;l=c}t.components.push(new Q({name:r.gltf.name,faces:l,material:e.get(u),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function vt(t,r){const{position:e,normal:m,tangent:n,color:s,texCoord0:u}=t.vertexAttributes,l=r.region.start,{attributes:i,transform:c}=r.gltf,a=i.position.count;if(X(e.slice(l,a),i.position,c),i.normal!=null&&m!=null){const o=z(S(),c),p=m.slice(l,a);Z(p,i.normal,o),C(o)&&tt(p,p)}else m!=null&&at(m,0,0,1,{dstIndex:l,count:a});if(i.tangent!=null&&n!=null){const o=N(S(),c),p=n.slice(l,a);et(p,i.tangent,o),C(o)&&rt(p,p)}else n!=null&&h(n,0,0,1,1,{dstIndex:l,count:a});if(i.texCoord0!=null&&u!=null?lt(u.slice(l,a),i.texCoord0):u!=null&&mt(u,0,0,{dstIndex:l,count:a}),i.color!=null&&s!=null){const o=i.color,p=s.slice(l,a);if(o.elementCount===4)o instanceof F?M(p,o,255):o instanceof I?ut(p,o):o instanceof k&&M(p,o,1/256);else{h(p,255,255,255,255);const f=R.fromTypedArray(p.typedBuffer,p.typedBufferStride);o instanceof j?A(f,o,255):o instanceof R?pt(f,o):o instanceof H&&A(f,o,1/256)}}else s!=null&&h(s.slice(l,a),255,255,255,255)}function Bt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:_(t.s),vertical:_(t.t)}}function _(t){switch(t){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function x(t){return t**(1/ct)*255}function St(t,r){return U(x(t[0]),x(t[1]),x(t[2]),r)}function Et(t){return D(x(t[0]),x(t[1]),x(t[2]))}export{er as loadGLTFMesh};
//# sourceMappingURL=loadGLTFMesh-CNB_D54i.js.map
