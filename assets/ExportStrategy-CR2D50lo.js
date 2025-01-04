import{c6 as E,j as d,m as l,k as N,an as H,fc as R,w,cG as $,z as T,dP as q,f1 as z}from"./index-CJT1kG3U.js";import{z as k}from"./TileInfo-D2mG8glk.js";import{S as B}from"./Bitmap-D55y_rwP.js";import{h as C}from"./Tile-BjB8ZBu2.js";import{e as I}from"./TileKey-DlQpmfZ8.js";const U=Math.PI/180;function j(i){return i*U}function A(i,e){const r=j(e.rotation),t=Math.abs(Math.cos(r)),s=Math.abs(Math.sin(r)),[o,n]=e.size;return i[0]=Math.round(n*s+o*t),i[1]=Math.round(n*t+o*s),i}function G(i,e,r,t){const[s,o]=e,[n,a]=t,c=.5*r;return i[0]=s-c*n,i[1]=o-c*a,i[2]=s+c*n,i[3]=o+c*a,i}const u=E(),m=[0,0],_=new I(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let h=class extends H{constructor(i){super(i),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=R(async(e,r)=>{if(w(r),!e.stationary||this.destroyed)return;const t=e.state,s=$(t.spatialReference),o=this.hidpi?e.pixelRatio:1,n=t.worldScreenWidth>0,a=n&&this.imageNormalizationSupported&&t.worldScreenWidth<t.size[0],c=Math.round((this.imageMaxWidth??0)/o),f=Math.round((this.imageMaxHeight??0)/o);a?(m[0]=t.worldScreenWidth,m[1]=t.size[1]):this.imageRotationSupported?(m[0]=t.size[0],m[1]=t.size[1]):A(m,t);const M=Math.floor(m[0])>c||Math.floor(m[1])>f,S=s&&(t.extent.xmin<s.valid[0]||t.extent.xmax>s.valid[1]),v=!this.imageNormalizationSupported&&S,x=!M&&!v,W=this.imageRotationSupported?t.rotation:0,b=this.container.children.slice();if(x){const p=a?t.paddedViewState.center:t.center;this._imagePromise=this._singleExport(t,m,p,t.resolution,W,o,r)}else{let p=Math.min(c,f);n&&(p=Math.min(t.worldScreenWidth,p),p=Math.round(t.worldScreenWidth/Math.ceil(t.worldScreenWidth/p))),this._imagePromise=this._tiledExport(t,p,o,r)}try{const p=await this._imagePromise??[];w(r);const P=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=p;for(const g of b)p.includes(g)||P.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of p)P.push(g.fadeIn());await Promise.all(P)}catch(p){this._imagePromise=null,T(p)}},5e3),this.updateExports=R(async e=>{const r=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;r.push(e(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=q(r).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(i=>i.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(i,e,r,t,s,o){const n=await this.fetchSource(i,Math.floor(e*s),Math.floor(r*s),{rotation:t,pixelRatio:s,signal:o});w(o);const a=new B(null,!0);return a.x=i.xmin,a.y=i.ymax,a.resolution=i.width/e,a.rotation=t,a.pixelRatio=s,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),w(o),a}async _singleExport(i,e,r,t,s,o,n){G(u,r,t,e);const a=z(u,i.spatialReference);return[await this._export(a,e[0],e[1],s,o,n)]}_tiledExport(i,e,r,t){const s=k.create({size:e,spatialReference:i.spatialReference,scales:[i.scale]}),o=new C(s),n=o.getTileCoverage(i);if(!n)return null;const a=[];return n.forEach((c,f,M,S)=>{_.set(c,f,M,0),o.getTileBounds(u,_);const v=z(u,i.spatialReference);a.push(this._export(v,e,e,0,r,t).then(x=>(S!==0&&(_.set(c,f,M,S),o.getTileBounds(u,_),x.x=u[0],x.y=u[3]),x)))}),Promise.all(a)}};d([l()],h.prototype,"_imagePromise",void 0),d([l()],h.prototype,"bitmaps",void 0),d([l()],h.prototype,"container",void 0),d([l()],h.prototype,"fetchSource",void 0),d([l()],h.prototype,"hidpi",void 0),d([l()],h.prototype,"imageMaxWidth",void 0),d([l()],h.prototype,"imageMaxHeight",void 0),d([l()],h.prototype,"imageRotationSupported",void 0),d([l()],h.prototype,"imageNormalizationSupported",void 0),d([l()],h.prototype,"requestUpdate",void 0),d([l()],h.prototype,"updating",null),h=d([N("esri.views.2d.layers.support.ExportStrategy")],h);const K=h;export{K as _};
//# sourceMappingURL=ExportStrategy-CR2D50lo.js.map
