import{j as i,k as s}from"./index-Dqo4rVFT.js";import{E as a,h,R as n}from"./MapView-PMUr_KlW.js";import{i as o}from"./AGraphicContainer-DbTCi85d.js";let t=class extends o{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===a.HIGHLIGHT&&this.children.some(r=>r.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),h(e,!0,r=>{this._renderChildren(r,n.All)},0))}};t=i([s("esri.views.2d.layers.graphics.HighlightGraphicContainer")],t);const p=t;export{p as h};
//# sourceMappingURL=HighlightGraphicContainer-7c3SCgwf.js.map
