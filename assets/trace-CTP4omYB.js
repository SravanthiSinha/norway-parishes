import{db as e,dc as c,dd as n,U as u}from"./index-DDxdo46s.js";import{a as y}from"./WebMap-DC68hX_N.js";import"./ColorBackground-DZ_UplDt.js";import"./CollectionFlattener-DBQodO_s.js";import"./basemapUtils-BrwFabtx.js";import"./TablesMixin-CcZvrG7r.js";import"./MultiOriginJSONSupport-DH-_1jFb.js";import"./portalItemUtils-DGed7QpK.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-BkOk1ohF.js";import"./jsonContext-CCTN9Exf.js";import"./project-sduSdBIb.js";import"./FeatureLayer-BCkeZWXK.js";import"./commonProperties-CLGtlLEy.js";import"./FeatureLayerBase-CcbPBOYQ.js";import"./HeightModelInfo-CmLu2eDN.js";import"./featureLayerUtils-C8f3q5cQ.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-CRJajHsp.js";import"./Relationship-CsbtL6sv.js";import"./serviceCapabilitiesUtils-CJttKYK4.js";import"./editsZScale-DopOeg-F.js";import"./APIKeyMixin-CVeo6Rgf.js";import"./ArcGISService-4tr88Gpe.js";import"./CustomParametersMixin-6UloDod9.js";import"./EditBusLayer-DTadrHS8.js";import"./FeatureEffectLayer-Dggod_L8.js";import"./FeatureEffect-DzWAPSYJ.js";import"./FeatureReductionLayer-Br_FwIoi.js";import"./FeatureReductionSelection-BaXXdk0q.js";import"./labelingInfo-hoKMMytf.js";import"./labelUtils-Cjr1nLDe.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-Be8C9wCF.js";import"./OrderedLayer-BwYjUQ1j.js";import"./OrderByInfo-DjdUInwC.js";import"./PortalLayer-DwMFmz11.js";import"./RefreshableLayer-DI2uYJsN.js";import"./TemporalLayer-CxsPhY6P.js";import"./FeatureTemplate-BTvdXtvH.js";import"./FeatureType-fKP-dBav.js";import"./fieldProperties-DYI8D0XO.js";import"./versionUtils-BtoOcaEI.js";import"./styleUtils-DsvInlGd.js";import"./popupUtils-CrU7mRLo.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-DtUAUoto.js";async function at(o,t,p){const i=e(o),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const m=c(i.query,{query:n({...r,f:"json"}),...p}),s=`${i.path}/trace`;return u(s,m).then(a=>f(a))}async function et(o,t,p){const i=e(o),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const m=c(i.query,{query:n({...r,async:!0,f:"json"}),...p}),s=`${i.path}/trace`,{data:a}=await u(s,m);return a.statusUrl}function f(o){const{data:t}=o;return y.fromJSON(t.traceResults)}export{et as submitTraceJob,at as trace};
//# sourceMappingURL=trace-CTP4omYB.js.map