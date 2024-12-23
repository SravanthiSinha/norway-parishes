import{z as $,eI as v,ba as g,eS as T,U as f,a_ as O,p as P,eT as E,I as x,x as L,j as i,m as a,eU as S,o as F,u as M,k as R,eV as U}from"./index-XUmwAfbD.js";import{S as _}from"./MultiOriginJSONSupport-TXhd9nAR.js";import{i as j}from"./scaleUtils-DC80nXok.js";import{f as J}from"./Layer-B5mrXn3K.js";import{i as N}from"./APIKeyMixin-2z2CxhId.js";import{m as q,f as A,t as V}from"./SublayersOwner-DwNPNWPq.js";import{l as k}from"./ArcGISService-CB8oOmIt.js";import{l as z}from"./BlendLayer-Q9TmnPKi.js";import{e as Z}from"./CustomParametersMixin-NfSN27e-.js";import{b as B}from"./OperationalLayer-BeJ9mX3b.js";import{j as C}from"./PortalLayer-bO1XB4Ox.js";import{f as D}from"./RefreshableLayer-YgujgLRm.js";import{t as G}from"./ScaleRangeLayer-BxZFwKIw.js";import{l as H}from"./TemporalLayer-BphDWGgM.js";import{y as K}from"./commonProperties-D13FKckC.js";import{y as W}from"./ExportImageParameters-Dav4QaRc.js";import{t as Q}from"./imageBitmapUtils-4yh0xLqs.js";import{e as I}from"./sublayerUtils-DQu2qYJ9.js";import{t as X}from"./versionUtils-CEqFSS6L.js";import"./portalItemUtils-EEgQYIkq.js";import"./CollectionFlattener-totJwnhh.js";import"./QueryTask-DOQiLKSc.js";import"./infoFor3D-CxdEiWhp.js";import"./executeForIds-Dw-GRXgX.js";import"./featureConversionUtils-Ca7zclSe.js";import"./featureLayerUtils-DUVMzVB1.js";import"./uuid-Cl5lrJ4c.js";import"./FeatureType-CGT1PK4f.js";import"./FeatureTemplate-CO10ietR.js";import"./labelingInfo-B9KvZpaH.js";import"./labelUtils-BQ78aDcx.js";import"./LayerFloorInfo-l-qGMZ_m.js";import"./Relationship-DKjzkrdP.js";import"./serviceCapabilitiesUtils-CAKHLNR4.js";import"./popupUtils-BUO4PhcE.js";import"./jsonUtils-lTMEmXdL.js";import"./parser-CTvraIcx.js";import"./utils-CXJkEfDz.js";import"./TimeInfo-BDtP0myK.js";import"./ElevationInfo-z6ZU5G2f.js";import"./floorFilterUtils-DZ5C6FQv.js";let s=class extends z(H(G(q(A(k(B(C(_(D(N(Z(J)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new W({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch($).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const m=r.supportedImageFormatTypes;return m&&m.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,m,t){var l,d,b;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:n})=>n&&n.toArray().reverse()).toArray();let p=!1;const h=v(t.origin);if((l=this.capabilities)!=null&&l.operations.supportsExportMap&&((b=(d=this.capabilities)==null?void 0:d.exportMap)!=null&&b.supportsDynamicLayers)){if(h===g.PORTAL_ITEM){const n=this.createSublayersForOrigin("service").sublayers;p=I(o,n,g.SERVICE)}else if(h>g.PORTAL_ITEM){const n=this.createSublayersForOrigin("portal-item");p=I(o,n.sublayers,v(n.origin))}}const u=[],c={writeSublayerStructure:p,...t};let y=p||this.hasVisibleLayersForOrigin(h);o.forEach(n=>{const w=n.write({},c);u.push(w),y=y||n.originOf("visible")==="user"}),u.some(n=>Object.keys(n).length>1)&&(r.layers=u),y&&(r.visibleLayers=o.filter(n=>n.visible).map(n=>n.id))}createExportImageParameters(e,r,m,t){const o=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=j({extent:e,width:r})*o;const p=this._exportImageParameters.toJSON(),h=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},u=e==null?void 0:e.spatialReference,c=T(u);p.dpi*=o;const y={};if(t!=null&&t.timeExtent){const{start:l,end:d}=t.timeExtent.toJSON();y.time=l&&d&&l===d?""+l:`${l??"null"},${d??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:r+","+m,...p,...h,...y}}async fetchImage(e,r,m,t){const{data:o}=await this._fetchImage("image",e,r,m,t);return o}async fetchImageBitmap(e,r,m,t){const{data:o,url:p}=await this._fetchImage("blob",e,r,m,t);return Q(o,p,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:m}=await f(this.url,r),{extent:t,fullExtent:o,timeExtent:p}=m,h=t||o;return{fullExtent:h&&O.fromJSON(h),timeExtent:p&&P.fromJSON({start:p[0],end:p[1]})}}loadAll(){return E(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return X(this,e)}async _fetchImage(e,r,m,t,o){var u,c,y;const p={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,m,t,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(((u=p.query)==null?void 0:u.dynamicLayers)!=null&&!((y=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&y.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:l}=await f(h,p);return{data:l,url:h}}catch(l){throw L(l)?l:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:l})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:m}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});m&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};i([a(S("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),i([a({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),i([a()],s.prototype,"dpi",void 0),i([a()],s.prototype,"gdbVersion",void 0),i([a()],s.prototype,"imageFormat",void 0),i([F("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),i([a({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),i([a({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),i([a()],s.prototype,"imageTransparency",void 0),i([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([a({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),i([a({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([a({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([a(S("preferredTimeReference"))],s.prototype,"preferredTimeZone",void 0),i([a()],s.prototype,"sourceJSON",void 0),i([a({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),i([M("sublayers",{layers:{type:[V]},visibleLayers:{type:[U]}})],s.prototype,"writeSublayers",null),i([a({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([a({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),i([a(K)],s.prototype,"url",void 0),s=i([R("esri.layers.MapImageLayer")],s);const Ve=s;export{Ve as default};
//# sourceMappingURL=MapImageLayer-BSlFH5mZ.js.map
