import{I as D,U as L,eR as F,a$ as B,fF as C,hn as P,bM as U,eD as z}from"./index-Bs-G_wsu.js";import{j as G,n as N}from"./mat3-CCtmvIux.js";import{e as R}from"./mat3f64-q3fE-ZOt.js";import{w as q,m as K,f as Q,c as V}from"./SceneLayer-Dh7eIU30.js";import{p as k}from"./MeshVertexAttributes-CFZE9QZQ.js";import{s as S}from"./meshVertexSpaceUtils-Br2zZLV7.js";import{c as O,x as I,L as H,O as E,i as j,E as J,T as W,u as X}from"./BufferView-BasJWrfc.js";import{t as Y,r as Z,u as tt,n as M}from"./vec3-BwK81hes.js";import{f as et,o as rt,u as A}from"./vec4-DaiOdcnT.js";import{e as ot}from"./types-D0PSWh4d.js";import{loadGLTF as nt}from"./loader-9XS5M1Gj.js";import{n as it,o as st,f as at,a as h,b as lt,l as mt,e as ut,c as pt,d as ct}from"./DefaultMaterial_COLOR_GAMMA-ByRT9Bjn.js";import{B as ft}from"./vertexSpaceConversion-KMfh5WD5.js";import{r as dt}from"./resourceUtils-C2vvWdRd.js";import{D as w}from"./enums-Dk3osxpS.js";import"./MultiOriginJSONSupport-BBxe_F7T.js";import"./MeshTransform-BdLijvYT.js";import"./mat4f64-CSKppSlJ.js";import"./quat-CQllV6qx.js";import"./quatf64-aQ5IuZRd.js";import"./vec32-DrHtz8AR.js";import"./imageUtils-DdVwTzau.js";import"./MeshLocalVertexSpace-BVQfGmj4.js";import"./earcut-Lltz9D9k.js";import"./Indices-QaLCrMzU.js";import"./plane-Cm5ATwSk.js";import"./deduplicate-BxDTMzIg.js";import"./projectPointToVector-CvVRkOeo.js";import"./spatialReferenceEllipsoidUtils-CyKB2yXE.js";import"./computeTranslationToOriginAndRotation-DaEA-6J0.js";import"./External-BfV74Dd8.js";import"./infoFor3D-CxdEiWhp.js";import"./Layer-BD5fEEcE.js";import"./meshSpatialReferenceScaleUtils-CNwMJDOt.js";import"./APIKeyMixin-DWFWR-Vn.js";import"./ArcGISService-Dhi-DofJ.js";import"./CustomParametersMixin-Y8anAD7D.js";import"./EditBusLayer-BZlckobr.js";import"./uuid-Cl5lrJ4c.js";import"./OperationalLayer-okMj1Nle.js";import"./commonProperties-D2JZeGzF.js";import"./ElevationInfo-Ogo5JfE3.js";import"./PortalLayer-DHH3dWZi.js";import"./portalItemUtils-DwiXoV8_.js";import"./ScaleRangeLayer-DoKtR3vt.js";import"./SceneService-CtmMRP_I.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./HeightModelInfo-DY5GmORu.js";import"./jsonContext-BDIn9Amg.js";import"./resourceUtils-cEEDuGli.js";import"./resourceUtils-B3suAenr.js";import"./saveUtils-DtgTFV4C.js";import"./TemporalLayer-Byau-JSW.js";import"./TimeInfo-BCZiCiBo.js";import"./associatedFeatureServiceUtils-6IVjCaHf.js";import"./capabilities-Y9lFlGVh.js";import"./featureLayerUtils-B9lP5GlN.js";import"./FeatureReductionSelection-QQOJQw4A.js";import"./fieldProperties-CwoNl49C.js";import"./I3SLayerDefinitions-BpsKXGDL.js";import"./labelingInfo-Qff1pGsE.js";import"./labelUtils-BPgYl1Yw.js";import"./LayerFloorInfo-D23a2fZQ.js";import"./fetchService-2BwpOoiK.js";import"./persistable-76jKxmNh.js";import"./MD5-C9MwAd2G.js";import"./resourceExtension-Ca_6o8mh.js";import"./styleUtils-CplkOwlh.js";import"./elevationInfoUtils-CHyhgscB.js";import"./popupUtils-Cu6PoQ9J.js";import"./I3SUtil-BHXdDhVf.js";import"./projectVectorToVector-UtrK5Qk3.js";import"./sphere-Ccinv2Ko.js";import"./I3SBinaryReader-D6mq8lfj.js";import"./VertexAttribute-BdZWZuT1.js";import"./floatRGBA-BQ3o4Bkr.js";import"./NormalAttribute.glsl-B61dYd_p.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-DAPz5WXt.js";import"./ViewingMode-dBUh39ak.js";import"./popupUtils-DJPVxUS3.js";import"./basicInterfaces-CZwQPxTp.js";function xt(t,r,e){const m=t.typedBuffer,n=t.typedBufferStride,s=r.typedBuffer,u=r.typedBufferStride,l=e?e.count:r.count;let i=((e==null?void 0:e.dstIndex)??0)*n,c=((e==null?void 0:e.srcIndex)??0)*u;for(let a=0;a<l;++a){for(let o=0;o<9;++o)m[i+o]=s[c+o];i+=n,c+=u}}Object.freeze(Object.defineProperty({__proto__:null,copy:xt},Symbol.toStringTag,{value:"Module"}));function gt(t,r,e){const m=t.typedBuffer,n=t.typedBufferStride,s=r.typedBuffer,u=r.typedBufferStride,l=e?e.count:r.count;let i=((e==null?void 0:e.dstIndex)??0)*n,c=((e==null?void 0:e.srcIndex)??0)*u;for(let a=0;a<l;++a){for(let o=0;o<16;++o)m[i+o]=s[c+o];i+=n,c+=u}}Object.freeze(Object.defineProperty({__proto__:null,copy:gt},Symbol.toStringTag,{value:"Module"}));function $(t,r){return new t(new ArrayBuffer(r*t.ElementCount*ot(t.ElementType)))}async function nr(t,r,e){const m=new it($t(e)),n=(await nt(m,r,e,!0)).model,s=n.lods.shift(),u=new Map,l=new Map;n.textures.forEach((g,T)=>u.set(T,ht(g))),n.materials.forEach((g,T)=>l.set(T,wt(g,u)));const i=Tt(s);for(const g of i.parts)bt(i,g,l);const{position:c,normal:a,tangent:o,color:p,texCoord0:f}=i.vertexAttributes,d=S(t,e),b=t.spatialReference.isGeographic?S(t):d,v=ft({vertexAttributes:{position:c.typedBuffer,normal:a==null?void 0:a.typedBuffer,tangent:o==null?void 0:o.typedBuffer},vertexSpace:b,spatialReference:t.spatialReference},d,{allowBufferReuse:!0,sourceUnit:e!=null&&e.unitConversionDisabled?void 0:"meters"});if(!v)throw new D("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${b.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new k({...v,color:p==null?void 0:p.typedBuffer,uv:f==null?void 0:f.typedBuffer})}}function $t(t){const r=t==null?void 0:t.resolveFile;return r?{busy:!1,request:async(e,m,n)=>{const s=(r==null?void 0:r(e))??e;return(await L(s,{responseType:m==="image"?"image":m==="binary"||m==="image+type"?"array-buffer":"json",signal:n==null?void 0:n.signal,timeout:0})).data}}:null}function y(t,r){if(t==null)return"-";const e=t.typedBuffer;return`${F(r,e.buffer,()=>r.size)}/${e.byteOffset}/${e.byteLength}`}function yt(t){return t!=null?t.toString():"-"}function Tt(t){let r=0;const e={color:!1,tangent:!1,normal:!1,texCoord0:!1},m=new Map,n=new Map,s=[];for(const u of t.parts){const{attributes:{position:l,normal:i,color:c,tangent:a,texCoord0:o}}=u,p=`
      ${y(l,m)}/
      ${y(i,m)}/
      ${y(c,m)}/
      ${y(a,m)}/
      ${y(o,m)}/
      ${yt(u.transform)}
    `;let f=!1;const d=F(n,p,()=>(f=!0,{start:r,length:l.count}));f&&(r+=l.count),i&&(e.normal=!0),c&&(e.color=!0),a&&(e.tangent=!0),o&&(e.texCoord0=!0),s.push({gltf:u,writeVertices:f,region:d})}return{vertexAttributes:{position:$(W,r),normal:e.normal?$(j,r):null,tangent:e.tangent?$(O,r):null,color:e.color?$(I,r):null,texCoord0:e.texCoord0?$(X,r):null},parts:s,components:[]}}function ht(t){return new q({data:(dt(t.data),t.data),wrap:Ct(t.parameters.wrap)})}function wt(t,r){const e=new B(Rt(t.color,t.opacity)),m=t.emissiveFactor?new B(St(t.emissiveFactor)):null,n=s=>s?new V({scale:s.scale?[s.scale[0],s.scale[1]]:[1,1],rotation:z(s.rotation??0),offset:s.offset?[s.offset[0],s.offset[1]]:[0,0]}):null;return new K({color:e,colorTexture:r.get(t.textureColor),normalTexture:r.get(t.textureNormal),emissiveColor:m,emissiveTexture:r.get(t.textureEmissive),occlusionTexture:r.get(t.textureOcclusion),alphaMode:Bt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r.get(t.textureMetallicRoughness),colorTextureTransform:n(t.colorTextureTransform),normalTextureTransform:n(t.normalTextureTransform),occlusionTextureTransform:n(t.occlusionTextureTransform),emissiveTextureTransform:n(t.emissiveTextureTransform),metallicRoughnessTextureTransform:n(t.metallicRoughnessTextureTransform)})}function bt(t,r,e){r.writeVertices&&vt(t,r);const{indices:m,attributes:n,primitiveType:s,material:u}=r.gltf;let l=st(m||n.position.count,s);const i=r.region.start;if(i){const c=new Uint32Array(l);for(let a=0;a<l.length;a++)c[a]+=i;l=c}t.components.push(new Q({name:r.gltf.name,faces:l,material:e.get(u),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function vt(t,r){const{position:e,normal:m,tangent:n,color:s,texCoord0:u}=t.vertexAttributes,l=r.region.start,{attributes:i,transform:c}=r.gltf,a=i.position.count;if(Y(e.slice(l,a),i.position,c),i.normal!=null&&m!=null){const o=G(R(),c),p=m.slice(l,a);Z(p,i.normal,o),C(o)&&tt(p,p)}else m!=null&&at(m,0,0,1,{dstIndex:l,count:a});if(i.tangent!=null&&n!=null){const o=N(R(),c),p=n.slice(l,a);et(p,i.tangent,o),C(o)&&rt(p,p)}else n!=null&&h(n,0,0,1,1,{dstIndex:l,count:a});if(i.texCoord0!=null&&u!=null?lt(u.slice(l,a),i.texCoord0):u!=null&&mt(u,0,0,{dstIndex:l,count:a}),i.color!=null&&s!=null){const o=i.color,p=s.slice(l,a);if(o.elementCount===4)o instanceof O?A(p,o,255):o instanceof I?ut(p,o):o instanceof H&&A(p,o,1/256);else{h(p,255,255,255,255);const f=E.fromTypedArray(p.typedBuffer,p.typedBufferStride);o instanceof j?M(f,o,255):o instanceof E?pt(f,o):o instanceof J&&M(f,o,1/256)}}else s!=null&&h(s.slice(l,a),255,255,255,255)}function Bt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:_(t.s),vertical:_(t.t)}}function _(t){switch(t){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function x(t){return t**(1/ct)*255}function Rt(t,r){return P(x(t[0]),x(t[1]),x(t[2]),r)}function St(t){return U(x(t[0]),x(t[1]),x(t[2]))}export{nr as loadGLTFMesh};