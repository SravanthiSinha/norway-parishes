import{j as o,m as h,k as E,v as F,I as w,w as M,x as S,s as C,ao as R,aX as q}from"./index-BfLS464G.js";import{a as b}from"./BitmapContainer-THSULQLK.js";import{j as U,y as V}from"./LayerView-CYEyZb3W.js";import{_ as L}from"./ExportStrategy-Cb5mm1Gi.js";import{i as W}from"./RefreshableLayerView-Bs-oGpxh.js";import{a as j}from"./ExportWMSImageParameters-Crog4ZkK.js";import{i as A}from"./timeSupport-AjaUBYtA.js";import"./WGLContainer-BzZmJFyx.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-BRJwH1IL.js";import"./Texture-CIfuobtw.js";import"./enums-Dk3osxpS.js";import"./Program-Ct-nfNCN.js";import"./BufferObject-DjjOol8e.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-EWeeHbao.js";import"./ProgramTemplate-DLE7FgSm.js";import"./mat2df32-orApM5a3.js";import"./mat3-Vwsw9JHV.js";import"./MapView-Bv5a0vk2.js";import"./CollectionFlattener-X0S8zgtM.js";import"./TileInfo-DWDAl8uD.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-BlS5-8-g.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DIwa6ChI.js";import"./signal-WiWIjfEr.js";import"./ColorBackground-B-aHDRbY.js";import"./basemapUtils-CATGu2F4.js";import"./TablesMixin-CFytb7-C.js";import"./HeightModelInfo-DzK0H4Qy.js";import"./ReactiveMap-BSB6_01E.js";import"./a11yUtils-C2FLl1jQ.js";import"./ViewingMode-dBUh39ak.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CrSwoFuz.js";import"./Tile-Buu0dPvS.js";import"./TileKey-B-9BfHYt.js";import"./QueueProcessor-qL0ybgsp.js";import"./quickselect-QQC62dOK.js";import"./vec32-CEaafPjr.js";import"./imageUtils-D8_Uuzpg.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-DDooyttB.js";import"./GoTo-KPBAc1MP.js";import"./ZoomViewModel-BVGsy9Mg.js";import"./vec3f32-nZdmKIgz.js";import"./Container-CFNShixe.js";import"./EffectView-NI39mQJy.js";import"./StyleDefinition-CfokGb7w.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-BtnbM9Bl.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-CBnF1ACp.js";import"./Bitmap-CmATu9Wi.js";const H=r=>{let t=class extends r{initialize(){this.exportImageParameters=new j({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return A(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,a){const{layer:p}=this;if(!e)throw new w("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:p});const{popupEnabled:d}=p;if(!d)throw new w("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:s,width:m,height:n,x:c,y}=i;if(!(s&&m&&n))throw new w("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:m,height:n});const g=await p.fetchFeatureInfo(s,m,n,c,y);return M(a),g}};return o([h()],t.prototype,"exportImageParameters",void 0),o([h({readOnly:!0})],t.prototype,"exportImageVersion",null),o([h()],t.prototype,"layer",void 0),o([h({readOnly:!0})],t.prototype,"timeExtent",null),t=o([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends H(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{S(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:a,y:p}=r,{spatialReference:d}=t;let i,s=0,m=0;if(e.children.some(g=>{const{width:f,height:v,resolution:I,x:l,y:x}=g,P=l+I*f,$=x-I*v;return a>=l&&a<=P&&p<=x&&p>=$&&(i=new q({xmin:l,ymin:$,xmax:P,ymax:x,spatialReference:d}),s=f,m=v,!0)}),!i)return null;const n=i.width/s,c=Math.round((a-i.xmin)/n),y=Math.round((i.ymax-p)/n);return{extent:i,width:s,height:m,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,a){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...a})}};o([h()],u.prototype,"strategy",void 0),o([h()],u.prototype,"updating",void 0),u=o([E("esri.views.2d.layers.WMSLayerView2D")],u);const Bt=u;export{Bt as default};
//# sourceMappingURL=WMSLayerView2D-rqNiwGv8.js.map
