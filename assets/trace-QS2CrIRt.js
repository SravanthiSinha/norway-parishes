import{db as e,dc as c,dd as n,U as u}from"./index-Du44_A8J.js";import{a as y}from"./WebMap-DYpQayzV.js";import"./ColorBackground-DLR35STU.js";import"./CollectionFlattener-C_SkK2OR.js";import"./basemapUtils-DhbQ_DRF.js";import"./TablesMixin-Q8kcPu97.js";import"./MultiOriginJSONSupport-9C55E1A7.js";import"./portalItemUtils-BEbjr1pu.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-CUE_bnyo.js";import"./jsonContext-BZ8M6Jns.js";import"./project-DuNx7rKP.js";import"./FeatureLayer-Cmbe5QUd.js";import"./commonProperties-BK1AfWBs.js";import"./FeatureLayerBase-Lwh763a1.js";import"./HeightModelInfo-B1CAuLNS.js";import"./featureLayerUtils-31c3e_wZ.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-RaJcB56g.js";import"./Relationship-BXPxcFQW.js";import"./serviceCapabilitiesUtils-m9_-oJzc.js";import"./editsZScale-BTyrCXaU.js";import"./APIKeyMixin-DkioXOJh.js";import"./ArcGISService-B0vN2MGD.js";import"./CustomParametersMixin-MXEEEQ7u.js";import"./EditBusLayer-B4jg0q7p.js";import"./FeatureEffectLayer-BzcW7R1Q.js";import"./FeatureEffect-CnClIzlo.js";import"./FeatureReductionLayer-dnX54yRr.js";import"./FeatureReductionSelection-DpYTGJoh.js";import"./labelingInfo-DdMTUeRH.js";import"./labelUtils-CqoQ4tTv.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-DzWDKpRJ.js";import"./OrderedLayer-BZsNZEvc.js";import"./OrderByInfo-BaznYmtR.js";import"./PortalLayer-D0ThxHis.js";import"./RefreshableLayer-WGNO3V1X.js";import"./TemporalLayer-CxDKIA9q.js";import"./FeatureTemplate-CPKD3Kwx.js";import"./FeatureType-CT9wGYTt.js";import"./fieldProperties-Cm-I8Wya.js";import"./versionUtils-D5ibMXOg.js";import"./styleUtils-C_RlL1q0.js";import"./popupUtils-DagVpAP6.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-BiASxGsQ.js";async function at(o,t,p){const i=e(o),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const m=c(i.query,{query:n({...r,f:"json"}),...p}),s=`${i.path}/trace`;return u(s,m).then(a=>f(a))}async function et(o,t,p){const i=e(o),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const m=c(i.query,{query:n({...r,async:!0,f:"json"}),...p}),s=`${i.path}/trace`,{data:a}=await u(s,m);return a.statusUrl}function f(o){const{data:t}=o;return y.fromJSON(t.traceResults)}export{et as submitTraceJob,at as trace};
//# sourceMappingURL=trace-QS2CrIRt.js.map
