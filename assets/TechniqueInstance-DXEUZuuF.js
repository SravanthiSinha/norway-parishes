import{T as c,I as V,s as S}from"./index-Cj37dcSI.js";import{J as h,x as v,b as F,z as U,B as $,j as M,k,q as L,y as O}from"./definitions-C0Jy3zs7.js";import{f as m}from"./UpdateTracking2D-CiRGHbmw.js";import{d as x,c as B}from"./LabelMetric-cqqiT--o.js";import{D as w,L as D}from"./enums-Dk3osxpS.js";import{x as R}from"./Program-CkMDtRvy.js";import{p as z,m as A}from"./Texture-DVpiTee9.js";import{i as P}from"./TileContainer-Dqp_qPmU.js";const q=()=>S.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");class T{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:n}=t,a=x(r);this.blockIndex=i,this.pixelType=r,this.size=e,this.textureOnly=n,n||(this.data=new a(s)),this._resetRange()}destroy(){var t;(t=this._texture)==null||t.dispose();for(const e in this._fbos){const i=this._fbos[e];i&&(e==="0"&&i.detachColorTexture(),i.dispose()),this._fbos[e]=null}this._texture=null}get _textureDesc(){const t=new z;return t.wrapMode=w.CLAMP_TO_EDGE,t.samplingMode=D.NEAREST,t.dataType=this.pixelType,t.width=this.size,t.height=this.size,t}setData(t,e,i){const s=m(t),r=this.data,n=s*this.texelSize+e;!r||n>=r.length||(r[n]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(this.data==null)return null;const i=m(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return this._texture??this._initTexture(t)}getFBO(t,e=0){if(!this._fbos[e]){const i=e===0?this.getTexture(t):this._textureDesc;this._fbos[e]=new R(t,i)}return this._fbos[e]}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){try{const i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;c("esri-2d-update-debug")&&console.debug(`Version[${e}] AttributeStoreView.updateTexture`,{start:i,end:s,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();const r=this.data.buffer,n=this.getTexture(t),a=4,u=(i-i%this.size)/this.size,o=(s-s%this.size)/this.size,d=u,f=this.size,p=o,_=u*this.size*a,g=(f+p*this.size)*a-_,b=x(this.pixelType),I=new b(r,_*b.BYTES_PER_ELEMENT,g),E=this.size,y=p-d+1;if(y>this.size)return void q().error(new V("mapview-webgl","Out-of-bounds index when updating AttributeData"));n.updateData(0,0,d,E,y,I)}catch{}}update(t){const{data:e,start:i,end:s}=t;if(e!=null&&this.data!=null){const r=this.data,n=i*this.texelSize;for(let a=0;a<e.length;a++){const u=1<<a%this.texelSize;t.layout&u&&(r[n+a]=e[a])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=x(this.pixelType);this.destroy(),this.data=new s(t.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new A(t,this._textureDesc,this.data??void 0);if(this._lastTexture!=null&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(t),u=B(r),o=new(x(r))(new ArrayBuffer(i*s*u*this.texelSize)),d=t.getBoundFramebufferObject(),{x:f,y:p,width:_,height:g}=t.getViewport();t.bindFramebuffer(a),a.readPixels(0,0,i,s,n,r,o),e.updateData(0,0,0,2*i,s/2,o),t.setViewport(f,p,_,g),t.bindFramebuffer(d)}return this.destroy(),this._texture=e,this._texture}}class C{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}_initialize(t){if(!t)throw new Error("InternalError: initArgs must be defined");const e=t.blockDescriptors;if(this.size=t.blockSize,c("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:t}),this._data==null)this._data=e.map((i,s)=>i!=null?new T(i,this.size,s):null);else for(let i=0;i<this._data.length;i++){const s=this._data[i],r=e[i];r!=null&&(s==null?this._data[i]=new T(r,this.size,i):s.resize(r,this.size))}}destroy(){var t;for(const e of this._data??[])e==null||e.destroy();(t=this._defaultTexture)==null||t.dispose(),this._defaultTexture=null,this._pendingAttributeUpdates=[]}isEmpty(){return this._data==null}getBlock(t){return this._data==null?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,h.FilterFlags,1,e)}setLocalTimeOrigin(t,e){this.setData(t,h.LocalTimeOrigin,0,e)}getLabelMinZoom(t){return this.getData(t,h.FilterFlags,1,255)}getFilterFlags(t){return this.getData(t,h.FilterFlags,0,0)}getVisualVariableData(t,e){return this.getData(t,h.VV,e,0)}getData(t,e,i,s){if(!this._data)return 0;const r=this._data[e];if(r==null)return 0;const n=r.getData(t,i);return n??s}setData(t,e,i,s){this._data[e].setData(t,i,s)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}requestUpdate(t){this._version=t.version,this._pendingAttributeUpdates.push(t),c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:t})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;const t=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(const e of t){const{blockData:i,initArgs:s,sendUpdateEpoch:r,version:n}=e;c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${r}] AttributeStoreView.applyUpdate`),this._version=n,this._epoch=r,s!=null&&this._initialize(s);const a=this._data;for(let u=0;u<i.length;u++){const o=i[u],d=a[u];d!=null&&o!=null&&(c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${u}] AttributeStoreView.update`,{block:o}),d.update(o))}}}getUniforms(t){return{filterFlags:{texture:this._getTexture(t,h.FilterFlags),unit:v},animation:{texture:this._getTexture(t,h.Animation),unit:F},gpgpu:{texture:this._getTexture(t,h.GPGPU),unit:U},localTimeOrigin:{texture:this._getTexture(t,h.LocalTimeOrigin),unit:$},visualVariableData:{texture:this._getTexture(t,h.VV),unit:M},dataDriven0:{texture:this._getTexture(t,h.DD0),unit:k},dataDriven1:{texture:this._getTexture(t,h.DD1),unit:L},dataDriven2:{texture:this._getTexture(t,h.DD2),unit:O},size:this.size}}_getTexture(t,e){var s;const i=(s=this._data)==null?void 0:s[e];return i?(i.updateTexture(t,this._version),i.getTexture(t)):this._getDefaultTexture(t)}_getDefaultTexture(t){if(this._defaultTexture==null){const e=new z;e.wrapMode=w.CLAMP_TO_EDGE,e.samplingMode=D.NEAREST,e.width=1,e.height=1,this._defaultTexture=new A(t,e,new Uint8Array(4))}return this._defaultTexture}}const N=60;let W=class extends P{constructor(t){super(t),this._statisticsByLevel=new Map,this._entityIndex=new Map,this.attributeView=new C}destroy(){this.children.forEach(t=>t.destroy()),this.removeAllChildren(),this.attributeView.destroy()}doRender(t){t.context.capabilities.enable("textureFloatLinear"),super.doRender(t)}get hasAnimations(){for(const t of this.children)if(t.hasAnimations)return!0;return!1}_reindexAndUpdateFeaturesIfNeeded(){if(this.hasAnimations&&(this._reindexFeatures(),this.attributeView.size!==0))for(const t of this._entityIndex.values())t.dirty&&(this.attributeView.setData(t.displayId,h.LocalTimeOrigin,0,t.firstIndexed),t.dirty=!1)}restartAnimation(t){const e=this._entityIndex.get(t);if(!e)return;const i=performance.now()/1e3;e.firstIndexed=i,e.dirty=!0}restartAllAnimations(){const t=performance.now()/1e3;for(const[e,i]of this._entityIndex)i.firstIndexed=t,i.dirty=!0}_reindexFeatures(){const t=performance.now()/1e3;for(const e of this.children)for(const i of e.entityIds){const{objectId:s}=i;let r=this._entityIndex.get(s);r||(r={objectId:s,displayId:0,firstIndexed:t,lastIndexed:0,dirty:!0},this._entityIndex.set(s,r)),r.lastIndexed=t,r.displayId=i.displayId}for(const[e,i]of this._entityIndex)t-i.lastIndexed>N&&this._entityIndex.delete(e)}_updateAttributeView(){this.attributeView.update(),this._reindexAndUpdateFeaturesIfNeeded()}createRenderParams(t){const e=super.createRenderParams(t);return e.attributeView=this.attributeView,e.instanceStore=this._instanceStore,e.statisticsByLevel=this._statisticsByLevel,e}};function tt(l){return l}class et{constructor(t,e,i){this._instanceId=t,this.techniqueRef=e,this._input=i}get instanceId(){return this._instanceId}createMeshInfo(t){return{id:this._instanceId,techniqueType:this.techniqueRef.type,inputParams:t,optionalAttributes:this._input.optionalAttributes}}getInput(){return this._input}setInput(t){this._input=t}}export{et as i,W as n,tt as r};
//# sourceMappingURL=TechniqueInstance-DXEUZuuF.js.map
