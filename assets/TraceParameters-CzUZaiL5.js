import{M as g,j as t,m as r,k as m,P as l,ag as v,u as f,de as j}from"./index-Du44_A8J.js";import{o as p}from"./NetworkElement-BiASxGsQ.js";import{s as b}from"./WebMap-DYpQayzV.js";import"./ColorBackground-DLR35STU.js";import"./CollectionFlattener-C_SkK2OR.js";import"./basemapUtils-DhbQ_DRF.js";import"./TablesMixin-Q8kcPu97.js";import"./MultiOriginJSONSupport-9C55E1A7.js";import"./portalItemUtils-BEbjr1pu.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-CUE_bnyo.js";import"./jsonContext-BZ8M6Jns.js";import"./project-DuNx7rKP.js";import"./FeatureLayer-Cmbe5QUd.js";import"./commonProperties-BK1AfWBs.js";import"./FeatureLayerBase-Lwh763a1.js";import"./HeightModelInfo-B1CAuLNS.js";import"./featureLayerUtils-31c3e_wZ.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-RaJcB56g.js";import"./Relationship-BXPxcFQW.js";import"./serviceCapabilitiesUtils-m9_-oJzc.js";import"./editsZScale-BTyrCXaU.js";import"./APIKeyMixin-DkioXOJh.js";import"./ArcGISService-B0vN2MGD.js";import"./CustomParametersMixin-MXEEEQ7u.js";import"./EditBusLayer-B4jg0q7p.js";import"./FeatureEffectLayer-BzcW7R1Q.js";import"./FeatureEffect-CnClIzlo.js";import"./FeatureReductionLayer-dnX54yRr.js";import"./FeatureReductionSelection-DpYTGJoh.js";import"./labelingInfo-DdMTUeRH.js";import"./labelUtils-CqoQ4tTv.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-DzWDKpRJ.js";import"./OrderedLayer-BZsNZEvc.js";import"./OrderByInfo-BaznYmtR.js";import"./PortalLayer-D0ThxHis.js";import"./RefreshableLayer-WGNO3V1X.js";import"./TemporalLayer-CxDKIA9q.js";import"./FeatureTemplate-CPKD3Kwx.js";import"./FeatureType-CT9wGYTt.js";import"./fieldProperties-Cm-I8Wya.js";import"./versionUtils-D5ibMXOg.js";import"./styleUtils-C_RlL1q0.js";import"./popupUtils-DagVpAP6.js";import"./AlphaCutoff-UcccL64p.js";const a=new g({startingPoint:"starting-point",barrier:"barrier"});let i=class extends l{constructor(e){super(e),this.globalId=null,this.isFilterBarrier=!1,this.percentAlong=null,this.terminalId=null,this.type=null}};t([r({type:String,json:{write:!0}})],i.prototype,"globalId",void 0),t([r({type:Boolean,json:{write:!0}})],i.prototype,"isFilterBarrier",void 0),t([r({type:Number,json:{write:!0}})],i.prototype,"percentAlong",void 0),t([r({type:Number,json:{write:!0}})],i.prototype,"terminalId",void 0),t([r({type:a.apiValues,json:{type:a.jsonValues,read:{reader:a.read,source:"traceLocationType"},write:{writer:a.write,target:"traceLocationType"}}})],i.prototype,"type",void 0),i=t([m("esri.rest.networks.support.TraceLocation")],i);const h=i;var s;let o=s=class extends l{static from(e){return j(s,e)}constructor(e){super(e),this.namedTraceConfigurationGlobalId=null,this.gdbVersion=null,this.traceLocations=[],this.moment=null,this.outSpatialReference=null,this.traceConfiguration=null,this.resultTypes=null,this.traceType=null}writeOutSR(e,n,u){if(e!=null){const{wkid:d,latestWkid:y,wkt:c,wkt2:w}=e;n[u]=JSON.stringify({wkid:d??void 0,latestWkid:y??void 0,wkt:c??void 0,wkt2:w??void 0})}}};t([r({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],o.prototype,"namedTraceConfigurationGlobalId",void 0),t([r({type:String,json:{write:!0}})],o.prototype,"gdbVersion",void 0),t([r({type:[h],json:{write:!0}})],o.prototype,"traceLocations",void 0),t([r({type:Date,json:{type:Number,write:{writer:(e,n)=>{n.moment=e?e.getTime():null}}}})],o.prototype,"moment",void 0),t([r({type:v,json:{write:{allowNull:!0,target:"outSR"}}})],o.prototype,"outSpatialReference",void 0),t([f("outSpatialReference")],o.prototype,"writeOutSR",null),t([r({type:b,json:{write:!0}})],o.prototype,"traceConfiguration",void 0),t([r({type:[Object],json:{write:!0}})],o.prototype,"resultTypes",void 0),t([r({type:p.apiValues,json:{type:p.jsonValues,read:p.read,write:p.write}})],o.prototype,"traceType",void 0),o=s=t([m("esri.rest.networks.support.TraceParameters")],o);const wt=o;export{wt as default};
//# sourceMappingURL=TraceParameters-CzUZaiL5.js.map
