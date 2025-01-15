import{an as m,b9 as u,j as a,m as i,k as c}from"./index-UqHiE_Ae.js";import{d as p}from"./scaleUtils-DwfSkDia.js";import{n as h}from"./floorFilterUtils-DZ5C6FQv.js";import{n as b}from"./sublayerUtils-CFd4wTDq.js";const d={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let r=class extends m{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const o=h(this.floors,s);return s.toExportImageJSON(o)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&b(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(d[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){var o;const e=!!((o=this.floors)!=null&&o.length),s=this.visibleSublayers.filter(l=>l.definitionExpression!=null||e&&l.floorInfo!=null);return s.length?JSON.stringify(s.reduce((l,n)=>{const t=h(this.floors,n),y=u(t,n.definitionExpression);return y!=null&&(l[n.id]=y),l},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,o=this.scale,l=t=>{t.visible&&(o===0||p(o,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(l):e.unshift(t))};s&&s.forEach(l);const n=this._get("visibleSublayers");return!n||n.length!==e.length||n.some((t,y)=>e[y]!==t)?e:n}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};a([i({readOnly:!0})],r.prototype,"dynamicLayers",null),a([i()],r.prototype,"floors",void 0),a([i({readOnly:!0})],r.prototype,"hasDynamicLayers",null),a([i()],r.prototype,"layer",null),a([i({readOnly:!0})],r.prototype,"layers",null),a([i({readOnly:!0})],r.prototype,"layerDefs",null),a([i({type:Number})],r.prototype,"scale",void 0),a([i({readOnly:!0})],r.prototype,"version",null),a([i({readOnly:!0})],r.prototype,"visibleSublayers",null),r=a([c("esri.layers.support.ExportImageParameters")],r);export{r as y};
//# sourceMappingURL=ExportImageParameters-DKK4nk9H.js.map
