import{db as d,dd as m,dc as n,U as l,I as f}from"./index-vxzybAz5.js";import{i as k}from"./WebMap-CvLN2Kp7.js";import"./ColorBackground-DrtHmMr_.js";import"./CollectionFlattener-CEQ-twnw.js";import"./basemapUtils-BVg27rrM.js";import"./TablesMixin-B36A5yOS.js";import"./MultiOriginJSONSupport-DAGZlN0u.js";import"./portalItemUtils-Cir6-RYG.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-cX9PQVZI.js";import"./jsonContext-D0ooh6Ua.js";import"./project-YJumZ9E_.js";import"./FeatureLayer-Bt96Mclx.js";import"./commonProperties-CfwF00T4.js";import"./FeatureLayerBase-Dsn5weG9.js";import"./HeightModelInfo-C19vOMVt.js";import"./featureLayerUtils-fM2-zC_U.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-BFR58veN.js";import"./Relationship-C2Nj2z5d.js";import"./serviceCapabilitiesUtils-D7TD5KQh.js";import"./editsZScale-CdrELI2u.js";import"./APIKeyMixin-Bu3XJRd-.js";import"./ArcGISService-DLqHU9Ys.js";import"./CustomParametersMixin-B6CSU--H.js";import"./EditBusLayer-y3WAhf7z.js";import"./FeatureEffectLayer-CwLVsrvK.js";import"./FeatureEffect-B8Zj0u5R.js";import"./FeatureReductionLayer-Czq_8MqD.js";import"./FeatureReductionSelection-DrpA42g6.js";import"./labelingInfo-C-0M5fT8.js";import"./labelUtils-DiR3_Bb8.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-BurlOfUV.js";import"./OrderedLayer-_29wPwz1.js";import"./OrderByInfo-DmLOYl6T.js";import"./PortalLayer-BIoaCdTV.js";import"./RefreshableLayer-CbHSBlkq.js";import"./TemporalLayer-CXEqSWVN.js";import"./FeatureTemplate-BOSwAzpP.js";import"./FeatureType-xxmg1vn7.js";import"./fieldProperties-Dt84ZoKT.js";import"./versionUtils-Bxdo9n7A.js";import"./styleUtils-9bVwrSIE.js";import"./popupUtils-CzptTD6Z.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-Cqn_az-y.js";async function nt(i,t,a){const e=d(i),r=t.toJSON();t.validationSet&&(r.validationSet=JSON.stringify(t.validationSet));const s={...r,returnEdits:!0,f:"json"},p=m({...e.query,...s}),o=n(p,{...a,method:"post"}),c=`${e.path}/validateNetworkTopology`,{data:u}=await l(c,o);return k.fromJSON(v(u))}async function lt(i,t,a){if(!t.gdbVersion)throw new f("submit-validate-network-topology-job:missing-gdb-version","version is missing");const e=d(i),r=t.toJSON();t.validationSet&&(r.validationSet=JSON.stringify(t.validationSet));const s=n(e.query,{query:m({...r,returnEdits:!0,async:!0,f:"json"}),...a,method:"post"}),p=`${e.path}/validateNetworkTopology`,{data:o}=await l(p,s);return o?o.statusUrl:null}function v(i){return i.serviceEdits&&(i.serviceEdits=i.serviceEdits.map(t=>(t.editedFeatures.spatialReference&&(t.editedFeatures.spatialReference={wkid:t.editedFeatures.spatialReference.wkid,wkt:t.editedFeatures.spatialReference.wkt,wkt2:t.editedFeatures.spatialReference.wkt2,latestWkid:t.editedFeatures.spatialReference.latestWkid,latestVcsWkid:t.editedFeatures.spatialReference.latestVcsWkid,vcsWkid:t.editedFeatures.spatialReference.vcsWkid}),t={layerId:t.id,editedFeatures:t.editedFeatures}))),i}export{v as handleValidateNetworkTopologyResult,lt as submitValidateNetworkTopologyJob,nt as validateNetworkTopology};
//# sourceMappingURL=validateNetworkTopology-9NkuqwLR.js.map
