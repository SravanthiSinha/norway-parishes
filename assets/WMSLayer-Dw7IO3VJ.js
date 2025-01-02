import{ex as Me,au as q,as as J,ap as N,aG as je,ae as Q,j as a,m as u,a_ as R,o as O,bb as Te,k as xe,I as we,c1 as M,ag as F,aT as ve,aZ as _e,hQ as Ce,M as qe,z as Ve,cz as ie,U as k,hR as Be,a9 as We,f2 as ke,$ as De,d4 as Ge,aH as Xe,A as He,b8 as Je,u as D,eV as ze,fb as Ze}from"./index-Vdm0PCas.js";import{n as Qe}from"./CollectionFlattener-CN8cPTqs.js";import{m as Ke,S as Ye}from"./MultiOriginJSONSupport-DR0AlfNW.js";import{i as se}from"./scaleUtils-Ct05ypLR.js";import{f as et}from"./Layer-vfI2MkUG.js";import{l as tt}from"./BlendLayer-BlWZsEiI.js";import{b as rt}from"./OperationalLayer-D7ZoxskL.js";import{j as nt}from"./PortalLayer-BYDxwIVB.js";import{f as it}from"./RefreshableLayer-D3dX97bd.js";import{t as st}from"./ScaleRangeLayer-D6kYzICO.js";import{l as at}from"./TemporalLayer-Bwq6ZJLq.js";import{o as z}from"./crsUtils-DAndLU68.js";import{d as ot,y as lt}from"./commonProperties-DKi4uAHT.js";import{a as ae}from"./ExportWMSImageParameters-DRphvwPm.js";import{t as ut}from"./imageBitmapUtils-BhfjiPE5.js";import"./jsonUtils-Cw0uK1Oy.js";import"./parser-D2R35t-Z.js";import"./utils-HNoWO9hO.js";import"./portalItemUtils-bWZxvl2b.js";import"./TimeInfo-CK9nEbRo.js";import"./ElevationInfo-8bL8CsLE.js";var T;let pt=0,h=T=class extends Me(Ke){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([q(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},N),q(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},N),J(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},N)])}get id(){return this._get("id")??pt++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return je(Q.ofType(T),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var t,r,n;const e=new T;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=((t=this.fullExtents)==null?void 0:t.map(i=>i.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=(r=this.sublayers)==null?void 0:r.map(i=>i.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=(n=this.spatialReferences)==null?void 0:n.map(i=>i)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([u()],h.prototype,"description",void 0),a([u({readOnly:!0})],h.prototype,"dimensions",void 0),a([u({type:R,json:{name:"extent"}})],h.prototype,"fullExtent",void 0),a([u()],h.prototype,"fullExtents",void 0),a([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),a([u({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),a([O("legendUrl",["legendUrl","legendURL"])],h.prototype,"readLegendUrl",null),a([u({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),a([u()],h.prototype,"layer",void 0),a([u()],h.prototype,"maxScale",void 0),a([u()],h.prototype,"minScale",void 0),a([u({readOnly:!0})],h.prototype,"effectiveScaleRange",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"name",void 0),a([u()],h.prototype,"parent",void 0),a([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),a([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),a([u()],h.prototype,"sublayers",void 0),a([Te("sublayers")],h.prototype,"castSublayers",null),a([u({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",void 0),a([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=T=a([xe("esri.layers.support.WMSSublayer")],h);const Z=h,oe={84:4326,83:4269,27:4267};function ct(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const b=Array.prototype.slice.call(r.childNodes).map(P=>P.textContent).join(`\r
`);throw new we("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",b)}const n=x("Capability",r),i=x("Service",r),l=n&&x("Request",n);if(!n||!i||!l)return null;const o=x("Layer",n);if(!o)return null;const m=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",s=v("Title",i,"")||v("Name",i,""),d=v("AccessConstraints",i,""),c=/^none$/i.test(d)?"":d,y=v("Abstract",i,""),f=parseInt(v("MaxWidth",i,"5000"),10),w=parseInt(v("MaxHeight",i,"5000"),10),S=ue(l,"GetMap"),I=le(l,"GetMap"),g=U(o,m,t);if(!g)return null;let K,V=0;const Ee=Array.prototype.slice.call(n.childNodes),$e=g.sublayers??[],B=b=>{b!=null&&$e.push(b)};Ee.forEach(b=>{b.nodeName==="Layer"&&(V===0?K=b:(V===1&&g.name&&(g.name="",B(U(K,m,t))),B(U(b,m,t))),V++)});let E=g.sublayers,W=g.extent;const Oe=g.fullExtents??[];if(E||(E=[]),E.length===0&&E.push(g),!W){const b=new R(E[0].extent);g.extent=b.toJSON(),W=g.extent}const Re=g.spatialReferences.length>0?g.spatialReferences:Se(g),Y=le(l,"GetFeatureInfo"),Pe=Y?ue(l,"GetFeatureInfo"):null,ee=Ie(E),Le=g.minScale||0,Ae=g.maxScale||0,te=g.dimensions??[],Ue=ee.reduce((b,P)=>b.concat(P.dimensions??[]),[]),re=te.concat(Ue).filter(Fe);let ne=null;if(re.length){const b=re.map(P=>{const{extent:L}=P;return ft(L)?L.map(j=>j.getTime()):L==null?void 0:L.map(j=>[j.min.getTime(),j.max.getTime()])}).flat(2).filter(M);ne={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...b),Math.max(...b)]}}return{copyright:c,description:y,dimensions:te,extent:W,fullExtents:Oe,featureInfoFormats:Pe,featureInfoUrl:Y,mapUrl:I,maxWidth:f,maxHeight:w,maxScale:Ae,minScale:Le,layers:ee,spatialReferences:Re,supportedImageFormatTypes:S,timeInfo:ne,title:s,version:m}}function mt(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function Se(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=Se(t);if(r.length>0)return r}return[]}function Ie(e){var r;let t=[];for(const n of e)t.push(n),(r=n.sublayers)!=null&&r.length&&(t=t.concat(Ie(n.sublayers)),delete n.sublayers);return t}function _(e,t,r){return t.getAttribute(e)??r}function dt(e,t,r,n){const i=x(e,r);return i?_(t,i,n):n}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(Ne(n)&&n.nodeName===e)return n}return null}function C(e,t){if(t==null)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];Ne(i)&&i.nodeName===e&&r.push(i)}return r}function v(e,t,r){var n;return((n=x(e,t))==null?void 0:n.textContent)??r}function A(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let m,s,d,c;r?(m=isNaN(i)?-Number.MAX_VALUE:i,s=isNaN(n)?-Number.MAX_VALUE:n,d=isNaN(o)?Number.MAX_VALUE:o,c=isNaN(l)?Number.MAX_VALUE:l):(m=isNaN(n)?-Number.MAX_VALUE:n,s=isNaN(i)?-Number.MAX_VALUE:i,d=isNaN(l)?Number.MAX_VALUE:l,c=isNaN(o)?Number.MAX_VALUE:o);const y=new F({wkid:t});return new R({xmin:m,ymin:s,xmax:d,ymax:c,spatialReference:y})}function le(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const i=x("HTTP",n);if(i){const l=x("Get",i);if(l){let o=dt("OnlineResource","xlink:href",l,null);if(o){const m=o.indexOf("&");return m!==-1&&m===o.length-1&&(o=o.slice(0,-1)),ht(o,["service","request"])}}}}}return null}function ue(e,t){const r=C("Operation",e);if(!r.length)return C("Format",x(t,e)).map(({textContent:i})=>i).filter(M);const n=[];for(const i of r)if(i.getAttribute("name")===t){const l=C("Format",i);for(const{textContent:o}of l)o!=null&&n.push(o)}return n}function pe(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:i}=n;if(i==null||i==="")return r;const l=Number(i);return isNaN(l)?r:l}function U(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},i=x("LatLonBoundingBox",e),l=x("EX_GeographicBoundingBox",e);let o=null;i&&(o=A(i,4326)),l&&(o=new R(0,0,0,0,new F({wkid:4326})),o.xmin=parseFloat(v("westBoundLongitude",l,"0")),o.ymin=parseFloat(v("southBoundLatitude",l,"0")),o.xmax=parseFloat(v("eastBoundLongitude",l,"0")),o.ymax=parseFloat(v("northBoundLatitude",l,"0"))),i||l||(o=new R(-180,-90,180,90,new F({wkid:4326}))),n.minScale=pe(e,"MaxScaleDenominator",0),n.maxScale=pe(e,"MinScaleDenominator",0);const m=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(s=>{var d;if(s.nodeName==="Name")n.name=s.textContent||"";else if(s.nodeName==="Title")n.title=s.textContent||"";else if(s.nodeName==="Abstract")n.description=s.textContent||"";else if(s.nodeName==="BoundingBox"){const c=s.getAttribute(m);if(c&&c.indexOf("EPSG:")===0){const f=parseInt(c.slice(5),10);f===0||isNaN(f)||o||(o=t==="1.3.0"?A(s,f,z(f)):A(s,f))}const y=c==null?void 0:c.indexOf(":");if(y&&y>-1){let f=parseInt(c.slice(y+1),10);f===0||isNaN(f)||(f=oe[f]??f);const w=t==="1.3.0"?A(s,f,z(f)):A(s,f);w&&n.fullExtents&&n.fullExtents.push(w)}}else if(s.nodeName===m)(((d=s.textContent)==null?void 0:d.split(" "))??[]).forEach(c=>{let y=NaN;if(c.includes(":")){const[f,w]=c.toUpperCase().split(":");f!=="CRS"&&f!=="EPSG"||(y=parseInt(w,10))}else y=parseInt(c,10);if(y!==0&&!isNaN(y)){const f=oe[y]??y;n.spatialReferences.includes(f)||n.spatialReferences.push(f)}});else if(s.nodeName!=="Style"||n.legendUrl){if(s.nodeName==="Layer"){const c=U(s,t,r);c&&(c.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(c))}}else{const c=x("LegendURL",s);if(c){const y=x("OnlineResource",c);y&&(n.legendUrl=y.getAttribute("xlink:href"))}}}),n.extent=o==null?void 0:o.toJSON(),n.dimensions=C("Dimension",e).filter(s=>s.getAttribute("name")&&s.getAttribute("units")&&s.textContent).map(s=>{const d=s.getAttribute("name"),c=s.getAttribute("units"),y=s.textContent,f=s.getAttribute("unitSymbol")??void 0,w=s.getAttribute("default")??void 0,S=_("default",s,"0")!=="0",I=_("nearestValue",s,"0")!=="0",g=_("current",s,"0")!=="0";return Fe({name:d,units:c})?{name:"time",units:"ISO8601",extent:de(y),default:de(w),multipleValues:S,nearestValue:I,current:g}:yt({name:d,units:c})?{name:"elevation",units:c,extent:ce(y),unitSymbol:f,default:ce(w),multipleValues:S,nearestValue:I}:{name:d,units:c,extent:me(y),unitSymbol:f,default:me(w),multipleValues:S,nearestValue:I}}),n}function ft(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function Ne(e){return e.nodeType===Node.ELEMENT_NODE}function yt(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function Fe(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ht(e,t){const r=[],n=ve(e);for(const i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:parseFloat(i[0]),max:parseFloat(i[1]),resolution:i.length>=3&&i[2]!=="0"?parseFloat(i[2]):void 0}}).filter(M):r.map(n=>parseFloat(n))}function me(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:i[0],max:i[1],resolution:i.length>=3&&i[2]!=="0"?i[2]:void 0}}).filter(M):r}function de(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:G(i[0]),max:G(i[1]),resolution:i.length>=3&&i[2]!=="0"?gt(i[2]):void 0}}).filter(M):r.map(n=>G(n))}function G(e){return _e.fromISO(e,{zone:Ce.utcInstance}).toJSDate()}function gt(e){const t=/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i,r=e.match(t);return r?{years:$(r[1]),months:$(r[2]),days:$(r[3]),hours:$(r[4]),minutes:$(r[5]),seconds:$(r[6])}:null}function $(e){if(!e)return 0;const t=/(?:\d+(?:\.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function X(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const bt="0000-01-01T00:00:00Z",xt="9999-12-31T23:59:59Z";function fe(e){if(!e||e.isAllTime||e.isEmpty)return;const{start:t,end:r}=e;return t&&r&&t.getTime()===r.getTime()?`${X(t)}`:`${t?X(t):bt}/${r?X(r):xt}`}const ye=new Set([102100,3857,102113,900913]),wt=new Set([3395,54004]);function vt(e,t){let r=e.wkid;return t==null?r:(r!=null&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),r!=null&&ye.has(r)?t.find(n=>ye.has(n))||t.find(n=>wt.has(n))||102100:r)}const H=new qe({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function he(e){return e==="text/html"}function ge(e){return e==="text/plain"}let p=class extends tt(at(it(st(rt(nt(Ye(et))))))){constructor(...e){super(...e),this.allSublayers=new Qe({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([q(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},N),q(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},N)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Ve).then(()=>this._fetchService(t)).then(()=>this._checkLayerValidity())),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new R({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return this.featureInfoFormats==null?null:this.featureInfoFormats.find(he)??this.featureInfoFormats.find(ge)??null}set featureInfoFormat(e){e==null?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(he(e)||ge(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new F(t.spatialReferences[0])}writeSpatialReferences(e,t){var n;const r=(n=this.spatialReference)==null?void 0:n.wkid;e&&r?(t.spatialReferences=e.filter(i=>i!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return be(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return be(t.layers,r)}writeSublayers(e,t,r,n){var o,m;t.layers=[];const i=new Map,l=e.flatten(({sublayers:s})=>s??[]);for(const s of l)if(typeof((o=s.parent)==null?void 0:o.id)=="number"){const d=i.get(s.parent.id);d!=null?d.push(s.id):i.set(s.parent.id,[s.id])}for(const s of l){const d={sublayer:s,...n},c=s.write({parentLayerId:typeof((m=s.parent)==null?void 0:m.id)=="number"?s.parent.id:-1},d);if(i.has(s.id)&&(c.sublayerIds=i.get(s.id)),!s.sublayers&&s.name){const y=s.write({},d);delete y.id,t.layers.push(y)}}t.visibleLayers=l.filter(({visible:s,sublayers:d})=>s&&!d).map(({name:s})=>s).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=ve(e);for(const i in r)/^(request|service)$/i.test(i)&&delete r[i];const n=ie(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const i=(n==null?void 0:n.pixelRatio)??1,l=se({extent:e,width:t})*i,o=new ae({layer:this,scale:l}),{xmin:m,ymin:s,xmax:d,ymax:c,spatialReference:y}=e,f=vt(y,this.spatialReferences),w=this.version==="1.3.0"&&z(f)?`${s},${m},${c},${d}`:`${m},${s},${d},${c}`,S=o.toJSON(),I=this.version==="1.3.0"?"crs":"srs";return{bbox:w,[I]:f==null||isNaN(f)?void 0:"EPSG:"+f,...S}}async fetchImage(e,t,r,n){const i=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const s=document.createElement("canvas");return s.width=t,s.height=r,s}const o=fe(n==null?void 0:n.timeExtent),m={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:o,...this.refreshParameters}),signal:n==null?void 0:n.signal};return k(i??"",m).then(s=>s.data)}async fetchImageBitmap(e,t,r,n){const i=this.mapUrl??"",l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const d=document.createElement("canvas");return d.width=t,d.height=r,d}const o=fe(n==null?void 0:n.timeExtent),m={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...l,time:o,...this.refreshParameters}),signal:n==null?void 0:n.signal},{data:s}=await k(i,m);return ut(s,i,n==null?void 0:n.signal)}fetchFeatureInfo(e,t,r,n,i){const l=se({extent:e,width:t}),o=new ae({layer:this,scale:l}),m=mt(o.visibleSublayers);if(this.featureInfoUrl==null||m==null)return Promise.resolve([]);if(this.fetchFeatureInfoFunction==null&&this.featureInfoFormat==null)return Promise.resolve([]);const s=this.version==="1.3.0"?{I:n,J:i}:{x:n,y:i},d={query_layers:m,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...s},c={...this.createExportImageParameters(e,t,r),...d},y=this._mixCustomParameters(c);return this.fetchFeatureInfoFunction!=null?this.fetchFeatureInfoFunction(y):this._defaultFetchFeatureInfoFunction(ie(this.featureInfoUrl,y))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return Be(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?F.WebMercator:new F({wkid:t});return We(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=ke(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new De({title:this.title,content:t}),n=new Ge({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){var t;if(!this.resourceInfo&&((t=this.parsedUrl)!=null&&t.path)){const{path:r,query:n}=this.parsedUrl,{data:i}=await k(r,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...n,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=ct(i)}if(this.parsedUrl){const r=new Xe(this.parsedUrl.path),{httpsDomains:n}=He.request;r.scheme!=="https"||r.port&&r.port!=="443"||!r.host||n.includes(r.host)||n.push(r.host)}this.read(this.resourceInfo,{origin:"service"})}_checkLayerValidity(){if(!this.allSublayers.length)throw new we("wmslayer:empty-layer","The layer doesn't have any sublayer")}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function St(e,t){return e.some(r=>{for(const n in r)if(Ze(r,n,null,t))return!0;return!1})}function be(e,t,r){e=e??[];const n=new Map;e.every(l=>l.id==null)&&(e=Je(e)).forEach((l,o)=>l.id=o);for(const l of e){const o=new Z;o.read(l,t),r&&!r.includes(o.name)&&(o.visible=!1),n.set(o.id,o)}const i=[];for(const l of e){const o=l.id!=null?n.get(l.id):null;if(o)if(l.parentLayerId!=null&&l.parentLayerId>=0){const m=n.get(l.parentLayerId);if(!m)continue;m.sublayers||(m.sublayers=new Q),m.sublayers.push(o)}else i.push(o)}return i}a([u({readOnly:!0})],p.prototype,"allSublayers",void 0),a([u({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),a([u({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),a([u({type:String,json:{write:!0}})],p.prototype,"copyright",void 0),a([u()],p.prototype,"description",void 0),a([u({readOnly:!0})],p.prototype,"dimensions",void 0),a([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],p.prototype,"fullExtent",void 0),a([O(["web-document","portal-item"],"fullExtent",["extent"])],p.prototype,"readFullExtentFromItemOrMap",null),a([D(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],p.prototype,"writeFullExtent",null),a([u()],p.prototype,"fullExtents",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"featureInfoFormat",null),a([u({type:[String],readOnly:!0})],p.prototype,"featureInfoFormats",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"featureInfoUrl",void 0),a([u()],p.prototype,"fetchFeatureInfoFunction",void 0),a([u({type:String,json:{origins:{"web-document":{default:"image/png",type:H.jsonValues,read:{reader:H.read,source:"format"},write:{writer:H.write,target:"format"}}}}})],p.prototype,"imageFormat",void 0),a([O("imageFormat",["supportedImageFormatTypes"])],p.prototype,"readImageFormat",null),a([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],p.prototype,"imageMaxHeight",void 0),a([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],p.prototype,"imageMaxWidth",void 0),a([u()],p.prototype,"imageTransparency",void 0),a([u(ot)],p.prototype,"legendEnabled",void 0),a([u({type:["show","hide","hide-children"]})],p.prototype,"listMode",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"mapUrl",void 0),a([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),a([u({type:["WMS"]})],p.prototype,"operationalLayerType",void 0),a([u()],p.prototype,"resourceInfo",void 0),a([u({type:F,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],p.prototype,"spatialReference",void 0),a([O(["web-document","portal-item"],"spatialReference",["spatialReferences"])],p.prototype,"readSpatialReferenceFromItemOrDocument",null),a([u({type:[ze],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],p.prototype,"spatialReferences",void 0),a([D(["web-document","portal-item"],"spatialReferences")],p.prototype,"writeSpatialReferences",null),a([u({type:Q.ofType(Z),json:{write:{target:"layers",overridePolicy(e,t,r){if(St(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],p.prototype,"sublayers",void 0),a([O(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],p.prototype,"readSublayersFromItemOrMap",null),a([O("service","sublayers",["layers"])],p.prototype,"readSublayers",null),a([D("sublayers",{layers:{type:[Z]},visibleLayers:{type:[String]}})],p.prototype,"writeSublayers",null),a([u({json:{read:!1},readOnly:!0,value:"wms"})],p.prototype,"type",void 0),a([u(lt)],p.prototype,"url",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"version",void 0),p=a([xe("esri.layers.WMSLayer")],p);const Dt=p;export{Dt as default};
//# sourceMappingURL=WMSLayer-Dw7IO3VJ.js.map
