const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingTools-G7j_D2F-.js","assets/index-oLM2nnvm.js","assets/index-CJb7-diN.css","assets/projectVectorToVector-DDEdQ9yW.js","assets/projectPointToVector-D2dp1OBD.js","assets/elevationInfoUtils-iXm64Wn7.js","assets/vec32-CPxrCE8J.js","assets/UpdatingHandles-BTHg7jZN.js","assets/geodesicUtils-BYCvEZih.js","assets/geometryEngine-CZuNJlPA.js","assets/geometryEngineBase-yFIvKOkM.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-CWZLRya6.js","assets/quat-BrHQ5eIm.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/ReactiveSet-BfQByuzN.js","assets/ByteSizeUnit-BsxeN7wM.js","assets/plane-CqWLH6L8.js","assets/mat4f64-CSKppSlJ.js","assets/sphere-C1aYxAGu.js","assets/mat3-CLwqfO5w.js","assets/MeshTransform-CSr3h3hN.js","assets/meshVertexSpaceUtils-D2vEcKoR.js","assets/MeshLocalVertexSpace-DGGyeSkp.js","assets/MapView-D7n99A5e.js","assets/CollectionFlattener-B8fqvrQQ.js","assets/TileInfo-D07vu1eF.js","assets/TileKey-DZd6gJy7.js","assets/jsxFactory-DFbEMHlO.js","assets/uuid-Cl5lrJ4c.js","assets/signal-CJj9Tg1d.js","assets/ColorBackground-DnLp5fuI.js","assets/basemapUtils-Cx0e7D1U.js","assets/TablesMixin-C_yCmV8H.js","assets/HeightModelInfo-Do10YdaJ.js","assets/ReactiveMap-2zGIT3WW.js","assets/a11yUtils-BusOxp_K.js","assets/ViewingMode-dBUh39ak.js","assets/mat2df32-orApM5a3.js","assets/vec2f32-BbH2jxlN.js","assets/unitBezier-BX6NeAEr.js","assets/Scheduler-C-sVZFo4.js","assets/Tile-BW_kwcYX.js","assets/TileKey-CaZurJXl.js","assets/QueueProcessor-Dzz9tyea.js","assets/quickselect-QQC62dOK.js","assets/definitions-C0Jy3zs7.js","assets/enums-Dk3osxpS.js","assets/Texture-xEuDyqlP.js","assets/imageUtils-Db8kUexz.js","assets/capabilities-A2uoe7dc.js","assets/themeUtils-C3zvZbsE.js","assets/globalCss-CZa70j6i.js","assets/accessibleHandler-nxlbE9n8.js","assets/GoTo-Bz4Kpj-s.js","assets/ZoomViewModel-1CPd-GI8.js","assets/earcut-Lltz9D9k.js","assets/triangle-DFU5jtk1.js","assets/lineSegment-Uvnb6wdt.js","assets/spatialReferenceEllipsoidUtils-DNQs3HQm.js","assets/cimSymbolUtils-BV2Xfixo.js","assets/drapedUtils-BBcf0Z9x.js","assets/boundedPlane-DfUsoT3y.js"])))=>i.map(i=>d[i]);
import{an as u,fc as v,ar as l,fd as y,dw as d,fe as g,_ as f,j as r,m as n,k as w}from"./index-oLM2nnvm.js";import{h as T}from"./UpdatingHandles-BTHg7jZN.js";import{_ as p}from"./MapView-D7n99A5e.js";import"./CollectionFlattener-B8fqvrQQ.js";import"./TileInfo-D07vu1eF.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-DFbEMHlO.js";import"./uuid-Cl5lrJ4c.js";import"./signal-CJj9Tg1d.js";import"./ColorBackground-DnLp5fuI.js";import"./basemapUtils-Cx0e7D1U.js";import"./TablesMixin-C_yCmV8H.js";import"./HeightModelInfo-Do10YdaJ.js";import"./ReactiveMap-2zGIT3WW.js";import"./a11yUtils-BusOxp_K.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-CLwqfO5w.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-C-sVZFo4.js";import"./Tile-BW_kwcYX.js";import"./TileKey-CaZurJXl.js";import"./QueueProcessor-Dzz9tyea.js";import"./quickselect-QQC62dOK.js";import"./vec32-CPxrCE8J.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-xEuDyqlP.js";import"./imageUtils-Db8kUexz.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-nxlbE9n8.js";import"./GoTo-Bz4Kpj-s.js";import"./ZoomViewModel-1CPd-GI8.js";const m={redo:"r",undo:"z"},h=Symbol(),c=Symbol(),_=Symbol();let i=class extends u{constructor(t){super(t),this._tool=null,this._updatingHandles=new T,this.enabled=!1,this._onPointerMove=v(async e=>{const o=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e));this.destroyed||(this.removeHandles(c),o&&o!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(l(()=>this.view.cursor=null),c)))})}initialize(){this.addHandles(y(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,t=>this._setEnabled(t),d),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const t=this.selectedElement;if(!t)return null;const{layer:{source:e}}=this;return e?"hasElement"in e?e.hasElement(t)?t:null:e===t?t:null:null}get _preferredInteractionTool(){var t;return((t=this.options)==null?void 0:t.tool)??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(t){if(this.removeHandles(h),!t)return;const{view:e}=this;this.addHandles([e.on("immediate-click",o=>this._onClick(o),p.TOOL),e.on("pointer-move",o=>this._onPointerMove(o).catch(()=>{}),p.TOOL),e.on("key-down",o=>{var a,s;o.key===m.undo&&((a=this._tool)!=null&&a.canUndo())&&(this._tool.undo(),o.stopPropagation()),o.key===m.redo&&((s=this._tool)!=null&&s.canRedo())&&(this._tool.redo(),o.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,o=>this._selectedElementChanged(o),d),l(()=>{e.cursor=null,this._removeTool()})],h)}async _findElementAtScreenPoint(t){const e=(await this.view.hitTest(t,{include:[this.layer]})).results[0];return(e==null?void 0:e.type)==="media"?e.element:null}async _onClick(t){await this._updatingHandles.addPromise(t.async(async()=>{const e=await this._findElementAtScreenPoint(t);this.destroyed||(e&&t.stopPropagation(),this.selectedElement=e,this.selectedElement&&(this.view.cursor=null))}))}_preferredInteractionToolChanged(){const{_tool:t}=this;t&&(this._preferredInteractionTool===t.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(_),this._removeTool();const t=this._validatedSelectedElement;if(!t)return;const e=new AbortController;this.addHandles(g(e),_);const{TransformTool:o,ControlPointsTransformTool:a}=await f(()=>import("./editingTools-G7j_D2F-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]));if(e.signal.aborted)return;const{view:s}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new o({target:t,view:s});break;case"reshape":this._tool=new a({mediaElement:t,view:s})}this.addHandles([l(()=>{this._tool&&(s.tools.remove(this._tool),this._tool=null)})],this._tool),s.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(t){t!=null&&t.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};r([n()],i.prototype,"_validatedSelectedElement",null),r([n()],i.prototype,"_preferredInteractionTool",null),r([n({constructOnly:!0})],i.prototype,"view",void 0),r([n({constructOnly:!0})],i.prototype,"layer",void 0),r([n()],i.prototype,"selectedElement",void 0),r([n()],i.prototype,"enabled",void 0),r([n()],i.prototype,"options",void 0),r([n()],i.prototype,"updating",null),i=r([w("esri.views.2d.layers.support.MediaLayerInteraction")],i);export{i as MediaLayerInteraction};
//# sourceMappingURL=MediaLayerInteraction-BWnCDXKr.js.map
