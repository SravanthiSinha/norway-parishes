import{j as p,m as f,k as u,P as d,db as l,dd as y,dc as N,U as h}from"./index-BB6xpuj5.js";import{d as C}from"./WebMap-DzPZVaph.js";import"./ColorBackground-5boBVQCV.js";import"./CollectionFlattener-vw9PCdEV.js";import"./basemapUtils-DT7CgBiu.js";import"./utils-Dmn_mtNQ.js";import"./TablesMixin-rUkw-8tc.js";import"./Layer-5zl9d9z3.js";import"./MultiOriginJSONSupport-Ds15Pv5U.js";import"./portalItemUtils-igkvoSCR.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-D13Hy1EV.js";import"./jsonContext-jqJky8De.js";import"./project-B34HeVA-.js";import"./FeatureLayer-DLePmP_i.js";import"./commonProperties-Dml6tvE0.js";import"./ElevationInfo-iR6nks6N.js";import"./FeatureLayerBase-CUn7WA32.js";import"./HeightModelInfo-Cn8WVYm1.js";import"./featureLayerUtils-CuvTdxDI.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-q806eHM4.js";import"./Relationship-BaT5KEkl.js";import"./serviceCapabilitiesUtils-8QJKYI-1.js";import"./editsZScale-FBam3NMz.js";import"./APIKeyMixin-BBD1ewdD.js";import"./ArcGISService-jnzLCT8d.js";import"./BlendLayer-BM0Urm4m.js";import"./jsonUtils-u1h3D0OM.js";import"./parser-Bf0eM-Za.js";import"./CustomParametersMixin-BqW8E31A.js";import"./EditBusLayer-UFe0I3Hh.js";import"./FeatureEffectLayer-BOKxhqx9.js";import"./FeatureEffect-DnqkcXBZ.js";import"./FeatureReductionLayer-HYMTMZr2.js";import"./FeatureReductionSelection-CY0P4ml8.js";import"./labelingInfo-Bdhy0Uhq.js";import"./labelUtils-CfVEjBe_.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-BCmZUWT9.js";import"./OrderedLayer-CRoVzpM6.js";import"./OrderByInfo-Dw_MZwiL.js";import"./PortalLayer--zJ_3U-8.js";import"./RefreshableLayer-w7K7ocJU.js";import"./ScaleRangeLayer-CtgwFmOS.js";import"./TemporalLayer-CD6dEoJB.js";import"./FeatureTemplate-g9fc6MFC.js";import"./FeatureType-BeQne2nS.js";import"./fieldProperties-D2u7Y-mU.js";import"./versionUtils-DDbWBaHq.js";import"./styleUtils-j-PGRmWB.js";import"./popupUtils-rXCrk05l.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-BBFSNCjW.js";let o=class extends d{constructor(i){super(i),this.namedTraceConfigurations=[]}};p([f({type:[C],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],o.prototype,"namedTraceConfigurations",void 0),o=p([u("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],o);const $=o;async function Jt(i,t,s){const m=l(i),r=t.toJSON();t.globalIds&&t.globalIds.length>0&&(r.globalIds=JSON.stringify(t.globalIds)),t.creators&&t.creators.length>0&&(r.creators=JSON.stringify(t.creators)),t.tags&&t.tags.length>0&&(r.tags=JSON.stringify(t.tags)),t.names&&t.names.length>0&&(r.names=JSON.stringify(t.names));const a={...r,f:"json"},e=y({...m.query,...a}),n=N(e,{...s,method:"post"}),g=`${m.path}/traceConfigurations/query`,{data:c}=await h(g,n);return $.fromJSON(c)}export{Jt as queryNamedTraceConfigurations};