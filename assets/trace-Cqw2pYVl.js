import{dc as e,dd as c,de as n,U as u}from"./index-U3f91iFJ.js";import{a as y}from"./WebMap-Bs2e7sHU.js";import"./ColorBackground-CspFrTkX.js";import"./CollectionFlattener-CVoNSM-L.js";import"./basemapUtils-B_8lQVYY.js";import"./TablesMixin-Bsms9_l9.js";import"./MultiOriginJSONSupport-BnxMaCt1.js";import"./portalItemUtils-DiwbiVEJ.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-1o5IA5_-.js";import"./jsonContext-xecjGnCI.js";import"./project-DUqqsf4t.js";import"./FeatureLayer-BZQ38twm.js";import"./commonProperties-CwULv9TP.js";import"./FeatureLayerBase-g0mw3EXN.js";import"./HeightModelInfo-Cifv_-P-.js";import"./featureLayerUtils-DdNzm-CS.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-BoV8Oop4.js";import"./Relationship-BFJFwiOc.js";import"./serviceCapabilitiesUtils-CZna5PQ4.js";import"./editsZScale-DAPehqyH.js";import"./APIKeyMixin-ZwRBv8Bq.js";import"./ArcGISService-BOnIblqi.js";import"./CustomParametersMixin-D9nXkT8t.js";import"./EditBusLayer-BEW2QYxe.js";import"./FeatureEffectLayer-YA4vPst_.js";import"./FeatureEffect-CgJAlCDp.js";import"./FeatureReductionLayer-DSSLH_OP.js";import"./FeatureReductionSelection-L9TRPyTR.js";import"./labelingInfo-CqSOJnwT.js";import"./labelUtils-CN6gVbmf.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-DKdcF5P4.js";import"./OrderedLayer-C36WgMOq.js";import"./OrderByInfo-cgZrrpeQ.js";import"./PortalLayer-aOZD8pzD.js";import"./RefreshableLayer-DD1M1W5P.js";import"./TemporalLayer-DcVjH4NI.js";import"./FeatureTemplate-QORAHLY0.js";import"./FeatureType-dRROuNgU.js";import"./fieldProperties-BLajaGmD.js";import"./versionUtils-Dbqys5pu.js";import"./styleUtils-CRf7NAwm.js";import"./popupUtils-DpnLXvM9.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-DCVwPC6d.js";async function at(o,t,p){const i=e(o),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const m=c(i.query,{query:n({...r,f:"json"}),...p}),s=`${i.path}/trace`;return u(s,m).then(a=>f(a))}async function et(o,t,p){const i=e(o),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const m=c(i.query,{query:n({...r,async:!0,f:"json"}),...p}),s=`${i.path}/trace`,{data:a}=await u(s,m);return a.statusUrl}function f(o){const{data:t}=o;return y.fromJSON(t.traceResults)}export{et as submitTraceJob,at as trace};
//# sourceMappingURL=trace-Cqw2pYVl.js.map
