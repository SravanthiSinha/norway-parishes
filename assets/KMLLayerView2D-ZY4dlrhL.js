import{ai as k,bw as T,U as z,du as D,ae as B,ao as F,gi as O,v as C,aX as U,cF as N,ag as A,gj as W,gk as E,db as H,f4 as K,j as v,m as S,k as J}from"./index-CyZqSx7I.js";import{b as P,g as X,d as Y}from"./kmlUtils-CPnYYLKH.js";import{g as Q,f as Z,S as tt}from"./Bitmap-fU7OAaDx.js";import{a as et}from"./BitmapContainer-DN94NzGU.js";import{j as it,y as at}from"./LayerView-Dpd_uQQk.js";import{t as M}from"./GraphicContainer-Dd6K5uC0.js";import{F as R}from"./GraphicsView2D-BweDd_E7.js";import{C as st,i as rt}from"./rasterProjectionHelper-BhbJ_Rz9.js";import{a as ot}from"./WGLContainer-gMCtDwkT.js";import{y as nt,o as lt}from"./MaterialPrograms-C82x6ZB_.js";import{D as j,G as pt,U as ht,X as $}from"./enums-Dk3osxpS.js";import{x as mt}from"./Program-Cbh0ypC7.js";import{c as ct}from"./rasterUtils-BbRsh1Gh.js";import{p as L,m as dt}from"./Texture-DuyBANY2.js";import"./mat3-Doicj2BK.js";import"./MapView-Zybj2Flm.js";import"./CollectionFlattener--YLIXmQg.js";import"./TileInfo-DG2ccxqu.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-DedD_Mex.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-Cp4ZJv6G.js";import"./signal-DnBrhHvC.js";import"./ColorBackground-DPL1uv77.js";import"./basemapUtils-B5xWBuOK.js";import"./TablesMixin-Dsuypqcr.js";import"./HeightModelInfo-DpB4FpSN.js";import"./ReactiveMap-BuSe_ui4.js";import"./a11yUtils-DyJ006ul.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-l2i_4anW.js";import"./Tile-CHxmKSan.js";import"./TileKey-D3jGqBCD.js";import"./QueueProcessor-MZrbs--V.js";import"./quickselect-QQC62dOK.js";import"./vec32-Tb7lCH7n.js";import"./definitions-C0Jy3zs7.js";import"./imageUtils-ktEURtV-.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-DNgKw9a8.js";import"./GoTo-CWArt6fp.js";import"./ZoomViewModel-D19K51we.js";import"./Container-oO2iwPwg.js";import"./EffectView-BdfaN_d1.js";import"./utils-BQBvadb7.js";import"./layerViewUtils-JXPfPIK4.js";import"./AGraphicContainer-BV5bPvym.js";import"./TechniqueInstance-DLBbjPDi.js";import"./UpdateTracking2D-DyCOjAjR.js";import"./BindType-BmZEZMMh.js";import"./Util-D46_d7ad.js";import"./LabelMetric-d29GDEzX.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-B0Y961TR.js";import"./FeatureCommandQueue-CNSNvh87.js";import"./CIMSymbolHelper-DTX7dMhj.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-DsCYkfIl.js";import"./GeometryUtils-Kxxm7sQ0.js";import"./Rect-CUzevAry.js";import"./BufferObject-B2MIfKG-.js";import"./VertexArrayObject-9CIO6I2e.js";import"./constants-F8oTIn7N.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-DXgGMCu3.js";import"./TimeOnly-Dv67pzSg.js";import"./timeSupport-Dq-hcqIh.js";import"./featureConversionUtils-Csp7sRNH.js";import"./labelUtils-BQ01S__V.js";import"./normalizeUtilsSync-DK_8hqL0.js";import"./ProgramTemplate-6UA_2Kec.js";import"./StyleDefinition-CYvm8ID8.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./webglDeps-Dc_vc2Y-.js";import"./NestedMap-GuqgquCN.js";import"./renderState-BqKKaxGi.js";import"./basicInterfaces-CZwQPxTp.js";import"./interfaces-DDtDqZYj.js";import"./testSVGPremultipliedAlpha-BHky5TZB.js";import"./floatRGBA-B2FvwRB5.js";import"./doublePrecisionUtils-B0owpBza.js";class h{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(h._instance)return h._instanceRefCount++,h._instance;h._instanceRefCount=1,h._instance=this,this._ownsRctx=!0;const e=document.createElement("canvas").getContext("webgl2");e.getExtension("OES_texture_float"),this._rctx=new nt(e,{})}const s={applyProjection:!0,bilinear:!1,bicubic:!1},r=lt("raster/reproject","raster/reproject",new Map([["a_position",0]]),s);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ot(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,s,r=!1){const e=k(t.extent,s),a=new T({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:p}=st(a,s,t.extent);let n=(o+p)/2;const l=Math.round((e.xmax-e.xmin)/n),g=Math.round((e.ymax-e.ymin)/n);n=(e.width/l+e.height/g)/2;const I=new T({x:n,y:n,spatialReference:e.spatialReference}),_=rt({projectedExtent:e,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=ct(this._rctx,_),y=new L(l,g);y.wrapMode=j.CLAMP_TO_EDGE;const m=new mt(this._rctx,y);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,l,g),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:x=0,height:f=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",x,f),this._program.setUniform2fv("u_transformSpacing",_.spacing),this._program.setUniform2fv("u_transformGridSize",_.size),this._program.setUniform2f("u_targetImageSize",l,g),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,u=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,pt.RGBA,ht.UNSIGNED_BYTE,u.data);const G=m.detachColorTexture($.COLOR_ATTACHMENT0);return m.dispose(),{texture:G,extent:e,imageData:u}}const b=m.detachColorTexture($.COLOR_ATTACHMENT0);return m.dispose(),{texture:b,extent:e}}reprojectBitmapData(t,s){const r=Q(t.bitmapData)?Z(t.bitmapData):t.bitmapData,e=new L;e.wrapMode=j.CLAMP_TO_EDGE,e.width=t.bitmapData.width,e.height=t.bitmapData.height;const a=new dt(this._rctx,e,r),o=this.reprojectTexture({texture:a,extent:t.extent},s,!0);o.texture.dispose();const p=document.createElement("canvas"),n=o.imageData;return p.width=n.width,p.height=n.height,p.getContext("2d").putImageData(n,0,0),{bitmapData:p,extent:o.extent}}async loadAndReprojectBitmapData(t,s,r){const e=(await z(t,{responseType:"image"})).data,a=document.createElement("canvas");a.width=e.width,a.height=e.height;const o=a.getContext("2d");o.drawImage(e,0,0);const p=o.getImageData(0,0,a.width,a.height);if(s.spatialReference.equals(r))return{bitmapData:p,extent:s};const n=this.reprojectBitmapData({bitmapData:p,extent:s},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(h._instanceRefCount--,h._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),h._instance=null)):(this._quad.dispose(),this._program.dispose())}}h._instanceRefCount=0;class q{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends it(at){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new et,this._kmlVisualData=new q,this._fetchController=null,this.allVisiblePoints=new D,this.allVisiblePolylines=new D,this.allVisiblePolygons=new D,this.allVisibleMapImages=new B}async hitTest(i,t){var r,e,a;const s=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(i),(e=this._polylinesView)==null?void 0:e.hitTest(i),(a=this._polygonsView)==null?void 0:a.hitTest(i)].flat().filter(Boolean).map(o=>(o.layer=s,o.sourceLayer=s,{type:"graphic",graphic:o,layer:s,mapPoint:i}))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))}),F(()=>this.layer.visibleSublayers,i=>{for(const t of this._kmlVisualData.allSublayers.values())t.visibility=0;for(const t of i){const s=this._kmlVisualData.allSublayers.get(t.id);s&&(s.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new h}detach(){this._fetchController=O(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=C(this._polygonsView),this._polylinesView=C(this._polylinesView),this._pointsView=C(this._pointsView),this._imageReprojector=C(this._imageReprojector)}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){var t,s;((t=this.view.spatialReference)!=null&&t.isWGS84||(s=this.view.spatialReference)!=null&&s.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(i.href,U.fromJSON(i.extent),this.view.spatialReference).then(r=>{const e=new tt(r.bitmapData);e.x=r.extent.xmin,e.y=r.extent.ymax,e.resolution=r.extent.width/r.bitmapData.width,e.rotation=i.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(i,e)})}async _getViewDependentUrl(i,t){const{viewFormat:s,viewBoundScale:r,httpQuery:e}=i;if(s!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let a;if(await N(),r!=null&&r!==1){const c=new U(t.extent);c.expand(r),a=c}else a=t.extent;a=k(a,A.WGS84);const o=k(a,A.WebMercator),p=a.xmin,n=a.xmax,l=a.ymin,g=a.ymax,I=t.size[0]*t.pixelRatio,_=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),y={"[bboxWest]":p.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":l.toString(),"[bboxNorth]":g.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":_.toString(),"[terrainEnabled]":"0","[clientVersion]":W,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let u;for(u in y)c[V]=c[V].replace(u,y[u])}},x=E(s);m(x);let f={};e!=null&&(f=E(e),m(f));const b=H(i.href);return b.query={...b.query,...x,...f},`${b.path}?${K(x)}`}return i.href}async _fetchService(i){const t=new q;await this._loadVisualData(this.layer.url,t,i),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t,s){return this._fetchParsedKML(i,s).then(async r=>{for(const e of r.sublayers){t.allSublayers.set(e.id,e);const a=e.points?await P(e.points):[],o=e.polylines?await P(e.polylines):[],p=e.polygons?await P(e.polygons):[],n=e.mapImages||[];if(t.allPoints.push(...a.map(l=>({item:l,sublayerId:e.id}))),t.allPolylines.push(...o.map(l=>({item:l,sublayerId:e.id}))),t.allPolygons.push(...p.map(l=>({item:l,sublayerId:e.id}))),t.allMapImages.push(...n.map(l=>({item:l,sublayerId:e.id}))),e.networkLink){const l=await this._getViewDependentUrl(e.networkLink,this.view.state);await this._loadVisualData(l,t,s)}}})}_fetchParsedKML(i,t){return X(i,this.layer.spatialReference,this.layer.refreshInterval,t).then(s=>Y(s.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};v([S()],d.prototype,"_pointsView",void 0),v([S()],d.prototype,"_polylinesView",void 0),v([S()],d.prototype,"_polygonsView",void 0),v([S()],d.prototype,"updating",void 0),d=v([J("esri.views.2d.layers.KMLLayerView2D")],d);const Ke=d;export{Ke as default};
//# sourceMappingURL=KMLLayerView2D-ZY4dlrhL.js.map
