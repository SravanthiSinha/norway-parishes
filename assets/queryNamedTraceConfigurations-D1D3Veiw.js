import{j as p,m as f,k as u,P as d,db as l,dd as y,dc as N,U as h}from"./index-Dqo4rVFT.js";import{d as C}from"./WebMap-rvZO45Zm.js";import"./ColorBackground-Nzyu0fAJ.js";import"./CollectionFlattener-CLmJgeo8.js";import"./basemapUtils-Dk28Ezgn.js";import"./TablesMixin-C4OWsqfi.js";import"./MultiOriginJSONSupport-BhZrGEJo.js";import"./portalItemUtils-Ac8FG-or.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-Cj6CAEOp.js";import"./jsonContext-BWXT5nwc.js";import"./project-krHwHmgy.js";import"./FeatureLayer-uw6lVSFB.js";import"./commonProperties-CIQ9XbBG.js";import"./FeatureLayerBase-Dhnuc8Ax.js";import"./HeightModelInfo-CA7Yxqkf.js";import"./featureLayerUtils-Dbb3Y-s1.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-DAjcgPnk.js";import"./Relationship-DMMA8qw0.js";import"./serviceCapabilitiesUtils-Dm0iLO1N.js";import"./editsZScale-D009Izoy.js";import"./APIKeyMixin-rkzJhRx8.js";import"./ArcGISService-53Saey6a.js";import"./CustomParametersMixin-DmOdFkEv.js";import"./EditBusLayer-CBu_hQA_.js";import"./FeatureEffectLayer-8PCc8C5-.js";import"./FeatureEffect-DS4Aqtbb.js";import"./FeatureReductionLayer-Ckdcx_vY.js";import"./FeatureReductionSelection-MD9NH0oY.js";import"./labelingInfo-D1oOCFyH.js";import"./labelUtils-fgvL7nsO.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-BV_RJk-k.js";import"./OrderedLayer-MyJ3gg3B.js";import"./OrderByInfo-DWUbpiAP.js";import"./PortalLayer-BfjXsne8.js";import"./RefreshableLayer-DB4Ria0p.js";import"./TemporalLayer-CQ2BpujV.js";import"./FeatureTemplate-aPPSlXg-.js";import"./FeatureType-Cv2b1uZs.js";import"./fieldProperties-B9S76JaL.js";import"./versionUtils-ecFqkX4R.js";import"./styleUtils-BqloVMsB.js";import"./popupUtils-DhCgpmm2.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-B4X_IITG.js";let o=class extends d{constructor(i){super(i),this.namedTraceConfigurations=[]}};p([f({type:[C],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],o.prototype,"namedTraceConfigurations",void 0),o=p([u("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],o);const $=o;async function dt(i,t,s){const m=l(i),r=t.toJSON();t.globalIds&&t.globalIds.length>0&&(r.globalIds=JSON.stringify(t.globalIds)),t.creators&&t.creators.length>0&&(r.creators=JSON.stringify(t.creators)),t.tags&&t.tags.length>0&&(r.tags=JSON.stringify(t.tags)),t.names&&t.names.length>0&&(r.names=JSON.stringify(t.names));const a={...r,f:"json"},e=y({...m.query,...a}),n=N(e,{...s,method:"post"}),g=`${m.path}/traceConfigurations/query`,{data:c}=await h(g,n);return $.fromJSON(c)}export{dt as queryNamedTraceConfigurations};
//# sourceMappingURL=queryNamedTraceConfigurations-D1D3Veiw.js.map
