const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngineJSON-DmtLFUfu.js","assets/geometryEngineBase-B0ZyeKAX.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/index-U3f91iFJ.js","assets/index-Jib82o7I.css"])))=>i.map(i=>d[i]);
import{eo as he,I as b,cg as de,jr as ae,js as re,jt as Ee,ju as X,jv as Oe,jw as Ze,el as Ve,ct as J,a9 as V,cm as D,cw as fe,jx as Be,cv as ee,jy as me,jz as pe,jA as ke,jB as Le,jC as He,jD as Ue,jE as Je,jF as Ye,hB as Ke,jG as ye,_ as We,jH as Xe,jI as ge,j8 as et,jJ as tt,jK as st,b7 as Y,ck as ne,Z as it,dl as at,au as xe,v as rt,jL as A,jM as q,jN as nt,d5 as _e,bA as Fe,w as lt,jO as ot,c7 as ut,dE as ct,b2 as te,jP as we,cd as ht,cN as dt,jQ as ft,ce as mt,dg as pt,bt as Ie,bo as yt,dn as gt,c6 as xt,dC as _t}from"./index-U3f91iFJ.js";import{o as Ft}from"./featureConversionUtils-B3uX_x-_.js";import{Z as wt}from"./WhereClause-D5WSWvLe.js";import{a as G,h as O,y as se,v as $e,b as It,P as N,t as St,I as ze}from"./timeSupport-BfwWgrYo.js";import{t as Tt}from"./QueryEngineCapabilities-DjYb9CEb.js";import{C as Se}from"./Scheduler-BY19n29i.js";let Rt=class{constructor(e,t){this._cache=new he(e),this._invalidCache=new he(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(this._invalidCache.get(s)!=null)return null;try{const a=wt.create(e,{fieldsIndex:t});return this._cache.put(s,a),a}catch(a){return this._invalidCache.put(s,a),null}}getError(e,t){const s=`${t.uid}:${e}`;return this._invalidCache.get(s)??null}};const Ce=new Rt(50,500),Z="unsupported-query",De=" as ",Me=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeBigInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"]),je=new Set(["esriFieldTypeDate","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]),vt=new Set(["esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...Me,...je]);function le(l,e,t={}){const s=M(e,l);if(!s){const a=Ce.getError(e,l);throw new b(Z,"invalid SQL expression",{expression:e,error:a})}const i=t.expressionName||"expression";if(t.validateStandardized&&!s.isStandardized)throw new b(Z,`${i} is not standard`,{expression:e});if(t.validateAggregate&&!s.isAggregate)throw new b(Z,`${i} does not contain a valid aggregate function`,{expression:e});return s.fieldNames}function bt(l,e,t,s){if(!t)return!0;const i="where clause";return C(l,e,le(l,t,{validateStandardized:!0,expressionName:i}),{expressionName:i,query:s}),!0}function At(l,e,t,s,i){if(!t)return!0;const a="having clause",r=le(l,t,{validateAggregate:!0,expressionName:a});C(l,e,r,{expressionName:a,query:i});const n=M(t,l);if(!(n==null?void 0:n.getExpressions().every(u=>{var m;const{aggregateType:c,field:h}=u,f=(m=l.get(h))==null?void 0:m.name;return s.some(p=>{var S;const{onStatisticField:d,statisticType:F}=p;return((S=l.get(d))==null?void 0:S.name)===f&&F.toLowerCase().trim()===c})})))throw new b(Z,"expressions in having clause should also exist in outStatistics",{having:t});return!0}function M(l,e){return l?Ce.get(l,e):null}function qe(l){return/\((.*?)\)/.test(l)?l:l.split(De)[0]}function Et(l){return l.split(De)[1]}function C(l,e,t,s={}){const i=new Map;if(Vt(i,l,e,s.allowedFieldTypes??vt,t),i.size){const a=s.expressionName??"expression";throw new b(Z,`${a} contains invalid or missing fields`,{errors:Array.from(i.values()),query:s.query})}}function Vt(l,e,t,s,i){const a=i.includes("*")?[...t,...i.filter(r=>r!=="*")]:i;for(const r of a)if(e.get(r))Te(l,e,t,s,r);else try{const n=le(e,qe(r),{validateStandardized:!0});for(const o of n)Te(l,e,t,s,o)}catch(n){l.set(r,{type:"expression-error",expression:r,error:n})}}function Te(l,e,t,s,i){const a=e.get(i);a?t.has(a.name)?s!=="all"&&(s==null?void 0:s.has(a.type))===!1&&l.set(i,{type:"invalid-type",fieldName:a.name,fieldType:de.fromJSON(a.type),allowedFieldTypes:Array.from(s,r=>de.fromJSON(r))}):l.set(i,{type:"missing-field",fieldName:a.name}):l.set(i,{type:"invalid-field",fieldName:i})}const $t=5;let zt=class{constructor(){this._storage=new Map,this._purgeInterval=$t,this._sweep=()=>{if(this._timer=void 0,!this._storage)return;const e=1e3*this._purgeInterval,t=performance.now()-e;for(const[s,i]of this._storage){if(!(i.time<t))return void(this._storage.size>0&&(this._timer=setTimeout(this._sweep,e)));this._storage.delete(s)}}}destroy(){var e;(e=this._storage)==null||e.clear(),this._storage=null,clearTimeout(this._timer)}get size(){var e;return((e=this._storage)==null?void 0:e.size)??0}put(e,t){var s;(s=this._storage)==null||s.set(e,new Dt(t)),this._scheduleSweep()}get(e){var s,i,a;if(!this._storage)return;const t=(s=this._storage)==null?void 0:s.get(e);return t?((i=this._storage)==null||i.delete(e),t.time=performance.now(),(a=this._storage)==null||a.set(e,t),t.items):void 0}clear(){var e;(e=this._storage)==null||e.clear()}_scheduleSweep(){this._storage&&(this._timer??(this._timer=setTimeout(this._sweep,1e3*this._purgeInterval)))}},Ct=0;class Dt{constructor(e){this.items=e,this.time=performance.now(),this.id=Ct++}}let U=class{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues??!1,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&!i.includes("*")){this.outFields=i;let a=0;for(const r of i){const n=qe(r),o=this.fieldsIndex.get(n),u=o?null:M(n,s),c=o?o.name:Et(r)||"FIELD_EXP_"+a++;this._fieldDataCache.set(r,{alias:c,clause:u})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach(t=>this.getAttributes(t)),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){var r;const i=s?s.name:t;let a=null;return this._fieldDataCache.has(i)?a=(r=this._fieldDataCache.get(i))==null?void 0:r.clause:s||(a=M(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:a})),s?this.featureAdapter.getAttribute(e,i):a==null?void 0:a.calculateValue(e,this.featureAdapter)}getDataValues(e,t,s=!0){const i=t.normalizationType,a=t.normalizationTotal,r=this.fieldsIndex.get(t.field),n=ae(r)||re(r),o=Ee(r);return e.map(u=>{let c=t.field&&this.getFieldValue(u,t.field,this.fieldsIndex.get(t.field));if(t.field2?(c=`${X(c)}${t.fieldDelimiter}${X(this.getFieldValue(u,t.field2,this.fieldsIndex.get(t.field2)))}`,t.field3&&(c=`${c}${t.fieldDelimiter}${X(this.getFieldValue(u,t.field3,this.fieldsIndex.get(t.field3)))}`)):typeof c=="string"&&s&&(n?c=c?new Date(c).getTime():null:o&&(c=c?Oe(c):null)),i&&Number.isFinite(c)){const h=i==="field"&&t.normalizationField?this.getFieldValue(u,t.normalizationField,this.fieldsIndex.get(t.normalizationField)):null;c=Ze(c,i,h,a)}return c})}async getExpressionValues(e,t,s,i,a){const{arcadeUtils:r}=await Ve(),n=r.hasGeometryOperations(t);n&&await r.enableGeometryOperations();const o=r.createFunction(t),u=r.getViewInfo(s),c={fields:this.fieldsIndex.fields};return e.map(h=>{const f={attributes:this.featureAdapter.getAttributes(h),layer:c,geometry:n?{...G(i.geometryType,i.hasZ,i.hasM,this.featureAdapter.getGeometry(h)),spatialReference:s==null?void 0:s.spatialReference}:null},m=r.createExecContext(f,u,a);return r.executeFunction(o,m)})}validateItem(e,t){var s,i;return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:M(t,this.fieldsIndex)}),((i=(s=this._fieldDataCache.get(t))==null?void 0:s.clause)==null?void 0:i.testFeature(e,this.featureAdapter))??!1}validateItems(e,t){var s,i;return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:M(t,this.fieldsIndex)}),((i=(s=this._fieldDataCache.get(t))==null?void 0:s.clause)==null?void 0:i.testSet(e,this.featureAdapter))??!1}_processAttributesForOutFields(e){const t=this.outFields;if(!(t!=null&&t.length))return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:a,clause:r}=this._fieldDataCache.get(i);s[a]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,a)}return s}_processAttributesForDistinctValues(e){if(e==null||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const r of t){const{alias:n}=this._fieldDataCache.get(r);s.push(e[n])}else for(const r in e)s.push(e[r]);const i=`${(t||["*"]).join(",")}=${s.join(",")}`;let a=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++a),a>1?null:e}};function Re(l,e,t){return{objectId:l,target:e,distance:t,type:"vertex"}}function Mt(l,e,t,s,i,a=!1){return{objectId:l,target:e,distance:t,type:"edge",start:s,end:i,draped:a}}class v{constructor(e,t,s){this.items=e,this.query=t,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.fieldsIndex=s.fieldsIndex,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.featureAdapter=s.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new U(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:s,outStatistics:i}=this.query;if(!(t==null?void 0:t.length))return 1;const r=new Map,n=new Map,o=new Set;for(const u of i){const{statisticType:c}=u,h=c!=="exceedslimit"?u.onStatisticField:void 0;if(!n.has(h)){const m=[];for(const p of t){const d=this._getAttributeValues(e,p,r);m.push(d)}n.set(h,this._calculateUniqueValues(m,e.returnDistinctValues))}const f=n.get(h);for(const m in f){const{data:p,items:d}=f[m],F=p.join(",");s&&!e.validateItems(d,s)||o.add(F)}}return o.size}async createQueryResponse(){let e;if(this.query.outStatistics?e=this.query.outStatistics.some(t=>t.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):e=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const t=this.query.geometry;J(this.query.outSR)&&!V(t.spatialReference,this.query.outSR)?e.queryGeometry=O({spatialReference:this.query.outSR,...D(t,t.spatialReference,this.query.outSR)}):e.queryGeometry=O({spatialReference:this.query.outSR,...t})}return e}createSnappingResponse(e,t){const s=this.featureAdapter,i=ve(this.hasZ,this.hasM),{point:a,mode:r}=e,n=typeof e.distance=="number"?e.distance:e.distance.x,o=typeof e.distance=="number"?e.distance:e.distance.y,u={candidates:[]},c=this.geometryType==="esriGeometryPolygon",h=this._getPointCreator(r,this.spatialReference,t),f=new be(null,0),m=new be(null,0),p={x:0,y:0,z:0};for(const d of this.items){const F=s.getGeometry(d);if(F==null)continue;const{coords:_,lengths:S}=F;if(f.coords=_,m.coords=_,e.returnEdge){let T=0;for(let y=0;y<S.length;y++){const g=S[y];for(let w=0;w<g;w++,T+=i){const x=f;if(x.coordsIndex=T,w!==g-1){const I=m;I.coordsIndex=T+i;const R=p;jt(p,a,x,I);const E=(a.x-R.x)/n,B=(a.y-R.y)/o,k=E*E+B*B;k<=1&&u.candidates.push(Mt(s.getObjectId(d),h(R),Math.sqrt(k),h(x),h(I)))}}}}if(e.vertexMode!=="none"){const T=c?_.length-i:_.length;if(e.vertexMode==="all")for(let y=0;y<T;y+=i){const g=f;g.coordsIndex=y;const w=(a.x-g.x)/n,x=(a.y-g.y)/o,I=w*w+x*x;I<=1&&u.candidates.push(Re(s.getObjectId(d),h(g),Math.sqrt(I)))}else if(e.vertexMode==="ends"){const y=[0];c||y.push(_.length-i);for(const g of y){const w=f;w.coordsIndex=g;const x=(a.x-w.x)/n,I=(a.y-w.y)/o,R=x*x+I*I;R<=1&&u.candidates.push(Re(s.getObjectId(d),h(w),Math.sqrt(R)))}}}}return u.candidates.sort((d,F)=>d.distance-F.distance),u}_getPointCreator(e,t,s){const i=s==null||V(t,s)?n=>n:n=>D(n,t,s),{hasZ:a}=this,r=0;return e==="3d"?a?({x:n,y:o,z:u})=>i({x:n,y:o,z:u}):({x:n,y:o})=>i({x:n,y:o,z:r}):({x:n,y:o})=>i({x:n,y:o})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,minValue:n,maxValue:o,scale:u,timeZone:c,outStatisticTypes:h}=e,f=this.fieldsIndex.get(t),m=fe(f)||ae(f)||re(f),p=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:u,timeZone:c}),d=Be({normalizationType:a,normalizationField:i,minValue:n,maxValue:o}),F={value:.5,fieldType:f==null?void 0:f.type},_=ee(f)?me({values:p,supportsNullCount:d,percentileParams:F,outStatisticTypes:h}):pe({values:p,minValue:n,maxValue:o,useSampleStdDev:!a,supportsNullCount:d,percentileParams:F,outStatisticTypes:h});return ke(_,h,m)}async createUniqueValuesResponse(e){const{field:t,valueExpression:s,domains:i,returnAllCodedValues:a,scale:r,timeZone:n}=e,o=await this._getDataValues({field:t,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:s,scale:r,timeZone:n},!1),u=Le(o);return He(u,i,a,e.fieldDelimiter)}async createClassBreaksResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:c,numClasses:h,scale:f,timeZone:m}=e,p=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:f,timeZone:m}),d=Ue(p,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:c,numClasses:h});return Je(d,n)}async createHistogramResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:c,numBins:h,scale:f,timeZone:m}=e,p=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:f,timeZone:m});return Ye(p,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:c,numBins:h})}_sortFeatures(e,t,s){if(e.length>1&&(t!=null&&t.length))for(const i of t.reverse()){const a=i.split(" "),r=a[0],n=this.fieldsIndex.get(r),o=!!a[1]&&a[1].toLowerCase()==="desc",u=Ke(n==null?void 0:n.type,o);e.sort((c,h)=>{const f=s(c,r,n),m=s(h,r,n);return u(f,m)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:a,objectIdField:r,spatialReference:n}=this,{outFields:o,outSR:u,quantizationParameters:c,resultRecordCount:h,resultOffset:f,returnZ:m,returnM:p}=e,d=h!=null&&t.length>(f||0)+h,F=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map(_=>this.fieldsIndex.get(_)));return{exceededTransferLimit:d,features:this._createFeatures(e,t),fields:F,geometryType:s,hasM:i&&p,hasZ:a&&m,objectIdFieldName:r,spatialReference:O(u||n),transform:c&&ye(c)||null}}_createFeatures(e,t){const s=new U(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:a}=this,{orderByFields:r,quantizationParameters:n,returnGeometry:o,returnCentroid:u,maxAllowableOffset:c,resultOffset:h,resultRecordCount:f,returnZ:m=!1,returnM:p=!1}=e,d=a&&m,F=i&&p;let _=[],S=0;const T=[...t];if(this._sortFeatures(T,r,(g,w,x)=>s.getFieldValue(g,w,x)),this.geometryType&&(o||u)){const g=ye(n)??void 0,w=this.geometryType==="esriGeometryPolygon"||this.geometryType==="esriGeometryPolyline";if(o&&!u)for(const x of T){const I=this.featureAdapter.getGeometry(x),R={attributes:s.getAttributes(x),geometry:G(this.geometryType,this.hasZ,this.hasM,I,c,g,d,F)};w&&I&&!R.geometry&&(R.centroid=se(this,this.featureAdapter.getCentroid(x,this),g)),_[S++]=R}else if(!o&&u)for(const x of T)_[S++]={attributes:s.getAttributes(x),centroid:se(this,this.featureAdapter.getCentroid(x,this),g)};else for(const x of T)_[S++]={attributes:s.getAttributes(x),centroid:se(this,this.featureAdapter.getCentroid(x,this),g),geometry:G(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(x),c,g,d,F)}}else for(const g of T){const w=s.getAttributes(g);w&&(_[S++]={attributes:w})}const y=h||0;if(f!=null){const g=y+f;_=_.slice(y,Math.min(_.length,g))}return _}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const r of e.outStatistics??[])if(r.statisticType==="exceedslimit"){s=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,i=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,a=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>s;else if(this.items.length>i)t=!0;else{const r=ve(this.hasZ,this.hasM),n=this.featureAdapter;t=this.items.reduce((o,u)=>{const c=n.getGeometry(u);return o+(c!=null&&c.coords.length||0)},0)/r>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){var T;const t={attributes:{}},s=[],i=new Map,a=new Map,r=new Map,n=new Map,o=new U(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:c,having:h,orderByFields:f,resultRecordCount:m}=e,p=c==null?void 0:c.length,d=!!p,F=d?c[0]:null,_=d&&!this.fieldsIndex.get(F);for(const y of u??[]){const{outStatisticFieldName:g,statisticType:w}=y,x=y,I=w!=="exceedslimit"?y.onStatisticField:void 0,R=w==="percentile_disc"||w==="percentile_cont",E=w==="EnvelopeAggregate"||w==="CentroidAggregate"||w==="ConvexHullAggregate",B=d&&p===1&&(I===F||_)&&w==="count";if(d){if(!r.has(I)){const L=[];for(const W of c){const H=this._getAttributeValues(o,W,i);L.push(H)}r.set(I,this._calculateUniqueValues(L,!E&&o.returnDistinctValues))}const $=r.get(I);if(!$)continue;const K=Object.keys($);for(const L of K){const{count:W,data:H,items:oe,itemPositions:Pe}=$[L],ue=H.join(",");if(!h||o.validateItems(oe,h)){const j=n.get(ue)||{attributes:{}};if(E){j.aggregateGeometries||(j.aggregateGeometries={});const{aggregateGeometries:z,outStatisticFieldName:P}=await this._getAggregateGeometry(x,oe);j.aggregateGeometries[P]=z}else{let z=null;if(B)z=W;else{const P=this._getAttributeValues(o,I,i),ce=Pe.map(Ge=>P[Ge]);z=R&&"statisticParameters"in x?this._getPercentileValue(x,ce):this._getStatisticValue(x,ce,null,o.returnDistinctValues)}j.attributes[g]=z}let Ne=0;c.forEach((z,P)=>j.attributes[this.fieldsIndex.get(z)?z:"EXPR_"+ ++Ne]=H[P]),n.set(ue,j)}}}else if(E){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:$,outStatisticFieldName:K}=await this._getAggregateGeometry(x,this.items);t.aggregateGeometries[K]=$}else{const $=this._getAttributeValues(o,I,i);t.attributes[g]=R&&"statisticParameters"in x?this._getPercentileValue(x,$):this._getStatisticValue(x,$,a,o.returnDistinctValues)}const k=w!=="min"&&w!=="max"||!ee(this.fieldsIndex.get(I))&&!this._isAnyDateField(I)?null:(T=this.fieldsIndex.get(I))==null?void 0:T.type;s.push({name:g,alias:g,type:k||"esriFieldTypeDouble"})}const S=d?Array.from(n.values()):[t];return this._sortFeatures(S,f,(y,g)=>y.attributes[g]),m&&(S.length=Math.min(m,S.length)),{fields:s,features:S}}_isAnyDateField(e){const t=this.fieldsIndex.get(e);return fe(t)||ae(t)||re(t)||Ee(t)}async _getAggregateGeometry(e,t){const{convexHull:s,union:i}=await We(()=>import("./geometryEngineJSON-DmtLFUfu.js").then(d=>d.g),__vite__mapDeps([0,1,2,3,4])),{statisticType:a,outStatisticFieldName:r}=e,{featureAdapter:n,spatialReference:o,geometryType:u,hasZ:c,hasM:h}=this,f=t.map(d=>G(u,c,h,n.getGeometry(d))),m=s(o,f,!0)[0],p={aggregateGeometries:null,outStatisticFieldName:null};if(a==="EnvelopeAggregate"){const d=m?Xe(m):ge(i(o,f));p.aggregateGeometries={...d,spatialReference:o},p.outStatisticFieldName=r||"extent"}else if(a==="CentroidAggregate"){const d=m?et(m):tt(ge(i(o,f)));p.aggregateGeometries={x:d[0],y:d[1],spatialReference:o},p.outStatisticFieldName=r||"centroid"}else a==="ConvexHullAggregate"&&(p.aggregateGeometries=m,p.outStatisticFieldName=r||"convexHull");return p}_getStatisticValue(e,t,s,i){const{onStatisticField:a,statisticType:r}=e;let n=null;return n=s!=null&&s.has(a)?s.get(a):ee(this.fieldsIndex.get(a))||this._isAnyDateField(a)?me({values:t,returnDistinct:i}):pe({values:i?[...new Set(t)]:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(a,n),n[r==="var"?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:a}=e,{value:r,orderBy:n}=i,o=this.fieldsIndex.get(s);return st(t,{value:r,orderBy:n,fieldType:o==null?void 0:o.type,isDiscrete:a==="percentile_disc"})}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),a=this.items.map(r=>e.getFieldValue(r,t,i));return s.set(t,a),a}_calculateUniqueValues(e,t){const s={},i=this.items,a=i.length;for(let r=0;r<a;r++){const n=i[r],o=[];for(const c of e)o.push(c[r]);const u=o.join(",");s[u]==null?s[u]={count:1,data:o,items:[n],itemPositions:[r]}:(t||s[u].count++,s[u].items.push(n),s[u].itemPositions.push(r))}return s}async _getDataValues(e,t=!0){const s=new U(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,scale:a,timeZone:r}=e;return i?s.getExpressionValues(this.items,i,{viewingMode:"map",scale:a,spatialReference:this.query.outSR||this.spatialReference},{geometryType:this.geometryType,hasZ:this.hasZ,hasM:this.hasM},r):s.getDataValues(this.items,Y(e),t)}}function jt(l,e,t,s){const i=s.x-t.x,a=s.y-t.y,r=i*i+a*a,n=(e.x-t.x)*i+(e.y-t.y)*a,o=Math.min(1,Math.max(0,n/r));l.x=t.x+i*o,l.y=t.y+a*o}function ve(l,e){return l?e?4:3:e?3:2}class be{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}const Q="unsupported-query";async function Ae(l,{fieldsIndex:e,geometryType:t,spatialReference:s,availableFields:i}){if((l.distance??0)<0||l.geometryPrecision!=null||l.multipatchOption&&l.multipatchOption!=="xyFootprint"||l.pixelSize||l.relationParam||l.text)throw new b(Q,"Unsupported query options",{query:l});return Qe(e,i,l),Qt(e,i,l),Promise.all([$e(l,t,s),ne(s,l.outSR)]).then(()=>l)}function Qe(l,e,t){const{outFields:s,orderByFields:i,returnDistinctValues:a,outStatistics:r}=t,n=r?r.map(o=>o.outStatisticFieldName&&o.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(i&&i.length>0){const o=" asc",u=" desc",c=i.map(h=>{const f=h.toLowerCase();return f.includes(o)?f.split(o)[0]:f.includes(u)?f.split(u)[0]:h}).filter(h=>!n.includes(h));C(l,e,c,{expressionName:"orderByFields",query:t})}if(s&&s.length>0)C(l,e,s,{expressionName:"outFields",query:t,allowedFieldTypes:"all"});else if(a)throw new b(Q,"outFields should be specified for returnDistinctValues",{query:t});bt(l,e,t.where,t)}const qt=new Set([...Me,...je]);function Qt(l,e,t){const{outStatistics:s,groupByFieldsForStatistics:i,having:a}=t,r=i==null?void 0:i.length,n=s==null?void 0:s.length;if(a){if(!r||!n)throw new b(Q,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:t});At(l,e,a,s,t)}if(n){if(!Gt(s))return;const o=s.map(u=>u.onStatisticField).filter(Boolean);C(l,e,o,{expressionName:"onStatisticFields",query:t}),r&&C(l,e,i,{expressionName:"groupByFieldsForStatistics",query:t});for(const u of s){const{onStatisticField:c,statisticType:h}=u;if((h==="percentile_disc"||h==="percentile_cont")&&"statisticParameters"in u){const{statisticParameters:f}=u;if(!f)throw new b(Q,"statisticParameters should be set for percentile type",{definition:u,query:t})}else l.get(c)&&h!=="count"&&h!=="min"&&h!=="max"&&C(l,e,[c],{expressionName:`outStatistics with '${h}' statistic type`,allowedFieldTypes:qt,query:t})}}}async function Pt(l,e,{fieldsIndex:t,geometryType:s,spatialReference:i,availableFields:a}){if((l.distance??0)<0||l.geometryPrecision!=null||l.multipatchOption||l.pixelSize||l.relationParam||l.text||l.outStatistics||l.groupByFieldsForStatistics||l.having||l.orderByFields)throw new b(Q,"Unsupported query options",{query:l});return Qe(t,a,l),Promise.all([Nt(t,a,e,l),$e(l,s,i),ne(i,l.outSR)]).then(()=>l)}async function Nt(l,e,t,s){let i=[];if(t.valueExpression){const{arcadeUtils:a}=await Ve();i=a.extractFieldNames(t.valueExpression)}if(t.field&&i.push(t.field),t.field2&&i.push(t.field2),t.field3&&i.push(t.field3),t.normalizationField&&i.push(t.normalizationField),!i.length&&!t.valueExpression)throw new b(Q,"field or valueExpression is required",{params:t});C(l,e,i,{expressionName:"statistics",query:s})}function Gt(l){return l!=null&&l.every(e=>e.statisticType!=="exceedslimit")}const Ot="unsupported-query";class Wt{constructor(e){this._cache=new zt,this._changeHandle=null,this.capabilities={query:Tt},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,this.fieldsIndex=at(e.fieldsIndex)?e.fieldsIndex:it.fromJSON(e.fieldsIndex),!e.availableFields||e.availableFields.length===1&&e.availableFields[0]==="*"?this.availableFields=new Set(this.fieldsIndex.fields.map(t=>t.name)):this.availableFields=new Set(e.availableFields.map(t=>{var s;return(s=this.fieldsIndex.get(t))==null?void 0:s.name}).filter(t=>t!=null)),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=xe(this._frameTask),this.clearCache(),rt(this._cache),this._changeHandle=xe(this._changeHandle)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._cache.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null,this._fullExtentPromise=null}async executeQuery(e,t){const s=A(t);try{return await(await this._executeQuery(e,{},s)).createQueryResponse()}catch(i){if(i!==q)throw i;return new v([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){const s=A(t);try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},s)).createQueryResponseForCount()}catch(i){if(i!==q)throw i;return 0}}async executeQueryForExtent(e,t){const s=A(t),i=e.outSR;try{const a=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),r=a.size;return r?{count:r,extent:await this._getBounds(a.items,a.spatialReference,i||this.spatialReference)}:{count:0,extent:null}}catch(a){if(a===q)return{count:0,extent:null};throw a}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e,t){const s=A(t);try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),a=i.items,r=new Set;return await this._reschedule(()=>{for(const n of a)r.add(i.featureAdapter.getObjectId(n))},s),r}catch(i){if(i===q)return new Set;throw i}}async executeQueryForSnapping(e,t){const s=A(t),{point:i,distance:a,returnEdge:r,vertexMode:n}=e;if(!r&&n==="none")return{candidates:[]};let o=Y(e.query);o=await this._schedule(()=>nt(o,this.definitionExpression,this.spatialReference),s),o=await this._reschedule(()=>Ae(o,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s);const u=!V(i.spatialReference,this.spatialReference);u&&await ne(i.spatialReference,this.spatialReference);const c=typeof a=="number"?a:a.x,h=typeof a=="number"?a:a.y,f={xmin:i.x-c,xmax:i.x+c,ymin:i.y-h,ymax:i.y+h,spatialReference:i.spatialReference},m=u?D(f,this.spatialReference):f;if(!m)return{candidates:[]};const p=(await _e(Fe(i),null,{signal:s}))[0],d=(await _e(Fe(m),null,{signal:s}))[0];if(p==null||d==null)return{candidates:[]};const F=new v(await this._reschedule(()=>this._searchFeatures(ie(d.toJSON())),s),o,this);await this._reschedule(()=>this._executeObjectIdsQuery(F),s),await this._reschedule(()=>this._executeTimeQuery(F),s),await this._reschedule(()=>this._executeAttributesQuery(F),s),await this._reschedule(()=>this._executeGeometryQueryForSnapping(F,s),s);const _=p.toJSON(),S=u?D(_,this.spatialReference):_,T=u?Math.max(m.xmax-m.xmin,m.ymax-m.ymin)/2:a;return F.createSnappingResponse({...e,point:S,distance:T},i.spatialReference)}async executeQueryForLatestObservations(e,t){var i;const s=A(t);if(!((i=this.timeInfo)!=null&&i.trackIdField))throw new b(Ot,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const a=await this._executeQuery(e,{},s);return await this._reschedule(()=>this._filterLatest(a),s),await a.createQueryResponse()}catch(a){if(a!==q)throw a;return new v([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const i=A(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const i=A(s),{field:a,field2:r,field3:n,valueExpression:o}=t;return(await this._executeQueryForStatistics(e,{field:a,field2:r,field3:n,valueExpression:o},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const i=A(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const i=A(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const t=A(e);this._timeExtentPromise||(this._timeExtentPromise=It(this.timeInfo,this.featureStore));const[s,i]=await Promise.all([this._getFullExtent(),this._timeExtentPromise]);return lt(t),{fullExtent:s,timeExtent:i}}async _getBounds(e,t,s){const i=ot(ut(),_t);await this.featureStore.forEachBounds(e,n=>ct(i,n));const a={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:O(this.spatialReference)};this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(a.zmin=i[2],a.zmax=i[5],a.hasZ=!0);const r=D(a,t,s);if(r.spatialReference=O(s),r.xmax-r.xmin==0){const n=te(r.spatialReference);r.xmin-=n,r.xmax+=n}if(r.ymax-r.ymin==0){const n=te(r.spatialReference);r.ymin-=n,r.ymax+=n}if(this.hasZ&&r.zmin!=null&&r.zmax!=null&&r.zmax-r.zmin==0){const n=te(r.spatialReference);r.zmin-=n,r.zmax+=n}return r}_getFullExtent(){return this._fullExtentPromise||(this._fullExtentPromise="getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getAllFeatures().then(e=>this._getBounds(e,this.spatialReference,this.spatialReference))),this._fullExtentPromise}async _schedule(e,t){return this._frameTask!=null?this._frameTask.schedule(e,t):e(Se)}async _reschedule(e,t){return this._frameTask!=null?this._frameTask.reschedule(e,t):e(Se)}async _getAllFeaturesQueryEngineResult(e){return new v(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(this._allFeaturesPromise==null){const s=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach(i=>s.push(i))})().then(()=>s)}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,s){e=Y(e),e=await this._schedule(()=>we(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>Ae(e,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s),e={...e,...t};const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}async _executeSceneFilterQuery(e,t){if(e.sceneFilter==null)return null;const{outSR:s,returnGeometry:i,returnCentroid:a}=e,r=this.featureStore.featureSpatialReference,n=e.sceneFilter.geometry,o=r==null||V(r,n.spatialReference)?n:D(n,r);if(!o)return null;const u=i||a,c=J(s)&&!V(this.spatialReference,s)&&u?async d=>this._project(d,s):d=>d,h=this.featureAdapter,f=await this._reschedule(()=>this._searchFeatures(ie(o)),t);if(e.sceneFilter.spatialRelationship==="disjoint"){if(!f.length)return null;const d=new Set;for(const S of f)d.add(h.getObjectId(S));const F=await this._reschedule(()=>this._getAllFeatures(),t),_=await this._reschedule(async()=>{const S=await N("esriSpatialRelDisjoint",o,this.geometryType,this.hasZ,this.hasM),T=g=>!d.has(h.getObjectId(g))||S(h.getGeometry(g)),y=await this._runSpatialFilter(F,T,t);return new v(y,e,this)},t);return c(_)}if(!f.length)return new v([],e,this);if(this._canExecuteSinglePass(o,e))return c(new v(f,e,this));const m=await N("esriSpatialRelContains",o,this.geometryType,this.hasZ,this.hasM),p=await this._runSpatialFilter(f,d=>m(h.getGeometry(d)),t);return c(new v(p,e,this))}async _executeGeometryQuery(e,t,s){if(t!=null&&t.items.length===0)return t;e=t!=null?t.query:e;const{geometry:i,outSR:a,spatialRel:r,returnGeometry:n,returnCentroid:o}=e,u=this.featureStore.featureSpatialReference,c=!i||u==null||V(u,i.spatialReference)?i:D(i,u),h=n||o,f=J(a)&&!V(this.spatialReference,a),m=t==null?this._getCacheKey(e):null,p=m?this._cache.get(m):null;if(p!=null)return new v(p,e,this);const d=async y=>(f&&h&&await this._project(y,a),m&&this._cache.put(m,y.items),y);if(!c)return d(t??await this._getAllFeaturesQueryEngineResult(e));const F=this.featureAdapter;let _=await this._reschedule(()=>this._searchFeatures(ie(i)),s);if(r==="esriSpatialRelDisjoint"){if(!_.length)return d(t??await this._getAllFeaturesQueryEngineResult(e));const y=new Set;for(const x of _)y.add(F.getObjectId(x));const g=t!=null?t.items:await this._reschedule(()=>this._getAllFeatures(),s),w=await this._reschedule(async()=>{const x=await N(r,c,this.geometryType,this.hasZ,this.hasM),I=E=>!y.has(F.getObjectId(E))||x(F.getGeometry(E)),R=await this._runSpatialFilter(g,I,s);return new v(R,e,this)},s);return d(w)}if(t!=null){const y=new mt;_=_.filter(g=>ht(t.items,g,t.items.length,y)>=0)}if(!_.length){const y=new v([],e,this);return m&&this._cache.put(m,y.items),y}if(this._canExecuteSinglePass(c,e))return d(new v(_,e,this));const S=await N(r,c,this.geometryType,this.hasZ,this.hasM),T=await this._runSpatialFilter(_,y=>S(F.getGeometry(y)),s);return d(new v(T,e,this))}async _executeGeometryQueryForSnapping(e,t){var n;const{query:s}=e,{spatialRel:i}=s;if(!((n=e==null?void 0:e.items)!=null&&n.length)||!s.geometry||!i)return;const a=await N(i,s.geometry,this.geometryType,this.hasZ,this.hasM),r=await this._runSpatialFilter(e.items,o=>a(o.geometry),t);e.items=r}_executeAggregateIdsQuery(e){var i;if(e.items.length===0||!((i=e.query.aggregateIds)!=null&&i.length)||this.aggregateAdapter==null)return;const t=new Set;for(const a of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(a).forEach(r=>t.add(r));const s=this.featureAdapter.getObjectId;e.items=e.items.filter(a=>t.has(s(a)))}_executeObjectIdsQuery(e){var i;if(e.items.length===0||!((i=e.query.objectIds)!=null&&i.length))return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter(a=>t.has(s(a)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=St(this.timeInfo,e.query.timeExtent,this.featureAdapter);t!=null&&(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=M(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(s=>t.testFeature(s,this.featureAdapter))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(this._frameTask==null)return e.filter(n=>t(n));let i=0;const a=new Array,r=async n=>{for(;i<e.length;){const o=e[i++];t(o)&&(a.push(o),n.madeProgress()),n.done&&await this._reschedule(u=>r(u),s)}};return this._reschedule(n=>r(n),s).then(()=>a)}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,a=i||s,r=new Map,n=this.featureAdapter.getAttribute;for(const o of e.items){const u=n(o,t),c=n(o,a),h=r.get(u);(!h||c>n(h,a))&&r.set(u,o)}e.items=Array.from(r.values())}_getCacheKey(e){const{geometry:t,spatialRel:s,returnGeometry:i,returnCentroid:a,outSR:r,resultType:n,cacheHint:o}=e;if(n!=="tile"&&!o)return null;const u=i||a;return J(r)&&!V(this.spatialReference,r)&&u?JSON.stringify([t,s,r]):JSON.stringify([t,s])}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return ze(e)&&(s==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(s==="esriSpatialRelIntersects"||s==="esriSpatialRelContains"))}async _project(e,t){if(!t||V(this.spatialReference,t))return e;const s=this.featureAdapter;let i;try{const r=await this._getFullExtent();i=dt(this.spatialReference,t,r)}catch{}const a=await ft(e.items.map(r=>G(this.geometryType,this.hasZ,this.hasM,s.getGeometry(r))),this.spatialReference,t,i);return e.items=a.map((r,n)=>s.cloneWithGeometry(e.items[n],Ft(r,this.hasZ,this.hasM))),e}async _searchFeatures(e){const t=new Set;await Promise.all(e.map(i=>this.featureStore.forEachInBounds(i,a=>t.add(a))));const s=Array.from(t.values());return t.clear(),s}async _executeQueryForStatistics(e,t,s){e=Y(e);try{e=await this._schedule(()=>we(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>Pt(e,t,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}catch(i){if(i!==q)throw i;return new v([],e,this)}}}function ie(l){if(ze(l)){if(pt(l))return[Ie(Math.min(l.xmin,l.xmax),Math.min(l.ymin,l.ymax),Math.max(l.xmin,l.xmax),Math.max(l.ymin,l.ymax))];if(yt(l))return l.rings.map(e=>Ie(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1])))}return[gt(xt(),l)]}export{Wt as V};
//# sourceMappingURL=QueryEngine-DIqp090-.js.map
