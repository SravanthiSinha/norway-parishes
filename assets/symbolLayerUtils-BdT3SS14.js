const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/objectResourceUtils-CKqivAYK.js","assets/index-Du44_A8J.js","assets/index-Jib82o7I.css","assets/webStyleSymbolUtils-C7iAJys6.js","assets/mat3-BM-4VqQo.js","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-CSKppSlJ.js","assets/vec32-DeRCSSXC.js","assets/Texture-EiOgPw4D.js","assets/Util-CdE8RakK.js","assets/ViewingMode-dBUh39ak.js","assets/InterleavedLayout-BXCVblmR.js","assets/BufferView-OGCHU-EJ.js","assets/types-D0PSWh4d.js","assets/NormalAttribute.glsl-BGzZCxE_.js","assets/interfaces-DDtDqZYj.js","assets/VertexAttribute-BdZWZuT1.js","assets/BindType-BmZEZMMh.js","assets/basicInterfaces-CZwQPxTp.js","assets/AlphaCutoff-UcccL64p.js","assets/boundedPlane-BWYAhh-S.js","assets/sphere-DF4hN4iF.js","assets/plane-DU5lC3C7.js","assets/quatf64-aQ5IuZRd.js","assets/lineSegment-BOkLwQPm.js","assets/enums-Dk3osxpS.js","assets/renderState-BqKKaxGi.js","assets/orientedBoundingBox-B_gsjNrC.js","assets/quat-DtlVh11w.js","assets/spatialReferenceEllipsoidUtils-DTu3db9D.js","assets/computeTranslationToOriginAndRotation-F6558tPf.js","assets/Texture-BJZ-kAGU.js","assets/doublePrecisionUtils-B0owpBza.js","assets/requestImageUtils-CwP3a9Tg.js","assets/vec3-7_bHGPzF.js","assets/vec4-CXEzkzp6.js","assets/DefaultMaterial_COLOR_GAMMA-GBLa6tcv.js","assets/Indices-_TL_mpsd.js","assets/resourceUtils-9okLp2WU.js","assets/vec2f32-BbH2jxlN.js","assets/NestedMap-GuqgquCN.js","assets/triangle-DDghpTtN.js"])))=>i.map(i=>d[i]);
import{el as v,I as t,U as y,_ as p,em as l,c2 as b,en as w,aN as f}from"./index-Du44_A8J.js";let a=h();function h(){return new v(50)}function T(){a=h()}async function $(e,r){var o,n;if((o=e.resource)!=null&&o.href)return _(e.resource.href).then(s=>[s.width,s.height]);if((n=e.resource)!=null&&n.primitive)return r!=null?[r,r]:[256,256];throw new t("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(e){return y(e,{responseType:"image"}).then(r=>r.data)}async function x(e,r=null){var n,s;if(!e.isPrimitive){const i=(n=e.resource)==null?void 0:n.href;if(!i)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const u=a.get(i);if(u!==void 0)return u;const{fetch:m}=await p(()=>import("./objectResourceUtils-CKqivAYK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41])),d=await m(i,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),c=l(d.referenceBoundingBox,f());return a.put(i,c),c}if(!((s=e.resource)!=null&&s.primitive))throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const o=b(w(e.resource.primitive));if(r!=null)for(let i=0;i<o.length;i++)o[i]*=r;return l(o,f())}export{T as clearBoundingBoxCache,$ as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};
//# sourceMappingURL=symbolLayerUtils-BdT3SS14.js.map
