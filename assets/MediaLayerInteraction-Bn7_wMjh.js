const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingTools-DBqAip4v.js","assets/index-CRM8otC0.js","assets/index-Jib82o7I.css","assets/projectVectorToVector-WneoG4L-.js","assets/projectPointToVector-DggM3ivD.js","assets/elevationInfoUtils-CCDZpXOv.js","assets/vec32-rRhbC1zp.js","assets/UpdatingHandles-BwJZEp3Q.js","assets/geodesicUtils-EQc2J934.js","assets/geometryEngine-C32OZEEr.js","assets/geometryEngineBase-yFIvKOkM.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-2_gx1hl1.js","assets/quat-jexIQZKa.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/ReactiveSet-BOZ1HHw5.js","assets/ByteSizeUnit-BsxeN7wM.js","assets/plane-DusDl4-w.js","assets/mat4f64-CSKppSlJ.js","assets/sphere-okqWxcUy.js","assets/mat3-B77SXXrK.js","assets/MeshTransform-BuT0RVos.js","assets/meshVertexSpaceUtils-BEUkThyD.js","assets/MeshLocalVertexSpace-BFFEs8cg.js","assets/MapView-BI6jY6ja.js","assets/CollectionFlattener-Smnlsg-w.js","assets/TileInfo-BaaIVUiP.js","assets/TileKey-DZd6gJy7.js","assets/jsxFactory-BDeEz4Cu.js","assets/uuid-Cl5lrJ4c.js","assets/signal-B5brgr9U.js","assets/ColorBackground-QnGkf2MC.js","assets/basemapUtils-DIGbo40K.js","assets/TablesMixin-2MmYYsfl.js","assets/HeightModelInfo-Cqv1ovWQ.js","assets/ReactiveMap-KqFN-1SA.js","assets/a11yUtils-Ca_3r4ne.js","assets/ViewingMode-dBUh39ak.js","assets/mat2df32-orApM5a3.js","assets/vec2f32-BbH2jxlN.js","assets/unitBezier-BX6NeAEr.js","assets/Scheduler-BwwMSyZq.js","assets/Tile-Dt9us2ys.js","assets/TileKey-CGlHhlfX.js","assets/QueueProcessor-DEhVKg8A.js","assets/quickselect-QQC62dOK.js","assets/definitions-C0Jy3zs7.js","assets/enums-Dk3osxpS.js","assets/Texture-ByNBwYCf.js","assets/imageUtils-C0VlcWxB.js","assets/capabilities-A2uoe7dc.js","assets/themeUtils-C3zvZbsE.js","assets/globalCss-CZa70j6i.js","assets/accessibleHandler-gByKcOgw.js","assets/GoTo-1PJFxELf.js","assets/ZoomViewModel-DrFUYDpC.js","assets/earcut-Lltz9D9k.js","assets/triangle-CbBIbi5m.js","assets/lineSegment-DP5Yudw5.js","assets/spatialReferenceEllipsoidUtils-B-AHBmBS.js","assets/cimSymbolUtils-CgfcDdg1.js","assets/drapedUtils-C-FnYbOa.js","assets/boundedPlane-BslheMDt.js"])))=>i.map(i=>d[i]);
import{an as u,fc as v,ar as l,fd as y,dw as d,fe as g,_ as f,j as r,m as n,k as w}from"./index-CRM8otC0.js";import{h as T}from"./UpdatingHandles-BwJZEp3Q.js";import{_ as p}from"./MapView-BI6jY6ja.js";import"./CollectionFlattener-Smnlsg-w.js";import"./TileInfo-BaaIVUiP.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-BDeEz4Cu.js";import"./uuid-Cl5lrJ4c.js";import"./signal-B5brgr9U.js";import"./ColorBackground-QnGkf2MC.js";import"./basemapUtils-DIGbo40K.js";import"./TablesMixin-2MmYYsfl.js";import"./HeightModelInfo-Cqv1ovWQ.js";import"./ReactiveMap-KqFN-1SA.js";import"./a11yUtils-Ca_3r4ne.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-B77SXXrK.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-BwwMSyZq.js";import"./Tile-Dt9us2ys.js";import"./TileKey-CGlHhlfX.js";import"./QueueProcessor-DEhVKg8A.js";import"./quickselect-QQC62dOK.js";import"./vec32-rRhbC1zp.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-ByNBwYCf.js";import"./imageUtils-C0VlcWxB.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-gByKcOgw.js";import"./GoTo-1PJFxELf.js";import"./ZoomViewModel-DrFUYDpC.js";const m={redo:"r",undo:"z"},h=Symbol(),c=Symbol(),_=Symbol();let i=class extends u{constructor(t){super(t),this._tool=null,this._updatingHandles=new T,this.enabled=!1,this._onPointerMove=v(async e=>{const o=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e));this.destroyed||(this.removeHandles(c),o&&o!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(l(()=>this.view.cursor=null),c)))})}initialize(){this.addHandles(y(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,t=>this._setEnabled(t),d),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const t=this.selectedElement;if(!t)return null;const{layer:{source:e}}=this;return e?"hasElement"in e?e.hasElement(t)?t:null:e===t?t:null:null}get _preferredInteractionTool(){var t;return((t=this.options)==null?void 0:t.tool)??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(t){if(this.removeHandles(h),!t)return;const{view:e}=this;this.addHandles([e.on("immediate-click",o=>this._onClick(o),p.TOOL),e.on("pointer-move",o=>this._onPointerMove(o).catch(()=>{}),p.TOOL),e.on("key-down",o=>{var a,s;o.key===m.undo&&((a=this._tool)!=null&&a.canUndo())&&(this._tool.undo(),o.stopPropagation()),o.key===m.redo&&((s=this._tool)!=null&&s.canRedo())&&(this._tool.redo(),o.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,o=>this._selectedElementChanged(o),d),l(()=>{e.cursor=null,this._removeTool()})],h)}async _findElementAtScreenPoint(t){const e=(await this.view.hitTest(t,{include:[this.layer]})).results[0];return(e==null?void 0:e.type)==="media"?e.element:null}async _onClick(t){await this._updatingHandles.addPromise(t.async(async()=>{const e=await this._findElementAtScreenPoint(t);this.destroyed||(e&&t.stopPropagation(),this.selectedElement=e,this.selectedElement&&(this.view.cursor=null))}))}_preferredInteractionToolChanged(){const{_tool:t}=this;t&&(this._preferredInteractionTool===t.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(_),this._removeTool();const t=this._validatedSelectedElement;if(!t)return;const e=new AbortController;this.addHandles(g(e),_);const{TransformTool:o,ControlPointsTransformTool:a}=await f(()=>import("./editingTools-DBqAip4v.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]));if(e.signal.aborted)return;const{view:s}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new o({target:t,view:s});break;case"reshape":this._tool=new a({mediaElement:t,view:s})}this.addHandles([l(()=>{this._tool&&(s.tools.remove(this._tool),this._tool=null)})],this._tool),s.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(t){t!=null&&t.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};r([n()],i.prototype,"_validatedSelectedElement",null),r([n()],i.prototype,"_preferredInteractionTool",null),r([n({constructOnly:!0})],i.prototype,"view",void 0),r([n({constructOnly:!0})],i.prototype,"layer",void 0),r([n()],i.prototype,"selectedElement",void 0),r([n()],i.prototype,"enabled",void 0),r([n()],i.prototype,"options",void 0),r([n()],i.prototype,"updating",null),i=r([w("esri.views.2d.layers.support.MediaLayerInteraction")],i);export{i as MediaLayerInteraction};
//# sourceMappingURL=MediaLayerInteraction-Bn7_wMjh.js.map
