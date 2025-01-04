import{db as d,dd as m,dc as n,U as l,I as f}from"./index-CJT1kG3U.js";import{i as k}from"./WebMap-DlnYz5Kk.js";import"./ColorBackground-DccT2d7M.js";import"./CollectionFlattener-BsnC7bWF.js";import"./basemapUtils-629Q36Sj.js";import"./TablesMixin-C-3U0nTN.js";import"./MultiOriginJSONSupport-CLxlAl4j.js";import"./portalItemUtils-Dqn5_s7X.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-ClChzcul.js";import"./jsonContext-CDuY_d8j.js";import"./project-C6fn2FK_.js";import"./FeatureLayer-5j_8y2oR.js";import"./commonProperties-CoeojjbU.js";import"./FeatureLayerBase-BweyFNxn.js";import"./HeightModelInfo-BsdLH3Iz.js";import"./featureLayerUtils-BpxtsyUl.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-DiG0jczO.js";import"./Relationship-Dqo9YihB.js";import"./serviceCapabilitiesUtils-JL9sqXYv.js";import"./editsZScale-DSwHD_r_.js";import"./APIKeyMixin-Be_wvRKP.js";import"./ArcGISService-BuSNxctw.js";import"./CustomParametersMixin-ipnGiKFn.js";import"./EditBusLayer-BGosulfD.js";import"./FeatureEffectLayer-f5Og7P5n.js";import"./FeatureEffect-Aug1VK_I.js";import"./FeatureReductionLayer-8JxG8U1g.js";import"./FeatureReductionSelection-DrasqWKY.js";import"./labelingInfo-Bthc2OpT.js";import"./labelUtils-DWCTGugX.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-DbosLJBg.js";import"./OrderedLayer-fiEYbuDt.js";import"./OrderByInfo-BfIwxxWp.js";import"./PortalLayer-89wvzU0_.js";import"./RefreshableLayer-DA9s4-NR.js";import"./TemporalLayer-rebXAIuB.js";import"./FeatureTemplate-CFNWtGeT.js";import"./FeatureType-DI51YxmD.js";import"./fieldProperties-CptXn_89.js";import"./versionUtils-D0cZVFIz.js";import"./styleUtils-Cs3WnKzJ.js";import"./popupUtils-Sk7uakZS.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-DzKD83h8.js";async function nt(i,t,a){const e=d(i),r=t.toJSON();t.validationSet&&(r.validationSet=JSON.stringify(t.validationSet));const s={...r,returnEdits:!0,f:"json"},p=m({...e.query,...s}),o=n(p,{...a,method:"post"}),c=`${e.path}/validateNetworkTopology`,{data:u}=await l(c,o);return k.fromJSON(v(u))}async function lt(i,t,a){if(!t.gdbVersion)throw new f("submit-validate-network-topology-job:missing-gdb-version","version is missing");const e=d(i),r=t.toJSON();t.validationSet&&(r.validationSet=JSON.stringify(t.validationSet));const s=n(e.query,{query:m({...r,returnEdits:!0,async:!0,f:"json"}),...a,method:"post"}),p=`${e.path}/validateNetworkTopology`,{data:o}=await l(p,s);return o?o.statusUrl:null}function v(i){return i.serviceEdits&&(i.serviceEdits=i.serviceEdits.map(t=>(t.editedFeatures.spatialReference&&(t.editedFeatures.spatialReference={wkid:t.editedFeatures.spatialReference.wkid,wkt:t.editedFeatures.spatialReference.wkt,wkt2:t.editedFeatures.spatialReference.wkt2,latestWkid:t.editedFeatures.spatialReference.latestWkid,latestVcsWkid:t.editedFeatures.spatialReference.latestVcsWkid,vcsWkid:t.editedFeatures.spatialReference.vcsWkid}),t={layerId:t.id,editedFeatures:t.editedFeatures}))),i}export{v as handleValidateNetworkTopologyResult,lt as submitValidateNetworkTopologyJob,nt as validateNetworkTopology};
//# sourceMappingURL=validateNetworkTopology-DkZDdp0D.js.map