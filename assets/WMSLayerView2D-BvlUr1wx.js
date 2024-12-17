import{j as o,m as h,k as E,v as F,I as w,w as M,x as S,s as C,as as R,a_ as q}from"./index-BB6xpuj5.js";import{a as b}from"./BitmapContainer-CODNmvth.js";import{j as U,y as V}from"./LayerView-C9uOes3C.js";import{_ as L}from"./ExportStrategy-C6cCfGlZ.js";import{i as W}from"./RefreshableLayerView-CRbdvOE2.js";import{a as _}from"./ExportWMSImageParameters-DnGI5LeT.js";import{i as j}from"./timeSupport-D_ZxBfz9.js";import"./WGLContainer-DtgvS25h.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-C8LidgNF.js";import"./Texture-BzN5lHkh.js";import"./enums-Dk3osxpS.js";import"./Program-0OZM0gHS.js";import"./BufferObject-C7inN83X.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-C34nLg7v.js";import"./ProgramTemplate-BeeJCxBw.js";import"./mat2df32-orApM5a3.js";import"./mat3-DJqSU6w-.js";import"./MapView-BB5zyy98.js";import"./CollectionFlattener-vw9PCdEV.js";import"./TileInfo-DckZPgmV.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-zVWkHYEv.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DP1x1Bsi.js";import"./signal-JD86_R7M.js";import"./ColorBackground-5boBVQCV.js";import"./basemapUtils-DT7CgBiu.js";import"./utils-Dmn_mtNQ.js";import"./TablesMixin-rUkw-8tc.js";import"./Layer-5zl9d9z3.js";import"./GraphicsCollection-BlSm0Gtj.js";import"./HeightModelInfo-Cn8WVYm1.js";import"./ReactiveMap-C5xyLUPa.js";import"./a11yUtils-XrMtlS1N.js";import"./ViewingMode-dBUh39ak.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CoC6AtxP.js";import"./Tile-CSO7o2Lx.js";import"./TileKey-bsr5k5kR.js";import"./QueueProcessor-DuXSk4nk.js";import"./quickselect-QQC62dOK.js";import"./vec32-Dn1yeTzb.js";import"./imageUtils-DlrOtbVu.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-D95E-zHd.js";import"./GoTo-CVPsm2b2.js";import"./ZoomViewModel-CECqLXXU.js";import"./vec3f32-nZdmKIgz.js";import"./Container-CzB7Zj09.js";import"./EffectView-ByR8_5fn.js";import"./parser-Bf0eM-Za.js";import"./StyleDefinition-Bx5E0gVl.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-L6p5wBVT.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-CcnERjia.js";import"./Bitmap-_yYvhRdM.js";const A=r=>{let t=class extends r{initialize(){this.exportImageParameters=new _({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return j(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,a){const{layer:p}=this;if(!e)throw new w("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:p});const{popupEnabled:d}=p;if(!d)throw new w("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:s,width:m,height:n,x:c,y}=i;if(!(s&&m&&n))throw new w("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:m,height:n});const g=await p.fetchFeatureInfo(s,m,n,c,y);return M(a),g}};return o([h()],t.prototype,"exportImageParameters",void 0),o([h({readOnly:!0})],t.prototype,"exportImageVersion",null),o([h()],t.prototype,"layer",void 0),o([h({readOnly:!0})],t.prototype,"timeExtent",null),t=o([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends A(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{S(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:a,y:p}=r,{spatialReference:d}=t;let i,s=0,m=0;if(e.children.some(g=>{const{width:f,height:v,resolution:I,x:l,y:x}=g,P=l+I*f,$=x-I*v;return a>=l&&a<=P&&p<=x&&p>=$&&(i=new q({xmin:l,ymin:$,xmax:P,ymax:x,spatialReference:d}),s=f,m=v,!0)}),!i)return null;const n=i.width/s,c=Math.round((a-i.xmin)/n),y=Math.round((i.ymax-p)/n);return{extent:i,width:s,height:m,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,a){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...a})}};o([h()],u.prototype,"strategy",void 0),o([h()],u.prototype,"updating",void 0),u=o([E("esri.views.2d.layers.WMSLayerView2D")],u);const Kt=u;export{Kt as default};