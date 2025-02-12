import{I as i,jg as ee,aK as te,jf as re,eV as oe,j$ as ne,fW as se,k0 as ae,k1 as ie,fU as ue,aG as le,hF as q,k2 as V,s as I}from"./index-BlakZCKi.js";import{e as J,r as D}from"./mat4f64-CSKppSlJ.js";import{D as M,L,C as u,E as _}from"./enums-Dk3osxpS.js";import{v as fe}from"./quat-DIfYtO2y.js";import{e as ce}from"./quatf64-aQ5IuZRd.js";import{u as X,F as de,w as pe,q as me,A as he,V as Te,B as we,g as ge,d as xe,i as B,c as H,x as be,L as ye,O as _e,E as Se}from"./BufferView-BNdzqkfm.js";import{n as Ee,t as Ne,o as Oe,r as Re}from"./resourceUtils-jAkShbV4.js";import"./mat3f64-q3fE-ZOt.js";import"./vec32-zVyU2qww.js";import"./basicInterfaces-CZwQPxTp.js";function Ae(n={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...n}}function Ce(n,e={}){return{data:n,parameters:{wrap:{s:M.REPEAT,t:M.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}function v(n,e){const r=n.count;e||(e=new n.TypedArrayConstructor(r));for(let t=0;t<r;t++)e[t]=n.get(t);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:v},Symbol.toStringTag,{value:"Module"}));let k=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const r=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,r,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var S,K;(function(n){n.SCALAR="SCALAR",n.VEC2="VEC2",n.VEC3="VEC3",n.VEC4="VEC4",n.MAT2="MAT2",n.MAT3="MAT3",n.MAT4="MAT4"})(S||(S={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(K||(K={}));const W={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},ve={pbrMetallicRoughness:W,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Ie={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},z=(n={})=>{const e={...W,...n.pbrMetallicRoughness},r=Me({...Ie,...n.extras});return{...ve,...n,pbrMetallicRoughness:e,extras:r}};function Me(n){switch(n.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:n.ESRI_externalColorMixMode="tint"}return n}const Le={magFilter:L.LINEAR,minFilter:L.LINEAR_MIPMAP_LINEAR,wrapS:M.REPEAT,wrapT:M.REPEAT},Fe=n=>({...Le,...n});function Ue(n){let e,r;return n.replace(/^(.*\/)?([^/]*)$/,(t,o,s)=>(e=o||"",r=s||"","")),{dirPart:e,filePart:r}}const A={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562};class g{constructor(e,r,t,o){if(this._context=e,this.uri=r,this.json=t,this._glbBuffer=o,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=Ue(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new i("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new i("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new i("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,r,t){if(ee(r)){const a=te(r);if(a&&a.mediaType!=="model/gltf-binary")try{const f=JSON.parse(a.isBase64?atob(a.data):a.data);return new g(e,r,f)}catch{}const l=re(r);if(g._isGLBData(l))return this._fromGLBData(e,r,l)}if(je.test(r)||(t==null?void 0:t.expectedType)==="gltf"){const a=await e.loadJSON(r,t);return new g(e,r,a)}const o=await e.loadBinary(r,t);if(g._isGLBData(o))return this._fromGLBData(e,r,o);if(Ve.test(r)||(t==null?void 0:t.expectedType)==="glb")throw new i("gltf-loader-invalid-glb","This is not a valid glb file.");const s=await e.loadJSON(r,t);return new g(e,r,s)}static _isGLBData(e){if(e==null)return!1;const r=new k(e);return r.remainingBytes()>=4&&r.readUint32()===A.MAGIC}static async _fromGLBData(e,r,t){const o=await g._parseGLBData(t);return new g(e,r,o.json,o.binaryData)}static async _parseGLBData(e){const r=new k(e);if(r.remainingBytes()<12)throw new i("gltf-loader-error","glb binary data is insufficiently large.");const t=r.readUint32(),o=r.readUint32(),s=r.readUint32();if(t!==A.MAGIC)throw new i("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<s)throw new i("gltf-loader-error","glb binary data is smaller than header specifies.");if(o!==2)throw new i("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,l,f=0;for(;r.remainingBytes()>=8;){const c=r.readUint32(),h=r.readUint32();if(f===0){if(h!==A.CHUNK_TYPE_JSON)throw new i("gltf-loader-error","First glb chunk must be JSON.");if(c<0)throw new i("gltf-loader-error","No JSON data found.");a=await Ee(r.readUint8Array(c))}else if(f===1){if(h!==A.CHUNK_TYPE_BIN)throw new i("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");l=r.readUint8Array(c)}else I.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");f+=1}if(!a)throw new i("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:l}}async getBuffer(e,r){const t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new i("gltf-loader-error","glb buffer not present");return this._glbBuffer}const o=await this._getBufferLoader(e,r);if(o.byteLength!==t.byteLength)throw new i("gltf-loader-error","Buffer byte lengths should match.");return o}async _getBufferLoader(e,r){const t=this._bufferLoaders.get(e);if(t)return t;const o=this.json.buffers[e].uri,s=this._context.loadBinary(this._resolveUri(o),r).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,s),s}async getAccessor(e,r){if(!this.json.accessors)throw new i("gltf-loader-unsupported-feature","Accessors missing.");const t=this.json.accessors[e];if((t==null?void 0:t.bufferView)==null)throw new i("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[S.MAT2,S.MAT3,S.MAT4])throw new i("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);const o=this.json.bufferViews[t.bufferView],s=await this.getBuffer(o.buffer,r),a=Pe[t.type],l=$e[t.componentType],f=a*l,c=o.byteStride||f;return{raw:s.buffer,byteStride:c,byteOffset:s.byteOffset+(o.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:c===f,componentCount:a,componentByteSize:l,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}}async getIndexData(e,r){if(e.indices==null)return;const t=await this.getAccessor(e.indices,r);if(t.isDenselyPacked)switch(t.componentType){case u.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case u.UNSIGNED_BYTE:return v(w(xe,t));case u.UNSIGNED_SHORT:return v(w(ge,t));case u.UNSIGNED_INT:return v(w(we,t))}}async getPositionData(e,r){if(e.attributes.POSITION==null)throw new i("gltf-loader-unsupported-feature","No POSITION vertex data found.");const t=await this.getAccessor(e.attributes.POSITION,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return w(B,t)}async getNormalData(e,r){if(e.attributes.NORMAL==null)throw new i("gltf-loader-error","No NORMAL vertex data found.");const t=await this.getAccessor(e.attributes.NORMAL,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return w(B,t)}async getTangentData(e,r){if(e.attributes.TANGENT==null)throw new i("gltf-loader-error","No TANGENT vertex data found.");const t=await this.getAccessor(e.attributes.TANGENT,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==4)throw new i("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return w(H,t)}async getTextureCoordinates(e,r){if(e.attributes.TEXCOORD_0==null)throw new i("gltf-loader-error","No TEXCOORD_0 vertex data found.");const t=await this.getAccessor(e.attributes.TEXCOORD_0,r);if(t.componentCount!==2)throw new i("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===u.FLOAT)return w(X,t);if(!t.normalized)throw new i("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return Ge(t)}async getVertexColors(e,r){if(e.attributes.COLOR_0==null)throw new i("gltf-loader-error","No COLOR_0 vertex data found.");const t=await this.getAccessor(e.attributes.COLOR_0,r);if(t.componentCount!==4&&t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===u.FLOAT)return w(H,t);if(t.componentType===u.UNSIGNED_BYTE)return w(be,t);if(t.componentType===u.UNSIGNED_SHORT)return w(ye,t)}else if(t.componentCount===3){if(t.componentType===u.FLOAT)return w(B,t);if(t.componentType===u.UNSIGNED_BYTE)return w(_e,t);if(t.componentType===u.UNSIGNED_SHORT)return w(Se,t)}throw new i("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+u[t.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,r,t){var s,a,l,f,c,h,m,x,p,y;let o=e.material?this._materialCache.get(e.material):void 0;if(!o){const d=e.material!=null?z(this.json.materials[e.material]):z(),T=d.pbrMetallicRoughness,E=this.hasVertexColors(e),b=this.getTexture(T.baseColorTexture,r),N=this.getTexture(d.normalTexture,r),F=t?this.getTexture(d.occlusionTexture,r):void 0,U=t?this.getTexture(d.emissiveTexture,r):void 0,O=t?this.getTexture(T.metallicRoughnessTexture,r):void 0,R=e.material!=null?e.material:-1;o={alphaMode:d.alphaMode,alphaCutoff:d.alphaCutoff,color:T.baseColorFactor,doubleSided:!!d.doubleSided,colorTexture:await b,normalTexture:await N,name:d.name,id:R,occlusionTexture:await F,emissiveTexture:await U,emissiveFactor:d.emissiveFactor,metallicFactor:T.metallicFactor,roughnessFactor:T.roughnessFactor,metallicRoughnessTexture:await O,hasVertexColors:E,ESRI_externalColorMixMode:d.extras.ESRI_externalColorMixMode,colorTextureTransform:(a=(s=T==null?void 0:T.baseColorTexture)==null?void 0:s.extensions)==null?void 0:a.KHR_texture_transform,normalTextureTransform:(f=(l=d.normalTexture)==null?void 0:l.extensions)==null?void 0:f.KHR_texture_transform,occlusionTextureTransform:(h=(c=d.occlusionTexture)==null?void 0:c.extensions)==null?void 0:h.KHR_texture_transform,emissiveTextureTransform:(x=(m=d.emissiveTexture)==null?void 0:m.extensions)==null?void 0:x.KHR_texture_transform,metallicRoughnessTextureTransform:(y=(p=T==null?void 0:T.metallicRoughnessTexture)==null?void 0:p.extensions)==null?void 0:y.KHR_texture_transform,receiveAmbientOcclusion:d.extras.ESRI_receiveAmbientOcclusion,receiveShadows:d.extras.ESRI_receiveShadows}}return o}async getTexture(e,r){if(!e)return;if((e.texCoord||0)!==0)throw new i("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const t=e.index,o=this.json.textures[t],s=Fe(o.sampler!=null?this.json.samplers[o.sampler]:{}),a=Y(o),l=this.json.images[a],f=await this._loadTextureImageData(t,o,r);return oe(this._textureCache,t,()=>{const c=m=>m===33071||m===33648||m===10497,h=m=>{throw new i("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${m}`)};return{data:f,wrapS:c(s.wrapS)?s.wrapS:h(s.wrapS),wrapT:c(s.wrapT)?s.wrapT:h(s.wrapT),minFilter:s.minFilter,name:l.name,id:t}})}getNodeTransform(e){if(e===void 0)return Be;let r=this._nodeTransformCache.get(e);if(!r){const t=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?r=se(J(),t,o.matrix):o.translation||o.rotation||o.scale?(r=D(t),o.translation&&ae(r,r,o.translation),o.rotation&&(C[3]=fe(C,o.rotation),ie(r,r,C[3],C)),o.scale&&ue(r,r,o.scale)):r=D(t),this._nodeTransformCache.set(e,r)}return r}_resolveUri(e){return le(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=q.parse(this.json.asset.version,"glTF");De.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(r=>this._supportedExtensions.includes(r)))throw new i("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,r)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,r)})})}async _loadTextureImageData(e,r,t){const o=this._textureLoaders.get(e);if(o)return o;const s=this._createTextureLoader(r,t);return this._textureLoaders.set(e,s),s}async _createTextureLoader(e,r){const t=Y(e),o=this.json.images[t];if(o.uri){if(o.uri.endsWith(".ktx2")){const f=await this._context.loadBinary(this._resolveUri(o.uri),r);return new Ne(new Uint8Array(f))}return this._context.loadImage(this._resolveUri(o.uri),r)}if(o.bufferView==null)throw new i("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(o.mimeType==null)throw new i("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[o.bufferView],a=await this.getBuffer(s.buffer,r);if(s.byteStride!=null)throw new i("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const l=a.byteOffset+(s.byteOffset||0);return Oe(new Uint8Array(a.buffer,l,s.byteLength),o.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await V(Array.from(this._bufferLoaders.values())),r=await V(Array.from(this._textureLoaders.values()));return e.reduce((t,o)=>t+((o==null?void 0:o.byteLength)??0),0)+r.reduce((t,o)=>t+(o?Re(o)?o.data.byteLength:o.width*o.height*4:0),0)}}const Be=ne(J(),Math.PI/2),De=new q(2,0,"glTF"),C=ce(),Pe={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$e={[u.BYTE]:1,[u.UNSIGNED_BYTE]:1,[u.SHORT]:2,[u.UNSIGNED_SHORT]:2,[u.HALF_FLOAT]:2,[u.FLOAT]:4,[u.INT]:4,[u.UNSIGNED_INT]:4};function Ge(n){switch(n.componentType){case u.BYTE:return new Te(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case u.UNSIGNED_BYTE:return new he(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case u.SHORT:return new me(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case u.UNSIGNED_SHORT:return new pe(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case u.UNSIGNED_INT:return new de(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case u.FLOAT:return new X(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}}function w(n,e){return new n(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}function Y(n){var e;if(((e=n.extensions)==null?void 0:e.KHR_texture_basisu)!=null)return n.extensions.KHR_texture_basisu.source;if(n.source!==null)return n.source;throw new i("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const je=/\.gltf$/i,Ve=/\.glb$/i;let He=0;async function at(n,e,r={},t=!0){var m,x;const o=await g.load(n,e,r),s="gltf_"+He++,a={lods:[],materials:new Map,textures:new Map,meta:ke(o)},l=!(!o.json.asset.extras||o.json.asset.extras.ESRI_type!=="symbolResource"),f=(x=(m=o.json.asset.extras)==null?void 0:m.ESRI_webstyleSymbol)==null?void 0:x.webstyle,c=new Map;await Ke(o,async(p,y,d,T)=>{var j;const E=c.get(d)??0;c.set(d,E+1);const b=p.mode!==void 0?p.mode:_.TRIANGLES,N=b===_.TRIANGLES||b===_.TRIANGLE_STRIP||b===_.TRIANGLE_FAN?b:null;if(N==null)return void I.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+_[b]+"). Skipping primitive.");if(!o.hasPositions(p))return void I.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const F=o.getPositionData(p,r),U=o.getMaterial(p,r,t),O=o.hasNormals(p)?o.getNormalData(p,r):null,R=o.hasTangents(p)?o.getTangentData(p,r):null,P=o.hasTextureCoordinates(p)?o.getTextureCoordinates(p,r):null,$=o.hasVertexColors(p)?o.getVertexColors(p,r):null,Q=o.getIndexData(p,r),Z={name:T,transform:D(y),attributes:{position:await F,normal:O?await O:null,texCoord0:P?await P:null,color:$?await $:null,tangent:R?await R:null},indices:await Q,primitiveType:N,material:Ye(a,await U,s)};let G=null;((j=a.meta)==null?void 0:j.ESRI_lod)!=null&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(G=a.meta.ESRI_lod.thresholds[d]),a.lods[d]=a.lods[d]||{parts:[],name:T,lodThreshold:G},a.lods[d].parts[E]=Z});for(const p of a.lods)p.parts=p.parts.filter(y=>!!y);const h=await o.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:l,uri:o.uri,ESRI_webstyle:f},customMeta:{},size:h}}function ke(n){const e=n.json;let r=null;return e.nodes.forEach(t=>{const o=t.extras;o!=null&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(r=o)}),r}async function Ke(n,e){const r=n.json,t=r.scenes[r.scene||0].nodes,o=t.length>1,s=[];for(const l of t){const f=r.nodes[l];s.push(a(l,0)),ze(f)&&!o&&f.extensions.MSFT_lod.ids.forEach((c,h)=>a(c,h+1))}async function a(l,f){const c=r.nodes[l],h=n.getNodeTransform(l);if(c.weights!=null&&I.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),c.mesh!=null){const m=r.meshes[c.mesh];for(const x of m.primitives)s.push(e(x,h,f,m.name))}for(const m of c.children||[])s.push(a(m,f))}await Promise.all(s)}function ze(n){var e;return((e=n.extensions)==null?void 0:e.MSFT_lod)&&Array.isArray(n.extensions.MSFT_lod.ids)}function Ye(n,e,r){const t=s=>{const a=`${r}_tex_${s&&s.id}${s!=null&&s.name?"_"+s.name:""}`;if(s&&!n.textures.has(a)){const l=Ce(s.data,{wrap:{s:s.wrapS,t:s.wrapT},mipmap:qe.has(s.minFilter),noUnpackFlip:!0});n.textures.set(a,l)}return a},o=`${r}_mat_${e.id}_${e.name}`;if(!n.materials.has(o)){const s=Ae({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?t(e.colorTexture):void 0,textureNormal:e.normalTexture?t(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?t(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?t(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});n.materials.set(o,s)}return o}const qe=new Set([L.LINEAR_MIPMAP_LINEAR,L.LINEAR_MIPMAP_NEAREST]);export{at as loadGLTF};
//# sourceMappingURL=loader-KcHx39pI.js.map
