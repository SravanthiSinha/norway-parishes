import{j as p,m as f,k as u,P as d,db as l,dd as y,dc as N,U as h}from"./index-DDxdo46s.js";import{d as C}from"./WebMap-DC68hX_N.js";import"./ColorBackground-DZ_UplDt.js";import"./CollectionFlattener-DBQodO_s.js";import"./basemapUtils-BrwFabtx.js";import"./TablesMixin-CcZvrG7r.js";import"./MultiOriginJSONSupport-DH-_1jFb.js";import"./portalItemUtils-DGed7QpK.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-BkOk1ohF.js";import"./jsonContext-CCTN9Exf.js";import"./project-sduSdBIb.js";import"./FeatureLayer-BCkeZWXK.js";import"./commonProperties-CLGtlLEy.js";import"./FeatureLayerBase-CcbPBOYQ.js";import"./HeightModelInfo-CmLu2eDN.js";import"./featureLayerUtils-C8f3q5cQ.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-CRJajHsp.js";import"./Relationship-CsbtL6sv.js";import"./serviceCapabilitiesUtils-CJttKYK4.js";import"./editsZScale-DopOeg-F.js";import"./APIKeyMixin-CVeo6Rgf.js";import"./ArcGISService-4tr88Gpe.js";import"./CustomParametersMixin-6UloDod9.js";import"./EditBusLayer-DTadrHS8.js";import"./FeatureEffectLayer-Dggod_L8.js";import"./FeatureEffect-DzWAPSYJ.js";import"./FeatureReductionLayer-Br_FwIoi.js";import"./FeatureReductionSelection-BaXXdk0q.js";import"./labelingInfo-hoKMMytf.js";import"./labelUtils-Cjr1nLDe.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-Be8C9wCF.js";import"./OrderedLayer-BwYjUQ1j.js";import"./OrderByInfo-DjdUInwC.js";import"./PortalLayer-DwMFmz11.js";import"./RefreshableLayer-DI2uYJsN.js";import"./TemporalLayer-CxsPhY6P.js";import"./FeatureTemplate-BTvdXtvH.js";import"./FeatureType-fKP-dBav.js";import"./fieldProperties-DYI8D0XO.js";import"./versionUtils-BtoOcaEI.js";import"./styleUtils-DsvInlGd.js";import"./popupUtils-CrU7mRLo.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-DtUAUoto.js";let o=class extends d{constructor(i){super(i),this.namedTraceConfigurations=[]}};p([f({type:[C],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],o.prototype,"namedTraceConfigurations",void 0),o=p([u("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],o);const $=o;async function dt(i,t,s){const m=l(i),r=t.toJSON();t.globalIds&&t.globalIds.length>0&&(r.globalIds=JSON.stringify(t.globalIds)),t.creators&&t.creators.length>0&&(r.creators=JSON.stringify(t.creators)),t.tags&&t.tags.length>0&&(r.tags=JSON.stringify(t.tags)),t.names&&t.names.length>0&&(r.names=JSON.stringify(t.names));const a={...r,f:"json"},e=y({...m.query,...a}),n=N(e,{...s,method:"post"}),g=`${m.path}/traceConfigurations/query`,{data:c}=await h(g,n);return $.fromJSON(c)}export{dt as queryNamedTraceConfigurations};
//# sourceMappingURL=queryNamedTraceConfigurations-BtLwsc0R.js.map