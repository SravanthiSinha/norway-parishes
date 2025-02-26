import{j as o,m as h,k as E,v as F,I as f,w as M,x as S,s as C,ao as R,aX as q}from"./index-DbNmBX4d.js";import{a as b}from"./BitmapContainer-D1GYhALa.js";import{j as U,y as V}from"./LayerView-DUsFw1EB.js";import{_ as L}from"./ExportStrategy-Blp5Aqgs.js";import{i as W}from"./RefreshableLayerView-SiY0f0w4.js";import{a as j}from"./ExportWMSImageParameters-C27JPUU8.js";import{i as A}from"./timeSupport-C9fW9nFE.js";import"./WGLContainer-CKFa_ALO.js";import"./definitions-DyYHcW4a.js";import"./LabelMetric-Dty1x0i9.js";import"./Texture-DY8FdKut.js";import"./enums-Dk3osxpS.js";import"./Program-BDKG0u-9.js";import"./BufferObject-DTklsBuD.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-CnpCxTZE.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-LO85IHsF.js";import"./ProgramTemplate-D9kmQdj-.js";import"./mat2df32-orApM5a3.js";import"./mat3-Do75vOmA.js";import"./MapView-I8Z9as5J.js";import"./CollectionFlattener-f8QjlotR.js";import"./TileInfo-C6RxscyO.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-DhmKVsJE.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-CAbIw4w5.js";import"./signal-CtFcUwwQ.js";import"./ColorBackground-DJ9LUBkO.js";import"./basemapUtils-D2ovKVE_.js";import"./TablesMixin-DM0BtXa2.js";import"./HeightModelInfo-C0ub-TTd.js";import"./ReactiveMap-CD56A84i.js";import"./a11yUtils-ra39Yv3Y.js";import"./ViewingMode-dBUh39ak.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-BD_oVVYH.js";import"./Tile-Cf9dF14g.js";import"./TileKey-BIDFjVCi.js";import"./QueueProcessor-Biy1pj98.js";import"./quickselect-QQC62dOK.js";import"./vec32-CK6Gx5ur.js";import"./imageUtils-DCEe7KD1.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-BEmYJEdB.js";import"./GoTo-3MWGmEXL.js";import"./ZoomViewModel-BmwYBfy-.js";import"./vec3f32-nZdmKIgz.js";import"./Container-DH0ZvcwA.js";import"./EffectView-DlskEt00.js";import"./StyleDefinition-C6D6ERIt.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-CKdQT5xh.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-BMJ0XixA.js";import"./Bitmap-HqsXRjbN.js";const H=r=>{let t=class extends r{initialize(){this.exportImageParameters=new j({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return A(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,a){const{layer:p}=this;if(!e)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:p});const{popupEnabled:d}=p;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:s,width:m,height:n,x:c,y:l}=i;if(!(s&&m&&n))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:m,height:n});const y=await p.fetchFeatureInfo(s,m,n,c,l);return M(a),y}};return o([h()],t.prototype,"exportImageParameters",void 0),o([h({readOnly:!0})],t.prototype,"exportImageVersion",null),o([h()],t.prototype,"layer",void 0),o([h({readOnly:!0})],t.prototype,"timeExtent",null),t=o([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends H(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{S(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:a,y:p}=r,{spatialReference:d}=t;let i,s=0,m=0;if(e.children.some(y=>{const{width:w,height:v,resolution:I,x:g,y:x}=y,P=g+I*w,$=x-I*v;return a>=g&&a<=P&&p<=x&&p>=$&&(i=new q({xmin:g,ymin:$,xmax:P,ymax:x,spatialReference:d}),s=w,m=v,!0)}),!i)return null;const n=i.width/s,c=Math.round((a-i.xmin)/n),l=Math.round((i.ymax-p)/n);return{extent:i,width:s,height:m,x:c,y:l}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,a){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...a})}};o([h()],u.prototype,"strategy",void 0),o([h()],u.prototype,"updating",void 0),u=o([E("esri.views.2d.layers.WMSLayerView2D")],u);const Bt=u;export{Bt as default};
//# sourceMappingURL=WMSLayerView2D-DI034NMH.js.map
