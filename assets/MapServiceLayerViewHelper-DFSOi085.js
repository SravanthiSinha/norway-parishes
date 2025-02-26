const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-U3f91iFJ.js","assets/index-Jib82o7I.css"])))=>i.map(i=>d[i]);
import{cn as K,eW as Y,bb as Q,O as J,df as ee,j as n,m as u,bA as te,fk as re,u as z,aX as k,ag as se,p as ie,k as N,d6 as q,gL as oe,o as ae,dc as ne,d5 as le,de as ue,dd as pe,U as ye,aq as B,an as ce,fd as he,ar as de,I as T,ae as fe,c4 as A,eE as L,_ as me,eV as ge,b2 as we,V as be,w as M,je as ve,el as xe}from"./index-U3f91iFJ.js";import{H as $e}from"./languageUtils-DlXdGxDZ.js";import{i as Se,o as Fe}from"./scaleUtils--Muj6ZP_.js";import{n as V}from"./floorFilterUtils-DZ5C6FQv.js";import{o as U}from"./drapedUtils-GkeBZJtS.js";import{n as je}from"./sublayerUtils-oi1MV5bA.js";import{n as Oe,p as Ee}from"./popupUtils-lS-TZd_a.js";function Ie(t,e){const{dpi:s,gdbVersion:o,geometry:r,geometryPrecision:a,height:i,historicMoment:c,layerOption:h,mapExtent:l,maxAllowableOffset:p,returnFieldName:y,returnGeometry:m,returnUnformattedValues:x,returnZ:$,spatialReference:j,timeExtent:f,tolerance:F,width:w}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:I}=Pe(t),P=(e==null?void 0:e.geometry)!=null?e.geometry:null,v={historicMoment:c,geometryPrecision:a,maxAllowableOffset:p,returnFieldName:y,returnGeometry:m,returnUnformattedValues:x,returnZ:$,tolerance:F},O=(P==null?void 0:P.toJSON())||r;v.imageDisplay=`${w},${i},${s}`,o&&(v.gdbVersion=o),O&&(delete O.spatialReference,v.geometry=JSON.stringify(O),v.geometryType=K(O));const G=j??(O==null?void 0:O.spatialReference)??(l==null?void 0:l.spatialReference);if(G&&(v.sr=Y(G)),v.time=f?[f.start,f.end].join(","):null,l){const{xmin:Z,ymin:W,xmax:C,ymax:X}=l;v.mapExtent=`${Z},${W},${C},${X}`}return b&&(v.layerDefs=b),g&&!b&&(v.dynamicLayers=g),v.layers=h==="popup"?"visible":h,I&&!g&&(v.layers+=`:${I.join(",")}`),v}function Pe(t){var $,j;const{mapExtent:e,floors:s,width:o,sublayers:r,layerIds:a,layerOption:i,gdbVersion:c}=t,h=(j=($=r==null?void 0:r.find(f=>f.layer!=null))==null?void 0:$.layer)==null?void 0:j.serviceSublayers,l=i==="popup",p={},y=Se({extent:e,width:o,spatialReference:e==null?void 0:e.spatialReference}),m=[],x=f=>{const F=y===0,w=f.minScale===0||y<=f.minScale,g=f.maxScale===0||y>=f.maxScale;if(f.visible&&(F||w&&g))if(f.sublayers)f.sublayers.forEach(x);else{if((a==null?void 0:a.includes(f.id))===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;m.unshift(f)}};if(r==null||r.forEach(x),r&&!m.length)p.layerIds=[];else{const f=je(m,h,c),F=m.map(w=>{const g=V(s,w);return w.toExportImageJSON(g)});if(f)p.dynamicLayers=JSON.stringify(F);else{if(r){let g=m.map(({id:b})=>b);a&&(g=g.filter(b=>a.includes(b))),p.layerIds=g}else a!=null&&a.length&&(p.layerIds=a);const w=Re(s,m);if(w!=null&&w.length){const g={};for(const b of w)b.definitionExpression&&(g[b.id]=b.definitionExpression);Object.keys(g).length&&(p.layerDefs=JSON.stringify(g))}}}return p}function Re(t,e){const s=!!(t!=null&&t.length),o=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return o.length?o.map(r=>{const a=V(t,r),i=Q(a,r.definitionExpression);return{id:r.id,definitionExpression:i??void 0}}):null}var _;let d=_=class extends J{static from(t){return ee(_,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};n([u({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),n([u()],d.prototype,"floors",void 0),n([u({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),n([u({types:re,json:{read:te,write:!0}})],d.prototype,"geometry",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"height",void 0),n([u({type:Date})],d.prototype,"historicMoment",void 0),n([z("historicMoment")],d.prototype,"writeHistoricMoment",null),n([u({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),n([u({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),n([u({type:k,json:{write:!0}})],d.prototype,"mapExtent",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),n([u({type:se,json:{write:!0}})],d.prototype,"spatialReference",void 0),n([u()],d.prototype,"sublayers",void 0),n([u({type:ie,json:{write:!0}})],d.prototype,"timeExtent",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=_=n([N("esri.rest.support.IdentifyParameters")],d);const D=d;let S=class extends J{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return q.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:o}=t;s&&(e.attributes={...s}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=oe.toJSON(o.type))}};n([u({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),n([u({type:q})],S.prototype,"feature",void 0),n([ae("feature",["attributes","geometry"])],S.prototype,"readFeature",null),n([z("feature")],S.prototype,"writeFeature",null),n([u({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),n([u({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=n([N("esri.rest.support.IdentifyResult")],S);const _e=S;async function Ne(t,e,s){const o=(e=Ge(e)).geometry?[e.geometry]:[],r=ne(t);return r.path+="/identify",le(o).then(a=>{const i=Ie(e,{geometry:a==null?void 0:a[0]}),c=ue({...r.query,f:"json",...i}),h=pe(c,s);return ye(r.path,h).then(Ve).then(l=>Te(l,e.sublayers))})}function Ve(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>_e.fromJSON(s)),e}function Ge(t){return t=D.from(t)}function Te(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function o(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}const H=B();let R=null;function De(t,e){return e.type==="tile"||e.type==="map-image"}let E=class extends ce{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=he(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([de(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var i,c;const{layerView:{layer:s,view:{scale:o}}}=this;if(!t)throw new T("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Ae(s.sublayers,o,e);if(!r.length)return[];const a=await Me(s,r);if(!((((c=(i=s.capabilities)==null?void 0:i.operations)==null?void 0:c.supportsIdentify)??!0)&&s.version>=10.5)&&!a)throw new T("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!t||!e)return H;let s=$e(t)?[t]:fe.isCollection(t)?t.toArray():Array.isArray(t)?t:[];if(s=s==null?void 0:s.filter(A),((s==null?void 0:s.length)??0)===0)return H;for(const o of s){const{sourceLayer:r}=o;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(o.visible=!1)}return e.addMany(s),B(()=>e.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:o}=this;if(s&&o)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async i=>{var l;i||(i=new L);let c=null;const h="visualVariables"in a?(l=a.visualVariables)==null?void 0:l.find(p=>p.type==="size"):void 0;h&&(R||(R=(await me(async()=>{const{getSize:p}=await import("./index-U3f91iFJ.js").then(y=>y.pm);return{getSize:p}},__vite__mapDeps([0,1]))).getSize),c=R(h,r,{view:e.type,scale:e.scale,shape:i.type==="simple-marker"?i.style:null})),c||(c="width"in i&&"height"in i&&i.width!=null&&i.height!=null?Math.max(i.width,i.height):"size"in i?i.size:16),s.includes(r)&&(r.symbol=new L({style:"square",size:c,xoffset:"xoffset"in i?i.xoffset:0,yoffset:"yoffset"in i?i.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(o!=null&&o.length)||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),i=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>a){const p=l.sourceLayer;ge(i,p,()=>new Map).set(l.getObjectId(),l)}const c=Array.from(i,([l,p])=>{const y=l.createQuery();return y.objectIds=[...p.keys()],y.outFields=[l.objectIdField],y.returnGeometry=!0,y.maxAllowableOffset=a,y.outSpatialReference=s.spatialReference,l.queryFeatures(y)}),h=await Promise.all(c);if(!this.destroyed)for(const{features:l}of h)for(const p of l){const y=p.sourceLayer,m=i.get(y).get(p.getObjectId());m&&o.includes(m)&&(m.geometry=p.geometry,r(m,"geometry"),this._featuresResolutions.set(m,a))}}_getTargetResolution(t){const e=t*we(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const o=await this._createIdentifyParameters(t,e,s);if(o==null)return[];const{results:r}=await Ne(this.layerView.layer.parsedUrl,o,s);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,s){const{floors:o,layer:r,timeExtent:a,view:{spatialReference:i,scale:c}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(s).catch(()=>{})));const h=Math.min(be("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?U({renderer:$.renderer,pointerType:s==null?void 0:s.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,h),p=Fe(c,i),y=Math.round(l.width/p),m=new k({xmin:l.center.x-p*y,ymin:l.center.y-p*y,xmax:l.center.x+p*y,ymax:l.center.y+p*y,spatialReference:l.spatialReference});return new D({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:y,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:i,sublayers:r.sublayers,timeExtent:a,tolerance:h,width:y})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:o,timeExtent:r}}=this,a=e.map(async({sublayer:i,popupTemplate:c})=>{var b;if(await i.load(s).catch(()=>{}),i.capabilities&&!i.capabilities.operations.supportsQuery)return[];const h=i.createQuery(),l=U({renderer:i.renderer,pointerType:s==null?void 0:s.pointerType}),p=this.createFetchPopupFeaturesQueryGeometry(t,l),y=new Set,[m]=await Promise.all([Oe(i,c),(b=i.renderer)==null?void 0:b.collectRequiredFields(y,i.fieldsIndex)]);M(s),ve(y,i.fieldsIndex,m);const x=Array.from(y).sort();h.geometry=p,h.outFields=x,h.timeExtent=r;const $=V(o,i);h.where=Q(h.where,$);const j=this._getTargetResolution(p.width/l),f=await Le(c);M(s);const F=i.geometryType==="point"||f&&f.arcadeUtils.hasGeometryOperations(c);F||(h.maxAllowableOffset=j);let{features:w}=await i.queryFeatures(h,s);const g=F?0:j;w=await Ue(i,w,s);for(const I of w)this._featuresResolutions.set(I,g);return w});return(await Promise.allSettled(a)).reduce((i,c)=>c.status==="fulfilled"?[...i,...c.value]:i,[]).filter(A)}};function Ae(t,e,s){const o=[];if(!t)return o;const r=a=>{const i=a.minScale===0||e<=a.minScale,c=a.maxScale===0||e>=a.maxScale;if(a.visible&&i&&c){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const h=Ee(a,{...s,defaultPopupTemplateEnabled:!1});h!=null&&o.unshift({sublayer:a,popupTemplate:h})}}};return t.map(r),o}function Le(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?xe():Promise.resolve()}async function Me(t,e){var s,o;if((o=(s=t.capabilities)==null?void 0:s.operations)!=null&&o.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(t,e,s){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,s).then(a=>a?r:null))).then(r=>r.filter(a=>a!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}n([u({constructOnly:!0})],E.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),n([u({constructOnly:!0})],E.prototype,"layerView",void 0),n([u({constructOnly:!0})],E.prototype,"highlightGraphics",void 0),n([u({constructOnly:!0})],E.prototype,"highlightGraphicUpdated",void 0),n([u({constructOnly:!0})],E.prototype,"updatingHandles",void 0),E=n([N("esri.views.layers.support.MapServiceLayerViewHelper")],E);export{E as R,De as _};
//# sourceMappingURL=MapServiceLayerViewHelper-DFSOi085.js.map
