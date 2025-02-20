import{I as f,dc as d,dd as m,de as n,U as l}from"./index-BLU2cKnj.js";import{i as k}from"./WebMap-2a6lYZBC.js";import"./ColorBackground-vlxJDcwJ.js";import"./CollectionFlattener-BHTr6g-r.js";import"./basemapUtils-Cnyc7wcC.js";import"./TablesMixin-_dK-QRY_.js";import"./MultiOriginJSONSupport-B22y0seo.js";import"./portalItemUtils-DqkYNLL5.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-Di_akmN3.js";import"./jsonContext-D5HJfx3y.js";import"./project-w0kwP63j.js";import"./FeatureLayer-DdpxwJmY.js";import"./commonProperties-KlFzDeB4.js";import"./FeatureLayerBase-BJZBLv_H.js";import"./HeightModelInfo-DW8MpWGE.js";import"./featureLayerUtils-BsLCONIT.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-BcuBJJSt.js";import"./Relationship-CX2qdSyH.js";import"./serviceCapabilitiesUtils-CB6oyZ7v.js";import"./editsZScale-JWIYr7bJ.js";import"./APIKeyMixin-yhjwDbKM.js";import"./ArcGISService-CbHrzmDZ.js";import"./CustomParametersMixin-BAGJWN10.js";import"./EditBusLayer-DC3AKpDw.js";import"./FeatureEffectLayer-BL9piFxL.js";import"./FeatureEffect-BMryXxKD.js";import"./FeatureReductionLayer-DEu0idqa.js";import"./FeatureReductionSelection-BzWRnAdM.js";import"./labelingInfo-DUaCGGmS.js";import"./labelUtils-D-Vz6XUw.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-Dim73_Xu.js";import"./OrderedLayer-DHZ3ySKT.js";import"./OrderByInfo-CPOGsgxp.js";import"./PortalLayer-COUJoiul.js";import"./RefreshableLayer-CAMgn8FC.js";import"./TemporalLayer-B5SR_zri.js";import"./FeatureTemplate-ByfxlPMU.js";import"./FeatureType-DL8Q85H-.js";import"./fieldProperties-4Y42RhjV.js";import"./versionUtils-DaWIDler.js";import"./styleUtils-DNZ0ENBd.js";import"./popupUtils-w3qsOQ3p.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-B_tvzuuI.js";async function nt(i,t,a){const e=d(i),r=t.toJSON();t.validationSet&&(r.validationSet=JSON.stringify(t.validationSet));const s={...r,returnEdits:!0,f:"json"},p=n({...e.query,...s}),o=m(p,{...a,method:"post"}),u=`${e.path}/validateNetworkTopology`,{data:c}=await l(u,o);return k.fromJSON(v(c))}async function lt(i,t,a){if(!t.gdbVersion)throw new f("submit-validate-network-topology-job:missing-gdb-version","version is missing");const e=d(i),r=t.toJSON();t.validationSet&&(r.validationSet=JSON.stringify(t.validationSet));const s=m(e.query,{query:n({...r,returnEdits:!0,async:!0,f:"json"}),...a,method:"post"}),p=`${e.path}/validateNetworkTopology`,{data:o}=await l(p,s);return o?o.statusUrl:null}function v(i){return i.serviceEdits&&(i.serviceEdits=i.serviceEdits.map(t=>(t.editedFeatures.spatialReference&&(t.editedFeatures.spatialReference={wkid:t.editedFeatures.spatialReference.wkid,wkt:t.editedFeatures.spatialReference.wkt,wkt2:t.editedFeatures.spatialReference.wkt2,latestWkid:t.editedFeatures.spatialReference.latestWkid,latestVcsWkid:t.editedFeatures.spatialReference.latestVcsWkid,vcsWkid:t.editedFeatures.spatialReference.vcsWkid}),t={layerId:t.id,editedFeatures:t.editedFeatures}))),i}export{v as handleValidateNetworkTopologyResult,lt as submitValidateNetworkTopologyJob,nt as validateNetworkTopology};
//# sourceMappingURL=validateNetworkTopology-DCURD_xM.js.map
