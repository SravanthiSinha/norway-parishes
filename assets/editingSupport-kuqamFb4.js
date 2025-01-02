import{aB as $,b8 as v,I as n,d1 as E,d2 as w,s as S,aN as R,d3 as O,ae as k,d4 as L,d5 as U,d6 as j,a9 as B,ck as y,d7 as T}from"./index-Vdm0PCas.js";import{r as G}from"./uuid-Cl5lrJ4c.js";import{p as V,c as z}from"./EditBusLayer-C3M82vWe.js";import{f as D}from"./infoFor3D-CxdEiWhp.js";function F(e){return(e==null?void 0:e.applyEdits)!=null}function M(e){return typeof e=="object"&&e!=null&&"objectId"in e&&!!e.objectId}function ae(e){return e.every(M)}function W(e){return typeof e=="object"&&e!=null&&"globalId"in e&&!!e.globalId}function re(e){return e.every(W)}async function se(e,t,a,r={}){var d;let s;const o="gdbVersion"in e?e.gdbVersion:null,u=r.gdbVersion??o;if(V(e)&&e.url)s=z(e.url,e.layerId,u,r.returnServiceEditsOption==="original-and-current-features");else{s=$(),s.promise.then(p=>{(p.addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&e.emit("edits",p)});const i={result:s.promise};e.emit("apply-edits",i)}try{const{results:i,edits:p}=await x(e,t,a,r),c=h=>h.filter(I=>!I.error).map(v),l={edits:p,addedFeatures:c(i.addFeatureResults),updatedFeatures:c(i.updateFeatureResults),deletedFeatures:c(i.deleteFeatureResults),addedAttachments:c(i.addAttachmentResults),updatedAttachments:c(i.updateAttachmentResults),deletedAttachments:c(i.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:i.editMoment?new Date(i.editMoment):null,globalIdToObjectId:r.globalIdToObjectId};return(d=i.editedFeatureResults)!=null&&d.length&&(l.editedFeatures=i.editedFeatureResults),s.resolve(l),i}catch(i){throw s.reject(i),i}}async function x(e,t,a,r){var u,d,i,p,c,l;if(await e.load(),!F(t))throw new n(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!E(e))throw new n(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:o}=await C(e,a,r);return(u=s.addFeatures)!=null&&u.length||(d=s.updateFeatures)!=null&&d.length||(i=s.deleteFeatures)!=null&&i.length||(p=s.addAttachments)!=null&&p.length||(c=s.updateAttachments)!=null&&c.length||(l=s.deleteAttachments)!=null&&l.length?{edits:s,results:await t.applyEdits(s,o)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function C(e,t,a){const r=w(e),s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=e.infoFor3D!=null;if(J(t,r,a,!!s,!!o,`${e.type}-layer`),!r.data.isVersioned&&(a==null?void 0:a.gdbVersion))throw new n(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&(a!=null&&a.rollbackOnFailureEnabled))throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const d={...a};if(d.rollbackOnFailureEnabled!=null||r.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||d.returnServiceEditsOption!=="original-and-current-features"||(d.rollbackOnFailureEnabled===!1&&S.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),d.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&d.returnServiceEditsOption!=="original-and-current-features")throw new n(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const i=H(t,r,`${e.type}-layer`),p=(a==null?void 0:a.globalIdUsed)||u,c=e.fields.filter(l=>l.type==="big-integer"||l.type==="oid"&&(l.length||0)>=8);if(p){const{globalIdField:l}=e;if(l==null)throw new n(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");i.addFeatures.forEach(h=>_(h,l))}return i.addFeatures.forEach(l=>q(l,e,p,c)),i.updateFeatures.forEach(l=>Z(l,e,p,c)),i.deleteFeatures.forEach(l=>N(l,e,p,c)),i.addAttachments.forEach(l=>m(l,e)),i.updateAttachments.forEach(l=>m(l,e)),u&&await K(i,e),{edits:await P(i),options:d}}function f(e,t,a,r){var s,o;if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const u of r){const d=e.attributes[u.name];if(d!==void 0&&!U(u,d))throw new n(`${t.type}-layer:invalid-parameter`,`Big-integer field '${u.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&((s=t.capabilities)==null?void 0:s.data.supportsZ)===!1)throw new n(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&((o=t.capabilities)==null?void 0:o.data.supportsM)===!1)throw new n(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function A(e,t){var a;if("geometry"in e&&((a=e.geometry)==null?void 0:a.type)==="mesh"&&t.infoFor3D!=null&&t.spatialReference!=null){const{geometry:r}=e,{spatialReference:s,vertexSpace:o}=r,u=t.spatialReference,d=o.type==="local",i=j(u),p=B(u,s),c=p||y(u)&&(y(s)||T(s));if(!(d&&i&&c||!d&&!i&&p))throw new n(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${o.type} vertex space and a spatial reference wkid:${s.wkid} to a layer with a spatial reference wkid:${u.wkid} is not supported.`)}}function q(e,t,a,r){f(e,t,a,r),A(e,t)}function N(e,t,a,r){f(e,t,a,r)}function Z(e,t,a,r){f(e,t,a,r),A(e,t);const s=w(t);if("geometry"in e&&e.geometry!=null&&!(s!=null&&s.editing.supportsGeometryUpdate))throw new n(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function m(e,t){var s;const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new n(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!((s=t.capabilities)!=null&&s.editing.supportsUploadWithItemId)&&r.uploadId)throw new n(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof r.data=="string"){const o=R(r.data);if(o&&!o.isBase64)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function _(e,t){const{attributes:a}=e;a[t]==null&&(a[t]=G())}async function P(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map(d=>d.geometry),s=await O(r),o=t.length,u=a.length;return s.slice(0,o).forEach((d,i)=>t[i].geometry=d),s.slice(o,o+u).forEach((d,i)=>a[i].geometry=d),e}function X(e){return{addFeatures:Array.from((e==null?void 0:e.addFeatures)??[]),updateFeatures:Array.from((e==null?void 0:e.updateFeatures)??[]),deleteFeatures:e&&k.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function H(e,t,a){var s,o,u;const r=X(e);if((s=r.addFeatures)!=null&&s.length&&!t.operations.supportsAdd)throw new n(`${a}:unsupported-operation`,"Layer does not support adding features.");if((o=r.updateFeatures)!=null&&o.length&&!t.operations.supportsUpdate)throw new n(`${a}:unsupported-operation`,"Layer does not support updating features.");if((u=r.deleteFeatures)!=null&&u.length&&!t.operations.supportsDelete)throw new n(`${a}:unsupported-operation`,"Layer does not support deleting features.");return r.addFeatures=r.addFeatures.map(g),r.updateFeatures=r.updateFeatures.map(g),r.addAssetFeatures=[],r}function J(e,t,a,r,s,o){if(!e||!r&&!s)throw new n(`${o}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&(a!=null&&a.globalIdUsed))throw new n(`${o}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new n(`${o}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!(a!=null&&a.globalIdUsed)&&s)throw new n(`${o}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function g(e){const t=new L;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function K(e,t){const{infoFor3D:a}=t;if(a==null)return;if(!D(a))throw new n(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??(e.addAssetFeatures=[]);const{addAssetFeatures:r}=e;for(const s of e.addFeatures??[])b(s)&&r.push(s);for(const s of e.updateFeatures??[])b(s)&&r.push(s)}function b(e){var t;return((t=e==null?void 0:e.geometry)==null?void 0:t.type)==="mesh"}function ie(e,t,a,r){if(!F(t))throw new n(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new n(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}export{se as applyEdits,J as checkEditingCapabilities,re as isFeatureIdentifierArrayWithGlobalId,ae as isFeatureIdentifierArrayWithObjectId,W as isFeatureIdentifierWithGlobalId,M as isFeatureIdentifierWithObjectId,X as normalizeCollections,H as normalizeEdits,P as normalizeGeometries,g as shallowCloneFeature,ie as uploadAssets};
//# sourceMappingURL=editingSupport-kuqamFb4.js.map