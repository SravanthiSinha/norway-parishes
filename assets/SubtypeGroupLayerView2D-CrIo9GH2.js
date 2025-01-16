import{j as a,k as n,ao as d,dw as u,T as l}from"./index-CyZqSx7I.js";import{r as g}from"./FeatureLayerView2D-BtCWQWPZ.js";import"./EffectView-BdfaN_d1.js";import"./featureConversionUtils-Csp7sRNH.js";import"./FeatureEffect-BF-aQnfK.js";import"./timeSupport-rOZ4J2wC.js";import"./ColorBackground-DPL1uv77.js";import"./CollectionFlattener--YLIXmQg.js";import"./basemapUtils-B5xWBuOK.js";import"./TablesMixin-Dsuypqcr.js";import"./LayerView-Dpd_uQQk.js";import"./utils-BQBvadb7.js";import"./Container-oO2iwPwg.js";import"./MapView-Zybj2Flm.js";import"./TileInfo-DG2ccxqu.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-DedD_Mex.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-Cp4ZJv6G.js";import"./signal-DnBrhHvC.js";import"./HeightModelInfo-DpB4FpSN.js";import"./ReactiveMap-BuSe_ui4.js";import"./a11yUtils-DyJ006ul.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-Doicj2BK.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-l2i_4anW.js";import"./Tile-CHxmKSan.js";import"./TileKey-D3jGqBCD.js";import"./QueueProcessor-MZrbs--V.js";import"./quickselect-QQC62dOK.js";import"./vec32-Tb7lCH7n.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DuyBANY2.js";import"./imageUtils-ktEURtV-.js";import"./capabilities-A2uoe7dc.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-DNgKw9a8.js";import"./GoTo-CWArt6fp.js";import"./ZoomViewModel-D19K51we.js";import"./layerViewUtils-JXPfPIK4.js";import"./TechniqueInstance-DLBbjPDi.js";import"./UpdateTracking2D-DyCOjAjR.js";import"./BindType-BmZEZMMh.js";import"./Util-D46_d7ad.js";import"./Program-Cbh0ypC7.js";import"./BufferObject-B2MIfKG-.js";import"./LabelMetric-d29GDEzX.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-B0Y961TR.js";import"./WGLContainer-gMCtDwkT.js";import"./VertexArrayObject-9CIO6I2e.js";import"./ProgramTemplate-6UA_2Kec.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CYvm8ID8.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-CNSNvh87.js";import"./CIMSymbolHelper-DTX7dMhj.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-DsCYkfIl.js";import"./GeometryUtils-Kxxm7sQ0.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./featureReductionUtils-Caulfaw_.js";import"./OrderByInfo-DwXQzY2i.js";import"./labelingInfo-DIOw_3eb.js";import"./labelUtils-BQ01S__V.js";import"./SDFHelper-CcT8kEFj.js";import"./floatRGBA-B2FvwRB5.js";import"./HighlightCounter-Czi-fdpx.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-Xxcz5rjf.js";import"./RefreshableLayerView-DIGXTBGy.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Si=i;export{Si as default};
//# sourceMappingURL=SubtypeGroupLayerView2D-CrIo9GH2.js.map
