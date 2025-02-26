import{g9 as v,fd as w,dy as S,aX as O,bz as F,V as b,j as i,m as r,k as h,ag as I,z as q,aQ as N,fl as l,I as y,o as _,gD as J,eQ as j}from"./index-U3f91iFJ.js";import C from"./FeatureLayer-BZQ38twm.js";import{y as P}from"./clientSideDefaults-D6hNtxj4.js";import"./MultiOriginJSONSupport-BnxMaCt1.js";import"./commonProperties-CwULv9TP.js";import"./FeatureLayerBase-g0mw3EXN.js";import"./HeightModelInfo-Cifv_-P-.js";import"./featureLayerUtils-DdNzm-CS.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-BoV8Oop4.js";import"./Relationship-BFJFwiOc.js";import"./serviceCapabilitiesUtils-CZna5PQ4.js";import"./editsZScale-DAPehqyH.js";import"./APIKeyMixin-ZwRBv8Bq.js";import"./ArcGISService-BOnIblqi.js";import"./CustomParametersMixin-D9nXkT8t.js";import"./EditBusLayer-BEW2QYxe.js";import"./FeatureEffectLayer-YA4vPst_.js";import"./FeatureEffect-CgJAlCDp.js";import"./FeatureReductionLayer-DSSLH_OP.js";import"./FeatureReductionSelection-L9TRPyTR.js";import"./labelingInfo-CqSOJnwT.js";import"./labelUtils-CN6gVbmf.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-DKdcF5P4.js";import"./OrderedLayer-C36WgMOq.js";import"./OrderByInfo-cgZrrpeQ.js";import"./PortalLayer-aOZD8pzD.js";import"./portalItemUtils-DiwbiVEJ.js";import"./RefreshableLayer-DD1M1W5P.js";import"./TemporalLayer-DcVjH4NI.js";import"./TimeInfo-1o5IA5_-.js";import"./FeatureTemplate-QORAHLY0.js";import"./FeatureType-dRROuNgU.js";import"./fieldProperties-BLajaGmD.js";import"./versionUtils-Dbqys5pu.js";import"./styleUtils-CRf7NAwm.js";import"./popupUtils-DpnLXvM9.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-D6exRNM4.js";let n=class extends v{constructor(e){super(e),this.type="csv",this.refresh=w(async t=>{await this.load();const{extent:o,timeExtent:a}=await this._connection.invoke("refresh",t);return o&&(this.sourceJSON.extent=o),a&&(this.sourceJSON.timeInfo.timeExtent=[a.start,a.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return S.fromJSON(o)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:o.count,extent:O.fromJSON(o.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await F("CSVSourceWorker",{strategy:b("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{url:t,delimiter:o,fields:a,latitudeField:m,longitudeField:f,spatialReference:u,timeInfo:d}=this.loadOptions,c=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:a==null?void 0:a.map(g=>g.toJSON()),latitudeField:m,longitudeField:f,spatialReference:u==null?void 0:u.toJSON(),timeInfo:d==null?void 0:d.toJSON()}},{signal:e});this.locationInfo=c.locationInfo,this.sourceJSON=c.layerDefinition,this.delimiter=c.delimiter}};i([r()],n.prototype,"type",void 0),i([r()],n.prototype,"loadOptions",void 0),i([r()],n.prototype,"customParameters",void 0),i([r()],n.prototype,"locationInfo",void 0),i([r()],n.prototype,"sourceJSON",void 0),i([r()],n.prototype,"delimiter",void 0),n=i([h("esri.layers.graphics.sources.CSVSource")],n);function p(e,t){throw new y(t,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let s=class extends C{constructor(...e){super(...e),this.geometryType="point",this.capabilities=P(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=I.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,o=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(q).then(async()=>this.initLayerProperties(await this.createGraphicsSource(t)));return this.addResolvingPromise(o),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(e,t){var o,a;return t.showLabels!=null?t.showLabels:!!((a=(o=t.layerDefinition)==null?void 0:o.drawingInfo)!=null&&a.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const t=N(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async createGraphicsSource(e){const t=new n({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(l.from(e)||this.createQuery())).then(o=>{if(o!=null&&o.features)for(const a of o.features)a.layer=a.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(l.from(e)||this.createQuery()))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(l.from(e)||this.createQuery()))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(l.from(e)||this.createQuery()))}read(e,t){super.read(e,t),t&&t.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new y("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return p(this,"csv-layer:save")}async saveAs(e,t){return p(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],s.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],s.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),i([_("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],s.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],s.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],s.prototype,"operationalLayerType",void 0),i([r()],s.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],s.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:n,readOnly:!0})],s.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],s.prototype,"type",void 0),i([r({json:{read:j,write:{isRequired:!0,ignoreOrigin:!0,writer:J}}})],s.prototype,"url",null),s=i([h("esri.layers.CSVLayer")],s);const Se=s;export{Se as default};
//# sourceMappingURL=CSVLayer-Yg_Em8K7.js.map
