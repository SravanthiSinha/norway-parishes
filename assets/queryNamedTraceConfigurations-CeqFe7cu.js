import{j as p,m as f,k as u,P as d,db as l,dd as y,dc as N,U as h}from"./index-BfLS464G.js";import{d as C}from"./WebMap-DEffliVq.js";import"./ColorBackground-B-aHDRbY.js";import"./CollectionFlattener-X0S8zgtM.js";import"./basemapUtils-CATGu2F4.js";import"./TablesMixin-CFytb7-C.js";import"./MultiOriginJSONSupport-BwKTB8uK.js";import"./portalItemUtils-EuqfQTt4.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-lv3vrX4Z.js";import"./jsonContext-CK1OtGbn.js";import"./project-CMwThrYg.js";import"./FeatureLayer-CDpKvV3l.js";import"./commonProperties-BYkEjETv.js";import"./FeatureLayerBase-BGV1qseJ.js";import"./HeightModelInfo-DzK0H4Qy.js";import"./featureLayerUtils-Bgc5F16E.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-D1gNlHjm.js";import"./Relationship-D4VApXlb.js";import"./serviceCapabilitiesUtils-C_-03Ql-.js";import"./editsZScale-BK19AzRt.js";import"./APIKeyMixin-CFihdbDi.js";import"./ArcGISService-BirHaw4A.js";import"./CustomParametersMixin-D4pNVDVF.js";import"./EditBusLayer-gmXab_6V.js";import"./FeatureEffectLayer-rz1La56W.js";import"./FeatureEffect-DNhvMAVm.js";import"./FeatureReductionLayer-CRQCzTpq.js";import"./FeatureReductionSelection-CwDWpKst.js";import"./labelingInfo-CULBC2Dz.js";import"./labelUtils-BlsYivSn.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-BUUpUxXC.js";import"./OrderedLayer-CTWEJHsD.js";import"./OrderByInfo-Baayvtrh.js";import"./PortalLayer-tuvCU0Ht.js";import"./RefreshableLayer-CHgQeylb.js";import"./TemporalLayer-CnKbOiyq.js";import"./FeatureTemplate-CxRsgMWf.js";import"./FeatureType-C2bGC672.js";import"./fieldProperties-D3adeTWh.js";import"./versionUtils-BzrJYu22.js";import"./styleUtils-C4RcdAhf.js";import"./popupUtils-B9Xf_bU6.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-igEAMhwY.js";let o=class extends d{constructor(i){super(i),this.namedTraceConfigurations=[]}};p([f({type:[C],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],o.prototype,"namedTraceConfigurations",void 0),o=p([u("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],o);const $=o;async function dt(i,t,s){const m=l(i),r=t.toJSON();t.globalIds&&t.globalIds.length>0&&(r.globalIds=JSON.stringify(t.globalIds)),t.creators&&t.creators.length>0&&(r.creators=JSON.stringify(t.creators)),t.tags&&t.tags.length>0&&(r.tags=JSON.stringify(t.tags)),t.names&&t.names.length>0&&(r.names=JSON.stringify(t.names));const a={...r,f:"json"},e=y({...m.query,...a}),n=N(e,{...s,method:"post"}),g=`${m.path}/traceConfigurations/query`,{data:c}=await h(g,n);return $.fromJSON(c)}export{dt as queryNamedTraceConfigurations};
//# sourceMappingURL=queryNamedTraceConfigurations-CeqFe7cu.js.map
