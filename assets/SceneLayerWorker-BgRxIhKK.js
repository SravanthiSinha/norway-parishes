const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/i3s-RfwEB8nJ.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/index-Bs-G_wsu.js","assets/index-D3OSfFaz.css","assets/projectMeshVertexPositions-Cg6kP9ya.js","assets/MeshLocalVertexSpace-BVQfGmj4.js","assets/vertexSpaceConversion-KMfh5WD5.js","assets/mat3-CCtmvIux.js","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-CSKppSlJ.js","assets/vec32-DrHtz8AR.js","assets/spatialReferenceEllipsoidUtils-CyKB2yXE.js","assets/computeTranslationToOriginAndRotation-DaEA-6J0.js","assets/projectPointToVector-CvVRkOeo.js","assets/meshVertexSpaceUtils-Br2zZLV7.js","assets/vec3-BwK81hes.js","assets/BufferView-BasJWrfc.js","assets/vec4-DaiOdcnT.js"])))=>i.map(i=>d[i]);
import{_ as N,fh as K,ag as C,fF as Q}from"./index-Bs-G_wsu.js";import{b as W,a as X}from"./MeshLocalVertexSpace-BVQfGmj4.js";import{f as Z,l as ee}from"./vec3-BwK81hes.js";import"./sphere-Ccinv2Ko.js";import"./I3SUtil-BHXdDhVf.js";import"./vec32-DrHtz8AR.js";import"./mat3-CCtmvIux.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-Cm5ATwSk.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./projectVectorToVector-UtrK5Qk3.js";import"./projectPointToVector-CvVRkOeo.js";import"./I3SBinaryReader-D6mq8lfj.js";import"./VertexAttribute-BdZWZuT1.js";import"./floatRGBA-BQ3o4Bkr.js";import"./NormalAttribute.glsl-B61dYd_p.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-DAPz5WXt.js";import"./quat-CQllV6qx.js";import"./spatialReferenceEllipsoidUtils-CyKB2yXE.js";import"./computeTranslationToOriginAndRotation-DaEA-6J0.js";import"./ViewingMode-dBUh39ak.js";var R,j;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(R||(R={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(j||(j={}));function te(){return F||(F=new Promise(e=>N(()=>import("./i3s-RfwEB8nJ.js"),__vite__mapDeps([0,1])).then(t=>t.i).then(({default:t})=>{const o=t({locateFile:oe,onRuntimeInitialized:()=>e(o)});delete o.then})).catch(e=>{throw e})),F}function oe(e){return K(`esri/libs/i3s/${e}`)}let F;var $,g,B,V,k;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})($||($={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(g||(g={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(B||(B={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(V||(V={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(k||(k={}));async function Ue(e){n=await w();const t=[e.geometryBuffer];return{result:H(n,e,t),transferList:t}}async function xe(e){var b;n=await w();const t=[e.geometryBuffer],{geometryBuffer:o}=e,s=o.byteLength,i=n._malloc(s),l=new Uint8Array(n.HEAPU8.buffer,i,s);l.set(new Uint8Array(o));const a=n.dracoDecompressPointCloudData(i,l.byteLength);if(n._free(i),a.error.length>0)throw new Error(`i3s.wasm: ${a.error}`);const f=((b=a.featureIds)==null?void 0:b.length)>0?a.featureIds.slice():null,d=a.positions.slice();return f&&t.push(f.buffer),t.push(d.buffer),{result:{positions:d,featureIds:f},transferList:t}}async function Fe(e){await w(),ne(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Me(e){await w(),re(e)}async function ve(e){n=await w(),n.setLegacySchema(e.context,e.jsonSchema)}async function Oe(e){const{localMatrix:t,origin:o,positions:s,vertexSpace:i}=e,l=C.fromJSON(e.inSpatialReference),a=C.fromJSON(e.outSpatialReference);let f;const[{projectBuffer:d},{initializeProjection:b}]=await Promise.all([N(()=>import("./index-Bs-G_wsu.js").then(c=>c.pb),__vite__mapDeps([2,3])),N(()=>import("./index-Bs-G_wsu.js").then(c=>c.pc),__vite__mapDeps([2,3]))]);await b(l,a);const E=[0,0,0];if(!d(o,l,0,E,a,0))throw new Error("Failed to project");if(i.type==="georeferenced"&&i.origin==null){if(f=new Float64Array(s.length),!d(s,l,0,f,a,0,f.length/3))throw new Error("Failed to project")}else{const c=i.type==="georeferenced"?W.fromJSON(i):X.fromJSON(i),{projectMeshVertexPositions:u}=await N(async()=>{const{projectMeshVertexPositions:p}=await import("./projectMeshVertexPositions-Cg6kP9ya.js");return{projectMeshVertexPositions:p}},__vite__mapDeps([4,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17])),m=u({vertexAttributes:{position:s},transform:t?{localMatrix:t}:void 0,vertexSpace:c,spatialReference:l},a);if(!m)throw new Error("Failed to project");f=m}const S=f.length,[_,I,A]=E;for(let c=0;c<S;c+=3)f[c]-=_,f[c+1]-=I,f[c+2]-=A;return{result:{projected:f,original:s,projectedOrigin:E},transferList:[f.buffer,s.buffer]}}async function Te({normalMatrix:e,normals:t}){const o=new Float32Array(t.length);return Z(o,t,e),Q(e)&&ee(o,o),{result:{transformed:o,original:t},transferList:[o.buffer,t.buffer]}}function De(e){Y(e)}let L,n;function re(e){if(!n)return;const t=e.modifications,o=n._malloc(8*t.length),s=new Float64Array(n.HEAPU8.buffer,o,t.length);for(let i=0;i<t.length;++i)s[i]=t[i];n.setModifications(e.context,o,t.length,e.isGeodetic),n._free(o)}function H(e,t,o){const{context:s,globalTrafo:i,mbs:l,obbData:a,elevationOffset:f,geometryBuffer:d,geometryDescriptor:b,indexToVertexProjector:E,vertexToRenderProjector:S}=t,_=e._malloc(d.byteLength),I=33,A=e._malloc(I*Float64Array.BYTES_PER_ELEMENT),c=new Uint8Array(e.HEAPU8.buffer,_,d.byteLength);c.set(new Uint8Array(d));const u=new Float64Array(e.HEAPU8.buffer,A,I);P(u,[NaN,NaN,NaN]);let m=u.byteOffset+3*u.BYTES_PER_ELEMENT,p=new Float64Array(u.buffer,m);P(p,i),m+=16*u.BYTES_PER_ELEMENT,p=new Float64Array(u.buffer,m),P(p,l),m+=4*u.BYTES_PER_ELEMENT,a&&(p=new Float64Array(u.buffer,m),P(p,a));const M=b,J={isDraco:!1,isLegacy:!1,color:t.layouts.some(h=>h.some(y=>y.name==="color")),normal:t.needNormals&&t.layouts.some(h=>h.some(y=>y.name==="normalCompressed")),uv0:t.layouts.some(h=>h.some(y=>y.name==="uv0")),uvRegion:t.layouts.some(h=>h.some(y=>y.name==="uvRegion")),featureIndex:M.featureIndex},r=e.process(s,!!t.obbData,_,c.byteLength,M,J,A,f,E,S,t.normalReferenceFrame);if(e._free(A),e._free(_),r.error.length>0)throw new Error(`i3s.wasm: ${r.error}`);if(r.discarded)return null;const U=r.componentOffsets.length>0?r.componentOffsets.slice():null,x=r.featureIds.length>0?r.featureIds.slice():null,z=r.anchorIds.length>0?Array.from(r.anchorIds):null,G=r.anchors.length>0?Array.from(r.anchors):null,v=r.interleavedVertedData.slice().buffer,O=r.indicesType===R.Int16?new Uint16Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/2).slice():new Uint32Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/4).slice(),T=r.positions.slice(),D=r.positionIndicesType===R.Int16?new Uint16Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/2).slice():new Uint32Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/4).slice(),q={layout:t.layouts[0],interleavedVertexData:v,indices:O,hasColors:r.hasColors,hasModifications:r.hasModifications,positionData:{data:T,indices:D}};return x&&o.push(x.buffer),U&&o.push(U.buffer),o.push(v),o.push(O.buffer),o.push(T.buffer),o.push(D.buffer),{componentOffsets:U,featureIds:x,anchorIds:z,anchors:G,transformedGeometry:q,obb:r.obb,globalTrafo:i}}function Ce(e){return e===0?g.Unmodified:e===1?g.PotentiallyModified:e===2?g.Culled:g.Unknown}function ne(e){if(!n)return;const{context:t,buffer:o}=e,s=n._malloc(o.byteLength),i=o.byteLength/Float64Array.BYTES_PER_ELEMENT,l=new Float64Array(n.HEAPU8.buffer,s,i),a=new Float64Array(o);l.set(a),n.filterOBBs(t,s,i),a.set(l),n._free(s)}function Y(e){n&&n.destroy(e)===0&&(n=null)}function P(e,t){for(let o=0;o<t.length;++o)e[o]=t[o]}async function je(){n||await w()}function w(){return n?Promise.resolve(n):(L||(L=te().then(e=>(n=e,L=null,n))),L)}const $e={transform:(e,t)=>n&&H(n,e,t),destroy:Y};export{De as destroyContext,xe as dracoDecompressPointCloudData,Fe as filterObbsForModifications,ne as filterObbsForModificationsSync,je as initialize,Ce as interpretObbModificationResults,Ue as process,Oe as project,ve as setLegacySchema,Me as setModifications,re as setModificationsSync,$e as test,Te as transformNormals};
