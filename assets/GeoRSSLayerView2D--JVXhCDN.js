import{as as l,dv as h,dw as g,ae as w,$ as d,dx as f,dy as n,j as u,k as V}from"./index-BB6xpuj5.js";import{j as b,y as S}from"./LayerView-C9uOes3C.js";import{t as _}from"./GraphicContainer-CejLQHw-.js";import{F as T}from"./GraphicsView2D-FXKEKrJx.js";import"./utils-BQBvadb7.js";import"./Container-CzB7Zj09.js";import"./MapView-BB5zyy98.js";import"./CollectionFlattener-vw9PCdEV.js";import"./TileInfo-DckZPgmV.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-zVWkHYEv.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DP1x1Bsi.js";import"./signal-JD86_R7M.js";import"./ColorBackground-5boBVQCV.js";import"./basemapUtils-DT7CgBiu.js";import"./utils-Dmn_mtNQ.js";import"./TablesMixin-rUkw-8tc.js";import"./Layer-5zl9d9z3.js";import"./GraphicsCollection-BlSm0Gtj.js";import"./HeightModelInfo-Cn8WVYm1.js";import"./ReactiveMap-C5xyLUPa.js";import"./a11yUtils-XrMtlS1N.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-DJqSU6w-.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CoC6AtxP.js";import"./Tile-CSO7o2Lx.js";import"./TileKey-bsr5k5kR.js";import"./QueueProcessor-DuXSk4nk.js";import"./quickselect-QQC62dOK.js";import"./vec32-Dn1yeTzb.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BzN5lHkh.js";import"./imageUtils-DlrOtbVu.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-D95E-zHd.js";import"./GoTo-CVPsm2b2.js";import"./ZoomViewModel-CECqLXXU.js";import"./EffectView-ByR8_5fn.js";import"./parser-Bf0eM-Za.js";import"./layerViewUtils-CcnERjia.js";import"./AGraphicContainer-W19VHD7K.js";import"./TechniqueInstance-C_8TZDcA.js";import"./UpdateTracking2D-eAHQ9B1z.js";import"./BindType-BmZEZMMh.js";import"./Util-CB3Gd6Qy.js";import"./Program-0OZM0gHS.js";import"./BufferObject-C7inN83X.js";import"./LabelMetric-C8LidgNF.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-BXFytAM8.js";import"./WGLContainer-DtgvS25h.js";import"./VertexArrayObject-C34nLg7v.js";import"./ProgramTemplate-BeeJCxBw.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-Bx5E0gVl.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-L6p5wBVT.js";import"./FeatureCommandQueue-9w2UUk_3.js";import"./CIMSymbolHelper-41U55g81.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-3KqT7etV.js";import"./GeometryUtils-CoU-W_YD.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-KxhCcAOR.js";import"./TimeOnly-DIyoNsbt.js";import"./timeSupport-DrDUNSUJ.js";import"./labelUtils-CfVEjBe_.js";import"./normalizeUtilsSync-CvBZNtZ1.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,o){if(!this.graphicsViews.length)return null;const p=this.layer;return this.graphicsViews.reverse().flatMap(r=>{const i=this._popupTemplates.get(r),s=r.hitTest(t);for(const e of s)e.layer=p,e.sourceLayer=p,e.popupTemplate=i;return s}).map(r=>({type:"graphic",graphic:r,layer:p,mapPoint:t}))}update(t){if(this.graphicsViews)for(const o of this.graphicsViews)o.processUpdate(t)}attach(){this.addAttachHandles([l(()=>{var t;return(t=this.layer)==null?void 0:t.featureCollections},t=>{this._clear();for(const{popupInfo:o,featureSet:p,layerDefinition:r}of t){const i=g.fromJSON(p),s=new w(i.features),e=r.drawingInfo,c=o?d.fromJSON(o):null,m=f(e.renderer),a=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:m,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=a,this._popupTemplates.set(a,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=m.symbol):this.layer.lineSymbol=m.symbol:this.layer.polygonSymbol=m.symbol,this.graphicsViews.push(a),this.container.addChild(a.container)}},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.polygonSymbol},t=>{this._graphicsViewMap.polygon.renderer=new n({symbol:t})},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.lineSymbol},t=>{this._graphicsViewMap.polyline.renderer=new n({symbol:t})},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.pointSymbol},t=>{this._graphicsViewMap.point.renderer=new n({symbol:t})},h)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}_clear(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Kt=y;export{Kt as default};
