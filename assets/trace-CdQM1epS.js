import{db as e,dc as c,dd as n,U as u}from"./index-CJT1kG3U.js";import{a as y}from"./WebMap-DlnYz5Kk.js";import"./ColorBackground-DccT2d7M.js";import"./CollectionFlattener-BsnC7bWF.js";import"./basemapUtils-629Q36Sj.js";import"./TablesMixin-C-3U0nTN.js";import"./MultiOriginJSONSupport-CLxlAl4j.js";import"./portalItemUtils-Dqn5_s7X.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-ClChzcul.js";import"./jsonContext-CDuY_d8j.js";import"./project-C6fn2FK_.js";import"./FeatureLayer-5j_8y2oR.js";import"./commonProperties-CoeojjbU.js";import"./FeatureLayerBase-BweyFNxn.js";import"./HeightModelInfo-BsdLH3Iz.js";import"./featureLayerUtils-BpxtsyUl.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-DiG0jczO.js";import"./Relationship-Dqo9YihB.js";import"./serviceCapabilitiesUtils-JL9sqXYv.js";import"./editsZScale-DSwHD_r_.js";import"./APIKeyMixin-Be_wvRKP.js";import"./ArcGISService-BuSNxctw.js";import"./CustomParametersMixin-ipnGiKFn.js";import"./EditBusLayer-BGosulfD.js";import"./FeatureEffectLayer-f5Og7P5n.js";import"./FeatureEffect-Aug1VK_I.js";import"./FeatureReductionLayer-8JxG8U1g.js";import"./FeatureReductionSelection-DrasqWKY.js";import"./labelingInfo-Bthc2OpT.js";import"./labelUtils-DWCTGugX.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-DbosLJBg.js";import"./OrderedLayer-fiEYbuDt.js";import"./OrderByInfo-BfIwxxWp.js";import"./PortalLayer-89wvzU0_.js";import"./RefreshableLayer-DA9s4-NR.js";import"./TemporalLayer-rebXAIuB.js";import"./FeatureTemplate-CFNWtGeT.js";import"./FeatureType-DI51YxmD.js";import"./fieldProperties-CptXn_89.js";import"./versionUtils-D0cZVFIz.js";import"./styleUtils-Cs3WnKzJ.js";import"./popupUtils-Sk7uakZS.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-DzKD83h8.js";async function at(o,t,p){const i=e(o),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const m=c(i.query,{query:n({...r,f:"json"}),...p}),s=`${i.path}/trace`;return u(s,m).then(a=>f(a))}async function et(o,t,p){const i=e(o),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const m=c(i.query,{query:n({...r,async:!0,f:"json"}),...p}),s=`${i.path}/trace`,{data:a}=await u(s,m);return a.statusUrl}function f(o){const{data:t}=o;return y.fromJSON(t.traceResults)}export{et as submitTraceJob,at as trace};
//# sourceMappingURL=trace-CdQM1epS.js.map
