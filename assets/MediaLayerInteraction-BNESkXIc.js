const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingTools-DROzkpjq.js","assets/index-UqHiE_Ae.js","assets/index-Jib82o7I.css","assets/projectVectorToVector-DTaH3gVR.js","assets/projectPointToVector-CadVWhZ1.js","assets/elevationInfoUtils-CRWKOv6m.js","assets/vec32-BSCBtxXw.js","assets/UpdatingHandles-DRH__O1p.js","assets/geodesicUtils-BfeqSqxl.js","assets/geometryEngine-C5PrZhcn.js","assets/geometryEngineBase-yFIvKOkM.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-DskQsV2S.js","assets/quat-ySvJIA7Y.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/ReactiveSet-E0bDRQMF.js","assets/ByteSizeUnit-BsxeN7wM.js","assets/plane-7YoF7ZLn.js","assets/mat4f64-CSKppSlJ.js","assets/sphere-iTe_0FTJ.js","assets/mat3-DBYGNwdL.js","assets/MeshTransform-Q6ADUjO-.js","assets/meshVertexSpaceUtils-D_rPE_bz.js","assets/MeshLocalVertexSpace-D3fjzxIC.js","assets/MapView-CwL5r88G.js","assets/CollectionFlattener-DL2lHpIM.js","assets/TileInfo-DJQM_9go.js","assets/TileKey-DZd6gJy7.js","assets/jsxFactory-CdNgn7Aa.js","assets/uuid-Cl5lrJ4c.js","assets/signal-DKSRHCVR.js","assets/ColorBackground-Bi33awfy.js","assets/basemapUtils-DZ-47i8I.js","assets/TablesMixin-CfmLPAKk.js","assets/HeightModelInfo-DL8_Qm8B.js","assets/ReactiveMap-luRGCbFK.js","assets/a11yUtils-DHAPBTzw.js","assets/ViewingMode-dBUh39ak.js","assets/mat2df32-orApM5a3.js","assets/vec2f32-BbH2jxlN.js","assets/unitBezier-BX6NeAEr.js","assets/Scheduler-DUHbsyAq.js","assets/Tile-CES3BSDT.js","assets/TileKey-DyhjBuuS.js","assets/QueueProcessor-C7Nw1mRf.js","assets/quickselect-QQC62dOK.js","assets/definitions-C0Jy3zs7.js","assets/enums-Dk3osxpS.js","assets/Texture-CKCAhLxt.js","assets/imageUtils-BBrhX1kr.js","assets/capabilities-A2uoe7dc.js","assets/themeUtils-C3zvZbsE.js","assets/globalCss-CZa70j6i.js","assets/accessibleHandler-ERNWwYjd.js","assets/GoTo-l5OvWKwa.js","assets/ZoomViewModel-DuMcI0Te.js","assets/earcut-Lltz9D9k.js","assets/triangle-DezytFEE.js","assets/lineSegment-Bk30srDh.js","assets/spatialReferenceEllipsoidUtils-48JarwG2.js","assets/cimSymbolUtils-D2jw5EuF.js","assets/drapedUtils-DpPTafQr.js","assets/boundedPlane-BbegZmSX.js"])))=>i.map(i=>d[i]);
import{an as u,fc as v,ar as l,fd as y,dw as d,fe as g,_ as f,j as r,m as n,k as w}from"./index-UqHiE_Ae.js";import{h as T}from"./UpdatingHandles-DRH__O1p.js";import{_ as p}from"./MapView-CwL5r88G.js";import"./CollectionFlattener-DL2lHpIM.js";import"./TileInfo-DJQM_9go.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-CdNgn7Aa.js";import"./uuid-Cl5lrJ4c.js";import"./signal-DKSRHCVR.js";import"./ColorBackground-Bi33awfy.js";import"./basemapUtils-DZ-47i8I.js";import"./TablesMixin-CfmLPAKk.js";import"./HeightModelInfo-DL8_Qm8B.js";import"./ReactiveMap-luRGCbFK.js";import"./a11yUtils-DHAPBTzw.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-DBYGNwdL.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DUHbsyAq.js";import"./Tile-CES3BSDT.js";import"./TileKey-DyhjBuuS.js";import"./QueueProcessor-C7Nw1mRf.js";import"./quickselect-QQC62dOK.js";import"./vec32-BSCBtxXw.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-CKCAhLxt.js";import"./imageUtils-BBrhX1kr.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-ERNWwYjd.js";import"./GoTo-l5OvWKwa.js";import"./ZoomViewModel-DuMcI0Te.js";const m={redo:"r",undo:"z"},h=Symbol(),c=Symbol(),_=Symbol();let i=class extends u{constructor(t){super(t),this._tool=null,this._updatingHandles=new T,this.enabled=!1,this._onPointerMove=v(async e=>{const o=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e));this.destroyed||(this.removeHandles(c),o&&o!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(l(()=>this.view.cursor=null),c)))})}initialize(){this.addHandles(y(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,t=>this._setEnabled(t),d),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const t=this.selectedElement;if(!t)return null;const{layer:{source:e}}=this;return e?"hasElement"in e?e.hasElement(t)?t:null:e===t?t:null:null}get _preferredInteractionTool(){var t;return((t=this.options)==null?void 0:t.tool)??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(t){if(this.removeHandles(h),!t)return;const{view:e}=this;this.addHandles([e.on("immediate-click",o=>this._onClick(o),p.TOOL),e.on("pointer-move",o=>this._onPointerMove(o).catch(()=>{}),p.TOOL),e.on("key-down",o=>{var a,s;o.key===m.undo&&((a=this._tool)!=null&&a.canUndo())&&(this._tool.undo(),o.stopPropagation()),o.key===m.redo&&((s=this._tool)!=null&&s.canRedo())&&(this._tool.redo(),o.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,o=>this._selectedElementChanged(o),d),l(()=>{e.cursor=null,this._removeTool()})],h)}async _findElementAtScreenPoint(t){const e=(await this.view.hitTest(t,{include:[this.layer]})).results[0];return(e==null?void 0:e.type)==="media"?e.element:null}async _onClick(t){await this._updatingHandles.addPromise(t.async(async()=>{const e=await this._findElementAtScreenPoint(t);this.destroyed||(e&&t.stopPropagation(),this.selectedElement=e,this.selectedElement&&(this.view.cursor=null))}))}_preferredInteractionToolChanged(){const{_tool:t}=this;t&&(this._preferredInteractionTool===t.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(_),this._removeTool();const t=this._validatedSelectedElement;if(!t)return;const e=new AbortController;this.addHandles(g(e),_);const{TransformTool:o,ControlPointsTransformTool:a}=await f(()=>import("./editingTools-DROzkpjq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]));if(e.signal.aborted)return;const{view:s}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new o({target:t,view:s});break;case"reshape":this._tool=new a({mediaElement:t,view:s})}this.addHandles([l(()=>{this._tool&&(s.tools.remove(this._tool),this._tool=null)})],this._tool),s.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(t){t!=null&&t.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};r([n()],i.prototype,"_validatedSelectedElement",null),r([n()],i.prototype,"_preferredInteractionTool",null),r([n({constructOnly:!0})],i.prototype,"view",void 0),r([n({constructOnly:!0})],i.prototype,"layer",void 0),r([n()],i.prototype,"selectedElement",void 0),r([n()],i.prototype,"enabled",void 0),r([n()],i.prototype,"options",void 0),r([n()],i.prototype,"updating",null),i=r([w("esri.views.2d.layers.support.MediaLayerInteraction")],i);export{i as MediaLayerInteraction};
//# sourceMappingURL=MediaLayerInteraction-BNESkXIc.js.map
