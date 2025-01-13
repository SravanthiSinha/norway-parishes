import{M as g,j as t,m as r,k as m,P as l,ag as v,u as f,de as j}from"./index-DDxdo46s.js";import{o as p}from"./NetworkElement-DtUAUoto.js";import{s as b}from"./WebMap-DC68hX_N.js";import"./ColorBackground-DZ_UplDt.js";import"./CollectionFlattener-DBQodO_s.js";import"./basemapUtils-BrwFabtx.js";import"./TablesMixin-CcZvrG7r.js";import"./MultiOriginJSONSupport-DH-_1jFb.js";import"./portalItemUtils-DGed7QpK.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-BkOk1ohF.js";import"./jsonContext-CCTN9Exf.js";import"./project-sduSdBIb.js";import"./FeatureLayer-BCkeZWXK.js";import"./commonProperties-CLGtlLEy.js";import"./FeatureLayerBase-CcbPBOYQ.js";import"./HeightModelInfo-CmLu2eDN.js";import"./featureLayerUtils-C8f3q5cQ.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-CRJajHsp.js";import"./Relationship-CsbtL6sv.js";import"./serviceCapabilitiesUtils-CJttKYK4.js";import"./editsZScale-DopOeg-F.js";import"./APIKeyMixin-CVeo6Rgf.js";import"./ArcGISService-4tr88Gpe.js";import"./CustomParametersMixin-6UloDod9.js";import"./EditBusLayer-DTadrHS8.js";import"./FeatureEffectLayer-Dggod_L8.js";import"./FeatureEffect-DzWAPSYJ.js";import"./FeatureReductionLayer-Br_FwIoi.js";import"./FeatureReductionSelection-BaXXdk0q.js";import"./labelingInfo-hoKMMytf.js";import"./labelUtils-Cjr1nLDe.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-Be8C9wCF.js";import"./OrderedLayer-BwYjUQ1j.js";import"./OrderByInfo-DjdUInwC.js";import"./PortalLayer-DwMFmz11.js";import"./RefreshableLayer-DI2uYJsN.js";import"./TemporalLayer-CxsPhY6P.js";import"./FeatureTemplate-BTvdXtvH.js";import"./FeatureType-fKP-dBav.js";import"./fieldProperties-DYI8D0XO.js";import"./versionUtils-BtoOcaEI.js";import"./styleUtils-DsvInlGd.js";import"./popupUtils-CrU7mRLo.js";import"./AlphaCutoff-UcccL64p.js";const a=new g({startingPoint:"starting-point",barrier:"barrier"});let i=class extends l{constructor(e){super(e),this.globalId=null,this.isFilterBarrier=!1,this.percentAlong=null,this.terminalId=null,this.type=null}};t([r({type:String,json:{write:!0}})],i.prototype,"globalId",void 0),t([r({type:Boolean,json:{write:!0}})],i.prototype,"isFilterBarrier",void 0),t([r({type:Number,json:{write:!0}})],i.prototype,"percentAlong",void 0),t([r({type:Number,json:{write:!0}})],i.prototype,"terminalId",void 0),t([r({type:a.apiValues,json:{type:a.jsonValues,read:{reader:a.read,source:"traceLocationType"},write:{writer:a.write,target:"traceLocationType"}}})],i.prototype,"type",void 0),i=t([m("esri.rest.networks.support.TraceLocation")],i);const h=i;var s;let o=s=class extends l{static from(e){return j(s,e)}constructor(e){super(e),this.namedTraceConfigurationGlobalId=null,this.gdbVersion=null,this.traceLocations=[],this.moment=null,this.outSpatialReference=null,this.traceConfiguration=null,this.resultTypes=null,this.traceType=null}writeOutSR(e,n,u){if(e!=null){const{wkid:d,latestWkid:y,wkt:c,wkt2:w}=e;n[u]=JSON.stringify({wkid:d??void 0,latestWkid:y??void 0,wkt:c??void 0,wkt2:w??void 0})}}};t([r({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],o.prototype,"namedTraceConfigurationGlobalId",void 0),t([r({type:String,json:{write:!0}})],o.prototype,"gdbVersion",void 0),t([r({type:[h],json:{write:!0}})],o.prototype,"traceLocations",void 0),t([r({type:Date,json:{type:Number,write:{writer:(e,n)=>{n.moment=e?e.getTime():null}}}})],o.prototype,"moment",void 0),t([r({type:v,json:{write:{allowNull:!0,target:"outSR"}}})],o.prototype,"outSpatialReference",void 0),t([f("outSpatialReference")],o.prototype,"writeOutSR",null),t([r({type:b,json:{write:!0}})],o.prototype,"traceConfiguration",void 0),t([r({type:[Object],json:{write:!0}})],o.prototype,"resultTypes",void 0),t([r({type:p.apiValues,json:{type:p.jsonValues,read:p.read,write:p.write}})],o.prototype,"traceType",void 0),o=s=t([m("esri.rest.networks.support.TraceParameters")],o);const wt=o;export{wt as default};
//# sourceMappingURL=TraceParameters-Bk1-2Y7T.js.map
