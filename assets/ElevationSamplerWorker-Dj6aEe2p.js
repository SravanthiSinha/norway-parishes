import{T as f}from"./index-Vdm0PCas.js";import{h as p}from"./PooledRBush-K2mTzg4o.js";import{b as u}from"./MeshLocalVertexSpace-DJ8UqjWc.js";import{B as l}from"./vertexSpaceConversion-DRC_wMtF.js";import"./quickselect-QQC62dOK.js";import"./mat3-DkohSmiU.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-Dj0jkd2Q.js";import"./spatialReferenceEllipsoidUtils-AeVm9X2Z.js";import"./computeTranslationToOriginAndRotation-l7flbkm8.js";import"./projectPointToVector-BcftPcpn.js";import"./meshVertexSpaceUtils-L4ASm5Gf.js";import"./vec3-DwHr82yV.js";import"./BufferView-DgBJkdOt.js";import"./vec4-hFFjbxtk.js";class B{async createIndex(o,r){var i;const n=new Array;if(!((i=o.vertexAttributes)!=null&&i.position))return new p;const e=d(o),a=r!=null?await r.invoke("createIndexThread",e,{transferList:n}):this.createIndexThread(e).result;return m().fromJSON(a)}createIndexThread(o){const r=m();if(!o)return{result:r.toJSON()};const n=new Float64Array(o.position);return o.components?h(r,n,o.components.map(e=>new Uint32Array(e))):x(r,n)}}function x(t,o){const r=new Array(o.length/9);let n=0;for(let e=0;e<o.length;e+=9)r[n++]=c(o,e,e+3,e+6);return t.load(r),{result:t.toJSON()}}function h(t,o,r){let n=0;for(const i of r)n+=i.length/3;const e=new Array(n);let a=0;for(const i of r)for(let s=0;s<i.length;s+=3)e[a++]=c(o,3*i[s],3*i[s+1],3*i[s+2]);return t.load(e),{result:t.toJSON()}}function d(t){var i;const{vertexAttributes:{position:o},vertexSpace:r,spatialReference:n,transform:e}=t,a=(i=l({vertexAttributes:{position:o},vertexSpace:r,spatialReference:n,transform:e},u.absolute,{allowBufferReuse:!0}))==null?void 0:i.position;return a?!t.components||t.components.some(s=>!s.faces)?{position:a.buffer}:{position:a.buffer,components:t.components.map(s=>s.faces)}:null}function m(){return new p(9,f("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function c(t,o,r,n){return{minX:Math.min(t[o],t[r],t[n]),maxX:Math.max(t[o],t[r],t[n]),minY:Math.min(t[o+1],t[r+1],t[n+1]),maxY:Math.max(t[o+1],t[r+1],t[n+1]),p0:[t[o],t[o+1],t[o+2]],p1:[t[r],t[r+1],t[r+2]],p2:[t[n],t[n+1],t[n+2]]}}export{B as default};
//# sourceMappingURL=ElevationSamplerWorker-Dj6aEe2p.js.map
