import{j as p,m as f,k as u,P as d,db as l,dd as y,dc as N,U as h}from"./index-D2fbPmv2.js";import{d as C}from"./WebMap-BhtvOjft.js";import"./ColorBackground-Cik_pyky.js";import"./CollectionFlattener-CqhMwHE_.js";import"./basemapUtils-DjbuSOSo.js";import"./TablesMixin-BcLnbFXT.js";import"./MultiOriginJSONSupport-CiWwiGwF.js";import"./portalItemUtils-CSjrXciv.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-L4LVijOt.js";import"./jsonContext-BypIdMOa.js";import"./project-CM04MxmI.js";import"./FeatureLayer-Cg4Vgo3u.js";import"./commonProperties-ChaS5GS0.js";import"./FeatureLayerBase-BPGNB2iI.js";import"./HeightModelInfo-CjsnL3DZ.js";import"./featureLayerUtils-BtbQaBiM.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-BiEEzrkH.js";import"./Relationship-27oMYSmz.js";import"./serviceCapabilitiesUtils-BAOd9OXC.js";import"./editsZScale-iDmUiXZ8.js";import"./APIKeyMixin-CajJ21HV.js";import"./ArcGISService-CaAm5zrR.js";import"./CustomParametersMixin-BL7lOS1M.js";import"./EditBusLayer-FZrvniEK.js";import"./FeatureEffectLayer-CZw_HTcm.js";import"./FeatureEffect-Czq-c2-6.js";import"./FeatureReductionLayer-DzjlsWq3.js";import"./FeatureReductionSelection-BgSaOl63.js";import"./labelingInfo-CDqcuavl.js";import"./labelUtils-CrPVFGbX.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-OfS7ofUf.js";import"./OrderedLayer-vvdHsric.js";import"./OrderByInfo-Bn_veDWs.js";import"./PortalLayer-CvjKt5oM.js";import"./RefreshableLayer-CStq_Naj.js";import"./TemporalLayer-DsJdvu2C.js";import"./FeatureTemplate-2QHHDR2S.js";import"./FeatureType-rV34jsVE.js";import"./fieldProperties-DwX3a7Tw.js";import"./versionUtils-B64gp-CJ.js";import"./styleUtils-B6is7UMm.js";import"./popupUtils-DKk4nxaP.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-CgWTEwLL.js";let o=class extends d{constructor(i){super(i),this.namedTraceConfigurations=[]}};p([f({type:[C],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],o.prototype,"namedTraceConfigurations",void 0),o=p([u("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],o);const $=o;async function dt(i,t,s){const m=l(i),r=t.toJSON();t.globalIds&&t.globalIds.length>0&&(r.globalIds=JSON.stringify(t.globalIds)),t.creators&&t.creators.length>0&&(r.creators=JSON.stringify(t.creators)),t.tags&&t.tags.length>0&&(r.tags=JSON.stringify(t.tags)),t.names&&t.names.length>0&&(r.names=JSON.stringify(t.names));const a={...r,f:"json"},e=y({...m.query,...a}),n=N(e,{...s,method:"post"}),g=`${m.path}/traceConfigurations/query`,{data:c}=await h(g,n);return $.fromJSON(c)}export{dt as queryNamedTraceConfigurations};
//# sourceMappingURL=queryNamedTraceConfigurations-CPWzCKwo.js.map
