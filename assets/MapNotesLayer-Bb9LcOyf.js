import{ez as P,eA as B,ag as h,ae as w,eG as F,eC as k,eE as L,e_ as z,b7 as N,cb as x,e$ as J,f0 as S,f1 as I,f2 as M,d6 as A,I as W,t as V,a9 as K,bV as X,cF as q,cG as H,ah as U,d5 as Y,R,Y as C,f3 as Q,aX as Z,f4 as E,j as i,m as s,k as $,eB as ee,o as c,u as te}from"./index-BLU2cKnj.js";import{S as re}from"./MultiOriginJSONSupport-B22y0seo.js";import oe from"./FeatureLayer-DdpxwJmY.js";import{n as ie}from"./objectIdUtils-4dd1rf9p.js";import{b as le}from"./OperationalLayer-Dim73_Xu.js";import{j as ae}from"./PortalLayer-COUJoiul.js";import"./commonProperties-KlFzDeB4.js";import"./FeatureLayerBase-BJZBLv_H.js";import"./HeightModelInfo-DW8MpWGE.js";import"./featureLayerUtils-BsLCONIT.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-BcuBJJSt.js";import"./Relationship-CX2qdSyH.js";import"./serviceCapabilitiesUtils-CB6oyZ7v.js";import"./editsZScale-JWIYr7bJ.js";import"./APIKeyMixin-yhjwDbKM.js";import"./ArcGISService-CbHrzmDZ.js";import"./CustomParametersMixin-BAGJWN10.js";import"./EditBusLayer-DC3AKpDw.js";import"./FeatureEffectLayer-BL9piFxL.js";import"./FeatureEffect-BMryXxKD.js";import"./FeatureReductionLayer-DEu0idqa.js";import"./FeatureReductionSelection-BzWRnAdM.js";import"./labelingInfo-DUaCGGmS.js";import"./labelUtils-D-Vz6XUw.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-DHZ3ySKT.js";import"./OrderByInfo-CPOGsgxp.js";import"./RefreshableLayer-CAMgn8FC.js";import"./TemporalLayer-B5SR_zri.js";import"./TimeInfo-Di_akmN3.js";import"./FeatureTemplate-ByfxlPMU.js";import"./FeatureType-DL8Q85H-.js";import"./fieldProperties-4Y42RhjV.js";import"./versionUtils-DaWIDler.js";import"./styleUtils-DNZ0ENBd.js";import"./popupUtils-w3qsOQ3p.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./portalItemUtils-DqkYNLL5.js";function b(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!D(e))}function D({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return v.find(o=>{var l,n,y;return r===o.geometryTypeJSON&&((y=(n=(l=t.drawingInfo)==null?void 0:l.renderer)==null?void 0:n.symbol)==null?void 0:y.type)===o.identifyingSymbol.type})}function _(){return new Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}const T=new R({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new R({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let u=class extends Q{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?e==null?S(_(),t).geometry:I(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=x();return this.graphics.forEach(o=>{const l=o.geometry!=null?S(o.geometry,t).geometry:null;l!=null&&J(e,l.type==="point"?l:l.extent,e)}),M(e,E)?null:e}get sublayers(){return this.graphics}};i([s({readOnly:!0})],u.prototype,"fullExtent",null),i([s({readOnly:!0})],u.prototype,"fullBounds",null),i([s({readOnly:!0})],u.prototype,"sublayers",null),i([s()],u.prototype,"layer",void 0),i([s()],u.prototype,"layerId",void 0),i([s({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=i([$("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const v=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new F().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new k().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new z().toJSON()}];let a=class extends P(B(le(ae(re(ee))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new w(v.map(e=>new u({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!b(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!b(e))return null;const o=e.layers.map(l=>{const n=new oe;return n.read(l,r),n});return new w({items:o})}readLegacyfeatureCollectionJSON(t,e){return b(e)?N(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=x();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:o})=>o!=null?J(e,o,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const l=S(o.layerDefinition.extent,t).geometry;l!=null&&J(e,l,e)}),M(e,E)?S(_(),t).geometry:I(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(b(e))return null;const o=[];let l=e.layers.reduce((n,y)=>Math.max(n,y.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:y,featureSet:p}=n,m=y.id??l++,d=D(n);if(d!=null){const f=new u({id:d.id,title:y.name,layerId:m,layer:this,graphics:p.features.map(({geometry:g,symbol:O,attributes:j,popupInfo:G})=>A.fromJSON({attributes:j,geometry:g,symbol:O,popupTemplate:G}))});o.push(f)}}return new w(o)}writeSublayers(t,e,r,o){var d;const{minScale:l,maxScale:n}=this;if(t==null)return;const y=t.some(f=>f.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((d=o==null?void 0:o.messages)==null?void 0:d.push(new W("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let m=this.spatialReference.toJSON();e:for(const f of t)for(const g of f.graphics)if(g.geometry!=null){m=g.geometry.spatialReference.toJSON();break e}for(const f of v){const g=t.find(O=>f.id===O.id);this._writeMapNoteSublayer(p,g,f,l,n,m,o)}V("featureCollection.layers",p,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=N(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const o of this.sublayers)for(const l of o.graphics)if(l.geometry!=null){const n=l.geometry;t?K(n.spatialReference,t)||(X(n.spatialReference,t)||q()||await H(),l.geometry=U(n,t)):t=n.spatialReference,e.push(l)}const r=await Y(e.map(o=>o.geometry));e.forEach((o,l)=>o.geometry=r[l])}_findSublayer(t){var e;return this.sublayers==null?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,o,l,n,y){const p=[];if(e!=null){for(const m of e.graphics)this._writeMapNote(p,m,r.geometryType,y);this._normalizeObjectIds(p,T),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[T.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var m,d;if(e==null)return;const{geometry:l,symbol:n,popupTemplate:y}=e;if(l==null)return;if(l.type!==r)return void((m=o==null?void 0:o.messages)==null?void 0:m.push(new C("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(n==null)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new C("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const p={attributes:{...e.attributes},geometry:l.toJSON(),symbol:n.toJSON()};y!=null&&(p.popupInfo=y.toJSON()),t.push(p)}_normalizeObjectIds(t,e){const r=e.name;let o=ie(r,t)+1;const l=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:y}=n;(y[r]==null||l.has(y[r]))&&(y[r]=o++),l.add(y[r])}}};i([s({readOnly:!0})],a.prototype,"capabilities",void 0),i([c(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),i([s({readOnly:!0})],a.prototype,"featureCollections",void 0),i([c(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),i([c(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),i([s({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),i([s({readOnly:!0})],a.prototype,"fullExtent",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),i([c(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),i([c(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),i([s({readOnly:!0})],a.prototype,"multipointLayer",null),i([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),i([s({readOnly:!0})],a.prototype,"pointLayer",null),i([s({readOnly:!0})],a.prototype,"polygonLayer",null),i([s({readOnly:!0})],a.prototype,"polylineLayer",null),i([s({type:h})],a.prototype,"spatialReference",void 0),i([c(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),i([c("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),i([te("web-map","sublayers")],a.prototype,"writeSublayers",null),i([s({readOnly:!0})],a.prototype,"textLayer",null),i([s()],a.prototype,"title",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=i([$("esri.layers.MapNotesLayer")],a);const qe=a;export{qe as default};
//# sourceMappingURL=MapNotesLayer-Bb9LcOyf.js.map
