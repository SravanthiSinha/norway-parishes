import{E as h,R as t,h as s}from"./MapView-DR3O-qOW.js";import{i}from"./AGraphicContainer-I4Vszzjy.js";class l extends i{renderChildren(e){for(const r of this.children)r.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some(r=>r.hasData)){switch(e.drawPhase){case h.MAP:this._renderChildren(e,t.All);break;case h.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){s(e,!1,r=>{this._renderChildren(r,t.Highlight)})}}export{l as t};
//# sourceMappingURL=GraphicContainer-PZXDQea7.js.map
