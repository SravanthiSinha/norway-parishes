import{j as r,hp as z,v as Q,ho as J,cD as V,hq as X,hr as G}from"./index-XUmwAfbD.js";import{o as Y,i as Z,M as tt,f as et,h as ot}from"./mat3-CYE1QlB-.js";import{e as st,E as it}from"./MapView-Cna9bwmC.js";import{t as rt}from"./vec2f32-BbH2jxlN.js";import{r as nt}from"./vec3f32-nZdmKIgz.js";import{n as at}from"./WGLContainer-hpEnNvRV.js";import{t as pt,a as q,i as dt}from"./FeatureCommandQueue-jGcW7u0q.js";import{h as L,C as w,g as a,t as ht,j as P,S as lt,m as B,I as ct,v as ut,P as W,a as ft,b as vt,G as mt,H as xt,l as yt,w as wt,e as gt}from"./UpdateTracking2D-DOBUIUAc.js";import{O as _t,I as A,C as U,E as Mt}from"./enums-Dk3osxpS.js";class I extends ct{}r([L(0,w)],I.prototype,"pos",void 0),r([L(1,w)],I.prototype,"uv",void 0);class $t extends ut{}class F extends W{}r([a(ht)],F.prototype,"dvs",void 0);class m extends W{}r([a(w)],m.prototype,"perspective",void 0),r([a(w)],m.prototype,"texSize",void 0),r([a(P)],m.prototype,"wrapAroundShift",void 0),r([a(P)],m.prototype,"opacity",void 0),r([a(lt)],m.prototype,"texture",void 0);class y extends ft{vertex(e){const t=e.uv.divide(this.config.texSize),o=new P(1).add(vt(t,this.config.perspective)),s=new mt(e.pos.add(new w(this.config.wrapAroundShift,0)),1),i=this.transform.dvs.multiply(s);return{uv:t,glPosition:new xt(i.xy.multiply(o),0,o)}}fragment(e){const t=yt(this.config.texture,e.uv).multiply(this.config.opacity),o=new wt;return o.glFragColor=t,o}}r([a(F)],y.prototype,"transform",void 0),r([a(m)],y.prototype,"config",void 0),r([z(0,B(I))],y.prototype,"vertex",null),r([z(0,B($t))],y.prototype,"fragment",null);let St=class extends pt{constructor(){super(...arguments),this.type=gt.Overlay,this._mesh=null,this.shaders={overlay:new y}}render(e,t){const{context:o,painter:s}=e,i=this._getMesh(e,t);s.setPipelineState(q);const{isWrapAround:p,wrapAroundShift:c}=t.config,u={...t.config,wrapAroundShift:0},f={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:u},defines:null,optionalAttributes:null,useComputeBuffer:!1};s.setPipelineState({...q,stencil:{write:!1,test:{compare:_t.EQUAL,op:{fail:A.KEEP,zFail:A.KEEP,zPass:A.REPLACE},ref:0,mask:255}}}),s.submitDrawMeshUntyped(o,f,i),p&&(u.wrapAroundShift=c,s.submitDrawMeshUntyped(o,f,i))}shutdown(){Q(this._mesh)}_getMesh(e,t){const{context:o}=e;if(this._mesh){const s=this._mesh.vertexBuffers.get("positions");if(!s)throw new Error("Buffer not found");s.setData(t.position)}else{const s=t.index!=null?t.index.length:t.position.length/2;this._mesh=new dt(o,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:U.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:U.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:Mt.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:s}]})}return this._mesh}};class Tt extends at{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=st(),this._overlayTechnique=new St}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==it.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const o of this.children)o.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:o,size:s,pixelRatio:i,resolution:p,rotation:c,viewpoint:u,displayMat3:f}=t;if(this._viewStateId===o)return;const g=G(c),d=i*s[0],v=i*s[1];this._localOrigin=u.targetGeometry.clone();const{x,y:$}=this._localOrigin,_=J(x,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=$;const S=p*d,O=p*v,n=Y(this._dvsMat3);Z(n,n,f),tt(n,n,rt(d/2,v/2)),et(n,n,nt(d/S,-v/O,1)),ot(n,n,-g),this._viewStateId=o}_updateOverlays(e,t){const{state:o}=e,{rotation:s,spatialReference:i,worldScreenWidth:p,size:c,viewpoint:u}=o,f=this._localOrigin;let g,d=0;const v=V(i);if(v&&i.isWrappable){const x=c[0],$=c[1],_=G(s),S=Math.abs(Math.cos(_)),O=Math.abs(Math.sin(_)),n=Math.round(x*S+$*O),[j,C]=v.valid,h=X(i),{x:D,y:H}=u.targetGeometry,N=[D,H],b=[0,0];o.toScreen(b,N);const M=[0,0];let E;E=n>p?.5*p:.5*n;const T=Math.floor((D+.5*h)/h),K=j+T*h,k=C+T*h,R=[b[0]+E,0];o.toMap(M,R),M[0]>k&&(d=h),R[0]=b[0]-E,o.toMap(M,R),M[0]<K&&(d=-h),g={worldWidth:h,xBounds:[j,C]}}for(const x of t)x.updateDrawCoords(f,d,i,g)}}export{Tt as u};
//# sourceMappingURL=OverlayContainer-BNDqA0Zf.js.map