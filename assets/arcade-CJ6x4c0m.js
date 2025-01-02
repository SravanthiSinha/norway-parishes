import{I as g,b5 as j,ek as I,G as L,d7 as P,dx as J}from"./index-oLM2nnvm.js";import{a as T,n as F,m as S}from"./TimeOnly-UKTyDi7B.js";import{t as M}from"./ImmutableArray-BPVd6ESQ.js";import z from"./FeatureLayer-C9mYBTFk.js";import"./MultiOriginJSONSupport-B5O_NPAI.js";import"./commonProperties-BtQS_lnB.js";import"./FeatureLayerBase-BFwwgquk.js";import"./HeightModelInfo-Do10YdaJ.js";import"./featureLayerUtils-BjuaFVy1.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-DdL3RdGd.js";import"./Relationship-D6ltT5TX.js";import"./serviceCapabilitiesUtils-C_K_b7z_.js";import"./editsZScale-CS9xwnZE.js";import"./APIKeyMixin-CmWCsb42.js";import"./ArcGISService-Bf4BaP2A.js";import"./CustomParametersMixin-DniFnX77.js";import"./EditBusLayer-CSuQ8iPk.js";import"./FeatureEffectLayer-TNzJcDS0.js";import"./FeatureEffect-5U-xsKY6.js";import"./FeatureReductionLayer-CFVZ4Tgu.js";import"./FeatureReductionSelection-uE9Vvv5Y.js";import"./labelingInfo-Z5Xviby6.js";import"./labelUtils-CUcaCcjV.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-BgXIKL7k.js";import"./OrderedLayer-UGjIlwzM.js";import"./OrderByInfo-CSXlwigP.js";import"./PortalLayer-Cc5Wpw6A.js";import"./portalItemUtils-o0HMA_HX.js";import"./RefreshableLayer-C1V-r-C6.js";import"./TemporalLayer-7usoT4ud.js";import"./TimeInfo-BSn-QZmJ.js";import"./FeatureTemplate-BDetaB7G.js";import"./FeatureType-D7Fy3Yxr.js";import"./fieldProperties-aPU0vr3T.js";import"./versionUtils-DFPk8unr.js";import"./styleUtils-Bnn-Jqi0.js";import"./popupUtils-D8yjXEad.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";let b=null;function E(e,o,r,n={}){const t=o.elementType,i="value",c=t.type==="array"?[{name:i,type:t.type,elementType:t.elementType}]:t.type==="dictionary"?[{name:i,type:t.type,properties:t.properties}]:[{name:i,type:t.type}];return new M(e.map(s=>{const a={};return w(a,c,{[i]:s},r,n),a[i]}))}function N(e,o,r={}){const n=e instanceof J?new z({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return o.constructFeatureSet(n,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function X(e,o,r={}){const{spatialReference:n,interceptor:t,lruCache:i}=r;return typeof e=="string"?o.createFeatureSetCollectionFromService(e,n,i,t):o.createFeatureSetCollectionFromMap(e,n,i,t)}function Y(e,o,r,n={}){const t={};return w(t,o.properties,e,r,n),new b.Dictionary(t)}function w(e,o,r,n,t={}){const i={};for(const c of Object.keys(r))i[c.toLowerCase()]=r[c];for(const c of o){const s=c.name.toLowerCase();if(t.variablesPreProcessed)e[s]=i[s];else switch(c.type){case"array":{const a=i[s];e[s]=a==null?null:E(a,c,n,t);break}case"feature":{const a=i[s];e[s]=a==null?null:b.Feature.createFromGraphic(a,t==null?void 0:t.timeZone);break}case"featureSet":{const a=i[s];e[s]=a==null?null:n?N(a,n,t):null;break}case"featureSetCollection":{const a=i[s];e[s]=a==null?null:n?X(a,n,t):null;break}case"dictionary":{const a=i[s];e[s]=a==null?null:Y(a,c,n,t);break}case"date":{const a=i[s];e[s]=a?a instanceof S?a:t!=null&&t.timeZone?S.dateJSAndZoneToArcadeDate(a,t==null?void 0:t.timeZone):S.dateJSToArcadeDate(a):null;break}case"dateOnly":{const a=i[s];e[s]=a?a instanceof F?a:F.fromReader(a):null;break}case"time":{const a=i[s];e[s]=a?a instanceof T?a:T.fromReader(a):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[s]=i[s]}}}function Z(e,o){for(const r of e)o.push(r),r.type==="dictionary"&&Z(r.properties,o);return o}function R(e,o,r,n,t){const{spatialReference:i,interceptor:c,lruCache:s,console:a,abortSignal:m,timeZone:l,services:$={portal:L.getDefault()}}=r,f={vars:{},spatialReference:i,interceptor:c,timeZone:l,lrucache:s,useAsync:t,services:$,console:a,abortSignal:m};return o&&w(f.vars,e.variables,o,n,r),f}function v(e,o){switch(o.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const r=(e.type,e),n="geometry"in r?r.geometry():null,t="readAttributes"in r?r.readAttributes():r.attributes;return new P({geometry:n,attributes:t})}case"dictionary":{const r=e,n=r.attributes,t={};for(const i of Object.keys(n))t[i]=v(r.field(i),o);return t}case"array":return("toArray"in e?e.toArray():e).map(r=>v(r,o))}return e}const D={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},O={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},U=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",D],["popup-element",D],["feature-reduction-popup",O],["feature-reduction-popup-element",O],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function Ze(e){const o=U.get(e);if(!o){const r=Array.from(U.keys()).map(n=>`'${n}'`).join(", ");throw new g("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${r}`)}return j(o)}async function Ge(e,o,r={}){b||(b=await I());const{arcade:n,arcadeUtils:t}=b,{loadScriptDependencies:i,referencesMember:c,scriptIsAsync:s}=n,a=Z(o.variables,[]),m=a.filter(p=>p.type==="featureSet"||p.type==="featureSetCollection").map(p=>p.name.toLowerCase()),l=n.parseScript(e,m);if(!l)throw new g("arcade:invalid-script","Unable to create SyntaxTree");const $=t.extractFieldNames(l),f=n.scriptTouchesGeometry(l),h=a.map(p=>p.name.toLowerCase()).filter(p=>c(l,p)),u=s(l,m);await i(l,u,m);const C={vars:{},spatialReference:null,useAsync:u};for(const p of h)C.vars[p]="any";const{lruCache:A}=r,x=n.compileScript(l,C),k=n.featureSetUtils(),{services:G}=r;return{execute:(p,y={})=>{if(u)throw new g("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=x(R(o,p,{lruCache:A,...y},k,u));return y.rawOutput?d:v(d,t)},executeAsync:async(p,y={})=>{const d=await x(R(o,p,{lruCache:A,services:G,...y},k,u));return y.rawOutput?d:v(d,t)},isAsync:u,variablesUsed:h,fieldsUsed:$,geometryUsed:f,syntaxTree:l}}export{Ge as createArcadeExecutor,Ze as createArcadeProfile};
//# sourceMappingURL=arcade-CJ6x4c0m.js.map
