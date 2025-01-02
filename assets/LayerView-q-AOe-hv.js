import{j as i,m as s,k as y,P,bu as H,eu as q,aX as x,c0 as E,ae as S,dF as T,I,ao as h,gE as p,aq as j,s as A,ez as V,hX as L,c3 as U,an as N,v as k}from"./index-oLM2nnvm.js";import{e as M}from"./utils-BQBvadb7.js";import{n as B}from"./Container-BniKkuPm.js";import{i as C,l as F,a as G,r as z,m as D}from"./MapView-D7n99A5e.js";import{r as W,a as _}from"./layerViewUtils-CaiKWGQu.js";import{h as X}from"./UpdatingHandles-BTHg7jZN.js";let g=class extends P{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};i([s({readOnly:!0})],g.prototype,"version",null),g=i([y("esri.views.layers.support.ClipArea")],g);const R=g;var w;let d=w=class extends R{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new w({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};i([s({type:[Number,String],json:{write:!0}})],d.prototype,"left",void 0),i([s({type:[Number,String],json:{write:!0}})],d.prototype,"right",void 0),i([s({type:[Number,String],json:{write:!0}})],d.prototype,"top",void 0),i([s({type:[Number,String],json:{write:!0}})],d.prototype,"bottom",void 0),d=w=i([y("esri.views.layers.support.ClipRect")],d);const J=d;var b;const K={base:q,key:"type",typeMap:{extent:x,polygon:E}};let v=b=class extends R{constructor(t){super(t),this.type="geometry",this.geometry=null}clone(){var t;return new b({geometry:((t=this.geometry)==null?void 0:t.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};i([s({types:K,json:{read:H,write:!0}})],v.prototype,"geometry",void 0),v=b=i([y("esri.views.layers.support.Geometry")],v);const Q=v;let m=class extends R{constructor(t){super(t),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};i([s({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),m=i([y("esri.views.layers.support.Path")],m);const Y=m,f=S.ofType({key:"type",base:null,typeMap:{rect:J,path:Y,geometry:Q}}),Z=new(S.ofType(C)),ae=t=>{let r=class extends t{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var l,u,c;const e=((l=this.view)==null?void 0:l.spatialReferenceLocked)??!0;((u=this.view)==null?void 0:u.spatialReference)&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new I("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new B),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([h(()=>this.suspended,n=>{this.container&&(this.container.visible=!n)},p),h(()=>this.updateSuspended,n=>{this.view&&!n&&this.updateRequested&&this.view.requestUpdate()},p),h(()=>{var n;return((n=this.layer)==null?void 0:n.opacity)??1},n=>{this.container&&(this.container.opacity=n)},p),h(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",n=>{this.container&&(this.container.blendMode=n)},p),h(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,n=>{this.container&&(this.container.effect=n)},p),h(()=>this._mergedHighlights.items.map(n=>({name:n.name,options:{fillColor:n.options.color,haloColor:n.options.haloColor,fillOpacity:n.options.fillOpacity,haloOpacity:n.options.haloOpacity,haloWidth:n.options.haloWidth,haloBlur:n.options.haloBlur}})),()=>{this.container.highlightGradient=G(this.container.highlightGradient,this._mergedHighlights.items)},p),h(()=>this._mergedHighlights.items.map(n=>n.name),()=>{this._updateHighlights()}),j(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},p),h(()=>{var n;return{scale:(n=this.view)==null?void 0:n.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:n,scaleRange:O})=>{const $=W(O,n);$!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=$)},p)],"constructor"),(c=this.view)!=null&&c.whenLayerView?this.view.whenLayerView(this.layer).then(n=>{n===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}_updateHighlights(){}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return z(this)}set highlightOptions(e){D(this,e)}get _mergedHighlights(){if(!this.view)return Z;if(!this.highlights)return this.view.highlights;const e=this.view.highlights.clone();for(const a of this.highlights){const l=e.find(u=>u.name===a.name);l&&(l.options=a.options)}return e}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){var a;const e=(a=this.view)==null?void 0:a.spatialReference;return e==null||this.supportsSpatialReference(e)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((e=this._updatingHandles)!=null&&e.updating)||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,a){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){var e;if(!this.spatialReferenceSupported)return!1;switch((e=this.layer)==null?void 0:e.type){case"link-chart":case"knowledge-graph-sublayer":break;default:if(M(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),a=!this.spatialReferenceSupported;return a&&(e.spatialReferenceNotSupported=a),e}addAttachHandles(e){this.addHandles(e,"attach")}_getHighlightBits(e){e=new Set(e);let a=1,l=0;if(!this.view)return 0;const u=this._mergedHighlights;for(const{name:c}of u)e.delete(c)&&(l=a),a<<=1;for(const c of e)A.getLogger(this).error("#highlights",`${c} was not found. Features in this group will not be highlighted.`);return l}};return i([s()],r.prototype,"attached",void 0),i([s({type:f,set(e){const a=T(e,this._get("clips"),f);this._set("clips",a)}})],r.prototype,"clips",void 0),i([s()],r.prototype,"container",void 0),i([s({type:F})],r.prototype,"highlightOptions",null),i([s({type:S.ofType(C)})],r.prototype,"highlights",void 0),i([s()],r.prototype,"_mergedHighlights",null),i([s()],r.prototype,"moving",void 0),i([s({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),i([s({readOnly:!0})],r.prototype,"updateParameters",void 0),i([s()],r.prototype,"updateRequested",void 0),i([s()],r.prototype,"updating",null),i([s()],r.prototype,"view",void 0),i([s()],r.prototype,"_visibleAtCurrentScale",void 0),i([s({readOnly:!0})],r.prototype,"visibleAtCurrentScale",null),r=i([y("esri.views.2d.layers.LayerView2D")],r),r};let o=class extends V(L(U.EventedMixin(N))){constructor(t){super(t),this._updatingHandles=new X,this.layer=null,this.parent=null}initialize(){this.when().catch(t=>{var r;if(t.name!=="layerview:create-error"){const e=this.layer&&this.layer.id||"no id",a=((r=this.layer)==null?void 0:r.title)||"no title";A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${a}', id: '${e}')`,t)}})}destroy(){this._updatingHandles=k(this._updatingHandles)}get fullOpacity(){var t,r;return(((t=this.layer)==null?void 0:t.opacity)??1)*(((r=this.parent)==null?void 0:r.fullOpacity)??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var t;return!this.suspended&&((t=this.layer)==null?void 0:t.legendEnabled)===!0}get updating(){var t;return!(!((t=this._updatingHandles)!=null&&t.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var t;return((t=this.layer)==null?void 0:t.visible)===!0}set visible(t){this._overrideIfSome("visible",t)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,r=(e=this.layer)==null?void 0:e.visibilityTimeExtent;return!t||!r||!t.intersection(r).isEmpty}canResume(){var r,e,a;const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&((r=this.layer)==null?void 0:r.loaded)&&!((e=this.parent)!=null&&e.suspended)&&((a=this.view)==null?void 0:a.ready)&&_(t)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var a,l;const t=(a=this.parent)!=null&&a.suspended?this.parent.suspendInfo:{};(l=this.view)!=null&&l.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0);const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return _(e)&&this.visibleAtCurrentScale||(t.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(t.outsideVisibilityTimeExtent=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};i([s()],o.prototype,"view",void 0),i([s()],o.prototype,"fullOpacity",null),i([s()],o.prototype,"layer",void 0),i([s()],o.prototype,"parent",void 0),i([s({readOnly:!0})],o.prototype,"suspended",null),i([s({readOnly:!0})],o.prototype,"suspendInfo",null),i([s({readOnly:!0})],o.prototype,"legendEnabled",null),i([s({type:Boolean,readOnly:!0})],o.prototype,"updating",null),i([s({readOnly:!0})],o.prototype,"updatingProgress",null),i([s()],o.prototype,"updateSuspended",null),i([s()],o.prototype,"visible",null),i([s({readOnly:!0})],o.prototype,"visibleAtCurrentScale",null),i([s({readOnly:!0})],o.prototype,"visibleAtCurrentTimeExtent",null),o=i([y("esri.views.layers.LayerView")],o);const oe=o;export{Q as a,ae as j,oe as y};
//# sourceMappingURL=LayerView-q-AOe-hv.js.map
