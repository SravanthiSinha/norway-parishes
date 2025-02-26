import{c6 as M,j as V,k as y}from"./index-5zHX_dwk.js";import{e as m,E as c}from"./MapView-BOoKPXYW.js";import{S as I}from"./Bitmap-BBq94RN3.js";import{r as T,t as $}from"./WGLContainer-C5bsGb41.js";import{i as A}from"./TileContainer-B-nQmUub.js";let F=class extends T{constructor(e,i,r,s,n,o,a=null){super(e,i,r,s,n,o),this.bitmap=new I(a),this.bitmap.coordScale=[n,o],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:m(),tileMat3:m()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}},L=class extends A{get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){const i=this.tileInfoView.getTileBounds(M(),e),r=this.tileInfoView.getTileResolution(e.level),[s,n]=this.tileInfoView.tileInfo.size;return new F(e,r,i[0],i[3],s,n)}prepareRenderPasses(e){const i=e.registerRenderPass({name:"bitmap (tile)",brushes:[$.bitmap],target:()=>this.children.map(r=>r.bitmap),drawPhase:c.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===c.MAP&&super.doRender(e)}};const z=t=>{let e=class extends t{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new L(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var i;this.container.removeChild(this._bitmapView),(i=this._bitmapView)==null||i.removeAllChildren(),this._bitmapView=null}};return e=V([y("esri.views.2d.layers.BitmapTileLayerView2D")],e),e};function P(t){return t instanceof HTMLImageElement?t.naturalWidth:t.width}function _(t){return t instanceof HTMLImageElement?t.naturalHeight:t.height}function X(t,e,i,r){if(i.level===r.level)return e;const s=t.tileInfo.size,n=t.getTileResolution(i.level),o=t.getTileResolution(r.level);let a=t.getLODInfoAt(r.level);const p=a.getXForColumn(r.col),u=a.getYForRow(r.row);a=t.getLODInfoAt(i.level);const f=a.getXForColumn(i.col),w=a.getYForRow(i.row),l=P(e)/s[0],h=_(e)/s[1],b=Math.round(l*((p-f)/n)),g=Math.round(h*(-(u-w)/n)),R=Math.round(l*s[0]*(o/n)),v=Math.round(h*s[1]*(o/n)),d=C(s);return d.getContext("2d").drawImage(e,b,g,R,v,0,0,s[0],s[1]),d}function C(t){const e=document.createElement("canvas");return[e.width,e.height]=t,e}export{X as n,C as o,z as r};
//# sourceMappingURL=imageUtils-BzN3F6QX.js.map
