import{ey as $,ez as O,z as T,eL as v,ba as g,eV as P,U as f,aX as L,p as E,eW as F,I as x,x as M,j as a,m as o,eX as S,o as R,u as j,k as U,eY as _,eF as J}from"./index-Du44_A8J.js";import{S as N}from"./MultiOriginJSONSupport-9C55E1A7.js";import{i as q}from"./scaleUtils-DosC-pxb.js";import{i as A}from"./APIKeyMixin-DkioXOJh.js";import{m as V,f as k,t as z}from"./SublayersOwner-DfTjOHFk.js";import{l as W}from"./ArcGISService-B0vN2MGD.js";import{e as Z}from"./CustomParametersMixin-MXEEEQ7u.js";import{b as B}from"./OperationalLayer-DzWDKpRJ.js";import{j as C}from"./PortalLayer-D0ThxHis.js";import{f as D}from"./RefreshableLayer-WGNO3V1X.js";import{l as G}from"./TemporalLayer-CxDKIA9q.js";import{y as H}from"./commonProperties-BK1AfWBs.js";import{y as K}from"./ExportImageParameters-CR_Hy6DG.js";import{t as X}from"./imageBitmapUtils-ZB3ncjAg.js";import{e as I}from"./sublayerUtils-Bm3L2K6Y.js";import{t as Y}from"./versionUtils-D5ibMXOg.js";import"./portalItemUtils-BEbjr1pu.js";import"./CollectionFlattener-C_SkK2OR.js";import"./QueryTask-D147tU9J.js";import"./infoFor3D-CxdEiWhp.js";import"./executeForIds-CHK6CluD.js";import"./featureConversionUtils-DZlLcsaX.js";import"./featureLayerUtils-31c3e_wZ.js";import"./uuid-Cl5lrJ4c.js";import"./FeatureType-CT9wGYTt.js";import"./FeatureTemplate-CPKD3Kwx.js";import"./labelingInfo-DdMTUeRH.js";import"./labelUtils-CqoQ4tTv.js";import"./LayerFloorInfo-RaJcB56g.js";import"./Relationship-BXPxcFQW.js";import"./serviceCapabilitiesUtils-m9_-oJzc.js";import"./popupUtils-DagVpAP6.js";import"./TimeInfo-CUE_bnyo.js";import"./floorFilterUtils-DZ5C6FQv.js";let s=class extends $(G(O(V(k(W(B(C(N(D(A(Z(J)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new K({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(T).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const l=r.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,l,t){var m,d,b;if(!this.loaded||!e)return;const i=e.slice().reverse().flatten(({sublayers:p})=>p&&p.toArray().reverse()).toArray();let n=!1;const h=v(t.origin);if((m=this.capabilities)!=null&&m.operations.supportsExportMap&&((b=(d=this.capabilities)==null?void 0:d.exportMap)!=null&&b.supportsDynamicLayers)){if(h===g.PORTAL_ITEM){const p=this.createSublayersForOrigin("service").sublayers;n=I(i,p,g.SERVICE)}else if(h>g.PORTAL_ITEM){const p=this.createSublayersForOrigin("portal-item");n=I(i,p.sublayers,v(p.origin))}}const u=[],c={writeSublayerStructure:n,...t};let y=n||this.hasVisibleLayersForOrigin(h);i.forEach(p=>{const w=p.write({},c);u.push(w),y=y||p.originOf("visible")==="user"}),u.some(p=>Object.keys(p).length>1)&&(r.layers=u),y&&(r.visibleLayers=i.filter(p=>p.visible).map(p=>p.id))}createExportImageParameters(e,r,l,t){const i=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=q({extent:e,width:r})*i;const n=this._exportImageParameters.toJSON(),h=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},u=e==null?void 0:e.spatialReference,c=P(u);n.dpi*=i;const y={};if(t!=null&&t.timeExtent){const{start:m,end:d}=t.timeExtent.toJSON();y.time=m&&d&&m===d?""+m:`${m??"null"},${d??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:r+","+l,...n,...h,...y}}async fetchImage(e,r,l,t){const{data:i}=await this._fetchImage("image",e,r,l,t);return i}async fetchImageBitmap(e,r,l,t){const{data:i,url:n}=await this._fetchImage("blob",e,r,l,t);return X(i,n,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await f(this.url,r),{extent:t,fullExtent:i,timeExtent:n}=l,h=t||i;return{fullExtent:h&&L.fromJSON(h),timeExtent:n&&E.fromJSON({start:n[0],end:n[1]})}}loadAll(){return F(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return Y(this,e)}async _fetchImage(e,r,l,t,i){var u,c,y;const n={responseType:e,signal:(i==null?void 0:i.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,l,t,i),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(((u=n.query)==null?void 0:u.dynamicLayers)!=null&&!((y=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&y.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:m}=await f(h,n);return{data:m,url:h}}catch(m){throw M(m)?m:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:m})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:l}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};a([o(S("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),a([o({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),a([o()],s.prototype,"dpi",void 0),a([o()],s.prototype,"gdbVersion",void 0),a([o()],s.prototype,"imageFormat",void 0),a([R("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),a([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),a([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),a([o()],s.prototype,"imageTransparency",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),a([o({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),a([o({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),a([o({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),a([o(S("preferredTimeReference"))],s.prototype,"preferredTimeZone",void 0),a([o()],s.prototype,"sourceJSON",void 0),a([o({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),a([j("sublayers",{layers:{type:[z]},visibleLayers:{type:[_]}})],s.prototype,"writeSublayers",null),a([o({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),a([o({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),a([o(H)],s.prototype,"url",void 0),s=a([U("esri.layers.MapImageLayer")],s);const je=s;export{je as default};
//# sourceMappingURL=MapImageLayer-CrpIoBYq.js.map