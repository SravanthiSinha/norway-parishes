import{Z as O,I,cc as Q,ce as Z,cd as A,cf as C,cg as E,cj as b,ci as _,cb as S,bh as v}from"./index-Cj37dcSI.js";import{e as w,n as k,t as P}from"./featureConversionUtils-LoRZop_B.js";import{t as $,n as G}from"./objectIdUtils-4dd1rf9p.js";import{m as L}from"./FeatureStore-B0aDZGUQ.js";import{V as W}from"./QueryEngine-DYMvz9gh.js";import{a as z,u as H,l as U}from"./clientSideDefaults-DrGJ6V3E.js";import{j as B,f as g,p as T,d as j,y as D}from"./sourceUtils-BeEyW_-P.js";import"./BoundsStore-O0TlKDo0.js";import"./PooledRBush-CphKM2bN.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-Bj3Rdv-2.js";import"./optimizedFeatureQueryEngineAdapter-DNvFHTxp.js";import"./WhereClause-BFjRipRp.js";import"./TimeOnly-C8PVGLk8.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./Scheduler-BmyYE1fM.js";import"./signal-pvJ01bsE.js";import"./capabilities-Y9lFlGVh.js";import"./date-DLgTylpo.js";const N=S,V={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:S},J={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0,supportsQueryWithCacheHint:!0}};function K(h){return v(h)?h.z!=null:!!h.hasZ}function X(h){return v(h)?h.m!=null:!!h.hasM}class Ie{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const i=[],{features:a}=e,n=this._inferLayerProperties(a,e.fields),o=e.fields||[],d=e.hasM!=null?e.hasM:!!n.hasM,y=e.hasZ!=null?e.hasZ:!!n.hasZ,p=!e.spatialReference&&!n.spatialReference,u=p?N:e.spatialReference||n.spatialReference,m=p?V:null,c=e.geometryType||n.geometryType,l=!c;let t=e.objectIdField||n.objectIdField,r=e.timeInfo;const f=new O(o);if(!l&&(p&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!c))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&t!==n.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),t=n.objectIdField),t&&!n.objectIdField){const s=f.get(t);s?(t=s.name,s.type="esriFieldTypeOID",s.editable=!1,s.nullable=!1):o.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of o){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),!s.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===t&&(s.type="esriFieldTypeOID"),!Q.jsonValues.includes(s.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s});s.length==null&&(s.length=Z(s))}const F={};for(const s of o)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const q=A(s);q!==void 0&&(F[s.name]=q)}if(r){if(r.startTimeField){const s=f.get(r.startTimeField);s?(r.startTimeField=s.name,s.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const s=f.get(r.endTimeField);s?(r.endTimeField=s.name,s.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const s=f.get(r.trackIdField);s?r.trackIdField=s.name:(r.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:r}}),r=null)}const x=f.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??C}:null;this._createDefaultAttributes=z(F,t);const R={warnings:i,featureErrors:[],layerDefinition:{...J,drawingInfo:H(c),templates:U(F),extent:m,geometryType:c,objectIdField:t,fields:o,hasZ:y,hasM:d,timeInfo:r,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new W({fieldsIndex:O.fromLayerJSON({fields:o,timeInfo:r,dateFieldsTimeReference:x}),geometryType:c,hasM:d,hasZ:y,objectIdField:t,spatialReference:u,featureStore:new L({geometryType:c,hasM:d,hasZ:y}),timeInfo:r}),!(a!=null&&a.length))return this._nextObjectId=$,R;const M=G(t,a);return this._nextObjectId=M+1,await E(a,u),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:i,geometryType:a}=this._queryEngine;return await Promise.all([B(i,a),E(e.adds,i),E(e.updates,i)]),this._applyEdits(e)}queryFeatures(e,i={}){return this._queryEngine.executeQuery(e,i.signal)}queryFeatureCount(e,i={}){return this._queryEngine.executeQueryForCount(e,i.signal)}queryObjectIds(e,i={}){return this._queryEngine.executeQueryForIds(e,i.signal)}queryExtent(e,i={}){return this._queryEngine.executeQueryForExtent(e,i.signal)}querySnapping(e,i={}){return this._queryEngine.executeQueryForSnapping(e,i.signal)}_inferLayerProperties(e,i){let a,n,o=null,d=null,y=null;for(const p of e){const u=p.geometry;if(u!=null&&(o||(o=b(u)),d||(d=u.spatialReference),a==null&&(a=K(u)),n==null&&(n=X(u)),o&&d&&a!=null&&n!=null))break}if(i&&i.length){let p=null;i.some(u=>{const m=u.type==="esriFieldTypeOID",c=!u.type&&u.name&&u.name.toLowerCase()==="objectid";return p=u,m||c})&&(y=p.name)}return{geometryType:o,spatialReference:d,objectIdField:y,hasM:n,hasZ:a}}async _loadInitialFeatures(e,i){const{geometryType:a,hasM:n,hasZ:o,objectIdField:d,spatialReference:y,featureStore:p,fieldsIndex:u}=this._queryEngine,m=[];for(const t of i){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&a!==b(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const r=this._createDefaultAttributes(),f=T(u,r,t.attributes,!0);f?e.featureErrors.push(f):(this._assignObjectId(r,t.attributes,!0),t.attributes=r,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[d]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,y)),m.push(t))}p.addMany(w([],m,a,o,n,d));const{fullExtent:c,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=c,l){const{start:t,end:r}=l;e.layerDefinition.timeInfo.timeExtent=[t,r]}return e}async _applyEdits(e){const{adds:i,updates:a,deletes:n}=e,o={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(i!=null&&i.length&&this._applyAddEdits(o,i),a!=null&&a.length&&this._applyUpdateEdits(o,a),n==null?void 0:n.length){for(const p of n)o.deleteResults.push(j(p));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:d,timeExtent:y}=await this._queryEngine.fetchRecomputedExtents();return{extent:d,timeExtent:y,featureEditResults:o}}_applyAddEdits(e,i){const{addResults:a}=e,{geometryType:n,hasM:o,hasZ:d,objectIdField:y,spatialReference:p,featureStore:u,fieldsIndex:m}=this._queryEngine,c=[];for(const l of i){if(l.geometry&&n!==b(l.geometry)){a.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=T(m,t,l.attributes);if(r)a.push(r);else{if(this._assignObjectId(t,l.attributes),l.attributes=t,l.uid!=null){const f=l.attributes[y];e.uidToObjectId[l.uid]=f}if(l.geometry!=null){const f=l.geometry.spatialReference??p;l.geometry=_(D(l.geometry,f),f,p)}c.push(l),a.push(j(l.attributes[y]))}}u.addMany(w([],c,n,d,o,y))}_applyUpdateEdits({updateResults:e},i){const{geometryType:a,hasM:n,hasZ:o,objectIdField:d,spatialReference:y,featureStore:p,fieldsIndex:u}=this._queryEngine;for(const m of i){const{attributes:c,geometry:l}=m,t=c==null?void 0:c[d];if(t==null){e.push(g(`Identifier field ${d} missing`));continue}if(!p.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const r=k(p.getFeature(t),a,o,n);if(l!=null){if(a!==b(l)){e.push(g("Incorrect geometry type."));continue}const f=l.spatialReference??y;r.geometry=_(D(l,f),f,y)}if(c){const f=T(u,r.attributes,c);if(f){e.push(f);continue}}p.add(P(r,a,o,n,d)),e.push(j(t))}}_assignObjectId(e,i,a=!1){const n=this._queryEngine.objectIdField;a&&i&&isFinite(i[n])?e[n]=i[n]:e[n]=this._nextObjectId++}}export{Ie as default};
//# sourceMappingURL=MemorySourceWorker-BN6SJDWO.js.map
