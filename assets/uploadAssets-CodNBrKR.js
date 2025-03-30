import{by as W,V as A,eV as K,du as v,aq as Q,ir as D,is as x,bk as h,U as m,w as l,X as ee,gb as se,ag as te,z as oe,g8 as ne,s as ae}from"./index-BMHxxDIj.js";import{r as re}from"./uuid-Cl5lrJ4c.js";import{m as ie,N as ce,b as le,a as F,i as E}from"./External-CAY3UWN4.js";import{r as ue,n as pe,t as fe,l as me,c as I,a as ge,b as de,d as he,u as we,p as ye}from"./meshSpatialReferenceScaleUtils-BIN8h5Tu.js";import{m as be,l as Pe,a as Te,u as Ae,s as ve}from"./infoFor3D-CxdEiWhp.js";import{N as je}from"./MeshTransform-zKzw9ENa.js";function Me(t,s,e=R){return new W({x:t[e.originX],y:t[e.originY],z:t[e.originZ],spatialReference:s})}function _e(t,s=R){return new je({translation:[t[s.translationX],-t[s.translationZ],t[s.translationY]],rotationAxis:[t[s.rotationX],-t[s.rotationZ],t[s.rotationY]],rotationAngle:t[s.rotationDeg],scale:[t[s.scaleX],t[s.scaleZ],t[s.scaleY]]})}const R={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"},j={uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function w(t,s=o=>{},e){return new $e(t,s,e)}let $e=class{constructor(s,e=n=>{},o){if(this.onProgress=e,this.taskName=o,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof s=="number"){this._weights={};for(let n=0;n<s;n++){const a=n,r=1/s;this._weights[a]=r,this._progressMap.set(a,0)}}else this._weights=s;this.emitProgress()}emitProgress(){let s=0;for(const[e,o]of this._progressMap.entries())s+=o*this._weights[e];if(s===1&&A("enable-feature:esri-3dofl-upload-timings")){const e=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${e} sec`);for(const[o,n]of this._timingsMap){const a=Math.round(n.end-n.start)/1e3,r=Math.round(a/e*100);console.log(this.taskName??"Task",{stepKey:o,stepTime:a,relativeTime:r})}}this.onProgress(s)}setProgress(s,e){if(this._progressMap.set(s,e),A("enable-feature:esri-3dofl-upload-timings")){const o=performance.now();this._startTime??(this._startTime=o);const n=K(this._timingsMap,s,()=>({start:o,end:0}));e===1&&(n.end=o)}this.emitProgress()}simulate(s,e){return k(o=>this.setProgress(s,o),e)}makeOnProgress(s){return e=>this.setProgress(s,e)}};function k(t=e=>{},s=Ee){const e=performance.now();t(0);const o=setInterval(()=>{const n=performance.now()-e,a=1-Math.exp(-n/s);t(a)},Fe);return Q(()=>{clearInterval(o),t(1)})}function Ne(t,s=De){return D(x(t*U/s))}function Se(t,s=xe){return D(x(t*U/s))}const De=10,xe=10,U=8e-6,Fe=v(50),Ee=v(1e3),C=1e6,S=20*C,Ie=2e9,Re=3;async function ke({data:t,name:s,description:e},o,n){let a=null;try{const r=h(o,"uploads"),i=h(r,"info"),{data:u}=await m(i,{query:{f:"json"},responseType:"json"});l(n);const g=ee(o),d=u.maxUploadFileSize*C,f=g?Ie:d,c=g?Math.min(S,d):S;if(t.size>f)throw new Error("Data too large");const Z=h(r,"register"),{data:M}=await m(Z,{query:{f:"json",itemName:Ue(s),description:e},responseType:"json",method:"post"});if(l(n),!M.success)throw new Error("Registration failed");const{itemID:z}=M.item;a=h(r,z);const B=h(a,"uploadPart"),_=Math.ceil(t.size/c),y=new Array;for(let p=0;p<_;++p)y.push(t.slice(p*c,Math.min((p+1)*c,t.size)));const b=y.slice().reverse(),$=new Array,L=w(_,n==null?void 0:n.onProgress,"uploadItem"),H=async()=>{for(;b.length!==0;){const p=y.length-b.length,P=b.pop(),T=new FormData,J=L.simulate(p,Ne(P.size));try{T.append("f","json"),T.append("file",P),T.append("partId",`${p}`);const{data:V}=await m(B,{timeout:0,body:T,responseType:"json",method:"post"});if(l(n),!V.success)throw new Error("Part upload failed")}finally{J.remove()}}};for(let p=0;p<Re&&b.length!==0;++p)$.push(H());await Promise.all($);const G=h(a,"commit"),{data:N}=await m(G,{query:{f:"json",parts:y.map((p,P)=>P).join(",")},responseType:"json",method:"post"});if(l(n),!N.success)throw new Error("Commit failed");return N.item}catch(r){if(a!=null){const i=h(a,"delete");await m(i,{query:{f:"json"},responseType:"json",method:"post"})}throw r}}function Ue(t){return t.replaceAll("/","_").replaceAll("\\","_")}async function Ce(t,s,e){var a;const o=t.length;if(!o)return(a=e==null?void 0:e.onProgress)==null||a.call(e,1),[];const n=w(o,e==null?void 0:e.onProgress,"uploadAssets");return Promise.all(t.map((r,i)=>Oe(r,s,{...e,onProgress:n.makeOnProgress(i)})))}async function Oe(t,{layer:s,ongoingUploads:e},o){var r;const n=e.get(t);if(n)return n;if(!os(s))throw new ue;if(Xe(t,s))return(r=o==null?void 0:o.onProgress)==null||r.call(o,1),t;const a=qe(t,s,o);e.set(t,a);try{await a}finally{e.delete(t)}return t}function Xe(t,s){const{parsedUrl:e}=s;return e!=null&&t.metadata.externalSources.some(o=>ie(o,e))}async function qe(t,s,e){const{metadata:o}=t,{displaySource:n}=o,a=O(n==null?void 0:n.source,s,{checkForConversionRequired:A("enable-feature:georeferenced-uploads")}),r=a!=null?Ye(a,s,e):o.externalSources.length>0?Ze(t,s,e):ze(t,s,e),i=await r;return l(e),t.addExternalSources([i]),t}async function Ye(t,s,e){return{source:await X(t,s,e),original:!0,unitConversionDisabled:!0}}async function Ze(t,s,e){const o=Y(s),{externalSources:n}=t.metadata,a=Le(n,s);if(!a)throw new pe;const r=w(j.uploadConvertibleSource,e==null?void 0:e.onProgress,"uploadConvertibleSource"),i=await X(a,s,{onProgress:r.makeOnProgress("uploadEditSource")});t.addExternalSources([{source:i,original:!0}]);const u=a.reduce((d,{asset:f})=>f instanceof File?d+f.size:d,0),g=r.simulate("serviceAssetsToGlb",Se(u));try{const{source:d,transform:f,origin:c}=await Qe(i,s,o);return t.transform=f,c&&(t.metadata.georeferenced=!0,e!=null&&e.useAssetOrigin&&(t.vertexSpace.origin=[c.x,c.y,c.z??0],t.spatialReference=c.spatialReference)),{source:d,unitConversionDisabled:!0}}finally{g.remove()}}async function ze(t,s,e){const o=w(j.uploadLocalMesh,e==null?void 0:e.onProgress,"uploadLocalMesh"),n=Be(t,s,{...e,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await q([n],s,{...e,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:t.extent.clone(),original:!0}}async function Be(t,s,e){const o=Y(s),n=await t.load(e),a=await n.toBinaryGLTF({origin:n.origin,signal:e==null?void 0:e.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return l(e),{blob:new Blob([a],{type:"model/gltf-binary"}),assetName:`${re()}.glb`,assetType:o}}function Le(t,s){for(const e of t){const o=O(e.source,s);if(o)return o}return null}function O(t,{infoFor3D:s},e={}){if(!t)return null;const{supportedFormats:o,editFormats:n}=s,a=ce(t),r=new Array,i=be(s),u=Pe(s);let g=!1;for(const d of a){const f=He(d,o);if(!f)return null;const{assetType:c}=f;if(e.checkForConversionRequired&&(c===i||c===u))return null;n.includes(c)&&(g=!0),r.push(f)}return g?r:null}function He(t,s){const e=le(t,s);return e?{asset:t,assetType:e}:null}async function X(t,s,e){return q(t.map(o=>Ge(o,e)),s,e)}async function q(t,s,e){const o=w(j.uploadAssetBlobs,e==null?void 0:e.onProgress,"uploadAssetBlobs"),n=await Ve(t,s,{...e,onProgress:o.makeOnProgress("prepareAssetItems")});l(e);const a=n.map(({item:i})=>i),{uploadResults:r}=await We(a,s,{...e,onProgress:o.makeOnProgress("uploadAssetItems")});return l(e),t.map((i,u)=>Ke(n[u],r[u],s))}async function Ge(t,s){const{asset:e,assetType:o}=t;if(e instanceof File)return{blob:e,assetName:e.name,assetType:o};const n=await e.toBlob(s);return l(s),{blob:n,assetName:e.assetName,assetType:o}}async function Je(t,s,e){const{blob:o,assetType:n,assetName:a}=t;let r=null;try{const i=await ke({data:o,name:a},s.url,e);l(e),r={assetType:n,assetUploadId:i.itemID}}catch(i){oe(i),ns().warnOnce(`Service ${s.url} does not support the REST Uploads API.`)}if(!r){const i=await ne(o);if(l(e),!i.isBase64)throw new we;r={assetType:n,assetData:i.data}}if(!r)throw new ye;return{item:r,assetName:a}}function Ve(t,s,e){const o=w(t.length,e==null?void 0:e.onProgress,"prepareAssetItems");return Promise.all(t.map(async(n,a)=>{const r=Je(await n,s,{...e,onProgress:o.makeOnProgress(a)});return l(e),r}))}async function We(t,s,e){const o=k(e==null?void 0:e.onProgress);try{const n=await m(h(s.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(t)},method:"post",responseType:"json"});if(l(e),n.data.uploadResults.length!==t.length)throw new de(t.length,n.data.uploadResults.length);return n.data}finally{o.remove()}}function Ke(t,s,e){const{success:o}=s;if(!o){const{error:g}=s;throw new he(t.assetName,g)}const{assetHash:n}=s,{assetName:a,item:{assetType:r}}=t,{infoFor3D:{supportedFormats:i}}=e,u=ve(r,i);if(!u)throw new I(r);return new F(a,u,[new E(`${e.parsedUrl.path}/assets/${n}`,n)])}async function Qe(t,s,e){var a;const o=t.map(({assetName:r,parts:i})=>({assetName:r,assetHash:i[0].partHash}));let n;try{const r=h(s.parsedUrl.path,"convert3D"),i=(a=s.capabilities)==null?void 0:a.operations.supportsAsyncConvert3D;n=(await(i?ts:ss)(r,{query:{f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:e,async:i},responseType:"json",timeout:0})).data}catch{throw new me}return es(s,n)}function es(t,s){const e={source:s.assets.map(o=>{const n=Ae(o.contentType,t.infoFor3D.supportedFormats);if(!n)throw new I(n);return new F(o.assetName,o.contentType,[new E(o.assetURL,o.assetHash)])}),origin:void 0,transform:void 0};if(A("enable-feature:georeferenced-uploads")&&s.transform){if(e.transform=_e(s.transform),s.spatialReference){const o=te.fromJSON(s.spatialReference);e.origin=Me(s.transform,o)}}else e.transform=ge(t.spatialReference);return e}function ss(t,s){return m(t,s)}async function ts(t,s){const e=(await m(t,s)).data.statusUrl;for(;;){const o=(await m(e,{query:{f:"json"},responseType:"json"})).data;switch(o.status){case"Completed":return m(o.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(o.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await se(as)}}function os(t){return!!t.infoFor3D&&!!t.url}function Y({infoFor3D:t}){const s=Te(t);if(!s)throw new fe;return s}function ns(){return ae.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const as=v(1e3),ms=Object.freeze(Object.defineProperty({__proto__:null,uploadAssets:Ce},Symbol.toStringTag,{value:"Module"}));export{_e as i,Me as n,ms as u};
//# sourceMappingURL=uploadAssets-CodNBrKR.js.map
