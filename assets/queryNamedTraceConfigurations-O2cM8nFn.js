import{j as p,m as f,k as u,P as d,db as l,dd as y,dc as N,U as h}from"./index-oLM2nnvm.js";import{d as C}from"./WebMap-CSkEeAHw.js";import"./ColorBackground-DnLp5fuI.js";import"./CollectionFlattener-B8fqvrQQ.js";import"./basemapUtils-Cx0e7D1U.js";import"./TablesMixin-C_yCmV8H.js";import"./MultiOriginJSONSupport-B5O_NPAI.js";import"./portalItemUtils-o0HMA_HX.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-BSn-QZmJ.js";import"./jsonContext-J92Yj9vD.js";import"./project-5-7xc2Zl.js";import"./FeatureLayer-C9mYBTFk.js";import"./commonProperties-BtQS_lnB.js";import"./FeatureLayerBase-BFwwgquk.js";import"./HeightModelInfo-Do10YdaJ.js";import"./featureLayerUtils-BjuaFVy1.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-DdL3RdGd.js";import"./Relationship-D6ltT5TX.js";import"./serviceCapabilitiesUtils-C_K_b7z_.js";import"./editsZScale-CS9xwnZE.js";import"./APIKeyMixin-CmWCsb42.js";import"./ArcGISService-Bf4BaP2A.js";import"./CustomParametersMixin-DniFnX77.js";import"./EditBusLayer-CSuQ8iPk.js";import"./FeatureEffectLayer-TNzJcDS0.js";import"./FeatureEffect-5U-xsKY6.js";import"./FeatureReductionLayer-CFVZ4Tgu.js";import"./FeatureReductionSelection-uE9Vvv5Y.js";import"./labelingInfo-Z5Xviby6.js";import"./labelUtils-CUcaCcjV.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-BgXIKL7k.js";import"./OrderedLayer-UGjIlwzM.js";import"./OrderByInfo-CSXlwigP.js";import"./PortalLayer-Cc5Wpw6A.js";import"./RefreshableLayer-C1V-r-C6.js";import"./TemporalLayer-7usoT4ud.js";import"./FeatureTemplate-BDetaB7G.js";import"./FeatureType-D7Fy3Yxr.js";import"./fieldProperties-aPU0vr3T.js";import"./versionUtils-DFPk8unr.js";import"./styleUtils-Bnn-Jqi0.js";import"./popupUtils-D8yjXEad.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-d5WQpI4D.js";let o=class extends d{constructor(i){super(i),this.namedTraceConfigurations=[]}};p([f({type:[C],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],o.prototype,"namedTraceConfigurations",void 0),o=p([u("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],o);const $=o;async function dt(i,t,s){const m=l(i),r=t.toJSON();t.globalIds&&t.globalIds.length>0&&(r.globalIds=JSON.stringify(t.globalIds)),t.creators&&t.creators.length>0&&(r.creators=JSON.stringify(t.creators)),t.tags&&t.tags.length>0&&(r.tags=JSON.stringify(t.tags)),t.names&&t.names.length>0&&(r.names=JSON.stringify(t.names));const a={...r,f:"json"},e=y({...m.query,...a}),n=N(e,{...s,method:"post"}),g=`${m.path}/traceConfigurations/query`,{data:c}=await h(g,n);return $.fromJSON(c)}export{dt as queryNamedTraceConfigurations};
//# sourceMappingURL=queryNamedTraceConfigurations-O2cM8nFn.js.map
