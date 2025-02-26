import{j as n,m as y,o as d,u as l,p as g,eZ as v,fg as w,k as G,fh as A,I as s,fi as h,eP as M}from"./index-DbNmBX4d.js";import{I as f,a as c,f as E}from"./commonProperties-CGuThAML.js";const m={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},I={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},b={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},O={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,ViewshedLayer:!0,Voxel:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":m,"web-map/basemap":I,"web-map/tables":b,"link-chart/operational-layers":{...m,LinkChartLayer:!0},"link-chart/basemap":I,"link-chart/tables":b,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0}},B=T=>{let a=class extends T{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(r,e,i){var t;return((t=i==null?void 0:i.portalItem)==null?void 0:t.type)==="Group Layer"?void 0:r}writeListMode(r,e,i,t){(t&&t.layerContainerType==="ground"||r&&A(this,i,{},t))&&(e[i]=r)}writeOperationalLayerType(r,e,i,t){r&&(t==null?void 0:t.layerContainerType)!=="tables"&&(e.layerType=r)}writeTitle(r,e){e.title=r??"Layer"}readTimeExtent(r){return r?g.fromArray(r):null}writeTimeExtent(r,e,i,t){r&&t.layerContainerType!=="tables"&&(r.isEmpty?t!=null&&t.messages&&t.messages.push(new s("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):e[i]=r.toArray())}read(r,e){e&&(e.layer=this),h(this,r,i=>super.read(r,i),e)}write(r,e){var L,S;if(!this.persistenceEnabled&&!(e!=null&&e.ignorePersistenceEnabled))return null;if(e!=null&&e.origin){const u=`${e.origin}/${e.layerContainerType||"operational-layers"}`,o=O[u];let p=!!(o!=null&&o[this.operationalLayerType]);if(this.operationalLayerType==="ArcGISTiledElevationServiceLayer"&&u==="web-scene/operational-layers"&&(p=!1),this.operationalLayerType==="ArcGISDimensionLayer"&&u==="web-map/operational-layers"&&(p=!1),!p)return(L=e.messages)==null||L.push(new s("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${u}'`,{layer:this})),null}const i=super.write(r,{...e,layer:this}),t=!!e&&!!e.messages&&!!e.messages.filter(u=>u instanceof s&&u.name==="web-document-write:property-required").length;return M(i==null?void 0:i.url)?((S=e==null?void 0:e.messages)==null||S.push(new s("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&t?null:i}beforeSave(){}};return n([y({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],a.prototype,"id",void 0),n([d("id",["id"])],a.prototype,"readId",null),n([y(f)],a.prototype,"listMode",void 0),n([l("listMode")],a.prototype,"writeListMode",null),n([y({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:c}}}}})],a.prototype,"operationalLayerType",void 0),n([l("operationalLayerType")],a.prototype,"writeOperationalLayerType",null),n([y(E)],a.prototype,"opacity",void 0),n([y({type:Boolean,readOnly:!1})],a.prototype,"persistenceEnabled",void 0),n([y({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],a.prototype,"title",void 0),n([l("title"),l(["web-scene"],"title")],a.prototype,"writeTitle",null),n([y({type:g,json:{origins:{"web-scene":{write:{layerContainerTypes:c}}}}})],a.prototype,"visibilityTimeExtent",void 0),n([d("visibilityTimeExtent")],a.prototype,"readTimeExtent",null),n([l(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[v,w]]}})],a.prototype,"writeTimeExtent",null),n([y({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:c}}},name:"visibility",write:!0}})],a.prototype,"visible",void 0),a=n([G("esri.layers.mixins.OperationalLayer")],a),a};export{B as b};
//# sourceMappingURL=OperationalLayer-BqKvdtee.js.map
