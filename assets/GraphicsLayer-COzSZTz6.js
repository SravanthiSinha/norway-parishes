import{j as t,m as i,k as p}from"./index-Vdm0PCas.js";import{c as o,l as a}from"./GraphicsCollection-BXU5Eiom.js";import{f as h}from"./Layer-vfI2MkUG.js";import{l as n}from"./BlendLayer-BlWZsEiI.js";import{t as c}from"./ScaleRangeLayer-D6kYzICO.js";import{h as d}from"./ElevationInfo-8bL8CsLE.js";let r=class extends n(c(h)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new o,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,s){return super.on(e,s)}graphicChanged(e){this.emit("graphic-update",e)}};t([i({type:d})],r.prototype,"elevationInfo",void 0),t([i(a(o,"graphics"))],r.prototype,"graphics",void 0),t([i({type:["show","hide"]})],r.prototype,"listMode",void 0),t([i()],r.prototype,"screenSizePerspectiveEnabled",void 0),t([i({readOnly:!0})],r.prototype,"type",void 0),t([i({constructOnly:!0})],r.prototype,"internal",void 0),r=t([p("esri.layers.GraphicsLayer")],r);const f=r;export{f as h};
//# sourceMappingURL=GraphicsLayer-COzSZTz6.js.map