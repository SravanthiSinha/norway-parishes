const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingTools-BHb93hMz.js","assets/index-Bs-G_wsu.js","assets/index-D3OSfFaz.css","assets/projectVectorToVector-UtrK5Qk3.js","assets/projectPointToVector-CvVRkOeo.js","assets/elevationInfoUtils-CHyhgscB.js","assets/ElevationInfo-Ogo5JfE3.js","assets/vec32-DrHtz8AR.js","assets/UpdatingHandles-BZI7TPX6.js","assets/GraphicsLayer-9_2aFqyC.js","assets/GraphicsCollection-BPX1FENo.js","assets/Layer-BD5fEEcE.js","assets/BlendLayer-BeHYTX5Y.js","assets/jsonUtils-qHdUfL9L.js","assets/parser-DP7rDSW3.js","assets/utils-DzB8n6BG.js","assets/ScaleRangeLayer-DoKtR3vt.js","assets/geodesicUtils-CkWIZv10.js","assets/geometryEngine-BPlMUEF4.js","assets/geometryEngineBase-yFIvKOkM.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-C3aPiAZk.js","assets/quat-CQllV6qx.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/ReactiveSet-N14vvoiY.js","assets/ByteSizeUnit-BsxeN7wM.js","assets/plane-Cm5ATwSk.js","assets/mat4f64-CSKppSlJ.js","assets/sphere-Ccinv2Ko.js","assets/mat3-CCtmvIux.js","assets/MeshTransform-BdLijvYT.js","assets/meshVertexSpaceUtils-Br2zZLV7.js","assets/MeshLocalVertexSpace-BVQfGmj4.js","assets/MapView-7hqc2w8m.js","assets/CollectionFlattener-CTw_eXOA.js","assets/TileInfo-X-DVPDNH.js","assets/TileKey-DZd6gJy7.js","assets/jsxFactory-C0q8jVKr.js","assets/uuid-Cl5lrJ4c.js","assets/signal-C7Z0zfYm.js","assets/ColorBackground-CCzJQZw-.js","assets/basemapUtils-RODjC3R-.js","assets/TablesMixin-D5Abru63.js","assets/HeightModelInfo-DY5GmORu.js","assets/ReactiveMap-Btmvxhy1.js","assets/a11yUtils-DR3mHIY3.js","assets/ViewingMode-dBUh39ak.js","assets/mat2df32-orApM5a3.js","assets/vec2f32-BbH2jxlN.js","assets/unitBezier-BX6NeAEr.js","assets/Scheduler-Y5S3bHF4.js","assets/Tile-Bke8hHhA.js","assets/TileKey-nDEHDDFT.js","assets/QueueProcessor-DEWsxSyU.js","assets/quickselect-QQC62dOK.js","assets/definitions-C0Jy3zs7.js","assets/enums-Dk3osxpS.js","assets/Texture-DjetOvUR.js","assets/imageUtils-DdVwTzau.js","assets/capabilities-A2uoe7dc.js","assets/themeUtils-C3zvZbsE.js","assets/globalCss-CZa70j6i.js","assets/accessibleHandler-ZJ2HMe1D.js","assets/GoTo-BgN2O0Pt.js","assets/ZoomViewModel-CCupbAtb.js","assets/earcut-Lltz9D9k.js","assets/triangle-DckyAzb7.js","assets/lineSegment-CWu1OhXc.js","assets/spatialReferenceEllipsoidUtils-CyKB2yXE.js","assets/cimSymbolUtils-BEawzYi7.js","assets/drapedUtils-DKa8oR7x.js","assets/boundedPlane-cnueKAEc.js"])))=>i.map(i=>d[i]);
import{ar as u,f6 as v,av as l,f7 as y,dv as d,f8 as g,_ as f,j as r,m as n,k as T}from"./index-Bs-G_wsu.js";import{h as w}from"./UpdatingHandles-BZI7TPX6.js";import{_ as p}from"./MapView-7hqc2w8m.js";import"./CollectionFlattener-CTw_eXOA.js";import"./TileInfo-X-DVPDNH.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-C0q8jVKr.js";import"./uuid-Cl5lrJ4c.js";import"./signal-C7Z0zfYm.js";import"./ColorBackground-CCzJQZw-.js";import"./basemapUtils-RODjC3R-.js";import"./utils-DzB8n6BG.js";import"./TablesMixin-D5Abru63.js";import"./Layer-BD5fEEcE.js";import"./GraphicsCollection-BPX1FENo.js";import"./HeightModelInfo-DY5GmORu.js";import"./ReactiveMap-Btmvxhy1.js";import"./a11yUtils-DR3mHIY3.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-CCtmvIux.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-Y5S3bHF4.js";import"./Tile-Bke8hHhA.js";import"./TileKey-nDEHDDFT.js";import"./QueueProcessor-DEWsxSyU.js";import"./quickselect-QQC62dOK.js";import"./vec32-DrHtz8AR.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DjetOvUR.js";import"./imageUtils-DdVwTzau.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-ZJ2HMe1D.js";import"./GoTo-BgN2O0Pt.js";import"./ZoomViewModel-CCupbAtb.js";const m={redo:"r",undo:"z"},h=Symbol(),c=Symbol(),_=Symbol();let i=class extends u{constructor(t){super(t),this._tool=null,this._updatingHandles=new w,this.enabled=!1,this._onPointerMove=v(async e=>{const o=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e));this.destroyed||(this.removeHandles(c),o&&o!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(l(()=>this.view.cursor=null),c)))})}initialize(){this.addHandles(y(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,t=>this._setEnabled(t),d),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const t=this.selectedElement;if(!t)return null;const{layer:{source:e}}=this;return e?"hasElement"in e?e.hasElement(t)?t:null:e===t?t:null:null}get _preferredInteractionTool(){var t;return((t=this.options)==null?void 0:t.tool)??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(t){if(this.removeHandles(h),!t)return;const{view:e}=this;this.addHandles([e.on("immediate-click",o=>this._onClick(o),p.TOOL),e.on("pointer-move",o=>this._onPointerMove(o).catch(()=>{}),p.TOOL),e.on("key-down",o=>{var a,s;o.key===m.undo&&((a=this._tool)!=null&&a.canUndo())&&(this._tool.undo(),o.stopPropagation()),o.key===m.redo&&((s=this._tool)!=null&&s.canRedo())&&(this._tool.redo(),o.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,o=>this._selectedElementChanged(o),d),l(()=>{e.cursor=null,this._removeTool()})],h)}async _findElementAtScreenPoint(t){const e=(await this.view.hitTest(t,{include:[this.layer]})).results[0];return(e==null?void 0:e.type)==="media"?e.element:null}async _onClick(t){await this._updatingHandles.addPromise(t.async(async()=>{const e=await this._findElementAtScreenPoint(t);this.destroyed||(e&&t.stopPropagation(),this.selectedElement=e,this.selectedElement&&(this.view.cursor=null))}))}_preferredInteractionToolChanged(){const{_tool:t}=this;t&&(this._preferredInteractionTool===t.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(_),this._removeTool();const t=this._validatedSelectedElement;if(!t)return;const e=new AbortController;this.addHandles(g(e),_);const{TransformTool:o,ControlPointsTransformTool:a}=await f(()=>import("./editingTools-BHb93hMz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72]));if(e.signal.aborted)return;const{view:s}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new o({target:t,view:s});break;case"reshape":this._tool=new a({mediaElement:t,view:s})}this.addHandles([l(()=>{this._tool&&(s.tools.remove(this._tool),this._tool=null)})],this._tool),s.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(t){t!=null&&t.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};r([n()],i.prototype,"_validatedSelectedElement",null),r([n()],i.prototype,"_preferredInteractionTool",null),r([n({constructOnly:!0})],i.prototype,"view",void 0),r([n({constructOnly:!0})],i.prototype,"layer",void 0),r([n()],i.prototype,"selectedElement",void 0),r([n()],i.prototype,"enabled",void 0),r([n()],i.prototype,"options",void 0),r([n()],i.prototype,"updating",null),i=r([T("esri.views.2d.layers.support.MediaLayerInteraction")],i);export{i as MediaLayerInteraction};
