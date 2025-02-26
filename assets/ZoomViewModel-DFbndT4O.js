import{an as c,j as t,m as e,k as m,fj as d}from"./index-U3f91iFJ.js";let r=class extends c{get canZoomIn(){var n,i,u;if(!((n=this.view)==null?void 0:n.ready))return!1;const a=(u=(i=this.view)==null?void 0:i.constraints)==null?void 0:u.effectiveMaxScale;return a===0||this._scale>a}get canZoomOut(){var i;const{view:o}=this;if(!(o==null?void 0:o.ready))return!1;const n=(i=o.constraints)==null?void 0:i.effectiveMinScale;return n===0||this._scale<n}get _scale(){var a,n,i;const o=(n=(a=this.view)==null?void 0:a.animation)==null?void 0:n.target;return(o&&"then"in o||o==null?void 0:o.scale)??((i=this.view)==null?void 0:i.scale)??0}};t([e({readOnly:!0})],r.prototype,"canZoomIn",null),t([e({readOnly:!0})],r.prototype,"canZoomOut",null),t([e()],r.prototype,"view",void 0),t([e()],r.prototype,"_scale",null),r=t([m("esri.widgets.Zoom.ZoomConditions2D")],r);const p=r;let l=class extends c{get canZoomIn(){return!!this.view.ready}get canZoomOut(){return!!this.view.ready}};t([e({readOnly:!0})],l.prototype,"canZoomIn",null),t([e({readOnly:!0})],l.prototype,"canZoomOut",null),t([e()],l.prototype,"view",void 0),l=t([m("esri.widgets.Zoom.ZoomConditions3D")],l);const y=l;let s=class extends c{constructor(o){super(o)}destroy(){this.view=null}get canZoomIn(){return this._zoomConditions!=null&&this._zoomConditions.canZoomIn}get canZoomOut(){var o;return this._zoomConditions!=null&&((o=this._zoomConditions)==null?void 0:o.canZoomOut)}get state(){var o;return(o=this.view)!=null&&o.ready?"ready":"disabled"}set view(o){o?o.type==="2d"?this._zoomConditions=new p({view:o}):o.type==="3d"&&(this._zoomConditions=new y({view:o})):this._zoomConditions=null,this._set("view",o)}zoomIn(){if(!this.canZoomIn)return;const o=this.view;o.type==="2d"?o.mapViewNavigation.zoomIn():d(o.goTo({zoomFactor:2}))}zoomOut(){if(!this.canZoomOut)return;const o=this.view;o.type==="2d"?o.mapViewNavigation.zoomOut():d(o.goTo({zoomFactor:.5}))}};t([e()],s.prototype,"_zoomConditions",void 0),t([e()],s.prototype,"canZoomIn",null),t([e()],s.prototype,"canZoomOut",null),t([e({readOnly:!0})],s.prototype,"state",null),t([e()],s.prototype,"view",null),s=t([m("esri.widgets.Zoom.ZoomViewModel")],s);const w=s;export{w as default};
//# sourceMappingURL=ZoomViewModel-DFbndT4O.js.map
