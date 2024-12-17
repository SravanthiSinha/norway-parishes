import{c3 as E,j as d,m as l,k as N,ar as H,f6 as z,w,cD as $,z as T,dO as q,e_ as P}from"./index-BB6xpuj5.js";import{z as k}from"./TileInfo-DckZPgmV.js";import{S as B}from"./Bitmap-_yYvhRdM.js";import{h as C}from"./Tile-CSO7o2Lx.js";import{e as I}from"./TileKey-bsr5k5kR.js";const O=Math.PI/180;function U(e){return e*O}function j(e,i){const r=U(i.rotation),t=Math.abs(Math.cos(r)),s=Math.abs(Math.sin(r)),[o,n]=i.size;return e[0]=Math.round(n*s+o*t),e[1]=Math.round(n*t+o*s),e}function A(e,i,r,t){const[s,o]=i,[n,a]=t,c=.5*r;return e[0]=s-c*n,e[1]=o-c*a,e[2]=s+c*n,e[3]=o+c*a,e}const u=E(),m=[0,0],_=new I(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let h=class extends H{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=z(async(i,r)=>{if(w(r),!i.stationary||this.destroyed)return;const t=i.state,s=$(t.spatialReference),o=this.hidpi?i.pixelRatio:1,n=t.worldScreenWidth>0,a=n&&this.imageNormalizationSupported&&t.worldScreenWidth<t.size[0],c=Math.round((this.imageMaxWidth??0)/o),f=Math.round((this.imageMaxHeight??0)/o);a?(m[0]=t.worldScreenWidth,m[1]=t.size[1]):this.imageRotationSupported?(m[0]=t.size[0],m[1]=t.size[1]):j(m,t);const M=Math.floor(m[0])>c||Math.floor(m[1])>f,S=s&&(t.extent.xmin<s.valid[0]||t.extent.xmax>s.valid[1]),v=!this.imageNormalizationSupported&&S,x=!M&&!v,W=this.imageRotationSupported?t.rotation:0,b=this.container.children.slice();if(x){const p=a?t.paddedViewState.center:t.center;this._imagePromise=this._singleExport(t,m,p,t.resolution,W,o,r)}else{let p=Math.min(c,f);n&&(p=Math.min(t.worldScreenWidth,p),p=Math.round(t.worldScreenWidth/Math.ceil(t.worldScreenWidth/p))),this._imagePromise=this._tiledExport(t,p,o,r)}try{const p=await this._imagePromise??[];w(r);const R=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=p;for(const g of b)p.includes(g)||R.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of p)R.push(g.fadeIn());await Promise.all(R)}catch(p){this._imagePromise=null,T(p)}},5e3),this.updateExports=z(async i=>{const r=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;r.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=q(r).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,r,t,s,o){const n=await this.fetchSource(e,Math.floor(i*s),Math.floor(r*s),{rotation:t,pixelRatio:s,signal:o});w(o);const a=new B(null,!0);return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/i,a.rotation=t,a.pixelRatio=s,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),w(o),a}async _singleExport(e,i,r,t,s,o,n){A(u,r,t,i);const a=P(u,e.spatialReference);return[await this._export(a,i[0],i[1],s,o,n)]}_tiledExport(e,i,r,t){const s=k.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new C(s),n=o.getTileCoverage(e);if(!n)return null;const a=[];return n.forEach((c,f,M,S)=>{_.set(c,f,M,0),o.getTileBounds(u,_);const v=P(u,e.spatialReference);a.push(this._export(v,i,i,0,r,t).then(x=>(S!==0&&(_.set(c,f,M,S),o.getTileBounds(u,_),x.x=u[0],x.y=u[3]),x)))}),Promise.all(a)}};d([l()],h.prototype,"_imagePromise",void 0),d([l()],h.prototype,"bitmaps",void 0),d([l()],h.prototype,"container",void 0),d([l()],h.prototype,"fetchSource",void 0),d([l()],h.prototype,"hidpi",void 0),d([l()],h.prototype,"imageMaxWidth",void 0),d([l()],h.prototype,"imageMaxHeight",void 0),d([l()],h.prototype,"imageRotationSupported",void 0),d([l()],h.prototype,"imageNormalizationSupported",void 0),d([l()],h.prototype,"requestUpdate",void 0),d([l()],h.prototype,"updating",null),h=d([N("esri.views.2d.layers.support.ExportStrategy")],h);const K=h;export{K as _};