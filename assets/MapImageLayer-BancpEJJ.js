import{ez as $,eA as O,z as T,eM as v,bc as f,eW as P,U as g,p as E,aX as L,eX as M,I as x,x as F,eB as R,j as a,m as o,eY as S,o as j,u as U,eZ as _,k as J}from"./index-BvuY3ppR.js";import{S as N}from"./MultiOriginJSONSupport-qT6YbIui.js";import{i as q}from"./scaleUtils-CmJ6g_fh.js";import{i as A}from"./APIKeyMixin-C6qZkXmd.js";import{m as k,f as V,t as z}from"./SublayersOwner-cZJEoGB-.js";import{l as Z}from"./ArcGISService-C0RXsBSE.js";import{e as B}from"./CustomParametersMixin-D0gtZkrL.js";import{b as W}from"./OperationalLayer-DypT4zYj.js";import{j as C}from"./PortalLayer-BIVieGhj.js";import{f as D}from"./RefreshableLayer-SGfQCDWe.js";import{l as G}from"./TemporalLayer-DKvPriGR.js";import{y as H}from"./commonProperties-DPaToaxC.js";import{y as K}from"./ExportImageParameters-Dx6biFR_.js";import{t as X}from"./imageBitmapUtils-DS2w8BPf.js";import{e as I}from"./sublayerUtils-DkudsS92.js";import{t as Y}from"./versionUtils-ClYov0oe.js";import"./portalItemUtils-CuT7pXs4.js";import"./CollectionFlattener-QrvHNFlP.js";import"./QueryTask-Dk8e_C-N.js";import"./infoFor3D-CxdEiWhp.js";import"./executeForIds-Cw1W_Am5.js";import"./featureConversionUtils-CNl7iXsn.js";import"./featureLayerUtils-CKSU1ldu.js";import"./uuid-Cl5lrJ4c.js";import"./FeatureType-CAtlLwrj.js";import"./FeatureTemplate-BnLGapc-.js";import"./labelingInfo-C4KG-2j9.js";import"./labelUtils-BTgJgVoP.js";import"./LayerFloorInfo-Yv77SVQR.js";import"./Relationship-BpbiUpxD.js";import"./serviceCapabilitiesUtils-DJpk8apz.js";import"./popupUtils-BiP7BDlO.js";import"./TimeInfo-CZamNl-W.js";import"./floorFilterUtils-DZ5C6FQv.js";let s=class extends $(G(O(k(V(Z(W(C(N(D(A(B(R)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new K({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(T).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const p=r.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,p,t){var m,d,b;if(!this.loaded||!e)return;const i=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray();let n=!1;const h=v(t.origin);if((m=this.capabilities)!=null&&m.operations.supportsExportMap&&((b=(d=this.capabilities)==null?void 0:d.exportMap)!=null&&b.supportsDynamicLayers)){if(h===f.PORTAL_ITEM){const l=this.createSublayersForOrigin("service").sublayers;n=I(i,l,f.SERVICE)}else if(h>f.PORTAL_ITEM){const l=this.createSublayersForOrigin("portal-item");n=I(i,l.sublayers,v(l.origin))}}const y=[],c={writeSublayerStructure:n,...t};let u=n||this.hasVisibleLayersForOrigin(h);i.forEach(l=>{const w=l.write({},c);y.push(w),u=u||l.originOf("visible")==="user"}),y.some(l=>Object.keys(l).length>1)&&(r.layers=y),u&&(r.visibleLayers=i.filter(l=>l.visible).map(l=>l.id))}createExportImageParameters(e,r,p,t){const i=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=q({extent:e,width:r})*i;const n=this._exportImageParameters.toJSON(),h=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},y=e==null?void 0:e.spatialReference,c=P(y);n.dpi*=i;const u={};if(t!=null&&t.timeExtent){const{start:m,end:d}=t.timeExtent.toJSON();u.time=m&&d&&m===d?""+m:`${m??"null"},${d??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:r+","+p,...n,...h,...u}}async fetchImage(e,r,p,t){const{data:i}=await this._fetchImage("image",e,r,p,t);return i}async fetchImageBitmap(e,r,p,t){const{data:i,url:n}=await this._fetchImage("blob",e,r,p,t);return X(i,n,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await g(this.url,r),{extent:t,fullExtent:i,timeExtent:n}=p,h=t||i;return{fullExtent:h&&L.fromJSON(h),timeExtent:n&&E.fromJSON({start:n[0],end:n[1]})}}loadAll(){return M(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return Y(this,e)}async _fetchImage(e,r,p,t,i){var y,c,u;const n={responseType:e,signal:(i==null?void 0:i.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,p,t,i),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(((y=n.query)==null?void 0:y.dynamicLayers)!=null&&!((u=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&u.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:m}=await g(h,n);return{data:m,url:h}}catch(m){throw F(m)?m:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:m})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:p}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};a([o(S("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),a([o({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),a([o()],s.prototype,"dpi",void 0),a([o()],s.prototype,"gdbVersion",void 0),a([o()],s.prototype,"imageFormat",void 0),a([j("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),a([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),a([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),a([o()],s.prototype,"imageTransparency",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),a([o({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),a([o({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),a([o({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),a([o(S("preferredTimeReference"))],s.prototype,"preferredTimeZone",void 0),a([o()],s.prototype,"sourceJSON",void 0),a([o({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),a([U("sublayers",{layers:{type:[z]},visibleLayers:{type:[_]}})],s.prototype,"writeSublayers",null),a([o({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),a([o({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),a([o(H)],s.prototype,"url",void 0),s=a([J("esri.layers.MapImageLayer")],s);const je=s;export{je as default};
//# sourceMappingURL=MapImageLayer-BancpEJJ.js.map
