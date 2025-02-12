import{go as Y,gp as k,ap as I,dx as b,gq as X,d2 as B,ai as g,c2 as J,gr as V,by as z,aY as K,f3 as N,d8 as w,eF as Q,eC as q,eE as R,v as F,ao as M,j as x,m as $,k as Z}from"./index-j6yFHuRy.js";import{l as U}from"./TelemetryDisplay-DnNlmpCs.js";import{u as ee}from"./OverlayContainer-DsXZGTNz.js";import{e as te}from"./Container-CuVTLXGN.js";import{a as ie,j as re,y as se}from"./LayerView-gXKgPWfs.js";import{D as oe}from"./enums-Dk3osxpS.js";import{p as ne,m as ae}from"./Texture-Ck7lu_n2.js";import{t as le}from"./GraphicContainer-B5ZqptaK.js";import{F as he}from"./GraphicsView2D-D62yV8PO.js";import"./mat3-DSYHFVyP.js";import"./MapView-D26Pdc6M.js";import"./CollectionFlattener-dpPPBihN.js";import"./TileInfo-Dcu7p8vG.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-U4MX3YEt.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DutTPnmU.js";import"./signal-C6JO_0DC.js";import"./ColorBackground-IcvmrVJq.js";import"./basemapUtils-CnDMVnyg.js";import"./TablesMixin-DM7RGmGt.js";import"./HeightModelInfo-qFT9GYXQ.js";import"./ReactiveMap-0PxNCZ9S.js";import"./a11yUtils-DIvYeI-i.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-D8Qfp1e9.js";import"./Tile-D2YEZ1xh.js";import"./TileKey-Cynuab6g.js";import"./QueueProcessor-BN6OzUm6.js";import"./quickselect-QQC62dOK.js";import"./vec32-CLDLXykA.js";import"./definitions-C0Jy3zs7.js";import"./imageUtils-BBTenp-B.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-X1CWPLkv.js";import"./GoTo-upjDML16.js";import"./ZoomViewModel-BbIlT9BJ.js";import"./vec3f32-nZdmKIgz.js";import"./WGLContainer-Cei1rUwL.js";import"./LabelMetric-g7VMe3jA.js";import"./Program-Y4mwQVez.js";import"./BufferObject-o98FkG4G.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./VertexArrayObject-BLE5D7wv.js";import"./ProgramTemplate-BP-rVo7y.js";import"./StyleDefinition-Dm-nkKpx.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-CWlweu21.js";import"./FeatureCommandQueue-CPgJIBwQ.js";import"./CIMSymbolHelper-7UEuS_hM.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-bOYXgNif.js";import"./GeometryUtils-CI4mWKqT.js";import"./Rect-CUzevAry.js";import"./UpdateTracking2D-B_vAfGyd.js";import"./BindType-BmZEZMMh.js";import"./Util-BxOTaDfH.js";import"./constants-F8oTIn7N.js";import"./EffectView-CuFi3f9q.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-CSswahRV.js";import"./AGraphicContainer-Doo1SFXH.js";import"./TechniqueInstance-CVspu4Ei.js";import"./TileContainer-fliJbaUR.js";import"./AttributeStore-C97GZC1O.js";import"./TimeOnly-Bvt5N_mb.js";import"./timeSupport-D6H49xfb.js";import"./labelUtils-I7XUOAHm.js";import"./normalizeUtilsSync-BgsJnM7x.js";const C=2;class me extends te{constructor(e){super(),this.element=e,this._handles=new Y,this.isWrapAround=!1,this.perspectiveTransform=k(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add(I(()=>this.element,()=>{const t=this.element;this.ready(),t&&this._handles.add(X(t,"play",()=>this.requestRender()))},b))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=B(this.texture)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(t==null)return;const{context:i}=e,{videoWidth:o,videoHeight:s}=t;if(o!==0&&s!==0){if(this.texture)t.paused||this.texture.setData(t);else{const n=new ne;n.wrapMode=oe.CLAMP_TO_EDGE,n.preMultiplyAlpha=!0,n.width=o,n.height=s,this.texture=new ae(i,n,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,i,o){const s=this.element,n=this._getFrameInfo();if(!s||!n)return;this._initializeData(e,n,i);const{controlPoints:l,horizon:m}=n,h=Math.sqrt(l.length),p=h,{x:a,y}=e,u=this._vertices,T=l[0],P=l[h-1],W=l[(p-1)*h],j=l[(p-1)*h+h-1],G=g(m?m[0].mapPoint:T.mapPoint,i),O=g(m?m[1].mapPoint:P.mapPoint,i),f=g(W.mapPoint,i),D=g(j.mapPoint,i);this.clipGeometry=m?new ie({geometry:J.fromJSON({rings:[[[f.x,f.y],[D.x,D.y],[O.x,O.y],[G.x,G.y],[f.x,f.y]]],spatialReference:i})}):null;for(let c=0;c<l.length;c++){const L=l[c],{sourcePoint:S,mapPoint:A}=L;if(S==null||A==null)continue;const v=g(A,i);u[c*C+0]=v.x-a,u[c*C+1]=v.y-y}let E=t;if(o){const c=Math.min(G.x,O.x,f.x,D.x),L=Math.max(G.x,O.x,f.x,D.x),{worldWidth:S,xBounds:A}=o,[v,H]=A;c<v&&L>v?E=S:L>H&&c<H&&(E=-S)}this.wrapAroundShift=E,this.isWrapAround=E!==0}draw(e,t){this.isReady&&this._vertices&&this._indices&&this._texCoords?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:this.textureSize,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._texCoords,index:this._indices}):this.requestRender()}_initializeData(e,t,i){if(this._vertices!=null&&this._indices!=null)return;const{controlPoints:o}=t,s=Math.sqrt(o.length),n=s,l=new Float32Array(C*o.length),m=new Uint16Array(2*o.length);for(let a=0;a<o.length;a++){const y=o[a],{sourcePoint:u,mapPoint:T}=y;if(u==null||T==null)continue;const P=g(T,i);l[a*C+0]=P.x-e.x,l[a*C+1]=P.y-e.y,m[2*a+0]=u.x,m[2*a+1]=u.y}const h=new Uint16Array(n*s+(n-2)*(s+2));let p=0;for(let a=0;a<n;a++){for(let y=0;y<s;y++)h[p++]=a*s+y,h[p++]=(a+1)*s+y;a<n-2&&(h[p++]=(a+1)*s+(s-1),h[p++]=(a+1)*s)}this._vertices=l,this._texCoords=m,this._indices=h}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let i=null;if(t){const o=t.startX,s=t.startY,n=t.endX,l=t.endY;i=[{sourcePoint:V(o,s),mapPoint:new z(t.startLongitude,t.startLatitude)},{sourcePoint:V(n,l),mapPoint:new z(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:i}}_getFrameControlPoints(){const e=this.groundControlPoints,t=e==null?void 0:e.length;if(!t)return[];const i=new Array(t),o=Math.max(...e.map(({x:n})=>n)),s=this.element.videoWidth/o;for(let n=0;n<t;n++){const{x:l,y:m,lat:h,lon:p}=e[n];i[n]={sourcePoint:V(l*s,-m*s),mapPoint:new z(p,h)}}return i}}const _=new K([255,127,0]);let d=class extends re(se){constructor(){super(...arguments),this._graphicsLayer=new N,this._frameOutlineGraphic=new w({symbol:new Q({outline:{type:"simple-line",color:_}})}),this._sensorTrailGraphic=new w({symbol:new q({color:_})}),this._lineOfSightGraphic=new w({symbol:new q({color:_})}),this._sensorLocationGraphic=new w({symbol:new R({color:_})}),this._frameCenterGraphic=new w({symbol:new R({color:_,style:"cross"})}),this._overlayContainer=null,this.layer=null,this.symbolColor=_,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=F(this._graphicsLayer)}initialize(){var r,e,t,i,o,s;this.addHandles(M(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},b)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new U({frame:((r=this.layer.telemetryDisplay)==null?void 0:r.frame)??!1,frameCenter:((e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter)??!0,frameOutline:((t=this.layer.telemetryDisplay)==null?void 0:t.frameOutline)??!0,lineOfSight:((i=this.layer.telemetryDisplay)==null?void 0:i.lineOfSight)??!0,sensorLocation:((o=this.layer.telemetryDisplay)==null?void 0:o.sensorLocation)??!0,sensorTrail:((s=this.layer.telemetryDisplay)==null?void 0:s.sensorTrail)??!0})}attach(){this._overlayContainer=new ee,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new he({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new le(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([M(()=>{var r,e,t,i,o,s;return[(r=this.layer.telemetryDisplay)==null?void 0:r.frame,(e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter,(t=this.layer.telemetryDisplay)==null?void 0:t.frameOutline,(i=this.layer.telemetryDisplay)==null?void 0:i.sensorLocation,(o=this.layer.telemetryDisplay)==null?void 0:o.sensorTrail,(s=this.layer.telemetryDisplay)==null?void 0:s.lineOfSight]},()=>this._updateVisibleTelemetryElements(),b),M(()=>{var r,e,t,i,o;return[this.layer.telemetry,(r=this.visibleTelemetryElements)==null?void 0:r.frameCenter,(e=this.visibleTelemetryElements)==null?void 0:e.frameOutline,(t=this.visibleTelemetryElements)==null?void 0:t.sensorLocation,(i=this.visibleTelemetryElements)==null?void 0:i.sensorTrail,(o=this.visibleTelemetryElements)==null?void 0:o.lineOfSight]},()=>this._updateGraphicGeometries(),b)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=F(this.graphicsView)}supportsSpatialReference(r){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(r){this.graphicsView.processUpdate(r)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frame=this.layer.telemetryDisplay.frame,this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:r}=this.layer,{visibleTelemetryElements:e}=this;r&&e&&(e.frameOutline&&r.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,e.sensorTrail&&r.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,e.lineOfSight&&r.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,e.sensorLocation&&r.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,e.frameCenter&&r.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const r=new me(this.layer.videoElement);this.addAttachHandles([M(()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints],()=>{const{visibleTelemetryElements:e}=this;e!=null&&e.frame?(r.frameHorizonPoints=this.layer.frameHorizonPoints,r.groundControlPoints=this.layer.groundControlPoints,r.opacity=1):r.opacity=0},b)]),this._overlayContainer.addChild(r),this.view.stage.requestRender()}};x([$()],d.prototype,"graphicsView",void 0),x([$()],d.prototype,"layer",void 0),x([$()],d.prototype,"symbolColor",void 0),x([$({type:U})],d.prototype,"visibleTelemetryElements",void 0),d=x([Z("esri.views.2d.layers.VideoLayerView2D")],d);const Mt=d;export{Mt as default};
//# sourceMappingURL=VideoLayerView2D-tOZ6agm3.js.map
