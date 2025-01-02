import{db as m,dd as d,dc as n,U as l,I as f}from"./index-Vdm0PCas.js";import{i as k}from"./WebMap-6q2gAPUJ.js";import"./ColorBackground-DMAAIVKo.js";import"./CollectionFlattener-CN8cPTqs.js";import"./basemapUtils-DzQHv-cI.js";import"./utils-HNoWO9hO.js";import"./TablesMixin-D_NV5QH5.js";import"./Layer-vfI2MkUG.js";import"./MultiOriginJSONSupport-DR0AlfNW.js";import"./portalItemUtils-bWZxvl2b.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-CK9nEbRo.js";import"./jsonContext-C_AKfRlO.js";import"./project-kph3e8fV.js";import"./FeatureLayer-Ck-jkLa6.js";import"./commonProperties-DKi4uAHT.js";import"./ElevationInfo-8bL8CsLE.js";import"./FeatureLayerBase-GTmANgbW.js";import"./HeightModelInfo-BVQNgGlV.js";import"./featureLayerUtils-CJjLkoaQ.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-Cd7FFYYo.js";import"./Relationship-DksO8Bh0.js";import"./serviceCapabilitiesUtils-BfNH8jlB.js";import"./editsZScale-cRsh_11v.js";import"./APIKeyMixin-CKuco-22.js";import"./ArcGISService-BRYEuJoa.js";import"./BlendLayer-BlWZsEiI.js";import"./jsonUtils-Cw0uK1Oy.js";import"./parser-D2R35t-Z.js";import"./CustomParametersMixin-B4Ie892C.js";import"./EditBusLayer-C3M82vWe.js";import"./FeatureEffectLayer-CnSsaxDh.js";import"./FeatureEffect--yjTxo42.js";import"./FeatureReductionLayer-D99qTUx4.js";import"./FeatureReductionSelection-CXKGXrx7.js";import"./labelingInfo-DrFSQV2D.js";import"./labelUtils-dPhVIcd5.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-D7ZoxskL.js";import"./OrderedLayer-ccfv6Pwa.js";import"./OrderByInfo-BmDUJWR6.js";import"./PortalLayer-BYDxwIVB.js";import"./RefreshableLayer-D3dX97bd.js";import"./ScaleRangeLayer-D6kYzICO.js";import"./TemporalLayer-Bwq6ZJLq.js";import"./FeatureTemplate-CrKJ3X8q.js";import"./FeatureType-Dr0DsKCX.js";import"./fieldProperties-Dr6jr5It.js";import"./versionUtils-B2c6sKZf.js";import"./styleUtils-CRQmAKAx.js";import"./popupUtils-Do-psw4y.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-BFhNcmUo.js";async function wt(i,t,a){const r=m(i),e=t.toJSON();t.validationSet&&(e.validationSet=JSON.stringify(t.validationSet));const p={...e,returnEdits:!0,f:"json"},s=d({...r.query,...p}),o=n(s,{...a,method:"post"}),c=`${r.path}/validateNetworkTopology`,{data:u}=await l(c,o);return k.fromJSON(v(u))}async function yt(i,t,a){if(!t.gdbVersion)throw new f("submit-validate-network-topology-job:missing-gdb-version","version is missing");const r=m(i),e=t.toJSON();t.validationSet&&(e.validationSet=JSON.stringify(t.validationSet));const p=n(r.query,{query:d({...e,returnEdits:!0,async:!0,f:"json"}),...a,method:"post"}),s=`${r.path}/validateNetworkTopology`,{data:o}=await l(s,p);return o?o.statusUrl:null}function v(i){return i.serviceEdits&&(i.serviceEdits=i.serviceEdits.map(t=>(t.editedFeatures.spatialReference&&(t.editedFeatures.spatialReference={wkid:t.editedFeatures.spatialReference.wkid,wkt:t.editedFeatures.spatialReference.wkt,wkt2:t.editedFeatures.spatialReference.wkt2,latestWkid:t.editedFeatures.spatialReference.latestWkid,latestVcsWkid:t.editedFeatures.spatialReference.latestVcsWkid,vcsWkid:t.editedFeatures.spatialReference.vcsWkid}),t={layerId:t.id,editedFeatures:t.editedFeatures}))),i}export{v as handleValidateNetworkTopologyResult,yt as submitValidateNetworkTopologyJob,wt as validateNetworkTopology};
//# sourceMappingURL=validateNetworkTopology-ftZWJ-uE.js.map
